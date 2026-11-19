# Breadcrumb 面包屑

用手绘分隔符呈现当前位置的层级路径。Breadcrumb 使用原生 `nav`、`ol` 与 `li` 语义，既可以直接接收结构化 `items`，也可以渲染消费者提供的列表。

<div class="breadcrumb-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>面包屑表达层级，不代替页面标题。当前页不要写成链接，并确保路径中的每一级都指向真实可访问的位置。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-breadcrumb`。只注册面包屑或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/breadcrumb";

// SSR 或自定义注册时机
import { defineSuperBreadcrumb } from "yxzq-element/breadcrumb";
defineSuperBreadcrumb();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

通过 `items` 属性传入层级。带 `href` 的项渲染为原生链接，`current: true` 的项渲染为不可点击文本，并带 `aria-current="page"`。分隔符由 `separator` 控制，默认 `/`，所有分隔符都标记为 `aria-hidden`。

<div class="breadcrumb-board">
  <super-breadcrumb id="breadcrumb-basic" aria-label="当前位置"></super-breadcrumb>
</div>

```html
<super-breadcrumb aria-label="当前位置"></super-breadcrumb>
```

```ts
const breadcrumb = document.querySelector("super-breadcrumb");
breadcrumb.items = [
  { label: "首页", href: "/" },
  { label: "组件", href: "/components" },
  { label: "导航", current: true },
];
```

`items` 是 JavaScript 属性，无法通过 HTML attribute 设置。程序化修改数组会同步更新渲染结果，不会派发自定义事件。

## 自定义分隔符

`separator` 接受任意短文本，例如 `›`、`→` 或 `|`。分隔符只作为视觉装饰，不会进入可访问名称。

<div class="breadcrumb-board">
  <super-breadcrumb id="breadcrumb-separator" separator="›" aria-label="带自定义分隔符的位置"></super-breadcrumb>
</div>

```html
<super-breadcrumb separator="›"></super-breadcrumb>
```

## 尺寸

`size` 同时调整字号与项间距。三档尺寸保持相同的层级结构和焦点样式。

<div class="breadcrumb-board breadcrumb-size-board">
  <div class="breadcrumb-size-row">
    <strong>大</strong>
    <super-breadcrumb id="breadcrumb-large" size="large" aria-label="大尺寸示例"></super-breadcrumb>
  </div>
  <div class="breadcrumb-size-row">
    <strong>中</strong>
    <super-breadcrumb id="breadcrumb-medium" aria-label="中尺寸示例"></super-breadcrumb>
  </div>
  <div class="breadcrumb-size-row">
    <strong>小</strong>
    <super-breadcrumb id="breadcrumb-small" size="small" aria-label="小尺寸示例"></super-breadcrumb>
  </div>
</div>

## 折叠中间层级

`max-items` 控制最多显示的层级数量。超出时保留开头若干项与最后一项，中间层级折叠为一个不可交互的省略号；省略号带 `aria-hidden="true"`，不会被读屏或 Tab 键访问。`max-items` 小于 3 时按 3 项计算。

<div class="breadcrumb-board">
  <super-breadcrumb id="breadcrumb-collapsed" max-items="4" aria-label="折叠后的位置"></super-breadcrumb>
</div>

```html
<super-breadcrumb max-items="4"></super-breadcrumb>
```

```ts
breadcrumb.items = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "设计系统", href: "/projects/design" },
  { label: "组件", href: "/projects/design/components" },
  { label: "导航", href: "/projects/design/components/navigation" },
  { label: "Breadcrumb", current: true },
];
```

折叠只影响显示，不改变 `items` 或消费者保存的数据。需要展开入口时，请在页面其他位置提供完整导航。

## 使用默认 Slot

`items` 为空时，默认 Slot 接收消费者提供的 `li` 元素，组件仍会输出外层 `nav` 和 `ol`。不要在 Slot 中再嵌套 `nav` 或 `ol`。链接与当前项由消费者自行标记；`separator` 会作用于 Slot 项之间的分隔符，也可以直接设置 `--super-breadcrumb-separator`，后者在 `separator` 保持默认值时生效。

<div class="breadcrumb-board">
  <super-breadcrumb id="breadcrumb-slot" separator="→" aria-label="自定义内容">
    <li><a href="/">首页</a></li>
    <li><a href="/components">组件</a></li>
    <li aria-current="page">Breadcrumb</li>
  </super-breadcrumb>
</div>

```html
<super-breadcrumb separator="→" aria-label="自定义内容">
  <li><a href="/">首页</a></li>
  <li><a href="/components">组件</a></li>
  <li aria-current="page">Breadcrumb</li>
</super-breadcrumb>
```

