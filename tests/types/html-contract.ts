import "yxzq-element";

type SuperTag = Extract<keyof HTMLElementTagNameMap, `super-${string}`>;

type ExpectedSuperTag =
  | "super-autocomplete"
  | "super-avatar"
  | "super-badge"
  | "super-breadcrumb"
  | "super-button"
  | "super-card"
  | "super-checkbox"
  | "super-date-picker"
  | "super-dialog"
  | "super-divider"
  | "super-drawer"
  | "super-dropdown"
  | "super-empty"
  | "super-form"
  | "super-input"
  | "super-menu"
  | "super-message"
  | "super-notification"
  | "super-pagination"
  | "super-popconfirm"
  | "super-popover"
  | "super-progress"
  | "super-radio"
  | "super-rate"
  | "super-select"
  | "super-skeleton"
  | "super-slider"
  | "super-space"
  | "super-steps"
  | "super-switch"
  | "super-table"
  | "super-tabs"
  | "super-tag"
  | "super-time-picker"
  | "super-tooltip"
  | "super-upload";

type Assert<T extends true> = T;
type Equal<Left, Right> =
  (<Value>() => Value extends Left ? 1 : 2) extends
  (<Value>() => Value extends Right ? 1 : 2)
    ? true
    : false;

export type AllSuperTagsAreRegistered = Assert<
  Equal<SuperTag, ExpectedSuperTag>
>;

export interface HtmlContractValues {
  autocomplete: Pick<
    HTMLElementTagNameMap["super-autocomplete"],
    "value" | "items" | "open" | "filter"
  >;
  select: Pick<
    HTMLElementTagNameMap["super-select"],
    "value" | "multiple" | "open"
  >;
  datePicker: Pick<
    HTMLElementTagNameMap["super-date-picker"],
    "value" | "mode" | "shortcuts" | "disabledDate"
  >;
  table: Pick<
    HTMLElementTagNameMap["super-table"],
    "columns" | "rows" | "selectedKeys" | "sortDirection"
  >;
  form: Pick<HTMLElementTagNameMap["super-form"], "schema" | "value">;
  upload: Pick<
    HTMLElementTagNameMap["super-upload"],
    "fileList" | "value" | "maxCount"
  >;
}
