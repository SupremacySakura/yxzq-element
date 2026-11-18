import type { DetailedHTMLProps, HTMLAttributes } from "react";
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
import type {
  SuperSlider,
  SuperSliderChangeDetail,
} from "yxzq-element/slider";
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

type SuperTooltipAttributes = {
  content?: SuperTooltip["content"];
  placement?: SuperTooltip["placement"];
  trigger?: SuperTooltip["trigger"];
  disabled?: SuperTooltip["disabled"];
  open?: SuperTooltip["open"];
  delay?: SuperTooltip["delay"] | `${number}`;
  offset?: SuperTooltip["offset"] | `${number}`;
  "max-width"?: SuperTooltip["maxWidth"] | `${number}`;
  "show-arrow"?: SuperTooltip["showArrow"];
  interactive?: SuperTooltip["interactive"];
};

type SuperTooltipEvents = {
  "onsuper-tooltip-open-change"?: CustomEventHandler<
    SuperTooltipOpenChangeDetail
  >;
};

type SuperProgressAttributes = {
  value?: SuperProgress["value"] | `${number}`;
  max?: SuperProgress["max"] | `${number}`;
  variant?: SuperProgress["variant"];
  status?: SuperProgress["status"];
  size?: SuperProgress["size"];
  "show-text"?: SuperProgress["showText"];
  format?: SuperProgress["format"];
  indeterminate?: SuperProgress["indeterminate"];
  striped?: SuperProgress["striped"];
  "aria-label"?: SuperProgress["accessibleLabel"];
};

type SuperEmptyAttributes = {
  description?: SuperEmpty["description"];
  size?: SuperEmpty["size"];
  image?: SuperEmpty["image"];
};

type SuperSkeletonAttributes = {
  variant?: SuperSkeleton["variant"];
  rows?: SuperSkeleton["rows"] | `${number}`;
  animated?: SuperSkeleton["animated"];
  loading?: SuperSkeleton["loading"];
  width?: SuperSkeleton["width"];
  height?: SuperSkeleton["height"];
  "loading-label"?: SuperSkeleton["loadingLabel"];
};

type SuperSliderAttributes = {
  value?: SuperSlider["value"];
  min?: SuperSlider["min"] | `${number}`;
  max?: SuperSlider["max"] | `${number}`;
  step?: SuperSlider["step"] | `${number}`;
  range?: SuperSlider["range"];
  disabled?: SuperSlider["disabled"];
  size?: SuperSlider["size"];
  validation?: SuperSlider["validation"];
  "show-tooltip"?: SuperSlider["showTooltip"];
  vertical?: SuperSlider["vertical"];
  "aria-label"?: SuperSlider["accessibleLabel"];
  "start-label"?: SuperSlider["startLabel"];
  "end-label"?: SuperSlider["endLabel"];
};

type SuperSliderEvents = {
  "onsuper-slider-change"?: CustomEventHandler<SuperSliderChangeDetail>;
};

type SuperRateAttributes = {
  value?: SuperRate["value"] | `${number}`;
  max?: SuperRate["max"] | `${number}`;
  "allow-half"?: SuperRate["allowHalf"];
  readonly?: SuperRate["readonly"];
  disabled?: SuperRate["disabled"];
  size?: SuperRate["size"];
  validation?: SuperRate["validation"];
  clearable?: SuperRate["clearable"];
  "aria-label"?: SuperRate["accessibleLabel"];
  "clear-label"?: SuperRate["clearLabel"];
};

type SuperRateEvents = {
  "onsuper-rate-change"?: CustomEventHandler<SuperRateChangeDetail>;
};

