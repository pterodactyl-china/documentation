import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as l,a as s,f as n,d as r,e as p,r as d,o as h}from"./app-DnFqhvBe.js";const k={};function o(c,i){const a=d("RouteLink");return h(),t("div",null,[i[3]||(i[3]=l(`<h1 id="enterprise-linux-8-和-fedora-server-40" tabindex="-1"><a class="header-anchor" href="#enterprise-linux-8-和-fedora-server-40"><span>Enterprise Linux 8 和 Fedora Server 40</span></a></h1><p>这份指南提供了在 CentOS 8、Rocky Linux 8、AlmaLinux 8 和 Fedora Server 40 上安装 Pterodactyl Wings v1.X 的全面说明。</p><h2 id="安装依赖项" tabindex="-1"><a class="header-anchor" href="#安装依赖项"><span>安装依赖项</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装所需的软件包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> device-mapper-persistent-data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lvm2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加 docker 仓库 (Enterprise Linux 8)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-repo=https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加 docker 仓库 (Fedora Server 40)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://download.docker.com/linux/fedora/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 安装 docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-ce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-ce-cli</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 启用 docker 服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置防火墙</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8080/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2022/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zone=trusted</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --change-interface=pterodactyl0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zone=trusted</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-masquerade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-wings" tabindex="-1"><a class="header-anchor" href="#安装-wings"><span>安装 Wings</span></a></h2>`,5)),s("p",null,[i[1]||(i[1]=n("很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照")),r(a,{to:"/wings/1.0/installing.html#%E5%90%AF%E7%94%A8%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98"},{default:p(()=>i[0]||(i[0]=[n("官方Wings安装文档进行操作")])),_:1}),i[2]||(i[2]=n("。"))]),i[4]||(i[4]=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"提示"),s("p",null,[n("如果你启用了 SELinux 强制执行，并且你的容器收到 AVC 拒绝，尝试将你的 Wings 数据目录从 "),s("code",null,"/var/lib/pterodactyl"),n(" 移动到 "),s("code",null,"/var/srv/containers/pterodactyl"),n("。这是目标策略期望 Docker 从中读取和写入数据的地方。")])],-1))])}const m=e(k,[["render",o],["__file","centos8.html.vue"]]),u=JSON.parse('{"path":"/community/installation-guides/wings/centos8.html","title":"Enterprise Linux 8 和 Fedora Server 40","lang":"zh-CN","frontmatter":{"description":"Enterprise Linux 8 和 Fedora Server 40 这份指南提供了在 CentOS 8、Rocky Linux 8、AlmaLinux 8 和 Fedora Server 40 上安装 Pterodactyl Wings v1.X 的全面说明。 安装依赖项 安装 Wings 很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/wings/centos8.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Enterprise Linux 8 和 Fedora Server 40"}],["meta",{"property":"og:description","content":"Enterprise Linux 8 和 Fedora Server 40 这份指南提供了在 CentOS 8、Rocky Linux 8、AlmaLinux 8 和 Fedora Server 40 上安装 Pterodactyl Wings v1.X 的全面说明。 安装依赖项 安装 Wings 很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Enterprise Linux 8 和 Fedora Server 40\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装依赖项","slug":"安装依赖项","link":"#安装依赖项","children":[]},{"level":2,"title":"安装 Wings","slug":"安装-wings","link":"#安装-wings","children":[]}],"readingTime":{"minutes":0.88,"words":263},"filePathRelative":"community/installation-guides/wings/centos8.md","autoDesc":true}');export{m as comp,u as data};
