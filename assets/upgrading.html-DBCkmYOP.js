import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as d,b as m,w as a,d as i,e,a as t}from"./app-BepD98E1.js";const p={},g=i('<h1 id="升级-wings" tabindex="-1"><a class="header-anchor" href="#升级-wings"><span>升级 Wings</span></a></h1><p>升级Wings并不困难，只需不到一分钟就可以完成。</p><h2 id="wings-版本需求" tabindex="-1"><a class="header-anchor" href="#wings-版本需求"><span>Wings 版本需求</span></a></h2><p>每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。</p><table><thead><tr><th>面板版本</th><th>Wings版本</th><th>支持状况</th></tr></thead><tbody><tr><td>1.0.x</td><td>1.0.x</td><td></td></tr><tr><td>1.1.x</td><td>1.1.x</td><td></td></tr><tr><td>1.2.x</td><td>1.2.x</td><td></td></tr><tr><td>1.3.x</td><td>1.3.x</td><td></td></tr><tr><td>1.4.x</td><td>1.4.x</td><td></td></tr><tr><td>1.5.x</td><td>1.4.x</td><td></td></tr><tr><td>1.6.x</td><td>1.4.x</td><td></td></tr><tr><td>1.7.x</td><td>1.5.x</td><td></td></tr><tr><td>1.8.x</td><td>1.6.x</td><td></td></tr><tr><td>1.9.x</td><td>1.6.x</td><td></td></tr><tr><td>1.10.x</td><td>1.7.x</td><td></td></tr><tr><td><strong>1.11.x</strong></td><td><strong>1.11.x</strong></td><td>✅</td></tr></tbody></table><p><em>注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。</em></p><p>首先，下载最新的 wings 二进制文件到 <code>/usr/local/bin</code>。您将需要短暂停止 Wings。 <em>您正在运行的服务器<strong>不会</strong>受到影响。</em></p>',7),u=t("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[t("pre",{class:"language-bash"},[t("code",null,[e(`systemctl stop wings
`),t("span",{class:"token function"},"curl"),e(),t("span",{class:"token parameter variable"},"-L"),e(),t("span",{class:"token parameter variable"},"-o"),e(" /usr/local/bin/wings "),t("span",{class:"token string"},[e('"https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "'),t("span",{class:"token variable"},[t("span",{class:"token variable"},"$("),t("span",{class:"token function"},"uname"),e(),t("span",{class:"token parameter variable"},"-m"),t("span",{class:"token variable"},")")]),e('"')]),e(),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token string"},'"x86_64"'),e(),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"&&"),e(),t("span",{class:"token builtin class-name"},"echo"),e(),t("span",{class:"token string"},'"amd64"'),e(),t("span",{class:"token operator"},"||"),e(),t("span",{class:"token builtin class-name"},"echo"),e(),t("span",{class:"token string"},'"arm64"'),t("span",{class:"token punctuation"},")"),e(`"
`),t("span",{class:"token function"},"chmod"),e(` u+x /usr/local/bin/wings
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),h=t("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[t("pre",{class:"language-bash"},[t("code",null,[e(`systemctl stop wings
`),t("span",{class:"token function"},"curl"),e(),t("span",{class:"token parameter variable"},"-L"),e(),t("span",{class:"token parameter variable"},"-o"),e(" /usr/local/bin/wings "),t("span",{class:"token string"},[e('"https://mirror.ghproxy.com/https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "'),t("span",{class:"token variable"},[t("span",{class:"token variable"},"$("),t("span",{class:"token function"},"uname"),e(),t("span",{class:"token parameter variable"},"-m"),t("span",{class:"token variable"},")")]),e('"')]),e(),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token string"},'"x86_64"'),e(),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"&&"),e(),t("span",{class:"token builtin class-name"},"echo"),e(),t("span",{class:"token string"},'"amd64"'),e(),t("span",{class:"token operator"},"||"),e(),t("span",{class:"token builtin class-name"},"echo"),e(),t("span",{class:"token string"},'"arm64"'),t("span",{class:"token punctuation"},")"),e(`"
`),t("span",{class:"token function"},"chmod"),e(` u+x /usr/local/bin/wings
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),b=i(`<h2 id="重启进程" tabindex="-1"><a class="header-anchor" href="#重启进程"><span>重启进程</span></a></h2><p>最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function x(k,v){const o=l("Tabs");return c(),d("div",null,[g,m(o,{id:"167",data:[{id:"国际源"},{id:"国内源"}],active:1,"tab-id":"fruit"},{title0:a(({value:s,isActive:n})=>[e("国际源")]),title1:a(({value:s,isActive:n})=>[e("国内源")]),tab0:a(({value:s,isActive:n})=>[u]),tab1:a(({value:s,isActive:n})=>[h]),_:1}),b])}const y=r(p,[["render",x],["__file","upgrading.html.vue"]]),f=JSON.parse('{"path":"/wings/1.0/upgrading.html","title":"升级 Wings","lang":"zh-CN","frontmatter":{"description":"升级 Wings 升级Wings并不困难，只需不到一分钟就可以完成。 Wings 版本需求 每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。 注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。 首先，下载最新的 wings 二进制文件到 /usr/lo...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/wings/1.0/upgrading.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"升级 Wings"}],["meta",{"property":"og:description","content":"升级 Wings 升级Wings并不困难，只需不到一分钟就可以完成。 Wings 版本需求 每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。 注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。 首先，下载最新的 wings 二进制文件到 /usr/lo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-02T06:15:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-02T06:15:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"升级 Wings\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-02T06:15:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Wings 版本需求","slug":"wings-版本需求","link":"#wings-版本需求","children":[]},{"level":2,"title":"重启进程","slug":"重启进程","link":"#重启进程","children":[]}],"git":{"createdTime":1579477267000,"updatedTime":1714630556000,"contributors":[{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":28},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":8},{"name":"softwarenoob","email":"admin@softwarenoob.com","commits":3},{"name":"Alex","email":"admin@softwarenoob.com","commits":2},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":2},{"name":"Jakob","email":"dev@schrej.net","commits":2},{"name":"Marco5699","email":"ngkin36@gmail.com","commits":2},{"name":"Matthew Penner","email":"me@matthewp.io","commits":2},{"name":"Angel Knutsen Aune","email":"djangel@live.no","commits":1},{"name":"Aniket","email":"58530748+HandyHat@users.noreply.github.com","commits":1},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":1},{"name":"DaneEveritt","email":"dane@daneeveritt.com","commits":1},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"Matteo","email":"scaringi.matteo@icloud.com","commits":1},{"name":"Niek Candaele","email":"22315101+niekcandaele@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.89,"words":266},"filePathRelative":"wings/1.0/upgrading.md","localizedDate":"2020年1月19日","autoDesc":true}');export{y as comp,f as data};