type SuperUploadAttributes = {
  accept?: SuperUpload["accept"];
  multiple?: SuperUpload["multiple"];
  disabled?: SuperUpload["disabled"];
  "max-count"?: SuperUpload["maxCount"] | `${number}`;
  "max-size"?: SuperUpload["maxSize"] | `${number}`;
  "auto-upload"?: SuperUpload["autoUpload"];
  size?: SuperUpload["size"];
  validation?: SuperUpload["validation"];
  "prompt-text"?: SuperUpload["promptText"];
  "hint-text"?: SuperUpload["hintText"];
  "remove-label"?: SuperUpload["removeLabel"];
  "aria-label"?: SuperUpload["accessibleLabel"];
};

type SuperUploadEvents = {
  "onsuper-upload-change"?: CustomEventHandler<SuperUploadChangeDetail>;
  "onsuper-upload-submit"?: CustomEventHandler<SuperUploadSubmitDetail>;
  "onsuper-upload-remove"?: CustomEventHandler<SuperUploadRemoveDetail>;
  "onsuper-upload-exceed"?: CustomEventHandler<SuperUploadExceedDetail>;
};

type SuperTabsAttributes = {
  active?: SuperTabs["active"];
  orientation?: SuperTabs["orientation"];
  variant?: SuperTabs["variant"];
  size?: SuperTabs["size"];
  closable?: SuperTabs["closable"];
  "close-label"?: SuperTabs["closeLabel"];
  "aria-label"?: SuperTabs["accessibleLabel"];
  items?: SuperTabs["items"];
};

type SuperTabsEvents = {
  "onsuper-tabs-change"?: CustomEventHandler<SuperTabsChangeDetail>;
  "onsuper-tabs-close"?: CustomEventHandler<SuperTabsCloseDetail>;
};

type SuperBreadcrumbAttributes = {
  separator?: SuperBreadcrumb["separator"];
  size?: SuperBreadcrumb["size"];
  "max-items"?: SuperBreadcrumb["maxItems"] | `${number}`;
  "aria-label"?: SuperBreadcrumb["accessibleLabel"];
  items?: SuperBreadcrumb["items"];
};

type SuperPaginationAttributes = {
  total?: SuperPagination["total"] | `${number}`;
  page?: SuperPagination["page"] | `${number}`;
  "page-size"?: SuperPagination["pageSize"] | `${number}`;
  pageSizes?: SuperPagination["pageSizes"];
  size?: SuperPagination["size"];
  disabled?: SuperPagination["disabled"];
  "show-total"?: SuperPagination["showTotal"];
  "show-jumper"?: SuperPagination["showJumper"];
  simple?: SuperPagination["simple"];
  "aria-label"?: SuperPagination["accessibleLabel"];
  "prev-label"?: SuperPagination["prevLabel"];
  "next-label"?: SuperPagination["nextLabel"];
  "page-label"?: SuperPagination["pageLabel"];
  "jumper-label"?: SuperPagination["jumperLabel"];
  "total-label"?: SuperPagination["totalLabel"];
  "items-label"?: SuperPagination["itemsLabel"];
  "page-suffix-label"?: SuperPagination["pageSuffixLabel"];
  "page-size-label"?: SuperPagination["pageSizeLabel"];
};

type SuperPaginationEvents = {
  "onsuper-pagination-change"?: CustomEventHandler<
    SuperPaginationChangeDetail
  >;
};

type SuperDialogAttributes = {
  open?: SuperDialog["open"];
  title?: SuperDialog["title"];
  width?: SuperDialog["width"];
  size?: SuperDialog["size"];
  closable?: SuperDialog["closable"];
  "mask-closable"?: SuperDialog["maskClosable"];
  "close-on-escape"?: SuperDialog["closeOnEscape"];
  "close-label"?: SuperDialog["closeLabel"];
  "show-footer"?: SuperDialog["showFooter"];
  "confirm-text"?: SuperDialog["confirmText"];
  "cancel-text"?: SuperDialog["cancelText"];
  loading?: SuperDialog["loading"];
};

type SuperDialogEvents = {
  "onsuper-dialog-before-close"?: CustomEventHandler<
    SuperDialogBeforeCloseDetail
  >;
  "onsuper-dialog-close"?: CustomEventHandler<SuperDialogCloseDetail>;
};

