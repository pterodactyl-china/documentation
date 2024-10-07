# Enterprise Linux 8 和 Fedora Server 40
这份指南提供了在 CentOS 8、Rocky Linux 8、AlmaLinux 8 和 Fedora Server 40 上安装 Pterodactyl Wings v1.X 的全面说明。

## 安装依赖项

```bash
# 安装所需的软件包
sudo dnf install -y dnf-utils device-mapper-persistent-data lvm2

# 添加 docker 仓库 (Enterprise Linux 8)
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
# 添加 docker 仓库 (Fedora Server 40)
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

## 安装 docker
sudo dnf install -y docker-ce docker-ce-cli containerd.io

## 启用 docker 服务
systemctl enable --now docker

# 配置防火墙
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
