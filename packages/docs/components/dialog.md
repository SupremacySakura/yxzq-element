# Dialog 对话框

`super-dialog` 是一款手绘风模态对话框，适合需要用户集中确认、编辑或完成一段独立流程的场景。它使用原生 Shadow DOM、模态 ARIA、焦点陷阱和滚动锁定，关闭前可以拦截并阻止关闭。

<div class="dialog-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span><code>open</code> 是受控状态。用户操作只会发起关闭请求，不会绕过 <code>super-dialog-before-close</code>；请在事件中同步自己的状态，或在确认后设置 <code>open = false</code>。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-dialog`。只注册对话框或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/dialog";

// SSR 或自定义注册时机
import { defineSuperDialog } from "yxzq-element/dialog";
defineSuperDialog();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

设置 `open` 显示对话框，默认 Slot 是正文，`title` 提供标题。打开后焦点会进入对话框，`Escape` 或点击遮罩可关闭；关闭后焦点返回打开前的元素。

<div class="dialog-board dialog-actions">
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-basic">打开基础对话框</button>
  <super-dialog id="demo-dialog-basic" title="保存修改" close-label="关闭保存对话框">
    <p class="dialog-copy">当前修改会保存到你的工作区。保存后仍可继续编辑。</p>
  </super-dialog>
</div>

```html
<button type="button" id="open-dialog">打开对话框</button>

<super-dialog id="edit-dialog" title="保存修改">
  <p>当前修改会保存到你的工作区。</p>
</super-dialog>

<script>
  const trigger = document.getElementById("open-dialog");
  const dialog = document.getElementById("edit-dialog");

  trigger.addEventListener("click", () => {
    dialog.open = true;
  });

  dialog.addEventListener("super-dialog-close", () => {
    dialog.open = false;
  });
</script>
```

## 尺寸与宽度

`size` 提供 `small`、`medium`、`large` 三档宽度；`width` 是更直接的长度覆盖，可使用 `px`、`rem`、`min()` 等 CSS 长度。移动端会自动限制在视口内，正文超出时独立滚动。

<div class="dialog-board dialog-size-board">
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-small">小尺寸</button>
  <super-dialog id="demo-dialog-small" size="small" title="小尺寸对话框" show-footer="false">
    <p class="dialog-copy">适合简短确认或单段说明。</p>
  </super-dialog>
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-large">大尺寸</button>
  <super-dialog id="demo-dialog-large" size="large" title="大尺寸对话框" confirm-text="保存并继续">
    <p class="dialog-copy">大尺寸适合多段内容、表格或需要较宽阅读区域的编辑任务。</p>
  </super-dialog>
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-width">自定义宽度</button>
  <super-dialog id="demo-dialog-width" width="min(560px, calc(100vw - 40px))" title="自定义宽度">
    <p class="dialog-copy"><code>width</code> 优先于 <code>size</code>，但仍受视口上限约束。</p>
  </super-dialog>
</div>

```html
<super-dialog open size="small" title="小尺寸对话框"></super-dialog>
<super-dialog open size="large" title="大尺寸对话框"></super-dialog>
<super-dialog
  open
  width="min(560px, calc(100vw - 40px))"
  title="自定义宽度"
></super-dialog>
```

## 页脚与加载状态

默认页脚包含取消与确认按钮，文案通过 `cancel-text`、`confirm-text` 覆盖。`loading` 会禁用确认按钮并暴露 `aria-busy="true"`；`show-footer="false"` 可完全隐藏页脚。需要复杂操作时，用 `footer` Slot 替换整组默认按钮。

<div class="dialog-board dialog-actions">
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-footer">自定义页脚</button>
  <super-dialog id="demo-dialog-footer" title="发布设置" confirm-text="发布" cancel-text="暂不发布">
    <p class="dialog-copy">发布后将立即对团队可见。</p>
    <label class="dialog-check">
      <input type="checkbox" checked />
      通知团队成员
    </label>
    <div slot="footer" class="dialog-custom-footer">
      <button class="dialog-link" type="button" data-dialog-close="demo-dialog-footer">稍后处理</button>
      <button class="dialog-native-trigger" type="button" data-dialog-close="demo-dialog-footer">完成</button>
    </div>
  </super-dialog>
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-loading">加载状态</button>
  <super-dialog id="demo-dialog-loading" title="正在提交" loading confirm-text="提交中">
    <p class="dialog-copy">确认按钮被禁用，并向辅助技术报告忙碌状态。</p>
  </super-dialog>
