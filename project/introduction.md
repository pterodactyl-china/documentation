# 介绍
Pterodactyl 是使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。
同时不忘进行安全性设计，Pterodactyl 在相互隔离的 Docker 容器中运行所有游戏服务器，
同时为管理员和用户提供直观的用户界面。你还在等什么？ 让您在您的游戏平台使用游戏服务器上有一等体验吧！

## 翼龙中国与翼龙官方的区别

|  **翼龙官方版**  |  **翼龙中国版**  |
|:--------------:|:--------------:|
|  ![GitHub Releases](https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=最新发布版本)  | ![GitHub Releases](https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&logo=appveyor&label=最新发布版本)  |
| [![GitHub Releases pre-releases](https://img.shields.io/github/v/tag/pterodactyl/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=最新预发布版本)](https://github.com/pterodactyl/panel/releases) | [![GitHub Releases pre-releases](https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=最新预发布版本)](https://github.com/pterodactyl-china/panel/releases) |
| [GitHub](https://github.com/pterodactyl/panel) | [GitHub](https://github.com/pterodactyl-china/panel) |
| 翼龙官方仓库 | 翼龙官方 `develop` 分支汉化 |

* 大量汉化（用户前端、管理后台、提示、报错、部署、预设、CLI-UI）
* Docker 镜像国内化 （预设汉化并使用我构建至国内的 Docker 镜像）
* Gravatar 切换至 Cravatar (国内进入后台时终于可以正常使用了！不用再卡住了)
* 增加备案号及公安备案的填写入口和显示
* 优化登录页的显示效果
* 登录页的logo以及用户视角下的左上方标题以及站点 favicon 可自定义化
* 让中国用户可以正常访问使用 reCAPTCHA 验证服务。
* 文档中文化，部署、更新、自定义都能简而易懂！
* 面板 Docker 中文汉化，不需要太多额外设置即可部署面板 (见[软件包](https://github.com/pterodactyl-china/panel/pkgs/container/panel)，[如何使用的说明点我](https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md))
* wings(后端)国内化，DNS、文字、编码(在解压中文压缩包时，不会再出现乱码的现象了！！！)
* 更多...

## 支持的游戏
我们通过使用 Docker 容器隔离每个实例来支持各种游戏，为您提供强大的功能
在全球范围内托管您的游戏，而不必让每台物理机器都因安装额外的依赖而变得臃肿。

我们支持的一些核心游戏包括:

* Minecraft（我的世界） — 包括 Spigot, Sponge, Bungeecord, Waterfall, 等....
* Rust （腐蚀）
* Terraria （泰拉瑞亚）
* Teamspeak
* Mumble
* Team Fortress 2 （军团要塞2）
* Counter Strike: Global Offensive （反恐精英：全球攻势）
* Garry's Mod （盖瑞的模组）
* ARK: Survival Evolved （方舟：生存进化）

除了我们支持的标准游戏预设外，我们的社区还在不断突破这个软件的极限
社区提供的游戏还有很多。其中一些游戏包括：

* Factorio （异星工厂）
* San Andreas: MP
* Pocketmine MP
* Squad （战术小队）
* FiveM
* Xonotic
* Discord ATLBot
* [更多...](https://github.com/parkervcp/eggs)

## 我们的安全职责
Pterodactyl 是完全开源的，因此给独立用户和服务器管理员完全开放我们的代码库来寻找安全漏洞。如果您发现任何可能导致安全漏洞的问题，请不要犹豫直接联系`support@pterodactyl.io`。我们要求您在反馈安全问题时，详细且负责并且**不要**在我们面向公众的错误跟踪器上报告它们，以防止漏洞滥用！
