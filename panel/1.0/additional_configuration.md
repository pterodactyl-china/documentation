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

#### 分段上传

S3 备份使用 S3 分段上传功能。在极少数情况下，您可能需要调整单个分段大小或生成的预签名 URL 的生命周期。

默认分段大小为 5GB，默认预签名 URL 生命周期为 60 分钟。您可以使用 `BACKUP_MAX_PART_SIZE` 环境变量配置最大分段尺寸。
您必须以字节为单位指定大小。 要定义预签名 URL 的生命周期，请使用 `BACKUP_PRESIGNED_URL_LIFESPAN` 变量。预期单位是分钟。

以下 `.env` 片段配置 1GB 部分并使用 120 分钟作为预签名 URL 生命周期：

```bash
BACKUP_MAX_PART_SIZE=1073741824
BACKUP_PRESIGNED_URL_LIFESPAN=120
```

#### 存储类

如果您需要指定存储类，请使用 `AWS_BACKUPS_STORAGE_CLASS` 环境变量。默认选项是 `STANDARD`（S3 标准）。

以下 `.env` 片段将类设置为 `STANDARD_IA`（这是一个示例）。

```bash
# STANDARD_IA 就是一个例子。
AWS_BACKUPS_STORAGE_CLASS=STANDARD_IA
```

## 反向代理设置

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

## 遥测

从 1.11 开始，Panel 收集有关 Panel 和所有连接节点的匿名指标。
此功能默认启用，但可以禁用。

此功能收集的数据不会出售或用于广告目的。 出于改进软件的目的，可能会公开或与第三方共享汇总统计数据。
### 它是如何工作的？

遥测系统首先为 Panel 安装生成随机 UUIDv4 标识符。
此标识符存储在数据库中，因此对多个 Panel 实例进行负载平衡的人仍然可以拥有唯一的标识符。 然后将该标识符连同相关遥测数据发送到远程服务器。 遥测数据每 24 小时收集一次，没有持续收集或本地存储遥测数据，我们在将数据发送到远程服务器之前立即收集数据。

目前，所有遥测收集逻辑都由面板上的 [TelemetryCollectionService](https://github.com/pterodactyl/panel/blob/1.0-develop/app/Services/Telemetry/TelemetryCollectionService.php#L53) 处理。 该服务负责收集发送到远程服务器的所有数据。

### 收集什么数据？

如果您希望查看收集到的完整数据，请查看 TelemetryCollectionService（如上链接），或使用 `php artisan p:telemetry` 命令查看将发送到远程服务器的确切数据。

截至 2022-12-12，收集的数据包括：

* Unique identifier for the Panel
* Version of the Panel
* PHP version
* Backup storage driver (S3, Local, etc.)
* Cache driver (Redis, Memcached, etc.)
* Database driver and version (MySQL, MariaDB, PostgreSQL, etc.)
* Resources
  * Allocations
    * Total number
    * Total number of used allocations (assigned to a server)
  * Backups
    * Total number
    * Sum of the total amount of bytes stored by backups
  * Eggs
    * Total number
    * ~~Map of egg UUIDs to the number of servers using that egg~~ (removed in 1.11.2)
  * Locations
    * Total number
  * Mounts
    * Total number
  * Nests
    * Total number
    * ~~Map of nest UUIDs to the number of servers using eggs in that nest~~ (removed in 1.11.2)
  * Nodes
    * Total number
  * Servers
    * Total number
    * Number of servers that are suspended
  * Users
    * Total number
    * Number of users that are admins
* Nodes
  * Node UUID
  * Version of Wings on the node
  * Docker
    * Version
    * Cgroups
      * Driver
      * Version
    * Containers
      * Total
      * Running
      * Paused
      * Stopped
    * Storage
      * Driver
      * Filesystem
    * runc
      * Version
  * System
    * Architecture (`amd64`, `arm64`, etc.)
    * CPU Threads
    * Memory Bytes
    * Kernel Version
    * Operating System (Debian, Fedora, RHEL, Ubuntu, etc.)
    * Operating System Type (bsd, linux, windows, etc.)

### 数据是如何存储的？

目前，数据存储在 Cloudflare 中，我们使用 Worker 提取所有遥测数据，该 Worker 进行基本处理（例如验证），然后将其插入 Cloudflare D1。 目前，收集到的任何数据都没有 API 或可视化，只能手动查询。 目前只有 Matthew 能够查询数据，但我们正在研究替代方案，以使这些数据更易于访问。

### 为什么？

收集这些数据的主要原因是帮助我们对该软件的未来做出更好的决策。 随着 1.11 的发布，最低 PHP 版本要求从 7.4 跃升至 8.0，但是，我们希望添加一项需要 PHP 8.1 的功能，这会使版本要求跃升并可能给某些用户带来问题。 通过收集这些数据，我们有望更深入地了解此类变化将如何影响社区，并在未来做出更好的决策。 这对于架构、内核版本和正在使用的操作系统节点等信息尤为重要。 例如，我们想利用仅存在于某些文件系统中的功能，但我们不知道有多少人在使用这些文件系统，因此我们无法确定是否值得为此付出努力。

有些数据对决策没有那么有用，但对我们了解仍然有用。
例如，您有没有想过有多少个 Panel 实例？ 所有这些实例运行了多少台服务器？ 有多少用户在使用面板？ 这些用户中有多少是管理员？ 有多少台服务器在使用特定的预设？ 有多少服务器正在使用特定的预设组？
所有这些问题都可以通过我们收集的数据来回答，并且可以帮助我们和社区更好地了解软件的使用方式。

如果您对我们收集的数据有任何疑问，请随时在 Discord 上联系我们。
我们的目标是尽可能透明，并且我们希望确保社区理解我们在做什么以及为什么这样做。

### 启用遥测

默认情况下启用遥测，如果您想在禁用它后启用它，请编辑您的 `.env` 文件并删除 `PTERODACTYL_TELEMETRY_ENABLED` 行，或将其设置为 `true`。

```text
PTERODACTYL_TELEMETRY_ENABLED=true
```

您还可以使用 `php artisan p:environment:setup` 命令启用遥测，可添加 `--telemetry` 参数来进行非交互式设置。

### 禁用遥测

要禁用遥测，请编辑您的 `.env` 文件并将 `PTERODACTYL_TELEMETRY_ENABLED` 设置为 `false`。

```text
PTERODACTYL_TELEMETRY_ENABLED=false
```

您还可以使用 `php artisan p:environment:setup` 命令禁用遥测，可添加 `--telemetry=false` 参数来进行非交互式设置。
