# 网络服务器配置

::: warning
使用 SSL 配置时，您必须创建 SSL 证书，否则您的网络服务器将无法启动。请参阅 [创建 SSL 证书](/tutorials/creating_ssl_certificates.html) 文档页面以了解如何在继续之前创建这些证书。
:::

::: tip
如果您使用[自动续签 SSL 的 Caddy](#caddy-with-automatic-ssl)，则无需手动创建 SSL 证书，Caddy 会自动处理。
:::

:::: tabs
@tab 使用 SSL 的 Nginx

首先，删除默认的 NGINX 配置。

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/nginx/sites-available/` 目录下， 或 &mdash; 如果在 RHEL 、 Rocky Linux 或 AlmaLinux 上，则为 `/etc/nginx/conf.d/`。

@[code conf{4,11,26-27}](@snippets/webservers/nginx-php8.3.conf)

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 RHEL 、 Rocky Linux 或 AlmaLinux，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

@tab 没有使用 SSL 的 Nginx

首先，删除默认的 NGINX 配置。

``` bash
rm /etc/nginx/sites-enabled/default
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/nginx/sites-available/` 目录下， 或 &mdash; 如果在 RHEL 、 Rocky Linux 或 AlmaLinux 上，则为 `/etc/nginx/conf.d/`。

@[code conf{4}](@snippets/webservers/nginx-php8.3-nossl.conf)

### 启用配置

最后一步是启用 NGINX 配置并重新启动它。

```bash
# 如果您使用的是 RHEL 、 Rocky Linux 或 AlmaLinux，则不需要符号链接此文件。
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# 无论操作系统如何，您都需要重新启动 nginx。
sudo systemctl restart nginx
```

@tab 使用 SSL 的 Apache

首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/apache2/sites-available` 目录下， 或 &mdash; 如果在 RHEL 、 Rocky Linux 或 AlmaLinux 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php8.3` 包，否则 PHP 将不会显示在您的网络服务器上。

@[code conf{3,12,26-27}](@snippets/webservers/apache.conf)

### 启用配置

创建上面的文件后，只需运行以下命令。如果你在 RHEL 、 Rocky Linux 或 AlmaLinux 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 RHEL 、 Rocky Linux 或 AlmaLinux 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2
```

@tab 没有使用 SSL 的 Apache

首先，删除默认的 Apache 配置。

``` bash
a2dissite 000-default.conf
```

现在，您应该复制下面文件的内容，将 `<domain>` 替换为您使用的域名后，粘贴到名为 `pterodactyl.conf` 的文件中，并将该文件放在 `/etc/apache2/sites-available` 目录下， 或 &mdash; 如果在 RHEL 、 Rocky Linux 或 AlmaLinux 上，则为 `/etc/httpd/conf.d/`。

注意：使用 Apache 时，请确保您已安装 `libapache2-mod-php8.3` 包，否则 PHP 将不会显示在您的网络服务器上。

@[code conf{3}](@snippets/webservers/apache-nossl.conf)

### 启用配置

创建上面的文件后，只需运行以下命令。如果你在 RHEL 、 Rocky Linux 或 AlmaLinux 上_你不需要运行下面的命令！_你只需要运行 `systemctl restart httpd`。

```bash
# 你不需要在 RHEL 、 Rocky Linux 或 AlmaLinux 上运行这部分的任何命令
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

@tab 自动续签 SSL 的 Caddy

在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 `/etc/caddy/Caddyfile`。

要完全删除配置文件，请运行以下命令：

```shell
rm /etc/caddy/Caddyfile
```

然后继续使用您选择的编辑器来编写配置。

您应该粘贴以下文件的内容，将 `<domain>` 替换为您的域名。

@[code conf{10}](@snippets/webservers/Caddyfile)

::: tip

如果您正在使用 Cloudflare DNS 且配置为代理模式，请参考[此教程](/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api))，了解如何配置 Caddy 以使用 DNS 验证方式获取 SSL 证书。
:::

### 启用配置

最后一步是重新启动 Caddy。

```bash
systemctl restart caddy
```

@tab 没有使用 SSL 的 Caddy

在添加我们自定义配置之前，让我们先移除默认配置。您可以通过删除配置文件的内容或直接删除配置文件，然后从头开始创建一个新的来实现。配置文件的路径是 `/etc/caddy/Caddyfile`。

要完全删除配置文件，请运行以下命令：

```shell
rm /etc/caddy/Caddyfile
```

然后继续使用您选择的编辑器来编写配置。

您应该粘贴以下文件的内容，将 `<domain>` 替换为您的域名。

唯一的两个变化是在 `<domain>` 后缀添加了 `:80`，并且在全局配置的 `servers` 指令中，将端口从 `:443` 更改为 `:80`。

@[code conf{10}](@snippets/webservers/Caddyfile-nossl)

### 启用配置

最后一步是重新启动 Caddy。

```bash
systemctl restart caddy
```

::::

#### 下一步：[Wings (后端) 安装](../../wings/1.0/installing.md)
