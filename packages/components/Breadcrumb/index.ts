import { defineCustomElement } from "@yxzq-element/utils";
import { SuperBreadcrumb } from "./Breadcrumb.js";

export const SUPER_BREADCRUMB_TAG = "super-breadcrumb" as const;

export const defineSuperBreadcrumb = (
  registry?: CustomElementRegistry,
): typeof SuperBreadcrumb =>
  defineCustomElement(SUPER_BREADCRUMB_TAG, SuperBreadcrumb, registry);

export * from "./Breadcrumb.js";
