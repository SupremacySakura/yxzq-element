# Message 全局提示

`super-message` 是一条固定在屏幕顶部居中的手绘风提示。它只负责单条消息的展示与关闭，不创建全局容器，也不管理队列；消息文案通过 `message` 属性或默认 Slot 提供，自动关闭、类型语义与关闭操作都由组件自身处理。

<div class="message-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>Message 适合短暂的成功、警告或错误反馈。需要用户确认时使用 Dialog，需要持续显示的状态请放回页面内容中。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-message`。只注册全局提示或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/message";

// SSR 或自定义注册时机
import { defineSuperMessage } from "yxzq-element/message";
defineSuperMessage();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

单条消息使用 `open` 控制显示。组件自身固定在视口顶部居中，默认 `duration="3000"` 毫秒后自动关闭；设置 `duration="0"` 可以保持显示，直到用户关闭或外部状态改变。

<div class="message-board">
  <super-message
    open
    duration="0"
    message="草稿已保存，发布时间由你决定。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
</div>

```html
<super-message id="draft-message" message="草稿已保存，发布时间由你决定。"></super-message>

<button type="button" id="show-draft-message">显示提示</button>

<script>
  const message = document.getElementById("draft-message");
  document
    .getElementById("show-draft-message")
    .addEventListener("click", () => {
      message.open = true;
    });
</script>
```

也可以通过默认 Slot 提供富文本。存在分配内容时，Slot 内容优先于 `message` 属性。

```html
<super-message open duration="0">
  <span>已同步 <strong>3 个文件</strong>，其余文件会在后台继续处理。</span>
</super-message>
```

## 类型

`type` 支持 `info`、`success`、`warning` 和 `error`。前三种使用 `role="status"` 与 `aria-live="polite"`；`error` 使用 `role="alert"` 与 `aria-live="assertive"`，适合需要立即被辅助技术播报的失败反馈。

<div class="message-board message-type-grid">
  <super-message
    open
    duration="0"
    type="info"
    message="有 2 条新评论等待查看。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
  <super-message
    open
    duration="0"
    type="success"
    message="设置已保存。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
  <super-message
    open
    duration="0"
    type="warning"
    message="网络不稳定，正在重试。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
  <super-message
    open
    duration="0"
    type="error"
    message="保存失败，请检查连接后重试。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
</div>

```html
<super-message open type="info" message="有 2 条新评论等待查看。"></super-message>
<super-message open type="success" message="设置已保存。"></super-message>
<super-message open type="warning" message="网络不稳定，正在重试。"></super-message>
<super-message open type="error" message="保存失败，请检查连接后重试。"></super-message>
```

## 自动关闭

`duration` 大于 `0` 时，组件在指定毫秒数后自动关闭并派发 `super-message-close`，`detail.type` 为当前类型。`duration="0"` 表示不自动关闭。修改 `duration` 会重新开始计时；关闭后计时器会被清理。

```html
<super-message
  id="save-message"
  open
  type="success"
  duration="2000"
  message="更改已保存。"
></super-message>

<script>
  const message = document.getElementById("save-message");
  message.addEventListener("super-message-close", (event) => {
    console.log("closed:", event.detail.type);
  });
</script>
```

## 可关闭与图标

设置 `closable` 会渲染关闭按钮。按钮的可访问名称默认是“关闭提示”，可以通过 `close-label` 本地化。`show-icon="false"` 隐藏内置类型符号；组件不依赖图标库，如需品牌图标，请使用默认 Slot 自行组织内容。

<div class="message-board message-close-grid">
  <super-message
    open
    duration="0"
    type="warning"
    closable
    close-label="关闭网络提示"
    message="连接已恢复，但仍有 1 个文件等待同步。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
  <super-message
    open
    duration="0"
    type="info"
    show-icon="false"
    message="没有图标也可以清楚表达状态。"
    style="position: static; left: auto; transform: none;"
  ></super-message>
</div>

```html
<super-message
  open
  duration="0"
  type="warning"
  closable
  close-label="关闭网络提示"
  message="连接已恢复，但仍有 1 个文件等待同步。"
></super-message>

<super-message open duration="0" show-icon="false">
  没有图标也可以清楚表达状态。
</super-message>
```

## 命令式调用

`showSuperMessage(options)` 会创建一个 `super-message` 元素并挂载到 `document.body`，返回 `{ close }` 句柄。关闭或自动关闭时，元素会从 DOM 移除。在无 `document` 的 SSR 环境中，函数返回空操作对象，不会访问浏览器 API。

```ts
import { showSuperMessage } from "yxzq-element/message";

const handle = showSuperMessage({
  message: "网络连接已恢复",
  type: "success",
  duration: 2500,
});

// 需要提前结束时
handle.close();
```

