import type { EmitFn, HTMLAttributes, PublicProps } from "vue";
import type { SuperButton } from "yxzq-element/button";
import type { SuperAvatar } from "yxzq-element/avatar";
import type { SuperBadge } from "yxzq-element/badge";
import type { SuperCard, SuperCardClickDetail } from "yxzq-element/card";
import type { SuperDivider } from "yxzq-element/divider";
import type { SuperSpace } from "yxzq-element/space";
import type { SuperTag, SuperTagCloseDetail } from "yxzq-element/tag";
import type {
  SuperCheckbox,
  SuperCheckboxChangeDetail,
} from "yxzq-element/checkbox";
import type {
  SuperDatePicker,
  SuperDatePickerChangeDetail,
  SuperDatePickerClearDetail,
  SuperDatePickerOpenChangeDetail,
} from "yxzq-element/date-picker";
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
import type {
  SuperTimePicker,
  SuperTimePickerChangeDetail,
  SuperTimePickerClearDetail,
  SuperTimePickerOpenChangeDetail,
} from "yxzq-element/time-picker";

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

type TagProperties = "variant" | "size" | "closable" | "value" | "closeLabel";

type TagEvents = {
  "super-tag-close": CustomEvent<SuperTagCloseDetail>;
};

type BadgeProperties = "value" | "max" | "dot" | "status" | "size" | "hidden";

type AvatarProperties = "src" | "alt" | "size" | "shape" | "icon" | "fallback";

type CardProperties =
  | "variant"
  | "size"
  | "hoverable"
  | "clickable";

type CardAttributes = {
  "aria-label"?: SuperCard["accessibleLabel"];
};

type CardEvents = {
  "super-card-click": CustomEvent<SuperCardClickDetail>;
};

type DividerProperties = "direction" | "contentPosition" | "variant" | "color";

type SpaceProperties = "direction" | "size" | "wrap" | "align" | "fill";

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

type FormProperties =
  | "schema"
  | "value"
  | "submitting";

type FormEvents = {
  "super-form-change": CustomEvent<SuperFormChangeDetail>;
  "super-form-submit": CustomEvent<SuperFormSubmitDetail>;
  "super-form-invalid": CustomEvent<SuperFormInvalidDetail>;
  "super-form-reset": CustomEvent<SuperFormResetDetail>;
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

type DatePickerProperties =
  | "value"
  | "mode"
  | "size"
  | "validation"
  | "disabled"
  | "clearable"
  | "open"
  | "name"
  | "placeholder"
  | "startPlaceholder"
  | "endPlaceholder"
  | "min"
  | "max"
  | "firstDayOfWeek"
  | "locale"
  | "helperText"
  | "todayLabel"
  | "clearLabel"
  | "prevMonthLabel"
  | "nextMonthLabel"
  | "prevYearLabel"
  | "nextYearLabel"
  | "disabledDate"
  | "shortcuts";

type DatePickerEvents = {
  "super-date-picker-change": CustomEvent<SuperDatePickerChangeDetail>;
  "super-date-picker-clear": CustomEvent<SuperDatePickerClearDetail>;
  "super-date-picker-open-change": CustomEvent<SuperDatePickerOpenChangeDetail>;
};

type TimePickerProperties =
  | "value"
  | "range"
  | "format"
  | "size"
  | "validation"
  | "disabled"
  | "clearable"
  | "open"
  | "name"
  | "placeholder"
  | "startPlaceholder"
  | "endPlaceholder"
  | "hourStep"
  | "minuteStep"
  | "secondStep"
  | "helperText"
  | "clearLabel"
  | "confirmLabel"
  | "amLabel"
  | "pmLabel"
  | "startLabel"
  | "endLabel"
  | "shortcuts";

type TimePickerEvents = {
  "super-time-picker-change": CustomEvent<SuperTimePickerChangeDetail>;
  "super-time-picker-clear": CustomEvent<SuperTimePickerClearDetail>;
  "super-time-picker-open-change": CustomEvent<SuperTimePickerOpenChangeDetail>;
};

declare module "vue" {
  interface HTMLAttributes {
    slot?: string;
  }

  interface GlobalComponents {
    "super-button": DefineCustomElement<SuperButton, ButtonProperties>;
    "super-avatar": DefineCustomElement<SuperAvatar, AvatarProperties>;
    "super-badge": DefineCustomElement<SuperBadge, BadgeProperties>;
    "super-card": DefineCustomElement<
      SuperCard,
      CardProperties,
      CardEvents,
      CardAttributes
    >;
    "super-divider": DefineCustomElement<SuperDivider, DividerProperties>;
    "super-space": DefineCustomElement<SuperSpace, SpaceProperties>;
    "super-tag": DefineCustomElement<SuperTag, TagProperties, TagEvents>;
    "super-checkbox": DefineCustomElement<
      SuperCheckbox,
      CheckboxProperties,
      CheckboxEvents
    >;
    "super-date-picker": DefineCustomElement<
      SuperDatePicker,
      DatePickerProperties,
      DatePickerEvents
    >;
    "super-form": DefineCustomElement<
      SuperForm,
      FormProperties,
      FormEvents
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
    "super-time-picker": DefineCustomElement<
      SuperTimePicker,
      TimePickerProperties,
      TimePickerEvents
    >;
  }
}

export {};
