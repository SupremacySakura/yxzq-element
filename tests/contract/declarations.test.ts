import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { COMPONENTS, EVENTS } from "./manifest";

const root = resolve(import.meta.dirname, "../..");

const vueDeclarations = readFileSync(
  resolve(root, "examples/vue/src/custom-elements.d.ts"),
  "utf8",
);
const reactDeclarations = readFileSync(
  resolve(root, "examples/react/src/custom-elements.d.ts"),
  "utf8",
);

describe("consumer declaration coverage", () => {
  it.each(COMPONENTS)(
    "Vue and React declare $tag",
    ({ tag }) => {
      expect(vueDeclarations).toContain(`"${tag}"`);
      expect(reactDeclarations).toContain(`"${tag}"`);
    },
  );

  it.each(EVENTS)(
    "Vue and React type $name",
    ({ name }) => {
      expect(vueDeclarations).toContain(`"${name}": CustomEvent<`);
      expect(reactDeclarations).toContain(
        `"on${name}"?: CustomEventHandler<`,
      );
    },
  );
});
