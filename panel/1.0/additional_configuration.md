# 其他配置

[[toc]]

## 备份

翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。

当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。
在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。

### 使用本地备份

默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，这种备份存储方式可以在 `.env` 文件中通过以下配置明确设置。

```bash
# 将你的面板设置为通过 Wings 使用本地存储进行备份
APP_BACKUP_DRIVER=wings
```

请注意，当通过 Wings 使用本地存储时，备份的目的地是在 Wings 的 `config.yml` 中设置的，设置内容如下。

```yml
system:
  backup_directory: /path/to/backup/storage
```

### 使用 S3 备份

AWS S3（或兼容的存储）可以用来存储远程或基于云的备份。必须在 `.env` 文件中设置以下配置选项或作为环境变量，以便启用它。

```bash
# 将你的面板设置为使用 s3 进行备份
APP_BACKUP_DRIVER=s3

# 实际使用 s3 的信息
AWS_DEFAULT_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BACKUPS_BUCKET=
AWS_ENDPOINT=
```

对于某些配置，你可能需要将你的 S3 URL 从 `bucket.domain.com` 改为 `domain.com/bucket`。为了达到这个目的，在你的 `.env` 文件中添加 `AWS_USE_PATH_STYLE_ENDPOINT=true`。

S3 备份使用 S3 分段上传功能。在极少数情况下，您可能需要调整单个分段大小或生成的预签名 URL 的生命周期。
默认分段大小为 5GB，默认预签名 URL 生命周期为 60 分钟。您可以使用 `BACKUP_MAX_PART_SIZE` 环境变量配置最大分段尺寸。
您必须以字节为单位指定大小。 要定义预签名 URL 的生命周期，请使用 `BACKUP_PRESIGNED_URL_LIFESPAN` 变量。预期单位是分钟。

以下 `.env` 片段配置 1GB 部分并使用 120 分钟作为预签名 URL 生命周期：

```bash
BACKUP_MAX_PART_SIZE=1073741824
BACKUP_PRESIGNED_URL_LIFESPAN=120
```

## Reverse Proxy Setup

在反向代理后面运行 Pterodactyl 时，例如 [Cloudflare 的灵活 SSL](https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-) 或 Nginx/Apache/Caddy 等，您将需要对面板进行快速修改，以确保一切按预期继续工作。
默认情况下，当使用这些反向代理时，您的面板将无法正确处理请求。
您很可能无法登录或在浏览器控制台中看到安全警告，因为它试图加载不安全的资源。
这是因为面板用来确定如何生成链接的内部逻辑认为它是通过 HTTP 而不是通过 HTTPS 运行的。

您需要编辑面板根目录中的 `.env` 文件以至少包含 `TRUSTED_PROXIES=*`。
我们强烈建议提供特定的 IP 地址（或以英文逗号分隔的 IP 列表），而不是允许使用 `*`。例如，如果您的代理与服务器在同一台机器上运行，那么类似  `TRUSTED_PROXIES=127.0.0.1` 之类的东西很可能适合您。

### NGINX 特定配置

为了使翼龙正确响应 NGINX 反向代理，NGINX `location` 配置必须包含以下内容：

```Nginx
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header Host $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_redirect off;
proxy_buffering off;
proxy_request_buffering off;
```

### Cloudflare 特定配置
如果您使用 Cloudflare 的灵活 SSL，您应该设置 `TRUSTED_PROXIES` 以包含 [他们的 IP 地址](https://www.cloudflare.com/ips/)。以下是如何设置的示例。

```text
TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
```

## reCAPTCHA

面板使用隐形 reCAPTCHA 来保护登录页面免受暴力攻击。如果登录尝试被认为可疑，则可能会要求用户执行 reCAPTCHA 质询。

### 配置 reCAPTCHA

虽然我们默认提供全局 Site Key 和 Secret Key，但我们强烈建议您根据自己的设置更改它。

您可以在 [reCAPTCHA 管理控制台](https://www.google.com/recaptcha/admin) 中生成自己的密钥。

然后可以使用管理面板中的设置来应用这些密钥。reCAPTCHA 设置可以在**高级**选项卡上找到。

### 禁用 reCAPTCHA

:::warning 安全警告
我们不建议禁用 reCAPTCHA。这是一种安全机制，使对用户帐户执行暴力攻击时变得更加困难。
:::

如果用户在登录时遇到问题，或者您的面板没有暴露在互联网上，禁用 reCAPTCHA 是有意义的。

使用管理面板可以轻松禁用 reCAPTCHA。在设置中，选择**高级**选项卡并将 reCAPTCHA 的**状态**设置为**禁用**。

::: tip 
如果您无法访问面板，导致改不了这部分的设置，你也可以在翼龙面板的根目录下的 `.env` 文件中，设置环境变量中去禁用 reCAPTCHA。

```
RECAPTCHA_ENABLED=false
```
:::

#### 编辑你的数据库

如果您无法访问面板，可以使用以下命令直接修改数据库。

```sql
mysql -u root -p
UPDATE panel.settings SET value = 'false' WHERE `key` = 'settings::recaptcha:enabled';
```

## 动态口令认证

如果可能，您应该使用面板更新您的动态口令认证设置。如果您出于某种原因无法访问您的面板，您可以使用以下步骤。

### 禁用动态口令认证

```sql
mysql -u root -p
UPDATE panel.settings SET value = 0 WHERE `key` = 'settings::pterodactyl:auth:2fa_required';
```

### 为特定用户禁用动态口令认证

在 `/var/www/pterodactyl` (这里指翼龙所在的目录) 目录中运行以下命令。

``` bash
php artisan p:user:disable2fa
```
