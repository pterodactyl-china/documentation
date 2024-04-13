import{_ as l}from"./wings_configuration_example-CiiF11xE.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as d,a as e,e as n,d as a,w as i,b as t}from"./app-BNPe33o9.js";const p={},m=e("h1",{id:"迁移至-wings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#迁移至-wings"},[e("span",null,"迁移至 Wings")])],-1),u=t(`<div class="hint-container caution"><p class="hint-container-title">面板版本要求</p><p>您<strong>必须</strong>运行翼龙面板 1.X 及以上版本才能使用 Wings。</p></div><p>执行此过程时，您将有一段短暂的离线时间，但不会影响正在运行的游戏进程。此外，在此期间，您的面板可能会离线（或处于维护模式），因此您的用户不会触发任何异常情况。</p><h2 id="安装-wings" tabindex="-1"><a class="header-anchor" href="#安装-wings"><span>安装 Wings</span></a></h2><p>安装守护程序的第一步是确保我们具有所需的目录结构设置。为此，请运行以下命令，该命令将创建基本目录并下载 Wings 可执行文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/pterodactyl
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /usr/local/bin/wings https://github.com/pterodactyl-china/wings/1.0/releases/latest/download/wings_linux_amd64
<span class="token function">chmod</span> u+x /usr/local/bin/wings

<span class="token comment"># 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-o</span> /usr/local/bin/wings <span class="token string">&quot;https://mirror.ghproxy.com/https://github.com/pterodactyl-china/wings/1.0/releases/latest/download/wings_linux_$([[ &quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;x86_64&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;amd64&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;arm64&quot;</span><span class="token punctuation">)</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复制新的配置文件" tabindex="-1"><a class="header-anchor" href="#复制新的配置文件"><span>复制新的配置文件</span></a></h2><p>安装 Wings 后，您需要从面板中复制一个新的配置文件。此文件采用新格式，将来应该更易于管理和编辑。</p><p>只需复制代码块的内容并将其粘贴到 <code>/etc/pterodactyl</code> 目录中的 <code>config.yml</code> 文件里。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当然，你也可以直接点击 [生成自动部署指令] 来生成一件命令覆盖，而不需要您手动覆盖。(请注意，此覆盖只会覆盖默认的 <code>/etc/pterodactyl</code> 目录下的配置文件)</p></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，你以前对配置所做的任何修改都会随之丢失。如果你对我们的默认设置有修改，最好的选择是使用面板生成的配置启动一次 Wings，然后再此基础上写入额外的配置设置。</p><p>从那里您可以根据需要进行任何调整。</p></div><h2 id="移除旧的守护进程" tabindex="-1"><a class="header-anchor" href="#移除旧的守护进程"><span>移除旧的守护进程</span></a></h2><p>现在安装了 Wings，我们需要从服务器中删除所有旧的守护程序代码，因为它不再被使用。为此，只需执行以下命令 - 假设您的旧守护程序路径默认于 <code>/srv/daemon</code> 目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 停止旧的守护程序</span>
systemctl stop wings

<span class="token comment"># 删除整个目录。这里没有任何我们在这次迁移中实际需要的东西。</span>
<span class="token comment"># 请记住，服务器数据默认存储在 /srv/daemon-data 中，如果你没做修改。</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /srv/daemon

<span class="token comment"># 如果没有对 NodeJS 有其他用途，您可以选择从你的系统中删除它。</span>
<span class="token function">apt</span> <span class="token parameter variable">-y</span> remove nodejs <span class="token comment"># 或: yum remove nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除独立-sftp" tabindex="-1"><a class="header-anchor" href="#删除独立-sftp"><span>删除独立 SFTP</span></a></h3>`,15),v=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 停止并禁用独立 sftp</span>
systemctl disable <span class="token parameter variable">--now</span> pterosftp

<span class="token comment"># 删除 systemd 服务</span>
<span class="token function">rm</span> /etc/systemd/system/pterosftp.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wings-守护进程" tabindex="-1"><a class="header-anchor" href="#wings-守护进程"><span>Wings 守护进程</span></a></h2><p>然后，您需要编辑现有 <code>systemd</code> 的 Wings 服务文件以指向新的控制软件。为此，请打开 <code>/etc/systemd/system/wings.service</code> 文件并将其中的全部内容替换为以下内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/1.0/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=600

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，启动 Wings。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>systemctl daemon-reload
systemctl enable --now wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">如果 Wings 没有启动怎么办？</p><p>如果此时您在启动 Wings 时遇到问题，请运行以下命令直接启动 Wings 并检查是否有任何特定的错误输出。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo wings --debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,7);function g(h,b){const s=c("RouteLink");return o(),d("div",null,[m,e("p",null,[n("本指南适用于希望从旧的 Node.JS 守护程序迁移到 Wings 的人。如果您是第一次尝试在新节点上安装 Wings，请参阅 "),a(s,{to:"/wings/1.0/installing.html"},{default:i(()=>[n("安装指南")]),_:1}),n(" 。")]),u,e("p",null,[n("如果您使用带有旧守护程序的 "),a(s,{to:"/daemon/0.6/standalone_sftp.html"},{default:i(()=>[n("独立SFTP服务器")]),_:1}),n(" ，我们不再需要它的 systemd 服务,所以我们需要删除它。 您可以使用以下命令执行此操作。")]),v])}const x=r(p,[["render",g],["__file","migrating.html.vue"]]),w=JSON.parse('{"path":"/wings/1.0/migrating.html","title":"迁移至 Wings","lang":"zh-CN","frontmatter":{"description":"迁移至 Wings 本指南适用于希望从旧的 Node.JS 守护程序迁移到 Wings 的人。如果您是第一次尝试在新节点上安装 Wings，请参阅 。 面板版本要求 您必须运行翼龙面板 1.X 及以上版本才能使用 Wings。 执行此过程时，您将有一段短暂的离线时间，但不会影响正在运行的游戏进程。此外，在此期间，您的面板可能会离线（或处于维护模式），因...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/wings/1.0/migrating.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"迁移至 Wings"}],["meta",{"property":"og:description","content":"迁移至 Wings 本指南适用于希望从旧的 Node.JS 守护程序迁移到 Wings 的人。如果您是第一次尝试在新节点上安装 Wings，请参阅 。 面板版本要求 您必须运行翼龙面板 1.X 及以上版本才能使用 Wings。 执行此过程时，您将有一段短暂的离线时间，但不会影响正在运行的游戏进程。此外，在此期间，您的面板可能会离线（或处于维护模式），因..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迁移至 Wings\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装 Wings","slug":"安装-wings","link":"#安装-wings","children":[]},{"level":2,"title":"复制新的配置文件","slug":"复制新的配置文件","link":"#复制新的配置文件","children":[]},{"level":2,"title":"移除旧的守护进程","slug":"移除旧的守护进程","link":"#移除旧的守护进程","children":[{"level":3,"title":"删除独立 SFTP","slug":"删除独立-sftp","link":"#删除独立-sftp","children":[]}]},{"level":2,"title":"Wings 守护进程","slug":"wings-守护进程","link":"#wings-守护进程","children":[]}],"git":{"createdTime":1598749007000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"wings/1.0/migrating.md","localizedDate":"2020年8月30日","autoDesc":true}');export{x as comp,w as data};
