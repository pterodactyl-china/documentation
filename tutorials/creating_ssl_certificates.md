# 创建 SSL 证书

本页将为您介绍如何为面板和 Wings 创建新的 SSL 证书

:::: tabs
@tab 方法 1: Certbot
首先,我们将安装 Certbot,这是一个脚本文件,它可以自动更新证书并一键创建证书。下面的命令只适合 Ubuntu，但您可以在 [Certbot 官方网站](https://certbot.eff.org/)查看相关安装说明,我们这里包含了安装 Certbot 必要的Nginx或Apache插件的指令,这样妈妈再也不用担心我需要迁移环境了!

``` bash
sudo apt update
sudo apt install -y certbot
# Nginx 插件
sudo apt install -y python3-certbot-nginx
# Apache 插件
sudo apt install -y python3-certbot-apache
```

## 创建证书

安装Certbot之后我们需要生成一个证书,最简单的方法就是安装Web服务器的Certbot插件,如果没有Web服务器的话就需要DNS验证了

在下面命令中,请您替换 `example.com` 域名为您自己需要生成证书的域名,当您需要申请多个域名的证书时可以在每个域名前面添加 `-d` 参数 ，列如 `-d anotherdomain.com`，当然您还可以考虑生成通配符证书，但本教程未涉及。

### HTTP 验证

HTTP 验证需要您开放服务器 80 端口来进行验证

``` bash
# Nginx
certbot certonly --nginx -d example.com
# Apache
certbot certonly --apache -d example.com
# 如果以上两者都不起作用您可以试试这个,但是用之前请确保Web服务器已经关闭
certbot certonly --standalone -d example.com
```

### DNS 验证

DNS 验证要求您去您的域名购买商那里解析相应的TXT DNS记录值以验证域名所有权，而不必公开 80 端口。在运行下面的 certbot 命令时会显示说明。

```bash
certbot -d example.com --manual --preferred-challenges dns certonly
```

### 自动续签

您可以配置证书自动续签以防止证书过期,您可以使用 `sudo crontab -e` 打开 crontab 来添加下面的代码,该代码将在每天 23点 (晚上11点)都会检查一遍SSL证书是否过期并尝试续签

部署成功后将会自动重启 Nginx 并应用新的 SSL 证书,您可以将 `systemctl restart nginx` 中的 `nginx` 更改为 `apache` 或 `wings`

对更高级的用户来说,我们建议使用 [acme.sh](https://acme.sh) ，它提供了更多更强大的功能

``` text
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

### 疑难解答

如果您在尝试访问面板或 Wings 时遇到 `不安全连接` 或 SSL/TLS 相关的错误时,有可能是您的 SSL 证书过期了,您可以通过更新 SSL 证书来解决,如果您的 80 端口正在被占用那就无法使用 `certbot-renew` 来完成自动续签

如果您运行的是 Nginx,在运行 Certbot 并附带有 `-nginx` 时出现报错您可以先停止 Nginx 服务后来续签证书，然后再启动 Nginx,如果您在为 Wings 续签证书，那你可以替换为 `wings`

停止 Nginx:

```bash
systemctl stop nginx
```

续签证书:

```bash
certbot renew
```

在完成续签后请使用下面的命令来重启 Nginx:

```bash
systemctl start nginx
```
您可能还需要重新启动 Wings，因为并非每个服务都能够自动应用更新的证书：

```bash
systemctl restart wings
```

@tab 方法 2: acme.sh (使用 Cloudflare API)
该方法适合高级用户和无法开放80端口的用户, 下面的命令适用于 Ubuntu 和 Cloudflare API,您可以查看 [acme.sh 的官方网站](https://github.com/Neilpang/acme.sh) 来获取相关说明

``` bash
curl https://get.acme.sh | sh
```

### 获取 Cloudflare API 密钥

安装 acme.sh 后，我们需要获取 CloudFlare API 密钥。 在 Cloudfare 的网站上，选择您的域名，然后在右侧复制您的 “区域 ID” 和 “帐户 ID”，然后单击 “获取您的 API 令牌”，单击 “创建令牌” > 选择模板 “编辑区域 DNS” > 选择 “区域资源” 的范围，然后单击 “继续以显示摘要”，复制您的令牌。

### 申请证书

由于配置文件基于 Certbot,所以我们需要手动创建一个文件夹

```bash
sudo mkdir -p /etc/letsencrypt/live/example.com
```

安装 acme 之后执行它并获取 Cloudflare 的 API 密钥,然后输入 Cloudflare 的 API 凭据来生成证书

```bash
export CF_Token="Your_CloudFlare_API_Key"
export CF_Account_ID="Your_CloudFlare_Account_ID"
export CF_Zone_ID="Your_CloudFlare_Zone_ID"

```

然后创建证书

```bash
acme.sh --issue --dns dns_cf -d "example.com" --server letsencrypt \
--key-file /etc/letsencrypt/live/example.com/privkey.pem \
--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem
```

### 自动续签

第一次运行脚本后,它将自动添加到 crontab,您可以使用以下命令来编辑自动续订间隔

```bash
sudo crontab -e
```

@tab 方法 3: Caddy（使用 Cloudflare API）
这适用于高级用户，他们正在使用 Cloudflare 代理模式或无法访问端口 `80`.

### 使用 Cloudflare DNS 插件安装 Caddy

Caddy 默认不带有 Cloudflare DNS 插件，您需要自行安装。

有两种主要方法:

1. 使用 `xcaddy` - 用于构建自己的 Caddy 版本的 CLI 工具
2. 从 [Caddy 的下载页面](https://caddyserver.com/download)下载预构建的二进制文件。
3. 使用 Ansible 下载并安装带有插件的 Caddy。请参阅 [caddy-ansible](https://github.com/caddy-ansible/caddy-ansible)

#### 在您的服务器上使用 `xcaddy` 构建 Caddy

请参阅 [Caddy 构建文档](https://caddyserver.com/docs/build#xcaddy)。

### 获取 CloudFlare API 令牌

在安装 acme.sh 后，我们需要获取 CloudFlare API 密钥。请确保 DNS 记录（A 记录或 CNAME 记录）指向您的目标节点，并将云设置为灰色（绕过 CloudFlare 代理）。然后转到“我的配置文件”>“API 密钥”，在全局 API 密钥子选项卡上，单击“查看”，输入您的 CloudFlare 密码，并将 API 密钥复制到剪贴板。

在安装带有 Cloudflare DNS 插件的 Caddy 后，我们需要获取 Cloudflare API 令牌。请确保 DNS 记录（A 记录或 CNAME 记录）指向您的目标节点。然后转到“我的配置文件”>“API 令牌”，在 API 令牌上单击“创建令牌”。创建 API 令牌 > API 令牌模板，在带有“编辑区域 DNS”的行末尾，单击“使用模板”。在**区域资源**下，选择您希望创建 API 令牌的 DNS 区域，单击“继续到摘要”。查看 API 令牌摘要，然后单击“创建令牌”。最后将 API 令牌复制到剪贴板。

### 重新配置 Caddy 以使用 Cloudflare DNS 获取证书

首先，您需要创建一个环境变量文件（例如 `.env`），请注意，此文件包含机密信息，不应该被公开访问。

我们建议您将此机密文件放在以下位置: `/etc/caddy/.secrets.env`。

```bash
CLOUDFLARE_API_TOKEN=<您的 Cloudflare API 令牌>
```

出于安全原因，我们建议将权限设置为 `0600` （只有所有者可以读取或写入文件）。

```bash
# 将 `.secrets.env` 文件的所有权设置为 `caddy` 系统用户
chown caddy:caddy /etc/caddy/.secrets.env

# 仅允许所有者读写权限 - 即 `caddy` 系统用户
chmod 0600 /etc/caddy/.secrets.env
```

接下来，修改 systemd 单元文件，以从文件加载环境变量（在 `ExecStart` 中添加 `--envfile /etc/caddy/.secrets.env` 标志）。默认的 systemd 单元文件位置是 `/etc/systemd/system/caddy.service`:

```unit{11}
[Unit]
Description=Caddy
Documentation=https://caddyserver.com/docs/
After=network.target network-online.target
Requires=network-online.target

[Service]
Type=notify
User=caddy
Group=caddy
ExecStart=/usr/bin/caddy run --environ --envfile /etc/caddy/.secrets.env --config /etc/caddy/Caddyfile
ExecReload=/usr/bin/caddy reload --config /etc/caddy/Caddyfile
TimeoutStopSec=5s
LimitNOFILE=1048576
LimitNPROC=512
PrivateTmp=true
ProtectSystem=full
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
```

最后，在您的面板配置的 `<domain>` 块下，您可以在 `Caddyfile` 中添加一个 `tls` 块。Caddy 配置文件的位置是 `/etc/caddy/Caddyfile`:

```caddyfile{4-6}
<domain> {
  # ...

  tls {
    dns cloudflare {env.CLOUDFLARE_API_TOKEN}
  }
}
```

::::
