import type { EmitFn, HTMLAttributes, PublicProps } from "vue";
import type { SuperButton } from "yxzq-element/button";
import type { SuperAvatar } from "yxzq-element/avatar";
import type {
  SuperAutocomplete,
  SuperAutocompleteChangeDetail,
  SuperAutocompleteClearDetail,
  SuperAutocompleteInputDetail,
  SuperAutocompleteOpenChangeDetail,
} from "yxzq-element/autocomplete";
import type { SuperBadge } from "yxzq-element/badge";
import type { SuperCard, SuperCardClickDetail } from "yxzq-element/card";
import type { SuperBreadcrumb } from "yxzq-element/breadcrumb";
import type {
  SuperDialog,
  SuperDialogBeforeCloseDetail,
  SuperDialogCloseDetail,
} from "yxzq-element/dialog";
import type { SuperDivider } from "yxzq-element/divider";
import type {
  SuperDrawer,
  SuperDrawerBeforeCloseDetail,
  SuperDrawerCloseDetail,
} from "yxzq-element/drawer";
import type {
  SuperDropdown,
  SuperDropdownOpenChangeDetail,
  SuperDropdownSelectDetail,
} from "yxzq-element/dropdown";
import type { SuperEmpty } from "yxzq-element/empty";
import type {
  SuperMessage,
  SuperMessageCloseDetail,
} from "yxzq-element/message";
import type {
  SuperMenu,
  SuperMenuOpenChangeDetail,
  SuperMenuSelectDetail,
} from "yxzq-element/menu";
import type {
  SuperNotification,
  SuperNotificationCloseDetail,
} from "yxzq-element/notification";
import type {
  SuperPagination,
  SuperPaginationChangeDetail,
} from "yxzq-element/pagination";
import type {
  SuperPopover,
  SuperPopoverOpenChangeDetail,
} from "yxzq-element/popover";
import type {
  SuperPopconfirm,
  SuperPopconfirmCancelDetail,
  SuperPopconfirmConfirmDetail,
  SuperPopconfirmOpenChangeDetail,
} from "yxzq-element/popconfirm";
import type { SuperProgress } from "yxzq-element/progress";
import type { SuperRate, SuperRateChangeDetail } from "yxzq-element/rate";
import type { SuperSkeleton } from "yxzq-element/skeleton";
import type { SuperSlider, SuperSliderChangeDetail } from "yxzq-element/slider";
import type { SuperSpace } from "yxzq-element/space";
import type { SuperSteps, SuperStepsChangeDetail } from "yxzq-element/steps";
import type {
  SuperTable,
  SuperTableSelectDetail,
  SuperTableSortDetail,
} from "yxzq-element/table";
import type { SuperTag, SuperTagCloseDetail } from "yxzq-element/tag";
import type {
  SuperTabs,
  SuperTabsChangeDetail,
  SuperTabsCloseDetail,
} from "yxzq-element/tabs";
import type {
  SuperTooltip,
  SuperTooltipOpenChangeDetail,
} from "yxzq-element/tooltip";
import type {
  SuperUpload,
  SuperUploadChangeDetail,
  SuperUploadExceedDetail,
  SuperUploadRemoveDetail,
  SuperUploadSubmitDetail,
} from "yxzq-element/upload";
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

type DividerProperties =
  | "direction"
  | "contentPosition"
  | "variant"
  | "color"
  | "size";

type SpaceProperties = "direction" | "size" | "wrap" | "align" | "fill";

type TooltipProperties =
  | "content"
  | "placement"
  | "trigger"
  | "disabled"
  | "open"
  | "delay"
  | "offset"
  | "maxWidth"
  | "showArrow"
  | "interactive"
  | "size";

type TooltipEvents = {
  "super-tooltip-open-change": CustomEvent<SuperTooltipOpenChangeDetail>;
};

type ProgressProperties =
  | "value"
  | "max"
  | "variant"
  | "status"
  | "size"
  | "showText"
  | "format"
  | "indeterminate"
  | "striped";

type ProgressAttributes = {
  "aria-label"?: SuperProgress["accessibleLabel"];
};

type EmptyProperties = "description" | "size" | "image";

type SkeletonProperties =
  | "variant"
  | "rows"
  | "animated"
  | "loading"
  | "width"
  | "height"
  | "loadingLabel";

type SliderProperties =
  | "value"
  | "min"
  | "max"
  | "step"
  | "range"
  | "disabled"
  | "size"
  | "validation"
  | "showTooltip"
  | "vertical"
  | "startLabel"
  | "endLabel";

type SliderEvents = {
  "super-slider-change": CustomEvent<SuperSliderChangeDetail>;
};

type RateProperties =
  | "value"
  | "max"
  | "allowHalf"
  | "readonly"
  | "disabled"
  | "size"
  | "validation"
  | "clearable"
  | "clearLabel";

