import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sourceAliases } from "../../vite.source-aliases";

export default defineConfig({
  resolve:
    process.env.SUPER_CONTRACT_SOURCE === "1"
      ? { alias: sourceAliases }
      : undefined,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("super-"),
        },
      },
    }),
  ],
});
