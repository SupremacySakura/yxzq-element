# Button 按钮

一套轻松、友好的手绘风按钮，适用于操作、提交和轻量导航场景。

<div class="button-note">
  <span aria-hidden="true">★</span>
  <strong>选择提示</strong>
  <span>先确定操作语义，再组合类型、尺寸、形状和状态，保持同一场景的一致性。</span>
</div>

## 常用操作

分段操作不需要新增组件，使用 `super-button` 和公开的 `button` Part 即可组合。

<div class="action-board">
  <div class="action-group" role="group" aria-label="常用操作">
    <super-button variant="text" class="action-save"><span slot="prefix" aria-hidden="true">▣</span>保存</super-button>
    <super-button variant="text"><span slot="prefix" aria-hidden="true">⊗</span>取消</super-button>
    <super-button variant="text" class="action-delete"><span slot="prefix" aria-hidden="true">♲</span>删除</super-button>
    <super-button variant="text" class="action-download"><span slot="prefix" aria-hidden="true">⇩</span>下载</super-button>
    <super-button variant="text"><span slot="prefix" aria-hidden="true">•••</span>更多</super-button>
  </div>
</div>

## 类型

<div class="button-board variant-grid">
  <div class="spec-cell"><span>主要按钮</span><super-button variant="primary">按钮</super-button></div>
  <div class="spec-cell"><span>次要按钮</span><super-button variant="secondary">按钮</super-button></div>
  <div class="spec-cell"><span>成功按钮</span><super-button variant="success">按钮</super-button></div>
  <div class="spec-cell"><span>警告按钮</span><super-button variant="warning">按钮</super-button></div>
  <div class="spec-cell"><span>危险按钮</span><super-button variant="danger">按钮</super-button></div>
  <div class="spec-cell"><span>描边按钮</span><super-button variant="outline">按钮</super-button></div>
  <div class="spec-cell"><span>幽灵按钮</span><super-button variant="ghost">按钮</super-button></div>
  <div class="spec-cell"><span>文字按钮</span><super-button variant="text">按钮</super-button></div>
  <div class="spec-cell"><span>图标按钮</span><super-button variant="outline" shape="square" aria-label="收藏">♡</super-button></div>
  <div class="spec-cell"><span>胶囊按钮</span><super-button variant="success" shape="pill">按钮</super-button></div>
  <div class="spec-cell"><span>圆角方形</span><super-button variant="outline" shape="square" aria-label="星标">☆</super-button></div>
  <div class="spec-cell"><span>加载按钮</span><super-button variant="outline" shape="square" loading aria-label="加载中"></super-button></div>
</div>

```html
<super-button variant="primary">按钮</super-button>
<super-button variant="success" shape="pill">按钮</super-button>
<super-button variant="outline" shape="square" aria-label="收藏">♡</super-button>
```

## 尺寸

<div class="button-board size-board">
  <div class="size-row">
    <strong>大</strong>
    <super-button size="large">按钮</super-button>
    <super-button size="large" variant="secondary">按钮</super-button>
    <super-button size="large" variant="success">按钮</super-button>
    <super-button size="large" variant="warning">按钮</super-button>
    <super-button size="large" variant="danger">按钮</super-button>
    <super-button size="large" variant="outline">按钮</super-button>
    <super-button size="large" shape="pill" variant="success">按钮</super-button>
    <super-button size="large" shape="square" variant="outline" aria-label="收藏">♡</super-button>
  </div>
  <div class="size-row">
    <strong>中</strong>
    <super-button>按钮</super-button>
    <super-button variant="secondary">按钮</super-button>
    <super-button variant="success">按钮</super-button>
    <super-button variant="warning">按钮</super-button>
    <super-button variant="danger">按钮</super-button>
    <super-button variant="outline">按钮</super-button>
    <super-button shape="pill" variant="success">按钮</super-button>
    <super-button shape="square" variant="outline" aria-label="收藏">♡</super-button>
  </div>
  <div class="size-row">
    <strong>小</strong>
    <super-button size="small">按钮</super-button>
    <super-button size="small" variant="secondary">按钮</super-button>
    <super-button size="small" variant="success">按钮</super-button>
    <super-button size="small" variant="warning">按钮</super-button>
    <super-button size="small" variant="danger">按钮</super-button>
    <super-button size="small" variant="outline">按钮</super-button>
    <super-button size="small" shape="pill" variant="success">按钮</super-button>
    <super-button size="small" shape="square" variant="outline" aria-label="收藏">♡</super-button>
  </div>
