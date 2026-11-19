import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import {
  createControlledValueGuard,
  createFocusTrap,
  lockScroll,
  runAttributeWrite,
  type FocusTrap,
} from "@yxzq-element/utils";
import {
  createFloating,
  type FloatingController,
} from "../internal/floating.js";

export const SUPER_TOOLTIP_PLACEMENTS = [
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

export const SUPER_TOOLTIP_TRIGGERS = ["hover", "focus", "click"] as const;
export const SUPER_TOOLTIP_SIZES = ["large", "medium", "small"] as const;

export type SuperTooltipPlacement = (typeof SUPER_TOOLTIP_PLACEMENTS)[number];
export type SuperTooltipTrigger = (typeof SUPER_TOOLTIP_TRIGGERS)[number];
export type SuperTooltipSize = (typeof SUPER_TOOLTIP_SIZES)[number];

export interface SuperTooltipOpenChangeDetail {
  open: boolean;
}

let tooltipId = 0;

const addIdReference = (element: HTMLElement, id: string): void => {
  const ids = (element.getAttribute("aria-describedby") ?? "")
    .split(/\s+/)
    .filter(Boolean);
  if (!ids.includes(id)) {
    ids.push(id);
    element.setAttribute("aria-describedby", ids.join(" "));
  }
};

const removeIdReference = (element: HTMLElement, id: string): void => {
  const ids = (element.getAttribute("aria-describedby") ?? "")
    .split(/\s+/)
    .filter((value) => value !== "" && value !== id);
  if (ids.length > 0) {
    element.setAttribute("aria-describedby", ids.join(" "));
  } else {
    element.removeAttribute("aria-describedby");
  }
};

export class SuperTooltip extends LitElement {
  static properties = {
    content: { type: String, reflect: true },
    placement: { type: String, reflect: true },
    trigger: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true, noAccessor: true },
    delay: { type: Number, reflect: true },
    offset: { type: Number, reflect: true },
    maxWidth: { type: Number, attribute: "max-width", reflect: true },
    showArrow: { type: Boolean, attribute: "show-arrow", reflect: true },
    interactive: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
  };

  declare content: string;
  declare placement: SuperTooltipPlacement;
  declare trigger: SuperTooltipTrigger;
  declare disabled: boolean;
  declare delay: number;
  declare offset: number;
  declare maxWidth: number;
  declare showArrow: boolean;
  declare interactive: boolean;
  declare size: SuperTooltipSize;

  private readonly tooltipId = `super-tooltip-${++tooltipId}`;
  private _open = false;
  private readonly controlledOpenGuard = createControlledValueGuard<boolean>({
    host: this,
    getValue: () => this._open,
    setValue: (value) => this.setInternalOpen(value),
  });
  private triggerElement: HTMLElement | null = null;
  private panelElement: HTMLElement | null = null;
  private describedElement: HTMLElement | null = null;
  private floating: FloatingController | null = null;
  private closeTimer: number | undefined;
  private releaseScroll: (() => void) | null = null;
  private focusTrap: FocusTrap | null = null;

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
    this.content = "";
    this.placement = "top";
    this.trigger = "hover";
    this.disabled = false;
    this.delay = 120;
    this.offset = 8;
    this.maxWidth = 280;
    this.showArrow = true;
    this.interactive = false;
    this.size = "medium";
  }

  static styles = css`
    :host {
      --super-tooltip-background: var(--super-background-color, #fffef9);
      --super-tooltip-color: var(--super-text-color-primary, #292524);
      --super-tooltip-border-color: var(--super-border-color, #2f2a27);
      --super-tooltip-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-tooltip-focus-color: var(--super-focus-color, #56c6b7);
      --super-tooltip-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tooltip-font-size: var(--super-font-size-sm, 13px);
      --super-tooltip-line-height: 1.45;
      --super-tooltip-padding-block: 7px;
      --super-tooltip-padding-inline: 10px;
      --super-tooltip-max-width: 280px;
      --_super-tooltip-max-width: var(--super-tooltip-max-width);
      --super-tooltip-arrow-size: 9px;
      --super-tooltip-z-index: var(--super-z-index-overlay, 2000);
      --super-tooltip-rotation: -0.2deg;

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-tooltip-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tooltip-font-size: var(--super-font-size-base, 14px);
      --super-tooltip-padding-block: 9px;
      --super-tooltip-padding-inline: 13px;
      --super-tooltip-arrow-size: 10px;
    }

    :host([size="small"]) {
      --super-tooltip-font-size: 12px;
      --super-tooltip-padding-block: 5px;
      --super-tooltip-padding-inline: 8px;
      --super-tooltip-arrow-size: 7px;
    }

    slot {
      display: contents;
    }

    .tooltip {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-tooltip-z-index);
      box-sizing: border-box;
      max-inline-size: var(--_super-tooltip-max-width);
      padding: var(--super-tooltip-padding-block)
        var(--super-tooltip-padding-inline);
      color: var(--super-tooltip-color);
      font-family: inherit;
      font-size: var(--super-tooltip-font-size);
      line-height: var(--super-tooltip-line-height);
      overflow-wrap: anywhere;
      white-space: normal;
      pointer-events: none;
      background: var(--super-tooltip-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-radius: var(--super-tooltip-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-tooltip-shadow-color);
      transform: rotate(var(--super-tooltip-rotation));
      transform-origin: center;
    }

    :host([interactive]) .tooltip {
      pointer-events: auto;
    }

    .tooltip:focus {
      outline: none;
    }

    .tooltip:focus-visible {
      outline: 3px solid var(--super-tooltip-focus-color);
      outline-offset: 3px;
    }

    .arrow {
      position: absolute;
      box-sizing: border-box;
      inline-size: var(--super-tooltip-arrow-size);
      block-size: var(--super-tooltip-arrow-size);
      background: var(--super-tooltip-background);
      transform: rotate(45deg);
    }

    .tooltip[data-placement^="top"] .arrow {
      bottom: calc(var(--super-tooltip-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="bottom"] .arrow {
      top: calc(var(--super-tooltip-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="left"] .arrow {
      top: 50%;
      right: calc(var(--super-tooltip-arrow-size) / -2);
      margin-block-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="right"] .arrow {
      top: 50%;
      left: calc(var(--super-tooltip-arrow-size) / -2);
      margin-block-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .tooltip {
        transform: none;
      }
    }
  `;

  private get tooltipElement(): HTMLElement | null {
    return this.renderRoot.querySelector<HTMLElement>('[part="tooltip"]');
  }

  private clearCloseTimer(): void {
    const view = this.ownerDocument.defaultView;
    if (this.closeTimer !== undefined) {
      view?.clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
  }

  private scheduleClose(): void {
    this.clearCloseTimer();
    const delay = Number.isFinite(this.delay) ? Math.max(0, this.delay) : 0;
    if (delay === 0) {
      this.setOpen(false);
      return;
    }

    const view = this.ownerDocument.defaultView;
    if (!view) {
      this.setOpen(false);
      return;
    }

    this.closeTimer = view.setTimeout(() => {
      this.closeTimer = undefined;
      this.setOpen(false);
    }, delay);
  }

  private setOpen(nextOpen: boolean): void {
    if (nextOpen && this.disabled) {
      return;
    }
    if (this.open === nextOpen) {
      return;
    }

    const controlledMutation = this.controlledOpenGuard.capture();
    this.setInternalOpen(nextOpen);
    this.dispatchEvent(
      new CustomEvent<SuperTooltipOpenChangeDetail>(
        "super-tooltip-open-change",
        {
          detail: { open: nextOpen },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.controlledOpenGuard.confirm(controlledMutation);
  }

  private focusTrigger(): void {
    const trigger = this.triggerElement;
    if (trigger && typeof trigger.focus === "function") {
      trigger.focus({ preventScroll: true });
    }
  }

  private syncDescribedBy(): void {
    const trigger = this.triggerElement;
    if (this.describedElement && this.describedElement !== trigger) {
      removeIdReference(this.describedElement, this.tooltipId);
      this.describedElement = null;
    }

    if (!this.open) {
      if (this.describedElement) {
        removeIdReference(this.describedElement, this.tooltipId);
        this.describedElement = null;
      }
      return;
    }

    if (trigger) {
      addIdReference(trigger, this.tooltipId);
      this.describedElement = trigger;
    }
  }

  private destroyFloating(): void {
    this.floating?.destroy();
    this.floating = null;
  }

  private startFloating(): void {
    this.destroyFloating();
    const anchor = this.triggerElement;
    const floating = this.tooltipElement;
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

  private releaseInteractiveState(): void {
    this.focusTrap?.deactivate();
    this.focusTrap = null;
    this.releaseScroll?.();
    this.releaseScroll = null;
  }

  private syncInteractiveState(): void {
    if (!this.open || !this.interactive) {
      this.releaseInteractiveState();
      return;
    }

    const panel = this.tooltipElement;
    if (!panel) {
      return;
    }

    if (!this.releaseScroll) {
      this.releaseScroll = lockScroll();
    }
    if (!this.focusTrap) {
      this.focusTrap = createFocusTrap(this, {
        initialFocus: panel,
        returnFocus: this.triggerElement,
      });
      this.focusTrap.activate();
    }
  }

  private activateOpenState(): void {
    this.syncDescribedBy();
    this.attachPanelListeners();
    this.startFloating();
    this.syncInteractiveState();
  }

  private deactivateOpenState(): void {
    this.destroyFloating();
    this.detachPanelListeners();
    this.syncDescribedBy();
    this.releaseInteractiveState();
  }

  private handleTriggerSlotChange = (): void => {
    const slot = this.renderRoot.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );
    const nextTrigger =
      slot?.assignedElements({ flatten: true })[0] as HTMLElement | undefined;
    this.detachTriggerListeners();
    this.triggerElement = nextTrigger ?? null;
    this.attachTriggerListeners();

    if (this.open) {
      this.syncDescribedBy();
      this.startFloating();
    }
  };

  private attachTriggerListeners(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }
    trigger.addEventListener("pointerenter", this.handlePointerEnter);
    trigger.addEventListener("pointerleave", this.handlePointerLeave);
  }

  private detachTriggerListeners(): void {
    const trigger = this.triggerElement;
    if (!trigger) {
      return;
    }
    trigger.removeEventListener("pointerenter", this.handlePointerEnter);
    trigger.removeEventListener("pointerleave", this.handlePointerLeave);
  }

  private attachPanelListeners(): void {
    const panel = this.tooltipElement;
    if (!panel || panel === this.panelElement) {
      return;
    }
    this.detachPanelListeners();
    this.panelElement = panel;
    panel.addEventListener("pointerenter", this.handlePanelPointerEnter);
    panel.addEventListener("pointerleave", this.handlePanelPointerLeave);
  }

  private detachPanelListeners(): void {
    const panel = this.panelElement;
    if (!panel) {
      return;
    }
    panel.removeEventListener("pointerenter", this.handlePanelPointerEnter);
    panel.removeEventListener("pointerleave", this.handlePanelPointerLeave);
    this.panelElement = null;
  }

  private handlePanelPointerEnter = (): void => {
    if (this.disabled || !this.interactive || this.trigger !== "hover") {
      return;
    }
    this.clearCloseTimer();
  };

  private handlePanelPointerLeave = (): void => {
    if (this.disabled || !this.interactive || this.trigger !== "hover") {
      return;
    }
    this.scheduleClose();
  };

  private handlePointerEnter = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }
    this.clearCloseTimer();
    this.setOpen(true);
  };

  private handlePointerLeave = (): void => {
    if (this.disabled || this.trigger !== "hover") {
      return;
    }
    this.scheduleClose();
  };

  private handleFocusIn = (event: FocusEvent): void => {
    if (this.disabled || this.trigger !== "focus") {
      return;
    }
    const path = event.composedPath();
    if (path.includes(this) && (!this.triggerElement ||
      path.includes(this.triggerElement))) {
      this.clearCloseTimer();
      this.setOpen(true);
    }
  };

  private handleFocusOut = (event: FocusEvent): void => {
    if (this.trigger !== "focus" || !this.open) {
      return;
    }
    const next = event.relatedTarget;
    const panel = this.tooltipElement;
    if (
      next instanceof Node &&
      (next === this || this.contains(next) || panel?.contains(next))
    ) {
      return;
    }
    this.scheduleClose();
  };

  private handleClick = (event: MouseEvent): void => {
    if (this.disabled || this.trigger !== "click") {
      return;
    }
    const trigger = this.triggerElement;
    if (!trigger || !event.composedPath().includes(trigger)) {
      return;
    }
    this.clearCloseTimer();
    this.setOpen(!this.open);
  };

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || this.trigger !== "click") {
      return;
    }
    if (!event.composedPath().includes(this)) {
      this.setOpen(false);
    }
  };

  private handleDocumentKeydown = (event: KeyboardEvent): void => {
    if (!this.open || event.key !== "Escape") {
      return;
    }
    event.preventDefault();
    this.clearCloseTimer();
    this.setOpen(false);
    this.focusTrigger();
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.attachTriggerListeners();
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
    this.addEventListener("click", this.handleClick);
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

    if (this.hasUpdated && this.open) {
      void this.updateComplete.then(() => {
        if (this.open) {
          this.activateOpenState();
        }
      });
    }
  }

  override disconnectedCallback(): void {
    this.clearCloseTimer();
    this.controlledOpenGuard.dispose();
    this.deactivateOpenState();
    this.detachTriggerListeners();
    this.removeEventListener("focusin", this.handleFocusIn);
    this.removeEventListener("focusout", this.handleFocusOut);
    this.removeEventListener("click", this.handleClick);
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
      this.clearCloseTimer();
      this.setInternalOpen(false);
    }

    if (
      changedProperties.has("trigger") &&
      changedProperties.get("trigger") !== undefined
    ) {
      this.clearCloseTimer();
      this.setInternalOpen(false);
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    const openChanged = changedProperties.has("open");
    const positionChanged =
      changedProperties.has("placement") || changedProperties.has("offset");
    const interactionChanged = changedProperties.has("interactive");

    if (!this.open) {
      if (openChanged) {
        this.deactivateOpenState();
      }
      return;
    }

    if (openChanged) {
      this.activateOpenState();
      return;
    }

    if (positionChanged) {
      this.startFloating();
    }

    if (interactionChanged) {
      this.syncInteractiveState();
    }
  }

  protected render() {
    const maxWidth = Number.isFinite(this.maxWidth)
      ? Math.max(0, this.maxWidth)
      : 280;

    return html`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open
        ? html`
            <div
              class="tooltip"
              part="tooltip"
              id=${this.tooltipId}
              role="tooltip"
              tabindex="-1"
              data-placement=${this.placement}
              style=${`--_super-tooltip-max-width: ${maxWidth}px`}
            >
              ${this.content
                ? this.content
                : html`<slot name="content"></slot>`}
              ${this.showArrow
                ? html`<span
                    class="arrow"
                    part="arrow"
                    aria-hidden="true"
                  ></span>`
                : nothing}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-tooltip": SuperTooltip;
  }

  interface HTMLElementEventMap {
    "super-tooltip-open-change": CustomEvent<SuperTooltipOpenChangeDetail>;
  }
}
