import { defineCustomElement } from "@yxzq-element/utils";
import { SuperMenu } from "./Menu.js";

export const SUPER_MENU_TAG = "super-menu" as const;

export const defineSuperMenu = (
  registry?: CustomElementRegistry,
): typeof SuperMenu => defineCustomElement(SUPER_MENU_TAG, SuperMenu, registry);

export * from "./Menu.js";
