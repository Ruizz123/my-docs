---
# 这是文章的标题
title: 照片墙
# 你可以自定义封面图片
cover: /assets/images/baobao.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 3
# 设置作者
author: rui
# 设置写作时间
date: 2024-07-31
# 一个页面可以有多个分类
category:
  - 照片
# 一个页面可以有多个标签
tag:
  - 甜妹
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 晨颖宝宝
# 你可以自定义版权信息
copyright: 有版权
---

<!-- more -->

## 页面标题

一面照片墙

## 页面信息

晨颖宝宝的照片墙

## 页面内容

<PhotoWall />

<script setup>
import PhotoWall from "@PhotoWall";
</script>

---

- 一个卡片:

  ```component VPCard
  title: 晨颖宝宝
  desc: 那晚的风吹散了我们的爱
  logo: /assets/images/baobao.jpg
  background: rgba(253, 230, 138, 0.15)
  ```
