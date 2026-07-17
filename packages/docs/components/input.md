# Input 输入框

一套清晰、亲切的手绘风输入框，适用于表单、搜索、筛选与轻量录入场景。

<div class="input-note">
  <span aria-hidden="true">♥</span>
  <strong>录入提示</strong>
  <span>先选择输入语义，再组合尺寸、状态与附加内容，避免在同一字段上堆叠过多操作。</span>
</div>

## 类型

输入类型尽量沿用浏览器原生语义；文本域通过 `multiline` 开启，图标和标签由 Slot 提供。

<div class="input-board type-grid">
  <label class="input-spec"><span>基础输入框</span><super-input placeholder="请输入内容" aria-label="基础输入"></super-input></label>
  <label class="input-spec"><span>带标签输入框</span><super-input placeholder="请输入内容" aria-label="昵称"><span slot="prefix">昵称</span></super-input></label>
  <label class="input-spec"><span>搜索框</span><super-input type="search" placeholder="搜索关键词" aria-label="搜索"><span slot="suffix" aria-hidden="true">⌕</span></super-input></label>
  <label class="input-spec"><span>密码框</span><super-input type="password" placeholder="请输入密码" revealable aria-label="密码"></super-input></label>
  <label class="input-spec compact"><span>数字输入框</span><super-input type="number" value="0" min="0" step="1" aria-label="数量"></super-input></label>
  <label class="input-spec"><span>文本域</span><super-input multiline rows="3" placeholder="请输入内容，支持多行输入…" aria-label="多行内容"></super-input></label>
  <label class="input-spec"><span>前缀输入框</span><super-input placeholder="请输入内容" aria-label="用户"><span slot="prefix" aria-hidden="true">♙</span></super-input></label>
  <label class="input-spec"><span>后缀输入框</span><super-input placeholder="请输入域名" aria-label="域名"><span slot="suffix">.com</span></super-input></label>
  <label class="input-spec"><span>带清空按钮</span><super-input value="可以清空" clearable aria-label="可清空内容"></super-input></label>
  <label class="input-spec"><span>带操作按钮</span><super-input class="with-action" placeholder="请输入内容" aria-label="消息"><super-button class="input-action" slot="action" variant="outline" size="small">发送</super-button></super-input></label>
</div>

```html
<super-input type="search" placeholder="搜索关键词">
  <search-icon slot="suffix"></search-icon>
</super-input>

<super-input type="password" revealable></super-input>
<super-input multiline rows="3"></super-input>
```

## 尺寸

大、中、小三档尺寸会同步调整输入区、字号和附加元素。外部宽度通过 `--super-input-width` 控制。

<div class="input-board size-matrix">
  <strong>大</strong>
  <super-input size="large" placeholder="请输入内容" aria-label="大号基础输入"></super-input>
  <super-input size="large" type="search" placeholder="搜索关键词" aria-label="大号搜索"><span slot="suffix">⌕</span></super-input>
  <super-input size="large" placeholder="请输入内容" aria-label="大号用户"><span slot="prefix">♙</span></super-input>
  <super-input size="large" multiline rows="2" placeholder="请输入内容…" aria-label="大号文本域"></super-input>
  <super-input size="large" class="with-action" placeholder="请输入内容" aria-label="大号操作输入"><super-button class="input-action" slot="action" variant="outline" size="large">搜索</super-button></super-input>

  <strong>中</strong>
  <super-input placeholder="请输入内容" aria-label="中号基础输入"></super-input>
  <super-input type="search" placeholder="搜索关键词" aria-label="中号搜索"><span slot="suffix">⌕</span></super-input>
  <super-input placeholder="请输入内容" aria-label="中号用户"><span slot="prefix">♙</span></super-input>
  <super-input multiline rows="2" placeholder="请输入内容…" aria-label="中号文本域"></super-input>
  <super-input class="with-action" placeholder="请输入内容" aria-label="中号操作输入"><super-button class="input-action" slot="action" variant="outline">搜索</super-button></super-input>

  <strong>小</strong>
  <super-input size="small" placeholder="请输入内容" aria-label="小号基础输入"></super-input>
  <super-input size="small" type="search" placeholder="搜索关键词" aria-label="小号搜索"><span slot="suffix">⌕</span></super-input>
  <super-input size="small" placeholder="请输入内容" aria-label="小号用户"><span slot="prefix">♙</span></super-input>
  <super-input size="small" multiline rows="2" placeholder="请输入内容…" aria-label="小号文本域"></super-input>
  <super-input size="small" class="with-action" placeholder="请输入内容" aria-label="小号操作输入"><super-button class="input-action" slot="action" variant="outline" size="small">搜索</super-button></super-input>
