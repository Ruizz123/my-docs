import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "照片",
      icon: "laptop-code",
      prefix: "picture/",
      link: "picture/",
      children: "structure",
    },
    {
      text: "视频",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
  ],
});

