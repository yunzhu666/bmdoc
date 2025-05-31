---
layout: home

title: Galaxy of Ink & Brush Doc
titleTemplate: 笔墨星河文档站

hero:
  name: Galaxy of Ink & Brush
  text: 笔墨星河文档站
  tagline: 为你提供使用文档服务
  image:
    src: /logo-with-shadow.png
    alt: Vite
  actions:
    - theme: brand
      text: 开始
      link: /docs/

features:
  - icon: ✍️
    title: 🤖 AI 智能辅助
    details: AI 帮你润色文笔、生成剧情、塑造角色，让创作更轻松！
  - icon: 🧩
    title: 🎭 角色与剧情管理
    details: 可视化角色、情节、风格卡片，让复杂故事一目了然。
  - icon: 📥
    title: 🛠️ 多格式导出
    details: 支持 PDF、TXT、Word 等格式，方便出版或分享。
---

<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  fetchReleaseTag()
})
</script>
