import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,g as r,o as l}from"./app-D-Jeu5AB.js";const o={};function i(n,e){return l(),a("div",null,e[0]||(e[0]=[r('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h1><p>Pterodactyl 是使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。 同时不忘进行安全性设计，Pterodactyl 在相互隔离的 Docker 容器中运行所有游戏服务器， 同时为管理员和用户提供直观的用户界面。你还在等什么？ 让您在您的游戏平台使用游戏服务器上有一等体验吧！</p><h2 id="翼龙中国与翼龙官方的区别" tabindex="-1"><a class="header-anchor" href="#翼龙中国与翼龙官方的区别"><span>翼龙中国与翼龙官方的区别</span></a></h2><table><thead><tr><th style="text-align:center;"><strong>翼龙官方版</strong></th><th style="text-align:center;"><strong>翼龙中国版</strong></th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&amp;logo=appveyor&amp;label=最新发布版本" alt="GitHub Releases"></td><td style="text-align:center;"><img src="https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&amp;logo=appveyor&amp;label=最新发布版本" alt="GitHub Releases"></td></tr><tr><td style="text-align:center;"><a href="https://github.com/pterodactyl/panel/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/v/tag/pterodactyl/panel?display_name=tag&amp;include_prereleases&amp;style=for-the-badge&amp;logo=appveyor&amp;label=最新预发布版本" alt="GitHub Releases pre-releases"></a></td><td style="text-align:center;"><a href="https://github.com/pterodactyl-china/panel/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&amp;include_prereleases&amp;style=for-the-badge&amp;logo=appveyor&amp;label=最新预发布版本" alt="GitHub Releases pre-releases"></a></td></tr><tr><td style="text-align:center;"><a href="https://github.com/pterodactyl/panel" target="_blank" rel="noopener noreferrer">GitHub</a></td><td style="text-align:center;"><a href="https://github.com/pterodactyl-china/panel" target="_blank" rel="noopener noreferrer">GitHub</a></td></tr><tr><td style="text-align:center;">翼龙官方仓库</td><td style="text-align:center;">翼龙官方 <code>develop</code> 分支汉化</td></tr></tbody></table><ul><li>大量汉化（用户前端、管理后台、提示、报错、部署、预设、CLI-UI）</li><li>Docker 镜像国内化 （预设汉化并使用我构建至国内的 Docker 镜像）</li><li>Gravatar 切换至 Cravatar (国内进入后台时终于可以正常使用了！不用再卡住了)</li><li>增加备案号及公安备案的填写入口和显示</li><li>优化登录页的显示效果</li><li>登录页的logo以及用户视角下的左上方标题以及站点 favicon 可自定义化</li><li>让中国用户可以正常访问使用 reCAPTCHA 验证服务。</li><li>文档中文化，部署、更新、自定义都能简而易懂！</li><li>面板 Docker 中文汉化，不需要太多额外设置即可部署面板 (见<a href="https://github.com/pterodactyl-china/panel/pkgs/container/panel" target="_blank" rel="noopener noreferrer">软件包</a>，<a href="https://github.com/pterodactyl-china/panel/blob/1.0-develop/.github/docker/README.md" target="_blank" rel="noopener noreferrer">如何使用的说明点我</a>)</li><li>wings(后端)国内化，DNS、文字、编码(在解压中文压缩包时，不会再出现乱码的现象了！！！)</li><li>更多...</li></ul><h2 id="支持的游戏" tabindex="-1"><a class="header-anchor" href="#支持的游戏"><span>支持的游戏</span></a></h2><p>我们通过使用 Docker 容器隔离每个实例来支持各种游戏，为您提供强大的功能 在全球范围内托管您的游戏，而不必让每台物理机器都因安装额外的依赖而变得臃肿。</p><p>我们支持的一些核心游戏包括:</p><ul><li>Minecraft（我的世界） — 包括 Spigot, Sponge, Bungeecord, Waterfall, 等....</li><li>Rust （腐蚀）</li><li>Terraria （泰拉瑞亚）</li><li>Teamspeak</li><li>Mumble</li><li>Team Fortress 2 （军团要塞2）</li><li>Counter Strike: Global Offensive （反恐精英：全球攻势）</li><li>Garry&#39;s Mod （盖瑞的模组）</li><li>ARK: Survival Evolved （方舟：生存进化）</li></ul><p>除了我们支持的标准游戏预设外，我们的社区还在不断突破这个软件的极限 社区提供的游戏还有很多。其中一些游戏包括：</p><ul><li>Factorio （异星工厂）</li><li>San Andreas: MP</li><li>Pocketmine MP</li><li>Squad （战术小队）</li><li>FiveM</li><li>Xonotic</li><li>Discord ATLBot</li><li><a href="https://pterodactyleggs.com" target="_blank" rel="noopener noreferrer">更多...</a></li></ul><h2 id="我们的安全职责" tabindex="-1"><a class="header-anchor" href="#我们的安全职责"><span>我们的安全职责</span></a></h2><p>Pterodactyl 是完全开源的，因此给独立用户和服务器管理员完全开放我们的代码库来寻找安全漏洞。如果您发现任何可能导致安全漏洞的问题，请不要犹豫直接联系<code>support@pterodactyl.io</code>。我们要求您在反馈安全问题时，详细且负责并且<strong>不要</strong>在我们面向公众的错误跟踪器上报告它们，以防止漏洞滥用！</p>',13)]))}const c=t(o,[["render",i],["__file","introduction.html.vue"]]),m=JSON.parse('{"path":"/project/introduction.html","title":"介绍","lang":"zh-CN","frontmatter":{"description":"介绍 Pterodactyl 是使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。 同时不忘进行安全性设计，Pterodactyl 在相互隔离的 Docker 容器中运行所有游戏服务器， 同时为管理员和用户提供直观的用户界面。你还在等什么？ 让您在您的游戏平台使用游戏服务器上有一等体验吧！ 翼龙中国与翼龙官方的区别 大量汉化（用户前端、...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/project/introduction.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"介绍"}],["meta",{"property":"og:description","content":"介绍 Pterodactyl 是使用 PHP、React 和 Go 构建的开源游戏服务器管理面板。 同时不忘进行安全性设计，Pterodactyl 在相互隔离的 Docker 容器中运行所有游戏服务器， 同时为管理员和用户提供直观的用户界面。你还在等什么？ 让您在您的游戏平台使用游戏服务器上有一等体验吧！ 翼龙中国与翼龙官方的区别 大量汉化（用户前端、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=最新发布版本"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-29T18:38:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-29T18:38:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍\\",\\"image\\":[\\"https://img.shields.io/github/v/release/pterodactyl/panel?style=for-the-badge&logo=appveyor&label=最新发布版本\\",\\"https://img.shields.io/github/v/release/pterodactyl-china/panel?style=for-the-badge&logo=appveyor&label=最新发布版本\\",\\"https://img.shields.io/github/v/tag/pterodactyl/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=最新预发布版本\\",\\"https://img.shields.io/github/v/tag/pterodactyl-china/panel?display_name=tag&include_prereleases&style=for-the-badge&logo=appveyor&label=最新预发布版本\\"],\\"dateModified\\":\\"2024-11-29T18:38:26.000Z\\",\\"author\\":[]}"]]},"git":{"createdTime":1532409445000,"updatedTime":1732905506000,"contributors":[{"name":"Dane Everitt","username":"Dane Everitt","email":"dane@daneeveritt.com","commits":2,"url":"https://github.com/Dane Everitt"},{"name":"Jeremy Guinn","username":"Jeremy Guinn","email":"jrguinn@mtu.edu","commits":1,"url":"https://github.com/Jeremy Guinn"},{"name":"AreYouScared","username":"AreYouScared","email":"sir3lit@gmail.com","commits":1,"url":"https://github.com/AreYouScared"},{"name":"Leon","username":"Leon","email":"64979109+ItsLeon15@users.noreply.github.com","commits":1,"url":"https://github.com/Leon"},{"name":"Alex","username":"Alex","email":"admin@softwarenoob.com","commits":1,"url":"https://github.com/Alex"},{"name":"ilworkcn","username":"ilworkcn","email":"1061372739@qq.com","commits":2,"url":"https://github.com/ilworkcn"},{"name":"飒爽师叔","username":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":12,"url":"https://github.com/飒爽师叔"},{"name":"Leroy Barile","username":"Leroy Barile","email":"100848181+HarukaB@users.noreply.github.com","commits":1,"url":"https://github.com/Leroy Barile"},{"name":"Daniel Barton","username":"Daniel Barton","email":"danielb@purpleflaghosting.com","commits":1,"url":"https://github.com/Daniel Barton"}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"project/introduction.md","localizedDate":"2018年7月24日","autoDesc":true}');export{c as comp,m as data};
