import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
  type TemplateResult,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  createControlledValueGuard,
  runAttributeWrite,
} from "@yxzq-element/utils";

export const SUPER_DATE_PICKER_MODES = [
  "date",
  "range",
  "month",
  "year",
] as const;
export const SUPER_DATE_PICKER_SIZES = ["large", "medium", "small"] as const;
export const SUPER_DATE_PICKER_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperDatePickerMode = (typeof SUPER_DATE_PICKER_MODES)[number];
export type SuperDatePickerSize = (typeof SUPER_DATE_PICKER_SIZES)[number];
export type SuperDatePickerValidation =
  (typeof SUPER_DATE_PICKER_VALIDATIONS)[number];
export type SuperDatePickerValue = string | string[];
export type SuperDatePickerOpenReason =
  | "trigger"
  | "select"
  | "outside"
  | "escape"
  | "shortcut"
  | "today"
  | "clear";

export interface SuperDatePickerShortcut {
  label: string;
  value: SuperDatePickerValue | (() => SuperDatePickerValue);
}

export interface SuperDatePickerChangeDetail {
  value: SuperDatePickerValue;
  name: string;
  mode: SuperDatePickerMode;
  originalEvent: Event;
}

export interface SuperDatePickerClearDetail {
  name: string;
  originalEvent: Event;
}

export interface SuperDatePickerOpenChangeDetail {
  open: boolean;
  reason: SuperDatePickerOpenReason;
  originalEvent: Event;
}

interface DayCell {
  year: number;
  month: number;
  day: number;
  key: string;
  adjacent: boolean;
  disabled: boolean;
  today: boolean;
}

const DAY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const MONTH_PATTERN = /^(\d{4})-(\d{2})$/;
const YEAR_PATTERN = /^\d{4}$/;
const MIN_YEAR = 1;
const MAX_YEAR = 9999;
const LAST_DECADE_START = MAX_YEAR - 11;
const DEFAULT_LOCALE = "zh-CN";

const cloneDatePickerValue = (
  value: SuperDatePickerValue,
): SuperDatePickerValue => (Array.isArray(value) ? [...value] : value);

const datePickerValuesEqual = (
  left: SuperDatePickerValue,
  right: SuperDatePickerValue,
): boolean =>
  Array.isArray(left) && Array.isArray(right)
    ? left.length === right.length &&
      left.every((item, index) => item === right[index])
    : Object.is(left, right);

const pad2 = (value: number): string => String(value).padStart(2, "0");
const formatYearKey = (value: number): string =>
  String(value).padStart(4, "0");
const clampYear = (value: number): number =>
  Math.min(MAX_YEAR, Math.max(MIN_YEAR, value));

const createCalendarDate = (
  year: number,
  month: number,
  day: number,
): Date => {
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1, day);
  return date;
};

const formatDay = (year: number, month: number, day: number): string =>
  `${formatYearKey(year)}-${pad2(month)}-${pad2(day)}`;

const formatMonthKey = (year: number, month: number): string =>
  `${formatYearKey(year)}-${pad2(month)}`;

