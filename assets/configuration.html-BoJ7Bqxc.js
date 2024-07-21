import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as r,a as e,e as t,b as s,w as a,d,o as l}from"./app-Cx48BsNM.js";const h={},c=e("h1",{id:"additional-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-configuration"},[e("span",null,"Additional Configuration")])],-1),p={class:"hint-container caution"},u=e("p",{class:"hint-container-title"},"This Software is Abandoned",-1),k=e("p",null,[t("This documentation is for "),e("strong",null,"abandoned software"),t(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1),m=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>These are advanced configurations for the daemon. You risk breaking your daemon and making containers un-usable if you modify something incorrectly. Proceed at your own risk, and only if you know what each configuration value does.</p></div><p>The documentation below uses dot-notated JSON to explain where each setting should live. You will need to manually expand this syntax when adding to the <code>core.json</code> file for the Daemon. For example, something like <code>internals.throttle.enabled</code> would be expanded to the JSON below.</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;internals&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;throttle&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;enabled&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="output-throttles" tabindex="-1"><a class="header-anchor" href="#output-throttles"><span>Output Throttles</span></a></h2><p>There are a few throttle limits built into the Daemon to keep people from causing issues with data volume and CPU usage. Under normal circumstances users should not encounter these limits. You might see the occasional data throttling warning while starting a server or when there is a sudden spike in data output.</p><p>If you&#39;re seeing more servers than you expected being killed as a result of the Daemon throttler, you can make adjustments to the settings below. Please note the configs below are in JSON dot-notation and should be expanded out into a normal JSON object.</p><table><thead><tr><th>Setting Path</th><th>Default Value</th><th>Notes</th></tr></thead><tbody><tr><td><code>enabled</code></td><td>true</td><td>Determines if the throttle (and associated values below) should be used.</td></tr><tr><td><code>kill_at_count</code></td><td>5</td><td>The number of warnings that can accumulate for a particular instance before the server process is killed. The decay time below affects how quickly this value is decreased.</td></tr><tr><td><code>decay</code></td><td>10</td><td>The number of seconds that a server process must go without triggering a data throttle warning before the throttle count begins decreasing. This loop is processed every 5 seconds and will decrement the throttle count by one when the process goes more than this number of seconds without a data throttle occurring.</td></tr><tr><td><code>bytes</code></td><td>30720</td><td>⚠️ <em>(removed in v0.5.5)</em> The maximum number of bytes of data that can be output in the defined interval before a warning occurs.</td></tr><tr><td><code>lines</code></td><td>1000</td><td>⚠️ <em>(added in v0.5.6)</em> The number of lines that can be output by the server process in the defined check interval time. By default, 5,000 lines in ~500ms results in a server process kill.</td></tr><tr><td><code>check_interval_ms</code></td><td>100</td><td>The number of milliseconds between the throttle resetting the used bytes or line count.</td></tr></tbody></table><p>Please note that all of the settings above are in the <code>internals.throttle.X</code> path. So, <code>enabled</code> is actually <code>internals.throttle.enabled</code>.</p><h2 id="custom-network-interfaces" tabindex="-1"><a class="header-anchor" href="#custom-network-interfaces"><span>Custom Network Interfaces</span></a></h2><p>If for whatever reason you need to modify the network interfaces used for Pterodactyl&#39;s local Docker network you can do so by modifying the <code>core.json</code> file for the daemon. In most cases you&#39;ll just be modifying the network name to allow your servers to use the host network stack. To do so, just change <code>docker.network.name</code> to be <code>host</code> rather than <code>pterodactyl_nw</code> as shown below.</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>While changing to the host network stack does allow servers running on Pterodactyl to have direct access to local interfaces and bind to specific IP addresses (required for some Steam games), it is not recommended on public installations of Pterodactyl (where you have other users running servers).</p><p>Using the <code>host</code> stack removes many network specific protections afforded by Docker, and will allow server processes to access anything on the host, as well as bind to any IP or Port they wish.</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>Any changes to the network after the daemon has been started will require you to remove the docker network and restart the daemon. Any servers on the host need to be stopped before and most likely rebuilt.</p><p>The following will stop the daemon, remove the network, and start the daemon again. Run at your own risk.<br><code>systemctl stop wings &amp;&amp; docker network rm pterodactyl_nw &amp;&amp; systemctl start wings</code></p></div><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;docker&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;socket&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/var/run/docker.sock&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;autoupdate_images&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;network&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pterodactyl_nw&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;interfaces&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;v4&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;subnet&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;172.18.0.0/16&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;gateway&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;172.18.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;interface&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;172.18.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="private-registries" tabindex="-1"><a class="header-anchor" href="#private-registries"><span>Private Registries</span></a></h2><table><thead><tr><th>Setting Path</th><th>Default Value</th><th>Notes</th></tr></thead><tbody><tr><td><code>username</code></td><td><em>none</em></td><td>The username to use when connecting to the registry.</td></tr><tr><td><code>password</code></td><td><em>none</em></td><td>The password associated with the account.</td></tr><tr><td><code>images</code></td><td><em>none</em></td><td>An array of images that are associated with the private registry.</td></tr><tr><td><code>auth</code></td><td><em>none</em></td><td></td></tr><tr><td><code>email</code></td><td><em>none</em></td><td></td></tr><tr><td><code>serveraddress</code></td><td><em>none</em></td><td>The address to the server the registry is located on.</td></tr><tr><td><code>key</code></td><td><em>none</em></td><td>A pre-generated base64 encoded authentication string. If provided none of the above options are required.</td></tr></tbody></table><p>Please note that all of the settings above are in the <code>docker.registry.X</code> path. So, <code>username</code> is actually <code>docker.registry.username</code>.</p><h2 id="security-policies" tabindex="-1"><a class="header-anchor" href="#security-policies"><span>Security Policies</span></a></h2><p>This daemon ships with a very strict security configuration designed to limit access to the host system, and mitigate a large range of potential attack vectors. However, some users might need to tweak these settings, or are running on a private instance and are willing to decrease some of the security measures.</p><table><thead><tr><th>Setting Path</th><th>Default Value</th><th>Notes</th></tr></thead><tbody><tr><td><code>ipv6</code></td><td>true</td><td>Set this to false to disable IPv6 networking on the pterodactyl0 interface.</td></tr><tr><td><code>internal</code></td><td>false</td><td>Set this to true to prevent any external network access to all containers on the pterodactyl0 interface.</td></tr><tr><td><code>enable_icc</code></td><td>true</td><td>Set this to false to disallow containers to access services running on the host system&#39;s non-public IP addresses. Setting this to false does make it impossible to connect (from a container) to MySQL/Redis/etc. running on the host system without using the public IP address.</td></tr><tr><td><code>enable_ip_masquerade</code></td><td>true</td><td>Set this to false to disable IP Masquerading on the pterodactyl0 interface.</td></tr></tbody></table><p>Please note that all of the settings above are in the <code>docker.policy.network.X</code> path. So, <code>ipv6</code> is actually <code>docker.policy.network.ipv6</code>.</p><h2 id="container-policy" tabindex="-1"><a class="header-anchor" href="#container-policy"><span>Container Policy</span></a></h2><table><thead><tr><th>Setting Path</th><th>Default Value</th><th>Notes</th></tr></thead><tbody><tr><td><code>tmpfs</code></td><td><code>rw,exec,nosuid,size=50M</code></td><td>These are the arguments used for mounting a <code>tmpfs</code> directory into containers to allow certain programs to run.</td></tr><tr><td><code>log_driver</code></td><td>none</td><td>⚠️ This option was <strong>removed</strong> in <code>v0.6</code> and is forcibly set to <code>json-file</code>. The log driver to use for containers. We default to <code>none</code> to mitigate a potential DoS attack vector if a server were to spam log output.</td></tr><tr><td><code>log_opts</code></td><td>array</td><td></td></tr><tr><td><code>log_opts.max_size</code></td><td><code>5m</code></td><td>The maximum size of the server output log file created by Docker.</td></tr><tr><td><code>log_opts.max_files</code></td><td><code>1</code></td><td>The maximum number of files that Docker will create with output from the server.</td></tr><tr><td><code>readonly_root</code></td><td>true</td><td>Determines if the root filesystem of the container should be readonly.</td></tr><tr><td><code>securityopts</code></td><td>array</td><td>An array of security options to apply to a container. The default array is provided below.</td></tr><tr><td><code>cap_drop</code></td><td>array</td><td>An array of linux capabilities to drop from the container (in addition to ones <a href="https://docs.docker.com/engine/security/security/#linux-kernel-capabilities" target="_blank" rel="noopener noreferrer">dropped by docker already</a>. A listing of the default array is below.</td></tr></tbody></table><p>Please note that all of the settings above are in the <code>docker.policy.container.X</code> path. So, <code>tmpfs</code> is actually <code>docker.policy.container.tmpfs</code>.</p><h3 id="default-security-opts-array" tabindex="-1"><a class="header-anchor" href="#default-security-opts-array"><span>Default Security Opts Array</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;no-new-privileges&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default-capabilities-drop-array" tabindex="-1"><a class="header-anchor" href="#default-capabilities-drop-array"><span>Default Capabilities Drop Array</span></a></h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Starting with <code>v0.6</code> of the Daemon, the following previously <em>dropped</em> capabilities are available in containers: <code>chown</code>, <code>kill</code>, <code>setgid</code>, and <code>setuid</code>.</p></div><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;setpcap&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;mknod&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;audit_write&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;net_raw&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;dac_override&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;fowner&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;fsetid&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;net_bind_service&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;sys_chroot&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">    &#39;setfcap&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enabling-cloudflare" tabindex="-1"><a class="header-anchor" href="#enabling-cloudflare"><span>Enabling Cloudflare</span></a></h2><p>Enabling Cloudflare on the daemon isn&#39;t particularly useful since users do not connect directly to the daemon port, and users need an unproxied hostname to access any servers on the node. As a result it&#39;s not possible to conceal the IP address of your node machine, but some people want to enable it regardless.</p><p>Cloudflare only proxies the default daemon port (8080) when using HTTP. In order to get the daemon to work with Cloudflare when HTTPS is enabled you must change the daemon port to one that Cloudflare will proxy such as 8443. Since Cloudflare only proxies HTTP/HTTPS traffic for non-enterprise plans you cannot proxy the SFTP port.</p>`,31);function g(y,b){const i=o("RouteLink");return l(),r("div",null,[c,e("div",p,[u,k,e("p",null,[t("You should be installing and using "),s(i,{to:"/wings/1.0/installing.html"},{default:a(()=>[t("Wings")]),_:1}),t(" in production environments with "),s(i,{to:"/panel/1.0/getting_started.html"},{default:a(()=>[t("Pterodactyl Panel 1.0")]),_:1}),t(".")])]),m])}const w=n(h,[["render",g],["__file","configuration.html.vue"]]),B=JSON.parse('{"path":"/daemon/0.6/configuration.html","title":"Additional Configuration","lang":"zh-CN","frontmatter":{"head":[["meta",{"name":"robots","content":"noindex"}],["meta",{"property":"og:url","content":"https://pterodactyl.top/daemon/0.6/configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Additional Configuration"}],["meta",{"property":"og:description","content":"Additional Configuration This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-21T05:37:28.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T05:37:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Additional Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-21T05:37:28.000Z\\",\\"author\\":[]}"]],"description":"Additional Configuration This Software is Abandoned This documentation is for abandoned software which does not recieve any security updates or support from the community. This ..."},"headers":[{"level":2,"title":"Output Throttles","slug":"output-throttles","link":"#output-throttles","children":[]},{"level":2,"title":"Custom Network Interfaces","slug":"custom-network-interfaces","link":"#custom-network-interfaces","children":[]},{"level":2,"title":"Private Registries","slug":"private-registries","link":"#private-registries","children":[]},{"level":2,"title":"Security Policies","slug":"security-policies","link":"#security-policies","children":[]},{"level":2,"title":"Container Policy","slug":"container-policy","link":"#container-policy","children":[{"level":3,"title":"Default Security Opts Array","slug":"default-security-opts-array","link":"#default-security-opts-array","children":[]},{"level":3,"title":"Default Capabilities Drop Array","slug":"default-capabilities-drop-array","link":"#default-capabilities-drop-array","children":[]}]},{"level":2,"title":"Enabling Cloudflare","slug":"enabling-cloudflare","link":"#enabling-cloudflare","children":[]}],"git":{"createdTime":1532809496000,"updatedTime":1721540248000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":3},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":1},{"name":"Daniel Barton","email":"danielb@purpleflaghosting.com","commits":1},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1}]},"readingTime":{"minutes":4.33,"words":1298},"filePathRelative":"daemon/0.6/configuration.md","localizedDate":"2018年7月28日","autoDesc":true}');export{w as comp,B as data};