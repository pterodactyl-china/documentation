# 创建SSL证书

本页将为您介绍如何创建SSL证书

:::: tabs
::: tab "方法1: Certbot"
首先,我们将安装Certbot,这是一个脚本文件,它可以自动更新证书并一键创建证书。下面的命令只适合Ubuntu，但您可以在[Certbot官方网站](https://certbot.eff.org/)查看相关安装说明,我们这里包含了安装Certbot必要的Nginx或Apache插件的指令,这样妈妈再也不用担心我需要迁移环境了!

``` bash
sudo apt update
sudo apt install -y certbot
# Nginx插件
sudo apt install -y python3-certbot-nginx
# Apache插件
sudo apt install -y python3-certbot-apache
```

## 创建证书

安装Certbot之后我们需要生成一个证书,最简单的方法就是安装Web服务器的Certbot插件,如果没有Web服务器的话就需要DNS验证了

在下面命令中,请您替换 `example.com` 域名为您自己需要生成证书的域名,当您需要申请多个域名的证书时可以带前面添加参数 `-d`

### HTTP验证

HTTP验证需要您开放服务器80端口来进行验证

``` bash
# Nginx
certbot certonly --nginx -d example.com
# Apache
certbot certonly --apache -d example.com
# 如果以上两者都不起作用您可以试试这个,但是用之前请确保Web服务器已经关闭
certbot certonly --standalone -d example.com
```

### DNS验证

DNS验证要求您去您的域名购买商那里解析相应的TXT DNS记录值以验证域名所有权

```bash
certbot -d example.com --manual --preferred-challenges dns certonly
```

### 自动续订

您可以配置证书自动续订以防止证书过期,您可以使用`sudo crontab -e`打开crontab来添加下面代码中自动续订的指令,该代码指的是每天晚上11点都会检查一遍SSL证书是否过期然后进行自动续订

部署成功后将会自动重启Nginx并应用新的SSL证书,您可以将`systemctl restart nginx`中的`nginx`更改为`apache`或`wings`

对更高级的用户来说,我们建议使用 [acme.sh](https://acme.sh)
它提供了更多更强大的功能

``` text
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

### 疑难解答

如果您在尝试访问面板或Wings时遇到`不安全连接`或SSL/TLS相关的错误时,有可能是您的SSL证书过期了,您可以通过更新SSL证书来解决,如果您的80端口正在被占用那就无法使用`certbot-renew`来完成自动续订

如果您运行的是Nginx,在运行Certbot并附带有`-nginx`时出现报错您可以先停止Nginx服务然后续订证书再启动Nginx,如果您在为Wings续订证书可以替换为`wings`

Stop Nginx:

```bash
systemctl stop nginx
```

续订证书:

```bash
certbot renew
```

在完成续订后请使用下面的命令来重启Nginx:

```bash
systemctl start nginx
```

:::
::: tab "方法2: acme.sh (DNS服务商为Cloudflare)"
该方法适合高级用户和无法开放80端口的用户, 下面的命令适用于Ubuntu和Cloudflare API,您可以查看[acme.sh的官方网站](https://github.com/Neilpang/acme.sh) 来获取相关说明

``` bash
curl https://get.acme.sh | sh
```

### 获取Cloudflare API密钥

在安装acme后我们需要获取Cloudflare的API密钥,请确保您的DNS记录指向您的节点(Cloudflare的控制台中云朵应该是灰色的),然后找到API密钥,在全局API密钥的选项中点击查看您的Cloudflare密钥

### 申请证书

由于配置文件基于Certbot,所以我们需要手动创建一个文件夹

```bash
sudo mkdir /etc/letsencrypt/live/example.com
```

安装acme之后执行它并获取Cloudflare的API密钥,然后输入Cloudflare的API凭据来生成证书

```bash
export CF_Key="Your_CloudFlare_API_Key"
export CF_Email="Your_CloudFlare_Account@example.com"

```

然后创建证书

```bash
acme.sh --issue --dns dns_cf -d "example.com" \
--key-file /etc/letsencrypt/live/example.com/privkey.pem \
--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem
```

### 自动续订

第一次运行脚本后,它将自动添加到crontab,您可以使用以下命令来编辑自动续订间隔

```bash
sudo crontab -e
```

:::
::::
