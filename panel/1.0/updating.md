# 更新面板

本文档涵盖了 `1.x` 系列版本中的更新过程。这意味着例如从 `1.5.0` 更新到 `1.6.0`。**请勿使用本指南从 `0.7` 开始升级，这会导致你升级失败。**

## 面板的版本要求

翼龙面板的每个版本都有相应最低版本的 Wings。请参阅下表了解有关这些对应版本。在大多数情况下，您的 Wings 版本应该与您的面板版本相匹配。

| 面板版本 | Wings 版本 | 支持状况 | PHP 版本                       |
|---------------|---------------|-----------|------------------------------------|
| 1.0.x         | 1.0.x         |           | 7.3, 7.4                           |
| 1.1.x         | 1.1.x         |           | 7.3, 7.4                           |
| 1.2.x         | 1.2.x         |           | 7.3, 7.4                           |
| 1.3.x         | 1.3.x         |           | 7.4, 8.0                           |
| 1.4.x         | 1.4.x         |           | 7.4, 8.0                           |
| 1.5.x         | 1.4.x         |           | 7.4, 8.0                           |
| 1.6.x         | 1.4.x         |           | 7.4, 8.0                           |
| 1.7.x         | 1.5.x         |           | 7.4, 8.0                           |
| 1.8.x         | 1.6.x         |           | 7.4, 8.0, 8.1                      |
| 1.9.x         | 1.6.x         |           | 7.4, 8.0, 8.1                      |
| 1.10.x        | 1.7.x         |           | 7.4, 8.0, 8.1                      |
| **1.11.x**    | **1.11.x**    | ✅         | 8.0, **8.1** (8.0 弃用)      |

*注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。*

## 更新依赖项

* PHP `8.0` 或 `8.1` (推荐)
* Composer `2.X`

::: danger PHP 7.4
随着 1.11.0 的发布，对 PHP 7.4 的支持已被移除。请升级到 PHP 8.0、8.1 或更高版本。
:::

::: warning 受支持的 PHP 最低版本已更改
**对 PHP 8.0 的支持已弃用**。请相应地计划——PHP 8.1 或更高版本将是 1.12 及更高版本中唯一受支持的版本。
:::

**在继续之前**，请确保您的系统和网络服务器配置已通过运行 `php -v` 和 `composer --version` 来确认您的服务器已在 PHP 8.0 和 Composer 2 或更高的版本。您应该会看到类似于以下输出的结果。如果您没有看到 PHP 8.0 和 Composer 2 或更高的版本，您将需要按照我们的 [PHP 升级指南](/guides/php_upgrade.md) 进行升级，然后再返回此文档。

```
vagrant@pterodactyl:~/app$ php -v
PHP 8.1.5 (cli) (built: Apr 21 2022 10:32:13) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.5, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.5, Copyright (c), by Zend Technologies

vagrant@pterodactyl:~/app$ composer --version
Composer version 2.3.5 2022-04-13 16:43:00
```

## 自动升级

::: warning
由于我们使用的一些依赖项存在问题，目前无法进行自动升级。请暂时执行人工升级的方式，直到此问题得到解决。
:::

## 人工升级

如果您不想执行自动升级，或者想要参考升级步骤，您可以按照下面的文档进行操作。

::: warning
如果您已成功执行自动升级，则无需在此页面上执行任何其他操作。
:::

### 进入维护模式

每当您执行更新时，您应该确保将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作，你也能更好的去更新。

```bash
cd /var/www/pterodactyl

php artisan down
```

### 下载更新

更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。

```bash
curl -L https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz | tar -xzv
# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取
curl -L https://gh.api.99988866.xyz/https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz | tar -xzv
```

下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。

```bash
chmod -R 755 storage/* bootstrap/cache
```

### 更新依赖

下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。

```bash
composer install --no-dev --optimize-autoloader
```

### 清除编译后的模板缓存

您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。

```bash
php artisan view:clear
php artisan config:clear
```

### 数据库更新

您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，_永远不要编辑我们发布的核心预设_！ 它们将被此更新过程所覆盖。

```bash
php artisan migrate --seed --force
```

### 设置权限

最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 `www-data`，但可能因系统而异 &mdash; 有时是 `nginx`、`caddy`、`apache`，甚至是 `nobody`。

```bash
# 如果使用 NGINX 或 Apache (并且不在CentOS上)
chown -R www-data:www-data /var/www/pterodactyl/*

# 如果在 CentOS 上使用 NGINX
chown -R nginx:nginx /var/www/pterodactyl/*

# 如果在 CentOS 上使用 Apache
chown -R apache:apache /var/www/pterodactyl/*
```

### 重启工作队列

_每次_ 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。

```bash
php artisan queue:restart
```

### 退出维护模式

现在所有内容都已更新，您需要退出维护模式，以便面板可以继续运行并提供服务。

```bash
php artisan up
```

### 遥测

从 1.11 开始，Pterodactyl 将收集匿名遥测数据，以帮助我们更好地了解软件的使用情况。要了解有关此功能的更多信息并拒绝此功能，请参阅我们的 [遥测](./additional_configuration.md#遥测) 文档。确保继续其余的安装过程。

[最后一步：升级 Wings](/wings/1.0/upgrading.md)
