# Table 表格

手绘风数据表格，用于按列展示结构化数据。`super-table` 提供基础行列渲染、自定义单元格、空态/加载态、排序和行选择。

<div class="table-note">
  <span aria-hidden="true">▦</span>
  <strong>范围提示</strong>
  <span>本组件按 ADR-0006 锁定为“基础集”。固定列、展开行、虚拟滚动、树形数据、合计行、单元格合并和列拖拽都不在范围内，请勿依赖未列出的能力。</span>
</div>

## 注册

组件入口提供 `super-table` 标签、`defineSuperTable()` 与 `SuperTable` 类：

```ts
import "yxzq-element/table";

// SSR 或自定义注册时机
import { defineSuperTable } from "yxzq-element/table";
defineSuperTable();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

`columns` 描述列，`rows` 是数据行，二者都是 JavaScript 属性，无法通过 HTML attribute 表达。每个列必须有稳定的 `key`，组件按 `key` 从行对象中取值。

<div class="table-board">
  <super-table id="table-basic" aria-label="成员列表"></super-table>
</div>

```html
<super-table aria-label="成员列表"></super-table>
```

```js
const table = document.querySelector("super-table");
table.columns = [
  { key: "name", title: "姓名" },
  { key: "role", title: "角色" },
  { key: "score", title: "分数", align: "right" },
];
table.rows = [
  { id: "a", name: "阿青", role: "画师", score: 92 },
  { id: "b", name: "小满", role: "编辑", score: 85 },
];
```

行身份由 `row-key` 决定，默认读取 `"id"`。缺少该字段时组件会退回行索引；需要稳定选择结果时请始终提供唯一的行 key。

## 列宽与对齐

`width` 写入原生 `col`，接受任意 CSS 长度；`align` 控制表头与单元格的水平对齐，可选 `left`、`center`、`right`。

<div class="table-board">
  <super-table id="table-width" aria-label="带列宽与对齐的表格"></super-table>
</div>

```js
table.columns = [
  { key: "name", title: "姓名", width: "38%" },
  { key: "role", title: "角色", width: "120px", align: "center" },
  { key: "score", title: "分数", width: "96px", align: "right" },
];
```

## 自定义单元格

单元格优先查找消费者提供的 `slot="cell-<key>"`，否则使用列的 `formatter(value, row, rowIndex)`，最后回退到原始值。Slot 内容来自 Light DOM，可以放置任意组件、链接或按钮。

<div class="table-board">
  <super-table id="table-slot" aria-label="带自定义单元格的表格">
    <span slot="cell-status" class="table-status">● 已发布</span>
  </super-table>
</div>

```html
<super-table>
  <span slot="cell-status">● 已发布</span>
</super-table>
```

原生 slot 只会把节点分配到树序第一个匹配的单元格，所以上面的示例只让第一行“状态”列显示自定义内容，其余行继续走 `formatter` 或原始值。

```js
table.columns = [
  { key: "title", title: "标题" },
  { key: "status", title: "状态" },
  {
    key: "updated",
    title: "更新时间",
    formatter: (value) => new Date(String(value)).toLocaleDateString("zh-CN"),
  },
];
```

因此 `cell-<key>` 适合“单行强调”等轻量场景；需要逐行不同内容时，请使用 `formatter(value, row, rowIndex)`。

## 排序

给列设置 `sortable` 后，表头会渲染一个原生按钮。点击按 `asc → desc → none` 循环，并派发 `super-table-sort`。

<div class="table-board">
  <super-table id="table-sort" aria-label="可排序的表格"></super-table>
</div>

```js
table.columns = [
  { key: "name", title: "姓名", sortable: true },
  { key: "score", title: "分数", sortable: true, align: "right" },
];

table.addEventListener("super-table-sort", (event) => {
  const { key, direction } = event.detail;
  table.sortKey = key;
  table.sortDirection = direction === "none" ? "" : direction;
  table.rows = sortRows(key, direction);
});
```

组件只维护 `sortKey` / `sortDirection` 状态并派发意图，不会重排行数据。清空排序时这两个属性会移除对应 attribute。`aria-sort` 会同步为 `ascending`、`descending` 或 `none`。

## 行选择

`selectable` 在表头增加全选 checkbox，并为每行增加行选择 checkbox。`selectedKeys` 是受控的 `string[]`；全选时 checkbox 显示选中，部分选中时显示半选。

<div class="table-board">
  <super-table id="table-select" aria-label="可选择行的表格"></super-table>
</div>

```html
<super-table selectable></super-table>
```

```js
table.selectable = true;
table.selectedKeys = ["a"];

