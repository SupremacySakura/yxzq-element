import { defineCustomElement } from "@yxzq-element/utils";
import { SuperMessage } from "./Message.js";

export const SUPER_MESSAGE_TAG = "super-message" as const;

export const defineSuperMessage = (
  registry?: CustomElementRegistry,
): typeof SuperMessage =>
  defineCustomElement(SUPER_MESSAGE_TAG, SuperMessage, registry);

export * from "./Message.js";
