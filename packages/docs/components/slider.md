# Slider 滑动条

一套手绘风滑动条，支持单值与双端范围、横向与纵向布局，并保留原生 `input[type="range"]` 的键盘语义。

<div class="slider-note">
  <span aria-hidden="true">≈</span>
  <strong>取值提示</strong>
  <span><code>value</code> 同时支持受控与非受控用法：用户拖动会先更新组件内部值并派发 <code>super-slider-change</code>；受控消费者可在事件中写回自己的值，组件始终以最后写入的 <code>value</code> 为准。范围值必须通过 JS property 传入。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会注册全部组件。只注册滑动条或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/slider";

// SSR 或自定义注册时机
import { defineSuperSlider } from "yxzq-element/define";
defineSuperSlider();
```

## 基础用法

<div class="slider-board slider-basic-grid">
  <label class="slider-spec">
    <span>基础滑动条</span>
    <super-slider value="32" aria-label="音量"></super-slider>
  </label>
  <label class="slider-spec">
    <span>带提示值</span>
    <super-slider value="68" show-tooltip aria-label="进度"></super-slider>
  </label>
  <label class="slider-spec">
    <span>自定义步长</span>
    <super-slider value="40" min="0" max="100" step="10" aria-label="亮度"></super-slider>
  </label>
  <label class="slider-spec">
    <span>禁用状态</span>
    <super-slider value="55" disabled aria-label="禁用的滑动条"></super-slider>
  </label>
</div>

```html
<super-slider value="32" aria-label="音量"></super-slider>
<super-slider value="68" show-tooltip aria-label="进度"></super-slider>
<super-slider value="40" min="0" max="100" step="10" aria-label="亮度"></super-slider>
<super-slider value="55" disabled aria-label="禁用的滑动条"></super-slider>
```

```ts
const slider = document.querySelector("super-slider");
slider.addEventListener("super-slider-change", (event) => {
  slider.value = event.detail.value;
});
```

## 范围选择

`range` 开启后，`value` 是 `[number, number]` 数组。组件会保证起点不大于终点，并把两端都夹取到 `min` / `max` 之间。

<div class="slider-board slider-range-grid">
  <label class="slider-spec wide">
    <span>价格区间</span>
    <super-slider id="slider-range-demo" range min="0" max="100" step="5" show-tooltip aria-label="价格区间"></super-slider>
  </label>
  <label class="slider-spec wide">
    <span>本地化标签</span>
    <super-slider id="slider-localized-range" range min="0" max="10" aria-label="时间范围" start-label="开始时间" end-label="结束时间"></super-slider>
  </label>
</div>

```html
<super-slider range min="0" max="100" step="5" show-tooltip aria-label="价格区间"></super-slider>
<super-slider range start-label="开始时间" end-label="结束时间" aria-label="时间范围"></super-slider>
```

```ts
const slider = document.querySelector("super-slider");
slider.value = [20, 80];
slider.addEventListener("super-slider-change", (event) => {
  console.log(event.detail.value); // [number, number]
});
```

## 尺寸

<div class="slider-board slider-size-board">
  <div class="slider-size-row">
    <strong>大</strong>
    <super-slider size="large" value="45" aria-label="大号滑动条"></super-slider>
  </div>
  <div class="slider-size-row">
    <strong>中</strong>
    <super-slider size="medium" value="45" aria-label="中号滑动条"></super-slider>
  </div>
  <div class="slider-size-row">
    <strong>小</strong>
    <super-slider size="small" value="45" aria-label="小号滑动条"></super-slider>
  </div>
</div>

```html
<super-slider size="large" value="45"></super-slider>
<super-slider size="medium" value="45"></super-slider>
<super-slider size="small" value="45"></super-slider>
```

## 校验状态

<div class="slider-board slider-validation-grid">
  <label class="slider-spec"><span>成功</span><super-slider validation="success" value="70" aria-label="成功状态"></super-slider></label>
  <label class="slider-spec"><span>警告</span><super-slider validation="warning" value="55" aria-label="警告状态"></super-slider></label>
  <label class="slider-spec"><span>错误</span><super-slider validation="error" value="30" aria-label="错误状态"></super-slider></label>
  <label class="slider-spec"><span>信息</span><super-slider validation="info" value="80" aria-label="信息状态"></super-slider></label>
</div>

## 纵向布局

<div class="slider-board slider-vertical-board">
  <label class="slider-vertical-spec">
    <span>音量</span>
    <super-slider vertical value="65" show-tooltip aria-label="音量"></super-slider>
  </label>
  <label class="slider-vertical-spec">
    <span>温度</span>
    <super-slider vertical min="0" max="40" step="2" value="24" aria-label="温度"></super-slider>
  </label>
  <label class="slider-vertical-spec">
    <span>范围</span>
    <super-slider id="slider-vertical-range" vertical range min="0" max="100" aria-label="纵向范围"></super-slider>
  </label>
</div>

```html
<super-slider vertical value="65" show-tooltip aria-label="音量"></super-slider>
<super-slider vertical range aria-label="纵向范围"></super-slider>
```

## 键盘与无障碍

单值模式内部是一个原生 range 输入；范围模式有两个原生 range 输入，分别由 `start-label` 和 `end-label` 命名。焦点进入后会保留原生行为：

| 按键 | 行为 |
| --- | --- |
| `ArrowRight` / `ArrowUp` | 增加一个 `step` |
| `ArrowLeft` / `ArrowDown` | 减少一个 `step` |
| `PageUp` | 增加十个 `step` |
| `PageDown` | 减少十个 `step` |
| `Home` | 单值到 `min`；范围起点到 `min`，终点到起点 |
| `End` | 单值到 `max`；范围起点到终点，终点到 `max` |

组件为每个原生输入同步 `aria-valuemin`、`aria-valuemax`、`aria-valuenow` 和 `aria-orientation`。范围模式外层使用 `role="group"`，由 `aria-label` 命名。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `number \| [number, number]` | `0` | 受控或非受控值；单值模式反射到 `value` attribute，范围模式只能使用 JS property 数组 |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `range` | `boolean` | `false` | 启用双端范围 |
| `disabled` | `boolean` | `false` | 禁用交互与键盘操作 |
| `size` | `large \| medium \| small` | `medium` | 尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验状态 |
| `show-tooltip` | `boolean` | `false` | 显示当前值提示 |
| `vertical` | `boolean` | `false` | 纵向布局 |
| `aria-label` | `string` | `滑动条` | 单值模式的可访问名称；范围模式为分组名称 |
| `start-label` | `string` | `起始值` | 范围起点的可访问名称 |
| `end-label` | `string` | `结束值` | 范围终点的可访问名称 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-slider-change` | `{ value: number \| [number, number] }` | 用户完成一次值调整时派发，`bubbles` 与 `composed` 均为 `true` |

