# Popover 弹出框

`super-popover` 是一款可承载交互内容的手绘风弹出层。默认 Slot 放置触发元素，`title` 与 `content` 属性提供基础文案，也可以通过 `content` Slot 放置按钮、链接或表单等富内容。弹层由 Floating UI 跟随触发元素定位，并在空间不足时自动翻转、避让视口边缘。

<div class="popover-note">
  <span aria-hidden="true">✎</span>
  <strong>选择提示</strong>
  <span>简短说明优先使用 Tooltip；需要承载按钮、链接或表单时使用 Popover；需要阻断页面操作或收集大段内容时使用 Dialog。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-popover`。只注册弹出框或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/popover";

// SSR 或自定义注册时机
import { defineSuperPopover } from "yxzq-element/popover";
defineSuperPopover();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

将触发元素放进默认 Slot。`title` 显示在顶部，`content` 属性作为纯文本内容；打开后弹层使用 `role="dialog"`，触发元素同步获得 `aria-expanded="true"`、`aria-haspopup="dialog"` 与指向弹层的 `aria-controls`。

<div class="popover-board popover-basic-grid">
  <super-popover title="保存说明" content="修改会保留在当前草稿中，发布后才会同步给协作者。">
    <super-button variant="outline">查看保存规则</super-button>
  </super-popover>
  <super-popover
    title="导出范围"
    placement="bottom-end"
    width="320"
  >
    <span slot="content">
      当前视图包含 <strong>12 条记录</strong>，导出时会保留筛选条件和列顺序。
    </span>
    <super-button variant="secondary">导出当前视图</super-button>
  </super-popover>
</div>

```html
<super-popover
  title="保存说明"
  content="修改会保留在当前草稿中，发布后才会同步给协作者。"
>
  <super-button variant="outline">查看保存规则</super-button>
</super-popover>

<super-popover title="导出范围" placement="bottom-end" width="320">
  <span slot="content">
    当前视图包含 <strong>12 条记录</strong>，导出时会保留筛选条件和列顺序。
  </span>
  <super-button variant="secondary">导出当前视图</super-button>
</super-popover>
```

`content` Slot 存在时优先于 `content` 属性，可用于图标、强调文本和语义化结构。

## 触发方式

`trigger="click"` 点击切换，并支持键盘激活；`hover` 在指针进入或触发元素获得焦点时打开，离开触发元素和弹层后延迟关闭；`manual` 完全由 `open` 属性控制，适合由菜单按钮、路由或外部状态驱动的场景。

<div class="popover-board popover-trigger-grid">
  <div class="popover-spec">
    <span>点击</span>
    <super-popover title="筛选条件" content="点击外部或按 Escape 关闭。">
      <super-button variant="outline">点击打开</super-button>
    </super-popover>
  </div>
  <div class="popover-spec">
    <span>悬停</span>
    <super-popover title="快捷预览" trigger="hover" content="指针移入弹层时保持打开。">
      <super-button variant="secondary">悬停查看</super-button>
    </super-popover>
  </div>
  <div class="popover-spec">
    <span>手动</span>
    <super-popover id="manual-popover" trigger="manual" title="手动控制" content="由外部状态决定显示。">
      <super-button variant="ghost" id="manual-popover-trigger">受控打开</super-button>
    </super-popover>
  </div>
</div>

```html
<super-popover trigger="click" title="筛选条件" content="点击外部或按 Escape 关闭。">
  <super-button variant="outline">点击打开</super-button>
</super-popover>

<super-popover trigger="hover" title="快捷预览" content="指针移入弹层时保持打开。">
  <super-button variant="secondary">悬停查看</super-button>
</super-popover>

<super-popover id="manual-popover" trigger="manual" title="手动控制">
  <super-button variant="ghost" id="manual-popover-trigger">受控打开</super-button>
</super-popover>

<script>
  const popover = document.getElementById("manual-popover");
  document
    .getElementById("manual-popover-trigger")
    .addEventListener("click", () => {
      popover.open = true;
    });
  popover.open = true;
