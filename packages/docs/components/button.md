# Button 按钮

`super-button` 是当前架构迁移保留的唯一组件。

<div class="component-preview">
  <super-button class="hand-drawn-button">由你定义的按钮内容</super-button>
</div>

```html
<super-button>由你定义的按钮内容</super-button>
```

## 当前能力

- 使用默认 Slot 接收内容。
- 内部原生按钮暴露为 `part="button"`。
- 保持最小实现，不预设 Element Plus API 或具体产品样式。

## 自定义演示

下面的样式由文档页面提供，不属于组件默认视觉：

```css
super-button::part(button) {
  border: 2px solid currentColor;
  border-radius: 7px 10px 6px 9px;
  box-shadow: 3px 3px 0 currentColor;
}
```

<style>
.hand-drawn-button::part(button) {
  padding: 0.7rem 1.15rem;
  color: #292524;
  background: #fffdf5;
  border: 2px solid currentColor;
  border-radius: 7px 10px 6px 9px;
  box-shadow: 3px 3px 0 currentColor;
  cursor: pointer;
  transform: rotate(-0.4deg);
}

.hand-drawn-button::part(button):active {
  box-shadow: 1px 1px 0 currentColor;
  transform: translate(2px, 2px) rotate(-0.4deg);
}
</style>
