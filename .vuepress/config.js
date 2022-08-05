module.exports = {
    base: '/',
    title: 'Pterodactyl-China',
    description: '翼龙是一个使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。翼龙在设计时考虑了安全性，在隔离的 Docker 镜像中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。',
    locales: {
      '/': {
        lang: 'zh-CN',
      }
    },
    plugins: [
        /*['@vuepress/google-analytics', {
            ga: 'UA-87324178-3'
        },],*/
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['vuepress-plugin-container', {
            type: 'warning',
            defaultTitle: '警告',
        }],
        ['vuepress-plugin-container', {
            type: 'tip',
            defaultTitle: '提示',
        }],
        ['vuepress-plugin-container', {
            type: 'danger',
            defaultTitle: '危险',
        }],
        ['vuepress-plugin-sitemap', {
            hostname: 'https://pterodactyl.top',
        }],
        ['tabs'],
    ],
    configureWebpack: {
        serve: {
            hot: {
                port: 9091,
            },
        },
    },
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
        ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#0e4688' }],
        ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
        ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
        ['meta', { name: 'theme-color', content: '#0e4688' }],
        ['meta', { name: 'keywords', content: '翼龙,翼龙面板,面板汉化,汉化,中文,中文汉化,面板,翼龙汉化,翼龙中国,翼手龙,汉化版,pterodactyl-china,china,pterodactyl,教程,翼龙最新版,翼龙官网,翼龙中国官网,官网' }],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-KWVNS6PXK2' }],
        ['script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KWVNS6PXK2');
        `],
    ],
    themeConfig: {
        repo: 'pterodactyl-china/panel',
        docsRepo: 'pterodactyl-china/documentation',
        repoLabel: 'GitHub',
        editLinkText: '帮助我们改进此页面。',
        editLinks: true,
        logo: '/logos/pterry.svg',
        nav: [
            {
                text: '文档',
                link: '/project/introduction.md',
            },
            {
                text: '社区指南',
                link: '/community/about.md',
            },
            {
                text: '获取帮助',
                link: 'https://kook.top/0Grsf5'
            },
            {
                text: 'API',
                link: 'https://dashflo.net/docs/api/pterodactyl/v1/'
            }
        ],
        sidebar: {
            '/community/': [
                {
                    title: '社区指南',
                    collapsable: false,
                    children: [
                        '/community/about.md',
                    ]
                },
                {
                    title: '面板安装',
                    collapsable: false,
                    children: [
                        '/community/installation-guides/panel/centos7.md',
                        '/community/installation-guides/panel/centos8.md',
                        '/community/installation-guides/panel/debian9.md',
                        '/community/installation-guides/panel/debian10.md',
                    ]
                },
                {
                    title: 'Wings 安装',
                    collapsable: false,
                    children: [
                        '/community/installation-guides/wings/centos7.md',
                        '/community/installation-guides/wings/centos8.md',
                        '/community/installation-guides/wings/debian9.md',
                        '/community/installation-guides/wings/debian10.md',
                    ]
                },
                {
                    title: '创建预设',
                    collapsable: false,
                    children: [
                        '/community/config/eggs/creating_a_custom_egg.md',
                        '/community/config/eggs/creating_a_custom_image.md',
                    ],
                },
                {
                    title: '游戏配置',
                    collapsable: false,
                    children: [
                        '/community/games/minecraft.md',
                    ],
                },
                {
                    title: '教程',
                    collapsable: false,
                    children: [
                        '/community/config/nodes/add_node.md',
                        '/community/tutorials/artisan.md',
                    ],
                },
                {
                    title: '定制',
                    collapsable: false,
                    children: [
                        '/community/customization/panel.md',
                        '/community/customization/wings.md',
                    ],
                },
            ],
            '/': [
                {
                    title: '项目信息',
                    collapsable: false,
                    children: [
                        '/project/introduction.md',
                        '/project/about.md',
                        '/project/terms.md',
                        '/project/community.md',
                    ]
                },
                {
                    title: '面板 (前端)',
                    collapsable: false,
                    path: '/panel/',
                    currentVersion: '1.0',
                    versions: [
                        {
                            title: '1.10',
                            name: '1.0',
                            status: 'stable',
                            children: [
                                '/getting_started',
								'/btpanel_getstarted',
                                '/webserver_configuration',
                                '/additional_configuration',
                                '/updating',
                                '/troubleshooting',
                                '/legacy_upgrade',
                            ]
                        }
                    ]
                },
                {
                    title: 'Wings (后端)',
                    collapsable: false,
                    path: '/wings/',
                    currentVersion: '1.0',
                    versions: [
                        {
                            title: '1.7',
                            name: '1.0',
                            status: 'stable',
                            children: [
                                '/installing',
                                '/upgrading',
                                '/migrating',
                                '/configuration',
                            ]
                        }
                    ]
                },
                {
                    title: '教程',
                    collapsable: false,
                    children: [
                        '/tutorials/mysql_setup.md',
                        '/tutorials/creating_ssl_certificates.md',
                    ],
                },
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guides/mounts.md',
                    ],
                },
                {
                    title: '开发与运营',
                    collapsable: true,
                    children: [
                        '/ops/publish_release.md',
                    ],
                },
            ],
        },
    },
    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss')('./tailwind.js'),
            require('precss'),
            require('autoprefixer'),
            require('cssnano'),
        ]
    },
};
