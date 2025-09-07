# 构建面板资源

:::warning
**请勿在您的生产**节点上运行以下步骤。
:::

在 [BUILDING.md](https://github.com/pterodactyl-china/panel/blob/1.0-develop/BUILDING.md) 文件中也提供了有关如何构建面板的说明。

面板的前端是用 React 构建的。对源文件所做的任何更改都需要重新编译。
这也适用于样式表。以下部分解释了如何执行此操作。

## 安装依赖项

以下命令将安装必要的依赖项以构建面板资源。

构建工具需要 NodeJS，使用 yarn 作为包管理器。

::: tabs

@tab Ubuntu/Debian

```bash
# Ubuntu/Debian
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash - 
sudo apt install -y nodejs
```

# CentOS
curl -sL https://rpm.nodesource.com/setup_22.x | sudo -E bash -
sudo yum install -y nodejs yarn # CentOS 7
sudo dnf install -y nodejs yarn # CentOS 8, Rocky Linux 8, AlmaLinux 8
```

@tab CentOS 8, Rocky Linux 8, AlmaLinux 8

```bash
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo dnf install -y nodejs yarn
```

:::

安装所需的 JavaScript 软件包。

```bash
npm i -g yarn # 安装 Yarn

cd /var/www/pterodactyl
yarn # 安装面板构建依赖项
```

## 构建面板资源

以下命令将重建面板前端。 对于 NodeJS 版本 17 及更高版本，您必须在构建之前启用 `--openssl-legacy-provider` 选项。

```bash
cd /var/www/pterodactyl
export NODE_OPTIONS=--openssl-legacy-provider # 对于 NodeJS v17+
yarn build:production # 构建面板
```

您可以使用 `yarn run watch` 命令，可以几乎实时地查看更改进度，以便于开发。一旦您对此更改感到满意，可以使用前面提到的 `yarn build:production` 命令构建面板。