程序化修改 `value` 不会派发用户事件。非受控用法下，用户交互会直接更新 `value`；受控用法下，在 `super-slider-change` 监听器中写回旧值即可拒绝本次修改，组件会立即以写回的属性值为准。

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `root` | 外层容器 |
| `track` | 轨道与点击区域 |
| `fill` | 已选区间 |
| `input` | 原生 range 输入 |
| `tooltip` | 数值提示容器 |
| `tooltip-start` | 范围起点提示 |
| `tooltip-end` | 范围终点提示 |

### CSS Custom Properties

```css
super-slider {
  --super-slider-width: 240px;
  --super-slider-track-size: 9px;
  --super-slider-thumb-size: 21px;
  --super-slider-color: var(--super-color-primary);
  --super-slider-track-color: var(--super-border-color-lighter);
  --super-slider-thumb-color: var(--super-background-color);
  --super-slider-border-color: var(--super-border-color);
  --super-slider-focus-color: var(--super-focus-color);
  --super-slider-shadow-color: var(--super-sketch-shadow);
  --super-slider-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-slider` 不是 form-associated Custom Element。`value` 不参与 `FormData`、原生表单重置或外部约束验证；需要提交时请从事件或组件属性读取值。范围模式的两个原生输入共享轨道视觉，拖动时只更新被操作的一端。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const range = document.querySelector("#slider-range-demo");
  if (range) range.value = [25, 72];

  const localized = document.querySelector("#slider-localized-range");
  if (localized) localized.value = [2, 8];

  const vertical = document.querySelector("#slider-vertical-range");
  if (vertical) vertical.value = [30, 70];

  document.querySelectorAll("super-slider").forEach((slider) => {
    slider.addEventListener("super-slider-change", (event) => {
      slider.value = event.detail.value;
    });
  });
});
</script>

<style>
.slider-note {
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

.slider-note > span:first-child {
  color: #4b87f5;
  font-size: 1.35rem;
}

.slider-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.slider-basic-grid,
.slider-validation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 1.25rem 2rem;
}

.slider-spec {
  display: grid;
  gap: 0.8rem;
  align-content: start;
  min-width: 0;
}

.slider-spec > span:first-child {
  font-size: 0.82rem;
  font-weight: 700;
}

.slider-spec super-slider,
.slider-spec.wide super-slider {
  --super-slider-width: 100%;
}

.slider-range-grid {
  display: grid;
  gap: 1.5rem;
}

.slider-size-board {
  display: grid;
  gap: 1.2rem;
}

.slider-size-row {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
}

.slider-size-row super-slider {
  --super-slider-width: 100%;
}

.slider-vertical-board {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: flex-end;
  min-height: 300px;
}

.slider-vertical-spec {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.slider-vertical-spec > span {
  font-size: 0.82rem;
  font-weight: 700;
}

html.dark .slider-note,
html.dark .slider-board {
  color: #292524;
}

@media (max-width: 720px) {
  .slider-board {
    padding: 1rem;
  }

  .slider-note {
    grid-template-columns: auto 1fr;
  }

  .slider-note > span:last-child {
    grid-column: 1 / -1;
  }

  .slider-basic-grid,
  .slider-validation-grid {
    grid-template-columns: 1fr;
  }
}
</style>
