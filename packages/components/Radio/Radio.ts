import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

export const SUPER_RADIO_SIZES = ["large", "medium", "small"] as const;
export const SUPER_RADIO_VARIANTS = ["default", "button", "card"] as const;
export const SUPER_RADIO_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperRadioSize = (typeof SUPER_RADIO_SIZES)[number];
export type SuperRadioVariant = (typeof SUPER_RADIO_VARIANTS)[number];
export type SuperRadioValidation = (typeof SUPER_RADIO_VALIDATIONS)[number];

export interface SuperRadioChangeDetail {
  checked: boolean;
  value: string;
  name: string;
  originalEvent: Event;
}

export class SuperRadio extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    value: { type: String, reflect: true },
    name: { type: String, reflect: true },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare checked: boolean;
  declare disabled: boolean;
  declare required: boolean;
  declare variant: SuperRadioVariant;
  declare size: SuperRadioSize;
  declare validation: SuperRadioValidation;
  declare value: string;
  declare name: string;
  declare helperText: string;
  declare accessibleLabel: string;

  private coordinationRoot: Document | ShadowRoot | null = null;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.required = false;
    this.variant = "default";
    this.size = "medium";
    this.validation = "none";
    this.value = "on";
    this.name = "";
    this.helperText = "";
    this.accessibleLabel = "";
  }

  static styles = css`
    :host {
      --super-radio-size: 22px;
      --super-radio-dot-size: 10px;
      --super-radio-gap: 10px;
      --super-radio-font-size: 15px;
      --super-radio-color: #292524;
      --super-radio-border-color: #34445f;
      --super-radio-background: #fffef9;
      --super-radio-checked-color: #3978e9;
      --super-radio-hover-color: #3fa66a;
      --super-radio-focus-color: #356df3;
      --super-radio-shadow-color: #9fb7dc;
      --super-radio-validation-color: var(--super-radio-border-color);
      --super-radio-rotation: -0.4deg;
      --super-radio-option-background: #fffef9;
      --super-radio-option-checked-background: #dff3df;
      --super-radio-option-padding: 9px 15px;

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-radio-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-radio-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-radio-size: 27px;
      --super-radio-dot-size: 12px;
      --super-radio-gap: 12px;
      --super-radio-font-size: 17px;
    }

    :host([size="small"]) {
      --super-radio-size: 18px;
      --super-radio-dot-size: 8px;
      --super-radio-gap: 7px;
      --super-radio-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-radio-validation-color: #23804a;
    }

    :host([validation="warning"]) {
      --super-radio-validation-color: #a05f00;
    }

    :host([validation="error"]) {
      --super-radio-validation-color: #cf3038;
    }

    :host([validation="info"]) {
      --super-radio-validation-color: #64748b;
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
      gap: var(--super-radio-gap);
      border: 2px solid transparent;
      border-radius: 10px 13px 9px 12px / 12px 9px 13px 10px;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    :host([variant="button"]) .surface,
    :host([variant="card"]) .surface {
      box-sizing: border-box;
      padding: var(--super-radio-option-padding);
      background: var(--super-radio-option-background);
      border-color: var(--super-radio-border-color);
      box-shadow: 2px 3px 0 -1px var(--super-radio-shadow-color);
      transform: rotate(var(--super-radio-rotation));
    }

    :host([variant="button"]) .surface {
      min-block-size: 40px;
      border-radius: 999px 920px 980px 900px / 860px 990px 910px 970px;
    }

    :host([variant="button"]) .circle {
      display: none;
    }

    :host([variant="card"]) .surface {
      align-items: flex-start;
      min-inline-size: 156px;
      padding: 16px;
    }

    :host([variant="card"]) .wrapper,
    :host([variant="card"]) .control,
    :host([variant="card"]) .surface {
      inline-size: 100%;
    }

    :host([variant="button"][checked]) .surface,
    :host([variant="card"][checked]) .surface {
      background: var(--super-radio-option-checked-background);
      border-color: var(--super-radio-checked-color);
      box-shadow: 2px 3px 0 -1px #86bd8b;
    }

    :host([variant="button"][checked]) .surface::after {
      box-sizing: border-box;
      inline-size: 6px;
      block-size: 11px;
      content: "";
      border-right: 2px solid #246b36;
      border-bottom: 2px solid #246b36;
      transform: translateY(-1px) rotate(42deg);
    }

    .circle {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-radio-size);
      block-size: var(--super-radio-size);
      background: var(--super-radio-background);
      border: 2px solid var(--super-radio-border-color);
      border-radius: 49% 53% 47% 51% / 52% 48% 54% 46%;
      box-shadow: 1.5px 2px 0 -1px var(--super-radio-shadow-color);
      transform: rotate(var(--super-radio-rotation));
      transition:
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .dot {
      inline-size: var(--super-radio-dot-size);
      block-size: var(--super-radio-dot-size);
      background: var(--super-radio-checked-color);
      border-radius: 46% 54% 49% 51% / 54% 47% 53% 46%;
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 42%);
      opacity: 0;
      transform: rotate(8deg) scale(0.35);
      transition: opacity 100ms ease, transform 120ms ease;
    }

    .circle::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 50%;
      opacity: 0.06;
      pointer-events: none;
    }

    :host([checked]) .circle {
      border-color: var(--super-radio-checked-color);
      box-shadow: 2px 2.5px 0 -1px #9fb7dc;
    }

    :host([checked]) .dot {
      opacity: 1;
      transform: rotate(-4deg) scale(1);
    }

    :host(:not([validation="none"])) .circle {
      border-color: var(--super-radio-validation-color);
    }

    :host(:not([validation="none"])):is([variant="button"], [variant="card"]) .surface {
      border-color: var(--super-radio-validation-color);
    }

    .icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      color: var(--super-radio-checked-color);
      font-size: 1.45em;
      line-height: 1;
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
      padding-left: calc(var(--super-radio-size) + var(--super-radio-gap));
      color: var(--super-radio-validation-color);
      font-size: 0.8em;
      line-height: 1.35;
    }

    .native:focus-visible + .surface {
      outline: 3px solid var(--super-radio-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      .control:hover .circle {
        border-color: var(--super-radio-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }

      :host([variant="button"]) .control:hover .surface,
      :host([variant="card"]) .control:hover .surface {
        border-color: var(--super-radio-hover-color);
        box-shadow: 3px 4px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.42;
    }

    :host([disabled]) .circle {
      filter: grayscale(0.35);
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([disabled]) .surface {
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host(:is([variant="button"], [variant="card"])) .helper {
      padding-left: 15px;
    }

    @media (prefers-reduced-motion: reduce) {
      .circle,
      .dot,
      .surface {
        transition: none;
      }
    }
  `;

  private get inputElement(): HTMLInputElement | null {
    return this.renderRoot?.querySelector("input") ?? null;
  }

  private rootRadios(): SuperRadio[] {
    const root = this.getRootNode();
    if (!(root instanceof Document || root instanceof ShadowRoot)) {
      return [this];
    }

    return Array.from(root.querySelectorAll<SuperRadio>("super-radio"));
  }

  private groupMembers(): SuperRadio[] {
    if (!this.name) {
      return [this];
    }

    const form = this.closest("form");
    return this.rootRadios().filter((radio) =>
      radio.name === this.name && radio.closest("form") === form
    );
  }

  private get radioTabIndex(): number {
    if (this.disabled) {
      return -1;
    }

    if (!this.name) {
      return 0;
    }

    const members = this.groupMembers().filter((radio) => !radio.disabled);
    const stop = members.find((radio) => radio.checked) ?? members[0];
    return stop === this ? 0 : -1;
  }

  private refreshRootRadios(): void {
    this.rootRadios().forEach((radio) => {
      if (radio !== this) {
        radio.requestUpdate();
      }
    });
  }

  override connectedCallback(): void {
    super.connectedCallback();
    const root = this.getRootNode();
    this.coordinationRoot = root instanceof Document || root instanceof ShadowRoot
      ? root
      : null;
    this.uncheckGroupPeers();
    queueMicrotask(() => {
      if (!this.isConnected) {
        return;
      }

      this.refreshRootRadios();
    });
  }

  override disconnectedCallback(): void {
    const previousRoot = this.coordinationRoot;
    this.coordinationRoot = null;
    super.disconnectedCallback();

    queueMicrotask(() => {
      previousRoot?.querySelectorAll<SuperRadio>("super-radio").forEach(
        (radio) => radio.requestUpdate(),
      );
    });
  }

  private uncheckGroupPeers(): void {
    if (!this.checked || !this.name) {
      return;
    }

    this.groupMembers().forEach((radio) => {
      if (radio !== this && radio.checked) {
        radio.checked = false;
      }
    });
  }

  private emitChange(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperRadioChangeDetail>("super-radio-change", {
        detail: {
          checked: this.checked,
          value: this.value,
          name: this.name,
          originalEvent,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private selectFromInteraction(originalEvent: Event): void {
    if (this.disabled || this.checked) {
      return;
    }

    this.checked = true;
    this.uncheckGroupPeers();
    this.emitChange(originalEvent);
  }

  private handleChange(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    if (input.checked) {
      this.selectFromInteraction(event);
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (
      !this.name ||
      !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)
    ) {
      return;
    }

    const members = this.groupMembers().filter((radio) => !radio.disabled);
    if (members.length < 2) {
      return;
    }

    event.preventDefault();
    const currentIndex = Math.max(0, members.indexOf(this));
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown"
      ? 1
      : -1;
    const nextIndex = (currentIndex + direction + members.length) % members.length;
    const next = members[nextIndex];
    next.selectFromInteraction(event);
    next.focus();
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    if (
      this.checked &&
      (changedProperties.has("checked") || changedProperties.has("name"))
    ) {
      this.uncheckGroupPeers();
    }

    if (
      changedProperties.has("checked") ||
      changedProperties.has("name") ||
      changedProperties.has("disabled")
    ) {
      this.refreshRootRadios();
    }
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

    const wasChecked = this.checked;
    if (!wasChecked) {
      this.checked = true;
      this.uncheckGroupPeers();
    }
    const originalEvent = new Event("change");
    super.click();
    if (!wasChecked) {
      this.emitChange(originalEvent);
    }
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
      "super-radio-description",
      this.helperText ? "super-radio-helper" : "",
    ].filter(Boolean).join(" ");
    const invalid = this.validation === "error" ? "true" : undefined;

    return html`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${live(this.checked)}
            .tabIndex=${this.radioTabIndex}
            name=${this.name}
            value=${this.value}
            aria-label=${ifDefined(this.accessibleLabel || undefined)}
            aria-labelledby=${ifDefined(
              this.accessibleLabel ? undefined : "super-radio-label",
            )}
            aria-describedby=${ifDefined(describedBy)}
            aria-invalid=${ifDefined(invalid)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
          />
          <span class="surface">
            <span class="circle" part="indicator" aria-hidden="true">
              <span class="dot" part="dot"></span>
            </span>
            <span class="icon" part="icon" aria-hidden="true">
              <slot name="icon"></slot>
            </span>
            <span class="content" part="content">
              <span id="super-radio-label" class="label" part="label">
                <slot></slot>
              </span>
              <span
                id="super-radio-description"
                class="description"
                part="description"
              ><slot name="description"></slot></span>
            </span>
          </span>
        </label>
        ${this.helperText
          ? html`<span
              id="super-radio-helper"
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
    "super-radio": SuperRadio;
  }

  interface HTMLElementEventMap {
    "super-radio-change": CustomEvent<SuperRadioChangeDetail>;
  }
}
