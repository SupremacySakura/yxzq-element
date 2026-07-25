# TimePicker 时间选择器

`super-time-picker` 是一款手绘风时间选择器。它通过滚动列选择时、分、秒，支持时间范围、12 / 24 小时制、步进间隔、常用时间快捷选择和清空操作。

<div class="picker-note">
  <span aria-hidden="true">◷</span>
  <strong>取值提示</strong>
  <span>值始终是 24 小时制字符串 <code>HH:mm</code>（含秒格式时为 <code>HH:mm:ss</code>），与 12 小时制展示互不影响；范围值是二元数组，只能用 JS property 传入。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-time-picker`。只注册时间选择器或需要显式控制注册时机时，分别使用：

```ts
import "yxzq-element/time-picker";

// SSR 或自定义注册时机
import { defineSuperTimePicker } from "yxzq-element/define";
defineSuperTimePicker();
```

## 格式与小时制

`format` 决定面板列与展示文本：`HH:mm` 为时分 24 小时制；加入 `ss` 出现秒列；使用 `hh` / `h` 搭配 `A` / `a` 切换为 12 小时制并出现上午 / 下午列。

<div class="picker-board picker-format-grid">
  <label class="picker-spec">
    <span>时分（HH:mm）</span>
    <super-time-picker value="09:30" aria-label="选择时间"></super-time-picker>
  </label>
  <label class="picker-spec">
    <span>时分秒（HH:mm:ss）</span>
    <super-time-picker format="HH:mm:ss" value="08:05:07" aria-label="选择带秒时间"></super-time-picker>
  </label>
  <label class="picker-spec">
    <span>12 小时制（hh:mm A）</span>
    <super-time-picker format="hh:mm A" value="14:30" aria-label="选择 12 小时制时间"></super-time-picker>
  </label>
  <label class="picker-spec">
    <span>分钟步进 15</span>
    <super-time-picker minute-step="15" value="10:15" aria-label="步进时间"></super-time-picker>
  </label>
</div>

```html
<super-time-picker value="09:30" aria-label="选择时间"></super-time-picker>
<super-time-picker format="HH:mm:ss" value="08:05:07"></super-time-picker>
<super-time-picker format="hh:mm A" value="14:30"></super-time-picker>
<super-time-picker minute-step="15" value="10:15"></super-time-picker>
```

## 时间范围

`range` 并排展示开始与结束两组列。每次点击都会发出 change，未选的一侧为空串；两侧都有值且开始晚于结束时，会自动交换为有序区间。

<div class="picker-board picker-range-grid">
  <label class="picker-spec">
    <span>时间范围</span>
    <super-time-picker id="demo-range-picker" range clearable aria-label="选择时间范围"></super-time-picker>
  </label>
  <label class="picker-spec">
    <span>带快捷选择</span>
    <super-time-picker id="demo-shortcut-picker" clearable aria-label="带快捷选择的时间"></super-time-picker>
  </label>
</div>

```ts
const picker = document.querySelector("super-time-picker");
picker.range = true;
picker.value = ["09:00", "18:00"];
await picker.updateComplete;
```

## 快捷选择与清空

`shortcuts` 是 property，元素值为时间字符串（范围模式为二元组）或返回值的函数，点击立即生效并关闭面板。`clearable` 在有值时会在触发器和面板底部提供清空入口，面板底部的 `确定` 关闭面板。

```ts
picker.shortcuts = [
  { label: "上午九点", value: "09:00" },
  { label: "中午", value: "12:00" },
  { label: "傍晚", value: "18:30" },
];
```

## 尺寸与校验状态

<div class="picker-board picker-size-grid">
  <strong>大</strong>
  <super-time-picker size="large" aria-label="大号时间选择器"></super-time-picker>
  <strong>中</strong>
  <super-time-picker size="medium" aria-label="中号时间选择器"></super-time-picker>
  <strong>小</strong>
  <super-time-picker size="small" aria-label="小号时间选择器"></super-time-picker>
</div>

<div class="picker-board picker-validation-grid">
  <label class="picker-spec"><span>成功</span><super-time-picker validation="success" value="09:30" helper-text="时间可用" aria-label="成功状态"></super-time-picker></label>
  <label class="picker-spec"><span>警告</span><super-time-picker validation="warning" value="09:30" helper-text="接近截止" aria-label="警告状态"></super-time-picker></label>
  <label class="picker-spec"><span>错误</span><super-time-picker validation="error" helper-text="请选择有效时间" aria-label="错误状态"></super-time-picker></label>
  <label class="picker-spec"><span>信息</span><super-time-picker validation="info" helper-text="支持键盘操作" aria-label="信息状态"></super-time-picker></label>
</div>

## 值格式与约束

- 值始终是 24 小时制：`HH:mm`，`format` 含 `ss` 时为 `HH:mm:ss`；非法字符串会被清空。
- `format` 只影响面板列与展示文本，不影响取值；`A` 渲染 `AM` / `PM`，`a` 渲染 `am` / `pm`。
- 范围值是 `string[]`，通过 JS property 读写；HTML `value` attribute 只能表示单值模式。
- 程序性赋值不会触发 `super-time-picker-change`，只有用户点选列、快捷项和清空会触发。

## 无障碍与键盘

触发器是带有 `aria-haspopup="dialog"`、`aria-expanded` 与 `aria-controls` 的原生按钮，面板复用触发器的 `aria-label`（未提供时使用 `placeholder`）作为可访问名称，列内单元格使用 roving tabindex；即使当前值不匹配 step，列中也会保留一个键盘 Tab 落点。除外部点击外，确定、快捷项、清空或 Escape 关闭面板后焦点都会返回触发器。无明确可见标签时请提供 `aria-label`；上午 / 下午、清空、确定与范围标题的中文文案可通过 `am-label`、`pm-label`、`clear-label`、`confirm-label`、`start-label`、`end-label` 本地化。

| 按键 | 行为 |
| --- | --- |
| `Enter` / `Space` / `ArrowDown` | 在触发器上打开面板 |
| `ArrowUp` / `ArrowDown` | 在当前列内循环移动焦点 |
| `ArrowLeft` / `ArrowRight` | 切换到相邻列 |
| `Enter` / `Space` | 选择聚焦的单元格 |
| `Escape` | 关闭面板并把焦点还给触发器 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string \| string[]` | `""` | 当前值（24 小时制）；`range` 时必须使用 JS 数组 property |
| `range` | `boolean` | `false` | 开启时间范围模式 |
| `format` | `string` | `HH:mm` | 展示格式，支持 `HH` `H` `hh` `h` `mm` `ss` `A` `a` |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `disabled` | `boolean` | `false` | 禁止聚焦、打开和选择 |
| `clearable` | `boolean` | `false` | 有值时显示触发器清空按钮和面板清空动作 |
| `open` | `boolean` | `false` | 面板是否展开；程序化写入不会触发 open-change 事件 |
| `name` | `string` | `""` | 写入 change 事件详情，不参与原生表单提交 |
| `placeholder` | `string` | `选择时间` | 单值模式占位内容 |
| `start-placeholder` / `end-placeholder` | `string` | `开始时间` / `结束时间` | 范围模式两侧占位内容 |
| `hour-step` / `minute-step` / `second-step` | `number` | `1` | 时、分、秒列的选项间隔 |
| `helper-text` | `string` | `""` | 组件下方的帮助或错误信息 |
| `aria-label` | `string` | `""` | 触发器的可访问名称 |
| `clear-label` | `string` | `清空` | 清空按钮文案与可访问名称 |
| `confirm-label` | `string` | `确定` | 确定按钮文案 |
| `am-label` / `pm-label` | `string` | `上午` / `下午` | 12 小时制面板周期列文案 |
| `start-label` / `end-label` | `string` | `开始` / `结束` | 范围面板两组列的标题 |
| `shortcuts` | `Array<{ label, value }>` | `[]` | 常用时间快捷选择，仅 property；`value` 为值或返回值的函数 |

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-time-picker-change` | `{ value, name, originalEvent }` | 用户点选列单元格、快捷项或清空后触发 |
| `super-time-picker-clear` | `{ name, originalEvent }` | 用户点击清空时触发，随后还会触发 change |
| `super-time-picker-open-change` | `{ open, reason, originalEvent }` | 面板开合时触发；`reason` 为 `trigger \| confirm \| outside \| escape \| shortcut \| clear` |

### Methods

| 名称 | 说明 |
| --- | --- |
| `focus(options?)` | 聚焦内部触发按钮 |
| `blur()` | 移除内部触发按钮焦点 |

### Slots

| 名称 | 说明 |
| --- | --- |
| `prefix` | 触发器左侧标签、文字或图标 |
| `indicator` | 替换默认时钟指示图标 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `control` / `trigger` / `label` | 手绘边框容器、触发按钮与文本 |
| `prefix` / `indicator` / `clear` | 前缀、指示图标与触发器清空按钮 |
| `popup` / `panel` / `column` / `column-title` / `cell` | 浮层、分组、滚动列、列标题与单元格 |
| `shortcuts` / `shortcut` | 快捷选择栏与单个快捷项 |
| `footer` / `clear-button` / `confirm-button` | 底部操作区、清空与确定按钮 |
| `helper` | 帮助或错误文本 |

### CSS Custom Properties

```css
super-time-picker {
  --super-time-picker-width: 220px;
  --super-time-picker-height: 38px;
  --super-time-picker-padding-inline: 12px;
  --super-time-picker-gap: 8px;
  --super-time-picker-font-size: 15px;
  --super-time-picker-background: #fffef9;
  --super-time-picker-color: #292524;
  --super-time-picker-placeholder-color: #64748b;
  --super-time-picker-border-color: #34445f;
  --super-time-picker-hover-color: #3f9b68;
  --super-time-picker-focus-color: #356df3;
  --super-time-picker-shadow-color: #a8b3bf;
  --super-time-picker-validation-color: var(--super-time-picker-border-color);
  --super-time-picker-panel-background: #fffef9;
  --super-time-picker-cell-hover-background: #eef5ff;
  --super-time-picker-cell-selected-background: #dfeaff;
  --super-time-picker-cell-selected-color: #174ea6;
  --super-time-picker-column-height: 176px;
  --super-time-picker-z-index: 30;
  --super-time-picker-rotation: -0.16deg;
}
```

## 表单限制

`super-time-picker` 当前不是 form-associated Custom Element。`name` 只写入事件详情，组件不会自动进入 `FormData`，也不支持原生表单 reset 或外部 constraint validation。需要提交时，请监听 `super-time-picker-change`，把值同步到应用状态或隐藏表单字段。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const rangePicker = document.getElementById("demo-range-picker");
  if (rangePicker) {
    rangePicker.value = ["09:00", "18:00"];
  }

  const shortcutPicker = document.getElementById("demo-shortcut-picker");
  if (shortcutPicker) {
    shortcutPicker.shortcuts = [
      { label: "上午九点", value: "09:00" },
      { label: "中午", value: "12:00" },
      { label: "傍晚", value: "18:30" },
    ];
  }
});
</script>

<style>
.picker-note {
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

.picker-note > span:first-child {
  color: #3978e9;
  font-size: 1.35rem;
}

.picker-board {
  box-sizing: border-box;
  max-inline-size: 100%;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.picker-format-grid,
.picker-validation-grid,
.picker-range-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 1.4rem 1.5rem;
  align-items: start;
}

.picker-spec {
  display: grid;
  gap: 0.65rem;
  min-width: 0;
  color: #292524;
  font-size: 0.84rem;
  font-weight: 700;
}

.picker-spec super-time-picker,
.picker-size-grid super-time-picker {
  --super-time-picker-width: 100%;
}

.picker-size-grid {
  display: grid;
  grid-template-columns: 55px minmax(210px, 1fr);
  gap: 1rem;
  align-items: center;
}

.picker-validation-grid {
  border-color: #f2b72f;
  box-shadow: 4px 4px 0 #f2b72f;
}

.picker-range-grid {
  border-color: #56c6b7;
  box-shadow: 4px 4px 0 #56c6b7;
}

html.dark .picker-note,
html.dark .picker-board {
  color: #292524;
}

@media (max-width: 800px) {
  .picker-format-grid,
  .picker-validation-grid,
  .picker-range-grid {
    grid-template-columns: 1fr;
  }
}
</style>
