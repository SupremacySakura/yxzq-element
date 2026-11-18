# Space 间距

用 CSS `gap` 为相邻子项提供一致的间距。Space 不生成额外的内容包装层，默认 Slot 中的直接子项就是参与布局的 flex 项目。

<div class="space-doc-note">
  <span aria-hidden="true">↔</span>
  <strong>使用提示</strong>
  <span>Space 只负责间距和排列。页面级布局、响应式网格和复杂对齐仍应使用消费者自己的 CSS。</span>
</div>

## 水平间距

默认方向为水平。`size` 支持 `small`、`medium`、`large`，也接受纯数字字符串作为像素值，例如 `"20"`。

<div class="space-doc-board">
  <super-space>
    <super-button size="small" variant="outline">取消</super-button>
    <super-button size="small">保存</super-button>
    <super-button size="small" variant="ghost">更多</super-button>
  </super-space>
  <super-space size="large">
    <span class="space-doc-chip">大间距</span>
    <span class="space-doc-chip">子项 A</span>
    <span class="space-doc-chip">子项 B</span>
  </super-space>
  <super-space size="20">
    <span class="space-doc-chip">20px</span>
    <span class="space-doc-chip">数字字符串</span>
  </super-space>
</div>

```html
<super-space>
  <super-button size="small" variant="outline">取消</super-button>
  <super-button size="small">保存</super-button>
</super-space>

<super-space size="20">
  <span>20px 间距</span>
  <span>第二项</span>
</super-space>
```

## 垂直排列

`direction="vertical"` 将子项按列排列，并继续使用同一个 `gap` 变量。`align` 控制交叉轴对齐。

<div class="space-doc-board">
  <super-space direction="vertical" align="start">
    <span class="space-doc-chip">第一行</span>
    <span class="space-doc-chip">第二行</span>
    <span class="space-doc-chip">第三行</span>
  </super-space>
</div>

```html
<super-space direction="vertical" align="start">
  <span>第一行</span>
  <span>第二行</span>
</super-space>
```

## 换行与填充

`wrap` 允许子项在空间不足时换行。`fill` 让水平容器占满可用宽度；垂直容器同时占满可用高度。子项自身是否拉伸仍由消费者的布局样式决定。

<div class="space-doc-board">
  <super-space wrap fill>
    <span class="space-doc-chip">可换行</span>
    <span class="space-doc-chip">项目一</span>
    <span class="space-doc-chip">项目二</span>
    <span class="space-doc-chip">项目三</span>
    <span class="space-doc-chip">项目四</span>
  </super-space>
</div>

```html
<super-space wrap fill>
  <span>项目一</span>
  <span>项目二</span>
  <span>项目三</span>
</super-space>
```

## 对齐

`align` 映射到 flex 交叉轴对齐：`start`、`center`、`end` 和 `baseline`。水平排列时影响垂直对齐，垂直排列时影响水平对齐。

<div class="space-doc-board">
  <super-space align="start">
    <span class="space-doc-chip">短</span>
    <span class="space-doc-chip space-doc-tall">较高</span>
    <span class="space-doc-chip">短</span>
  </super-space>
  <super-space align="end">
    <span class="space-doc-chip">短</span>
    <span class="space-doc-chip space-doc-tall">较高</span>
    <span class="space-doc-chip">短</span>
  </super-space>
</div>

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `direction` | `horizontal \| vertical` | `horizontal` | 子项排列方向 |
| `size` | `small \| medium \| large` 或数字字符串 | `medium` | 间距大小；纯数字字符串按像素处理 |
| `wrap` | `boolean` | `false` | 空间不足时是否换行 |
| `align` | `start \| center \| end \| baseline` | `center` | 交叉轴对齐方式 |
| `fill` | `boolean` | `false` | 是否占满可用空间 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 参与间距排列的直接子项 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `space` | 默认 Slot 的插槽本身；不生成额外布局包装层 |

### CSS Custom Properties

```css
super-space {
  --super-space-gap: var(--super-spacing-md, 12px);
  --super-space-align: center;
  --super-space-justify: flex-start;
}
```

`size="small"`、`size="medium"` 和 `size="large"` 会分别把 `--super-space-gap` 映射到 `--super-spacing-sm`、`--super-spacing-md` 和 `--super-spacing-xl`。自定义数字字符串会在宿主元素上设置内联 `--super-space-gap`，其优先级高于普通样式表中的变量声明；需要覆盖时请使用 `!important` 或改用命名尺寸。

## 无障碍

Space 是纯布局容器，不声明交互角色，也不会改变 DOM 阅读顺序。屏幕阅读器和键盘导航仍按子项原始语义工作；请使用语义正确的子项，并在需要分组时使用原生 `fieldset`、`section` 或带标签的 `div`。Space 不接收焦点，也不会拦截子项事件。

## 已知边界

Space 只为默认 Slot 的直接子项设置间距；嵌套包装层内部的元素不会自动获得间距。纯数字字符串按像素解释；`"20px"`、`"1rem"` 等带单位的字符串不会被当作自定义尺寸，而是回退到 `medium`。需要其他单位时请覆盖 `--super-space-gap`。`fill` 只设置容器尺寸，不会自动拉伸子项。组件不提供响应式断点配置，也不替代页面级 Grid/Flex 布局。

<style>
.space-doc-note {
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

.space-doc-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.space-doc-board {
  display: grid;
  gap: 1.25rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.space-doc-chip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0.25rem 0.7rem;
  background: #f2f7ff;
  border: 1.5px solid #6f8fc4;
  border-radius: 8px 11px 7px 10px / 9px 7px 10px 8px;
}

.space-doc-tall {
  min-height: 58px;
}

@media (max-width: 720px) {
  .space-doc-note {
    grid-template-columns: auto 1fr;
  }

  .space-doc-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
