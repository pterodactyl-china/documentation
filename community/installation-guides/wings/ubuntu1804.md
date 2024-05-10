# Ubuntu 18.04
在本指南中，我们将安装 Wings v1.X（包括它的所有依赖项）并配置使用 SSL 为其提供服务。

::: tip
本指南基于[官方安装文档](/wings/1.0/installing.md)，但专为 Ubuntu 18.04 量身定制。
:::

## 安装要求
我们要安装 Wings [所需依赖项](/wings/1.0/installing.md#依赖项)。

### Docker

```bash
## 安装 docker
apt install -y docker.io

## 启用 docker 服务
systemctl enable docker
systemctl start docker
```

## 安装 Wings
很好，现在所有的依赖项和防火墙规则都已经处理完毕。接下来，请按照[官方Wings安装文档进行操作](/wings/1.0/installing.html#启用虚拟内存)。
