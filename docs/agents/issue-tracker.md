# 议题跟踪器：GitHub

此仓库的议题和规格保存在 GitHub Issues 中。所有操作都使用 `gh` CLI。

## 约定

- **创建议题**：`gh issue create --title "..." --body "..."`。多行正文使用 heredoc。
- **读取议题**：`gh issue view <number> --json number,title,body,labels,comments`。
- **列出议题**：使用 `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`，并添加适当的 `--label` 和 `--state` 筛选条件。
- **将议题设为父议题的子议题**：使用 `gh issue create --parent <parent> ...`，或之后运行 `gh issue edit <parent> --add-sub-issue <child>`（`gh` 2.94+）。旧版 `gh` 使用 `gh api --method POST repos/<owner>/<repo>/issues/<parent>/sub_issues -F sub_issue_id=<child-db-id>`（这里使用数据库 ID，详见下文的**阻塞关系**）。如果不支持子议题，则在子议题正文顶部添加 `Part of #<parent>`。
- **阻塞关系**：GitHub 的**原生议题依赖关系**是规范且可在 UI 中查看的表示方式。使用 `gh issue create --blocked-by <n>,<n> ...` 或 `gh issue edit <child> --add-blocked-by <blocker>` 添加依赖边（`gh` 2.94+）。旧版 `gh` 使用 `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`；其中 `<blocker-db-id>` 是阻塞议题的数字**数据库 ID**（通过 `gh api repos/<owner>/<repo>/issues/<n> --jq .id` 获取，_不是_ `#number` 或 `node_id`）。如果无法使用依赖关系，则在子议题正文顶部添加 `Blocked by: #<n>, #<n>` 行。所有阻塞议题都关闭后，任务单才解除阻塞。
- **统计未关闭的阻塞项**：使用 `gh api repos/<owner>/<repo>/issues/<n> --jq .issue_dependencies_summary.blocked_by`（只统计未关闭的阻塞项；0 表示可以开始）。`gh issue view <n> --json blockedBy` 也会列出已关闭的阻塞项，因此需要筛选：`--jq '[.blockedBy.nodes[] | select(.state == "OPEN")] | length'`。
- **评论议题**：`gh issue comment <number> --body "..."`。
- **添加/移除标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`。
- **关闭议题**：先用 `gh issue comment <number> --body "..."` 发布说明，再运行 `gh issue close <number>`。对于已关闭的议题，`gh issue close --comment` 会添加评论，且退出码仍为 0。

根据 `git remote -v` 判断仓库；在克隆目录中运行时，`gh` 会自动完成此操作。

只在用户自己的仓库中创建议题。除非用户拥有 `mattpocock/skills`（这些技能的来源仓库），否则绝不要向其中创建议题。在 fork 中，`gh` 可能默认使用上游父仓库，因此每次会话首次执行 `gh issue create` 之前，先用 `gh repo view --json nameWithOwner` 检查目标仓库；如果不是用户的仓库，就与用户确认。

## 将拉取请求作为分诊入口

**将 PR 作为请求入口：否。** _（如果此仓库将外部 PR 视为功能请求，则改为 `yes`；`/triage` 会读取此标记。）_

设置为 `yes` 时，PR 使用与议题相同的标签和状态，并使用对应的 `gh pr` 命令：

- **读取 PR**：`gh pr view <number>`，然后运行 `gh pr view <number> --comments`（在非 TTY 环境中，`--comments` 只打印评论，不打印正文）；使用 `gh pr diff <number>` 获取差异。
- **列出待分诊的外部 PR**：`gh api --paginate 'repos/{owner}/{repo}/pulls?state=open' --jq '.[] | select(.author_association | IN("OWNER","MEMBER","COLLABORATOR") | not) | {number, title, author: .user.login, author_association, labels: [.labels[].name]}'`。
- **评论/添加标签/关闭**：使用 `gh pr comment`、`gh pr edit --add-label`/`--remove-label`、`gh pr close`。

GitHub 的议题和 PR 共用编号，因此单独的 `#42` 可能指任一对象：先运行 `gh pr view 42` 判断，必要时再尝试 `gh issue view 42`。

## 当技能要求"发布到议题跟踪器"时

创建 GitHub 议题。

## 当技能要求"获取相关任务单"时

按照上文的**读取议题**说明读取它。

## Wayfinder 操作

由 `/wayfinder` 使用。**地图**是一个议题，**子议题**作为任务单。

- **地图**：一个标记为 `wayfinder:map` 的议题，正文包含 Notes / Decisions-so-far / Fog。使用 `gh issue create --label wayfinder:map` 创建。
- **子任务单**：一个作为 GitHub 子议题链接到地图的议题（见**将议题设为父议题的子议题**）。如果未启用子议题，则在地图正文的任务列表中添加子议题，并在其正文顶部添加 `Part of #<map>`。标签格式为 `wayfinder:<type>`（`research`/`prototype`/`grilling`/`task`）。任务单被认领后，分配给负责推进的开发者。
- **阻塞关系**：见"约定"下的**阻塞关系**。
- **当前边界查询**：列出地图下尚未关闭的子议题（使用 `gh issue list --state open`，并限定在地图的子议题/任务列表中），排除存在未关闭阻塞项（见**统计未关闭的阻塞项**，或 `Blocked by` 行中的未关闭议题）或已有负责人的议题；优先选择地图中顺序最靠前的议题。
- **认领**：执行 `gh issue edit <n> --add-assignee @me`，这是会话中的首次写入。
- **解决**：执行 `gh issue comment <n> --body "<answer>"`，然后执行 `gh issue close <n>`，最后在地图的 Decisions-so-far 中添加上下文指针（摘要 + 链接）。
