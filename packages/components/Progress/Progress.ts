import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

export const SUPER_PROGRESS_VARIANTS = ["line", "circle"] as const;
export const SUPER_PROGRESS_STATUSES = [
  "default",
  "success",
  "warning",
  "danger",
] as const;
export const SUPER_PROGRESS_SIZES = ["large", "medium", "small"] as const;

export type SuperProgressVariant = (typeof SUPER_PROGRESS_VARIANTS)[number];
export type SuperProgressStatus = (typeof SUPER_PROGRESS_STATUSES)[number];
export type SuperProgressSize = (typeof SUPER_PROGRESS_SIZES)[number];
export type SuperProgressFormat = (value: number, max: number) => string;

const CIRCLE_RADIUS = 42;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export class SuperProgress extends LitElement {
  static properties = {
    value: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    variant: { type: String, reflect: true },
    status: { type: String, reflect: true },
    size: { type: String, reflect: true },
    showText: { type: Boolean, attribute: "show-text", reflect: true },
    format: { attribute: false },
    indeterminate: { type: Boolean, reflect: true },
    striped: { type: Boolean, reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare value: number;
  declare max: number;
  declare variant: SuperProgressVariant;
  declare status: SuperProgressStatus;
  declare size: SuperProgressSize;
  declare showText: boolean;
  declare format: SuperProgressFormat | undefined;
  declare indeterminate: boolean;
  declare striped: boolean;
  declare accessibleLabel: string;

  private customText = "";

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.variant = "line";
    this.status = "default";
    this.size = "medium";
    this.showText = true;
    this.format = undefined;
    this.indeterminate = false;
    this.striped = false;
    this.accessibleLabel = "";
  }

  static styles = css`
    :host {
      --super-progress-height: 10px;
      --super-progress-circle-size: 88px;
      --super-progress-font-size: var(--super-font-size-sm, 13px);
      --super-progress-gap: var(--super-spacing-sm, 8px);
      --super-progress-color: var(--super-color-primary, #4b87f5);
      --super-progress-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-progress-track-color: var(--super-background-color-soft, #f7f4ec);
      --super-progress-track-border-color: var(--super-border-color-light, #b6ada6);
      --super-progress-text-color: var(--super-text-color-regular, #4a4441);
      --super-progress-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
      --super-progress-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      color: var(--super-progress-text-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-progress-font-size);
      line-height: 1.3;
    }

    :host([hidden]) {
      display: none;
    }

    :host([variant="circle"]) {
      display: inline-block;
      inline-size: auto;
    }

    :host([size="large"]) {
      --super-progress-height: 14px;
      --super-progress-circle-size: 112px;
      --super-progress-font-size: var(--super-font-size-base, 14px);
    }

    :host([size="small"]) {
      --super-progress-height: 6px;
      --super-progress-circle-size: 64px;
      --super-progress-font-size: 12px;
    }

    :host([status="success"]) {
      --super-progress-color: var(--super-color-success, #86cf8b);
      --super-progress-border-color: #2e7738;
    }

    :host([status="warning"]) {
      --super-progress-color: var(--super-color-warning, #ffca50);
      --super-progress-border-color: #9e6508;
    }

    :host([status="danger"]) {
      --super-progress-color: var(--super-color-danger, #ff7067);
      --super-progress-border-color: #b7352f;
    }

    .progress {
      position: relative;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      inline-size: 100%;
      gap: var(--super-progress-gap);
    }

    :host([variant="circle"]) .progress {
      inline-size: var(--super-progress-circle-size);
      block-size: var(--super-progress-circle-size);
    }

    .track {
      position: relative;
      box-sizing: border-box;
      flex: 1 1 auto;
      inline-size: 100%;
      block-size: var(--super-progress-height);
      overflow: hidden;
      background: var(--super-progress-track-color);
      border: 1.5px solid var(--super-progress-track-border-color);
      border-radius: var(--super-progress-radius);
      transform: rotate(var(--super-progress-rotation));
    }

    .bar {
      position: relative;
      box-sizing: border-box;
      block-size: 100%;
      min-inline-size: 0;
      background-color: var(--super-progress-color);
      background-image:
        linear-gradient(
          90deg,
          rgb(255 255 255 / 0%) 0%,
          rgb(255 255 255 / 26%) 50%,
          rgb(255 255 255 / 0%) 100%
        );
      border: 1px solid var(--super-progress-border-color);
      border-radius: var(--super-progress-radius);
      transition: inline-size var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([striped]) .bar {
      background-image:
        repeating-linear-gradient(
          -45deg,
          rgb(255 255 255 / 0%) 0 6px,
          rgb(255 255 255 / 32%) 6px 12px
        );
      background-size: 24px 24px;
      animation: super-progress-stripes 900ms linear infinite;
    }

    :host([indeterminate]) .bar {
      inline-size: 42%;
      animation: super-progress-indeterminate 1.35s ease-in-out infinite;
    }

    :host([indeterminate][striped]) .bar {
      animation:
        super-progress-indeterminate 1.35s ease-in-out infinite,
        super-progress-stripes 900ms linear infinite;
    }

    .text {
      flex: none;
      color: var(--super-progress-text-color);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    :host([variant="circle"]) .text {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      font-size: calc(var(--super-progress-font-size) + 1px);
      font-weight: 700;
      pointer-events: none;
    }

    slot {
      display: contents;
    }

    .circle {
      inline-size: 100%;
      block-size: 100%;
      overflow: visible;
      transform: rotate(-90deg);
    }

    .circle-track {
      fill: none;
      stroke: var(--super-progress-track-color);
      stroke-width: 9;
    }

    .circle-bar {
      fill: none;
      stroke: var(--super-progress-color);
      stroke-linecap: round;
      stroke-width: 9;
      transition: stroke-dashoffset var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([indeterminate]) .circle {
      animation: super-progress-rotate 1.4s linear infinite;
    }

    :host([indeterminate]) .circle-bar {
      stroke-dasharray: 66 198;
      animation: super-progress-circle-dash 1.6s ease-in-out infinite;
    }

    @keyframes super-progress-indeterminate {
      0% {
        transform: translateX(-120%) scaleX(0.55);
      }

      55% {
        transform: translateX(90%) scaleX(0.9);
      }

      100% {
        transform: translateX(260%) scaleX(0.55);
      }
    }

    @keyframes super-progress-stripes {
      to {
        background-position: 24px 0;
      }
    }

    @keyframes super-progress-rotate {
      from {
        transform: rotate(-90deg);
      }

      to {
        transform: rotate(270deg);
      }
    }

    @keyframes super-progress-circle-dash {
      0% {
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dashoffset: -66;
      }

      100% {
        stroke-dashoffset: -264;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .bar,
      .circle-bar {
        transition: none;
      }

      :host([striped]) .bar,
      :host([indeterminate]) .bar,
      :host([indeterminate][striped]) .bar {
        animation: none;
      }

      :host([indeterminate]) .bar {
        inline-size: 100%;
        opacity: 0.55;
      }

      :host([indeterminate]) .circle,
      :host([indeterminate]) .circle-bar {
        animation: none;
      }
    }
  `;

  private get safeMax(): number {
    return Number.isFinite(this.max) ? this.max : 0;
  }

  private get clampedValue(): number {
    const value = Number.isFinite(this.value) ? this.value : 0;
    return Math.min(Math.max(value, 0), Math.max(this.safeMax, 0));
  }

  private get percent(): number {
    if (this.safeMax <= 0) {
      return 0;
    }

    return (this.clampedValue / this.safeMax) * 100;
  }

  private get progressText(): string {
    if (this.format) {
      return this.format(this.clampedValue, this.safeMax);
    }

    if (this.indeterminate) {
      return "";
    }

    return `${Math.round(this.percent)}%`;
  }

  private syncCustomText = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const text = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent ?? "")
      .join("")
      .trim();

    if (text !== this.customText) {
      this.customText = text;
      this.requestUpdate();
    }
  };

  private renderLine() {
    const barStyle = this.indeterminate
      ? {}
      : { inlineSize: `${this.percent}%` };

    return html`
      <div class="track" part="track">
        <div class="bar" part="bar" style=${styleMap(barStyle)}></div>
      </div>
    `;
  }

  private renderCircle() {
    const dashOffset = this.indeterminate
      ? undefined
      : CIRCLE_CIRCUMFERENCE * (1 - this.percent / 100);

    return html`
      <svg
        class="circle"
        part="circle"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          class="circle-track"
          part="circle-track"
          cx="50"
          cy="50"
          r=${CIRCLE_RADIUS}
        ></circle>
        <circle
          class="circle-bar"
          part="circle-bar"
          cx="50"
          cy="50"
          r=${CIRCLE_RADIUS}
          stroke-dasharray=${ifDefined(
            this.indeterminate ? undefined : CIRCLE_CIRCUMFERENCE,
          )}
          stroke-dashoffset=${ifDefined(dashOffset)}
        ></circle>
      </svg>
    `;
  }

  protected render() {
    const text = this.progressText;
    const valueText = this.indeterminate
      ? undefined
      : this.customText || text || undefined;

    return html`
      <div
        class="progress"
        part="progress"
        role="progressbar"
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
        aria-valuemin="0"
        aria-valuemax=${this.safeMax}
        aria-valuenow=${ifDefined(
          this.indeterminate ? undefined : this.clampedValue,
        )}
        aria-valuetext=${ifDefined(valueText)}
      >
        ${this.variant === "circle" ? this.renderCircle() : this.renderLine()}
        ${this.showText
          ? html`
              <span class="text" part="text">
                <slot @slotchange=${this.syncCustomText}>${text}</slot>
              </span>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-progress": SuperProgress;
  }
}
