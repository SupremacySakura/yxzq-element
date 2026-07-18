import type { EmitFn, HTMLAttributes, PublicProps } from "vue";
import type { SuperButton } from "yxzq-element/button";
import type {
  SuperCheckbox,
  SuperCheckboxChangeDetail,
} from "yxzq-element/checkbox";
import type {
  SuperInput,
  SuperInputClearDetail,
  SuperInputPasswordVisibilityDetail,
  SuperInputValueDetail,
} from "yxzq-element/input";
import type {
  SuperRadio,
  SuperRadioChangeDetail,
} from "yxzq-element/radio";
import type {
  SuperSelect,
  SuperSelectChangeDetail,
  SuperSelectClearDetail,
  SuperSelectOpenChangeDetail,
  SuperSelectSearchDetail,
} from "yxzq-element/select";
import type {
  SuperSwitch,
  SuperSwitchChangeDetail,
} from "yxzq-element/switch";

type NumberLike = number | `${number}`;
type CustomElementEventMap = Record<string, Event>;

type VueEmit<Events extends CustomElementEventMap> = EmitFn<{
  [Name in keyof Events]: (event: Events[Name]) => void;
}>;

type DefineCustomElement<
  ElementType extends HTMLElement,
  SelectedProperties extends keyof ElementType = never,
  Events extends CustomElementEventMap = Record<never, never>,
  AttributeAliases extends object = Record<never, never>,
> = new () => ElementType & {
  /** @deprecated 仅供 Vue 模板类型检查，真实元素实例上不存在。 */
  $props: HTMLAttributes &
    Partial<Pick<ElementType, SelectedProperties>> &
    AttributeAliases &
    PublicProps;
  /** @deprecated 仅供 Vue 模板事件类型检查，真实元素实例上不存在。 */
  $emit: VueEmit<Events>;
};

type ButtonProperties =
  | "variant"
  | "size"
  | "shape"
  | "disabled"
  | "loading"
  | "loadingText";

type InputProperties =
  | "value"
  | "type"
  | "size"
  | "validation"
  | "placeholder"
  | "helperText"
  | "disabled"
  | "required"
  | "clearable"
  | "revealable"
  | "multiline"
  | "showCount"
  | "min"
  | "max"
  | "step"
  | "autocomplete"
  | "clearLabel"
  | "decrementLabel"
  | "incrementLabel"
  | "passwordShowLabel"
  | "passwordHideLabel";

type InputAttributes = {
  readonly?: SuperInput["readOnly"];
  maxlength?: SuperInput["maxLength"] | `${number}`;
  minlength?: SuperInput["minLength"] | `${number}`;
  rows?: NumberLike;
  inputmode?: SuperInput["inputMode"];
};

type InputEvents = {
  "super-input": CustomEvent<SuperInputValueDetail>;
  "super-change": CustomEvent<SuperInputValueDetail>;
  "super-clear": CustomEvent<SuperInputClearDetail>;
  "super-password-visibility": CustomEvent<SuperInputPasswordVisibilityDetail>;
};

type CheckboxProperties =
  | "checked"
  | "indeterminate"
  | "disabled"
  | "required"
  | "variant"
  | "size"
  | "validation"
  | "name"
  | "value"
  | "helperText";

type CheckboxEvents = {
  "super-checkbox-change": CustomEvent<SuperCheckboxChangeDetail>;
};

type RadioProperties =
  | "checked"
  | "disabled"
  | "required"
  | "variant"
  | "size"
  | "validation"
  | "name"
  | "value"
  | "helperText";

type RadioEvents = {
  "super-radio-change": CustomEvent<SuperRadioChangeDetail>;
};

type SwitchProperties =
  | "checked"
  | "disabled"
  | "required"
  | "size"
  | "validation"
  | "name"
  | "value"
  | "helperText";

type SwitchEvents = {
  "super-switch-change": CustomEvent<SuperSwitchChangeDetail>;
};

type SelectProperties =
  | "value"
  | "multiple"
  | "searchable"
  | "clearable"
  | "disabled"
  | "required"
  | "loading"
  | "open"
  | "name"
  | "size"
  | "variant"
  | "validation"
  | "placeholder"
  | "helperText"
  | "clearLabel"
  | "removeLabel"
  | "searchLabel"
  | "searchPlaceholder"
  | "emptyText"
  | "loadingText";

type SelectAttributes = {
  readonly?: SuperSelect["readOnly"];
};

type SelectEvents = {
  "super-select-change": CustomEvent<SuperSelectChangeDetail>;
  "super-select-clear": CustomEvent<SuperSelectClearDetail>;
  "super-select-open-change": CustomEvent<SuperSelectOpenChangeDetail>;
  "super-select-search": CustomEvent<SuperSelectSearchDetail>;
};

declare module "vue" {
  interface HTMLAttributes {
    slot?: string;
  }

  interface GlobalComponents {
    "super-button": DefineCustomElement<SuperButton, ButtonProperties>;
    "super-checkbox": DefineCustomElement<
      SuperCheckbox,
      CheckboxProperties,
      CheckboxEvents
    >;
    "super-input": DefineCustomElement<
      SuperInput,
      InputProperties,
      InputEvents,
      InputAttributes
    >;
    "super-radio": DefineCustomElement<
      SuperRadio,
      RadioProperties,
      RadioEvents
    >;
    "super-select": DefineCustomElement<
      SuperSelect,
      SelectProperties,
      SelectEvents,
      SelectAttributes
    >;
    "super-switch": DefineCustomElement<
      SuperSwitch,
      SwitchProperties,
      SwitchEvents
    >;
  }
}

export {};
