# yxzq-element 组件库

手绘风、框架无关的 Web Component 库,基于 Lit 实现,以 `super-` 为前缀。

## Language

### 组件契约

**Component**:
一个 LitElement 子类,通过 `defineSuper*` 函数注册为 `super-*` Custom Element。所有组件都遵循 ADR-0003 的 9 维度同步契约。
_避免使用_:元件、部件、widget

**Component Definition**:
`packages/core/components.ts` 中的 `componentDefinitions` 数组项,包含组件名与 `defineSuper*` 函数引用。是"公开导出"的唯一权威来源。
_避免使用_:组件配置、组件注册表

**Sync Contract**:
ADR-0003 定义的 9 维度同步要求(实现 / 导出 / 注册 / 子路径 / `HTMLElementTagNameMap` / Vue `GlobalComponents` / React JSX / 示例 / 文档与 changelog)。任何组件改动必须 9 维度同 PR 落地。
_避免使用_:同步清单、检查表

### 组件分类

**Selector**:
`SuperCheckbox` / `SuperRadio` / `SuperSwitch` 三件套。共享"选中态 + 键盘导航 + 表单语义"模式,见 `selectors.md` 聚合文档。
_避免使用_:选择器、单选复选开关

**Overlay**:
需要"锚定到触发元素"或"模态覆盖"的组件家族:`tooltip/popover/dialog/drawer/popconfirm/dropdown/autocomplete/message/notification`。共享 Floating UI 定位(ADR-0007)与焦点陷阱(`packages/utils/focusTrap.ts`)。
_避免使用_:弹窗、弹出层组件、modal

**Display**:
纯展示类组件:`tag/badge/avatar/card/empty/skeleton/divider/space/progress`。无用户交互或仅弱交互(如 `card` 的 hover)。
_避免使用_:展示组件、视觉组件

**Form Control**:
接受用户输入的组件:`input/textarea(已并入 input)/select/checkbox/radio/switch/date-picker/time-picker/slider/rate/upload/autocomplete`。必须暴露 `value` 属性与 `super-*-change` 事件。`upload` 的 `value` 是派生只读视图(按 `fileList` 顺序返回文件名 `string[]`),写入入口是 `fileList`;它不是 form-associated Custom Element,不参与 `FormData`、原生重置或外部约束验证。
_避免使用_:表单组件、输入组件

### 设计系统

**Design Token**:
`packages/theme` 中定义的全局 CSS 变量(`--super-color-primary` / `--super-spacing-md` / `--super-radius-sm` / `--super-paper-texture` 等)。组件级变量映射到令牌(ADR-0008)。
_避免使用_:主题变量、全局样式

**Hand-drawn**:
本库的视觉风格。核心特征:不规则描边、纸张质感、手绘阴影。由 `packages/utils/sketch.ts` 中的共享工具函数(`handDrawnBorder()` / `paperTexture()` / `sketchyShadow()`)实现(ADR-0009)。
_避免使用_:手绘风格、涂鸦风、草图风

### 批次计划

**Batch**:
ADR-0005 定义的 5 个实施批次(B1–B5)。批次间串行,批内并行;B(n) 实现时 B(n+1) 并行设计 API(流水线模式)。
_避免使用_:阶段、里程碑、sprint

**Pipeline Mode**:
B(n) 实现与 B(n+1) API 设计并行的工作模式(ADR-0005)。与"严格串行"和"多 agent 并行同批"相对。
_避免使用_:流水线开发、并行开发

### 事件与属性

**User Event**:
由用户交互触发的 `super-*` 事件(如 `super-button-click` / `super-input-change`)。必须以 `bubbles: true` 与 `composed: true` 派发,以便跨 Shadow DOM 边界传播。程序化属性变更不触发 User Event。
_避免使用_:用户事件、交互事件、自定义事件

**Controlled / Uncontrolled**:
非受控模式:组件内部维护 `value`,用户交互直接更新内部状态并触发事件。受控模式:用户交互先更新内部值并派发事件,消费者随后写回属性;组件始终以最后写入的 `value` 为准,因此消费者在事件中写回旧值即可拒绝本次修改。两者必须在所有 Form Control 组件中同时支持(ADR-0002)。`upload` 是例外:其 `value` 为派生只读视图,写入入口是 `fileList`。
_避免使用_:受控组件、非受控组件、双向绑定

**Controlled Commit / Rollback**:
受控提交是消费者通过 property setter 写入并记录的值。用户交互先更新内部状态并派发事件;若一个 animation frame 内没有新的外部写入,组件恢复到最近一次受控提交值。初始 HTML attribute 只作为默认值,不建立受控提交(ADR-0012)。
_避免使用_:双向绑定、value 回写、state sync

### 测试与验收

**Framework Parity**:
同一个 `super-*` 标签在原生 HTML、Vue 与 React 三个真实 Vite 宿主中都能完成注册、挂载、property/attribute 传递、事件冒泡与键盘操作,且行为一致。由 `tests/contract` 的单一场景清单驱动(ADR-0011)。
_避免使用_:跨框架兼容、三端测试

**Contract Scenario**:
`tests/contract/manifest.ts` 中描述一个组件最小挂载方式与公开事件归属的条目。清单是跨框架测试的唯一来源;组件新增或事件变化必须同步更新清单。
_避免使用_:测试用例、fixture

**Attribute Initialization**:
通过 HTML attribute 提供的初始值。它建立非受控默认状态,不视为受控提交;后续用户交互按非受控语义保留。消费者若需要受控行为,应写入 property 并在事件中决定是否接受修改。
_避免使用_:默认值、初始属性
