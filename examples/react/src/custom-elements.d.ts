import type { DetailedHTMLProps, HTMLAttributes } from "react";
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
  SuperForm,
  SuperFormChangeDetail,
  SuperFormInvalidDetail,
  SuperFormResetDetail,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
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
type CustomEventHandler<Detail> = (event: CustomEvent<Detail>) => void;

type CustomElementProps<
  ElementType extends HTMLElement,
  Attributes extends object,
  Events extends object = Record<never, never>,
> = DetailedHTMLProps<HTMLAttributes<ElementType>, ElementType> &
  Attributes &
  Events;

type SuperButtonAttributes = {
  variant?: SuperButton["variant"];
  size?: SuperButton["size"];
  shape?: SuperButton["shape"];
  disabled?: SuperButton["disabled"];
  loading?: SuperButton["loading"];
  "loading-text"?: SuperButton["loadingText"];
};

type SuperInputAttributes = {
  value?: SuperInput["value"];
  type?: SuperInput["type"];
  size?: SuperInput["size"];
  validation?: SuperInput["validation"];
  placeholder?: SuperInput["placeholder"];
  "helper-text"?: SuperInput["helperText"];
  disabled?: SuperInput["disabled"];
  readonly?: SuperInput["readOnly"];
  required?: SuperInput["required"];
  clearable?: SuperInput["clearable"];
  revealable?: SuperInput["revealable"];
  multiline?: SuperInput["multiline"];
  "show-count"?: SuperInput["showCount"];
  maxlength?: SuperInput["maxLength"] | `${number}`;
  minlength?: SuperInput["minLength"] | `${number}`;
  min?: SuperInput["min"];
  max?: SuperInput["max"];
  step?: SuperInput["step"];
  rows?: NumberLike;
  inputmode?: SuperInput["inputMode"];
  autocomplete?: SuperInput["autocomplete"];
  "clear-label"?: SuperInput["clearLabel"];
  "decrement-label"?: SuperInput["decrementLabel"];
  "increment-label"?: SuperInput["incrementLabel"];
  "password-show-label"?: SuperInput["passwordShowLabel"];
  "password-hide-label"?: SuperInput["passwordHideLabel"];
};

type SuperInputEvents = {
  "onsuper-input"?: CustomEventHandler<SuperInputValueDetail>;
  "onsuper-change"?: CustomEventHandler<SuperInputValueDetail>;
  "onsuper-clear"?: CustomEventHandler<SuperInputClearDetail>;
  "onsuper-password-visibility"?: CustomEventHandler<
    SuperInputPasswordVisibilityDetail
  >;
};

type SuperFormAttributes = {
  schema?: SuperForm["schema"];
  value?: SuperForm["value"];
  submitting?: SuperForm["submitting"];
};

type SuperFormEvents = {
  "onsuper-form-change"?: CustomEventHandler<SuperFormChangeDetail>;
  "onsuper-form-submit"?: CustomEventHandler<SuperFormSubmitDetail>;
  "onsuper-form-invalid"?: CustomEventHandler<SuperFormInvalidDetail>;
  "onsuper-form-reset"?: CustomEventHandler<SuperFormResetDetail>;
};

type SuperSelectorAttributes<
  ElementType extends SuperCheckbox | SuperRadio | SuperSwitch,
> = {
  checked?: ElementType["checked"];
  disabled?: ElementType["disabled"];
  required?: ElementType["required"];
  name?: ElementType["name"];
  value?: ElementType["value"];
  size?: ElementType["size"];
  validation?: ElementType["validation"];
  "helper-text"?: ElementType["helperText"];
};

type SuperCheckboxAttributes = SuperSelectorAttributes<SuperCheckbox> & {
  indeterminate?: SuperCheckbox["indeterminate"];
  variant?: SuperCheckbox["variant"];
};

type SuperCheckboxEvents = {
  "onsuper-checkbox-change"?: CustomEventHandler<
    SuperCheckboxChangeDetail
  >;
};

type SuperRadioAttributes = SuperSelectorAttributes<SuperRadio> & {
  variant?: SuperRadio["variant"];
};

type SuperRadioEvents = {
  "onsuper-radio-change"?: CustomEventHandler<SuperRadioChangeDetail>;
};

type SuperSwitchAttributes = SuperSelectorAttributes<SuperSwitch>;

type SuperSwitchEvents = {
  "onsuper-switch-change"?: CustomEventHandler<SuperSwitchChangeDetail>;
};

type SuperSelectAttributes = {
  value?: SuperSelect["value"];
  multiple?: SuperSelect["multiple"];
  searchable?: SuperSelect["searchable"];
  clearable?: SuperSelect["clearable"];
  disabled?: SuperSelect["disabled"];
  readonly?: SuperSelect["readOnly"];
  required?: SuperSelect["required"];
  loading?: SuperSelect["loading"];
  open?: SuperSelect["open"];
  name?: SuperSelect["name"];
  size?: SuperSelect["size"];
  variant?: SuperSelect["variant"];
  validation?: SuperSelect["validation"];
  placeholder?: SuperSelect["placeholder"];
  "helper-text"?: SuperSelect["helperText"];
  "clear-label"?: SuperSelect["clearLabel"];
  "remove-label"?: SuperSelect["removeLabel"];
  "search-label"?: SuperSelect["searchLabel"];
  "search-placeholder"?: SuperSelect["searchPlaceholder"];
  "empty-text"?: SuperSelect["emptyText"];
  "loading-text"?: SuperSelect["loadingText"];
};

type SuperSelectEvents = {
  "onsuper-select-change"?: CustomEventHandler<SuperSelectChangeDetail>;
  "onsuper-select-clear"?: CustomEventHandler<SuperSelectClearDetail>;
  "onsuper-select-open-change"?: CustomEventHandler<
    SuperSelectOpenChangeDetail
  >;
  "onsuper-select-search"?: CustomEventHandler<SuperSelectSearchDetail>;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": CustomElementProps<SuperButton, SuperButtonAttributes>;
      "super-checkbox": CustomElementProps<
        SuperCheckbox,
        SuperCheckboxAttributes,
        SuperCheckboxEvents
      >;
      "super-form": CustomElementProps<
        SuperForm,
        SuperFormAttributes,
        SuperFormEvents
      >;
      "super-input": CustomElementProps<
        SuperInput,
        SuperInputAttributes,
        SuperInputEvents
      >;
      "super-radio": CustomElementProps<
        SuperRadio,
        SuperRadioAttributes,
        SuperRadioEvents
      >;
      "super-select": CustomElementProps<
        SuperSelect,
        SuperSelectAttributes,
        SuperSelectEvents
      >;
      "super-switch": CustomElementProps<
        SuperSwitch,
        SuperSwitchAttributes,
        SuperSwitchEvents
      >;
    }
  }
}
