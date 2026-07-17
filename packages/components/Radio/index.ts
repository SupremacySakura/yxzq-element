import { defineCustomElement } from "@yxzq-element/utils";
import { SuperRadio } from "./Radio.js";

export const SUPER_RADIO_TAG = "super-radio" as const;

export const defineSuperRadio = (
  registry?: CustomElementRegistry,
): typeof SuperRadio =>
  defineCustomElement(SUPER_RADIO_TAG, SuperRadio, registry);

export * from "./Radio.js";
