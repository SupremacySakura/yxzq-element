# Drawer 抽屉

`super-drawer` 是一款手绘风侧边抽屉，适合在不离开当前页面的情况下展示筛选、详情、设置或较长的辅助流程。它支持四向停靠、数值或预设尺寸、模态 ARIA、焦点陷阱、滚动锁定与可取消的关闭前事件。

<div class="drawer-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span><code>open</code> 同时支持受控与非受控用法。受控模式下，用户操作只会发起关闭请求；需要保留抽屉时，监听 <code>super-drawer-before-close</code> 并调用 <code>preventDefault()</code>，或在关闭事件中写回最新状态。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-drawer`。只注册抽屉或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/drawer";

// SSR 或自定义注册时机
import { defineSuperDrawer } from "yxzq-element/drawer";
defineSuperDrawer();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

设置 `open` 显示抽屉，默认 Slot 是正文，`title` 提供标题。默认从右侧打开；打开后焦点进入抽屉，`Escape` 或点击遮罩可关闭，关闭后焦点返回打开前的元素。

<div class="drawer-board drawer-actions">
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-basic">打开基础抽屉</button>
  <super-drawer id="demo-drawer-basic" title="订单详情" close-label="关闭订单详情">
    <p class="drawer-copy">订单 #A1024 已支付，预计今天 18:00 前发货。</p>
  </super-drawer>
</div>

```html
<button type="button" id="open-drawer">打开抽屉</button>

<super-drawer id="detail-drawer" title="订单详情">
  <p>订单 #A1024 已支付。</p>
</super-drawer>

<script>
  const trigger = document.getElementById("open-drawer");
  const drawer = document.getElementById("detail-drawer");

  trigger.addEventListener("click", () => {
    drawer.open = true;
  });

  drawer.addEventListener("super-drawer-close", () => {
    drawer.open = false;
  });
</script>
```

## 停靠方向

`placement` 支持 `right`、`left`、`top`、`bottom`。左右停靠时 `size` 表示宽度，上下停靠时表示高度；动画方向会跟随停靠位置。

<div class="drawer-board drawer-placement-grid">
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-left">左侧</button>
  <super-drawer id="demo-drawer-left" placement="left" size="small" title="左侧筛选" show-footer="false">
    <p class="drawer-copy">从左侧进入，适合筛选面板或导航。</p>
  </super-drawer>
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-top">顶部</button>
  <super-drawer id="demo-drawer-top" placement="top" size="240" title="顶部通知">
    <p class="drawer-copy">从顶部展开，数值尺寸以像素为单位。</p>
  </super-drawer>
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-bottom">底部</button>
  <super-drawer id="demo-drawer-bottom" placement="bottom" size="large" title="底部操作">
    <p class="drawer-copy">从底部进入，适合短流程或操作面板。</p>
  </super-drawer>
</div>

```html
<super-drawer open placement="left" size="small" title="左侧筛选"></super-drawer>
<super-drawer open placement="top" size="240" title="顶部通知"></super-drawer>
<super-drawer open placement="bottom" size="large" title="底部操作"></super-drawer>
```

## 尺寸

`size` 既接受 `small`、`medium`、`large`，也接受数字。数字通过 property 设置时按像素处理，通过 attribute 写入时会解析为数值；也可以写入 CSS 长度字符串。左右停靠限制宽度，上下停靠限制高度，移动端会自动收敛到视口内。

<div class="drawer-board drawer-size-board">
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-numeric">数值宽度 420</button>
  <super-drawer id="demo-drawer-numeric" title="数值宽度">
    <p class="drawer-copy">通过 <code>size="420"</code> 或 <code>drawer.size = 420</code> 设置为 420px。</p>
  </super-drawer>
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-css">CSS 长度</button>
  <super-drawer id="demo-drawer-css" size="min(480px, 80vw)" title="CSS 长度尺寸">
    <p class="drawer-copy">字符串会作为 CSS 长度使用，但不会超过组件的视口上限。</p>
  </super-drawer>
</div>

```html
<super-drawer open size="420" title="数值宽度"></super-drawer>
<super-drawer open size="min(480px, 80vw)" title="CSS 长度尺寸"></super-drawer>
```

## 页脚与自定义内容

默认页脚包含取消与确认按钮，文案通过 `cancel-text`、`confirm-text` 覆盖。`show-footer="false"` 隐藏页脚；提供 `footer` Slot 时，它会替换默认按钮组。`header` Slot 替换可见标题内容，但标题容器和 `aria-labelledby` 关联保持不变。

<div class="drawer-board drawer-actions">
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-custom">自定义页脚</button>
  <super-drawer id="demo-drawer-custom" title="编辑偏好" confirm-text="保存" cancel-text="返回">
    <p class="drawer-copy">修改会应用到当前工作区。</p>
    <label class="drawer-check">
      <input type="checkbox" checked />
      接收每周摘要
    </label>
    <div slot="footer" class="drawer-custom-footer">
      <button class="drawer-link" type="button" data-drawer-close="demo-drawer-custom">稍后处理</button>
      <button class="drawer-native-trigger" type="button" data-drawer-close="demo-drawer-custom">完成</button>
    </div>
  </super-drawer>
