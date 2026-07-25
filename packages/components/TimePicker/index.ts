import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTimePicker } from "./TimePicker.js";

export const SUPER_TIME_PICKER_TAG = "super-time-picker" as const;

export const defineSuperTimePicker = (
  registry?: CustomElementRegistry,
): typeof SuperTimePicker =>
  defineCustomElement(SUPER_TIME_PICKER_TAG, SuperTimePicker, registry);

export * from "./TimePicker.js";
