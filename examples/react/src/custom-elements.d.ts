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
      "super-switch": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperSwitchAttributes;
    }
  }
}