table.addEventListener("super-table-select", (event) => {
  const { selectedKeys, row, selected } = event.detail;
  table.selectedKeys = selectedKeys;
  console.log(selected ? "选中" : "取消", row);
});
```

全选事件中的 `row` 为 `null`；行选择事件会带上对应的行对象。已有但不在当前数据中的 key 会保留，避免翻页或局部刷新时丢失选择。

## 尺寸与外观

`size` 同时调整字号、单元格内边距和选择列宽度。`striped` 为偶数行增加底色，`bordered` 增加单元格分隔线；两者可以叠加。

<div class="table-board table-variant-board">
  <div class="table-variant-row">
    <strong>大</strong>
    <super-table id="table-large" size="large" aria-label="大尺寸表格"></super-table>
  </div>
  <div class="table-variant-row">
    <strong>中</strong>
    <super-table id="table-medium" aria-label="中尺寸表格"></super-table>
  </div>
  <div class="table-variant-row">
    <strong>小</strong>
    <super-table id="table-small" size="small" aria-label="小尺寸表格"></super-table>
  </div>
  <div class="table-variant-row">
    <strong>条纹</strong>
    <super-table id="table-striped" striped aria-label="条纹表格"></super-table>
  </div>
  <div class="table-variant-row">
    <strong>边框</strong>
    <super-table id="table-bordered" bordered aria-label="带边框的表格"></super-table>
  </div>
</div>

## 空态

`rows` 为空时渲染一行占满所有列的空态，文案默认“暂无数据”，可通过 `empty-text` 覆盖。空态行使用 `role="row"`，文案位于单元格内，可被辅助技术读取。

<div class="table-board">
  <super-table id="table-empty" empty-text="还没有成员，先邀请一位吧" aria-label="空表格"></super-table>
</div>

```html
<super-table empty-text="还没有成员，先邀请一位吧"></super-table>
```

## 加载态

`loading` 会设置 `aria-busy="true"`，用内置手绘骨架行替换数据行，并禁用排序按钮与选择 checkbox。骨架行数量跟随当前 `rows` 数量，最多 5 行。

<div class="table-board">
  <super-table id="table-loading" loading aria-label="加载中的表格"></super-table>
</div>

```html
<super-table loading></super-table>
```

加载文案通过 `loading-text` 覆盖，默认“数据加载中”，会以 `role="status"` 播报。骨架动画遵循 `prefers-reduced-motion`。

## 隐藏表头与粘性表头

`show-header="false"` 移除 `thead`，适合表头已经由外部控件承担的场景。`sticky-header` 只把表头单元格设为 `position: sticky`，不涉及固定列。

<div class="table-board table-scroll-board">
  <super-table id="table-sticky" sticky-header aria-label="粘性表头表格"></super-table>
</div>

```html
<super-table sticky-header></super-table>
```

粘性表头需要外层滚动容器有确定高度，可通过 `--super-table-max-height` 设置：

```css
super-table {
  --super-table-max-height: 320px;
}
```

## 无障碍

- 使用原生 `table`、`thead`、`tbody`、`tr`、`th`、`td`；列表头带 `scope="col"`。
- 可排序列的 `th` 带 `aria-sort`，值为 `ascending`、`descending` 或 `none`。
- 加载时 `table` 带 `aria-busy="true"`，并通过 `role="status"` 播报加载文案。
- 空态行带 `role="row"`，文案在单元格内，不使用纯装饰元素替代文本。
- 选择控件是原生 checkbox，带 `aria-label`；全选与半选通过原生 `checked` / `indeterminate` 表达。
- 排序表头内是原生 `button`，可用 `Tab` 聚焦并用 `Enter` / `Space` 触发；禁用时不可聚焦。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `columns` | `{ key: string; title: string; width?: string; align?: "left" \| "center" \| "right"; sortable?: boolean; formatter?: (value, row, rowIndex) => unknown }[]` | `[]` | 列定义，仅 JavaScript 属性 |
| `rows` | `Record<string, unknown>[]` | `[]` | 数据行，仅 JavaScript 属性 |
| `row-key` | `string` | `id` | 行唯一标识字段；缺失时退回行索引 |
| `selectable` | `boolean` | `false` | 显示全选与行选择 checkbox |
| `selectedKeys` | `string[]` | `[]` | 已选行 key，仅 JavaScript 属性；受控 |
| `sort-key` | `string` | 空字符串 | 当前排序列 key；清空时移除 attribute |
| `sort-direction` | `asc \| desc` | 空字符串 | 当前排序方向；清空时移除 attribute |
| `loading` | `boolean` | `false` | 显示骨架行、`aria-busy` 并禁用交互 |
| `empty-text` | `string` | `暂无数据` | 空态文案 |
| `size` | `large \| medium \| small` | `medium` | 字号、内边距与选择列宽度 |
| `striped` | `boolean` | `false` | 偶数行显示条纹底色 |
| `bordered` | `boolean` | `false` | 显示单元格纵向分隔线 |
| `show-header` | `boolean` | `true` | 是否渲染表头 |
| `sticky-header` | `boolean` | `false` | 表头单元格使用 `position: sticky` |
| `select-all-label` | `string` | `全选` | 全选 checkbox 的可访问名称 |
| `select-row-label` | `string` | `选择此行` | 行选择 checkbox 的可访问名称 |
| `loading-text` | `string` | `数据加载中` | 加载状态的播报文案 |
| `aria-label` | `string` | `数据表格` | 表格的可访问名称 |

### Events

所有自定义事件均 `bubbles: true`、`composed: true`；程序化修改属性不会派发事件。

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-table-sort` | `{ key: string; direction: "asc" \| "desc" \| "none" }` | 点击可排序表头后触发，三态循环 |
| `super-table-select` | `{ selectedKeys: string[]; row: Record<string, unknown> \| null; selected: boolean }` | 全选或行选择后触发；全选时 `row` 为 `null` |