type SuperDrawerAttributes = {
  open?: SuperDrawer["open"];
  title?: SuperDrawer["title"];
  placement?: SuperDrawer["placement"];
  size?: SuperDrawer["size"] | `${number}`;
  closable?: SuperDrawer["closable"];
  "mask-closable"?: SuperDrawer["maskClosable"];
  "close-on-escape"?: SuperDrawer["closeOnEscape"];
  "close-label"?: SuperDrawer["closeLabel"];
  "show-footer"?: SuperDrawer["showFooter"];
  "confirm-text"?: SuperDrawer["confirmText"];
  "cancel-text"?: SuperDrawer["cancelText"];
};

type SuperDrawerEvents = {
  "onsuper-drawer-before-close"?: CustomEventHandler<
    SuperDrawerBeforeCloseDetail
  >;
  "onsuper-drawer-close"?: CustomEventHandler<SuperDrawerCloseDetail>;
};

type SuperPopoverAttributes = {
  open?: SuperPopover["open"];
  placement?: SuperPopover["placement"];
  trigger?: SuperPopover["trigger"];
  title?: SuperPopover["title"];
  content?: SuperPopover["content"];
  disabled?: SuperPopover["disabled"];
  arrow?: SuperPopover["arrow"];
  offset?: SuperPopover["offset"] | `${number}`;
  width?: SuperPopover["width"] | `${number}`;
  "close-on-outside-click"?: SuperPopover["closeOnOutsideClick"];
  "close-on-escape"?: SuperPopover["closeOnEscape"];
};

type SuperPopoverEvents = {
  "onsuper-popover-open-change"?: CustomEventHandler<
    SuperPopoverOpenChangeDetail
  >;
};

type SuperMessageAttributes = {
  open?: SuperMessage["open"];
  message?: SuperMessage["message"];
  type?: SuperMessage["type"];
  duration?: SuperMessage["duration"] | `${number}`;
  closable?: SuperMessage["closable"];
  "close-label"?: SuperMessage["closeLabel"];
  "show-icon"?: SuperMessage["showIcon"];
};

type SuperMessageEvents = {
  "onsuper-message-close"?: CustomEventHandler<SuperMessageCloseDetail>;
};

type SuperPopconfirmAttributes = {
  open?: SuperPopconfirm["open"];
  title?: SuperPopconfirm["title"];
  content?: SuperPopconfirm["content"];
  placement?: SuperPopconfirm["placement"];
  trigger?: SuperPopconfirm["trigger"];
  "confirm-text"?: SuperPopconfirm["confirmText"];
  "cancel-text"?: SuperPopconfirm["cancelText"];
  "confirm-loading"?: SuperPopconfirm["confirmLoading"];
  disabled?: SuperPopconfirm["disabled"];
  icon?: SuperPopconfirm["icon"];
  "close-on-outside-click"?: SuperPopconfirm["closeOnOutsideClick"];
  "close-on-escape"?: SuperPopconfirm["closeOnEscape"];
};

type SuperPopconfirmEvents = {
  "onsuper-popconfirm-confirm"?: CustomEventHandler<
    SuperPopconfirmConfirmDetail
  >;
  "onsuper-popconfirm-cancel"?: CustomEventHandler<
    SuperPopconfirmCancelDetail
  >;
  "onsuper-popconfirm-open-change"?: CustomEventHandler<
    SuperPopconfirmOpenChangeDetail
  >;
};

type SuperNotificationAttributes = {
  open?: SuperNotification["open"];
  title?: SuperNotification["title"];
  message?: SuperNotification["message"];
  type?: SuperNotification["type"];
  placement?: SuperNotification["placement"];
  duration?: SuperNotification["duration"] | `${number}`;
  closable?: SuperNotification["closable"];
  "close-label"?: SuperNotification["closeLabel"];
  "show-icon"?: SuperNotification["showIcon"];
};

