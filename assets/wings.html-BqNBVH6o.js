import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as t,d as n}from"./app-BJQLG3NG.js";const o={},a=n(`<h1 id="构建-wings" tabindex="-1"><a class="header-anchor" href="#构建-wings"><span>构建 Wings</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Do <strong>not</strong> run the following steps on your production nodes.</p></div><p>Wings is written in Go. This makes it very easy to modify and compile it on your own, and distribute your own binaries. This guide will cover the steps necessary to build it yourself.</p><p>It will not, however, explain where to look for certain aspects of Wings and which changes are necessary to achieve specific results. Knowledge of the Go language is required if you want to modify it.</p><p>Building Go programs is very easy, and the same also applies to Wings. Go is cross-platform, but Wings only supports Linux at the moment. The easiest way to compile it for Linux is to run the commands on a Linux machine.</p><h2 id="build-requirements" tabindex="-1"><a class="header-anchor" href="#build-requirements"><span>Build Requirements</span></a></h2><p>An up to date version of Go is required to compile Wings. The minimum version can be found at the top of the <a href="https://github.com/pterodactyl-china/wings/blob/develop/go.mod" target="_blank" rel="noopener noreferrer">go.mod</a> file. See the <a href="https://golang.org/doc/install" target="_blank" rel="noopener noreferrer">official instructions</a> for help with installing Go.</p><h2 id="building" tabindex="-1"><a class="header-anchor" href="#building"><span>Building</span></a></h2><p>Execute the following command in your local clone of the repository to compile Wings into a binary.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should now have a <code>wings</code> binary file in your wings directory.</p><h2 id="install-the-new-binary" tabindex="-1"><a class="header-anchor" href="#install-the-new-binary"><span>Install the new binary</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Root required</p><p>Some the following commands require root permissions. Prepend them with <code>sudo</code> if you are not logged in as root.</p></div><ol><li>Backup the current installation of wings</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mv</span> /usr/local/bin/wings /usr/local/bin/wings-backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Place the new binary in <code>/usr/local/bin</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cp ./wings /usr/local/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Restart wings</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl restart wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2><p>If the wings service does not start properly, you can try to start Wings in a console window.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wings --debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remember to stop the system service before, and re-enable it afterwards.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl stop wings

systemctl start wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),s=[a];function r(l,d){return t(),i("div",null,s)}const m=e(o,[["render",r],["__file","wings.html.vue"]]),p=JSON.parse('{"path":"/community/customization/wings.html","title":"构建 Wings","lang":"zh-CN","frontmatter":{"description":"构建 Wings 注意 Do not run the following steps on your production nodes. Wings is written in Go. This makes it very easy to modify and compile it on your own, and distribute your ow...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/customization/wings.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"构建 Wings"}],["meta",{"property":"og:description","content":"构建 Wings 注意 Do not run the following steps on your production nodes. Wings is written in Go. This makes it very easy to modify and compile it on your own, and distribute your ow..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建 Wings\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Build Requirements","slug":"build-requirements","link":"#build-requirements","children":[]},{"level":2,"title":"Building","slug":"building","link":"#building","children":[]},{"level":2,"title":"Install the new binary","slug":"install-the-new-binary","link":"#install-the-new-binary","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"git":{"createdTime":1607699121000,"updatedTime":1715321703000,"contributors":[{"name":"DomiiBunn","email":"51760394+DomiiBunn@users.noreply.github.com","commits":8},{"name":"Dominika Jadowska","email":"domi.jadowska@gmail.com","commits":2},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1}]},"readingTime":{"minutes":0.97,"words":292},"filePathRelative":"community/customization/wings.md","localizedDate":"2020年12月11日","autoDesc":true}');export{m as comp,p as data};
