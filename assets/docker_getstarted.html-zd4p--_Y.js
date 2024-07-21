import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,c as k,b as l,w as e,a as i,e as s,d as h,o as c}from"./app-Cx48BsNM.js";const p={},g=h('<h1 id="使用-docker-搭建" tabindex="-1"><a class="header-anchor" href="#使用-docker-搭建"><span>使用 Docker 搭建</span></a></h1><p>翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。</p><p>您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。<strong>如果您希望能够在不了解基本 linux 系统管理的情况下安装它，您现在应该停下来然后出门左拐。</strong></p><h2 id="选择服务器操作系统" tabindex="-1"><a class="header-anchor" href="#选择服务器操作系统"><span>选择服务器操作系统</span></a></h2><p>翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Pterodactyl 不支持大多数 OpenVZ 系统，因为它与 Docker 不兼容。如果你计划在基于 OpenVZ 的系统上运行这个软件，你很可能不会成功。</p></div><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>如需快速安装 Docker 社区版，您可以执行以下命令：</p>',8),m=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -sSL"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," https://get.docker.com/"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," | "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"CHANNEL"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"stable"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," bash")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1),b=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -sSL"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," https://get.docker.com/"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," | "),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"CHANNEL"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},"stable"),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}}," bash"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -s"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," --mirror"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," Aliyun")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1),u=i("p",null,"如果您希望手动安装，请参考官方 Docker 文档了解如何在您的服务器上安装 Docker 社区版。下面列出了一些常用系统支持的快速链接。",-1),y=i("ul",null,[i("li",null,[i("a",{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},"Ubuntu")]),i("li",null,[i("a",{href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},"CentOS")]),i("li",null,[i("a",{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},"Debian")])],-1),A={class:"hint-container warning"},F=i("p",{class:"hint-container-title"},"检查你的内核",-1),v=i("code",null,"uname -r",-1),_=i("code",null,"-xxxx-grs-ipv6-64",-1),C=i("code",null,"-xxxx-mod-std-ipv6-64",-1),f=h('<h3 id="在启动时启动-docker" tabindex="-1"><a class="header-anchor" href="#在启动时启动-docker"><span>在启动时启动 Docker</span></a></h3><p>如果您使用的是带有 systemd 的操作系统（Ubuntu 16+、Debian 8+、CentOS 7+），请运行以下命令以在您启动机器时启动 Docker。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose"><span>安装 Docker Compose</span></a></h2><p>虽然 <code>yum</code> <code>apt</code> 有快速安装的软件包，但版本一般不是最新的。最新发行的版本地址：https://github.com/docker/compose/releases。</p><p>运行以下命令来下载 Docker Compose 的当前稳定版本：</p>',6),x=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -L"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "https://github.com/docker/compose/releases/latest/download/docker-compose-$('),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"uname"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -s"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},")-$("),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"uname"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -m"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},')"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -o"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"# 将可执行权限应用于二进制文件并创建软链")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"chmod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," +x"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"ln"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -s"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/bin/docker-compose")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),D=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -L"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},' "https://mirror.ghproxy.com/https://github.com/docker/compose/releases/latest/download/docker-compose-$('),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"uname"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -s"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},")-$("),i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"uname"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -m"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},')"'),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -o"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"# 将可执行权限应用于二进制文件并创建软链")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"chmod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," +x"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"ln"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -s"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/local/bin/docker-compose"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /usr/bin/docker-compose")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),E=h(`<h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span>下载文件</span></a></h2><p>在进行此步骤之前，我们要为 <code>docker-compose.yml</code> 创建一个放置目录。<br> 此过程的第一步是创建面板所在的文件夹，然后进入新创建的文件夹中。以下是如何执行此操作的示例。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>以下命令使用的路径仅为示例，阁下大可自己自定义路径，但是我在此提醒您，若您不用我示例使用的路径，请务必记住自己设置的程序所在的目录，并在后续各种涉及到程序运行目录的地方灵活操作！</p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/www/pterodactyl</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/www/pterodactyl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在为面板创建好它的放置目录后，我们将使用 <code>curl</code> 命令，从 Github 拉取翼龙中国汉化完成的 <code> docker-compose.yml</code> 文件并赋予该文件的可执行权限。</p>`,5),w=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -Lo"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker-compose.yml"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"# 将可执行权限应用于yml文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"chmod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," +x"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker-compose.yml")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),B=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"curl"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -Lo"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker-compose.yml"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," https://mirror.ghproxy.com/https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"# 将可执行权限应用于yml文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"chmod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," +x"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," docker-compose.yml")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),L=h(`<h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h3><p>当您不提供自己的 <code>.env</code> 文件时，有多个环境变量可以配置面板，有关每个可用选项的详细信息</p><p>在 <code>docker-compose.yml</code> 文件中可以设置，具体变量的详细信息可查看 在 <a href="https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md" target="_blank" rel="noopener noreferrer">GitHub 仓库中提供的文档</a> 或查看 <a href="https://gitee.com/vlssu/pterodactyl-panel/blob/1.0-develop/.github/docker/README.md" target="_blank" rel="noopener noreferrer">Gitee 镜像仓库中提供的文档(可能不是最新的)</a></p><p>如果你想变更数据的存储目录，可以自行查看文件，如果你并不会或不懂，请不要更改</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意！<code>docker-compose.yml</code> 文件中 <code>APP_URL</code> 变量一定要修改成你实际访问到面板的外网地址。否则你在配置后端时会出错！<br> 如果想使用非 <code>80</code> 端口，比如你服务器IP为 <code>192.168.1.255</code> 端口为 <code>10000</code>,请在 <code>docker-compose.yml</code> 文件中 <code>services.panel.ports</code> 将 <code>80:80</code> 修改成 <code>10000:80</code>，并且 <code>APP_URL</code> 填写成 <code>http://192.168.1.255:10000</code>。</p></div><h2 id="部署运行" tabindex="-1"><a class="header-anchor" href="#部署运行"><span>部署运行</span></a></h2><p>在设置完环境变量，我们就可以通过 Docker Compose 使用 <code>docker-compose.yml</code> 文件来启动面板了</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 在后台执行该服务</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># -d 参数是让该程序在后台执行，如果你需要排查错误等情况你可以去除该参数</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加首位用户" tabindex="-1"><a class="header-anchor" href="#添加首位用户"><span>添加首位用户</span></a></h3><p>您需要为面板创建一个管理用户，以便您可以登录面板。 为此，请运行以下命令。 并保证账户密码满足以下要求：8 个字符，大小写混合，至少一个数字。(此指令需在上文中含有 <code>docker-compose.yml</code> 的同级目录中执行）</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> artisan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> p:user:make</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>现在，你已经全部设置完毕，直接输入你的网站地址，即可访问翼龙面板</p>`,12),N={id:"下一步-wings-后端-安装",tabindex:"-1"},T={class:"header-anchor",href:"#下一步-wings-后端-安装"};function P(R,S){const n=d("CodeTabs"),r=d("RouteLink");return c(),k("div",null,[g,l(n,{id:"26",data:[{id:"国际源"},{id:"国内源"}],active:1,"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("国际源")]),title1:e(({value:a,isActive:t})=>[s("国内源")]),tab0:e(({value:a,isActive:t})=>[m]),tab1:e(({value:a,isActive:t})=>[b]),_:1}),u,y,i("div",A,[F,i("p",null,[s("请注意，某些主机安装了不支持 docker 重要功能的修改内核。 请通过运行 "),v,s(" 检查您的内核。 如果您的内核以 "),_,s(" 或 "),C,s(" 结尾，您可能使用的是不受支持的内核。 查看我们的 "),l(r,{to:"/daemon/0.6/kernel_modifications.html"},{default:e(()=>[s("内核修改")]),_:1}),s(" 指南了解详细信息。")])]),f,l(n,{id:"75",data:[{id:"国际源"},{id:"国内源"}],active:1,"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("国际源")]),title1:e(({value:a,isActive:t})=>[s("国内源")]),tab0:e(({value:a,isActive:t})=>[x]),tab1:e(({value:a,isActive:t})=>[D]),_:1}),E,l(n,{id:"98",data:[{id:"国际源"},{id:"国内源"}],active:1,"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("国际源")]),title1:e(({value:a,isActive:t})=>[s("国内源")]),tab0:e(({value:a,isActive:t})=>[w]),tab1:e(({value:a,isActive:t})=>[B]),_:1}),L,i("h4",N,[i("a",T,[i("span",null,[s("下一步："),l(r,{to:"/wings/1.0/installing.html"},{default:e(()=>[s("Wings (后端) 安装")]),_:1})])])])])}const Z=o(p,[["render",P],["__file","docker_getstarted.html.vue"]]),U=JSON.parse('{"path":"/panel/1.0/docker_getstarted.html","title":"使用 Docker 搭建","lang":"zh-CN","frontmatter":{"description":"使用 Docker 搭建 翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。 您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/docker_getstarted.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"使用 Docker 搭建"}],["meta",{"property":"og:description","content":"使用 Docker 搭建 翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。 您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。 此面板不作为运行服务器的拖放服务存在。 这是一个高度复杂..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T09:28:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-27T09:28:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 Docker 搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T09:28:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"选择服务器操作系统","slug":"选择服务器操作系统","link":"#选择服务器操作系统","children":[]},{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[{"level":3,"title":"在启动时启动 Docker","slug":"在启动时启动-docker","link":"#在启动时启动-docker","children":[]}]},{"level":2,"title":"安装 Docker Compose","slug":"安装-docker-compose","link":"#安装-docker-compose","children":[]},{"level":2,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[{"level":3,"title":"环境变量","slug":"环境变量","link":"#环境变量","children":[]}]},{"level":2,"title":"部署运行","slug":"部署运行","link":"#部署运行","children":[{"level":3,"title":"添加首位用户","slug":"添加首位用户","link":"#添加首位用户","children":[]}]}],"git":{"createdTime":1667985979000,"updatedTime":1716802115000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":15},{"name":"xiaowuap","email":"44547885+xiaowuap@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.84,"words":1451},"filePathRelative":"panel/1.0/docker_getstarted.md","localizedDate":"2022年11月9日","autoDesc":true}');export{Z as comp,U as data};