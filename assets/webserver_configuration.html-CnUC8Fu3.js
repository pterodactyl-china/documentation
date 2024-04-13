import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as b,a as e,e as n,d as a,w as s}from"./app-C31F2e73.js";const u={},m=e("h1",{id:"网络服务器配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网络服务器配置"},[e("span",null,"网络服务器配置")])],-1),v={class:"hint-container warning"},p=e("p",{class:"hint-container-title"},"注意",-1),h=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[n("如果您使用"),e("a",{href:"#caddy-with-automatic-ssl"},"自动续签 SSL 的 Caddy"),n("，则无需手动创建 SSL 证书，Caddy 会自动处理。")])],-1),_=e("p",null,"首先，删除默认的 NGINX 配置。",-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rm"),n(` /etc/nginx/sites-enabled/default
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=e("p",null,[n("现在，您应该复制下面文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),e("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),e("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),e("code",null,"/etc/nginx/conf.d/"),n("。")],-1),S=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`server_tokens off;

server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <domain>;

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    # SSL Configuration - Replace the example <domain> with your domain
    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    # See https://hstspreload.org/ before uncommenting the line below.
    # add_header Strict-Transport-Security "max-age=15768000; preload;";
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
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
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("h3",{id:"启用配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置"},[e("span",null,"启用配置")])],-1),y=e("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),C=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 如果您使用的是 CentOS，则不需要符号链接此文件。"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"ln"),n(),e("span",{class:"token parameter variable"},"-s"),n(` /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

`),e("span",{class:"token comment"},"# 无论操作系统如何，您都需要重新启动 nginx。"),n(`
`),e("span",{class:"token function"},"sudo"),n(` systemctl restart nginx
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("p",null,"首先，删除默认的 NGINX 配置。",-1),A=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rm"),n(` /etc/nginx/sites-enabled/default
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=e("p",null,[n("现在，您应该复制下面文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),e("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),e("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),e("code",null,"/etc/nginx/conf.d/"),n("。")],-1),L=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`server {
    # Replace the example <domain> with your domain name or IP address
    listen 80;
    server_name <domain>;


    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \\.php$ {
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\\.ht {
        deny all;
    }
}
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("h3",{id:"启用配置-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置-1"},[e("span",null,"启用配置")])],-1),P=e("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 如果您使用的是 CentOS，则不需要符号链接此文件。"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"ln"),n(),e("span",{class:"token parameter variable"},"-s"),n(` /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

`),e("span",{class:"token comment"},"# 无论操作系统如何，您都需要重新启动 nginx。"),n(`
`),e("span",{class:"token function"},"sudo"),n(` systemctl restart nginx
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),H=e("p",null,"首先，删除默认的 Apache 配置。",-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`a2dissite 000-default.conf
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("p",null,[n("现在，您应该复制下面文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),e("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),e("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),e("code",null,"/etc/httpd/conf.d/"),n("。")],-1),O=e("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),e("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),M=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`<VirtualHost *:80>
  ServerName <domain>
  
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
</VirtualHost>

<VirtualHost *:443>
  ServerName <domain>
  DocumentRoot "/var/www/pterodactyl/public"

  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M

  <Directory "/var/www/pterodactyl/public">
    Require all granted
    AllowOverride all
  </Directory>

  SSLEngine on
  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem
</VirtualHost> 
`)]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=e("h3",{id:"启用配置-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置-2"},[e("span",null,"启用配置")])],-1),z=e("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),e("code",null,"systemctl restart httpd"),n("。")],-1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 你不需要在 CentOS 上运行这部分的任何命令"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"ln"),n(),e("span",{class:"token parameter variable"},"-s"),n(` /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
`),e("span",{class:"token function"},"sudo"),n(` a2enmod rewrite
`),e("span",{class:"token function"},"sudo"),n(` a2enmod ssl
`),e("span",{class:"token function"},"sudo"),n(` systemctl restart apache2
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),$=e("p",null,"首先，删除默认的 Apache 配置。",-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`a2dissite 000-default.conf
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),I=e("p",null,[n("现在，您应该复制下面文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),e("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),e("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),e("code",null,"/etc/httpd/conf.d/"),n("。")],-1),G=e("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),e("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),F=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`<VirtualHost *:80>
  ServerName <domain>
  DocumentRoot "/var/www/pterodactyl/public"
  
  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M
  
  <Directory "/var/www/pterodactyl/public">
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>
`)]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("h3",{id:"启用配置-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置-3"},[e("span",null,"启用配置")])],-1),q=e("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),e("code",null,"systemctl restart httpd"),n("。")],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 你不需要在 CentOS 上运行这部分的任何命令"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"ln"),n(),e("span",{class:"token parameter variable"},"-s"),n(` /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
`),e("span",{class:"token function"},"sudo"),n(` a2enmod rewrite
`),e("span",{class:"token function"},"sudo"),n(` systemctl restart apache2
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),e("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),Z=e("p",null,"要完全删除配置文件，请运行以下命令：",-1),j=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rm"),n(` /etc/caddy/Caddyfile
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),J=e("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),K=e("p",null,[n("您应该粘贴以下文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您的域名。")],-1),W=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    servers :443 {
        timeouts {
            read_body 120s
        }
    }
}

<domain> {
    root * /var/www/pterodactyl/public

    file_server

    php_fastcgi unix//run/php/php8.1-fpm.sock {
        root /var/www/pterodactyl/public
        index index.php

        env PHP_VALUE "upload_max_filesize = 100M \\n post_max_size = 100M"
        env HTTP_PROXY ""
        env HTTPS "on"

        read_timeout 300s
        dial_timeout 300s
        write_timeout 300s
    }

    header Strict-Transport-Security "max-age=16768000; preload;"
    header X-Content-Type-Options "nosniff"
    header X-XSS-Protection "1; mode=block;"
    header X-Robots-Tag "none"
    header Content-Security-Policy "frame-ancestors 'self'"
    header X-Frame-Options "DENY"
    header Referrer-Policy "same-origin"

    request_body {
        max_size 100m
    }

    respond /.ht* 403

    log {
        output file /var/log/caddy/pterodactyl.log {
            roll_size 100MiB
            roll_keep_for 7d
        }
        level INFO
    }
}
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Q={class:"hint-container tip"},ee=e("p",{class:"hint-container-title"},"提示",-1),ne=e("h3",{id:"启用配置-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置-4"},[e("span",null,"启用配置")])],-1),se=e("p",null,"最后一步是重新启动 Caddy。",-1),ie=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`systemctl restart caddy
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),le=e("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),e("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),ae=e("p",null,"要完全删除配置文件，请运行以下命令：",-1),re=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"rm"),n(` /etc/caddy/Caddyfile
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),te=e("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),ce=e("p",null,[n("您应该粘贴以下文件的内容，将 "),e("code",null,"<domain>"),n(" 替换为您的域名。")],-1),de=e("p",null,[n("唯一的两个变化是在 "),e("code",null,"<domain>"),n(" 后缀添加了 "),e("code",null,":80"),n("，并且在全局配置的 "),e("code",null,"servers"),n(" 指令中，将端口从 "),e("code",null,":443"),n(" 更改为 "),e("code",null,":80"),n("。")],-1),oe=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
    servers :80 {
        timeouts {
            read_body 120s
        }
    }
}

<domain>:80 {
    root * /var/www/pterodactyl/public

    file_server

    php_fastcgi unix//run/php/php8.1-fpm.sock {
        root /var/www/pterodactyl/public
        index index.php

        env PHP_VALUE "upload_max_filesize = 100M \\n post_max_size = 100M"
        env HTTP_PROXY ""
        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS

        read_timeout 300s
        dial_timeout 300s
        write_timeout 300s
    }

    header Strict-Transport-Security "max-age=16768000; preload;"
    header X-Content-Type-Options "nosniff"
    header X-XSS-Protection "1; mode=block;"
    header X-Robots-Tag "none"
    header Content-Security-Policy "frame-ancestors 'self'"
    header X-Frame-Options "DENY"
    header Referrer-Policy "same-origin"

    request_body {
        max_size 100m
    }

    respond /.ht* 403

    log {
        output file /var/log/caddy/pterodactyl.log {
            roll_size 100MiB
            roll_keep_for 7d
        }
        level INFO
    }
}
`)]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),be=e("h3",{id:"启用配置-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启用配置-5"},[e("span",null,"启用配置")])],-1),ue=e("p",null,"最后一步是重新启动 Caddy。",-1),me=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`systemctl restart caddy
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ve={id:"下一步-wings-后端-安装",tabindex:"-1"},pe={class:"header-anchor",href:"#下一步-wings-后端-安装"};function he(_e,ge){const r=t("RouteLink"),c=t("Tabs");return o(),b("div",null,[m,e("div",v,[p,e("p",null,[n("使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 "),a(r,{to:"/tutorials/creating_ssl_certificates.html"},{default:s(()=>[n("创建 SSL 证书")]),_:1}),n(" 文档页面以了解如何在继续之前创建这些证书。")])]),h,a(c,{id:"13",data:[{id:"使用 SSL 的 Nginx"},{id:"没有使用 SSL 的 Nginx"},{id:"使用 SSL 的 Apache"},{id:"没有使用 SSL 的 Apache"},{id:"自动续签 SSL 的 Caddy"},{id:"没有使用 SSL 的 Caddy"}]},{title0:s(({value:i,isActive:l})=>[n("使用 SSL 的 Nginx")]),title1:s(({value:i,isActive:l})=>[n("没有使用 SSL 的 Nginx")]),title2:s(({value:i,isActive:l})=>[n("使用 SSL 的 Apache")]),title3:s(({value:i,isActive:l})=>[n("没有使用 SSL 的 Apache")]),title4:s(({value:i,isActive:l})=>[n("自动续签 SSL 的 Caddy")]),title5:s(({value:i,isActive:l})=>[n("没有使用 SSL 的 Caddy")]),tab0:s(({value:i,isActive:l})=>[_,g,f,S,x,y,C]),tab1:s(({value:i,isActive:l})=>[w,A,k,L,E,P,T]),tab2:s(({value:i,isActive:l})=>[H,R,N,O,M,D,z,X]),tab3:s(({value:i,isActive:l})=>[$,V,I,G,F,Y,q,B]),tab4:s(({value:i,isActive:l})=>[U,Z,j,J,K,W,e("div",Q,[ee,e("p",null,[n("如果您正在使用 Cloudflare DNS 且配置为代理模式，请参考"),a(r,{to:"/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)"},{default:s(()=>[n("此教程")]),_:1}),n("，了解如何配置 Caddy 以使用 DNS 验证方式获取 SSL 证书。")])]),ne,se,ie]),tab5:s(({value:i,isActive:l})=>[le,ae,re,te,ce,de,oe,be,ue,me]),_:1}),e("h4",ve,[e("a",pe,[e("span",null,[n("下一步："),a(r,{to:"/wings/1.0/installing.html"},{default:s(()=>[n("Wings (后端) 安装")]),_:1})])])])])}const xe=d(u,[["render",he],["__file","webserver_configuration.html.vue"]]),ye=JSON.parse('{"path":"/panel/1.0/webserver_configuration.html","title":"网络服务器配置","lang":"zh-CN","frontmatter":{"description":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步：","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/webserver_configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"网络服务器配置"}],["meta",{"property":"og:description","content":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络服务器配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1532300604000,"updatedTime":1713014937000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1220},"filePathRelative":"panel/1.0/webserver_configuration.md","localizedDate":"2018年7月22日","autoDesc":true}');export{xe as comp,ye as data};
