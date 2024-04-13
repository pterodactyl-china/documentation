# 配置 MySQL
[[toc]]


## 为翼龙创建数据库
MySQL 是翼龙面板的核心组件，但如果你以前没有配置过 MySQL，你可能会在配置的过程中感到混乱。这是一个非常基础的教程，只说明如何使用 MySQL 为面板配置好一个数据库。如果你有兴趣学习更多关于 MySQL 的知识，可以在网上找到很多很好的教程。

### 登录
首先我们需要登录到 MySQL 的命令行，我们需要在此命令行执行一些语句来配置数据库。登录到 MySQL 命令行十分简单，只需要输入下面的命令，然后提供安装 MySQL 时设置的 root 账户密码。若没有设置密码，您很可能只需按 Enter (回车) 键，因为没有设置密码

``` bash
mysql -u root -p
```

### 创建用户
为了安全和适应 MySQL 5.7 的改变，你需要为面板创建一个新用户，为了做到这一点，我们需要让 MySQL 知道 mysql 数据库信息。

接下来，我们会创建一个名为 `pterodactyl` 的用户，并允许从 localhost 登录，你也可以用 `%` 来允许所有IP登录或者输入数字IP。同样的，我们还将密码设置为 `somePassword`。

``` sql
# 记得将下面的 'somePassword' 设为特定于此账号的独有密码。
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'somePassword';
```

### 创建数据库
接下来, 我们需要为面板创建一个数据库. 在本教程中，我们会把数据库命名为 `panel`, 但你也可以将此数据库命名为其他名字。

``` sql
CREATE DATABASE panel;
```

### 分配权限
最后，我们需要让 MySQL 知道，翼龙用户有权限访问去访问此数据库。要做到这一点，我们只需要运行下面的命令。

``` sql
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1';
```

## 为节点创建数据库主机
:::tip
本节介绍如何创建一个具有创建和修改用户权限的 MySQL 用户，这允许面板在给定主机上创建每个服务器的数据库。
:::

### 创建用户
如果您的数据库与面板或者守护进程安装在不同的主机上，请确保使用面板运行的主机IP地址(或者直接使用通配符 `%`)而不是 `127.0.0.1`。 否则你会收到一个连接拒绝的错误。

```sql
# 记得把 'pterodactyluser' 和 'somePassword' 设为独有的账号密码。
CREATE USER 'pterodactyluser'@'127.0.0.1' IDENTIFIED BY 'somepassword';
```

### 分配权限
下面的命令将使你新创建的用户具备创建其他用户，以及创建和销毁数据库的能力。如上所述，确保 `127.0.0.1` 换成跟上面命令中使用的 IP 地址同样喔~

```sql
GRANT ALL PRIVILEGES ON *.* TO 'pterodactyluser'@'127.0.0.1' WITH GRANT OPTION;
```

### 允许外部访问数据库
你有可能需要允许外部访问这个 MySQL 实例，以便允许服务器连接到它。要做到这一点，我们需要修改 `my.cnf` 来达到这个目的，它的位置取决于你的操作系统和 MySQL 安装方式，你可以输入 `find /etc -iname my.cnf` 来找到它。

打开 `my.cnf`，将下面的文本添加到文件底部并保存：
```
[mysqld]
bind-address=0.0.0.0
```
重启 MySQL/MariaDB 以应用这些变化。这将覆盖默认的 MySQL 配置，在默认情况下，它只接受来自 localhost 的请求。更新这个将允许所有接口的连接，因此也允许外部连接。请确保在你的防火墙中允许 MySQL 端口（默认为3306）。

如果你的数据库和 Wings 在同一台主机上，并且不需要外部访问，你也可以使用 `docker0` 接口的IP地址而不是 `127.0.0.1`。这个IP地址可以通过运行 `ip addr | grep docker0` 找到，它可能看起来像 `172.x.x.x`。
