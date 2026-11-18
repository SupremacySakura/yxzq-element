import { defineCustomElement } from "@yxzq-element/utils";
import { SuperDivider } from "./Divider.js";

export const SUPER_DIVIDER_TAG = "super-divider" as const;

export const defineSuperDivider = (
  registry?: CustomElementRegistry,
): typeof SuperDivider =>
  defineCustomElement(SUPER_DIVIDER_TAG, SuperDivider, registry);

export * from "./Divider.js";
