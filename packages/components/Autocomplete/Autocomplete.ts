import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { createFloating, type FloatingController } from "../internal/floating.js";

export const SUPER_AUTOCOMPLETE_SIZES = ["large", "medium", "small"] as const;
export const SUPER_AUTOCOMPLETE_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperAutocompleteSize = (typeof SUPER_AUTOCOMPLETE_SIZES)[number];
export type SuperAutocompleteValidation =
  (typeof SUPER_AUTOCOMPLETE_VALIDATIONS)[number];

export interface SuperAutocompleteItem {
  value: string;
  label?: string;
  disabled?: boolean;
}

export type SuperAutocompleteItems =
  | readonly (string | SuperAutocompleteItem)[]
  | undefined;

export type SuperAutocompleteFilter = (
  item: SuperAutocompleteItem,
  query: string,
) => boolean;

export interface SuperAutocompleteInputDetail {
  value: string;
}

export interface SuperAutocompleteChangeDetail {
  value: string;
}

export interface SuperAutocompleteClearDetail {
  previousValue: string;
}

export interface SuperAutocompleteOpenChangeDetail {
  open: boolean;
}

interface AutocompleteOption extends SuperAutocompleteItem {
  label: string;
  id: string;
  index: number;
}

let autocompleteId = 0;

export class SuperAutocomplete extends LitElement {
  static properties = {
    value: { type: String, reflect: true },
    items: { attribute: false },
    open: { type: Boolean, reflect: true },
    placeholder: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    clearable: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    emptyText: { type: String, attribute: "empty-text", reflect: true },
    clearLabel: { type: String, attribute: "clear-label", reflect: true },
    loadingText: { type: String, attribute: "loading-text", reflect: true },
    minChars: { type: Number, attribute: "min-chars", reflect: true },
    filter: { attribute: false },
    accessibleLabel: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
    activeIndex: { state: true },
  };

  declare value: string;
  declare items: SuperAutocompleteItems;
  declare open: boolean;
  declare placeholder: string;
  declare disabled: boolean;
  declare size: SuperAutocompleteSize;
  declare validation: SuperAutocompleteValidation;
  declare clearable: boolean;
  declare loading: boolean;
  declare emptyText: string;
  declare clearLabel: string;
  declare loadingText: string;
  declare minChars: number;
  declare filter: SuperAutocompleteFilter | undefined;
  declare accessibleLabel: string;
  private declare activeIndex: number;

  private readonly controlId = `super-autocomplete-${++autocompleteId}`;
  private readonly listboxId = `${this.controlId}-listbox`;
  private floating: FloatingController | null = null;
  private listboxElement: HTMLElement | null = null;
  private inputElement: HTMLInputElement | null = null;
  private suppressFocusOpen = false;

  constructor() {
    super();
    this.value = "";
    this.items = [];
    this.open = false;
    this.placeholder = "输入以搜索";
    this.disabled = false;
    this.size = "medium";
    this.validation = "none";
    this.clearable = false;
    this.loading = false;
    this.emptyText = "没有匹配项";
    this.clearLabel = "清空输入";
    this.loadingText = "加载中...";
    this.minChars = 0;
    this.filter = undefined;
    this.accessibleLabel = "";
    this.activeIndex = -1;
  }

