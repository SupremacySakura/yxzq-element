import { css, html, LitElement, nothing, unsafeCSS } from "lit";
import {
  createControlledValueGuard,
  createFocusTrap,
  getFocusableElements,
  lockScroll,
  paperTexture,
  runAttributeWrite,
  type FocusTrap,
  sketchyShadow,
} from "@yxzq-element/utils";
import {
  ComposedFocusScope,
  booleanAttribute,
  dispatchModalClose,
  trueBooleanAttribute,
} from "../internal/modal.js";

export const SUPER_DRAWER_PLACEMENTS = [
  "left",
  "right",
  "top",
  "bottom",
] as const;
export const SUPER_DRAWER_SIZES = ["small", "medium", "large"] as const;
export const SUPER_DRAWER_CLOSE_REASONS = [
  "escape",
  "mask",
  "close-button",
  "confirm",
  "cancel",
] as const;

export type SuperDrawerPlacement = (typeof SUPER_DRAWER_PLACEMENTS)[number];
export type SuperDrawerSize = (typeof SUPER_DRAWER_SIZES)[number];
export type SuperDrawerCloseReason =
  (typeof SUPER_DRAWER_CLOSE_REASONS)[number];

export interface SuperDrawerBeforeCloseDetail {
  reason: SuperDrawerCloseReason;
}

export interface SuperDrawerCloseDetail {
  reason: SuperDrawerCloseReason;
}

let drawerId = 0;

export class SuperDrawer extends LitElement {
  static properties = {
    open: {
      type: Boolean,
      reflect: true,
      converter: booleanAttribute,
      noAccessor: true,
    },
    title: { type: String, reflect: true },
    placement: { type: String, reflect: true },
    size: {
      type: String,
      reflect: true,
      converter: {
        fromAttribute: (value: string | null): string | number | null => {
          if (value === null) {
            return "medium";
          }
          const number = Number(value);
          return value.trim() !== "" && Number.isFinite(number) ? number : value;
        },
        toAttribute: (value: string | number): string => String(value),
      },
    },
    closable: {
      type: Boolean,
      reflect: true,
      converter: trueBooleanAttribute,
      useDefault: true,
    },
    maskClosable: {
      type: Boolean,
      attribute: "mask-closable",
      reflect: true,
      converter: trueBooleanAttribute,
      useDefault: true,
    },
    closeOnEscape: {
      type: Boolean,
      attribute: "close-on-escape",
      reflect: true,
      converter: trueBooleanAttribute,
      useDefault: true,
    },
    closeLabel: { type: String, attribute: "close-label", reflect: true },
    showFooter: {
      type: Boolean,
      attribute: "show-footer",
      reflect: true,
      converter: trueBooleanAttribute,
      useDefault: true,
    },
    confirmText: { type: String, attribute: "confirm-text", reflect: true },
    cancelText: { type: String, attribute: "cancel-text", reflect: true },
    hasFooterSlot: { state: true },
  };

  declare title: string;
  declare placement: SuperDrawerPlacement;
  declare size: string | number;
  declare closable: boolean;
  declare maskClosable: boolean;
  declare closeOnEscape: boolean;
  declare closeLabel: string;
  declare showFooter: boolean;
  declare confirmText: string;
  declare cancelText: string;
  private declare hasFooterSlot: boolean;

