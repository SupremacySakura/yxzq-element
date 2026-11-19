import type {
  ContractComponent,
  ContractEvent,
  ContractNode,
  ContractNodeChild,
} from "./types";

const text = (value: string): ContractNodeChild => value;

const buttonChild = (label: string): ContractNodeChild => ({
  tag: "super-button",
  attributes: { variant: "outline", size: "small" },
  children: [label],
});

const option = (value: string, label: string): ContractNode => ({
  tag: "option",
  attributes: { value },
  children: [label],
});

export const COMPONENTS: ContractComponent[] = [
  {
    tag: "super-autocomplete",
    name: "Autocomplete",
    mount: {
      attributes: { placeholder: "搜索城市", "aria-label": "城市" },
      properties: { items: ["北京", "上海", "广州"] },
    },
    parts: ["base"],
  },
  {
    tag: "super-avatar",
    name: "Avatar",
    mount: {
      attributes: { icon: "手", size: "small", "aria-label": "用户头像" },
    },
    parts: ["base"],
  },
  {
    tag: "super-badge",
    name: "Badge",
    mount: {
      attributes: { value: "12", status: "danger" },
      children: [{ tag: "span", children: ["消息"] }],
    },
    parts: ["base", "badge"],
  },
  {
    tag: "super-breadcrumb",
    name: "Breadcrumb",
    mount: {
      properties: {
        items: [
          { label: "首页", href: "#" },
          { label: "组件" },
          { label: "面包屑", current: true },
        ],
      },
    },
  },
  {
    tag: "super-button",
    name: "Button",
    mount: {
      attributes: { variant: "primary", size: "medium" },
      children: ["测试按钮"],
    },
    parts: ["base"],
  },
  {
    tag: "super-card",
    name: "Card",
    mount: {
      attributes: { variant: "outlined", size: "small" },
      children: [{ tag: "span", children: ["卡片内容"] }],
    },
    parts: ["base"],
  },
  {
    tag: "super-checkbox",
    name: "Checkbox",
    mount: {
      attributes: { checked: true, name: "contract-checkbox", value: "yes" },
      children: ["接收通知"],
    },
    parts: ["base"],
  },
  {
    tag: "super-date-picker",
    name: "DatePicker",
    mount: {
      attributes: { "aria-label": "日期" },
      properties: { value: "2026-11-19" },
    },
    parts: ["base"],
  },
  {
    tag: "super-dialog",
    name: "Dialog",
    mount: {
      properties: { title: "确认操作", open: false },
      children: ["对话框内容"],
    },
  },
  {
    tag: "super-divider",
    name: "Divider",
    mount: {
      attributes: { contentPosition: "left" },
      children: ["分割线"],
    },
    parts: ["base"],
  },
  {
    tag: "super-drawer",
    name: "Drawer",
    mount: {
      properties: { title: "筛选条件", open: false },
      children: ["抽屉内容"],
    },
  },
  {
    tag: "super-dropdown",
    name: "Dropdown",
    mount: {
      properties: {
        items: [
          { key: "edit", label: "编辑" },
          { key: "delete", label: "删除", danger: true },
        ],
      },
      children: [buttonChild("更多操作")],
    },
  },
  {
    tag: "super-empty",
    name: "Empty",
    mount: { attributes: { description: "暂无数据" } },
    parts: ["base"],
  },
  {
    tag: "super-form",
    name: "Form",
    mount: {
      properties: {
        schema: {
          fields: [
            {
              field: "name",
              label: "姓名",
              component: "super-input",
              props: { placeholder: "请输入姓名" },
            },
          ],
        },
        value: { name: "" },
      },
    },
  },
  {
    tag: "super-input",
    name: "Input",
    mount: {
      attributes: { placeholder: "请输入内容", "aria-label": "内容" },
      properties: { value: "草稿" },
    },
    parts: ["base"],
  },
  {
    tag: "super-menu",
    name: "Menu",
    mount: {
      properties: {
        active: "overview",
        items: [
          { key: "overview", label: "概览" },
          { key: "settings", label: "设置" },
        ],
      },
    },
  },
  {
    tag: "super-message",
    name: "Message",
    mount: {
      properties: { message: "保存成功", open: false },
    },
  },
  {
    tag: "super-notification",
    name: "Notification",
    mount: {
      properties: {
        title: "保存成功",
        message: "修改已同步",
        open: false,
      },
    },
  },
  {
    tag: "super-pagination",
    name: "Pagination",
    mount: {
      attributes: { "aria-label": "分页" },
      properties: { total: 120, page: 2, pageSize: 10, showTotal: true },
    },
  },
  {
    tag: "super-popconfirm",
    name: "Popconfirm",
    mount: {
      properties: { title: "确认删除？", content: "删除后不可恢复" },
      children: [buttonChild("删除")],
    },
  },
  {
    tag: "super-popover",
    name: "Popover",
    mount: {
      properties: { content: "弹出内容" },
      children: [buttonChild("打开浮层")],
    },
  },
  {
    tag: "super-progress",
    name: "Progress",
    mount: {
      attributes: { value: "62", "show-text": true, "aria-label": "完成度" },
    },
    parts: ["base", "bar"],
  },
  {
    tag: "super-radio",
    name: "Radio",
    mount: {
      attributes: {
        name: "contract-radio",
        value: "one",
        checked: true,
      },
      children: ["选项一"],
    },
    parts: ["base"],
  },
  {
    tag: "super-rate",
    name: "Rate",
    mount: {
      attributes: { "aria-label": "评分" },
      properties: { value: 3 },
    },
    parts: ["base"],
  },
  {
    tag: "super-select",
    name: "Select",
    mount: {
      attributes: {
        placeholder: "选择城市",
        "aria-label": "城市",
      },
      children: [
        {
          ...option("beijing", "北京"),
          attributes: { value: "beijing", selected: true },
        },
        option("shanghai", "上海"),
        option("guangzhou", "广州"),
      ],
    },
    parts: ["base"],
  },
  {
    tag: "super-skeleton",
    name: "Skeleton",
    mount: {
      attributes: { "loading-label": "内容加载中" },
      properties: { rows: 2, animated: true },
    },
    parts: ["base"],
  },
  {
    tag: "super-slider",
    name: "Slider",
    mount: {
      attributes: { "aria-label": "音量" },
      properties: { value: 40, min: 0, max: 100 },
    },
    parts: ["base"],
  },
  {
    tag: "super-space",
    name: "Space",
    mount: {
      attributes: { size: "small", wrap: true },
      children: [{ tag: "span", children: ["甲"] }, { tag: "span", children: ["乙"] }],
    },
  },
  {
    tag: "super-steps",
    name: "Steps",
    mount: {
      properties: {
        active: 1,
        items: [
          { title: "填写信息" },
          { title: "确认方案" },
          { title: "完成" },
        ],
      },
    },
  },
  {
    tag: "super-switch",
    name: "Switch",
    mount: {
      attributes: {
        checked: true,
        name: "contract-switch",
        value: "enabled",
        "aria-label": "自动同步",
      },
      children: ["自动同步"],
    },
    parts: ["base"],
  },
  {
    tag: "super-table",
    name: "Table",
    mount: {
      properties: {
        columns: [
          { key: "name", title: "名称" },
          { key: "status", title: "状态", sortable: true },
        ],
        rows: [
          { id: "1", name: "组件文档", status: "已完成" },
          { id: "2", name: "视觉回归", status: "进行中" },
        ],
      },
    },
    parts: ["base"],
  },
  {
    tag: "super-tabs",
    name: "Tabs",
    mount: {
      properties: {
        active: "one",
        items: [
          { key: "one", label: "概览" },
          { key: "two", label: "详情" },
        ],
      },
    },
  },
  {
    tag: "super-tag",
    name: "Tag",
    mount: {
      attributes: { variant: "primary", value: "native" },
      children: ["原生标签"],
    },
    parts: ["base"],
  },
  {
    tag: "super-time-picker",
    name: "TimePicker",
    mount: {
      attributes: { "aria-label": "时间" },
      properties: { value: "09:30" },
    },
    parts: ["base"],
  },
  {
    tag: "super-tooltip",
    name: "Tooltip",
    mount: {
      properties: { content: "悬停提示" },
      children: [buttonChild("悬停我")],
    },
  },
  {
    tag: "super-upload",
    name: "Upload",
    mount: {
      attributes: {
        accept: "image/*",
        multiple: true,
        "aria-label": "上传文件",
      },
    },
    parts: ["base"],
  },
];