</div>

## 状态

悬停和聚焦列使用固定演示样式；页面中的普通输入框可以直接交互体验真实状态。

<div class="input-board state-matrix">
  <span></span><strong>默认</strong><strong>悬停</strong><strong>聚焦</strong><strong>禁用</strong><strong>只读</strong>
  <strong>基础输入</strong>
  <super-input placeholder="请输入内容" aria-label="默认输入"></super-input>
  <super-input class="state-hover" placeholder="请输入内容" aria-label="悬停输入"></super-input>
  <super-input class="state-focus" placeholder="请输入内容" aria-label="聚焦输入"></super-input>
  <super-input disabled placeholder="请输入内容" aria-label="禁用输入"></super-input>
  <super-input readonly value="只读内容" aria-label="只读输入"></super-input>

  <strong>搜索框</strong>
  <super-input type="search" placeholder="搜索关键词" aria-label="默认搜索"><span slot="suffix">⌕</span></super-input>
  <super-input class="state-hover" type="search" placeholder="搜索关键词" aria-label="悬停搜索"><span slot="suffix">⌕</span></super-input>
  <super-input class="state-focus" type="search" placeholder="搜索关键词" aria-label="聚焦搜索"><span slot="suffix">⌕</span></super-input>
  <super-input disabled type="search" placeholder="搜索关键词" aria-label="禁用搜索"><span slot="suffix">⌕</span></super-input>
  <super-input readonly type="search" value="只读搜索" aria-label="只读搜索"><span slot="suffix">⌕</span></super-input>

  <strong>密码框</strong>
  <super-input type="password" revealable placeholder="请输入密码" aria-label="默认密码"></super-input>
  <super-input class="state-hover" type="password" revealable placeholder="请输入密码" aria-label="悬停密码"></super-input>
  <super-input class="state-focus" type="password" revealable placeholder="请输入密码" aria-label="聚焦密码"></super-input>
  <super-input disabled type="password" revealable placeholder="请输入密码" aria-label="禁用密码"></super-input>
  <super-input readonly type="password" value="readonly" revealable aria-label="只读密码"></super-input>
</div>

## 校验状态

`validation` 只表达校验结果，提示文字由 `helper-text` 提供；错误状态会自动把内部控件标记为 `aria-invalid="true"`。

<div class="validation-board">
  <label class="input-spec"><span>成功</span><super-input validation="success" value="输入正确" helper-text="✓ 格式正确" aria-label="成功示例"></super-input></label>
  <label class="input-spec"><span>警告</span><super-input validation="warning" value="请确认内容" helper-text="请检查输入信息" aria-label="警告示例"></super-input></label>
  <label class="input-spec"><span>错误</span><super-input validation="error" value="输入有误" helper-text="请输入正确内容" aria-label="错误示例"></super-input></label>
  <label class="input-spec"><span>帮助提示</span><super-input validation="info" placeholder="请输入内容" helper-text="支持中英文、数字" aria-label="提示示例"></super-input></label>
</div>

## 附加元素

附加内容不绑定任何图标库。`prefix`、`suffix` 和 `action` Slot 可以接收文本、SVG、图标组件或 `super-button`。

