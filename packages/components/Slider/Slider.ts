import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { styleMap } from "lit/directives/style-map.js";
import {
  createControlledValueGuard,
  runAttributeWrite,
} from "@yxzq-element/utils";

export const SUPER_SLIDER_SIZES = ["large", "medium", "small"] as const;
export const SUPER_SLIDER_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperSliderSize = (typeof SUPER_SLIDER_SIZES)[number];
export type SuperSliderValidation =
  (typeof SUPER_SLIDER_VALIDATIONS)[number];
export type SuperSliderValue = number | [number, number];

export interface SuperSliderChangeDetail {
  value: SuperSliderValue;
}

const sliderValueConverter = {
  fromAttribute(value: string | null): SuperSliderValue {
    return value === null || value === "" ? 0 : Number(value);
  },
  toAttribute(value: SuperSliderValue): string | null {
    return Array.isArray(value) ? null : String(value);
  },
};

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const round = (value: number): number => Number(value.toFixed(6));

const sameValue = (left: SuperSliderValue, right: SuperSliderValue): boolean =>
  Array.isArray(left) && Array.isArray(right)
    ? left[0] === right[0] && left[1] === right[1]
    : !Array.isArray(left) && !Array.isArray(right) && left === right;

export class SuperSlider extends LitElement {
  static properties = {
    value: {
      type: Number,
      reflect: true,
      converter: sliderValueConverter,
      noAccessor: true,
    },
    min: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    step: { type: Number, reflect: true },
    range: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    showTooltip: { type: Boolean, attribute: "show-tooltip", reflect: true },
    vertical: { type: Boolean, reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label" },
    startLabel: { type: String, attribute: "start-label" },
    endLabel: { type: String, attribute: "end-label" },
  };

  declare min: number;
  declare max: number;
  declare step: number;
  declare range: boolean;
  declare disabled: boolean;
  declare size: SuperSliderSize;
  declare validation: SuperSliderValidation;
  declare showTooltip: boolean;
  declare vertical: boolean;
  declare accessibleLabel: string;
  declare startLabel: string;
  declare endLabel: string;

  private _value: SuperSliderValue = 0;
  private readonly controlledValueGuard =
    createControlledValueGuard<SuperSliderValue>({
      host: this,
      getValue: () => this._value,
      setValue: (value) => this.setInternalValue(value),
      equals: sameValue,
    });

  get value(): SuperSliderValue {
    return this._value;
  }

  set value(value: SuperSliderValue) {
    this.controlledValueGuard.markExternal(value);
    this.setInternalValue(value);
  }

  private setInternalValue(value: SuperSliderValue): void {
    const oldValue = this._value;
    this._value = value;
    this.requestUpdate("value", oldValue);
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
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.range = false;
    this.disabled = false;
    this.size = "medium";
    this.validation = "none";
    this.showTooltip = false;
    this.vertical = false;
    this.accessibleLabel = "滑动条";
    this.startLabel = "起始值";
    this.endLabel = "结束值";
  }

  static styles = css`
    :host {
      --super-slider-width: 240px;
      --super-slider-track-size: 9px;
      --super-slider-thumb-size: 21px;
      --super-slider-color: var(--super-color-primary, #4b87f5);
      --super-slider-track-color: var(--super-border-color-lighter, #ddd5cd);
      --super-slider-thumb-color: var(--super-background-color, #fffef9);
      --super-slider-border-color: var(--super-border-color, #2f2a27);
      --super-slider-focus-color: var(--super-focus-color, #56c6b7);
      --super-slider-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-slider-validation-color: var(--super-slider-border-color);
      --super-slider-text-color: var(--super-text-color-primary, #292524);
      --super-slider-font-size: var(--super-font-size-base, 14px);
      --super-slider-rotation: var(--super-sketch-rotation, -0.25deg);
      display: inline-block;
      inline-size: var(--super-slider-width);
      max-inline-size: 100%;
      color: var(--super-slider-text-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-slider-font-size);
      line-height: 1.35;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-slider-width: 292px;
      --super-slider-track-size: 11px;
      --super-slider-thumb-size: 26px;
      --super-slider-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-slider-width: 176px;
      --super-slider-track-size: 7px;
      --super-slider-thumb-size: 17px;
      --super-slider-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-slider-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-slider-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-slider-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-slider-validation-color: var(--super-color-info, #64748b);
    }

    .root {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-block-size: calc(var(--super-slider-thumb-size) + 12px);
      padding: 6px 2px;
      border: 1.5px solid transparent;
      border-radius: 10px 14px 9px 12px / 12px 9px 14px 10px;
      transform: rotate(var(--super-slider-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        transform 120ms ease;
    }

    :host([validation]:not([validation="none"])) .root {
      background: color-mix(
        in srgb,
        var(--super-slider-validation-color) 6%,
        transparent
      );
      border-color: var(--super-slider-validation-color);
    }

    .track {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      block-size: var(--super-slider-track-size);
      background: var(--super-slider-track-color);
      border: 1.5px solid var(--super-slider-border-color);
      border-radius: 8px 11px 7px 10px / 9px 7px 11px 8px;
      box-shadow:
        inset 0 1px 2px rgb(15 23 42 / 14%),
        1.5px 2px 0 -1px var(--super-slider-shadow-color);
      cursor: pointer;
    }

    .track::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.08;
      pointer-events: none;
    }

    .fill {
      position: absolute;
      background: var(--super-slider-color);
      border-radius: inherit;
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 24%);
      pointer-events: none;
    }

    .native {
      position: absolute;
      inset: 0;
      z-index: 2;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      border: 0;
      outline: 0;
      appearance: none;
      pointer-events: none;
      cursor: pointer;
    }

    .native::-webkit-slider-runnable-track {
      background: transparent;
      border: 0;
    }

    .native::-moz-range-track {
      background: transparent;
      border: 0;
    }

    .native::-webkit-slider-thumb {
      box-sizing: border-box;
      inline-size: var(--super-slider-thumb-size);
      block-size: var(--super-slider-thumb-size);
      margin-top: calc(
        (var(--super-slider-track-size) - var(--super-slider-thumb-size)) / 2
      );
      background: var(--super-slider-thumb-color);
      border: 2px solid var(--super-slider-border-color);
      border-radius: 44% 56% 47% 53% / 52% 45% 55% 48%;
      box-shadow:
        1.5px 2px 0 -1px var(--super-slider-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 42%);
      appearance: none;
      pointer-events: auto;
      cursor: grab;
    }

    .native::-moz-range-thumb {
      box-sizing: border-box;
      inline-size: var(--super-slider-thumb-size);
      block-size: var(--super-slider-thumb-size);
      background: var(--super-slider-thumb-color);
      border: 2px solid var(--super-slider-border-color);
      border-radius: 44% 56% 47% 53% / 52% 45% 55% 48%;
      box-shadow:
        1.5px 2px 0 -1px var(--super-slider-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 42%);
      pointer-events: auto;
      cursor: grab;
    }

    .native:focus-visible {
      outline: none;
    }

    .native:focus-visible::-webkit-slider-thumb {
      outline: 3px solid var(--super-slider-focus-color);
      outline-offset: 3px;
    }

    .native:focus-visible::-moz-range-thumb {
      outline: 3px solid var(--super-slider-focus-color);
      outline-offset: 3px;
    }

    :host([vertical]) {
      inline-size: auto;
      block-size: 240px;
    }

    :host([vertical][size="large"]) {
      block-size: 292px;
    }

    :host([vertical][size="small"]) {
      block-size: 176px;
    }

    :host([vertical]) .root {
      block-size: 100%;
      inline-size: auto;
      min-inline-size: calc(var(--super-slider-thumb-size) + 12px);
      padding: 2px 6px;
    }

    :host([vertical]) .track {
      inline-size: var(--super-slider-track-size);
      block-size: auto;
      align-self: stretch;
    }

    :host([vertical]) .native {
      writing-mode: vertical-lr;
      direction: rtl;
    }

    .tooltip {
      position: absolute;
      z-index: 3;
      box-sizing: border-box;
      min-inline-size: 2.2em;
      padding: 2px 6px;
      color: var(--super-slider-text-color);
      font-size: 0.78em;
      font-variant-numeric: tabular-nums;
      line-height: 1.2;
      text-align: center;
      background: var(--super-slider-thumb-color);
      border: 1.5px solid var(--super-slider-border-color);
      border-radius: 6px 9px 5px 8px / 8px 5px 9px 6px;
      box-shadow: 1.5px 2px 0 -1px var(--super-slider-shadow-color);
      pointer-events: none;
      transform: translate(-50%, -100%);
    }

    .tooltip::after {
      position: absolute;
      top: 100%;
      left: 50%;
      inline-size: 7px;
      block-size: 7px;
      content: "";
      background: inherit;
      border-right: 1.5px solid var(--super-slider-border-color);
      border-bottom: 1.5px solid var(--super-slider-border-color);
      transform: translate(-50%, -4px) rotate(45deg);
    }

    :host([vertical]) .tooltip {
      top: auto;
      left: calc(100% + 7px);
      transform: translate(0, 50%);
    }

    :host([vertical]) .tooltip::after {
      top: 50%;
      left: -4px;
      border: 0;
      border-bottom: 1.5px solid var(--super-slider-border-color);
      border-left: 1.5px solid var(--super-slider-border-color);
      transform: translate(0, -50%) rotate(45deg);
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.46;
    }

    :host([disabled]) .track {
      cursor: not-allowed;
      filter: grayscale(0.35);
    }

    :host([disabled]) .native::-webkit-slider-thumb,
    :host([disabled]) .native::-moz-range-thumb {
      cursor: not-allowed;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .root:hover {
        border-color: var(--super-slider-color);
        transform: translate(-0.5px, -0.5px) rotate(0.08deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .root {
        transition: none;
      }
    }
  `;

  private get resolvedMin(): number {
    return Number.isFinite(this.min) ? this.min : 0;
  }

  private get resolvedMax(): number {
    const min = this.resolvedMin;
    const max = Number.isFinite(this.max) ? this.max : min + 100;
    return max > min ? max : min;
  }

  private get resolvedStep(): number {
    return Number.isFinite(this.step) && this.step > 0 ? this.step : 1;
  }

  private quantize(raw: number): number {
    const min = this.resolvedMin;
    const max = this.resolvedMax;
    const step = this.resolvedStep;
    const bounded = clamp(raw, min, max);
    return round(clamp(min + Math.round((bounded - min) / step) * step, min, max));
  }

  private get singleValue(): number {
    const raw = Array.isArray(this.value) ? this.value[0] : this.value;
    return this.quantize(Number.isFinite(raw) ? raw : this.resolvedMin);
  }

  private get rangeValue(): [number, number] {
    const min = this.resolvedMin;

    if (Array.isArray(this.value) && this.value.length >= 2) {
      const first = this.quantize(Number(this.value[0]));
      const second = this.quantize(Number(this.value[1]));
      return first <= second ? [first, second] : [second, first];
    }

    return [min, this.resolvedMax];
  }

  private get startValue(): number {
    return this.range ? this.rangeValue[0] : this.resolvedMin;
  }

  private get endValue(): number {
    return this.range ? this.rangeValue[1] : this.singleValue;
  }

  private percent(value: number): number {
    const min = this.resolvedMin;
    const max = this.resolvedMax;
    return max === min ? 0 : ((value - min) / (max - min)) * 100;
  }

  private inputElements(): HTMLInputElement[] {
    return Array.from(
      this.renderRoot?.querySelectorAll<HTMLInputElement>(".native") ?? [],
    );
  }

  override focus(options?: FocusOptions): void {
    const input = this.inputElements()[0];
    if (input) {
      input.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    this.inputElements()[0]?.blur();
  }

  override disconnectedCallback(): void {
    this.controlledValueGuard.dispose();
    super.disconnectedCallback();
  }

  private syncInputs(): void {
    const inputs = this.inputElements();
    const values = this.range ? this.rangeValue : [this.singleValue];

    inputs.forEach((input, index) => {
      const value = values[index] ?? values[0] ?? this.resolvedMin;
      input.value = String(value);
      input.setAttribute("aria-valuemin", String(this.resolvedMin));
      input.setAttribute("aria-valuemax", String(this.resolvedMax));
      input.setAttribute("aria-valuenow", String(value));
    });
  }

  private emitChange(value: SuperSliderValue): void {
    this.dispatchEvent(
      new CustomEvent<SuperSliderChangeDetail>("super-slider-change", {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private commit(value: SuperSliderValue): void {
    const current = this.range ? this.rangeValue : this.singleValue;
    if (this.disabled || sameValue(value, current)) {
      this.syncInputs();
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(value);
    this.emitChange(value);
    this.syncInputs();
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private valueFromInput(input: HTMLInputElement): number {
    return this.quantize(Number(input.value));
  }

  private handleInput(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    const index = this.inputElements().indexOf(input);
    if (this.range) {
      const [start, end] = this.rangeValue;
      const next: [number, number] = [start, end];
      if (index <= 0) {
        next[0] = clamp(this.valueFromInput(input), this.resolvedMin, end);
      } else {
        next[1] = clamp(this.valueFromInput(input), start, this.resolvedMax);
      }
      this.commit(next);
      return;
    }
    this.commit(this.valueFromInput(input));
  }

  private handleChange(event: Event): void {
    this.handleInput(event);
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    const input = event.currentTarget as HTMLInputElement;
    const inputs = this.inputElements();
    const index = inputs.indexOf(input);
    const isRange = this.range;
    const values = isRange ? this.rangeValue : [this.singleValue];
    const current = values[index] ?? values[0] ?? this.resolvedMin;
    const step = this.resolvedStep;
    let next = current;
    let handled = true;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = current + step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        next = current - step;
        break;
      case "Home":
        next = isRange && index > 0 ? values[0] : this.resolvedMin;
        break;
      case "End":
        next = isRange && index === 0 ? values[1] : this.resolvedMax;
        break;
      case "PageUp":
        next = current + step * 10;
        break;
      case "PageDown":
        next = current - step * 10;
        break;
      default:
        handled = false;
    }

    if (!handled) {
      return;
    }

    event.preventDefault();
    next = this.quantize(next);

    if (isRange) {
      const pair: [number, number] = [values[0], values[1]];
      if (index <= 0) {
        pair[0] = clamp(next, this.resolvedMin, pair[1]);
      } else {
        pair[1] = clamp(next, pair[0], this.resolvedMax);
      }
      this.commit(pair);
      return;
    }

    this.commit(next);
  }

  private handleTrackClick(event: MouseEvent): void {
    if (this.disabled || event.target instanceof HTMLInputElement) {
      return;
    }

    const track = event.currentTarget as HTMLElement;
    const rect = track.getBoundingClientRect();
    const length = this.vertical ? rect.height : rect.width;
    if (!length) {
      return;
    }

    const offset = this.vertical
      ? rect.bottom - event.clientY
      : event.clientX - rect.left;
    const ratio = clamp(offset / length, 0, 1);
    const next = this.quantize(
      this.resolvedMin + ratio * (this.resolvedMax - this.resolvedMin),
    );

    if (!this.range) {
      this.commit(next);
      return;
    }

    const [start, end] = this.rangeValue;
    const pair: [number, number] =
      Math.abs(next - start) <= Math.abs(next - end)
        ? [next, end]
        : [start, next];
    this.commit(pair[0] <= pair[1] ? pair : [pair[1], pair[0]]);
  }

  private renderTooltip(value: number, index: number) {
    const position = this.percent(value);
    const style = this.vertical
      ? { bottom: `${position}%`, left: "100%" }
      : { left: `${position}%`, top: "-4px" };

    return html`
      <span
        class="tooltip"
        part=${index === 0 ? "tooltip tooltip-start" : "tooltip tooltip-end"}
        style=${styleMap(style)}
        aria-hidden="true"
      >${value}</span>
    `;
  }

  private renderInput(index: number, value: number, total: number) {
    const label = total > 1
      ? index === 0
        ? this.startLabel
        : this.endLabel
      : this.accessibleLabel;

    return html`
      <input
        class="native"
        part="input"
        type="range"
        min=${this.resolvedMin}
        max=${this.resolvedMax}
        step=${this.resolvedStep}
        .value=${live(String(value))}
        aria-label=${label}
        aria-orientation=${this.vertical ? "vertical" : "horizontal"}
        aria-valuemin=${this.resolvedMin}
        aria-valuemax=${this.resolvedMax}
        aria-valuenow=${value}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @keydown=${this.handleKeydown}
      />
    `;
  }

  protected render() {
    const start = this.startValue;
    const end = this.endValue;
    const startPercent = this.percent(start);
    const endPercent = this.percent(end);
    const fillStyle = this.vertical
      ? {
          insetInline: "0",
          insetBlockEnd: `${startPercent}%`,
          blockSize: `${Math.max(0, endPercent - startPercent)}%`,
        }
      : {
          insetBlock: "0",
          insetInlineStart: `${startPercent}%`,
          inlineSize: `${Math.max(0, endPercent - startPercent)}%`,
        };

    return html`
      <div
        class="root"
        part="root"
        role=${ifDefined(this.range ? "group" : undefined)}
        aria-label=${ifDefined(this.range ? this.accessibleLabel : undefined)}
      >
        <div class="track" part="track" @click=${this.handleTrackClick}>
          <div class="fill" part="fill" style=${styleMap(fillStyle)}></div>
          ${this.range
            ? this.renderInput(0, start, 2)
            : this.renderInput(0, end, 1)}
          ${this.range ? this.renderInput(1, end, 2) : nothing}
        </div>
        ${this.showTooltip
          ? this.range
            ? html`
                ${this.renderTooltip(start, 0)}
                ${this.renderTooltip(end, 1)}
              `
            : this.renderTooltip(end, 1)
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-slider": SuperSlider;
  }

  interface HTMLElementEventMap {
    "super-slider-change": CustomEvent<SuperSliderChangeDetail>;
  }
}
