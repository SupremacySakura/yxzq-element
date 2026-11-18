import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import {
  createFloating,
  type FloatingController,
} from "../internal/floating.js";

export const SUPER_POPOVER_PLACEMENTS = [
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
] as const;

export const SUPER_POPOVER_TRIGGERS = ["click", "hover", "manual"] as const;

export type SuperPopoverPlacement = (typeof SUPER_POPOVER_PLACEMENTS)[number];
export type SuperPopoverTrigger = (typeof SUPER_POPOVER_TRIGGERS)[number];

export interface SuperPopoverOpenChangeDetail {
  open: boolean;
}

const NATIVE_ACTIVATION_SELECTOR =
  "button, a[href], input, select, textarea, summary";
const HOVER_CLOSE_DELAY = 120;

let popoverId = 0;

export class SuperPopover extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    placement: { type: String, reflect: true },
    trigger: { type: String, reflect: true },
    title: { type: String, reflect: true },
    content: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    arrow: { type: Boolean, reflect: true },
    offset: { type: Number, reflect: true },
    width: { type: Number, reflect: true },
    closeOnOutsideClick: {
      type: Boolean,
      attribute: "close-on-outside-click",
      reflect: true,
    },
    closeOnEscape: {
      type: Boolean,
      attribute: "close-on-escape",
      reflect: true,
    },
  };

  declare open: boolean;
  declare placement: SuperPopoverPlacement;
  declare trigger: SuperPopoverTrigger;
  declare title: string;
  declare content: string;
  declare disabled: boolean;
  declare arrow: boolean;
  declare offset: number;
  declare width: number;
  declare closeOnOutsideClick: boolean;
  declare closeOnEscape: boolean;

  private readonly popoverId = `super-popover-${++popoverId}`;
  private readonly titleId = `${this.popoverId}-title`;
  private triggerElement: HTMLElement | null = null;
  private panelElement: HTMLElement | null = null;
  private floating: FloatingController | null = null;
  private hoverCloseTimer: number | undefined;
  private focusPanelOnOpen = false;
  private contentSlotHasContent = false;
  private triggerAria:
    | {
        expanded: string | null;
        haspopup: string | null;
        controls: string | null;
      }
    | null = null;

  constructor() {
    super();
    this.open = false;
    this.placement = "bottom";
    this.trigger = "click";
    this.title = "";
    this.content = "";
    this.disabled = false;
    this.arrow = true;
    this.offset = 8;
    this.width = 280;
    this.closeOnOutsideClick = true;
    this.closeOnEscape = true;
  }

  static styles = css`
    :host {
      --super-popover-background: var(--super-background-color, #fffef9);
      --super-popover-color: var(--super-text-color-primary, #292524);
      --super-popover-content-color: var(--super-text-color-regular, #4a4441);
      --super-popover-border-color: var(--super-border-color, #2f2a27);
      --super-popover-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-popover-focus-color: var(--super-focus-color, #56c6b7);
      --super-popover-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-md, 9px);
      --super-popover-font-size: var(--super-font-size-base, 14px);
      --super-popover-title-size: var(--super-font-size-lg, 16px);
      --super-popover-padding-block: var(--super-spacing-md, 12px);
      --super-popover-padding-inline: var(--super-spacing-lg, 16px);
      --super-popover-gap: var(--super-spacing-sm, 8px);
      --super-popover-content-max-height: min(60vh, 420px);
      --super-popover-arrow-size: 10px;
      --super-popover-z-index: var(--super-z-index-overlay, 2000);
      --super-popover-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-popover-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-popover-font-size);
      line-height: 1.5;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    slot {
      display: contents;
    }

    .popover {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-popover-z-index);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-popover-gap);
      max-inline-size: calc(100vw - 16px);
      padding: var(--super-popover-padding-block)
        var(--super-popover-padding-inline);
      color: var(--super-popover-color);
      font-family: inherit;
      font-size: var(--super-popover-font-size);
      overflow-wrap: anywhere;
      background: var(--super-popover-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-radius: var(--super-popover-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-popover-shadow-color);
      transform: rotate(var(--super-popover-rotation));
      transform-origin: center;
    }

    .popover:focus {
      outline: none;
    }

    .popover:focus-visible {
      outline: 3px solid var(--super-popover-focus-color);
      outline-offset: 3px;
    }

    .title {
      margin: 0;
      color: var(--super-popover-color);
      font-size: var(--super-popover-title-size);
      font-weight: 700;
      line-height: 1.35;
    }

    .content {
      max-block-size: var(--super-popover-content-max-height);
      overflow: auto;
      color: var(--super-popover-content-color);
      overscroll-behavior: contain;
    }

    .arrow {
      position: absolute;
      box-sizing: border-box;
      inline-size: var(--super-popover-arrow-size);
      block-size: var(--super-popover-arrow-size);
      background: var(--super-popover-background);
    }

    .popover[data-placement^="top"] .arrow {
      bottom: calc(var(--super-popover-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-popover-arrow-size) / -2);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="bottom"] .arrow {
      top: calc(var(--super-popover-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-popover-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="left"] .arrow {
      top: 50%;
      right: calc(var(--super-popover-arrow-size) / -2);
      margin-block-start: calc(var(--super-popover-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="right"] .arrow {
      top: 50%;
      left: calc(var(--super-popover-arrow-size) / -2);
      margin-block-start: calc(var(--super-popover-arrow-size) / -2);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .popover {
        transform: none;
      }
    }
  `;

  private get panel(): HTMLElement | null {
    return this.renderRoot.querySelector<HTMLElement>('[part="popover"]');
  }

  private getSlottedTrigger(): HTMLElement | null {
    const slot = this.renderRoot.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );
    return (
      (slot?.assignedElements({ flatten: true })[0] as
        | HTMLElement
        | undefined) ?? null
    );
  }

  private clearHoverCloseTimer(): void {
    const view = this.ownerDocument.defaultView;
    if (this.hoverCloseTimer !== undefined) {
      view?.clearTimeout(this.hoverCloseTimer);
      this.hoverCloseTimer = undefined;
    }
  }

  private scheduleHoverClose(): void {
    this.clearHoverCloseTimer();
    const view = this.ownerDocument.defaultView;
    if (!view) {
      this.setOpen(false);
      return;
    }

    this.hoverCloseTimer = view.setTimeout(() => {
      this.hoverCloseTimer = undefined;
      this.setOpen(false);
    }, HOVER_CLOSE_DELAY);
  }

  private setOpen(
    nextOpen: boolean,
    options: { focusPanel?: boolean } = {},
  ): void {
    if (nextOpen && this.disabled) {
      return;
    }
    if (this.open === nextOpen) {
      return;
    }

    this.focusPanelOnOpen = nextOpen && Boolean(options.focusPanel);
    this.open = nextOpen;
    this.dispatchEvent(
      new CustomEvent<SuperPopoverOpenChangeDetail>(
        "super-popover-open-change",
        {
          detail: { open: nextOpen },
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  private focusTrigger(): void {
    this.triggerElement?.focus({ preventScroll: true });
  }

  private isInsidePopover(node: EventTarget | null): boolean {
    return (
      node instanceof Node &&
      (this === node ||
        this.contains(node) ||
        Boolean(this.shadowRoot?.contains(node)))
    );
  }

  private syncTriggerAria(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }

    trigger.setAttribute("aria-expanded", this.open ? "true" : "false");
    trigger.setAttribute("aria-haspopup", "dialog");

    if (this.open) {
      trigger.setAttribute("aria-controls", this.popoverId);
    } else if (this.triggerAria?.controls) {
      trigger.setAttribute("aria-controls", this.triggerAria.controls);
    } else {
      trigger.removeAttribute("aria-controls");
    }
  }

  private restoreTriggerAria(): void {
    const trigger = this.triggerElement;
    const original = this.triggerAria;
    if (!trigger || !original) {
      return;
    }

    const restore = (name: string, value: string | null): void => {
      if (value === null) {
        trigger.removeAttribute(name);
      } else {
        trigger.setAttribute(name, value);
      }
    };

    restore("aria-expanded", original.expanded);
    restore("aria-haspopup", original.haspopup);
    restore("aria-controls", original.controls);
  }

  private bindTrigger(nextTrigger: HTMLElement | null): void {
    if (nextTrigger === this.triggerElement) {
      this.syncTriggerAria();
      return;
    }

    this.unbindTrigger();
    if (!nextTrigger) {
      return;
    }

    this.triggerElement = nextTrigger;
    this.triggerAria = {
      expanded: nextTrigger.getAttribute("aria-expanded"),
      haspopup: nextTrigger.getAttribute("aria-haspopup"),
      controls: nextTrigger.getAttribute("aria-controls"),
    };

    nextTrigger.addEventListener("click", this.handleClick);
    nextTrigger.addEventListener("keydown", this.handleTriggerKeydown);
    nextTrigger.addEventListener("pointerenter", this.handlePointerEnter);
    nextTrigger.addEventListener("pointerleave", this.handlePointerLeave);
    nextTrigger.addEventListener("focusin", this.handleFocusIn);
    nextTrigger.addEventListener("focusout", this.handleFocusOut);
    this.syncTriggerAria();
  }

  private unbindTrigger(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }

    trigger.removeEventListener("click", this.handleClick);
    trigger.removeEventListener("keydown", this.handleTriggerKeydown);
    trigger.removeEventListener("pointerenter", this.handlePointerEnter);
    trigger.removeEventListener("pointerleave", this.handlePointerLeave);
    trigger.removeEventListener("focusin", this.handleFocusIn);
    trigger.removeEventListener("focusout", this.handleFocusOut);
    this.restoreTriggerAria();
    this.triggerElement = null;
    this.triggerAria = null;
  }

  private attachPanelListeners(): void {
    const panel = this.panel;
    if (!panel || panel === this.panelElement) {
      return;
    }

    this.detachPanelListeners();
    this.panelElement = panel;
    panel.addEventListener("pointerenter", this.handlePanelPointerEnter);
    panel.addEventListener("pointerleave", this.handlePanelPointerLeave);
    panel.addEventListener("focusin", this.handlePanelFocusIn);
    panel.addEventListener("focusout", this.handlePanelFocusOut);
  }

  private detachPanelListeners(): void {
    const panel = this.panelElement;
    if (!panel) {
      return;
    }

    panel.removeEventListener("pointerenter", this.handlePanelPointerEnter);
    panel.removeEventListener("pointerleave", this.handlePanelPointerLeave);
    panel.removeEventListener("focusin", this.handlePanelFocusIn);
    panel.removeEventListener("focusout", this.handlePanelFocusOut);
    this.panelElement = null;
  }

  private destroyFloating(): void {
    this.floating?.destroy();
    this.floating = null;
  }

  private startFloating(): void {
    this.destroyFloating();
    const anchor = this.triggerElement;
    const floating = this.panelElement;
    if (!anchor || !floating) {
      return;
    }

    floating.style.position = "fixed";
    floating.style.left = "0px";
    floating.style.top = "0px";

    this.floating = createFloating(anchor, floating, {
      placement: this.placement,
      offset: this.offset,
    });
  }

  private activateOpenState(): void {
    this.attachPanelListeners();
    this.startFloating();
    this.syncTriggerAria();

    if (this.focusPanelOnOpen) {
      this.focusPanelOnOpen = false;
      this.panelElement?.focus({ preventScroll: true });
    }
  }

  private deactivateOpenState(): void {
    this.destroyFloating();
    this.detachPanelListeners();
    this.focusPanelOnOpen = false;
    this.syncTriggerAria();
  }

  private handleTriggerSlotChange = (): void => {
    this.bindTrigger(this.getSlottedTrigger());
    if (this.open) {
      if (this.triggerElement) {
        this.startFloating();
      } else {
        this.destroyFloating();
      }
    }
  };

  private handleContentSlotChange = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasContent = slot
      .assignedNodes({ flatten: true })
      .some(
        (node) =>
          node.nodeType !== Node.TEXT_NODE ||
          Boolean(node.textContent?.trim()),
      );

    if (hasContent !== this.contentSlotHasContent) {
      this.contentSlotHasContent = hasContent;
      this.requestUpdate();
    }
  };

  private hasNativeActivation(
    event: KeyboardEvent,
    trigger: HTMLElement,
  ): boolean {
    if (trigger.matches(NATIVE_ACTIVATION_SELECTOR)) {
      return true;
    }

    return event
      .composedPath()
      .some(
        (node) =>
          node instanceof HTMLElement &&
          node !== trigger &&
          node.matches(NATIVE_ACTIVATION_SELECTOR),
      );
  }

  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.trigger !== "click") {
      return;
    }

    const trigger = this.triggerElement;
    if (!trigger || !event.composedPath().includes(trigger)) {
      return;
    }

    this.clearHoverCloseTimer();
    const nextOpen = !this.open;
    this.setOpen(nextOpen, {
      focusPanel: nextOpen && event.detail === 0,
    });
  };

  private handleTriggerKeydown = (event: KeyboardEvent): void => {
    if (
      this.disabled ||
      this.trigger !== "click" ||
      event.repeat ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      (event.key !== "Enter" && event.key !== " ")
    ) {
      return;
    }

    const trigger = this.triggerElement;
    if (!trigger || this.hasNativeActivation(event, trigger)) {
      return;
    }

    event.preventDefault();
    const nextOpen = !this.open;
    this.setOpen(nextOpen, { focusPanel: nextOpen });
  };

  private handlePointerEnter = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
    this.setOpen(true);
  };

  private handlePointerLeave = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.scheduleHoverClose();
  };

  private handleFocusIn = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
    this.setOpen(true);
  };

  private handleFocusOut = (event: FocusEvent): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }
    if (this.isInsidePopover(event.relatedTarget)) {
      return;
    }

    this.scheduleHoverClose();
  };

  private handlePanelPointerEnter = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
  };

  private handlePanelPointerLeave = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.scheduleHoverClose();
  };

  private handlePanelFocusIn = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
  };

  private handlePanelFocusOut = (event: FocusEvent): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }
    if (this.isInsidePopover(event.relatedTarget)) {
      return;
    }

    this.scheduleHoverClose();
  };

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || !this.closeOnOutsideClick) {
      return;
    }
    if (!event.composedPath().includes(this)) {
      this.clearHoverCloseTimer();
      this.setOpen(false);
    }
  };

  private handleDocumentKeydown = (event: KeyboardEvent): void => {
    if (!this.open || !this.closeOnEscape || event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    this.clearHoverCloseTimer();
    this.setOpen(false);
    if (!this.open) {
      this.focusTrigger();
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.ownerDocument.addEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    this.ownerDocument.addEventListener(
      "keydown",
      this.handleDocumentKeydown,
      true,
    );

    if (this.hasUpdated) {
      this.bindTrigger(this.getSlottedTrigger());
      if (this.open) {
        void this.updateComplete.then(() => {
          if (this.open) {
            this.activateOpenState();
          }
        });
      }
    }
  }

  override disconnectedCallback(): void {
    this.clearHoverCloseTimer();
    this.deactivateOpenState();
    this.unbindTrigger();
    this.ownerDocument.removeEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    this.ownerDocument.removeEventListener(
      "keydown",
      this.handleDocumentKeydown,
      true,
    );
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (this.disabled && this.open) {
      this.clearHoverCloseTimer();
      this.open = false;
      this.focusPanelOnOpen = false;
    }

    if (
      changedProperties.has("trigger") &&
      changedProperties.get("trigger") !== undefined &&
      this.open
    ) {
      this.clearHoverCloseTimer();
      this.open = false;
      this.focusPanelOnOpen = false;
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    this.syncTriggerAria();
    const openChanged = changedProperties.has("open");

    if (!this.open) {
      if (
        openChanged ||
        changedProperties.has("disabled") ||
        changedProperties.has("trigger")
      ) {
        this.deactivateOpenState();
      }
      return;
    }

    if (openChanged) {
      this.activateOpenState();
      return;
    }

    if (
      changedProperties.has("placement") ||
      changedProperties.has("offset")
    ) {
      this.startFloating();
    } else if (changedProperties.has("width")) {
      void this.floating?.update();
    }
  }

  protected render() {
    const width =
      Number.isFinite(this.width) && this.width > 0
        ? `${Math.round(this.width)}px`
        : "auto";
    const hasContentSlot = this.contentSlotHasContent;

    return html`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open
        ? html`
            <div
              class="popover"
              part="popover"
              id=${this.popoverId}
              role="dialog"
              tabindex="-1"
              data-placement=${this.placement}
              aria-labelledby=${this.title ? this.titleId : nothing}
              aria-label=${!this.title && !hasContentSlot && this.content
                ? this.content
                : nothing}
              style=${`inline-size: ${width}`}
            >
              ${this.title
                ? html`
                    <div class="title" part="title" id=${this.titleId}>
                      ${this.title}
                    </div>
                  `
                : nothing}
              <div class="content" part="content">
                <slot
                  name="content"
                  @slotchange=${this.handleContentSlotChange}
                >${hasContentSlot ? nothing : this.content}</slot>
              </div>
              ${this.arrow
                ? html`
                    <span
                      class="arrow"
                      part="arrow"
                      aria-hidden="true"
                    ></span>
                  `
                : nothing}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-popover": SuperPopover;
  }

  interface HTMLElementEventMap {
    "super-popover-open-change": CustomEvent<SuperPopoverOpenChangeDetail>;
  }
}
