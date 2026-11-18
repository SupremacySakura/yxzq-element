import { defineCustomElement } from "@yxzq-element/utils";
import { SuperDrawer } from "./Drawer.js";

export const SUPER_DRAWER_TAG = "super-drawer" as const;

export const defineSuperDrawer = (
  registry?: CustomElementRegistry,
): typeof SuperDrawer =>
  defineCustomElement(SUPER_DRAWER_TAG, SuperDrawer, registry);

export * from "./Drawer.js";