</div>

```html
<super-drawer
  open
  title="编辑偏好"
  confirm-text="保存"
  cancel-text="返回"
>
  <p>修改会应用到当前工作区。</p>
  <div slot="footer">
    <button type="button">稍后处理</button>
    <button type="button">完成</button>
  </div>
</super-drawer>
```

## 关闭拦截

所有关闭请求都会先派发可取消的 `super-drawer-before-close`。调用 `event.preventDefault()` 会保留抽屉与焦点，适合阻止未保存内容丢失。关闭原因包括 `escape`、`mask`、`close-button`、`confirm` 和 `cancel`。

```ts
drawer.addEventListener("super-drawer-before-close", (event) => {
  const { reason } = event.detail;
  if (reason === "mask" && hasUnsavedChanges()) {
    event.preventDefault();
    showSavePrompt();
    return;
  }

  drawer.open = false;
});
```

`super-drawer-confirm` 与 `super-drawer-cancel` 分别在点击默认页脚按钮且关闭请求未被拦截时派发。它们同样是组合事件；若 `before-close` 被取消，则不会派发确认/取消通知，也不会关闭抽屉。

## 控制关闭方式

`closable="false"` 隐藏右上角关闭按钮，`mask-closable="false"` 禁止点击遮罩关闭，`close-on-escape="false"` 禁止 Escape 关闭。三项都不影响默认页脚的确认/取消按钮。

<div class="drawer-board drawer-actions">
  <button class="drawer-native-trigger" type="button" data-drawer-open="demo-drawer-strict">仅按钮关闭</button>
  <super-drawer
    id="demo-drawer-strict"
    title="完成设置"
    closable="false"
    mask-closable="false"
    close-on-escape="false"
    confirm-text="应用"
    cancel-text="返回"
  >
    <p class="drawer-copy">点击遮罩或按 Escape 都不会关闭，只能使用页脚按钮。</p>
  </super-drawer>
</div>

```html
<super-drawer
  open
  title="完成设置"
  closable="false"
  mask-closable="false"
  close-on-escape="false"
>
  点击遮罩或按 Escape 都不会关闭。
</super-drawer>
```

## 受控状态

`open` 同时支持受控与非受控用法。HTML `open` attribute 只作为初始默认值；通过 JavaScript property 写入后进入受控模式。

用户点击关闭按钮、遮罩、按 `Escape` 或使用页脚动作时，组件会先完成 `before-close` 拦截与确认/取消通知，再请求关闭。若父级没有在关闭事件中把 `open` 同步写回 `false`，组件会在下一个动画帧恢复之前的打开状态，并重新启用焦点陷阱与滚动锁定。

- 在 `super-drawer-close`（或未被拦截的 `super-drawer-before-close`）中写回 `open = false` 表示接受关闭。
- 保持属性不变，或调用 `event.preventDefault()` 阻止 `before-close`，表示保留抽屉。
- 初始 `open` attribute 驱动的非受控用法会直接关闭，不会回弹。

## 无障碍

抽屉使用 `role="dialog"`、`aria-modal="true"`，标题关联到 `aria-labelledby`，正文关联到 `aria-describedby`。`header` Slot 会替换可见标题内容，但不会破坏标题关联；仅使用自定义标题时，也请同时提供清晰的 `title` 或可读文本。

打开时页面滚动被锁定，焦点移动到抽屉面板；Tab 与 Shift+Tab 在关闭按钮、正文中的可聚焦内容和页脚按钮之间循环。关闭后释放滚动锁定并把焦点送回打开前的元素。右上角关闭按钮的可访问名称由 `close-label` 控制，默认是“关闭抽屉”。

