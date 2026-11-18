import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSteps } from "./Steps.js";

// Kept for public API stability: the trailing "TAG" means Custom Element tag.
export const SUPER_STEPS_TAG = "super-steps" as const;

export const defineSuperSteps = (
  registry?: CustomElementRegistry,
): typeof SuperSteps =>
  defineCustomElement(SUPER_STEPS_TAG, SuperSteps, registry);

export * from "./Steps.js";
