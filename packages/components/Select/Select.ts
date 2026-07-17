import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

export const SUPER_SELECT_SIZES = ["large", "medium", "small"] as const;
export const SUPER_SELECT_VARIANTS = [
  "default",
  "pill",
  "filled",
  "ghost",
] as const;
export const SUPER_SELECT_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperSelectSize = (typeof SUPER_SELECT_SIZES)[number];
export type SuperSelectVariant = (typeof SUPER_SELECT_VARIANTS)[number];
export type SuperSelectValidation =
  (typeof SUPER_SELECT_VALIDATIONS)[number];
export type SuperSelectValue = string | string[];
export type SuperSelectOpenReason =
  | "trigger"
  | "keyboard"
  | "search"
  | "selection"
  | "escape"
  | "outside";

interface SelectOptionSnapshot {
  value: string;
  label: string;
  disabled: boolean;
  group?: string;
}

export interface SuperSelectChangeDetail {
  value: SuperSelectValue;
  values: string[];
  name: string;
  selectedOptions: HTMLOptionElement[];
  originalEvent: Event;
}

export interface SuperSelectClearDetail {
  previousValue: SuperSelectValue;
  originalEvent: Event;
}

export interface SuperSelectOpenChangeDetail {
  open: boolean;
  reason: SuperSelectOpenReason;
  originalEvent: Event;
}

export interface SuperSelectSearchDetail {
  query: string;
  originalEvent: InputEvent;
}

interface SelectOption extends SelectOptionSnapshot {
  source: HTMLOptionElement;
  id: string;
  groupKey?: string;
  hidden: boolean;
}

const arrayEqual = (left: readonly string[], right: readonly string[]): boolean =>
  left.length === right.length && left.every((value, index) => value === right[index]);

