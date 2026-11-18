# Tabs 标签页

用手绘标签切换同一区域内的内容。Tabs 只管理触发项与选中状态，面板内容由默认 Slot 提供，适合在详情、设置和文档章节之间做轻量切换。

<div class="tabs-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>标签页用于同一上下文中的并列视图。需要跳转到不同页面或完全无关的流程时，请使用链接或 Breadcrumb。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-tabs`。只注册标签页或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/tabs";

// SSR 或自定义注册时机
import { defineSuperTabs } from "yxzq-element/tabs";
defineSuperTabs();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

通过 `items` 属性传入触发项，每个项包含 `key` 与 `label`。`active` 保存当前选中的 key，初始未命中时会回退到第一个可用项。默认 Slot 是面板内容；内容切换由消费者根据 `super-tabs-change` 自行完成。

<div class="tabs-board">
  <super-tabs id="tabs-basic" active="overview" aria-label="项目视图">
    <div class="tabs-panel-demo" data-panel="overview">项目概览：最近 7 天新增 12 个任务。</div>
    <div class="tabs-panel-demo" data-panel="activity" hidden>动态记录：今天有 3 位成员更新了状态。</div>
    <div class="tabs-panel-demo" data-panel="settings" hidden>项目设置：调整通知、成员和归档策略。</div>
  </super-tabs>
</div>

```html
<super-tabs active="overview" aria-label="项目视图">
  <div>项目概览</div>
</super-tabs>
```

```ts
const tabs = document.querySelector("super-tabs");
tabs.items = [
  { key: "overview", label: "概览" },
  { key: "activity", label: "动态" },
  { key: "settings", label: "设置" },
];
```

`items` 是 JavaScript 属性，不能通过 HTML attribute 表达。更新数组后 Lit 会重新渲染触发项，`active` 保持消费者提供的受控值。

## 视觉类型

`variant="line"` 使用手绘下划线强调当前项；`card` 为每个触发项提供独立纸片轮廓；`segment` 把整组触发项包进一个分段容器。三种类型都保留相同的键盘与 ARIA 契约。

<div class="tabs-board tabs-variant-grid">
  <div class="tabs-spec">
    <span>Line</span>
    <super-tabs id="tabs-line" active="one" aria-label="Line 示例"></super-tabs>
  </div>
  <div class="tabs-spec">
    <span>Card</span>
    <super-tabs id="tabs-card" variant="card" active="one" aria-label="Card 示例"></super-tabs>
  </div>
  <div class="tabs-spec">
    <span>Segment</span>
    <super-tabs id="tabs-segment" variant="segment" active="one" aria-label="Segment 示例"></super-tabs>
  </div>
</div>

```html
<super-tabs variant="card" active="one"></super-tabs>
<super-tabs variant="segment" active="one"></super-tabs>
```

## 尺寸与方向

`size` 控制触发项高度、内边距和字号。`orientation="vertical"` 将标签列在面板左侧，并把方向键改为上下移动。

<div class="tabs-board">
  <div class="tabs-size-row">
    <strong>大</strong>
    <super-tabs id="tabs-size-large" size="large" active="one" aria-label="大尺寸示例"></super-tabs>
  </div>
  <div class="tabs-size-row">
    <strong>中</strong>
    <super-tabs id="tabs-size-medium" active="one" aria-label="中尺寸示例"></super-tabs>
  </div>
  <div class="tabs-size-row">
    <strong>小</strong>
    <super-tabs id="tabs-size-small" size="small" active="one" aria-label="小尺寸示例"></super-tabs>
  </div>
</div>

<div class="tabs-board">
  <super-tabs id="tabs-vertical" orientation="vertical" active="general" aria-label="纵向示例">
    <div class="tabs-panel-demo">常规设置面板。使用上下方向键切换左侧标签。</div>
  </super-tabs>
</div>

```html
<super-tabs orientation="vertical" active="general"></super-tabs>
```

## 消费者提供的触发项

不设置 `items` 时，`tab` 具名 Slot 接收消费者提供的触发元素。每个元素必须带有 `data-tab-key`；组件会为它们补充 `role="tab"`、`aria-selected`、`aria-controls` 和 roving `tabindex`。触发元素可以是原生 `button` 或自定义元素，但应保持可聚焦。

<div class="tabs-board">
  <super-tabs id="tabs-slot" active="draft" aria-label="自定义触发项">
    <button slot="tab" data-tab-key="draft">草稿</button>
    <button slot="tab" data-tab-key="published">已发布</button>
    <button slot="tab" data-tab-key="archived">归档</button>
    <div class="tabs-panel-demo">当前展示自定义触发项对应的面板。</div>
  </super-tabs>
</div>

```html
<super-tabs active="draft">
  <button slot="tab" data-tab-key="draft">草稿</button>
  <button slot="tab" data-tab-key="published">已发布</button>
  <div>面板内容</div>
</super-tabs>
```

使用自定义触发项时，选中样式与键盘行为由组件负责，但消费者仍应保证元素本身具备可点击语义。禁用项可通过 `disabled` 属性或 `aria-disabled="true"` 标记。

## 可关闭标签

开启 `closable` 后，每个触发项旁会出现一个原生关闭按钮。点击关闭只派发 `super-tabs-close`，不会自动移除项或改变 `active`；由消费者更新 `items` 或删除对应 Slot 内容。`close-label` 是关闭按钮的可访问名称前缀。

<div class="tabs-board">
  <super-tabs id="tabs-closable" active="one" closable close-label="关闭页面" aria-label="可关闭标签">
    <div class="tabs-panel-demo">关闭标签后，请在事件处理中更新 items 或移除对应触发项。</div>
  </super-tabs>
