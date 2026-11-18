# Divider 分割线

用于分隔内容区域或视觉分组。Divider 默认是一条水平分隔线，也可以作为带文案的分节标题，或作为垂直分隔符嵌入工具栏。

<div class="divider-doc-note">
  <span aria-hidden="true">—</span>
  <strong>使用提示</strong>
  <span>分割线表达的是视觉结构。若内容本身需要标题或语义分组，请使用原生标题、<code>section</code> 或 <code>fieldset</code>。</span>
</div>

## 基础用法

默认 Slot 可选，留空时只显示一条线；有文案时，文案会嵌入水平分割线中。

<div class="divider-doc-board">
  <p>第一段内容</p>
  <super-divider></super-divider>
  <p>第二段内容</p>
  <super-divider>更多设置</super-divider>
  <p>第三段内容</p>
</div>

```html
<super-divider></super-divider>
<super-divider>更多设置</super-divider>
```

## 文案位置

`content-position` 控制文案位于左侧、居中或右侧。没有默认 Slot 内容时，位置属性不会产生额外空间。

<div class="divider-doc-board">
  <super-divider content-position="left">左对齐</super-divider>
  <super-divider content-position="center">居中</super-divider>
  <super-divider content-position="right">右对齐</super-divider>
</div>

```html
<super-divider content-position="left">左对齐</super-divider>
<super-divider content-position="center">居中</super-divider>
<super-divider content-position="right">右对齐</super-divider>
```

## 类型

`solid` 是实线，`dashed` 是分段虚线，`hand-drawn` 使用轻微倾斜与不均匀的线段端点强调手绘感。颜色可通过 `color` 或 `--super-divider-color` 覆盖。

<div class="divider-doc-board">
  <super-divider variant="solid">Solid</super-divider>
  <super-divider variant="dashed">Dashed</super-divider>
  <super-divider variant="hand-drawn">Hand-drawn</super-divider>
  <super-divider color="#4b87f5">自定义颜色</super-divider>
</div>

```html
<super-divider variant="solid">Solid</super-divider>
<super-divider variant="dashed">Dashed</super-divider>
<super-divider variant="hand-drawn">Hand-drawn</super-divider>
<super-divider color="#4b87f5">自定义颜色</super-divider>
```

## 垂直分割

垂直模式适合工具栏或行内操作分组。组件会忽略默认 Slot 文案，并通过 `aria-orientation="vertical"` 声明方向；高度由 `--super-divider-vertical-height` 或外部布局决定。

<div class="divider-doc-board divider-doc-vertical-board">
  <span>编辑</span>
  <super-divider direction="vertical"></super-divider>
  <span>复制</span>
  <super-divider direction="vertical"></super-divider>
  <span>删除</span>
</div>

```html
<div class="toolbar">
  <span>编辑</span>
  <super-divider direction="vertical"></super-divider>
  <span>复制</span>
</div>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `direction` | `horizontal \| vertical` | `horizontal` | 分割线方向 |
| `content-position` | `left \| center \| right` | `center` | 水平模式下文案的位置 |
| `variant` | `solid \| dashed \| hand-drawn` | `solid` | 线条视觉类型 |
| `color` | `string` | 空字符串 | 覆盖线条颜色；为空时使用 `--super-divider-color` |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 可选文案；垂直模式下不渲染 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `divider` | 分隔线布局容器 |
| `line` | 两段线条；水平与垂直模式共用 |
| `content` | 水平模式下的文案容器 |

### CSS Custom Properties

```css
super-divider {
  --super-divider-color: var(--super-border-color-lighter, #ddd5cd);
  --super-divider-thickness: var(--super-sketch-width, 2px);
  --super-divider-gap: var(--super-spacing-md, 12px);
  --super-divider-font-size: var(--super-font-size-sm, 13px);
  --super-divider-content-color: var(--super-text-color-secondary, #6b6360);
  --super-divider-content-background: var(--super-background-color, #fffef9);
  --super-divider-content-padding: 0 var(--super-spacing-sm, 8px);
  --super-divider-vertical-height: 1.25em;
  --super-divider-rotation: -0.45deg;
}
```

## 无障碍

分隔线始终带有 `role="separator"`，并根据 `direction` 设置 `aria-orientation`。水平模式下的默认 Slot 文案会作为分隔线附近的可读文本；垂直模式会忽略文案，避免把不可见的装饰性内容暴露给辅助技术。分隔线不是标题，也不建立新的地标区域。若分割线用于表达章节关系，应在相邻内容中使用真实标题。

## 已知边界

垂直模式不会自动从父容器继承高度，建议在工具栏中设置固定高度，或覆盖 `--super-divider-vertical-height`。`color` 接受 CSS 颜色字符串，复杂渐变请直接覆盖 `--super-divider-color` 或在 `::part(line)` 上设置 `background`。`content-position` 只影响水平模式；垂直模式不渲染文案。Divider 不参与表单，也不会派发用户事件。

<style>
.divider-doc-note {
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

.divider-doc-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.divider-doc-board {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.divider-doc-vertical-board {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 64px;
}

@media (max-width: 720px) {
  .divider-doc-note {
    grid-template-columns: auto 1fr;
  }

  .divider-doc-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
