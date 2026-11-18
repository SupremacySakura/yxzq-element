# 视觉回归测试

手绘风是本库的核心识别特征，24 个组件跨批次实现时最容易发生视觉漂移。这里用 Playwright 对组件渲染结果做截图对比，作为 ADR-0009 的最后一道防线。

## 运行

```bash
pnpm test:visual          # 对比现有基线
pnpm test:visual:update   # 手绘风有意变更后刷新基线
```

首次运行前需安装浏览器：`pnpm exec playwright install chromium`。

快照文件名包含操作系统后缀（例如 `-chromium-darwin`）。CI 在 Linux 上运行时会查找
`-chromium-linux` 快照；由于跨系统字体渲染存在差异，CI 中的视觉 job 目前是提示性的
非阻塞检查。若要让 CI 真正卡住回归，请在 CI 所用系统上执行
`pnpm test:visual:update` 并提交对应平台的基线。

## 约定

- 只对比"风格词汇"（描边、圆角抖动、阴影、纸张质感），不对文案或数据内容做断言。
- 基线文件存放在 `tests/visual/__snapshots__/`，必须随组件变更一起提交。
- 新增组件批次时，为该批次的代表性组合补一条用例。
