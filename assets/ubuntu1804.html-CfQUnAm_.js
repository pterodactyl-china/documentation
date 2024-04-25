import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as o,a as e,e as n,d as a,w as i,b as t}from"./app-ZTIMksiV.js";const p={},u=e("h1",{id:"ubuntu-18-04",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-18-04"},[e("span",null,"Ubuntu 18.04")])],-1),m=e("p",null,"在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。",-1),b={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"提示",-1),h=e("h2",{id:"安装要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装要求"},[e("span",null,"安装要求")])],-1),g=t(`<h3 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb"><span>MariaDB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 获取 apt 更新</span>
<span class="token function">apt</span> update <span class="token parameter variable">-y</span>

<span class="token comment">## 安装 MariaDB</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb-common mariadb-server mariadb-client

<span class="token comment">## 启动 MariaDB</span>
systemctl start mariadb
systemctl <span class="token builtin class-name">enable</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-7-4" tabindex="-1"><a class="header-anchor" href="#php-7-4"><span>PHP 7.4</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 获取 apt 更新</span>
<span class="token function">apt</span> update <span class="token parameter variable">-y</span>

<span class="token comment">## 安装 PHP 7.4</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> php7.4 php7.4-<span class="token punctuation">{</span>cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> redis-server

systemctl start redis-server
systemctl <span class="token builtin class-name">enable</span> redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他实用工具" tabindex="-1"><a class="header-anchor" href="#其他实用工具"><span>其他实用工具</span></a></h3><h4 id="certbot" tabindex="-1"><a class="header-anchor" href="#certbot"><span>Certbot</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> php -- --install-dir<span class="token operator">=</span>/usr/local/bin <span class="token parameter variable">--filename</span><span class="token operator">=</span>composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置"><span>服务器配置</span></a></h2><p>本节将介绍运行面板所需的部分服务器配置。</p><h3 id="配置-mariadb" tabindex="-1"><a class="header-anchor" href="#配置-mariadb"><span>配置 MariaDB</span></a></h3><p>设置 MariaDB 的最快方法是使用 <code>mysql_secure_installation</code> 命令并按提示操作</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following are safe defaults.</p><p>Change to your own secure password<br><code>Set root password? [Y/n] Y</code></p><p>Get rid of users that could access the db by default<br><code>Remove anonymous users? [Y/n] Y</code></p><p>Keep root off the external interfaces<br><code>Disallow root login remotely? [Y/n] Y</code></p><p>Extra databases that aren&#39;t needed<br><code>Remove test database and access to it? [Y/n] Y</code></p><p>Clears and sets all the changes made<br><code>Reload privilege tables now? [Y/n] Y</code></p><p>All done! If you&#39;ve completed all of the above steps, your MariaDB installation should now be secure.</p><h4 id="adding-mariadb-user" tabindex="-1"><a class="header-anchor" href="#adding-mariadb-user"><span>Adding MariaDB user</span></a></h4>`,26),f=t(`<h3 id="setup-php" tabindex="-1"><a class="header-anchor" href="#setup-php"><span>Setup PHP</span></a></h3><p>The default php-fpm configuration is fine to use and can be started and then enabled on the system using the commands below.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> php7.4-fpm
systemctl start php7.4-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1"><span>Nginx</span></a></h3>`,4),_=t(`<h4 id="ssl-configuration" tabindex="-1"><a class="header-anchor" href="#ssl-configuration"><span>SSL Configuration</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server_tokens off;

server {
    listen 80;
    server_name &lt;domain&gt;;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name &lt;domain&gt;;

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/&lt;domain&gt;/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/&lt;domain&gt;/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers &quot;ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384&quot;;
    ssl_prefer_server_ciphers on;

    # See https://hstspreload.org/ before uncommenting the line below.
    # add_header Strict-Transport-Security &quot;max-age=15768000; preload;&quot;;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection &quot;1; mode=block&quot;;
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy &quot;frame-ancestors &#39;self&#39;&quot;;
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE &quot;upload_max_filesize = 100M \\n post_max_size=100M&quot;;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY &quot;&quot;;
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\\.ht {
        deny all;
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis-setup" tabindex="-1"><a class="header-anchor" href="#redis-setup"><span>Redis Setup</span></a></h3>`,3),x={href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"installing-the-panel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-panel"},[e("span",null,"Installing the Panel")])],-1);function k(S,C){const s=l("RouteLink"),r=l("ExternalLinkIcon");return c(),o("div",null,[u,m,e("div",b,[v,e("p",null,[n("本指南基于 "),a(s,{to:"/panel/1.0/getting_started.html"},{default:i(()=>[n("官方安装文档")]),_:1}),n("，但专为 Ubuntu 18.04 量身定制。")])]),h,e("p",null,[n("首先，我们要安装翼龙 "),a(s,{to:"/panel/1.0/getting_started.html#dependencies"},{default:i(()=>[n("所需依赖项")]),_:1}),n("。")]),g,e("p",null,[n("To add your first user to the database, see our tutorial on "),a(s,{to:"/tutorials/mysql_setup.html"},{default:i(()=>[n("setting up MySQL")]),_:1}),n(".")]),f,e("p",null,[n("Please check our "),a(s,{to:"/tutorials/creating_ssl_certificates.html"},{default:i(()=>[n("tutorial")]),_:1}),n(" on generating SSL certificates for more information.")]),_,e("p",null,[n("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into "),e("a",x,[n("running another Redis instance"),a(r)]),n(".")]),y,e("p",null,[n("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),a(s,{to:"/panel/1.0/getting_started.html#download-files"},{default:i(()=>[n("official Panel installation documentation")]),_:1}),n(".")])])}const H=d(p,[["render",k],["__file","ubuntu1804.html.vue"]]),A=JSON.parse(`{"path":"/community/installation-guides/panel/ubuntu1804.html","title":"Ubuntu 18.04","lang":"zh-CN","frontmatter":{"description":"Ubuntu 18.04 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 本指南基于 ，但专为 Ubuntu 18.04 量身定制。 安装要求 首先，我们要安装翼龙 。 MariaDB PHP 7.4 Nginx Redis 其他实用工具 Certbot Comp...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/ubuntu1804.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Ubuntu 18.04"}],["meta",{"property":"og:description","content":"Ubuntu 18.04 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 本指南基于 ，但专为 Ubuntu 18.04 量身定制。 安装要求 首先，我们要安装翼龙 。 MariaDB PHP 7.4 Nginx Redis 其他实用工具 Certbot Comp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu 18.04\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[{"level":3,"title":"MariaDB","slug":"mariadb","link":"#mariadb","children":[]},{"level":3,"title":"PHP 7.4","slug":"php-7-4","link":"#php-7-4","children":[]},{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]},{"level":3,"title":"其他实用工具","slug":"其他实用工具","link":"#其他实用工具","children":[]}]},{"level":2,"title":"服务器配置","slug":"服务器配置","link":"#服务器配置","children":[{"level":3,"title":"配置 MariaDB","slug":"配置-mariadb","link":"#配置-mariadb","children":[]},{"level":3,"title":"Setup PHP","slug":"setup-php","link":"#setup-php","children":[]},{"level":3,"title":"Nginx","slug":"nginx-1","link":"#nginx-1","children":[]},{"level":3,"title":"Redis Setup","slug":"redis-setup","link":"#redis-setup","children":[]}]},{"level":2,"title":"Installing the Panel","slug":"installing-the-panel","link":"#installing-the-panel","children":[]}],"git":{"createdTime":1536990178000,"updatedTime":1713315474000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":4},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":1},{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":1},{"name":"Jj","email":"25309518+JjTheHusky@users.noreply.github.com","commits":1},{"name":"Michael (Parker) Parker","email":"parkervcp@gmail.com","commits":1},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":1},{"name":"Tek's GitHub Desktop","email":"tekexplorerm@gmail.com","commits":1}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"community/installation-guides/panel/ubuntu1804.md","localizedDate":"2018年9月15日","autoDesc":true}`);export{H as comp,A as data};
