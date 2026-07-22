# Super Components

Super Components 是一套由 [Lit](https://lit.dev/) 驱动的手绘风 Web Component 组件库，npm 主包名为 `yxzq-element`。组件不依赖 Vue 或 React，使用原生 Custom Elements、Shadow DOM、Slot 和跨 Shadow DOM 的自定义事件，因此可以在原生 HTML、Vue、React 或其他前端技术栈中使用。

- 组件标签统一使用 `super-` 前缀，例如 `super-button`、`super-input`、`super-form` 和 `super-select`。
- 组件实现保持框架无关；Vue 和 React 只作为消费示例存在。
- 视觉方向是原创手绘风格，不复刻 Element Plus 的 API 或设计。
- 支持全量注册、按组件注册，以及对 SSR 更友好的显式注册。

## 安装

```bash
pnpm add yxzq-element
```

也可以使用 npm 或 Yarn：

```bash
npm install yxzq-element
```

> `yxzq-element` 导出的 `SuperButton` 等名称是 Custom Element 类，不是 Vue 或 React 组件。当前版本在框架中也应使用 `<super-button>` 等小写连字符标签。

## 原生 HTML

使用 Vite 等构建工具时，导入主入口会注册全部组件：

```html
<super-button variant="primary">保存</super-button>

<super-select aria-label="选择城市">
  <option value="shanghai">上海</option>
  <option value="hangzhou">杭州</option>
</super-select>

<script type="module">
  import "yxzq-element";
</script>
```

只注册单个组件时，可以使用子路径入口：

```js
import "yxzq-element/button";
import "yxzq-element/form";
import "yxzq-element/select";
```

浏览器不能直接解析 npm 裸模块名称。纯静态 HTML 需要使用 import map、支持 ESM 转换的 CDN，或 Vite 等构建工具。

## Vue

先在 `vite.config.ts` 中让 Vue 模板编译器识别 `super-*` 标签：

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

然后在应用挂载前导入注册入口：

```ts
// main.ts
import "yxzq-element";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

```vue
<template>
  <super-button @click="save">保存</super-button>
  <super-input
    placeholder="请输入内容"
    @super-input="handleInput"
  ></super-input>
</template>
```

请保持 `<super-button>` 的写法。当前包没有 Vue adapter，`<SuperButton>` 会被当成 Vue 组件解析；也不要用 `app.component()` 注册导出的 Lit 元素类。

Vue Official / Volar 的完整标签、属性、事件和模板 `ref` 提示需要在消费项目中添加 `src/custom-elements.d.ts`。可直接复制仓库 Vue 示例中的 [`custom-elements.d.ts`](https://github.com/SupremacySakura/yxzq-element/blob/master/examples/vue/src/custom-elements.d.ts)，完整说明见[开始使用文档](https://supremacysakura.github.io/yxzq-element/guide/getting-started)。

## React

在 `main.tsx` 中先导入注册入口，再渲染应用：

```tsx
import "yxzq-element";

export function App() {
  return (
    <>
      <super-button onClick={() => console.log("save")}>保存</super-button>
      <super-input placeholder="请输入内容" aria-label="内容" />
    </>
  );
}
```

React + TypeScript 项目还需要在 `src/custom-elements.d.ts` 中为用到的标签补充 `JSX.IntrinsicElements` 声明，例如：

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
        variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline" | "ghost" | "text";
        size?: "large" | "medium" | "small";
        disabled?: boolean;
        loading?: boolean;
      };
      "super-input": CustomElementProps & {
        value?: string;
        placeholder?: string;
        clearable?: boolean;
        disabled?: boolean;
      };
    }
  }
}
```

不要使用 `import { SuperButton } from "yxzq-element"` 后直接渲染 `<SuperButton>`：该导出是 `HTMLElement`/`LitElement` 类，不是 React 组件，因此 TypeScript 会报 `TS2786`。完整步骤和更多标签声明、事件接入示例见[开始使用文档](https://supremacysakura.github.io/yxzq-element/guide/getting-started)和仓库中的 [`examples/react`](https://github.com/SupremacySakura/yxzq-element/tree/master/examples/react)。

## 显式注册

对 SSR 或自定义注册时机敏感的应用，可以从 `define` 入口导入：

```ts
import {
  defineSuperButton,
  defineSuperForm,
  defineSuperSelect,
  registerAll,
} from "yxzq-element/define";

defineSuperButton();
defineSuperForm();
defineSuperSelect();
// 或 registerAll();
```

注册函数可以重复执行，并且在 `customElements` 不可用的环境中安全导入。

## 本地开发

开始修改组件、类型、示例、文档或配置前，请先完整阅读 [仓库开发流程指引](./docs/DEVELOPMENT_WORKFLOW.md)。每一次变更都必须同步更新[版本变更记录](./packages/docs/guide/changelog.md)；新增或修改组件时，还必须同步 Vue/React 类型文件与对应组件文档。

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm build
pnpm docs:build
```

发布流程和 npm Trusted Publisher 配置见 [RELEASE.md](./RELEASE.md)。

## 链接

- [在线文档](https://supremacysakura.github.io/yxzq-element/)
- [GitHub 仓库](https://github.com/SupremacySakura/yxzq-element)
- [npm：yxzq-element](https://www.npmjs.com/package/yxzq-element)

## License

[ISC](./LICENSE) © 2026 SupremacySakura
