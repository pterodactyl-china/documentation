import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,c as p,a as s,e as n,b as a,w as l,o as u}from"./app-CxUaffK2.js";const h={},o=s("h1",{id:"网络服务器配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#网络服务器配置"},[s("span",null,"网络服务器配置")])],-1),m={class:"hint-container warning"},b=s("p",{class:"hint-container-title"},"注意",-1),v=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"提示"),s("p",null,[n("如果您使用"),s("a",{href:"#caddy-with-automatic-ssl"},"自动续签 SSL 的 Caddy"),n("，则无需手动创建 SSL 证书，Caddy 会自动处理。")])],-1),k=s("p",null,"首先，删除默认的 NGINX 配置。",-1),g=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"rm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-enabled/default")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),_=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/nginx/conf.d/"),n("。")],-1),f=s("div",{class:"language-5,11,26-27 line-numbers-mode","data-highlighter":"shiki","data-ext":"5,11,26-27","data-title":"5,11,26-27",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"server_tokens off;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"server {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    listen 80;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    server_name <domain>;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return 301 https://$server_name$request_uri;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"server {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    listen 443 ssl http2;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    server_name <domain>;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    root /var/www/pterodactyl/public;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    index index.php;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    access_log /var/log/nginx/pterodactyl.app-access.log;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    error_log  /var/log/nginx/pterodactyl.app-error.log error;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # allow larger file uploads and longer script runtimes")]),n(`
`),s("span",{class:"line"},[s("span",null,"    client_max_body_size 100m;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    client_body_timeout 120s;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    sendfile off;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # SSL Configuration - Replace the example <domain> with your domain")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ssl_session_cache shared:SSL:10m;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ssl_protocols TLSv1.2 TLSv1.3;")]),n(`
`),s("span",{class:"line"},[s("span",null,'    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";')]),n(`
`),s("span",{class:"line"},[s("span",null,"    ssl_prefer_server_ciphers on;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # See https://hstspreload.org/ before uncommenting the line below.")]),n(`
`),s("span",{class:"line"},[s("span",null,'    # add_header Strict-Transport-Security "max-age=15768000; preload;";')]),n(`
`),s("span",{class:"line"},[s("span",null,"    add_header X-Content-Type-Options nosniff;")]),n(`
`),s("span",{class:"line"},[s("span",null,'    add_header X-XSS-Protection "1; mode=block";')]),n(`
`),s("span",{class:"line"},[s("span",null,"    add_header X-Robots-Tag none;")]),n(`
`),s("span",{class:"line"},[s("span",null,`    add_header Content-Security-Policy "frame-ancestors 'self'";`)]),n(`
`),s("span",{class:"line"},[s("span",null,"    add_header X-Frame-Options DENY;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    add_header Referrer-Policy same-origin;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location / {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        try_files $uri $uri/ /index.php?$query_string;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location ~ \\.php$ {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_split_path_info ^(.+\\.php)(/.+)$;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_pass unix:/run/php/php8.1-fpm.sock;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_index index.php;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        include fastcgi_params;")]),n(`
`),s("span",{class:"line"},[s("span",null,'        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";')]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;")]),n(`
`),s("span",{class:"line"},[s("span",null,'        fastcgi_param HTTP_PROXY "";')]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_intercept_errors off;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_buffer_size 16k;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_buffers 4 16k;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_connect_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_send_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_read_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        include /etc/nginx/fastcgi_params;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location ~ /\\.ht {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        deny all;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("h3",{id:"启用配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置"},[s("span",null,"启用配置")])],-1),C=s("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),S=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ln"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-available/pterodactyl.conf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 无论操作系统如何，您都需要重新启动 nginx。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," nginx")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),F=s("p",null,"首先，删除默认的 NGINX 配置。",-1),x=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"rm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-enabled/default")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),A=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/nginx/sites-available/"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/nginx/conf.d/"),n("。")],-1),E=s("div",{class:"language-4 line-numbers-mode","data-highlighter":"shiki","data-ext":"4","data-title":"4",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"server {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # Replace the example <domain> with your domain name or IP address")]),n(`
`),s("span",{class:"line"},[s("span",null,"    listen 80;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    server_name <domain>;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    root /var/www/pterodactyl/public;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    index index.html index.htm index.php;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    charset utf-8;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location / {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        try_files $uri $uri/ /index.php?$query_string;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location = /favicon.ico { access_log off; log_not_found off; }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location = /robots.txt  { access_log off; log_not_found off; }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    access_log off;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    error_log  /var/log/nginx/pterodactyl.app-error.log error;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    # allow larger file uploads and longer script runtimes")]),n(`
`),s("span",{class:"line"},[s("span",null,"    client_max_body_size 100m;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    client_body_timeout 120s;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    sendfile off;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location ~ \\.php$ {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_split_path_info ^(.+\\.php)(/.+)$;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_pass unix:/run/php/php8.1-fpm.sock;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_index index.php;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        include fastcgi_params;")]),n(`
`),s("span",{class:"line"},[s("span",null,'        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";')]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;")]),n(`
`),s("span",{class:"line"},[s("span",null,'        fastcgi_param HTTP_PROXY "";')]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_intercept_errors off;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_buffer_size 16k;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_buffers 4 16k;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_connect_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_send_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fastcgi_read_timeout 300;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    location ~ /\\.ht {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        deny all;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("h3",{id:"启用配置-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-1"},[s("span",null,"启用配置")])],-1),L=s("p",null,"最后一步是启用 NGINX 配置并重新启动它。",-1),T=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 如果您使用的是 CentOS，则不需要符号链接此文件。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ln"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-available/pterodactyl.conf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/nginx/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 无论操作系统如何，您都需要重新启动 nginx。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," nginx")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),P=s("p",null,"首先，删除默认的 Apache 配置。",-1),H=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"a2dissite"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," 000-default.conf")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),D=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/httpd/conf.d/"),n("。")],-1),R=s("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),s("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),N=s("div",{class:"language-2,10,24-25 line-numbers-mode","data-highlighter":"shiki","data-ext":"2,10,24-25","data-title":"2,10,24-25",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<VirtualHost *:80>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ServerName <domain>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"  RewriteEngine On")]),n(`
`),s("span",{class:"line"},[s("span",null,"  RewriteCond %{HTTPS} !=on")]),n(`
`),s("span",{class:"line"},[s("span",null,"  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] ")]),n(`
`),s("span",{class:"line"},[s("span",null,"</VirtualHost>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<VirtualHost *:443>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ServerName <domain>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  DocumentRoot "/var/www/pterodactyl/public"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  AllowEncodedSlashes On")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"  php_value upload_max_filesize 100M")]),n(`
`),s("span",{class:"line"},[s("span",null,"  php_value post_max_size 100M")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <Directory "/var/www/pterodactyl/public">')]),n(`
`),s("span",{class:"line"},[s("span",null,"    Require all granted")]),n(`
`),s("span",{class:"line"},[s("span",null,"    AllowOverride all")]),n(`
`),s("span",{class:"line"},[s("span",null,"  </Directory>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  SSLEngine on")]),n(`
`),s("span",{class:"line"},[s("span",null,"  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem")]),n(`
`),s("span",{class:"line"},[s("span",null,"  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem")]),n(`
`),s("span",{class:"line"},[s("span",null,"</VirtualHost>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("h3",{id:"启用配置-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-2"},[s("span",null,"启用配置")])],-1),M=s("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),s("code",null,"systemctl restart httpd"),n("。")],-1),z=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 你不需要在 CentOS 上运行这部分的任何命令")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ln"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/apache2/sites-available/pterodactyl.conf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/apache2/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," a2enmod"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," rewrite")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," a2enmod"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ssl")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," apache2")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),X=s("p",null,"首先，删除默认的 Apache 配置。",-1),$=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"a2dissite"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," 000-default.conf")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),V=s("p",null,[n("现在，您应该复制下面文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您使用的域名后，粘贴到名为 "),s("code",null,"pterodactyl.conf"),n(" 的文件中，并将该文件放在 "),s("code",null,"/etc/apache2/sites-available"),n(" 目录下， 或 — 如果在 CentOS 上，则为 "),s("code",null,"/etc/httpd/conf.d/"),n("。")],-1),I=s("p",null,[n("注意：使用 Apache 时，请确保您已安装 "),s("code",null,"libapache2-mod-php"),n(" 包，否则 PHP 将不会显示在您的网络服务器上。")],-1),G=s("div",{class:"language-2 line-numbers-mode","data-highlighter":"shiki","data-ext":"2","data-title":"2",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<VirtualHost *:80>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ServerName <domain>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  DocumentRoot "/var/www/pterodactyl/public"')]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"  AllowEncodedSlashes On")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,"  php_value upload_max_filesize 100M")]),n(`
`),s("span",{class:"line"},[s("span",null,"  php_value post_max_size 100M")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <Directory "/var/www/pterodactyl/public">')]),n(`
`),s("span",{class:"line"},[s("span",null,"    AllowOverride all")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Require all granted")]),n(`
`),s("span",{class:"line"},[s("span",null,"  </Directory>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</VirtualHost>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Y=s("h3",{id:"启用配置-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-3"},[s("span",null,"启用配置")])],-1),q=s("p",null,[n("创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 "),s("code",null,"systemctl restart httpd"),n("。")],-1),B=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 你不需要在 CentOS 上运行这部分的任何命令")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ln"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/apache2/sites-available/pterodactyl.conf"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/apache2/sites-enabled/pterodactyl.conf")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," a2enmod"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," rewrite")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," apache2")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=s("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),s("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),K=s("p",null,"要完全删除配置文件，请运行以下命令：",-1),U=s("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"rm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/caddy/Caddyfile")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),Z=s("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),J=s("p",null,[n("您应该粘贴以下文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您的域名。")],-1),W=s("div",{class:"language-9 line-numbers-mode","data-highlighter":"shiki","data-ext":"9","data-title":"9",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"    servers :443 {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        timeouts {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            read_body 120s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<domain> {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    root * /var/www/pterodactyl/public")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    file_server")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    php_fastcgi unix//run/php/php8.1-fpm.sock {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        root /var/www/pterodactyl/public")]),n(`
`),s("span",{class:"line"},[s("span",null,"        index index.php")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'        env PHP_VALUE "upload_max_filesize = 100M')]),n(`
`),s("span",{class:"line"},[s("span",null,'        post_max_size = 100M"')]),n(`
`),s("span",{class:"line"},[s("span",null,'        env HTTP_PROXY ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'        env HTTPS "on"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        read_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        dial_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        write_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'    header Strict-Transport-Security "max-age=16768000; preload;"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Content-Type-Options "nosniff"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-XSS-Protection "1; mode=block;"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Robots-Tag "none"')]),n(`
`),s("span",{class:"line"},[s("span",null,`    header Content-Security-Policy "frame-ancestors 'self'"`)]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Frame-Options "DENY"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header Referrer-Policy "same-origin"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    request_body {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        max_size 100m")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    respond /.ht* 403")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    log {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        output file /var/log/caddy/pterodactyl.log {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            roll_size 100MiB")]),n(`
`),s("span",{class:"line"},[s("span",null,"            roll_keep_for 7d")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"        level INFO")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Q={class:"hint-container tip"},ss=s("p",{class:"hint-container-title"},"提示",-1),ns=s("h3",{id:"启用配置-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-4"},[s("span",null,"启用配置")])],-1),ls=s("p",null,"最后一步是重新启动 Caddy。",-1),is=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," caddy")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),es=s("p",null,[n("在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 "),s("code",null,"/etc/caddy/Caddyfile"),n("。")],-1),as=s("p",null,"要完全删除配置文件，请运行以下命令：",-1),ts=s("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"rm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," /etc/caddy/Caddyfile")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),cs=s("p",null,"然后继续使用您选择的编辑器来编写配置。",-1),rs=s("p",null,[n("您应该粘贴以下文件的内容，将 "),s("code",null,"<domain>"),n(" 替换为您的域名。")],-1),ds=s("p",null,[n("唯一的两个变化是在 "),s("code",null,"<domain>"),n(" 后缀添加了 "),s("code",null,":80"),n("，并且在全局配置的 "),s("code",null,"servers"),n(" 指令中，将端口从 "),s("code",null,":443"),n(" 更改为 "),s("code",null,":80"),n("。")],-1),ps=s("div",{class:"language-9 line-numbers-mode","data-highlighter":"shiki","data-ext":"9","data-title":"9",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"    servers :80 {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        timeouts {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            read_body 120s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<domain>:80 {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    root * /var/www/pterodactyl/public")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    file_server")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    php_fastcgi unix//run/php/php8.1-fpm.sock {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        root /var/www/pterodactyl/public")]),n(`
`),s("span",{class:"line"},[s("span",null,"        index index.php")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'        env PHP_VALUE "upload_max_filesize = 100M')]),n(`
`),s("span",{class:"line"},[s("span",null,'        post_max_size = 100M"')]),n(`
`),s("span",{class:"line"},[s("span",null,'        env HTTP_PROXY ""')]),n(`
`),s("span",{class:"line"},[s("span",null,'        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        read_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        dial_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"        write_timeout 300s")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'    header Strict-Transport-Security "max-age=16768000; preload;"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Content-Type-Options "nosniff"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-XSS-Protection "1; mode=block;"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Robots-Tag "none"')]),n(`
`),s("span",{class:"line"},[s("span",null,`    header Content-Security-Policy "frame-ancestors 'self'"`)]),n(`
`),s("span",{class:"line"},[s("span",null,'    header X-Frame-Options "DENY"')]),n(`
`),s("span",{class:"line"},[s("span",null,'    header Referrer-Policy "same-origin"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    request_body {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        max_size 100m")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    respond /.ht* 403")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    log {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        output file /var/log/caddy/pterodactyl.log {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            roll_size 100MiB")]),n(`
`),s("span",{class:"line"},[s("span",null,"            roll_keep_for 7d")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"        level INFO")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),us=s("h3",{id:"启用配置-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用配置-5"},[s("span",null,"启用配置")])],-1),hs=s("p",null,"最后一步是重新启动 Caddy。",-1),os=s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," restart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," caddy")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),ms={id:"下一步-wings-后端-安装",tabindex:"-1"},bs={class:"header-anchor",href:"#下一步-wings-后端-安装"};function vs(ks,gs){const t=c("RouteLink"),r=c("Tabs");return u(),p("div",null,[o,s("div",m,[b,s("p",null,[n("使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 "),a(t,{to:"/tutorials/creating_ssl_certificates.html"},{default:l(()=>[n("创建 SSL 证书")]),_:1}),n(" 文档页面以了解如何在继续之前创建这些证书。")])]),v,a(r,{id:"13",data:[{id:"使用 SSL 的 Nginx"},{id:"没有使用 SSL 的 Nginx"},{id:"使用 SSL 的 Apache"},{id:"没有使用 SSL 的 Apache"},{id:"自动续签 SSL 的 Caddy"},{id:"没有使用 SSL 的 Caddy"}]},{title0:l(({value:i,isActive:e})=>[n("使用 SSL 的 Nginx")]),title1:l(({value:i,isActive:e})=>[n("没有使用 SSL 的 Nginx")]),title2:l(({value:i,isActive:e})=>[n("使用 SSL 的 Apache")]),title3:l(({value:i,isActive:e})=>[n("没有使用 SSL 的 Apache")]),title4:l(({value:i,isActive:e})=>[n("自动续签 SSL 的 Caddy")]),title5:l(({value:i,isActive:e})=>[n("没有使用 SSL 的 Caddy")]),tab0:l(({value:i,isActive:e})=>[k,g,_,f,y,C,S]),tab1:l(({value:i,isActive:e})=>[F,x,A,E,w,L,T]),tab2:l(({value:i,isActive:e})=>[P,H,D,R,N,O,M,z]),tab3:l(({value:i,isActive:e})=>[X,$,V,I,G,Y,q,B]),tab4:l(({value:i,isActive:e})=>[j,K,U,Z,J,W,s("div",Q,[ss,s("p",null,[n("如果您正在使用 Cloudflare DNS 且配置为代理模式，请参考"),a(t,{to:"/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)"},{default:l(()=>[n("此教程")]),_:1}),n("，了解如何配置 Caddy 以使用 DNS 验证方式获取 SSL 证书。")])]),ns,ls,is]),tab5:l(({value:i,isActive:e})=>[es,as,ts,cs,rs,ds,ps,us,hs,os]),_:1}),s("h4",ms,[s("a",bs,[s("span",null,[n("下一步："),a(t,{to:"/wings/1.0/installing.html"},{default:l(()=>[n("Wings (后端) 安装")]),_:1})])])])])}const ys=d(h,[["render",vs],["__file","webserver_configuration.html.vue"]]),Cs=JSON.parse('{"path":"/panel/1.0/webserver_configuration.html","title":"网络服务器配置","lang":"zh-CN","frontmatter":{"description":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步：","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/webserver_configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"网络服务器配置"}],["meta",{"property":"og:description","content":"网络服务器配置 注意 使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 文档页面以了解如何在继续之前创建这些证书。 提示 如果您使用自动续签 SSL 的 Caddy，则无需手动创建 SSL 证书，Caddy 会自动处理。 下一步："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-13T13:28:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-13T13:28:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络服务器配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-13T13:28:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1532300604000,"updatedTime":1713014937000,"contributors":[{"name":"Vojtech Mares","email":"iam@vojtechmares.com","commits":9},{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":7},{"name":"Alex","email":"admin@softwarenoob.com","commits":3},{"name":"Charles Morgan","email":"sir3lit@gmail.com","commits":3},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":2},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":2},{"name":"MysteriousK69","email":"63832146+MysteriousK69@users.noreply.github.com","commits":1},{"name":"Omar Kamel","email":"30291302+TekExplorer@users.noreply.github.com","commits":1},{"name":"PadowYT2","email":"me@padow.ru","commits":1},{"name":"Term14","email":"64224516+Term14@users.noreply.github.com","commits":1},{"name":"Vojtěch Mareš","email":"iam@vojtechmares.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1220},"filePathRelative":"panel/1.0/webserver_configuration.md","localizedDate":"2018年7月22日","autoDesc":true}');export{ys as comp,Cs as data};
