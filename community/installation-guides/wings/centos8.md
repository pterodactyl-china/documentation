# CentOS 8, Rocky Linux 8, AlmaLinux 8
在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。

::: tip
本指南基于[官方安装文档](/wings/1.0/installing.md)，但专为 Enterprise Linux 8 量身定制。
:::

## 安装要求
我们要安装 Wings [所需依赖项](/wings/1.0/installing.md#依赖项)。

### Docker

```bash
## 安装 yum 工具
dnf install -y dnf-utils device-mapper-persistent-data lvm2

## 添加 docker 仓库
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo

## 安装 docker
dnf install -y docker-ce --nobest

## 启用 docker 服务
systemctl enable docker
systemctl start docker
```

### FirewallD 更改
```bash
firewall-cmd --add-port 8080/tcp --permanent
firewall-cmd --add-port 2022/tcp --permanent
firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0
firewall-cmd --zone=trusted --add-masquerade --permanent
firewall-cmd --reload
```

## 安装 Wings
很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照[官方Wings安装文档进行操作](/wings/1.0/installing.html#启用虚拟内存)。

::: tip
如果你启用了 SELinux 强制执行，并且你的容器收到 AVC 拒绝，尝试将你的 Wings 数据目录从 `/var/lib/pterodactyl` 移动到 `/var/srv/containers/pterodactyl`。这是目标策略期望 Docker 从中读取和写入数据的地方。
:::
