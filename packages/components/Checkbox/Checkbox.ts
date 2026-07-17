import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

export const SUPER_CHECKBOX_SIZES = ["large", "medium", "small"] as const;
export const SUPER_CHECKBOX_VARIANTS = ["default", "card"] as const;
export const SUPER_CHECKBOX_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperCheckboxSize = (typeof SUPER_CHECKBOX_SIZES)[number];
export type SuperCheckboxVariant = (typeof SUPER_CHECKBOX_VARIANTS)[number];
export type SuperCheckboxValidation =
  (typeof SUPER_CHECKBOX_VALIDATIONS)[number];

export interface SuperCheckboxChangeDetail {
  checked: boolean;
  indeterminate: boolean;
  name: string;
  value: string;
  originalEvent: Event;
}

export class SuperCheckbox extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    indeterminate: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    name: { type: String, reflect: true },
    value: { type: String, reflect: true },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare checked: boolean;
  declare indeterminate: boolean;
  declare disabled: boolean;
  declare required: boolean;
  declare variant: SuperCheckboxVariant;
  declare size: SuperCheckboxSize;
  declare validation: SuperCheckboxValidation;
  declare name: string;
  declare value: string;
  declare helperText: string;
  declare accessibleLabel: string;

  constructor() {
    super();
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.required = false;
    this.variant = "default";
    this.size = "medium";
    this.validation = "none";
    this.name = "";
    this.value = "on";
    this.helperText = "";
    this.accessibleLabel = "";
  }

  static styles = css`
    :host {
      --super-checkbox-size: 22px;
      --super-checkbox-gap: 10px;
      --super-checkbox-font-size: 15px;
      --super-checkbox-color: #292524;
      --super-checkbox-border-color: #34445f;
      --super-checkbox-background: #fffef9;
      --super-checkbox-checked-background: #3978e9;
      --super-checkbox-checked-color: #ffffff;
      --super-checkbox-hover-color: #3fa66a;
      --super-checkbox-focus-color: #356df3;
      --super-checkbox-shadow-color: #9fb7dc;
      --super-checkbox-validation-color: var(--super-checkbox-border-color);
      --super-checkbox-rotation: -0.35deg;
      --super-checkbox-card-background: #fffef9;
      --super-checkbox-card-checked-background: #f3f7ff;
      --super-checkbox-card-padding: 13px 16px;

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-checkbox-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-checkbox-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-checkbox-size: 27px;
      --super-checkbox-gap: 12px;
      --super-checkbox-font-size: 17px;
    }

    :host([size="small"]) {
      --super-checkbox-size: 18px;
      --super-checkbox-gap: 7px;
      --super-checkbox-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-checkbox-validation-color: #23804a;
    }

    :host([validation="warning"]) {
      --super-checkbox-validation-color: #a05f00;
    }

    :host([validation="error"]) {
      --super-checkbox-validation-color: #cf3038;
    }

    :host([validation="info"]) {
      --super-checkbox-validation-color: #64748b;
    }

    .wrapper {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .control {
      position: relative;
      display: inline-flex;
      min-inline-size: 0;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .native {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .surface {
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-checkbox-gap);
      border: 2px solid transparent;
      border-radius: 9px 12px 8px 11px / 11px 8px 12px 9px;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    :host([variant="card"]) .surface {
      box-sizing: border-box;
      min-inline-size: 184px;
      padding: var(--super-checkbox-card-padding);
      background: var(--super-checkbox-card-background);
      border-color: var(--super-checkbox-border-color);
      box-shadow: 2px 3px 0 -1px var(--super-checkbox-shadow-color);
      transform: rotate(var(--super-checkbox-rotation));
    }

    :host([variant="card"]) .wrapper,
    :host([variant="card"]) .control,
    :host([variant="card"]) .surface {
      inline-size: 100%;
    }

    :host([variant="card"][checked]) .surface,
    :host([variant="card"][indeterminate]) .surface {
      background: var(--super-checkbox-card-checked-background);
      border-color: var(--super-checkbox-checked-background);
      box-shadow: 2px 3px 0 -1px #9fb7dc;
    }

    .box {
      position: relative;
      display: inline-block;
      flex: none;
      box-sizing: border-box;
      inline-size: var(--super-checkbox-size);
      block-size: var(--super-checkbox-size);
      color: var(--super-checkbox-checked-color);
      background: var(--super-checkbox-background);
      border: 2px solid var(--super-checkbox-border-color);
      border-radius: 4px 6px 3px 5px / 5px 3px 6px 4px;
      box-shadow: 1.5px 2px 0 -1px var(--super-checkbox-shadow-color);
      transform: rotate(var(--super-checkbox-rotation));
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .box::before {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 2px 4px 2px 3px;
      opacity: 0.08;
      pointer-events: none;
    }

    .mark {
      position: absolute;
      top: 42%;
      left: 50%;
      box-sizing: border-box;
      inline-size: 34%;
      block-size: 62%;
      border-right: 2.5px solid currentColor;
      border-bottom: 2.5px solid currentColor;
      opacity: 0;
      transform: translate(-50%, -58%) rotate(42deg) scale(0.55);
      transition: opacity 100ms ease, transform 120ms ease;
    }

    :host([checked]) .box,
    :host([indeterminate]) .box {
      background: var(--super-checkbox-checked-background);
      border-color: #174ea6;
      box-shadow: 2px 2.5px 0 -1px #174ea6;
    }

    :host([checked]) .mark {
      opacity: 1;
      transform: translate(-50%, -58%) rotate(42deg) scale(1);
    }

    :host([indeterminate]) .mark {
      top: 50%;
      inline-size: 58%;
      block-size: 0;
      border-right: 0;
      border-bottom-width: 2.5px;
      opacity: 1;
      transform: translate(-50%, -50%) rotate(-1deg);
    }

    :host(:not([validation="none"])) .box {
      border-color: var(--super-checkbox-validation-color);
    }

    .icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      color: var(--super-checkbox-checked-background);
      font-size: 1.25em;
    }

    .content {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .label {
      min-inline-size: 0;
      color: inherit;
    }

    .description {
      color: #64748b;
      font-size: 0.8em;
      line-height: 1.35;
    }

    slot {
      display: contents;
    }

    .helper {
      margin-top: 5px;
      padding-left: calc(var(--super-checkbox-size) + var(--super-checkbox-gap));
      color: var(--super-checkbox-validation-color);
      font-size: 0.8em;
      line-height: 1.35;
    }

    .native:focus-visible + .surface {
      outline: 3px solid var(--super-checkbox-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      .control:hover .box {
        border-color: var(--super-checkbox-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }

      :host([variant="card"]) .control:hover .surface {
        border-color: var(--super-checkbox-hover-color);
        box-shadow: 3px 4px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.42;
    }

    :host([disabled]) .box {
      filter: grayscale(0.35);
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([disabled]) .surface {
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([variant="card"]) .helper {
      padding-left: 16px;
    }

    @media (prefers-reduced-motion: reduce) {
      .box,
      .mark,
      .surface {
        transition: none;
      }
    }
  `;

  private get inputElement(): HTMLInputElement | null {
    return this.renderRoot?.querySelector("input") ?? null;
  }

  private emitChange(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperCheckboxChangeDetail>("super-checkbox-change", {
        detail: {
          checked: this.checked,
          indeterminate: this.indeterminate,
          name: this.name,
          value: this.value,
          originalEvent,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleChange(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    this.emitChange(event);
  }

  override click(): void {
    if (this.disabled) {
      return;
    }

    const input = this.inputElement;
    if (input) {
      input.click();
      return;
    }

    this.checked = !this.checked;
    this.indeterminate = false;
    const originalEvent = new Event("change");
    super.click();
    this.emitChange(originalEvent);
  }

  override focus(options?: FocusOptions): void {
    const input = this.inputElement;
    if (input) {
      input.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const input = this.inputElement;
    if (input) {
      input.blur();
      return;
    }
    super.blur();
  }

  protected render() {
    const describedBy = [
      "super-checkbox-description",
      this.helperText ? "super-checkbox-helper" : "",
    ].filter(Boolean).join(" ");
    const invalid = this.validation === "error" ? "true" : undefined;

    return html`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${live(this.checked)}
            .indeterminate=${this.indeterminate}
            name=${this.name}
            value=${this.value}
            aria-label=${ifDefined(this.accessibleLabel || undefined)}
            aria-labelledby=${ifDefined(
              this.accessibleLabel ? undefined : "super-checkbox-label",
            )}
            aria-describedby=${ifDefined(describedBy)}
            aria-invalid=${ifDefined(invalid)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <span class="surface">
            <span class="icon" part="icon" aria-hidden="true">
              <slot name="icon"></slot>
            </span>
            <span class="box" part="indicator" aria-hidden="true">
              <span class="mark" part="mark"></span>
            </span>
            <span class="content" part="content">
              <span id="super-checkbox-label" class="label" part="label">
                <slot></slot>
              </span>
              <span
                id="super-checkbox-description"
                class="description"
                part="description"
              ><slot name="description"></slot></span>
            </span>
          </span>
        </label>
        ${this.helperText
          ? html`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${ifDefined(this.validation === "error" ? "alert" : undefined)}
              aria-live=${ifDefined(
                this.validation === "error" ? undefined : "polite",
              )}
            >${this.helperText}</span>`
          : nothing}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-checkbox": SuperCheckbox;
  }

  interface HTMLElementEventMap {
    "super-checkbox-change": CustomEvent<SuperCheckboxChangeDetail>;
  }
}