  static styles = css`
    :host {
      --super-autocomplete-width: 260px;
      --super-autocomplete-height: 38px;
      --super-autocomplete-padding-inline: 12px;
      --super-autocomplete-gap: 8px;
      --super-autocomplete-font-size: var(--super-font-size-base, 14px);
      --super-autocomplete-background: var(--super-background-color, #fffef9);
      --super-autocomplete-color: var(--super-text-color-primary, #292524);
      --super-autocomplete-placeholder-color: var(
        --super-text-color-placeholder,
        #9a938f
      );
      --super-autocomplete-border-color: var(--super-border-color, #2f2a27);
      --super-autocomplete-hover-color: #3f9b68;
      --super-autocomplete-focus-color: var(--super-focus-color, #56c6b7);
      --super-autocomplete-shadow-color: #a8b3bf;
      --super-autocomplete-validation-color: var(
        --super-autocomplete-border-color
      );
      --super-autocomplete-listbox-background: var(
        --super-background-color,
        #fffef9
      );
      --super-autocomplete-option-hover-background: #eef5ff;
      --super-autocomplete-option-active-background: #dfeaff;
      --super-autocomplete-option-active-color: #174ea6;
      --super-autocomplete-listbox-max-height: 260px;
      --super-autocomplete-z-index: var(--super-z-index-overlay, 2000);
      --super-autocomplete-rotation: var(--super-sketch-rotation, -0.12deg);
      --super-autocomplete-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px);

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-autocomplete-width);
      max-inline-size: 100%;
      color: var(--super-autocomplete-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-autocomplete-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-autocomplete-z-index);
    }

    :host([size="large"]) {
      --super-autocomplete-height: 46px;
      --super-autocomplete-padding-inline: 14px;
      --super-autocomplete-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-autocomplete-height: 31px;
      --super-autocomplete-padding-inline: 9px;
      --super-autocomplete-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-autocomplete-validation-color: #23804a;
      --super-autocomplete-border-color: #23804a;
      --super-autocomplete-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-autocomplete-validation-color: #a05f00;
      --super-autocomplete-border-color: #a05f00;
      --super-autocomplete-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-autocomplete-validation-color: #cf3038;
      --super-autocomplete-border-color: #cf3038;
      --super-autocomplete-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-autocomplete-validation-color: #64748b;
      --super-autocomplete-border-color: #64748b;
      --super-autocomplete-shadow-color: #cbd5e1;
    }

    .field {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-autocomplete-gap);
      min-block-size: var(--super-autocomplete-height);
      padding-inline: var(--super-autocomplete-padding-inline);
      background: var(--super-autocomplete-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-autocomplete-border-color);
      border-radius: var(--super-autocomplete-radius);
      box-shadow: 2px 2px 0 -1px var(--super-autocomplete-shadow-color);
      transform: rotate(var(--super-autocomplete-rotation));
      transition:
        border-color var(--super-motion-duration, 140ms) ease,
        box-shadow var(--super-motion-duration, 140ms) ease,
        transform 120ms ease;
    }

    .field:focus-within {
      border-color: var(--super-autocomplete-focus-color);
      box-shadow:
        0 0 0 2px var(--super-autocomplete-background),
        0 0 0 4px var(--super-autocomplete-focus-color),
        3px 3px 0 -1px #9db7fa;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      :host([validation="none"]:not([disabled])) .field:hover {
        border-color: var(--super-autocomplete-hover-color);
        box-shadow: 3px 3px 0 -1px #b9ddc3;
      }
    }

    :host([disabled]) .field {
      color: #7f8a99;
      background: #eef1f5;
      border-color: #b7c0cc;
      box-shadow: 1px 1px 0 -1px #cbd5e1;
      cursor: not-allowed;
      opacity: 0.68;
      transform: rotate(0deg);
    }

    .input {
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      inline-size: 100%;
      min-block-size: calc(var(--super-autocomplete-height) - 4px);
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      outline: 0;
    }

    .input::placeholder {
      color: var(--super-autocomplete-placeholder-color);
      opacity: 1;
    }

    .input::-webkit-search-cancel-button {
      display: none;
    }

    .clear {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear:hover {
      color: #174ea6;
      background: #e8f0ff;
    }

    .clear:focus-visible {
      outline: 2px solid var(--super-autocomplete-focus-color);
      outline-offset: -2px;
    }

    .clear[hidden] {
      display: none;
    }

    .listbox {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-autocomplete-z-index);
      box-sizing: border-box;
      min-inline-size: 100%;
      max-inline-size: calc(100vw - 16px);
      max-block-size: var(--super-autocomplete-listbox-max-height);
      margin: 0;
      padding: var(--super-spacing-xs, 4px);
      overflow: auto;
      overscroll-behavior: contain;
      color: var(--super-autocomplete-color);
      background: var(--super-autocomplete-listbox-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-autocomplete-border-color);
      border-radius: var(--super-autocomplete-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      transform: rotate(var(--super-autocomplete-rotation));
      transform-origin: top center;
    }

    .option {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-spacing-sm, 8px);
      min-block-size: 32px;
      padding: 6px 10px;
      color: inherit;
      cursor: pointer;
      outline: none;
      user-select: none;
      border-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
    }

    .option:hover {
      background: var(--super-autocomplete-option-hover-background);
    }

    .option[data-active] {
      color: var(--super-autocomplete-option-active-color);
      background: var(--super-autocomplete-option-active-background);
    }

    .option[aria-disabled="true"] {
      color: var(--super-text-color-secondary, #6b6360);
      cursor: not-allowed;
      opacity: 0.62;
    }

    .option[aria-disabled="true"]:hover {
      background: transparent;
    }

    .empty,
    .loading {
      display: grid;
      gap: 6px;
      justify-items: center;
      padding: 12px;
      color: var(--super-text-color-secondary, #6b6360);
      text-align: center;
    }

    .spinner {
      inline-size: 14px;
      block-size: 14px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: super-autocomplete-spin 700ms linear infinite;
    }

    @keyframes super-autocomplete-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .field,
      .spinner {
        transition: none;
        animation: none;
      }
    }
  `;

