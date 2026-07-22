import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "yxzq-element";
import type {
  SuperFormSchema,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
import { DEMO_BUSINESS_FIELD_TAG } from "./business-form-field";
import "./style.css";

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