### `showSuperMessage` 选项

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `message` | `string` | 空字符串 | 消息文本 |
| `type` | `info \| success \| warning \| error` | `info` | 类型与 ARIA 语义 |
| `duration` | `number` | `3000` | 自动关闭毫秒数；`0` 表示不自动关闭 |
| `closable` | `boolean` | `false` | 是否显示关闭按钮 |
| `closeLabel` | `string` | `关闭提示` | 关闭按钮的可访问名称 |
| `showIcon` | `boolean` | `true` | 是否显示内置类型符号 |
| `size` | `large \| medium \| small` | `medium` | 尺寸；调整字号、内边距、图标尺寸与最大宽度 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；关闭后不渲染消息表面 |
| `message` | `string` | 空字符串 | 消息文本；默认 Slot 有内容时由 Slot 覆盖 |
| `type` | `info \| success \| warning \| error` | `info` | 类型与 ARIA 语义 |
| `duration` | `number` | `3000` | 自动关闭毫秒数；`0` 表示不自动关闭 |
| `closable` | `boolean` | `false` | 是否显示关闭按钮 |
| `close-label` | `string` | `关闭提示` | 关闭按钮的可访问名称 |
| `show-icon` | `boolean` | `true` | 是否显示内置类型符号 |
| `size` | `large \| medium \| small` | `medium` | 尺寸；调整字号、内边距、图标尺寸与最大宽度 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-message-close` | 自动关闭或点击关闭按钮时派发，`detail.type` 为当前类型；事件同时设置 `bubbles: true` 与 `composed: true` |

```ts
message.addEventListener("super-message-close", (event) => {
  const { type } = (event as CustomEvent<{ type: string }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 自定义消息内容；有分配内容时覆盖 `message` 属性 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `message` | 消息表面，可用于覆盖背景、描边、阴影或内边距 |
| `icon` | 内置类型符号；`show-icon="false"` 时不存在 |
| `content` | 消息内容区域 |
| `close` | 关闭按钮；`closable="false"` 时不存在 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-message {
  --super-message-background: var(--super-background-color, #fffef9);
  --super-message-color: var(--super-text-color-primary, #292524);
  --super-message-border-color: var(--super-border-color, #2f2a27);
  --super-message-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-message-icon-background: var(--super-background-color-soft, #f7f4ec);
  --super-message-icon-color: var(--super-color-info, #7d8896);
  --super-message-focus-color: var(--super-focus-color, #56c6b7);
  --super-message-font-size: var(--super-font-size-base, 14px);
  --super-message-gap: var(--super-spacing-sm, 8px);
  --super-message-padding-block: 9px;
  --super-message-padding-inline: 14px;
  --super-message-icon-size: 22px;
  --super-message-max-width: 560px;
  --super-message-top: var(--super-spacing-lg, 16px);
  --super-message-z-index: var(--super-z-index-message, 3000);
  --super-message-rotation: var(--super-sketch-rotation, -0.25deg);
}
```

## 无障碍

普通消息使用 `role="status"` 与 `aria-live="polite"`，错误消息使用 `role="alert"` 与 `aria-live="assertive"`；消息表面设置 `aria-atomic="true"`，让整条文案作为一个整体播报。类型符号仅供视觉识别，带有 `aria-hidden="true"`，不会重复朗读。

关闭按钮是原生按钮，默认名称为“关闭提示”，可通过 `close-label` 覆盖。自动关闭不应是传达关键信息的唯一方式；如果消息包含用户必须完成的操作，请改用需要确认的交互组件。错误提示应提供具体原因和下一步，而不是只显示“出错了”。

## 已知边界

`super-message` 是单条消息组件，不创建全局容器、队列或多条堆叠布局。多个消息同时存在时，它们都会固定在顶部居中，消费者应自行协调显示顺序或只保留一条。命令式入口直接挂载到 `document.body`，不会自动清理同一页面的其他消息。

组件不是表单关联元素，也不参与 `FormData`、原生表单重置或约束验证。`duration` 使用浏览器计时器，页面被后台节流时关闭时间可能晚于设定值。固定定位在祖先 `transform`、`filter` 或 `contain` 创建的包含块中可能受影响；命令式挂载到 `document.body` 可以避免大多数页面布局干扰。

<style>
.message-note {
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

.message-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.message-board {
  display: grid;
  justify-items: center;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.message-type-grid {
  justify-items: stretch;
}

.message-close-grid {
  justify-items: stretch;
}

.message-board super-message {
  max-inline-size: 100%;
}

html.dark .message-note,
html.dark .message-board {
  color: #292524;
}

@media (max-width: 720px) {
  .message-board {
    padding: 1rem;
  }

  .message-note {
    grid-template-columns: auto 1fr;
  }

  .message-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
