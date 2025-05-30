---
layout: home

title: 笔墨星河Doc
titleTemplate: 笔墨星河档站

hero:
  name: ClouderyDoc
  text: 笔墨星河档站
  tagline: 为各项方面提供文档服务
  image:
    src: /logo-with-shadow.png
    alt: Vite
  actions:
    - theme: brand
      text: 开始
      link: /docs/

features:
  - icon: ⚡️
    title: 极速的网页加载
    details: 我们使用VitePress服务并构建网页，加速网页!
  - icon: 💡
    title: 即刻加入
    details: 你可以在云术官网加入我们的团队，只要审核通过!
  - icon: 🛠️
    title: 丰富的项目
    details: 游戏、前端、后端，应有尽有!
---

<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  fetchReleaseTag()
})
</script>