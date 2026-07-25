import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const SUPER_TIME_PICKER_SIZES = ["large", "medium", "small"] as const;
export const SUPER_TIME_PICKER_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperTimePickerSize = (typeof SUPER_TIME_PICKER_SIZES)[number];
export type SuperTimePickerValidation =
  (typeof SUPER_TIME_PICKER_VALIDATIONS)[number];
export type SuperTimePickerValue = string | string[];
export type SuperTimePickerOpenReason =
  | "trigger"
  | "confirm"
  | "outside"
  | "escape"
  | "shortcut"
  | "clear";

export interface SuperTimePickerShortcut {
  label: string;
  value: SuperTimePickerValue | (() => SuperTimePickerValue);
}

export interface SuperTimePickerChangeDetail {
  value: SuperTimePickerValue;
  name: string;
  originalEvent: Event;
}

export interface SuperTimePickerClearDetail {
  name: string;
  originalEvent: Event;
}

export interface SuperTimePickerOpenChangeDetail {
  open: boolean;
  reason: SuperTimePickerOpenReason;
  originalEvent: Event;
}

interface TimeParts {
  hour: number;
  minute: number;
  second: number;
}

const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/;
const FORMAT_TOKEN_PATTERN = /HH|hh|mm|ss|H|h|A|a/g;

const pad2 = (value: number): string => String(value).padStart(2, "0");

const parseTime = (value: string): TimeParts | null => {
  const match = TIME_PATTERN.exec(value);
  if (!match) {
    return null;
  }
  return {
    hour: Number(match[1]),
    minute: Number(match[2]),
    second: match[3] === undefined ? 0 : Number(match[3]),
  };
};

const formatTime = (parts: TimeParts, withSeconds: boolean): string =>
  withSeconds
    ? `${pad2(parts.hour)}:${pad2(parts.minute)}:${pad2(parts.second)}`
    : `${pad2(parts.hour)}:${pad2(parts.minute)}`;

const rangeNumbers = (limit: number, step: number): number[] => {
  const safeStep = Math.max(1, Math.floor(step) || 1);
  const values: number[] = [];
  for (let value = 0; value < limit; value += safeStep) {
    values.push(value);
  }
  return values;
};

const ensureColumnTabstop = <T extends { tabbable: boolean }>(
  entries: T[],
): T[] => {
  if (entries.length > 0 && !entries.some((entry) => entry.tabbable)) {
    entries[0].tabbable = true;
  }
  return entries;
};

