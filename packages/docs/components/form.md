# Form 配置型表单

`super-form` 是一个不内置任何字段组件的表单编排器。字段组件、字段值、依赖、动态属性、显示条件和校验规则都由 JavaScript Schema 提供；Form 只负责组织手绘风 FormItem、维护值、传播依赖、显示校验结果并提交值快照。

::: tip 组件边界
Form 不导入 `super-input`、`super-select` 或其他字段组件。每个字段必须提供任意 Custom Element 标签或渲染函数，并遵守 `value` / `onchange` 基础契约。
:::

## 注册

```ts
import "yxzq-element/form";
```

或显式注册：

```ts
import { defineSuperForm } from "yxzq-element/define";

defineSuperForm();
```

## 字段组件契约

Custom Element 字段通过 JavaScript property 接收：

```ts
interface FieldComponentProps {
  value: unknown;
  onchange(value: unknown, originalEvent?: Event): void;
  // 其余内容来自字段 props
}
```

以下业务组件只用于演示契约，不属于组件库：

```ts
class BusinessTextField extends HTMLElement {
  onchange = (value: unknown, originalEvent?: Event) => {};
  private input?: HTMLInputElement;
  private currentValue: unknown = "";
  private currentPlaceholder = "";

  get value() {
    return this.currentValue;
  }

  set value(value: unknown) {
    this.currentValue = value;
    if (this.input) this.input.value = String(value ?? "");
  }

  get placeholder() {
    return this.currentPlaceholder;
  }

  set placeholder(value: unknown) {
    this.currentPlaceholder = String(value ?? "");
    if (this.input) this.input.placeholder = this.currentPlaceholder;
  }

  connectedCallback() {
    this.input = document.createElement("input");
    this.input.value = String(this.value ?? "");
    this.input.placeholder = this.placeholder;
    this.input.addEventListener("input", (event) => {
      const value = (event.currentTarget as HTMLInputElement).value;
      this.currentValue = value;
      this.onchange(value, event);
    });
    this.append(this.input);
  }
}

customElements.define("business-text-field", BusinessTextField);
```

实际业务组件应在 `value`、`placeholder` 等 property 更新时同步内部 UI。Custom Element 标签必须使用小写字母开头、至少包含一个连字符，且只能包含小写字母、数字、点、下划线和连字符；非法标签会显示配置错误，不会进入动态模板。

## 基础配置

`schema` 和 `value` 是 JavaScript property，不能通过 HTML attribute 传递 JSON：

```html
<super-form id="profile-form"></super-form>

<script type="module">
  import "yxzq-element/form";

  const form = document.querySelector("#profile-form");

  form.schema = {
    layout: "horizontal",
    columns: 2,
    showReset: true,
    fields: [
      {
        field: "contact",
        label: "联系人",
        component: "business-text-field",
        props: {
          placeholder: "请输入联系人",
        },
        required: true,
        extra: "用于接收表单通知",
        rule: (value) => Boolean(String(value ?? "").trim()),
        errorMessage: "请输入联系人",
      },
    ],
  };

  form.value = {
    contact: "张三",
  };
</script>
```

Form 会在组件 property 上分配最终参数：

```ts
{
  ...resolvedProps,
  value: currentFieldValue,
  onchange: updateFieldValue,
}
```

`value` 与 `onchange` 由 Form 保留，字段 `props` 不能覆盖它们。字段调用 `onchange(nextValue)` 后，Form 更新自己的 `value` property 并触发 `super-form-change`。

## Vue 使用示例

