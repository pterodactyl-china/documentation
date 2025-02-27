import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as p,f as a,g as n,j as s,h as t,i as l,r as d,o as r}from"./app-D-Jeu5AB.js";const k={};function o(c,i){const e=d("RouteLink");return r(),p("div",null,[i[12]||(i[12]=a("h1",{id:"旧版升级",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#旧版升级"},[a("span",null,"旧版升级")])],-1)),a("p",null,[i[1]||(i[1]=s("本升级指南用于")),i[2]||(i[2]=a("strong",null,"从 0.7.X 升级到 1.3.x",-1)),i[3]||(i[3]=s("。如果您尝试在 1.X 面板上进行升级，请")),t(e,{to:"/panel/1.0/updating.html"},{default:l(()=>i[0]||(i[0]=[s("改用本指南")])),_:1}),i[4]||(i[4]=s("。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。"))]),i[13]||(i[13]=n(`<h2 id="进入维护模式" tabindex="-1"><a class="header-anchor" href="#进入维护模式"><span>进入维护模式</span></a></h2><p>在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作。执行命令时，请确保您位于您的面板根目录中，列如 <code>/var/www/pterodactyl</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将面板置于维护模式并拒绝用户访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> down</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖"><span>更新依赖</span></a></h2><p>在执行此升级之前，您需要确保您的系统依赖项是最新的。请参考以下列表以确保您拥有所有必需的版本。</p>`,5)),a("ul",null,[a("li",null,[i[6]||(i[6]=n("PHP <code>8.0</code> 或 <code>8.1</code>（推荐），带有以下扩展名：<code>cli</code>、<code>openssl</code>、<code>gd</code>、<code>mysql</code>、<code>PDO</code>、<code>mbstring</code> <code>tokenizer</code>、<code>bcmath </code>、<code>xml</code> 或 <code>dom</code>、<code>curl</code>、<code>zip</code> 和 <code>fpm</code> 如果你打算使用 NGINX。请参阅我们的 ",31)),t(e,{to:"/guides/php_upgrade.html"},{default:l(()=>i[5]||(i[5]=[s("升级 PHP指南")])),_:1}),i[7]||(i[7]=s(" 了解详细信息。"))]),i[8]||(i[8]=a("li",null,[s("Composer v2 ("),a("code",null,"composer self-update --2"),s(")")],-1))]),i[14]||(i[14]=n(`<div class="hint-container warning"><p class="hint-container-title">Nginx</p><p>如果你升级你的 PHP 版本并且使用 nginx 作为你的网络服务器，你将不得不更新你的 nginx 的 <code>pterodactyl.conf</code> 配置中 <code>fastcgi_pass</code> 的值来使用正确的 <code>php-fpm</code> 套接字。</p></div><ul><li>MySQL <code>5.7.22</code> 或更高版本（推荐 MySQL <code>8</code>） <strong>或者</strong> MariaDB <code>10.2</code> 或更高版本。</li></ul><div class="hint-container warning"><p class="hint-container-title">请认真地仔细检查您的数据库版本</p><p>请确保您运行的是上面列出的正确版本 MariaDB 或 MySQL！ 否则，当您尝试迁移时，会导致你遇到本不应该出现的错误。</p><p>以前的文档（也就是以前的版本）可能让您安装了 MariaDB 10.1，而该版本的翼龙 <em>是无法使用的</em>。</p></div><h2 id="获取更新文件" tabindex="-1"><a class="header-anchor" href="#获取更新文件"><span>获取更新文件</span></a></h2><p>更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。现在您要确保位于翼龙根目录下，例如 <code>/var/www/pterodactyl</code> ，因为下面的命令会自动将存档解压到您当前的文件夹中。</p><p>我们将会删除 <code>app/</code> 目录。由于我们处理安装和升级的方式，删除的文件并不总是能被正确检测到，因此，轻易的在此位置上打包会导致一些迷惑行为。</p><p>::: code-tabs#shell</p><p>@tab 国际源</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这不会影响您的任何设置或服务器。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> resources</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Fv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -tf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载更新文件并删除存档文件。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab:active 国内源</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这不会影响您的任何设置或服务器。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Lo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://ghfast.top/https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">find</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> public</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> resources</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -depth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Fv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -tf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载更新文件并删除存档文件。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 755</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> storage/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bootstrap/cache</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="更新依赖-1" tabindex="-1"><a class="header-anchor" href="#更新依赖-1"><span>更新依赖</span></a></h2><p>下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">composer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-dev</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --optimize-autoloader</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="清除编译后的模板缓存" tabindex="-1"><a class="header-anchor" href="#清除编译后的模板缓存"><span>清除编译后的模板缓存</span></a></h2><p>您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> view:clear</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config:clear</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库更新" tabindex="-1"><a class="header-anchor" href="#数据库更新"><span>数据库更新</span></a></h2><p>您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，<em>永远不要编辑我们发布的核心预设</em>！ 它们将被此更新过程所覆盖。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果您使用了允许在 <code>0.7</code> 版本上进行服务器传输的自定义插件，您必须**删除或重命名 <code>server_transfers</code> 表，然后再继续。</p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> migrate</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db:seed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置权限" tabindex="-1"><a class="header-anchor" href="#设置权限"><span>设置权限</span></a></h2><p>最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 <code>www-data</code>，但可能因系统而异 — 有时是 <code>nginx</code>、<code>caddy</code>、<code>apache</code>，甚至是 <code>nobody</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果使用 NGINX 或 Apache (并且不在CentOS上)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> www-data:www-data</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果在 CentOS 上使用 NGINX</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx:nginx</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果在 CentOS 上使用 Apache</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apache:apache</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启工作队列" tabindex="-1"><a class="header-anchor" href="#重启工作队列"><span>重启工作队列</span></a></h2><p><em>每次</em> 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> queue:restart</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="退出维护模式" tabindex="-1"><a class="header-anchor" href="#退出维护模式"><span>退出维护模式</span></a></h2><p>现在升级已完成，退出维护模式，您的面板现在可以使用了。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 恢复面板让其继续运行并提供服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迁移至-wings" tabindex="-1"><a class="header-anchor" href="#迁移至-wings"><span>迁移至 Wings</span></a></h2><p>我们已经弃用了旧的 Node.js 守护进程，转而支持 <a href="https://github.com/pterodactyl-china/wings" target="_blank" rel="noopener noreferrer">Wings</a>，这是我们用 Go 编写的新服务器控制系统。这个新系统明显更快、更容易安装并且更小。您需要做的就是在您的系统上安装一个二进制文件并将其配置为开机自启。<strong>您不能使用旧的 Node.js 守护进程来运行带有 翼龙面板 1.0 以上的服务器。</strong></p>`,35)),a("p",null,[i[10]||(i[10]=s("有关详细说明，请阅读")),t(e,{to:"/wings/1.0/migrating.html"},{default:l(()=>i[9]||(i[9]=[s("迁移至 Wings")])),_:1}),i[11]||(i[11]=s("。"))])])}const A=h(k,[["render",o],["__file","legacy_upgrade.html.vue"]]),u=JSON.parse('{"path":"/panel/1.0/legacy_upgrade.html","title":"旧版升级","lang":"zh-CN","frontmatter":{"description":"旧版升级 本升级指南用于从 0.7.X 升级到 1.3.x。如果您尝试在 1.X 面板上进行升级，请。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。 进入维护模式 在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/legacy_upgrade.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"旧版升级"}],["meta",{"property":"og:description","content":"旧版升级 本升级指南用于从 0.7.X 升级到 1.3.x。如果您尝试在 1.X 面板上进行升级，请。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。 进入维护模式 在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-12T15:49:53.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-12T15:49:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"旧版升级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-12T15:49:53.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1598749007000,"updatedTime":1736696993000,"contributors":[{"name":"Dane Everitt","username":"Dane Everitt","email":"dane@daneeveritt.com","commits":22,"url":"https://github.com/Dane Everitt"},{"name":"DeJay","username":"DeJay","email":"contact@dejaydev.com","commits":1,"url":"https://github.com/DeJay"},{"name":"danny6167","username":"danny6167","email":"daniel@barteck.com.au","commits":1,"url":"https://github.com/danny6167"},{"name":"Mark David","username":"Mark David","email":"44349634+markd69@users.noreply.github.com","commits":1,"url":"https://github.com/Mark David"},{"name":"Charles Morgan","username":"Charles Morgan","email":"sir3lit@gmail.com","commits":1,"url":"https://github.com/Charles Morgan"},{"name":"Anand Capur","username":"Anand Capur","email":"git@anand.io","commits":1,"url":"https://github.com/Anand Capur"},{"name":"Jakob","username":"Jakob","email":"dev@schrej.net","commits":1,"url":"https://github.com/Jakob"},{"name":"Alex","username":"Alex","email":"admin@softwarenoob.com","commits":2,"url":"https://github.com/Alex"},{"name":"Angel Knutsen Aune","username":"Angel Knutsen Aune","email":"djangel@live.no","commits":1,"url":"https://github.com/Angel Knutsen Aune"},{"name":"飒爽师叔","username":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":18,"url":"https://github.com/飒爽师叔"},{"name":"Natsuki.HX","username":"Natsuki.HX","email":"58345270+AToska21@users.noreply.github.com","commits":1,"url":"https://github.com/Natsuki.HX"}]},"readingTime":{"minutes":4.88,"words":1463},"filePathRelative":"panel/1.0/legacy_upgrade.md","localizedDate":"2020年8月30日","autoDesc":true}');export{A as comp,u as data};