### Slots

| 名称 | 说明 |
| --- | --- |
| `cell-<key>` | 覆盖对应列的单元格内容；同一列的所有行按 DOM 顺序分配 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `table` | 原生 `table` |
| `header` | `thead` |
| `header-cell` | 表头单元格 `th` |
| `sort-button` | 可排序表头内部按钮 |
| `body` | `tbody`；加载时额外带 `loading` Part |
| `row` | 数据行、空态行与骨架行 |
| `cell` | 数据单元格；空态单元格额外带 `empty` Part |
| `empty` | 空态单元格 |
| `loading` | 加载中的 `tbody` |

### CSS Custom Properties

```css
super-table {
  --super-table-font-size: var(--super-font-size-base);
  --super-table-color: var(--super-text-color-primary);
  --super-table-muted-color: var(--super-text-color-secondary);
  --super-table-background: var(--super-background-color);
  --super-table-header-background: var(--super-background-color-soft);
  --super-table-striped-background: #faf7ef;
  --super-table-hover-background: #f0f5ff;
  --super-table-border-color: var(--super-border-color-light);
  --super-table-outer-border-color: var(--super-border-color);
  --super-table-selection-color: var(--super-color-primary);
  --super-table-sort-active-color: var(--super-color-primary-dark-2);
  --super-table-focus-color: var(--super-focus-color);
  --super-table-cell-padding-block: 10px;
  --super-table-cell-padding-inline: 14px;
  --super-table-selection-width: 48px;
  --super-table-max-height: none;
  --super-table-radius: 9px 12px 6px 9px / 6px 9px 10px 8px;
  --super-table-rotation: var(--super-sketch-rotation);
}
```

## 范围之外

以下能力按 ADR-0006 明确不在 `super-table` 的公开契约内，当前实现也不提供：

- 固定列（左右冻结）
- 展开行 / 明细行
- 虚拟滚动与大数据窗口化
- 树形数据与层级展开
- 合计行、汇总行
- 单元格合并（`rowspan` / `colspan` 自动合并）
- 列拖拽、列显隐与列顺序调整
- 内置分页、筛选、列宽拖拽与导出

需要分页时，请在表格外组合 `super-pagination`；需要空态插画或复杂骨架时，请自行在消费者侧组合展示组件。若确实需要上述能力，请先补充新的 ADR 并确认破坏性变更成本。

## 已知边界

- 组件不排序、不筛选、不分页，只报告用户意图；数据加工由消费者完成。
- `columns`、`rows`、`selectedKeys` 都是 JavaScript 属性，无法通过 HTML attribute 设置。
- 单元格 Slot 按列命名，原生分配只会填充第一个匹配单元格；需要逐行差异时使用 `formatter`。
- 组件不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。
- `sticky-header` 只固定表头，不固定列；横向滚动时表头会随内容移动。

