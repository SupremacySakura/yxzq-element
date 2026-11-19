import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const version = process.argv[2] ?? JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
).version;
const workdir = join(tmpdir(), `yxzq-npm-smoke-${process.pid}`);

const manifest = readFileSync(join(root, "tests/contract/manifest.ts"), "utf8");
const tags = [
  ...new Set(
    [...manifest.matchAll(/tag: "(super-[a-z-]+)"/g)].map((match) => match[1]),
  ),
].sort();

if (tags.length !== 36) {
  throw new Error(`Expected 36 contract tags, received ${tags.length}`);
}

rmSync(workdir, { recursive: true, force: true });
mkdirSync(workdir, { recursive: true });

writeFileSync(
  join(workdir, "package.json"),
  `${JSON.stringify(
    {
      name: "yxzq-npm-smoke",
      private: true,
      type: "module",
      dependencies: {
        jsdom: "24.0.0",
        "yxzq-element": version,
      },
    },
    null,
    2,
  )}\n`,
);

writeFileSync(
  join(workdir, "smoke.mjs"),
  `import { JSDOM } from "jsdom";

const tags = ${JSON.stringify(tags)};
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  pretendToBeVisual: true,
  url: "http://localhost/",
});

const globals = {
  window: dom.window,
  document: dom.window.document,
  customElements: dom.window.customElements,
  HTMLElement: dom.window.HTMLElement,
  Element: dom.window.Element,
  Node: dom.window.Node,
  ShadowRoot: dom.window.ShadowRoot,
  Document: dom.window.Document,
  CustomEvent: dom.window.CustomEvent,
  Event: dom.window.Event,
  MouseEvent: dom.window.MouseEvent,
  KeyboardEvent: dom.window.KeyboardEvent,
  requestAnimationFrame: dom.window.requestAnimationFrame.bind(dom.window),
  cancelAnimationFrame: dom.window.cancelAnimationFrame.bind(dom.window),
  getComputedStyle: dom.window.getComputedStyle.bind(dom.window),
};

for (const [name, value] of Object.entries(globals)) {
  Object.defineProperty(globalThis, name, {
    configurable: true,
    writable: true,
    value,
  });
}

await import("yxzq-element");
await import("yxzq-element/button");

const missing = [];
const failures = [];

for (const tag of tags) {
  const element = document.createElement(tag);
  if (customElements.get(tag) === undefined) {
    missing.push(tag);
    continue;
  }
  document.body.append(element);
  try {
    await element.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
    if (!element.shadowRoot) {
      failures.push(tag + ": missing shadow root");
    }
  } catch (error) {
    failures.push(tag + ": " + (error instanceof Error ? error.message : error));
  }
}

if (missing.length || failures.length) {
  console.error(JSON.stringify({ missing, failures }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify(
    { version: ${JSON.stringify(version)}, registered: tags.length },
    null,
    2,
  ),
);
`,
);

try {
  execFileSync("pnpm", ["install", "--ignore-workspace"], {
    cwd: workdir,
    stdio: "inherit",
  });
  execFileSync(process.execPath, ["smoke.mjs"], {
    cwd: workdir,
    stdio: "inherit",
  });
} finally {
  rmSync(workdir, { recursive: true, force: true });
}
