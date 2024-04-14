import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: '文档',
    link: '/project/introduction',
  },
  {
    text: '社区指南',
    link: '/community/about.md',
  },
  {
    text: '获取帮助',
    children: [
      {
        text: '翼龙中国社区(推荐)',
        link: 'https://bbs.pterodactyl.top',
      },
      {
        text: 'KOOK',
        link: 'https://kook.top/0Grsf5',
      }
    ],
    link: 'https://bbs.pterodactyl.top'
  },
  {
    text: 'API',
    link: 'https://dashflo.net/docs/api/pterodactyl/v1/'
  },
]);
