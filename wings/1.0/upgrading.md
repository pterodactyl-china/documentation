# 升级 Wings

升级Wings并不困难，只需不到一分钟就可以完成。

## Wings 版本需求

每个翼龙面板版本要求的最低版本Wings都不相同，具体情况可参考下方图表，在大多数情况下Wings版本保持跟面板版本相匹配即可。

| 面板版本 | Wings版本 | 支持状况 |
| --------------- | --------------- | ----------- |
| 1.0.x         | 1.0.x         |           |
| 1.1.x         | 1.1.x         |           |
| 1.2.x         | 1.2.x         |           |
| 1.3.x         | 1.3.x         |           |
| 1.4.x         | 1.4.x         |           |
| 1.5.x         | 1.4.x         |           |
| 1.6.x         | 1.4.x         |           |
| 1.7.x         | 1.5.x         |           |
| 1.8.x         | 1.6.x         |           |
| 1.9.x         | 1.6.x         |           |
| 1.10.x        | 1.7.x         |           |
| **1.11.x**    | **1.11.x**    | ✅         |

*注意：Wings 没有 1.8.x、1.9.x 或 1.10.x 版本。*


首先，下载最新的 wings 二进制文件到 `/usr/local/bin`。您将需要短暂停止 Wings。 _您正在运行的服务器**不会**受到影响。_

::: code-tabs#shell

@tab 国际源

```bash
systemctl stop wings
curl -L -o /usr/local/bin/wings "https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
chmod u+x /usr/local/bin/wings
```

@tab:active 国内源

```bash
systemctl stop wings
curl -L -o /usr/local/bin/wings "https://ghfast.top/https://github.com/pterodactyl-china/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
chmod u+x /usr/local/bin/wings
```

:::

## 重启进程

最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。

``` bash
systemctl restart wings
```
