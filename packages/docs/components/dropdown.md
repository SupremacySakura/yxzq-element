# Dropdown 下拉菜单

`super-dropdown` 是一款手绘风操作菜单。它把默认 Slot 中的触发元素与 `items` 数据组合起来，支持点击、悬停和手动触发，以及完整的菜单键盘操作。

<div class="dropdown-note">
  <span aria-hidden="true">✦</span>
  <strong>菜单提示</strong>
  <span>操作菜单只负责列出动作与派发选择结果；真正的命令、导航和权限判断仍由应用处理。</span>
</div>

## 注册

组件入口提供 `super-dropdown` 标签、`defineSuperDropdown()` 与 `SuperDropdown` 类。重复注册是安全的；没有 `customElements` 时不会抛错。

```ts
import "yxzq-element/dropdown";

// SSR 或自定义注册时机
import { defineSuperDropdown } from "yxzq-element/dropdown";
defineSuperDropdown();
```

## 基础用法

默认 Slot 接收一个按钮或链接作为触发元素。`items` 是 JavaScript 属性，使用稳定的 `key` 标识每个动作。

<div class="dropdown-board">
  <super-dropdown id="dropdown-basic" aria-label="文件操作">
    <button type="button" class="dropdown-trigger">文件操作 <span aria-hidden="true">▾</span></button>
  </super-dropdown>
</div>

```html
<super-dropdown aria-label="文件操作">
  <button type="button">文件操作</button>
</super-dropdown>
```

```js
const dropdown = document.querySelector("super-dropdown");
dropdown.items = [
  { key: "rename", label: "重命名" },
  { key: "duplicate", label: "创建副本" },
  { key: "divider", label: "", divider: true },
  { key: "archive", label: "归档", disabled: true },
  { key: "delete", label: "删除", danger: true },
];

dropdown.addEventListener("super-dropdown-select", (event) => {
  console.log(event.detail.key);
});
```

## 触发方式

`trigger="click"` 是默认方式；`hover` 在指针进入时打开，离开触发区或菜单后延迟关闭；`manual` 只响应 `open` 属性变化。

<div class="dropdown-board dropdown-trigger-grid">
  <div class="dropdown-spec">
    <span>点击</span>
    <super-dropdown id="dropdown-click" trigger="click" aria-label="点击菜单">
      <button type="button" class="dropdown-trigger">点击打开</button>
    </super-dropdown>
  </div>
  <div class="dropdown-spec">
    <span>悬停</span>
    <super-dropdown id="dropdown-hover" trigger="hover" aria-label="悬停菜单">
      <button type="button" class="dropdown-trigger">悬停打开</button>
    </super-dropdown>
  </div>
  <div class="dropdown-spec">
    <span>手动</span>
    <super-dropdown id="dropdown-manual" trigger="manual" aria-label="手动菜单">
      <button type="button" class="dropdown-trigger">由 open 控制</button>
    </super-dropdown>
  </div>
</div>

```html
<super-dropdown trigger="hover">
  <button type="button">悬停打开</button>
</super-dropdown>
```

## 尺寸与位置

尺寸调整菜单项的内边距和字号。`placement` 会交给 Floating UI 计算，并在空间不足时自动翻转。

<div class="dropdown-board dropdown-size-grid">
  <strong>大</strong>
  <super-dropdown id="dropdown-large" size="large" aria-label="大号菜单">
    <button type="button" class="dropdown-trigger">大号</button>
  </super-dropdown>
  <strong>中</strong>
  <super-dropdown id="dropdown-medium" size="medium" aria-label="中号菜单">
    <button type="button" class="dropdown-trigger">中号</button>
  </super-dropdown>
  <strong>小</strong>
  <super-dropdown id="dropdown-small" size="small" aria-label="小号菜单">
    <button type="button" class="dropdown-trigger">小号</button>
  </super-dropdown>
</div>

```html
<super-dropdown placement="bottom-end" size="small">
  <button type="button">更多</button>
</super-dropdown>
```

## 菜单项

`divider: true` 渲染 `role="separator"` 的分隔线；`disabled` 项会被方向键、Home/End 和选择逻辑跳过；`danger` 只改变视觉语气，不会改变事件或权限。

```js
dropdown.items = [
  { key: "edit", label: "编辑" },
  { key: "sep", label: "", divider: true },
  { key: "archive", label: "归档", disabled: true },
  { key: "delete", label: "删除", danger: true },
];
```

## 键盘与关闭行为

触发元素获得焦点后，`ArrowDown` / `ArrowUp` 打开菜单并把焦点移到第一项 / 最后一项。菜单内支持循环方向键、`Home`、`End`、`Enter` / `Space` 选择、`Escape` 关闭并回到触发元素，`Tab` 关闭菜单后继续正常离开。

`close-on-select` 控制选择后是否关闭；`close-on-outside-click` 控制点击外部是否关闭；`close-on-escape` 控制 `Escape` 是否关闭。关闭后若由 `Escape` 或选择触发，焦点回到触发元素。

```html
<super-dropdown close-on-select="false" close-on-escape="false">
  <button type="button">保持打开</button>
</super-dropdown>
```

## 受控状态

`open` 同时支持受控与非受控用法。HTML `open` attribute 只作为初始默认值；通过 JavaScript property 写入后进入受控模式。

