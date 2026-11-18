import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { defineCustomElement } from "@yxzq-element/utils";

export const SUPER_NOTIFICATION_TYPES = [
  "info",
  "success",
  "warning",
  "error",
] as const;

export const SUPER_NOTIFICATION_PLACEMENTS = [
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left",
] as const;
export const SUPER_NOTIFICATION_SIZES = ["large", "medium", "small"] as const;

export type SuperNotificationType =
  (typeof SUPER_NOTIFICATION_TYPES)[number];
export type SuperNotificationPlacement =
  (typeof SUPER_NOTIFICATION_PLACEMENTS)[number];
export type SuperNotificationSize =
  (typeof SUPER_NOTIFICATION_SIZES)[number];

export interface SuperNotificationCloseDetail {
  type: SuperNotificationType;
}

export interface ShowSuperNotificationOptions {
  title?: string;
  message?: string;
  type?: SuperNotificationType;
  placement?: SuperNotificationPlacement;
  duration?: number;
  closable?: boolean;
  closeLabel?: string;
  showIcon?: boolean;
  size?: SuperNotificationSize;
}

export interface SuperNotificationHandle {
  close: () => void;
}

const TYPE_ICONS: Record<SuperNotificationType, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×",
};

const isNotificationType = (value: string): value is SuperNotificationType =>
  (SUPER_NOTIFICATION_TYPES as readonly string[]).includes(value);

const isNotificationPlacement = (
  value: string,
): value is SuperNotificationPlacement =>
  (SUPER_NOTIFICATION_PLACEMENTS as readonly string[]).includes(value);

