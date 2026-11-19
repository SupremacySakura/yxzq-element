# Tooltip 文字提示

`super-tooltip` 是一款手绘风文字提示层。默认 Slot 放置触发元素，`content` 属性或 `content` Slot 提供提示内容；组件通过 Floating UI 跟随触发元素定位，并在窄屏或页面滚动时自动翻转、避让视口边缘。

<div class="tooltip-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>Tooltip 只补充简短说明，不应承载必须完成的操作。需要表单、按钮或链接时，请明确设置 <code>interactive</code>，并评估是否更适合 Popover 或 Dialog。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-tooltip`。只注册文字提示或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/tooltip";

// SSR 或自定义注册时机
import { defineSuperTooltip } from "yxzq-element/tooltip";
defineSuperTooltip();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

将触发元素放进默认 Slot。`content` 是最直接的文本来源；未设置时读取 `slot="content"` 的节点。弹层使用 `role="tooltip"`，打开时把提示层的 `id` 追加到触发元素的 `aria-describedby`。

<div class="tooltip-board tooltip-basic-grid">
  <super-tooltip content="保存当前修改">
    <super-button variant="outline">保存</super-button>
  </super-tooltip>
  <super-tooltip>
    <span slot="content">这里可以放 <strong>富文本</strong> 说明。</span>
    <super-button variant="secondary">富文本提示</super-button>
  </super-tooltip>
  <super-tooltip content="不会锁定页面滚动" placement="bottom">
    <button class="tooltip-native-trigger" type="button">默认非交互</button>
  </super-tooltip>
</div>

```html
<super-tooltip content="保存当前修改">
  <super-button variant="outline">保存</super-button>
</super-tooltip>

<super-tooltip>
  <span slot="content">这里可以放 <strong>富文本</strong> 说明。</span>
  <super-button variant="secondary">富文本提示</super-button>
</super-tooltip>
```

## 触发方式

`trigger="hover"` 同时监听指针进入与离开，关闭前等待 `delay` 毫秒；`focus` 使用 `focusin` / `focusout`，适合键盘用户；`click` 点击切换，并在外部点击时关闭。三种方式都支持 `Escape` 关闭并回到触发元素。

<div class="tooltip-board tooltip-trigger-grid">
  <div class="tooltip-spec">
    <span>悬停</span>
    <super-tooltip content="指针停留后出现" trigger="hover">
      <super-button variant="outline">悬停查看</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>聚焦</span>
    <super-tooltip content="用 Tab 聚焦触发" trigger="focus">
      <super-button variant="outline">聚焦查看</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>点击</span>
    <super-tooltip content="点击外部即可关闭" trigger="click">
      <super-button variant="outline">点击切换</super-button>
    </super-tooltip>
  </div>
</div>

```html
<super-tooltip content="指针停留后出现" trigger="hover">
  <super-button variant="outline">悬停查看</super-button>
</super-tooltip>

<super-tooltip content="用 Tab 聚焦触发" trigger="focus">
  <super-button variant="outline">聚焦查看</super-button>
</super-tooltip>

<super-tooltip content="点击外部即可关闭" trigger="click">
  <super-button variant="outline">点击切换</super-button>
</super-tooltip>
```

## 方向与外观

`placement` 接受十二个方向值。Floating UI 会在空间不足时自动翻转，并通过 `shift` 保持弹层在视口内。`show-arrow` 控制手绘箭头，`max-width` 控制文本换行宽度，`offset` 控制与触发元素的距离。

<div class="tooltip-board tooltip-placement-grid">
  <div class="tooltip-spec">
    <span>top-start</span>
    <super-tooltip content="从左上展开" placement="top-start">
      <super-button variant="secondary" shape="square" aria-label="左上提示">↖</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>bottom-end</span>
    <super-tooltip content="从右下展开，内容较长时会自动换行并避让边缘" placement="bottom-end" max-width="180">
      <super-button variant="secondary" shape="square" aria-label="右下提示">↘</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>left</span>
    <super-tooltip content="左侧提示" placement="left">
      <super-button variant="outline">←</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>right</span>
    <super-tooltip content="右侧提示" placement="right">
      <super-button variant="outline">→</super-button>
    </super-tooltip>
  </div>
  <div class="tooltip-spec">
    <span>无箭头</span>
    <super-tooltip content="没有装饰箭头" placement="bottom" show-arrow="false">
      <super-button variant="ghost">无箭头</super-button>
    </super-tooltip>
  </div>
