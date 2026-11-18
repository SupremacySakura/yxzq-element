import { defineCustomElement } from "@yxzq-element/utils";
import { SuperDialog } from "./Dialog.js";

export const SUPER_DIALOG_TAG = "super-dialog" as const;

export const defineSuperDialog = (
  registry?: CustomElementRegistry,
): typeof SuperDialog =>
  defineCustomElement(SUPER_DIALOG_TAG, SuperDialog, registry);

export * from "./Dialog.js";
