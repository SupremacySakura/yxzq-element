import { defineCustomElement } from "@yxzq-element/utils";
import { SuperForm } from "./Form.js";

export const SUPER_FORM_TAG = "super-form" as const;

export const defineSuperForm = (
  registry?: CustomElementRegistry,
): typeof SuperForm =>
  defineCustomElement(SUPER_FORM_TAG, SuperForm, registry);

export * from "./Form.js";