</div>

```html
<super-tooltip content="从左上展开" placement="top-start">
  <super-button variant="secondary" shape="square" aria-label="左上提示">↖</super-button>
</super-tooltip>

<super-tooltip
  content="内容较长时会自动换行并避让边缘"
  placement="bottom-end"
  max-width="180"
>
  <super-button variant="secondary" shape="square" aria-label="右下提示">↘</super-button>
</super-tooltip>
```

## 交互内容

默认情况下弹层为 `pointer-events: none`，不会抢走触发元素的指针事件，也不会锁定页面滚动。设置 `interactive` 后，弹层可接收指针与焦点，组件会启用滚动锁定和焦点陷阱，允许在提示层内部完成轻量交互。

<div class="tooltip-board tooltip-interactive-grid">
  <super-tooltip
    trigger="click"
    interactive
    placement="bottom"
    max-width="260"
  >
    <span slot="content">
      <strong>快速操作</strong>
      <span class="tooltip-actions">
        <button type="button" class="tooltip-action">稍后提醒</button>
        <button type="button" class="tooltip-action tooltip-action-primary">知道了</button>
      </span>
    </span>
    <super-button variant="success">打开交互提示</super-button>
  </super-tooltip>
</div>

```html
<super-tooltip trigger="click" interactive placement="bottom">
  <span slot="content">
    <strong>快速操作</strong>
    <button type="button">知道了</button>
  </span>
  <super-button variant="success">打开交互提示</super-button>
</super-tooltip>
```

## 受控与禁用

`open` 同时支持受控与非受控用法。HTML `open` attribute 只作为初始默认值；通过 property 写入后进入受控模式，程序化修改不会派发 `super-tooltip-open-change`。

悬停、聚焦、点击、外部点击或 `Escape` 等用户操作会先更新内部显示状态并派发 open-change，然后在下一个动画帧确认父级是否写回。父级在事件中同步写回新值即接受；不写入时恢复最近一次外部提交状态。`disabled` 会立即关闭并阻止再次打开。

```html
<super-tooltip id="controlled-tooltip" content="由外部状态控制">
  <super-button variant="outline">受控提示</super-button>
</super-tooltip>

<script>
  const tooltip = document.getElementById("controlled-tooltip");
  tooltip.addEventListener("super-tooltip-open-change", (event) => {
    tooltip.open = event.detail.open;
  });

  tooltip.open = true;
</script>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `content` | `string` | 空字符串 | 提示文本；优先于 `content` Slot |
| `placement` | `top \| top-start \| top-end \| bottom \| bottom-start \| bottom-end \| left \| left-start \| left-end \| right \| right-start \| right-end` | `top` | 首选方向；空间不足时自动翻转 |
| `trigger` | `hover \| focus \| click` | `hover` | 用户触发方式 |
| `disabled` | `boolean` | `false` | 禁用后立即关闭并阻止用户打开 |
| `open` | `boolean` | `false` | 受控显示状态；程序化修改不派发用户事件 |
| `delay` | `number` | `120` | 关闭延迟，单位毫秒；悬停和失焦关闭共用 |
| `offset` | `number` | `8` | 弹层与触发元素的像素距离 |
| `max-width` | `number` | `280` | 弹层最大宽度，单位像素 |
| `show-arrow` | `boolean` | `true` | 是否渲染手绘箭头 |
| `interactive` | `boolean` | `false` | 允许弹层内交互，并启用焦点陷阱与滚动锁定 |
| `size` | `large \| medium \| small` | `medium` | 尺寸；调整字号、内边距与箭头尺寸 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-tooltip-open-change` | 用户交互导致显示状态变化时派发，`detail.open` 为最新状态；事件同时设置 `bubbles: true` 与 `composed: true` |