<script setup>
import { onMounted } from "vue";

const basicColumns = [
  { key: "name", title: "姓名" },
  { key: "role", title: "角色" },
  { key: "score", title: "分数", align: "right" },
];

const basicRows = [
  { id: "a", name: "阿青", role: "画师", score: 92 },
  { id: "b", name: "小满", role: "编辑", score: 85 },
  { id: "c", name: "老周", role: "校对", score: 78 },
];

const widthColumns = [
  { key: "name", title: "姓名", width: "38%" },
  { key: "role", title: "角色", width: "120px", align: "center" },
  { key: "score", title: "分数", width: "96px", align: "right" },
];

const slotColumns = [
  { key: "title", title: "标题" },
  { key: "status", title: "状态" },
  {
    key: "updated",
    title: "更新时间",
    formatter: (value) => new Date(String(value)).toLocaleDateString("zh-CN"),
  },
];

const slotRows = [
  { id: "a", title: "手绘组件规范", status: "已发布", updated: "2026-11-02" },
  { id: "b", title: "表格范围说明", status: "草稿", updated: "2026-11-05" },
  { id: "c", title: "无障碍清单", status: "已发布", updated: "2026-11-09" },
];

const sortColumns = [
  { key: "name", title: "姓名", sortable: true },
  { key: "score", title: "分数", sortable: true, align: "right" },
];

const sortableRows = [
  { id: "a", name: "阿青", score: 92 },
  { id: "b", name: "小满", score: 85 },
  { id: "c", name: "老周", score: 78 },
];

const stickyRows = Array.from({ length: 9 }, (_, index) => ({
  id: `row-${index + 1}`,
  name: `成员 ${index + 1}`,
  role: ["画师", "编辑", "校对"][index % 3],
  score: 70 + index * 3,
}));

onMounted(() => {
  const query = (id) => document.querySelector(id);
  const setData = (id, columns, rows) => {
    const table = query(id);
    if (table) {
      table.columns = columns;
      table.rows = rows;
    }
  };

  setData("#table-basic", basicColumns, basicRows);
  setData("#table-width", widthColumns, basicRows);
  setData("#table-slot", slotColumns, slotRows);
  setData("#table-sort", sortColumns, sortableRows);
  setData("#table-select", basicColumns, basicRows);
  setData("#table-large", basicColumns, basicRows);
  setData("#table-medium", basicColumns, basicRows);
  setData("#table-small", basicColumns, basicRows);
  setData("#table-striped", basicColumns, basicRows);
  setData("#table-bordered", basicColumns, basicRows);
  setData("#table-empty", basicColumns, []);
  setData("#table-loading", basicColumns, basicRows);
  setData("#table-sticky", basicColumns, stickyRows);

  const selectTable = query("#table-select");
  if (selectTable) {
    selectTable.selectable = true;
    selectTable.selectedKeys = ["b"];
    selectTable.addEventListener("super-table-select", (event) => {
      selectTable.selectedKeys = event.detail.selectedKeys;
    });
  }

  const sortTable = query("#table-sort");
  if (sortTable) {
    sortTable.addEventListener("super-table-sort", (event) => {
      const { key, direction } = event.detail;
      sortTable.sortKey = key;
      sortTable.sortDirection = direction === "none" ? "" : direction;
      if (direction === "none") {
        sortTable.rows = sortableRows;
        return;
      }
      const factor = direction === "asc" ? 1 : -1;
      sortTable.rows = [...sortableRows].sort((left, right) => {
        if (left[key] === right[key]) {
          return 0;
        }
        return (left[key] > right[key] ? 1 : -1) * factor;
      });
    });
  }
});
</script>

<style>
.table-note {
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

.table-note > span:first-child {
  color: #c56a1a;
  font-size: 1.35rem;
}

.table-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.table-variant-board {
  display: grid;
  gap: 1.4rem;
}

.table-variant-row {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.table-variant-row > strong {
  padding-top: 0.6rem;
  color: #3f352b;
}

.table-scroll-board super-table {
  --super-table-max-height: 220px;
}

.table-status {
  color: #23804a;
  font-weight: 700;
}

html.dark .table-note,
html.dark .table-board {
  color: #292524;
}

@media (max-width: 720px) {
  .table-board {
    padding: 1rem;
  }

  .table-note {
    grid-template-columns: auto 1fr;
  }

  .table-note > span:last-child {
    grid-column: 1 / -1;
  }

  .table-variant-row {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}
</style>
