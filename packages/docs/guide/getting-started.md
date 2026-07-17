# 开始使用

Super Components 是一套基于 Lit 的手绘风格 Web Component 组件库。组件实现不依赖 Vue 或 React。

当前提供 Button、Input、Checkbox、Radio、Switch 与 Select 组件。每个组件都保留原生语义，并通过手绘视觉、Shadow DOM 和跨框架事件组成一致的消费体验。

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

仅注册 Select：

```ts
import "yxzq-element/select";
```

选择器组件也支持分别注册：

```ts
import "yxzq-element/checkbox";
import "yxzq-element/radio";
import "yxzq-element/switch";
```

需要控制注册时机时：

```ts
import { registerAll } from "yxzq-element/define";

registerAll();
```

也可以显式注册单个组件，并按需传入自定义的 `CustomElementRegistry`：

```ts
import {
  defineSuperCheckbox,
  defineSuperRadio,
  defineSuperSelect,
  defineSuperSwitch,
} from "yxzq-element/define";

defineSuperCheckbox();
defineSuperRadio();
defineSuperSelect();
defineSuperSwitch();
```

所有注册入口都可以重复执行，并且能够在没有 `customElements` 的 SSR 环境中安全导入。

## 原生 HTML

```html
<super-button>自定义按钮内容</super-button>
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
<super-checkbox checked @super-checkbox-change="handleCheckboxChange">
  接收更新通知
</super-checkbox>
<super-radio name="plan" value="standard" checked>标准版</super-radio>
<super-radio name="plan" value="advanced">高级版</super-radio>
<super-switch checked @super-switch-change="handleSwitchChange">
  自动同步
</super-switch>
<super-select value="hangzhou" @super-select-change="handleSelectChange">
  <option value="shanghai">上海</option>
  <option value="hangzhou">杭州</option>
</super-select>
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
    <>
      <super-button onClick={handleClick}>
        自定义按钮内容
      </super-button>
      <super-input placeholder="请输入内容" aria-label="内容" />
      <super-checkbox checked>接收更新通知</super-checkbox>
      <super-radio name="plan" value="standard" checked>
        标准版
      </super-radio>
      <super-radio name="plan" value="advanced">高级版</super-radio>
      <super-switch checked aria-label="自动同步">
        自动同步
      </super-switch>
      <super-select value="hangzhou" aria-label="选择城市">
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
      </super-select>
    </>
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
