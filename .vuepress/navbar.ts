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
        text: 'QQ 频道',
        link: 'https://pd.qq.com/s/6zt1zz145',
      }
    ],
    link: 'https://bbs.pterodactyl.top'
  },
  {
    text: '预设下载',
    children: [
      {
        text: '翼龙中国',
        link: 'https://eggs.pterodactyl.top',
      },
      {
        text: '翼龙官方',
        link: 'https://eggs.pterodactyl.io',
      }
    ]
  },
  {
    text: 'API',
    link: 'https://dashflo.net/docs/api/pterodactyl/v1/'
  },
]);
