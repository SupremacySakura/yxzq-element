import { defineCustomElement } from "@yxzq-element/utils";
import { SuperPagination } from "./Pagination.js";

export const SUPER_PAGINATION_TAG = "super-pagination" as const;

export const defineSuperPagination = (
  registry?: CustomElementRegistry,
): typeof SuperPagination =>
  defineCustomElement(SUPER_PAGINATION_TAG, SuperPagination, registry);

export * from "./Pagination.js";
