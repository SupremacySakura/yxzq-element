import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTag } from "./Tag.js";

// Kept for public API stability: the second "TAG" means Custom Element tag.
export const SUPER_TAG_TAG = "super-tag" as const;

export const defineSuperTag = (
  registry?: CustomElementRegistry,
): typeof SuperTag =>
  defineCustomElement(SUPER_TAG_TAG, SuperTag, registry);

export * from "./Tag.js";
