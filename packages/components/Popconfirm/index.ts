import { defineCustomElement } from "@yxzq-element/utils";
import { SuperPopconfirm } from "./Popconfirm.js";

export const SUPER_POPCONFIRM_TAG = "super-popconfirm" as const;

export const defineSuperPopconfirm = (
  registry?: CustomElementRegistry,
): typeof SuperPopconfirm =>
  defineCustomElement(SUPER_POPCONFIRM_TAG, SuperPopconfirm, registry);

export * from "./Popconfirm.js";
