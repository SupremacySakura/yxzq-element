import { defineCustomElement } from "@yxzq-element/utils";
import { SuperSkeleton } from "./Skeleton.js";

export const SUPER_SKELETON_TAG = "super-skeleton" as const;

export const defineSuperSkeleton = (
  registry?: CustomElementRegistry,
): typeof SuperSkeleton =>
  defineCustomElement(SUPER_SKELETON_TAG, SuperSkeleton, registry);

export * from "./Skeleton.js";
