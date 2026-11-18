import { defineCustomElement } from "@yxzq-element/utils";
import { SuperCard } from "./Card.js";

export const SUPER_CARD_TAG = "super-card" as const;

export const defineSuperCard = (
  registry?: CustomElementRegistry,
): typeof SuperCard =>
  defineCustomElement(SUPER_CARD_TAG, SuperCard, registry);

export * from "./Card.js";
