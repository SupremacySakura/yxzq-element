# Menu 菜单

用手绘卡片承载一组导航或操作入口。Menu 只负责层级结构、展开状态与键盘焦点，跳转和业务动作由消费者监听 `super-menu-select` 后自行完成。

<div class="menu-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>菜单项表达"去哪里"或"做什么"。页面内的并列视图切换请使用 Tabs，跨层级的路径说明请使用 Breadcrumb。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-menu`。只注册菜单或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/menu";

// SSR 或自定义注册时机
import { defineSuperMenu } from "yxzq-element/menu";
defineSuperMenu();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

通过 `items` 属性传入菜单树。每个项包含 `key`、`label`，可选 `icon`、`disabled` 与 `children`。`active` 保存当前选中的 key，并同步为 `aria-current`。

<div class="menu-board">
  <super-menu id="menu-basic" active="overview" aria-label="项目导航"></super-menu>
  <p class="menu-status" data-menu-status="menu-basic">当前选中：概览</p>
</div>

```html
<super-menu active="overview" aria-label="项目导航"></super-menu>
```

```ts
const menu = document.querySelector("super-menu");
menu.items = [
  { key: "overview", label: "概览", icon: "◈" },
  {
    key: "components",
    label: "组件",
    icon: "▤",
    children: [
      { key: "button", label: "Button" },
      { key: "menu", label: "Menu" },
    ],
  },
  { key: "settings", label: "设置", icon: "⚙" },
];

menu.addEventListener("super-menu-select", (event) => {
  console.log(event.detail.key);
});
```

`items` 是 JavaScript 属性，无法通过 HTML attribute 表达。嵌套项始终渲染为 `ul` / `li` 结构；只有含 `children` 的项才会渲染展开控件与 `aria-haspopup="menu"`。

## 模式与方向

`mode="inline"` 把子菜单展开在当前项下方，适合侧边导航；`mode="vertical"` 在纵向菜单中以浮层展开子菜单；`mode="popup"` 让所有层级都以浮层出现。`orientation="horizontal"` 把顶层项排成一行，子菜单仍然向下弹出。

<div class="menu-board menu-mode-grid">
  <div class="menu-spec">
    <span>Inline</span>
    <super-menu id="menu-inline" mode="inline" aria-label="Inline 菜单"></super-menu>
  </div>
  <div class="menu-spec">
    <span>Vertical</span>
    <super-menu id="menu-vertical" mode="vertical" aria-label="Vertical 菜单"></super-menu>
  </div>
  <div class="menu-spec">
    <span>Popup</span>
    <super-menu id="menu-popup" mode="popup" aria-label="Popup 菜单"></super-menu>
  </div>
</div>

<div class="menu-board menu-horizontal-board">
  <super-menu id="menu-horizontal" orientation="horizontal" mode="popup" aria-label="顶部导航"></super-menu>
</div>

```html
<super-menu mode="inline"></super-menu>
<super-menu mode="vertical"></super-menu>
<super-menu mode="popup"></super-menu>
<super-menu orientation="horizontal" mode="popup"></super-menu>
```

浮层子菜单使用绝对定位并受组件边界限制。若父容器设置了 `overflow: hidden`，浮层可能被裁剪；需要完全脱离文档流时，请把菜单放在不被裁剪的容器中。

## 收起状态

`collapsed` 只在 `mode="inline"` 生效，把菜单收成图标栏。带 `icon` 的项会隐藏文字，并通过 `title` 与 `aria-label` 保留可访问名称；没有图标的项保留文字，避免出现无法识别的空白按钮。

<div class="menu-board menu-collapsed-board">
  <super-menu id="menu-collapsed" mode="inline" collapsed aria-label="收起导航"></super-menu>
</div>

```html
<super-menu mode="inline" collapsed></super-menu>
```

收起状态不会改变 `active` 或派发事件，只是视觉模式变化。切换时已展开的子菜单会重新收起。

## 尺寸

`size` 同时调整项高、内边距、图标间距与字号。三档尺寸保持相同的键盘和 ARIA 契约。

<div class="menu-board menu-size-grid">
  <div class="menu-spec">
    <span>大</span>
    <super-menu id="menu-large" size="large" aria-label="大尺寸菜单"></super-menu>
  </div>
  <div class="menu-spec">
    <span>中</span>
    <super-menu id="menu-medium" aria-label="中尺寸菜单"></super-menu>
  </div>
  <div class="menu-spec">
    <span>小</span>
    <super-menu id="menu-small" size="small" aria-label="小尺寸菜单"></super-menu>
  </div>
</div>

## 无障碍与键盘

根列表与每层子菜单使用 `role="menu"`，项使用 `role="menuitem"`，容器 `li` 使用 `role="none"`。整个菜单只有一个 Tab 停靠点（roving tabindex），方向键在同层可用项之间循环移动，禁用项会被跳过。

| 按键 | 纵向菜单 | 横向菜单顶层 |
| --- | --- | --- |
| `ArrowDown` / `ArrowUp` | 下一个 / 上一个同层项 | 展开 / 收起子菜单 |
| `ArrowRight` / `ArrowLeft` | 展开子菜单 / 收起子菜单或返回父级 | 下一个 / 上一个同层项 |
| `Home` / `End` | 第一个 / 最后一个可用同层项 | 第一个 / 最后一个可用同层项 |
| `Enter` / `Space` | 叶子项激活；父项切换展开 | 叶子项激活；父项切换展开 |
| `Escape` | 收起当前子菜单并回到父项 | 收起当前子菜单并回到父项 |

