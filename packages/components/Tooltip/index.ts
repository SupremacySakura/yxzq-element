import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTooltip } from "./Tooltip.js";

export const SUPER_TOOLTIP_TAG = "super-tooltip" as const;

export const defineSuperTooltip = (
  registry?: CustomElementRegistry,
): typeof SuperTooltip =>
  defineCustomElement(SUPER_TOOLTIP_TAG, SuperTooltip, registry);

export * from "./Tooltip.js";
