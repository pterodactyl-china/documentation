# 配置MySQL
[[toc]]


## 为Pterodactyl创建一个数据库
MySQL是Pterodactyl面板的一个核心组件，但如果你以前没有配置过MySQL，你可能会在配置的过程中感到混乱。
这是一个非常基本的教程，只会说明如何使用MySQL为面板配置好一个数据库。
如果你有兴趣学习更多关于MySQL的知识，可以在网上找到很多很好的教程。

### 登录
首先我们需要登录到MySQL的命令行，我们需要在此命令行执行一些语句来配置数据库。
登录到MySQL命令行十分简单，只需要输入下面的命令，然后提供安装MySQL时设置的root账户密码。
若没有设置密码，直接点击回车即可

``` bash
mysql -u root -p
```

### 创建新用户
为了安全和适应MySQL 5.7的改变，你需要为面板创建一个新用户，为了做到这一点，我们需要让MySQL知道关于这个数据库的信息

接下来，我们会创建一个名为`pterodactyl`的用户，并允许这个用户由localhost(127.0.0.1)登录，你也可以用`%`来允许所有ip登录或者输入一个数字ip。同样的，我们还会把密码设置为`somePassword`。

``` sql
# 记得要把 'somePassword' 设为这个账号独有的密码。
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'somePassword';
```

### 创建数据库
下一步, 我们需要为面板创建一个数据库. 在这个教程，我们会把数据库命名为 `panel`, 但你也可以将此数据库命名为其他名字。

``` sql
CREATE DATABASE panel;
```

### 分配权限
最后，我们需要让MySQL知道，pterodactyl用户有权限访问去访问此数据库。要做到这一点，我们只需要运行下面的命令。如果你还想吧这个MySQL用于面板上的数据库主机。你只需要在命令中加入 `WITH GRANT OPTION` (下面的命令已增加此选项)。如果你不打算把这个用户用作面板上的数据库主机，你可以删除这个选项。

``` sql
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

## 为节点创建一个数据库主机
:::提示
本节将会教你创建一个具有创建和修改用户权限的MySQL用户，这将允许面板为指定的伺服器创建数据库。
:::

### 创建新用户
如果你的数据库、前端和后端不是安装在同一台主机上，请确保ip地址为前端和后端的地址(或者直接使用通配符`%`)而不是`127.0.0.1`。 否则你会收到一个连接拒绝的错误。

```sql
# 记得要把 'pterodactyluser' 和 'somePassword' 设为这个账号独有的账号密码。
CREATE USER 'pterodactyluser'@'127.0.0.1' IDENTIFIED BY 'somepassword';
```

### 分配权限
下面的命令将使你新创建的用户具备创建其他用户、创建和销毁数据库的能力。记得把 `127.0.0.1` 换成跟上面指令同样的ip喔~

```sql
GRANT ALL PRIVILEGES ON *.* TO 'pterodactyluser'@'127.0.0.1' WITH GRANT OPTION;
```

### 允许外部访问数据库
你有可能需要让外部访问这个MySQL实例，我们需要修改`my.cnf`来达到这个目的，`my.cnf`档案位置取决于你的操作系统和安装方式，你可以通过`find /etc -iname my.cnf`命令来找到它。

打开 `my.cnf`档案在文件底部添加以下文字并保存:
```
[mysqld]
bind-address=0.0.0.0
```
重启MySQL/MariaDB以应用这些變更。在默认情况下，防火墻會攔截外部的請求，請於防火墻開放MySQL端口(默认为3306)的連接。

如果你的数据库和Wings在同一台机器上并且不需要外部访问，你也可以使用`docker0`接口的IP地址而不是`127.0.0.1`。这个IP地址可以通过运行`ip addr | grep docker0`指令找到，它可能看起来像`172.x.x.x`。
