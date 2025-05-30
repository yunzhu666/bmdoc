import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
  title: 'ClouderyDoc',
  description: '云术工作室文档站',
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
                text: 'api配置方法',
                link: '/docs/api.md',
            }
          ],
        },
      ]
    }
  },
})
