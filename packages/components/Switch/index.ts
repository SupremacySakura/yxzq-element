import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSwitch } from "./Switch.js";

export const SUPER_SWITCH_TAG = "super-switch" as const;

export const defineSuperSwitch = (
  registry?: CustomElementRegistry,
): typeof SuperSwitch =>
  defineCustomElement(SUPER_SWITCH_TAG, SuperSwitch, registry);

export * from "./Switch.js";
