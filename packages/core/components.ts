import {
  defineSuperButton,
  defineSuperCheckbox,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSwitch,
} from "@yxzq-element/components";

export const componentDefinitions = [
  defineSuperButton,
  defineSuperCheckbox,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSwitch,
] as const;

export function registerAll(registry?: CustomElementRegistry): void {
  componentDefinitions.forEach((defineComponent) => {
    defineComponent(registry);
  });
}
