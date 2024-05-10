# CentOS 7
在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。

::: tip
本指南基于[官方安装文档](/wings/1.0/installing.md)，但专为 CentOS 7 量身定制。
:::

## 安装要求
我们要安装 Wings [所需依赖项](/wings/1.0/installing.md#依赖项)。

### Docker

```bash
## 安装 yum 工具
yum install -y yum-utils device-mapper-persistent-data lvm2

## 添加 docker 仓库
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

## 安装 docker
yum install -y docker-ce docker-ce-cli

## 启用 docker 服务
systemctl enable docker
systemctl start docker
```

### FirewallD 更改
```bash
firewall-cmd --add-port 8080/tcp --permanent
firewall-cmd --add-port 2022/tcp --permanent
firewall-cmd --permanent --zone=trusted --change-interface=docker0
firewall-cmd --zone=trusted --add-masquerade --permanent
firewall-cmd --reload
```

## 安装 Wings
很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照[官方Wings安装文档进行操作](/wings/1.0/installing.html#启用虚拟内存)。
