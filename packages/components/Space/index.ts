import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSpace } from "./Space.js";

export const SUPER_SPACE_TAG = "super-space" as const;

export const defineSuperSpace = (
  registry?: CustomElementRegistry,
): typeof SuperSpace =>
  defineCustomElement(SUPER_SPACE_TAG, SuperSpace, registry);

export * from "./Space.js";
