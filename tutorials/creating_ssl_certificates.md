# 创建 SSL 证书

本页将为您介绍如何为面板和 Wings 创建新的 SSL 证书

:::: tabs
::: tab "方法1: Certbot"
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

:::
::: tab "方法2: acme.sh (使用 Cloudflare API)"
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

:::
::: tab "Method 3: Caddy (using Cloudflare API)"
This is for advanced users, who are running Cloudflare in proxy mode or do not have access to port `80`.

### Installing Caddy with Cloudflare DNS plugin

Caddy does not come by default with Cloudflare DNS plugin, you need to install it yourself.

There are two main methods:

1. Using `xcaddy` - CLI tool to build your own Caddy build
2. Downloading prebuilt binary from [Caddy's download page](https://caddyserver.com/download).
3. Using Ansible to download and install Caddy with plugins. See [caddy-ansible](https://github.com/caddy-ansible/caddy-ansible)

#### Build Caddy using `xcaddy` on your server

Please refer to [Caddy docs on building Caddy](https://caddyserver.com/docs/build#xcaddy).

### Obtaining CloudFlare API Token

After installing acme.sh, we need to fetch a CloudFlare API key. Please make sure that a DNS record (A or CNAME record) is pointing to your target node, and set the cloud to grey (bypassing CloudFlare proxy). Then go to My Profile > API keys and on Global API Key subtab, click on "view", enter your CloudFlare password, and copy the API key to clipboard.

After install Caddy with Cloudflare DNS plugin, we need to fetch a Cloudflare API token. Please make sure that a DNS record (A or CNAME record) is pointing at your target node. Then go to My Profile > API Tokens and on API Tokens click "Create Token". Create API Token > API token templates, at the end of line with "Edit zone DNS", click "Use template". Under **Zone Resources**, select your DNS zone for which you wish to create the API token, click "Continue to summary". Review the API token summary and click "Create Token". And finally copy the API token to clipboard.

### Reconfiguring Caddy to use Cloudflare DNS for obtaining certificates

Create an environment variable file (like `.env`), keep in mind that this file contains secrets and should not be accessed by public.

We recommend that you create the secret file in the following location: `/etc/caddy/.secrets.env`.

```bash
CLOUDFLARE_API_TOKEN=<your cloudflare api token>
```

For security reasons, we recommend setting permissions to `0600` (only owner can read or write to the file).

```bash
# Set ownership of the `.secrets.env` file to `caddy` system user
chown caddy:caddy /etc/caddy/.secrets.env

# Set read-write permissions only to owner - the `caddy` system user
chmod 0600 /etc/caddy/.secrets.env
```

Modify the systemd unit file, to load environment variables from file (add `--envfile /etc/caddy/.secrets.env` flag to `ExecStart`), the default systemd unit file location is `/etc/systemd/system/caddy.service`:

```unit{12}
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

You can add a `tls` block to your `Caddyfile`, under the `<domain>` block of your panel configuration, the Caddy config file location is `/etc/caddy/Caddyfile`:

```caddyfile{5-7}
<domain> {
  # ...

  tls {
    dns cloudflare {env.CLOUDFLARE_API_TOKEN}
  }
}
```

:::
::::
