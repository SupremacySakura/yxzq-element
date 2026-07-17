import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSelect } from "./Select.js";

export const SUPER_SELECT_TAG = "super-select" as const;

export const defineSuperSelect = (
  registry?: CustomElementRegistry,
): typeof SuperSelect =>
  defineCustomElement(SUPER_SELECT_TAG, SuperSelect, registry);

export * from "./Select.js";
