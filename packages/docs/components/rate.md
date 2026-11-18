# Rate 评分

一套轻松的手绘风评分控件，支持整星与半星、键盘调整、清除和自定义图标。

<div class="rate-note">
  <span aria-hidden="true">★</span>
  <strong>取值提示</strong>
  <span><code>value</code> 是受控属性：用户点击或按键只会派发 <code>super-rate-change</code>，由消费者决定是否写回。开启 <code>allow-half</code> 后值为 0.5 的倍数。</span>
</div>

## 注册

```ts
import "yxzq-element/rate";

// SSR 或自定义注册时机
import { defineSuperRate } from "yxzq-element/define";
defineSuperRate();
```

## 基础用法

<div class="rate-board rate-basic-grid">
  <label class="rate-spec"><span>基础评分</span><super-rate value="3" aria-label="满意度"></super-rate></label>
  <label class="rate-spec"><span>半星评分</span><super-rate value="3.5" allow-half aria-label="半星评分"></super-rate></label>
  <label class="rate-spec"><span>只读评分</span><super-rate value="4" readonly aria-label="只读评分"></super-rate></label>
  <label class="rate-spec"><span>禁用评分</span><super-rate value="2" disabled aria-label="禁用评分"></super-rate></label>
</div>

```html
<super-rate value="3" aria-label="满意度"></super-rate>
<super-rate value="3.5" allow-half aria-label="半星评分"></super-rate>
<super-rate value="4" readonly aria-label="只读评分"></super-rate>
<super-rate value="2" disabled aria-label="禁用评分"></super-rate>
```

```ts
const rate = document.querySelector("super-rate");
rate.addEventListener("super-rate-change", (event) => {
  rate.value = event.detail.value;
});
```

## 自定义图标

`icon` 具名 Slot 接收任意消费者提供的符号、SVG 或图标组件。未提供时使用字符 `★`。

<div class="rate-board rate-icon-grid">
  <label class="rate-spec">
    <span>字符图标</span>
    <super-rate value="4" aria-label="爱心评分"><span slot="icon" aria-hidden="true">♥</span></super-rate>
  </label>
  <label class="rate-spec">
    <span>花朵图标</span>
    <super-rate value="2.5" allow-half aria-label="花朵评分"><span slot="icon" aria-hidden="true">✿</span></super-rate>
  </label>
  <label class="rate-spec">
    <span>菱形图标</span>
    <super-rate value="3" aria-label="菱形评分"><span slot="icon" aria-hidden="true">◆</span></super-rate>
  </label>
</div>

```html
<super-rate value="4" aria-label="爱心评分">
  <heart-icon slot="icon"></heart-icon>
</super-rate>
```

## 数量与清除

`max` 控制星数；`clearable` 允许再次点击当前分值，或按 `Delete` / `Backspace` 清除为 0。

<div class="rate-board rate-count-grid">
  <label class="rate-spec"><span>十分制</span><super-rate value="7" max="10" aria-label="十分制评分"></super-rate></label>
  <label class="rate-spec"><span>可清除</span><super-rate value="3" clearable aria-label="可清除评分"></super-rate></label>
  <label class="rate-spec"><span>半星可清除</span><super-rate value="2.5" allow-half clearable aria-label="半星可清除评分"></super-rate></label>
</div>

## 尺寸

<div class="rate-board rate-size-board">
  <div class="rate-size-row"><strong>大</strong><super-rate size="large" value="3" aria-label="大号评分"></super-rate></div>
  <div class="rate-size-row"><strong>中</strong><super-rate value="3" aria-label="中号评分"></super-rate></div>
  <div class="rate-size-row"><strong>小</strong><super-rate size="small" value="3" aria-label="小号评分"></super-rate></div>
</div>

## 校验状态

