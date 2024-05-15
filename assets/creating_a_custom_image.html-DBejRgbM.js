import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,d as a,a as e,e as n}from"./app-BJQLG3NG.js";const o={},r=a(`<h1 id="创建自定义-docker-镜像" tabindex="-1"><a class="header-anchor" href="#创建自定义-docker-镜像"><span>创建自定义 Docker 镜像</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>This tutorial uses examples from our <a href="https://github.com/pterodactyl/images/tree/java" target="_blank" rel="noopener noreferrer"><code>core:java</code></a> docker image, which can be found on GitHub. This tutorial also assumes some knowledge of <a href="https://docker.io/" target="_blank" rel="noopener noreferrer">Docker</a>, we suggest reading up if this all looks foreign to you.</p></div><h2 id="creating-the-dockerfile" tabindex="-1"><a class="header-anchor" href="#creating-the-dockerfile"><span>Creating the Dockerfile</span></a></h2><p>The most important part of this process is to create the <a href="https://docs.docker.com/engine/reference/builder/" target="_blank" rel="noopener noreferrer"><code>Dockerfile</code></a> that will be used by the Daemon. Due to heavy restrictions on server containers, you must setup this file in a specific manner.</p><p>We try to make use of <a href="https://alpinelinux.org" target="_blank" rel="noopener noreferrer">Alpine Linux</a> as much as possible for our images in order to keep their size down.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ----------------------------------</span>
<span class="token comment"># Pterodactyl Core Dockerfile</span>
<span class="token comment"># Environment: Java</span>
<span class="token comment"># Minimum Panel Version: 0.6.0</span>
<span class="token comment"># ----------------------------------</span>
FROM openjdk:8-jdk-alpine

MAINTAINER Pterodactyl Software, <span class="token operator">&lt;</span>support@pterodactyl.io<span class="token operator">&gt;</span>

RUN apk <span class="token function">add</span> --no-cache <span class="token parameter variable">--update</span> <span class="token function">curl</span> ca-certificates openssl <span class="token function">git</span> <span class="token function">tar</span> <span class="token function">bash</span> sqlite fontconfig <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> adduser --disabled-password <span class="token parameter variable">--home</span> /home/container container

<span class="token environment constant">USER</span> container
ENV  <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>container <span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home/container

WORKDIR /home/container

COPY ./entrypoint.sh /entrypoint.sh

CMD <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/entrypoint.sh&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lets walk through the <code>Dockerfile</code> above. The first thing you&#39;ll notice is the <a href="https://docs.docker.com/engine/reference/builder/#from" target="_blank" rel="noopener noreferrer"><code>FROM</code></a> declaration.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>FROM openjdk:8-jdk-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this case, we are using <a href="https://github.com/docker-library/openjdk" target="_blank" rel="noopener noreferrer"><code>openjdk:8-jdk-alpine</code></a> which provides us with Java 8.</p><h2 id="installing-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-dependencies"><span>Installing Dependencies</span></a></h2><p>The next thing we do is install the dependencies we will need using Alpine&#39;s package manager: <code>apk</code>. You&#39;ll notice some specific flags that keep the container small, including <code>--no-cache</code>, as well as everything being contained in a single <a href="https://docs.docker.com/engine/reference/builder/#run" target="_blank" rel="noopener noreferrer"><code>RUN</code></a> block.</p><h2 id="creating-a-container-user" tabindex="-1"><a class="header-anchor" href="#creating-a-container-user"><span>Creating a Container User</span></a></h2><p>Within this <code>RUN</code> block, you&#39;ll notice the <code>useradd</code> command.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adduser <span class="token parameter variable">-D</span> <span class="token parameter variable">-h</span> /home/container container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>All Pterodactyl containers must have a user named <code>container</code>, and the user home <strong>must</strong> be <code>/home/container</code>.</p></div><p>After we create that user, we then define the default container <a href="https://docs.docker.com/engine/reference/builder/#user" target="_blank" rel="noopener noreferrer"><code>USER</code></a> as well as a few <a href="https://docs.docker.com/engine/reference/builder/#env" target="_blank" rel="noopener noreferrer"><code>ENV</code></a> settings to be applied to things running within the container.</p><h2 id="work-directory-entrypoint" tabindex="-1"><a class="header-anchor" href="#work-directory-entrypoint"><span>Work Directory &amp; Entrypoint</span></a></h2><p>One of the last things we do is define a <a href="https://docs.docker.com/engine/reference/builder/#workdir" target="_blank" rel="noopener noreferrer"><code>WORKDIR</code></a> which is where everything else will be executed. The <code>WORKDIR</code> must be set the <code>/home/container</code>.</p><p>Finally, we need to copy our <a href="https://docs.docker.com/engine/reference/builder/#entrypoint" target="_blank" rel="noopener noreferrer"><code>ENTRYPOINT</code></a> script into the docker image root. This is done using <a href="https://docs.docker.com/engine/reference/builder/#copy" target="_blank" rel="noopener noreferrer"><code>COPY</code></a>, after which we define the command to be used when the container is started using <a href="https://docs.docker.com/engine/reference/builder/#cmd" target="_blank" rel="noopener noreferrer"><code>CMD</code></a>. The <code>CMD</code> line should always point to the <code>entrypoint.sh</code> file.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>COPY ./entrypoint.sh /entrypoint.sh
CMD <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/entrypoint.sh&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="entrypoint-script" tabindex="-1"><a class="header-anchor" href="#entrypoint-script"><span>Entrypoint Script</span></a></h2><p>In order to complete this <code>Dockerfile</code>, we will need an <code>entrypoint.sh</code> file which tells Docker how to run this specific server type.</p><p>These entrypoint files are actually fairly abstracted, and the Daemon will pass in the start command as an environment variable before processing it and then executing the command.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">cd</span> /home/container

<span class="token comment"># Output Current Java Version</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span> <span class="token comment">## only really needed to show what version is being used. Should be changed for different applications</span>

<span class="token comment"># Replace Startup Variables</span>
<span class="token assign-left variable">MODIFIED_STARTUP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">eval</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">$(</span>echo $<span class="token punctuation">{</span>STARTUP<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/{{/\${/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/}}/}/g&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;:/home/container$ <span class="token variable">\${MODIFIED_STARTUP}</span>&quot;</span>

<span class="token comment"># Run the Server</span>
<span class="token variable">\${MODIFIED_STARTUP}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The second command, <code>cd /home/container</code>, simply ensures we are in the correct directory when running the rest of the commands. We then follow that up with <code>java -version</code> to output this information to end-users, but that is not necessary.</p><h2 id="modifying-the-startup-command" tabindex="-1"><a class="header-anchor" href="#modifying-the-startup-command"><span>Modifying the Startup Command</span></a></h2><p>The most significant part of this file is the <code>MODIFIED_STARTUP</code> environment variable. What we are doing in this case is parsing the environment <code>STARTUP</code> that is passed into the container by the Daemon. In most cases, this variable looks something like the example below:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">STARTUP</span><span class="token operator">=</span><span class="token string">&quot;java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),c=e("div",null,[e("p",null,[n("You'll notice some placeholders there, specifically "),e("code",{"v-pre":""},"{{SERVER_MEMORY}}"),n(" and "),e("code",{"v-pre":""},"{{SERVER_JARFILE}}"),n(". These both refer to other environment variables being passed in, and they look something like the example below.")])],-1),l=a('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">SERVER_MEMORY</span><span class="token operator">=</span><span class="token number">1024</span>\n<span class="token assign-left variable">SERVER_JARFILE</span><span class="token operator">=</span>server.jar\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a host of different environment variables, and they change depending on the specific service option configuration. However, that is not necessarily anything to worry about here.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">MODIFIED_STARTUP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">eval</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">$(</span>echo $<span class="token punctuation">{</span>STARTUP<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/{{/${/g&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/}}/}/g&#39;</span><span class="token punctuation">)</span><span class="token variable">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),p=e("div",null,[e("p",null,[n("The command above simply evaluates the "),e("code",{"v-pre":""},"STARTUP"),n(" environment variable, and then replaces anything surrounded in curly braces "),e("code",{"v-pre":""},"{{EXAMPLE}}"),n(" with a matching environment variable (such as "),e("code",{"v-pre":""},"EXAMPLE"),n("). Thus, our "),e("code",{"v-pre":""},"STARTUP"),n(" command:")])],-1),d=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Xms128M</span> -Xmx<span class="token punctuation">{</span><span class="token punctuation">{</span>SERVER_MEMORY<span class="token punctuation">}</span><span class="token punctuation">}</span>M <span class="token parameter variable">-jar</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>SERVER_JARFILE<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Becomes:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-Xms128M</span> <span class="token parameter variable">-Xmx1024M</span> <span class="token parameter variable">-jar</span> server.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="run-the-command" tabindex="-1"><a class="header-anchor" href="#run-the-command"><span>Run the Command</span></a></h2><p>The last step is to run this modified startup command, which is done with the line <code>\${MODIFIED_STARTUP}</code>.</p><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h3><p>Sometimes you may need to change the permissions of the <code>entrypoint.sh</code> file, on linux you can do this by executing <code>chmod +x entrypoint.sh</code> in the directory where the file is.</p>`,7),h=[r,c,l,p,d];function m(u,v){return i(),t("div",null,h)}const k=s(o,[["render",m],["__file","creating_a_custom_image.html.vue"]]),f=JSON.parse('{"path":"/community/config/eggs/creating_a_custom_image.html","title":"创建自定义 Docker 镜像","lang":"zh-CN","frontmatter":{"description":"创建自定义 Docker 镜像 注意 This tutorial uses examples from our core:java docker image, which can be found on GitHub. This tutorial also assumes some knowledge of Docker, we suggest rea...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/config/eggs/creating_a_custom_image.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"创建自定义 Docker 镜像"}],["meta",{"property":"og:description","content":"创建自定义 Docker 镜像 注意 This tutorial uses examples from our core:java docker image, which can be found on GitHub. This tutorial also assumes some knowledge of Docker, we suggest rea..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建自定义 Docker 镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Creating the Dockerfile","slug":"creating-the-dockerfile","link":"#creating-the-dockerfile","children":[]},{"level":2,"title":"Installing Dependencies","slug":"installing-dependencies","link":"#installing-dependencies","children":[]},{"level":2,"title":"Creating a Container User","slug":"creating-a-container-user","link":"#creating-a-container-user","children":[]},{"level":2,"title":"Work Directory & Entrypoint","slug":"work-directory-entrypoint","link":"#work-directory-entrypoint","children":[]},{"level":2,"title":"Entrypoint Script","slug":"entrypoint-script","link":"#entrypoint-script","children":[]},{"level":2,"title":"Modifying the Startup Command","slug":"modifying-the-startup-command","link":"#modifying-the-startup-command","children":[]},{"level":2,"title":"Run the Command","slug":"run-the-command","link":"#run-the-command","children":[{"level":3,"title":"Note","slug":"note","link":"#note","children":[]}]}],"git":{"createdTime":1548912913000,"updatedTime":1715321703000,"contributors":[{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":3},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2},{"name":"Jpac14","email":"45907459+Jpac14@users.noreply.github.com","commits":1},{"name":"LoYungSum","email":"sumsum_2003@yahoo.com.hk","commits":1},{"name":"Vukašin Lekić","email":"goksi1312@gmail.com","commits":1},{"name":"William Gladstone","email":"will.gl@dst.one","commits":1}]},"readingTime":{"minutes":2.68,"words":804},"filePathRelative":"community/config/eggs/creating_a_custom_image.md","localizedDate":"2019年1月31日","autoDesc":true}');export{k as comp,f as data};
