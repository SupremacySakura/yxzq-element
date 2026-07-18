# Super Components

Super Components 是一套由 [Lit](https://lit.dev/) 驱动的手绘风 Web Component 组件库，npm 主包名为 `yxzq-element`。组件不依赖 Vue 或 React，使用原生 Custom Elements、Shadow DOM、Slot 和跨 Shadow DOM 的自定义事件，因此可以在原生 HTML、Vue、React 或其他前端技术栈中使用。

- 组件标签统一使用 `super-` 前缀，例如 `super-button`、`super-input` 和 `super-select`。
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
import "yxzq-element/select";
```

浏览器不能直接解析 npm 裸模块名称。纯静态 HTML 需要使用 import map、支持 ESM 转换的 CDN，或 Vite 等构建工具。

## Vue

```ts
// main.ts
import { createApp } from "vue";
import "yxzq-element";
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

Vue 的模板编译器需要把 `super-` 标签识别为 Custom Element：

```ts
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("super-"),
    },
  },
});
```

## React

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

React + TypeScript 项目需要为 `super-*` 标签补充 `JSX.IntrinsicElements` 声明。仓库中的 [`examples/react`](https://github.com/SupremacySakura/yxzq-element/tree/master/examples/react) 提供了可复制的类型声明和事件接入示例。

## 显式注册

对 SSR 或自定义注册时机敏感的应用，可以从 `define` 入口导入：

```ts
import {
  defineSuperButton,
  defineSuperSelect,
  registerAll,
} from "yxzq-element/define";

defineSuperButton();
defineSuperSelect();
// 或 registerAll();
```

注册函数可以重复执行，并且在 `customElements` 不可用的环境中安全导入。

## 本地开发

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