</div>

```html
<super-dialog
  open
  title="发布设置"
  confirm-text="发布"
  cancel-text="暂不发布"
>
  <p>发布后将立即对团队可见。</p>
  <div slot="footer">
    <button type="button">稍后处理</button>
    <button type="button">完成</button>
  </div>
</super-dialog>

<super-dialog open title="正在提交" loading confirm-text="提交中">
  请稍候…
</super-dialog>
```

## 关闭拦截

所有关闭请求都会先派发可取消的 `super-dialog-before-close`。调用 `event.preventDefault()` 会保留对话框与焦点，适合保存未提交内容或等待异步校验。关闭原因包括 `escape`、`mask`、`close-button`、`confirm` 和 `cancel`。

```ts
dialog.addEventListener("super-dialog-before-close", async (event) => {
  const { reason } = event.detail;
  if (reason === "confirm" || reason === "cancel") {
    const saved = await persistDraft();
    if (!saved) {
      event.preventDefault();
      return;
    }
  }

  dialog.open = false;
});
```

`super-dialog-confirm` 与 `super-dialog-cancel` 分别在点击默认页脚按钮且关闭请求未被拦截时派发。它们同样是组合事件；若 `before-close` 被取消，则不会派发确认/取消通知，也不会关闭对话框。

## 控制关闭方式

`closable="false"` 隐藏右上角关闭按钮，`mask-closable="false"` 禁止点击遮罩关闭，`close-on-escape="false"` 禁止 Escape 关闭。三项都不影响默认页脚的确认/取消按钮。

<div class="dialog-board dialog-actions">
  <button class="dialog-native-trigger" type="button" data-dialog-open="demo-dialog-strict">仅按钮关闭</button>
  <super-dialog
    id="demo-dialog-strict"
    title="必须做出选择"
    closable="false"
    mask-closable="false"
    close-on-escape="false"
    confirm-text="接受"
    cancel-text="拒绝"
  >
    <p class="dialog-copy">点击遮罩或按 Escape 都不会关闭，只能使用页脚按钮。</p>
  </super-dialog>
</div>

```html
<super-dialog
  open
  title="必须做出选择"
  closable="false"
  mask-closable="false"
  close-on-escape="false"
>
  点击遮罩或按 Escape 都不会关闭。
</super-dialog>
```

## 无障碍

对话框使用 `role="dialog"`、`aria-modal="true"`，标题始终关联到 `aria-labelledby`，正文关联到 `aria-describedby`。`header` Slot 会替换可见标题内容，但不会破坏标题关联；仅使用自定义标题时，也请同时提供清晰的 `title` 或可读文本，避免辅助技术读出空标题。

打开时页面滚动被锁定，焦点移动到对话框面板；Tab 与 Shift+Tab 在关闭按钮、正文中的可聚焦内容和页脚按钮之间循环。关闭后释放滚动锁定并把焦点送回打开前的元素。右上角关闭按钮的可访问名称由 `close-label` 控制，默认是“关闭对话框”。

