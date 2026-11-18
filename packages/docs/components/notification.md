# Notification 通知提醒

`super-notification` 是固定在视口一角的通知卡片，用于承载比 Message 更完整、需要保留一段时间的信息。它提供标题、正文、类型语义、四角定位、自动关闭与关闭按钮；`showSuperNotification(options)` 提供无需手写元素节点的命令式入口。

<div class="notification-note">
  <span aria-hidden="true">✎</span>
  <strong>选择提示</strong>
  <span>短暂的操作反馈优先使用 Message；需要标题、正文或持续展示的通知使用 Notification；要求用户立即处理时，请把操作放回页面或使用 Dialog。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-notification`。只注册通知或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/notification";

// SSR 或自定义注册时机
import { defineSuperNotification } from "yxzq-element/notification";
defineSuperNotification();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

`open` 控制显示。默认 `duration="4500"` 毫秒后自动关闭；设置 `duration="0"` 可以保持显示，直到用户关闭或外部状态改变。`title` 与 `message` 提供基础文案，默认 Slot 与 `title` Slot 分别覆盖正文和标题。

<div class="notification-board">
  <super-notification
    open
    duration="0"
    title="备份完成"
    message="最近一次备份包含 128 个文件，耗时 42 秒。"
    style="position: static; right: auto;"
  ></super-notification>
</div>

```html
<super-notification
  id="backup-notification"
  title="备份完成"
  message="最近一次备份包含 128 个文件，耗时 42 秒。"
></super-notification>

<button type="button" id="show-backup-notification">显示通知</button>

<script>
  const notification = document.getElementById("backup-notification");
  document
    .getElementById("show-backup-notification")
    .addEventListener("click", () => {
      notification.open = true;
    });
</script>
```

通过 Slot 可以提供富文本，存在分配内容时优先于对应属性：

```html
<super-notification open duration="0">
  <strong slot="title">同步完成</strong>
  <span>已更新 <strong>3 个文件</strong>，其余文件会在后台继续处理。</span>
</super-notification>
```

## 类型

`type` 支持 `info`、`success`、`warning` 和 `error`。前三种使用 `role="status"` 与 `aria-live="polite"`；`error` 使用 `role="alert"` 与 `aria-live="assertive"`，适合需要立即被辅助技术播报的失败反馈。

<div class="notification-board notification-type-grid">
  <super-notification
    open
    duration="0"
    type="info"
    title="有新评论"
    message="有 2 条评论等待查看。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    type="success"
    title="设置已保存"
    message="新的通知偏好会在下一次操作时生效。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    type="warning"
    title="网络不稳定"
    message="正在重试上传，请暂时不要关闭页面。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    type="error"
    title="发布失败"
    message="请检查连接后重试，草稿内容不会丢失。"
    style="position: static; right: auto;"
  ></super-notification>
</div>

```html
<super-notification open type="success" title="设置已保存" message="新的通知偏好会在下一次操作时生效。"></super-notification>
<super-notification open type="error" title="发布失败" message="请检查连接后重试，草稿内容不会丢失。"></super-notification>
```

## 位置

`placement` 支持 `top-right`、`top-left`、`bottom-right` 和 `bottom-left`。组件使用固定定位和 `--super-z-index-message` 令牌，适合叠加在页面内容之上。

<div class="notification-board notification-placement-grid">
  <super-notification
    open
    duration="0"
    placement="top-left"
    title="左上"
    message="固定在左上角。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    placement="top-right"
    title="右上"
    message="固定在右上角。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    placement="bottom-left"
    title="左下"
    message="固定在左下角。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    placement="bottom-right"
    title="右下"
    message="固定在右下角。"
    style="position: static; right: auto;"
  ></super-notification>
</div>

```html
<super-notification open placement="top-left" title="左上" message="固定在左上角。"></super-notification>
<super-notification open placement="bottom-right" title="右下" message="固定在右下角。"></super-notification>
```

## 自动关闭与手动关闭

`duration` 大于 `0` 时，组件在指定毫秒数后自动关闭并派发 `super-notification-close`，`detail.type` 为当前类型。`duration="0"` 表示不自动关闭。修改 `duration` 会重新开始计时；关闭后计时器会被清理。

`closable` 默认开启。关闭按钮的可访问名称默认是“关闭通知”，可以通过 `close-label` 本地化。`show-icon="false"` 隐藏内置类型符号。

<div class="notification-board notification-close-grid">
  <super-notification
    open
    duration="0"
    type="warning"
    close-label="关闭同步提醒"
    title="同步仍在进行"
    message="剩余 1 个文件等待上传。"
    style="position: static; right: auto;"
  ></super-notification>
  <super-notification
    open
    duration="0"
    type="info"
    show-icon="false"
    title="无图标通知"
    message="图标只是视觉辅助，正文仍然清晰可读。"
    style="position: static; right: auto;"
  ></super-notification>
</div>

```html
<super-notification
  open
  duration="0"
  type="warning"
  close-label="关闭同步提醒"
  title="同步仍在进行"
  message="剩余 1 个文件等待上传。"
></super-notification>
```

## 命令式调用

`showSuperNotification(options)` 会创建一个 `super-notification` 元素并挂载到 `document.body`，返回 `{ close }` 句柄。关闭或自动关闭时，元素会从 DOM 移除。在无 `document` 的 SSR 环境中，函数返回空操作对象，不会访问浏览器 API。

```ts
import { showSuperNotification } from "yxzq-element/notification";

const handle = showSuperNotification({
  title: "备份完成",
  message: "已保存 12 个文件",
  type: "success",
  placement: "bottom-right",
  duration: 3000,
});

