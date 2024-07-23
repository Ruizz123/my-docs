import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "我的主页",
  description: "个人信息",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

