#!/usr/bin/env node
/**
 * Enforces ADR-0003 dimension 9: every implemented component must ship a
 * documentation page. Runs in CI so a missing page fails the build instead of
 * drifting silently.
 */
import { existsSync, readdirSync } from "node:fs";
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

/**
 * Components that intentionally share a single documentation page. AGENTS.md
 * keeps Checkbox/Radio/Switch documented together as the selector suite, so
 * they map onto that aggregate page instead of three near-duplicate pages.
 */
const AGGREGATE_DOC_PAGES = {
  Checkbox: "selectors.md",
  Radio: "selectors.md",
  Switch: "selectors.md",
};

const missing = [];

for (const name of componentNames) {
  const kebab = toKebabCase(name);
  const expectedPage = AGGREGATE_DOC_PAGES[name] ?? `${kebab}.md`;
  const hasDedicatedPage = docsFiles.has(expectedPage);

  if (!hasDedicatedPage) {
    missing.push(`${name} (expected packages/docs/components/${expectedPage})`);
  }
}

if (missing.length > 0) {
  console.error("Missing component documentation for:");
  missing.forEach((entry) => console.error(`  - ${entry}`));
  console.error(
    "\nEvery implemented component needs its own docs page in packages/docs/components (ADR-0003).",
  );
  process.exit(1);
}

console.log(`Component documentation check passed for ${componentNames.length} components.`);
