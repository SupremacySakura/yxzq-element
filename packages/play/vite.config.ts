import { defineConfig } from "vite";
import { sourceAliases } from "../../vite.source-aliases";

export default defineConfig({
  resolve:
    process.env.SUPER_CONTRACT_SOURCE === "1"
      ? { alias: sourceAliases }
      : undefined,
});
