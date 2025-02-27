import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as h,g as d,h as o,f as i,i as t,r as p,o as m,j as s}from"./app-D-Jeu5AB.js";const c={};function k(u,e){const l=p("Tabs");return m(),h("div",null,[e[4]||(e[4]=d(`<h1 id="升级-php" tabindex="-1"><a class="header-anchor" href="#升级-php"><span>升级 PHP</span></a></h1><p>此文档包含将您的系统升级到最新版本的 PHP 的说明。请参考下表以检查您的 Pterodactyl 版本需要哪个版本的 PHP。</p><table><thead><tr><th>面板版本</th><th>PHP 版本</th></tr></thead><tbody><tr><td>1.0.0 - 1.2.0</td><td>7.3, 7.4</td></tr><tr><td>1.3.0+</td><td>7.4, 8.0</td></tr><tr><td>1.8.0+</td><td>7.4, 8.0, 8.1</td></tr><tr><td>1.11.0 - 1.11.3</td><td>8.0, 8.1</td></tr><tr><td>1.11.4+</td><td>8.1, 8.2, 8.3</td></tr><tr><td>1.11.10+</td><td>8.2, 8.3</td></tr></tbody></table><h2 id="安装-php" tabindex="-1"><a class="header-anchor" href="#安装-php"><span>安装 PHP</span></a></h2><p>为了安装 PHP 8.3，您需要运行以下命令。请记住，不同的操作系统可能对此命令的格式有略微不同的要求。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加 PHP 的额外仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add-apt-repository</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ppa:ondrej/php</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php8.3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php8.3-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新-composer" tabindex="-1"><a class="header-anchor" href="#更新-composer"><span>更新 Composer</span></a></h2><p>从 <code>Panel@1.3.0</code> 开始，我们需要 <code>composer</code> v2。要更新 composer，您需要运行以下命令，该命令将执行 composer 自我更新过程，并将您切换到版本 2。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">composer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> self-update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="web服务器配置" tabindex="-1"><a class="header-anchor" href="#web服务器配置"><span>Web服务器配置</span></a></h2>`,10)),o(l,{id:"85",data:[{id:"NGINX"},{id:"Apache"}]},{title0:t(({value:a,isActive:n})=>e[0]||(e[0]=[s("NGINX")])),title1:t(({value:a,isActive:n})=>e[1]||(e[1]=[s("Apache")])),tab0:t(({value:a,isActive:n})=>e[2]||(e[2]=[i("p",null,[s("升级到 PHP 8.3 后，您可能需要更新您的 NGINX 配置。您的配置文件名称可能为 "),i("code",null,"pterodactyl.conf"),s("，位于 "),i("code",null,"/etc/nginx/sites-available/"),s(" 目录中，如果在 CentOS 上，则可能位于 "),i("code",null,"/etc/nginx/conf.d/"),s("。")],-1),i("p",null,"确保更新下面命令中的路径，以反映您的配置文件的实际位置。",-1),i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"sed"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -i"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," -e"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," 's/php[7|8].[0-9]-fpm.sock/php8.3-fpm.sock/'"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," /etc/nginx/sites-available/pterodactyl.conf")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1),i("p",null,"编辑完文件后，运行下面的命令重新加载 nginx 并应用您的更改。",-1),i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"systemctl"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," reload"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," nginx")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)])),tab1:t(({value:a,isActive:n})=>e[3]||(e[3]=[i("p",null,"运行下面的命令，禁用所有以前的 PHP 版本，并在服务请求时启用 PHP 8.3。",-1),i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# Hint: a2dismod = a2_disable_module 🤯")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"a2dismod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," php"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"*")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# Hint: a2enmod = a2_enable_module 🤯")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"a2enmod"),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," php8.3")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),e[5]||(e[5]=i("h3",{id:"返回到-1-x-x-升级指南",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#返回到-1-x-x-升级指南"},[i("span",null,[i("a",{href:"../panel/1.0/updating#%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96%E9%A1%B9"},"返回到 1.X.X 升级指南")])])],-1))])}const y=r(c,[["render",k],["__file","php_upgrade.html.vue"]]),A=JSON.parse('{"path":"/guides/php_upgrade.html","title":"升级 PHP","lang":"zh-CN","frontmatter":{"description":"升级 PHP 此文档包含将您的系统升级到最新版本的 PHP 的说明。请参考下表以检查您的 Pterodactyl 版本需要哪个版本的 PHP。 安装 PHP 为了安装 PHP 8.3，您需要运行以下命令。请记住，不同的操作系统可能对此命令的格式有略微不同的要求。 更新 Composer 从 Panel@1.3.0 开始，我们需要 composer v2...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/guides/php_upgrade.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"升级 PHP"}],["meta",{"property":"og:description","content":"升级 PHP 此文档包含将您的系统升级到最新版本的 PHP 的说明。请参考下表以检查您的 Pterodactyl 版本需要哪个版本的 PHP。 安装 PHP 为了安装 PHP 8.3，您需要运行以下命令。请记住，不同的操作系统可能对此命令的格式有略微不同的要求。 更新 Composer 从 Panel@1.3.0 开始，我们需要 composer v2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T02:18:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T02:18:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"升级 PHP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T02:18:11.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1611207575000,"updatedTime":1724897891000,"contributors":[{"name":"Matthew Penner","username":"Matthew Penner","email":"me@matthewp.io","commits":4,"url":"https://github.com/Matthew Penner"},{"name":"Dane Everitt","username":"Dane Everitt","email":"dane@daneeveritt.com","commits":2,"url":"https://github.com/Dane Everitt"},{"name":"Proxymiity ☆","username":"Proxymiity ☆","email":"commits@proxymiity.fr","commits":1,"url":"https://github.com/Proxymiity ☆"},{"name":"Alex","username":"Alex","email":"admin@softwarenoob.com","commits":2,"url":"https://github.com/Alex"},{"name":"DaneEveritt","username":"DaneEveritt","email":"dane@daneeveritt.com","commits":1,"url":"https://github.com/DaneEveritt"},{"name":"Boy132","username":"Boy132","email":"Boy132@users.noreply.github.com","commits":1,"url":"https://github.com/Boy132"},{"name":"飒爽师叔","username":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":3,"url":"https://github.com/飒爽师叔"},{"name":"PadowYT2","username":"PadowYT2","email":"me@padow.ru","commits":1,"url":"https://github.com/PadowYT2"},{"name":"Daniel Barton","username":"Daniel Barton","email":"danielb@purpleflaghosting.com","commits":1,"url":"https://github.com/Daniel Barton"},{"name":"Louis Ravignot Dos Santos","username":"Louis Ravignot Dos Santos","email":"louis.rds@akticube.fr","commits":1,"url":"https://github.com/Louis Ravignot Dos Santos"}]},"readingTime":{"minutes":1.29,"words":388},"filePathRelative":"guides/php_upgrade.md","localizedDate":"2021年1月21日","autoDesc":true}');export{y as comp,A as data};
