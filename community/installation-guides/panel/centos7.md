# CentOS 7

这份指南提供了在 CentOS 7 上安装 Pterodactyl v1.X 的全面说明，包括所有依赖项和 SSL 配置。

## 安装依赖项

### SELinux 配置

If SELinux is enabled (check with `sestatus`), install the following packages:

```bash
yum install -y policycoreutils policycoreutils-python selinux-policy selinux-policy-targeted libselinux-utils setroubleshoot-server setools setools-console mcstrans
```

### Installing Dependencies

Run the following commands to install all necessary dependencies:

```bash
# Add MariaDB repository
sudo tee /etc/yum.repos.d/mariadb.repo <<EOF
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.5/centos7-amd64
gpgkey = https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck = 1
EOF

# Install EPEL and Remi repositories
sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm

# Enable PHP 8.3 from Remi
sudo yum install -y yum-utils
sudo yum-config-manager --disable 'remi-php*'
sudo yum-config-manager --enable remi-php83

sudo yum update -y

# Install dependencies
sudo yum install -y MariaDB-common MariaDB-server php php-{common,fpm,cli,json,mysqlnd,mcrypt,gd,mbstring,pdo,zip,bcmath,dom,opcache} nginx zip unzip

# Install Redis
sudo yum install -y --enablerepo=remi redis

# Start and enable services
sudo systemctl enable --now mariadb nginx redis

# Configure firewall
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --add-service=https --permanent 
sudo firewall-cmd --reload

# Install Composer
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Server Configuration

### PHP Configuration

Create a new PHP-FPM configuration file in /etc/php-fpm.d/www-pterodactyl.conf:

```conf
[pterodactyl]

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
```

Start and enable PHP-FPM:

```bash
sudo systemctl enable --now php-fpm
```

### SELinux configuration

The following command will allow nginx to work with redis.

```bash
setsebool -P httpd_can_network_connect 1
setsebool -P httpd_execmem 1
setsebool -P httpd_unified 1
```

<<<<<<< HEAD
## Server Configuration
This following section covers the configuration of parts of the server to run the panel.

### Configuring MariaDB
The fastest way to set up mariadb is to use the `mysql_secure_installation` command and follow prompts

```bash
mysql_secure_installation
```

The following are safe defaults.

Change to your own secure password  
`Set root password? [Y/n] Y`

Get rid of users that could access the db by default  
`Remove anonymous users? [Y/n] Y`

Keep root off the external interfaces  
`Disallow root login remotely? [Y/n] Y`

Extra databases that aren't needed  
`Remove test database and access to it? [Y/n] Y`

Clears and sets all the changes made  
`Reload privilege tables now? [Y/n] Y`

All done! If you've completed all of the above steps, your MariaDB  
installation should now be secure.

#### Adding MariaDB user
To add your first user to the database, see our tutorial on [setting up MySQL](/tutorials/mysql_setup.md).

### Setup PHP
Place the contents below in a file inside the `/etc/php-fpm.d` folder. The file can be named anything, but a good standard is `www-pterodactyl.conf`. This config will match the nginx config later in the guide.

@[code](../../../.snippets/php-fpm/pterodactyl-centos.conf)

Start and enable php-fpm on the system.
```bash
systemctl enable php-fpm
systemctl start php-fpm
```

### Nginx
Please check our [tutorial](/tutorials/creating_ssl_certificates.md) on generating SSL certificates for more information.

#### SSL Configuration
@[code{5,11,26-27}](../../../.snippets/webservers/nginx-centos.conf)

### Redis Setup
The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into
[running another Redis instance](https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host).

=======
>>>>>>> 60af4593615af6ddb292dfb24cbc693939b8994d
## Installing the Panel
Excellent, we now have all of the required dependencies installed and configured. From here, follow the [official Panel installation documentation](/panel/1.0/getting_started.md#download-files).

::: tip
You will need to change the fastcgi_pass path in the Nginx configuration to `/var/run/php-fpm/pterodactyl.sock`
:::