<div class="input-board attachment-grid">
  <label class="input-spec"><span>左侧图标</span><super-input placeholder="请输入内容" aria-label="用户"><span slot="prefix">♙</span></super-input></label>
  <label class="input-spec"><span>右侧图标</span><super-input type="date" placeholder="选择日期" aria-label="日期"><span slot="suffix">▣</span></super-input></label>
  <label class="input-spec"><span>清空按钮</span><super-input value="输入内容" clearable aria-label="可清空"></super-input></label>
  <label class="input-spec"><span>字数统计</span><super-input placeholder="请输入内容" maxlength="100" show-count aria-label="限长输入"></super-input></label>
  <label class="input-spec"><span>必填标记</span><super-input required placeholder="请输入内容" aria-label="必填内容"></super-input></label>
  <label class="input-spec"><span>单位后缀</span><super-input type="number" placeholder="请输入数值" aria-label="重量"><span slot="suffix">kg</span></super-input></label>
</div>

## 常用组合

<div class="combination-board">
  <label class="input-spec"><span>搜索 + 按钮</span><super-input class="with-action combo-input" type="search" placeholder="搜索关键词" aria-label="搜索关键词"><super-button class="input-action" slot="action" variant="outline">搜索</super-button></super-input></label>
  <label class="input-spec"><span>验证码 + 获取验证码</span><super-input class="with-action combo-input" placeholder="请输入验证码" aria-label="验证码"><super-button class="input-action verify-action" slot="action" variant="outline">获取验证码</super-button></super-input></label>
  <label class="input-spec"><span>金额输入</span><super-input class="combo-input" type="number" placeholder="请输入金额" aria-label="金额"><span slot="prefix">¥</span><span slot="suffix">.00</span></super-input></label>
  <label class="input-spec"><span>日期输入</span><super-input class="combo-input" type="date" aria-label="选择日期"><span slot="prefix">▣</span></super-input></label>
</div>

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string` | 空字符串 | 当前输入值；用户输入时同步到组件属性 |
| `type` | `text \| search \| password \| number \| email \| tel \| url \| date` | `text` | 内部原生输入类型 |
| `size` | `large \| medium \| small` | `medium` | 输入框尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `placeholder` | `string` | 空字符串 | 占位提示 |
| `helper-text` | `string` | 空字符串 | 输入框下方的帮助或错误信息 |
| `disabled` | `boolean` | `false` | 禁止输入和附加操作 |
| `readonly` | `boolean` | `false` | 内容只读，仍可聚焦和选择 |
| `required` | `boolean` | `false` | 转发必填语义并显示必填标记 |
| `clearable` | `boolean` | `false` | 有值时显示清空按钮 |
| `revealable` | `boolean` | `false` | 密码类型显示可见性按钮 |
| `multiline` | `boolean` | `false` | 使用内部 `textarea` |
| `rows` | `number` | `3` | 文本域初始行数 |
| `maxlength` / `minlength` | `number` | 未设置 | 字符长度约束 |
| `show-count` | `boolean` | `false` | 配合 `maxlength` 显示字数统计 |
| `min` / `max` / `step` | `string` | 空字符串 | 数字等原生类型约束 |
| `inputmode` / `autocomplete` | `string` | 空字符串 | 转发原生输入提示 |
| `aria-label` | `string` | 空字符串 | 转发给内部输入控件的可访问名称 |
| `clear-label` | `string` | `清空输入` | 清空按钮的可访问名称，可用于本地化 |
| `decrement-label` / `increment-label` | `string` | `减少数值` / `增加数值` | 数字步进按钮的可访问名称 |
| `password-show-label` / `password-hide-label` | `string` | `显示密码` / `隐藏密码` | 密码可见性按钮在两种状态下的可访问名称 |

`value` 是运行时状态，用户输入后不会反射回 HTML attribute。组件当前没有声明原生表单关联能力，不应把内部字段的 `required` 或 `name` 当作表单提交契约。

内置操作默认提供中文可访问名称。非中文产品应通过对应的 `*-label` 属性覆盖，例如：

```html
<super-input
  type="password"
  revealable
  clearable
  clear-label="Clear value"
  password-show-label="Show password"
  password-hide-label="Hide password"
