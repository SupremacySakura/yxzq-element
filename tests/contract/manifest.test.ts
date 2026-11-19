import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { COMPONENTS, EVENTS } from "./manifest";

const root = resolve(import.meta.dirname, "../..");

function componentDirectories(): string[] {
  return readdirSync(resolve(root, "packages/components"), {
    withFileTypes: true,
  })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter(
      (name) =>
        name !== "internal" &&
        name !== "dist" &&
        name !== "node_modules",
    )
    .sort();
}

function publicEventNames(): string[] {
  const declarations = readFileSync(
    resolve(root, "examples/vue/src/custom-elements.d.ts"),
    "utf8",
  );
  return Array.from(
    declarations.matchAll(/^\s+"(super-[a-z-]+)": CustomEvent</gm),
    (match) => match[1],
  );
}

describe("framework contract manifest", () => {
  it("contains all 36 public component tags", () => {
    expect(COMPONENTS).toHaveLength(36);
    expect(new Set(COMPONENTS.map((component) => component.tag)).size).toBe(36);
    expect(componentDirectories()).toHaveLength(36);
  });

  it("covers every public custom event exactly once", () => {
    const expected = publicEventNames();
    const actual = EVENTS.map((event) => event.name);

    expect(new Set(expected).size).toBe(58);
    expect(new Set(actual)).toEqual(new Set(expected));
    expect(actual).toHaveLength(58);
  });
});
