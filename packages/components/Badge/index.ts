import { defineCustomElement } from "@yxzq-element/utils";
import { SuperBadge } from "./Badge.js";

export const SUPER_BADGE_TAG = "super-badge" as const;

export const defineSuperBadge = (
  registry?: CustomElementRegistry,
): typeof SuperBadge =>
  defineCustomElement(SUPER_BADGE_TAG, SuperBadge, registry);

export * from "./Badge.js";
