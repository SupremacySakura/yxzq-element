import { defineCustomElement } from "@yxzq-element/utils";
import { SuperAvatar } from "./Avatar.js";

export const SUPER_AVATAR_TAG = "super-avatar" as const;

export const defineSuperAvatar = (
  registry?: CustomElementRegistry,
): typeof SuperAvatar =>
  defineCustomElement(SUPER_AVATAR_TAG, SuperAvatar, registry);

export * from "./Avatar.js";
