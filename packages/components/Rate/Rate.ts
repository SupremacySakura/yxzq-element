import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const SUPER_RATE_SIZES = ["large", "medium", "small"] as const;
export const SUPER_RATE_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperRateSize = (typeof SUPER_RATE_SIZES)[number];
export type SuperRateValidation = (typeof SUPER_RATE_VALIDATIONS)[number];

export interface SuperRateChangeDetail {
  value: number;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export class SuperRate extends LitElement {
  static properties = {
    value: { type: Number, reflect: true },
    max: { type: Number, reflect: true },
    allowHalf: { type: Boolean, attribute: "allow-half", reflect: true },
    readonly: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    clearable: { type: Boolean, reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label" },
    clearLabel: { type: String, attribute: "clear-label" },
  };

  declare value: number;
  declare max: number;
  declare allowHalf: boolean;
  declare readonly: boolean;
  declare disabled: boolean;
  declare size: SuperRateSize;
  declare validation: SuperRateValidation;
  declare clearable: boolean;
  declare accessibleLabel: string;
  declare clearLabel: string;

  private hoverValue: number | undefined;
  private iconNodes: Node[] = [];
  private hasCustomIcon = false;

  constructor() {
    super();
    this.value = 0;
    this.max = 5;
    this.allowHalf = false;
    this.readonly = false;
    this.disabled = false;
    this.size = "medium";
    this.validation = "none";
    this.clearable = false;
    this.accessibleLabel = "评分";
    this.clearLabel = "清除评分";
  }

  static styles = css`
    :host {
      --super-rate-size: 27px;
      --super-rate-gap: 5px;
      --super-rate-color: var(--super-border-color-light, #b6ada6);
      --super-rate-active-color: #f0b429;
      --super-rate-border-color: var(--super-border-color, #2f2a27);
      --super-rate-focus-color: var(--super-focus-color, #56c6b7);
      --super-rate-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-rate-validation-color: var(--super-rate-border-color);
      --super-rate-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-rate-font-size: var(--super-font-size-base, 14px);

      display: inline-block;
      color: var(--super-rate-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-rate-font-size);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-rate-size: 33px;
      --super-rate-gap: 6px;
      --super-rate-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-rate-size: 21px;
      --super-rate-gap: 4px;
      --super-rate-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-rate-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-rate-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-rate-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-rate-validation-color: var(--super-color-info, #64748b);
    }

    .root {
      display: inline-flex;
      align-items: center;
      gap: var(--super-rate-gap);
      box-sizing: border-box;
      padding: 4px;
      border: 1.5px solid transparent;
      border-radius: 9px 13px 8px 12px / 12px 8px 13px 9px;
      transform: rotate(var(--super-rate-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        transform 120ms ease;
    }

    :host([validation]:not([validation="none"])) .root {
      background: color-mix(
        in srgb,
        var(--super-rate-validation-color) 6%,
        transparent
      );
      border-color: var(--super-rate-validation-color);
    }

    .star {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-rate-size);
      block-size: var(--super-rate-size);
      padding: 0;
      color: var(--super-rate-color);
      font: inherit;
      font-size: var(--super-rate-size);
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 43% 57% 46% 54% / 54% 44% 56% 46%;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .star::before {
      position: absolute;
      inset: -2px;
      content: "";
      border: 1.5px solid transparent;
      border-radius: inherit;
      pointer-events: none;
    }

    .symbol {
      position: relative;
      display: inline-grid;
      place-items: center;
      inline-size: 100%;
      block-size: 100%;
      color: var(--super-rate-color);
      line-height: 1;
      text-shadow: 1px 1px 0 var(--super-rate-shadow-color);
      transition:
        color 100ms ease,
        transform 110ms ease;
    }

    .symbol.full {
      color: var(--super-rate-active-color);
    }

    .symbol.half .active-copy {
      clip-path: inset(0 50% 0 0);
    }

    .symbol.full .active-copy {
      color: var(--super-rate-active-color);
    }

    .icon-copy {
      display: inline-grid;
      place-items: center;
      line-height: 1;
    }

    .icon-copy > * {
      color: inherit;
      fill: currentColor;
      stroke: currentColor;
    }

    .icon-copy.active-copy {
      position: absolute;
      inset: 0;
      color: var(--super-rate-active-color);
      text-shadow: 1px 1px 0 var(--super-rate-shadow-color);
    }

    .icon-source {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    :host([disabled]) {
      opacity: 0.46;
    }

    :host([disabled]) .star {
      cursor: not-allowed;
    }

    :host([readonly]) .star {
      cursor: default;
    }

    .root:focus-visible {
      outline: 3px solid var(--super-rate-focus-color);
      outline-offset: 2px;
      transform: rotate(0deg);
    }

    :host([validation="error"]) .star::before {
      border-color: var(--super-rate-validation-color);
    }

    @media (hover: hover) {
      :host(:not([disabled]):not([readonly])) .star:hover .symbol {
        transform: scale(1.08) rotate(-2deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .root,
      .symbol {
        transition: none;
      }
    }
  `;

  private get resolvedMax(): number {
    const max = Number.isFinite(this.max) ? Math.trunc(this.max) : 5;
    return Math.max(1, max);
  }

  private get step(): number {
    return this.allowHalf ? 0.5 : 1;
  }

  private get resolvedValue(): number {
    const raw = Number.isFinite(this.value) ? this.value : 0;
    const quantized = Math.round(raw / this.step) * this.step;
    return clamp(Number(quantized.toFixed(1)), 0, this.resolvedMax);
  }

  private get isInteractive(): boolean {
    return !this.disabled && !this.readonly;
  }

  private emitChange(value: number): void {
    this.dispatchEvent(
      new CustomEvent<SuperRateChangeDetail>("super-rate-change", {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private commit(value: number): void {
    if (!this.isInteractive) {
      return;
    }

    const quantized = clamp(
      Number((Math.round(value / this.step) * this.step).toFixed(1)),
      0,
      this.resolvedMax,
    );
    this.value = quantized;
    this.emitChange(quantized);
  }

  private valueForPointer(event: PointerEvent | MouseEvent): number {
    const star = event.currentTarget as HTMLElement;
    const rect = star.getBoundingClientRect();
    const ratio = rect.width ? (event.clientX - rect.left) / rect.width : 1;
    const index = Number(star.dataset.index ?? 0);
    if (this.allowHalf && ratio <= 0.5) {
      return index + 0.5;
    }
    return index + 1;
  }

  private handleStarClick(event: MouseEvent): void {
    if (!this.isInteractive) {
      return;
    }
    const next = this.valueForPointer(event);
    this.focus();
    this.commit(this.clearable && next === this.resolvedValue ? 0 : next);
  }

  private handlePointerMove(event: PointerEvent): void {
    if (!this.isInteractive) {
      return;
    }
    const next = this.valueForPointer(event);
    if (next !== this.hoverValue) {
      this.hoverValue = next;
      this.requestUpdate();
    }
  }

  private handlePointerLeave(): void {
    if (this.hoverValue !== undefined) {
      this.hoverValue = undefined;
      this.requestUpdate();
    }
  }

  private handleIconSlotChange(event: Event): void {
    const slot = event.currentTarget as HTMLSlotElement;
    const nodes = slot.assignedNodes({ flatten: true }).filter((node) =>
      node.nodeType === Node.ELEMENT_NODE ||
      Boolean(node.textContent?.trim())
    );
    this.iconNodes = nodes.map((node) => {
      const clone = node.cloneNode(true);
      if (clone instanceof Element) {
        clone.removeAttribute("slot");
        clone.removeAttribute("id");
      }
      return clone;
    });
    this.hasCustomIcon = this.iconNodes.length > 0;
    this.requestUpdate();
  }

  override focus(options?: FocusOptions): void {
    const root = this.renderRoot?.querySelector<HTMLElement>('[role="slider"]');
    if (root) {
      root.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    this.renderRoot?.querySelector<HTMLElement>('[role="slider"]')?.blur();
  }

  protected override updated(): void {
    const copies = this.renderRoot.querySelectorAll<HTMLElement>(".icon-copy");
    copies.forEach((copy) => {
      copy.replaceChildren(
        ...this.iconNodes.map((node) => node.cloneNode(true)),
      );
      if (!this.hasCustomIcon) {
        copy.textContent = "★";
      }
    });
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (!this.isInteractive) {
      return;
    }

    const current = this.resolvedValue;
    let next: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = current + this.step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        next = current - this.step;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = this.resolvedMax;
        break;
      case "Delete":
      case "Backspace":
        if (this.clearable) {
          next = 0;
        }
        break;
      default: {
        if (/^[0-9]$/.test(event.key)) {
          const digit = Number(event.key);
          next = clamp(digit, 0, this.resolvedMax);
        }
      }
    }

    if (next === undefined) {
      return;
    }

    event.preventDefault();
    this.commit(next);
  }

  protected render() {
    const displayValue = this.hoverValue ?? this.resolvedValue;
    const ariaNow = this.resolvedValue;

    return html`
      <div
        class="root"
        part="root"
        role="slider"
        tabindex=${ifDefined(this.disabled ? undefined : "0")}
        aria-label=${this.accessibleLabel}
        aria-valuemin="0"
        aria-valuemax=${this.resolvedMax}
        aria-valuenow=${ariaNow}
        aria-valuetext=${`${ariaNow} / ${this.resolvedMax}`}
        aria-description=${ifDefined(this.clearable ? this.clearLabel : undefined)}
        aria-keyshortcuts=${ifDefined(
          this.clearable ? "Delete Backspace" : undefined,
        )}
        aria-disabled=${ifDefined(this.disabled ? "true" : undefined)}
        aria-readonly=${ifDefined(this.readonly ? "true" : undefined)}
        @keydown=${this.handleKeydown}
        @pointerleave=${this.handlePointerLeave}
      >
        <slot
          name="icon"
          class="icon-source"
          aria-hidden="true"
          @slotchange=${this.handleIconSlotChange}
        ></slot>
        ${Array.from({ length: this.resolvedMax }, (_, index) => {
          const filled = displayValue >= index + 1;
          const half =
            !filled && this.allowHalf && displayValue >= index + 0.5;
          return html`
            <span
              class="star"
              part="star"
              data-index=${index}
              role="presentation"
              aria-hidden="true"
              @click=${this.handleStarClick}
              @pointermove=${this.handlePointerMove}
            >
              <span class="symbol ${filled ? "full" : half ? "half" : "empty"}" part="icon">
                <span class="icon-copy base-copy" aria-hidden="true">★</span>
                ${filled || half
                  ? html`<span class="icon-copy active-copy" aria-hidden="true">★</span>`
                  : nothing}
              </span>
            </span>
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-rate": SuperRate;
  }

  interface HTMLElementEventMap {
    "super-rate-change": CustomEvent<SuperRateChangeDetail>;
  }
}
