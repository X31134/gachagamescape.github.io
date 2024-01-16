import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GachagameScape",
  description: "男性向后宫手游批评空间",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '开始阅读', link: '/开始阅读' },
          { text: '投稿', link: '/投稿' }
        ]
      },
      {
        text: '游戏列表',
        items: [
          { text: 'グランブルーファンタジー(碧蓝幻想)', link: '/グランブルーファンタジー(碧蓝幻想)' },
          { text: 'ブルーアーカイブ(碧蓝档案)', link: '/ブルーアーカイブ' },
          { text: '尘白禁区', link: '/尘白禁区' },
          { text: '战双帕弥什', link: '/战双帕弥什' },
          { text: '蔚蓝档案', link: '/蔚蓝档案' },
          { text: '胜利女神：妮姬', link: '/Nikke' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gachagamescape/gachagamescape.github.io' }
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/gachagamescape/gachagamescape.github.io/edit/main/docs/:path',
    },
  },

  lastUpdated: true,
})
