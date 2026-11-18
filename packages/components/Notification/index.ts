import { defineCustomElement } from "@yxzq-element/utils";
import { SuperNotification } from "./Notification.js";

export const SUPER_NOTIFICATION_TAG = "super-notification" as const;

export const defineSuperNotification = (
  registry?: CustomElementRegistry,
): typeof SuperNotification =>
  defineCustomElement(SUPER_NOTIFICATION_TAG, SuperNotification, registry);

export * from "./Notification.js";
