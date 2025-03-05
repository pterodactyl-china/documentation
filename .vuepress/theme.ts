import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://pterodactyl.top",

  // author: {
  //   name: "飒爽师叔",
  //   url: "https://vlssu.com",
  // },

  license: "MIT",

  icon: { 
    assets: "fontawesome-with-brands",
  },

  logo: "/logos/pterry.svg",
  navTitle: "Pterodactyl-China",

  repo: "pterodactyl-china/panel",
  docsRepo: "pterodactyl-china/documentation",
  docsBranch: "master",

  pageInfo: ["Date", "ReadingTime"],

  // docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  // footer: "Copyright © 2015 - 2018 Dane Everitt & Contributors | which Sinicizated by Pterodactyl-China",
  copyright: "MIT Licensed | Copyright © 2022 - 2025 Pterodactyl-China",
  displayFooter: true,

  // 加密配置
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  markdown: {
    revealjs: true,
    // revealJs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    tabs: true,
    codeTabs: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    align: true,
    attrs: true,
    component: true,
    include: true,
    mark: true,
    demo: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,

    // 在启用之前安装 chart.js
    // chart: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // gfm requires mathjax-full to provide tex support
    // gfm: true,

    // 在启用之前安装 katex
    // katex: true,

    // 在启用之前安装 mathjax-full
    // mathjax: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {

    docsearch: {
      appId: "REVULCP1HB",
      apiKey: "379480043ba29072ada041c0fa8ef70a",
      indexName: "pterodactyl",
    },
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    components: {
      components: ["PDF", "BiliBili", "Badge", "VPCard", "SiteInfo"],
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/favicons/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/favicons/apple-touch-icon.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/favicons/mstile-150x150.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        // shortcuts: [
        //   {
        //     name: "Demo",
        //     short_name: "Demo",
        //     url: "/demo/",
        //     icons: [
        //       {
        //         src: "/favicons/guide-maskable.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //     ],
        //   },
        // ],
      },
    },
  },
});
