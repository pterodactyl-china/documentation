# Artisan CLI

Artisan CLI（命令行界面）是 Laravel 框架的一部分，翼龙正是基于该框架构建的。如果您遵循官方指南，Artisan 文件位于 `/var/www/pterodactyl` 中（具体位置为你安装的地方）。本指南介绍了更多翼龙特定/相关的 Artisan 命令，这些命令均以字母 `p` 为前缀（例如 `p:user:make`）。如果您想查看所有命令，可以通过运行：

```bash
php artisan list
```

要获取有关特定命令的信息，您可以运行以下命令：

```bash
php artisan help <command>
```

::: tip
为了简化本文档，在命令使用中您将看到类似以下内容：

`<hello-world>` - 必填参数

`[hello-world]` - 可选参数

`{--hello-world}` - 选项

:::

## 用户管理

运行以下任何命令时，您可以使用选项不提供任何内容将会有交互式提示。也可以提供部分的选项剩余部分也会通过交互式来提示。

### 创建用户

```bash
php artisan p:user:make {--email=user@example.com}
                        {--username=myusername}
                        {--name-first=My}
                        {--name-last=Name}
                        {--password=supersecret}
                        {--admin=1|0}
                        {--no-password}
```

### 删除用户

```bash
php artisan p:user:delete {--user=username/email/UUID}
```

### 禁用动态口令认证

::: warning
禁用动态口令认证只能作为用户恢复的最后手段。 **请谨慎使用。**
:::

```bash
php artisan p:user:disable2fa {--email=user@example.com}
```

## 服务器和节点管理

### 创建地域

```bash
php artisan p:location:make {--short=us1}
                            {--long="该地域的描述."}
```

### 删除地域

```bash
php artisan p:location:delete {--short=us1}
```

### 服务器电源管理

```bash
php artisan p:server:bulk-power <start, stop, kill, restart>
                                {--servers=1,2,3}
                                {--nodes=1,2,3}
```

## 面板管理

### 查看面板信息

```bash
php artisan p:info
```

显示各种面板信息，可用于检查数据库和电子邮箱等配置。

### 更新面板

```bash
php artisan p:upgrade   {--user=www-data}
                        {--group=www-data}
                        {--url=https://example.com/panel.tar.gz}
                        {--release=latest}
                        {--skip-download}
```

下载翼龙的新版本并执行正常的升级命令。
