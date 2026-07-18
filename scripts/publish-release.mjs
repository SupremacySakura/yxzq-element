import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(root, "release-artifacts");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const releaseManifestPath = resolve(outputDirectory, "manifest.json");

if (!existsSync(releaseManifestPath)) {
  throw new Error("缺少 release-artifacts/manifest.json，请先运行 pnpm release:prepare");
}

const manifest = JSON.parse(
  readFileSync(releaseManifestPath, "utf8"),
);
const tag = process.argv[2] ?? "latest";
const allowedTags = new Set(["latest", "next"]);
const allowExisting = process.env.ALLOW_ALREADY_PUBLISHED === "yes";

if (process.env.CONFIRM_NPM_PUBLISH !== "yes") {
  throw new Error(
    "发布被安全锁阻止。确认后请设置 CONFIRM_NPM_PUBLISH=yes 再执行。",
  );
}
if (!allowedTags.has(tag)) {
  throw new Error(`不支持的 npm tag：${tag}，仅允许 latest 或 next`);
}
if (manifest.registry !== "https://registry.npmjs.org/") {
  throw new Error(`拒绝发布到非官方 registry：${manifest.registry}`);
}
const isPrerelease = String(manifest.version).includes("-");
if ((isPrerelease && tag !== "next") || (!isPrerelease && tag !== "latest")) {
  throw new Error(
    isPrerelease
      ? `预发布版本 ${manifest.version} 必须使用 next tag`
      : `稳定版本 ${manifest.version} 必须使用 latest tag`,
  );
}

const expectedPackages = [
  {
    name: "@yxzq-element/utils",
    directory: "packages/utils",
    slug: "yxzq-element-utils",
  },
  {
    name: "@yxzq-element/components",
    directory: "packages/components",
    slug: "yxzq-element-components",
  },
  {
    name: "yxzq-element",
    directory: "packages/core",
    slug: "yxzq-element",
  },
];

if (
  !Array.isArray(manifest.packages) ||
  manifest.packages.length !== expectedPackages.length
) {
  throw new Error("发布清单中的包数量不正确");
}

expectedPackages.forEach((expected, index) => {
  const item = manifest.packages[index];
  if (!item || typeof item !== "object") {
    throw new Error(`发布清单缺少 ${expected.name}`);
  }
  const localManifest = JSON.parse(
    readFileSync(resolve(root, expected.directory, "package.json"), "utf8"),
  );
  const expectedFile = `${expected.slug}-${localManifest.version}.tgz`;

  if (
    item.name !== expected.name ||
    localManifest.name !== expected.name ||
    item.version !== localManifest.version ||
    item.version !== manifest.version ||
    item.file !== expectedFile
  ) {
    throw new Error(
      `${expected.name} 的发布清单与当前 package.json 不一致，请重新运行 pnpm release:prepare`,
    );
  }

  const tarball = resolve(outputDirectory, item.file);
  if (dirname(tarball) !== outputDirectory || !existsSync(tarball)) {
    throw new Error(`${expected.name} 的 tarball 不存在或路径不安全`);
  }

  const size = statSync(tarball).size;
  const integrity = `sha512-${createHash("sha512")
    .update(readFileSync(tarball))
    .digest("base64")}`;
  if (size !== item.size || integrity !== item.integrity) {
    throw new Error(`${expected.name} 的 tarball 完整性校验失败`);
  }
});

const run = (args, options = {}) => spawnSync(npm, args, {
  cwd: root,
  encoding: "utf8",
  ...options,
});

const gitStatus = spawnSync("git", ["status", "--porcelain"], {
  cwd: root,
  encoding: "utf8",
});
if (gitStatus.status !== 0) {
  throw new Error("无法检查 Git 工作区状态");
}
if (gitStatus.stdout.trim()) {
  throw new Error(
    "Git 工作区不干净。请先审查并提交发布变更。",
  );
}

const gitCommit = spawnSync("git", ["rev-parse", "HEAD"], {
  cwd: root,
  encoding: "utf8",
});
if (
  gitCommit.status !== 0 ||
  manifest.source?.dirty !== false ||
  manifest.source?.commit !== gitCommit.stdout.trim()
) {
  throw new Error(
    "发布制品不是从当前干净提交生成的，请在提交完成后重新运行 pnpm release:prepare。",
  );
}

const alreadyPublished = new Set();
let publishedCount = 0;
for (const item of manifest.packages) {
  const spec = `${item.name}@${item.version}`;
  const check = run([
    "view",
    spec,
    "version",
    "dist.integrity",
    "--json",
    "--registry",
    manifest.registry,
  ]);
  if (check.status === 0) {
    if (!allowExisting) {
      throw new Error(`${spec} 已经存在，发布前请提升版本号`);
    }
    let publishedMetadata;
    try {
      publishedMetadata = JSON.parse(check.stdout);
    } catch {
      throw new Error(`无法解析 ${spec} 的 registry 元数据`);
    }
    const publishedIntegrity =
      publishedMetadata?.["dist.integrity"] ??
      publishedMetadata?.dist?.integrity;
    if (publishedIntegrity !== item.integrity) {
      throw new Error(
        `${spec} 已存在，但 registry 完整性与本次 tarball 不一致，拒绝跳过`,
      );
    }
    alreadyPublished.add(spec);
    continue;
  }
  const errorOutput = `${check.stdout ?? ""}\n${check.stderr ?? ""}`;
  if (!errorOutput.includes("E404")) {
    process.stderr.write(errorOutput);
    throw new Error(`无法确认 ${spec} 的版本占用情况`);
  }
}

for (const item of manifest.packages) {
  const spec = `${item.name}@${item.version}`;
  if (alreadyPublished.has(spec)) {
    console.log(`Skipping existing package ${spec}`);
    continue;
  }
  const tarball = resolve(outputDirectory, item.file);
  console.log(`Publishing ${spec} with tag ${tag}`);
  const result = run([
    "publish",
    tarball,
    "--access",
    "public",
    "--tag",
    tag,
    "--registry",
    manifest.registry,
  ], { stdio: "inherit", encoding: undefined });
  if (result.status !== 0) {
    throw new Error(`发布 ${spec} 失败`);
  }
  publishedCount += 1;
}

console.log(
  `Published ${publishedCount} package(s), skipped ${alreadyPublished.size} existing package(s) at ${manifest.registry}`,
);
