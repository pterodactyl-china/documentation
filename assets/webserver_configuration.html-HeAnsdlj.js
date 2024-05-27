import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as o,a as s,e as n,b as i,w as e,o as p}from"./app-ydblb6sM.js";const u={},m=s("h1",{id:"网络服务器配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#网络服务器配置"},[s("span",null,"网络服务器配置")])],-1),v={class:"hint-container warning"},b=s("p",{class:"hint-container-title"},"注意",-1),h=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"提示"),s("p",null,[n("如果您使用"),s("a",{href:"#caddy-with-automatic-ssl"},"自动续签 SSL 的 Caddy"),n("，则无需手动创建 SSL 证书，Caddy 会自动处理。")])],-1),_=s("p",null,"首先，删除默认的 NGINX 配置。",-1),g=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"rm"),n(" /etc/nginx/sites-enabled/default")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),f=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/nginx/conf.d/"),n("。")],-1),y=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"server_tokens off;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"server {"),n(`
`),s("span",{class:"line"},"    listen 80;"),n(`
`),s("span",{class:"line highlighted"},"    server_name <domain>;"),n(`
`),s("span",{class:"line"},"    return 301 https://$server_name$request_uri;"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"server {"),n(`
`),s("span",{class:"line"},"    listen 443 ssl http2;"),n(`
`),s("span",{class:"line highlighted"},"    server_name <domain>;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    root /var/www/pterodactyl/public;"),n(`
`),s("span",{class:"line"},"    index index.php;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    access_log /var/log/nginx/pterodactyl.app-access.log;"),n(`
`),s("span",{class:"line"},"    error_log  /var/log/nginx/pterodactyl.app-error.log error;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    # allow larger file uploads and longer script runtimes"),n(`
`),s("span",{class:"line"},"    client_max_body_size 100m;"),n(`
`),s("span",{class:"line"},"    client_body_timeout 120s;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    sendfile off;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    # SSL Configuration - Replace the example <domain> with your domain"),n(`
`),s("span",{class:"line highlighted"},"    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;"),n(`
`),s("span",{class:"line highlighted"},"    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;"),n(`
`),s("span",{class:"line"},"    ssl_session_cache shared:SSL:10m;"),n(`
`),s("span",{class:"line"},"    ssl_protocols TLSv1.2 TLSv1.3;"),n(`
`),s("span",{class:"line"},'    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";'),n(`
`),s("span",{class:"line"},"    ssl_prefer_server_ciphers on;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    # See https://hstspreload.org/ before uncommenting the line below."),n(`
`),s("span",{class:"line"},'    # add_header Strict-Transport-Security "max-age=15768000; preload;";'),n(`
`),s("span",{class:"line"},"    add_header X-Content-Type-Options nosniff;"),n(`
`),s("span",{class:"line"},'    add_header X-XSS-Protection "1; mode=block";'),n(`
`),s("span",{class:"line"},"    add_header X-Robots-Tag none;"),n(`
`),s("span",{class:"line"},`    add_header Content-Security-Policy "frame-ancestors 'self'";`),n(`
`),s("span",{class:"line"},"    add_header X-Frame-Options DENY;"),n(`
`),s("span",{class:"line"},"    add_header Referrer-Policy same-origin;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location / {"),n(`
`),s("span",{class:"line"},"        try_files $uri $uri/ /index.php?$query_string;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location ~ \\.php$ {"),n(`
`),s("span",{class:"line"},"        fastcgi_split_path_info ^(.+\\.php)(/.+)$;"),n(`
`),s("span",{class:"line"},"        fastcgi_pass unix:/run/php/php8.1-fpm.sock;"),n(`
`),s("span",{class:"line"},"        fastcgi_index index.php;"),n(`
`),s("span",{class:"line"},"        include fastcgi_params;"),n(`
`),s("span",{class:"line"},'        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";'),n(`
`),s("span",{class:"line"},"        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;"),n(`
`),s("span",{class:"line"},'        fastcgi_param HTTP_PROXY "";'),n(`
`),s("span",{class:"line"},"        fastcgi_intercept_errors off;"),n(`
`),s("span",{class:"line"},"        fastcgi_buffer_size 16k;"),n(`
`),s("span",{class:"line"},"        fastcgi_buffers 4 16k;"),n(`
`),s("span",{class:"line"},"        fastcgi_connect_timeout 300;"),n(`
`),s("span",{class:"line"},"        fastcgi_send_timeout 300;"),n(`
`),s("span",{class:"line"},"        fastcgi_read_timeout 300;"),n(`
`),s("span",{class:"line"},"        include /etc/nginx/fastcgi_params;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location ~ /\\.ht {"),n(`
`),s("span",{class:"line"},"        deny all;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=s("h3",{id:"启用配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置"},[s("span",null,"启用配置")])],-1),x=s("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token comment"},"# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"ln"),n(),s("span",{class:"token parameter variable"},"-s"),n(" /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 无论操作系统如何，您都需要重新启动 nginx。")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart nginx")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("p",null,"首先，删除默认的 NGINX 配置。",-1),A=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"rm"),n(" /etc/nginx/sites-enabled/default")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),k=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/nginx/conf.d/"),n("。")],-1),E=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"server {"),n(`
`),s("span",{class:"line"},"    # Replace the example <domain> with your domain name or IP address"),n(`
`),s("span",{class:"line"},"    listen 80;"),n(`
`),s("span",{class:"line highlighted"},"    server_name <domain>;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    root /var/www/pterodactyl/public;"),n(`
`),s("span",{class:"line"},"    index index.html index.htm index.php;"),n(`
`),s("span",{class:"line"},"    charset utf-8;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location / {"),n(`
`),s("span",{class:"line"},"        try_files $uri $uri/ /index.php?$query_string;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location = /favicon.ico { access_log off; log_not_found off; }"),n(`
`),s("span",{class:"line"},"    location = /robots.txt  { access_log off; log_not_found off; }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    access_log off;"),n(`
`),s("span",{class:"line"},"    error_log  /var/log/nginx/pterodactyl.app-error.log error;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    # allow larger file uploads and longer script runtimes"),n(`
`),s("span",{class:"line"},"    client_max_body_size 100m;"),n(`
`),s("span",{class:"line"},"    client_body_timeout 120s;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    sendfile off;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location ~ \\.php$ {"),n(`
`),s("span",{class:"line"},"        fastcgi_split_path_info ^(.+\\.php)(/.+)$;"),n(`
`),s("span",{class:"line"},"        fastcgi_pass unix:/run/php/php8.1-fpm.sock;"),n(`
`),s("span",{class:"line"},"        fastcgi_index index.php;"),n(`
`),s("span",{class:"line"},"        include fastcgi_params;"),n(`
`),s("span",{class:"line"},'        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";'),n(`
`),s("span",{class:"line"},"        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;"),n(`
`),s("span",{class:"line"},'        fastcgi_param HTTP_PROXY "";'),n(`
`),s("span",{class:"line"},"        fastcgi_intercept_errors off;"),n(`
`),s("span",{class:"line"},"        fastcgi_buffer_size 16k;"),n(`
`),s("span",{class:"line"},"        fastcgi_buffers 4 16k;"),n(`
`),s("span",{class:"line"},"        fastcgi_connect_timeout 300;"),n(`
`),s("span",{class:"line"},"        fastcgi_send_timeout 300;"),n(`
`),s("span",{class:"line"},"        fastcgi_read_timeout 300;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    location ~ /\\.ht {"),n(`
`),s("span",{class:"line"},"        deny all;"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=s("h3",{id:"启用配置-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-1"},[s("span",null,"启用配置")])],-1),T=s("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),P=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token comment"},"# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"ln"),n(),s("span",{class:"token parameter variable"},"-s"),n(" /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# 无论操作系统如何，您都需要重新启动 nginx。")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart nginx")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),H=s("p",null,"首先，删除默认的 Apache 配置。",-1),R=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},"a2dissite 000-default.conf"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),N=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/httpd/conf.d/"),n("。")],-1),O=s("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),s("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),M=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"<VirtualHost *:80>"),n(`
`),s("span",{class:"line highlighted"},"  ServerName <domain>"),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},"  RewriteEngine On"),n(`
`),s("span",{class:"line"},"  RewriteCond %{HTTPS} !=on"),n(`
`),s("span",{class:"line"},"  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] "),n(`
`),s("span",{class:"line"},"</VirtualHost>"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"<VirtualHost *:443>"),n(`
`),s("span",{class:"line highlighted"},"  ServerName <domain>"),n(`
`),s("span",{class:"line"},'  DocumentRoot "/var/www/pterodactyl/public"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"  AllowEncodedSlashes On"),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},"  php_value upload_max_filesize 100M"),n(`
`),s("span",{class:"line"},"  php_value post_max_size 100M"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'  <Directory "/var/www/pterodactyl/public">'),n(`
`),s("span",{class:"line"},"    Require all granted"),n(`
`),s("span",{class:"line"},"    AllowOverride all"),n(`
`),s("span",{class:"line"},"  </Directory>"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"  SSLEngine on"),n(`
`),s("span",{class:"line highlighted"},"  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem"),n(`
`),s("span",{class:"line highlighted"},"  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem"),n(`
`),s("span",{class:"line"},"</VirtualHost> "),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("h3",{id:"启用配置-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-2"},[s("span",null,"启用配置")])],-1),z=s("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),s("code",null,"systemctl restart httpd"),n("。")],-1),X=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token comment"},"# 你不需要在 CentOS 上运行这部分的任何命令")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"ln"),n(),s("span",{class:"token parameter variable"},"-s"),n(" /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" a2enmod rewrite")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" a2enmod ssl")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart apache2")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),$=s("p",null,"首先，删除默认的 Apache 配置。",-1),V=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},"a2dissite 000-default.conf"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),I=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/httpd/conf.d/"),n("。")],-1),G=s("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),s("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),Y=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"<VirtualHost *:80>"),n(`
`),s("span",{class:"line highlighted"},"  ServerName <domain>"),n(`
`),s("span",{class:"line"},'  DocumentRoot "/var/www/pterodactyl/public"'),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},"  AllowEncodedSlashes On"),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},"  php_value upload_max_filesize 100M"),n(`
`),s("span",{class:"line"},"  php_value post_max_size 100M"),n(`
`),s("span",{class:"line"},"  "),n(`
`),s("span",{class:"line"},'  <Directory "/var/www/pterodactyl/public">'),n(`
`),s("span",{class:"line"},"    AllowOverride all"),n(`
`),s("span",{class:"line"},"    Require all granted"),n(`
`),s("span",{class:"line"},"  </Directory>"),n(`
`),s("span",{class:"line"},"</VirtualHost>"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("h3",{id:"启用配置-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-3"},[s("span",null,"启用配置")])],-1),q=s("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),s("code",null,"systemctl restart httpd"),n("。")],-1),B=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token comment"},"# 你不需要在 CentOS 上运行这部分的任何命令")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"ln"),n(),s("span",{class:"token parameter variable"},"-s"),n(" /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" a2enmod rewrite")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart apache2")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=s("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),s("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),K=s("p",null,"要完全删除配置文件，请运行以下命令：",-1),U=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"rm"),n(" /etc/caddy/Caddyfile")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Z=s("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),J=s("p",null,[n("您应该粘贴以下文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您的域名。")],-1),W=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"{"),n(`
`),s("span",{class:"line"},"    servers :443 {"),n(`
`),s("span",{class:"line"},"        timeouts {"),n(`
`),s("span",{class:"line"},"            read_body 120s"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line highlighted"},"<domain> {"),n(`
`),s("span",{class:"line"},"    root * /var/www/pterodactyl/public"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    file_server"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    php_fastcgi unix//run/php/php8.1-fpm.sock {"),n(`
`),s("span",{class:"line"},"        root /var/www/pterodactyl/public"),n(`
`),s("span",{class:"line"},"        index index.php"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'        env PHP_VALUE "upload_max_filesize = 100M'),n(`
`),s("span",{class:"line"},'        post_max_size = 100M"'),n(`
`),s("span",{class:"line"},'        env HTTP_PROXY ""'),n(`
`),s("span",{class:"line"},'        env HTTPS "on"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"        read_timeout 300s"),n(`
`),s("span",{class:"line"},"        dial_timeout 300s"),n(`
`),s("span",{class:"line"},"        write_timeout 300s"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'    header Strict-Transport-Security "max-age=16768000; preload;"'),n(`
`),s("span",{class:"line"},'    header X-Content-Type-Options "nosniff"'),n(`
`),s("span",{class:"line"},'    header X-XSS-Protection "1; mode=block;"'),n(`
`),s("span",{class:"line"},'    header X-Robots-Tag "none"'),n(`
`),s("span",{class:"line"},`    header Content-Security-Policy "frame-ancestors 'self'"`),n(`
`),s("span",{class:"line"},'    header X-Frame-Options "DENY"'),n(`
`),s("span",{class:"line"},'    header Referrer-Policy "same-origin"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    request_body {"),n(`
`),s("span",{class:"line"},"        max_size 100m"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    respond /.ht* 403"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    log {"),n(`
`),s("span",{class:"line"},"        output file /var/log/caddy/pterodactyl.log {"),n(`
`),s("span",{class:"line"},"            roll_size 100MiB"),n(`
`),s("span",{class:"line"},"            roll_keep_for 7d"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"        level INFO"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Q={class:"hint-container tip"},ss=s("p",{class:"hint-container-title"},"提示",-1),ns=s("h3",{id:"启用配置-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-4"},[s("span",null,"启用配置")])],-1),es=s("p",null,"最后一步是重新启动 Caddy。",-1),ls=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},"systemctl restart caddy"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),as=s("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),s("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),is=s("p",null,"要完全删除配置文件，请运行以下命令：",-1),cs=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token function"},"rm"),n(" /etc/caddy/Caddyfile")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),ts=s("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),ds=s("p",null,[n("您应该粘贴以下文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您的域名。")],-1),rs=s("p",null,[n("唯一的两个变化是在 "),s("code",null,"<domain>"),n(" 后缀添加了 "),s("code",null,":80"),n("，并且在全局配置的 "),s("code",null,"servers"),n(" 指令中，将端口从 "),s("code",null,":443"),n(" 更改为 "),s("code",null,":80"),n("。")],-1),os=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,[s("span",{class:"line"},"{"),n(`
`),s("span",{class:"line"},"    servers :80 {"),n(`
`),s("span",{class:"line"},"        timeouts {"),n(`
`),s("span",{class:"line"},"            read_body 120s"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line highlighted"},"<domain>:80 {"),n(`
`),s("span",{class:"line"},"    root * /var/www/pterodactyl/public"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    file_server"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    php_fastcgi unix//run/php/php8.1-fpm.sock {"),n(`
`),s("span",{class:"line"},"        root /var/www/pterodactyl/public"),n(`
`),s("span",{class:"line"},"        index index.php"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'        env PHP_VALUE "upload_max_filesize = 100M'),n(`
`),s("span",{class:"line"},'        post_max_size = 100M"'),n(`
`),s("span",{class:"line"},'        env HTTP_PROXY ""'),n(`
`),s("span",{class:"line"},'        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"        read_timeout 300s"),n(`
`),s("span",{class:"line"},"        dial_timeout 300s"),n(`
`),s("span",{class:"line"},"        write_timeout 300s"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'    header Strict-Transport-Security "max-age=16768000; preload;"'),n(`
`),s("span",{class:"line"},'    header X-Content-Type-Options "nosniff"'),n(`
`),s("span",{class:"line"},'    header X-XSS-Protection "1; mode=block;"'),n(`
`),s("span",{class:"line"},'    header X-Robots-Tag "none"'),n(`
`),s("span",{class:"line"},`    header Content-Security-Policy "frame-ancestors 'self'"`),n(`
`),s("span",{class:"line"},'    header X-Frame-Options "DENY"'),n(`
`),s("span",{class:"line"},'    header Referrer-Policy "same-origin"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    request_body {"),n(`
`),s("span",{class:"line"},"        max_size 100m"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    respond /.ht* 403"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"    log {"),n(`
`),s("span",{class:"line"},"        output file /var/log/caddy/pterodactyl.log {"),n(`
`),s("span",{class:"line"},"            roll_size 100MiB"),n(`
`),s("span",{class:"line"},"            roll_keep_for 7d"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"        level INFO"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ps=s("h3",{id:"启用配置-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-5"},[s("span",null,"启用配置")])],-1),us=s("p",null,"最后一步是重新启动 Caddy。",-1),ms=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},"systemctl restart caddy"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),vs={id:"下一步-wings-后端-安装",tabindex:"-1"},bs={class:"header-anchor",href:"#下一步-wings-后端-安装"};function hs(_s,gs){const c=t("RouteLink"),d=t("Tabs");return p(),o("div",null,[m,s("div",v,[b,s("p",null,[n("使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 "),i(c,{to:"/tutorials/creating_ssl_certificates.html"},{default:e(()=>[n("创建 SSL 证书")]),_:1}),n(" 文档页面以了解如何在继续之前创建这些证书。")])]),h,i(d,{id:"13",data:[{id:"使用 SSL 的 Nginx"},{id:"没有使用 SSL 的 Nginx"},{id:"使用 SSL 的 Apache"},{id:"没有使用 SSL 的 Apache"},{id:"自动续签 SSL 的 Caddy"},{id:"没有使用 SSL 的 Caddy"}]},{title0:e(({value:l,isActive:a})=>[n("使用 SSL 的 Nginx")]),title1:e(({value:l,isActive:a})=>[n("没有使用 SSL 的 Nginx")]),title2:e(({value:l,isActive:a})=>[n("使用 SSL 的 Apache")]),title3:e(({value:l,isActive:a})=>[n("没有使用 SSL 的 Apache")]),title4:e(({value:l,isActive:a})=>[n("自动续签 SSL 的 Caddy")]),title5:e(({value:l,isActive:a})=>[n("没有使用 SSL 的 Caddy")]),tab0:e(({value:l,isActive:a})=>[_,g,f,y,S,x,C]),tab1:e(({value:l,isActive:a})=>[w,A,k,E,L,T,P]),tab2:e(({value:l,isActive:a})=>[H,R,N,O,M,D,z,X]),tab3:e(({value:l,isActive:a})=>[$,V,I,G,Y,F,q,B]),tab4:e(({value:l,isActive:a})=>[j,K,U,Z,J,W,s("div",Q,[ss,s("p",null,[n("如果您正在使用 Cloudflare DNS 且配置为代理模式，请参考"),i(c,{to:"/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)"},{default:e(()=>[n("此教程")]),_:1}),n("，了解如何配置 Caddy 以使用 DNS 验证方式获取 SSL 证书。")])]),ns,es,ls]),tab5:e(({value:l,isActive:a})=>[as,is,cs,ts,ds,rs,os,ps,us,ms]),_:1}),s("h4",vs,[s("a",bs,[s("span",null,[n("下一步："),i(c,{to:"/wings/1.0/installing.html"},{default:e(()=>[n("Wings (后端) 安装")]),_:1})])])])])}const Ss=r(u,[["render",hs],["__file","webserver_configuration.html.vue"]]),xs=JSON.parse('{"path":"/panel/1.0/webserver_configuration.html","title":"网络服务器配置","lang":"zh-CN","frontmatter":{"description":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步：","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/webserver_configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"网络服务器配置"}],["meta",{"property":"og:description","content":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络服务器配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1532300604000,"updatedTime":1713014937000,"contributors":[{"name":"Vojtech Mares","email":"iam@vojtechmares.com","commits":9},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":7},{"name":"Alex","email":"admin@softwarenoob.com","commits":3},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":3},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":2},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"MysteriousK69","email":"63832146+MysteriousK69@users.noreply.github.com","commits":1},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":1},{"name":"PadowYT2","email":"me@padow.ru","commits":1},{"name":"Term14","email":"64224516+Term14@users.noreply.github.com","commits":1},{"name":"Vojtěch Mareš","email":"iam@vojtechmares.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1220},"filePathRelative":"panel/1.0/webserver_configuration.md","localizedDate":"2018年7月22日","autoDesc":true}');export{Ss as comp,xs as data};
