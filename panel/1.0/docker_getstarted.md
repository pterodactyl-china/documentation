# 使用 Docker 搭建

翼龙面板运行在您自己的 Web 服务器上。为了运行和使用这个面板，您需要对您的服务器具有 root 访问权限。

您需要了解如何阅读文档以使用此面板。我们花了很多时间详细介绍如何安装或升级我们的软件；
所以你也要花点时间去阅读而不是复制粘贴，然后在事情不起作用时候而抱怨。
此面板不作为运行服务器的拖放服务存在。
这是一个高度复杂的系统，需要多个依赖项，并且使用搭建他的网站管理人员需要付出一些时间学习如何使用它。**如果您希望能够在不了解基本 linux 系统管理的情况下安装它，您现在应该停下来然后出门左拐。**

## 选择服务器操作系统

翼龙可在多种操作系统上运行，因此请选择最适合您使用的操作系统。

::: warning
Pterodactyl 不支持大多数 OpenVZ 系统，因为它与 Docker 不兼容。如果你计划在基于 OpenVZ 的系统上运行这个软件，你很可能不会成功。
:::

## 安装 Docker

如需快速安装 Docker 社区版，您可以执行以下命令：

::: code-tabs#shell

@tab 国际源

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
```

@tab:active 国内源

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash -s docker --mirror Aliyun
```

:::

如果您希望手动安装，请参考[官方 Docker 文档](https://docs.docker.com/engine/install/)了解如何在您的服务器上安装 Docker 社区版。

::: warning 检查你的内核
请注意，某些主机安装了不支持 docker 重要功能的修改内核。 请通过运行 `uname -r` 检查您的内核。 如果您的内核以 `-xxxx-grs-ipv6-64` 或 `-xxxx-mod-std-ipv6-64` 结尾，您可能使用的是不受支持的内核。 查看我们的 [内核修改](../../daemon/0.6/kernel_modifications.md) 指南了解详细信息。
:::

### 在启动时启动 Docker

如果您使用的是带有 systemd 的操作系统（Ubuntu 16+、Debian 8+、CentOS 7+），请运行以下命令以在您启动机器时启动 Docker。

```bash
systemctl enable --now docker
```

## 安装 Docker Compose

虽然 `yum` `apt` 有快速安装的软件包，但版本一般不是最新的。最新发行的版本地址：https://github.com/docker/compose/releases。

运行以下命令来下载 Docker Compose 的当前稳定版本：

::: code-tabs#shell

@tab 国际源

``` bash
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 将可执行权限应用于二进制文件并创建软链
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

@tab:active 国内源

``` bash
curl -L "https://ghfast.top/https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 将可执行权限应用于二进制文件并创建软链
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

:::

## 下载文件
在进行此步骤之前，我们要为 `docker-compose.yml` 创建一个放置目录。  
此过程的第一步是创建面板所在的文件夹，然后进入新创建的文件夹中。以下是如何执行此操作的示例。  
::: warning
以下命令使用的路径仅为示例，阁下大可自己自定义路径，但是我在此提醒您，若您不用我示例使用的路径，请务必记住自己设置的程序所在的目录，并在后续各种涉及到程序运行目录的地方灵活操作！
:::

``` bash
mkdir -p /var/www/pterodactyl
cd /var/www/pterodactyl
```

在为面板创建好它的放置目录后，我们将使用 `curl` 命令，从 Github 拉取翼龙中国汉化完成的 ` docker-compose.yml` 文件并赋予该文件的可执行权限。

::: code-tabs#shell

@tab 国际源

``` bash
curl -Lo docker-compose.yml https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml
# 将可执行权限应用于yml文件
chmod +x docker-compose.yml
```

@tab:active 国内源

``` bash
curl -Lo docker-compose.yml https://ghfast.top/https://raw.githubusercontent.com/pterodactyl-china/panel/1.0-develop/docker-compose.example.yml
# 将可执行权限应用于yml文件
chmod +x docker-compose.yml
```

:::

### 环境变量
当您不提供自己的 `.env` 文件时，有多个环境变量可以配置面板，有关每个可用选项的详细信息

在 `docker-compose.yml` 文件中可以设置，具体变量的详细信息可查看 在 [GitHub 仓库中提供的文档](https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md) 或查看 [Gitee 镜像仓库中提供的文档(可能不是最新的)](https://gitee.com/vlssu/pterodactyl-panel/blob/1.0-develop/.github/docker/README.md)

如果你想变更数据的存储目录，可以自行查看文件，如果你并不会或不懂，请不要更改

:::tip
请注意！`docker-compose.yml` 文件中 `APP_URL` 变量一定要修改成你实际访问到面板的外网地址。否则你在配置后端时会出错！  
如果想使用非 `80` 端口，比如你服务器IP为 `192.168.1.255` 端口为 `10000`,请在 `docker-compose.yml` 文件中 `services.panel.ports` 将 `80:80` 修改成 `10000:80`，并且 `APP_URL` 填写成 `http://192.168.1.255:10000`。
:::

## 部署运行

在设置完环境变量，我们就可以通过 Docker Compose 使用 `docker-compose.yml` 文件来启动面板了

``` bash
# 在后台执行该服务
# -d 参数是让该程序在后台执行，如果你需要排查错误等情况你可以去除该参数
docker-compose up -d
```

### 添加首位用户

您需要为面板创建一个管理用户，以便您可以登录面板。 为此，请运行以下命令。 并保证账户密码满足以下要求：8 个字符，大小写混合，至少一个数字。(此指令需在上文中含有 `docker-compose.yml` 的同级目录中执行）

``` bash
docker-compose exec panel php artisan p:user:make
```

现在，你已经全部设置完毕，直接输入你的网站地址，即可访问翼龙面板

#### 下一步：[Wings (后端) 安装](../../wings/1.0/installing.md)
