import { defineCustomElement } from "@yxzq-element/utils";
import { SuperCheckbox } from "./Checkbox.js";

export const SUPER_CHECKBOX_TAG = "super-checkbox" as const;

export const defineSuperCheckbox = (
  registry?: CustomElementRegistry,
): typeof SuperCheckbox =>
  defineCustomElement(SUPER_CHECKBOX_TAG, SuperCheckbox, registry);

export * from "./Checkbox.js";