type RateEvents = {
  "super-rate-change": CustomEvent<SuperRateChangeDetail>;
};

type UploadProperties =
  | "accept"
  | "multiple"
  | "disabled"
  | "maxCount"
  | "maxSize"
  | "autoUpload"
  | "fileList"
  | "size"
  | "validation"
  | "promptText"
  | "hintText"
  | "removeLabel";

type UploadEvents = {
  "super-upload-change": CustomEvent<SuperUploadChangeDetail>;
  "super-upload-submit": CustomEvent<SuperUploadSubmitDetail>;
  "super-upload-remove": CustomEvent<SuperUploadRemoveDetail>;
  "super-upload-exceed": CustomEvent<SuperUploadExceedDetail>;
};

type TabsProperties =
  | "active"
  | "orientation"
  | "variant"
  | "size"
  | "closable"
  | "closeLabel"
  | "items";

type TabsEvents = {
  "super-tabs-change": CustomEvent<SuperTabsChangeDetail>;
  "super-tabs-close": CustomEvent<SuperTabsCloseDetail>;
};

type BreadcrumbProperties =
  | "separator"
  | "size"
  | "maxItems"
  | "items";

type PaginationProperties =
  | "total"
  | "page"
  | "pageSize"
  | "pageSizes"
  | "size"
  | "disabled"
  | "showTotal"
  | "showJumper"
  | "simple"
  | "prevLabel"
  | "nextLabel"
  | "pageLabel"
  | "jumperLabel"
  | "totalLabel"
  | "itemsLabel"
  | "pageSuffixLabel"
  | "pageSizeLabel";

type PaginationEvents = {
  "super-pagination-change": CustomEvent<SuperPaginationChangeDetail>;
};

type DialogProperties =
  | "open"
  | "title"
  | "width"
  | "size"
  | "closable"
  | "maskClosable"
  | "closeOnEscape"
  | "closeLabel"
  | "showFooter"
  | "confirmText"
  | "cancelText"
  | "loading";

type DialogEvents = {
  "super-dialog-before-close": CustomEvent<SuperDialogBeforeCloseDetail>;
  "super-dialog-close": CustomEvent<SuperDialogCloseDetail>;
  "super-dialog-confirm": CustomEvent<SuperDialogCloseDetail>;
  "super-dialog-cancel": CustomEvent<SuperDialogCloseDetail>;
};

type DrawerProperties =
  | "open"
  | "title"
  | "placement"
  | "size"
  | "closable"
  | "maskClosable"
  | "closeOnEscape"
  | "closeLabel"
  | "showFooter"
  | "confirmText"
  | "cancelText";

type DrawerEvents = {
  "super-drawer-before-close": CustomEvent<SuperDrawerBeforeCloseDetail>;
  "super-drawer-close": CustomEvent<SuperDrawerCloseDetail>;
  "super-drawer-confirm": CustomEvent<SuperDrawerCloseDetail>;
  "super-drawer-cancel": CustomEvent<SuperDrawerCloseDetail>;
};

type PopoverProperties =
  | "open"
  | "placement"
  | "trigger"
  | "title"
  | "content"
  | "disabled"
  | "arrow"
  | "offset"
  | "width"
  | "closeOnOutsideClick"
  | "closeOnEscape"
  | "size";

type PopoverEvents = {
  "super-popover-open-change": CustomEvent<SuperPopoverOpenChangeDetail>;
};

type MessageProperties =
  | "open"
  | "message"
  | "type"
  | "duration"
  | "closable"
  | "closeLabel"
  | "showIcon"
  | "size";

type MessageEvents = {
  "super-message-close": CustomEvent<SuperMessageCloseDetail>;
};

type PopconfirmProperties =
  | "open"
  | "title"
  | "content"
  | "placement"
  | "trigger"
  | "confirmText"
  | "cancelText"
  | "confirmLoading"
  | "disabled"
  | "icon"
  | "closeOnOutsideClick"
  | "closeOnEscape"
  | "size";

type PopconfirmEvents = {
  "super-popconfirm-confirm": CustomEvent<SuperPopconfirmConfirmDetail>;
  "super-popconfirm-cancel": CustomEvent<SuperPopconfirmCancelDetail>;
  "super-popconfirm-open-change": CustomEvent<SuperPopconfirmOpenChangeDetail>;
};

type NotificationProperties =
  | "open"
  | "title"
  | "message"
  | "type"
  | "placement"
  | "duration"
  | "closable"
  | "closeLabel"
  | "showIcon"
  | "size";

type NotificationEvents = {
  "super-notification-close": CustomEvent<SuperNotificationCloseDetail>;
};

type DropdownProperties =
  | "open"
  | "items"
  | "trigger"
  | "placement"
  | "closeOnSelect"
  | "closeOnOutsideClick"
  | "closeOnEscape"
  | "disabled"
  | "size";

