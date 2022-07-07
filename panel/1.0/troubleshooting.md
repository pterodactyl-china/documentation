# 疑难解答

[[toc]]

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
* 确保 Wings 已正确安装，并且节点服务器里的与面板中 `高级管理 -> 节点服务器 -> 守护进程设置` 下显示的配置相匹配。
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

恢复备份时，您应该_一起_恢复 `.env` 文件！里面包含了非常重要的加密密钥！！
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

## 防火墙的问题
如果您在 RHEL/CentOS 服务器上安装了 `firewalld`，这可能已经破坏了原有的 DNS 规则。

```
firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0
firewall-cmd --reload
```

上述命令运行后重新启动 `docker` 和 `wings` 以确保这些规则被系统应用。
