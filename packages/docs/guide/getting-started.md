# 开始使用

Super Components 是一套基于 Lit 的手绘风格 Web Component 组件库。组件实现不依赖 Vue 或 React。

> 当前阶段只完成了组件库架构迁移。组件 API 与最终手绘视觉会由项目所有者继续定义。

## 安装

```bash
pnpm add yxzq-element
```

## 注册方式

注册全部组件：

```ts
import "yxzq-element";
```

仅注册 Button：

```ts
import "yxzq-element/button";
```

仅注册 Input：

```ts
import "yxzq-element/input";
```

需要控制注册时机时：

```ts
import { registerAll } from "yxzq-element/define";

registerAll();
```

所有注册入口都可以重复执行，并且能够在没有 `customElements` 的 SSR 环境中安全导入。

## 原生 HTML

```html
<super-button>自定义按钮内容</super-button>
<super-input placeholder="请输入内容"></super-input>

<script type="module">
  import "yxzq-element";
</script>
```

浏览器不能直接解析 npm 的裸模块名称，纯静态 HTML 应使用支持 ESM 转换的 CDN、import map 或 Vite 等构建工具。

## Vue

```ts
// main.ts
import { createApp } from "vue";
import "yxzq-element";
```

```vue
<super-button @click="handleClick">自定义按钮内容</super-button>
<super-input :value="keyword" @super-input="handleInput"></super-input>
```

Vue 构建配置需要把 `super-` 标签识别为 Custom Element：

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
    <super-button onClick={handleClick}>
      自定义按钮内容
    </super-button>
    <super-input placeholder="请输入内容" aria-label="内容" />
  );
}
```

React + TypeScript 项目需要为 `super-*` 标签补充 `JSX.IntrinsicElements` 类型。仓库中的 React 示例提供了可复制的声明。

## 样式边界

组件默认使用 Shadow DOM。外部样式通过以下机制进入组件：

- 继承属性和 `--super-*` CSS Custom Properties。
- 组件声明的 `::part()`。
- 用于内容组合的 Slot。

全局 reset 是可选依赖，不会由 `yxzq-element` 主入口自动注入。
