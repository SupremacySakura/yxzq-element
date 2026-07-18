# @yxzq-element/utils

Super Components 使用的框架无关 Custom Element 工具包。当前主要提供安全、幂等的元素注册辅助能力，不依赖 Vue 或 React。

普通应用不需要直接安装本包，请使用 Lit Web Components 主包：

```bash
pnpm add yxzq-element
```

```html
<super-button>保存</super-button>

<script type="module">
  import "yxzq-element";
</script>
```

组件库二次开发时可以直接调用注册工具：

```ts
import { defineCustomElement } from "@yxzq-element/utils";

defineCustomElement("super-example", SuperExample);
```

所有项目组件标签统一使用 `super-` 前缀。Vue 需要把该前缀识别为 Custom Element；React + TypeScript 需要为对应标签补充 JSX 声明。完整 HTML、Vue 和 React 用法请查阅：

- [在线文档](https://supremacysakura.github.io/yxzq-element/)
- [GitHub](https://github.com/SupremacySakura/yxzq-element)
- [npm 主包](https://www.npmjs.com/package/yxzq-element)

## License

ISC © 2026 SupremacySakura
