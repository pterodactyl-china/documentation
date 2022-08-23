# 额外配置

[[toc]]

::: warning
这些是给Wings的额外配置,请小心进行配置否则您将有概率损坏Wings
:::

您需要将 `config.yml` 放入 `/etc/pterodactyl` 文件夹然后重启Wings来应用更改设置,请确认您使用的格式是 [Yaml](http://www.yamllint.com/) 这样在运行出错时,您就可以收到类似的错误

## 提供身份验证

在拉取Docker镜像时,您可以使用这些设置来对私有Docker注册进行身份验证

### 可用密钥

|   设置密钥  |    默认值      |    备注           |
| ----------- | :-----------: | ----------------- |
| name        |     null      | 认证地址  |
| username    |     null      | 认证用户名 |
| password    |     null      | 认证密码 |

### 样例

```yml
docker:
  registries:
    registry.example.com:
      username: "registryusername"
      password: "registrypassword"
```

## 自定义网络模式

您可以通过编辑网络模式来更改Wings所用Docker的网络模式;这通常默认设置为 `pterodactyl_nw`,例如,如果要启用Docker的主机模式请将网络模式更改为 `host`.

::: warning
更改网络模式为 `host` 将允许面板直接访问所有机器,面板用户可以绑定到任意的IP或端口(即使没有分配给用户服务器实例)您将会失去Docker网络隔离的保护,所以我们不建议您用于公共IDC出租时使用
:::

### 样例

```yml
docker:
  network:
    name: host
    network_mode: host    
```

再更改后需要重新启动Wings(可运行以下命令),您需要注意的是所有风险将由您自己承担!
`systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings`

## 使用Cloudflare代理

使用Cloudflare代理Wings没有什么用,因为用户依旧会直连机器中间Cloudflare并没有起什么作用,所以呢您的服务器IP仍会被公开

如果需要启动Cloudflare代理您必须将Wings端口更改为Cloudflare的HTTPS端口8443,因为Cloudflare只支持8080端口的HTTP协议,您可以在面板那里进行更改

有个问题在于,如果你不购买Cloudflare的企业套餐,那么就不能代理SFTP端口

## 流量限制

您可以使用以下设置来设置流量限制

| 设置内容        | 默认值 | 备注                                                                                                                         |
| :-------------------- | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| enabled               |     true      |是否启用流量限制                                                                                   |
| lines                 |     2000      | 给定时间内可输出的总行数,达到上限将调用line_reset_interval                                  |
| maximum_trigger_count |       5       | 在服务器实例停止之前可触发限制的次数                                                   |
| line_reset_interval   |      100      | 重置行数时间(可为0)                                                          |
| decay_interval        |     10000     | 在不触发限制的情况下等待的时间                           |
| stop_grace_period     |      15       | 如果服务器实例触发限制,则服务器实例在强制终止前可以停止的时间                  |
| write_limit           |       0       | 对磁盘I/O的限制,设置0为无限,单位:MByte/s |
| download_limit        |       0       | 设置网络I/O限制,设置0为无限,单位:MByte/s    |
| container_pid_limit   |      256      | 容器可以处于活动状态并防止节点恶意加载进程    |

### Example of usage

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
设置安装程序容器限制可以帮助服务器实例安装时无意义的消耗资源,可以和服务器实例定义的限制一起使用,但在安装实例时会议最高值为基准

| 设置项          | 默认值 | 备注                                                       |
| :-------------------- | :-----------: | ----------------------------------------------------------------------------------------------------------- |
| memory                |     1024      | 安装实例时可以使用的最大内存 |
| cpu                   |     100       | 安装实例时最大的CPU使用功率      |

### 样例

```yml
installer_limits:
  memory: 1024
  cpu: 100
```

## 其他内容

还有更多可以配置Wings的选项和说明 [您可点我查看](https://github.com/pterodactyl/wings/tree/develop/config)

| 设置项                | 默认值 | 备注                                                                                           |
| -------------------------- | :-----------: | ----------------------------------------------------------------------------------------------- |
| debug                      |     false     | 强制Wings在Debug模式运行                                                                |
| tmpfs_size                 |      100      | 挂载实例到/tmp目录的大小限制                              |
| websocket_log_count        |      150      | 在控制台中显示的行数                                                   |
| detect_clean_exit_as_crash |     true      | 如果服务器实例没有在交互的情况下意外停止将会标记为已崩溃 |
| (crash detection) timeout  |      60       | 服务器崩溃自动重启持续时间     |
| app_name                   | "Pterodactyl" | 更改Wings的名称,该项将会显示在面板的控制台中                               |
| check_permissions_on_boot  |     true      | 每次启动时将会检查所有文件的权限,如果您的服务器实例文件过多请禁用!|
