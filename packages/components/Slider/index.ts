import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSlider } from "./Slider.js";

export const SUPER_SLIDER_TAG = "super-slider" as const;

export const defineSuperSlider = (
  registry?: CustomElementRegistry,
): typeof SuperSlider =>
  defineCustomElement(SUPER_SLIDER_TAG, SuperSlider, registry);

export * from "./Slider.js";
