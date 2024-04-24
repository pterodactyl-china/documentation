# 疑难解答

## 阅读错误日志
如果您在面板中遇到意外错误，你要做的第一件事就是提取日志。
如果你要查看这些日志，只需执行下面的命令，该命令将输出面板日志文件的最后 100 行内容。

``` bash
# 请注意你的面板位置
tail -n 100 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log
```

### 分析错误内容
当你运行上面的命令时，你可能会被一大堵信息吓到，其实你不用害怕它，这只是一个导致错误原因的堆栈跟踪，在寻找错误原因时，您实际上可以忽略几乎所有内容。让我们看一下下面的一些示例输出，它已被截断以使其更易于理解。

```
#70 /srv/www/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(116): Illuminate\Foundation\Http\Kernel->sendRequestThroughRouter(Object(Illuminate\Http\Request))
#71 /srv/www/public/index.php(53): Illuminate\Foundation\Http\Kernel->handle(Object(Illuminate\Http\Request))
#72 {main}
[2018-07-19 00:50:24] local.ERROR: ErrorException: file_put_contents(/srv/www/storage/framework/views/c9c05d1357df1ce4ec8fc5df78c16c493b0d4f48.php): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122
Stack trace:
#0 [internal function]: Illuminate\Foundation\Bootstrap\HandleExceptions->handleError(2, 'file_put_conten...', '/srv/www/vendor...', 122, Array)
#1 /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(122): file_put_contents('/srv/www/storag...', '<?php $__env->s...', 0)
#2 /srv/www/vendor/laravel/framework/src/Illuminate/View/Compilers/BladeCompiler.php(122): Illuminate\Filesystem\Filesystem->put('/srv/www/storag...', '<?php $__env->s...')
#3 /srv/www/vendor/laravel/framework/src/Illuminate/View/Engines/CompilerEngine.php(51): Illuminate\View\Compilers\BladeCompiler->compile('/srv/www/resour...')
#4 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(142): Illuminate\View\Engines\CompilerEngine->get('/srv/www/resour...', Array)
#5 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(125): Illuminate\View\View->getContents()
```

您要做的第一件事就是沿着数字链向上直到找到 `#0`，这是触发异常的函数。在第 0 行的正上方，您会看到一行括号中包含日期和时间，例如上面的 `[2018-07-19 00:50:24]`。这一行将是人类读的异常信息，您可以根据时间线来了解它为什么出现了问题。

### 理解错误
在上面的示例中，我们可以看到实际的错误是：

```
local.ERROR: ErrorException: file_put_contents(...): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122
```