先按照[开始使用中的 Vue 配置](/guide/getting-started#vue-vite)将 `super-*` 声明为 Custom Element，并在 `main.ts` 中注册 Form：

```ts
import "yxzq-element/form";
```

下面的 `business-text-field` 是“字段组件契约”一节中的业务组件，不属于组件库。导入它会执行 `customElements.define()`：

```vue
<script setup lang="ts">
import type {
  SuperFormSchema,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
import "./business-text-field";

const schema: SuperFormSchema = {
  layout: "horizontal",
  columns: 2,
  showReset: true,
  fields: [
    {
      field: "contact",
      label: "联系人",
      component: "business-text-field",
      props: { placeholder: "请输入联系人" },
      required: true,
      rule: (value) => Boolean(String(value ?? "").trim()),
      errorMessage: "请输入联系人",
    },
    {
      field: "country",
      label: "国家",
      component: "business-text-field",
      props: { placeholder: "请输入国家" },
    },
    {
      field: "city",
      label: "城市",
      component: "business-text-field",
      deps: ["country"],
      props: ({ country }) => ({
        disabled: !country,
        placeholder: country ? "请输入城市" : "请先输入国家",
      }),
      clearWhenDepsChange: true,
    },
    {
      field: "invoiceTitle",
      label: "发票抬头",
      component: "business-text-field",
      deps: ["country"],
      props: { placeholder: "请输入发票抬头" },
      visible: ({ country }) => country === "china",
    },
  ],
};

const initialValue = {
  contact: "张三",
  country: "china",
  city: "深圳",
};

const handleSubmit = (event: CustomEvent<SuperFormSubmitDetail>) => {
  console.log(event.detail.values);
};
</script>

<template>
  <super-form
    :schema="schema"
    :value="initialValue"
    @super-form-submit="handleSubmit"
  ></super-form>
</template>
```

`:schema` 和 `:value` 使用 Vue 的 property 绑定传递对象；`@super-form-submit` 监听 Form 发出的组合事件。完整可运行代码和严格模板类型分别见 [Vue Form 示例](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/vue/src/App.vue) 与 [Vue Custom Element 声明](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/vue/src/custom-elements.d.ts)。

## React 使用示例

在 React 应用渲染前导入 Form 注册入口，并注册同一个业务字段组件：

```tsx
import "yxzq-element/form";
import type {
  SuperFormSchema,
  SuperFormSubmitDetail,
} from "yxzq-element/form";
import "./business-text-field";

const schema: SuperFormSchema = {
  layout: "horizontal",
  columns: 2,
  showReset: true,
  fields: [
    {
      field: "contact",
      label: "联系人",
      component: "business-text-field",
      props: { placeholder: "请输入联系人" },
      required: true,
      rule: (value) => Boolean(String(value ?? "").trim()),
      errorMessage: "请输入联系人",
    },
    {
      field: "country",
      label: "国家",
      component: "business-text-field",
      props: { placeholder: "请输入国家" },
    },
    {
      field: "city",
      label: "城市",
      component: "business-text-field",
      deps: ["country"],
      props: ({ country }) => ({
        disabled: !country,
        placeholder: country ? "请输入城市" : "请先输入国家",
      }),
      clearWhenDepsChange: true,
    },
    {
      field: "invoiceTitle",
      label: "发票抬头",
      component: "business-text-field",
      deps: ["country"],
      props: { placeholder: "请输入发票抬头" },
      visible: ({ country }) => country === "china",
    },
  ],
};

const initialValue = {
  contact: "张三",
  country: "china",
  city: "深圳",
};

export function BusinessForm() {
  const handleSubmit = (event: CustomEvent<SuperFormSubmitDetail>) => {
    console.log(event.detail.values);
  };

  return (
    <super-form
      schema={schema}
      value={initialValue}
      onsuper-form-submit={handleSubmit}
    />
  );
}
```

`schema` 和 `value` 通过 JSX 直接传给 Custom Element property；自定义事件使用与事件名对应的 `onsuper-form-submit`。该写法已在仓库的 React 19 示例中验证。完整可运行代码和 JSX 类型分别见 [React Form 示例](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/react/src/main.tsx) 与 [React Custom Element 声明](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/react/src/custom-elements.d.ts)。

Vue 或 React 组件对象不能直接放入字段的 `component`。如需复用框架业务组件，应先为它提供符合 `value` / `onchange` 契约的 Custom Element 包装，再将标签名放入 Schema；Form 本身不会加载 Vue 或 React 运行时。

## 依赖与动态 Props

`deps` 声明字段依赖。`props` 函数只收到声明过的依赖值，并使用字段名组成对象，不依赖数组位置：

```ts
{
  field: "city",
  label: "城市",
  component: "business-city-picker",
  deps: ["country", "province"],
  props: ({ country, province }) => ({
    country,
    province,
    disabled: !province,
    placeholder: province ? "请选择城市" : "请先选择省份",
  }),
  clearWhenDepsChange: true,
}
```

当 `country` 或 `province` 改变时，Form 重新计算该字段的 props。未在 `deps` 中声明的字段不会传给 resolver。

`clearWhenDepsChange` 会在任一依赖变化时把当前字段值改为 `undefined`。该连锁变化与用户的原始变化会合并到同一个 `super-form-change` 事务中。

## 条件显示

`visible` 可以是布尔值，也可以是读取同一份依赖对象的函数：

```ts
{
  field: "invoiceTitle",
  label: "发票抬头",
  component: "business-text-field",
  deps: ["needInvoice", "invoiceType"],
  props: {
    placeholder: "请输入发票抬头",
  },
  visible: ({ needInvoice, invoiceType }) =>
    needInvoice === true && invoiceType === "company",
  clearWhenHidden: false,
}
```

隐藏字段不渲染、不参与校验，默认保留值。配置 `clearWhenHidden: true` 后，依赖变化导致字段隐藏时会把值改为 `undefined`。

## 渲染函数字段

复杂场景也可以直接传入渲染函数。函数收到与 Custom Element 完全相同的最终 props：

```ts
import { html } from "lit";

const schema = {
  fields: [
    {
      field: "score",
      label: "评分",
      component: ({ value, onchange, max = 5 }) => html`
        <business-rating
          .value=${value}
          .max=${max}
          .onchange=${onchange}
        ></business-rating>
      `,
      props: { max: 5 },
    },
  ],
};
```

渲染函数适合已经使用 Lit 的项目。Vue、React 或其他框架中更推荐把业务控件封装为 Custom Element，再用标签字符串配置，避免让 Form 依赖框架运行时。

## 函数校验

`rule` 只接收当前字段值并同步返回布尔值：

```ts
{
  field: "phone",
  label: "联系电话",
  component: "business-text-field",
  rule: (value) => /^1\d{10}$/.test(String(value ?? "")),
  errorMessage: "请输入正确的手机号",
}
```

- 返回 `true`：通过校验。
- 返回 `false`：显示 `errorMessage`。
- 未配置 `rule`：默认通过。
- `rule` 抛出异常：按校验失败处理。
- 隐藏字段：不执行校验。

默认在提交时校验。设置 `validateOn: "change"` 后，用户修改值时立即校验；提交失败会触发 `super-form-invalid`，成功才触发 `super-form-submit`。

## 布局与提交状态

支持三种 FormItem 布局：

```ts
form.schema = {
  layout: "vertical", // vertical | horizontal | inline
  columns: 2,
  actionsAlign: "end",
  submitText: "提交",
  submittingText: "提交中...",
  resetText: "重置",
  showReset: true,
  fields,
};
```

字段通过 `span` 占据多列。窄屏下会自动折叠为单列。FormItem 按参考设计稿提供 Label、必填标记、Field、Extra 和 Error 区域，并使用纸张网格、虚线分隔、不规则圆角与手绘按钮视觉。

设置 `form.submitting = true` 后，默认提交与重置按钮禁用，并显示提交中状态。`actions` Slot 可以完整替换默认操作按钮。

## API

### Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `schema` | `SuperFormSchema` | `{ fields: [] }` | 字段、布局和操作配置，只能通过 JS property 设置 |
| `value` | `Record<string, unknown>` | `{}` | 当前表单值，只能通过 JS property 设置 |
| `submitting` | `boolean` | `false` | 提交中状态，并反射到 attribute |
| `errors` | `Readonly<Record<string, string>>` | `{}` | 当前校验错误的只读快照 |

### Field 配置

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `field` | `string` | 必填 | 唯一字段名及 `value` 对象键；重复项显示配置错误并跳过渲染 |
| `label` | `string` | 未设置 | 可见标签 |
| `component` | `string \| SuperFormFieldRenderer` | 必填 | Custom Element 标签或渲染函数 |
| `defaultValue` | `unknown` | 未设置 | 外部值缺失时使用的默认值 |
| `deps` | `readonly string[]` | `[]` | `props`、`visible` 使用的依赖字段 |
| `props` | `object \| (deps) => object` | `{}` | 额外组件 property |
| `visible` | `boolean \| (deps) => boolean` | `true` | 显示条件 |
| `rule` | `(value) => boolean` | 未设置 | 当前字段校验函数；未设置即通过 |
| `errorMessage` | `string` | `校验未通过` | rule 返回 false 时的错误文案 |
| `required` | `boolean` | `false` | 显示必填标记，不代替 rule |
| `extra` | `string` | 未设置 | 字段帮助说明 |
| `span` | `1 \| 2 \| 3 \| 4` | `1` | 栅格占列数 |
| `clearWhenHidden` | `boolean` | `false` | 因依赖隐藏时清空值 |
| `clearWhenDepsChange` | `boolean` | `false` | 任一依赖变化时清空值 |

### Methods

| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| `validate()` | `boolean` | 校验所有可见字段并更新 `errors` |
| `reset()` | `void` | 恢复首次赋值与字段默认值组成的重置快照 |
| `requestSubmit()` | `void` | 请求内部表单提交并执行校验 |
| `focusField(field)` | `void` | 尝试聚焦指定字段渲染出的第一个控件 |

### Events

所有事件均设置 `bubbles: true` 和 `composed: true`。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-form-change` | `{ field, value, changes, values, originalEvent? }` | 用户字段和依赖连锁值变化 |
| `super-form-submit` | `{ values, originalEvent }` | 全部 rule 通过后提交 |
| `super-form-invalid` | `{ values, errors, originalEvent }` | 提交校验失败 |
| `super-form-reset` | `{ values, originalEvent? }` | 重置完成 |

### Slots

| 名称 | 说明 |
| --- | --- |
| `header` | 字段网格上方内容 |
| `actions` | 替换默认提交与重置区域；自定义按钮通过 Form ref 调用 `requestSubmit()` / `reset()` |
| `footer` | 操作区下方内容 |

### CSS Parts

| Part | 说明 |
| --- | --- |
| `form` / `header` / `footer` | 内部表单与上下扩展区域 |
| `fields` / `item` | 字段网格与单个 FormItem |
| `label-row` / `label` / `required-mark` | 标签和必填标记 |
| `control` / `extra` / `error` | 任意字段组件、帮助和错误区域 |
| `actions` / `submit-button` / `reset-button` | 操作区与默认按钮 |

### CSS Custom Properties

```css
super-form {
  --super-form-gap: 18px;
  --super-form-row-gap: 20px;
  --super-form-label-width: 112px;
  --super-form-paper: #fffdf7;
  --super-form-paper-accent: #fffaf0;
  --super-form-color: #292524;
  --super-form-muted-color: #687386;
  --super-form-border-color: #46556b;
  --super-form-line-color: #c8ced8;
  --super-form-primary-color: #3978e9;
  --super-form-primary-hover-color: #5d91ef;
  --super-form-primary-active-color: #2866d7;
  --super-form-primary-shadow-color: #174ea6;
  --super-form-danger-color: #df343d;
  --super-form-focus-color: #56c6b7;
  --super-form-radius: 16px 12px 18px 11px / 13px 17px 12px 18px;
  --super-form-font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui,
    sans-serif;
}
```

## 无障碍与表单边界

- Form 使用内部原生 `<form>`、提交与重置按钮，并将校验错误放入 `role="alert"`。
- 任意字段的真实焦点、键盘行为、可访问名称、错误关联和禁用语义由业务字段组件负责；可通过 `props` 把 label、描述 ID 或 ARIA property 传给组件。
- Form 不读取字段私有 DOM，也不依赖字段事件；字段必须调用 `onchange(nextValue)`。
- `super-form` 不是 form-associated Custom Element。外部 `FormData`、外部表单 reset 和 constraint validation 不是公共契约；请使用 `super-form-submit` 中的值快照。
- `schema` 可以包含组件和函数，因此是运行时配置，不能直接序列化为 JSON。需要服务端持久化时，应在应用层保存组件键与 resolver 键，再映射到可信的本地实现。
