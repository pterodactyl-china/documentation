# 额外配置

[[toc]]

::: warning
这些是给 Wings 的额外配置,请小心进行配置否则您将有概率损坏 Wings
:::

您需要将 `config.yml` 放入 `/etc/pterodactyl` 文件夹然后重启Wings来应用更改设置,请确认您使用的格式是 Yaml ,您可以使用 [Yaml Lint](http://www.yamllint.com/) 这样在运行出错时,您就可以收到类似的错误

## 提供身份验证

在拉取 Docker 镜像时,您可以使用这些设置来对私有 Docker 进行身份验证

### 可用密钥

|   设置密钥  |    默认值      |    备注           |
| ----------- | :-----------: | ----------------- |
| name        |     null      | 认证地址  |
| username    |     null      | 认证用户名 |
| password    |     null      | 认证密码 |

### 使用示例

```yml
docker:
  registries:
    registry.example.com:
      username: "registryusername"
      password: "registrypassword"
```

## 自定义网络模式

您可以通过编辑网络模式来更改 Wings 所用 Docker 的网络模式;这通常默认设置为 `pterodactyl_nw`,例如,如果要启用 Docker 的主机模式请将网络模式更改为 `host`.

::: warning
更改网络模式为 `host` 将允许面板直接访问所有主机,面板用户可以绑定到任意的IP或端口(即使没有分配给用户服务器)您将会失去 Docker 网络隔离的保护,所以我们不建议您用于公共 IDC 出租时使用
:::

### 使用示例

```yml
docker:
  network:
    name: host
    network_mode: host
```

再更改后需要重新启动 Wings (可运行以下命令),您需要注意的是所有风险将由您自己承担!
`systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings`

## 使用 Cloudflare 代理

使用 Cloudflare 代理 Wings 并没有什么用,因为用户依旧会直连主机，而中间的 Cloudflare 并没有起什么作用,所以您的服务器 IP 仍会被公开

如果需要启动 Cloudflare 代理您必须将 Wings 端口更改为启用缓存的 Cloudflare 的 HTTPS 端口 `8443`(更多信息 [访问这里](https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/)),因为 Cloudflare 只支持 8080 端口的 HTTP 协议,您可以在管理页面那里进行更改此端口，在 Cloudflare 中使用 完全SSL 时，请确保设置为 "未使用CDN"，然后到 Cloudflare DNS记录设置页将您 FQDN 旁边的橙色云启用。

有个问题在于,如果你不购买 Cloudflare 的 `企业` 套餐,那么就不能代理 SFTP 端口

## 容器 PID 限制

您可以通过更改 `container_pid_limit` 值来更改在任何给定时刻可在容器中运行的进程总数。默认值为`512`。
您可以将其设置为 `0` 以完全禁用限制。但是！不推荐这样做，因为该限制可以防止节点的恶意过载。
重新启动 wings 和你的游戏服务器以应用新的限制。

### 使用示例

```yml
docker:
  ...
  container_pid_limit: 512
  ...
```

## 流量限制

您可以使用以下设置来设置流量限制

| 设置内容        | 默认值 | 备注                                                                                                                         |
| :-------------------- | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| enabled               |     true      | 是否启用流量限制                                                                                   |
| lines                 |     2000      | 给定时间内可输出的总行数,达到上限将调用 line_reset_interval                                  |
| maximum_trigger_count |       5       | 在服务器停止之前可触发限制的次数                                                   |
| line_reset_interval   |      100      | 重置行数时间(可为0)                                                          |
| decay_interval        |     10000     | 在不触发限制的情况下等待的时间                           |
| stop_grace_period     |      15       | 如果服务器触发限制,则服务器在强制终止前可以停止的时间                  |
| write_limit           |       0       | 对磁盘 I/O 的限制,设置0为无限,单位为 MiB/s |
| download_limit        |       0       | 设置网络 I/O 限制,设置0为无限,单位为 MiB/s    |

### 使用示例

```yml
throttles:
  enabled: true
  lines: 2000
  maximum_trigger_count: 5
  line_reset_interval: 100
  decay_interval: 10000
  stop_grace_period: 15
```

## 安装限制

设置安装程序容器限制可以帮助服务器安装时无意义的消耗资源,可以和服务器定义的限制一起使用,但在安装实例时会议最高值为基准

| 设置项 | 默认值 | 备注                                                                                                       |
| :---------- | :-----------: | ----------------------------------------------------------------------------------------------------------- |
| memory      |     1024      | 安装容器时可以使用的最大内存 |
| cpu         |      100      | 安装容器时可以使用的最大 CPU 使用率      |

### 使用示例

```yml
installer_limits:
  memory: 1024
  cpu: 100
```

## 其他内容

还有更多可以配置 Wings 的选项和说明 [您可点我查看](https://github.com/pterodactyl-china/wings/tree/develop/config)

| 设置项                | 默认值 | 备注                                                                                           |
| -------------------------- | :-----------: | ----------------------------------------------------------------------------------------------- |
| debug                      |     false     | 强制 Wings 在 Debug 模式运行                                                                |
| tmpfs_size                 |      100      | 挂载实例到 `/tmp` 目录的大小限制                              |
| websocket_log_count        |      150      | 在控制台中显示的行数                                                   |
| detect_clean_exit_as_crash |     true      | 如果服务器没有在交互的情况下意外停止将会标记为已崩溃 |
| (crash detection) timeout  |      60       | 服务器崩溃自动重启持续时间     |
| app_name                   | "Pterodactyl" | 更改Wings的名称,该项将会显示在面板的控制台中                               |
| check_permissions_on_boot  |     true      | 每次启动时将会检查所有文件的权限,如果您的服务器文件过多请禁用!|
