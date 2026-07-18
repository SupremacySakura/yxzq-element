import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { dirname, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(root, "release-artifacts");
const pnpm = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const tar = process.platform === "win32" ? "tar.exe" : "tar";
const registry = "https://registry.npmjs.org/";
const packages = [
  {
    name: "@yxzq-element/utils",
    directory: "packages/utils",
    slug: "yxzq-element-utils",
  },
  {
    name: "@yxzq-element/components",
    directory: "packages/components",
    slug: "yxzq-element-components",
    dependency: "@yxzq-element/utils",
  },
  {
    name: "yxzq-element",
    directory: "packages/core",
    slug: "yxzq-element",
    dependency: "@yxzq-element/components",
  },
].map((item) => {
  const manifestPath = resolve(root, item.directory, "package.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  return { ...item, manifest, version: manifest.version };
});

if (new Set(packages.map(({ version }) => version)).size !== 1) {
  throw new Error(
    `公开包版本必须一致：${packages.map(({ name, version }) => `${name}@${version}`).join(", ")}`,
  );
}

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    ...options,
  });
  if (result.status !== 0) {
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    throw new Error(`${command} ${args.join(" ")} 执行失败`);
  }
  return result.stdout;
};

const source = {
  commit: run("git", ["rev-parse", "HEAD"]).trim(),
  dirty: run("git", ["status", "--porcelain"]).trim().length > 0,
};

const packedPackages = [];

const collectFileTargets = (value) => {
  if (typeof value === "string") {
    return value.startsWith("./") && !value.includes("*") ? [value] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap(collectFileTargets);
  }
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectFileTargets);
  }
  return [];
};

for (const item of packages) {
  const filename = `${item.slug}-${item.version}.tgz`;
  const tarballPath = resolve(outputDirectory, filename);
  console.log(`\nPacking ${item.name}@${item.version}`);
  run(pnpm, [
    "--dir",
    resolve(root, item.directory),
    "pack",
    "--out",
    tarballPath,
  ], { stdio: "inherit", encoding: undefined });

  if (!existsSync(tarballPath) || statSync(tarballPath).size === 0) {
    throw new Error(`${filename} 未正确生成`);
  }

  const fileList = run(tar, ["-tzf", tarballPath])
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((path) => path.replace(/^package\//, ""));
  const packedManifest = JSON.parse(
    run(tar, ["-xOzf", tarballPath, "package/package.json"]),
  );
  const serializedManifest = JSON.stringify(packedManifest);

  if (packedManifest.name !== item.name || packedManifest.version !== item.version) {
    throw new Error(`${filename} 的 name/version 与工作区不一致`);
  }
  if (serializedManifest.includes("workspace:")) {
    throw new Error(`${filename} 仍包含 workspace: 依赖`);
  }
  if (
    item.dependency &&
    packedManifest.dependencies?.[item.dependency] !== item.version
  ) {
    throw new Error(
      `${filename} 的 ${item.dependency} 必须固定为同版本 ${item.version}`,
    );
  }
  if (
    packedManifest.publishConfig?.registry !== registry ||
    packedManifest.publishConfig?.access !== "public"
  ) {
    throw new Error(`${filename} 缺少安全的 publishConfig`);
  }
  if (!fileList.includes("README.md") || !fileList.includes("LICENSE")) {
    throw new Error(`${filename} 必须包含 README.md 和 LICENSE`);
  }

  const requiredEntries = [
    packedManifest.main,
    packedManifest.module,
    packedManifest.types,
    ...collectFileTargets(packedManifest.exports),
    ...collectFileTargets(packedManifest.sideEffects),
  ]
    .filter(Boolean)
    .map((path) => path.replace(/^\.\//, ""));
  for (const entry of requiredEntries) {
    if (!fileList.includes(entry)) {
      throw new Error(`${filename} 缺少入口文件 ${entry}`);
    }
  }

  const allowedFiles = new Set(["LICENSE", "README.md", "package.json"]);
  const leakedFiles = fileList.filter(
    (path) => !path.startsWith("dist/") && !allowedFiles.has(path),
  );
  if (leakedFiles.length > 0) {
    throw new Error(`${filename} 包含非预期文件：${leakedFiles.join(", ")}`);
  }

  packedPackages.push({
    name: item.name,
    version: item.version,
    file: filename,
    size: statSync(tarballPath).size,
    integrity: `sha512-${createHash("sha512")
      .update(readFileSync(tarballPath))
      .digest("base64")}`,
  });
}

const unexpectedFiles = readdirSync(outputDirectory)
  .filter((file) => !packedPackages.some((item) => item.file === file));
if (unexpectedFiles.length > 0) {
  throw new Error(`release-artifacts 中出现非预期文件：${unexpectedFiles.join(", ")}`);
}

const manifest = {
  registry,
  version: packages[0].version,
  source,
  packages: packedPackages,
};
writeFileSync(
  resolve(outputDirectory, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log("\nRelease artifacts ready:");
packedPackages.forEach(({ name, version, file, size }) => {
  console.log(`- ${name}@${version}: ${file} (${size} bytes)`);
});
console.log(`- manifest: ${relative(root, resolve(outputDirectory, "manifest.json"))}`);
