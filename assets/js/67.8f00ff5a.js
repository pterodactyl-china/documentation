(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{419:function(a,t,s){"use strict";s.r(t);var e=s(48),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"旧版升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旧版升级"}},[a._v("#")]),a._v(" 旧版升级")]),a._v(" "),s("p",[a._v("本升级指南用于"),s("strong",[a._v("从 0.7.X 升级到 1.3.x")]),a._v("。如果您尝试在 1.X 面板上进行升级，请"),s("RouterLink",{attrs:{to:"/panel/1.0/updating.html"}},[a._v("改用本指南")]),a._v("。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。")],1),a._v(" "),s("h2",{attrs:{id:"进入维护模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入维护模式"}},[a._v("#")]),a._v(" 进入维护模式")]),a._v(" "),s("p",[a._v("在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作。执行命令时，请确保您位于您的面板根目录中，列如 "),s("code",[a._v("/var/www/pterodactyl")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将面板置于维护模式并拒绝用户访问")]),a._v("\nphp artisan down\n")])])]),s("h2",{attrs:{id:"更新依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖"}},[a._v("#")]),a._v(" 更新依赖")]),a._v(" "),s("p",[a._v("在执行此升级之前，您需要确保您的系统依赖项是最新的。请参考以下列表以确保您拥有所有必需的版本。")]),a._v(" "),s("ul",[s("li",[a._v("PHP "),s("code",[a._v("8.0")]),a._v(" 或 "),s("code",[a._v("8.1")]),a._v("（推荐），带有以下扩展名："),s("code",[a._v("cli")]),a._v("、"),s("code",[a._v("openssl")]),a._v("、"),s("code",[a._v("gd")]),a._v("、"),s("code",[a._v("mysql")]),a._v("、"),s("code",[a._v("PDO")]),a._v("、"),s("code",[a._v("mbstring")]),a._v(" "),s("code",[a._v("tokenizer")]),a._v("、"),s("code",[a._v("bcmath")]),a._v("、"),s("code",[a._v("xml")]),a._v(" 或 "),s("code",[a._v("dom")]),a._v("、"),s("code",[a._v("curl")]),a._v("、"),s("code",[a._v("zip")]),a._v(" 和 "),s("code",[a._v("fpm")]),a._v(" 如果你打算使用 NGINX。请参阅我们的 "),s("RouterLink",{attrs:{to:"/guides/php_upgrade.html"}},[a._v("升级 PHP指南")]),a._v(" 了解详细信息。")],1),a._v(" "),s("li",[a._v("Composer v2 ("),s("code",[a._v("composer self-update --2")]),a._v(")")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Nginx")]),a._v(" "),s("p",[a._v("如果你升级你的 PHP 版本并且使用 nginx 作为你的网络服务器，你将不得不更新你的 nginx 的 "),s("code",[a._v("pterodactyl.conf")]),a._v(" 配置中 "),s("code",[a._v("fastcgi_pass")]),a._v(" 的值来使用正确的 "),s("code",[a._v("php-fpm")]),a._v(" 套接字。")])]),a._v(" "),s("ul",[s("li",[a._v("MySQL "),s("code",[a._v("5.7.22")]),a._v(" 或更高版本（推荐 MySQL "),s("code",[a._v("8")]),a._v("） "),s("strong",[a._v("或者")]),a._v(" MariaDB "),s("code",[a._v("10.2")]),a._v(" 或更高版本。")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("请认真地仔细检查您的数据库版本")]),a._v(" "),s("p",[a._v("请确保您运行的是上面列出的正确版本 MariaDB 或 MySQL！ 否则，当您尝试迁移时，会导致你遇到本不应该出现的错误。")]),a._v(" "),s("p",[a._v("以前的文档（也就是以前的版本）可能让您安装了 MariaDB 10.1，而该版本的翼龙 "),s("em",[a._v("是无法使用的")]),a._v("。")])]),a._v(" "),s("h2",{attrs:{id:"获取更新文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取更新文件"}},[a._v("#")]),a._v(" 获取更新文件")]),a._v(" "),s("p",[a._v("更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。现在您要确保位于翼龙根目录下，例如 "),s("code",[a._v("/var/www/pterodactyl")]),a._v(" ，因为下面的命令会自动将存档解压到您当前的文件夹中。")]),a._v(" "),s("p",[a._v("我们将会删除 "),s("code",[a._v("app/")]),a._v(" 目录。由于我们处理安装和升级的方式，删除的文件并不总是能被正确检测到，因此，轻易的在此位置上打包会导致一些迷惑行为。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这不会影响您的任何设置或服务器。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L -o panel.tar.gz https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -Lo panel.tar.gz https://mirror.ghproxy.com/https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" app public resources -depth "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -n -1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -Fv "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -tf panel.tar.gz"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载更新文件并删除存档文件。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzvf panel.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f panel.tar.gz\n")])])]),s("p",[a._v("下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" -R "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" storage/* bootstrap/cache\n")])])]),s("h2",{attrs:{id:"更新依赖-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新依赖-2"}},[a._v("#")]),a._v(" 更新依赖")]),a._v(" "),s("p",[a._v("下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("composer "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --no-dev --optimize-autoloader\n")])])]),s("h2",{attrs:{id:"清除编译后的模板缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除编译后的模板缓存"}},[a._v("#")]),a._v(" 清除编译后的模板缓存")]),a._v(" "),s("p",[a._v("您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan view:clear\nphp artisan config:clear\n")])])]),s("h2",{attrs:{id:"数据库更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库更新"}},[a._v("#")]),a._v(" 数据库更新")]),a._v(" "),s("p",[a._v("您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，"),s("em",[a._v("永远不要编辑我们发布的核心预设")]),a._v("！ 它们将被此更新过程所覆盖。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),s("p",[a._v("如果您使用了允许在 "),s("code",[a._v("0.7")]),a._v(" 版本上进行服务器传输的自定义插件，您必须**删除或重命名 "),s("code",[a._v("server_transfers")]),a._v(" 表，然后再继续。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan migrate --force\nphp artisan db:seed --force\n")])])]),s("h2",{attrs:{id:"设置权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置权限"}},[a._v("#")]),a._v(" 设置权限")]),a._v(" "),s("p",[a._v("最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 "),s("code",[a._v("www-data")]),a._v("，但可能因系统而异 — 有时是 "),s("code",[a._v("nginx")]),a._v("、"),s("code",[a._v("caddy")]),a._v("、"),s("code",[a._v("apache")]),a._v("，甚至是 "),s("code",[a._v("nobody")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果使用 NGINX 或 Apache (并且不在CentOS上)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R www-data:www-data *\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果在 CentOS 上使用 NGINX")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R nginx:nginx *\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果在 CentOS 上使用 Apache")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R apache:apache *\n")])])]),s("h2",{attrs:{id:"重启工作队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启工作队列"}},[a._v("#")]),a._v(" 重启工作队列")]),a._v(" "),s("p",[s("em",[a._v("每次")]),a._v(" 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan queue:restart\n")])])]),s("h2",{attrs:{id:"退出维护模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出维护模式"}},[a._v("#")]),a._v(" 退出维护模式")]),a._v(" "),s("p",[a._v("现在升级已完成，退出维护模式，您的面板现在可以使用了。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 恢复面板让其继续运行并提供服务")]),a._v("\nphp artisan up\n")])])]),s("h2",{attrs:{id:"迁移至-wings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移至-wings"}},[a._v("#")]),a._v(" 迁移至 Wings")]),a._v(" "),s("p",[a._v("我们已经弃用了旧的 Node.js 守护进程，转而支持 "),s("a",{attrs:{href:"https://github.com/pterodactyl-china/wings",target:"_blank",rel:"noopener noreferrer"}},[a._v("Wings"),s("OutboundLink")],1),a._v("，这是我们用 Go 编写的新服务器控制系统。这个新系统明显更快、更容易安装并且更小。您需要做的就是在您的系统上安装一个二进制文件并将其配置为开机自启。"),s("strong",[a._v("您不能使用旧的 Node.js 守护进程来运行带有 翼龙面板 1.0 以上的服务器。")])]),a._v(" "),s("p",[a._v("有关详细说明，请阅读"),s("RouterLink",{attrs:{to:"/wings/1.0/migrating.html"}},[a._v("迁移至 Wings")]),a._v("。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);