# 旧版升级
本升级指南用于**从 0.7.X 升级到 1.3.x**。如果您尝试在 1.X 面板上进行升级，请[改用本指南](/panel/1.0/updating.md)。在此升级过程中，您将有一段时间面板处于不可用状态，但不会停止任何游戏服务器的运行，只是暂时无法执行操作。

## 进入维护模式
在开始之前，您需要通过运行下面的“down”命令将您的面板置于维护模式。这将防止用户遇到意外的错误，这样能确保用户在升级完成之前无法对面板进行任何操作。执行命令时，请确保您位于您的面板根目录中，列如 `/var/www/pterodactyl`。

``` bash
# 将面板置于维护模式并拒绝用户访问
php artisan down
```

## 更新依赖
在执行此升级之前，您需要确保您的系统依赖项是最新的。请参考以下列表以确保您拥有所有必需的版本。

* PHP `7.4`、`8.0` 或 `8.1`（推荐），带有以下扩展名：`cli`、`openssl`、`gd`、`mysql`、`PDO`、`mbstring` `tokenizer`、`bcmath `、`xml` 或 `dom`、`curl`、`zip` 和 `fpm` 如果你打算使用 NGINX。请参阅我们的 [升级 PHP指南](/guides/php_upgrade.md) 了解详细信息。
* Composer v2 (`composer self-update --2`)

::: warning Nginx
如果你升级你的 PHP 版本并且使用 nginx 作为你的网络服务器，你将不得不更新你的 nginx 的 `pterodactyl.conf` 配置中 `fastcgi_pass` 的值来使用正确的 `php-fpm` 套接字。
:::

* MySQL `5.7.22` 或更高版本（推荐 MySQL `8`） **或者** MariaDB `10.2` 或更高版本。

::: warning 请认真地仔细检查您的数据库版本
请确保您运行的是上面列出的正确版本 MariaDB 或 MySQL！ 否则，当您尝试迁移时，会导致你遇到本不应该出现的错误。

以前的文档（也就是以前的版本）可能让您安装了 MariaDB 10.1，而该版本的翼龙 _是无法使用的_。
:::

## 获取更新文件
更新过程的第一步是从 GitHub 下载新的面板文件。下面的命令将下载翼龙中国最新发布的版本，将其保存在当前目录中，并自动解压到您的当前文件夹中。现在您要确保位于翼龙根目录下，例如 `/var/www/pterodactyl` ，因为下面的命令会自动将存档解压到您当前的文件夹中。

我们将会删除 `app/` 目录。由于我们处理安装和升级的方式，删除的文件并不总是能被正确检测到，因此，轻易的在此位置上打包会导致一些迷惑行为。

::: tip 使用翼龙中国RC版程序
翼龙中国RC版 是在 翼龙官方上游仓库 develop 分支上实时同步 进行的汉化，包含了**翼龙官方和翼龙中国最新的功能更新/修复**，RC版的发行版都是没有问题的。若阁下想体验最新功能，则可使用以下命令下载RC版程序

``` bash
# 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。
# 这不会影响您的任何设置或服务器。
curl -L -o panel.tar.gz https://github.com/pterodactyl-china/panel/releases/latest/download/panel.tar.gz
# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 Fastgit 提供的国内反向代理来拉取
curl -Lo panel.tar.gz https://hub.fastgit.xyz/pterodactyl-china/panel/releases/latest/download/panel.tar.gz

rm -rf $(find app public resources -depth | head -n -1 | grep -Fv "$(tar -tf panel.tar.gz)")
# 下载更新文件并删除存档文件。
tar -xzvf panel.tar.gz && rm -f panel.tar.gz
```
:::

::: tip 使用翼龙中国稳定版程序
翼龙中国稳定版 是在 翼龙官方最新的发行版 基础上进行的汉化，若阁下喜欢稳定版，则可使用以下命令下载稳定版程序

``` bash
# 删除 app 目录是为了确保我们升级后不会导致文件显得杂乱无章。
# 这不会影响您的任何设置或服务器。
curl -L -o panel.tar.gz https://github.com/pterodactyl-china/pterodactyl-chinese-stable/releases/latest/download/panel.tar.gz
# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 Fastgit 提供的国内反向代理来拉取
curl -Lo panel.tar.gz https://hub.fastgit.xyz/pterodactyl-china/pterodactyl-china-stable/releases/latest/download/panel.tar.gz

rm -rf $(find app public resources -depth | head -n -1 | grep -Fv "$(tar -tf panel.tar.gz)")
# 下载更新文件并删除存档文件。
tar -xzvf panel.tar.gz && rm -f panel.tar.gz
```
:::

下载所有文件后，我们需要将缓存与存储目录上设置正确的权限，以避免与网络服务器出现相关的错误。

``` bash
chmod -R 755 storage/* bootstrap/cache
```

## 更新依赖
下载所有新文件后，您需要升级面板的核心组件。为此，只需运行以下命令并按照提示进行操作。

``` bash
composer install --no-dev --optimize-autoloader
```

## 清除编译后的模板缓存
您还需要清除已编译的模板缓存，以确保新的还有修改过的模板正确地显示给用户。

``` bash
php artisan view:clear
php artisan config:clear
```

## 数据库更新
您还需要为最新版本的翼龙更新数据库结构。运行下面的命令将更新结构并确保我们发布的默认预设是最新的（并添加我们可能发布的新预设）。请记住，_永远不要编辑我们发布的核心预设_！ 它们将被此更新过程所覆盖。

::: warning
如果您使用了允许在 `0.7` 版本上进行服务器传输的自定义插件，您必须**删除或重命名 `server_transfers` 表，然后再继续。
:::

``` bash
php artisan migrate --force
php artisan db:seed --force
```

## 设置权限
最后一步是将文件的所有者设置为您的网络服务器用户。在大多数情况下是 `www-data`，但可能因系统而异 &mdash; 有时是 `nginx`、`caddy`、`apache`，甚至是 `nobody`。

``` bash
# 如果使用 NGINX 或 Apache (并且不在CentOS上)
chown -R www-data:www-data *

# 如果在 CentOS 上使用 NGINX
chown -R nginx:nginx *

# 如果在 CentOS 上使用 Apache
chown -R apache:apache *
```

## 重启工作队列
_每次_ 更新后，您都应该重新启动工作队列程序，以确保新的代码已加载并使用。

``` bash
php artisan queue:restart
```

## 退出维护模式
现在升级已完成，退出维护模式，您的面板现在可以使用了。

```bash
# 恢复面板让其继续运行并提供服务
php artisan up
```

## 迁移至 Wings
我们已经弃用了旧的 Node.js 守护进程，转而支持 [Wings](https://github.com/pterodactyl-china/wings)，这是我们用 Go 编写的新服务器控制系统。这个新系统明显更快、更容易安装并且更小。您需要做的就是在您的系统上安装一个二进制文件并将其配置为开机自启。**您不能使用旧的 Node.js 守护进程来运行带有 翼龙面板 1.0 以上的服务器。**

有关详细说明，请阅读[迁移至 Wings](/wings/1.0/migrating.md)。
