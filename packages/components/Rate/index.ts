import { defineCustomElement } from "@yxzq-element/utils";
import { SuperRate } from "./Rate.js";

export const SUPER_RATE_TAG = "super-rate" as const;

export const defineSuperRate = (
  registry?: CustomElementRegistry,
): typeof SuperRate =>
  defineCustomElement(SUPER_RATE_TAG, SuperRate, registry);

export * from "./Rate.js";
