import { defineConfig } from "vite";
import { sourceAliases } from "./vite.source-aliases";

/**
 * Root Vite config, used only by the visual-regression harness. It resolves
 * workspace packages to source so screenshots always reflect the working tree
 * instead of a stale `dist` build.
 */
export default defineConfig({
  resolve: {
    alias: sourceAliases,
  },
});
