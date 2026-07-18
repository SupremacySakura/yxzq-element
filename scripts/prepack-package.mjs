import { rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const packageName = process.argv[2];
const packages = new Map([
  ["@yxzq-element/utils", { directory: "packages/utils", filter: "@yxzq-element/utils" }],
  [
    "@yxzq-element/components",
    { directory: "packages/components", filter: "@yxzq-element/components..." },
  ],
  ["yxzq-element", { directory: "packages/core", filter: "yxzq-element..." }],
]);
const target = packages.get(packageName);

if (!target) {
  throw new Error(`不支持的公开包：${packageName ?? "<missing>"}`);
}

const packageDirectory = resolve(root, target.directory);
if (resolve(process.cwd()) !== packageDirectory) {
  throw new Error(
    `${packageName} 必须从 ${relative(root, packageDirectory)} 目录执行 prepack`,
  );
}

rmSync(resolve(packageDirectory, "dist"), { recursive: true, force: true });

const result = spawnSync(
  pnpm,
  ["--dir", root, "--filter", target.filter, "build"],
  { cwd: root, stdio: "inherit" },
);

if (result.status !== 0) {
  throw new Error(`${packageName} 的干净构建失败`);
}
