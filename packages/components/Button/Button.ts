import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const SUPER_BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "outline",
  "ghost",
  "text",
] as const;

export const SUPER_BUTTON_SIZES = ["large", "medium", "small"] as const;
export const SUPER_BUTTON_SHAPES = ["default", "pill", "square"] as const;

export type SuperButtonVariant = (typeof SUPER_BUTTON_VARIANTS)[number];
export type SuperButtonSize = (typeof SUPER_BUTTON_SIZES)[number];
export type SuperButtonShape = (typeof SUPER_BUTTON_SHAPES)[number];

export class SuperButton extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    shape: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    loadingText: { type: String, attribute: "loading-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare variant: SuperButtonVariant;
  declare size: SuperButtonSize;
  declare shape: SuperButtonShape;
  declare disabled: boolean;
  declare loading: boolean;
  declare loadingText: string;
  declare accessibleLabel: string;

  constructor() {
    super();
    this.variant = "primary";
    this.size = "medium";
    this.shape = "default";
    this.disabled = false;
    this.loading = false;
    this.loadingText = "";
    this.accessibleLabel = "";
  }

  static styles = css`
    :host {
      --super-button-height: 38px;
      --super-button-padding-inline: 17px;
      --super-button-gap: 7px;
      --super-button-font-size: 15px;
      --super-button-font-weight: 700;
      --super-button-background: #4b87f5;
      --super-button-background-hover: #6a9df7;
      --super-button-background-active: #3272e8;
      --super-button-color: #ffffff;
      --super-button-border-color: #174ea6;
      --super-button-shadow-color: #174ea6;
      --super-button-focus-color: #56c6b7;
      --super-button-rotation: -0.25deg;

      display: inline-block;
      max-inline-size: 100%;
      color: #292524;
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-button-height: 48px;
      --super-button-padding-inline: 22px;
      --super-button-gap: 9px;
      --super-button-font-size: 18px;
    }

    :host([size="small"]) {
      --super-button-height: 30px;
      --super-button-padding-inline: 12px;
      --super-button-gap: 5px;
      --super-button-font-size: 13px;
    }

    :host([variant="secondary"]) {
      --super-button-background: #f8fafc;
      --super-button-background-hover: #ffffff;
      --super-button-background-active: #dce3ea;
      --super-button-color: #292524;
      --super-button-border-color: #536170;
      --super-button-shadow-color: #a8b3bf;
    }

    :host([variant="success"]) {
      --super-button-background: #86cf8b;
      --super-button-background-hover: #a2dca5;
      --super-button-background-active: #66b96f;
      --super-button-color: #ffffff;
      --super-button-border-color: #2e7738;
      --super-button-shadow-color: #2e7738;
    }

    :host([variant="warning"]) {
      --super-button-background: #ffca50;
      --super-button-background-hover: #ffda79;
      --super-button-background-active: #edac27;
      --super-button-color: #352809;
      --super-button-border-color: #9e6508;
      --super-button-shadow-color: #b67b17;
    }

    :host([variant="danger"]) {
      --super-button-background: #ff7067;
      --super-button-background-hover: #ff918a;
      --super-button-background-active: #ed5148;
      --super-button-color: #ffffff;
      --super-button-border-color: #b7352f;
      --super-button-shadow-color: #b7352f;
    }

    :host([variant="outline"]) {
      --super-button-background: #fffef9;
      --super-button-background-hover: #edf4ff;
      --super-button-background-active: #d7e7ff;
      --super-button-color: #16428f;
      --super-button-border-color: #16428f;
      --super-button-shadow-color: #9fb7dc;
    }

    :host([variant="ghost"]) {
      --super-button-background: transparent;
      --super-button-background-hover: #f5f8fc;
      --super-button-background-active: #e7edf5;
      --super-button-color: #596779;
      --super-button-border-color: #9ba9ba;
      --super-button-shadow-color: transparent;
    }

    :host([variant="text"]) {
      --super-button-background: transparent;
      --super-button-background-hover: #eef5ff;
      --super-button-background-active: #dceaff;
      --super-button-color: #1d57bf;
      --super-button-border-color: transparent;
      --super-button-shadow-color: transparent;
      --super-button-padding-inline: 8px;
    }

    button {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-inline-size: var(--super-button-height);
      block-size: var(--super-button-height);
      margin: 0;
      padding: 0 var(--super-button-padding-inline);
      overflow: visible;
      color: var(--super-button-color);
      font: inherit;
      font-size: var(--super-button-font-size);
      font-weight: var(--super-button-font-weight);
      line-height: 1;
      letter-spacing: 0.02em;
      white-space: nowrap;
      background: var(--super-button-background);
      border: 2px solid var(--super-button-border-color);
      border-radius: 8px 11px 7px 10px / 9px 7px 10px 8px;
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 24%),
        2px 3px 0 -1px var(--super-button-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-button-rotation));
      transform-origin: center;
      transition:
        background-color 140ms ease,
        box-shadow 140ms ease,
        filter 140ms ease,
        transform 100ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    button::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 6px 9px 5px 8px / 7px 5px 8px 6px;
      opacity: 0.14;
      pointer-events: none;
      transform: rotate(0.35deg);
    }

    :host([variant="ghost"]) button {
      border-style: dashed;
      box-shadow: none;
    }

    :host([variant="ghost"]) button::after,
    :host([variant="text"]) button::after {
      display: none;
    }

    :host([variant="text"]) button {
      min-inline-size: 0;
      box-shadow: none;
    }

    :host([variant="text"]) button::before {
      position: absolute;
      right: 8px;
      bottom: 4px;
      left: 8px;
      content: "";
      border-bottom: 2px solid currentColor;
      opacity: 0;
      transform: rotate(-1.5deg) scaleX(0.7);
      transition: opacity 140ms ease, transform 140ms ease;
    }

    :host([shape="pill"]) button {
      padding-inline: calc(var(--super-button-padding-inline) + 3px);
      border-radius: 999px 920px 980px 900px / 860px 990px 910px 970px;
    }

    :host([shape="pill"]) button::after {
      border-radius: inherit;
    }

    :host([shape="square"]) button {
      inline-size: var(--super-button-height);
      min-inline-size: var(--super-button-height);
      padding: 0;
      border-radius: 10px 7px 11px 8px / 8px 11px 7px 10px;
    }

    .content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-inline-size: 100%;
      min-inline-size: 0;
      gap: var(--super-button-gap);
    }

    .label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-inline-size: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    slot {
      display: contents;
    }

    ::slotted([slot="prefix"]),
    ::slotted([slot="suffix"]) {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      inline-size: 1em;
      block-size: 1em;
      font-size: 1.15em;
      line-height: 1;
    }

    ::slotted(svg) {
      max-inline-size: 1.2em;
      max-block-size: 1.2em;
    }

    :host([shape="square"][loading]) .label {
      display: none;
    }

    .spinner {
      box-sizing: border-box;
      flex: none;
      inline-size: 1.05em;
      block-size: 1.05em;
      border: 2px dotted currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: super-button-spin 800ms steps(8, end) infinite;
    }

    button:focus-visible {
      outline: 3px solid var(--super-button-focus-color);
      outline-offset: 3px;
    }

    @media (hover: hover) {
      button:not(:disabled):hover {
        background: var(--super-button-background-hover);
        box-shadow:
          inset 0 0 0 1px rgb(255 255 255 / 28%),
          3px 4px 0 -1px var(--super-button-shadow-color);
        transform: translate(-1px, -1px) rotate(0.15deg);
      }

      :host([variant="text"]) button:not(:disabled):hover::before {
        opacity: 0.45;
        transform: rotate(-1.5deg) scaleX(1);
      }
    }

    button:not(:disabled):active {
      background: var(--super-button-background-active);
      box-shadow:
        inset 0 2px 3px rgb(15 23 42 / 18%),
        1px 1px 0 -1px var(--super-button-shadow-color);
      transform: translate(2px, 2px) rotate(-0.15deg);
    }

    button:disabled {
      cursor: not-allowed;
      filter: grayscale(0.18) saturate(0.62);
      box-shadow: 1px 1px 0 -1px var(--super-button-shadow-color);
      opacity: 0.46;
      transform: rotate(0deg);
    }

    :host([loading]) button:disabled {
      cursor: wait;
      filter: saturate(0.84);
      opacity: 0.88;
    }

    @keyframes super-button-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      button {
        transition: none;
      }

      .spinner {
        animation-duration: 1600ms;
      }
    }
  `;

  private get buttonElement(): HTMLButtonElement | null {
    return this.renderRoot?.querySelector("button") ?? null;
  }

  override click(): void {
    if (this.disabled || this.loading) {
      return;
    }

    const button = this.buttonElement;
    if (button) {
      button.click();
      return;
    }
    super.click();
  }

  override focus(options?: FocusOptions): void {
    const button = this.buttonElement;
    if (button) {
      button.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const button = this.buttonElement;
    if (button) {
      button.blur();
      return;
    }
    super.blur();
  }

  protected render() {
    const unavailable = this.disabled || this.loading;
    const label = this.loading && this.loadingText
      ? this.loadingText
      : html`<slot></slot>`;

    return html`
      <button
        part="button"
        type="button"
        ?disabled=${unavailable}
        aria-busy=${this.loading ? "true" : "false"}
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
      >
        <span class="content">
          ${this.loading
            ? html`<span class="spinner" part="spinner" aria-hidden="true"></span>`
            : html`<slot name="prefix"></slot>`}
          <span class="label" part="label">${label}</span>
          ${this.loading ? nothing : html`<slot name="suffix"></slot>`}
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-button": SuperButton;
  }
}
