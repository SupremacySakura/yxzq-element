import { defineCustomElement } from "@yxzq-element/utils";
import { SuperDatePicker } from "./DatePicker.js";

export const SUPER_DATE_PICKER_TAG = "super-date-picker" as const;

export const defineSuperDatePicker = (
  registry?: CustomElementRegistry,
): typeof SuperDatePicker =>
  defineCustomElement(SUPER_DATE_PICKER_TAG, SuperDatePicker, registry);

export * from "./DatePicker.js";
