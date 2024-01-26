# 网络服务器配置

::: warning
使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 [创建 SSL 证书](/tutorials/creating_ssl_certificates.html) 文档页面以了解如何在继续之前创建这些证书。
:::

<<<<<<< HEAD
::::: tabs
:::: tab "使用 SSL 的 Nginx"
首先，删除默认的 NGINX 配置。
=======
::: tip
如果您使用[自动续签 SSL 的 Caddy](#caddy-with-automatic-ssl)，则无需手动创建 SSL 证书，Caddy 会自动处理。
:::

::::: tabs
:::: tab "使用 SSL 的 Nginx"
首先，删除默认的 NGINX 配置。
>>>>>>> fad96abc2780565e2c6e356ff050f9378970e2b9

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/nginx/sites-available/` 目录下， 或 &mdash; 如果在 CentOS 上，则为 `/etc/nginx/conf.d/`。

<<< @/.snippets/webservers/nginx-php8.1.conf{5,11,26-27}

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 CentOS，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

::::
:::: tab "没有使用 SSL 的 Nginx"
首先，删除默认的 NGINX 配置。

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/nginx/sites-available/` 目录下， 或 &mdash; 如果在 CentOS 上，则为 `/etc/nginx/conf.d/`。

<<< @/.snippets/webservers/nginx-php8.1-nossl.conf{4}

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 CentOS，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

::::
:::: tab "使用 SSL 的 Apache"
首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/apache2/sites-available` 目录下， 或 &mdash; 如果在 CentOS 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php` 包，否则 PHP 将不会显示在您的网络服务器上。

<<< @/.snippets/webservers/apache.conf{2,10,24-25}

### 启用配置

创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 CentOS 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2
```

::::
:::: tab "没有使用 SSL 的 Apache"
首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/apache2/sites-available` 目录下， 或 &mdash; 如果在 CentOS 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php` 包，否则 PHP 将不会显示在您的网络服务器上。

<<< @/.snippets/webservers/apache-nossl.conf{2}

### 启用配置

创建上面的文件后，只需运行以下命令。如果你在 CentOS 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 CentOS 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

::::
:::: tab "自动续签 SSL 的 Caddy"
Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is `/etc/caddy/Caddyfile`.

To delete the config file completely, run the following command:

```shell
rm /etc/caddy/Caddyfile
```

Then continue with an editor of your choice to write the config.

You should paste the contents of the file below, replacing `<domain>` with your domain name.

<<< @/.snippets/webservers/Caddyfile{9}

::: tip
If you are using Cloudflare DNS in proxy mode, refer to [this tutorial](/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)), to see how to configure Caddy to use DNS challenge for obtaining SSL certificates.
:::

### Enabling Configuration

The final step is to restart Caddy.

```bash
systemctl restart caddy
```

::::
:::: tab "Caddy Without SSL"
Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is `/etc/caddy/Caddyfile`.

To delete the config file completely, run the following command:

```shell
rm /etc/caddy/Caddyfile
```

Then continue with an editor of your choice to write the config.

You should paste the contents of the file below, replacing `<domain>` with your domain name.

The only two differences are that we have suffixed the `<domain>` with `:80` and in the global config at `servers` directive, we have changed the port from `:443` to `:80`.

<<< @/.snippets/webservers/Caddyfile-nossl{9}

### Enabling Configuration

The final step is to restart Caddy.

```bash
systemctl restart caddy
```

::::
:::::

#### 下一步：[Wings (后端) 安装](../../wings/installing.md)
