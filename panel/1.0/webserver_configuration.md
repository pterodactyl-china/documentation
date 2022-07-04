# 网络服务器配置

::: warning
使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。 请参阅 [创建 SSL 证书](/tutorials/creating_ssl_certificates.html) 文档页面以了解如何在继续之前创建这些证书。
:::

:::: tabs
::: tab "使用 SSL 的 Nginx"
首先，删除默认的 NGINX 配置。

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该粘贴下面文件的内容，将 `<domain>` 替换为您在名为 `pterodactyl.conf` 的文件中使用的域名，并将该文件放在 `/etc/nginx/sites-available/` 中， 或 &mdash; 如果在 CentOS 上，则为 `/etc/nginx/conf.d/`。

<<< @/.snippets/webservers/nginx-php8.1.conf{5,11,26-27}

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 CentOS，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

:::
::: tab "没有使用 SSL 的 Nginx"
首先，删除默认的 NGINX 配置。

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该粘贴下面文件的内容，将 `<domain>` 替换为您在名为 `pterodactyl.conf` 的文件中使用的域名，并将该文件放在 `/etc/nginx/sites-available/` 中， 或 &mdash; 如果在 CentOS 上，则为 `/etc/nginx/conf.d/`。

<<< @/.snippets/webservers/nginx-php8.1-nossl.conf{4}

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 CentOS，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

:::
::: tab "使用 SSL 的 Apache"
首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该粘贴下面文件的内容，将 `<domain>` 替换为您在名为 `pterodactyl.conf` 的文件中使用的域名，并将该文件放在 `/etc/apache2/sites-available` 中， 或 &mdash; 如果在 CentOS 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php` 包，否则 PHP 将不会显示在您的网络服务器上。

<<< @/.snippets/webservers/apache.conf{2,10,24-25}

### 启用配置

创建上面的文件后，只需运行以下命令。 如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 CentOS 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2
```

:::
::: tab "没有使用 SSL 的 Apache"
首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该粘贴下面文件的内容，将 `<domain>` 替换为您在名为 `pterodactyl.conf` 的文件中使用的域名，并将该文件放在 `/etc/apache2/sites-available` 中， 或 &mdash; 如果在 CentOS 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php` 包，否则 PHP 将不会显示在您的网络服务器上。

<<< @/.snippets/webservers/apache-nossl.conf{2}

### 启用配置

创建上面的文件后，只需运行以下命令。 如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 CentOS 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

:::
::::

#### 下一步：[Wings (后端) 安装](../../wings/installing.md)
