import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "yxzq-element";
import type {
  SuperFormSchema,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
import type { SuperDatePickerShortcut } from "yxzq-element/date-picker";
import type { SuperTimePickerShortcut } from "yxzq-element/time-picker";
import { DEMO_BUSINESS_FIELD_TAG } from "./business-form-field";
import "./style.css";

const dayKey = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};

const dateShortcuts: SuperDatePickerShortcut[] = [
  {
    label: "本周",
    value: () => {
      const today = new Date();
      const start = new Date(today);
      start.setDate(today.getDate() - ((today.getDay() + 6) % 7));
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return [dayKey(start), dayKey(end)];
    },
  },
  {
    label: "今天起三天",
    value: () => {
      const start = new Date();
      const end = new Date();
      end.setDate(start.getDate() + 2);
      return [dayKey(start), dayKey(end)];
    },
  },
];

const timeShortcuts: SuperTimePickerShortcut[] = [
  { label: "上午九点", value: "09:00" },
  { label: "中午", value: "12:00" },
  { label: "傍晚", value: "18:30" },
];

const formSchema: SuperFormSchema = {
  layout: "horizontal",
  columns: 2,
  showReset: true,
  fields: [
    {
      field: "contact",
      label: "联系人",
      component: DEMO_BUSINESS_FIELD_TAG,
      props: { placeholder: "请输入联系人" },
      required: true,
      rule: (value) => Boolean(String(value ?? "").trim()),
      errorMessage: "请输入联系人",
      extra: "由 React 传入配置，字段仍是任意 Web Component",
    },
    {
      field: "country",
      label: "国家",
      component: DEMO_BUSINESS_FIELD_TAG,
      props: { placeholder: "输入 china 查看依赖" },
    },
    {
      field: "city",
      label: "城市",
      component: DEMO_BUSINESS_FIELD_TAG,
      deps: ["country"],
      props: ({ country }) => ({
        placeholder: country === "china" ? "请输入城市" : "请先输入国家",
        disabled: !country,
      }),
      clearWhenDepsChange: true,
    },
    {
      field: "invoiceTitle",
      label: "发票抬头",
      component: DEMO_BUSINESS_FIELD_TAG,
      deps: ["country"],
      props: { placeholder: "请输入发票抬头" },
      visible: ({ country }) => country === "china",
    },
  ],
};

const formValue = {
  contact: "张三",
  country: "china",
  city: "深圳",
  invoiceTitle: "网格有限公司",
};

