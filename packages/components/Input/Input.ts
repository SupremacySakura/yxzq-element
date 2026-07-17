import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

export const SUPER_INPUT_TYPES = [
  "text",
  "search",
  "password",
  "number",
  "email",
  "tel",
  "url",
  "date",
] as const;

export const SUPER_INPUT_SIZES = ["large", "medium", "small"] as const;
export const SUPER_INPUT_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperInputType = (typeof SUPER_INPUT_TYPES)[number];
export type SuperInputSize = (typeof SUPER_INPUT_SIZES)[number];
export type SuperInputValidation = (typeof SUPER_INPUT_VALIDATIONS)[number];

export interface SuperInputValueDetail {
  value: string;
  originalEvent: Event;
}

export interface SuperInputClearDetail {
  previousValue: string;
}

export interface SuperInputPasswordVisibilityDetail {
  visible: boolean;
}

export class SuperInput extends LitElement {
  static properties = {
    value: { type: String },
    type: { type: String, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    placeholder: { type: String },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
    clearLabel: { type: String, attribute: "clear-label" },
    decrementLabel: { type: String, attribute: "decrement-label" },
    incrementLabel: { type: String, attribute: "increment-label" },
    passwordShowLabel: { type: String, attribute: "password-show-label" },
    passwordHideLabel: { type: String, attribute: "password-hide-label" },
    disabled: { type: Boolean, reflect: true },
    readOnly: { type: Boolean, attribute: "readonly", reflect: true },
    required: { type: Boolean, reflect: true },
    clearable: { type: Boolean, reflect: true },
    revealable: { type: Boolean, reflect: true },
    multiline: { type: Boolean, reflect: true },
    showCount: { type: Boolean, attribute: "show-count", reflect: true },
    maxLength: { type: Number, attribute: "maxlength" },
    minLength: { type: Number, attribute: "minlength" },
    min: { type: String },
    max: { type: String },
    step: { type: String },
    rows: { type: Number },
    inputMode: { type: String, attribute: "inputmode" },
    autocomplete: { type: String },
    passwordVisible: { state: true },
    hasPrefix: { state: true },
    hasSuffix: { state: true },
    hasAction: { state: true },
  };

  declare value: string;
  declare type: SuperInputType;
  declare size: SuperInputSize;
  declare validation: SuperInputValidation;
  declare placeholder: string;
  declare helperText: string;
  declare accessibleLabel: string;
  declare clearLabel: string;
  declare decrementLabel: string;
  declare incrementLabel: string;
  declare passwordShowLabel: string;
  declare passwordHideLabel: string;
  declare disabled: boolean;
  declare readOnly: boolean;
  declare required: boolean;
  declare clearable: boolean;
  declare revealable: boolean;
  declare multiline: boolean;
  declare showCount: boolean;
  declare maxLength: number | undefined;
  declare minLength: number | undefined;
  declare min: string;
  declare max: string;
  declare step: string;
  declare rows: number;
  declare inputMode: string;
  declare autocomplete: string;
  private declare passwordVisible: boolean;
  private declare hasPrefix: boolean;
  private declare hasSuffix: boolean;
  private declare hasAction: boolean;

  constructor() {
    super();
    this.value = "";
    this.type = "text";
    this.size = "medium";
    this.validation = "none";
    this.placeholder = "";
    this.helperText = "";
    this.accessibleLabel = "";
    this.clearLabel = "清空输入";
    this.decrementLabel = "减少数值";
    this.incrementLabel = "增加数值";
    this.passwordShowLabel = "显示密码";
    this.passwordHideLabel = "隐藏密码";
    this.disabled = false;
    this.readOnly = false;
    this.required = false;
    this.clearable = false;
    this.revealable = false;
    this.multiline = false;
    this.showCount = false;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.min = "";
    this.max = "";
    this.step = "";
    this.rows = 3;
    this.inputMode = "";
    this.autocomplete = "";
    this.passwordVisible = false;
    this.hasPrefix = false;
    this.hasSuffix = false;
    this.hasAction = false;
  }

  static styles = css`
    :host {
      --super-input-width: 240px;
      --super-input-height: 38px;
      --super-input-min-height: 86px;
      --super-input-padding-inline: 12px;
      --super-input-gap: 8px;
      --super-input-font-size: 15px;
      --super-input-background: #fffef9;
      --super-input-color: #292524;
      --super-input-placeholder-color: #8a94a3;
      --super-input-border-color: #34445f;
      --super-input-hover-color: #4cae72;
      --super-input-focus-color: #356df3;
      --super-input-shadow-color: #a8b3bf;
      --super-input-validation-color: var(--super-input-border-color);
      --super-input-rotation: -0.12deg;

      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-input-width);
      max-inline-size: 100%;
      color: var(--super-input-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-input-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-input-height: 46px;
      --super-input-min-height: 108px;
      --super-input-padding-inline: 14px;
      --super-input-gap: 9px;
      --super-input-font-size: 17px;
    }

    :host([size="small"]) {
      --super-input-height: 31px;
      --super-input-min-height: 70px;
      --super-input-padding-inline: 9px;
      --super-input-gap: 6px;
      --super-input-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-input-validation-color: #269453;
      --super-input-border-color: #269453;
      --super-input-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-input-validation-color: #e58a08;
      --super-input-border-color: #e58a08;
      --super-input-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-input-validation-color: #ef3f42;
      --super-input-border-color: #ef3f42;
      --super-input-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-input-validation-color: #64748b;
      --super-input-border-color: #64748b;
      --super-input-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-input-height);
      overflow: hidden;
      color: var(--super-input-color);
      background: var(--super-input-background);
      border: 1.8px solid var(--super-input-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-input-shadow-color);
      transform: rotate(var(--super-input-rotation));
      transform-origin: center;
      transition:
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .control::after {
      position: absolute;
      inset: 2px 3px 2px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 5px 8px 5px 7px / 7px 5px 8px 6px;
      opacity: 0.06;
      pointer-events: none;
      transform: rotate(0.18deg);
    }

    :host([multiline]) .control {
      min-block-size: var(--super-input-min-height);
      overflow: visible;
    }

    .field {
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      inline-size: 100%;
      min-block-size: calc(var(--super-input-height) - 4px);
      margin: 0;
      padding: 0 var(--super-input-padding-inline);
      color: inherit;
      font: inherit;
      line-height: 1.35;
      background: transparent;
      border: 0;
      border-radius: inherit;
      outline: 0;
      appearance: none;
    }

    textarea.field {
      min-block-size: calc(var(--super-input-min-height) - 4px);
      padding-block: 10px;
      resize: vertical;
    }

    .field::placeholder {
      color: var(--super-input-placeholder-color);
      opacity: 1;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      margin: 0;
      appearance: none;
    }

    .adornment,
    .trailing,
    .action,
    .step-button {
      position: relative;
      z-index: 1;
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      color: inherit;
    }

    .adornment {
      gap: var(--super-input-gap);
      min-inline-size: calc(var(--super-input-height) - 3px);
      padding-inline: calc(var(--super-input-padding-inline) - 3px);
      background: rgb(241 245 249 / 72%);
    }

    .adornment.prefix {
      border-right: 1.5px solid #a8b3bf;
    }

    .adornment.suffix {
      border-left: 1.5px solid #a8b3bf;
    }

    .adornment[hidden],
    .action[hidden] {
      display: none;
    }

    .required-mark {
      align-self: center;
      flex: none;
      margin-left: var(--super-input-padding-inline);
      color: #e33b34;
      font-weight: 800;
    }

    .required-mark + .field {
      padding-left: 5px;
    }

    .trailing {
      gap: 2px;
      padding-right: 6px;
    }

    .icon-button,
    .step-button {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .icon-button {
      inline-size: 27px;
      block-size: 27px;
      border-radius: 50%;
    }

    .icon-button:hover {
      color: #174ea6;
      background: #e8f0ff;
    }

    .icon-button:focus-visible,
    .step-button:focus-visible {
      outline: 2px solid var(--super-input-focus-color);
      outline-offset: -3px;
    }

    .step-button {
      inline-size: calc(var(--super-input-height) - 2px);
      min-inline-size: calc(var(--super-input-height) - 2px);
      font-size: 1.2em;
      font-weight: 700;
    }

    .step-button.decrement {
      border-right: 1.5px solid #a8b3bf;
    }

    .step-button.increment {
      border-left: 1.5px solid #a8b3bf;
    }

    .step-button:hover {
      color: #174ea6;
      background: #edf4ff;
    }

    .validation-icon {
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      inline-size: 19px;
      block-size: 19px;
      color: var(--super-input-validation-color);
      font-size: 12px;
      font-weight: 900;
      line-height: 1;
      border: 1.7px solid currentColor;
      border-radius: 50%;
    }

    .action {
      min-block-size: calc(var(--super-input-height) - 3px);
      border-left: 1.5px solid #536170;
    }

    ::slotted([slot="prefix"]),
    ::slotted([slot="suffix"]) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-inline-size: 1em;
      line-height: 1;
      white-space: nowrap;
    }

    ::slotted(svg) {
      max-inline-size: 1.2em;
      max-block-size: 1.2em;
    }

    ::slotted([slot="action"]) {
      align-self: stretch;
    }

    .meta {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      min-inline-size: 0;
      padding: 6px 4px 0;
      color: var(--super-input-validation-color);
      font-size: 0.78em;
      line-height: 1.35;
    }

    .helper {
      min-inline-size: 0;
    }

    .count {
      flex: none;
      margin-left: auto;
      color: #596779;
      font-variant-numeric: tabular-nums;
    }

    @media (hover: hover) {
      :host([validation="none"]:not([disabled])) .control:hover {
        border-color: var(--super-input-hover-color);
        box-shadow: 3px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.08deg);
      }
    }

    .control:focus-within {
      border-color: var(--super-input-focus-color);
      box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px var(--super-input-focus-color),
        3px 3px 0 -1px #9db7fa;
      transform: rotate(0deg);
    }

    :host([disabled]) .control {
      color: #7f8a99;
      background: #eef1f5;
      border-color: #b7c0cc;
      box-shadow: 1px 1px 0 -1px #cbd5e1;
      cursor: not-allowed;
      opacity: 0.68;
      transform: rotate(0deg);
    }

    :host([disabled]) .field,
    :host([disabled]) button {
      cursor: not-allowed;
    }

    :host([readonly]) .control {
      background: #f5f7f9;
      border-color: #8290a3;
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .control {
        transition: none;
      }
    }
  `;

  private get fieldElement(): HTMLInputElement | HTMLTextAreaElement | null {
    return this.renderRoot?.querySelector(".field") ?? null;
  }

  override focus(options?: FocusOptions): void {
    const field = this.fieldElement;
    if (field) {
      field.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const field = this.fieldElement;
    if (field) {
      field.blur();
      return;
    }
    super.blur();
  }

  select(): void {
    this.fieldElement?.select();
  }

  private emitValueEvent(name: "super-input" | "super-change", event: Event): void {
    this.dispatchEvent(new CustomEvent<SuperInputValueDetail>(name, {
      detail: { value: this.value, originalEvent: event },
      bubbles: true,
      composed: true,
    }));
  }

  private handleInput(event: Event): void {
    const field = event.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    this.value = field.value;
    this.emitValueEvent("super-input", event);
  }

  private handleChange(event: Event): void {
    const field = event.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    this.value = field.value;
    this.emitValueEvent("super-change", event);
  }

  private clearInput(): void {
    const field = this.fieldElement;
    if (!field || this.disabled || this.readOnly) {
      return;
    }

    const previousValue = this.value;
    field.value = "";
    this.value = "";
    field.dispatchEvent(new InputEvent("input", {
      bubbles: true,
      composed: true,
      inputType: "deleteContentBackward",
    }));
    this.dispatchEvent(new CustomEvent<SuperInputClearDetail>("super-clear", {
      detail: { previousValue },
      bubbles: true,
      composed: true,
    }));
    field.focus();
  }

  private togglePasswordVisibility(): void {
    if (this.disabled || this.readOnly || this.type !== "password") {
      return;
    }

    this.passwordVisible = !this.passwordVisible;
    this.dispatchEvent(
      new CustomEvent<SuperInputPasswordVisibilityDetail>(
        "super-password-visibility",
        {
          detail: { visible: this.passwordVisible },
          bubbles: true,
          composed: true,
        },
      ),
    );
    void this.updateComplete.then(() => this.fieldElement?.focus());
  }

  private stepNumber(direction: 1 | -1): void {
    const field = this.fieldElement;
    if (
      !(field instanceof HTMLInputElement) ||
      this.type !== "number" ||
      this.disabled ||
      this.readOnly
    ) {
      return;
    }

    if (direction > 0) {
      field.stepUp();
    } else {
      field.stepDown();
    }
    this.value = field.value;
    field.dispatchEvent(new InputEvent("input", {
      bubbles: true,
      composed: true,
      inputType: "insertReplacementText",
    }));
    field.focus();
  }

  private updateSlotPresence(
    event: Event,
    slotName: "prefix" | "suffix" | "action",
  ): void {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasContent = slot.assignedNodes({ flatten: true }).some((node) =>
      node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim())
    );

    if (slotName === "prefix") {
      this.hasPrefix = hasContent;
    } else if (slotName === "suffix") {
      this.hasSuffix = hasContent;
    } else {
      this.hasAction = hasContent;
    }
  }

  private validationSymbol(): string | typeof nothing {
    const symbols: Partial<Record<SuperInputValidation, string>> = {
      success: "✓",
      warning: "!",
      error: "×",
      info: "i",
    };
    return symbols[this.validation] ?? nothing;
  }

  private renderField() {
    const describedBy = this.helperText ? "super-input-helper" : undefined;
    const invalid = this.validation === "error" ? "true" : undefined;

    if (this.multiline) {
      return html`
        <textarea
          class="field"
          part="input"
          .value=${live(this.value)}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${ifDefined(this.maxLength)}
          minlength=${ifDefined(this.minLength)}
          inputmode=${ifDefined(this.inputMode || undefined)}
          autocomplete=${ifDefined(this.autocomplete || undefined)}
          aria-label=${ifDefined(this.accessibleLabel || undefined)}
          aria-describedby=${ifDefined(describedBy)}
          aria-invalid=${ifDefined(invalid)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
      `;
    }

    const renderedType = this.type === "password" && this.passwordVisible
      ? "text"
      : this.type;

    return html`
      <input
        class="field"
        part="input"
        .value=${live(this.value)}
        type=${renderedType}
        placeholder=${this.placeholder}
        maxlength=${ifDefined(this.maxLength)}
        minlength=${ifDefined(this.minLength)}
        min=${ifDefined(this.min || undefined)}
        max=${ifDefined(this.max || undefined)}
        step=${ifDefined(this.step || undefined)}
        inputmode=${ifDefined(this.inputMode || undefined)}
        autocomplete=${ifDefined(this.autocomplete || undefined)}
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
        aria-describedby=${ifDefined(describedBy)}
        aria-invalid=${ifDefined(invalid)}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        @input=${this.handleInput}
        @change=${this.handleChange}
      />
    `;
  }

  protected render() {
    const canEdit = !this.disabled && !this.readOnly;
    const showClear = this.clearable && Boolean(this.value) && canEdit;
    const showPasswordToggle = this.type === "password" && this.revealable;
    const validationSymbol = this.validationSymbol();
    const showMeta = Boolean(this.helperText) ||
      (this.showCount && this.maxLength !== undefined);

    return html`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${(event: Event) => this.updateSlotPresence(event, "prefix")}
          ></slot>
        </span>
        ${this.required
          ? html`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`
          : nothing}
        ${this.type === "number" && !this.multiline
          ? html`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!canEdit}
                @click=${() => this.stepNumber(-1)}
              >−</button>
            `
          : nothing}
        ${this.renderField()}
        ${this.type === "number" && !this.multiline
          ? html`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!canEdit}
                @click=${() => this.stepNumber(1)}
              >＋</button>
            `
          : nothing}
        <span class="trailing">
          ${validationSymbol === nothing
            ? nothing
            : html`<span class="validation-icon" part="validation-icon" aria-hidden="true">${validationSymbol}</span>`}
          ${showClear
            ? html`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `
            : nothing}
          ${showPasswordToggle
            ? html`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible
                    ? this.passwordHideLabel
                    : this.passwordShowLabel}
                  ?disabled=${!canEdit}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible ? "◉" : "◎"}</button>
              `
            : nothing}
        </span>
        <span class="adornment suffix" part="suffix" ?hidden=${!this.hasSuffix}>
          <slot
            name="suffix"
            @slotchange=${(event: Event) => this.updateSlotPresence(event, "suffix")}
          ></slot>
        </span>
        <span class="action" part="action" ?hidden=${!this.hasAction}>
          <slot
            name="action"
            @slotchange=${(event: Event) => this.updateSlotPresence(event, "action")}
          ></slot>
        </span>
      </div>
      ${showMeta
        ? html`
            <div class="meta" part="meta">
              ${this.helperText
                ? html`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${ifDefined(this.validation === "error" ? "alert" : undefined)}
                    aria-live=${ifDefined(
                      this.validation === "error" ? undefined : "polite",
                    )}
                  >${this.helperText}</span>`
                : nothing}
              ${this.showCount && this.maxLength !== undefined
                ? html`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`
                : nothing}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-input": SuperInput;
  }

  interface HTMLElementEventMap {
    "super-input": CustomEvent<SuperInputValueDetail>;
    "super-change": CustomEvent<SuperInputValueDetail>;
    "super-clear": CustomEvent<SuperInputClearDetail>;
    "super-password-visibility": CustomEvent<SuperInputPasswordVisibilityDetail>;
  }
}
