import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Pterodactyl-China",
  description: "翼龙是一个使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。翼龙在设计时考虑了安全性，在隔离的 Docker 镜像中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。",

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
  
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@snippets/, path.resolve(__dirname, '../.snippets')),
    },
  },

  plugins: [
    googleAnalyticsPlugin({
      id: "G-KWVNS6PXK2",
    }),
  ],

});
