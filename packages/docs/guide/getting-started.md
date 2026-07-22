# 开始使用

Super Components 是一套基于 Lit 的手绘风格 Web Component 组件库。组件实现不依赖 Vue 或 React。

当前提供 Button、Input、Form、Checkbox、Radio、Switch 与 Select 组件。基础控件保留原生语义；Form 不内置字段组件，通过任意业务组件、依赖配置和函数校验组织表单。所有组件通过手绘视觉、Shadow DOM 和跨框架事件组成一致的消费体验。

::: warning 先区分组件类与框架组件
当前 `yxzq-element@1.0.1` 发布的是原生 Custom Element。包中导出的 `SuperButton` 等名称是继承自 `HTMLElement` 的元素类，不是 Vue 组件或 React 组件。

在 Vue 和 React 中都应先导入注册入口，再使用带连字符的小写标签，例如 `<super-button>`。不要把 `SuperButton` 直接写成 `<SuperButton>`。
:::

## 安装

```bash
pnpm add yxzq-element
```

也可以使用 npm：

```bash
npm install yxzq-element
```

## 注册方式

注册全部组件：

```ts
import "yxzq-element";
```

只注册需要的组件：

```ts
import "yxzq-element/button";
import "yxzq-element/input";
import "yxzq-element/form";
import "yxzq-element/select";
```

选择器组件也支持分别注册：

```ts
import "yxzq-element/checkbox";
import "yxzq-element/radio";
import "yxzq-element/switch";
```

这些副作用导入会调用 `customElements.define()`。在框架应用中，应在 Vue 的 `mount()` 或 React 的 `render()` 之前执行注册。

需要控制注册时机时，可以使用显式注册入口：

```ts
import {
  defineSuperButton,
  defineSuperForm,
  defineSuperInput,
  registerAll,
} from "yxzq-element/define";

defineSuperButton();
defineSuperForm();
defineSuperInput();
// 或 registerAll();
```

所有注册入口都可以重复执行，并且能够在没有 `customElements` 的 SSR 环境中安全导入。

## 原生 HTML

在 Vite 等能够解析 npm 模块的工具中：

```html
<super-button variant="primary">保存</super-button>
<super-input placeholder="请输入内容"></super-input>
<super-checkbox checked>接收更新通知</super-checkbox>
<super-radio name="plan" value="standard" checked>标准版</super-radio>
<super-radio name="plan" value="advanced">高级版</super-radio>
<super-switch checked aria-label="自动同步">自动同步</super-switch>
<super-select aria-label="选择城市">
  <option value="shanghai">上海</option>
  <option value="hangzhou">杭州</option>
</super-select>

<script type="module">
  import "yxzq-element";
</script>
```

浏览器不能直接解析 npm 的裸模块名称。纯静态 HTML 应使用支持 ESM 转换的 CDN、import map 或 Vite 等构建工具。

## Vue + Vite

Vue 需要完成两件事：让模板编译器把 `super-*` 识别为原生 Custom Element，并在应用挂载前注册组件。

### 1. 配置模板编译器

将 `vite.config.ts` 配置为：

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("super-"),
        },
      },
    }),
  ],
});
```

`isCustomElement` 是编译期配置，不能改成 Vue 运行时的 `app.config.compilerOptions`。

### 2. 在挂载前注册

```ts
// src/main.ts
import "yxzq-element";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

如果只需要部分组件，可以把全量入口替换为子路径：

```ts
import "yxzq-element/button";
import "yxzq-element/input";
```

### 3. 添加 Vue 模板类型声明

当前包不会自动修改 Vue 的全局组件类型。在 `src/custom-elements.d.ts` 中声明项目实际使用的标签。下面是只包含 Button 与 Input 的最简标签声明：

```ts
declare module "vue" {
  interface GlobalComponents {
    "super-button": typeof import("yxzq-element/button")["SuperButton"];
    "super-input": typeof import("yxzq-element/input")["SuperInput"];
  }
}

export {};
```

这个最简写法用于让 Vue 识别短横线标签并保留基础元素实例与模板 `ref` 类型，但不提供完整的属性和自定义事件校验。例如，无效的 `variant` 或不匹配的 `CustomEvent.detail` 可能不会被 `vue-tsc` 拦截。它只提供类型信息，不会执行组件注册；运行时仍然需要在 `main.ts` 中导入 `yxzq-element`。创建文件后，如果提示没有立即刷新，请在编辑器中重启 Vue Language Server。

需要完整的属性、自定义事件、`CustomEvent.detail`、真实元素 `ref` 和原生具名 Slot 类型时，请直接复制仓库中经过 `pnpm typecheck` 验证的 [Vue 示例完整声明](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/vue/src/custom-elements.d.ts)。

如果 Vue Official 仍优先插入大驼峰名称，可在消费项目的 `.vscode/settings.json` 中固定使用短横线提示：