const parseDay = (
  value: string,
): { year: number; month: number; day: number } | null => {
  const match = DAY_PATTERN.exec(value);
  if (!match) {
    return null;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (
    year < MIN_YEAR ||
    year > MAX_YEAR ||
    month < 1 ||
    month > 12 ||
    day < 1
  ) {
    return null;
  }
  const date = createCalendarDate(year, month, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return { year, month, day };
};

const isValidDay = (value: string): boolean => parseDay(value) !== null;

const isValidYearKey = (value: string): boolean =>
  YEAR_PATTERN.test(value) && Number(value) >= MIN_YEAR;

const isValidMonthKey = (value: string): boolean => {
  const match = MONTH_PATTERN.exec(value);
  if (!match) {
    return false;
  }
  if (!isValidYearKey(match[1])) {
    return false;
  }
  const month = Number(match[2]);
  return month >= 1 && month <= 12;
};

const daysInMonth = (year: number, month: number): number =>
  createCalendarDate(year, month + 1, 0).getDate();

const weekdayOf = (year: number, month: number, day: number): number =>
  createCalendarDate(year, month, day).getDay();

const addDays = (key: string, delta: number): string => {
  const parsed = parseDay(key);
  if (!parsed) {
    return key;
  }
  const date = createCalendarDate(parsed.year, parsed.month, parsed.day);
  date.setDate(date.getDate() + delta);
  if (date.getFullYear() < MIN_YEAR) {
    return formatDay(MIN_YEAR, 1, 1);
  }
  if (date.getFullYear() > MAX_YEAR) {
    return formatDay(MAX_YEAR, 12, 31);
  }
  return formatDay(date.getFullYear(), date.getMonth() + 1, date.getDate());
};

const addMonths = (
  year: number,
  month: number,
  delta: number,
): { year: number; month: number } => {
  const total = year * 12 + (month - 1) + delta;
  const nextYear = Math.floor(total / 12);
  if (nextYear < MIN_YEAR) {
    return { year: MIN_YEAR, month: 1 };
  }
  if (nextYear > MAX_YEAR) {
    return { year: MAX_YEAR, month: 12 };
  }
  const monthIndex = ((total % 12) + 12) % 12;
  return { year: nextYear, month: monthIndex + 1 };
};

const todayKey = (): string => {
  const now = new Date();
  return formatDay(now.getFullYear(), now.getMonth() + 1, now.getDate());
};

export class SuperDatePicker extends LitElement {
  static properties = {
    mode: { type: String, reflect: true },
    value: { attribute: "value", noAccessor: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    clearable: { type: Boolean, reflect: true },
    open: { type: Boolean, reflect: true, noAccessor: true },
    name: { type: String, reflect: true },
    placeholder: { type: String },
    startPlaceholder: { type: String, attribute: "start-placeholder" },
    endPlaceholder: { type: String, attribute: "end-placeholder" },
    min: { type: String },
    max: { type: String },
    firstDayOfWeek: { type: Number, attribute: "first-day-of-week" },
    locale: { type: String, reflect: true },
    helperText: { type: String, attribute: "helper-text" },
    accessibleLabel: { type: String, attribute: "aria-label" },
    todayLabel: { type: String, attribute: "today-label" },
    clearLabel: { type: String, attribute: "clear-label" },
    prevMonthLabel: { type: String, attribute: "prev-month-label" },
    nextMonthLabel: { type: String, attribute: "next-month-label" },
    prevYearLabel: { type: String, attribute: "prev-year-label" },
    nextYearLabel: { type: String, attribute: "next-year-label" },
    disabledDate: { attribute: false },
    shortcuts: { attribute: false },
    viewYear: { state: true },
    viewMonth: { state: true },
    activeDate: { state: true },
    pendingStart: { state: true },
    hoverDate: { state: true },
  };

  declare mode: SuperDatePickerMode;
  declare size: SuperDatePickerSize;
  declare validation: SuperDatePickerValidation;
  declare disabled: boolean;
  declare clearable: boolean;
  declare name: string;
  declare placeholder: string;
  declare startPlaceholder: string;
  declare endPlaceholder: string;
  declare min: string;
  declare max: string;
  declare firstDayOfWeek: number;
  declare locale: string;
  declare helperText: string;
  declare accessibleLabel: string;
  declare todayLabel: string;
  declare clearLabel: string;
  declare prevMonthLabel: string;
  declare nextMonthLabel: string;
  declare prevYearLabel: string;
  declare nextYearLabel: string;
  declare disabledDate: ((date: Date) => boolean) | undefined;
  declare shortcuts: SuperDatePickerShortcut[];
  private declare viewYear: number;
  private declare viewMonth: number;
  private declare activeDate: string;
  private declare pendingStart: string | null;
  private declare hoverDate: string | null;

  private _value: SuperDatePickerValue = "";
  private _open = false;
  private readonly controlledValueGuard =
    createControlledValueGuard<SuperDatePickerValue>({
      host: this,
      getValue: () => this._value,
      setValue: (value) => this.setInternalValue(value),
      clone: cloneDatePickerValue,
      equals: datePickerValuesEqual,
    });
  private readonly controlledOpenGuard = createControlledValueGuard<boolean>({
    host: this,
    getValue: () => this._open,
    setValue: (value) => this.setInternalOpen(value),
  });

  constructor() {
    super();
    this.mode = "date";
    this.size = "medium";
    this.validation = "none";
    this.disabled = false;
    this.clearable = false;
    this.name = "";
    this.placeholder = "选择日期";
    this.startPlaceholder = "开始日期";
    this.endPlaceholder = "结束日期";
    this.min = "";
    this.max = "";
    this.firstDayOfWeek = 1;
    this.locale = DEFAULT_LOCALE;
    this.helperText = "";
    this.accessibleLabel = "";
    this.todayLabel = "今天";
    this.clearLabel = "清空";
    this.prevMonthLabel = "上个月";
    this.nextMonthLabel = "下个月";
    this.prevYearLabel = "上一年";
    this.nextYearLabel = "下一年";
    this.disabledDate = undefined;
    this.shortcuts = [];
    const now = new Date();
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth() + 1;
    this.activeDate = "";
    this.pendingStart = null;
    this.hoverDate = null;
  }

  get value(): SuperDatePickerValue {
    return this._value;
  }

  set value(value: SuperDatePickerValue) {
    this.controlledValueGuard.markExternal(value);
    this.setInternalValue(value);
  }

  private setInternalValue(value: SuperDatePickerValue): void {
    const normalized = this.normalizeValue(value);
    const oldValue = this._value;
    this._value = normalized;
    this.requestUpdate("value", oldValue);
  }

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this.controlledOpenGuard.markExternal(value);
    this.setInternalOpen(value);
  }

  private setInternalOpen(value: boolean): void {
    const oldValue = this._open;
    this._open = value;
    this.requestUpdate("open", oldValue);
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

  private normalizeValue(value: SuperDatePickerValue): SuperDatePickerValue {
    if (this.mode === "range") {
      if (!Array.isArray(value)) {
        return [];
      }
      return value
        .filter((item): item is string => typeof item === "string")
        .filter(isValidDay)
        .slice(0, 2)
        .sort();
    }
    if (Array.isArray(value)) {
      return "";
    }
    if (this.mode === "month") {
      return isValidMonthKey(value) ? value : "";
    }
    if (this.mode === "year") {
      return isValidYearKey(value) ? value : "";
    }
    return isValidDay(value) ? value : "";
  }

  static styles = css`
    :host {
      --super-date-picker-width: 250px;
      --super-date-picker-height: 38px;
      --super-date-picker-padding-inline: 12px;
      --super-date-picker-gap: 8px;
      --super-date-picker-font-size: 15px;
      --super-date-picker-background: #fffef9;
      --super-date-picker-color: #292524;
      --super-date-picker-placeholder-color: #64748b;
      --super-date-picker-border-color: #34445f;
      --super-date-picker-hover-color: #3f9b68;
      --super-date-picker-focus-color: #356df3;
      --super-date-picker-shadow-color: #a8b3bf;
      --super-date-picker-validation-color: var(--super-date-picker-border-color);
      --super-date-picker-panel-background: #fffef9;
      --super-date-picker-cell-hover-background: #eef5ff;
      --super-date-picker-cell-selected-background: #dfeaff;
      --super-date-picker-cell-selected-color: #174ea6;
      --super-date-picker-cell-range-background: #edf4ff;
      --super-date-picker-range-panel-width: 640px;
      --super-date-picker-z-index: 30;
      --super-date-picker-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-date-picker-width);
      max-inline-size: 100%;
      color: var(--super-date-picker-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-date-picker-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-date-picker-z-index);
    }

    :host([size="large"]) {
      --super-date-picker-height: 46px;
      --super-date-picker-padding-inline: 14px;
      --super-date-picker-font-size: 17px;
    }

    :host([size="small"]) {
      --super-date-picker-height: 31px;
      --super-date-picker-padding-inline: 9px;
      --super-date-picker-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-date-picker-validation-color: #23804a;
      --super-date-picker-border-color: #23804a;
      --super-date-picker-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-date-picker-validation-color: #a05f00;
      --super-date-picker-border-color: #a05f00;
      --super-date-picker-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-date-picker-validation-color: #cf3038;
      --super-date-picker-border-color: #cf3038;
      --super-date-picker-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-date-picker-validation-color: #64748b;
      --super-date-picker-border-color: #64748b;
      --super-date-picker-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-date-picker-height);
      padding-inline: var(--super-date-picker-padding-inline);
      color: var(--super-date-picker-color);
      background: var(--super-date-picker-background);
      border: 1.8px solid var(--super-date-picker-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-date-picker-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-date-picker-rotation));
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
      border-color: var(--super-date-picker-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-date-picker-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-date-picker-gap);
      color: #526277;
      line-height: 1;
    }

    .trigger {
      display: inline-flex;
      flex: 1 1 auto;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-date-picker-height) - 10px);
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
      color: var(--super-date-picker-placeholder-color);
    }

    .range-separator {
      flex: none;
      padding-inline: 4px;
      color: var(--super-date-picker-placeholder-color);
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
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      pointer-events: none;
    }

    .calendar-icon {
      position: relative;
      box-sizing: border-box;
      inline-size: 13px;
      block-size: 12px;
      border: 1.6px solid currentColor;
      border-radius: 3px 4px 2px 4px / 3px 2px 4px 3px;
      transform: rotate(-2deg);
    }

    .calendar-icon::before {
      position: absolute;
      top: 2.5px;
      right: 0;
      left: 0;
      content: "";
      border-top: 1.4px solid currentColor;
    }

    .calendar-icon::after {
      position: absolute;
      top: -3.5px;
      left: 2px;
      inline-size: 6px;
      block-size: 3px;
      content: "";
      border-right: 1.4px solid currentColor;
      border-left: 1.4px solid currentColor;
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-date-picker-validation-color);
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
      color: var(--super-date-picker-color);
      background: var(--super-date-picker-panel-background);
      border: 1.8px solid var(--super-date-picker-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-date-picker-shadow-color);
      transform: rotate(0.08deg);
      animation: super-date-picker-pop 130ms ease-out;
    }

    .popup-body {
      display: flex;
      align-items: stretch;
      gap: 8px;
    }

    .popup[data-layout="range"] {
      left: 50%;
      inline-size: min(
        var(--super-date-picker-range-panel-width),
        calc(100vw - 24px)
      );
      max-inline-size: none;
      translate: -50% 0;
    }

    .shortcuts {
      display: flex;
      flex: none;
      flex-direction: column;
      gap: 2px;
      padding-inline-end: 8px;
      border-inline-end: 1px dashed #cbd5e1;
    }

    .panels-wrap {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .panels {
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
    }

    .panel {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-block-end: 6px;
    }

    .nav-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: #34445f;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
    }

    .nav-button:hover {
      color: #174ea6;
      background: var(--super-date-picker-cell-hover-background);
    }

    .nav-button:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .title {
      flex: 1 1 auto;
      color: var(--super-date-picker-color);
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .weekdays,
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }

    .weekdays {
      margin-block-end: 2px;
    }

    .weekday {
      padding-block: 2px;
      color: #526277;
      font-size: 0.78em;
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .month-grid,
    .year-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      padding-block: 4px;
    }

    .cell {
      position: relative;
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: 30px;
      margin: 0;
      padding: 2px;
      color: var(--super-date-picker-color);
      font: inherit;
      font-size: 0.88em;
      line-height: 1.2;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .month-grid .cell,
    .year-grid .cell {
      min-block-size: 34px;
    }

    .cell:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .cell[data-adjacent] {
      color: #a8b3bf;
    }

    .cell[data-today]::after {
      position: absolute;
      inset: 3px;
      content: "";
      border: 1.3px dashed #3978e9;
      border-radius: 6px 9px 5px 8px / 7px 5px 8px 6px;
      opacity: 0.75;
      pointer-events: none;
      transform: rotate(-1.2deg);
    }

    .cell[data-in-range] {
      background: var(--super-date-picker-cell-range-background);
      border-radius: 2px;
    }

    .cell[aria-pressed="true"] {
      color: var(--super-date-picker-cell-selected-color);
      font-weight: 700;
      background: var(--super-date-picker-cell-selected-background);
    }

    .cell:disabled {
      color: #b6bfca;
      cursor: not-allowed;
      opacity: 0.62;
      text-decoration: line-through;
      text-decoration-color: rgb(100 116 139 / 45%);
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

    .footer:empty {
      display: none;
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
      background: var(--super-date-picker-cell-hover-background);
    }

    .shortcut:focus-visible,
    .footer-button:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
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
        border-color: var(--super-date-picker-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .cell:not(:disabled):not([aria-pressed="true"]):hover {
        background: var(--super-date-picker-cell-hover-background);
      }
    }

    @media (max-width: 700px) {
      .popup[data-layout="range"] {
        inline-size: min(100%, calc(100vw - 24px));
      }

      .popup[data-layout="range"] .title + .title,
      .popup[data-layout="range"] .panel + .panel {
        display: none;
      }
    }

    @keyframes super-date-picker-pop {
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
    this.controlledValueGuard.dispose();
    this.controlledOpenGuard.dispose();
    this.ownerDocument.removeEventListener(
      "pointerdown",
      this.handleDocumentPointerDown,
      true,
    );
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("mode")) {
      this.setInternalValue(this.value);
      this.pendingStart = null;
      this.hoverDate = null;
      this.syncView();
    }

    if (this.disabled && this.open) {
      this.setInternalOpen(false);
    }
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("open") && this.open) {
      void this.updateComplete.then(() => this.focusActiveCell());
    }
  }

  private syncView(): void {
    const anchor = this.viewAnchor();
    this.viewYear = anchor.year;
    this.viewMonth = anchor.month;
    if (this.mode === "year") {
      this.activeDate = formatYearKey(anchor.year);
    } else if (this.mode === "month") {
      this.activeDate = formatMonthKey(anchor.year, anchor.month);
    } else {
      this.activeDate = formatDay(anchor.year, anchor.month, anchor.day);
    }
  }

  private viewAnchor(): { year: number; month: number; day: number } {
    const value = this.value;
    const startKey = Array.isArray(value) ? value[0] : value;
    let anchorKey = "";
    if (typeof startKey === "string" && startKey !== "") {
      if (this.mode === "year") {
        anchorKey = `${startKey}-01-01`;
      } else if (this.mode === "month") {
        anchorKey = `${startKey}-01`;
      } else {
        anchorKey = startKey;
      }
    }
    const parsed = anchorKey === "" ? null : parseDay(anchorKey);
    if (parsed) {
      return parsed;
    }
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
    };
  }

  private dateFormatter(options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
    try {
      return new Intl.DateTimeFormat(this.locale || DEFAULT_LOCALE, options);
    } catch {
      return new Intl.DateTimeFormat(DEFAULT_LOCALE, options);
    }
  }

  private formatMonthTitle(year: number, month: number): string {
    return this.dateFormatter({ year: "numeric", month: "long" }).format(
      createCalendarDate(year, month, 1),
    );
  }

  private formatYearTitle(year: number): string {
    return this.dateFormatter({ year: "numeric" }).format(
      createCalendarDate(year, 1, 1),
    );
  }

  private formatMonthCell(year: number, month: number): string {
    return this.dateFormatter({ month: "short" }).format(
      createCalendarDate(year, month, 1),
    );
  }

  private minKey(): string {
    if (this.mode === "year") {
      return this.min.slice(0, 4);
    }
    if (this.mode === "month") {
      return this.min.slice(0, 7);
    }
    return this.min.slice(0, 10);
  }

  private maxKey(): string {
    if (this.mode === "year") {
      return this.max.slice(0, 4);
    }
    if (this.mode === "month") {
      return this.max.slice(0, 7);
    }
    return this.max.slice(0, 10);
  }

  private isKeyDisabled(key: string): boolean {
    const min = this.minKey();
    const max = this.maxKey();
    if (min !== "" && key < min) {
      return true;
    }
    if (max !== "" && key > max) {
      return true;
    }
    if (
      (this.mode === "date" || this.mode === "range") &&
      this.disabledDate !== undefined
    ) {
      const parsed = parseDay(key);
      if (parsed) {
        return this.disabledDate(
          createCalendarDate(parsed.year, parsed.month, parsed.day),
        );
      }
    }
    return false;
  }

  private focusActiveCell(): void {
    const active = this.renderRoot.querySelector<HTMLElement>(
      ".cell[data-active]",
    );
    active?.focus();
  }

  private emitChange(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperDatePickerChangeDetail>(
        "super-date-picker-change",
        {
          detail: {
            value: Array.isArray(this.value) ? [...this.value] : this.value,
            name: this.name,
            mode: this.mode,
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
      new CustomEvent<SuperDatePickerClearDetail>("super-date-picker-clear", {
        detail: { name: this.name, originalEvent },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private setOpen(
    nextOpen: boolean,
    reason: SuperDatePickerOpenReason,
    originalEvent: Event,
  ): void {
    if ((nextOpen && this.disabled) || this.open === nextOpen) {
      return;
    }
    if (nextOpen) {
      this.syncView();
      this.pendingStart = null;
      this.hoverDate = null;
    }
    const controlledMutation = this.controlledOpenGuard.capture();
    this.setInternalOpen(nextOpen);
    this.dispatchEvent(
      new CustomEvent<SuperDatePickerOpenChangeDetail>(
        "super-date-picker-open-change",
        {
          detail: { open: nextOpen, reason, originalEvent },
          bubbles: true,
          composed: true,
        },
      ),
    );
    this.controlledOpenGuard.confirm(controlledMutation);
    if (!nextOpen && reason !== "outside") {
      void this.updateComplete.then(() => this.triggerElement?.focus());
    }
  }

  private clearValue(originalEvent: Event, closePanel: boolean): void {
    if (this.disabled) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(this.mode === "range" ? [] : "");
    this.pendingStart = null;
    this.hoverDate = null;
    this.emitClear(originalEvent);
    this.emitChange(originalEvent);
    if (closePanel) {
      this.setOpen(false, "clear", originalEvent);
    }
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private pickDay(key: string, originalEvent: Event): void {
    if (this.isKeyDisabled(key)) {
      return;
    }
    if (this.mode === "range") {
      if (this.pendingStart === null) {
        this.pendingStart = key;
        this.hoverDate = null;
        this.activeDate = key;
        return;
      }
      const ordered = [this.pendingStart, key].sort();
      this.pendingStart = null;
      this.hoverDate = null;
      const controlledMutation = this.controlledValueGuard.capture();
      this.setInternalValue(ordered);
      this.emitChange(originalEvent);
      this.setOpen(false, "select", originalEvent);
      this.controlledValueGuard.confirm(controlledMutation);
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(key);
    this.emitChange(originalEvent);
    this.setOpen(false, "select", originalEvent);
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private pickMonth(key: string, originalEvent: Event): void {
    if (this.isKeyDisabled(key)) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(key);
    this.emitChange(originalEvent);
    this.setOpen(false, "select", originalEvent);
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private pickYear(key: string, originalEvent: Event): void {
    if (this.isKeyDisabled(key)) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(key);
    this.emitChange(originalEvent);
    this.setOpen(false, "select", originalEvent);
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private pickToday(originalEvent: Event): void {
    const key = todayKey();
    if (this.isKeyDisabled(key)) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(key);
    this.emitChange(originalEvent);
    this.setOpen(false, "today", originalEvent);
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private pickShortcut(
    shortcut: SuperDatePickerShortcut,
    originalEvent: Event,
  ): void {
    const raw = typeof shortcut.value === "function"
      ? shortcut.value()
      : shortcut.value;
    const normalized = this.normalizeValue(raw);
    const isEmpty = Array.isArray(normalized)
      ? normalized.length === 0
      : normalized === "";
    const normalizedValues = Array.isArray(normalized)
      ? normalized
      : [normalized];
    if (isEmpty || normalizedValues.some((key) => this.isKeyDisabled(key))) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalValue(normalized);
    this.emitChange(originalEvent);
    this.setOpen(false, "shortcut", originalEvent);
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private shiftView(monthDelta: number, yearDelta: number): void {
    if (this.mode === "year") {
      const delta = yearDelta !== 0 ? yearDelta * 12 : monthDelta * 12;
      this.viewYear = Math.min(
        LAST_DECADE_START,
        Math.max(MIN_YEAR, this.decadeStart() + delta),
      );
      return;
    }
    if (this.mode === "month") {
      this.viewYear = clampYear(
        this.viewYear + (yearDelta !== 0 ? yearDelta : monthDelta),
      );
      return;
    }
    if (yearDelta !== 0) {
      this.viewYear = clampYear(this.viewYear + yearDelta);
      return;
    }
    const next = addMonths(this.viewYear, this.viewMonth, monthDelta);
    this.viewYear = next.year;
    this.viewMonth = next.month;
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

  private handleGridKeydown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      this.setOpen(false, "escape", event);
      this.triggerElement?.focus();
      return;
    }
    const steps: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: this.mode === "date" || this.mode === "range" ? -7 : -4,
      ArrowDown: this.mode === "date" || this.mode === "range" ? 7 : 4,
    };
    const step = steps[event.key];
    if (step === undefined) {
      return;
    }
    event.preventDefault();
    this.moveActive(step);
  };

  private handlePopupKeydown = (event: KeyboardEvent): void => {
    if (event.key !== "Escape") {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.setOpen(false, "escape", event);
  };

  private moveActive(step: number): void {
    if (this.mode === "year") {
      const current = Number(this.activeDate) || this.viewAnchor().year;
      let next = clampYear(current + step);
      let guard = 0;
      while (this.isKeyDisabled(formatYearKey(next)) && guard < 200) {
        const candidate = clampYear(next + (step > 0 ? 1 : -1));
        if (candidate === next) {
          break;
        }
        next = candidate;
        guard += 1;
      }
      this.activeDate = formatYearKey(next);
      this.ensureYearVisible(next);
    } else if (this.mode === "month") {
      const anchorYear = Number(this.activeDate.slice(0, 4)) ||
        this.viewAnchor().year;
      const anchorMonth = Number(this.activeDate.slice(5, 7)) ||
        this.viewAnchor().month;
      let next = addMonths(anchorYear, anchorMonth, step);
      let guard = 0;
      while (this.isKeyDisabled(formatMonthKey(next.year, next.month)) && guard < 200) {
        next = addMonths(next.year, next.month, step > 0 ? 1 : -1);
        guard += 1;
      }
      this.activeDate = formatMonthKey(next.year, next.month);
      this.viewYear = next.year;
    } else {
      let next = addDays(this.activeDate || todayKey(), step);
      let guard = 0;
      while (this.isKeyDisabled(next) && guard < 500) {
        next = addDays(next, step > 0 ? 1 : -1);
        guard += 1;
      }
      this.activeDate = next;
      const parsed = parseDay(next);
      if (parsed) {
        this.viewYear = parsed.year;
        this.viewMonth = parsed.month;
      }
    }
    void this.updateComplete.then(() => this.focusActiveCell());
  }

  private ensureYearVisible(year: number): void {
    const start = this.decadeStart();
    if (year < start || year > start + 11) {
      this.viewYear = year;
    }
  }

  private decadeStart(): number {
    const year = clampYear(this.viewYear);
    const start = year - (year % 12);
    return Math.min(Math.max(MIN_YEAR, start), LAST_DECADE_START);
  }

  private handleCellClick = (event: MouseEvent): void => {
    const cell = (event.target as HTMLElement).closest<HTMLElement>(".cell");
    const key = cell?.dataset["key"];
    if (!key) {
      return;
    }
    if (this.mode === "month") {
      this.pickMonth(key, event);
      return;
    }
    if (this.mode === "year") {
      this.pickYear(key, event);
      return;
    }
    this.activeDate = key;
    this.pickDay(key, event);
  };

  private handleCellMouseEnter = (event: MouseEvent): void => {
    if (this.mode !== "range" || this.pendingStart === null) {
      return;
    }
    const cell = (event.target as HTMLElement).closest<HTMLElement>(".cell");
    const key = cell?.dataset["key"];
    if (key && !this.isKeyDisabled(key)) {
      this.hoverDate = key;
    }
  };

  private rangePreview(): { start: string; end: string } | null {
    if (this.mode !== "range") {
      return null;
    }
    if (this.pendingStart !== null) {
      const hover = this.hoverDate ?? this.pendingStart;
      const ordered = [this.pendingStart, hover].sort();
      return { start: ordered[0], end: ordered[1] };
    }
    const value = this.value;
    if (Array.isArray(value) && value.length === 2) {
      return { start: value[0], end: value[1] };
    }
    return null;
  }

  private buildDayCells(year: number, month: number): DayCell[] {
    const lead = (weekdayOf(year, month, 1) - this.firstDayOfWeek + 70) % 7;
    const total = daysInMonth(year, month);
    const today = todayKey();
    const cells: DayCell[] = [];
    const push = (cellYear: number, cellMonth: number, day: number, adjacent: boolean): void => {
      const key = formatDay(cellYear, cellMonth, day);
      cells.push({
        year: cellYear,
        month: cellMonth,
        day,
        key,
        adjacent,
        disabled: this.isKeyDisabled(key),
        today: key === today,
      });
    };
    const prev = addMonths(year, month, -1);
    const prevTotal = daysInMonth(prev.year, prev.month);
    for (let index = lead - 1; index >= 0; index -= 1) {
      push(prev.year, prev.month, prevTotal - index, true);
    }
    for (let day = 1; day <= total; day += 1) {
      push(year, month, day, false);
    }
    const next = addMonths(year, month, 1);
    let nextDay = 1;
    while (cells.length % 7 !== 0) {
      push(next.year, next.month, nextDay, true);
      nextDay += 1;
    }
    return cells;
  }

  private weekdayLabels(): string[] {
    const start = ((this.firstDayOfWeek % 7) + 7) % 7;
    const formatter = this.dateFormatter({ weekday: "narrow" });
    return Array.from(
      { length: 7 },
      (_, index) => {
        const weekday = (start + index) % 7;
        return formatter.format(createCalendarDate(2024, 1, 7 + weekday));
      },
    );
  }

  private renderNav(rangeLayout: boolean) {
    const isDayMode = this.mode === "date" || this.mode === "range";
    const right = rangeLayout
      ? addMonths(this.viewYear, this.viewMonth, 1)
      : { year: this.viewYear, month: this.viewMonth };
    const title = isDayMode
      ? this.formatMonthTitle(this.viewYear, this.viewMonth)
      : this.mode === "month"
        ? this.formatYearTitle(this.viewYear)
        : `${this.decadeStart()} – ${this.decadeStart() + 11}`;
    const rightTitle = this.formatMonthTitle(right.year, right.month);

    return html`
      <div class="nav" part="nav">
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.prevYearLabel}
          @click=${() => this.shiftView(0, -1)}
        >«</button>
        ${isDayMode
          ? html`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.prevMonthLabel}
              @click=${() => this.shiftView(-1, 0)}
            >‹</button>`
          : nothing}
        <span class="title" part="title">${title}</span>
        ${rangeLayout ? html`<span class="title" part="title">${rightTitle}</span>` : nothing}
        ${isDayMode
          ? html`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.nextMonthLabel}
              @click=${() => this.shiftView(1, 0)}
            >›</button>`
          : nothing}
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.nextYearLabel}
          @click=${() => this.shiftView(0, 1)}
        >»</button>
      </div>
    `;
  }

  private renderDayPanel(year: number, month: number) {
    const cells = this.buildDayCells(year, month);
    const preview = this.rangePreview();
    const value = this.value;
    const selectedKey = !Array.isArray(value) && this.mode === "date"
      ? value
      : "";

    return html`
      <div class="panel" part="panel">
        <div class="weekdays" part="weekdays" aria-hidden="true">
          ${this.weekdayLabels().map(
            (label) => html`<span class="weekday">${label}</span>`,
          )}
        </div>
        <div
          class="grid"
          part="grid"
          role="group"
          aria-label=${this.formatMonthTitle(year, month)}
          @keydown=${this.handleGridKeydown}
        >
          ${cells.map((cell) => {
            const inRange = preview !== null &&
              !cell.disabled &&
              cell.key >= preview.start &&
              cell.key <= preview.end &&
              preview.start !== preview.end;
            const isEdge = preview !== null &&
              (cell.key === preview.start || cell.key === preview.end) &&
              (this.pendingStart !== null || preview.start !== preview.end);
            const pressed = this.mode === "range"
              ? isEdge
              : cell.key === selectedKey;
            return html`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${cell.key}
                tabindex=${cell.key === this.activeDate ? "0" : "-1"}
                ?data-active=${cell.key === this.activeDate}
                ?data-adjacent=${cell.adjacent}
                ?data-today=${cell.today}
                ?data-in-range=${inRange}
                aria-pressed=${pressed ? "true" : "false"}
                ?disabled=${cell.disabled}
                @click=${this.handleCellClick}
                @mouseenter=${this.handleCellMouseEnter}
              >${cell.day}</button>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderMonthPanel() {
    const value = this.value;
    const selectedKey = typeof value === "string" ? value : "";
    return html`
      <div class="panel" part="panel">
        <div
          class="month-grid"
          part="grid"
          role="group"
          aria-label=${this.formatYearTitle(this.viewYear)}
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({ length: 12 }, (_, index) => {
            const month = index + 1;
            const key = formatMonthKey(this.viewYear, month);
            return html`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${key}
                tabindex=${key === this.activeDate ? "0" : "-1"}
                ?data-active=${key === this.activeDate}
                aria-pressed=${key === selectedKey ? "true" : "false"}
                ?disabled=${this.isKeyDisabled(key)}
                @click=${this.handleCellClick}
              >${this.formatMonthCell(this.viewYear, month)}</button>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderYearPanel() {
    const value = this.value;
    const selectedKey = typeof value === "string" ? value : "";
    const start = this.decadeStart();
    return html`
      <div class="panel" part="panel">
        <div
          class="year-grid"
          part="grid"
          role="group"
          aria-label="${start} – ${start + 11}"
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({ length: 12 }, (_, index) => {
            const year = start + index;
            const key = formatYearKey(year);
            return html`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${key}
                tabindex=${key === this.activeDate ? "0" : "-1"}
                ?data-active=${key === this.activeDate}
                aria-pressed=${key === selectedKey ? "true" : "false"}
                ?disabled=${this.isKeyDisabled(key)}
                @click=${this.handleCellClick}
              >${year}</button>
            `;
          })}
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
    const showToday = this.mode === "date";
    const showClear = this.clearable;
    if (!showToday && !showClear) {
      return nothing;
    }
    return html`
      <div class="footer" part="footer">
        ${showToday
          ? html`<button
              class="footer-button today-button"
              part="today-button"
              type="button"
              @click=${(event: MouseEvent) => this.pickToday(event)}
            >${this.todayLabel}</button>`
          : nothing}
        ${showClear
          ? html`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${(event: MouseEvent) => this.clearValue(event, true)}
            >${this.clearLabel}</button>`
          : nothing}
      </div>
    `;
  }

  private renderPanelsWithNav(): TemplateResult {
    const rangeLayout = this.mode === "range";
    const right = addMonths(this.viewYear, this.viewMonth, 1);

    let grids: TemplateResult;
    if (this.mode === "month") {
      grids = this.renderMonthPanel();
    } else if (this.mode === "year") {
      grids = this.renderYearPanel();
    } else {
      grids = html`
        ${this.renderDayPanel(this.viewYear, this.viewMonth)}
        ${rangeLayout ? this.renderDayPanel(right.year, right.month) : nothing}
      `;
    }

    return html`
      <div class="popup-body">
        ${this.renderShortcuts()}
        <div class="panels-wrap">
          ${this.renderNav(rangeLayout)}
          <div class="panels">${grids}</div>
        </div>
      </div>
    `;
  }

  private renderTriggerText() {
    const value = this.value;
    if (this.mode === "range") {
      const values = Array.isArray(value) ? value : [];
      const start = values[0] ?? "";
      const end = values[1] ?? "";
      return html`
        <span class="trigger-text ${start === "" ? "placeholder" : ""}" part="label">
          ${start === "" ? this.startPlaceholder : start}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${end === "" ? "placeholder" : ""}">
          ${end === "" ? this.endPlaceholder : end}
        </span>
      `;
    }
    const text = typeof value === "string" ? value : "";
    return html`
      <span class="trigger-text ${text === "" ? "placeholder" : ""}" part="label">
        ${text === "" ? this.placeholder : text}
      </span>
    `;
  }

  protected render() {
    const hasValue = Array.isArray(this.value)
      ? this.value.length > 0
      : this.value !== "";
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
          <slot name="indicator">
            <span class="calendar-icon"></span>
          </slot>
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
              data-layout=${this.mode === "range" ? "range" : "single"}
              @keydown=${this.handlePopupKeydown}
            >
              ${this.renderPanelsWithNav()}
              ${this.renderFooter()}
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-date-picker": SuperDatePicker;
  }
  interface HTMLElementEventMap {
    "super-date-picker-change": CustomEvent<SuperDatePickerChangeDetail>;
    "super-date-picker-clear": CustomEvent<SuperDatePickerClearDetail>;
    "super-date-picker-open-change": CustomEvent<SuperDatePickerOpenChangeDetail>;
  }
}
