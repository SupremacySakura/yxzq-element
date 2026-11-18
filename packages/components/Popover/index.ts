import { defineCustomElement } from "@yxzq-element/utils";
import { SuperPopover } from "./Popover.js";

export const SUPER_POPOVER_TAG = "super-popover" as const;

export const defineSuperPopover = (
  registry?: CustomElementRegistry,
): typeof SuperPopover =>
  defineCustomElement(SUPER_POPOVER_TAG, SuperPopover, registry);

export * from "./Popover.js";
