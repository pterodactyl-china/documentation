# 介绍
Pterodactyl 是使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。
同时不忘进行安全性设计，Pterodactyl 在相互隔离的 Docker 容器中运行所有游戏服务器，
同时为管理员和用户提供直观的用户界面。你还在等什么？ 让您在您的游戏平台使用游戏服务器上有一等体验吧！

## 开发版与稳定版的区别

|  **官方版**  |  **稳定版**  |  **开发版**  |
|:--------------:|:--------------:|:--------------:|
|  ![GitHub Releases](https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=最新发布版本)  | ![GitHub Releases](https://img.shields.io/github/v/release/pterodactyl-china/pterodactyl-chinese-stable?style=for-the-badge&logo=appveyor&label=最新发布版本) | ![GitHub Releases](https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&logo=appveyor&label=最新发布版本)  |
|  |  | [![GitHub Releases pre-releases](https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=最新预发布版本)](https://github.com/pterodactyl-china/panel/releases) |
| [GitHub](https://github.com/pterodactyl/panel) | [GitHub](https://github.com/pterodactyl-china/pterodactyl-chinese-stable) | [GitHub](https://github.com/pterodactyl-china/panel) |
| 翼龙官方仓库 | 翼龙官方 `releases` 汉化 | 翼龙官方 `develop` 分支汉化 |

|  **区别** |  **说明** |  **稳定版**  |  **开发版**  |
|--------------|--------------|:--------------:|:--------------:|
| 实时性 | 开发版会实时同步 `develop` 分支 | :x: | :white_check_mark: |
| BUG修复 | 比如构建失误、错误以及危险漏洞等 | :white_check_mark: | :white_check_mark: |
| 更新/发布频繁程度 | 开发版发现汉化及影响体验的部分会及时更新，在同步上游并没有问题时会发布 `releases` | :x: | :white_check_mark: |
| 无缝迁移至中国版 | 开发版**可能**会比翼龙官方发布的 `releases` 提前更新部分依赖，需要执行一遍 `composer` 更新命令（但正常不会） | :white_check_mark: | :heavy_exclamation_mark: |
| 汉化完善度 | 开发版会经常根据社区反馈，进行汉化完善，在累计一定值会发布 `releases`（这也是更新频繁的原因） | :heavy_exclamation_mark: | :white_check_mark: |
| 本土化 | 比如验证、头像、资源加载地址等（两边基本上会同步更新） | :white_check_mark: | :white_check_mark: |

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
* San Andreas: MP （
* Pocketmine MP
* Squad （战术小队）
* FiveM
* Xonotic
* Discord ATLBot
* [更多...](https://github.com/parkervcp/eggs)

## 我们的安全职责
Pterodactyl 是完全开源的，因此给独立用户和服务器管理员完全开放我们的
代码库来寻找安全漏洞。如果您发现任何可能导致安全漏洞的问题，请不要
犹豫直接联系`support@pterodactyl.io`。我们要求您在反馈安全问题时，详细且负责
并且_不要_在我们面向公众的错误跟踪器上报告它们，以防止漏洞滥用！
