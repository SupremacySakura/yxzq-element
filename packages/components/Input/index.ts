import { defineCustomElement } from "@yxzq-element/utils";
import { SuperInput } from "./Input.js";

export const SUPER_INPUT_TAG = "super-input" as const;

export const defineSuperInput = (
  registry?: CustomElementRegistry,
): typeof SuperInput =>
  defineCustomElement(SUPER_INPUT_TAG, SuperInput, registry);

export * from "./Input.js";
