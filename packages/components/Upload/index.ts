import { defineCustomElement } from "@yxzq-element/utils";
import { SuperUpload } from "./Upload.js";

export const SUPER_UPLOAD_TAG = "super-upload" as const;

export const defineSuperUpload = (
  registry?: CustomElementRegistry,
): typeof SuperUpload =>
  defineCustomElement(SUPER_UPLOAD_TAG, SuperUpload, registry);

export * from "./Upload.js";