export const EVENTS: ContractEvent[] = [
  { tag: "super-autocomplete", name: "super-autocomplete-input" },
  { tag: "super-autocomplete", name: "super-autocomplete-change" },
  { tag: "super-autocomplete", name: "super-autocomplete-clear" },
  { tag: "super-autocomplete", name: "super-autocomplete-open-change" },
  { tag: "super-card", name: "super-card-click" },
  { tag: "super-checkbox", name: "super-checkbox-change" },
  { tag: "super-date-picker", name: "super-date-picker-change" },
  { tag: "super-date-picker", name: "super-date-picker-clear" },
  { tag: "super-date-picker", name: "super-date-picker-open-change" },
  { tag: "super-dialog", name: "super-dialog-before-close" },
  { tag: "super-dialog", name: "super-dialog-close" },
  { tag: "super-dialog", name: "super-dialog-confirm" },
  { tag: "super-dialog", name: "super-dialog-cancel" },
  { tag: "super-drawer", name: "super-drawer-before-close" },
  { tag: "super-drawer", name: "super-drawer-close" },
  { tag: "super-drawer", name: "super-drawer-confirm" },
  { tag: "super-drawer", name: "super-drawer-cancel" },
  { tag: "super-dropdown", name: "super-dropdown-select" },
  { tag: "super-dropdown", name: "super-dropdown-open-change" },
  { tag: "super-form", name: "super-form-change" },
  { tag: "super-form", name: "super-form-submit" },
  { tag: "super-form", name: "super-form-invalid" },
  { tag: "super-form", name: "super-form-reset" },
  { tag: "super-input", name: "super-input" },
  { tag: "super-input", name: "super-change" },
  { tag: "super-input", name: "super-clear" },
  { tag: "super-input", name: "super-password-visibility" },
  { tag: "super-menu", name: "super-menu-select" },
  { tag: "super-menu", name: "super-menu-open-change" },
  { tag: "super-message", name: "super-message-close" },
  { tag: "super-notification", name: "super-notification-close" },
  { tag: "super-pagination", name: "super-pagination-change" },
  { tag: "super-popconfirm", name: "super-popconfirm-confirm" },
  { tag: "super-popconfirm", name: "super-popconfirm-cancel" },
  { tag: "super-popconfirm", name: "super-popconfirm-open-change" },
  { tag: "super-popover", name: "super-popover-open-change" },
  { tag: "super-radio", name: "super-radio-change" },
  { tag: "super-rate", name: "super-rate-change" },
  { tag: "super-select", name: "super-select-change" },
  { tag: "super-select", name: "super-select-clear" },
  { tag: "super-select", name: "super-select-open-change" },
  { tag: "super-select", name: "super-select-search" },
  { tag: "super-slider", name: "super-slider-change" },
  { tag: "super-steps", name: "super-steps-change" },
  { tag: "super-switch", name: "super-switch-change" },
  { tag: "super-table", name: "super-table-sort" },
  { tag: "super-table", name: "super-table-select" },
  { tag: "super-tabs", name: "super-tabs-change" },
  { tag: "super-tabs", name: "super-tabs-close" },
  { tag: "super-tag", name: "super-tag-close" },
  { tag: "super-time-picker", name: "super-time-picker-change" },
  { tag: "super-time-picker", name: "super-time-picker-clear" },
  { tag: "super-time-picker", name: "super-time-picker-open-change" },
  { tag: "super-tooltip", name: "super-tooltip-open-change" },
  { tag: "super-upload", name: "super-upload-change" },
  { tag: "super-upload", name: "super-upload-submit" },
  { tag: "super-upload", name: "super-upload-remove" },
  { tag: "super-upload", name: "super-upload-exceed" },
];

export const COMPONENTS_BY_TAG = new Map(
  COMPONENTS.map((component) => [component.tag, component]),
);

export const EVENTS_BY_TAG = new Map<string, ContractEvent[]>();

for (const event of EVENTS) {
  const events = EVENTS_BY_TAG.get(event.tag) ?? [];
  events.push(event);
  EVENTS_BY_TAG.set(event.tag, events);
}

export const TEXT_NODE = text;
