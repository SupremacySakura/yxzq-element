import {
  defineSuperButton,
  defineSuperInput,
} from "@yxzq-element/components";

export const componentDefinitions = [
  defineSuperButton,
  defineSuperInput,
] as const;

export function registerAll(registry?: CustomElementRegistry): void {
  componentDefinitions.forEach((defineComponent) => {
    defineComponent(registry);
  });
}