用户点击触发元素、使用键盘、选择菜单项、点击外部或按 `Escape` 时，组件会先更新内部显示状态并派发 `super-dropdown-open-change`，随后在下一个动画帧确认父级是否写回。父级在事件中同步写入新值即接受；不写入时恢复最近一次外部提交状态。程序化写入不会派发用户事件。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | 是否显示菜单；用户交互更新并派发事件，程序化修改不派发 |
| `items` | `{ key: string; label: string; disabled?: boolean; danger?: boolean; divider?: boolean }[]` | `[]` | JavaScript 属性；菜单项数据 |
| `trigger` | `click \| hover \| manual` | `click` | 打开菜单的交互方式 |
| `placement` | `top \| top-start \| top-end \| bottom \| bottom-start \| bottom-end \| left \| left-start \| left-end \| right \| right-start \| right-end` | `bottom-start` | 菜单相对触发元素的优先位置 |
| `close-on-select` | `boolean` | `true` | 选择菜单项后是否关闭 |
| `close-on-outside-click` | `boolean` | `true` | 点击组件外部是否关闭 |
| `close-on-escape` | `boolean` | `true` | 按 `Escape` 是否关闭 |
| `disabled` | `boolean` | `false` | 禁用后不可打开或选择 |
| `size` | `large \| medium \| small` | `medium` | 菜单项尺寸 |
| `aria-label` | `string` | `操作菜单` | 菜单的可访问名称 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-dropdown-select` | `{ key: string }` | 用户选择菜单项；`bubbles: true`、`composed: true` |
| `super-dropdown-open-change` | `{ open: boolean }` | 用户交互请求打开或关闭；`bubbles: true`、`composed: true` |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 触发元素；建议使用原生 `button`、`a` 或 `super-button` |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `trigger` | 包裹默认 Slot 的触发区域 |
| `menu` | 菜单容器 |
| `item` | 单个菜单项 |
| `divider` | 分隔线 |

### CSS Custom Properties

```css
super-dropdown {
  --super-dropdown-menu-min-width: 180px;
  --super-dropdown-background: #fffef9;
  --super-dropdown-border-color: #2f2a27;
  --super-dropdown-hover-background: #eef5ff;
  --super-dropdown-danger-color: #cf3038;
  --super-dropdown-shadow-color: rgb(23 78 166 / 28%);
  --super-dropdown-radius: 10px 13px 9px 12px / 11px 9px 13px 10px;
  --super-dropdown-z-index: 2000;
  --super-dropdown-rotation: -0.25deg;
}
```

## 无障碍

- 触发元素自动获得 `aria-haspopup="menu"`、`aria-expanded`，打开时关联 `aria-controls`。
- 菜单使用 `role="menu"`，菜单项使用 `role="menuitem"`，分隔线使用 `role="separator"`。
- 菜单项使用真实 DOM 焦点移动，不使用 `aria-activedescendant`；禁用项保留在阅读顺序中但不可聚焦或选择。
- 使用 `aria-label` 为菜单提供清晰的动作上下文，尤其是页面中存在多个菜单时。

## 已知边界

- `items` 只支持一层菜单项，不提供子菜单、分组标题或复选状态。
- 组件只派发选择意图，不执行动作、路由跳转或关闭确认；这些由消费者处理。
- `open` 同时支持受控与非受控用法；用户交互会先更新并派发 `super-dropdown-open-change`，受控父级未在事件中写回时下一帧恢复最近一次外部提交值。程序化修改不会派发事件。
- 触发元素由消费者提供，组件不为其添加 `tabindex`；请使用本身可聚焦的按钮或链接。

<script setup>
import { onMounted } from "vue";

const menuItems = [
  { key: "rename", label: "重命名" },
  { key: "duplicate", label: "创建副本" },
  { key: "divider", label: "", divider: true },
  { key: "archive", label: "归档", disabled: true },
  { key: "delete", label: "删除", danger: true },
];

onMounted(() => {
  document.querySelectorAll("super-dropdown").forEach((dropdown) => {
    dropdown.items = menuItems;
  });
});
</script>

<style>
.dropdown-note {
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

.dropdown-note > span:first-child {
  color: #c56a1a;
  font-size: 1.35rem;
}

.dropdown-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.dropdown-trigger {
  padding: 0.55rem 0.9rem;
  color: #292524;
  font: inherit;
  font-weight: 700;
  background: #fffef9;
  border: 2px solid #34445f;
  border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
  box-shadow: 2px 2px 0 -1px #a8b3bf;
  cursor: pointer;
}

.dropdown-trigger:hover {
  background: #eef5ff;
  border-color: #3f9b68;
}

.dropdown-trigger:focus-visible {
  outline: 3px solid #56c6b7;
  outline-offset: 2px;
}

.dropdown-trigger-grid,
.dropdown-size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.25rem;
  align-items: center;
}

.dropdown-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: start;
}

.dropdown-spec > span {
  color: #3f352b;
  font-size: 0.8rem;
  font-weight: 700;
}

@media (max-width: 720px) {
  .dropdown-board {
    padding: 1rem;
  }

  .dropdown-note {
    grid-template-columns: auto 1fr;
  }

  .dropdown-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