<div class="rate-board rate-validation-grid">
  <label class="rate-spec"><span>成功</span><super-rate validation="success" value="5" aria-label="成功状态"></super-rate></label>
  <label class="rate-spec"><span>警告</span><super-rate validation="warning" value="3" aria-label="警告状态"></super-rate></label>
  <label class="rate-spec"><span>错误</span><super-rate validation="error" value="1" aria-label="错误状态"></super-rate></label>
  <label class="rate-spec"><span>信息</span><super-rate validation="info" value="4" aria-label="信息状态"></super-rate></label>
</div>

## 键盘与无障碍

评分控件本身使用 `role="slider"`，并通过 `aria-valuemin`、`aria-valuemax` 与 `aria-valuenow` 表达当前值。它只有一个 Tab 停靠点，方向键直接调整分值。

| 按键 | 行为 |
| --- | --- |
| `ArrowRight` / `ArrowUp` | 增加一档（半星模式为 0.5） |
| `ArrowLeft` / `ArrowDown` | 减少一档 |
| `Home` | 设为 0 |
| `End` | 设为 `max` |
| `0`–`9` | 直接设为对应分值，并夹取到 `max` |
| `Delete` / `Backspace` | `clearable` 时清除为 0 |

`readonly` 保留焦点与 ARIA 信息但拒绝修改；`disabled` 移除 Tab 停靠点并标记 `aria-disabled="true"`。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `number` | `0` | 受控评分值 |
| `max` | `number` | `5` | 图标数量上限 |
| `allow-half` | `boolean` | `false` | 允许 0.5 档 |
| `readonly` | `boolean` | `false` | 只读但可聚焦 |
| `disabled` | `boolean` | `false` | 禁用交互并移出 Tab 序列 |
| `size` | `large \| medium \| small` | `medium` | 尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验状态 |
| `clearable` | `boolean` | `false` | 支持再次点击或按键清除 |
| `aria-label` | `string` | `评分` | 可访问名称 |
| `clear-label` | `string` | `清除评分` | 清除操作的辅助说明 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-rate-change` | `{ value: number }` | 用户点击或键盘调整时派发，`bubbles` 与 `composed` 均为 `true` |

程序化修改 `value` 不会派发用户事件。

### Slots

| 名称 | 说明 |
| --- | --- |
| `icon` | 自定义评分符号；可同时用于空心与实心层 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `root` | `role="slider"` 外层容器 |
| `star` | 单个图标容器 |
| `icon` | 图标层，包含底层与选中覆盖层 |

### CSS Custom Properties

```css
super-rate {
  --super-rate-size: 27px;
  --super-rate-gap: 5px;
  --super-rate-color: var(--super-border-color-light);
  --super-rate-active-color: #f0b429;
  --super-rate-border-color: var(--super-border-color);
  --super-rate-focus-color: var(--super-focus-color);
  --super-rate-shadow-color: var(--super-sketch-shadow);
  --super-rate-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-rate` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或外部约束验证。半星视觉通过双层图标裁剪实现；自定义图标应保持单色，以获得一致的空心与半星效果。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll("super-rate").forEach((rate) => {
    rate.addEventListener("super-rate-change", (event) => {
      rate.value = event.detail.value;
    });
  });
});
</script>

<style>
.rate-note {
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

.rate-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.rate-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.rate-basic-grid,
.rate-icon-grid,
.rate-count-grid,
.rate-validation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 1.35rem 2rem;
}

.rate-spec {
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

.rate-spec > span:first-child {
  font-size: 0.82rem;
  font-weight: 700;
}

.rate-size-board {
  display: grid;
  gap: 1.15rem;
}

.rate-size-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.rate-size-row > strong {
  width: 1.5rem;
}

html.dark .rate-note,
html.dark .rate-board {
  color: #292524;
}

@media (max-width: 720px) {
  .rate-board {
    padding: 1rem;
  }

  .rate-note {
    grid-template-columns: auto 1fr;
  }

  .rate-note > span:last-child {
    grid-column: 1 / -1;
  }

  .rate-basic-grid,
  .rate-icon-grid,
  .rate-count-grid,
  .rate-validation-grid {
    grid-template-columns: 1fr;
  }
}
</style>
