import {
  defineSuperButton,
  defineSuperCheckbox,
  defineSuperDatePicker,
  defineSuperForm,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSwitch,
  defineSuperTimePicker,
} from "@yxzq-element/components";

export const componentDefinitions = [
  defineSuperButton,
  defineSuperCheckbox,
  defineSuperDatePicker,
  defineSuperForm,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSwitch,
  defineSuperTimePicker,
] as const;

export function registerAll(registry?: CustomElementRegistry): void {
  componentDefinitions.forEach((defineComponent) => {
    defineComponent(registry);
  });
}
