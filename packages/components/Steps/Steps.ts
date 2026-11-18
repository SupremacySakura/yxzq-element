import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const SUPER_STEPS_DIRECTIONS = ["horizontal", "vertical"] as const;
export const SUPER_STEPS_STATUSES = [
  "process",
  "wait",
  "finish",
  "error",
] as const;
export const SUPER_STEPS_SIZES = ["large", "medium", "small"] as const;

export type SuperStepsDirection = (typeof SUPER_STEPS_DIRECTIONS)[number];
export type SuperStepsStatus = (typeof SUPER_STEPS_STATUSES)[number];
export type SuperStepsSize = (typeof SUPER_STEPS_SIZES)[number];

export interface SuperStepsItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface SuperStepsChangeDetail {
  active: number;
}

let stepsId = 0;

export class SuperSteps extends LitElement {
  static properties = {
    items: { attribute: false },
    active: { type: Number, reflect: true },
    direction: { type: String, reflect: true },
    status: { type: String, reflect: true },
    clickable: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    accessibleLabel: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
  };

  declare items: SuperStepsItem[];
  declare active: number;
  declare direction: SuperStepsDirection;
  declare status: SuperStepsStatus;
  declare clickable: boolean;
  declare size: SuperStepsSize;
  declare accessibleLabel: string;

  private readonly uid = `super-steps-${++stepsId}`;

  constructor() {
    super();
    this.items = [];
    this.active = 0;
    this.direction = "horizontal";
    this.status = "process";
    this.clickable = false;
    this.size = "medium";
    this.accessibleLabel = "步骤";
  }

  static styles = css`
    :host {
      --super-steps-gap: var(--super-spacing-md, 12px);
      --super-steps-indicator-size: 30px;
      --super-steps-font-size: var(--super-font-size-base, 14px);
      --super-steps-title-color: var(--super-text-color-primary, #292524);
      --super-steps-description-color: var(
        --super-text-color-secondary,
        #6b6360
      );
      --super-steps-wait-color: var(--super-text-color-placeholder, #9a938f);
      --super-steps-process-color: var(--super-color-primary, #4b87f5);
      --super-steps-finish-color: var(--super-color-success, #86cf8b);
      --super-steps-error-color: var(--super-color-danger, #ff7067);
      --super-steps-connector-color: var(--super-border-color-light, #b6ada6);
      --super-steps-background: var(--super-background-color, #fffef9);
      --super-steps-border-color: var(--super-border-color, #2f2a27);
      --super-steps-focus-color: var(--super-focus-color, #56c6b7);
      --super-steps-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-steps-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 2px)
        calc(var(--super-radius-sm, 6px) + 1px);
      --super-steps-indicator-radius:
        52% 48% 55% 45% / 47% 53% 45% 55%;
      --super-steps-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-steps-title-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-steps-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-steps-indicator-size: 38px;
      --super-steps-font-size: var(--super-font-size-lg, 16px);
      --super-steps-gap: var(--super-spacing-lg, 16px);
    }

    :host([size="small"]) {
      --super-steps-indicator-size: 24px;
      --super-steps-font-size: var(--super-font-size-sm, 13px);
      --super-steps-gap: var(--super-spacing-sm, 8px);
    }

    .steps {
      display: flex;
      box-sizing: border-box;
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([direction="horizontal"]) .steps {
      flex-direction: row;
      align-items: flex-start;
    }

    :host([direction="vertical"]) .steps {
      flex-direction: column;
      align-items: stretch;
    }

    .step {
      display: flex;
      flex: 1 1 0;
      align-items: flex-start;
      box-sizing: border-box;
      min-inline-size: 0;
      gap: var(--super-steps-gap);
    }

    :host([direction="vertical"]) .step {
      flex: 0 0 auto;
      flex-direction: column;
      align-items: stretch;
    }

    .step-body {
      display: flex;
      flex: 1 1 auto;
      align-items: flex-start;
      min-inline-size: 0;
      gap: var(--super-steps-gap);
      padding: 0;
      color: inherit;
      font: inherit;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius: var(--super-steps-radius);
    }

    :host([direction="vertical"]) .step-body {
      flex-direction: row;
      align-items: flex-start;
      padding-block-end: var(--super-steps-gap);
    }

    .step-body[data-clickable] {
      cursor: pointer;
      transition: background-color var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .step-body[data-clickable]:hover {
      background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 7%,
        transparent
      );
    }

    .step-body:focus-visible {
      outline: 3px solid var(--super-steps-focus-color);
      outline-offset: 2px;
    }

    .indicator {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-steps-indicator-size);
      block-size: var(--super-steps-indicator-size);
      color: var(--super-steps-wait-color);
      font-weight: 700;
      line-height: 1;
      background: var(--super-steps-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-steps-connector-color);
      border-radius: var(--super-steps-indicator-radius);
      transform: rotate(var(--super-steps-rotation));
    }

    .step[data-status="process"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-process-color);
      border-color: var(--super-steps-process-color);
      box-shadow: 2px 3px 0 -1px var(--super-steps-shadow-color);
    }

    .step[data-status="finish"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-finish-color);
      border-color: var(--super-steps-finish-color);
    }

    .step[data-status="error"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-error-color);
      border-color: var(--super-steps-error-color);
    }

    .step[data-status="wait"] .indicator {
      color: var(--super-steps-wait-color);
      background: var(--super-steps-background);
      border-color: var(--super-steps-connector-color);
    }

    .icon {
      display: inline-grid;
      place-items: center;
      font-size: 1.05em;
      line-height: 1;
    }

    .content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      min-inline-size: 0;
      gap: 2px;
      padding-block-start: 2px;
    }

    .title {
      overflow: hidden;
      color: var(--super-steps-title-color);
      font-weight: 700;
      line-height: 1.35;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .step[data-status="wait"] .title {
      color: var(--super-steps-wait-color);
    }

    .step[data-status="process"] .title {
      color: var(--super-steps-process-color);
    }

    .step[data-status="error"] .title {
      color: var(--super-steps-error-color);
    }

    .description {
      overflow: hidden;
      color: var(--super-steps-description-color);
      font-size: 0.92em;
      line-height: 1.5;
      text-overflow: ellipsis;
    }

    .connector {
      flex: 1 1 auto;
      align-self: flex-start;
      min-inline-size: 24px;
      block-size: 0;
      margin: calc(var(--super-steps-indicator-size) / 2)
        var(--super-steps-gap);
      border-block-start: var(--super-sketch-width, 2px) dashed
        var(--super-steps-connector-color);
      transform: rotate(-0.4deg);
    }

    .connector[data-status="finish"] {
      border-block-start-color: var(--super-steps-finish-color);
    }

    .connector[data-status="error"] {
      border-block-start-color: var(--super-steps-error-color);
    }

    :host([direction="vertical"]) .connector {
      flex: 0 0 auto;
      inline-size: 0;
      block-size: auto;
      min-block-size: 18px;
      margin: 0 0 0 calc(var(--super-steps-indicator-size) / 2);
      border-block-start: 0;
      border-inline-start: var(--super-sketch-width, 2px) dashed
        var(--super-steps-connector-color);
      transform: rotate(0.4deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .step-body[data-clickable] {
        transition: none;
      }
    }
  `;

