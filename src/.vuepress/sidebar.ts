import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/': [
    {
      text: '项目信息',
      children: [
        '/project/introduction.md',
        '/project/about.md',
        '/project/terms.md',
        '/project/community.md',
      ]
    },
    {
      text: '面板 (前端)',
      children: [
        '/panel/1.0/getting_started',
        '/panel/1.0/btpanel_getstarted',
        '/panel/1.0/docker_getstarted',
        '/panel/1.0/webserver_configuration',
        '/panel/1.0/additional_configuration',
        '/panel/1.0/updating',
        '/panel/1.0/troubleshooting',
        '/panel/1.0/legacy_upgrade',
      ]
    },
    {
      text: 'Wings (后端)',
      children: [
        '/wings/1.0/installing',
        '/wings/1.0/upgrading',
        '/wings/1.0/migrating',
        '/wings/1.0/configuration',
      ]
    },
    {
      text: '教程',
      children: [
        '/tutorials/mysql_setup.md',
        '/tutorials/creating_ssl_certificates.md',
      ],
    },
    {
      text: '指南',
      children: [
        '/guides/mounts.md',
      ],
    },
  ],
  '/community/': [
    {
      text: '社区指南',
      children: [
        '/community/about.md',
      ]
    },
    {
      text: '面板安装',
      children: [
        '/community/installation-guides/panel/centos7.md',
        '/community/installation-guides/panel/centos8.md',
        '/community/installation-guides/panel/debian.md',
      ]
    },
    {
      text: 'Wings 安装',
      children: [
        '/community/installation-guides/wings/centos7.md',
        '/community/installation-guides/wings/centos8.md',
        '/community/installation-guides/wings/debian.md',
      ]
    },
    {
      text: '创建预设',
      children: [
        '/community/config/eggs/creating_a_custom_egg.md',
        '/community/config/eggs/creating_a_custom_image.md',
      ],
    },
    {
      text: '游戏配置',
      children: [
        '/community/games/minecraft.md',
      ],
    },
    {
      text: '教程',
      children: [
        '/community/config/nodes/add_node.md',
        '/community/tutorials/artisan.md',
      ],
    },
    {
      text: '定制',
      children: [
        '/community/customization/panel.md',
        '/community/customization/wings.md',
      ],
    },
  ],
  // "/": [
  //   "",
  //   {
  //     text: "文档",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文档",
  //     icon: "book",
  //     prefix: "guide/",
  //     children: "structure",
  //   },
  //   {
  //     text: "幻灯片",
  //     icon: "person-chalkboard",
  //     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  //   },
  // ],
});