从这个错误中我们可以确定执行 [file_put_contents()](http://php.net/manual/en/function.file-put-contents.php) 调用时出错，错误是我们不打开文件，因为权限被拒绝了。如果您根本不了解这些错误也没关系，但如果您能够提供这些日志，它确实可以帮助您更快获得翼龙官方的帮助，因为这些至少能找到错误的根源。
有时错误非常简单，它会告诉您究竟出了什么问题，例如当面板无法连接到守护程序时会引发 `ConnectionException`。

### 利用GREP
如果你想快速解决一堆错误，你可以使用下面的命令将返回的结果限制为仅实际错误的一行，而不是所有的堆栈跟踪。

``` bash
tail -n 1000 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | grep "\[$(date +%Y)"
```

## 无法连接到服务器的错误信息
### 基本的调试步骤
* 检查 Wings 是否正在运行，且没有报错。使用 `systemctl status wings` 来检查进程的当前状态。
* 按 `Ctrl + Shift + J`（在 Chrome 中）或 `Cmd + Alt + I`（在 Safari 中）检查浏览器的控制台。如果其中有一个红色错误，它可能会缩小潜在问题的范围。
* 确保 Wings 已正确安装，并且节点里的与面板中 `高级管理 -> 节点 -> 配置` 下显示的配置相匹配。
* 检查 Wings 端口是否在防火墙上打开。Wings 的 HTTP(s) 使用的端口是 `8080` 或 `8443`，对与 SFTP 使用的是 `2022` 端口。(当然这些事默认的，如果你改了的话就不是这些了)
* 确保您已为面板和 Wings 使用的域名禁用了黑名单或加入了白名单。
* 检查面板是否可以使用面板上配置的域名访问到 Wings。在面板所在的服务器上运行 `curl https://domain.com:8080` 来确保它可以成功连接到 Wings 。
* 确保您为面板和 Wings 使用正确的 HTTP 模式。如果面板在 HTTPS 上运行，Wings 也需要在 HTTPS 上运行。

### 更多的高级调试步骤
* 停止 Wings 并运行 `wings --debug` 来查看是否输出一些错误信息。如果有是需要人工去解决它们的，或通过 [Discord](https://discord.gg/pterodactyl) 联系翼龙官方以获得更多帮助(需要用英文去交流)。
* 使用诸如 `nslookup` 或 `dig` 之类的工具来检查您的 DNS 是否响应你所期望的内容。
* 如果您使用 CloudFlare，请确保为您的 Wings 或面板的 `A` 记录禁用代理。
* 在有防火墙的时候使用 Wings（pfSense、OpenSwitch 等）时，请确保设置了正确的 NAT 设置，以便从外部网络能够访问 Wing 的端口。
* 如果按照上面说的排查过了话没有任何效果，请检查您自己的 DNS 设置并考虑切换 DNS 服务器，至于怎么切换请自行在网络上查阅。
* 当在一台服务器上同时运行面板和 Wings 时，如果在 `/etc/hosts` 中添加一个将公共 IP 引导回服务器的条目，有时会有所帮助。有时也需要反向路径，因此您可能需要在服务器的 `/etc/hosts` 文件中添加一个条目，将面板的域名指向正确的 IP。
* 在使用相同适配器的不同 VM(虚拟机) 上运行 Wings 和面板时，请确保 VM(虚拟机) 可以相互连接。可能需要混杂模式。

## 无效的 MAC 异常
::: warning
如果您正确遵循我们的安装和升级指南，则永远不会发生此错误。我们唯一一次看到此错误发生是当您盲目地从备份中恢复面板数据库并尝试使用全新安装的面板的时候。

恢复备份时，您应该 _一起_ 恢复 `.env` 文件！里面包含了非常重要的加密密钥！！
:::

有时在使用面板时，您会意外地遇到一个损坏的页面，并且在检查日志时，您会看到一个异常，也就是在解密时会提到了一个无效的 MAC。此错误是由 `.env` 文件中的 `APP_KEY` 不匹配引起的。

如果您看到此错误，唯一的解决方案是从您的 `.env` 文件中恢复 `APP_KEY` 环境变量。如果您丢失了原始密钥，则无法恢复丢失的数据，也就是说你再也找不到原始数据了，从头再来吧。

## SELinux 的问题
在安装了 SELinux 的系统上，运行 redis 或尝试连接到守护程序以执行操作时，您可能会遇到意外错误。这些问题通常可以通过执行以下命令来解决，以允许这些程序与 SELinux 一起工作。
 
### Redis 的权限错误
``` bash
audit2allow -a -M redis_t
semodule -i redis_t.pp
```

### Wings 的连接错误
``` bash
audit2allow -a -M http_port_t
semodule -i http_port_t.pp
```

## 容器无法上网？可能是 DNS 问题！
现在，Wings 已经成功运行，并且您在“节点”页面上看到了绿色的心形标志，位于 `/etc/pterodactyl/config.yml` 的 Wings 配置文件将有新的值。其中一个值是 DNS，它默认为 `1.1.1.1` 和 `1.0.0.1` (但我们构建的 wings 默认为 `1.0.0.1`、`223.5.5.5`、`8.8.8.8`、`114.114.114.114`)。如果您使用的是阻止 Cloudflare DNS 的主机，您将需要使用不同的 DNS 服务器；通常是与您的主机系统相同的 DNS 服务器。您可以通过多种方式查看主机使用的 DNS 服务器，具体取决于您的操作系统如何处理网络。如果其中一种方法不起作用，请尝试另一种方法。
```bash
# Network Manager（这将显示您的 IPV4 DNS 和 IPV6 DNS 服务器，以防您想要将主机的 IPV6 DNS 服务器添加到您的 Wings 配置中。
nmcli -g ip4.dns,ip6.dns dev show
# Systemd-Resolve（适用于 Ubuntu 18.04 和 20.04）
systemd-resolve --status
# Resolve-CTL（适用于较新版本的 Ubuntu）
resolvectl status
# 可能包含主机系统 DNS 服务器的原始文件位置，适用于各种发行版
/etc/resolv.conf
/etc/network/interfaces
```
如果返回的 DNS 服务器与 `1.1.1.1` 和 `1.0.0.1` 不同，您需要编辑 wings 的 `config.yml` 文件，以使用从命令返回的 DNS 服务器。如果您看到的输出除了 IPV4 DNS 服务器外还包含类似 IPV6 地址的内容，请确保将其放在 IPV6 部分而不是 IPV4 部分。明确地说，如果您必须使用不同于默认的 DNS 服务器，请确保从 wings 配置中删除 `1.1.1.1` 和 `1.0.0.1`；不要只是添加新的服务器，而是替换旧的服务器。

## 调度排错
* 检查队列管理器的日志 ``journalctl -xeu pteroq``
* 重启 pteroq ``systemctl restart pteroq``
* 清除调度缓存 ``php /var/www/pterodactyl/artisan schedule:clear-cache``
* 检查您的 PHP 版本 - 支持最高到 8.1 ``php -v``
* 使用 <https://crontab.guru/> 检查您的 crontab 语法 - 确保它能够达到您预期的行为
* 验证问题是否与调度有关，而不是您设置的任务（将调度中的第一个任务设置为您知道在控制台中打印消息的内容，例如，在 Minecraft 服务器的控制台中运行 ``say test``，如果控制台成功显示文本"test"，则将第一个任务- 设置为 ``say test``，以便您知道它是否运行）
* 您的任务是否有偏差？确保您使用的是面板的最新版本。在版本 1.11.5 （中国版的 1.11.4.0）中，修复了调度在错误时间运行的问题。或者，您可能设置了错误的时区。确保您的时区都匹配。
  * 系统时区 ``timedatectl``
  * 面板时区 ``nano /var/www/pterodactyl/.env``
  * Wings 时区（作为 TZ 环境变量传递给容器，与调度无关，但在检查时区时，您也可以设置这个） ``nano /etc/pterodactyl/config.yml``
* 检查存储调度的数据库 - 默认为 MariaDB
  * ``systemctl status mariadb`` - 如果未激活，``journalctl -xeu mariadb``
* 检查队列处理程序 - 默认为 Redis
  * ``systemctl status redis`` - 如果未激活，``journalctl -xeu redis``（在某些发行版中，服务的名称将是 ``redis-server``）
* 检查面板错误 ``tail -n 150 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc pteropaste.com 99``

## 防火墙的问题
如果您在 RHEL/CentOS 服务器上安装了 `firewalld`，这可能已经破坏了原有的 DNS 规则。

```
firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0
firewall-cmd --reload
```

上述命令运行后重新启动 `docker` 和 `wings` 以确保这些规则被系统应用。

## 时间的问题
你需要通过 `data` 命令检查你的服务器时间和[官方原子钟时间](https://time.is/Beijing)是否一致。

```bash {3}
timedatectl set-timezone Asia/Shanghai
apt install ntpdate -y
ntpdate -u ntp.aliyun.com
```

::: warning
如果你同步时发现返回 `no server suitable for synchronization found` ,那可能是上游机房设置的防火墙里面禁止了NTP协议流量的流入，所以你需要询问机房可以同步的NTP服务器是什么，并替换上面的 `ntp.aliyun.com`。  
当然，如果你有使用ikuai等软路由，可以去ikuai的系统设置中将NTP服务、自动对时等打开，然后将其替换成网关IP（如：`192.168.1.1`）。
:::

最后再设置定时任务，确保你的服务器时间误差不要超过10秒。

```bash
echo "*/20 * * * * /usr/sbin/ntpdate -u ntp.aliyun.com >/dev/null &" >> /var/spool/cron/root
```