  private get normalizedItems(): AutocompleteOption[] {
    const items = Array.isArray(this.items) ? this.items : [];
    return items.map((entry, index) => {
      const item = typeof entry === "string" ? { value: entry } : entry;
      return {
        value: item.value,
        label: item.label ?? item.value,
        disabled: Boolean(item.disabled),
        id: `${this.controlId}-option-${index}`,
        index,
      };
    });
  }

  private get filteredItems(): AutocompleteOption[] {
    if (this.loading) {
      return [];
    }
    const query = this.value.trim().toLocaleLowerCase();
    const items = this.normalizedItems;
    if (query.length < Math.max(0, this.minChars)) {
      return [];
    }
    if (!query) {
      return items;
    }
    return items.filter((item) => {
      if (this.filter) {
        return this.filter(
          {
            value: item.value,
            label: item.label,
            disabled: item.disabled,
          },
          this.value,
        );
      }
      return (
        item.label.toLocaleLowerCase().includes(query) ||
        item.value.toLocaleLowerCase().includes(query)
      );
    });
  }

  private get activeOption(): AutocompleteOption | undefined {
    return this.filteredItems[this.activeIndex];
  }

  private get showClear(): boolean {
    return this.clearable && !this.disabled && this.value !== "";
  }

  private get showListbox(): boolean {
    return this.open && !this.disabled;
  }

  private get inputLabel(): string {
    return this.accessibleLabel || this.placeholder || "搜索";
  }

  private realignActiveOption(): void {
    if (!this.open) {
      this.activeIndex = -1;
      return;
    }
    const options = this.filteredItems;
    if (
      this.activeIndex >= 0 &&
      this.activeIndex < options.length &&
      !options[this.activeIndex]?.disabled
    ) {
      return;
    }
    this.activeIndex = options.findIndex((option) => !option.disabled);
  }

