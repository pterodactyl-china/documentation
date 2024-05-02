# 常见问题

## 跨域问题

前后端域名变更或前端地址与后端设置的前端地址不一致导致的。  
具体可以通过 F12控制台 来判断。

1. 前端域名变更需要将 `.env` 中的 `APP_URL` 修改为后端和你都能访问到的地址（一般为外网地址）
2. 将节点端 `/etc/pterodactyl/config.yml` 文件中 `remote` 值修改为前端 `.env` 中的 `APP_URL` 相同的值。或者你可以[进入节点配置页面重新执行自动部署](/community/config/nodes/add_node.html#配置节点)

最后，重启 wings 进程。正在运行的服务器不会受到影响，与实例的连线将会自动重新连接。
``` bash
systemctl restart wings
```