</div>

## 状态

悬停和按下列使用固定演示样式；页面中的其他按钮可以直接交互体验真实状态。

<div class="button-board state-grid">
  <div class="state-column">
    <strong>默认</strong>
    <super-button>按钮</super-button>
    <super-button variant="secondary">按钮</super-button>
    <super-button variant="success">按钮</super-button>
    <super-button variant="danger">按钮</super-button>
    <super-button variant="outline">按钮</super-button>
  </div>
  <div class="state-column">
    <strong>悬停</strong>
    <super-button class="state-hover">按钮</super-button>
    <super-button class="state-hover" variant="secondary">按钮</super-button>
    <super-button class="state-hover" variant="success">按钮</super-button>
    <super-button class="state-hover" variant="danger">按钮</super-button>
    <super-button class="state-hover" variant="outline">按钮</super-button>
  </div>
  <div class="state-column">
    <strong>按下</strong>
    <super-button class="state-active">按钮</super-button>
    <super-button class="state-active" variant="secondary">按钮</super-button>
    <super-button class="state-active" variant="success">按钮</super-button>
    <super-button class="state-active" variant="danger">按钮</super-button>
    <super-button class="state-active" variant="outline">按钮</super-button>
  </div>
  <div class="state-column">
    <strong>禁用</strong>
    <super-button disabled>按钮</super-button>
    <super-button disabled variant="secondary">按钮</super-button>
    <super-button disabled variant="success">按钮</super-button>
    <super-button disabled variant="danger">按钮</super-button>
    <super-button disabled variant="outline">按钮</super-button>
  </div>
</div>

## 图标位置

组件不绑定任何图标库，使用 `prefix` 和 `suffix` Slot 接收 SVG、图标组件或文本符号。

<div class="button-board icon-grid">
  <super-button><span slot="prefix" aria-hidden="true">☆</span>按钮</super-button>
  <super-button variant="success"><span slot="prefix" aria-hidden="true">✓</span>成功</super-button>
  <super-button variant="danger"><span slot="prefix" aria-hidden="true">♲</span>删除</super-button>
  <super-button>按钮<span slot="suffix" aria-hidden="true">→</span></super-button>
  <super-button variant="success" shape="pill">下一步<span slot="suffix" aria-hidden="true">›</span></super-button>
  <super-button variant="outline">更多<span slot="suffix" aria-hidden="true">•••</span></super-button>
</div>

```html
<super-button variant="success">
  <my-check-icon slot="prefix"></my-check-icon>
  成功
</super-button>

<super-button variant="outline">
  更多
  <my-more-icon slot="suffix"></my-more-icon>
</super-button>
```

## 加载状态

`loading` 会禁用交互、添加 `aria-busy="true"` 并显示内置手绘旋转指示器。设置 `loading-text` 可以暂时替换默认内容。

<div class="button-board loading-grid">
  <super-button loading loading-text="加载中...">按钮</super-button>
  <super-button variant="success" shape="pill" loading loading-text="提交中...">提交</super-button>
  <super-button variant="outline" loading loading-text="请稍候...">继续</super-button>
</div>

