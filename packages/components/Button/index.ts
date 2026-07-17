import { defineCustomElement } from "@yxzq-element/utils";
import { SuperButton } from "./Button.js";

export const SUPER_BUTTON_TAG = "super-button" as const;

export const defineSuperButton = (
  registry?: CustomElementRegistry,
): typeof SuperButton =>
  defineCustomElement(SUPER_BUTTON_TAG, SuperButton, registry);

export * from "./Button.js";