遮罩点击只在点击遮罩本身时生效，点击对话框内部不会误触发关闭。焦点陷阱会包含默认 Slot 中的可聚焦元素，但通过 `footer` Slot 放入的自定义按钮仍应保持正常的按钮语义。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；打开时启用焦点陷阱与滚动锁定 |
| `title` | `string` | 空字符串 | 对话框标题；同时作为 `aria-labelledby` 的文本来源 |
| `width` | `string` | 空字符串 | 自定义 CSS 宽度，优先于 `size` |
| `size` | `small \| medium \| large` | `medium` | 预设宽度 |
| `closable` | `boolean` | `true` | 是否显示右上角关闭按钮 |
| `mask-closable` | `boolean` | `true` | 是否允许点击遮罩关闭 |
| `close-on-escape` | `boolean` | `true` | 是否允许 Escape 关闭 |
| `close-label` | `string` | `关闭对话框` | 关闭按钮的可访问名称 |
| `show-footer` | `boolean` | `true` | 是否显示页脚；提供 `footer` Slot 时由 Slot 内容替换默认按钮 |
| `confirm-text` | `string` | `确定` | 默认确认按钮文案 |
| `cancel-text` | `string` | `取消` | 默认取消按钮文案 |
| `loading` | `boolean` | `false` | 禁用确认按钮并暴露 `aria-busy="true"` |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-dialog-before-close` | 关闭前派发，`detail.reason` 为 `escape \| mask \| close-button \| confirm \| cancel`；事件可取消 |
| `super-dialog-close` | 已关闭后派发，`detail.reason` 与关闭请求一致 |
| `super-dialog-confirm` | 点击默认确认按钮时派发，`detail.reason` 为 `confirm` |
| `super-dialog-cancel` | 点击默认取消按钮时派发，`detail.reason` 为 `cancel` |

所有事件都设置 `bubbles: true` 与 `composed: true`。

```ts
dialog.addEventListener("super-dialog-close", (event) => {
  const { reason } = (event as CustomEvent<{ reason: string }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 对话框正文，自动关联到 `aria-describedby` |
| `header` | 替换可见标题内容，标题容器与 `aria-labelledby` 保持不变 |
| `footer` | 替换默认取消/确认按钮；提供后不再渲染内置页脚按钮 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `dialog` | 对话框面板 |
| `mask` | 全屏遮罩层 |
| `header` | 标题区域 |
| `title` | 标题文本容器 |
| `body` | 正文区域，超出高度时独立滚动 |
| `footer` | 页脚区域 |
| `close` | 右上角关闭按钮；`closable="false"` 时不存在 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-dialog {
  --super-dialog-width: 460px;
  --super-dialog-max-width: calc(100vw - 32px);
  --super-dialog-max-height: calc(100vh - 48px);
  --super-dialog-padding: var(--super-spacing-xl, 24px);
  --super-dialog-background: var(--super-background-color, #fffef9);
  --super-dialog-color: var(--super-text-color-primary, #292524);
  --super-dialog-muted-color: var(--super-text-color-secondary, #6b6360);
  --super-dialog-border-color: var(--super-border-color, #2f2a27);
  --super-dialog-border-width: var(--super-sketch-width, 2px);
  --super-dialog-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-dialog-mask-background: rgb(41 37 36 / 46%);
  --super-dialog-focus-color: var(--super-focus-color, #56c6b7);
  --super-dialog-primary-color: var(--super-color-primary, #4b87f5);
  --super-dialog-primary-border-color: var(--super-color-primary-dark-2, #3272e8);
  --super-dialog-z-index: var(--super-z-index-modal, 2100);
  --super-dialog-rotation: -0.16deg;
}
```

## 已知边界

`super-dialog` 不是 form-associated Custom Element，不参与外层 `FormData`、原生表单 reset 或外部 constraint validation。确认按钮不会自动提交表单；需要提交时，请监听 `super-dialog-confirm` 并调用业务逻辑。

`open` 不会自动因用户操作变为 `false`，也不会自动回滚消费者的外部状态。模态层通过 `position: fixed` 渲染在组件 Shadow DOM 内；祖先元素若设置 `transform`、`filter` 或 `contain`，可能改变固定定位的包含块。多个对话框同时打开时会累加滚动锁，但组件不负责管理彼此的层级顺序。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll("[data-dialog-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialogOpen);
      if (dialog) {
        dialog.open = true;
      }
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialogClose);
      if (dialog) {
        dialog.open = false;
      }
    });
  });
});
</script>

<style>
.dialog-note {
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

.dialog-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.dialog-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.dialog-actions,
.dialog-size-board {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.dialog-native-trigger {
  padding: 0.55rem 0.9rem;
  color: #16428f;
  font: inherit;
  font-weight: 700;
  background: #eef5ff;
  border: 2px solid #16428f;
  border-radius: 8px 11px 7px 10px;
  cursor: pointer;
}

.dialog-native-trigger:focus-visible,
.dialog-link:focus-visible {
  outline: 3px solid #56c6b7;
  outline-offset: 3px;
}

.dialog-copy {
  margin: 0;
  line-height: 1.7;
}

.dialog-check {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
}

.dialog-custom-footer {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.dialog-link {
  padding: 0.4rem 0.6rem;
  color: #16428f;
  font: inherit;
  background: transparent;
  border: 0;
  text-decoration: underline;
  cursor: pointer;
}

html.dark .dialog-note,
html.dark .dialog-board {
  color: #292524;
}

@media (max-width: 720px) {
  .dialog-board {
    padding: 1rem;
  }

  .dialog-note {
    grid-template-columns: auto 1fr;
  }

  .dialog-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
