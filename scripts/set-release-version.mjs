import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifests = [
  "package.json",
  "packages/utils/package.json",
  "packages/components/package.json",
  "packages/core/package.json",
];
const request = process.argv[2];
const semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;

const parseSemver = (value) => {
  const match = semverPattern.exec(value);
  if (!match) return null;
  const prerelease = match[4]?.split(".") ?? [];
  if (prerelease.some((item) => /^\d+$/.test(item) && /^0\d+/.test(item))) {
    return null;
  }
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    prerelease,
  };
};

const compareSemver = (left, right) => {
  for (const key of ["major", "minor", "patch"]) {
    if (left[key] !== right[key]) return left[key] > right[key] ? 1 : -1;
  }
  if (left.prerelease.length === 0 || right.prerelease.length === 0) {
    if (left.prerelease.length === right.prerelease.length) return 0;
    return left.prerelease.length === 0 ? 1 : -1;
  }
  const length = Math.max(left.prerelease.length, right.prerelease.length);
  for (let index = 0; index < length; index += 1) {
    const leftPart = left.prerelease[index];
    const rightPart = right.prerelease[index];
    if (leftPart === undefined) return -1;
    if (rightPart === undefined) return 1;
    if (leftPart === rightPart) continue;
    const leftNumeric = /^\d+$/.test(leftPart);
    const rightNumeric = /^\d+$/.test(rightPart);
    if (leftNumeric && rightNumeric) {
      return BigInt(leftPart) > BigInt(rightPart) ? 1 : -1;
    }
    if (leftNumeric !== rightNumeric) return leftNumeric ? -1 : 1;
    return leftPart > rightPart ? 1 : -1;
  }
  return 0;
};

if (!request) {
  throw new Error(
    "请提供 patch、minor、major 或完整版本号，例如：pnpm release:version patch",
  );
}

const packageJsons = manifests.map((path) => {
  const absolutePath = resolve(root, path);
  return {
    absolutePath,
    data: JSON.parse(readFileSync(absolutePath, "utf8")),
  };
});
const publicVersions = packageJsons.slice(1).map(({ data }) => data.version);

if (new Set(publicVersions).size !== 1) {
  throw new Error(`公开包版本不一致：${publicVersions.join(", ")}`);
}

const currentVersion = publicVersions[0];
const parsedCurrentVersion = parseSemver(currentVersion);
if (!parsedCurrentVersion) {
  throw new Error(`当前版本不是受支持的 SemVer：${currentVersion}`);
}

const bumpVersion = ({ major, minor, patch }, release) => {
  if (release === "major") return `${major + 1}.0.0`;
  if (release === "minor") return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
};

const nextVersion = ["major", "minor", "patch"].includes(request)
  ? bumpVersion(parsedCurrentVersion, request)
  : request;

const parsedNextVersion = parseSemver(nextVersion);
if (!parsedNextVersion) {
  throw new Error(`无效版本号：${nextVersion}`);
}
if (compareSemver(parsedNextVersion, parsedCurrentVersion) <= 0) {
  throw new Error(
    `新版本必须高于当前版本 ${currentVersion}，收到 ${nextVersion}`,
  );
}

packageJsons.forEach(({ absolutePath, data }) => {
  data.version = nextVersion;
  writeFileSync(absolutePath, `${JSON.stringify(data, null, 2)}\n`);
});

console.log(`Release version: ${currentVersion} -> ${nextVersion}`);
console.log("请检查变更、更新发布说明并提交后，再运行 pnpm release:prepare。");
