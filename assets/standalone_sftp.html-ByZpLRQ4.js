import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as i,a as e,e as n,b as a,w as s,d as l,o as d}from"./app-BJQLG3NG.js";const c={},p=e("h1",{id:"standalone-sftp-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#standalone-sftp-server"},[e("span",null,"Standalone SFTP Server")])],-1),u={class:"hint-container caution"},h=e("p",{class:"hint-container-title"},"This Software is Abandoned",-1),v=e("p",null,[n("This documentation is for "),e("strong",null,"abandoned software"),n(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1),m=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>Standalone SFTP support was introduced in <code>Panel@v0.7.11</code> and <code>Daemon@v0.6.8</code> and will not work with prior versions.</p></div><p>Pterodactyl now ships with the option to use a <a href="https://github.com/pterodactyl/sftp-server" target="_blank" rel="noopener noreferrer">standalone SFTP server</a> rather than using the one that was built into the Daemon. This provides better compatibility with SFTP clients, improved transfer speeds, and a more native approach to file handling and server operation.</p><p>Because this functionality is new, we&#39;ve decided to make it an opt-in process, rather than an opt-out process. This page will cover how to setup your standalone SFTP server.</p><h2 id="disable-daemon-s-server" tabindex="-1"><a class="header-anchor" href="#disable-daemon-s-server"><span>Disable Daemon&#39;s Server</span></a></h2><p>To disable the Daemon SFTP server, you only need to add <code>sftp.enabled=false</code> to your Daemon&#39;s <code>core.json</code> file.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;sftp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...
    <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">2022</span><span class="token punctuation">,</span>
    ...
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you&#39;ve done that, restarting the Daemon will apply the change and not boot the built-in server.</p><h2 id="run-the-standalone-server" tabindex="-1"><a class="header-anchor" href="#run-the-standalone-server"><span>Run the Standalone Server</span></a></h2><p>To download the standalone server, execute the command below in your Daemon&#39;s base directory (generally <code>/srv/daemon</code>).</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-Lo</span> sftp-server https://github.com/pterodactyl/sftp-server/releases/download/v1.0.5/sftp-server
<span class="token function">chmod</span> +x sftp-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Excellent, now you&#39;ve got the server binary. Because we&#39;ve written this server using <a href="https://golang.org" target="_blank" rel="noopener noreferrer"><code>go</code></a> there are no additional dependencies you need to install.</p><h3 id="start-the-server" tabindex="-1"><a class="header-anchor" href="#start-the-server"><span>Start the Server</span></a></h3><p>Finally, start the SFTP server so that you can then use it to access your files.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sftp-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, this will start the SFTP server on the old port of <code>2022</code>. If you want to use a different port it can be specified by passing the <code>--port</code> flag. For more advanced usage, please refer to the <a href="https://github.com/pterodactyl/sftp-server/tree/release/v1.0.4#running" target="_blank" rel="noopener noreferrer">GitHub README</a> which includes all of the flags and their default values.</p><h2 id="daemonize-server" tabindex="-1"><a class="header-anchor" href="#daemonize-server"><span>Daemonize Server</span></a></h2><p>Chances are you&#39;ll want to daemonize the SFTP server using something like <code>systemd</code> so that it will run in the background. Place the contents below in a file called <code>pterosftp.service</code> in the <code>/etc/systemd/system</code> directory.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
Description=Pterodactyl Standalone SFTP Server
After=wings.service

[Service]
User=root
WorkingDirectory=/srv/daemon
LimitNOFILE=4096
PIDFile=/var/run/wings/sftp.pid
ExecStart=/srv/daemon/sftp-server
Restart=on-failure
StartLimitInterval=600

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, run the command below to enable it in systemd and start the SFTP server.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> pterosftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="customizing-startup" tabindex="-1"><a class="header-anchor" href="#customizing-startup"><span>Customizing Startup</span></a></h3><p>If you&#39;re trying to pass additional arguments to the server when starting it using SystemD you&#39;ll want to modify the <code>ExecStart</code> line. Something like <code>ExecStart=/srv/daemon/sftp-server --port 2022</code> for example.</p>`,22);function b(g,f){const t=o("RouteLink");return d(),i("div",null,[p,e("div",u,[h,v,e("p",null,[n("You should be installing and using "),a(t,{to:"/wings/1.0/installing.html"},{default:s(()=>[n("Wings")]),_:1}),n(" in production environments with "),a(t,{to:"/panel/1.0/getting_started.html"},{default:s(()=>[n("Pterodactyl Panel 1.0")]),_:1}),n(".")])]),m])}const w=r(c,[["render",b],["__file","standalone_sftp.html.vue"]]),k=JSON.parse(`{"path":"/daemon/0.6/standalone_sftp.html","title":"Standalone SFTP Server","lang":"zh-CN","frontmatter":{"description":"Standalone SFTP Server This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This do...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/standalone_sftp.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Standalone SFTP Server"}],["meta",{"property":"og:description","content":"Standalone SFTP Server This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This do..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-02-25T04:30:39.000Z"}],["meta",{"property":"article:modified_time","content":"2021-02-25T04:30:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Standalone SFTP Server\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-02-25T04:30:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Disable Daemon's Server","slug":"disable-daemon-s-server","link":"#disable-daemon-s-server","children":[]},{"level":2,"title":"Run the Standalone Server","slug":"run-the-standalone-server","link":"#run-the-standalone-server","children":[{"level":3,"title":"Start the Server","slug":"start-the-server","link":"#start-the-server","children":[]}]},{"level":2,"title":"Daemonize Server","slug":"daemonize-server","link":"#daemonize-server","children":[{"level":3,"title":"Customizing Startup","slug":"customizing-startup","link":"#customizing-startup","children":[]}]}],"git":{"createdTime":1541895696000,"updatedTime":1614227439000,"contributors":[{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":4},{"name":"Jakob","email":"dev@schrej.net","commits":1},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"daemon/0.6/standalone_sftp.md","localizedDate":"2018年11月11日","autoDesc":true}`);export{w as comp,k as data};
