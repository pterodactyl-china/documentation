# 开始入门

[[toc]]

翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。

您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件； 所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。此面板不作为运行服务器的拖放服务存在。这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。**如果您希望能够在不了解基本 linux 系统管理的情况下安装它，您现在应该停下来然后出门左拐。**

::: tip 想要更简单的设置？
[WISP](https://wisp.gg) 是一款由翼龙驱动的 SaaS，适合企业和个人使用。提供所有功能，无需设置麻烦，并与翼龙预设完全兼容。与 MultiCraft 或 TCAdmin 相媲美，同时提供新的和独特的功能。单击此处 [了解更多](https://wisp.gg/features)。
:::

## 选择服务器操作系统

翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。

::: warning
由于与 Docker 不兼容，翼龙不支持大多数 OpenVZ 系统。如果您计划在基于 OpenVZ 的系统上运行此软件，您将很大概率不会成功。
:::

| 操作系统 | 版本 |     支持      | 注意事项                                                       |
| ---------------- | ------- | :----------------: | ----------------------------------------------------------- |
| **Ubuntu**       | 18.04   | :white_check_mark: | 文档基础 Ubuntu 18.04 作为操作系统所编写的。|
|                  | 20.04   | :white_check_mark: |                                                             |
|                  | 22.04   | :white_check_mark: | MariaDB 无需 repo 安装脚本即可安装。   |
| **CentOS**       | 7       | :white_check_mark: | 需要额外的 repos。                                 |
|                  | 8       | :white_check_mark: | 请注意，CentOS 8 已停运。使用 Rocky 或 Alma Linux。       |
| **Debian**       | 9       | :white_check_mark: | 需要额外的 repos。                                 |
|                  | 10      | :white_check_mark: |                                                             |
|                  | 11      | :white_check_mark: |                                                             |

## 依赖项

* PHP `7.4`、`8.0` 或 `8.1`（推荐），带有以下扩展名：`cli`、`openssl`、`gd`、`mysql`、`PDO`、`mbstring` `tokenizer`、`bcmath `、`xml` 或 `dom`、`curl`、`zip` 和 `fpm` 如果你打算使用 NGINX。
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

# 为 PHP、Redis 和 MariaDB 添加额外的存储库
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
add-apt-repository ppa:redislabs/redis -y

# 在 Ubuntu 22.04 上可以跳过 MariaDB 存储库设置脚本
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# 更新存储库列表
apt update

# 如果您使用的是 Ubuntu 18.04，请添加 Universe 存储库
apt-add-repository universe

# Install Dependencies
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

### 安装 Composer

Composer 是 PHP 的依赖管理器，它允许我们发送您需要的所有代码来操作面板。在继续此过程之前，您需要安装 composer。

``` bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## 下载文件

此过程的第一步是创建面板所在的文件夹，然后进入新创建的文件夹中。以下是如何执行此操作的示例。

``` bash
mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl
```

一旦您为面板创建了一个新目录并移入其中，您需要下载面板文件。这就像使用 `curl` 下载我们预打包的内容一样简单。下载后，您需要解压文件，然后在 `storage/` 和 `bootstrap/cache/` 目录上设置正确的权限。这些目录允许我们存储文件以及保持可用的快速缓存以减少加载时间。

``` bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

## 安装

现在所有文件都已下载，我们需要配置面板的一些核心方面的内容。

::: tip 数据库配置
您将需要一个数据库设置和一个具有为该数据库创建正确权限的用户，然后才能继续进行。请参阅下文以快速为您的翼龙面板创建用户和数据库。要查找更多详细信息，请查看 [设置 MySQL](/tutorials/mysql_setup.html)。

```sql
mysql -u root -p

# 记得把下面的 'yourPassword' 改成唯一的密码
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```

:::

首先，我们将复制默认环境设置文件，安装核心依赖项，然后生成新的应用程序加密密钥。

``` bash
cp .env.example .env
composer install --no-dev --optimize-autoloader

# 如果您要安装此面板，请仅运行以下命令
# 第一次并且数据库中没有任何翼龙面板数据的话。
php artisan key:generate --force
```

::: danger
备份您的加密密钥（`.env` 文件中的 APP_KEY）。它用作所有需要安全存储的数据的加密密钥（例如 api 密钥）。将其存储在安全的地方 - 不仅仅是在您的服务器上。如果您丢失它，所有加密数据都将无法恢复——即使您有数据库备份。
:::

### 环境配置

翼龙的核心环境可以使用应用程序中内置的几个不同的 CLI 命令进行更轻松的配置。此步骤将涵盖设置诸如会话、缓存、数据库凭证和电子邮件发送之类的内容。

``` bash
php artisan p:environment:setup
php artisan p:environment:database

# 如果你要使用PHP的内部邮件发送（不推荐），选择 "mail"。
# 如果你自定义 SMTP 服务器，选择 "smtp"。
php artisan p:environment:mail
```

### 数据库设置

现在我们需要在您之前创建的数据库中设置面板的所有基本数据。**以下命令可能需要一些时间才能运行，具体取决于您的计算机。请_不要_退出该过程，直到完成！**此命令将设置数据库表，然后添加所有为翼龙提供动力的预设组和预设。

``` bash
php artisan migrate --seed --force
```

### 添加首位用户

然后您需要创建一个管理用户，以便您可以登录到面板。为此，请运行以下命令。此时密码**必须**满足以下要求：8个字符，大小写不一，至少有一个数字。

``` bash
php artisan p:user:make
```

### 设置权限

安装过程的最后一步是对 Panel 文件设置正确的权限，以便 Web 服务器可以正确使用它们。

``` bash
# 如果使用 NGINX 或 Apache (不在 CentOS 上):
chown -R www-data:www-data /var/www/pterodactyl/*

# 如果在 CentOS 上使用 NGINX：
chown -R nginx:nginx /var/www/pterodactyl/*

# 如果在 CentOS 上使用 Apache
chown -R apache:apache /var/www/pterodactyl/*
```

## 工作队列程序

我们使用队列来使应用程序更快，并在后台处理发送电子邮件和其他操作。您需要设置工作队列以处理这些操作。

### 定时任务配置

我们需要做的第一件事是创建一个新的定时任务，它每分钟运行一次以处理特定的翼龙任务，例如会话清理和将计划任务发送到守护进程。您需要使用 `sudo crontab -e` 打开您的 crontab，然后粘贴下面的一行内容，不要忘记`/var/www/pterodactyl/`指的是你的翼龙面板在你服务器的绝对位置。

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

### 创建工作队列

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

::: tip CentOS 上的 Redis
如果您使用的是 CentOS，则需要在 `After=` 一行将 `redis-server.service` 替换为 `redis.service`，以确保 `redis` 在工作队列之前启动。
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

#### 下一步：[网络服务器配置](./webserver_configuration)
