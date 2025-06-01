import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
  title: '笔墨星河文档站',
  description: '笔墨星河文档站',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'TPLGJZGR',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: '简体中文' },
  },

  themeConfig: {
    logo: '/logo.svg',

    outline: {
      label: '本页目录'
    },

    socialLinks: [
    ],



    // Using WwAds for China
    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      copyright:
        'Copyright 2022-2024 Cloudery , Std.'
    },

    nav: [
      { text: '指引', link: '/docs/', activeMatch: '/docs/' },
      { text: '团队', link: '/team' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: '指引&信息&其它',
          items: [
            {
                text: '开始',
                link: '/docs/'
            },
            {
              text: 'api配置',
              link: '/docs/api/',
              items: [
                {
                    text: 'deepseek',
                    link: '/docs/api/deepseek.md',
                },
                {
                    text: '硅基流动',
                    link: '/docs/api/siliconflow.md',
                },
                {
                    text: 'OpenRouter(默认模型)',
                    link: '/docs/api/OpenRouter.md',
                },
                {
                    text: 'gemini',
                    link: '/docs/api/gemini.md',
                }
              ]
            },
            {
              text: '下载',
              link: '/docs/download/',
              items: [
                {
                    text: '版本介绍',
                    link: '/docs/download/introduction.md',
                },
                {
                    text: '预览版',
                    link: '/docs/download/preview.md',
                }
              ]
            },
            {
              text: 'ai参考输出实例',
              link: '/docs/example/',
              items: [
                {
                    text: 'DeepSeek V3',
                    link: '/docs/example/deepseekv3.md',
                },
                {
                    text: 'DeepSeek R1',
                    link: '/docs/example/deepseekr1.md',
                },
                {
                    text: 'Gemini 2.0 Flash',
                    link: '/docs/example/gemini2f.md',
                },
                {
                    text: 'Gemini 2.5 Pro Preview 05-06',
                    link: '/docs/example/gemini25p05-06.md',
                },
                {
                    text: 'Gemini 2.5 Flash Preview 05-20',
                    link: '/docs/example/gemini25fp05-20.md',
                },
                {
                    text: 'ChatGML(智谱)',
                    link: '/docs/example/chatgml.md',
                },
                {
                    text: 'Qwen3-235B-A22B',
                    link: '/docs/example/qwen3-235b-a22b.md',
                }
              ]
            }
          ],
        },
      ]
    }
  },
})
