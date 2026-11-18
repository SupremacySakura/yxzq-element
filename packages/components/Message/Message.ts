import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { defineCustomElement } from "@yxzq-element/utils";

export const SUPER_MESSAGE_TYPES = [
  "info",
  "success",
  "warning",
  "error",
] as const;
export const SUPER_MESSAGE_SIZES = ["large", "medium", "small"] as const;

export type SuperMessageType = (typeof SUPER_MESSAGE_TYPES)[number];
export type SuperMessageSize = (typeof SUPER_MESSAGE_SIZES)[number];

export interface SuperMessageCloseDetail {
  type: SuperMessageType;
}

export interface ShowSuperMessageOptions {
  message?: string;
  type?: SuperMessageType;
  duration?: number;
  closable?: boolean;
  closeLabel?: string;
  showIcon?: boolean;
  size?: SuperMessageSize;
}

export interface SuperMessageHandle {
  close: () => void;
}

const TYPE_ICONS: Record<SuperMessageType, string> = {
  info: "i",
  success: "✓",
  warning: "!",
  error: "×",
};

const isMessageType = (value: string): value is SuperMessageType =>
  (SUPER_MESSAGE_TYPES as readonly string[]).includes(value);

export class SuperMessage extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    message: { type: String, reflect: true },
    type: { type: String, reflect: true },
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
  };

  declare open: boolean;
  declare message: string;
  declare type: SuperMessageType;
  declare duration: number;
  declare closable: boolean;
  declare closeLabel: string;
  declare showIcon: boolean;
  declare size: SuperMessageSize;

  private closeTimer: number | undefined;

  constructor() {
    super();
    this.open = false;
    this.message = "";
    this.type = "info";
    this.duration = 3000;
    this.closable = false;
    this.closeLabel = "关闭提示";
    this.showIcon = true;
    this.size = "medium";
  }

  static styles = css`
    :host {
      --super-message-background: var(--super-background-color, #fffef9);
      --super-message-color: var(--super-text-color-primary, #292524);
      --super-message-border-color: var(--super-border-color, #2f2a27);
      --super-message-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-message-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-message-icon-color: var(--super-color-info, #7d8896);
      --super-message-focus-color: var(--super-focus-color, #56c6b7);
      --super-message-close-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        transparent
      );
      --super-message-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 4px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-lg, 14px) - 2px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 3px);
      --super-message-font-size: var(--super-font-size-base, 14px);
      --super-message-gap: var(--super-spacing-sm, 8px);
      --super-message-padding-block: 9px;
      --super-message-padding-inline: 14px;
      --super-message-icon-size: 22px;
      --super-message-max-width: 560px;
      --super-message-top: var(--super-spacing-lg, 16px);
      --super-message-z-index: var(--super-z-index-message, 3000);
      --super-message-rotation: var(--super-sketch-rotation, -0.25deg);

      position: fixed;
      top: var(--super-message-top);
      left: 50%;
      z-index: var(--super-message-z-index);
      display: block;
      box-sizing: border-box;
      inline-size: max-content;
      max-inline-size: min(calc(100vw - 32px), var(--super-message-max-width));
      color: var(--super-message-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-message-font-size);
      line-height: 1.5;
      pointer-events: none;
      transform: translateX(-50%);
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-message-font-size: var(--super-font-size-lg, 16px);
      --super-message-gap: var(--super-spacing-md, 12px);
      --super-message-padding-block: 12px;
      --super-message-padding-inline: 18px;
      --super-message-icon-size: 26px;
      --super-message-max-width: 600px;
    }

    :host([size="small"]) {
      --super-message-font-size: var(--super-font-size-sm, 13px);
      --super-message-gap: 6px;
      --super-message-padding-block: 7px;
      --super-message-padding-inline: 11px;
      --super-message-icon-size: 18px;
      --super-message-max-width: 480px;
    }

    :host([type="success"]) {
      --super-message-icon-color: var(--super-color-success, #86cf8b);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="warning"]) {
      --super-message-icon-color: var(--super-color-warning, #ffca50);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 45%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="error"]) {
      --super-message-icon-color: var(--super-color-danger, #ff7067);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    .message {
      display: flex;
      box-sizing: border-box;
      align-items: flex-start;
      gap: var(--super-message-gap);
      padding: var(--super-message-padding-block)
        var(--super-message-padding-inline);
      color: var(--super-message-color);
      font: inherit;
      background: var(--super-message-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-message-border-color);
      border-radius: var(--super-message-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-message-shadow-color);
      pointer-events: auto;
      transform: rotate(var(--super-message-rotation));
      transform-origin: center;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-message-icon-size);
      block-size: var(--super-message-icon-size);
      color: var(--super-message-icon-color);
      font-size: 0.85em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-message-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 48% 52% 45% 55% / 53% 46% 54% 47%;
    }

    .content {
      min-inline-size: 0;
      padding-block: 2px;
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
      background: var(--super-message-close-hover-background);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-message-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .message {
        transform: none;
      }
    }
  `;

  private get resolvedType(): SuperMessageType {
    return isMessageType(this.type) ? this.type : "info";
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
      new CustomEvent<SuperMessageCloseDetail>("super-message-close", {
        detail: { type: this.resolvedType },
        bubbles: true,
        composed: true,
      }),
    );
  }

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

    return html`
      <div
        class="message"
        part="message"
        role=${isAlert ? "alert" : "status"}
        aria-live=${isAlert ? "assertive" : "polite"}
        aria-atomic="true"
      >
        ${this.showIcon
          ? html`
              <span class="icon" part="icon" aria-hidden="true">
                ${TYPE_ICONS[type]}
              </span>
            `
          : nothing}
        <span class="content" part="content"><slot>${this.message}</slot></span>
        ${this.closable
          ? html`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            `
          : nothing}
      </div>
    `;
  }
}

export const showSuperMessage = (
  options: ShowSuperMessageOptions = {},
): SuperMessageHandle => {
  if (typeof document === "undefined") {
    return { close: () => {} };
  }

  const body = document.body;
  if (!body) {
    return { close: () => {} };
  }

  defineCustomElement("super-message", SuperMessage);
  const element = document.createElement("super-message") as SuperMessage;
  element.message = options.message ?? "";
  element.type = options.type ?? "info";
  element.duration = options.duration ?? 3000;
  element.closable = options.closable ?? false;
  element.closeLabel = options.closeLabel ?? "关闭提示";
  element.showIcon = options.showIcon ?? true;
  element.size = options.size ?? "medium";
  element.open = true;
  element.addEventListener("super-message-close", () => {
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
    "super-message": SuperMessage;
  }

  interface HTMLElementEventMap {
    "super-message-close": CustomEvent<SuperMessageCloseDetail>;
  }
}