</script>
```

使用非原生触发元素时，请自行提供 `tabindex="0"` 与可访问名称；组件会为 `Enter` 和空格补充激活行为。

## 方向与宽度

`placement` 接受十二个方向值。Floating UI 会在空间不足时自动翻转，并通过 `shift` 保持弹层在视口内。`offset` 控制与触发元素的距离，`width` 设置弹层宽度，`arrow` 控制手绘箭头。

<div class="popover-board popover-placement-grid">
  <div class="popover-spec">
    <span>top-start</span>
    <super-popover title="左上展开" placement="top-start" content="从触发元素的左上方展开。">
      <super-button variant="secondary" shape="square" aria-label="左上弹出">↖</super-button>
    </super-popover>
  </div>
  <div class="popover-spec">
    <span>bottom-end</span>
    <super-popover title="右下展开" placement="bottom-end" width="300" content="内容较长时会自动换行，并避让视口边缘。">
      <super-button variant="secondary" shape="square" aria-label="右下弹出">↘</super-button>
    </super-popover>
  </div>
  <div class="popover-spec">
    <span>left</span>
    <super-popover title="左侧" placement="left" content="适合页面右侧的操作。">
      <super-button variant="outline">←</super-button>
    </super-popover>
  </div>
  <div class="popover-spec">
    <span>无箭头</span>
    <super-popover title="简洁弹层" placement="bottom" arrow="false" content="关闭装饰箭头。">
      <super-button variant="ghost">无箭头</super-button>
    </super-popover>
  </div>
</div>

```html
<super-popover title="右下展开" placement="bottom-end" width="300">
  <super-button variant="secondary" shape="square" aria-label="右下弹出">↘</super-button>
</super-popover>

<super-popover title="简洁弹层" arrow="false">
  <super-button variant="ghost">无箭头</super-button>
</super-popover>
```

## 交互内容

弹层内部可以放置原生按钮、链接、复选框或轻量表单。内容区域限制最大高度并允许内部滚动，不会锁定页面滚动；请避免在 Popover 中放入需要长时间完成的多步流程。

<div class="popover-board">
  <super-popover title="通知设置" width="330" placement="bottom-start">
    <span slot="content" class="popover-actions">
      <label class="popover-choice">
        <input type="checkbox" checked />
        <span>每日摘要</span>
      </label>
      <label class="popover-choice">
        <input type="checkbox" />
        <span>评论提醒</span>
      </label>
      <span class="popover-action-row">
        <button type="button" class="popover-action">取消</button>
        <button type="button" class="popover-action popover-action-primary">保存设置</button>
      </span>
    </span>
    <super-button variant="success">通知设置</super-button>
  </super-popover>
</div>

```html
<super-popover title="通知设置" width="330" placement="bottom-start">
  <span slot="content">
    <label><input type="checkbox" checked /> 每日摘要</label>
    <label><input type="checkbox" /> 评论提醒</label>
    <button type="button">保存设置</button>
  </span>
  <super-button variant="success">通知设置</super-button>
</super-popover>
```

## 受控与禁用

`open` 是受控状态。直接设置属性会更新显示，但不会派发 `super-popover-open-change`；只有点击、悬停、键盘激活、外部点击或 `Escape` 等用户操作才会派发。`disabled` 会立即关闭并阻止再次打开。

```html
<super-popover id="controlled-popover" trigger="manual" title="由外部状态控制">
  <super-button variant="outline">受控弹出框</super-button>
</super-popover>

<script>
  const popover = document.getElementById("controlled-popover");
  popover.addEventListener("super-popover-open-change", (event) => {
    popover.open = event.detail.open;
  });

  popover.open = true;
</script>
```

`close-on-outside-click` 与 `close-on-escape` 默认开启，可分别关闭对应行为。无论哪种触发方式，`Escape` 关闭后都会把焦点送回触发元素。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；程序化修改不派发用户事件 |
| `placement` | `top \| top-start \| top-end \| bottom \| bottom-start \| bottom-end \| left \| left-start \| left-end \| right \| right-start \| right-end` | `bottom` | 首选方向；空间不足时自动翻转 |
| `trigger` | `click \| hover \| manual` | `click` | 用户触发方式；`manual` 只响应 `open` |
| `title` | `string` | 空字符串 | 弹层标题，同时作为 `aria-labelledby` 的目标 |
| `content` | `string` | 空字符串 | 纯文本内容；存在 `content` Slot 时由 Slot 覆盖 |
| `disabled` | `boolean` | `false` | 禁用后立即关闭并阻止用户打开 |
| `arrow` | `boolean` | `true` | 是否渲染手绘箭头 |
| `offset` | `number` | `8` | 弹层与触发元素的像素距离 |
| `width` | `number` | `280` | 弹层宽度，单位像素；非正数时使用自适应宽度 |
| `close-on-outside-click` | `boolean` | `true` | 外部指针按下时关闭 |
| `close-on-escape` | `boolean` | `true` | 按 `Escape` 时关闭并回焦 |
| `size` | `large \| medium \| small` | `medium` | 尺寸；调整字号、内边距、间距与箭头尺寸 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-popover-open-change` | 用户交互导致显示状态变化时派发，`detail.open` 为最新状态；事件同时设置 `bubbles: true` 与 `composed: true` |

