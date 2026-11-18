# Popconfirm 气泡确认

`super-popconfirm` 是锚定在触发元素旁的手绘风气泡确认框。默认 Slot 放置触发元素，`title` 与 `content` 提供确认问题与说明，`content` Slot 可以承载强调文本或更完整的说明。确认框由 Floating UI 定位，在空间不足时自动翻转并避让视口边缘。

<div class="popconfirm-note">
  <span aria-hidden="true">✎</span>
  <strong>选择提示</strong>
  <span>只针对一个明确、可逆性较低的操作请求确认时使用 Popconfirm；需要展示表单、多个选项或阻断整页操作时使用 Dialog。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-popconfirm`。只注册气泡确认或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/popconfirm";

// SSR 或自定义注册时机
import { defineSuperPopconfirm } from "yxzq-element/popconfirm";
defineSuperPopconfirm();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

将触发元素放进默认 Slot。打开后确认框使用 `role="alertdialog"` 与 `aria-modal="false"`，触发元素同步获得 `aria-expanded="true"`、`aria-haspopup="dialog"` 与指向确认框的 `aria-controls`。焦点会移到取消按钮，避免用户误按确认。

<div class="popconfirm-board popconfirm-basic-grid">
  <super-popconfirm
    title="删除这条草稿？"
    content="删除后无法恢复，已发布的版本不受影响。"
  >
    <super-button variant="danger">删除草稿</super-button>
  </super-popconfirm>
  <super-popconfirm
    title="提交审核？"
    content="提交后协作者仍可以继续评论，但不能再直接修改正文。"
    confirm-text="提交审核"
    cancel-text="再检查一下"
    placement="bottom-end"
  >
    <super-button variant="success">提交</super-button>
  </super-popconfirm>
</div>

```html
<super-popconfirm
  title="删除这条草稿？"
  content="删除后无法恢复，已发布的版本不受影响。"
>
  <super-button variant="danger">删除草稿</super-button>
</super-popconfirm>

<super-popconfirm
  title="提交审核？"
  content="提交后协作者仍可以继续评论，但不能再直接修改正文。"
  confirm-text="提交审核"
  cancel-text="再检查一下"
  placement="bottom-end"
>
  <super-button variant="success">提交</super-button>
</super-popconfirm>
```

`content` Slot 存在时优先于 `content` 属性，可用于强调关键词或补充结构化说明。

```html
<super-popconfirm title="清空筛选条件？">
  <span slot="content">
    当前包含 <strong>3 个条件</strong>，清空后需要重新选择。
  </span>
  <super-button variant="outline">清空筛选</super-button>
</super-popconfirm>
```

## 触发方式

`trigger="click"` 点击切换，并支持键盘激活；`hover` 在指针进入或触发元素获得焦点时打开，离开触发元素和确认框后延迟关闭。

<div class="popconfirm-board popconfirm-trigger-grid">
  <div class="popconfirm-spec">
    <span>点击</span>
    <super-popconfirm title="归档这条记录？" content="归档后仍可以在筛选器中找回。">
      <super-button variant="outline">点击打开</super-button>
    </super-popconfirm>
  </div>
  <div class="popconfirm-spec">
    <span>悬停</span>
    <super-popconfirm
      trigger="hover"
      title="移除快捷入口？"
      content="指针移入确认框时会保持打开。"
    >
      <super-button variant="secondary">悬停查看</super-button>
    </super-popconfirm>
  </div>
</div>

```html
<super-popconfirm title="归档这条记录？" content="归档后仍可以在筛选器中找回。">
  <super-button variant="outline">点击打开</super-button>
</super-popconfirm>

<super-popconfirm trigger="hover" title="移除快捷入口？" content="指针移入确认框时会保持打开。">
  <super-button variant="secondary">悬停查看</super-button>