type SuperNotificationEvents = {
  "onsuper-notification-close"?: CustomEventHandler<
    SuperNotificationCloseDetail
  >;
};

type SuperDropdownAttributes = {
  open?: SuperDropdown["open"];
  items?: SuperDropdown["items"];
  trigger?: SuperDropdown["trigger"];
  placement?: SuperDropdown["placement"];
  "close-on-select"?: SuperDropdown["closeOnSelect"];
  "close-on-outside-click"?: SuperDropdown["closeOnOutsideClick"];
  "close-on-escape"?: SuperDropdown["closeOnEscape"];
  disabled?: SuperDropdown["disabled"];
  size?: SuperDropdown["size"];
};

type SuperDropdownEvents = {
  "onsuper-dropdown-select"?: CustomEventHandler<SuperDropdownSelectDetail>;
  "onsuper-dropdown-open-change"?: CustomEventHandler<
    SuperDropdownOpenChangeDetail
  >;
};

type SuperAutocompleteAttributes = {
  value?: SuperAutocomplete["value"];
  items?: SuperAutocomplete["items"];
  open?: SuperAutocomplete["open"];
  placeholder?: SuperAutocomplete["placeholder"];
  disabled?: SuperAutocomplete["disabled"];
  size?: SuperAutocomplete["size"];
  validation?: SuperAutocomplete["validation"];
  clearable?: SuperAutocomplete["clearable"];
  loading?: SuperAutocomplete["loading"];
  "empty-text"?: SuperAutocomplete["emptyText"];
  "clear-label"?: SuperAutocomplete["clearLabel"];
  "loading-text"?: SuperAutocomplete["loadingText"];
  "min-chars"?: SuperAutocomplete["minChars"] | `${number}`;
  filter?: SuperAutocomplete["filter"];
  "aria-label"?: SuperAutocomplete["accessibleLabel"];
};

type SuperAutocompleteEvents = {
  "onsuper-autocomplete-input"?: CustomEventHandler<
    SuperAutocompleteInputDetail
  >;
  "onsuper-autocomplete-change"?: CustomEventHandler<
    SuperAutocompleteChangeDetail
  >;
  "onsuper-autocomplete-clear"?: CustomEventHandler<
    SuperAutocompleteClearDetail
  >;
  "onsuper-autocomplete-open-change"?: CustomEventHandler<
    SuperAutocompleteOpenChangeDetail
  >;
};

type SuperMenuAttributes = {
  items?: SuperMenu["items"];
  active?: SuperMenu["active"];
  orientation?: SuperMenu["orientation"];
  mode?: SuperMenu["mode"];
  collapsed?: SuperMenu["collapsed"];
  size?: SuperMenu["size"];
  "aria-label"?: SuperMenu["accessibleLabel"];
};

type SuperMenuEvents = {
  "onsuper-menu-select"?: CustomEventHandler<SuperMenuSelectDetail>;
  "onsuper-menu-open-change"?: CustomEventHandler<SuperMenuOpenChangeDetail>;
};

type SuperStepsAttributes = {
  items?: SuperSteps["items"];
  active?: SuperSteps["active"] | `${number}`;
  direction?: SuperSteps["direction"];
  status?: SuperSteps["status"];
  clickable?: SuperSteps["clickable"];
  size?: SuperSteps["size"];
  "aria-label"?: SuperSteps["accessibleLabel"];
};

type SuperStepsEvents = {
  "onsuper-steps-change"?: CustomEventHandler<SuperStepsChangeDetail>;
};

