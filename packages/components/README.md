# @yxzq-element/components

Super Components 的 Lit 组件实现包。它包含 `SuperButton`、`SuperInput`、`SuperForm`、`SuperCheckbox`、`SuperRadio`、`SuperSwitch` 和 `SuperSelect` 等类与显式注册函数，不依赖 Vue 或 React。`SuperForm` 不内置字段组件，通过配置接收任意 Custom Element 或渲染函数。

大多数应用应安装并使用主包：

```bash
pnpm add yxzq-element
```

```js
import "yxzq-element";
```

只有在组件库二次封装、SSR 注册控制或自定义 `CustomElementRegistry` 等高级场景中，才需要直接使用本包：

```bash
pnpm add @yxzq-element/components
```

```ts
import {
  SuperButton,
  defineSuperButton,
} from "@yxzq-element/components/button";

defineSuperButton();

const button = document.createElement("super-button") as SuperButton;
button.textContent = "保存";
document.body.append(button);
```

所有 Custom Element 标签使用 `super-` 前缀，公共 CSS 变量使用 `--super-` 前缀，自定义事件使用 `super-` 前缀。组件基于 Shadow DOM、Slot、CSS Parts 和原生语义设计。

Vue 消费者需要配置 `isCustomElement: (tag) => tag.startsWith("super-")`；React + TypeScript 消费者需要提供 `JSX.IntrinsicElements` 声明。跨框架应用的完整 HTML、Vue 和 React 示例请使用主包文档。

- [在线文档](https://supremacysakura.github.io/yxzq-element/)
- [GitHub](https://github.com/SupremacySakura/yxzq-element)
- [npm 主包](https://www.npmjs.com/package/yxzq-element)

## License

ISC © 2026 SupremacySakura