export class SuperNotification extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    title: { type: String, reflect: true },
    message: { type: String, reflect: true },
    type: { type: String, reflect: true },
    placement: { type: String, reflect: true },
    duration: { type: Number, reflect: true },
    closable: { type: Boolean, reflect: true },
    closeLabel: {
      type: String,
      attribute: "close-label",
      reflect: true,
    },
    showIcon: {
      type: Boolean,
      attribute: "show-icon",
      reflect: true,
    },
    size: { type: String, reflect: true },
    hasTitleSlot: { state: true },
    hasMessageSlot: { state: true },
  };

  declare open: boolean;
  declare title: string;
  declare message: string;
  declare type: SuperNotificationType;
  declare placement: SuperNotificationPlacement;
  declare duration: number;
  declare closable: boolean;
  declare closeLabel: string;
  declare showIcon: boolean;
  declare size: SuperNotificationSize;
  private declare hasTitleSlot: boolean;
  private declare hasMessageSlot: boolean;

  private closeTimer: number | undefined;

  constructor() {
    super();
    this.open = false;
    this.title = "";
    this.message = "";
    this.type = "info";
    this.placement = "top-right";
    this.duration = 4500;
    this.closable = true;
    this.closeLabel = "关闭通知";
    this.showIcon = true;
    this.size = "medium";
    this.hasTitleSlot = false;
    this.hasMessageSlot = false;
  }

  static styles = css`
    :host {
      --super-notification-background: var(--super-background-color, #fffef9);
      --super-notification-color: var(--super-text-color-primary, #292524);
      --super-notification-content-color: var(
        --super-text-color-regular,
        #4a4441
      );
      --super-notification-border-color: var(--super-border-color, #2f2a27);
      --super-notification-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-notification-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-notification-icon-color: var(--super-color-info, #7d8896);
      --super-notification-focus-color: var(--super-focus-color, #56c6b7);
      --super-notification-close-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        transparent
      );
      --super-notification-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 1px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-lg, 14px);
      --super-notification-width: 340px;
      --super-notification-font-size: var(--super-font-size-base, 14px);
      --super-notification-title-size: var(--super-font-size-lg, 16px);
      --super-notification-gap: var(--super-spacing-sm, 8px);
      --super-notification-padding-block: var(--super-spacing-md, 12px);
      --super-notification-padding-inline: var(--super-spacing-lg, 16px);
      --super-notification-icon-size: 26px;
      --super-notification-offset: var(--super-spacing-lg, 16px);
      --super-notification-z-index: var(--super-z-index-message, 3000);
      --super-notification-rotation: var(--super-sketch-rotation, -0.25deg);

      position: fixed;
      top: var(--super-notification-offset);
      right: var(--super-notification-offset);
      z-index: var(--super-notification-z-index);
      display: block;
      box-sizing: border-box;
      inline-size: min(
        var(--super-notification-width),
        calc(100vw - 32px)
      );
      color: var(--super-notification-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-notification-font-size);
      line-height: 1.5;
      pointer-events: none;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-notification-width: 380px;
      --super-notification-font-size: var(--super-font-size-lg, 16px);
      --super-notification-title-size: 18px;
      --super-notification-gap: var(--super-spacing-md, 12px);
      --super-notification-padding-block: var(--super-spacing-lg, 16px);
      --super-notification-padding-inline: 20px;
      --super-notification-icon-size: 30px;
    }

    :host([size="small"]) {
      --super-notification-width: 300px;
      --super-notification-font-size: var(--super-font-size-sm, 13px);
      --super-notification-title-size: var(--super-font-size-base, 14px);
      --super-notification-gap: 6px;
      --super-notification-padding-block: var(--super-spacing-sm, 8px);
      --super-notification-padding-inline: var(--super-spacing-md, 12px);
      --super-notification-icon-size: 22px;
    }

    :host([placement="top-left"]) {
      right: auto;
      left: var(--super-notification-offset);
    }

    :host([placement="bottom-right"]) {
      top: auto;
      bottom: var(--super-notification-offset);
    }

    :host([placement="bottom-left"]) {
      top: auto;
      right: auto;
      bottom: var(--super-notification-offset);
      left: var(--super-notification-offset);
    }

    :host([type="success"]) {
      --super-notification-icon-color: var(--super-color-success, #86cf8b);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="warning"]) {
      --super-notification-icon-color: var(--super-color-warning, #ffca50);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 45%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="error"]) {
      --super-notification-icon-color: var(--super-color-danger, #ff7067);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    .notification {
      display: flex;
      box-sizing: border-box;
      align-items: flex-start;
      gap: var(--super-notification-gap);
      padding: var(--super-notification-padding-block)
        var(--super-notification-padding-inline);
      color: var(--super-notification-color);
      font: inherit;
      background: var(--super-notification-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-notification-border-color);
      border-radius: var(--super-notification-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-notification-shadow-color);
      pointer-events: auto;
      transform: rotate(var(--super-notification-rotation));
      transform-origin: center;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-notification-icon-size);
      block-size: var(--super-notification-icon-size);
      color: var(--super-notification-icon-color);
      font-size: 0.88em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-notification-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 47% 53% 44% 56% / 54% 45% 55% 46%;
    }

    .body {
      display: grid;
      flex: 1 1 auto;
      min-inline-size: 0;
      gap: 3px;
      padding-block: 2px;
    }

    .title {
      margin: 0;
      color: var(--super-notification-color);
      font-size: var(--super-notification-title-size);
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .content {
      color: var(--super-notification-content-color);
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 24px;
      block-size: 24px;
      margin: -2px -4px -2px 0;
      padding: 0;
      color: inherit;
      font: inherit;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 46% 54% 48% 52% / 52% 47% 53% 48%;
      cursor: pointer;
      opacity: 0.68;
    }

    .close:hover {
      background: var(--super-notification-close-hover-background);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-notification-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .notification {
        transform: none;
      }
    }
  `;

  private get resolvedType(): SuperNotificationType {
    return isNotificationType(this.type) ? this.type : "info";
  }

  private get resolvedPlacement(): SuperNotificationPlacement {
    return isNotificationPlacement(this.placement)
      ? this.placement
      : "top-right";
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
    if (!this.open || !Number.isFinite(this.duration) || this.duration <= 0) {
      return;
    }

    const view = this.ownerDocument.defaultView;
    if (!view) {
      return;
    }

    this.closeTimer = view.setTimeout(() => {
      this.closeTimer = undefined;
      this.close();
    }, this.duration);
  }

  private close(): void {
    if (!this.open) {
      return;
    }

    this.clearCloseTimer();
    this.open = false;
    this.dispatchEvent(
      new CustomEvent<SuperNotificationCloseDetail>(
        "super-notification-close",
        {
          detail: { type: this.resolvedType },
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  private handleTitleSlotChange = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasTitleSlot = slot
      .assignedNodes()
      .some(
        (node) =>
          node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
      );

    if (hasTitleSlot !== this.hasTitleSlot) {
      this.hasTitleSlot = hasTitleSlot;
    }
  };

  private handleMessageSlotChange = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasMessageSlot = slot
      .assignedNodes()
      .some(
        (node) =>
          node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
      );

    if (hasMessageSlot !== this.hasMessageSlot) {
      this.hasMessageSlot = hasMessageSlot;
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated && this.open) {
      this.scheduleClose();
    }
  }

  override disconnectedCallback(): void {
    this.clearCloseTimer();
    super.disconnectedCallback();
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    if (!this.open) {
      this.clearCloseTimer();
      return;
    }

    if (
      changedProperties.has("open") ||
      changedProperties.has("duration") ||
      changedProperties.has("type")
    ) {
      this.scheduleClose();
    }
  }

  protected render() {
    if (!this.open) {
      return nothing;
    }

    const type = this.resolvedType;
    const isAlert = type === "error";
    const showTitle = this.title !== "" || this.hasTitleSlot;

    return html`
      <div
        class="notification"
        part="notification"
        role=${isAlert ? "alert" : "status"}
        aria-live=${isAlert ? "assertive" : "polite"}
        aria-atomic="true"
        data-placement=${this.resolvedPlacement}
      >
        ${this.showIcon
          ? html`
              <span class="icon" part="icon" aria-hidden="true">
                ${TYPE_ICONS[type]}
              </span>
            `
          : nothing}
        <div class="body">
          <div class="title" part="title" ?hidden=${!showTitle}>
            <slot name="title" @slotchange=${this.handleTitleSlotChange}>
              ${this.hasTitleSlot ? nothing : this.title}
            </slot>
          </div>
          <div class="content" part="content">
            <slot @slotchange=${this.handleMessageSlotChange}>
              ${this.hasMessageSlot ? nothing : this.message}
            </slot>
          </div>
        </div>
        ${this.closable
          ? html`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${(event: MouseEvent) => {
                  event.stopPropagation();
                  this.close();
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            `
          : nothing}
      </div>
    `;
  }
}

export const showSuperNotification = (
  options: ShowSuperNotificationOptions = {},
): SuperNotificationHandle => {
  if (typeof document === "undefined") {
    return { close: () => {} };
  }

  const body = document.body;
  if (!body) {
    return { close: () => {} };
  }

  defineCustomElement("super-notification", SuperNotification);
  const element = document.createElement(
    "super-notification",
  ) as SuperNotification;
  element.title = options.title ?? "";
  element.message = options.message ?? "";
  element.type = options.type ?? "info";
  element.placement = options.placement ?? "top-right";
  element.duration = options.duration ?? 4500;
  element.closable = options.closable ?? true;
  element.closeLabel = options.closeLabel ?? "关闭通知";
  element.showIcon = options.showIcon ?? true;
  element.size = options.size ?? "medium";
  element.open = true;
  element.addEventListener("super-notification-close", () => {
    element.remove();
  });
  body.append(element);

  return {
    close: () => {
      element.open = false;
      element.remove();
    },
  };
};

declare global {
  interface HTMLElementTagNameMap {
    "super-notification": SuperNotification;
  }

  interface HTMLElementEventMap {
    "super-notification-close": CustomEvent<SuperNotificationCloseDetail>;
  }
}
