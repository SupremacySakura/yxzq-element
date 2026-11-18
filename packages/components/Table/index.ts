import { defineCustomElement } from "@yxzq-element/utils";
import { SuperTable } from "./Table.js";

export const SUPER_TABLE_TAG = "super-table" as const;

export const defineSuperTable = (
  registry?: CustomElementRegistry,
): typeof SuperTable =>
  defineCustomElement(SUPER_TABLE_TAG, SuperTable, registry);

export * from "./Table.js";
