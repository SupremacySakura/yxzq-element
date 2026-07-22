# 版本变更

本页面记录 Super Components 的版本演进。任何代码、组件、文档、示例、CI 或配置变更，都必须在同一次修改中更新“未发布”区段；发布时再将已确认内容归入对应版本。详细规则见仓库的[开发流程指引](https://github.com/SupremacySakura/yxzq-element/blob/master/docs/DEVELOPMENT_WORKFLOW.md)。

## 未发布

当前暂无变更。

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
