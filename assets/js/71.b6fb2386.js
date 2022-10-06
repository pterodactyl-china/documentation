(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{423:function(t,a,s){"use strict";s.r(a);var e=s(48),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"更新面板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新面板"}},[t._v("#")]),t._v(" 更新面板")]),t._v(" "),s("p",[t._v("本文档涵盖了 "),s("code",[t._v("1.x")]),t._v(" 系列版本中的更新过程。这意味着例如从 "),s("code",[t._v("1.5.0")]),t._v(" 更新到 "),s("code",[t._v("1.6.0")]),t._v("。"),s("strong",[t._v("请勿使用本指南从 "),s("code",[t._v("0.7")]),t._v(" 开始升级，这会导致你升级失败。")])]),t._v(" "),s("h2",{attrs:{id:"面板的版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面板的版本要求"}},[t._v("#")]),t._v(" 面板的版本要求")]),t._v(" "),s("p",[t._v("翼龙面板的每个版本都有相应最低版本的 Wings。请参阅下表了解有关这些对应版本。在大多数情况下，您的 Wings 版本应该与您的面板版本相匹配。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("面板版本")]),t._v(" "),s("th",[t._v("Wings 版本")]),t._v(" "),s("th",[t._v("支持状况")]),t._v(" "),s("th",[t._v("PHP 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1.0.x")]),t._v(" "),s("td",[t._v("1.0.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.3, 7.4")])]),t._v(" "),s("tr",[s("td",[t._v("1.1.x")]),t._v(" "),s("td",[t._v("1.1.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.3, 7.4")])]),t._v(" "),s("tr",[s("td",[t._v("1.2.x")]),t._v(" "),s("td",[t._v("1.2.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.3, 7.4")])]),t._v(" "),s("tr",[s("td",[t._v("1.3.x")]),t._v(" "),s("td",[t._v("1.3.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0")])]),t._v(" "),s("tr",[s("td",[t._v("1.4.x")]),t._v(" "),s("td",[t._v("1.4.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0")])]),t._v(" "),s("tr",[s("td",[t._v("1.5.x")]),t._v(" "),s("td",[t._v("1.4.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0")])]),t._v(" "),s("tr",[s("td",[t._v("1.6.x")]),t._v(" "),s("td",[t._v("1.4.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0")])]),t._v(" "),s("tr",[s("td",[t._v("1.7.x")]),t._v(" "),s("td",[t._v("1.5.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0")])]),t._v(" "),s("tr",[s("td",[t._v("1.8.x")]),t._v(" "),s("td",[t._v("1.6.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0, 8.1")])]),t._v(" "),s("tr",[s("td",[t._v("1.9.x")]),t._v(" "),s("td",[t._v("1.6.x")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("7.4, 8.0, 8.1")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("1.10.x")])]),t._v(" "),s("td",[s("strong",[t._v("1.7.x")])]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[s("strong",[t._v("8.1")]),t._v(" (不推荐使用 7.4 和 8.0)")])])])]),t._v(" "),s("h2",{attrs:{id:"更新依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖"}},[t._v("#")]),t._v(" 更新依赖")]),t._v(" "),s("ul",[s("li",[t._v("PHP "),s("code",[t._v("7.4")]),t._v(", "),s("code",[t._v("8.0")]),t._v(" 或 "),s("code",[t._v("8.1")]),t._v(" (推荐)")]),t._v(" "),s("li",[t._v("Composer "),s("code",[t._v("2.X")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("受支持的 PHP 最低版本已更改")]),t._v(" "),s("p",[s("strong",[t._v("对 PHP 7.4 和 8.0 将被弃用")]),t._v("。请尽快升级 —— PHP 8.1 将是未来版本中唯一受支持的版本。")])]),t._v(" "),s("p",[s("strong",[t._v("在继续之前")]),t._v("，请确保您的系统和网络服务器配置已通过运行 "),s("code",[t._v("php -v")]),t._v(" 和 "),s("code",[t._v("composer --version")]),t._v(" 来确认您的服务器已在 PHP 7.4 和 Composer 2 或更高的版本。您应该会看到类似于以下输出的结果。如果您没有看到 PHP 7.4 和 Composer 2 或更高的版本，您将需要按照我们的 "),s("RouterLink",{attrs:{to:"/guides/php_upgrade.html"}},[t._v("PHP 升级指南")]),t._v(" 进行升级，然后再返回此文档。")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vagrant@pterodactyl:~/app$ php -v\nPHP 8.1.5 (cli) (built: Apr 21 2022 10:32:13) (NTS)\nCopyright (c) The PHP Group\nZend Engine v4.1.5, Copyright (c) Zend Technologies\n    with Zend OPcache v8.1.5, Copyright (c), by Zend Technologies\n\nvagrant@pterodactyl:~/app$ composer --version\nComposer version 2.3.5 2022-04-13 16:43:00\n")])])]),s("h2",{attrs:{id:"自动升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动升级"}},[t._v("#")]),t._v(" 自动升级")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("由于我们使用的一些依赖项存在问题，目前无法进行自动升级。请暂时执行人工升级的方式，直到此问题得到解决。")])]),t._v(" "),s("h2",{attrs:{id:"人工升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#人工升级"}},[t._v("#")]),t._v(" 人工升级")]),t._v(" "),s("p",[t._v("如果您不想执行自动升级，或者想要参考升级步骤，您可以按照下面的文档进行操作。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("如果您已成功执行自动升级，则无需在此页面上执行任何其他操作。")])]),t._v(" "),s("h3",{attrs:{id:"进入维护模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入维护模式"}},[t._v("#")]),t._v(" 进入维护模式")]),t._v(" "),s("p",[t._v("每当您执行更新时，您应该确保将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作，你也能更好的去更新。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/pterodactyl\n\nphp artisan down\n")])])]),s("h3",{attrs:{id:"下载更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载更新"}},[t._v("#")]),t._v(" 下载更新")]),t._v(" "),s("p",[t._v("更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。\n"),s("br"),t._v("稳定版和RC版并不同步，如果想实时体验最新版可以选择RC版。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("官方版")])]),t._v(" "),s("th",[s("strong",[t._v("稳定版")])]),t._v(" "),s("th",[s("strong",[t._v("RC版")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl-china/pterodactyl-chinese-stable?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})]),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases"}})])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[s("img",{attrs:{src:"https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=%E6%9C%80%E6%96%B0%E9%A2%84%E5%8F%91%E5%B8%83%E7%89%88%E6%9C%AC",alt:"GitHub Releases pre-releases"}})])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("使用翼龙中国稳定版程序")]),t._v(" "),s("p",[t._v("翼龙中国稳定版 是在 翼龙官方最新的发行版 基础上进行的汉化，若阁下喜欢稳定版，则可使用以下命令下载稳定版程序")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/pterodactyl-china/pterodactyl-chinese-stable/releases/latest/download/panel.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzv\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 Fastgit 提供的国内反向代理来拉取")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://hub.fastgit.xyz/pterodactyl-china/pterodactyl-chinese-stable/releases/latest/download/panel.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzv\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("使用翼龙中国RC版程序")]),t._v(" "),s("p",[t._v("翼龙中国RC版 是在 翼龙官方上游仓库 develop 分支上实时同步 进行的汉化，包含了"),s("strong",[t._v("翼龙官方和翼龙中国最新的功能更新/修复")]),t._v("，RC版的发行版都是没有问题的。若阁下想体验最新功能，则可使用以下命令下载RC版程序")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzv\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 Fastgit 提供的国内反向代理来拉取")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://hub.fastgit.xyz/pterodactyl-china/panel/releases/latest/download/panel.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzv\n")])])])]),t._v(" "),s("p",[t._v("下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" -R "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" storage/* bootstrap/cache\n")])])]),s("h3",{attrs:{id:"更新依赖-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖-2"}},[t._v("#")]),t._v(" 更新依赖")]),t._v(" "),s("p",[t._v("下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("composer "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-dev --optimize-autoloader\n")])])]),s("h3",{attrs:{id:"清除编译后的模板缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除编译后的模板缓存"}},[t._v("#")]),t._v(" 清除编译后的模板缓存")]),t._v(" "),s("p",[t._v("您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan view:clear\nphp artisan config:clear\n")])])]),s("h3",{attrs:{id:"数据库更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库更新"}},[t._v("#")]),t._v(" 数据库更新")]),t._v(" "),s("p",[t._v("您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，"),s("em",[t._v("永远不要编辑我们发布的核心预设")]),t._v("！ 它们将被此更新过程所覆盖。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan migrate --seed --force\n")])])]),s("h3",{attrs:{id:"设置权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置权限"}},[t._v("#")]),t._v(" 设置权限")]),t._v(" "),s("p",[t._v("最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 "),s("code",[t._v("www-data")]),t._v("，但可能因系统而异 — 有时是 "),s("code",[t._v("nginx")]),t._v("、"),s("code",[t._v("caddy")]),t._v("、"),s("code",[t._v("apache")]),t._v("，甚至是 "),s("code",[t._v("nobody")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果使用 NGINX 或 Apache (并且不在CentOS上)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R www-data:www-data /var/www/pterodactyl/*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果在 CentOS 上使用 NGINX")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R nginx:nginx /var/www/pterodactyl/*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果在 CentOS 上使用 Apache")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R apache:apache /var/www/pterodactyl/*\n")])])]),s("h3",{attrs:{id:"重启工作队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启工作队列"}},[t._v("#")]),t._v(" 重启工作队列")]),t._v(" "),s("p",[s("em",[t._v("每次")]),t._v(" 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan queue:restart\n")])])]),s("h3",{attrs:{id:"退出维护模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出维护模式"}},[t._v("#")]),t._v(" 退出维护模式")]),t._v(" "),s("p",[t._v("现在所有内容都已更新，您需要退出维护模式，以便面板可以继续运行并提供服务。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan up\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/wings/1.0/upgrading.html"}},[t._v("最后一步：升级 Wings")])],1)])}),[],!1,null,null,null);a.default=v.exports}}]);