```json
{
  "vue.suggest.componentNameCasing": "alwaysKebabCase",
  "vue.suggest.propNameCasing": "alwaysKebabCase"
}
```

### 4. 使用小写标签

```vue
<script setup lang="ts">
import { ref } from "vue";

const status = ref("按钮尚未点击");

const handleClick = () => {
  status.value = "Vue 已收到原生 click 事件";
};
</script>

<template>
  <super-input
    placeholder="请输入昵称"
    clearable
    aria-label="昵称"
  ></super-input>

  <super-button variant="primary" @click="handleClick">
    更新页面状态
  </super-button>

  <p>{{ status }}</p>
</template>
```

当前包没有提供 Vue 包装组件，因此下面的写法不成立：

```vue
<!-- 错误：Vue 会把它解析为名为 SuperButton 的 Vue 组件 -->
<SuperButton>保存</SuperButton>
```

也不要使用 `app.component("SuperButton", SuperButton)` 注册导出的元素类。Vue 所需的“注册”是导入 `yxzq-element` 的注册入口，而不是把 Lit 元素类注册成 Vue 组件。

## React + Vite

React 中同样先注册组件，再渲染小写 Custom Element 标签。React + TypeScript 还需要给 JSX 补充标签声明。

### 1. 在渲染前注册

```tsx
// src/main.tsx
import "yxzq-element";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

按需注册时可以改为：

```ts
import "yxzq-element/button";
import "yxzq-element/input";
```

### 2. 添加 JSX 标签声明

当前包不会自动修改 React 的 JSX 类型。在 `src/custom-elements.d.ts` 中声明项目实际使用的标签。下面的声明覆盖本页示例，并已在 React + TypeScript Vite 项目中验证：

```ts
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type CustomElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "super-button": CustomElementProps & {
        variant?:
          | "primary"
          | "secondary"
          | "success"
          | "warning"
          | "danger"
          | "outline"
          | "ghost"
          | "text";
        size?: "large" | "medium" | "small";
        shape?: "default" | "pill" | "square";
        disabled?: boolean;
        loading?: boolean;
        "loading-text"?: string;
      };
      "super-input": CustomElementProps & {
        value?: string;
        type?:
          | "text"
          | "search"
          | "password"
          | "number"
          | "email"
          | "tel"
          | "url"
          | "date";
        placeholder?: string;
        clearable?: boolean;
        disabled?: boolean;
      };
    }
  }
}
```

全部组件的 JSX 声明可以参考仓库中的 [React 示例](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/react/src/custom-elements.d.ts)。

### 3. 使用小写标签

```tsx
// src/App.tsx
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("按钮尚未点击");

  return (
    <main>
      <super-input
        placeholder="请输入昵称"
        clearable
        aria-label="昵称"
      />

      <super-button
        variant="primary"
        onClick={() => setStatus("React 已收到原生 click 事件")}
      >
        更新页面状态
      </super-button>

      <p>{status}</p>
    </main>
  );
}
```

不要把包导出的元素类直接当作 React 组件：

```tsx
// 错误：SuperButton 是 HTMLElement/LitElement 类，不是 React 组件
import { SuperButton } from "yxzq-element";

<SuperButton>保存</SuperButton>;
```

这正是 TypeScript 报出“`SuperButton` 不能用作 JSX 组件”或 `TS2786` 的原因。需要在 `ref` 中使用元素实例类型时，可以只导入类型：

```tsx
import { useRef } from "react";
import type { SuperButton as SuperButtonElement } from "yxzq-element/button";

export function SaveButton() {
  const buttonRef = useRef<SuperButtonElement>(null);

  return <super-button ref={buttonRef}>保存</super-button>;
}
```

如果业务必须使用大驼峰 `<SuperButton>`，需要额外的 React adapter；当前 `yxzq-element@1.0.1` 没有提供该包装层。

## 使用规则速查

| 场景 | 注册 | 正确标签 | 不应使用 |
| --- | --- | --- | --- |
| Vue + Vite | `import "yxzq-element"`，并配置 `isCustomElement` | `<super-button>` | `<SuperButton>`、`app.component()` 注册元素类 |
| React + Vite | `import "yxzq-element"`，并补充 JSX 声明 | `<super-button>` | 把导出的 `SuperButton` 类写成 `<SuperButton>` |
| 原生 HTML + Vite | 在模块脚本中 `import "yxzq-element"` | `<super-button>` | 在无 import map/CDN 转换时直接使用 npm 裸模块名 |

## 样式边界

组件默认使用 Shadow DOM。外部样式通过以下机制进入组件：

- 继承属性和 `--super-*` CSS Custom Properties。
- 组件声明的 `::part()`。
- 用于内容组合的 Slot。

全局 reset 是可选依赖，不会由 `yxzq-element` 主入口自动注入。
