# 版本变更

本页面记录 Super Components 的版本演进。任何代码、组件、文档、示例、CI 或配置变更，都必须在同一次修改中更新“未发布”区段；发布时再将已确认内容归入对应版本。详细规则见仓库的[开发流程指引](https://github.com/SupremacySakura/yxzq-element/blob/master/docs/DEVELOPMENT_WORKFLOW.md)。

## 未发布

### 规划

- 制定组件库补全计划:新增 27 个组件,分 5 批推进,预计 35 天(ADR-0001 ~ ADR-0010)。
- 建立设计令牌层(`packages/theme`)与手绘工具函数(`packages/utils/sketch.ts`),保证 27 个组件的视觉一致性(ADR-0008 / ADR-0009)。
- 引入 Floating UI 处理弹出层定位,自研焦点陷阱与滚动锁定(ADR-0007)。
- 明确 `super-table` 范围为基础集(渲染 + slot + 空态/加载态 + 排序 + 选择),不做固定列/展开行/虚拟滚动(ADR-0006)。
- 建立 `GLOSSARY.md` 与 `docs/adr/`,记录组件契约、分类、设计系统、批次计划等核心术语与决策。

### 新增

- 新增 `@yxzq-element/utils` 的共享基础设施:`sketch`(手绘圆角、描边、纸张质感与阴影生成)、`focusTrap`(Tab 循环与焦点回退)与 `scrollLock`(可嵌套的滚动锁定),供后续弹出层与模态组件复用。
- 新增 `@yxzq-element/theme/tokens.css` 共享设计令牌层,覆盖调色板、间距、圆角、手绘特征、字体、动效与层级;`index.css` 默认引入令牌,消费者可只覆盖约 20 个核心变量完成整体换肤。
- 新增 Playwright 视觉回归基线(`tests/visual`),以 Button 的变体与尺寸作为手绘风参照,并在 CI 中新增视觉回归 job。
- 新增 `check:docs-sync` 脚本,在 CI 中强制每个已实现组件都必须有文档页或明确文档提及。
- 新增 6 个展示类组件:`super-tag`(可关闭标签)、`super-badge`(支持上限与圆点模式)、`super-avatar`(图片失败自动回退)、`super-card`(四变体、可选可点击与键盘触发)、`super-divider`(手绘/虚线变体与文案位置)、`super-space`(基于 gap 的间距容器);同步全量与按需注册入口、显式注册函数、公共类型、Vue/React 类型声明、原生 HTML/Vue/React 示例、组件文档与导航、无障碍语义及单元测试。
- 新增 `super-tooltip` 与共享弹出层基础设施:封装 Floating UI 的定位、翻转、偏移与滚动跟随,支持 hover/focus/click 触发、受控 `open`、关闭延迟、Escape 关闭回焦、`interactive` 模式下的焦点陷阱与滚动锁定。
- 新增 `super-progress`(线性/环形、状态色、不确定态、自定义 `format`)、`super-empty`(插画/图片/操作区)、`super-skeleton`(文本/矩形/圆形、多行、动画与加载切换)三个展示收尾组件。
- 新增 `super-tabs`(items 或 `tab` slot、方向键/Home/End、可关闭)、`super-breadcrumb`(items 或 slot、`aria-current`、超量折叠)、`super-pagination`(页码/每页条数/跳页/简版、全部文案可本地化)三个导航组件。
- 新增 `super-slider`(单值/范围、原生 range 键盘语义)、`super-rate`(半星、清空、数字键直设)、`super-upload`(选择、拖放、数量与体积限制、不发起网络请求,由消费者通过 `super-upload-submit` 上传)三个表单组件。
- 新增 `super-dialog` 与 `super-drawer`:模态语义(`role="dialog"` + `aria-modal`)、焦点陷阱、滚动锁定、关闭回焦、Escape 与遮罩关闭、可取消的 `before-close` 事件、页脚确认/取消动作,抽屉支持四个方向与数值/命名尺寸。
- 新增 `super-popover`(Floating UI 定位、click/hover/manual 触发、外部点击与 Escape 关闭)与 `super-message`(单条全局提示、四种类型、自动关闭、`showSuperMessage()` 命令式入口且 SSR 安全)。
- 新增 `super-popconfirm`(可取消确认、加载态、开合聚焦管理)与 `super-notification`(四角定位、四种类型、自动关闭、`showSuperNotification()` 命令式入口且 SSR 安全)。
- 新增 `super-menu`(嵌套子菜单、三种模式、方向键/Home/End/Enter/Space/Escape、roving tabindex、收起态)与 `super-steps`(横向/纵向、状态推导、可选点击)。
- 新增 `super-dropdown`(菜单语义、disabled/divider 跳过、选中与开合事件)与 `super-autocomplete`(combobox 语义、`aria-activedescendant`、可选自定义 `filter`、加载/空态/清空)。
- 新增 `super-table`:按 ADR-0006 实现基础集(列/行、slot 单元格与 `formatter`、空态、加载态、三态排序、受控选择),明确不含固定列、展开行、虚拟滚动、树形数据、合计行、单元格合并与列拖拽。
- `super-divider`、`super-tooltip`、`super-popover`、`super-message`、`super-notification` 与 `super-popconfirm` 新增 `size`(`large` / `medium` / `small`),按尺寸调整字号、内边距、间距及图标/箭头尺寸;`showSuperMessage()` 与 `showSuperNotification()` 选项同步支持 `size`。
- `super-upload` 新增只读 `value` 派生视图,按 `fileList` 顺序返回文件名 `string[]`;文件写入入口仍为 `fileList`,不改变其非 form-associated 边界。
- 组件库组件总数达到 36 个,全部同步全量/按需注册入口、`define` 显式注册、子路径导出、`HTMLElementTagNameMap`、Vue `GlobalComponents`、React `JSX.IntrinsicElements`、三端示例与文档导航。

### 变更

- `super-slider` 与 `super-rate` 支持非受控用法:用户交互会先更新内部值并派发 `super-slider-change` / `super-rate-change`;受控消费者在事件监听器中写回旧值即可恢复属性值。相关文档已同步说明两种用法。
- 新增共享令牌 `--super-text-color-inverse`,并将 Steps、Popconfirm 及组件库中直接使用白色的前景色改为引用该令牌,统一深色/浅色主题下的反色文字契约。
- 将 Dialog 与 Drawer 重复的布尔属性转换器、组合焦点作用域与关闭事件序列抽取到内部共享模块,公共 API、事件名、事件顺序、焦点陷阱和滚动锁定行为保持不变。
- 为 Tag 与 Steps 的注册常量补充命名说明,保留现有 `SUPER_TAG_TAG` / `SUPER_STEPS_TAG` 公共名称,避免破坏性重命名。

### 修复

- 修复 `master` 推送后 GitHub Pages 部署因失效的 `GH_TOKEN` 失败的问题:部署 job 改用 GitHub Actions 内置的 `GITHUB_TOKEN`,并仅向该 job 授予写入仓库内容的权限,现有 `gh-pages` 发布方式保持不变。

## 1.2.0 — 2026-07-25

### 新增

- 新增原创手绘风 `super-date-picker` 与 `super-time-picker`：覆盖单日、日期范围、月份、年份、时分秒、12 / 24 小时制、时间范围、步进、快捷项、清空、边界和禁用日期等能力；同步全量与按需注册入口、显式注册函数、公共类型与组合事件、Vue/React 类型声明、原生 HTML/Vue/React 示例、组件文档、无障碍键盘交互及单元测试，并明确数组值仅通过 JavaScript property 传入且两者暂不参与原生表单；同时修复 DatePicker 年模式锚点、低年份导航、受限快捷项与关闭回焦，以及 TimePicker 弹层 Escape、空值清除、off-step 键盘落点和弹层命名问题，补齐 `locale` 日期文案本地化与时间边界测试。

## 1.1.0 — 2026-07-22

### 新增

- 新增无内置字段控件的 `super-form` 配置型表单：支持任意 Custom Element 或渲染函数、统一的 `value` / `onchange` 契约、`deps` 驱动的动态 props 与显示条件、函数 rule 校验、依赖清空策略、手绘响应式 FormItem 布局，以及原生 HTML、Vue、React 消费示例；组件文档提供可复制的 Vue/React Schema、property 绑定和提交事件示例，并补齐非法标签与重复字段诊断、Schema 错误清理、完整公共行为测试及 CSS 定制变量说明。

## 1.0.1 — 2026-07-18

### 文档与开发体验

- 明确开始使用文档中的最简 Vue `GlobalComponents` 声明只负责标签与基础实例类型；完整属性、事件和 `CustomEvent.detail` 校验应使用仓库中经过类型检查的完整声明文件。
- 纠正 Vue + Vite 与 React + Vite 的注册和渲染说明，明确 `SuperButton` 等命名导出是 Lit 元素类，框架模板应使用小写 `super-*` 标签。
- 为 Vue 示例新增覆盖六个组件公开属性、自定义事件、事件 detail 和真实模板 ref 类型的完整 `GlobalComponents` 声明，并在使用文档中提供可复制的仓库链接。
- 补齐 React 示例中六个标签的真实元素实例类型和全部 11 个公共自定义事件声明，使 JSX ref、事件回调与 `CustomEvent.detail` 复用组件库的公开类型。
- 新增本版本变更页和仓库级开发流程指引，将组件文档、Vue/React 类型文件、示例、测试及版本记录的同步更新设为完成条件，并要求发布前把“未发布”内容归入实际版本。

## 1.0.0

> Git 标签：`v1.0.0`，对应提交 `c00762e`。仓库没有可验证的独立发布日期，因此不在此推测发布日期。

### 首个 Lit Web Component 版本

- 将运行时从 Vue 组件与插件架构迁移为基于 Lit 的框架无关 Web Components，并统一使用 `super-*` 标签、`Super*` 元素类、`--super-*` CSS 变量和 `super-*` 自定义事件命名。
- 提供 Button、Input、Checkbox、Radio、Switch 和 Select 六个原创手绘风组件，以及全量注册、组件子路径注册和 `yxzq-element/define` 显式注册入口。
- 提供 Shadow DOM、Slot、CSS Parts、公开主题变量和可跨越 Shadow DOM 的类型化组合事件。
- 增加原生 HTML、Vue、React 消费示例和 VitePress 文档，并建立覆盖六个组件的 70 项 Vitest 检查。
- 修复测试对残留 `dist` 产物的依赖，以及 Button 首次渲染前禁用态点击、Radio 重连分组协调和 Select 选项重排/重连等边界问题。
- 更新 GitHub Actions artifact 步骤和暗色文档主题，并建立 npm 制品校验、依赖顺序和 Trusted Publishing 发布流程。
- 首发包范围为 `@yxzq-element/utils`、`@yxzq-element/components` 和 `yxzq-element`。

### 已知边界

- 六个组件当前均不是 form-associated Custom Elements；`SuperButton` 内部固定使用 `type="button"`，尚不提供原生 submit/reset 契约。
- React TypeScript 消费者需要 JSX 标签声明；Vue 消费者需要 `isCustomElement` 配置，并可通过 `GlobalComponents` 声明获得模板类型提示。
