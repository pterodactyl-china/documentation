# Ubuntu 18.04
在本指南中，我们将安装 Pterodactyl v1.X（包括它的所有依赖项）并配置我们的网络服务器以使用 SSL 为其提供服务。

::: tip
本指南基于 [官方安装文档](/panel/1.0/getting_started.md)，但专为 Ubuntu 18.04 量身定制。
:::

## 安装要求
首先，我们要安装翼龙 [所需依赖项](/panel/1.0/getting_started.md#dependencies)。

### MariaDB
```bash
## 获取 apt 更新
apt update -y

## 安装 MariaDB
apt install -y mariadb-common mariadb-server mariadb-client

## 启动 MariaDB
systemctl start mariadb
systemctl enable mariadb
```

### PHP 7.4
```bash
## 获取 apt 更新
apt update -y

## 安装 PHP 7.4
apt install -y php7.4 php7.4-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}
```

### Nginx
```bash
apt install -y nginx
```

### Redis
```bash
apt install -y redis-server

systemctl start redis-server
systemctl enable redis-server
```

### 其他实用工具

#### Certbot
```bash
apt install -y certbot
```

#### Composer
```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
```

## 服务器配置
本节将介绍运行面板所需的部分服务器配置。

### 配置 MariaDB
设置 MariaDB 的最快方法是使用 `mysql_secure_installation` 命令并按提示操作

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

All done! If you've completed all of the above steps, your MariaDB installation should now be secure.

#### Adding MariaDB user
To add your first user to the database, see our tutorial on [setting up MySQL](/tutorials/mysql_setup.md).

### Setup PHP
The default php-fpm configuration is fine to use and can be started and then enabled on the system using the
commands below.

```bash
systemctl enable php7.4-fpm
systemctl start php7.4-fpm
```

### Nginx
Please check our [tutorial](/tutorials/creating_ssl_certificates.md) on generating SSL certificates for more information.

#### SSL Configuration
@[code {5,11,26-27}](../../../.snippets/webservers/nginx-php7.4.conf)

### Redis Setup
The default Redis install is perfectly fine for the panel. If you have Redis already in use you may want to look into
[running another Redis instance](https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host).

## Installing the Panel
Excellent, we now have all of the required dependencies installed and configured. From here, follow the [official Panel installation documentation](/panel/1.0/getting_started.md#download-files).
