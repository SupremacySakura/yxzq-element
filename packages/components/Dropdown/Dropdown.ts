import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import {
  createControlledValueGuard,
  runAttributeWrite,
} from "@yxzq-element/utils";
import { createFloating, type FloatingController } from "../internal/floating.js";

export const SUPER_DROPDOWN_PLACEMENTS = [
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

export const SUPER_DROPDOWN_TRIGGERS = ["click", "hover", "manual"] as const;
export const SUPER_DROPDOWN_SIZES = ["large", "medium", "small"] as const;

export type SuperDropdownPlacement =
  (typeof SUPER_DROPDOWN_PLACEMENTS)[number];
export type SuperDropdownTrigger = (typeof SUPER_DROPDOWN_TRIGGERS)[number];
export type SuperDropdownSize = (typeof SUPER_DROPDOWN_SIZES)[number];

export interface SuperDropdownItem {
  key: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
}

export interface SuperDropdownSelectDetail {
  key: string;
}

export interface SuperDropdownOpenChangeDetail {
  open: boolean;
}

const NATIVE_ACTIVATION_SELECTOR =
  "button, a[href], input, select, textarea, summary";
const HOVER_CLOSE_DELAY = 120;

let dropdownId = 0;

type DropdownFocusTarget = "first" | "last" | "trigger" | "none";

interface DropdownTriggerAria {
  expanded: string | null;
  haspopup: string | null;
  controls: string | null;
  disabled: string | null;
}

export class SuperDropdown extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true, noAccessor: true },
    items: { attribute: false },
    trigger: { type: String, reflect: true },
    placement: { type: String, reflect: true },
    closeOnSelect: {
      type: Boolean,
      attribute: "close-on-select",
      reflect: true,
    },
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
    disabled: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
  };

  declare items: SuperDropdownItem[];
  declare trigger: SuperDropdownTrigger;
  declare placement: SuperDropdownPlacement;
  declare closeOnSelect: boolean;
  declare closeOnOutsideClick: boolean;
  declare closeOnEscape: boolean;
  declare disabled: boolean;
  declare size: SuperDropdownSize;

  private readonly dropdownId = `super-dropdown-${++dropdownId}`;
  private _open = false;
  private readonly controlledOpenGuard = createControlledValueGuard<boolean>({
    host: this,
    getValue: () => this._open,
    setValue: (value) => this.setInternalOpen(value),
  });
  private triggerElement: HTMLElement | null = null;
  private menuElement: HTMLElement | null = null;
  private floating: FloatingController | null = null;
  private hoverCloseTimer: number | undefined;
  private pendingFocus: DropdownFocusTarget = "none";
  private triggerAria: DropdownTriggerAria | null = null;

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
    this.items = [];
    this.trigger = "click";
    this.placement = "bottom-start";
    this.closeOnSelect = true;
    this.closeOnOutsideClick = true;
    this.closeOnEscape = true;
    this.disabled = false;
    this.size = "medium";
  }

  static styles = css`
    :host {
      --super-dropdown-menu-min-width: 160px;
      --super-dropdown-menu-padding: var(--super-spacing-xs, 4px);
      --super-dropdown-item-gap: var(--super-spacing-sm, 8px);
      --super-dropdown-item-padding-block: 7px;
      --super-dropdown-item-padding-inline: 10px;
      --super-dropdown-font-size: var(--super-font-size-base, 14px);
      --super-dropdown-color: var(--super-text-color-primary, #292524);
      --super-dropdown-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-dropdown-background: var(--super-background-color, #fffef9);
      --super-dropdown-border-color: var(--super-border-color, #2f2a27);
      --super-dropdown-divider-color: var(--super-border-color-light, #b6ada6);
      --super-dropdown-hover-background: #eef5ff;
      --super-dropdown-focus-color: var(--super-focus-color, #56c6b7);
      --super-dropdown-danger-color: #cf3038;
      --super-dropdown-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-dropdown-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px);
      --super-dropdown-z-index: var(--super-z-index-overlay, 2000);
      --super-dropdown-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-dropdown-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-dropdown-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-dropdown-z-index);
    }

    .trigger {
      display: inline-flex;
      max-inline-size: 100%;
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-dropdown-z-index);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-inline-size: var(--super-dropdown-menu-min-width);
      max-inline-size: calc(100vw - 16px);
      max-block-size: min(60vh, 360px);
      margin: 0;
      padding: var(--super-dropdown-menu-padding);
      overflow: auto;
      overscroll-behavior: contain;
      color: var(--super-dropdown-color);
      background: var(--super-dropdown-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-dropdown-border-color);
      border-radius: var(--super-dropdown-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-dropdown-shadow-color);
      outline: none;
      transform: rotate(var(--super-dropdown-rotation));
      transform-origin: top center;
    }

    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-dropdown-item-gap);
      min-block-size: 32px;
      padding: var(--super-dropdown-item-padding-block)
        var(--super-dropdown-item-padding-inline);
      color: inherit;
      font: inherit;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
      cursor: pointer;
      outline: none;
      user-select: none;
    }

    .item:hover,
    .item:focus-visible,
    .item[data-active] {
      background: var(--super-dropdown-hover-background);
    }

    .item:focus-visible {
      outline: 2px solid var(--super-dropdown-focus-color);
      outline-offset: -2px;
    }

    .item[data-danger] {
      color: var(--super-dropdown-danger-color);
    }

    .item[aria-disabled="true"] {
      color: var(--super-dropdown-muted-color);
      cursor: not-allowed;
      opacity: 0.62;
    }

    .item[aria-disabled="true"]:hover,
    .item[aria-disabled="true"]:focus-visible {
      background: transparent;
    }

    .divider {
      block-size: 0;
      margin: 4px 6px;
      border-block-start: 1.5px dashed var(--super-dropdown-divider-color);
    }

    :host([size="large"]) {
      --super-dropdown-item-padding-block: 10px;
      --super-dropdown-item-padding-inline: 13px;
      --super-dropdown-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-dropdown-item-padding-block: 5px;
      --super-dropdown-item-padding-inline: 8px;
      --super-dropdown-font-size: var(--super-font-size-sm, 13px);
    }

    @media (prefers-reduced-motion: reduce) {
      .menu {
        transform: none;
      }
    }
  `;

  private get menuId(): string {
    return `${this.dropdownId}-menu`;
  }

  private get menuLabel(): string {
    return this.getAttribute("aria-label")?.trim() || "操作菜单";
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

  private focusTrigger(): void {
    this.triggerElement?.focus({ preventScroll: true });
  }

  private focusMenuEdge(edge: "first" | "last"): void {
    const items = this.enabledMenuItems;
    const item = edge === "first" ? items[0] : items.at(-1);
    item?.focus({ preventScroll: true });
  }

  private scheduleMenuFocus(edge: "first" | "last"): void {
    this.pendingFocus = edge;
    void this.updateComplete.then(() => {
      if (!this.open || this.pendingFocus !== edge) {
        return;
      }
      this.pendingFocus = "none";
      this.focusMenuEdge(edge);
    });
  }

  private setOpen(
    nextOpen: boolean,
    focus: DropdownFocusTarget = "none",
  ): void {
    if (nextOpen && this.disabled) {
      return;
    }
    if (this.open === nextOpen) {
      if (nextOpen && (focus === "first" || focus === "last")) {
        this.scheduleMenuFocus(focus);
      }
      return;
    }

    const controlledMutation = this.controlledOpenGuard.capture();
    this.pendingFocus = nextOpen ? focus : "none";
    this.setInternalOpen(nextOpen);
    this.dispatchEvent(
      new CustomEvent<SuperDropdownOpenChangeDetail>(
        "super-dropdown-open-change",
        {
          detail: { open: nextOpen },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.controlledOpenGuard.confirm(controlledMutation);

    if (!nextOpen && focus === "trigger") {
      this.focusTrigger();
    }
  }

  private get enabledMenuItems(): HTMLElement[] {
    return Array.from(
      this.renderRoot.querySelectorAll<HTMLElement>(
        '[part="menu"] [role="menuitem"]:not([aria-disabled="true"])',
      ),
    );
  }

  private moveMenuFocus(direction: 1 | -1): void {
    const items = this.enabledMenuItems;
    if (items.length === 0) {
      return;
    }

    const activeElement = (this.renderRoot as ShadowRoot).activeElement;
    const current = items.indexOf(activeElement as HTMLElement);
    const nextIndex =
      current < 0
        ? direction === 1
          ? 0
          : items.length - 1
        : (current + direction + items.length) % items.length;
    items[nextIndex]?.focus({ preventScroll: true });
  }

  private syncTriggerAria(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }

    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", this.open ? "true" : "false");

    if (this.open) {
      trigger.setAttribute("aria-controls", this.menuId);
    } else if (this.triggerAria?.controls) {
      trigger.setAttribute("aria-controls", this.triggerAria.controls);
    } else {
      trigger.removeAttribute("aria-controls");
    }

    if (this.disabled) {
      trigger.setAttribute("aria-disabled", "true");
    } else if (this.triggerAria?.disabled) {
      trigger.setAttribute("aria-disabled", this.triggerAria.disabled);
    } else {
      trigger.removeAttribute("aria-disabled");
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
    restore("aria-disabled", original.disabled);
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
      disabled: nextTrigger.getAttribute("aria-disabled"),
    };

    nextTrigger.addEventListener("click", this.handleTriggerClick);
    nextTrigger.addEventListener("keydown", this.handleTriggerKeydown);
    this.syncTriggerAria();
  }

  private unbindTrigger(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }

    trigger.removeEventListener("click", this.handleTriggerClick);
    trigger.removeEventListener("keydown", this.handleTriggerKeydown);
    this.restoreTriggerAria();
    this.triggerElement = null;
    this.triggerAria = null;
  }

  private destroyFloating(): void {
    this.floating?.destroy();
    this.floating = null;
  }

  private startFloating(): void {
    this.destroyFloating();
    const anchor = this.triggerElement;
    const menu = this.menuElement;
    if (!anchor || !menu) {
      return;
    }

    menu.style.position = "fixed";
    menu.style.left = "0px";
    menu.style.top = "0px";
    const width = anchor.getBoundingClientRect().width;
    if (width > 0) {
      menu.style.minInlineSize = `${Math.ceil(width)}px`;
    }

    this.floating = createFloating(anchor, menu, {
      placement: this.placement,
      offset: 6,
    });
  }

  private activateOpenState(): void {
    this.startFloating();
    const focus = this.pendingFocus;
    if (focus === "first" || focus === "last") {
      this.scheduleMenuFocus(focus);
    } else {
      this.pendingFocus = "none";
    }
  }

  private deactivateOpenState(): void {
    this.destroyFloating();
    this.pendingFocus = "none";
  }

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

  private handleTriggerClick = (event: MouseEvent): void => {
    if (this.disabled || this.trigger !== "click") {
      return;
    }
    if (!event.composedPath().includes(this.triggerElement as EventTarget)) {
      return;
    }

    this.clearHoverCloseTimer();
    this.setOpen(!this.open);
  };

  private handleTriggerKeydown = (event: KeyboardEvent): void => {
    if (this.disabled || this.trigger === "manual") {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const edge = event.key === "ArrowDown" ? "first" : "last";
      if (this.open) {
        this.focusMenuEdge(edge);
      } else {
        this.setOpen(true, edge);
      }
      return;
    }

    if (event.key === "Escape" && this.open) {
      event.preventDefault();
      this.setOpen(false, "trigger");
      return;
    }

    if (event.key === "Tab" && this.open) {
      this.setOpen(false);
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const trigger = this.triggerElement;
    if (
      this.trigger !== "click" ||
      event.repeat ||
      !trigger ||
      this.hasNativeActivation(event, trigger)
    ) {
      return;
    }

    event.preventDefault();
    this.setOpen(!this.open, this.open ? "none" : "first");
  };

  private handleMenuKeydown = (event: KeyboardEvent): void => {
    if (!this.open || event.defaultPrevented) {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      this.moveMenuFocus(event.key === "ArrowDown" ? 1 : -1);
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      this.focusMenuEdge(event.key === "Home" ? "first" : "last");
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      this.setOpen(false, "trigger");
      return;
    }

    if (event.key === "Tab") {
      this.setOpen(false);
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.composedPath()[0];
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const itemElement = target.closest<HTMLElement>('[role="menuitem"]');
    const index = Number(itemElement?.dataset.index);
    const item = Number.isInteger(index) ? this.items[index] : undefined;
    if (!item || item.disabled || item.divider) {
      return;
    }

    event.preventDefault();
    this.selectItem(item);
  };

  private handleItemPointerEnter = (event: PointerEvent): void => {
    const item = event.currentTarget as HTMLElement;
    if (item.getAttribute("aria-disabled") === "true") {
      return;
    }
    item.focus({ preventScroll: true });
  };

  private selectItem(item: SuperDropdownItem): void {
    if (this.disabled || item.disabled || item.divider) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent<SuperDropdownSelectDetail>(
        "super-dropdown-select",
        {
          detail: { key: item.key },
          bubbles: true,
          composed: true,
        },
      ),
    );

    if (this.closeOnSelect) {
      this.setOpen(false, "trigger");
    }
  }

  private handleItemClick = (
    item: SuperDropdownItem,
    event: MouseEvent,
  ): void => {
    event.preventDefault();
    this.selectItem(item);
  };

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || !this.closeOnOutsideClick) {
      return;
    }
    if (!event.composedPath().includes(this)) {
      this.clearHoverCloseTimer();
      this.setOpen(false, "trigger");
    }
  };

  private handleDocumentKeydown = (event: KeyboardEvent): void => {
    if (!this.open || !this.closeOnEscape || event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    this.clearHoverCloseTimer();
    this.setOpen(false, "trigger");
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
    if (
      event.relatedTarget instanceof Node &&
      this.contains(event.relatedTarget)
    ) {
      return;
    }
    this.scheduleHoverClose();
  };

  override focus(options?: FocusOptions): void {
    if (this.triggerElement) {
      this.triggerElement.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    if (this.triggerElement) {
      this.triggerElement.blur();
      return;
    }
    super.blur();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("pointerenter", this.handlePointerEnter);
    this.addEventListener("pointerleave", this.handlePointerLeave);
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
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
    this.controlledOpenGuard.dispose();
    this.deactivateOpenState();
    this.unbindTrigger();
    this.removeEventListener("pointerenter", this.handlePointerEnter);
    this.removeEventListener("pointerleave", this.handlePointerLeave);
    this.removeEventListener("focusin", this.handleFocusIn);
    this.removeEventListener("focusout", this.handleFocusOut);
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
      this.setInternalOpen(false);
      this.pendingFocus = "none";
    }

    if (
      changedProperties.has("trigger") &&
      changedProperties.get("trigger") !== undefined &&
      this.open
    ) {
      this.setInternalOpen(false);
      this.pendingFocus = "none";
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

    if (changedProperties.has("placement")) {
      this.startFloating();
    } else if (changedProperties.has("items")) {
      void this.floating?.update();
    }
  }

  protected render() {
    return html`
      <span class="trigger" part="trigger">
        <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      </span>
      ${this.open
        ? html`
            <div
              class="menu"
              part="menu"
              id=${this.menuId}
              role="menu"
              tabindex="-1"
              aria-label=${this.menuLabel}
              data-placement=${this.placement}
              @keydown=${this.handleMenuKeydown}
              @pointerenter=${this.handlePointerEnter}
              @pointerleave=${this.handlePointerLeave}
            >
              ${this.items.map((item, index) =>
                item.divider
                  ? html`
                      <div
                        class="divider"
                        part="divider"
                        role="separator"
                      ></div>
                    `
                  : html`
                      <div
                        class="item"
                        part="item"
                        role="menuitem"
                        tabindex=${item.disabled ? "-1" : "0"}
                        data-index=${index}
                        ?data-danger=${item.danger}
                        aria-disabled=${item.disabled ? "true" : "false"}
                        @click=${(event: MouseEvent) =>
                          this.handleItemClick(item, event)}
                        @pointerenter=${this.handleItemPointerEnter}
                      >${item.label}</div>
                    `,
              )}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-dropdown": SuperDropdown;
  }

  interface HTMLElementEventMap {
    "super-dropdown-select": CustomEvent<SuperDropdownSelectDetail>;
    "super-dropdown-open-change": CustomEvent<SuperDropdownOpenChangeDetail>;
  }
}
