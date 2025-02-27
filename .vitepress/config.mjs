import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-vitepress/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "hack的知识库", // 站点首页标题
    logo: "knowledge.svg",  // 站点 logo
    nav: [
      { text: 'Home', link: '/' },
      { text: '经验分享', items:[
        { text: '会计核算', link: '/markdown-examples' },
        { text: '税务管理', link: '/markdown-examples' },
        { text: '资金管理', link: '/markdown-examples' }
      ] },
      { text: '法律法规', items:[
        { text: '会计法规', link: '/docs/法律法规/企业会计准则/企业会计准则第1号——存货.md' },
        { text: '税收法律', link: '/docs/法律法规/税收法律/税法' },
        { text: '民商法规', link: '/markdown-examples' }
      ] },
      { text: '制度建设', link: '/about' }
    ],
    sidebar: {
      '/docs/法律法规/企业会计准则/': [
        {
          text: '企业会计准则',
          items: [
            { text: '企业会计准则第1号-存货', link: '/docs/法律法规/企业会计准则/企业会计准则第1号——存货.md' }
          ]
        }
      ],
      '/docs/法律法规/税收法律/': [
        {
          text: '税收法律',
          items: [
            { text: '税法', link: '/docs/法律法规/税收法律/税法' }
          ]
        }
      ],
      '/docs/法律法规/民商法规/': [
        {
          text: '民商法规',
          items: [
            { text: '民商法规示例', link: '/docs/法律法规/民商法规/民商法规示例.md' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})



