import "yxzq-element";
import type {
  SuperFormSchema,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
import { DEMO_BUSINESS_FIELD_TAG } from "./business-form-field.js";
import "./style.css";

const button = document.querySelector("super-button");
const input = document.querySelector("super-input");
const checkbox = document.querySelector("super-checkbox");
const radios = document.querySelectorAll("super-radio");
const switchElement = document.querySelector("super-switch");
const select = document.querySelector("super-select");
const datePicker = document.querySelector("super-date-picker");
const timePicker = document.querySelector("super-time-picker");
const form = document.querySelector("super-form");

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
      extra: "用于接收表单通知",
    },
    {
      field: "country",
      label: "国家/地区",
      component: DEMO_BUSINESS_FIELD_TAG,
      props: { placeholder: "输入 china 查看联动" },
    },
    {
      field: "city",
      label: "城市",
      component: DEMO_BUSINESS_FIELD_TAG,
      deps: ["country"],
      props: ({ country }) => ({
        placeholder: country === "china" ? "请输入中国城市" : "请先输入国家",
        disabled: !country,
      }),
      clearWhenDepsChange: true,
    },
    {
      field: "invoiceTitle",
      label: "发票抬头",
      component: DEMO_BUSINESS_FIELD_TAG,
      deps: ["country"],
      props: { placeholder: "仅在国家为 china 时显示" },
      visible: ({ country }) => country === "china",
    },
  ],
};

if (form) {
  form.schema = formSchema;
  form.value = {
    contact: "张三",
    country: "china",
    city: "深圳",
    invoiceTitle: "深圳网格有限公司",
  };
}

const writeOutput = (message: string): void => {
  const output = document.querySelector("output");
  if (output) {
    output.textContent = message;
  }
};

button?.addEventListener("click", () => {
  writeOutput("super-button click 事件正常工作");
});

input?.addEventListener("super-input", (event) => {
  writeOutput(`super-input 当前值：${event.detail.value}`);
});

checkbox?.addEventListener("super-checkbox-change", (event) => {
  writeOutput(`super-checkbox：${event.detail.checked ? "已选择" : "未选择"}`);
});

radios.forEach((radio) => {
  radio.addEventListener("super-radio-change", (event) => {
    writeOutput(`super-radio 当前值：${event.detail.value}`);
  });
});

switchElement?.addEventListener("super-switch-change", (event) => {
  writeOutput(`super-switch：${event.detail.checked ? "开启" : "关闭"}`);
});

select?.addEventListener("super-select-change", (event) => {
  writeOutput(`super-select 当前值：${event.detail.values.join("、") || "未选择"}`);
});

if (datePicker) {
  const dayKey = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };
  datePicker.shortcuts = [
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
}

datePicker?.addEventListener("super-date-picker-change", (event) => {
  writeOutput(`super-date-picker 当前值：${JSON.stringify(event.detail.value)}`);
});

if (timePicker) {
  timePicker.shortcuts = [
    { label: "上午九点", value: "09:00" },
    { label: "中午", value: "12:00" },
    { label: "傍晚", value: "18:30" },
  ];
}

timePicker?.addEventListener("super-time-picker-change", (event) => {
  writeOutput(`super-time-picker 当前值：${JSON.stringify(event.detail.value)}`);
});

form?.addEventListener("super-form-submit", (event) => {
  const detail = (event as CustomEvent<SuperFormSubmitDetail>).detail;
  writeOutput(`super-form 提交：${JSON.stringify(detail.values)}`);
});
