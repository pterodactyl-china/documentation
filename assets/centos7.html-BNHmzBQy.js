import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as r,a as n,e as s,b as e,w as i,d as l,o as c}from"./app-C2bos15_.js";const d={},o=n("h1",{id:"centos-7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos-7"},[n("span",null,"CentOS 7")])],-1),m=n("p",null,"在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。",-1),u={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"提示",-1),h=n("h2",{id:"安装要求和附加工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装要求和附加工具"},[n("span",null,"安装要求和附加工具")])],-1),b=l(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>If you run <code>sestatus</code> and it shows <code>SELinux status: enabled</code> you should install the following packages for later</p></div><h3 id="selinux-tools" tabindex="-1"><a class="header-anchor" href="#selinux-tools"><span>SELinux tools</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> policycoreutils policycoreutils-python selinux-policy selinux-policy-targeted libselinux-utils setroubleshoot-server setools setools-console mcstrans</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb"><span>MariaDB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">## Install Repos</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/mariadb.repo</span></span>
<span class="line"># MariaDB 10.5 CentOS repository list - created 2017-07-14 12:40 UTC</span>
<span class="line"># http://downloads.mariadb.org/mariadb/repositories/</span>
<span class="line">[mariadb]</span>
<span class="line">name = MariaDB</span>
<span class="line">baseurl = http://yum.mariadb.org/10.5/centos7-amd64</span>
<span class="line">gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB</span>
<span class="line">gpgcheck=1</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Get yum updates</span></span>
<span class="line">yum update <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Install MariaDB 10.5</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> MariaDB-common MariaDB-server</span>
<span class="line"></span>
<span class="line"><span class="token comment">## Start maraidb</span></span>
<span class="line">systemctl start mariadb</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> mariadb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-8-0" tabindex="-1"><a class="header-anchor" href="#php-8-0"><span>PHP 8.0</span></a></h3><p>We recommend the remi repo to get the latest php packages.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">## Install Repos</span></span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm</span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://rpms.remirepo.net/enterprise/remi-release-7.rpm</span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils</span>
<span class="line">yum-config-manager <span class="token parameter variable">--disable</span> <span class="token string">&#39;remi-php*&#39;</span></span>
<span class="line">yum-config-manager <span class="token parameter variable">--enable</span> remi-php80</span>
<span class="line"></span>
<span class="line"><span class="token comment">## Get yum updates</span></span>
<span class="line">yum update <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## Install PHP 8.0</span></span>
<span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> php php-<span class="token punctuation">{</span>common,fpm,cli,json,mysqlnd,mcrypt,gd,mbstring,pdo,zip,bcmath,dom,opcache<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zip</span> <span class="token function">unzip</span> <span class="token comment"># Required for Composer</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> php -- --install-dir<span class="token operator">=</span>/usr/local/bin <span class="token parameter variable">--filename</span><span class="token operator">=</span>composer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-utility-packages" tabindex="-1"><a class="header-anchor" href="#install-utility-packages"><span>Install Utility Packages</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx</span>
<span class="line"></span>
<span class="line">firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span></span>
<span class="line">firewall-cmd --add-service<span class="token operator">=</span>https <span class="token parameter variable">--permanent</span> </span>
<span class="line">firewall-cmd <span class="token parameter variable">--reload</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>remi redis</span>
<span class="line"></span>
<span class="line">systemctl start redis</span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> redis</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selinux-commands" tabindex="-1"><a class="header-anchor" href="#selinux-commands"><span>SELinux commands</span></a></h4><p>The following command will allow nginx to work with redis and</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">setsebool <span class="token parameter variable">-P</span> httpd_can_network_connect <span class="token number">1</span></span>
<span class="line">setsebool <span class="token parameter variable">-P</span> httpd_execmem <span class="token number">1</span></span>
<span class="line">setsebool <span class="token parameter variable">-P</span> httpd_unified <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration"><span>Server Configuration</span></a></h2><p>This following section covers the configuration of parts of the server to run the panel.</p><h3 id="configuring-mariadb" tabindex="-1"><a class="header-anchor" href="#configuring-mariadb"><span>Configuring MariaDB</span></a></h3><p>The fastest way to set up mariadb is to use the <code>mysql_secure_installation</code> command and follow prompts</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">mysql_secure_installation</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following are safe defaults.</p><p>Change to your own secure password<br><code>Set root password? [Y/n] Y</code></p><p>Get rid of users that could access the db by default<br><code>Remove anonymous users? [Y/n] Y</code></p><p>Keep root off the external interfaces<br><code>Disallow root login remotely? [Y/n] Y</code></p><p>Extra databases that aren&#39;t needed<br><code>Remove test database and access to it? [Y/n] Y</code></p><p>Clears and sets all the changes made<br><code>Reload privilege tables now? [Y/n] Y</code></p><p>All done! If you&#39;ve completed all of the above steps, your MariaDB<br> installation should now be secure.</p><h4 id="adding-mariadb-user" tabindex="-1"><a class="header-anchor" href="#adding-mariadb-user"><span>Adding MariaDB user</span></a></h4>`,31),g=l(`<h3 id="setup-php" tabindex="-1"><a class="header-anchor" href="#setup-php"><span>Setup PHP</span></a></h3><p>Place the contents below in a file inside the <code>/etc/php-fpm.d</code> folder. The file can be named anything, but a good standard is <code>www-pterodactyl.conf</code>. This config will match the nginx config later in the guide.</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code><span class="line">[pterodactyl]</span>
<span class="line"></span>
<span class="line">user = nginx</span>
<span class="line">group = nginx</span>
<span class="line"></span>
<span class="line">listen = /var/run/php-fpm/pterodactyl.sock</span>
<span class="line">listen.owner = nginx</span>
<span class="line">listen.group = nginx</span>
<span class="line">listen.mode = 0750</span>
<span class="line"></span>
<span class="line">pm = ondemand</span>
<span class="line">pm.max_children = 9</span>
<span class="line">pm.process_idle_timeout = 10s</span>
<span class="line">pm.max_requests = 200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start and enable php-fpm on the system.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">systemctl <span class="token builtin class-name">enable</span> php-fpm</span>
<span class="line">systemctl start php-fpm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1"><span>Nginx</span></a></h3>`,6),f=l(`<h4 id="ssl-configuration" tabindex="-1"><a class="header-anchor" href="#ssl-configuration"><span>SSL Configuration</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">server_tokens off;</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">    listen 80;</span>
<span class="line highlighted">    server_name &lt;domain&gt;;</span>
<span class="line">    return 301 https://$server_name$request_uri;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">    listen 443 ssl http2;</span>
<span class="line highlighted">    server_name &lt;domain&gt;;</span>
<span class="line"></span>
<span class="line">    root /var/www/pterodactyl/public;</span>
<span class="line">    index index.php;</span>
<span class="line"></span>
<span class="line">    access_log /var/log/nginx/pterodactyl.app-access.log;</span>
<span class="line">    error_log  /var/log/nginx/pterodactyl.app-error.log error;</span>
<span class="line"></span>
<span class="line">    # allow larger file uploads and longer script runtimes</span>
<span class="line">    client_max_body_size 100m;</span>
<span class="line">    client_body_timeout 120s;</span>
<span class="line">    </span>
<span class="line">    sendfile off;</span>
<span class="line"></span>
<span class="line">    # SSL Configuration</span>
<span class="line highlighted">    ssl_certificate /etc/letsencrypt/live/&lt;domain&gt;/fullchain.pem;</span>
<span class="line highlighted">    ssl_certificate_key /etc/letsencrypt/live/&lt;domain&gt;/privkey.pem;</span>
<span class="line">    ssl_session_cache shared:SSL:10m;</span>
<span class="line">    ssl_protocols TLSv1.2 TLSv1.3;</span>
<span class="line">    ssl_ciphers &quot;ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384&quot;;</span>
<span class="line">    ssl_prefer_server_ciphers on;</span>
<span class="line"></span>
<span class="line">    # See https://hstspreload.org/ before uncommenting the line below.</span>
<span class="line">    # add_header Strict-Transport-Security &quot;max-age=15768000; preload;&quot;;</span>
<span class="line">    add_header X-Content-Type-Options nosniff;</span>
<span class="line">    add_header X-XSS-Protection &quot;1; mode=block&quot;;</span>
<span class="line">    add_header X-Robots-Tag none;</span>
<span class="line">    add_header Content-Security-Policy &quot;frame-ancestors &#39;self&#39;&quot;;</span>
<span class="line">    add_header X-Frame-Options DENY;</span>
<span class="line">    add_header Referrer-Policy same-origin;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">        try_files $uri $uri/ /index.php?$query_string;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    location ~ \\.php$ {</span>
<span class="line">        fastcgi_split_path_info ^(.+\\.php)(/.+)$;</span>
<span class="line">        fastcgi_pass unix:/var/run/php-fpm/pterodactyl.sock;</span>
<span class="line">        fastcgi_index index.php;</span>
<span class="line">        include fastcgi_params;</span>
<span class="line">        fastcgi_param PHP_VALUE &quot;upload_max_filesize = 100M \\n post_max_size=100M&quot;;</span>
<span class="line">        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span>
<span class="line">        fastcgi_param HTTP_PROXY &quot;&quot;;</span>
<span class="line">        fastcgi_intercept_errors off;</span>
<span class="line">        fastcgi_buffer_size 16k;</span>
<span class="line">        fastcgi_buffers 4 16k;</span>
<span class="line">        fastcgi_connect_timeout 300;</span>
<span class="line">        fastcgi_send_timeout 300;</span>
<span class="line">        fastcgi_read_timeout 300;</span>
<span class="line">        include /etc/nginx/fastcgi_params;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    location ~ /\\.ht {</span>
<span class="line">        deny all;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis-setup" tabindex="-1"><a class="header-anchor" href="#redis-setup"><span>Redis Setup</span></a></h3><p>The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into <a href="https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host" target="_blank" rel="noopener noreferrer">running another Redis instance</a>.</p><h2 id="installing-the-panel" tabindex="-1"><a class="header-anchor" href="#installing-the-panel"><span>Installing the Panel</span></a></h2>`,5);function y(_,k){const a=p("RouteLink");return c(),r("div",null,[o,m,n("div",u,[v,n("p",null,[s("本指南基于"),e(a,{to:"/panel/1.0/getting_started.html"},{default:i(()=>[s("官方安装文档")]),_:1}),s("，但专为 CentOS 7 量身定制。")])]),h,n("p",null,[s("我们要安装翼龙面板 "),e(a,{to:"/panel/1.0/getting_started.html#%E4%BE%9D%E8%B5%96%E9%A1%B9"},{default:i(()=>[s("所需依赖项")]),_:1}),s("以及一些额外的工具。")]),b,n("p",null,[s("To add your first user to the database, see our tutorial on "),e(a,{to:"/tutorials/mysql_setup.html"},{default:i(()=>[s("setting up MySQL")]),_:1}),s(".")]),g,n("p",null,[s("Please check our "),e(a,{to:"/tutorials/creating_ssl_certificates.html"},{default:i(()=>[s("tutorial")]),_:1}),s(" on generating SSL certificates for more information.")]),f,n("p",null,[s("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),e(a,{to:"/panel/1.0/getting_started.html#download-files"},{default:i(()=>[s("official Panel installation documentation")]),_:1}),s(".")])])}const C=t(d,[["render",y],["__file","centos7.html.vue"]]),E=JSON.parse(`{"path":"/community/installation-guides/panel/centos7.html","title":"CentOS 7","lang":"zh-CN","frontmatter":{"description":"CentOS 7 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求和附加工具 我们要安装翼龙面板 以及一些额外的工具。 提示 If you run sestatus and it shows SELinux...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/centos7.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 7"}],["meta",{"property":"og:description","content":"CentOS 7 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 本指南基于，但专为 CentOS 7 量身定制。 安装要求和附加工具 我们要安装翼龙面板 以及一些额外的工具。 提示 If you run sestatus and it shows SELinux..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T06:15:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T06:15:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 7\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-10T06:15:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装要求和附加工具","slug":"安装要求和附加工具","link":"#安装要求和附加工具","children":[{"level":3,"title":"SELinux tools","slug":"selinux-tools","link":"#selinux-tools","children":[]},{"level":3,"title":"MariaDB","slug":"mariadb","link":"#mariadb","children":[]},{"level":3,"title":"PHP 8.0","slug":"php-8-0","link":"#php-8-0","children":[]},{"level":3,"title":"Composer","slug":"composer","link":"#composer","children":[]}]},{"level":2,"title":"Install Utility Packages","slug":"install-utility-packages","link":"#install-utility-packages","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]}]},{"level":2,"title":"Server Configuration","slug":"server-configuration","link":"#server-configuration","children":[{"level":3,"title":"Configuring MariaDB","slug":"configuring-mariadb","link":"#configuring-mariadb","children":[]},{"level":3,"title":"Setup PHP","slug":"setup-php","link":"#setup-php","children":[]},{"level":3,"title":"Nginx","slug":"nginx-1","link":"#nginx-1","children":[]},{"level":3,"title":"Redis Setup","slug":"redis-setup","link":"#redis-setup","children":[]}]},{"level":2,"title":"Installing the Panel","slug":"installing-the-panel","link":"#installing-the-panel","children":[]}],"git":{"createdTime":1536990178000,"updatedTime":1715321703000,"contributors":[{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":9},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":4},{"name":"Lance Pioch","email":"git@lance.sh","commits":3},{"name":"Nuc1eoN","email":"Nuc1eoN@users.noreply.github.com","commits":3},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"Michael (Parker) Parker","email":"parkervcp@gmail.com","commits":2},{"name":"Tek's GitHub Desktop","email":"tekexplorerm@gmail.com","commits":2},{"name":"Alix","email":"73092812+alix1383@users.noreply.github.com","commits":1},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":1},{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":1},{"name":"Jay Williams","email":"codingJWilliams@users.noreply.github.com","commits":1},{"name":"Mark David","email":"44349634+markd69@users.noreply.github.com","commits":1},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"community/installation-guides/panel/centos7.md","localizedDate":"2018年9月15日","autoDesc":true}`);export{C as comp,E as data};
