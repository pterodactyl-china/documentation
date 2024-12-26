# 升级 PHP

此文档包含将您的系统升级到最新版本的 PHP 的说明。请参考下表以检查您的 Pterodactyl 版本需要哪个版本的 PHP。

| 面板版本   | PHP 版本   |
| --------------- | ------------- |
| 1.0.0 - 1.2.0   | 7.3, 7.4      |
| 1.3.0+          | 7.4, 8.0      |
| 1.8.0+          | 7.4, 8.0, 8.1 |
| 1.11.0 - 1.11.3 | 8.0, 8.1      |
| 1.11.4+         | 8.1, 8.2, 8.3 |
| 1.11.10+        | 8.2, 8.3      |

## 安装 PHP

为了安装 PHP 8.3，您需要运行以下命令。请记住，不同的操作系统可能对此命令的格式有略微不同的要求。

```bash
# 添加 PHP 的额外仓库
add-apt-repository -y ppa:ondrej/php
apt -y update
apt -y install php8.3 php8.3-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}
```

## 更新 Composer

从 `Panel@1.3.0` 开始，我们需要 `composer` v2。要更新 composer，您需要运行以下命令，该命令将执行 composer 自我更新过程，并将您切换到版本 2。

```bash
composer self-update --2
```

## Web服务器配置

:::: tabs
@tab NGINX

升级到 PHP 8.3 后，您可能需要更新您的 NGINX 配置。您的配置文件名称可能为 `pterodactyl.conf`，位于 `/etc/nginx/sites-available/` 目录中，如果在 CentOS 上，则可能位于 `/etc/nginx/conf.d/`。

确保更新下面命令中的路径，以反映您的配置文件的实际位置。

``` bash
sed -i -e 's/php[7|8].[0-9]-fpm.sock/php8.3-fpm.sock/' /etc/nginx/sites-available/pterodactyl.conf
```

编辑完文件后，运行下面的命令重新加载 nginx 并应用您的更改。

```bash
systemctl reload nginx
```

@tab Apache

运行下面的命令，禁用所有以前的 PHP 版本，并在服务请求时启用 PHP 8.3。

``` bash
# Hint: a2dismod = a2_disable_module 🤯
a2dismod php*

# Hint: a2enmod = a2_enable_module 🤯
a2enmod php8.3

```

::::

### [返回到 1.X.X 升级指南](../panel/1.0/updating#更新依赖项)