遮罩点击只在点击遮罩本身时生效，点击抽屉内部不会误触发关闭。焦点陷阱会包含默认 Slot 中的可聚焦元素；通过 `footer` Slot 放入的自定义按钮仍应保持正常的按钮语义。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 受控显示状态；打开时启用焦点陷阱与滚动锁定 |
| `title` | `string` | 空字符串 | 抽屉标题；同时作为 `aria-labelledby` 的文本来源 |
| `placement` | `left \| right \| top \| bottom` | `right` | 停靠方向 |
| `size` | `number \| string` | `medium` | 预设尺寸 `small \| medium \| large`，数字按像素处理，其他字符串按 CSS 长度处理 |
| `closable` | `boolean` | `true` | 是否显示右上角关闭按钮 |
| `mask-closable` | `boolean` | `true` | 是否允许点击遮罩关闭 |
| `close-on-escape` | `boolean` | `true` | 是否允许 Escape 关闭 |
| `close-label` | `string` | `关闭抽屉` | 关闭按钮的可访问名称 |
| `show-footer` | `boolean` | `true` | 是否显示页脚；提供 `footer` Slot 时由 Slot 内容替换默认按钮 |
| `confirm-text` | `string` | `确定` | 默认确认按钮文案 |
| `cancel-text` | `string` | `取消` | 默认取消按钮文案 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-drawer-before-close` | 关闭前派发，`detail.reason` 为 `escape \| mask \| close-button \| confirm \| cancel`；事件可取消 |
| `super-drawer-close` | 已关闭后派发，`detail.reason` 与关闭请求一致 |
| `super-drawer-confirm` | 点击默认确认按钮时派发，`detail.reason` 为 `confirm` |
| `super-drawer-cancel` | 点击默认取消按钮时派发，`detail.reason` 为 `cancel` |

所有事件都设置 `bubbles: true` 与 `composed: true`。

```ts
drawer.addEventListener("super-drawer-close", (event) => {
  const { reason } = (event as CustomEvent<{ reason: string }>).detail;
});
```

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 抽屉正文，自动关联到 `aria-describedby` |
| `header` | 替换可见标题内容，标题容器与 `aria-labelledby` 保持不变 |
| `footer` | 替换默认取消/确认按钮；提供后不再渲染内置页脚按钮 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `drawer` | 抽屉面板 |
| `mask` | 全屏遮罩层 |
| `header` | 标题区域 |
| `title` | 标题文本容器 |
| `body` | 正文区域，超出尺寸时独立滚动 |
| `footer` | 页脚区域 |
| `close` | 右上角关闭按钮；`closable="false"` 时不存在 |

### CSS Custom Properties

组件变量默认映射到共享设计令牌，可从宿主覆盖：

```css
super-drawer {
  --super-drawer-size: 380px;
  --super-drawer-max-width: calc(100vw - 32px);
  --super-drawer-max-height: calc(100vh - 32px);
  --super-drawer-padding: var(--super-spacing-xl, 24px);
  --super-drawer-background: var(--super-background-color, #fffef9);
  --super-drawer-color: var(--super-text-color-primary, #292524);
  --super-drawer-muted-color: var(--super-text-color-secondary, #6b6360);
  --super-drawer-border-color: var(--super-border-color, #2f2a27);
  --super-drawer-border-width: var(--super-sketch-width, 2px);
  --super-drawer-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-drawer-mask-background: rgb(41 37 36 / 46%);
  --super-drawer-focus-color: var(--super-focus-color, #56c6b7);
  --super-drawer-primary-color: var(--super-color-primary, #4b87f5);
  --super-drawer-primary-border-color: var(--super-color-primary-dark-2, #3272e8);
  --super-drawer-z-index: var(--super-z-index-modal, 2100);
  --super-drawer-rotation: -0.14deg;
}
```

## 已知边界

`super-drawer` 不是 form-associated Custom Element，不参与外层 `FormData`、原生表单 reset 或外部 constraint validation。确认按钮不会自动提交表单；需要提交时，请监听 `super-drawer-confirm` 并调用业务逻辑。

`open` 会把用户关闭请求桥接给受控父级：父级未写回时下一帧恢复打开状态。模态层通过 `position: fixed` 渲染在组件 Shadow DOM 内；祖先元素若设置 `transform`、`filter` 或 `contain`，可能改变固定定位的包含块。多个抽屉或对话框同时打开时会累加滚动锁，但组件不负责管理彼此的层级顺序。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll("[data-drawer-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const drawer = document.getElementById(trigger.dataset.drawerOpen);
      if (drawer) {
        drawer.open = true;
      }
    });
  });

  document.querySelectorAll("[data-drawer-close]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const drawer = document.getElementById(trigger.dataset.drawerClose);
      if (drawer) {
        drawer.open = false;
      }
    });
  });
});
</script>

<style>
.drawer-note {
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

.drawer-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.drawer-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.drawer-actions,
.drawer-placement-grid,
.drawer-size-board {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.drawer-native-trigger {
  padding: 0.55rem 0.9rem;
  color: #16428f;
  font: inherit;
  font-weight: 700;
  background: #eef5ff;
  border: 2px solid #16428f;
  border-radius: 8px 11px 7px 10px;
  cursor: pointer;
}

.drawer-native-trigger:focus-visible,
.drawer-link:focus-visible {
  outline: 3px solid #56c6b7;
  outline-offset: 3px;
}

.drawer-copy {
  margin: 0;
  line-height: 1.7;
}

.drawer-check {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
}

.drawer-custom-footer {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.drawer-link {
  padding: 0.4rem 0.6rem;
  color: #16428f;
  font: inherit;
  background: transparent;
  border: 0;
  text-decoration: underline;
  cursor: pointer;
}

html.dark .drawer-note,
html.dark .drawer-board {
  color: #292524;
}

@media (max-width: 720px) {
  .drawer-board {
    padding: 1rem;
  }

  .drawer-note {
    grid-template-columns: auto 1fr;
  }

  .drawer-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