```ts
popover.addEventListener("super-popover-open-change", (event) => {
  const { open } = (event as CustomEvent<{ open: boolean }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 第一个元素作为触发元素，并接收 `aria-expanded`、`aria-haspopup` 与 `aria-controls` |
| `content` | 弹层内容；存在时覆盖 `content` 属性 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `popover` | 弹层表面，可用于覆盖背景、描边、内边距或阴影 |
| `arrow` | 装饰箭头；关闭 `arrow` 后不存在 |
| `title` | 标题区域 |
| `content` | 内容区域 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-popover {
  --super-popover-background: var(--super-background-color, #fffef9);
  --super-popover-color: var(--super-text-color-primary, #292524);
  --super-popover-content-color: var(--super-text-color-regular, #4a4441);
  --super-popover-border-color: var(--super-border-color, #2f2a27);
  --super-popover-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-popover-focus-color: var(--super-focus-color, #56c6b7);
  --super-popover-font-size: var(--super-font-size-base, 14px);
  --super-popover-title-size: var(--super-font-size-lg, 16px);
  --super-popover-padding-block: var(--super-spacing-md, 12px);
  --super-popover-padding-inline: var(--super-spacing-lg, 16px);
  --super-popover-gap: var(--super-spacing-sm, 8px);
  --super-popover-content-max-height: min(60vh, 420px);
  --super-popover-arrow-size: 10px;
  --super-popover-z-index: var(--super-z-index-overlay, 2000);
  --super-popover-rotation: var(--super-sketch-rotation, -0.25deg);
}
```

## 无障碍

弹层使用 `role="dialog"` 与 `tabindex="-1"`。打开时，触发元素获得 `aria-expanded="true"`、`aria-haspopup="dialog"` 和指向弹层的 `aria-controls`；关闭后恢复 `aria-expanded="false"`，并在断开连接时还原消费者原先写入的相关属性。`title` 会关联到弹层，缺少标题但存在 `content` 时以内容作为可访问名称。

点击触发与自定义触发元素都支持 `Enter` 和空格；原生按钮不会收到重复的键盘处理。`Escape` 关闭并回焦。悬停触发在触发元素或弹层获得焦点时保持打开，便于键盘用户进入内容。弹层内容中的原生控件应保留可见焦点样式和完整可访问名称。

## 已知边界

Popover 不是模态对话框，不会锁定页面滚动，也不会把焦点限制在弹层内部。需要阻断背景操作、处理复杂表单或要求用户明确确认时，应使用 Dialog。弹层固定定位在组件 Shadow DOM 内，遇到祖先 `transform`、`filter` 或 `contain` 创建的包含块时，视觉位置可能受该包含块影响。Popover 不是表单关联元素，也不参与 `FormData`、原生表单重置或约束验证。

<style>
.popover-note {
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

.popover-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.popover-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.popover-basic-grid,
.popover-trigger-grid,
.popover-placement-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2rem;
  align-items: center;
}

.popover-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  color: #292524;
  font-size: 0.82rem;
  font-weight: 700;
}

.popover-actions {
  display: grid;
  gap: 0.75rem;
}

.popover-choice {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
}

.popover-choice input {
  inline-size: 1rem;
  block-size: 1rem;
  accent-color: #4b87f5;
}

.popover-action-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.popover-action {
  padding: 0.3rem 0.65rem;
  color: #292524;
  font: inherit;
  background: #fffef9;
  border: 1.5px solid #292524;
  border-radius: 6px 8px 5px 7px;
  cursor: pointer;
}

.popover-action-primary {
  color: #16428f;
  border-color: #16428f;
}

.popover-action:focus-visible {
  outline: 2px solid #56c6b7;
  outline-offset: 2px;
}

html.dark .popover-note,
html.dark .popover-board {
  color: #292524;
}

@media (max-width: 720px) {
  .popover-board {
    padding: 1rem;
  }

  .popover-note {
    grid-template-columns: auto 1fr;
  }

  .popover-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
