# Progress 进度条

用手绘线条表达任务完成度。Progress 支持水平线与环形两种形态，既可用于确定进度，也可用于未知时长的等待反馈。

<div class="progress-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>确定进度时传入 <code>value</code> 与 <code>max</code>；无法预估剩余时间时使用 <code>indeterminate</code>，不要用随机跳动的数字伪造进度。</span>
</div>

## 基础用法

默认显示百分比文案，文案由 `value / max` 计算得出，并同步到 `aria-valuetext`。

<div class="progress-board">
  <super-progress value="24"></super-progress>
  <super-progress value="58" status="success"></super-progress>
  <super-progress value="82" status="warning"></super-progress>
  <super-progress value="100" status="danger"></super-progress>
</div>

```html
<super-progress value="24"></super-progress>
<super-progress value="58" status="success"></super-progress>
```

## 状态

`status` 提供四种语义色。默认状态使用主题主色，其余状态与库内其他组件共用成功、警告和危险色。

<div class="progress-board progress-status-grid">
  <div class="progress-spec">
    <span>默认</span>
    <super-progress value="40"></super-progress>
  </div>
  <div class="progress-spec">
    <span>成功</span>
    <super-progress value="40" status="success"></super-progress>
  </div>
  <div class="progress-spec">
    <span>警告</span>
    <super-progress value="40" status="warning"></super-progress>
  </div>
  <div class="progress-spec">
    <span>危险</span>
    <super-progress value="40" status="danger"></super-progress>
  </div>
</div>

```html
<super-progress value="40" status="success"></super-progress>
```

## 尺寸

<div class="progress-board progress-size-board">
  <div class="progress-size-row">
    <strong>大</strong>
    <super-progress size="large" value="62"></super-progress>
  </div>
  <div class="progress-size-row">
    <strong>中</strong>
    <super-progress value="62"></super-progress>
  </div>
  <div class="progress-size-row">
    <strong>小</strong>
    <super-progress size="small" value="62"></super-progress>
  </div>
</div>

## 环形

`variant="circle"` 使用环形轨道展示进度，百分比文案居中显示。环形尺寸由 `size` 控制，也可以通过 `--super-progress-circle-size` 覆盖。

<div class="progress-board progress-circle-board">
  <super-progress variant="circle" value="18"></super-progress>
  <super-progress variant="circle" value="46" status="success"></super-progress>
  <super-progress variant="circle" value="72" status="warning"></super-progress>
  <super-progress variant="circle" value="92" status="danger"></super-progress>
</div>

```html
<super-progress variant="circle" value="46" status="success"></super-progress>
```

## 条纹与不确定状态

`striped` 在进度条上叠加流动斜纹。`indeterminate` 表示进度未知，此时组件不输出 `aria-valuenow` 与 `aria-valuetext`，只保留 `progressbar` 角色和取值范围。

<div class="progress-board">
  <super-progress value="35" striped></super-progress>
  <super-progress value="68" striped status="success"></super-progress>
  <super-progress indeterminate></super-progress>
  <super-progress indeterminate striped status="warning"></super-progress>
</div>

```html
<super-progress value="35" striped></super-progress>
<super-progress indeterminate></super-progress>
```

## 自定义文案

默认 Slot 会替换内置百分比文案，适合展示“已上传 4 / 10”这类业务信息。`format` 是函数属性，接收当前值与最大值，返回值同时用于可见文案和 `aria-valuetext`。

<div class="progress-board">
  <super-progress value="4" max="10">已上传 4 / 10</super-progress>
  <super-progress class="progress-format-demo" value="3" max="8"></super-progress>
</div>

```html
<super-progress value="4" max="10">已上传 4 / 10</super-progress>
```

```ts
const progress = document.querySelector("super-progress");
progress.format = (value, max) => `${value} / ${max} 项`;
```

