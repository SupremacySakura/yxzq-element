# Tag 标签

轻巧的手绘风标签，用于标记分类、状态或可移除的筛选条件。

## 注册

```ts
import "yxzq-element/tag";
```

也可以显式注册：

```ts
import { defineSuperTag } from "yxzq-element/tag";

defineSuperTag();
```

重复注册是安全的；SSR 环境中没有 `customElements` 时不会抛错。

## 类型

`variant` 提供六种语义色。标签本身是展示内容，只有开启 `closable` 后才会出现一个可聚焦的关闭按钮。

<div class="tag-board tag-variant-grid">
  <super-tag>默认</super-tag>
  <super-tag variant="primary">主要</super-tag>
  <super-tag variant="success">成功</super-tag>
  <super-tag variant="warning">警告</super-tag>
  <super-tag variant="danger">危险</super-tag>
  <super-tag variant="info">信息</super-tag>
</div>

`variant="primary"` 适合强调当前筛选，`success`、`warning`、`danger` 和 `info` 用于状态说明。标签文字色由共享语义色与 `--super-text-color-primary` 混合，浅色背景下仍保持可读。

```html
<super-tag>默认</super-tag>
<super-tag variant="primary">主要</super-tag>
<super-tag variant="success">成功</super-tag>
<super-tag variant="warning">警告</super-tag>
<super-tag variant="danger">危险</super-tag>
<super-tag variant="info">信息</super-tag>
```

## 尺寸

<div class="tag-board tag-size-grid">
  <div class="tag-size-row">
    <strong>大</strong>
    <super-tag size="large" variant="primary">大型标签</super-tag>
    <super-tag size="large" variant="success" closable>可移除</super-tag>
  </div>
  <div class="tag-size-row">
    <strong>中</strong>
    <super-tag variant="primary">中型标签</super-tag>
    <super-tag variant="success" closable>可移除</super-tag>
  </div>
  <div class="tag-size-row">
    <strong>小</strong>
    <super-tag size="small" variant="primary">小型标签</super-tag>
    <super-tag size="small" variant="success" closable>可移除</super-tag>
  </div>
</div>

## 可移除

点击关闭按钮会派发 `super-tag-close`。事件冒泡且可跨越 Shadow DOM，`detail.value` 来自标签的 `value` 属性。组件不会自行删除节点，由消费者决定是否移除。

<div class="tag-board tag-demo-row">
  <super-tag variant="primary" value="design" closable>设计</super-tag>
</div>

```html
<super-tag value="design" closable>设计</super-tag>
```

```ts
const tag = document.querySelector("super-tag");
tag.addEventListener("super-tag-close", (event) => {
  console.log(event.detail.value);
  tag.remove();
});
```

## 自定义关闭文案

关闭按钮默认的无障碍名称为“移除标签”，可通过 `close-label` 覆盖。

<div class="tag-board tag-demo-row">
  <super-tag variant="danger" closable close-label="删除此筛选项">待删除条件</super-tag>
</div>

```html
<super-tag closable close-label="删除此筛选项">待删除条件</super-tag>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `default \| primary \| success \| warning \| danger \| info` | `default` | 视觉与语义类型 |
| `size` | `large \| medium \| small` | `medium` | 标签尺寸 |
| `closable` | `boolean` | `false` | 显示关闭按钮 |
| `value` | `string` | 空字符串 | 关闭事件 `detail.value` 的取值 |
| `close-label` | `string` | `移除标签` | 关闭按钮的可访问名称 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-tag-close` | `{ value: string }` | 用户点击关闭按钮；`bubbles: true`、`composed: true` |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 标签文字或消费者提供的图标内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `tag` | 主容器 |
| `label` | 标签内容区域 |
| `close` | 关闭按钮，仅在 `closable` 时存在 |

### CSS Custom Properties

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| `--super-tag-height` | `27px` | 最小高度 |
| `--super-tag-padding-inline` | `10px` | 水平内边距 |
| `--super-tag-gap` | `5px` | 内容与关闭按钮间距 |
| `--super-tag-font-size` | `var(--super-font-size-sm, 13px)` | 字号 |
| `--super-tag-font-weight` | `700` | 字重 |
| `--super-tag-color` | `var(--super-text-color-regular, #4a4441)` | 文字色 |
| `--super-tag-background` | `var(--super-background-color-soft, #f7f4ec)` | 背景色 |
| `--super-tag-border-color` | `var(--super-border-color-light, #b6ada6)` | 边框色 |
| `--super-tag-shadow-color` | 由 `--super-sketch-shadow` 派生的半透明色 | 手绘阴影色 |
| `--super-tag-focus-color` | `var(--super-focus-color, #56c6b7)` | 关闭按钮焦点环颜色 |
| `--super-tag-radius` | 由 `--super-radius-sm/md/lg` 组合的不对称圆角 | 主容器圆角 |
| `--super-tag-rotation` | `var(--super-sketch-rotation, -0.25deg)` | 手绘倾斜角 |
| `--super-sketch-width` | `2px` | 边框宽度，来自共享令牌 |

## 无障碍

- 标签主体是非交互内容，不会被宣称为按钮；只有 `closable` 时的关闭按钮是原生 `button`。
- 关闭按钮的 `aria-label` 默认为“移除标签”，可通过 `close-label` 本地化。
- 关闭按钮支持键盘聚焦，并保留可见的 `:focus-visible` 焦点环。
- 关闭事件只表示用户意图，组件不会擅自移除 DOM 节点。

## 已知边界

- `value` 默认是空字符串；需要事件携带标识时请显式设置。
- 默认 Slot 中的交互内容需由消费者自行处理，标签不会替其管理键盘行为。
- 手绘倾斜与圆角会轻微超出文字包围盒，密集排列时应预留间距。

<style>
.tag-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.tag-variant-grid,
.tag-demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.tag-size-grid {
  display: grid;
  gap: 1.15rem;
}

.tag-size-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.tag-size-row > strong {
  inline-size: 1.5rem;
  color: #3f352b;
}

html.dark .tag-board {
  color: #292524;
}
</style>
