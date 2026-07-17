import type { DetailedHTMLProps, HTMLAttributes } from "react";

type SuperButtonAttributes = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline"
    | "ghost"
    | "text";
  size?: "large" | "medium" | "small";
  shape?: "default" | "pill" | "square";
  disabled?: boolean;
  loading?: boolean;
  "loading-text"?: string;
};

type SuperInputAttributes = {
  value?: string;
  type?: "text" | "search" | "password" | "number" | "email" | "tel" | "url" | "date";
  size?: "large" | "medium" | "small";
  validation?: "none" | "success" | "warning" | "error" | "info";
  placeholder?: string;
  "helper-text"?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  clearable?: boolean;
  revealable?: boolean;
  multiline?: boolean;
  "show-count"?: boolean;
  maxlength?: number;
  minlength?: number;
  min?: string;
  max?: string;
  step?: string;
  rows?: number;
  inputmode?: string;
  autocomplete?: string;
  "clear-label"?: string;
  "decrement-label"?: string;
  "increment-label"?: string;
  "password-show-label"?: string;
  "password-hide-label"?: string;
};

type SuperSelectorAttributes = {
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  size?: "large" | "medium" | "small";
  validation?: "none" | "success" | "warning" | "error" | "info";
  "helper-text"?: string;
};

type SuperCheckboxAttributes = SuperSelectorAttributes & {
  indeterminate?: boolean;
  variant?: "default" | "card";
};

type SuperRadioAttributes = SuperSelectorAttributes & {
  variant?: "default" | "button" | "card";
};

type SuperSwitchAttributes = SuperSelectorAttributes;

type SuperSelectValue = string | string[];

type SuperSelectChangeEvent = CustomEvent<{
  value: SuperSelectValue;
  values: string[];
  name: string;
  selectedOptions: HTMLOptionElement[];
  originalEvent: Event;
}>;

type SuperSelectAttributes = {
  value?: SuperSelectValue;
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  loading?: boolean;
  open?: boolean;
  name?: string;
  size?: "large" | "medium" | "small";
  variant?: "default" | "pill" | "filled" | "ghost";
  validation?: "none" | "success" | "warning" | "error" | "info";
  placeholder?: string;
  "helper-text"?: string;
  "clear-label"?: string;
  "remove-label"?: string;
  "search-label"?: string;
  "search-placeholder"?: string;
  "empty-text"?: string;
  "loading-text"?: string;
  "onsuper-select-change"?: (event: SuperSelectChangeEvent) => void;
  "onsuper-select-clear"?: (
    event: CustomEvent<{ previousValue: SuperSelectValue; originalEvent: Event }>,
  ) => void;
  "onsuper-select-open-change"?: (
    event: CustomEvent<{
      open: boolean;
      reason: "trigger" | "keyboard" | "search" | "selection" | "escape" | "outside";
      originalEvent: Event;
    }>,
  ) => void;
  "onsuper-select-search"?: (
    event: CustomEvent<{ query: string; originalEvent: InputEvent }>,
  ) => void;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperButtonAttributes;
      "super-checkbox": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperCheckboxAttributes;
      "super-input": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperInputAttributes;
      "super-radio": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperRadioAttributes;
      "super-select": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperSelectAttributes;
      "super-switch": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperSwitchAttributes;
    }
  }
}
