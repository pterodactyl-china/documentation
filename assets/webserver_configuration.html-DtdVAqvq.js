import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as n,b as e,e as a,d as l,w as p,r as c,o as d}from"./app-Dn2gJQev.js";const o={},u={class:"hint-container caution"},m={class:"hint-container warning"},v={class:"hint-container warning"};function h(b,s){const i=c("RouteLink");return d(),r("div",null,[s[13]||(s[13]=n("h1",{id:"webserver-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webserver-configuration"},[n("span",null,"Webserver Configuration")])],-1)),n("div",u,[s[3]||(s[3]=n("p",{class:"hint-container-title"},"This Version is End-of-Life",-1)),s[4]||(s[4]=n("p",null,[a("This documentation is for "),n("strong",null,"end-of-life software"),a(" which does not recieve any security updates or support from the community. This documentation has been left accessible for historial reasons.")],-1)),n("p",null,[s[1]||(s[1]=a("You should be installing and using ",-1)),l(i,{to:"/panel/1.0/getting_started.html"},{default:p(()=>[...s[0]||(s[0]=[a("Pterodactyl Panel 1.0",-1)])]),_:1}),s[2]||(s[2]=a(" in production environments.",-1))])]),s[14]||(s[14]=e('<div class="hint-container caution"><p class="hint-container-title">警告</p><p>You should remove the default Apache or NGINX configuration as it will expose application secrets to malicious users by default.</p></div><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>NGINX</span></a></h2><p>You should paste the contents of the file below, replacing <code>&lt;domain&gt;</code> with your domain name being used in a file called <code>pterodactyl.conf</code> and place it in <code>/etc/nginx/sites-available/</code>, or — if on CentOS, <code>/etc/nginx/conf.d/</code>.</p><h3 id="nginx-with-ssl" tabindex="-1"><a class="header-anchor" href="#nginx-with-ssl"><span>NGINX With SSL</span></a></h3><p>This configuration assumes that you will be using SSL on both the Panel and Daemons for significantly improved communication security between users and the Panel. You will need to get a valid SSL certificate which can be done for free by using Let&#39;s Encrypt.</p>',5)),n("div",m,[s[8]||(s[8]=n("p",{class:"hint-container-title"},"注意",-1)),n("p",null,[s[6]||(s[6]=a("When using the SSL configuration you MUST create SSL certificates, otherwise your NGINX will fail to start. See ",-1)),l(i,{to:"/tutorials/creating_ssl_certificates.html"},{default:p(()=>[...s[5]||(s[5]=[a("Creating SSL Certificates",-1)])]),_:1}),s[7]||(s[7]=a(" documentation page for how to create these certificates before continuing.",-1))])]),s[15]||(s[15]=e(`<div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-conf"><span class="line"><span>server_tokens off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name &lt;domain&gt;;</span></span>
<span class="line"><span>    return 301 https://$server_name$request_uri;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl http2;</span></span>
<span class="line"><span>    server_name &lt;domain&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root /var/www/pterodactyl/public;</span></span>
<span class="line"><span>    index index.php;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log /var/log/nginx/pterodactyl.app-access.log;</span></span>
<span class="line"><span>    error_log  /var/log/nginx/pterodactyl.app-error.log error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # allow larger file uploads and longer script runtimes</span></span>
<span class="line"><span>    client_max_body_size 100m;</span></span>
<span class="line"><span>    client_body_timeout 120s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # SSL Configuration</span></span>
<span class="line"><span>    ssl_certificate /etc/letsencrypt/live/&lt;domain&gt;/fullchain.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/letsencrypt/live/&lt;domain&gt;/privkey.pem;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers &quot;ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384&quot;;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # See https://hstspreload.org/ before uncommenting the line below.</span></span>
<span class="line"><span>    # add_header Strict-Transport-Security &quot;max-age=15768000; preload;&quot;;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options nosniff;</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span>
<span class="line"><span>    add_header X-Robots-Tag none;</span></span>
<span class="line"><span>    add_header Content-Security-Policy &quot;frame-ancestors &#39;self&#39;&quot;;</span></span>
<span class="line"><span>    add_header X-Frame-Options DENY;</span></span>
<span class="line"><span>    add_header Referrer-Policy same-origin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_split_path_info ^(.+\\.php)(/.+)$;</span></span>
<span class="line"><span>        fastcgi_pass unix:/run/php/php7.2-fpm.sock;</span></span>
<span class="line"><span>        fastcgi_index index.php;</span></span>
<span class="line"><span>        include fastcgi_params;</span></span>
<span class="line"><span>        fastcgi_param PHP_VALUE &quot;upload_max_filesize = 100M \\n post_max_size=100M&quot;;</span></span>
<span class="line"><span>        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        fastcgi_param HTTP_PROXY &quot;&quot;;</span></span>
<span class="line"><span>        fastcgi_intercept_errors off;</span></span>
<span class="line"><span>        fastcgi_buffer_size 16k;</span></span>
<span class="line"><span>        fastcgi_buffers 4 16k;</span></span>
<span class="line"><span>        fastcgi_connect_timeout 300;</span></span>
<span class="line"><span>        fastcgi_send_timeout 300;</span></span>
<span class="line"><span>        fastcgi_read_timeout 300;</span></span>
<span class="line"><span>        include /etc/nginx/fastcgi_params;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ /\\.ht {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Continue reading to the bottom of this section for the final steps with NGINX!</p><h3 id="nginx-without-ssl" tabindex="-1"><a class="header-anchor" href="#nginx-without-ssl"><span>NGINX Without SSL</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-conf"><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name &lt;domain&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root /var/www/pterodactyl/public;</span></span>
<span class="line"><span>    index index.html index.htm index.php;</span></span>
<span class="line"><span>    charset utf-8;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.php?$query_string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location = /favicon.ico { access_log off; log_not_found off; }</span></span>
<span class="line"><span>    location = /robots.txt  { access_log off; log_not_found off; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log off;</span></span>
<span class="line"><span>    error_log  /var/log/nginx/pterodactyl.app-error.log error;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # allow larger file uploads and longer script runtimes</span></span>
<span class="line"><span>    client_max_body_size 100m;</span></span>
<span class="line"><span>    client_body_timeout 120s;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile off;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        fastcgi_split_path_info ^(.+\\.php)(/.+)$;</span></span>
<span class="line"><span>        fastcgi_pass unix:/run/php/php7.2-fpm.sock;</span></span>
<span class="line"><span>        fastcgi_index index.php;</span></span>
<span class="line"><span>        include fastcgi_params;</span></span>
<span class="line"><span>        fastcgi_param PHP_VALUE &quot;upload_max_filesize = 100M \\n post_max_size=100M&quot;;</span></span>
<span class="line"><span>        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;</span></span>
<span class="line"><span>        fastcgi_param HTTP_PROXY &quot;&quot;;</span></span>
<span class="line"><span>        fastcgi_intercept_errors off;</span></span>
<span class="line"><span>        fastcgi_buffer_size 16k;</span></span>
<span class="line"><span>        fastcgi_buffers 4 16k;</span></span>
<span class="line"><span>        fastcgi_connect_timeout 300;</span></span>
<span class="line"><span>        fastcgi_send_timeout 300;</span></span>
<span class="line"><span>        fastcgi_read_timeout 300;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ /\\.ht {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enabling-configuration" tabindex="-1"><a class="header-anchor" href="#enabling-configuration"><span>Enabling Configuration</span></a></h3><p>The final step is to enable your NGINX configuration and restart it.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># You do not need to symlink this file if you are using CentOS.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/nginx/sites-available/pterodactyl.conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/nginx/sites-enabled/pterodactyl.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># You need to restart nginx regardless of OS.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span>Apache</span></a></h2><p>You should paste the contents of the file below, replacing <code>&lt;domain&gt;</code> with your domain name being used in a file called <code>pterodactyl.conf</code> and place it in <code>/etc/apache2/sites-available</code>, or — if on CentOS, <code>/etc/httpd/conf.d/</code>.</p><p>Note: When using Apache, make sure you have the <code>libapache2-mod-php</code> package installed or else PHP will not display on your webserver.</p><h3 id="apache-with-ssl" tabindex="-1"><a class="header-anchor" href="#apache-with-ssl"><span>Apache With SSL</span></a></h3><p>Like the nginx configuration, this assumes you will be using SSL on both the Panel and Daemons for improved security.</p>`,12)),n("div",v,[s[12]||(s[12]=n("p",{class:"hint-container-title"},"注意",-1)),n("p",null,[s[10]||(s[10]=a("When using the SSL configuration you MUST create SSL certificates, otherwise your Apache will fail to start. See ",-1)),l(i,{to:"/tutorials/creating_ssl_certificates.html"},{default:p(()=>[...s[9]||(s[9]=[a("Creating SSL Certificates",-1)])]),_:1}),s[11]||(s[11]=a(" documentation page for how to create these certificates before continuing.",-1))])]),s[16]||(s[16]=e(`<div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-conf"><span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>    # Replace the example &lt;domain&gt; with your domain name or IP address</span></span>
<span class="line"><span>    ServerName &lt;domain&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    RewriteEngine On</span></span>
<span class="line"><span>    RewriteCond %{HTTPS} !=on</span></span>
<span class="line"><span>    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] </span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;VirtualHost *:443&gt;</span></span>
<span class="line"><span>    # Replace the example &lt;domain&gt; with your domain name or IP address</span></span>
<span class="line"><span>    ServerName &lt;domain&gt;</span></span>
<span class="line"><span>    DocumentRoot &quot;/var/www/pterodactyl/public&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    AllowEncodedSlashes On</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    php_value upload_max_filesize 100M</span></span>
<span class="line"><span>    php_value post_max_size 100M</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Directory &quot;/var/www/pterodactyl/public&quot;&gt;</span></span>
<span class="line"><span>        Require all granted</span></span>
<span class="line"><span>        AllowOverride all</span></span>
<span class="line"><span>    &lt;/Directory&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    SSLEngine on</span></span>
<span class="line"><span>    SSLCertificateFile /etc/letsencrypt/live/&lt;domain&gt;/fullchain.pem</span></span>
<span class="line"><span>    SSLCertificateKeyFile /etc/letsencrypt/live/&lt;domain&gt;/privkey.pem</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apache-without-ssl" tabindex="-1"><a class="header-anchor" href="#apache-without-ssl"><span>Apache Without SSL</span></a></h3><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-conf"><span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>    # Replace the example &lt;domain&gt; with your domain name or IP address</span></span>
<span class="line"><span>    ServerName &lt;domain&gt;</span></span>
<span class="line"><span>    DocumentRoot &quot;/var/www/pterodactyl/public&quot;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    AllowEncodedSlashes On</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    php_value upload_max_filesize 100M</span></span>
<span class="line"><span>    php_value post_max_size 100M</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;Directory &quot;/var/www/pterodactyl/public&quot;&gt;</span></span>
<span class="line"><span>        AllowOverride all</span></span>
<span class="line"><span>        Require all granted</span></span>
<span class="line"><span>    &lt;/Directory&gt;</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enabling-configuration-1" tabindex="-1"><a class="header-anchor" href="#enabling-configuration-1"><span>Enabling Configuration</span></a></h3><p>Once you&#39;ve created the file above, simply run the commands below. If you are on CentOS <em>you do not need to run the commands below!</em> You only need to run <code>systemctl restart httpd</code>.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># You do not need to run any of these commands on CentOS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ln</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apache2/sites-available/pterodactyl.conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apache2/sites-enabled/pterodactyl.conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a2enmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rewrite</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apache2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6))])}const k=t(o,[["render",h]]),y=JSON.parse('{"path":"/panel/0.7/webserver_configuration.html","title":"Webserver Configuration","lang":"zh-CN","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webserver Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-03T15:09:25.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/0.7/webserver_configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"Webserver Configuration"}],["meta",{"property":"og:description","content":"Webserver Configuration This Version is End-of-Life This documentation is for end-of-life software which does not recieve any security updates or support from the community. Thi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-03T15:09:25.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-03T15:09:25.000Z"}],["meta",{"name":"robots","content":"noindex"}]],"description":"Webserver Configuration This Version is End-of-Life This documentation is for end-of-life software which does not recieve any security updates or support from the community. Thi..."},"git":{"createdTime":1532300604000,"updatedTime":1741014565000,"contributors":[{"name":"Dane Everitt","username":"","email":"dane@daneeveritt.com","commits":3},{"name":"tenten8401","username":"tenten8401","email":"6174343+tenten8401@users.noreply.github.com","commits":3,"url":"https://github.com/tenten8401"},{"name":"Glare Masters","username":"","email":"admin@glaremasters.me","commits":1},{"name":"iamkubi","username":"iamkubi","email":"iamkubi@gmail.com","commits":1,"url":"https://github.com/iamkubi"},{"name":"Faris","username":"Faris","email":"KingFaris10@users.noreply.github.com","commits":1,"url":"https://github.com/Faris"},{"name":"AreYouScared","username":"AreYouScared","email":"sir3lit@gmail.com","commits":1,"url":"https://github.com/AreYouScared"},{"name":"Jakob Schrettenbrunner","username":"","email":"dev@schrej.net","commits":1},{"name":"Toxicterror","username":"Toxicterror","email":"me@udkm.ch","commits":1,"url":"https://github.com/Toxicterror"},{"name":"vlssu","username":"vlssu","email":"43847794+vlssu@users.noreply.github.com","commits":3,"url":"https://github.com/vlssu"},{"name":"Daniel Barton","username":"","email":"danielb@purpleflaghosting.com","commits":1},{"name":"飒爽师叔","username":"","email":"cmy1305300769@126.com","commits":1}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"panel/0.7/webserver_configuration.md","autoDesc":true}');export{k as comp,y as data};
