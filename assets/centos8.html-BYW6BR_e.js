import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as p,a as e,d as i,w as s,e as n,b as r}from"./app-BeSu1T1D.js";const u={},m=e("h1",{id:"centos-8-rocky-linux-8-almalinux-8-fedora-server-38",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-8-rocky-linux-8-almalinux-8-fedora-server-38"},[e("span",null,"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38")])],-1),v=e("p",null,"在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。",-1),h={class:"table-of-contents"},b={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"提示",-1),g=e("h2",{id:"install-requirements-and-additional-utilities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-requirements-and-additional-utilities"},[e("span",null,"Install Requirements and Additional Utilities")])],-1),_=r(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>If you run <code>sestatus</code> and it shows <code>SELinux status: enabled</code> you should install the following packages for later</p></div><h3 id="selinux-tools" tabindex="-1"><a class="header-anchor" href="#selinux-tools"><span>SELinux tools</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> policycoreutils selinux-policy selinux-policy-targeted setroubleshoot-server setools setools-console mcstrans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb"><span>MariaDB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb mariadb-server

<span class="token comment">## Start maraidb</span>
systemctl start mariadb
systemctl <span class="token builtin class-name">enable</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-8-0" tabindex="-1"><a class="header-anchor" href="#php-8-0"><span>PHP 8.0</span></a></h3><p>We recommend the remi repo to get the latest php packages. (Skip to next section if on Fedora 38)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install Repos</span>
dnf <span class="token function">install</span> epel-release
dnf <span class="token function">install</span> https://rpms.remirepo.net/enterprise/remi-release-8.rpm
dnf module <span class="token builtin class-name">enable</span> php:remi-8.0

<span class="token comment">## Get dnf updates</span>
dnf update <span class="token parameter variable">-y</span>

<span class="token comment">## Install PHP 8.0</span>
dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> php php-<span class="token punctuation">{</span>common,fpm,cli,json,mysqlnd,gd,mbstring,pdo,zip,bcmath,dom,opcache<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section" tabindex="-1"><a class="header-anchor" href="#if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section"><span>If using Fedora Server 38 install PHP 8.1 and Dependencies from this section. If not, skip this section.</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> https://rpms.remirepo.net/fedora/remi-release-38.rpm
dnf module <span class="token builtin class-name">enable</span> php:remi-8.1
dnf <span class="token function">install</span> php php-<span class="token punctuation">{</span>common,fpm,cli,json,mysqlnd,gd,mbstring,pdo,zip,bcmath,dom,opcache,process<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zip</span> <span class="token function">unzip</span> <span class="token function">tar</span> <span class="token comment"># Required for Composer</span>
<span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> php -- --install-dir<span class="token operator">=</span>/usr/local/bin <span class="token parameter variable">--filename</span><span class="token operator">=</span>composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-utility-packages" tabindex="-1"><a class="header-anchor" href="#install-utility-packages"><span>Install Utility Packages</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx

firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-service<span class="token operator">=</span>https <span class="token parameter variable">--permanent</span> 
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> <span class="token parameter variable">-y</span> redis

systemctl start redis
systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selinux-commands" tabindex="-1"><a class="header-anchor" href="#selinux-commands"><span>SELinux commands</span></a></h4><p>The following command will allow nginx to work with redis and</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setsebool <span class="token parameter variable">-P</span> httpd_can_network_connect <span class="token number">1</span>
setsebool <span class="token parameter variable">-P</span> httpd_execmem <span class="token number">1</span>
setsebool <span class="token parameter variable">-P</span> httpd_unified <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration"><span>Server Configuration</span></a></h2><p>This following section covers the configuration of parts of the server to run the panel.</p><h3 id="configuring-mariadb" tabindex="-1"><a class="header-anchor" href="#configuring-mariadb"><span>Configuring MariaDB</span></a></h3><p>The fastest way to set up mariadb is to use the <code>mysql_secure_installation</code> command and follow prompts</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following are safe defaults.</p><p>Change to your own secure password<br><code>Set root password? [Y/n] Y</code></p><p>Get rid of users that could access the db by default<br><code>Remove anonymous users? [Y/n] Y</code></p><p>Keep root off the external interfaces<br><code>Disallow root login remotely? [Y/n] Y</code></p><p>Extra databases that aren&#39;t needed<br><code>Remove test database and access to it? [Y/n] Y</code></p><p>Clears and sets all the changes made<br><code>Reload privilege tables now? [Y/n] Y</code></p><p>All done! If you&#39;ve completed all of the above steps, your MariaDB<br> installation should now be secure.</p><h4 id="adding-mariadb-user" tabindex="-1"><a class="header-anchor" href="#adding-mariadb-user"><span>Adding MariaDB user</span></a></h4>`,33),x=r(`<h3 id="setup-php" tabindex="-1"><a class="header-anchor" href="#setup-php"><span>Setup PHP</span></a></h3><p>Place the contents below in a file inside the <code>/etc/php-fpm.d</code> folder. The file can be named anything, but a good standard is <code>www-pterodactyl.conf</code>. This config will match the nginx config later in the guide.</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[pterodactyl]

user = nginx
group = nginx

listen = /var/run/php-fpm/pterodactyl.sock
listen.owner = nginx
listen.group = nginx
listen.mode = 0750

pm = ondemand
pm.max_children = 9
pm.process_idle_timeout = 10s
pm.max_requests = 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start and enable php-fpm on the system.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> php-fpm
systemctl start php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1"><span>Nginx</span></a></h3>`,6),k=r(`<h4 id="ssl-configuration" tabindex="-1"><a class="header-anchor" href="#ssl-configuration"><span>SSL Configuration</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server_tokens off;

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
        fastcgi_pass unix:/var/run/php-fpm/pterodactyl.sock;
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
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis-setup" tabindex="-1"><a class="header-anchor" href="#redis-setup"><span>Redis Setup</span></a></h3>`,3),y={href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"installing-the-panel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-panel"},[e("span",null,"Installing the Panel")])],-1);function P(C,w){const a=t("router-link"),l=t("RouteLink"),d=t("ExternalLinkIcon");return c(),p("div",null,[m,v,e("nav",h,[e("ul",null,[e("li",null,[i(a,{to:"#install-requirements-and-additional-utilities"},{default:s(()=>[n("Install Requirements and Additional Utilities")]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#selinux-tools"},{default:s(()=>[n("SELinux tools")]),_:1})]),e("li",null,[i(a,{to:"#mariadb"},{default:s(()=>[n("MariaDB")]),_:1})]),e("li",null,[i(a,{to:"#php-8-0"},{default:s(()=>[n("PHP 8.0")]),_:1})]),e("li",null,[i(a,{to:"#if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section"},{default:s(()=>[n("If using Fedora Server 38 install PHP 8.1 and Dependencies from this section. If not, skip this section.")]),_:1})]),e("li",null,[i(a,{to:"#composer"},{default:s(()=>[n("Composer")]),_:1})])])]),e("li",null,[i(a,{to:"#install-utility-packages"},{default:s(()=>[n("Install Utility Packages")]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#nginx"},{default:s(()=>[n("Nginx")]),_:1})]),e("li",null,[i(a,{to:"#redis"},{default:s(()=>[n("Redis")]),_:1})])])]),e("li",null,[i(a,{to:"#server-configuration"},{default:s(()=>[n("Server Configuration")]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#configuring-mariadb"},{default:s(()=>[n("Configuring MariaDB")]),_:1})]),e("li",null,[i(a,{to:"#setup-php"},{default:s(()=>[n("Setup PHP")]),_:1})]),e("li",null,[i(a,{to:"#nginx-1"},{default:s(()=>[n("Nginx")]),_:1})]),e("li",null,[i(a,{to:"#redis-setup"},{default:s(()=>[n("Redis Setup")]),_:1})])])]),e("li",null,[i(a,{to:"#installing-the-panel"},{default:s(()=>[n("Installing the Panel")]),_:1})])])]),e("div",b,[f,e("p",null,[n("This guide is based off the "),i(l,{to:"/panel/1.0/getting_started.html"},{default:s(()=>[n("official installation documentation")]),_:1}),n(" but is tailored specifically for Enterprise Linux 8.")])]),g,e("p",null,[n("We will install all of Pterodactyl's "),i(l,{to:"/panel/1.0/getting_started.html#dependencies"},{default:s(()=>[n("required")]),_:1}),n(" dependencies and a few aditional utilities.")]),_,e("p",null,[n("To add your first user to the database, see our tutorial on "),i(l,{to:"/tutorials/mysql_setup.html"},{default:s(()=>[n("setting up MySQL")]),_:1}),n(".")]),x,e("p",null,[n("Please check our "),i(l,{to:"/tutorials/creating_ssl_certificates.html"},{default:s(()=>[n("tutorial")]),_:1}),n(" on generating SSL certificates for more information.")]),k,e("p",null,[n("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into "),e("a",y,[n("running another Redis instance"),i(d)]),n(".")]),S,e("p",null,[n("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),i(l,{to:"/panel/1.0/getting_started.html#download-files"},{default:s(()=>[n("official Panel installation documentation")]),_:1}),n(".")])])}const L=o(u,[["render",P],["__file","centos8.html.vue"]]),R=JSON.parse('{"path":"/community/installation-guides/panel/centos8.html","title":"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38","lang":"zh-CN","frontmatter":{"description":"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 This guide is based off the but is tailored specifica...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/centos8.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38"}],["meta",{"property":"og:description","content":"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 This guide is based off the but is tailored specifica..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 8, Rocky Linux 8, AlmaLinux 8, Fedora Server 38\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install Requirements and Additional Utilities","slug":"install-requirements-and-additional-utilities","link":"#install-requirements-and-additional-utilities","children":[{"level":3,"title":"SELinux tools","slug":"selinux-tools","link":"#selinux-tools","children":[]},{"level":3,"title":"MariaDB","slug":"mariadb","link":"#mariadb","children":[]},{"level":3,"title":"PHP 8.0","slug":"php-8-0","link":"#php-8-0","children":[]},{"level":3,"title":"If using Fedora Server 38 install PHP 8.1 and Dependencies from this section. If not, skip this section.","slug":"if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section","link":"#if-using-fedora-server-38-install-php-8-1-and-dependencies-from-this-section-if-not-skip-this-section","children":[]},{"level":3,"title":"Composer","slug":"composer","link":"#composer","children":[]}]},{"level":2,"title":"Install Utility Packages","slug":"install-utility-packages","link":"#install-utility-packages","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]}]},{"level":2,"title":"Server Configuration","slug":"server-configuration","link":"#server-configuration","children":[{"level":3,"title":"Configuring MariaDB","slug":"configuring-mariadb","link":"#configuring-mariadb","children":[]},{"level":3,"title":"Setup PHP","slug":"setup-php","link":"#setup-php","children":[]},{"level":3,"title":"Nginx","slug":"nginx-1","link":"#nginx-1","children":[]},{"level":3,"title":"Redis Setup","slug":"redis-setup","link":"#redis-setup","children":[]}]},{"level":2,"title":"Installing the Panel","slug":"installing-the-panel","link":"#installing-the-panel","children":[]}],"git":{"createdTime":1536990178000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.15,"words":645},"filePathRelative":"community/installation-guides/panel/centos8.md","localizedDate":"2018年9月15日","autoDesc":true}');export{L as comp,R as data};