type SuperTableAttributes = {
  columns?: SuperTable["columns"];
  rows?: SuperTable["rows"];
  "row-key"?: SuperTable["rowKey"];
  selectable?: SuperTable["selectable"];
  selectedKeys?: SuperTable["selectedKeys"];
  "sort-key"?: SuperTable["sortKey"];
  "sort-direction"?: SuperTable["sortDirection"];
  loading?: SuperTable["loading"];
  "empty-text"?: SuperTable["emptyText"];
  size?: SuperTable["size"];
  striped?: SuperTable["striped"];
  bordered?: SuperTable["bordered"];
  "show-header"?: SuperTable["showHeader"];
  "sticky-header"?: SuperTable["stickyHeader"];
  "select-all-label"?: SuperTable["selectAllLabel"];
  "select-row-label"?: SuperTable["selectRowLabel"];
  "loading-text"?: SuperTable["loadingText"];
  "aria-label"?: SuperTable["accessibleLabel"];
};

type SuperTableEvents = {
  "onsuper-table-sort"?: CustomEventHandler<SuperTableSortDetail>;
  "onsuper-table-select"?: CustomEventHandler<SuperTableSelectDetail>;
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
      "super-breadcrumb": CustomElementProps<
        SuperBreadcrumb,
        SuperBreadcrumbAttributes
      >;
      "super-divider": CustomElementProps<
        SuperDivider,
        SuperDividerAttributes
      >;
      "super-dialog": CustomElementProps<
        SuperDialog,
        SuperDialogAttributes,
        SuperDialogEvents
      >;
      "super-popconfirm": CustomElementProps<
        SuperPopconfirm,
        SuperPopconfirmAttributes,
        SuperPopconfirmEvents
      >;
      "super-notification": CustomElementProps<
        SuperNotification,
        SuperNotificationAttributes,
        SuperNotificationEvents
      >;
      "super-dropdown": CustomElementProps<
        SuperDropdown,
        SuperDropdownAttributes,
        SuperDropdownEvents
      >;
      "super-autocomplete": CustomElementProps<
        SuperAutocomplete,
        SuperAutocompleteAttributes,
        SuperAutocompleteEvents
      >;
      "super-menu": CustomElementProps<
        SuperMenu,
        SuperMenuAttributes,
        SuperMenuEvents
      >;
      "super-steps": CustomElementProps<
        SuperSteps,
        SuperStepsAttributes,
        SuperStepsEvents
      >;
      "super-table": CustomElementProps<
        SuperTable,
        SuperTableAttributes,
        SuperTableEvents
      >;
      "super-drawer": CustomElementProps<
        SuperDrawer,
        SuperDrawerAttributes,
        SuperDrawerEvents
      >;
      "super-empty": CustomElementProps<SuperEmpty, SuperEmptyAttributes>;
      "super-progress": CustomElementProps<
        SuperProgress,
        SuperProgressAttributes
      >;
      "super-skeleton": CustomElementProps<
        SuperSkeleton,
        SuperSkeletonAttributes
      >;
      "super-pagination": CustomElementProps<
        SuperPagination,
        SuperPaginationAttributes,
        SuperPaginationEvents
      >;
      "super-popover": CustomElementProps<
        SuperPopover,
        SuperPopoverAttributes,
        SuperPopoverEvents
      >;
      "super-message": CustomElementProps<
        SuperMessage,
        SuperMessageAttributes,
        SuperMessageEvents
      >;
      "super-rate": CustomElementProps<
        SuperRate,
        SuperRateAttributes,
        SuperRateEvents
      >;
      "super-slider": CustomElementProps<
        SuperSlider,
        SuperSliderAttributes,
        SuperSliderEvents
      >;
      "super-space": CustomElementProps<SuperSpace, SuperSpaceAttributes>;
      "super-tag": CustomElementProps<
        SuperTag,
        SuperTagAttributes,
        SuperTagEvents
      >;
      "super-tabs": CustomElementProps<
        SuperTabs,
        SuperTabsAttributes,
        SuperTabsEvents
      >;
      "super-tooltip": CustomElementProps<
        SuperTooltip,
        SuperTooltipAttributes,
        SuperTooltipEvents
      >;
      "super-upload": CustomElementProps<
        SuperUpload,
        SuperUploadAttributes,
        SuperUploadEvents
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
