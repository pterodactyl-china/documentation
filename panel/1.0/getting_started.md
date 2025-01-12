# 开始入门

翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。

您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件；
所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。
此面板不作为运行服务器的拖放服务存在。
这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。**如果您希望能够在不了解基本 linux 系统管理的情况下安装它，您现在应该停下来然后出门左拐。**

::: tip 想要更简单的设置？
[WISP](https://wisp.gg) 是一款由翼龙驱动的 SaaS，适合企业和个人使用。提供所有功能，无需设置麻烦，并与翼龙预设完全兼容。与 MultiCraft 或 TCAdmin 相媲美，同时提供新的和独特的功能。单击此处 [了解更多](https://wisp.gg/features)。
:::

## 选择服务器操作系统

翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。

::: warning
Pterodactyl 不支持大多数 OpenVZ 系统，因为它与 Docker 不兼容。如果你计划在基于 OpenVZ 的系统上运行这个软件，你很可能不会成功。
:::

| 操作系统 | 版本 |     支持状况      | 注意事项                                                       |
| ---------------------------------- | ------- | :----------------: | ----------------------------------------------------------- |
| **Ubuntu**                         | 20.04   | :white_check_mark: | 文档以 Ubuntu 20.04 操作系统为基本所编写的。 |
|                                    | 22.04   | :white_check_mark: | MariaDB 无需 repo 安装脚本即可安装。     |
|                                    | 24.04   | :white_check_mark: | MariaDB 无需 repo 安装脚本即可安装。     |
| **RHEL / Rocky Linux / AlmaLinux** | 8       | :white_check_mark: | 需要额外的存储库。                                   |
|                                    | 9       | :white_check_mark: |                                                             |
| **Debian**                         | 11      | :white_check_mark: |                                                             |
|                                    | 12      | :white_check_mark: |                                                             |

## 依赖项

* PHP `8.2` 或 `8.3`（推荐），带有以下扩展名：`cli`、`openssl`、`gd`、`mysql`、`PDO`、`mbstring` `tokenizer`、`bcmath `、`xml` 或 `dom`、`curl`、`zip` 和 `fpm` 如果你打算使用 NGINX。
* MySQL `5.7.22` 及更高版本（推荐 MySQL `8`）**或** MariaDB `10.2` 及更高版本。
* Redis (`redis-server`)
* 一个 Web 服务器（Apache、NGINX、Caddy 等）
* `curl`
* `tar`
* `unzip`
* `git`
* `composer` v2

### 依赖项安装示例

下面的命令只是一个示例，说明如何安装这些依赖项。每个系统安装方式都不一样，请确定自己的操作系统来确定要安装的软件包是否正确。

``` bash
# 添加 "add-apt-repository" 命令
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# 为 PHP、Redis 和 MariaDB 添加额外的存储库 （Ubuntu 20.04 和 Ubuntu 22.04）
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# 添加 Redis 官方 APT 仓库
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# MariaDB 存储库安装脚本（Ubuntu 20.04）
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# 更新存储库列表
apt update

# 安装依赖项
apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

### 安装 Composer

Composer 是一个 PHP 依赖管理器（类似于 Node.js 的 npm，或者 Python 的 pip）。  
Composer 将会拉取你的项目所依赖的所有 PHP 软件包，并且为你管理它们。它被所有现代化的 PHP 框架和平台所使用，例如： Laravel, Symfony, Drupal, 和 Magento 2。 而翼龙面板前端正是使用的 Laravel ！

``` bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## 下载文件
在进行此步骤之前，我们要为面板前端创建它的工作目录。  
此过程的第一步是创建面板所在的文件夹，然后进入新创建的文件夹中。以下是如何执行此操作的示例。  
::: warning
以下命令使用的路径仅为示例，阁下大可自己自定义路径，但是我在此提醒您，若您不用我示例使用的路径，请务必记住自己设置的程序所在的目录，并在后续各种涉及到程序运行目录的地方灵活操作！
:::

``` bash
mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl
```

在为面板创建好它的工作目录后，我们将使用 `curl` 命令，从 Github 拉取翼龙中国汉化完成的程序文件压缩包，拉取完成后，我们需要对压缩包进行解压操作，并赋予 `storage/` 与 `bootstrap/cache/` 目录 755 权限。这两个目录作用是缓存动态资源以加速访问。

::: code-tabs#shell

@tab 国际源

``` bash
curl -Lo panel.tar.gz https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz
# 解压并设置目录权限
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

@tab:active 国内源

``` bash
curl -Lo panel.tar.gz https://ghfast.top/https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz
# 解压并设置目录权限
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

:::

## 安装

假设阁下已经完成之前的步骤且现在所有文件都已下载，接下来我们需进行配置面板的一些核心部分。

::: tip 数据库配置  
翼龙面板前端内的数据，例如：用户/用户账户下的服务器等。均需要 MYSQL 数据库进行存储。您将需要一个数据库设置和一个具有为该数据库创建正确权限的用户，然后才能继续进行。请参阅下文以快速为您的翼龙面板创建用户和数据库。要查找更多详细信息，请查看 [设置 MySQL](/tutorials/mysql_setup.html)。

```sql
# If using MariaDB (v11.0.0+) (This is the default when installing Pterodactyl by following the documentation.)
mariadb -u root -p

# If using MySQL
mysql -u root -p
```
```sql

# 记得把下面的 'yourPassword' 改成阁下自己想设置的密码
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```

:::

首先，我们将复制我们的默认环境设置文件 `.env` ，并使用  `Composer` 安装核心依赖项，然后生成新的应用程序加密密钥。

``` bash
cp .env.example .env
COMPOSER_ALLOW_SUPERUSER=1 composer install --no-dev --optimize-autoloader

# 注意，以下指令仅针对于第一次安装部署翼龙面板前端
# 且对应数据库内无数据时执行，若阁下并非第一次安装且数据库内有数据，请忽略以下指令
php artisan key:generate --force
```

::: danger
请备份您的加密密钥（`.env` 文件中的 `APP_KEY`）！ 它用作所有需要安全存储的数据的加密密钥（例如 api 密钥）。 请将其存储在安全的地方！ 如果您丢失它，所有加密数据都将无法恢复！即使您有数据库备份也无济于事！！！
:::

### 环境配置

翼龙的核心环境可以使用应用程序中内置的几个不同的 CLI 命令进行更轻松的配置。此步骤将涵盖设置诸如会话、缓存、数据库凭证和电子邮件发送之类的内容。

``` bash
php artisan p:environment:setup
php artisan p:environment:database

# 若使用 PHP 自带的 mail 拓展 (不推荐使用), 请在执行以下指令后选择 "mail"。
# 若使用自定义 SMTP 服务器，请在执行以下指令后选择 "smtp"。
php artisan p:environment:mail
```

### 数据库设置

现在我们要将面板所有的核心数据写入我们之前为面板准备的数据库内。  
**此步骤可能花费较长时间来进行执行，花费的时间取决于您的主机性能，主机与数据库主机的网络连接状态等因素。请耐心等待数据导入完成，切勿中途使用 CTRL+C 强制中断执行！**

``` bash
php artisan migrate --seed --force
```

### 添加首位用户

数据库配置完成后，您需要为面板创建一个管理用户，以便您可以登录面板。 为此，请运行以下命令。 并保证账户密码满足以下要求：8 个字符，大小写混合，至少一个数字。

``` bash
php artisan p:user:make
```

### 为 WEB 程序用户设置权限

安装过程的最后一步是对 面板程序文件设置正确的权限，以便 WEB 服务器程序（例如Nginx 或者 Apache）可以正确执行文件。

``` bash
# 如果使用 NGINX, Apache 或 Caddy (不在 RHEL / Rocky Linux / AlmaLinux)
chown -R www-data:www-data /var/www/pterodactyl/*

# 如果在 RHEL / Rocky Linux / AlmaLinux 上使用 NGINX
chown -R nginx:nginx /var/www/pterodactyl/*

# 如果在 RHEL / Rocky Linux / AlmaLinux 上使用 Apache
chown -R apache:apache /var/www/pterodactyl/*
```

## 注册队列监听服务

我们使用队列来使应用程序更快，并在后台处理发送电子邮件和其他操作。您需要设置工作队列以处理这些操作。

### Crontab 定时任务设置

我们需要做的第一件事是创建一个新的定时任务，它每分钟运行一次以处理特定的翼龙任务，例如会话清理和将计划任务发送到守护进程。您需要使用 `sudo crontab -e` 打开您的 crontab，然后粘贴下面的一行内容，不要忘记`/var/www/pterodactyl/`指的是你的翼龙面板在你服务器的绝对位置。

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

### 创建队列监听服务

接下来，您需要创建一个新的 systemd 工作线程来保持我们的队列进程在后台运行。该队列负责发送电子邮件并为翼龙处理许多其他后台任务。

在 `/etc/systemd/system` 文件夹中创建一个名为 `pteroq.service` 的文件，其内容如下。

``` text
# 翼龙工作队列文件
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# 在某些系统上用户和组可能不同。
# 有些系统使用 `apache` 或 `nginx` 作为用户和组。
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

::: tip RHEL / Rocky Linux / AlmaLinux 上的 Redis
如果您使用的是 RHEL / Rocky Linux / AlmaLinux，则需要在 `After=` 一行将 `redis-server.service` 替换为 `redis.service`，以确保 `redis` 在工作队列之前启动
:::

::: tip
如果你没有使用 `redis` 做任何事情，你应该删除 `After=` 一行，否则服务启动时会遇到错误。
:::

如果您在系统中使用 redis，则需要确保启用它会在引导时启动。您可以通过运行以下命令来执行此操作：

```bash
sudo systemctl enable --now redis-server
```

最后，启用该服务并将其设置为在计算机启动时启动。

``` bash
sudo systemctl enable --now pteroq.service
```

### 遥测

从 1.11 开始，Pterodactyl 将收集匿名遥测数据，以帮助我们更好地了解软件的使用情况。要了解有关此功能的更多信息并拒绝此功能，请参阅我们的 [遥测](./additional_configuration.md#遥测) 文档。确保继续其余的安装过程。

#### 下一步：[网络服务器配置](./webserver_configuration)