子菜单内部始终使用上下方向键移动，即使顶层是横向布局。`active` 的祖先项会自动展开，便于在页面加载后直接定位当前项。请为没有可见标题的菜单提供 `aria-label`，并保证同一菜单内 `key` 唯一。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `active` | `string` | `""` | 当前选中项的 key，映射为 `aria-current="true"` |
| `orientation` | `horizontal \| vertical` | `vertical` | 顶层排列方向与方向键轴向 |
| `mode` | `inline \| vertical \| popup` | `inline` | 子菜单展开方式 |
| `collapsed` | `boolean` | `false` | 仅 `inline` 模式生效，收起为图标栏 |
| `size` | `large \| medium \| small` | `medium` | 项高、间距与字号 |
| `aria-label` | `string` | `导航菜单` | 根菜单的可访问名称 |
| `items` | `MenuItem[]` | `[]` | 菜单树，仅 JavaScript 属性 |

```ts
interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  children?: MenuItem[];
}
```

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-menu-select` | `{ key: string }` | 用户点击或键盘激活叶子项后触发 |
| `super-menu-open-change` | `{ key: string, open: boolean }` | 用户展开或收起含子菜单的项后触发 |

程序化修改 `active` 或 `items` 不会触发这两个事件。点击父项只切换展开状态，不会派发 `super-menu-select`。

### Slots

Menu 不使用 Slot；内容完全来自 `items` 属性，因此图标由字符串提供，组件不依赖任何图标库。

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `menu` | 根 `ul` 容器 |
| `item` | 内置菜单项按钮 |
| `submenu` | 子菜单 `ul` |
| `icon` | 菜单项图标容器 |
| `label` | 菜单项文字 |
| `toggle` | 展开 / 收起指示符 |

### CSS Custom Properties

```css
super-menu {
  --super-menu-color: var(--super-text-color-regular);
  --super-menu-active-color: var(--super-color-primary-dark-2);
  --super-menu-active-background: color-mix(in srgb, var(--super-color-primary) 13%, #fffef9);
  --super-menu-hover-background: color-mix(in srgb, var(--super-color-primary) 8%, transparent);
  --super-menu-background: var(--super-background-color);
  --super-menu-border-color: var(--super-border-color);
  --super-menu-divider-color: var(--super-border-color-light);
  --super-menu-muted-color: var(--super-text-color-placeholder);
  --super-menu-focus-color: var(--super-focus-color);
  --super-menu-submenu-min-width: 180px;
  --super-menu-radius: 9px 11px 6px 9px / 6px 10px 11px 7px;
  --super-menu-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-menu` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。组件不执行路由跳转，也不会自动滚动或关闭其他菜单；选中结果与导航行为完全由消费者根据事件处理。`items` 中的 `key` 必须在同一菜单内唯一，否则焦点与选中态可能指向多个节点。Menu 不提供子菜单的 Teleport 或全局浮层，浮层定位受组件祖先的裁剪和层叠上下文影响。

<script setup>
import { onMounted } from "vue";
const docsItems = [
  { key: "overview", label: "概览", icon: "◈" },
  {
    key: "components",
    label: "组件",
    icon: "▤",
    children: [
      { key: "button", label: "Button" },
      { key: "menu", label: "Menu" },
      {
        key: "navigation",
        label: "导航",
        children: [
          { key: "breadcrumb", label: "Breadcrumb" },
          { key: "steps", label: "Steps" },
        ],
      },
    ],
  },
  { key: "settings", label: "设置", icon: "⚙" },
  { key: "archive", label: "归档", icon: "▣", disabled: true },
];

const topItems = [
  { key: "home", label: "首页" },
  {
    key: "products",
    label: "产品",
    children: [
      { key: "components", label: "组件库" },
      { key: "tokens", label: "设计令牌" },
    ],
  },
  {
    key: "resources",
    label: "资源",
    children: [
      { key: "guide", label: "开发指引" },
      { key: "changelog", label: "更新日志" },
    ],
  },
  { key: "about", label: "关于" },
];

onMounted(() => {
  document.querySelectorAll("super-menu").forEach((menu) => {
    if (menu.id === "menu-horizontal") {
      menu.items = topItems;
      menu.active = "home";
      return;
    }

    menu.items = docsItems;
    menu.active = menu.id === "menu-collapsed" ? "menu" : "overview";

    const status = document.querySelector(
      `[data-menu-status="${menu.id}"]`,
    );
    if (status) {
      menu.addEventListener("super-menu-select", (event) => {
        const key = event.detail.key;
        const find = (list) => {
          for (const item of list) {
            if (item.key === key) return item;
            const found = item.children ? find(item.children) : null;
            if (found) return found;
          }
          return null;
        };
        status.textContent = `当前选中：${find(menu.items)?.label ?? key}`;
      });
    }
  });
});
</script>

<style>
.menu-note {
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

.menu-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.menu-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.menu-board super-menu {
  max-width: 240px;
}

.menu-status {
  margin: 0.9rem 0 0;
  color: #6b6360;
  font-size: 0.86rem;
}

.menu-mode-grid,
.menu-size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1.5rem;
}

.menu-spec {
  display: grid;
  align-content: start;
  gap: 0.6rem;
  min-width: 0;
}

.menu-spec > span {
  color: #3f352b;
  font-size: 0.8rem;
  font-weight: 700;
}

.menu-horizontal-board super-menu,
.menu-collapsed-board super-menu {
  max-width: none;
}

html.dark .menu-note,
html.dark .menu-board {
  color: #292524;
}

@media (max-width: 720px) {
  .menu-board {
    padding: 1rem;
  }

  .menu-note {
    grid-template-columns: auto 1fr;
  }

  .menu-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
