import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTabs } from "./Tabs.js";

export const SUPER_TABS_TAG = "super-tabs" as const;

export const defineSuperTabs = (
  registry?: CustomElementRegistry,
): typeof SuperTabs =>
  defineCustomElement(SUPER_TABS_TAG, SuperTabs, registry);

export * from "./Tabs.js";
