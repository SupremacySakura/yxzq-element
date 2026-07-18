# yxzq-element

`yxzq-element` 是 Super Components 的 npm 主入口：一套由 Lit 实现、具有原创手绘风格的框架无关 Web Component 组件库。所有 Custom Element 标签都使用 `super-` 前缀，可以在原生 HTML、Vue、React 或其他前端技术栈中使用。

## 安装

```bash
pnpm add yxzq-element
```

## 注册组件

导入主入口会注册全部组件：

```js
import "yxzq-element";
```

也可以只注册需要的组件：

```js
import "yxzq-element/button";
import "yxzq-element/input";
import "yxzq-element/select";
```

需要显式控制注册时机时：

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

## 基础用法

```html
<super-button variant="primary">保存</super-button>
<super-input placeholder="请输入内容"></super-input>
<super-select aria-label="选择城市">
  <option value="shanghai">上海</option>
  <option value="hangzhou">杭州</option>
</super-select>
```

框架中的正确消费方式仍然是注册原生 Custom Element 后使用小写标签：

- Vue + Vite：在模板编译器中设置 `isCustomElement: (tag) => tag.startsWith("super-")`，在 `mount()` 前导入注册入口，复制 Vue 示例的完整 `custom-elements.d.ts`，然后使用 `<super-button>`。
- React + TypeScript：在 `render()` 前导入注册入口，为 `super-*` 标签补充 `JSX.IntrinsicElements`，然后使用 `<super-button>`。

包中导出的 `SuperButton` 等名称是 `HTMLElement`/`LitElement` 类，不是 Vue 或 React 组件。当前版本不能将它们直接写成 `<SuperButton>`，也不能通过 Vue 的 `app.component()` 把它们变成 Vue 组件。完整配置、React 类型声明和可运行示例见[开始使用文档](https://supremacysakura.github.io/yxzq-element/guide/getting-started)。

- [在线文档](https://supremacysakura.github.io/yxzq-element/)
- [GitHub](https://github.com/SupremacySakura/yxzq-element)
- [发布指南](https://github.com/SupremacySakura/yxzq-element/blob/master/RELEASE.md)

## License

ISC © 2026 SupremacySakura
