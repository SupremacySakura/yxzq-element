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

Vue 项目需要在模板编译器中设置 `isCustomElement: (tag) => tag.startsWith("super-")`。React + TypeScript 项目需要为 `super-*` 标签补充 `JSX.IntrinsicElements` 声明。完整 HTML、Vue 和 React 示例见项目文档。

- [在线文档](https://supremacysakura.github.io/yxzq-element/)
- [GitHub](https://github.com/SupremacySakura/yxzq-element)
- [发布指南](https://github.com/SupremacySakura/yxzq-element/blob/master/RELEASE.md)

## License

ISC © 2026 SupremacySakura
