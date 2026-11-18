#!/usr/bin/env node
/**
 * Enforces ADR-0003 dimension 9: every implemented component must ship a
 * documentation page. Runs in CI so a missing page fails the build instead of
 * drifting silently.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = join(root, "packages/components");
const docsDir = join(root, "packages/docs/components");

const toKebabCase = (name) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

const componentNames = readdirSync(componentsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(componentsDir, name, "index.ts")));

const docsFiles = new Set(
  existsSync(docsDir)
    ? readdirSync(docsDir).filter((file) => file.endsWith(".md"))
    : [],
);

const readAllDocs = () => {
  if (!existsSync(docsDir)) {
    return "";
  }

  return readdirSync(docsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => readFileSync(join(docsDir, file), "utf8"))
    .join("\n");
};

const allDocsContent = readAllDocs();
const missing = [];

for (const name of componentNames) {
  const kebab = toKebabCase(name);
  const expectedPage = `${kebab}.md`;
  const tag = `super-${kebab}`;
  const hasDedicatedPage = docsFiles.has(expectedPage);
  const mentionedInDocs = allDocsContent.includes(tag);

  if (!hasDedicatedPage && !mentionedInDocs) {
    missing.push(`${name} (expected packages/docs/components/${expectedPage})`);
  }
}

if (missing.length > 0) {
  console.error("Missing component documentation for:");
  missing.forEach((entry) => console.error(`  - ${entry}`));
  console.error(
    "\nEvery implemented component needs a docs page or an explicit mention in packages/docs/components (ADR-0003).",
  );
  process.exit(1);
}

console.log(`Component documentation check passed for ${componentNames.length} components.`);
