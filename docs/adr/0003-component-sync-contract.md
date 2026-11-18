# 组件同步契约:9 个维度必须同 PR 落地

每新增或修改一个组件,以下 9 个维度必须在同一个 PR 中同步更新,不允许"先合代码,文档后补":

1. `packages/components/<Component>/` 实现
2. `packages/components/index.ts` 导出
3. `packages/core/components.ts` 中的 `componentDefinitions` 与 `defineSuper*` 函数
4. `packages/core` 的子路径导出(`yxzq-element/<component>`)
5. `HTMLElementTagNameMap` 类型声明
6. Vue 消费者类型声明(`examples/vue/src/custom-elements.d.ts` 的 `GlobalComponents`)
7. React JSX 类型声明
8. 双框架示例(`examples/react`、`examples/vue`)
9. 文档(`packages/docs/components/<component>.md`、侧边栏配置、`changelog.md` 的 `未发布` 段)

## Considered Options

- **允许某些"次要"组件跳过文档或示例**:拒绝。文档与类型的漂移会以复利形式积累,且 AGENTS.md 已明确禁止。

## Consequences

- "完成一个组件"的定义由"代码写完"扩展为"9 个维度全部落地"。
- 后续工作量预估必须按 9 维度对齐,而非按代码行数估算。
