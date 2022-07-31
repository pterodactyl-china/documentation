(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{384:function(t,a,e){"use strict";e.r(a);var s=e(48),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"centos-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[t._v("#")]),t._v(" CentOS 7")]),t._v(" "),e("p",[t._v("In this guide we will install Pterodactyl v1.X — including all of it's dependencies — and configure our webserver\nto serve it using SSL.")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#install-requirements-and-additional-utilities"}},[t._v("Install Requirements and Additional Utilities")]),e("ul",[e("li",[e("a",{attrs:{href:"#selinux-tools"}},[t._v("SELinux tools")])]),e("li",[e("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),e("li",[e("a",{attrs:{href:"#php-8-0"}},[t._v("PHP 8.0")])]),e("li",[e("a",{attrs:{href:"#composer"}},[t._v("Composer")])])])]),e("li",[e("a",{attrs:{href:"#install-utility-packages"}},[t._v("Install Utility Packages")]),e("ul",[e("li",[e("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),e("li",[e("a",{attrs:{href:"#redis"}},[t._v("Redis")])])])]),e("li",[e("a",{attrs:{href:"#server-configuration"}},[t._v("Server Configuration")]),e("ul",[e("li",[e("a",{attrs:{href:"#configuring-mariadb"}},[t._v("Configuring MariaDB")])]),e("li",[e("a",{attrs:{href:"#setup-php"}},[t._v("Setup PHP")])]),e("li",[e("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])]),e("li",[e("a",{attrs:{href:"#redis-setup"}},[t._v("Redis Setup")])])])]),e("li",[e("a",{attrs:{href:"#installing-the-panel"}},[t._v("Installing the Panel")])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("This guide is based off the "),e("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for CentOS 7.")],1)]),t._v(" "),e("h2",{attrs:{id:"install-requirements-and-additional-utilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements-and-additional-utilities"}},[t._v("#")]),t._v(" Install Requirements and Additional Utilities")]),t._v(" "),e("p",[t._v("We will install all of Pterodactyl's "),e("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#dependencies"}},[t._v("required")]),t._v(" dependencies and a few aditional utilities.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("If you run "),e("code",[t._v("sestatus")]),t._v(" and it shows "),e("code",[t._v("SELinux status: enabled")]),t._v(" you should install the following packages for later")])]),t._v(" "),e("h3",{attrs:{id:"selinux-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux-tools"}},[t._v("#")]),t._v(" SELinux tools")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y policycoreutils policycoreutils-python selinux-policy selinux-policy-targeted libselinux-utils setroubleshoot-server setools setools-console mcstrans\n")])])]),e("h3",{attrs:{id:"mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[t._v("#")]),t._v(" MariaDB")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install Repos")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("EOF "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/yum.repos.d/mariadb.repo\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MariaDB 10.5 CentOS repository list - created 2017-07-14 12:40 UTC")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http://downloads.mariadb.org/mariadb/repositories/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mariadb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MariaDB\nbaseurl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://yum.mariadb.org/10.5/centos7-amd64\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://yum.mariadb.org/RPM-GPG-KEY-MariaDB\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nEOF\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Get yum updates")]),t._v("\nyum update -y\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install MariaDB 10.5")]),t._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y MariaDB-common MariaDB-server\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Start maraidb")]),t._v("\nsystemctl start mariadb\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mariadb\n")])])]),e("h3",{attrs:{id:"php-8-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-8-0"}},[t._v("#")]),t._v(" PHP 8.0")]),t._v(" "),e("p",[t._v("We recommend the remi repo to get the latest php packages.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install Repos")]),t._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" https://rpms.remirepo.net/enterprise/remi-release-7.rpm\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils\nyum-config-manager --disable "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remi-php*'")]),t._v("\nyum-config-manager --enable remi-php80\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Get yum updates")]),t._v("\nyum update -y\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install PHP 8.0")]),t._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y php php-"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("common,fpm,cli,json,mysqlnd,mcrypt,gd,mbstring,pdo,zip,bcmath,dom,opcache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[t._v("#")]),t._v(" Composer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required for Composer")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" php -- --install-dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])]),e("h2",{attrs:{id:"install-utility-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-utility-packages"}},[t._v("#")]),t._v(" Install Utility Packages")]),t._v(" "),e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nginx\n\nfirewall-cmd --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http --permanent\nfirewall-cmd --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https --permanent \nfirewall-cmd --reload\n")])])]),e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y --enablerepo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("remi redis\n\nsystemctl start redis\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" redis\n")])])]),e("h4",{attrs:{id:"selinux-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux-commands"}},[t._v("#")]),t._v(" SELinux commands")]),t._v(" "),e("p",[t._v("The following command will allow nginx to work with redis and")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("setsebool -P httpd_can_network_connect "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetsebool -P httpd_execmem "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsetsebool -P httpd_unified "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("h2",{attrs:{id:"server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[t._v("#")]),t._v(" Server Configuration")]),t._v(" "),e("p",[t._v("This following section covers the configuration of parts of the server to run the panel.")]),t._v(" "),e("h3",{attrs:{id:"configuring-mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-mariadb"}},[t._v("#")]),t._v(" Configuring MariaDB")]),t._v(" "),e("p",[t._v("The fastest way to set up mariadb is to use the "),e("code",[t._v("mysql_secure_installation")]),t._v(" command and follow prompts")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("mysql_secure_installation\n")])])]),e("p",[t._v("The following are safe defaults.")]),t._v(" "),e("p",[t._v("Change to your own secure password"),e("br"),t._v(" "),e("code",[t._v("Set root password? [Y/n] Y")])]),t._v(" "),e("p",[t._v("Get rid of users that could access the db by default"),e("br"),t._v(" "),e("code",[t._v("Remove anonymous users? [Y/n] Y")])]),t._v(" "),e("p",[t._v("Keep root off the external interfaces"),e("br"),t._v(" "),e("code",[t._v("Disallow root login remotely? [Y/n] Y")])]),t._v(" "),e("p",[t._v("Extra databases that aren't needed"),e("br"),t._v(" "),e("code",[t._v("Remove test database and access to it? [Y/n] Y")])]),t._v(" "),e("p",[t._v("Clears and sets all the changes made"),e("br"),t._v(" "),e("code",[t._v("Reload privilege tables now? [Y/n] Y")])]),t._v(" "),e("p",[t._v("All done! If you've completed all of the above steps, your MariaDB"),e("br"),t._v("\ninstallation should now be secure.")]),t._v(" "),e("h4",{attrs:{id:"adding-mariadb-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user"}},[t._v("#")]),t._v(" Adding MariaDB user")]),t._v(" "),e("p",[t._v("To add your first user to the database, see our tutorial on "),e("RouterLink",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("setting up MySQL")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"setup-php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-php"}},[t._v("#")]),t._v(" Setup PHP")]),t._v(" "),e("p",[t._v("Place the contents below in a file inside the "),e("code",[t._v("/etc/php-fpm.d")]),t._v(" folder. The file can be named anything, but a good standard is "),e("code",[t._v("www-pterodactyl.conf")]),t._v(". This config will match the nginx config later in the guide.")]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[pterodactyl]\n\nuser = nginx\ngroup = nginx\n\nlisten = /var/run/php-fpm/pterodactyl.sock\nlisten.owner = nginx\nlisten.group = nginx\nlisten.mode = 0750\n\npm = ondemand\npm.max_children = 9\npm.process_idle_timeout = 10s\npm.max_requests = 200")])])]),e("p",[t._v("Start and enable php-fpm on the system.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" php-fpm\nsystemctl start php-fpm\n")])])]),e("h3",{attrs:{id:"nginx-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),e("p",[t._v("Please check our "),e("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("tutorial")]),t._v(" on generating SSL certificates for more information.")],1),t._v(" "),e("h4",{attrs:{id:"ssl-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-configuration"}},[t._v("#")]),t._v(" SSL Configuration")]),t._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n    \n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/var/run/php-fpm/pterodactyl.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}')])])]),e("h3",{attrs:{id:"redis-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-setup"}},[t._v("#")]),t._v(" Redis Setup")]),t._v(" "),e("p",[t._v("The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into\n"),e("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[t._v("running another Redis instance"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"installing-the-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel"}},[t._v("#")]),t._v(" Installing the Panel")]),t._v(" "),e("p",[t._v("Excellent, we now have all of the required dependencies installed and configured. From here, follow the "),e("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html#download-files"}},[t._v("official Panel installation documentation")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);