// 需要提前结束时
handle.close();
```

### `showSuperNotification` 选项

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | 空字符串 | 通知标题 |
| `message` | `string` | 空字符串 | 通知正文 |
| `type` | `info \| success \| warning \| error` | `info` | 类型与 ARIA 语义 |
| `placement` | `top-right \| top-left \| bottom-right \| bottom-left` | `top-right` | 固定位置 |
| `duration` | `number` | `4500` | 自动关闭毫秒数；`0` 表示不自动关闭 |
| `closable` | `boolean` | `true` | 是否显示关闭按钮 |
| `closeLabel` | `string` | `关闭通知` | 关闭按钮的可访问名称 |
| `showIcon` | `boolean` | `true` | 是否显示内置类型符号 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；关闭后不渲染通知卡片 |
| `title` | `string` | 空字符串 | 通知标题；`title` Slot 有内容时由 Slot 覆盖 |
| `message` | `string` | 空字符串 | 通知正文；默认 Slot 有内容时由 Slot 覆盖 |
| `type` | `info \| success \| warning \| error` | `info` | 类型与 ARIA 语义 |
| `placement` | `top-right \| top-left \| bottom-right \| bottom-left` | `top-right` | 固定位置 |
| `duration` | `number` | `4500` | 自动关闭毫秒数；`0` 表示不自动关闭 |
| `closable` | `boolean` | `true` | 是否显示关闭按钮 |
| `close-label` | `string` | `关闭通知` | 关闭按钮的可访问名称 |
| `show-icon` | `boolean` | `true` | 是否显示内置类型符号 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-notification-close` | 自动关闭或点击关闭按钮时派发，`detail.type` 为当前类型；事件同时设置 `bubbles: true` 与 `composed: true` |

```ts
notification.addEventListener("super-notification-close", (event) => {
  const { type } = (event as CustomEvent<{ type: string }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 自定义通知正文；有分配内容时覆盖 `message` 属性 |
| `title` | 自定义通知标题；有分配内容时覆盖 `title` 属性 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `notification` | 通知表面，可用于覆盖背景、描边、阴影或内边距 |
| `icon` | 内置类型符号；`show-icon="false"` 时不存在 |
| `title` | 标题区域 |
| `content` | 正文区域 |
| `close` | 关闭按钮；`closable="false"` 时不存在 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-notification {
  --super-notification-background: var(--super-background-color, #fffef9);
  --super-notification-color: var(--super-text-color-primary, #292524);
  --super-notification-content-color: var(--super-text-color-regular, #4a4441);
  --super-notification-border-color: var(--super-border-color, #2f2a27);
  --super-notification-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-notification-icon-background: var(--super-background-color-soft, #f7f4ec);
  --super-notification-icon-color: var(--super-color-info, #7d8896);
  --super-notification-focus-color: var(--super-focus-color, #56c6b7);
  --super-notification-close-hover-background: color-mix(in srgb, var(--super-text-color-primary, #292524) 8%, transparent);
  --super-notification-width: 340px;
  --super-notification-font-size: var(--super-font-size-base, 14px);
  --super-notification-title-size: var(--super-font-size-lg, 16px);
  --super-notification-gap: var(--super-spacing-sm, 8px);
  --super-notification-padding-block: var(--super-spacing-md, 12px);
  --super-notification-padding-inline: var(--super-spacing-lg, 16px);
  --super-notification-icon-size: 26px;
  --super-notification-offset: var(--super-spacing-lg, 16px);
  --super-notification-z-index: var(--super-z-index-message, 3000);
  --super-notification-rotation: var(--super-sketch-rotation, -0.25deg);
}
```

## 无障碍

普通通知使用 `role="status"` 与 `aria-live="polite"`，错误通知使用 `role="alert"` 与 `aria-live="assertive"`；通知表面设置 `aria-atomic="true"`，让标题与正文作为一个整体播报。类型符号仅供视觉识别，带有 `aria-hidden="true"`，不会重复朗读。

关闭按钮是原生按钮，默认名称为“关闭通知”，可通过 `close-label` 覆盖。自动关闭不应是传达关键信息的唯一方式；如果通知包含用户必须完成的操作，请把操作放回页面或使用需要明确确认的组件。错误提示应提供具体原因和下一步，而不是只显示“出错了”。

## 已知边界

`super-notification` 是单条通知组件，不创建全局容器、队列或多条堆叠布局。多个通知同时存在时，它们会固定在同一个位置并互相覆盖，消费者应自行协调显示顺序或只保留一条。命令式入口直接挂载到 `document.body`，不会自动清理同一页面的其他通知。

组件不是表单关联元素，也不参与 `FormData`、原生表单重置或约束验证。`duration` 使用浏览器计时器，页面被后台节流时关闭时间可能晚于设定值。固定定位在祖先 `transform`、`filter` 或 `contain` 创建的包含块中可能受影响；命令式挂载到 `document.body` 可以避免大多数页面布局干扰。

<style>
.notification-note {
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

.notification-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.notification-board {
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

.notification-type-grid,
.notification-placement-grid,
.notification-close-grid {
  justify-items: stretch;
}

.notification-placement-grid {
  grid-template-columns: repeat(2, minmax(240px, 1fr));
}

.notification-board super-notification {
  max-inline-size: 100%;
}

html.dark .notification-note,
html.dark .notification-board {
  color: #292524;
}

@media (max-width: 720px) {
  .notification-board {
    padding: 1rem;
  }

  .notification-placement-grid {
    grid-template-columns: 1fr;
  }

  .notification-note {
    grid-template-columns: auto 1fr;
  }

  .notification-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