  private setOpen(nextOpen: boolean): void {
    if (nextOpen && this.disabled) {
      return;
    }
    if (this.open === nextOpen) {
      return;
    }

    this.open = nextOpen;
    if (nextOpen) {
      this.realignActiveOption();
    } else {
      this.activeIndex = -1;
    }
    this.dispatchEvent(
      new CustomEvent<SuperAutocompleteOpenChangeDetail>(
        "super-autocomplete-open-change",
        {
          detail: { open: nextOpen },
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  private moveActive(direction: 1 | -1): void {
    const options = this.filteredItems;
    if (options.length === 0) {
      this.activeIndex = -1;
      return;
    }

    let index = this.activeIndex;
    for (let attempts = 0; attempts < options.length; attempts += 1) {
      index = (index + direction + options.length) % options.length;
      if (!options[index]?.disabled) {
        this.activeIndex = index;
        return;
      }
    }
  }

  private moveToBoundary(boundary: "start" | "end"): void {
    const options = this.filteredItems;
    const indexes = boundary === "start"
      ? options.map((_, index) => index)
      : options.map((_, index) => index).reverse();
    this.activeIndex = indexes.find((index) => !options[index]?.disabled) ?? -1;
  }

  private selectOption(option: AutocompleteOption, originalEvent: Event): void {
    if (option.disabled || this.disabled || this.loading) {
      return;
    }

    this.value = option.value;
    this.activeIndex = -1;
    this.setOpen(false);
    this.dispatchEvent(
      new CustomEvent<SuperAutocompleteChangeDetail>(
        "super-autocomplete-change",
        {
          detail: { value: option.value },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.focusInputWithoutOpening();
    void originalEvent;
  }

  private focusInputWithoutOpening(): void {
    const input = this.inputElement;
    if (!input || (this.renderRoot as ShadowRoot).activeElement === input) {
      return;
    }
    this.suppressFocusOpen = true;
    input.focus({ preventScroll: true });
    this.suppressFocusOpen = false;
  }

  private handleInput = (event: InputEvent): void => {
    const input = event.currentTarget as HTMLInputElement;
    this.value = input.value;
    if (!this.disabled) {
      this.setOpen(true);
      this.realignActiveOption();
    }
    this.dispatchEvent(
      new CustomEvent<SuperAutocompleteInputDetail>(
        "super-autocomplete-input",
        {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        },
      ),
    );
  };

  private handleClear = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled || !this.showClear) {
      return;
    }

    const previousValue = this.value;
    this.value = "";
    this.activeIndex = -1;
    this.setOpen(false);
    this.dispatchEvent(
      new CustomEvent<SuperAutocompleteClearDetail>(
        "super-autocomplete-clear",
        {
          detail: { previousValue },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.focusInputWithoutOpening();
  };

  private handleOptionClick = (
    option: AutocompleteOption,
    event: MouseEvent,
  ): void => {
    event.preventDefault();
    this.selectOption(option, event);
  };

  private handleKeydown = (event: KeyboardEvent): void => {
    if (this.disabled) {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!this.open) {
        this.setOpen(true);
        this.realignActiveOption();
      } else {
        this.moveActive(event.key === "ArrowDown" ? 1 : -1);
      }
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      if (!this.open || this.value !== "") {
        return;
      }
      event.preventDefault();
      this.moveToBoundary(event.key === "Home" ? "start" : "end");
      return;
    }

    if (event.key === "Enter") {
      if (!this.open || !this.activeOption) {
        return;
      }
      event.preventDefault();
      this.selectOption(this.activeOption, event);
      return;
    }

    if (event.key === "Escape" && this.open) {
      event.preventDefault();
      this.setOpen(false);
      this.focusInputWithoutOpening();
      return;
    }

    if (event.key === "Tab" && this.open) {
      this.setOpen(false);
    }
  };

  private handleFocus = (): void => {
    if (this.disabled || this.suppressFocusOpen) {
      this.suppressFocusOpen = false;
      return;
    }
    this.realignActiveOption();
    this.setOpen(true);
  };

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || event.composedPath().includes(this)) {
      return;
    }
    this.setOpen(false);
  };

  private startFloating(): void {
    this.destroyFloating();
    const anchor = this.inputElement?.closest<HTMLElement>(".field");
    const listbox = this.listboxElement;
    if (!anchor || !listbox) {
      return;
    }

    listbox.style.position = "fixed";
    listbox.style.left = "0px";
    listbox.style.top = "0px";
    const width = anchor.getBoundingClientRect().width;
    if (width > 0) {
      listbox.style.minInlineSize = `${Math.ceil(width)}px`;
    }

    this.floating = createFloating(anchor, listbox, {
      placement: "bottom-start",
      offset: 6,
    });
  }

  private destroyFloating(): void {
    this.floating?.destroy();
    this.floating = null;
  }

  override focus(options?: FocusOptions): void {
    if (this.inputElement) {
      this.inputElement.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    if (this.inputElement) {
      this.inputElement.blur();
      return;
    }
    super.blur();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.ownerDocument.addEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
  }

  override disconnectedCallback(): void {
    this.destroyFloating();
    this.ownerDocument.removeEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (this.disabled && this.open) {
      this.open = false;
      this.activeIndex = -1;
    }

    if (changedProperties.has("loading") && this.loading) {
      this.activeIndex = -1;
    }

    if (
      changedProperties.has("items") ||
      changedProperties.has("value") ||
      changedProperties.has("minChars") ||
      changedProperties.has("filter")
    ) {
      if (this.open) {
        this.realignActiveOption();
      }
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    this.inputElement = this.renderRoot.querySelector<HTMLInputElement>(
      '[part="input"]',
    );
    this.listboxElement = this.renderRoot.querySelector<HTMLElement>(
      '[part="listbox"]',
    );

    if (changedProperties.has("open") || changedProperties.has("disabled")) {
      if (this.showListbox) {
        this.startFloating();
      } else {
        this.destroyFloating();
      }
    } else if (
      this.showListbox &&
      (changedProperties.has("items") ||
        changedProperties.has("value") ||
        changedProperties.has("loading"))
    ) {
      void this.floating?.update();
    }

    if (
      (changedProperties as Map<PropertyKey, unknown>).has("activeIndex") &&
      this.activeIndex >= 0
    ) {
      void this.updateComplete.then(() => {
        this.renderRoot
          .querySelector<HTMLElement>('[role="option"][data-active]')
          ?.scrollIntoView?.({ block: "nearest" });
      });
    }
  }

  private renderListboxContent() {
    if (this.loading) {
      return html`
        <div class="loading" part="empty" role="status" aria-live="polite">
          <span class="spinner" aria-hidden="true"></span>
          <span>${this.loadingText}</span>
        </div>
      `;
    }

    const options = this.filteredItems;
    if (options.length === 0) {
      return html`
        <div class="empty" part="empty" role="status" aria-live="polite">
          ${this.emptyText}
        </div>
      `;
    }

    return options.map(
      (option, index) => html`
        <div
          id=${option.id}
          class="option"
          part="option"
          role="option"
          aria-selected=${option.value === this.value ? "true" : "false"}
          aria-disabled=${option.disabled ? "true" : "false"}
          ?data-active=${index === this.activeIndex}
          @pointerdown=${(event: PointerEvent) => event.preventDefault()}
          @click=${(event: MouseEvent) => this.handleOptionClick(option, event)}
        >${option.label}</div>
      `,
    );
  }

  protected render() {
    const activeId = this.showListbox && !this.loading
      ? this.activeOption?.id
      : undefined;

    return html`
      <div class="field" part="field">
        <input
          class="input"
          part="input"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          aria-autocomplete="list"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls=${this.listboxId}
          aria-activedescendant=${ifDefined(activeId)}
          aria-label=${this.inputLabel}
          aria-invalid=${this.validation === "error" ? "true" : nothing}
          aria-busy=${this.loading ? "true" : nothing}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          .value=${live(this.value)}
          @input=${this.handleInput}
          @keydown=${this.handleKeydown}
          @focus=${this.handleFocus}
        />
        <button
          class="clear"
          part="clear"
          type="button"
          tabindex="-1"
          aria-label=${this.clearLabel}
          ?hidden=${!this.showClear}
          @click=${this.handleClear}
        >×</button>
      </div>
      ${this.showListbox
        ? html`
            <div
              class="listbox"
              part="listbox"
              id=${this.listboxId}
              role="listbox"
              aria-label=${this.inputLabel}
              @pointerdown=${(event: PointerEvent) => event.preventDefault()}
            >
              ${this.renderListboxContent()}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-autocomplete": SuperAutocomplete;
  }

  interface HTMLElementEventMap {
    "super-autocomplete-input": CustomEvent<SuperAutocompleteInputDetail>;
    "super-autocomplete-change": CustomEvent<SuperAutocompleteChangeDetail>;
    "super-autocomplete-clear": CustomEvent<SuperAutocompleteClearDetail>;
    "super-autocomplete-open-change": CustomEvent<SuperAutocompleteOpenChangeDetail>;
  }
}
