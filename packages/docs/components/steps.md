# Steps 步骤条

用带手绘描边的节点展示流程进度。Steps 只负责呈现当前步骤、状态与连接线，流程推进由消费者更新 `active`。

<div class="steps-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>步骤条表达有先后顺序的流程。没有顺序的并列内容请使用 Tabs 或卡片布局。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-steps`。只注册步骤条或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/steps";

// SSR 或自定义注册时机
import { defineSuperSteps } from "yxzq-element/steps";
defineSuperSteps();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

通过 `items` 传入步骤，`active` 是从 0 开始的当前索引。索引之前的步骤显示为完成态，之后为等待态，当前步使用 `status` 指定的状态。

<div class="steps-board">
  <super-steps id="steps-basic" aria-label="发布流程"></super-steps>
</div>

```html
<super-steps active="1" aria-label="发布流程"></super-steps>
```

```ts
const steps = document.querySelector("super-steps");
steps.items = [
  { title: "填写信息", description: "确认项目基础资料" },
  { title: "选择方案", description: "比较并选择适合的方案" },
  { title: "完成", description: "生成并发布站点" },
];
steps.active = 1;
```

`items` 是 JavaScript 属性，无法通过 HTML attribute 表达。`active` 超出范围时会按最近的边界步骤呈现，不会修改消费者保存的值。

## 状态

`status` 只作用于当前步骤。`process` 用主色强调进行中，`error` 标记失败，`finish` 与 `wait` 通常由索引推导；把当前步设为 `finish` 并定位到最后一步，可以表达整条流程已完成。

<div class="steps-board steps-status-grid">
  <div class="steps-spec">
    <span>进行中</span>
    <super-steps id="steps-process" aria-label="进行中的流程"></super-steps>
  </div>
  <div class="steps-spec">
    <span>失败</span>
    <super-steps id="steps-error" status="error" aria-label="失败的流程"></super-steps>
  </div>
  <div class="steps-spec">
    <span>已完成</span>
    <super-steps id="steps-finish" status="finish" aria-label="已完成的流程"></super-steps>
  </div>
</div>

```html
<super-steps status="process"></super-steps>
<super-steps status="error"></super-steps>
<super-steps status="finish"></super-steps>
```

## 方向

`direction="vertical"` 把步骤改为上下排列，连接线随之变成纵向虚线，适合较长的标题和描述。

<div class="steps-board">
  <super-steps id="steps-vertical" direction="vertical" aria-label="纵向流程"></super-steps>
</div>

```html
<super-steps direction="vertical"></super-steps>
```

## 可点击步骤

开启 `clickable` 后，每个步骤渲染为原生 `button`，支持 Tab 聚焦、Enter 与 Space 触发，并派发 `super-steps-change`。组件不会自行推进流程以外的内容；请在事件中加载对应步骤的数据。

<div class="steps-board">
  <super-steps id="steps-clickable" clickable aria-label="可点击的流程"></super-steps>
  <p class="steps-status" data-steps-status="steps-clickable">当前步骤：2</p>
</div>

```html
<super-steps clickable aria-label="可点击的流程"></super-steps>
```

```ts
steps.addEventListener("super-steps-change", (event) => {
  console.log(event.detail.active);
});
```

点击当前步骤不会重复派发事件。未开启 `clickable` 时，步骤只读，不进入 Tab 序列。

## 尺寸

`size` 调整节点直径、字号与间距，三档尺寸保持相同的语义结构。

<div class="steps-board steps-size-grid">
  <div class="steps-spec">
    <span>大</span>
    <super-steps id="steps-large" size="large" aria-label="大尺寸流程"></super-steps>
  </div>
  <div class="steps-spec">
    <span>中</span>
    <super-steps id="steps-medium" aria-label="中尺寸流程"></super-steps>
  </div>
  <div class="steps-spec">
    <span>小</span>
    <super-steps id="steps-small" size="small" aria-label="小尺寸流程"></super-steps>
  </div>
</div>

## 无障碍与键盘

外层使用 `ol` 与 `role="list"`，每步使用 `li` 与 `role="listitem"`；当前步带 `aria-current="step"`。节点中的序号与图标、连接线全部 `aria-hidden="true"`，读屏只会朗读标题、描述与当前步语义。

| 按键 | 行为 |
| --- | --- |
| `Tab` / `Shift + Tab` | 在可点击步骤之间移动；只读模式下步骤不进入 Tab 序列 |
| `Enter` / `Space` | 激活聚焦的步骤并派发 `super-steps-change` |

请为步骤条提供描述流程用途的 `aria-label`。标题应简短，补充信息放进 `description`，不要把关键状态只写在图标里。

## 受控状态

`active` 同时支持受控与非受控用法。HTML attribute 初始化只作为非受控默认值；通过 JavaScript property 写入后进入受控模式。