  private get clampedActive(): number {
    if (!Number.isFinite(this.active)) {
      return 0;
    }
    return Math.min(
      Math.max(Math.trunc(this.active), 0),
      Math.max(this.items.length - 1, 0),
    );
  }

  private stepStatus(index: number): SuperStepsStatus {
    if (index < this.clampedActive) {
      return "finish";
    }
    if (index > this.clampedActive) {
      return "wait";
    }
    return this.status;
  }

  private stepId(index: number): string {
    return `${this.uid}-step-${index}`;
  }

  private activate(index: number): void {
    if (!this.clickable || index === this.clampedActive) {
      return;
    }
    const item = this.items[index];
    if (!item) {
      return;
    }
    this.active = index;
    this.dispatchEvent(
      new CustomEvent<SuperStepsChangeDetail>("super-steps-change", {
        detail: { active: index },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleClick = (event: MouseEvent): void => {
    if (!this.clickable) {
      return;
    }
    const target = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && node.dataset.stepIndex !== undefined,
      );
    if (!target) {
      return;
    }
    this.activate(Number(target.dataset.stepIndex));
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (!this.clickable) {
      return;
    }
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const target = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && node.dataset.stepIndex !== undefined,
      );
    if (!target) {
      return;
    }
    event.preventDefault();
    this.activate(Number(target.dataset.stepIndex));
  };

  private renderStep(index: number, item: SuperStepsItem) {
    const status = this.stepStatus(index);
    const current = index === this.clampedActive;
    const content = html`
      <span
        class="indicator"
        part="indicator"
        aria-hidden="true"
      >
        ${item.icon
          ? html`<span class="icon" part="icon">${item.icon}</span>`
          : html`<span class="number">${index + 1}</span>`}
      </span>
      <span class="content">
        <span class="title" part="title">${item.title}</span>
        ${item.description
          ? html`<span class="description" part="description"
              >${item.description}</span
            >`
          : nothing}
      </span>
    `;

    return html`
      <li
        class="step"
        part="step"
        role="listitem"
        id=${this.stepId(index)}
        data-status=${status}
        aria-current=${current ? "step" : nothing}
      >
        ${this.clickable
          ? html`<button
              class="step-body"
              type="button"
              data-step-index=${index}
              data-clickable
            >
              ${content}
            </button>`
          : html`<div class="step-body">${content}</div>`}
        ${index < this.items.length - 1
          ? html`<span
              class="connector"
              part="connector"
              aria-hidden="true"
              data-status=${status}
            ></span>`
          : nothing}
      </li>
    `;
  }

  protected render() {
    return html`
      <ol
        class="steps"
        part="steps"
        role="list"
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.items.map((item, index) => this.renderStep(index, item))}
      </ol>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-steps": SuperSteps;
  }

  interface HTMLElementEventMap {
    "super-steps-change": CustomEvent<SuperStepsChangeDetail>;
  }
}