  private readonly drawerId = `super-drawer-${++drawerId}`;
  private readonly titleId = `${this.drawerId}-title`;
  private readonly bodyId = `${this.drawerId}-body`;
  private _open = false;
  private readonly controlledOpenGuard = createControlledValueGuard<boolean>({
    host: this,
    getValue: () => this._open,
    setValue: (value) => this.setInternalOpen(value),
  });
  private focusTrap: FocusTrap | null = null;
  private releaseScroll: (() => void) | null = null;
  private triggerElement: HTMLElement | null = null;

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this.controlledOpenGuard.markExternal(value);
    this.setInternalOpen(value);
  }

  private setInternalOpen(value: boolean): void {
    const oldValue = this._open;
    this._open = value;
    this.requestUpdate("open", oldValue);
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    runAttributeWrite(() =>
      super.attributeChangedCallback(name, oldValue, newValue),
    );
  }

  constructor() {
    super();
    this.title = "";
    this.placement = "right";
    this.size = "medium";
    this.closable = true;
    this.maskClosable = true;
    this.closeOnEscape = true;
    this.closeLabel = "关闭抽屉";
    this.showFooter = true;
    this.confirmText = "确定";
    this.cancelText = "取消";
    this.hasFooterSlot = false;
  }

  static styles = css`
    :host {
      --super-drawer-size: 380px;
      --super-drawer-max-width: calc(100vw - 32px);
      --super-drawer-max-height: calc(100vh - 32px);
      --super-drawer-padding: var(--super-spacing-xl, 24px);
      --super-drawer-background: var(--super-background-color, #fffef9);
      --super-drawer-color: var(--super-text-color-primary, #292524);
      --super-drawer-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-drawer-border-color: var(--super-border-color, #2f2a27);
      --super-drawer-border-width: var(--super-sketch-width, 2px);
      --super-drawer-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-drawer-mask-background: rgb(41 37 36 / 46%);
      --super-drawer-focus-color: var(--super-focus-color, #56c6b7);
      --super-drawer-primary-color: var(--super-color-primary, #4b87f5);
      --super-drawer-primary-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-drawer-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-lg, 14px);
      --super-drawer-font-size: var(--super-font-size-base, 14px);
      --super-drawer-title-font-size: var(--super-font-size-lg, 16px);
      --super-drawer-z-index: var(--super-z-index-modal, 2100);
      --super-drawer-rotation: -0.14deg;

      display: contents;
      color: var(--super-drawer-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-drawer-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="small"]) {
      --super-drawer-size: 280px;
    }

    :host([size="large"]) {
      --super-drawer-size: 520px;
    }

    :host([placement="left"]),
    :host([placement="right"]) {
      --_super-drawer-length: var(--_super-drawer-size, var(--super-drawer-size));
    }

    :host([placement="top"]),
    :host([placement="bottom"]) {
      --_super-drawer-length: var(
        --_super-drawer-size,
        var(--super-drawer-size)
      );
    }

    .mask {
      position: fixed;
      inset: 0;
      z-index: var(--super-drawer-z-index);
      background: var(--super-drawer-mask-background);
      animation: super-drawer-mask-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .drawer {
      position: absolute;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      max-inline-size: var(--super-drawer-max-width);
      max-block-size: var(--super-drawer-max-height);
      overflow: hidden;
      color: var(--super-drawer-color);
      background: var(--super-drawer-background);
      border: var(--super-drawer-border-width) solid
        var(--super-drawer-border-color);
      border-radius: var(--super-drawer-radius);
      box-shadow: ${unsafeCSS(
        sketchyShadow({ color: "var(--super-drawer-shadow-color)" }),
      )};
      transform: rotate(var(--super-drawer-rotation));
      animation: super-drawer-panel-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .drawer::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${unsafeCSS(
        paperTexture({
          color: "var(--super-paper-texture, rgb(120 113 100 / 6%))",
        }),
      )};
    }

    :host([placement="right"]) .drawer {
      inset-block: 16px;
      inset-inline-end: 16px;
      inline-size: var(--_super-drawer-length);
    }

    :host([placement="left"]) .drawer {
      inset-block: 16px;
      inset-inline-start: 16px;
      inline-size: var(--_super-drawer-length);
    }

    :host([placement="top"]) .drawer {
      inset-block-start: 16px;
      inset-inline: 16px;
      block-size: var(--_super-drawer-length);
    }

    :host([placement="bottom"]) .drawer {
      inset-block-end: 16px;
      inset-inline: 16px;
      block-size: var(--_super-drawer-length);
    }

    .header {
      display: flex;
      flex: none;
      gap: var(--super-spacing-md, 12px);
      align-items: flex-start;
      justify-content: space-between;
      box-sizing: border-box;
      padding: var(--super-drawer-padding);
      padding-block-end: var(--super-spacing-md, 12px);
      border-block-end: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .title {
      min-inline-size: 0;
      margin: 0;
      color: var(--super-drawer-color);
      font-size: var(--super-drawer-title-font-size);
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 30px;
      block-size: 30px;
      margin: -5px -6px 0 0;
      padding: 0;
      color: var(--super-drawer-muted-color);
      font: inherit;
      font-size: 19px;
      line-height: 1;
      background: transparent;
      border: 1.5px solid transparent;
      border-radius: 7px 9px 6px 8px / 8px 6px 9px 7px;
      cursor: pointer;
    }

    .close:hover {
      color: var(--super-drawer-color);
      background: var(--super-background-color-soft, #f7f4ec);
      border-color: var(--super-drawer-border-color);
    }

    .close:focus-visible,
    .action:focus-visible {
      outline: 3px solid var(--super-drawer-focus-color);
      outline-offset: 2px;
    }

    .body {
      flex: 1 1 auto;
      min-block-size: 0;
      padding: var(--super-spacing-md, 12px) var(--super-drawer-padding)
        var(--super-drawer-padding);
      overflow: auto;
      overflow-wrap: anywhere;
    }

    .footer {
      display: flex;
      flex: none;
      flex-wrap: wrap;
      gap: var(--super-spacing-sm, 8px);
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: var(--super-spacing-md, 12px) var(--super-drawer-padding)
        var(--super-drawer-padding);
      border-block-start: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .action {
      box-sizing: border-box;
      min-block-size: 36px;
      padding: 6px 16px;
      color: var(--super-drawer-color);
      font: inherit;
      font-weight: 700;
      line-height: 1.3;
      background: var(--super-background-color, #fffef9);
      border: var(--super-drawer-border-width) solid
        var(--super-drawer-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 3px 0 -1px var(--super-drawer-shadow-color);
      cursor: pointer;
    }

    .action:hover {
      transform: translate(-1px, -1px) rotate(0.15deg);
    }

    .action:active {
      transform: translate(1px, 1px);
      box-shadow: none;
    }

    .action.primary {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-drawer-primary-color);
      border-color: var(--super-drawer-primary-border-color);
    }

    .visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    @keyframes super-drawer-mask-in {
      from {
        opacity: 0;
      }
    }

    @keyframes super-drawer-panel-in {
      from {
        opacity: 0;
        transform: translateX(10px) rotate(var(--super-drawer-rotation));
      }
    }

    :host([placement="left"]) .drawer {
      animation-name: super-drawer-panel-in-left;
    }

    :host([placement="top"]) .drawer {
      animation-name: super-drawer-panel-in-top;
    }

    :host([placement="bottom"]) .drawer {
      animation-name: super-drawer-panel-in-bottom;
    }

    @keyframes super-drawer-panel-in-left {
      from {
        opacity: 0;
        transform: translateX(-10px) rotate(var(--super-drawer-rotation));
      }
    }

    @keyframes super-drawer-panel-in-top {
      from {
        opacity: 0;
        transform: translateY(-10px) rotate(var(--super-drawer-rotation));
      }
    }

    @keyframes super-drawer-panel-in-bottom {
      from {
        opacity: 0;
        transform: translateY(10px) rotate(var(--super-drawer-rotation));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .mask,
      .drawer {
        animation: none;
      }

      .drawer {
        transform: none;
      }
    }

    @media (max-width: 560px) {
      :host {
        --super-drawer-padding: var(--super-spacing-lg, 16px);
        --super-drawer-max-width: calc(100vw - 24px);
        --super-drawer-max-height: calc(100vh - 24px);
      }

      :host([placement="right"]) .drawer,
      :host([placement="left"]) .drawer {
        inset-block: 12px;
        inline-size: calc(100vw - 24px);
      }

      :host([placement="right"]) .drawer {
        inset-inline-end: 12px;
      }

      :host([placement="left"]) .drawer {
        inset-inline-start: 12px;
      }

      :host([placement="top"]) .drawer,
      :host([placement="bottom"]) .drawer {
        inset-inline: 12px;
        block-size: calc(100vh - 24px);
      }

      :host([placement="top"]) .drawer {
        inset-block-start: 12px;
      }

      :host([placement="bottom"]) .drawer {
        inset-block-end: 12px;
      }
    }
  `;

  private get panel(): HTMLElement | null {
    return this.renderRoot.querySelector<HTMLElement>('[part="drawer"]');
  }

  private releaseOpenState(): void {
    this.focusTrap?.deactivate();
    this.focusTrap = null;
    this.releaseScroll?.();
    this.releaseScroll = null;
    this.triggerElement = null;
  }

  private activateOpenState(): void {
    if (!this.isConnected) {
      return;
    }

    const panel = this.panel;
    if (!panel || this.focusTrap) {
      return;
    }

    const active = this.ownerDocument.activeElement;
    this.triggerElement =
      active instanceof HTMLElement && !this.contains(active) ? active : null;

    this.releaseScroll = lockScroll();
    const scope = new ComposedFocusScope(this, panel);
    this.focusTrap = createFocusTrap(
      scope as unknown as HTMLElement,
      {
        initialFocus: panel,
        returnFocus: this.triggerElement,
      },
    );
    this.focusTrap.activate();
  }

  private close(reason: SuperDrawerCloseReason): void {
    if (!this.open) {
      return;
    }

    const controlledMutation = this.controlledOpenGuard.capture();
    const closed = dispatchModalClose({
      host: this,
      eventPrefix: "super-drawer",
      reason,
      close: () => {
        this.setInternalOpen(false);
      },
    });
    if (closed) {
      this.controlledOpenGuard.confirm(controlledMutation);
    }
  }

  private handleConfirm = (): void => {
    this.close("confirm");
  };

  private handleCancel = (): void => {
    this.close("cancel");
  };

  private handleMaskClick = (event: MouseEvent): void => {
    if (!this.maskClosable || event.target !== event.currentTarget) {
      return;
    }
    this.close("mask");
  };

  private handleDrawerKeydown = (event: KeyboardEvent): void => {
    if (
      event.key !== "Escape" ||
      !this.closeOnEscape ||
      event.defaultPrevented
    ) {
      return;
    }
    event.preventDefault();
    this.close("escape");
  };

  private handleTabKeydown = (event: KeyboardEvent): void => {
    if (!this.open || event.key !== "Tab" || event.defaultPrevented) {
      return;
    }

    const panel = this.panel;
    if (!panel) {
      return;
    }

    const scope = new ComposedFocusScope(this, panel);
    let active = this.ownerDocument.activeElement;
    while (active?.shadowRoot?.activeElement) {
      active = active.shadowRoot.activeElement;
    }
    const current = active as HTMLElement | null;

    if (!current || !scope.contains(current)) {
      return;
    }

    event.stopImmediatePropagation();

    const focusable = [
      ...getFocusableElements(panel),
      ...getFocusableElements(this),
    ].filter((element, index, elements) => elements.indexOf(element) === index);

    if (focusable.length === 0) {
      event.preventDefault();
      panel.focus();
      return;
    }

    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;

    if (!event.shiftKey && (current === last || !focusable.includes(current!))) {
      if (current !== first) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (event.shiftKey && (current === first || !focusable.includes(current!))) {
      event.preventDefault();
      last.focus();
    }
  };

  private handleFooterSlotChange = (event: Event): void => {
    const slot = event.target as HTMLSlotElement;
    this.hasFooterSlot = slot
      .assignedNodes({ flatten: true })
      .some(
        (node) =>
          node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
      );
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("keydown", this.handleDrawerKeydown);
    this.ownerDocument.addEventListener("keydown", this.handleTabKeydown, true);
    if (this.hasUpdated && this.open) {
      void this.updateComplete.then(() => {
        if (this.open) {
          this.activateOpenState();
        }
      });
    }
  }

  override disconnectedCallback(): void {
    this.releaseOpenState();
    this.controlledOpenGuard.dispose();
    this.removeEventListener("keydown", this.handleDrawerKeydown);
    this.ownerDocument.removeEventListener(
      "keydown",
      this.handleTabKeydown,
      true,
    );
    super.disconnectedCallback();
  }

  protected updated(): void {
    if (this.open) {
      this.activateOpenState();
    } else {
      this.releaseOpenState();
    }
  }

  protected render() {
    if (!this.open) {
      return nothing;
    }

    const size = Number.isFinite(this.size as number)
      ? `${Math.max(0, this.size as number)}px`
      : typeof this.size === "string" &&
          this.size !== "" &&
          !SUPER_DRAWER_SIZES.includes(this.size as SuperDrawerSize)
        ? this.size
        : undefined;
    const style = size ? `--_super-drawer-size: ${size};` : "";
    const showFooter = this.showFooter && !this.hasFooterSlot;

    return html`
      <div
        class="mask"
        part="mask"
        @click=${this.handleMaskClick}
      >
        <div
          class="drawer"
          part="drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby=${this.titleId}
          aria-describedby=${this.bodyId}
          tabindex="-1"
          style=${style}
        >
          <header class="header" part="header">
            <div class="title" part="title" id=${this.titleId}>
              <slot name="header">
                ${this.title !== ""
                  ? this.title
                  : html`<span class="visually-hidden">抽屉</span>`}
              </slot>
            </div>
            ${this.closable
              ? html`
                  <button
                    class="close"
                    part="close"
                    type="button"
                    aria-label=${this.closeLabel}
                    @click=${() => this.close("close-button")}
                  >
                    ×
                  </button>
                `
              : nothing}
          </header>
          <div class="body" part="body" id=${this.bodyId}>
            <slot></slot>
          </div>
          ${this.showFooter
            ? html`
                <footer class="footer" part="footer">
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}>
                    ${showFooter
                      ? html`
                          <button
                            class="action"
                            type="button"
                            @click=${this.handleCancel}
                          >
                            ${this.cancelText}
                          </button>
                          <button
                            class="action primary"
                            type="button"
                            @click=${this.handleConfirm}
                          >
                            ${this.confirmText}
                          </button>
                        `
                      : nothing}
                  </slot>
                </footer>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-drawer": SuperDrawer;
  }

  interface HTMLElementEventMap {
    "super-drawer-before-close": CustomEvent<SuperDrawerBeforeCloseDetail>;
    "super-drawer-close": CustomEvent<SuperDrawerCloseDetail>;
    "super-drawer-confirm": CustomEvent<SuperDrawerCloseDetail>;
    "super-drawer-cancel": CustomEvent<SuperDrawerCloseDetail>;
  }
}
