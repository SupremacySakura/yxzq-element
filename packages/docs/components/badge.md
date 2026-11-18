# Badge 徽标

把简短的状态、数量或提示角标附在消费者内容右上角。

## 注册

```ts
import "yxzq-element/badge";
```

也可以显式注册：

```ts
import { defineSuperBadge } from "yxzq-element/badge";

defineSuperBadge();
```

重复注册是安全的；SSR 环境中没有 `customElements` 时不会抛错。

## 数值与文本

数字超过 `max` 时显示 `max+`；非纯数字文本原样显示，不做截断。

<div class="badge-board badge-demo-grid">
  <div class="badge-spec">
    <strong>数字</strong>
    <super-badge value="8"><span class="badge-target">消息</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>上限</strong>
    <super-badge value="120" max="99"><span class="badge-target">通知</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>文本</strong>
    <super-badge value="NEW"><span class="badge-target">版本</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>圆点</strong>
    <super-badge dot><span class="badge-target">在线</span></super-badge>
  </div>
</div>

```html
<super-badge value="8">消息</super-badge>
<super-badge value="120" max="99">通知</super-badge>
<super-badge value="NEW">版本</super-badge>
<super-badge dot>在线</super-badge>
```

## 状态色

<div class="badge-board badge-demo-grid">
  <div class="badge-spec">
    <strong>主要</strong>
    <super-badge value="1"><span class="badge-target">收件箱</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>成功</strong>
    <super-badge value="2" status="success"><span class="badge-target">已完成</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>警告</strong>
    <super-badge value="3" status="warning"><span class="badge-target">待处理</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>危险</strong>
    <super-badge value="4" status="danger"><span class="badge-target">失败</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>信息</strong>
    <super-badge value="5" status="info"><span class="badge-target">草稿</span></super-badge>
  </div>
</div>

## 尺寸

<div class="badge-board badge-size-grid">
  <div class="badge-size-row">
    <strong>大</strong>
    <super-badge size="large" value="12"><span class="badge-target">文件</span></super-badge>
    <super-badge size="large" dot><span class="badge-target">新消息</span></super-badge>
  </div>
  <div class="badge-size-row">
    <strong>中</strong>
    <super-badge value="12"><span class="badge-target">文件</span></super-badge>
    <super-badge dot><span class="badge-target">新消息</span></super-badge>
  </div>
  <div class="badge-size-row">
    <strong>小</strong>
    <super-badge size="small" value="12"><span class="badge-target">文件</span></super-badge>
    <super-badge size="small" dot><span class="badge-target">新消息</span></super-badge>
  </div>
</div>

## 隐藏角标

`hidden` 只移除右上角指示器，默认 Slot 内容仍然可见；它不会隐藏整个宿主。组件显式覆盖了宿主在 `hidden` 状态下的原生 `display`，以免角标隐藏时连带隐藏被标记内容。

<div class="badge-board badge-demo-grid">
  <div class="badge-spec">
    <strong>可见</strong>
    <super-badge value="9"><span class="badge-target">任务</span></super-badge>
  </div>
  <div class="badge-spec">
    <strong>隐藏角标</strong>
    <super-badge value="9" hidden><span class="badge-target">任务</span></super-badge>
  </div>
</div>

```html
<super-badge value="9" hidden>任务</super-badge>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string \| number` | 空字符串 | 角标内容；属性形式为字符串 |
| `max` | `number` | `99` | 数字上限，超过时显示 `max+` |
| `dot` | `boolean` | `false` | 只显示圆点，忽略 `value` |
| `status` | `primary \| success \| warning \| danger \| info` | `primary` | 状态色 |
| `size` | `large \| medium \| small` | `medium` | 角标尺寸 |
| `hidden` | `boolean` | `false` | 隐藏角标指示器，默认 Slot 内容保持可见 |

### Events

没有自定义事件。徽标是纯展示内容，不派发用户交互事件。

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 被角标标记的内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `container` | 相对定位主容器 |
| `content` | 默认 Slot 内容区域 |
| `badge` | 右上角徽标，隐藏时不渲染 |

### CSS Custom Properties

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| `--super-badge-height` | `20px` | 徽标高度 |
| `--super-badge-min-width` | `20px` | 徽标最小宽度 |
| `--super-badge-dot-size` | `9px` | 圆点直径 |
| `--super-badge-offset` | `4px` | 相对内容右上角的偏移 |
| `--super-badge-padding-inline` | `5px` | 徽标水平内边距 |
| `--super-badge-font-size` | `12px` | 徽标字号 |
| `--super-badge-color` | `#ffffff` | 徽标文字色 |
| `--super-badge-background` | `var(--super-color-primary, #4b87f5)` | 徽标背景色 |
| `--super-badge-border-color` | `#174ea6` | 徽标边框色 |
| `--super-badge-shadow-color` | `rgb(23 78 166 / 24%)` | 手绘阴影色 |
| `--super-badge-radius` | 由 `--super-radius-sm/md/lg` 组合的不对称圆角 | 徽标圆角 |
| `--super-badge-rotation` | `var(--super-sketch-rotation, -0.25deg)` | 手绘倾斜角 |
| `--super-sketch-width` | `2px` | 徽标边框宽度，来自共享令牌 |

## 无障碍

- 有文本的徽标使用 `role="status"`，数值变化可被辅助技术感知。
- 仅表示装饰状态的圆点设置 `aria-hidden="true"`，不重复朗读。
- 徽标本身不是按钮，不提供点击或键盘语义；需要跳转或筛选时，应由消费者包裹链接或按钮。
- 徽标数字应尽量简短，更完整的说明放在默认 Slot 内容的可访问文本中。
- 宿主在 `hidden` 状态下保留原生 `hidden` 语义，部分辅助技术仍可能把整个宿主视为隐藏；如果被标记内容必须在无障碍树中持续可见，应优先通过清空 `value`、移除 `dot` 或条件渲染徽标来控制显示。

## 已知边界

- `max` 只影响可解析为有限数字的值；`"007"` 等保留前导零的字符串按文本原样展示。
- `max <= 0` 时不启用上限替换。
- 角标绝对定位并略微超出内容边界，父级若使用 `overflow: hidden` 需要预留空间。
- `hidden` 在本组件中表示隐藏角标，而不是隐藏整个宿主；需要隐藏宿主请在外层控制布局或 `display`。

<style>
.badge-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.badge-demo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 2rem;
  align-items: center;
}

.badge-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
}

.badge-spec > strong {
  font-size: 0.8rem;
}

.badge-target {
  display: inline-grid;
  place-items: center;
  box-sizing: border-box;
  min-inline-size: 72px;
  min-block-size: 48px;
  padding: 0.5rem 0.85rem;
  color: #292524;
  font-size: 0.85rem;
  font-weight: 700;
  background: #f7f4ec;
  border: 1.5px dashed #b6ada6;
  border-radius: 8px 11px 7px 10px;
}

.badge-size-grid {
  display: grid;
  gap: 1.2rem;
}

.badge-size-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  align-items: center;
}

.badge-size-row > strong {
  inline-size: 1.5rem;
  color: #3f352b;
}

html.dark .badge-board {
  color: #292524;
}
</style>
