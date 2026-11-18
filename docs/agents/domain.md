# 领域文档

工程技能探索代码库时，应如何使用此仓库的领域文档。

## 探索之前，请阅读

- 仓库根目录中的 **`GLOSSARY.md`**，或者
- 如果存在，仓库根目录中的 **`GLOSSARY-MAP.md`**：它会指向各上下文自己的 `GLOSSARY.md`。阅读与当前主题相关的术语表。
- **`docs/adr/`**：阅读涉及即将处理区域的 ADR。在多上下文仓库中，也要检查 `src/<context>/docs/adr/` 中与该上下文相关的决策。

如果这些文件不存在，**默默继续**。不要指出它们缺失，也不要建议提前创建。`/domain-modeling` 技能（由 `/grill-with-docs` 和 `/improve-codebase-architecture` 调用）会在术语或决策明确时按需创建这些文件。

## 文件结构

单上下文仓库（大多数仓库）：

```
/
├── GLOSSARY.md
├── docs/adr/
│   ├── 0001-event-sourced-orders.md
│   └── 0002-postgres-for-write-model.md
└── src/
```

多上下文仓库（根目录存在 `GLOSSARY-MAP.md`）：

```
/
├── GLOSSARY-MAP.md
├── docs/adr/                          ← system-wide decisions
└── src/
    ├── ordering/
    │   ├── GLOSSARY.md
    │   └── docs/adr/                  ← context-specific decisions
    └── billing/
        ├── GLOSSARY.md
        └── docs/adr/
```

## 使用术语表中的术语

在输出中提到领域概念时（例如议题标题、重构提案、假设、测试名称），使用 `GLOSSARY.md` 中定义的术语。不要改用术语表明确要求避免的同义词。

如果所需概念尚未收录在术语表中，这是一个信号：你可能在发明项目并不使用的语言（请重新考虑），也可能确实存在缺口（记录下来，交给 `/domain-modeling` 处理）。

## 指出 ADR 冲突

如果输出与现有 ADR 冲突，请明确指出，不要默默覆盖：

> _与 ADR-0007（订单采用事件溯源）冲突，但值得重新讨论，因为……_
