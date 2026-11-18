import {
  defineSuperAvatar,
  defineSuperBadge,
  defineSuperButton,
  defineSuperCard,
  defineSuperCheckbox,
  defineSuperDatePicker,
  defineSuperDivider,
  defineSuperForm,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSpace,
  defineSuperSwitch,
  defineSuperTag,
  defineSuperTimePicker,
} from "@yxzq-element/components";

export const componentDefinitions = [
  defineSuperAvatar,
  defineSuperBadge,
  defineSuperButton,
  defineSuperCard,
  defineSuperCheckbox,
  defineSuperDatePicker,
  defineSuperDivider,
  defineSuperForm,
  defineSuperInput,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSpace,
  defineSuperSwitch,
  defineSuperTag,
  defineSuperTimePicker,
] as const;

export function registerAll(registry?: CustomElementRegistry): void {
  componentDefinitions.forEach((defineComponent) => {
    defineComponent(registry);
  });
}
