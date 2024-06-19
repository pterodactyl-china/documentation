# 常见问题

## 日志获取

```bash
# 在面板所在服务器中执行以下命令，请注意将 /var/www/pterodactyl 替换为你网站的所在绝对位置
tail -n 150 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc pteropaste.com 99
# 在后端（wings）所在服务器中执行以下命令
sudo wings diagnostics
```

请在遇到错误时第一时间获取日志，如果需要提问请附上**相对应的网页截图**，最好将**F12控制台页也截图上！**

## 前端无法访问后端

::: tabs

@tab 跨域问题

前后端域名变更或前端地址与后端设置的前端地址不一致导致的。  
具体可以通过 F12控制台 来判断。

1. 前端域名变更需要将 `.env` 中的 `APP_URL` 修改为后端和你都能访问到的地址（一般为外网地址）
2. 将节点端 `/etc/pterodactyl/config.yml` 文件中 `remote` 值修改为前端 `.env` 中的 `APP_URL` 相同的值。或者你可以[进入节点配置页面重新执行自动部署](/community/config/nodes/add_node.html#配置节点)

最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。

``` bash
systemctl restart wings
```

@tab 端口问题

### 守护进程端口

检查节点界面，查看是绿色爱心还是红色爱心，如果是红色原因同下。  
检查节点的**关于**页面，是否有**守护进程版本、系统版本、总 CPU 线程**等信息是否有显示，如果没有则**守护进程端口**有问题，要么是端口被占用、防火墙关闭了此端口、服务商上游路由器中屏蔽、如果使用域名代替ip有可能是域名未过白名单。

### 守护进程 SFTP 端口

如果服务器在文件页面出现连接错误等信息可能是**守护进程 SFTP 端口**有问题，要么是端口被占用、防火墙关闭了此端口、服务商上游路由器中屏蔽（大概率，8080大部分服务商都会屏蔽）。  
所以请尝试其他端口。

:::

## 出现 500 Internal Server Error

如果服务器报错 500，且页面上没有任何其他内容，请查看 `storage/logs` 目录下是否有日志文件，如果没有，说明是您文件权限设置错误，请设置正确的文件权限 —— 755 权限。

如果有，请编辑 `.env` 文件，将 `APP_DEBUG` 这一项的值改为 `true`，保存退出后再次打开就能看到更详细的调试信息，读一读页面最顶上的报错应该就知道是什么问题了。

::: warning
解决报错后，请再次编辑 `.env` 文件，将 `APP_DEBUG` 这一项的值改为 `false`，否则可能泄露重要机密信息。
:::