`format` 是 JavaScript 属性，无法通过 HTML attribute 设置。`show-text` 是布尔 attribute，省略即为关闭；把 `showText` 属性设为 `false` 可以完全隐藏文案，仅保留视觉进度。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const formatted = document.querySelector(".progress-format-demo");
  if (formatted) {
    formatted.format = (value, max) => `${value} / ${max} 项`;
  }
});
</script>

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `number` | `0` | 当前进度，超出 `0`–`max` 时按边界截断 |
| `max` | `number` | `100` | 进度上限；小于等于 `0` 时按 `0%` 处理 |
| `variant` | `line \| circle` | `line` | 水平线或环形 |
| `status` | `default \| success \| warning \| danger` | `default` | 语义色 |
| `size` | `large \| medium \| small` | `medium` | 尺寸 |
| `show-text` | `boolean` | `true` | 是否显示文案 |
| `format` | `(value: number, max: number) => string` | — | 函数属性，自定义可见文案与 `aria-valuetext` |
| `indeterminate` | `boolean` | `false` | 未知进度；不输出 `aria-valuenow` |
| `striped` | `boolean` | `false` | 叠加流动斜纹 |
| `aria-label` | `string` | 空字符串 | 进度条的可访问名称，会转发到内部 `progressbar` |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 覆盖内置百分比文案 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `progress` | 承载 `role="progressbar"` 的容器 |
| `track` | 线形轨道 |
| `bar` | 线形进度条 |
| `circle` | 环形 SVG |
| `circle-track` | 环形轨道 |
| `circle-bar` | 环形进度描边 |
| `text` | 文案容器 |

### CSS Custom Properties

```css
super-progress {
  --super-progress-height: 10px;
  --super-progress-circle-size: 88px;
  --super-progress-color: var(--super-color-primary, #4b87f5);
  --super-progress-border-color: var(--super-color-primary-dark-2, #3272e8);
  --super-progress-track-color: var(--super-background-color-soft, #f7f4ec);
  --super-progress-track-border-color: var(--super-border-color-light, #b6ada6);
  --super-progress-text-color: var(--super-text-color-regular, #4a4441);
  --super-progress-gap: var(--super-spacing-sm, 8px);
  --super-progress-font-size: var(--super-font-size-sm, 13px);
  --super-progress-rotation: -0.25deg;
}
```

## 无障碍

组件在内部容器上输出 `role="progressbar"`、`aria-valuemin="0"`、`aria-valuemax` 和 `aria-valuenow`，并通过 `aria-valuetext` 提供与可见文案一致的读数。`indeterminate` 时不输出 `aria-valuenow` 与 `aria-valuetext`，让辅助技术把它当作未知进度的忙碌指示。环形 SVG 是装饰性的，始终带有 `aria-hidden="true"`，避免重复朗读。

进度条不会主动获得焦点，也不提供键盘交互。文案变化不会触发 Live Region 播报；若业务需要朗读完成状态，请在应用层提供独立的状态消息。建议为多个进度条提供 `aria-label`，说明各自对应的任务。

## 已知边界

`value` 与 `max` 会按边界截断后再渲染，因此外部传入负数或超过上限的值不会产生溢出，也不会回写宿主属性。`format` 必须是 JavaScript 属性，SSR 或纯 HTML 场景只能使用默认百分比或默认 Slot。线形进度条的宽度来自宿主，请用布局容器控制长度；环形进度条为固定正方形，可通过 `--super-progress-circle-size` 调整。Progress 不参与表单，也不会派发用户事件。

<style>
.progress-note {
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

.progress-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.progress-board {
  display: grid;
  gap: 1.35rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.progress-status-grid {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.progress-spec {
  display: grid;
  gap: 0.65rem;
}

.progress-spec > span {
  font-size: 0.8rem;
  font-weight: 700;
}

.progress-size-board {
  gap: 1.1rem;
}

.progress-size-row {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 1rem;
  align-items: center;
}

.progress-size-row > strong {
  color: #3f352b;
}

.progress-circle-board {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

@media (max-width: 720px) {
  .progress-note {
    grid-template-columns: auto 1fr;
  }

  .progress-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