```html
<super-button loading loading-text="加载中...">提交</super-button>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `primary \| secondary \| success \| warning \| danger \| outline \| ghost \| text` | `primary` | 视觉与语义类型 |
| `size` | `large \| medium \| small` | `medium` | 按钮尺寸 |
| `shape` | `default \| pill \| square` | `default` | 默认、胶囊或等宽方形 |
| `disabled` | `boolean` | `false` | 禁止聚焦后的操作及点击 |
| `loading` | `boolean` | `false` | 显示加载状态并禁止点击 |
| `loading-text` | `string` | 空字符串 | 加载时替换默认内容；为空则保留原内容 |
| `aria-label` | `string` | 空字符串 | 图标按钮的可访问名称，会转发到内部按钮 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 按钮文字或图标按钮的图标 |
| `prefix` | 左侧图标 |
| `suffix` | 右侧图标 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `button` | 内部原生按钮，可用于分段组合等高级布局 |
| `label` | 内容标签 |
| `spinner` | 加载指示器 |

### CSS Custom Properties

所有视觉 token 均可从宿主覆盖，常用项包括：

```css
super-button {
  --super-button-background: #4b87f5;
  --super-button-color: #fff;
  --super-button-border-color: #174ea6;
  --super-button-shadow-color: #174ea6;
  --super-button-focus-color: #56c6b7;
  --super-button-rotation: -0.25deg;
}
```

<style>
.button-note {
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

.button-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.button-board,
.action-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.action-board {
  overflow-x: auto;
}

.action-group {
  display: inline-flex;
  min-width: max-content;
  overflow: hidden;
  border: 2px solid #292524;
  border-radius: 12px 15px 10px 13px / 10px 13px 12px 11px;
  box-shadow: 2px 3px 0 rgb(41 37 36 / 22%);
}

.action-group super-button {
  --super-button-background: #fffef9;
  --super-button-background-hover: #f2f7ff;
  --super-button-background-active: #e3edff;
  --super-button-color: #292524;
  --super-button-rotation: 0deg;
}

.action-group super-button::part(button) {
  border: 0;
  border-right: 1.5px solid #6b7280;
  border-radius: 0;
  box-shadow: none;
}

.action-group super-button:last-child::part(button) {
  border-right: 0;
}

.action-group .action-save {
  --super-button-color: #1d57bf;
}

.action-group .action-delete {
  --super-button-color: #e33b34;
}

.action-group .action-download {
  --super-button-color: #0f8f83;
}

.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(104px, 1fr));
  gap: 1.35rem 0.75rem;
}

.spec-cell {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
  min-width: 0;
}

.spec-cell > span {
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}

.size-board {
  display: grid;
  gap: 1.35rem;
  overflow-x: auto;
}

.size-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: max-content;
}

.size-row > strong {
  width: 1.5rem;
  color: #3f352b;
}

.state-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(110px, 1fr));
  gap: 1rem;
  overflow-x: auto;
}

.state-column {
  display: grid;
  gap: 0.85rem;
  justify-items: center;
  padding-right: 1rem;
  border-right: 1.5px dashed #c4bfb8;
}

.state-column:last-child {
  padding-right: 0;
  border-right: 0;
}

.state-hover::part(button) {
  background: var(--super-button-background-hover);
  box-shadow: 3px 4px 0 -1px var(--super-button-shadow-color);
  transform: translate(-1px, -1px) rotate(0.15deg);
}

.state-active::part(button) {
  background: var(--super-button-background-active);
  box-shadow: inset 0 2px 3px rgb(15 23 42 / 18%);
  transform: translate(2px, 2px) rotate(-0.15deg);
}

.icon-grid,
.loading-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
}

@media (max-width: 720px) {
  .button-board,
  .action-board {
    padding: 1rem;
  }

  .button-note {
    grid-template-columns: auto 1fr;
  }

  .button-note > span:last-child {
    grid-column: 1 / -1;
  }

  .state-grid {
    grid-template-columns: repeat(4, 120px);
  }
}
</style>
