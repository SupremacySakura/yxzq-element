import { defineCustomElement } from "@yxzq-element/utils";
import { SuperEmpty } from "./Empty.js";

export const SUPER_EMPTY_TAG = "super-empty" as const;

export const defineSuperEmpty = (
  registry?: CustomElementRegistry,
): typeof SuperEmpty =>
  defineCustomElement(SUPER_EMPTY_TAG, SuperEmpty, registry);

export * from "./Empty.js";