```ts
tooltip.addEventListener("super-tooltip-open-change", (event) => {
  const { open } = (event as CustomEvent<{ open: boolean }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 第一个元素作为触发元素，并获得 `aria-describedby` 关联 |
| `content` | 提示内容；仅在没有 `content` 属性时使用 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `tooltip` | 提示层表面，可用于覆盖内边距、背景或描边 |
| `arrow` | 装饰箭头；关闭 `show-arrow` 后不存在 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-tooltip {
  --super-tooltip-background: var(--super-background-color, #fffef9);
  --super-tooltip-color: var(--super-text-color-primary, #292524);
  --super-tooltip-border-color: var(--super-border-color, #2f2a27);
  --super-tooltip-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-tooltip-focus-color: var(--super-focus-color, #56c6b7);
  --super-tooltip-font-size: var(--super-font-size-sm, 13px);
  --super-tooltip-padding-block: 7px;
  --super-tooltip-padding-inline: 10px;
  --super-tooltip-max-width: 280px;
  --super-tooltip-arrow-size: 9px;
  --super-tooltip-z-index: var(--super-z-index-overlay, 2000);
  --super-tooltip-rotation: -0.2deg;
}
```

## 无障碍

打开时，组件为默认 Slot 的第一个元素追加 `aria-describedby`，并让提示层使用 `role="tooltip"`；关闭时移除自己添加的引用，不覆盖触发元素原有的 `aria-describedby`。`Escape` 会关闭提示并把焦点送回触发元素。`interactive` 模式下，Tab 循环限制在触发元素与提示层内容之间，关闭后回到触发元素；非交互模式不锁定页面滚动，也不改变焦点顺序。

触发元素必须本身可聚焦或可被指针操作。Tooltip 不替代可见标签，也不应成为传达关键信息的唯一方式；`content` 文本应简短，并在需要富文本时保留可被辅助技术读取的结构。

## 已知边界

Tooltip 不是表单关联元素，也不参与 `FormData`、原生表单重置或约束验证。弹层固定定位在组件 Shadow DOM 内，遇到祖先 `transform`、`filter` 或 `contain` 创建的包含块时，视觉位置可能受该包含块影响。交互提示只适合轻量内容；需要复杂表单、长文本或多步操作时，应使用专门的面板或模态组件。

<style>
.tooltip-note {
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

.tooltip-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.tooltip-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.tooltip-basic-grid,
.tooltip-trigger-grid,
.tooltip-placement-grid,
.tooltip-interactive-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2rem;
  align-items: center;
}

.tooltip-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  color: #292524;
  font-size: 0.82rem;
  font-weight: 700;
}

.tooltip-native-trigger {
  padding: 0.55rem 0.9rem;
  color: #16428f;
  font: inherit;
  font-weight: 700;
  background: #eef5ff;
  border: 2px dashed #16428f;
  border-radius: 8px 11px 7px 10px;
  cursor: help;
}

.tooltip-native-trigger:focus-visible {
  outline: 3px solid #56c6b7;
  outline-offset: 3px;
}

.tooltip-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.65rem;
}

.tooltip-action {
  padding: 0.25rem 0.55rem;
  color: #292524;
  font: inherit;
  background: #fffef9;
  border: 1.5px solid #292524;
  border-radius: 6px 8px 5px 7px;
  cursor: pointer;
}

.tooltip-action-primary {
  color: #16428f;
  border-color: #16428f;
}

.tooltip-action:focus-visible {
  outline: 2px solid #56c6b7;
  outline-offset: 2px;
}

html.dark .tooltip-note,
html.dark .tooltip-board {
  color: #292524;
}

@media (max-width: 720px) {
  .tooltip-board {
    padding: 1rem;
  }

  .tooltip-note {
    grid-template-columns: auto 1fr;
  }

  .tooltip-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