export class SuperSelect extends LitElement {
  static properties = {
    value: { attribute: "value", noAccessor: true },
    multiple: { type: Boolean, reflect: true },
    searchable: { type: Boolean, reflect: true },
    clearable: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    readOnly: { type: Boolean, attribute: "readonly", reflect: true },
    required: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true },
    name: { type: String, reflect: true },
    size: { type: String, reflect: true },
    variant: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    placeholder: { type: String },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
    clearLabel: { type: String, attribute: "clear-label" },
    removeLabel: { type: String, attribute: "remove-label" },
    searchLabel: { type: String, attribute: "search-label" },
    searchPlaceholder: { type: String, attribute: "search-placeholder" },
    emptyText: { type: String, attribute: "empty-text" },
    loadingText: { type: String, attribute: "loading-text" },
    options: { state: true },
    query: { state: true },
    activeIndex: { state: true },
    hasPrefix: { state: true },
  };

  declare multiple: boolean;
  declare searchable: boolean;
  declare clearable: boolean;
  declare disabled: boolean;
  declare readOnly: boolean;
  declare required: boolean;
  declare loading: boolean;
  declare open: boolean;
  declare name: string;
  declare size: SuperSelectSize;
  declare variant: SuperSelectVariant;
  declare validation: SuperSelectValidation;
  declare placeholder: string;
  declare helperText: string;
  declare accessibleLabel: string;
  declare clearLabel: string;
  declare removeLabel: string;
  declare searchLabel: string;
  declare searchPlaceholder: string;
  declare emptyText: string;
  declare loadingText: string;
  private declare options: SelectOption[];
  private declare query: string;
  private declare activeIndex: number;
  private declare hasPrefix: boolean;

  private _value: SuperSelectValue = "";
  private valueIsControlled = false;
  private optionObserver: MutationObserver | null = null;
  private optionIds = new WeakMap<HTMLOptionElement, string>();
  private nextOptionId = 0;
  private initializedOptions = false;
  private hasConnected = false;
  private selectedAttributeStates = new WeakMap<HTMLOptionElement, boolean>();
  private typeahead = "";
  private typeaheadTimer: number | undefined;

  constructor() {
    super();
    this.multiple = false;
    this.searchable = false;
    this.clearable = false;
    this.disabled = false;
    this.readOnly = false;
    this.required = false;
    this.loading = false;
    this.open = false;
    this.name = "";
    this.size = "medium";
    this.variant = "default";
    this.validation = "none";
    this.placeholder = "请选择";
    this.helperText = "";
    this.accessibleLabel = "";
    this.clearLabel = "清空选择";
    this.removeLabel = "移除";
    this.searchLabel = "搜索选项";
    this.searchPlaceholder = "搜索并选择";
    this.emptyText = "暂无可选项";
    this.loadingText = "加载中...";
    this.options = [];
    this.query = "";
    this.activeIndex = -1;
    this.hasPrefix = false;
  }

  get value(): SuperSelectValue {
    return this._value;
  }

  set value(value: SuperSelectValue) {
    this.valueIsControlled = true;
    this.setInternalValue(value);
  }

  private setInternalValue(value: SuperSelectValue): void {
    const oldValue = this._value;
    this._value = value;
    this.requestUpdate("value", oldValue);
  }

  static styles = css`
    :host {
      --super-select-width: 240px;
      --super-select-height: 38px;
      --super-select-padding-inline: 12px;
      --super-select-gap: 8px;
      --super-select-font-size: 15px;
      --super-select-background: #fffef9;
      --super-select-color: #292524;
      --super-select-placeholder-color: #64748b;
      --super-select-border-color: #34445f;
      --super-select-hover-color: #3f9b68;
      --super-select-focus-color: #356df3;
      --super-select-shadow-color: #a8b3bf;
      --super-select-validation-color: var(--super-select-border-color);
      --super-select-panel-background: #fffef9;
      --super-select-option-hover-background: #eef5ff;
      --super-select-option-selected-background: #dfeaff;
      --super-select-option-selected-color: #174ea6;
      --super-select-tag-background: #edf4ff;
      --super-select-tag-border-color: #9fb7dc;
      --super-select-panel-max-height: 260px;
      --super-select-z-index: 30;
      --super-select-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-select-width);
      max-inline-size: 100%;
      color: var(--super-select-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-select-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-select-z-index);
    }

    :host([size="large"]) {
      --super-select-height: 46px;
      --super-select-padding-inline: 14px;
      --super-select-gap: 9px;
      --super-select-font-size: 17px;
    }

    :host([size="small"]) {
      --super-select-height: 31px;
      --super-select-padding-inline: 9px;
      --super-select-gap: 6px;
      --super-select-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-select-validation-color: #23804a;
      --super-select-border-color: #23804a;
      --super-select-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-select-validation-color: #a05f00;
      --super-select-border-color: #a05f00;
      --super-select-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-select-validation-color: #cf3038;
      --super-select-border-color: #cf3038;
      --super-select-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-select-validation-color: #64748b;
      --super-select-border-color: #64748b;
      --super-select-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-select-height);
      padding-inline: var(--super-select-padding-inline);
      color: var(--super-select-color);
      background: var(--super-select-background);
      border: 1.8px solid var(--super-select-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-select-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-select-rotation));
      transform-origin: center;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .control::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      opacity: 0.08;
      pointer-events: none;
      transform: rotate(0.24deg);
    }

    :host([multiple]) .control {
      min-block-size: var(--super-select-height);
      padding-block: 4px;
    }

    :host([variant="pill"]) .control {
      border-radius: 999px 930px 980px 920px / 920px 990px 930px 970px;
    }

    :host([variant="pill"]) .control::after {
      border-radius: inherit;
    }

    :host([variant="filled"]) .control {
      background: #edf4ff;
      box-shadow: inset 0 -2px 0 #c4d5f5;
    }

    :host([variant="ghost"]) .control {
      background: transparent;
      border-style: dashed;
      box-shadow: none;
    }

    :host([open]) .control,
    .control:focus-within {
      border-color: var(--super-select-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-select-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-select-gap);
      color: #526277;
      line-height: 1;
    }

    .selection {
      display: flex;
      flex: 1 1 auto;
      flex-wrap: wrap;
      align-items: center;
      min-inline-size: 0;
      gap: 5px;
    }

    .trigger,
    .search {
      flex: 1 1 44px;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-select-height) - 10px);
      margin: 0;
      padding: 0;
      overflow: hidden;
      color: inherit;
      font: inherit;
      line-height: 1.2;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: inherit;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
    }

    .placeholder {
      color: var(--super-select-placeholder-color);
    }

    .search::placeholder {
      color: var(--super-select-placeholder-color);
      opacity: 1;
    }

    .control.has-value .search:not(:focus)::placeholder {
      color: var(--super-select-color);
    }

    .search-icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1.15em;
      margin-inline-end: 4px;
      color: #526277;
      font-size: 0.95em;
    }

    .tags {
      display: contents;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-block-size: 24px;
      padding: 1px 4px 1px 8px;
      overflow: hidden;
      color: #253c62;
      background: var(--super-select-tag-background);
      border: 1.4px solid var(--super-select-tag-border-color);
      border-radius: 6px 8px 5px 7px / 7px 5px 8px 6px;
      transform: rotate(-0.2deg);
    }

    .tag-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tag-remove,
    .clear-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .tag-remove {
      inline-size: 19px;
      block-size: 19px;
      margin-inline-start: 3px;
      font-size: 0.9em;
    }

    .clear-button {
      inline-size: 24px;
      block-size: 24px;
      color: #526277;
      font-size: 1.05em;
    }

    .tag-remove:hover,
    .clear-button:hover {
      color: #174ea6;
      background: rgb(53 109 243 / 12%);
    }

    .tag-remove:focus-visible,
    .clear-button:focus-visible {
      outline: 2px solid var(--super-select-focus-color);
      outline-offset: 1px;
    }

    .validation-icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 20px;
      block-size: 20px;
      margin-inline-start: 4px;
      color: var(--super-select-validation-color);
      border: 1.5px solid currentColor;
      border-radius: 50%;
      font-size: 0.76em;
      font-weight: 700;
      line-height: 1;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      pointer-events: none;
      transition: transform 140ms ease;
    }

    :host([open]) .indicator {
      transform: rotate(180deg);
    }

    .chevron {
      inline-size: 7px;
      block-size: 7px;
      border-right: 1.8px solid currentColor;
      border-bottom: 1.8px solid currentColor;
      transform: translateY(-2px) rotate(45deg);
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-select-validation-color);
      font-size: 0.82em;
      line-height: 1.35;
    }

    .popup {
      position: absolute;
      top: calc(100% + 7px);
      left: 0;
      z-index: 2;
      box-sizing: border-box;
      min-inline-size: 100%;
      max-inline-size: max(100%, 360px);
      padding: 6px;
      color: var(--super-select-color);
      background: var(--super-select-panel-background);
      border: 1.8px solid var(--super-select-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-select-shadow-color);
      transform: rotate(0.08deg);
      animation: super-select-pop 130ms ease-out;
    }

    .listbox {
      box-sizing: border-box;
      max-block-size: var(--super-select-panel-max-height);
      overflow: auto;
      outline: 0;
      overscroll-behavior: contain;
    }

    .group + .group {
      margin-block-start: 5px;
      padding-block-start: 5px;
      border-top: 1px dashed #cbd5e1;
    }

    .group-label {
      padding: 6px 9px 4px;
      color: #526277;
      font-size: 0.82em;
      font-weight: 700;
    }

    .option {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-block-size: 34px;
      padding: 6px 9px;
      gap: 8px;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .option[data-active] {
      background: var(--super-select-option-hover-background);
      outline: 2px solid rgb(53 109 243 / 22%);
      outline-offset: -2px;
    }

    .option[aria-selected="true"] {
      color: var(--super-select-option-selected-color);
      font-weight: 700;
      background: var(--super-select-option-selected-background);
    }

    .option[aria-disabled="true"] {
      color: #94a3b8;
      cursor: not-allowed;
      opacity: 0.72;
    }

    .option-label {
      flex: 1 1 auto;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .option-check {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 17px;
      block-size: 17px;
      color: #fff;
      background: transparent;
      border: 1.5px solid #64748b;
      border-radius: 3px 5px 2px 4px / 4px 2px 5px 3px;
      font-size: 0.75em;
      line-height: 1;
    }

    :host(:not([multiple])) .option-check {
      border-color: transparent;
      border-radius: 50%;
    }

    .option[aria-selected="true"] .option-check {
      background: #3978e9;
      border-color: #174ea6;
    }

    .empty,
    .loading {
      display: grid;
      place-items: center;
      min-block-size: 118px;
      padding: 12px;
      color: #64748b;
      text-align: center;
    }

    .loading-content {
      display: inline-flex;
      align-items: center;
      gap: 9px;
    }

    .spinner {
      inline-size: 20px;
      block-size: 20px;
      border: 2px dotted #174ea6;
      border-radius: 50%;
      animation: super-select-spin 850ms linear infinite;
    }

    .source {
      display: none;
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.46;
      box-shadow: none;
      filter: grayscale(0.28);
      transform: rotate(0deg);
    }

    :host([readonly]) .control {
      cursor: default;
      background: #f7f7f3;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .control:hover {
        border-color: var(--super-select-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .option:not([aria-disabled="true"]):hover {
        background: var(--super-select-option-hover-background);
      }
    }

    @keyframes super-select-pop {
      from {
        opacity: 0;
        transform: translateY(-4px) rotate(-0.1deg) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(0.08deg) scale(1);
      }
    }

    @keyframes super-select-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .indicator,
      .option,
      .popup,
      .spinner {
        transition: none;
        animation: none;
      }
    }
  `;

  private get comboboxElement(): HTMLButtonElement | HTMLInputElement | null {
    return this.renderRoot?.querySelector<HTMLButtonElement | HTMLInputElement>(
      '[role="combobox"]',
    ) ?? null;
  }

  private get selectedValues(): string[] {
    const rawValues = Array.isArray(this.value)
      ? this.value
      : this.value
        ? [this.value]
        : [];
    return Array.from(new Set(rawValues));
  }

  private get selectedOptions(): SelectOption[] {
    const values = this.selectedValues;
    return values
      .map((value) => this.options.find((option) => option.value === value))
      .filter((option): option is SelectOption => option !== undefined);
  }

  private get filteredOptions(): SelectOption[] {
    const query = this.searchable ? this.query.trim().toLocaleLowerCase() : "";
    return this.options.filter((option) => {
      if (option.hidden) {
        return false;
      }
      if (!query) {
        return true;
      }
      return option.label.toLocaleLowerCase().includes(query) ||
        option.value.toLocaleLowerCase().includes(query);
    });
  }

  private get hasValue(): boolean {
    return this.selectedValues.length > 0;
  }

  private get hasMutableValue(): boolean {
    return this.selectedOptions.some((option) => !option.disabled);
  }

  private get activeOption(): SelectOption | undefined {
    return this.filteredOptions[this.activeIndex];
  }

  private get describedBy(): string | undefined {
    return this.helperText ? "super-select-helper" : undefined;
  }

  private get invalid(): string | undefined {
    return this.validation === "error" ? "true" : undefined;
  }

  private get comboboxLabel(): string {
    if (this.accessibleLabel) {
      return this.accessibleLabel;
    }
    const labels = this.selectedOptions.map((option) => option.label);
    return labels.length ? labels.join("、") : this.placeholder;
  }

  private getOptionId(option: HTMLOptionElement): string {
    const existing = this.optionIds.get(option);
    if (existing) {
      return existing;
    }
    const id = `super-select-option-${this.nextOptionId++}`;
    this.optionIds.set(option, id);
    return id;
  }

  private collectOptions(): SelectOption[] {
    const snapshots: SelectOption[] = [];

    const addOption = (
      option: HTMLOptionElement,
      group?: HTMLOptGroupElement,
      groupKey?: string,
    ): void => {
      snapshots.push({
        source: option,
        id: this.getOptionId(option),
        value: option.value,
        label: (option.label || option.textContent || "").trim(),
        disabled: option.disabled || Boolean(group?.disabled),
        hidden: option.hidden || Boolean(group?.hidden),
        group: group?.label || undefined,
        groupKey,
      });
    };

    Array.from(this.children).forEach((child, childIndex) => {
      if (child instanceof HTMLOptionElement) {
        addOption(child);
        return;
      }
      if (child instanceof HTMLOptGroupElement) {
        Array.from(child.children).forEach((option) => {
          if (option instanceof HTMLOptionElement) {
            addOption(option, child, `super-select-group-${childIndex}`);
          }
        });
      }
    });

    return snapshots;
  }

  private normalizeValue(
    value: SuperSelectValue,
    options = this.options,
    preserveUnavailable = false,
  ): SuperSelectValue {
    const available = new Set(options.map((option) => option.value));
    const filterAvailable = (values: string[]): string[] => {
      const unique = Array.from(new Set(values.filter(Boolean)));
      return options.length && !preserveUnavailable
        ? unique.filter((item) => available.has(item))
        : unique;
    };

    if (this.multiple) {
      const values = Array.isArray(value) ? value : value ? [value] : [];
      return filterAvailable(values);
    }

    const single = Array.isArray(value) ? value[0] ?? "" : value;
    return !single ||
        (options.length && !preserveUnavailable && !available.has(single))
      ? ""
      : single;
  }

  private valueEqual(left: SuperSelectValue, right: SuperSelectValue): boolean {
    if (Array.isArray(left) && Array.isArray(right)) {
      return arrayEqual(left, right);
    }
    return left === right;
  }

  private syncSourceSelection(
    options = this.options,
    value = this.value,
  ): void {
    const values = new Set(
      Array.isArray(value) ? value : value ? [value] : [],
    );
    options.forEach((option) => {
      option.source.selected = values.has(option.value);
    });
  }

  private syncOptions(
    adoptSourceSelection: boolean,
    preferredOption?: HTMLOptionElement,
    forceAdoption = false,
  ): void {
    const activeOptionId = this.activeOption?.id;
    const options = this.collectOptions();
    const shouldAdopt = adoptSourceSelection &&
      (forceAdoption || this.initializedOptions || !this.valueIsControlled);

    let nextValue: SuperSelectValue = this.value;
    if (shouldAdopt) {
      const selected = options.filter((option) => option.source.selected);
      if (this.multiple) {
        nextValue = selected.map((option) => option.value);
      } else {
        const preferred = preferredOption
          ? options.find((option) => option.source === preferredOption)
          : undefined;
        nextValue = preferred?.value ?? selected.at(-1)?.value ?? "";
      }
    }

    nextValue = this.normalizeValue(
      nextValue,
      options,
      this.valueIsControlled && !shouldAdopt,
    );
    this.options = options;
    if (!this.valueEqual(this.value, nextValue)) {
      this.setInternalValue(nextValue);
    }
    this.syncSourceSelection(options, nextValue);
    if (options.length > 0) {
      this.initializedOptions = true;
    }
    if (activeOptionId) {
      this.activeIndex = this.filteredOptions.findIndex(
        (option) => option.id === activeOptionId && !option.disabled,
      );
    }
    this.realignActiveOption();
  }

  public refreshOptions(): void {
    this.syncOptions(true, undefined, true);
    this.rememberSelectedAttributeStates();
  }

  private realignActiveOption(): void {
    if (!this.open || this.loading) {
      this.activeIndex = -1;
      return;
    }
    const options = this.filteredOptions;
    const active = options[this.activeIndex];
    if (active && !active.disabled) {
      return;
    }
    const selected = new Set(this.selectedValues);
    const selectedIndex = options.findIndex(
      (option) => selected.has(option.value) && !option.disabled,
    );
    this.activeIndex = selectedIndex >= 0
      ? selectedIndex
      : options.findIndex((option) => !option.disabled);
  }

  private handleOptionMutations = (records: MutationRecord[]): void => {
    let relevant = false;
    let adoptSourceSelection = false;
    let preferredOption: HTMLOptionElement | undefined;
    const optionsFromNode = (node: Node): HTMLOptionElement[] =>
      node instanceof HTMLOptionElement
        ? [node]
        : node instanceof HTMLElement
        ? Array.from(node.querySelectorAll<HTMLOptionElement>("option"))
        : [];
    const currentOptions = new Set(
      this.collectOptions().map((option) => option.source),
    );

    records.forEach((record) => {
      if (record.type === "attributes") {
        if (
          record.target instanceof HTMLOptionElement ||
          record.target instanceof HTMLOptGroupElement
        ) {
          relevant = true;
        }
        if (
          record.attributeName === "selected" &&
          record.target instanceof HTMLOptionElement
        ) {
          const selected = record.target.hasAttribute("selected");
          if (currentOptions.has(record.target)) {
            this.selectedAttributeStates.set(record.target, selected);
            adoptSourceSelection = true;
            record.target.selected = selected;
            if (selected) {
              preferredOption = record.target;
            }
          }
        }
        return;
      }

      if (record.type === "characterData" || record.type === "childList") {
        relevant = true;
        record.addedNodes.forEach((node) => {
          optionsFromNode(node).forEach((option) => {
            if (!currentOptions.has(option)) {
              return;
            }
            const selected = option.hasAttribute("selected");
            const wasKnown = this.selectedAttributeStates.has(option);
            const selectionChanged = wasKnown &&
              this.selectedAttributeStates.get(option) !== selected;
            if ((!wasKnown && selected) || selectionChanged) {
              option.selected = selected;
              adoptSourceSelection = true;
              if (selected) {
                preferredOption = option;
              }
            }
            this.selectedAttributeStates.set(option, selected);
          });
        });
      }
    });

    if (relevant) {
      this.syncOptions(adoptSourceSelection, preferredOption, adoptSourceSelection);
    }
  };

  private rememberSelectedAttributeStates(): void {
    this.collectOptions().forEach(({ source }) => {
      this.selectedAttributeStates.set(
        source,
        source.hasAttribute("selected"),
      );
    });
  }

  private reconcileDisconnectedSelectedAttributes(): {
    changed: boolean;
    preferredOption?: HTMLOptionElement;
  } {
    let changed = false;
    let preferredOption: HTMLOptionElement | undefined;
    this.collectOptions().forEach(({ source }) => {
      const selected = source.hasAttribute("selected");
      const wasKnown = this.selectedAttributeStates.has(source);
      if (
        (wasKnown && this.selectedAttributeStates.get(source) !== selected) ||
        (!wasKnown && selected)
      ) {
        source.selected = selected;
        changed = true;
        if (selected) {
          preferredOption = source;
        }
      }
      this.selectedAttributeStates.set(source, selected);
    });

    return { changed, preferredOption };
  }

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || event.composedPath().includes(this)) {
      return;
    }
    this.setOpen(false, "outside", event);
  };

  override connectedCallback(): void {
    super.connectedCallback();
    const disconnectedSelection = this.hasConnected
      ? this.reconcileDisconnectedSelectedAttributes()
      : { changed: false };
    const Observer = this.ownerDocument.defaultView?.MutationObserver;
    if (Observer) {
      this.optionObserver = new Observer(this.handleOptionMutations);
      this.optionObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["value", "label", "disabled", "selected", "hidden"],
      });
    }
    this.ownerDocument.addEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    this.syncOptions(
      disconnectedSelection.changed || !this.initializedOptions,
      disconnectedSelection.preferredOption,
      disconnectedSelection.changed,
    );
    this.rememberSelectedAttributeStates();
    this.hasConnected = true;
  }

  override disconnectedCallback(): void {
    const pendingOptionMutations = this.optionObserver?.takeRecords() ?? [];
    if (pendingOptionMutations.length > 0) {
      this.handleOptionMutations(pendingOptionMutations);
    }
    this.rememberSelectedAttributeStates();
    this.optionObserver?.disconnect();
    this.optionObserver = null;
    this.ownerDocument.removeEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    const view = this.ownerDocument.defaultView;
    if (this.typeaheadTimer !== undefined) {
      view?.clearTimeout(this.typeaheadTimer);
      this.typeaheadTimer = undefined;
    }
    this.typeahead = "";
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("multiple") || changedProperties.has("value")) {
      const normalized = this.normalizeValue(
        this.value,
        this.options,
        this.valueIsControlled,
      );
      if (!this.valueEqual(this.value, normalized)) {
        this.setInternalValue(normalized);
      }
      this.syncSourceSelection(this.options, normalized);
    }

    if (this.disabled && this.open) {
      this.open = false;
    }

    if (!this.open) {
      this.query = "";
      this.activeIndex = -1;
      return;
    }

    if (
      changedProperties.has("open") ||
      changedProperties.has("loading") ||
      changedProperties.has("searchable") ||
      changedProperties.has("multiple") ||
      changedProperties.has("value")
    ) {
      this.realignActiveOption();
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("open")) {
      if (this.open) {
        void this.updateComplete.then(() => this.comboboxElement?.focus());
      }
    }

    if (
      (changedProperties as Map<PropertyKey, unknown>).has("activeIndex") &&
      this.open &&
      this.activeIndex >= 0
    ) {
      void this.updateComplete.then(() => {
        const active = this.renderRoot.querySelector<HTMLElement>(
          '[role="option"][data-active]',
        );
        if (typeof active?.scrollIntoView === "function") {
          active.scrollIntoView({ block: "nearest" });
        }
      });
    }
  }

  private emitChange(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperSelectChangeDetail>("super-select-change", {
        detail: {
          value: Array.isArray(this.value) ? [...this.value] : this.value,
          values: [...this.selectedValues],
          name: this.name,
          selectedOptions: this.selectedOptions.map((option) => option.source),
          originalEvent,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private setOpen(
    nextOpen: boolean,
    reason: SuperSelectOpenReason,
    originalEvent: Event,
  ): void {
    if ((nextOpen && this.disabled) || this.open === nextOpen) {
      return;
    }
    if (nextOpen) {
      this.syncOptions(false);
    }
    this.open = nextOpen;
    if (nextOpen) {
      this.realignActiveOption();
    } else {
      this.query = "";
      this.activeIndex = -1;
    }
    this.dispatchEvent(
      new CustomEvent<SuperSelectOpenChangeDetail>("super-select-open-change", {
        detail: { open: nextOpen, reason, originalEvent },
        bubbles: true,
        composed: true,
      }),
    );
    if (nextOpen) {
      void this.updateComplete.then(() => this.comboboxElement?.focus());
    }
  }

  private selectOption(option: SelectOption, originalEvent: Event): void {
    if (option.disabled || this.disabled || this.readOnly || this.loading) {
      return;
    }

    if (this.multiple) {
      const values = this.selectedValues;
      this.setInternalValue(values.includes(option.value)
        ? values.filter((value) => value !== option.value)
        : [...values, option.value]);
      this.syncSourceSelection(this.options, this.value);
      this.emitChange(originalEvent);
      return;
    }

    const changed = this.value !== option.value;
    this.setInternalValue(option.value);
    this.syncSourceSelection(this.options, this.value);
    if (changed) {
      this.emitChange(originalEvent);
    }
    this.setOpen(false, "selection", originalEvent);
  }

  private clearSelection(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled || this.readOnly || this.loading || !this.hasValue) {
      return;
    }
    const previousValue: SuperSelectValue = Array.isArray(this.value)
      ? [...this.value]
      : this.value;
    const retainedValues = this.selectedOptions
      .filter((option) => option.disabled)
      .map((option) => option.value);
    const nextValue: SuperSelectValue = this.multiple
      ? retainedValues
      : retainedValues[0] ?? "";
    if (this.valueEqual(this.value, nextValue)) {
      return;
    }
    this.setInternalValue(nextValue);
    this.syncSourceSelection(this.options, this.value);
    this.dispatchEvent(
      new CustomEvent<SuperSelectClearDetail>("super-select-clear", {
        detail: { previousValue, originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
    this.emitChange(event);
    this.comboboxElement?.focus();
  }

  private removeValue(value: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const option = this.options.find((item) => item.value === value);
    if (
      !this.multiple ||
      this.disabled ||
      this.readOnly ||
      this.loading ||
      option?.disabled
    ) {
      return;
    }
    this.setInternalValue(
      this.selectedValues.filter((item) => item !== value),
    );
    this.syncSourceSelection(this.options, this.value);
    this.emitChange(event);
    this.comboboxElement?.focus();
  }

  private moveActive(direction: 1 | -1): void {
    const options = this.filteredOptions;
    if (!options.length) {
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
    this.activeIndex = -1;
  }

  private moveToBoundary(boundary: "start" | "end"): void {
    const options = this.filteredOptions;
    const indexes = boundary === "start"
      ? options.map((_, index) => index)
      : options.map((_, index) => index).reverse();
    this.activeIndex = indexes.find((index) => !options[index]?.disabled) ?? -1;
  }

  private handleTypeahead(key: string, event: KeyboardEvent): void {
    const view = this.ownerDocument.defaultView;
    this.typeahead += key.toLocaleLowerCase();
    if (this.typeaheadTimer !== undefined) {
      view?.clearTimeout(this.typeaheadTimer);
    }
    this.typeaheadTimer = view?.setTimeout(() => {
      this.typeahead = "";
      this.typeaheadTimer = undefined;
    }, 650);

    if (!this.open) {
      this.setOpen(true, "keyboard", event);
    }
    const options = this.filteredOptions;
    const start = Math.max(this.activeIndex + 1, 0);
    const ordered = [...options.slice(start), ...options.slice(0, start)];
    const match = ordered.find(
      (option) => !option.disabled &&
        option.label.toLocaleLowerCase().startsWith(this.typeahead),
    );
    if (match) {
      this.activeIndex = options.indexOf(match);
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    const target = event.composedPath()[0];
    if (
      target instanceof HTMLElement &&
      (target.classList.contains("tag-remove") ||
        target.classList.contains("clear-button"))
    ) {
      return;
    }
    if (this.disabled) {
      return;
    }

    if (
      !this.searchable &&
      event.key.length === 1 &&
      event.key !== " " &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      this.handleTypeahead(event.key, event);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      if (!this.open) {
        this.setOpen(true, "keyboard", event);
        this.realignActiveOption();
      } else {
        this.moveActive(direction);
      }
      return;
    }

    const isSearchInput = target instanceof HTMLInputElement &&
      target.classList.contains("search");

    if (
      (event.key === "Home" || event.key === "End") &&
      !isSearchInput
    ) {
      if (!this.open) {
        return;
      }
      event.preventDefault();
      this.moveToBoundary(event.key === "Home" ? "start" : "end");
      return;
    }

    if (event.key === "Enter" || (event.key === " " && !this.searchable)) {
      event.preventDefault();
      if (!this.open) {
        this.setOpen(true, "keyboard", event);
      } else if (this.activeOption) {
        this.selectOption(this.activeOption, event);
      }
      return;
    }

    if (event.key === "Escape" && this.open) {
      event.preventDefault();
      this.setOpen(false, "escape", event);
      this.comboboxElement?.focus();
      return;
    }

    if (event.key === "Tab" && this.open) {
      this.setOpen(false, "keyboard", event);
    }
  }

  private handleControlClick(event: MouseEvent): void {
    if (this.disabled) {
      return;
    }
    const origin = event.composedPath()[0];
    if (
      this.searchable &&
      this.open &&
      origin instanceof HTMLInputElement &&
      origin.classList.contains("search")
    ) {
      return;
    }
    this.setOpen(!this.open, "trigger", event);
  }

  private handleSearch(event: InputEvent): void {
    const input = event.currentTarget as HTMLInputElement;
    this.query = input.value;
    if (!this.open) {
      this.setOpen(true, "search", event);
    }
    this.activeIndex = this.filteredOptions.findIndex((option) => !option.disabled);
    this.dispatchEvent(
      new CustomEvent<SuperSelectSearchDetail>("super-select-search", {
        detail: { query: this.query, originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleSearchFocus(event: FocusEvent): void {
    if (!this.open) {
      (event.currentTarget as HTMLInputElement).select();
    }
  }

  private handlePrefixSlotChange(event: Event): void {
    const slot = event.currentTarget as HTMLSlotElement;
    this.hasPrefix = slot.assignedNodes({ flatten: true }).some((node) =>
      node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim())
    );
  }

  override click(): void {
    if (this.disabled) {
      return;
    }
    const control = this.renderRoot?.querySelector<HTMLElement>(".control");
    if (control) {
      control.click();
      return;
    }
    const event = new MouseEvent("click");
    super.click();
    this.setOpen(!this.open, "trigger", event);
  }

  override focus(options?: FocusOptions): void {
    const combobox = this.comboboxElement;
    if (combobox) {
      combobox.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const combobox = this.comboboxElement;
    if (combobox) {
      combobox.blur();
      return;
    }
    super.blur();
  }

  private validationSymbol(): string {
    switch (this.validation) {
      case "success":
        return "✓";
      case "warning":
        return "!";
      case "error":
        return "×";
      case "info":
        return "i";
      default:
        return "";
    }
  }

  private renderTags() {
    if (!this.multiple) {
      return nothing;
    }
    return html`
      <span class="tags" part="tags">
        ${this.selectedOptions.map((option) => html`
          <span class="tag" part="tag">
            <span class="tag-label">${option.label}</span>
            ${this.readOnly || this.disabled || this.loading || option.disabled
              ? nothing
              : html`<button
                  class="tag-remove"
                  part="tag-remove"
                  type="button"
                  aria-label=${`${this.removeLabel}：${option.label}`}
                  @click=${(event: MouseEvent) => this.removeValue(option.value, event)}
                  @keydown=${(event: KeyboardEvent) => event.stopPropagation()}
                >×</button>`}
          </span>
        `)}
      </span>
    `;
  }

  private renderDefaultTrigger() {
    if (this.multiple && this.hasValue) {
      return nothing;
    }
    const selected = this.selectedOptions[0];
    return selected
      ? html`<span part="value">${selected.label}</span>`
      : html`<span class="placeholder" part="placeholder">${this.placeholder}</span>`;
  }

  private renderCombobox() {
    const activeId = this.open && !this.loading
      ? this.activeOption?.id
      : undefined;
    const commonAria = {
      expanded: this.open ? "true" : "false",
      required: this.required ? "true" : undefined,
      readonly: this.readOnly ? "true" : undefined,
      busy: this.loading ? "true" : undefined,
    };

    if (this.searchable) {
      const selectedLabel = this.selectedOptions[0]?.label;
      const placeholder = this.open
        ? this.searchPlaceholder
        : this.multiple && this.hasValue
          ? ""
          : this.placeholder;
      return html`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${live(
            this.open
              ? this.query
              : this.multiple
                ? ""
                : selectedLabel ?? "",
          )}
          placeholder=${placeholder}
          aria-label=${this.accessibleLabel || this.searchLabel}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded=${commonAria.expanded}
          aria-controls="super-select-listbox"
          aria-activedescendant=${ifDefined(activeId)}
          aria-required=${ifDefined(commonAria.required)}
          aria-readonly=${ifDefined(commonAria.readonly)}
          aria-invalid=${ifDefined(this.invalid)}
          aria-busy=${ifDefined(commonAria.busy)}
          aria-describedby=${ifDefined(this.describedBy)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          @input=${this.handleSearch}
          @focus=${this.handleSearchFocus}
        />
      `;
    }

    return html`
      <button
        class="trigger"
        part="trigger"
        type="button"
        role="combobox"
        aria-label=${this.comboboxLabel}
        aria-haspopup="listbox"
        aria-expanded=${commonAria.expanded}
        aria-controls="super-select-listbox"
        aria-activedescendant=${ifDefined(activeId)}
        aria-required=${ifDefined(commonAria.required)}
        aria-readonly=${ifDefined(commonAria.readonly)}
        aria-invalid=${ifDefined(this.invalid)}
        aria-busy=${ifDefined(commonAria.busy)}
        aria-describedby=${ifDefined(this.describedBy)}
        ?disabled=${this.disabled}
      >
        <slot name="trigger">${this.renderDefaultTrigger()}</slot>
      </button>
    `;
  }

  private renderOption(option: SelectOption, index: number) {
    const selected = this.selectedValues.includes(option.value);
    const globallyUnavailable = this.readOnly || this.loading;
    return html`
      <div
        id=${option.id}
        class="option"
        part="option"
        role="option"
        aria-selected=${selected ? "true" : "false"}
        aria-disabled=${option.disabled || globallyUnavailable ? "true" : "false"}
        ?data-active=${index === this.activeIndex}
        @pointerdown=${(event: PointerEvent) => event.preventDefault()}
        @click=${(event: MouseEvent) => this.selectOption(option, event)}
      >
        <span class="option-check" part="option-check" aria-hidden="true">
          ${selected ? "✓" : ""}
        </span>
        <span class="option-label">${option.label}</span>
      </div>
    `;
  }

  private renderOptionGroups() {
    const options = this.filteredOptions;
    const groups: Array<{
      key: string;
      label?: string;
      options: Array<{ option: SelectOption; index: number }>;
    }> = [];

    options.forEach((option, index) => {
      const key = option.groupKey ?? "super-select-ungrouped";
      let group = groups.at(-1);
      if (!group || group.key !== key) {
        group = { key, label: option.group, options: [] };
        groups.push(group);
      }
      group.options.push({ option, index });
    });

    return groups.map((group) => html`
      <div
        class="group"
        part="group"
        role=${group.label ? "group" : "presentation"}
        aria-label=${ifDefined(group.label)}
      >
        ${group.label
          ? html`<div class="group-label" part="group-label">${group.label}</div>`
          : nothing}
        ${group.options.map(({ option, index }) => this.renderOption(option, index))}
      </div>
    `);
  }

  private renderPopup() {
    if (!this.open) {
      return nothing;
    }
    const options = this.filteredOptions;
    return html`
      <div class="popup" part="popup">
        <div
          id="super-select-listbox"
          class="listbox"
          part="listbox"
          role="listbox"
          aria-label=${this.accessibleLabel || this.placeholder}
          aria-multiselectable=${ifDefined(this.multiple ? "true" : undefined)}
          aria-readonly=${ifDefined(this.readOnly ? "true" : undefined)}
          aria-busy=${this.loading ? "true" : "false"}
        >
          ${!this.loading && options.length
            ? this.renderOptionGroups()
            : nothing}
        </div>
        ${this.loading
          ? html`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`
          : !options.length
            ? html`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`
            : nothing}
      </div>
    `;
  }

  protected render() {
    const validationSymbol = this.validationSymbol();
    const controlClass = `control${this.hasValue ? " has-value" : ""}`;
    return html`
      <div
        class=${controlClass}
        part="control"
        @click=${this.handleControlClick}
        @keydown=${this.handleKeyDown}
      >
        <span
          class="prefix"
          part="prefix"
          aria-hidden="true"
          ?hidden=${!this.hasPrefix}
        >
          <slot name="prefix" @slotchange=${this.handlePrefixSlotChange}></slot>
        </span>
        <span class="selection" part="value">
          ${this.renderTags()}
          ${this.renderCombobox()}
        </span>
        ${this.clearable &&
        this.hasMutableValue &&
        !this.disabled &&
        !this.readOnly &&
        !this.loading
          ? html`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${(event: KeyboardEvent) => event.stopPropagation()}
            >×</button>`
          : nothing}
        ${validationSymbol
          ? html`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${validationSymbol}
            </span>`
          : nothing}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText
        ? html`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${ifDefined(this.validation === "error" ? "alert" : undefined)}
            aria-live=${ifDefined(
              this.validation === "error" ? undefined : "polite",
            )}
          >${this.helperText}</span>`
        : nothing}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${() => this.syncOptions(false)}></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-select": SuperSelect;
  }

  interface HTMLElementEventMap {
    "super-select-change": CustomEvent<SuperSelectChangeDetail>;
    "super-select-clear": CustomEvent<SuperSelectClearDetail>;
    "super-select-open-change": CustomEvent<SuperSelectOpenChangeDetail>;
    "super-select-search": CustomEvent<SuperSelectSearchDetail>;
  }
}
