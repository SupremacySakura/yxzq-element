# 受控状态:交互先提交,下一帧确认

React 19 与 Vue 在父级状态未变化时可能跳过对自定义元素的 property 写入。若组件在用户交互后直接修改内部状态,而父级拒绝这次修改并保持原值,组件不会收到任何 setter 调用,UI 与父级状态就会永久脱节。

所有可被用户交互修改的受控状态采用同一序列:

1. 外部 property 写入时,记录"受控提交版本 + 值"。
2. 用户交互时先捕获快照,再更新内部值并派发 `super-*` 事件。
3. 事件派发后请求一个 animation frame。
4. 若期间没有新的外部 property 写入,恢复到最近一次外部提交值。

初始 HTML attribute 视为默认值,不进入受控模式。组件通过 `runAttributeWrite()` 包裹 `super.attributeChangedCallback`,避免把 `<super-input value="x">` 的初始 attribute 误判为受控提交;否则纯 HTML 用户输入会在下一帧被还原。Reflected 属性由 Lit 在更新阶段写回,不会再次触发 setter。

## Considered Options

- **要求消费者在每次事件中写回值**:拒绝。React 受控组件的常见写法是"父级不更新即拒绝",组件必须自愈。
- **用微任务代替 animation frame**:拒绝。微任务会在框架提交前执行,可能覆盖父级尚未落地的接受写入。
- **区分受控/非受控显式 prop**:拒绝。会新增公共 API,且与现有 Web Component 习惯不一致。

## Consequences

- 父级接受修改时,在事件处理器中写入新值;父级拒绝时保持原值,组件自动回滚。
- 纯 HTML 中通过 attribute 初始化后仍是非受控的,用户交互不会回弹。
- 每个受控组件在 `disconnectedCallback` 中释放 guard,避免定时器泄漏。
- 新增可交互状态时必须复用 `createControlledValueGuard()`,并在事件派发后 `confirm()`。
