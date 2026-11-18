import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

/**
 * Root Vite config, used only by the visual-regression harness. It resolves
 * workspace packages to source so screenshots always reflect the working tree
 * instead of a stale `dist` build.
 */
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^yxzq-element$/,
        replacement: fileURLToPath(new URL("./packages/core/index.ts", import.meta.url)),
      },
      {
        find: /^yxzq-element\/(.+)$/,
        replacement: fileURLToPath(new URL("./packages/core/$1.ts", import.meta.url)),
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
        replacement: fileURLToPath(new URL("./packages/utils/index.ts", import.meta.url)),
      },
    ],
  },
});