用户点击或键盘激活可点击步骤时，组件会先更新内部步骤并派发 `super-steps-change`，随后在下一个动画帧确认父级是否写回。父级同步写回新索引即接受切换；不写入时恢复最近一次外部提交值。程序化写入不会派发用户事件。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `active` | `number` | `0` | 从 0 开始的当前步骤索引 |
| `direction` | `horizontal \| vertical` | `horizontal` | 排列方向与连接线方向 |
| `status` | `process \| wait \| finish \| error` | `process` | 当前步骤的状态 |
| `clickable` | `boolean` | `false` | 步骤是否可点击并派发事件 |
| `size` | `large \| medium \| small` | `medium` | 节点尺寸、字号与间距 |
| `aria-label` | `string` | `步骤` | 步骤列表的可访问名称 |
| `items` | `{ title, description?, icon? }[]` | `[]` | 步骤数据，仅 JavaScript 属性 |

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-steps-change` | `{ active: number }` | 用户点击或键盘激活其他步骤后触发 |

程序化修改 `active` 不会触发 `super-steps-change`。

### Slots

Steps 不使用 Slot；标题、描述与图标都来自 `items`，因此组件不依赖任何图标库。

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `steps` | 外层 `ol` |
| `step` | 单个步骤 `li` |
| `indicator` | 序号或图标节点 |
| `icon` | 自定义图标容器 |
| `title` | 步骤标题 |
| `description` | 步骤描述 |
| `connector` | 步骤之间的连接线 |

### CSS Custom Properties

```css
super-steps {
  --super-steps-gap: var(--super-spacing-md);
  --super-steps-indicator-size: 30px;
  --super-steps-title-color: var(--super-text-color-primary);
  --super-steps-description-color: var(--super-text-color-secondary);
  --super-steps-wait-color: var(--super-text-color-secondary);
  --super-steps-process-color: #245cbe;
  --super-steps-finish-color: var(--super-color-success);
  --super-steps-error-color: var(--super-color-danger);
  --super-steps-connector-color: var(--super-border-color-light);
  --super-steps-focus-color: var(--super-focus-color);
  --super-steps-indicator-radius: 52% 48% 55% 45% / 47% 53% 45% 55%;
  --super-steps-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-steps` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。组件不校验步骤顺序，也不阻止消费者直接跳到最后一步；需要线性推进时请自行在 `super-steps-change` 中判断。Steps 只呈现当前 `active`，不保存历史状态，也不负责步骤内容的切换。横向步骤不会自动换行，步骤较多时请改用 `direction="vertical"` 或缩短标题。

<script setup>
import { onMounted } from "vue";
const basicItems = [
  { title: "填写信息", description: "确认项目基础资料" },
  { title: "选择方案", description: "比较并选择适合的方案" },
  { title: "完成", description: "生成并发布站点" },
];

const shortItems = [
  { title: "提交申请" },
  { title: "审核中" },
  { title: "已通过" },
];

const verticalItems = [
  { title: "准备材料", description: "整理需求与验收标准" },
  { title: "评审方案", description: "确认交互、视觉与实现边界" },
  { title: "开发实现", description: "补齐测试与文档" },
  { title: "发布上线", description: "执行完整门禁后发布" },
];

onMounted(() => {
  document.querySelectorAll("super-steps").forEach((steps) => {
    if (steps.id === "steps-vertical") {
      steps.items = verticalItems;
      steps.active = 2;
      return;
    }

    if (steps.id === "steps-clickable") {
      steps.items = basicItems;
      steps.active = 1;
      const status = document.querySelector(
        '[data-steps-status="steps-clickable"]',
      );
      steps.addEventListener("super-steps-change", (event) => {
        if (status) {
          status.textContent = `当前步骤：${event.detail.active + 1}`;
        }
      });
      return;
    }

    steps.items =
      steps.id === "steps-process" ||
      steps.id === "steps-error" ||
      steps.id === "steps-finish"
        ? shortItems
        : basicItems;
    steps.active = steps.id === "steps-finish" ? steps.items.length - 1 : 1;
  });
});
</script>

<style>
.steps-note {
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

.steps-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.steps-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  overflow-x: auto;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.steps-status-grid,
.steps-size-grid {
  display: grid;
  gap: 1.6rem;
}

.steps-spec {
  display: grid;
  gap: 0.6rem;
  min-width: 0;
}

.steps-spec > span {
  color: #3f352b;
  font-size: 0.8rem;
  font-weight: 700;
}

.steps-status {
  margin: 0.9rem 0 0;
  color: #6b6360;
  font-size: 0.86rem;
}

html.dark .steps-note,
html.dark .steps-board {
  color: #292524;
}

@media (max-width: 720px) {
  .steps-board {
    padding: 1rem;
  }

  .steps-note {
    grid-template-columns: auto 1fr;
  }

  .steps-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