function App() {
  const handleSelectChange = (
    event: CustomEvent<{ values: string[] }>,
  ) => {
    window.alert(`React 收到选择结果：${event.detail.values.join("、")}`);
  };

  const handleDateChange = (
    event: CustomEvent<{ value: string | string[] }>,
  ) => {
    window.alert(`React 收到日期：${JSON.stringify(event.detail.value)}`);
  };

  const handleTimeChange = (
    event: CustomEvent<{ value: string | string[] }>,
  ) => {
    window.alert(`React 收到时间：${JSON.stringify(event.detail.value)}`);
  };

  const handleTagClose = (event: CustomEvent<{ value: string }>) => {
    window.alert(`React 关闭标签：${event.detail.value}`);
  };

  const tabItems = [
    { key: "one", label: "概览" },
    { key: "two", label: "详情" },
    { key: "three", label: "设置", disabled: true },
  ];

  const crumbItems = [
    { label: "首页", href: "#" },
    { label: "组件" },
    { label: "面包屑", current: true },
  ];

  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const notify = () => {
    const element = document.createElement("super-notification");
    element.title = "保存成功";
    element.message = "你的修改已同步。";
    element.type = "success";
    document.body.append(element);
    window.setTimeout(() => element.remove(), 3200);
  };

  const menuItems = [
    { key: "overview", label: "概览", icon: "◈" },
    { key: "components", label: "组件", icon: "▤" },
    { key: "settings", label: "设置", icon: "⚙" },
  ];

  const dropdownItems = [
    { key: "edit", label: "编辑" },
    { key: "copy", label: "复制" },
    { key: "sep", label: "", divider: true },
    { key: "delete", label: "删除", danger: true },
  ];

  const cityItems = ["北京", "上海", "广州", "深圳", "杭州"];

  const stepItems = [
    { title: "填写信息" },
    { title: "确认方案" },
    { title: "完成" },
  ];

  const tableColumns = [
    { key: "name", title: "名称" },
    { key: "status", title: "状态" },
    { key: "updated", title: "更新时间", sortable: true },
  ];

  const tableRows = [
    { id: "1", name: "组件文档", status: "已完成", updated: "2026-11-18" },
    { id: "2", name: "视觉回归", status: "进行中", updated: "2026-11-17" },
  ];

  const handleFormSubmit = (event: CustomEvent<SuperFormSubmitDetail>) => {
    window.alert(`React 提交表单：${JSON.stringify(event.detail.values)}`);
  };

  return (
    <main>
      <h1>React 消费示例</h1>
      <super-button
        variant="success"
        shape="pill"
        onClick={() => window.alert("React 收到了原生 click 事件")}
      >
        <span slot="prefix" aria-hidden="true">✓</span>
        自定义按钮内容
      </super-button>
      <super-input
        type="search"
        placeholder="搜索关键词"
        clearable
        aria-label="搜索关键词"
      >
        <span slot="suffix" aria-hidden="true">⌕</span>
      </super-input>
      <section className="select-demo" aria-labelledby="select-title">
        <div>
          <h2 id="select-title">手绘标签筛选</h2>
          <p>可搜索、多选，并直接使用原生 option / optgroup。</p>
        </div>
        <super-select
          multiple
          searchable
          clearable
          value={["sketch", "travel"]}
          name="topics"
          placeholder="选择兴趣标签"
          search-placeholder="搜索标签"
          aria-label="兴趣标签"
          onsuper-select-change={handleSelectChange}
        >
          <span slot="prefix" aria-hidden="true">☆</span>
          <optgroup label="创作">
            <option value="sketch">手绘</option>
            <option value="photo">摄影</option>
          </optgroup>
          <optgroup label="生活">
            <option value="travel">旅行</option>
            <option value="music">音乐</option>
          </optgroup>
        </super-select>
      </section>
      <section className="picker-demo" aria-labelledby="picker-title">
        <div>
          <h2 id="picker-title">手绘日期与时间</h2>
          <p>日期范围联动、快捷选项与 12 小时制时间。</p>
        </div>
        <super-date-picker
          mode="range"
          clearable
          shortcuts={dateShortcuts}
          name="trip"
          aria-label="出行日期"
          onsuper-date-picker-change={handleDateChange}
        ></super-date-picker>
        <super-time-picker
          format="hh:mm A"
          clearable
          shortcuts={timeShortcuts}
          name="alarm"
          aria-label="提醒时间"
          onsuper-time-picker-change={handleTimeChange}
        ></super-time-picker>
      </section>
      <section aria-labelledby="display-title">
        <h2 id="display-title">手绘展示组件</h2>
        <super-space direction="horizontal" size="medium" wrap align="center">
          <super-card variant="outlined" size="small">
            <span slot="header">卡片标题</span>
            卡片正文内容
          </super-card>
          <super-card variant="filled" size="small" hoverable>
            悬停卡片
          </super-card>
        </super-space>
        <super-space direction="horizontal" size="small" wrap align="center">
          <super-tag variant="primary" value="react">
            React
          </super-tag>
          <super-tag
            variant="success"
            closable
            value="ready"
            onsuper-tag-close={handleTagClose}
          >
            可关闭
          </super-tag>
          <super-avatar size="small" icon="手"></super-avatar>
          <super-badge value="12" status="danger">
            <span>消息</span>
          </super-badge>
          <super-badge dot status="success">
            <span>在线</span>
          </super-badge>
        </super-space>
        <super-divider content-position="left" variant="hand-drawn">
          分割
        </super-divider>
        <super-tooltip content="悬停查看提示">
          <super-button variant="outline" size="small">
            悬停我
          </super-button>
        </super-tooltip>
        <super-progress value={62} show-text></super-progress>
        <super-skeleton variant="text" rows={2} animated></super-skeleton>
        <super-tabs items={tabItems} active="one"></super-tabs>
        <super-breadcrumb items={crumbItems}></super-breadcrumb>
        <super-pagination
          total={120}
          page={2}
          page-size={10}
          show-total
        ></super-pagination>
        <super-slider value={40} min={0} max={100}></super-slider>
        <super-rate value={3} clearable></super-rate>
        <super-upload accept="image/*" multiple></super-upload>
        <super-button
          variant="primary"
          size="small"
          onClick={() => setDialogOpen(true)}
        >
          打开对话框
        </super-button>
        <super-dialog
          open={dialogOpen}
          title="确认操作"
          onsuper-dialog-close={() => setDialogOpen(false)}
        >
          这是一段由 React 控制开关的对话框内容。
        </super-dialog>
        <super-popover content="弹出内容" placement="bottom">
          <super-button variant="outline" size="small">
            点击弹出
          </super-button>
        </super-popover>
        <super-dropdown items={dropdownItems}>
          <super-button variant="outline" size="small">
            更多操作
          </super-button>
        </super-dropdown>
        <super-autocomplete
          items={cityItems}
          placeholder="输入城市"
        ></super-autocomplete>
        <super-steps items={stepItems} active={1}></super-steps>
        <super-popconfirm title="确认删除？" content="删除后不可恢复">
          <super-button variant="danger" size="small">
            删除
          </super-button>
        </super-popconfirm>
        <super-table
          columns={tableColumns}
          rows={tableRows}
          selectable
          striped
        ></super-table>
        <super-menu items={menuItems} active="overview"></super-menu>
        <super-empty description="没有找到匹配的记录">
          <super-button slot="action" variant="outline" size="small">
            新建
          </super-button>
        </super-empty>
        <super-button
          variant="outline"
          size="small"
          onClick={() => setDrawerOpen(true)}
        >
          打开抽屉
        </super-button>
        <super-drawer
          open={drawerOpen}
          title="筛选条件"
          placement="right"
          onsuper-drawer-close={() => setDrawerOpen(false)}
        >
          抽屉内容由消费者控制。
        </super-drawer>
        <super-button variant="outline" size="small" onClick={notify}>
          显示通知
        </super-button>
      </section>
      <section aria-labelledby="selector-title">
        <h2 id="selector-title">选择器套装</h2>
        <super-checkbox checked>接收更新通知</super-checkbox>
        <fieldset>
          <legend>版本</legend>
          <super-radio name="plan" value="standard" checked>
            标准版
          </super-radio>
          <super-radio name="plan" value="advanced">
            高级版
          </super-radio>
        </fieldset>
        <super-switch checked aria-label="自动同步">
          自动同步
        </super-switch>
      </section>
      <section className="form-demo" aria-labelledby="form-title">
        <div>
          <h2 id="form-title">配置型业务表单</h2>
          <p>字段由 React 配置传入，依赖值只通过 deps 注入。</p>
        </div>
        <super-form
          schema={formSchema}
          value={formValue}
          onsuper-form-submit={handleFormSubmit}
        ></super-form>
      </section>
    </main>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing #root element");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
