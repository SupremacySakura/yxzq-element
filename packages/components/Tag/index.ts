import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTag } from "./Tag.js";

export const SUPER_TAG_TAG = "super-tag" as const;

export const defineSuperTag = (
  registry?: CustomElementRegistry,
): typeof SuperTag =>
  defineCustomElement(SUPER_TAG_TAG, SuperTag, registry);

export * from "./Tag.js";