</super-popconfirm>
```

使用非原生触发元素时，请自行提供 `tabindex="0"` 与可访问名称；组件会为 `Enter` 和空格补充激活行为。

## 方向

`placement` 接受十二个方向值。Floating UI 会在空间不足时自动翻转，并通过 `shift` 保持确认框在视口内。

<div class="popconfirm-board popconfirm-placement-grid">
  <div class="popconfirm-spec">
    <span>top</span>
    <super-popconfirm title="置顶这条评论？" placement="top">
      <super-button variant="secondary" shape="square" aria-label="从上方打开">↑</super-button>
    </super-popconfirm>
  </div>
  <div class="popconfirm-spec">
    <span>bottom-end</span>
    <super-popconfirm title="移除成员？" placement="bottom-end">
      <super-button variant="secondary" shape="square" aria-label="从右下方打开">↘</super-button>
    </super-popconfirm>
  </div>
  <div class="popconfirm-spec">
    <span>left</span>
    <super-popconfirm title="取消关注？" placement="left">
      <super-button variant="outline" shape="square" aria-label="从左侧打开">←</super-button>
    </super-popconfirm>
  </div>
  <div class="popconfirm-spec">
    <span>无图标</span>
    <super-popconfirm title="刷新预览？" icon="" content="关闭装饰图标。">
      <super-button variant="ghost">无图标</super-button>
    </super-popconfirm>
  </div>
</div>

```html
<super-popconfirm title="移除成员？" placement="bottom-end">
  <super-button variant="secondary" shape="square" aria-label="从右下方打开">↘</super-button>
</super-popconfirm>

<super-popconfirm title="刷新预览？" icon="">
  <super-button variant="ghost">无图标</super-button>
</super-popconfirm>
```

## 受控、加载与禁用

`open` 是受控状态。直接设置属性会更新显示，但不会派发 `super-popconfirm-open-change`；只有点击、悬停、键盘激活、外部指针按下或 `Escape` 等用户操作才会派发。确认事件可取消，适合先拦截操作、等待远端校验后再提交。

```html
<super-popconfirm id="controlled-popconfirm" title="删除这条评论？">
  <super-button variant="danger">删除评论</super-button>
</super-popconfirm>

<script>
  const popconfirm = document.getElementById("controlled-popconfirm");
  popconfirm.addEventListener("super-popconfirm-confirm", (event) => {
    event.preventDefault();
    popconfirm.confirmLoading = true;
    setTimeout(() => {
      popconfirm.confirmLoading = false;
      popconfirm.open = false;
    }, 800);
  });
</script>
```

`confirm-loading` 会禁用确认按钮并设置 `aria-busy="true"`，不会自动关闭确认框。`disabled` 会立即关闭并阻止再次打开。`close-on-outside-click` 与 `close-on-escape` 默认开启，可分别关闭对应行为。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；程序化修改不派发用户事件 |
| `title` | `string` | 空字符串 | 确认问题，同时作为 `aria-labelledby` 的目标 |
| `content` | `string` | 空字符串 | 补充说明；存在 `content` Slot 时由 Slot 覆盖 |
| `placement` | `top \| top-start \| top-end \| bottom \| bottom-start \| bottom-end \| left \| left-start \| left-end \| right \| right-start \| right-end` | `top` | 首选方向；空间不足时自动翻转 |
| `trigger` | `click \| hover` | `click` | 用户触发方式 |
| `confirm-text` | `string` | `确定` | 确认按钮文案 |
| `cancel-text` | `string` | `取消` | 取消按钮文案 |
| `confirm-loading` | `boolean` | `false` | 确认按钮进入加载状态并禁止再次触发 |
| `disabled` | `boolean` | `false` | 禁用后立即关闭并阻止用户打开 |
| `icon` | `string` | `?` | 图标字符；设为空字符串时不渲染图标 |
| `close-on-outside-click` | `boolean` | `true` | 外部指针按下时关闭 |
| `close-on-escape` | `boolean` | `true` | 按 `Escape` 时关闭并回焦 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-popconfirm-confirm` | 点击确认时派发，`detail.originalEvent` 为原始点击事件；事件可取消，取消后保持打开 |
| `super-popconfirm-cancel` | 点击取消时派发，`detail.originalEvent` 为原始点击事件 |
| `super-popconfirm-open-change` | 用户交互导致显示状态变化时派发，`detail.open` 为最新状态 |

所有事件都同时设置 `bubbles: true` 与 `composed: true`。

