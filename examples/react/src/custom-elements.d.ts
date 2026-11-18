import type { DetailedHTMLProps, HTMLAttributes } from "react";
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

type SuperTagAttributes = {
  variant?: SuperTag["variant"];
  size?: SuperTag["size"];
  closable?: SuperTag["closable"];
  value?: SuperTag["value"];
  "close-label"?: SuperTag["closeLabel"];
};

type SuperTagEvents = {
  "onsuper-tag-close"?: CustomEventHandler<SuperTagCloseDetail>;
};

type SuperBadgeAttributes = {
  value?: SuperBadge["value"];
  max?: SuperBadge["max"] | `${number}`;
  dot?: SuperBadge["dot"];
  status?: SuperBadge["status"];
  size?: SuperBadge["size"];
  hidden?: SuperBadge["hidden"];
};

type SuperAvatarAttributes = {
  src?: SuperAvatar["src"];
  alt?: SuperAvatar["alt"];
  size?: SuperAvatar["size"];
  shape?: SuperAvatar["shape"];
  icon?: SuperAvatar["icon"];
  fallback?: SuperAvatar["fallback"];
};

type SuperCardAttributes = {
  variant?: SuperCard["variant"];
  size?: SuperCard["size"];
  hoverable?: SuperCard["hoverable"];
  clickable?: SuperCard["clickable"];
  "aria-label"?: SuperCard["accessibleLabel"];
};

type SuperCardEvents = {
  "onsuper-card-click"?: CustomEventHandler<SuperCardClickDetail>;
};

type SuperDividerAttributes = {
  direction?: SuperDivider["direction"];
  "content-position"?: SuperDivider["contentPosition"];
  variant?: SuperDivider["variant"];
  color?: SuperDivider["color"];
};

type SuperSpaceAttributes = {
  direction?: SuperSpace["direction"];
  size?: SuperSpace["size"];
  wrap?: SuperSpace["wrap"];
  align?: SuperSpace["align"];
  fill?: SuperSpace["fill"];
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

type SuperDatePickerAttributes = {
  value?: SuperDatePicker["value"];
  mode?: SuperDatePicker["mode"];
  size?: SuperDatePicker["size"];
  validation?: SuperDatePicker["validation"];
  disabled?: SuperDatePicker["disabled"];
  clearable?: SuperDatePicker["clearable"];
  open?: SuperDatePicker["open"];
  name?: SuperDatePicker["name"];
  placeholder?: SuperDatePicker["placeholder"];
  "start-placeholder"?: SuperDatePicker["startPlaceholder"];
  "end-placeholder"?: SuperDatePicker["endPlaceholder"];
  min?: SuperDatePicker["min"];
  max?: SuperDatePicker["max"];
  "first-day-of-week"?: SuperDatePicker["firstDayOfWeek"] | `${number}`;
  locale?: SuperDatePicker["locale"];
  "helper-text"?: SuperDatePicker["helperText"];
  "today-label"?: SuperDatePicker["todayLabel"];
  "clear-label"?: SuperDatePicker["clearLabel"];
  "prev-month-label"?: SuperDatePicker["prevMonthLabel"];
  "next-month-label"?: SuperDatePicker["nextMonthLabel"];
  "prev-year-label"?: SuperDatePicker["prevYearLabel"];
  "next-year-label"?: SuperDatePicker["nextYearLabel"];
  disabledDate?: SuperDatePicker["disabledDate"];
  shortcuts?: SuperDatePicker["shortcuts"];
};

type SuperDatePickerEvents = {
  "onsuper-date-picker-change"?: CustomEventHandler<
    SuperDatePickerChangeDetail
  >;
  "onsuper-date-picker-clear"?: CustomEventHandler<
    SuperDatePickerClearDetail
  >;
  "onsuper-date-picker-open-change"?: CustomEventHandler<
    SuperDatePickerOpenChangeDetail
  >;
};

type SuperTimePickerAttributes = {
  value?: SuperTimePicker["value"];
  range?: SuperTimePicker["range"];
  format?: SuperTimePicker["format"];
  size?: SuperTimePicker["size"];
  validation?: SuperTimePicker["validation"];
  disabled?: SuperTimePicker["disabled"];
  clearable?: SuperTimePicker["clearable"];
  open?: SuperTimePicker["open"];
  name?: SuperTimePicker["name"];
  placeholder?: SuperTimePicker["placeholder"];
  "start-placeholder"?: SuperTimePicker["startPlaceholder"];
  "end-placeholder"?: SuperTimePicker["endPlaceholder"];
  "hour-step"?: SuperTimePicker["hourStep"] | `${number}`;
  "minute-step"?: SuperTimePicker["minuteStep"] | `${number}`;
  "second-step"?: SuperTimePicker["secondStep"] | `${number}`;
  "helper-text"?: SuperTimePicker["helperText"];
  "clear-label"?: SuperTimePicker["clearLabel"];
  "confirm-label"?: SuperTimePicker["confirmLabel"];
  "am-label"?: SuperTimePicker["amLabel"];
  "pm-label"?: SuperTimePicker["pmLabel"];
  "start-label"?: SuperTimePicker["startLabel"];
  "end-label"?: SuperTimePicker["endLabel"];
  shortcuts?: SuperTimePicker["shortcuts"];
};

type SuperTimePickerEvents = {
  "onsuper-time-picker-change"?: CustomEventHandler<
    SuperTimePickerChangeDetail
  >;
  "onsuper-time-picker-clear"?: CustomEventHandler<
    SuperTimePickerClearDetail
  >;
  "onsuper-time-picker-open-change"?: CustomEventHandler<
    SuperTimePickerOpenChangeDetail
  >;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": CustomElementProps<SuperButton, SuperButtonAttributes>;
      "super-avatar": CustomElementProps<SuperAvatar, SuperAvatarAttributes>;
      "super-badge": CustomElementProps<SuperBadge, SuperBadgeAttributes>;
      "super-card": CustomElementProps<
        SuperCard,
        SuperCardAttributes,
        SuperCardEvents
      >;
      "super-divider": CustomElementProps<
        SuperDivider,
        SuperDividerAttributes
      >;
      "super-space": CustomElementProps<SuperSpace, SuperSpaceAttributes>;
      "super-tag": CustomElementProps<
        SuperTag,
        SuperTagAttributes,
        SuperTagEvents
      >;
      "super-checkbox": CustomElementProps<
        SuperCheckbox,
        SuperCheckboxAttributes,
        SuperCheckboxEvents
      >;
      "super-date-picker": CustomElementProps<
        SuperDatePicker,
        SuperDatePickerAttributes,
        SuperDatePickerEvents
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
      "super-time-picker": CustomElementProps<
        SuperTimePicker,
        SuperTimePickerAttributes,
        SuperTimePickerEvents
      >;
    }
  }
}
