import { css, html, LitElement, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { sketchyShadow } from "@yxzq-element/utils";

export const SUPER_BADGE_STATUSES = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export const SUPER_BADGE_SIZES = ["large", "medium", "small"] as const;

export type SuperBadgeStatus = (typeof SUPER_BADGE_STATUSES)[number];
export type SuperBadgeSize = (typeof SUPER_BADGE_SIZES)[number];

export class SuperBadge extends LitElement {
  static properties = {
    value: { type: String, reflect: true },
    max: { type: Number, reflect: true },
    dot: { type: Boolean, reflect: true },
    status: { type: String, reflect: true },
    size: { type: String, reflect: true },
    hidden: { type: Boolean, reflect: true },
  };

  declare value: string | number;
  declare max: number;
  declare dot: boolean;
  declare status: SuperBadgeStatus;
  declare size: SuperBadgeSize;
  declare hidden: boolean;

  constructor() {
    super();
    this.value = "";
    this.max = 99;
    this.dot = false;
    this.status = "primary";
    this.size = "medium";
    this.hidden = false;
  }

  static styles = css`
    :host {
      --super-badge-height: 20px;
      --super-badge-min-width: 20px;
      --super-badge-dot-size: 9px;
      --super-badge-offset: 4px;
      --super-badge-padding-inline: 5px;
      --super-badge-font-size: 12px;
      --super-badge-color: #1f1915;
      --super-badge-background: var(--super-color-primary, #4b87f5);
      --super-badge-border-color: #174ea6;
      --super-badge-shadow-color: rgb(23 78 166 / 24%);
      --super-badge-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px);
      --super-badge-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-text-color-primary, #292524);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: inline-flex !important;
    }

    :host([size="large"]) {
      --super-badge-height: 24px;
      --super-badge-min-width: 24px;
      --super-badge-dot-size: 11px;
      --super-badge-offset: 5px;
      --super-badge-padding-inline: 7px;
      --super-badge-font-size: 14px;
      --super-badge-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 3px)
        var(--super-radius-md, 9px);
    }

    :host([size="small"]) {
      --super-badge-height: 16px;
      --super-badge-min-width: 16px;
      --super-badge-dot-size: 7px;
      --super-badge-offset: 3px;
      --super-badge-padding-inline: 4px;
      --super-badge-font-size: 10px;
      --super-badge-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        5px
        calc(var(--super-radius-sm, 6px) + 2px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px);
    }

    :host([status="success"]) {
      --super-badge-background: var(--super-color-success, #86cf8b);
      --super-badge-border-color: #2e7738;
      --super-badge-shadow-color: rgb(46 119 56 / 22%);
    }

    :host([status="warning"]) {
      --super-badge-background: var(--super-color-warning, #ffca50);
      --super-badge-border-color: #9e6508;
      --super-badge-color: #352809;
      --super-badge-shadow-color: rgb(158 101 8 / 22%);
    }

    :host([status="danger"]) {
      --super-badge-background: var(--super-color-danger, #ff7067);
      --super-badge-border-color: #b7352f;
      --super-badge-shadow-color: rgb(183 53 47 / 22%);
    }

    :host([status="info"]) {
      --super-badge-background: var(--super-color-info, #7d8896);
      --super-badge-border-color: #536170;
      --super-badge-shadow-color: rgb(89 103 121 / 20%);
    }

    .container {
      position: relative;
      display: inline-flex;
      align-items: center;
      max-inline-size: 100%;
      min-inline-size: 0;
    }

    .content {
      display: inline-flex;
      align-items: center;
      max-inline-size: 100%;
      min-inline-size: 0;
    }

    .badge {
      position: absolute;
      inset-block-start: calc(-1 * var(--super-badge-offset));
      inset-inline-end: calc(-1 * var(--super-badge-offset));
      z-index: 1;
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      min-inline-size: var(--super-badge-min-width);
      block-size: var(--super-badge-height);
      padding-inline: var(--super-badge-padding-inline);
      color: var(--super-badge-color);
      font: inherit;
      font-size: var(--super-badge-font-size);
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      background: var(--super-badge-background);
      border: var(--super-sketch-width, 2px) solid var(--super-badge-border-color);
      border-radius: var(--super-badge-radius);
      box-shadow: ${unsafeCSS(sketchyShadow({ color: "var(--super-badge-shadow-color)" }))};
      transform: translate(50%, -50%) rotate(var(--super-badge-rotation));
      transform-origin: center;
    }

    .badge[data-dot] {
      inline-size: var(--super-badge-dot-size);
      min-inline-size: var(--super-badge-dot-size);
      block-size: var(--super-badge-dot-size);
      padding: 0;
      border-radius: 48% 52% 47% 53% / 53% 46% 54% 47%;
    }

    slot {
      display: contents;
    }
  `;

  private get displayValue(): string {
    const raw = this.value;
    if (raw === "" || raw === null || raw === undefined) {
      return "";
    }

    const text = String(raw).trim();
    if (text === "") {
      return "";
    }

    const numeric = Number(text);
    if (Number.isFinite(numeric) && this.max > 0 && numeric > this.max) {
      return `${this.max}+`;
    }

    return text;
  }

  private get shouldShowBadge(): boolean {
    return !this.hidden && (this.dot || this.displayValue !== "");
  }

  protected render() {
    const showBadge = this.shouldShowBadge;
    const value = this.displayValue;

    return html`
      <span class="container" part="container">
        <span class="content" part="content"><slot></slot></span>
        ${showBadge
          ? html`
              <span
                class="badge"
                part="badge"
                data-dot=${ifDefined(this.dot ? "" : undefined)}
                role=${ifDefined(this.dot ? undefined : "status")}
                aria-hidden=${ifDefined(this.dot ? "true" : undefined)}
              >${this.dot ? "" : value}</span>
            `
          : null}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-badge": SuperBadge;
  }
}