```ts
popconfirm.addEventListener("super-popconfirm-confirm", (event) => {
  const { originalEvent } = (
    event as CustomEvent<{ originalEvent: Event }>
  ).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 第一个元素作为触发元素，并接收 `aria-expanded`、`aria-haspopup` 与 `aria-controls` |
| `content` | 确认框正文；存在时覆盖 `content` 属性 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `popconfirm` | 确认框表面，可用于覆盖背景、描边、内边距或阴影 |
| `title` | 标题区域 |
| `content` | 正文区域 |
| `icon` | 装饰图标；`icon=""` 时不存在 |
| `actions` | 操作按钮行 |
| `confirm` | 确认按钮 |
| `cancel` | 取消按钮 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-popconfirm {
  --super-popconfirm-background: var(--super-background-color, #fffef9);
  --super-popconfirm-color: var(--super-text-color-primary, #292524);
  --super-popconfirm-content-color: var(--super-text-color-regular, #4a4441);
  --super-popconfirm-border-color: var(--super-border-color, #2f2a27);
  --super-popconfirm-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-popconfirm-focus-color: var(--super-focus-color, #56c6b7);
  --super-popconfirm-primary-color: var(--super-color-primary, #4b87f5);
  --super-popconfirm-primary-border-color: var(--super-color-primary-dark-2, #3272e8);
  --super-popconfirm-icon-background: var(--super-background-color-soft, #f7f4ec);
  --super-popconfirm-icon-color: var(--super-color-warning, #ffca50);
  --super-popconfirm-cancel-background: var(--super-background-color-soft, #f7f4ec);
  --super-popconfirm-cancel-hover-background: color-mix(in srgb, var(--super-text-color-primary, #292524) 8%, var(--super-background-color, #fffef9));
  --super-popconfirm-width: 292px;
  --super-popconfirm-font-size: var(--super-font-size-base, 14px);
  --super-popconfirm-title-size: var(--super-font-size-lg, 16px);
  --super-popconfirm-padding-block: var(--super-spacing-md, 12px);
  --super-popconfirm-padding-inline: var(--super-spacing-lg, 16px);
  --super-popconfirm-gap: var(--super-spacing-sm, 8px);
  --super-popconfirm-icon-size: 26px;
  --super-popconfirm-content-max-height: min(40vh, 240px);
  --super-popconfirm-z-index: var(--super-z-index-overlay, 2000);
  --super-popconfirm-rotation: var(--super-sketch-rotation, -0.25deg);
}
```

## 无障碍

确认框使用 `role="alertdialog"`、`aria-modal="false"`、`tabindex="-1"`，并通过 `aria-labelledby` 与 `aria-describedby` 关联标题和正文。标题为空时仍会渲染一个仅供辅助技术读取的“确认操作”名称，避免出现无名称对话框。

打开时焦点移到取消按钮，使键盘用户先看到安全的退出路径。`Escape` 关闭并回焦到触发元素；点击确认或取消后也回焦触发元素。外部指针按下关闭时不会强行移动用户焦点。`confirm-loading` 会禁用确认按钮并暴露 `aria-busy="true"`，此时取消仍然可用。

确认框不是模态对话框，不会锁定页面滚动，也不会把焦点限制在内部。需要阻断背景操作或处理复杂流程时，应使用 Dialog。

## 已知边界

`super-popconfirm` 是受控显示状态组件，不会在用户确认后自行提交远端请求；应用应监听 `super-popconfirm-confirm` 并更新业务状态。触发元素必须是默认 Slot 中的第一个元素，组件会修改其 `aria-expanded`、`aria-haspopup` 和 `aria-controls`，断开连接时还原消费者原先写入的值。

确认框固定定位在组件 Shadow DOM 内，遇到祖先 `transform`、`filter` 或 `contain` 创建的包含块时，视觉位置可能受该包含块影响。组件不是表单关联元素，不参与 `FormData`、原生表单重置或约束验证。

<style>
.popconfirm-note {
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

.popconfirm-note > span:first-child {
  color: #e0783f;
  font-size: 1.35rem;
}

.popconfirm-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.popconfirm-basic-grid,
.popconfirm-trigger-grid,
.popconfirm-placement-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2rem;
  align-items: center;
}

.popconfirm-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  color: #292524;
  font-size: 0.82rem;
  font-weight: 700;
}

html.dark .popconfirm-note,
html.dark .popconfirm-board {
  color: #292524;
}

@media (max-width: 720px) {
  .popconfirm-board {
    padding: 1rem;
  }

  .popconfirm-note {
    grid-template-columns: auto 1fr;
  }

  .popconfirm-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