type DropdownEvents = {
  "super-dropdown-select": CustomEvent<SuperDropdownSelectDetail>;
  "super-dropdown-open-change": CustomEvent<SuperDropdownOpenChangeDetail>;
};

type AutocompleteProperties =
  | "value"
  | "items"
  | "open"
  | "placeholder"
  | "disabled"
  | "size"
  | "validation"
  | "clearable"
  | "loading"
  | "emptyText"
  | "clearLabel"
  | "loadingText"
  | "minChars"
  | "filter";

type AutocompleteEvents = {
  "super-autocomplete-input": CustomEvent<SuperAutocompleteInputDetail>;
  "super-autocomplete-change": CustomEvent<SuperAutocompleteChangeDetail>;
  "super-autocomplete-clear": CustomEvent<SuperAutocompleteClearDetail>;
  "super-autocomplete-open-change": CustomEvent<SuperAutocompleteOpenChangeDetail>;
};

type MenuProperties =
  | "items"
  | "active"
  | "orientation"
  | "mode"
  | "collapsed"
  | "size";

type MenuEvents = {
  "super-menu-select": CustomEvent<SuperMenuSelectDetail>;
  "super-menu-open-change": CustomEvent<SuperMenuOpenChangeDetail>;
};

type StepsProperties =
  | "items"
  | "active"
  | "direction"
  | "status"
  | "clickable"
  | "size";

type StepsEvents = {
  "super-steps-change": CustomEvent<SuperStepsChangeDetail>;
};

type TableProperties =
  | "columns"
  | "rows"
  | "rowKey"
  | "selectable"
  | "selectedKeys"
  | "sortKey"
  | "sortDirection"
  | "loading"
  | "emptyText"
  | "size"
  | "striped"
  | "bordered"
  | "showHeader"
  | "stickyHeader"
  | "selectAllLabel"
  | "selectRowLabel"
  | "loadingText";

type TableEvents = {
  "super-table-sort": CustomEvent<SuperTableSortDetail>;
  "super-table-select": CustomEvent<SuperTableSelectDetail>;
};

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
    "super-breadcrumb": DefineCustomElement<
      SuperBreadcrumb,
      BreadcrumbProperties
    >;
    "super-dialog": DefineCustomElement<
      SuperDialog,
      DialogProperties,
      DialogEvents
    >;
    "super-drawer": DefineCustomElement<
      SuperDrawer,
      DrawerProperties,
      DrawerEvents
    >;
    "super-popconfirm": DefineCustomElement<
      SuperPopconfirm,
      PopconfirmProperties,
      PopconfirmEvents
    >;
    "super-notification": DefineCustomElement<
      SuperNotification,
      NotificationProperties,
      NotificationEvents
    >;
    "super-dropdown": DefineCustomElement<
      SuperDropdown,
      DropdownProperties,
      DropdownEvents
    >;
    "super-autocomplete": DefineCustomElement<
      SuperAutocomplete,
      AutocompleteProperties,
      AutocompleteEvents
    >;
    "super-menu": DefineCustomElement<SuperMenu, MenuProperties, MenuEvents>;
    "super-steps": DefineCustomElement<SuperSteps, StepsProperties, StepsEvents>;
    "super-table": DefineCustomElement<SuperTable, TableProperties, TableEvents>;
    "super-empty": DefineCustomElement<SuperEmpty, EmptyProperties>;
    "super-progress": DefineCustomElement<
      SuperProgress,
      ProgressProperties,
      Record<never, never>,
      ProgressAttributes
    >;
    "super-skeleton": DefineCustomElement<SuperSkeleton, SkeletonProperties>;
    "super-pagination": DefineCustomElement<
      SuperPagination,
      PaginationProperties,
      PaginationEvents
    >;
    "super-popover": DefineCustomElement<
      SuperPopover,
      PopoverProperties,
      PopoverEvents
    >;
    "super-message": DefineCustomElement<
      SuperMessage,
      MessageProperties,
      MessageEvents
    >;
    "super-rate": DefineCustomElement<SuperRate, RateProperties, RateEvents>;
    "super-slider": DefineCustomElement<
      SuperSlider,
      SliderProperties,
      SliderEvents
    >;
    "super-space": DefineCustomElement<SuperSpace, SpaceProperties>;
    "super-tag": DefineCustomElement<SuperTag, TagProperties, TagEvents>;
    "super-tabs": DefineCustomElement<SuperTabs, TabsProperties, TabsEvents>;
    "super-tooltip": DefineCustomElement<
      SuperTooltip,
      TooltipProperties,
      TooltipEvents
    >;
    "super-upload": DefineCustomElement<
      SuperUpload,
      UploadProperties,
      UploadEvents
    >;
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