## 无障碍与键盘

外层使用 `nav` 和可配置的 `aria-label`；列表使用 `ol`，每一项使用 `li`。当前项通过 `aria-current="page"` 标识，分隔符全部 `aria-hidden`。所有可点击层级都是原生链接，天然支持 Tab、Enter 与浏览器上下文菜单。

| 按键 | 行为 |
| --- | --- |
| `Tab` / `Shift + Tab` | 在相邻链接之间移动 |
| `Enter` | 打开聚焦的链接 |

当前项不是链接，也不会进入 Tab 序列。链接、当前项与纯文本标签的最小命中高度为 24px，满足 WCAG 2.2 AA 的 target-size 要求；密集堆叠多个面包屑时仍保留足够触控面积。若页面中存在多个 `nav`，请为面包屑提供能区分用途的 `aria-label`。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `separator` | `string` | `/` | 层级之间的视觉分隔符 |
| `size` | `large \| medium \| small` | `medium` | 字号与项间距 |
| `max-items` | `number` | `0` | 最多显示的层级数；`0` 表示不折叠 |
| `aria-label` | `string` | `面包屑导航` | 导航区域的可访问名称 |
| `items` | `{ label, href?, current? }[]` | `[]` | 层级数据，仅 JavaScript 属性 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | `items` 为空时渲染的 `li` 列表内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `breadcrumb` | 外层 `nav` |
| `list` | 内部 `ol` |
| `item` | 单个 `li` |
| `link` | 内置链接 |
| `current` | 当前页文本 |
| `label` | 无链接的非当前项文本 |
| `separator` | 分隔符 |
| `ellipsis` | 折叠省略号 |
| `ellipsis-item` | 折叠项外壳 |

### CSS Custom Properties

```css
super-breadcrumb {
  --super-breadcrumb-gap: var(--super-spacing-sm);
  --super-breadcrumb-font-size: var(--super-font-size-base);
  --super-breadcrumb-color: var(--super-text-color-secondary);
  --super-breadcrumb-link-color: var(--super-text-color-regular);
  --super-breadcrumb-current-color: var(--super-text-color-primary);
  --super-breadcrumb-separator-color: var(--super-text-color-placeholder);
  --super-breadcrumb-separator: "/";
  --super-breadcrumb-focus-color: var(--super-focus-color);
  --super-breadcrumb-radius: 6px 8px 5px 7px / 6px 5px 7px 6px;
  --super-breadcrumb-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-breadcrumb` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。`max-items` 只折叠中间项，不会自动生成菜单或展开按钮。使用默认 Slot 时，组件只负责外层语义与分隔符样式；当前项的 `aria-current` 必须由消费者显式设置。

<script setup>
import { onMounted } from "vue";

const basicItems = [
  { label: "首页", href: "/" },
  { label: "组件", href: "/components" },
  { label: "导航", href: "/components/navigation" },
  { label: "Breadcrumb", current: true },
];

onMounted(() => {
  document.querySelectorAll("super-breadcrumb").forEach((breadcrumb) => {
    if (breadcrumb.id === "breadcrumb-collapsed") {
      breadcrumb.items = [
        { label: "首页", href: "/" },
        { label: "项目", href: "/projects" },
        { label: "设计系统", href: "/projects/design" },
        { label: "组件", href: "/projects/design/components" },
        { label: "导航", href: "/projects/design/components/navigation" },
        { label: "Breadcrumb", current: true },
      ];
    } else if (breadcrumb.id !== "breadcrumb-slot") {
      breadcrumb.items = basicItems;
    }
  });
});
</script>

<style>
.breadcrumb-note {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.75rem;
  align-items: center;
  margin: 1.5rem 0 2rem;
  padding: 0.85rem 1rem;
  color: #3f352b;
  background: #fffaf0;
  border: 1.5px dashed #9a7b57;
  border-radius: 12px 8px 11px 9px;
}

.breadcrumb-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.breadcrumb-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.breadcrumb-size-board {
  display: grid;
  gap: 1.2rem;
}

.breadcrumb-size-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.breadcrumb-size-row > strong {
  flex: none;
  width: 1.5rem;
}

html.dark .breadcrumb-note,
html.dark .breadcrumb-board {
  color: #292524;
}

@media (max-width: 720px) {
  .breadcrumb-board {
    padding: 1rem;
  }

  .breadcrumb-note {
    grid-template-columns: auto 1fr;
  }

  .breadcrumb-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
