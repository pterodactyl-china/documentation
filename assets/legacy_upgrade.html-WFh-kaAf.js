import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as r,a,e,d as n,w as t,b as i}from"./app-BNPe33o9.js";const p={},h=a("h1",{id:"旧版升级",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#旧版升级"},[a("span",null,"旧版升级")])],-1),u=a("strong",null,"从 0.7.X 升级到 1.3.x",-1),m=i(`<h2 id="进入维护模式" tabindex="-1"><a class="header-anchor" href="#进入维护模式"><span>进入维护模式</span></a></h2><p>在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作。执行命令时，请确保您位于您的面板根目录中，列如 <code>/var/www/pterodactyl</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将面板置于维护模式并拒绝用户访问</span>
php artisan down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖"><span>更新依赖</span></a></h2><p>在执行此升级之前，您需要确保您的系统依赖项是最新的。请参考以下列表以确保您拥有所有必需的版本。</p>`,5),v=a("code",null,"8.0",-1),g=a("code",null,"8.1",-1),b=a("code",null,"cli",-1),_=a("code",null,"openssl",-1),k=a("code",null,"gd",-1),f=a("code",null,"mysql",-1),x=a("code",null,"PDO",-1),w=a("code",null,"mbstring",-1),y=a("code",null,"tokenizer",-1),N=a("code",null,"bcmath ",-1),z=a("code",null,"xml",-1),C=a("code",null,"dom",-1),L=a("code",null,"curl",-1),P=a("code",null,"zip",-1),X=a("code",null,"fpm",-1),S=a("li",null,[e("Composer v2 ("),a("code",null,"composer self-update --2"),e(")")],-1),M=i(`<div class="hint-container warning"><p class="hint-container-title">Nginx</p><p>如果你升级你的 PHP 版本并且使用 nginx 作为你的网络服务器，你将不得不更新你的 nginx 的 <code>pterodactyl.conf</code> 配置中 <code>fastcgi_pass</code> 的值来使用正确的 <code>php-fpm</code> 套接字。</p></div><ul><li>MySQL <code>5.7.22</code> 或更高版本（推荐 MySQL <code>8</code>） <strong>或者</strong> MariaDB <code>10.2</code> 或更高版本。</li></ul><div class="hint-container warning"><p class="hint-container-title">请认真地仔细检查您的数据库版本</p><p>请确保您运行的是上面列出的正确版本 MariaDB 或 MySQL！ 否则，当您尝试迁移时，会导致你遇到本不应该出现的错误。</p><p>以前的文档（也就是以前的版本）可能让您安装了 MariaDB 10.1，而该版本的翼龙 <em>是无法使用的</em>。</p></div><h2 id="获取更新文件" tabindex="-1"><a class="header-anchor" href="#获取更新文件"><span>获取更新文件</span></a></h2><p>更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。现在您要确保位于翼龙根目录下，例如 <code>/var/www/pterodactyl</code> ，因为下面的命令会自动将存档解压到您当前的文件夹中。</p><p>我们将会删除 <code>app/</code> 目录。由于我们处理安装和升级的方式，删除的文件并不总是能被正确检测到，因此，轻易的在此位置上打包会导致一些迷惑行为。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。</span>
<span class="token comment"># 这不会影响您的任何设置或服务器。</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> panel.tar.gz https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz
<span class="token comment"># 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取</span>
<span class="token function">curl</span> <span class="token parameter variable">-Lo</span> panel.tar.gz https://mirror.ghproxy.com/https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> app public resources <span class="token parameter variable">-depth</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-Fv</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">tar</span> <span class="token parameter variable">-tf</span> panel.tar.gz<span class="token variable">)</span></span>&quot;</span><span class="token variable">)</span></span>
<span class="token comment"># 下载更新文件并删除存档文件。</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> panel.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> panel.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">755</span> storage/* bootstrap/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新依赖-1" tabindex="-1"><a class="header-anchor" href="#更新依赖-1"><span>更新依赖</span></a></h2><p>下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span> --no-dev --optimize-autoloader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清除编译后的模板缓存" tabindex="-1"><a class="header-anchor" href="#清除编译后的模板缓存"><span>清除编译后的模板缓存</span></a></h2><p>您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan view:clear
php artisan config:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库更新" tabindex="-1"><a class="header-anchor" href="#数据库更新"><span>数据库更新</span></a></h2><p>您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，<em>永远不要编辑我们发布的核心预设</em>！ 它们将被此更新过程所覆盖。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果您使用了允许在 <code>0.7</code> 版本上进行服务器传输的自定义插件，您必须**删除或重命名 <code>server_transfers</code> 表，然后再继续。</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan migrate <span class="token parameter variable">--force</span>
php artisan db:seed <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置权限" tabindex="-1"><a class="header-anchor" href="#设置权限"><span>设置权限</span></a></h2><p>最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 <code>www-data</code>，但可能因系统而异 — 有时是 <code>nginx</code>、<code>caddy</code>、<code>apache</code>，甚至是 <code>nobody</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如果使用 NGINX 或 Apache (并且不在CentOS上)</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> www-data:www-data *

<span class="token comment"># 如果在 CentOS 上使用 NGINX</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> nginx:nginx *

<span class="token comment"># 如果在 CentOS 上使用 Apache</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> apache:apache *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启工作队列" tabindex="-1"><a class="header-anchor" href="#重启工作队列"><span>重启工作队列</span></a></h2><p><em>每次</em> 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan queue:restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="退出维护模式" tabindex="-1"><a class="header-anchor" href="#退出维护模式"><span>退出维护模式</span></a></h2><p>现在升级已完成，退出维护模式，您的面板现在可以使用了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 恢复面板让其继续运行并提供服务</span>
php artisan up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迁移至-wings" tabindex="-1"><a class="header-anchor" href="#迁移至-wings"><span>迁移至 Wings</span></a></h2>`,29),R={href:"https://github.com/pterodactyl-china/wings",target:"_blank",rel:"noopener noreferrer"},T=a("strong",null,"您不能使用旧的 Node.js 守护进程来运行带有 翼龙面板 1.0 以上的服务器。",-1);function B(D,G){const s=l("RouteLink"),c=l("ExternalLinkIcon");return d(),r("div",null,[h,a("p",null,[e("本升级指南用于"),u,e("。如果您尝试在 1.X 面板上进行升级，请"),n(s,{to:"/panel/1.0/updating.html"},{default:t(()=>[e("改用本指南")]),_:1}),e("。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。")]),m,a("ul",null,[a("li",null,[e("PHP "),v,e(" 或 "),g,e("（推荐），带有以下扩展名："),b,e("、"),_,e("、"),k,e("、"),f,e("、"),x,e("、"),w,e(),y,e("、"),N,e("、"),z,e(" 或 "),C,e("、"),L,e("、"),P,e(" 和 "),X,e(" 如果你打算使用 NGINX。请参阅我们的 "),n(s,{to:"/guides/php_upgrade.html"},{default:t(()=>[e("升级 PHP指南")]),_:1}),e(" 了解详细信息。")]),S]),M,a("p",null,[e("我们已经弃用了旧的 Node.js 守护进程，转而支持 "),a("a",R,[e("Wings"),n(c)]),e("，这是我们用 Go 编写的新服务器控制系统。这个新系统明显更快、更容易安装并且更小。您需要做的就是在您的系统上安装一个二进制文件并将其配置为开机自启。"),T]),a("p",null,[e("有关详细说明，请阅读"),n(s,{to:"/wings/1.0/migrating.html"},{default:t(()=>[e("迁移至 Wings")]),_:1}),e("。")])])}const q=o(p,[["render",B],["__file","legacy_upgrade.html.vue"]]),H=JSON.parse('{"path":"/panel/1.0/legacy_upgrade.html","title":"旧版升级","lang":"zh-CN","frontmatter":{"description":"旧版升级 本升级指南用于从 0.7.X 升级到 1.3.x。如果您尝试在 1.X 面板上进行升级，请。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。 进入维护模式 在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/legacy_upgrade.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"旧版升级"}],["meta",{"property":"og:description","content":"旧版升级 本升级指南用于从 0.7.X 升级到 1.3.x。如果您尝试在 1.X 面板上进行升级，请。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。 进入维护模式 在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"旧版升级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"进入维护模式","slug":"进入维护模式","link":"#进入维护模式","children":[]},{"level":2,"title":"更新依赖","slug":"更新依赖","link":"#更新依赖","children":[]},{"level":2,"title":"获取更新文件","slug":"获取更新文件","link":"#获取更新文件","children":[]},{"level":2,"title":"更新依赖","slug":"更新依赖-1","link":"#更新依赖-1","children":[]},{"level":2,"title":"清除编译后的模板缓存","slug":"清除编译后的模板缓存","link":"#清除编译后的模板缓存","children":[]},{"level":2,"title":"数据库更新","slug":"数据库更新","link":"#数据库更新","children":[]},{"level":2,"title":"设置权限","slug":"设置权限","link":"#设置权限","children":[]},{"level":2,"title":"重启工作队列","slug":"重启工作队列","link":"#重启工作队列","children":[]},{"level":2,"title":"退出维护模式","slug":"退出维护模式","link":"#退出维护模式","children":[]},{"level":2,"title":"迁移至 Wings","slug":"迁移至-wings","link":"#迁移至-wings","children":[]}],"git":{"createdTime":1598749007000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.71,"words":1414},"filePathRelative":"panel/1.0/legacy_upgrade.md","localizedDate":"2020年8月30日","autoDesc":true}');export{q as comp,H as data};
