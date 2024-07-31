import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "我的主页",
  description: "个人信息",

  theme,
  alias: {
    "@PhotoWall": path.resolve(__dirname, "components/PhotoWall.vue"),
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
