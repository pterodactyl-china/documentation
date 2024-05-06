import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c,a as e,e as n,b as a,w as i,d as l}from"./app-C2i-euUo.js";const p={},m=e("h1",{id:"centos-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-7"},[e("span",null,"CentOS 7")])],-1),u=e("p",null,"在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。",-1),v={class:"hint-container tip"},b=e("p",{class:"hint-container-title"},"提示",-1),h=e("h2",{id:"install-requirements-and-additional-utilities",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-requirements-and-additional-utilities"},[e("span",null,"Install Requirements and Additional Utilities")])],-1),g=l(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>If you run <code>sestatus</code> and it shows <code>SELinux status: enabled</code> you should install the following packages for later</p></div><h3 id="selinux-tools" tabindex="-1"><a class="header-anchor" href="#selinux-tools"><span>SELinux tools</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> policycoreutils policycoreutils-python selinux-policy selinux-policy-targeted libselinux-utils setroubleshoot-server setools setools-console mcstrans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb"><span>MariaDB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install Repos</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/mariadb.repo</span>
# MariaDB 10.5 CentOS repository list - created 2017-07-14 12:40 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.5/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
EOF</span>

<span class="token comment">## Get yum updates</span>
yum update <span class="token parameter variable">-y</span>

<span class="token comment">## Install MariaDB 10.5</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> MariaDB-common MariaDB-server

<span class="token comment">## Start maraidb</span>
systemctl start mariadb
systemctl <span class="token builtin class-name">enable</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-8-0" tabindex="-1"><a class="header-anchor" href="#php-8-0"><span>PHP 8.0</span></a></h3><p>We recommend the remi repo to get the latest php packages.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Install Repos</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
yum-config-manager <span class="token parameter variable">--disable</span> <span class="token string">&#39;remi-php*&#39;</span>
yum-config-manager <span class="token parameter variable">--enable</span> remi-php80

<span class="token comment">## Get yum updates</span>
yum update <span class="token parameter variable">-y</span>

<span class="token comment">## Install PHP 8.0</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> php php-<span class="token punctuation">{</span>common,fpm,cli,json,mysqlnd,mcrypt,gd,mbstring,pdo,zip,bcmath,dom,opcache<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer"><span>Composer</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zip</span> <span class="token function">unzip</span> <span class="token comment"># Required for Composer</span>
<span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://getcomposer.org/installer <span class="token operator">|</span> php -- --install-dir<span class="token operator">=</span>/usr/local/bin <span class="token parameter variable">--filename</span><span class="token operator">=</span>composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-utility-packages" tabindex="-1"><a class="header-anchor" href="#install-utility-packages"><span>Install Utility Packages</span></a></h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx

firewall-cmd --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd --add-service<span class="token operator">=</span>https <span class="token parameter variable">--permanent</span> 
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>remi redis

systemctl start redis
systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selinux-commands" tabindex="-1"><a class="header-anchor" href="#selinux-commands"><span>SELinux commands</span></a></h4><p>The following command will allow nginx to work with redis and</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setsebool <span class="token parameter variable">-P</span> httpd_can_network_connect <span class="token number">1</span>
setsebool <span class="token parameter variable">-P</span> httpd_execmem <span class="token number">1</span>
setsebool <span class="token parameter variable">-P</span> httpd_unified <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration"><span>Server Configuration</span></a></h2><p>This following section covers the configuration of parts of the server to run the panel.</p><h3 id="configuring-mariadb" tabindex="-1"><a class="header-anchor" href="#configuring-mariadb"><span>Configuring MariaDB</span></a></h3><p>The fastest way to set up mariadb is to use the <code>mysql_secure_installation</code> command and follow prompts</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The following are safe defaults.</p><p>Change to your own secure password<br><code>Set root password? [Y/n] Y</code></p><p>Get rid of users that could access the db by default<br><code>Remove anonymous users? [Y/n] Y</code></p><p>Keep root off the external interfaces<br><code>Disallow root login remotely? [Y/n] Y</code></p><p>Extra databases that aren&#39;t needed<br><code>Remove test database and access to it? [Y/n] Y</code></p><p>Clears and sets all the changes made<br><code>Reload privilege tables now? [Y/n] Y</code></p><p>All done! If you&#39;ve completed all of the above steps, your MariaDB<br> installation should now be secure.</p><h4 id="adding-mariadb-user" tabindex="-1"><a class="header-anchor" href="#adding-mariadb-user"><span>Adding MariaDB user</span></a></h4>`,31),f=l(`<h3 id="setup-php" tabindex="-1"><a class="header-anchor" href="#setup-php"><span>Setup PHP</span></a></h3><p>Place the contents below in a file inside the <code>/etc/php-fpm.d</code> folder. The file can be named anything, but a good standard is <code>www-pterodactyl.conf</code>. This config will match the nginx config later in the guide.</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>[pterodactyl]

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1"><span>Nginx</span></a></h3>`,6),_=l(`<h4 id="ssl-configuration" tabindex="-1"><a class="header-anchor" href="#ssl-configuration"><span>SSL Configuration</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server_tokens off;

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
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis-setup" tabindex="-1"><a class="header-anchor" href="#redis-setup"><span>Redis Setup</span></a></h3>`,3),y={href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"installing-the-panel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-panel"},[e("span",null,"Installing the Panel")])],-1);function x(S,C){const s=t("RouteLink"),r=t("ExternalLinkIcon");return o(),c("div",null,[m,u,e("div",v,[b,e("p",null,[n("This guide is based off the "),a(s,{to:"/panel/1.0/getting_started.html"},{default:i(()=>[n("official installation documentation")]),_:1}),n(" but is tailored specifically for CentOS 7.")])]),h,e("p",null,[n("We will install all of Pterodactyl's "),a(s,{to:"/panel/1.0/getting_started.html#dependencies"},{default:i(()=>[n("required")]),_:1}),n(" dependencies and a few aditional utilities.")]),g,e("p",null,[n("To add your first user to the database, see our tutorial on "),a(s,{to:"/tutorials/mysql_setup.html"},{default:i(()=>[n("setting up MySQL")]),_:1}),n(".")]),f,e("p",null,[n("Please check our "),a(s,{to:"/tutorials/creating_ssl_certificates.html"},{default:i(()=>[n("tutorial")]),_:1}),n(" on generating SSL certificates for more information.")]),_,e("p",null,[n("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into "),e("a",y,[n("running another Redis instance"),a(r)]),n(".")]),k,e("p",null,[n("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),a(s,{to:"/panel/1.0/getting_started.html#download-files"},{default:i(()=>[n("official Panel installation documentation")]),_:1}),n(".")])])}const E=d(p,[["render",x],["__file","centos7.html.vue"]]),A=JSON.parse(`{"path":"/community/installation-guides/panel/centos7.html","title":"CentOS 7","lang":"zh-CN","frontmatter":{"description":"CentOS 7 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 This guide is based off the but is tailored specifically for CentOS 7. Install Requirements and Add...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/installation-guides/panel/centos7.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"CentOS 7"}],["meta",{"property":"og:description","content":"CentOS 7 在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。 提示 This guide is based off the but is tailored specifically for CentOS 7. Install Requirements and Add..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS 7\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install Requirements and Additional Utilities","slug":"install-requirements-and-additional-utilities","link":"#install-requirements-and-additional-utilities","children":[{"level":3,"title":"SELinux tools","slug":"selinux-tools","link":"#selinux-tools","children":[]},{"level":3,"title":"MariaDB","slug":"mariadb","link":"#mariadb","children":[]},{"level":3,"title":"PHP 8.0","slug":"php-8-0","link":"#php-8-0","children":[]},{"level":3,"title":"Composer","slug":"composer","link":"#composer","children":[]}]},{"level":2,"title":"Install Utility Packages","slug":"install-utility-packages","link":"#install-utility-packages","children":[{"level":3,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":3,"title":"Redis","slug":"redis","link":"#redis","children":[]}]},{"level":2,"title":"Server Configuration","slug":"server-configuration","link":"#server-configuration","children":[{"level":3,"title":"Configuring MariaDB","slug":"configuring-mariadb","link":"#configuring-mariadb","children":[]},{"level":3,"title":"Setup PHP","slug":"setup-php","link":"#setup-php","children":[]},{"level":3,"title":"Nginx","slug":"nginx-1","link":"#nginx-1","children":[]},{"level":3,"title":"Redis Setup","slug":"redis-setup","link":"#redis-setup","children":[]}]},{"level":2,"title":"Installing the Panel","slug":"installing-the-panel","link":"#installing-the-panel","children":[]}],"git":{"createdTime":1536990178000,"updatedTime":1713315474000,"contributors":[{"name":"Michael Parker","email":"parkervcp@gmail.com","commits":9},{"name":"Lance Pioch","email":"git@lance.sh","commits":3},{"name":"Nuc1eoN","email":"Nuc1eoN@users.noreply.github.com","commits":3},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":3},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"Michael (Parker) Parker","email":"parkervcp@gmail.com","commits":2},{"name":"Tek's GitHub Desktop","email":"tekexplorerm@gmail.com","commits":2},{"name":"Alix","email":"73092812+alix1383@users.noreply.github.com","commits":1},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":1},{"name":"Gamer4life","email":"42851999+gamer4life1@users.noreply.github.com","commits":1},{"name":"Jay Williams","email":"codingJWilliams@users.noreply.github.com","commits":1},{"name":"Mark David","email":"44349634+markd69@users.noreply.github.com","commits":1},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"community/installation-guides/panel/centos7.md","localizedDate":"2018年9月15日","autoDesc":true}`);export{E as comp,A as data};
