import { defineSuperButton } from "@yxzq-element/components";

export const componentDefinitions = [defineSuperButton] as const;

export function registerAll(registry?: CustomElementRegistry): void {
  componentDefinitions.forEach((defineComponent) => {
    defineComponent(registry);
  });
}
