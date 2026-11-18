import { defineCustomElement } from "@yxzq-element/utils";
import { SuperProgress } from "./Progress.js";

export const SUPER_PROGRESS_TAG = "super-progress" as const;

export const defineSuperProgress = (
  registry?: CustomElementRegistry,
): typeof SuperProgress =>
  defineCustomElement(SUPER_PROGRESS_TAG, SuperProgress, registry);

export * from "./Progress.js";
