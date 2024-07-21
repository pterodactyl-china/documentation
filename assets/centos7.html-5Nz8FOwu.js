import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as h,a as i,e as s,b as a,w as n,d as r,o as d}from"./app-Cx48BsNM.js";const p={},k=i("h1",{id:"centos-7",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#centos-7"},[i("span",null,"CentOS 7")])],-1),c=i("p",null,"在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。",-1),o={class:"hint-container tip"},m=i("p",{class:"hint-container-title"},"提示",-1),g=i("h2",{id:"安装要求",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#安装要求"},[i("span",null,"安装要求")])],-1),y=r(`<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 安装 yum 工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yum-utils</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> device-mapper-persistent-data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lvm2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 添加 docker 仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 安装 docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-ce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker-ce-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">## 启用 docker 服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="firewalld-更改" tabindex="-1"><a class="header-anchor" href="#firewalld-更改"><span>FirewallD 更改</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8080/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2022/tcp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zone=trusted</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --change-interface=docker0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --zone=trusted</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-masquerade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">firewall-cmd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-wings" tabindex="-1"><a class="header-anchor" href="#安装-wings"><span>安装 Wings</span></a></h2>`,5);function u(A,v){const e=l("RouteLink");return d(),h("div",null,[k,c,i("div",o,[m,i("p",null,[s("本指南基于"),a(e,{to:"/wings/1.0/installing.html"},{default:n(()=>[s("官方安装文档")]),_:1}),s("，但专为 CentOS 7 量身定制。")])]),g,i("p",null,[s("我们要安装 Wings "),a(e,{to:"/wings/1.0/installing.html#%E4%BE%9D%E8%B5%96%E9%A1%B9"},{default:n(()=>[s("所需依赖项")]),_:1}),s("。")]),y,i("p",null,[s("很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照"),a(e,{to:"/wings/1.0/installing.html#%E5%90%AF%E7%94%A8%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98"},{default:n(()=>[s("官方Wings安装文档进行操作")]),_:1}),s("。")])])}const f=t(p,[["render",u],["__file","centos7.html.vue"]]),_=JSON.parse('{"path":"/community/installation-guides/wings/centos7.html","title":"CentOS 7","lang":"zh-CN","frontmatter":{"description":"CentOS 7 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求 我们要安装 Wings 。 Docker FirewallD 更改 安装 Wings 很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照。","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/wings/centos7.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 7"}],["meta",{"property":"og:description","content":"CentOS 7 在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求 我们要安装 Wings 。 Docker FirewallD 更改 安装 Wings 很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 7\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[{"level":3,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":3,"title":"FirewallD 更改","slug":"firewalld-更改","link":"#firewalld-更改","children":[]}]},{"level":2,"title":"安装 Wings","slug":"安装-wings","link":"#安装-wings","children":[]}],"git":{"createdTime":1603850925000,"updatedTime":1715321703000,"contributors":[{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":2},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"JohnB17","email":"63297273+JohnB17@users.noreply.github.com","commits":1},{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":1},{"name":"TekExplorer","email":"tekexplorerm@gmail.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"community/installation-guides/wings/centos7.md","localizedDate":"2020年10月28日","autoDesc":true}');export{f as comp,_ as data};