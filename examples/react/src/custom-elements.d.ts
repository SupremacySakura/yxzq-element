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

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperButtonAttributes;
      "super-input": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperInputAttributes;
    }
  }
}
