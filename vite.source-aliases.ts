import { fileURLToPath } from "node:url";
import type { AliasOptions } from "vite";

/**
 * Resolve workspace packages to source for harnesses that must observe the
 * working tree before the library has been rebuilt.
 */
export const sourceAliases: AliasOptions = [
  {
    find: /^yxzq-element$/,
    replacement: fileURLToPath(
      new URL("./packages/core/index.ts", import.meta.url),
    ),
  },
  {
    find: /^yxzq-element\/(.+)$/,
    replacement: fileURLToPath(
      new URL("./packages/core/$1.ts", import.meta.url),
    ),
  },
  {
    find: /^@yxzq-element\/components$/,
    replacement: fileURLToPath(
      new URL("./packages/components/index.ts", import.meta.url),
    ),
  },
  {
    find: /^@yxzq-element\/components\/(.+)$/,
    replacement: fileURLToPath(
      new URL("./packages/components/$1/index.ts", import.meta.url),
    ),
  },
  {
    find: /^@yxzq-element\/utils$/,
    replacement: fileURLToPath(
      new URL("./packages/utils/index.ts", import.meta.url),
    ),
  },
];
