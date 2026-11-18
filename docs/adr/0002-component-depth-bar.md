# 组件深度:与现有 9 个组件同档

所有新组件必须达到与现有 9 个组件(Button/Input/Form/Checkbox/Radio/Switch/Select/DatePicker/TimePicker)相同的实现深度:完整 a11y(焦点管理、ARIA、键盘导航)、受控与非受控模式、size/variant 体系、`--super-*` 样式变量、`part` 暴露、本地化标签、与库一致的事件命名约定(`super-*` 前缀、`bubbles: true`、`composed: true`)。拒绝 MVP 档(仅渲染 + 基本交互)与"参考实现"档(超出当前基线的边缘场景、SSR、形式化类型导出)。

## Considered Options

- **MVP 档(浅)**:拒绝。会拉低整库一致性,且后续无法在不引入破坏性变更的前提下升级。
- **参考实现级(深)**:拒绝。当前项目阶段不需要,会拖慢"补全 30 个组件"的目标。

## Consequences

- 每个新组件的 PR 都必须包含键盘交互测试、ARIA 角色断言、focus 行为验证。
- 任何"先合一个能用的版本,后续再补 a11y"的提议都违反此 ADR。
