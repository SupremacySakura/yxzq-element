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
import {
  createFloating,
  type FloatingController,
} from "../internal/floating.js";

export const SUPER_POPCONFIRM_PLACEMENTS = [
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

export const SUPER_POPCONFIRM_TRIGGERS = ["click", "hover"] as const;
export const SUPER_POPCONFIRM_SIZES = ["large", "medium", "small"] as const;

export type SuperPopconfirmPlacement =
  (typeof SUPER_POPCONFIRM_PLACEMENTS)[number];
export type SuperPopconfirmTrigger =
  (typeof SUPER_POPCONFIRM_TRIGGERS)[number];
export type SuperPopconfirmSize = (typeof SUPER_POPCONFIRM_SIZES)[number];

export interface SuperPopconfirmConfirmDetail {
  originalEvent: Event;
}

export interface SuperPopconfirmCancelDetail {
  originalEvent: Event;
}

export interface SuperPopconfirmOpenChangeDetail {
  open: boolean;
}

const NATIVE_ACTIVATION_SELECTOR =
  "button, a[href], input, select, textarea, summary";
const HOVER_CLOSE_DELAY = 120;

let popconfirmId = 0;

export class SuperPopconfirm extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true, noAccessor: true },
    title: { type: String, reflect: true },
    content: { type: String, reflect: true },
    placement: { type: String, reflect: true },
    trigger: { type: String, reflect: true },
    confirmText: { type: String, attribute: "confirm-text", reflect: true },
    cancelText: { type: String, attribute: "cancel-text", reflect: true },
    confirmLoading: {
      type: Boolean,
      attribute: "confirm-loading",
      reflect: true,
    },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true },
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
    size: { type: String, reflect: true },
  };

  declare title: string;
  declare content: string;
  declare placement: SuperPopconfirmPlacement;
  declare trigger: SuperPopconfirmTrigger;
  declare confirmText: string;
  declare cancelText: string;
  declare confirmLoading: boolean;
  declare disabled: boolean;
  declare icon: string;
  declare closeOnOutsideClick: boolean;
  declare closeOnEscape: boolean;
  declare size: SuperPopconfirmSize;

  private readonly panelId = `super-popconfirm-${++popconfirmId}`;
  private readonly titleId = `${this.panelId}-title`;
  private readonly contentId = `${this.panelId}-content`;
  private _open = false;
  private readonly controlledOpenGuard = createControlledValueGuard<boolean>({
    host: this,
    getValue: () => this._open,
    setValue: (value) => this.setInternalOpen(value),
  });
  private triggerElement: HTMLElement | null = null;
  private panelElement: HTMLElement | null = null;
  private floating: FloatingController | null = null;
  private hoverCloseTimer: number | undefined;
  private returnFocusOnClose = false;
  private contentSlotHasContent = false;
  private triggerAria:
    | {
        expanded: string | null;
        haspopup: string | null;
        controls: string | null;
      }
    | null = null;

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
    this.content = "";
    this.placement = "top";
    this.trigger = "click";
    this.confirmText = "确定";
    this.cancelText = "取消";
    this.confirmLoading = false;
    this.disabled = false;
    this.icon = "?";
    this.closeOnOutsideClick = true;
    this.closeOnEscape = true;
    this.size = "medium";
  }

  static styles = css`
    :host {
      --super-popconfirm-background: var(--super-background-color, #fffef9);
      --super-popconfirm-color: var(--super-text-color-primary, #292524);
      --super-popconfirm-content-color: var(
        --super-text-color-regular,
        #4a4441
      );
      --super-popconfirm-border-color: var(--super-border-color, #2f2a27);
      --super-popconfirm-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-popconfirm-focus-color: var(--super-focus-color, #56c6b7);
      --super-popconfirm-primary-color: var(--super-color-primary, #4b87f5);
      --super-popconfirm-primary-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-popconfirm-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-popconfirm-icon-color: var(--super-color-warning, #ffca50);
      --super-popconfirm-cancel-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-popconfirm-cancel-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        var(--super-background-color, #fffef9)
      );
      --super-popconfirm-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-lg, 14px) - 2px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 2px)
        calc(var(--super-radius-md, 9px) + 1px);
      --super-popconfirm-width: 292px;
      --super-popconfirm-font-size: var(--super-font-size-base, 14px);
      --super-popconfirm-title-size: var(--super-font-size-lg, 16px);
      --super-popconfirm-padding-block: var(--super-spacing-md, 12px);
      --super-popconfirm-padding-inline: var(--super-spacing-lg, 16px);
      --super-popconfirm-gap: var(--super-spacing-sm, 8px);
      --super-popconfirm-icon-size: 26px;
      --super-popconfirm-action-font-size: var(--super-font-size-sm, 13px);
      --super-popconfirm-content-max-height: min(40vh, 240px);
      --super-popconfirm-z-index: var(--super-z-index-overlay, 2000);
      --super-popconfirm-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-popconfirm-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-popconfirm-font-size);
      line-height: 1.5;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-popconfirm-width: 320px;
      --super-popconfirm-font-size: var(--super-font-size-lg, 16px);
      --super-popconfirm-title-size: 18px;
      --super-popconfirm-padding-block: var(--super-spacing-lg, 16px);
      --super-popconfirm-padding-inline: 20px;
      --super-popconfirm-gap: var(--super-spacing-md, 12px);
      --super-popconfirm-icon-size: 30px;
      --super-popconfirm-action-font-size: var(--super-font-size-base, 14px);
    }

    :host([size="small"]) {
      --super-popconfirm-width: 264px;
      --super-popconfirm-font-size: var(--super-font-size-sm, 13px);
      --super-popconfirm-title-size: var(--super-font-size-base, 14px);
      --super-popconfirm-padding-block: var(--super-spacing-sm, 8px);
      --super-popconfirm-padding-inline: var(--super-spacing-md, 12px);
      --super-popconfirm-gap: 6px;
      --super-popconfirm-icon-size: 22px;
      --super-popconfirm-action-font-size: 12px;
    }

    slot:not([name]) {
      display: contents;
    }

    .popconfirm {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-popconfirm-z-index);
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      inline-size: min(var(--super-popconfirm-width), calc(100vw - 16px));
      gap: var(--super-popconfirm-gap);
      padding: var(--super-popconfirm-padding-block)
        var(--super-popconfirm-padding-inline);
      color: var(--super-popconfirm-color);
      font: inherit;
      overflow-wrap: anywhere;
      background: var(--super-popconfirm-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-popconfirm-border-color);
      border-radius: var(--super-popconfirm-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-popconfirm-shadow-color);
      transform: rotate(var(--super-popconfirm-rotation));
      transform-origin: center;
    }

    .popconfirm:focus {
      outline: none;
    }

    .popconfirm:focus-visible {
      outline: 3px solid var(--super-popconfirm-focus-color);
      outline-offset: 3px;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-popconfirm-icon-size);
      block-size: var(--super-popconfirm-icon-size);
      color: var(--super-popconfirm-icon-color);
      font-size: 0.9em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-popconfirm-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 46% 54% 43% 57% / 55% 44% 56% 45%;
    }

    .body {
      display: grid;
      flex: 1 1 190px;
      min-inline-size: 0;
      gap: calc(var(--super-popconfirm-gap) / 2);
    }

    .title {
      margin: 0;
      color: var(--super-popconfirm-color);
      font-size: var(--super-popconfirm-title-size);
      font-weight: 700;
      line-height: 1.35;
    }

    .content {
      max-block-size: var(--super-popconfirm-content-max-height);
      overflow: auto;
      color: var(--super-popconfirm-content-color);
      overscroll-behavior: contain;
    }

    .actions {
      display: flex;
      flex: 1 0 100%;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: var(--super-popconfirm-gap);
      padding-block-start: calc(var(--super-popconfirm-gap) / 2);
    }

    .action {
      min-inline-size: 62px;
      min-block-size: 32px;
      margin: 0;
      padding: 4px 12px;
      color: var(--super-popconfirm-color);
      font: inherit;
      font-size: var(--super-popconfirm-action-font-size);
      font-weight: 700;
      line-height: 1.2;
      background: var(--super-popconfirm-cancel-background);
      border: 1.5px solid var(--super-popconfirm-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 1px 2px 0 -1px var(--super-popconfirm-shadow-color);
      cursor: pointer;
    }

    .action:hover:not(:disabled) {
      background: var(--super-popconfirm-cancel-hover-background);
      transform: translate(-1px, -1px) rotate(0.15deg);
    }

    .confirm {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-popconfirm-primary-color);
      border-color: var(--super-popconfirm-primary-border-color);
    }

    .confirm:hover:not(:disabled) {
      background: color-mix(
        in srgb,
        var(--super-popconfirm-primary-color) 82%,
        var(--super-text-color-inverse, #ffffff)
      );
    }

    .action:active:not(:disabled) {
      box-shadow: inset 0 1px 2px rgb(15 23 42 / 18%);
      transform: translate(1px, 1px) rotate(-0.15deg);
    }

    .action:focus-visible {
      outline: 3px solid var(--super-popconfirm-focus-color);
      outline-offset: 2px;
    }

    .action:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .confirm[aria-busy="true"] {
      cursor: wait;
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

    @media (prefers-reduced-motion: reduce) {
      .popconfirm,
      .action:hover:not(:disabled),
      .action:active:not(:disabled) {
        transform: none;
      }
    }
  `;

  private get panel(): HTMLElement | null {
    return this.renderRoot.querySelector<HTMLElement>('[part="popconfirm"]');
  }

  private get cancelButton(): HTMLButtonElement | null {
    return this.renderRoot.querySelector<HTMLButtonElement>('[part="cancel"]');
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

  private get resolvedTrigger(): SuperPopconfirmTrigger {
    return this.trigger === "hover" ? "hover" : "click";
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
      new CustomEvent<SuperPopconfirmOpenChangeDetail>(
        "super-popconfirm-open-change",
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
    this.triggerElement?.focus({ preventScroll: true });
  }

  private isInsidePopconfirm(node: EventTarget | null): boolean {
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
      trigger.setAttribute("aria-controls", this.panelId);
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

    nextTrigger.addEventListener("click", this.handleTriggerClick);
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

    trigger.removeEventListener("click", this.handleTriggerClick);
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
    const floating = this.panel;
    if (!anchor || !floating) {
      return;
    }

    floating.style.position = "fixed";
    floating.style.left = "0px";
    floating.style.top = "0px";

    this.floating = createFloating(anchor, floating, {
      placement: this.placement,
      offset: 8,
    });
  }

  private activateOpenState(): void {
    this.attachPanelListeners();
    this.startFloating();
    this.syncTriggerAria();
    this.cancelButton?.focus({ preventScroll: true });
  }

  private deactivateOpenState(): void {
    this.destroyFloating();
    this.detachPanelListeners();
    this.syncTriggerAria();
  }

  private handleTriggerSlotChange = (): void => {
    this.bindTrigger(this.getSlottedTrigger());
    if (this.open) {
      this.startFloating();
    }
  };

  private handleContentSlotChange = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasContent = slot
      .assignedNodes()
      .some(
        (node) =>
          node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
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

  private handleTriggerClick = (event: MouseEvent): void => {
    if (this.disabled || this.resolvedTrigger !== "click") {
      return;
    }

    const trigger = this.triggerElement;
    if (!trigger || !event.composedPath().includes(trigger)) {
      return;
    }

    this.clearHoverCloseTimer();
    const nextOpen = !this.open;
    if (!nextOpen) {
      this.returnFocusOnClose = true;
    }
    this.setOpen(nextOpen);
  };

  private handleTriggerKeydown = (event: KeyboardEvent): void => {
    if (
      this.disabled ||
      this.resolvedTrigger !== "click" ||
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
    if (!nextOpen) {
      this.returnFocusOnClose = true;
    }
    this.setOpen(nextOpen);
  };

  private handlePointerEnter = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
    this.setOpen(true);
  };

  private handlePointerLeave = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.scheduleHoverClose();
  };

  private handleFocusIn = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
    this.setOpen(true);
  };

  private handleFocusOut = (event: FocusEvent): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }
    if (this.isInsidePopconfirm(event.relatedTarget)) {
      return;
    }

    this.scheduleHoverClose();
  };

  private handlePanelPointerEnter = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
  };

  private handlePanelPointerLeave = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.scheduleHoverClose();
  };

  private handlePanelFocusIn = (): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }

    this.clearHoverCloseTimer();
  };

  private handlePanelFocusOut = (event: FocusEvent): void => {
    if (this.disabled || this.resolvedTrigger !== "hover") {
      return;
    }
    if (this.isInsidePopconfirm(event.relatedTarget)) {
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
      this.returnFocusOnClose = false;
      this.setOpen(false);
    }
  };

  private handleDocumentKeydown = (event: KeyboardEvent): void => {
    if (
      !this.open ||
      !this.closeOnEscape ||
      event.key !== "Escape" ||
      event.defaultPrevented
    ) {
      return;
    }

    event.preventDefault();
    this.clearHoverCloseTimer();
    this.returnFocusOnClose = false;
    this.focusTrigger();
    this.setOpen(false);
  };

  private handleConfirm = (event: MouseEvent): void => {
    if (this.disabled || this.confirmLoading) {
      return;
    }

    const confirmEvent = new CustomEvent<SuperPopconfirmConfirmDetail>(
      "super-popconfirm-confirm",
      {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
        cancelable: true,
      },
    );

    if (!this.dispatchEvent(confirmEvent)) {
      return;
    }

    this.returnFocusOnClose = false;
    this.focusTrigger();
    this.setOpen(false);
  };

  private handleCancel = (event: MouseEvent): void => {
    if (this.disabled) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent<SuperPopconfirmCancelDetail>(
        "super-popconfirm-cancel",
        {
          detail: { originalEvent: event },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.returnFocusOnClose = true;
    this.setOpen(false);
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
          if (this.open && this.isConnected) {
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

  protected willUpdate(): void {
    if (this.disabled && this.open) {
      this.clearHoverCloseTimer();
      this.returnFocusOnClose = false;
      this.setInternalOpen(false);
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    this.syncTriggerAria();
    const openChanged = changedProperties.has("open");

    if (!this.open) {
      if (openChanged || changedProperties.has("disabled")) {
        this.deactivateOpenState();
        if (openChanged && this.returnFocusOnClose) {
          this.returnFocusOnClose = false;
          this.focusTrigger();
        }
      }
      return;
    }

    if (openChanged) {
      this.returnFocusOnClose = false;
      this.activateOpenState();
      return;
    }

    if (changedProperties.has("placement")) {
      this.startFloating();
    }
  }

  protected render() {
    return html`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open
        ? html`
            <div
              class="popconfirm"
              part="popconfirm"
              id=${this.panelId}
              role="alertdialog"
              aria-modal="false"
              aria-labelledby=${this.titleId}
              aria-describedby=${this.contentId}
              data-placement=${this.placement}
              tabindex="-1"
            >
              ${this.icon
                ? html`
                    <span class="icon" part="icon" aria-hidden="true">
                      ${this.icon}
                    </span>
                  `
                : nothing}
              <div class="body">
                <div class="title" part="title" id=${this.titleId}>
                  ${this.title !== ""
                    ? this.title
                    : html`<span class="visually-hidden">确认操作</span>`}
                </div>
                <div class="content" part="content" id=${this.contentId}>
                  <slot
                    name="content"
                    @slotchange=${this.handleContentSlotChange}
                  >${this.contentSlotHasContent ? nothing : this.content}</slot>
                </div>
              </div>
              <div class="actions" part="actions">
                <button
                  class="action"
                  part="cancel"
                  type="button"
                  ?disabled=${this.disabled}
                  @click=${this.handleCancel}
                >
                  ${this.cancelText}
                </button>
                <button
                  class="action confirm"
                  part="confirm"
                  type="button"
                  aria-busy=${this.confirmLoading ? "true" : "false"}
                  ?disabled=${this.disabled || this.confirmLoading}
                  @click=${this.handleConfirm}
                >
                  ${this.confirmText}
                </button>
              </div>
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-popconfirm": SuperPopconfirm;
  }

  interface HTMLElementEventMap {
    "super-popconfirm-confirm": CustomEvent<SuperPopconfirmConfirmDetail>;
    "super-popconfirm-cancel": CustomEvent<SuperPopconfirmCancelDetail>;
    "super-popconfirm-open-change": CustomEvent<SuperPopconfirmOpenChangeDetail>;
  }
}
