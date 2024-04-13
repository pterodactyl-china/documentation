import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as d,a as e,d as s,w as n,e as a,b as l}from"./app-C31F2e73.js";const m={},u=e("h1",{id:"使用-docker-搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-docker-搭建"},[e("span",null,"使用 Docker 搭建")])],-1),h={class:"table-of-contents"},k=l(`<p>翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。</p><p>您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。<strong>如果您希望能够在不了解基本 linux 系统管理的情况下安装它，您现在应该停下来然后出门左拐。</strong></p><h2 id="选择服务器操作系统" tabindex="-1"><a class="header-anchor" href="#选择服务器操作系统"><span>选择服务器操作系统</span></a></h2><p>翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于与 Docker 不兼容，翼龙不支持大多数 OpenVZ 系统。如果您计划在基于 OpenVZ 的系统上运行此软件，您将很大概率不会成功。<br> 不过本页的教程并不会有太多的限制，只要阁下前端服务器能装 <code>Docker</code> 和 <code>Docker Compose</code>，就可以采用本页教程来搭建翼龙面板前端了。一般服务器均能满足前端的搭建要求。<br> 只要能装 <strong>Docker Compose</strong> 并运行，就没有系统的限制。</p></div><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>如需快速安装 Docker 社区版，您可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token assign-left variable">CHANNEL</span><span class="token operator">=</span>stable <span class="token function">bash</span>
<span class="token comment"># 如果速度过慢可以尝试阿里云源</span>
<span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.docker.com/ <span class="token operator">|</span> <span class="token assign-left variable">CHANNEL</span><span class="token operator">=</span>stable <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您希望手动安装，请参考官方 Docker 文档了解如何在您的服务器上安装 Docker 社区版。下面列出了一些常用系统支持的快速链接。</p>`,9),b={href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},_={class:"hint-container warning"},f=e("p",{class:"hint-container-title"},"检查你的内核",-1),x=e("code",null,"uname -r",-1),y=e("code",null,"-xxxx-grs-ipv6-64",-1),D=e("code",null,"-xxxx-mod-std-ipv6-64",-1),w=l(`<h3 id="在启动时启动-docker" tabindex="-1"><a class="header-anchor" href="#在启动时启动-docker"><span>在启动时启动 Docker</span></a></h3><p>如果您使用的是带有 systemd 的操作系统（Ubuntu 16+、Debian 8+、CentOS 7+），请运行以下命令以在您启动机器时启动 Docker。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose"><span>安装 Docker Compose</span></a></h2><p>虽然 <code>yum</code> <code>apt</code> 有快速安装的软件包，但版本一般不是最新的。最新发行的版本地址：https://github.com/docker/compose/releases。</p><p>运行以下命令来下载 Docker Compose 的当前稳定版本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/latest/download/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token comment"># 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://mirror.ghproxy.com/https://github.com/docker/compose/releases/latest/download/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token comment"># 将可执行权限应用于二进制文件并创建软链</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span>下载文件</span></a></h2><p>在进行此步骤之前，我们要为 <code>docker-compose.yml</code> 创建一个放置目录。<br> 此过程的第一步是创建面板所在的文件夹，然后进入新创建的文件夹中。以下是如何执行此操作的示例。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>以下命令使用的路径仅为示例，阁下大可自己自定义路径，但是我在此提醒您，若您不用我示例使用的路径，请务必记住自己设置的程序所在的目录，并在后续各种涉及到程序运行目录的地方灵活操作！</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/www/pterodactyl
<span class="token builtin class-name">cd</span> /var/www/pterodactyl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在为面板创建好它的放置目录后，我们将使用 <code>curl</code> 命令，从 Github 拉取翼龙中国汉化完成的 <code> docker-compose.yml</code> 文件并赋予该文件的可执行权限。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-Lo</span> docker-compose.yml https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml
<span class="token comment"># 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取</span>
<span class="token function">curl</span> <span class="token parameter variable">-Lo</span> docker-compose.yml https://mirror.ghproxy.com/https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml
<span class="token comment"># 将可执行权限应用于yml文件</span>
<span class="token function">chmod</span> +x docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3><p>当您不提供自己的 <code>.env</code> 文件时，有多个环境变量可以配置面板，有关每个可用选项的详细信息</p>`,15),C=e("code",null,"docker-compose.yml",-1),L={href:"https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md",target:"_blank",rel:"noopener noreferrer"},N={href:"https://gitee.com/vlssu/pterodactyl-panel/blob/1.0-develop/.github/docker/README.md",target:"_blank",rel:"noopener noreferrer"},E=l(`<p>如果你想变更数据的存储目录，可以自行查看文件，如果你并不会或不懂，请不要更改</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意！<code>docker-compose.yml</code> 文件中 <code>APP_URL</code> 变量一定要修改成你实际访问到面板的外网地址。否则你在配置后端时会出错！<br> 如果想使用非 <code>80</code> 端口，比如你服务器IP为 <code>192.168.1.255</code> 端口为 <code>10000</code>,请在 <code>docker-compose.yml</code> 文件中 <code>services.panel.ports</code> 将 <code>80:80</code> 修改成 <code>10000:80</code>，并且 <code>APP_URL</code> 填写成 <code>http://192.168.1.255:10000</code>。</p></div><h2 id="部署运行" tabindex="-1"><a class="header-anchor" href="#部署运行"><span>部署运行</span></a></h2><p>在设置完环境变量，我们就可以通过 Docker Compose 使用 <code>docker-compose.yml</code> 文件来启动面板了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在后台执行该服务</span>
<span class="token comment"># -d 参数是让该程序在后台执行，如果你需要排查错误等情况你可以去除该参数</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加首位用户" tabindex="-1"><a class="header-anchor" href="#添加首位用户"><span>添加首位用户</span></a></h3><p>您需要为面板创建一个管理用户，以便您可以登录面板。 为此，请运行以下命令。 并保证账户密码满足以下要求：8 个字符，大小写混合，至少一个数字。(此指令需在上文中含有 <code>docker-compose.yml</code> 的同级目录中执行）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> panel php artisan p:user:make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，你已经全部设置完毕，直接输入你的网站地址，即可访问翼龙面板</p>`,9),A={id:"下一步-wings-后端-安装",tabindex:"-1"},P={class:"header-anchor",href:"#下一步-wings-后端-安装"};function R(T,S){const o=c("router-link"),t=c("ExternalLinkIcon"),r=c("RouteLink");return p(),d("div",null,[u,e("nav",h,[e("ul",null,[e("li",null,[s(o,{to:"#选择服务器操作系统"},{default:n(()=>[a("选择服务器操作系统")]),_:1})]),e("li",null,[s(o,{to:"#安装-docker"},{default:n(()=>[a("安装 Docker")]),_:1}),e("ul",null,[e("li",null,[s(o,{to:"#在启动时启动-docker"},{default:n(()=>[a("在启动时启动 Docker")]),_:1})])])]),e("li",null,[s(o,{to:"#安装-docker-compose"},{default:n(()=>[a("安装 Docker Compose")]),_:1})]),e("li",null,[s(o,{to:"#下载文件"},{default:n(()=>[a("下载文件")]),_:1}),e("ul",null,[e("li",null,[s(o,{to:"#环境变量"},{default:n(()=>[a("环境变量")]),_:1})])])]),e("li",null,[s(o,{to:"#部署运行"},{default:n(()=>[a("部署运行")]),_:1}),e("ul",null,[e("li",null,[s(o,{to:"#添加首位用户"},{default:n(()=>[a("添加首位用户")]),_:1})])])])])]),k,e("ul",null,[e("li",null,[e("a",b,[a("Ubuntu"),s(t)])]),e("li",null,[e("a",v,[a("CentOS"),s(t)])]),e("li",null,[e("a",g,[a("Debian"),s(t)])])]),e("div",_,[f,e("p",null,[a("请注意，某些主机安装了不支持 docker 重要功能的修改内核。 请通过运行 "),x,a(" 检查您的内核。 如果您的内核以 "),y,a(" 或 "),D,a(" 结尾，您可能使用的是不受支持的内核。 查看我们的 "),s(r,{to:"/daemon/0.6/kernel_modifications.html"},{default:n(()=>[a("内核修改")]),_:1}),a(" 指南了解详细信息。")])]),w,e("p",null,[a("在 "),C,a(" 文件中可以设置，具体变量的详细信息可查看 在 "),e("a",L,[a("GitHub 仓库中提供的文档"),s(t)]),a(" 或查看 "),e("a",N,[a("Gitee 镜像仓库中提供的文档(可能不是最新的)"),s(t)])]),E,e("h4",A,[e("a",P,[e("span",null,[a("下一步："),s(r,{to:"/wings/1.0/installing.html"},{default:n(()=>[a("Wings (后端) 安装")]),_:1})])])])])}const Z=i(m,[["render",R],["__file","docker_getstarted.html.vue"]]),q=JSON.parse('{"path":"/panel/1.0/docker_getstarted.html","title":"使用 Docker 搭建","lang":"zh-CN","frontmatter":{"description":"使用 Docker 搭建 翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。 您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/docker_getstarted.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"使用 Docker 搭建"}],["meta",{"property":"og:description","content":"使用 Docker 搭建 翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。 您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 Docker 搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"选择服务器操作系统","slug":"选择服务器操作系统","link":"#选择服务器操作系统","children":[]},{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[{"level":3,"title":"在启动时启动 Docker","slug":"在启动时启动-docker","link":"#在启动时启动-docker","children":[]}]},{"level":2,"title":"安装 Docker Compose","slug":"安装-docker-compose","link":"#安装-docker-compose","children":[]},{"level":2,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[{"level":3,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}]},{"level":2,"title":"部署运行","slug":"部署运行","link":"#部署运行","children":[{"level":3,"title":"添加首位用户","slug":"添加首位用户","link":"#添加首位用户","children":[]}]}],"git":{"createdTime":1667985979000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.15,"words":1546},"filePathRelative":"panel/1.0/docker_getstarted.md","localizedDate":"2022年11月9日","autoDesc":true}');export{Z as comp,q as data};