></super-input>
```

### Events

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-input` | `{ value, originalEvent }` | 每次输入后触发，支持冒泡并穿过 Shadow DOM |
| `super-change` | `{ value, originalEvent }` | 原生 change 时触发 |
| `super-clear` | `{ previousValue }` | 点击清空按钮后触发 |
| `super-password-visibility` | `{ visible }` | 密码可见性变化后触发 |

内部原生 `input` 与 `change` 事件也会按浏览器规则传播；跨框架状态同步优先监听 `super-input`。

### Methods

| 名称 | 说明 |
| --- | --- |
| `focus(options?)` | 聚焦内部输入控件 |
| `blur()` | 移除内部输入焦点 |
| `select()` | 选择内部输入文本 |

### Slots

| 名称 | 说明 |
| --- | --- |
| `prefix` | 左侧标签、图标或金额符号 |
| `suffix` | 右侧图标、域名或单位 |
| `action` | 与输入框组合的操作按钮 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `control` | 手绘边框容器 |
| `input` | 内部原生 `input` 或 `textarea` |
| `prefix` / `suffix` / `action` | 三个附加区域 |
| `clear-button` / `password-toggle` / `step-button` | 内置操作按钮 |
| `validation-icon` / `required-mark` | 校验与必填标识 |
| `meta` / `helper` / `count` | 底部辅助信息与字数统计 |

### CSS Custom Properties

```css
super-input {
  --super-input-width: 260px;
  --super-input-background: #fffef9;
  --super-input-color: #292524;
  --super-input-border-color: #34445f;
  --super-input-hover-color: #4cae72;
  --super-input-focus-color: #356df3;
  --super-input-rotation: -0.12deg;
}
```

<style>
.input-note {
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

.input-note > span:first-child {
  color: #ee8b9b;
  font-size: 1.35rem;
}

.input-board,
.validation-board,
.combination-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.type-grid,
.attachment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1.4rem 1rem;
}

.input-spec {
  display: grid;
  gap: 0.7rem;
  min-width: 0;
  color: #292524;
  font-size: 0.82rem;
  font-weight: 700;
}

.input-spec super-input {
  --super-input-width: 100%;
}

.input-spec.compact super-input {
  --super-input-width: 190px;
}

.with-action {
  --super-input-width: 100%;
}

.input-action {
  --super-button-height: 100%;
  --super-button-rotation: 0deg;
}

.input-action::part(button) {
  min-height: 100%;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.size-matrix,
.state-matrix {
  display: grid;
  grid-template-columns: 58px repeat(5, minmax(190px, 1fr));
  gap: 1.1rem 1rem;
  align-items: center;
  overflow-x: auto;
}

.size-matrix > super-input,
.state-matrix > super-input {
  --super-input-width: 100%;
}

.state-matrix > strong:not(:first-child) {
  text-align: center;
}

.state-hover::part(control) {
  border-color: #4cae72;
  box-shadow: 3px 3px 0 -1px #b9ddc3;
  transform: translate(-0.5px, -0.5px) rotate(0.08deg);
}

.state-focus::part(control) {
  border-color: #356df3;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #356df3, 3px 3px 0 -1px #9db7fa;
  transform: rotate(0deg);
}

.validation-board {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  border-color: #56c6b7;
  box-shadow: 4px 4px 0 #56c6b7;
}

.combination-board {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 1.4rem 2rem;
  border-color: #f2b72f;
  box-shadow: 4px 4px 0 #f2b72f;
}

.combo-input {
  --super-input-width: 100%;
}

.verify-action {
  --super-button-padding-inline: 10px;
}

html.dark .input-note,
html.dark .input-board,
html.dark .validation-board,
html.dark .combination-board {
  color: #292524;
}

@media (max-width: 720px) {
  .input-board,
  .validation-board,
  .combination-board {
    padding: 1rem;
  }

  .input-note {
    grid-template-columns: auto 1fr;
  }

  .input-note > span:last-child {
    grid-column: 1 / -1;
  }

  .size-matrix,
  .state-matrix {
    grid-template-columns: 58px repeat(5, 190px);
  }

  .validation-board,
  .combination-board {
    grid-template-columns: 1fr;
  }
}
</style>
