import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Super Components",
  description: "一套由 Lit 驱动的手绘风格 Web Component 组件库",
  base: "/yxzq-element/",
  lang: "zh-CN",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M12 13c10-6 29-6 39 1 4 10 3 28-1 38-10 4-29 5-39-1-4-10-4-29 1-38Z' fill='%23fffdf5' stroke='%23292524' stroke-width='4'/%3E%3Cpath d='M43 21c-5-4-18-3-20 3-3 8 20 4 18 14-2 8-17 8-22 2' fill='none' stroke='%232563eb' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E",
      },
    ],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("super-"),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始使用", link: "/guide/getting-started" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "开始使用", link: "/guide/getting-started" },
        ],
      },
      {
        text: "组件",
        items: [
          { text: "Button 按钮", link: "/components/button" },
          { text: "Input 输入框", link: "/components/input" },
        ],
      },
    ],
    outline: {
      label: "本页目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
