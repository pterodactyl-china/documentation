import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as r,a,e,b as d,d as t}from"./app-BepD98E1.js";const l={},c=t('<h1 id="docker-on-debian-8" tabindex="-1"><a class="header-anchor" href="#docker-on-debian-8"><span>Docker on Debian 8</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>There is a potential for broken software after this upgrade as we are moving to a non-stable kernel (in regards to mainline Debian). Please take backups and only proceed if you are comfortable with this process.</p></div><h2 id="install-docker" tabindex="-1"><a class="header-anchor" href="#install-docker"><span>Install Docker</span></a></h2>',3),p={href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>Once you&#39;ve done that, if you run <code>docker info</code> you&#39;ll notice some missing features at the bottom, something like the output below.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WARNING: No memory limit support
WARNING: No swap limit support
WARNING: No kernel memory limit support
WARNING: No oom kill disable support
WARNING: No cpu cfs quota support
WARNING: No cpu cfs period support
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-grub-startup" tabindex="-1"><a class="header-anchor" href="#update-grub-startup"><span>Update GRUB Startup</span></a></h2><p>To fix the memory limit support issues, we just need to add two arguments to our default grub startup. Start by opening <code>/etc/default/grub</code> and adding the following arguments to <code>GRUB_CMDLINE_LINUX_DEFAULT</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>swapaccount=1 cgroup_enable=memory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The line should then look like the one below — assuming nothing else was in the quote to begin with.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRUB_CMDLINE_LINUX_DEFAULT=&quot;swapaccount=1 cgroup_enable=memory&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After doing that, run <code>sudo update-grub</code> to update our grub configuration.</p><h2 id="add-backports-repo" tabindex="-1"><a class="header-anchor" href="#add-backports-repo"><span>Add Backports Repo</span></a></h2><p>We then need to enable the <code>jessie-backports</code> apt repository to install a newer kernel. To do this, run the commands below.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> deb http://http.debian.net/debian jessie-backports main <span class="token operator">&gt;</span> /etc/apt/sources.list.d/jessie-backports.list
<span class="token builtin class-name">echo</span> deb http://http.debian.net/debian jessie-backports main contrib non-free <span class="token operator">&gt;</span> /etc/apt/sources.list.d/jessie-backports.list
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To find the most recent kernels, run <code>apt-cache search linux-image</code> which will list all of the ones available. In this case, we&#39;ll install the <code>4.9.0</code> kernel using the command below. Once we&#39;ve done that, it is time to reboot the server to start using this kernel.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-t</span> jessie-backports linux-image-4.9.0-0.bpo.3-amd64
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-software-setup-docker" tabindex="-1"><a class="header-anchor" href="#update-software-setup-docker"><span>Update Software &amp; Setup Docker</span></a></h2><p>Now that we&#39;re on the new kernel you probably need to update some software to take advantage of it. To do this, simply run the command below.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once that is done, we need to make an adjustment to docker to use <code>overlay2</code> rather than <code>aufs</code> since <code>aufs</code> is not supported on this kernel currently. Run the command below to do so.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s,/usr/bin/dockerd,/usr/bin/dockerd --storage-driver=overlay2,g&#39;</span> /lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Finally, update <code>systemd</code> and start docker using the following commands.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
<span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Docker should now be running and reporting no errors if you run <code>docker info</code>!</p>`,21);function m(h,b){const n=o("ExternalLinkIcon");return i(),r("div",null,[c,a("p",null,[e("To begin with, we're going to install docker just like we would for any other OS by following Docker's "),a("a",p,[e("official documentation for Debian"),d(n)]),e(".")]),u])}const v=s(l,[["render",m],["__file","debian_8_docker.html.vue"]]),f=JSON.parse('{"path":"/daemon/0.6/debian_8_docker.html","title":"Docker on Debian 8","lang":"zh-CN","frontmatter":{"description":"Docker on Debian 8 注意 There is a potential for broken software after this upgrade as we are moving to a non-stable kernel (in regards to mainline Debian). Please take backups an...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/debian_8_docker.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Docker on Debian 8"}],["meta",{"property":"og:description","content":"Docker on Debian 8 注意 There is a potential for broken software after this upgrade as we are moving to a non-stable kernel (in regards to mainline Debian). Please take backups an..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker on Debian 8\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install Docker","slug":"install-docker","link":"#install-docker","children":[]},{"level":2,"title":"Update GRUB Startup","slug":"update-grub-startup","link":"#update-grub-startup","children":[]},{"level":2,"title":"Add Backports Repo","slug":"add-backports-repo","link":"#add-backports-repo","children":[]},{"level":2,"title":"Update Software & Setup Docker","slug":"update-software-setup-docker","link":"#update-software-setup-docker","children":[]}],"git":{"createdTime":1532761043000,"updatedTime":1713315474000,"contributors":[{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"daemon/0.6/debian_8_docker.md","localizedDate":"2018年7月28日","autoDesc":true}');export{v as comp,f as data};