</div>

```ts
tabs.addEventListener("super-tabs-close", (event) => {
  tabs.items = tabs.items.filter((item) => item.key !== event.detail.key);
});
```

## 无障碍与键盘

内部使用 `role="tablist"`、`role="tab"` 与 `role="tabpanel"`。同一时刻只有一个触发项位于 Tab 序列中（roving tabindex）；方向键切换时同步更新选中项与焦点。禁用项会被跳过。

| 按键 | 水平 | 垂直 |
| --- | --- | --- |
| `ArrowRight` / `ArrowLeft` | 下一个 / 上一个标签 | 无动作 |
| `ArrowDown` / `ArrowUp` | 无动作 | 下一个 / 上一个标签 |
| `Home` / `End` | 第一个 / 最后一个可用标签 | 第一个 / 最后一个可用标签 |

切换使用自动激活模式：方向键移动即更新 `active` 并派发事件。面板带 `tabindex="0"`，方便键盘用户从触发项继续进入内容。请为没有可见标题的 Tabs 提供 `aria-label`。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `active` | `string` | `""` | 当前选中项的 key；未命中时回退到第一个可用项 |
| `orientation` | `horizontal \| vertical` | `horizontal` | 标签排列方向与方向键轴向 |
| `variant` | `line \| card \| segment` | `line` | 视觉类型 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `closable` | `boolean` | `false` | 为每个触发项显示关闭按钮 |
| `close-label` | `string` | `关闭标签页` | 关闭按钮的可访问名称前缀 |
| `aria-label` | `string` | `""` | 标签列表的可访问名称 |
| `items` | `{ key, label, disabled? }[]` | `[]` | 内置触发项，仅 JavaScript 属性 |

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-tabs-change` | `{ active: string }` | 用户点击或键盘切换标签后触发 |
| `super-tabs-close` | `{ key: string }` | 用户点击标签关闭按钮时触发 |

程序化修改 `active` 不会触发 `super-tabs-change`。

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 当前面板内容 |
| `tab` | 消费者提供的触发项；每个元素读取 `data-tab-key` |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `tablist` | 触发项容器 |
| `tab-item` | 单个触发项外壳 |
| `tab` | 内置触发按钮 |
| `tab-close` | 内置关闭按钮 |
| `panel` | 面板容器 |

### CSS Custom Properties

```css
super-tabs {
  --super-tabs-color: var(--super-text-color-regular);
  --super-tabs-active-color: var(--super-color-primary-dark-2);
  --super-tabs-active-background: color-mix(in srgb, var(--super-color-primary) 13%, #fffef9);
  --super-tabs-border-color: var(--super-border-color-light);
  --super-tabs-indicator-color: var(--super-color-primary);
  --super-tabs-focus-color: var(--super-focus-color);
  --super-tabs-radius: 9px 11px 6px 9px / 6px 9px 10px 8px;
  --super-tabs-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-tabs` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。组件不负责面板的显示与隐藏；请根据 `active` 或 `super-tabs-change` 更新默认 Slot 内容。`items` 与 `tab` Slot 不应同时使用；设置非空 `items` 后，Slot 触发项不会再参与渲染或键盘序列。`closable` 只为内置 `items` 渲染关闭按钮；使用 `tab` Slot 时，关闭控件由消费者自行提供。

<script setup>
import { onMounted } from "vue";

const demoItems = [
  { key: "overview", label: "概览" },
  { key: "activity", label: "动态" },
  { key: "settings", label: "设置" },
];

const simpleItems = [
  { key: "one", label: "第一项" },
  { key: "two", label: "第二项" },
  { key: "three", label: "第三项", disabled: true },
];

onMounted(() => {
  document.querySelectorAll("super-tabs").forEach((tabs) => {
    if (tabs.id === "tabs-vertical") {
      tabs.items = [
        { key: "general", label: "常规" },
        { key: "members", label: "成员" },
        { key: "advanced", label: "高级" },
      ];
    } else if (tabs.id === "tabs-closable") {
      tabs.items = [
        { key: "one", label: "可关闭一" },
        { key: "two", label: "可关闭二" },
      ];
      tabs.addEventListener("super-tabs-close", (event) => {
        tabs.items = tabs.items.filter((item) => item.key !== event.detail.key);
      });
    } else if (tabs.id === "tabs-basic") {
      tabs.items = demoItems;
      const panels = tabs.querySelectorAll("[data-panel]");
      tabs.addEventListener("super-tabs-change", (event) => {
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.panel !== event.detail.active;
        });
      });
    } else if (tabs.id !== "tabs-slot") {
      tabs.items = simpleItems;
    }
  });
});
</script>

<style>
.tabs-note {
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

.tabs-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.tabs-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.tabs-variant-grid {
  display: grid;
  gap: 1.5rem;
}

.tabs-spec {
  display: grid;
  gap: 0.7rem;
}

.tabs-spec > span {
  font-size: 0.82rem;
  font-weight: 700;
}

.tabs-size-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tabs-size-row > strong {
  flex: none;
  width: 1.5rem;
}

.tabs-panel-demo {
  padding: 0.25rem 0;
  color: #4a4441;
  font-size: 0.92rem;
}

html.dark .tabs-note,
html.dark .tabs-board {
  color: #292524;
}

@media (max-width: 720px) {
  .tabs-board {
    padding: 1rem;
  }

  .tabs-note {
    grid-template-columns: auto 1fr;
  }

  .tabs-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
