import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as a}from"./app-BNPe33o9.js";const e={},o=a(`<h1 id="升级-wings" tabindex="-1"><a class="header-anchor" href="#升级-wings"><span>升级 Wings</span></a></h1><p>升级Wings并不困难，只需不到一分钟就可以完成。</p><h2 id="wings-版本需求" tabindex="-1"><a class="header-anchor" href="#wings-版本需求"><span>Wings 版本需求</span></a></h2><p>每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。</p><table><thead><tr><th>面板版本</th><th>Wings版本</th><th>支持状况</th></tr></thead><tbody><tr><td>1.0.x</td><td>1.0.x</td><td></td></tr><tr><td>1.1.x</td><td>1.1.x</td><td></td></tr><tr><td>1.2.x</td><td>1.2.x</td><td></td></tr><tr><td>1.3.x</td><td>1.3.x</td><td></td></tr><tr><td>1.4.x</td><td>1.4.x</td><td></td></tr><tr><td>1.5.x</td><td>1.4.x</td><td></td></tr><tr><td>1.6.x</td><td>1.4.x</td><td></td></tr><tr><td>1.7.x</td><td>1.5.x</td><td></td></tr><tr><td>1.8.x</td><td>1.6.x</td><td></td></tr><tr><td>1.9.x</td><td>1.6.x</td><td></td></tr><tr><td><strong>1.10.x</strong></td><td><strong>1.7.x</strong></td><td>✅</td></tr><tr><td><strong>1.11.x</strong></td><td><strong>1.11.x</strong></td><td>✅</td></tr></tbody></table><p><em>注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。</em></p><p>首先，下载最新的 wings 二进制文件到 <code>/usr/local/bin</code>。您将需要短暂停止 Wings。 <em>您正在运行的服务器<strong>不会</strong>受到影响。</em></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl stop wings
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /usr/local/bin/wings <span class="token string">&quot;https://github.com/pterodactyl-china/wings/1.0/releases/latest/download/wings_linux_$([[ &quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;amd64&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;arm64&quot;</span><span class="token punctuation">)</span><span class="token string">&quot;
chmod u+x /usr/local/bin/wings

# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取
curl -L -o /usr/local/bin/wings &quot;</span>https://mirror.ghproxy.com/https://github.com/pterodactyl-china/wings/1.0/releases/latest/download/wings_linux_<span class="token variable"><span class="token variable">$(</span><span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;amd64&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;arm64&quot;</span><span class="token variable">)</span></span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重启进程" tabindex="-1"><a class="header-anchor" href="#重启进程"><span>重启进程</span></a></h2><p>最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl restart wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),i=[o];function r(p,d){return s(),n("div",null,i)}const g=t(e,[["render",r],["__file","upgrading.html.vue"]]),u=JSON.parse('{"path":"/wings/1.0/upgrading.html","title":"升级 Wings","lang":"zh-CN","frontmatter":{"description":"升级 Wings 升级Wings并不困难，只需不到一分钟就可以完成。 Wings 版本需求 每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。 注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。 首先，下载最新的 wings 二进制文件到 /usr/lo...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/wings/1.0/upgrading.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"升级 Wings"}],["meta",{"property":"og:description","content":"升级 Wings 升级Wings并不困难，只需不到一分钟就可以完成。 Wings 版本需求 每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。 注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。 首先，下载最新的 wings 二进制文件到 /usr/lo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"升级 Wings\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Wings 版本需求","slug":"wings-版本需求","link":"#wings-版本需求","children":[]},{"level":2,"title":"重启进程","slug":"重启进程","link":"#重启进程","children":[]}],"git":{"createdTime":1579477267000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"wings/1.0/upgrading.md","localizedDate":"2020年1月19日","autoDesc":true}');export{g as comp,u as data};
