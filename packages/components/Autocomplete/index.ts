import { defineCustomElement } from "@yxzq-element/utils";
import { SuperAutocomplete } from "./Autocomplete.js";

export const SUPER_AUTOCOMPLETE_TAG = "super-autocomplete" as const;

export const defineSuperAutocomplete = (
  registry?: CustomElementRegistry,
): typeof SuperAutocomplete =>
  defineCustomElement(SUPER_AUTOCOMPLETE_TAG, SuperAutocomplete, registry);

export * from "./Autocomplete.js";
