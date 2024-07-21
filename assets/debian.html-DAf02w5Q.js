import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as h,a as i,e as s,b as n,w as e,d as p,o as d}from"./app-Cx48BsNM.js";const r={},k=i("h1",{id:"debian-11-12",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#debian-11-12"},[i("span",null,"Debian 11 & 12")])],-1),o={class:"hint-container tip"},c=i("p",{class:"hint-container-title"},"提示",-1),g=p(`<h2 id="dependency-installation" tabindex="-1"><a class="header-anchor" href="#dependency-installation"><span>Dependency Installation</span></a></h2><p>In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can follow the official installation documentation.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Update  package lists</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Install necessary packages</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> software-properties-common</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ca-certificates</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gnupg2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lsb-release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Add repository for PHP</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;deb https://packages.sury.org/php/ $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsb_release</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) main&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list.d/sury-php.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://packages.sury.org/php/apt.gpg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dearmor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/trusted.gpg.d/sury-keyring.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Add repository for Redis</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://packages.redis.io/gpg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dearmor</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/share/keyrings/redis-archive-keyring.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsb_release</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -cs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) main&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list.d/redis.list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Update  package lists</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Install PHP and required extensions</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php8.1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># MariaDB repo setup script</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://downloads.mariadb.com/MariaDB/mariadb_repo_setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Install the rest of dependencies</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installing-composer" tabindex="-1"><a class="header-anchor" href="#installing-composer"><span>Installing Composer</span></a></h3><p>Composer is a dependency manager for PHP that allows us to ship everything you&#39;ll need code wise to operate the Panel. You&#39;ll need composer installed before continuing in this process.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://getcomposer.org/installer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --install-dir=/usr/local/bin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --filename=composer</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="download-files" tabindex="-1"><a class="header-anchor" href="#download-files"><span>Download Files</span></a></h3>`,7);function y(u,A){const a=l("RouteLink");return d(),h("div",null,[k,i("div",o,[c,i("p",null,[s("本指南基于"),n(a,{to:"/panel/1.0/getting_started.html"},{default:e(()=>[s("官方安装文档")]),_:1}),s("，但专为 Debian 11、12 量身定制。")])]),g,i("p",null,[s("Great, now all of the dependencies have been dealt with. Continue the installation by following the "),n(a,{to:"/panel/1.0/getting_started.html#download-files"},{default:e(()=>[s("official documentation Download Files section")]),_:1}),s(".")])])}const b=t(r,[["render",y],["__file","debian.html.vue"]]),v=JSON.parse('{"path":"/community/installation-guides/panel/debian.html","title":"Debian 11 & 12","lang":"zh-CN","frontmatter":{"description":"Debian 11 & 12 提示 本指南基于，但专为 Debian 11、12 量身定制。 Dependency Installation In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can fo...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/debian.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Debian 11 & 12"}],["meta",{"property":"og:description","content":"Debian 11 & 12 提示 本指南基于，但专为 Debian 11、12 量身定制。 Dependency Installation In this guide, we will install the required dependencies for the Pterodactyl panel. After that, you can fo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Debian 11 & 12\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependency Installation","slug":"dependency-installation","link":"#dependency-installation","children":[{"level":3,"title":"Installing Composer","slug":"installing-composer","link":"#installing-composer","children":[]},{"level":3,"title":"Download Files","slug":"download-files","link":"#download-files","children":[]}]}],"git":{"createdTime":1667137571000,"updatedTime":1715321703000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Quinten","email":"67589015+QuintenQVD0@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"community/installation-guides/panel/debian.md","localizedDate":"2022年10月30日","autoDesc":true}');export{b as comp,v as data};