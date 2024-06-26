# 服务器间迁移

## 面板迁移

对于面板来说，没有那么多步骤及要求。

按照[官方安装文档](/panel/1.0/getting_started)在新的服务器中安装全新面板后，按照以下步骤。

1. 数据库迁移

你只需要将你**源服务器**中的 MySQL 数据库导出，导入到**目标服务器**的数据库中，当然，如果你是外置数据库那就不需要了，具体情况看你。  
需要注意的是**目标服务器**数据库版本要大于等于**源服务器**的数据库版本。

2. `.env` 文件迁移

将**源服务器** `.env` 中的 `APP_KEY` 值复制下来，替换到**目标服务器**中的 `.env` 里即可。

## Wings (后端)迁移

1. 在新服务器中参照 [官方安装文档](/wings/1.0/installing) 安装全新的Wings后，按照以下步骤。

2. 迁移Wings数据库，将 `/var/lib/pterodactyl` 中的 wings.db 传到**目标服务器**相同的位置。

3. 将守护程序服务器文件、备份等数据一并传到**目标服务器**相同的位置。如果你在创建节点时全部默认并未改变服务器文件存储目录，那只需将 `/var/lib/pterodactyl` 文件夹传到**目标服务器**就可以结束迁移。  
但如果你改过，比如我将所有数据都改到了 `/data/pterodactyl` 目录下，那你就应该在**第二步**的基础上迁移 `/data/pterodactyl` 目录。

4. 你可以选择将 `/etc/pterodactyl/config.yml` 传到**目标服务器**相同的位置
。也可以选择[进入节点配置页面重新执行自动部署](/community/config/nodes/add_node.html#配置节点)

::: tip
对于服务器迁移数据确实是一个头疼的问题，我这推荐一个迁移方案。在**源服务器**上执行以下命令。

```bash
apt install rsync -y

# 你需要将 root@192.168.0.10 替换为你的目标服务器 `用户@ip`，/data/pterodactyl/ 替换为对应的目录
rsync -r --info=progress2 --partial /data/pterodactyl/ root@192.168.0.10:/data/pterodactyl/
```

:::
