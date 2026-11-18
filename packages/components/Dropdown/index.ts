import { defineCustomElement } from "@yxzq-element/utils";
import { SuperDropdown } from "./Dropdown.js";

export const SUPER_DROPDOWN_TAG = "super-dropdown" as const;

export const defineSuperDropdown = (
  registry?: CustomElementRegistry,
): typeof SuperDropdown =>
  defineCustomElement(SUPER_DROPDOWN_TAG, SuperDropdown, registry);

export * from "./Dropdown.js";