export class SuperTimePicker extends LitElement {
  static properties = {
    value: { attribute: "value", noAccessor: true },
    range: { type: Boolean, reflect: true },
    format: { type: String },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    clearable: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true },
    name: { type: String, reflect: true },
    placeholder: { type: String },
    startPlaceholder: { type: String, attribute: "start-placeholder" },
    endPlaceholder: { type: String, attribute: "end-placeholder" },
    hourStep: { type: Number, attribute: "hour-step" },
    minuteStep: { type: Number, attribute: "minute-step" },
    secondStep: { type: Number, attribute: "second-step" },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
    clearLabel: { type: String, attribute: "clear-label" },
    confirmLabel: { type: String, attribute: "confirm-label" },
    amLabel: { type: String, attribute: "am-label" },
    pmLabel: { type: String, attribute: "pm-label" },
    startLabel: { type: String, attribute: "start-label" },
    endLabel: { type: String, attribute: "end-label" },
    shortcuts: { attribute: false },
  };

  declare range: boolean;
  declare format: string;
  declare size: SuperTimePickerSize;
  declare validation: SuperTimePickerValidation;
  declare disabled: boolean;
  declare clearable: boolean;
  declare open: boolean;
  declare name: string;
  declare placeholder: string;
  declare startPlaceholder: string;
  declare endPlaceholder: string;
  declare hourStep: number;
  declare minuteStep: number;
  declare secondStep: number;
  declare helperText: string;
  declare accessibleLabel: string;
  declare clearLabel: string;
  declare confirmLabel: string;
  declare amLabel: string;
  declare pmLabel: string;
  declare startLabel: string;
  declare endLabel: string;
  declare shortcuts: SuperTimePickerShortcut[];

  private _value: SuperTimePickerValue = "";

  constructor() {
    super();
    this.range = false;
    this.format = "HH:mm";
    this.size = "medium";
    this.validation = "none";
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.name = "";
    this.placeholder = "选择时间";
    this.startPlaceholder = "开始时间";
    this.endPlaceholder = "结束时间";
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.helperText = "";
    this.accessibleLabel = "";
    this.clearLabel = "清空";
    this.confirmLabel = "确定";
    this.amLabel = "上午";
    this.pmLabel = "下午";
    this.startLabel = "开始";
    this.endLabel = "结束";
    this.shortcuts = [];
  }

  get value(): SuperTimePickerValue {
    return this._value;
  }

  set value(value: SuperTimePickerValue) {
    this.setInternalValue(value);
  }

  private setInternalValue(value: SuperTimePickerValue): void {
    const normalized = this.normalizeValue(value);
    const oldValue = this._value;
    this._value = normalized;
    this.requestUpdate("value", oldValue);
  }

  private hasSeconds(): boolean {
    return this.format.includes("ss");
  }

  private isHour12(): boolean {
    return /h/.test(this.format) && /[Aa]/.test(this.format);
  }

  private hasValue(): boolean {
    return Array.isArray(this.value)
      ? this.value.some((item) => item !== "")
      : this.value !== "";
  }

  private normalizeSingle(value: string): string {
    const parts = parseTime(value);
    return parts === null ? "" : formatTime(parts, this.hasSeconds());
  }

  private normalizeValue(value: SuperTimePickerValue): SuperTimePickerValue {
    if (this.range) {
      if (!Array.isArray(value)) {
        return [];
      }
      return value
        .filter((item): item is string => typeof item === "string")
        .map((item) => this.normalizeSingle(item))
        .slice(0, 2);
    }
    if (Array.isArray(value)) {
      return "";
    }
    return this.normalizeSingle(value);
  }

  static styles = css`
    :host {
      --super-time-picker-width: 220px;
      --super-time-picker-height: 38px;
      --super-time-picker-padding-inline: 12px;
      --super-time-picker-gap: 8px;
      --super-time-picker-font-size: 15px;
      --super-time-picker-background: #fffef9;
      --super-time-picker-color: #292524;
      --super-time-picker-placeholder-color: #64748b;
      --super-time-picker-border-color: #34445f;
      --super-time-picker-hover-color: #3f9b68;
      --super-time-picker-focus-color: #356df3;
      --super-time-picker-shadow-color: #a8b3bf;
      --super-time-picker-validation-color: var(--super-time-picker-border-color);
      --super-time-picker-panel-background: #fffef9;
      --super-time-picker-cell-hover-background: #eef5ff;
      --super-time-picker-cell-selected-background: #dfeaff;
      --super-time-picker-cell-selected-color: #174ea6;
      --super-time-picker-column-height: 176px;
      --super-time-picker-z-index: 30;
      --super-time-picker-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-time-picker-width);
      max-inline-size: 100%;
      color: var(--super-time-picker-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-time-picker-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-time-picker-z-index);
    }

    :host([size="large"]) {
      --super-time-picker-height: 46px;
      --super-time-picker-padding-inline: 14px;
      --super-time-picker-font-size: 17px;
    }

    :host([size="small"]) {
      --super-time-picker-height: 31px;
      --super-time-picker-padding-inline: 9px;
      --super-time-picker-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-time-picker-validation-color: #23804a;
      --super-time-picker-border-color: #23804a;
      --super-time-picker-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-time-picker-validation-color: #a05f00;
      --super-time-picker-border-color: #a05f00;
      --super-time-picker-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-time-picker-validation-color: #cf3038;
      --super-time-picker-border-color: #cf3038;
      --super-time-picker-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-time-picker-validation-color: #64748b;
      --super-time-picker-border-color: #64748b;
      --super-time-picker-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-time-picker-height);
      padding-inline: var(--super-time-picker-padding-inline);
      color: var(--super-time-picker-color);
      background: var(--super-time-picker-background);
      border: 1.8px solid var(--super-time-picker-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-time-picker-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-time-picker-rotation));
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

    :host([open]) .control,
    .control:focus-within {
      border-color: var(--super-time-picker-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-time-picker-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-time-picker-gap);
      color: #526277;
      line-height: 1;
    }

    .trigger {
      display: inline-flex;
      flex: 1 1 auto;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-time-picker-height) - 10px);
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

    .trigger-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .placeholder {
      color: var(--super-time-picker-placeholder-color);
    }

    .range-separator {
      flex: none;
      padding-inline: 4px;
      color: var(--super-time-picker-placeholder-color);
    }

    .clear-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: #526277;
      font: inherit;
      font-size: 1.05em;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear-button:hover {
      color: #174ea6;
      background: rgb(53 109 243 / 12%);
    }

    .clear-button:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      font-size: 1.05em;
      pointer-events: none;
      transform: rotate(-4deg);
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-time-picker-validation-color);
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
      padding: 8px;
      color: var(--super-time-picker-color);
      background: var(--super-time-picker-panel-background);
      border: 1.8px solid var(--super-time-picker-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-time-picker-shadow-color);
      transform: rotate(0.08deg);
      animation: super-time-picker-pop 130ms ease-out;
    }

    .popup-body {
      display: flex;
      align-items: stretch;
      gap: 8px;
    }

    .shortcuts {
      display: flex;
      flex: none;
      flex-direction: column;
      gap: 2px;
      padding-inline-end: 8px;
      border-inline-end: 1px dashed #cbd5e1;
    }

    .groups {
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
    }

    .group {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .group-title {
      padding-block-end: 4px;
      color: #526277;
      font-size: 0.78em;
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .columns {
      display: flex;
      gap: 4px;
    }

    .column {
      flex: 1 1 0;
      min-inline-size: 44px;
      max-block-size: var(--super-time-picker-column-height);
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }

    .column + .column {
      border-inline-start: 1px dashed #e2e8f0;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-block-size: 28px;
      margin: 0;
      padding: 2px 4px;
      color: var(--super-time-picker-color);
      font: inherit;
      font-size: 0.88em;
      line-height: 1.2;
      text-align: center;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .cell:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .cell[aria-pressed="true"] {
      color: var(--super-time-picker-cell-selected-color);
      font-weight: 700;
      background: var(--super-time-picker-cell-selected-background);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-block-start: 8px;
      padding-block-start: 7px;
      border-top: 1px dashed #cbd5e1;
    }

    .shortcut,
    .footer-button {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 3px 9px;
      color: #16428f;
      font: inherit;
      font-size: 0.84em;
      line-height: 1.3;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
    }

    .shortcut {
      inline-size: 100%;
      white-space: nowrap;
    }

    .shortcut:hover,
    .footer-button:hover {
      color: #174ea6;
      background: var(--super-time-picker-cell-hover-background);
    }

    .shortcut:focus-visible,
    .footer-button:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .confirm-button {
      color: #ffffff;
      background: #4b87f5;
      border: 1.5px solid #174ea6;
      box-shadow: 1px 2px 0 -1px #174ea6;
    }

    .confirm-button:hover {
      color: #ffffff;
      background: #6a9df7;
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.46;
      box-shadow: none;
      filter: grayscale(0.28);
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      :host(:not([disabled])) .control:hover {
        border-color: var(--super-time-picker-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .cell:not([aria-pressed="true"]):hover {
        background: var(--super-time-picker-cell-hover-background);
      }
    }

    @keyframes super-time-picker-pop {
      from {
        opacity: 0;
        transform: translateY(-4px) rotate(-0.1deg) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(0.08deg) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .cell,
      .popup {
        transition: none;
        animation: none;
      }
    }
  `;

  private get triggerElement(): HTMLButtonElement | null {
    return this.renderRoot?.querySelector(".trigger") ?? null;
  }

  override focus(options?: FocusOptions): void {
    const trigger = this.triggerElement;
    if (trigger) {
      trigger.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const trigger = this.triggerElement;
    if (trigger) {
      trigger.blur();
      return;
    }
    super.blur();
  }

  private handleDocumentPointerDown = (event: PointerEvent): void => {
    if (!this.open || event.composedPath().includes(this)) {
      return;
    }
    this.setOpen(false, "outside", event);
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.ownerDocument.addEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
  }

  override disconnectedCallback(): void {
    this.ownerDocument.removeEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("range") || changedProperties.has("format")) {
      this.setInternalValue(this.value);
    }

    if (this.disabled && this.open) {
      this.open = false;
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("open") && this.open) {
      void this.updateComplete.then(() => {
        this.renderRoot
          .querySelectorAll<HTMLElement>('.cell[aria-pressed="true"]')
          .forEach((cell) => {
            if (typeof cell.scrollIntoView === "function") {
              cell.scrollIntoView({ block: "nearest" });
            }
          });
      });
    }
  }

  private emitChange(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperTimePickerChangeDetail>(
        "super-time-picker-change",
        {
          detail: {
            value: Array.isArray(this.value) ? [...this.value] : this.value,
            name: this.name,
            originalEvent,
          },
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  private emitClear(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperTimePickerClearDetail>("super-time-picker-clear", {
        detail: { name: this.name, originalEvent },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private setOpen(
    nextOpen: boolean,
    reason: SuperTimePickerOpenReason,
    originalEvent: Event,
  ): void {
    if ((nextOpen && this.disabled) || this.open === nextOpen) {
      return;
    }
    this.open = nextOpen;
    this.dispatchEvent(
      new CustomEvent<SuperTimePickerOpenChangeDetail>(
        "super-time-picker-open-change",
        {
          detail: { open: nextOpen, reason, originalEvent },
          bubbles: true,
          composed: true,
        },
      ),
    );
    if (!nextOpen && reason !== "outside") {
      void this.updateComplete.then(() => this.triggerElement?.focus());
    }
  }

  private clearValue(originalEvent: Event, closePanel: boolean): void {
    if (this.disabled || !this.hasValue()) {
      return;
    }
    this.setInternalValue(this.range ? [] : "");
    this.emitClear(originalEvent);
    this.emitChange(originalEvent);
    if (closePanel) {
      this.setOpen(false, "clear", originalEvent);
    }
  }

  private groupParts(index: number): TimeParts | null {
    if (!this.range) {
      return typeof this.value === "string" && this.value !== ""
        ? parseTime(this.value)
        : null;
    }
    const values = Array.isArray(this.value) ? this.value : [];
    const raw = values[index] ?? "";
    return raw === "" ? null : parseTime(raw);
  }

  private commitSingle(parts: TimeParts, originalEvent: Event): void {
    this.setInternalValue(formatTime(parts, this.hasSeconds()));
    this.emitChange(originalEvent);
  }

  private commitRange(
    index: number,
    parts: TimeParts,
    originalEvent: Event,
  ): void {
    const current = Array.isArray(this.value) ? [...this.value] : [];
    while (current.length < 2) {
      current.push("");
    }
    current[index] = formatTime(parts, this.hasSeconds());
    let next = current.slice(0, 2);
    if (next[0] !== "" && next[1] !== "" && next[0] > next[1]) {
      next = [next[1], next[0]];
    }
    this.setInternalValue(next);
    this.emitChange(originalEvent);
  }

  private pickUnit(
    groupIndex: number,
    unit: "hour" | "minute" | "second" | "period",
    unitValue: number | "am" | "pm",
    originalEvent: Event,
  ): void {
    const current = this.groupParts(groupIndex) ?? {
      hour: 0,
      minute: 0,
      second: 0,
    };
    const next: TimeParts = { ...current };
    if (unit === "hour" && typeof unitValue === "number") {
      if (this.isHour12()) {
        const isPm = current.hour >= 12;
        next.hour = isPm ? (unitValue % 12) + 12 : unitValue % 12;
      } else {
        next.hour = unitValue;
      }
    } else if (unit === "minute" && typeof unitValue === "number") {
      next.minute = unitValue;
    } else if (unit === "second" && typeof unitValue === "number") {
      next.second = unitValue;
    } else if (unit === "period") {
      if (unitValue === "am" && next.hour >= 12) {
        next.hour -= 12;
      }
      if (unitValue === "pm" && next.hour < 12) {
        next.hour += 12;
      }
    }

    if (this.range) {
      this.commitRange(groupIndex, next, originalEvent);
      return;
    }
    this.commitSingle(next, originalEvent);
  }

  private pickShortcut(
    shortcut: SuperTimePickerShortcut,
    originalEvent: Event,
  ): void {
    const raw = typeof shortcut.value === "function"
      ? shortcut.value()
      : shortcut.value;
    const normalized = this.normalizeValue(raw);
    const isEmpty = Array.isArray(normalized)
      ? normalized.length === 0
      : normalized === "";
    if (isEmpty) {
      return;
    }
    this.setInternalValue(normalized);
    this.emitChange(originalEvent);
    this.setOpen(false, "shortcut", originalEvent);
  }

  private handleTriggerClick = (event: MouseEvent): void => {
    this.setOpen(!this.open, "trigger", event);
  };

  private handleClearClick = (event: MouseEvent): void => {
    event.stopPropagation();
    this.clearValue(event, false);
  };

  private handleTriggerKeydown = (event: KeyboardEvent): void => {
    if (this.disabled) {
      return;
    }
    if (event.key === "Escape" && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(false, "escape", event);
      return;
    }
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      this.setOpen(true, "trigger", event);
    }
  };

  private handleColumnsKeydown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(false, "escape", event);
      this.triggerElement?.focus();
      return;
    }
    if (
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      return;
    }
    const cell = (event.target as HTMLElement).closest<HTMLElement>(".cell");
    const column = cell?.closest<HTMLElement>(".column");
    const group = column?.closest<HTMLElement>(".group");
    if (!cell || !column || !group) {
      return;
    }
    event.preventDefault();
    const cells = Array.from(column.querySelectorAll<HTMLElement>(".cell"));
    const cellIndex = cells.indexOf(cell);
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const delta = event.key === "ArrowUp" ? -1 : 1;
      const nextIndex = (cellIndex + delta + cells.length) % cells.length;
      cells[nextIndex]?.focus();
      return;
    }
    const columns = Array.from(group.querySelectorAll<HTMLElement>(".column"));
    const columnIndex = columns.indexOf(column);
    const delta = event.key === "ArrowLeft" ? -1 : 1;
    const nextColumn = columns[columnIndex + delta];
    if (!nextColumn) {
      return;
    }
    const nextCells = nextColumn.querySelectorAll<HTMLElement>(".cell");
    const target = nextCells[Math.min(cellIndex, nextCells.length - 1)];
    target?.focus();
  };

  private handlePopupKeydown = (event: KeyboardEvent): void => {
    if (event.key !== "Escape") {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.setOpen(false, "escape", event);
  };

  private displayValue(key: string): string {
    const parts = parseTime(key);
    if (parts === null) {
      return key;
    }
    const hour12 = parts.hour % 12 === 0 ? 12 : parts.hour % 12;
    const replacements: Record<string, string> = {
      HH: pad2(parts.hour),
      H: String(parts.hour),
      hh: pad2(hour12),
      h: String(hour12),
      mm: pad2(parts.minute),
      ss: pad2(parts.second),
      A: parts.hour < 12 ? "AM" : "PM",
      a: parts.hour < 12 ? "am" : "pm",
    };
    return this.format.replace(
      FORMAT_TOKEN_PATTERN,
      (token) => replacements[token] ?? token,
    );
  }

  private renderColumn(
    groupIndex: number,
    unit: "hour" | "minute" | "second" | "period",
    entries: Array<{ key: number | "am" | "pm"; label: string; selected: boolean; tabbable: boolean }>,
  ) {
    return html`
      <div
        class="column"
        part="column"
        role="group"
        data-unit=${unit}
        @keydown=${this.handleColumnsKeydown}
      >
        ${entries.map(
          (entry) => html`
            <button
              class="cell"
              part="cell"
              type="button"
              data-unit=${unit}
              data-value=${String(entry.key)}
              tabindex=${entry.tabbable ? "0" : "-1"}
              aria-pressed=${entry.selected ? "true" : "false"}
              @click=${(event: MouseEvent) =>
                this.pickUnit(groupIndex, unit, entry.key, event)}
            >${entry.label}</button>
          `,
        )}
      </div>
    `;
  }

  private renderGroup(groupIndex: number, title: string) {
    const parts = this.groupParts(groupIndex);
    const hour12 = this.isHour12();
    const withSeconds = this.hasSeconds();

    const hourEntries = ensureColumnTabstop(
      hour12
        ? Array.from({ length: 12 }, (_, index) => {
            const display = index + 1;
            const selected = parts !== null &&
              (parts.hour % 12 === 0 ? 12 : parts.hour % 12) === display;
            return {
              key: display,
              label: pad2(display),
              selected,
              tabbable: selected || (parts === null && display === 1),
            };
          })
        : rangeNumbers(24, this.hourStep).map((hour, index) => ({
            key: hour,
            label: pad2(hour),
            selected: parts !== null && parts.hour === hour,
            tabbable: (parts !== null && parts.hour === hour) ||
              (parts === null && index === 0),
          })),
    );

    const minuteEntries = ensureColumnTabstop(
      rangeNumbers(60, this.minuteStep).map((minute, index) => ({
        key: minute,
        label: pad2(minute),
        selected: parts !== null && parts.minute === minute,
        tabbable: (parts !== null && parts.minute === minute) ||
          (parts === null && index === 0),
      })),
    );

    const secondEntries = ensureColumnTabstop(
      rangeNumbers(60, this.secondStep).map((second, index) => ({
        key: second,
        label: pad2(second),
        selected: parts !== null && parts.second === second,
        tabbable: (parts !== null && parts.second === second) ||
          (parts === null && index === 0),
      })),
    );

    const isPm = parts !== null && parts.hour >= 12;
    const periodEntries = ensureColumnTabstop([
      {
        key: "am" as const,
        label: this.amLabel,
        selected: parts !== null && !isPm,
        tabbable: parts === null || !isPm,
      },
      {
        key: "pm" as const,
        label: this.pmLabel,
        selected: isPm,
        tabbable: isPm,
      },
    ]);

    return html`
      <div class="group" part="panel" data-group=${groupIndex}>
        ${title !== ""
          ? html`<div class="group-title" part="column-title">${title}</div>`
          : nothing}
        <div class="columns">
          ${this.renderColumn(groupIndex, "hour", hourEntries)}
          ${this.renderColumn(groupIndex, "minute", minuteEntries)}
          ${withSeconds
            ? this.renderColumn(groupIndex, "second", secondEntries)
            : nothing}
          ${hour12
            ? this.renderColumn(groupIndex, "period", periodEntries)
            : nothing}
        </div>
      </div>
    `;
  }

  private renderShortcuts() {
    if (this.shortcuts.length === 0) {
      return nothing;
    }
    return html`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(
          (shortcut) => html`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${(event: MouseEvent) =>
                this.pickShortcut(shortcut, event)}
            >${shortcut.label}</button>
          `,
        )}
      </div>
    `;
  }

  private renderFooter() {
    const showClear = this.clearable && this.hasValue();
    return html`
      <div class="footer" part="footer">
        ${showClear
          ? html`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${(event: MouseEvent) => this.clearValue(event, true)}
            >${this.clearLabel}</button>`
          : nothing}
        <button
          class="footer-button confirm-button"
          part="confirm-button"
          type="button"
          @click=${(event: MouseEvent) =>
            this.setOpen(false, "confirm", event)}
        >${this.confirmLabel}</button>
      </div>
    `;
  }

  private renderTriggerText() {
    if (this.range) {
      const values = Array.isArray(this.value) ? this.value : [];
      const start = values[0] ?? "";
      const end = values[1] ?? "";
      return html`
        <span class="trigger-text ${start === "" ? "placeholder" : ""}" part="label">
          ${start === "" ? this.startPlaceholder : this.displayValue(start)}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${end === "" ? "placeholder" : ""}">
          ${end === "" ? this.endPlaceholder : this.displayValue(end)}
        </span>
      `;
    }
    const text = typeof this.value === "string" ? this.value : "";
    return html`
      <span class="trigger-text ${text === "" ? "placeholder" : ""}" part="label">
        ${text === "" ? this.placeholder : this.displayValue(text)}
      </span>
    `;
  }

  protected render() {
    const hasValue = this.hasValue();
    const showClear = this.clearable && hasValue && !this.disabled;

    return html`
      <div class="control" part="control">
        <span class="prefix" part="prefix"><slot name="prefix"></slot></span>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="popup"
          aria-label=${ifDefined(this.accessibleLabel || undefined)}
          ?disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeydown}
        >
          ${this.renderTriggerText()}
        </button>
        ${showClear
          ? html`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`
          : nothing}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">◷</slot>
        </span>
      </div>
      ${this.helperText !== ""
        ? html`<div class="helper" part="helper">${this.helperText}</div>`
        : nothing}
      ${this.open
        ? html`
            <div
              class="popup"
              part="popup"
              id="popup"
              role="dialog"
              aria-modal="false"
              aria-label=${this.accessibleLabel || this.placeholder}
              @keydown=${this.handlePopupKeydown}
            >
              <div class="popup-body">
                ${this.renderShortcuts()}
                <div class="groups">
                  ${this.range
                    ? html`
                        ${this.renderGroup(0, this.startLabel)}
                        ${this.renderGroup(1, this.endLabel)}
                      `
                    : this.renderGroup(0, "")}
                </div>
              </div>
              ${this.renderFooter()}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-time-picker": SuperTimePicker;
  }
  interface HTMLElementEventMap {
    "super-time-picker-change": CustomEvent<SuperTimePickerChangeDetail>;
    "super-time-picker-clear": CustomEvent<SuperTimePickerClearDetail>;
    "super-time-picker-open-change": CustomEvent<SuperTimePickerOpenChangeDetail>;
  }
}
