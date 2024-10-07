# CentOS 7
这份指南提供了在 CentOS 7 上安装 Pterodactyl Wings v1.X 的全面说明。

## 安装依赖项

```bash
## 安装 yum 工具
yum install -y yum-utils device-mapper-persistent-data lvm2

## 添加 docker 仓库
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

## 安装 docker
yum install -y docker-ce docker-ce-cli

## 启用 docker 服务
systemctl enable --now docker

# 配置防火墙
firewall-cmd --add-port 8080/tcp --permanent
firewall-cmd --add-port 2022/tcp --permanent
firewall-cmd --permanent --zone=trusted --change-interface=docker0
firewall-cmd --zone=trusted --add-masquerade --permanent
firewall-cmd --reload
```

## 安装 Wings
很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照[官方Wings安装文档进行操作](/wings/1.0/installing.html#启用虚拟内存)。
