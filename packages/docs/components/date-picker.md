# DatePicker 日期选择器

`super-date-picker` 是一款手绘风日期选择器。它覆盖单日、日期范围、月份和年份四种模式，支持今天、清空、快捷日期、`min` / `max` 边界与自定义禁用日期，范围模式在双月面板中联动预览。

<div class="picker-note">
  <span aria-hidden="true">✎</span>
  <strong>取值提示</strong>
  <span>值始终是 ISO 字符串：单日 <code>YYYY-MM-DD</code>、月份 <code>YYYY-MM</code>、年份 <code>YYYY</code>；范围值是二元数组，只能用 JS property 传入。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-date-picker`。只注册日期选择器或需要显式控制注册时机时，分别使用：

```ts
import "yxzq-element/date-picker";

// SSR 或自定义注册时机
import { defineSuperDatePicker } from "yxzq-element/define";
defineSuperDatePicker();
```

## 选择模式

`mode` 决定面板形态：单日网格、双月范围、年度月份格和年代年份格。

<div class="picker-board picker-mode-grid">
  <label class="picker-spec">
    <span>单日</span>
    <super-date-picker value="2026-07-24" aria-label="选择日期"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>日期范围</span>
    <super-date-picker mode="range" aria-label="选择日期范围"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>月份</span>
    <super-date-picker mode="month" value="2026-07" aria-label="选择月份"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>年份</span>
    <super-date-picker mode="year" value="2026" aria-label="选择年份"></super-date-picker>
  </label>
</div>

```html
<super-date-picker value="2026-07-24" aria-label="选择日期"></super-date-picker>
<super-date-picker mode="range" aria-label="选择日期范围"></super-date-picker>
<super-date-picker mode="month" value="2026-07" aria-label="选择月份"></super-date-picker>
<super-date-picker mode="year" value="2026" aria-label="选择年份"></super-date-picker>
```

范围初始值是数组，需要以 property 赋值：

```ts
const picker = document.querySelector("super-date-picker");
picker.mode = "range";
picker.value = ["2026-07-08", "2026-07-20"];
await picker.updateComplete;
```

## 尺寸与校验状态

<div class="picker-board picker-size-grid">
  <strong>大</strong>
  <super-date-picker size="large" aria-label="大号日期选择器"></super-date-picker>
  <strong>中</strong>
  <super-date-picker size="medium" aria-label="中号日期选择器"></super-date-picker>
  <strong>小</strong>
  <super-date-picker size="small" aria-label="小号日期选择器"></super-date-picker>
</div>

<div class="picker-board picker-validation-grid">
  <label class="picker-spec"><span>成功</span><super-date-picker validation="success" value="2026-07-24" helper-text="日期可用" aria-label="成功状态"></super-date-picker></label>
  <label class="picker-spec"><span>警告</span><super-date-picker validation="warning" value="2026-07-24" helper-text="临近截止" aria-label="警告状态"></super-date-picker></label>
  <label class="picker-spec"><span>错误</span><super-date-picker validation="error" helper-text="请选择有效日期" aria-label="错误状态"></super-date-picker></label>
  <label class="picker-spec"><span>信息</span><super-date-picker validation="info" helper-text="支持键盘操作" aria-label="信息状态"></super-date-picker></label>
</div>

## 日期范围联动

范围模式并排展示连续两个月。第一次点击确定起点，移动指针即可预览区间；第二次点击确定终点，早于起点的点击会自动交换为有序区间。已有完整区间时，再次点击会重新开始选择。窄于 700px 的视口只显示当前月份，可通过导航按钮切换月份，避免双月网格被压缩。

<div class="picker-board picker-range-grid">
  <label class="picker-spec">
    <span>联动选择</span>
    <super-date-picker mode="range" clearable aria-label="联动日期范围"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>自定义占位</span>
    <super-date-picker mode="range" start-placeholder="出发日" end-placeholder="返程日" aria-label="出行日期"></super-date-picker>
  </label>
</div>

## 今天、清空与快捷日期

单日模式面板底部提供 `今天` 按钮；`clearable` 会在触发器和面板底部提供清空入口。`shortcuts` 是 property，元素值为数组或返回数组的函数，点击立即生效。

<div class="picker-board picker-shortcut-grid">
  <label class="picker-spec">
    <span>快捷日期</span>
    <super-date-picker id="demo-shortcut-picker" mode="range" clearable aria-label="带快捷日期的范围"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>今天与清空</span>
    <super-date-picker clearable aria-label="带今天按钮的日期"></super-date-picker>
  </label>
</div>

```ts
const picker = document.querySelector("super-date-picker");
picker.mode = "range";
picker.shortcuts = [
  {
    label: "本周",
    value: () => {
      const today = new Date();
      const start = new Date(today);
      start.setDate(today.getDate() - ((today.getDay() + 6) % 7));
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return [dayKey(start), dayKey(end)];
    },
  },
];
```

## 可选范围与禁用日期

`min` / `max` 按当前模式的粒度界定可选区间（单日传 `YYYY-MM-DD`，月份传 `YYYY-MM`，年份传 `YYYY`），越界单元格会被禁用。`disabledDate` 是函数 property，只对单日和范围模式生效。

<div class="picker-board picker-limit-grid">
  <label class="picker-spec">
    <span>限定 2026-07-10 至 2026-07-31</span>
    <super-date-picker value="2026-07-15" min="2026-07-10" max="2026-07-31" aria-label="限定范围的日期"></super-date-picker>
  </label>
  <label class="picker-spec">
    <span>禁用周末</span>
    <super-date-picker id="demo-disabled-picker" value="2026-07-24" aria-label="禁用周末的日期"></super-date-picker>
  </label>
</div>

```ts
picker.disabledDate = (date) => date.getDay() === 0 || date.getDay() === 6;
```

## 值格式与约束

- 单日值为 `YYYY-MM-DD`，月份值为 `YYYY-MM`，年份值为 `YYYY`；非法字符串会被清空。
- 范围值始终是有序的 `string[]`，通过 JS property 读写；HTML `value` attribute 只能表示单值模式。
- 年份范围为 `0001`～`9999`；到达边界后继续翻页或键盘导航不会产生非法日期 key。
- 程序性赋值不会触发 `super-date-picker-change`，只有用户点选、快捷项、今天和清空会触发。
- `first-day-of-week` 接受 `0`（周日）到 `6`，默认 `1`（周一），会同步旋转周标题。
- 快捷日期仍会遵守 `min`、`max` 与 `disabledDate`；命中禁用条件的快捷项不会改变值或关闭面板。
- `locale` 使用 `Intl.DateTimeFormat` 本地化星期、月份、年份标题和月份单元格；无效 locale 会回退到 `zh-CN`。

## 无障碍与键盘

触发器是带有 `aria-haspopup="dialog"`、`aria-expanded` 与 `aria-controls` 的原生按钮，面板复用触发器的 `aria-label`（未提供时使用 `placeholder`）作为可访问名称，网格单元格使用 roving tabindex。除外部点击外，选择、快捷项、清空或 Escape 关闭面板后焦点都会返回触发器。无明确可见标签时请提供 `aria-label`；导航按钮与内置动作的中文名称可通过 `prev-month-label`、`next-month-label`、`prev-year-label`、`next-year-label`、`today-label`、`clear-label` 本地化，星期与月年文本通过 `locale` 本地化。

| 按键 | 行为 |
| --- | --- |
| `Enter` / `Space` / `ArrowDown` | 在触发器上打开面板并聚焦当前日期 |
| `ArrowLeft` / `ArrowRight` | 移动一天（月份 / 年份网格移动一格） |
| `ArrowUp` / `ArrowDown` | 移动一周（月份 / 年份网格移动一行） |
| `Enter` / `Space` | 在网格中选择聚焦的单元格 |
| `Escape` | 关闭面板并把焦点还给触发器 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string \| string[]` | `""` | 当前值；`range` 模式必须使用 JS 数组 property |
| `mode` | `date \| range \| month \| year` | `date` | 选择模式 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `disabled` | `boolean` | `false` | 禁止聚焦、打开和选择 |
| `clearable` | `boolean` | `false` | 显示触发器清空按钮和面板清空动作 |
| `open` | `boolean` | `false` | 面板是否展开；程序化写入不会触发 open-change 事件 |
| `name` | `string` | `""` | 写入 change 事件详情，不参与原生表单提交 |
| `placeholder` | `string` | `选择日期` | 单值模式占位内容 |
| `start-placeholder` / `end-placeholder` | `string` | `开始日期` / `结束日期` | 范围模式两侧占位内容 |
| `min` / `max` | `string` | `""` | 可选范围边界，粒度随 `mode` 变化 |
| `first-day-of-week` | `number` | `1` | 每周起始日，`0` 为周日 |
| `locale` | `string` | `zh-CN` | 星期、月份、年份标题与月份单元格使用的 `Intl` locale |
| `helper-text` | `string` | `""` | 组件下方的帮助或错误信息 |
| `aria-label` | `string` | `""` | 触发器的可访问名称 |
| `today-label` | `string` | `今天` | 今天按钮文案 |
| `clear-label` | `string` | `清空` | 清空按钮文案与可访问名称 |
| `prev-month-label` / `next-month-label` | `string` | `上个月` / `下个月` | 月份导航按钮的可访问名称 |
| `prev-year-label` / `next-year-label` | `string` | `上一年` / `下一年` | 年份导航按钮的可访问名称 |
| `disabledDate` | `(date: Date) => boolean` | `undefined` | 自定义禁用日期，仅 property，仅单日 / 范围模式生效 |
| `shortcuts` | `Array<{ label, value }>` | `[]` | 快捷日期，仅 property；`value` 为值或返回值的函数 |

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-date-picker-change` | `{ value, name, mode, originalEvent }` | 用户点选、快捷项、今天或清空后触发 |
| `super-date-picker-clear` | `{ name, originalEvent }` | 用户点击清空时触发，随后还会触发 change |
| `super-date-picker-open-change` | `{ open, reason, originalEvent }` | 面板开合时触发；`reason` 为 `trigger \| select \| outside \| escape \| shortcut \| today \| clear` |

### Methods

| 名称 | 说明 |
| --- | --- |
| `focus(options?)` | 聚焦内部触发按钮 |
| `blur()` | 移除内部触发按钮焦点 |

### Slots

| 名称 | 说明 |
| --- | --- |
| `prefix` | 触发器左侧标签、文字或图标 |
| `indicator` | 替换默认日历指示图标 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `control` / `trigger` / `label` | 手绘边框容器、触发按钮与文本 |
| `prefix` / `indicator` / `clear` | 前缀、指示图标与触发器清空按钮 |
| `popup` / `panel` / `nav` / `nav-button` / `title` | 浮层、面板、导航条、导航按钮与标题 |
| `weekdays` / `grid` / `cell` | 周标题行、网格与单元格 |
| `shortcuts` / `shortcut` | 快捷日期栏与单个快捷项 |
| `footer` / `today-button` / `clear-button` | 底部操作区、今天与清空按钮 |
| `helper` | 帮助或错误文本 |

### CSS Custom Properties

```css
super-date-picker {
  --super-date-picker-width: 250px;
  --super-date-picker-height: 38px;
  --super-date-picker-padding-inline: 12px;
  --super-date-picker-gap: 8px;
  --super-date-picker-font-size: 15px;
  --super-date-picker-background: #fffef9;
  --super-date-picker-color: #292524;
  --super-date-picker-placeholder-color: #64748b;
  --super-date-picker-border-color: #34445f;
  --super-date-picker-hover-color: #3f9b68;
  --super-date-picker-focus-color: #356df3;
  --super-date-picker-shadow-color: #a8b3bf;
  --super-date-picker-validation-color: var(--super-date-picker-border-color);
  --super-date-picker-panel-background: #fffef9;
  --super-date-picker-cell-hover-background: #eef5ff;
  --super-date-picker-cell-selected-background: #dfeaff;
  --super-date-picker-cell-selected-color: #174ea6;
  --super-date-picker-cell-range-background: #edf4ff;
  --super-date-picker-range-panel-width: 640px;
  --super-date-picker-z-index: 30;
  --super-date-picker-rotation: -0.16deg;
}
```

## 表单限制

`super-date-picker` 当前不是 form-associated Custom Element。`name` 只写入事件详情，组件不会自动进入 `FormData`，也不支持原生表单 reset 或外部 constraint validation。需要提交时，请监听 `super-date-picker-change`，把值同步到应用状态或隐藏表单字段。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const dayKey = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  const shortcutPicker = document.getElementById("demo-shortcut-picker");
  if (shortcutPicker) {
    shortcutPicker.shortcuts = [
      {
        label: "本周",
        value: () => {
          const today = new Date();
          const start = new Date(today);
          start.setDate(today.getDate() - ((today.getDay() + 6) % 7));
          const end = new Date(start);
          end.setDate(start.getDate() + 6);
          return [dayKey(start), dayKey(end)];
        },
      },
      {
        label: "今天起三天",
        value: () => {
          const start = new Date();
          const end = new Date();
          end.setDate(start.getDate() + 2);
          return [dayKey(start), dayKey(end)];
        },
      },
    ];
  }

  const disabledPicker = document.getElementById("demo-disabled-picker");
  if (disabledPicker) {
    disabledPicker.disabledDate = (date) =>
      date.getDay() === 0 || date.getDay() === 6;
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

.picker-mode-grid,
.picker-validation-grid,
.picker-range-grid,
.picker-shortcut-grid,
.picker-limit-grid {
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

.picker-spec super-date-picker,
.picker-size-grid super-date-picker {
  --super-date-picker-width: 100%;
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
  .picker-mode-grid,
  .picker-validation-grid,
  .picker-range-grid,
  .picker-shortcut-grid,
  .picker-limit-grid {
    grid-template-columns: 1fr;
  }
}
</style>
