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

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & SuperButtonAttributes;
    }
  }
}
