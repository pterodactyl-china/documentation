(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{415:function(a,t,s){"use strict";s.r(t);var e=s(48),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"其他配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[a._v("#")]),a._v(" 其他配置")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#备份"}},[a._v("备份")]),s("ul",[s("li",[s("a",{attrs:{href:"#使用本地备份"}},[a._v("使用本地备份")])]),s("li",[s("a",{attrs:{href:"#使用-s3-备份"}},[a._v("使用 S3 备份")])])])]),s("li",[s("a",{attrs:{href:"#反向代理设置"}},[a._v("反向代理设置")]),s("ul",[s("li",[s("a",{attrs:{href:"#nginx-特定配置"}},[a._v("NGINX 特定配置")])]),s("li",[s("a",{attrs:{href:"#cloudflare-特定配置"}},[a._v("Cloudflare 特定配置")])])])]),s("li",[s("a",{attrs:{href:"#recaptcha"}},[a._v("reCAPTCHA")]),s("ul",[s("li",[s("a",{attrs:{href:"#配置-recaptcha"}},[a._v("配置 reCAPTCHA")])]),s("li",[s("a",{attrs:{href:"#禁用-recaptcha"}},[a._v("禁用 reCAPTCHA")])])])]),s("li",[s("a",{attrs:{href:"#动态口令认证"}},[a._v("动态口令认证")]),s("ul",[s("li",[s("a",{attrs:{href:"#禁用动态口令认证"}},[a._v("禁用动态口令认证")])]),s("li",[s("a",{attrs:{href:"#为特定用户禁用动态口令认证"}},[a._v("为特定用户禁用动态口令认证")])])])]),s("li",[s("a",{attrs:{href:"#遥测"}},[a._v("遥测")]),s("ul",[s("li",[s("a",{attrs:{href:"#它是如何工作的"}},[a._v("它是如何工作的？")])]),s("li",[s("a",{attrs:{href:"#收集什么数据"}},[a._v("收集什么数据？")])]),s("li",[s("a",{attrs:{href:"#数据是如何存储的"}},[a._v("数据是如何存储的？")])]),s("li",[s("a",{attrs:{href:"#为什么"}},[a._v("为什么？")])]),s("li",[s("a",{attrs:{href:"#启用遥测"}},[a._v("启用遥测")])]),s("li",[s("a",{attrs:{href:"#禁用遥测"}},[a._v("禁用遥测")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[a._v("#")]),a._v(" 备份")]),a._v(" "),s("p",[a._v("翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。")]),a._v(" "),s("p",[a._v("当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。\n在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。")]),a._v(" "),s("h3",{attrs:{id:"使用本地备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用本地备份"}},[a._v("#")]),a._v(" 使用本地备份")]),a._v(" "),s("p",[a._v("默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，这种备份存储方式可以在 "),s("code",[a._v(".env")]),a._v(" 文件中通过以下配置明确设置。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将你的面板设置为通过 Wings 使用本地存储进行备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wings\n")])])]),s("p",[a._v("请注意，当通过 Wings 使用本地存储时，备份的目的地是在 Wings 的 "),s("code",[a._v("config.yml")]),a._v(" 中设置的，设置内容如下。")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("system")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("backup_directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /path/to/backup/storage\n")])])]),s("h3",{attrs:{id:"使用-s3-备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-s3-备份"}},[a._v("#")]),a._v(" 使用 S3 备份")]),a._v(" "),s("p",[a._v("AWS S3（或兼容的存储）可以用来存储远程或基于云的备份。必须在 "),s("code",[a._v(".env")]),a._v(" 文件中设置以下配置选项或作为环境变量，以便启用它。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将你的面板设置为使用 s3 进行备份")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s3\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 实际使用 s3 的信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_DEFAULT_REGION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_BACKUPS_BUCKET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),s("p",[a._v("对于某些配置，你可能需要将你的 S3 URL 从 "),s("code",[a._v("bucket.domain.com")]),a._v(" 改为 "),s("code",[a._v("domain.com/bucket")]),a._v("。为了达到这个目的，在你的 "),s("code",[a._v(".env")]),a._v(" 文件中添加 "),s("code",[a._v("AWS_USE_PATH_STYLE_ENDPOINT=true")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"分段上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分段上传"}},[a._v("#")]),a._v(" 分段上传")]),a._v(" "),s("p",[a._v("S3 备份使用 S3 分段上传功能。在极少数情况下，您可能需要调整单个分段大小或生成的预签名 URL 的生命周期。")]),a._v(" "),s("p",[a._v("默认分段大小为 5GB，默认预签名 URL 生命周期为 60 分钟。您可以使用 "),s("code",[a._v("BACKUP_MAX_PART_SIZE")]),a._v(" 环境变量配置最大分段尺寸。\n您必须以字节为单位指定大小。 要定义预签名 URL 的生命周期，请使用 "),s("code",[a._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),a._v(" 变量。预期单位是分钟。")]),a._v(" "),s("p",[a._v("以下 "),s("code",[a._v(".env")]),a._v(" 片段配置 1GB 部分并使用 120 分钟作为预签名 URL 生命周期：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BACKUP_MAX_PART_SIZE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1073741824")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("120")]),a._v("\n")])])]),s("h4",{attrs:{id:"存储类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储类"}},[a._v("#")]),a._v(" 存储类")]),a._v(" "),s("p",[a._v("如果您需要指定存储类，请使用 "),s("code",[a._v("AWS_BACKUPS_STORAGE_CLASS")]),a._v(" 环境变量。默认选项是 "),s("code",[a._v("STANDARD")]),a._v("（S3 标准）。")]),a._v(" "),s("p",[a._v("以下 "),s("code",[a._v(".env")]),a._v(" 片段将类设置为 "),s("code",[a._v("STANDARD_IA")]),a._v("（这是一个示例）。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# STANDARD_IA 就是一个例子。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_BACKUPS_STORAGE_CLASS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("STANDARD_IA\n")])])]),s("h2",{attrs:{id:"反向代理设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理设置"}},[a._v("#")]),a._v(" 反向代理设置")]),a._v(" "),s("p",[a._v("在反向代理后面运行 Pterodactyl 时，例如 "),s("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cloudflare 的灵活 SSL"),s("OutboundLink")],1),a._v(" 或 Nginx/Apache/Caddy 等，您将需要对面板进行快速修改，以确保一切按预期继续工作。\n默认情况下，当使用这些反向代理时，您的面板将无法正确处理请求。\n您很可能无法登录或在浏览器控制台中看到安全警告，因为它试图加载不安全的资源。\n这是因为面板用来确定如何生成链接的内部逻辑认为它是通过 HTTP 而不是通过 HTTPS 运行的。")]),a._v(" "),s("p",[a._v("您需要编辑面板根目录中的 "),s("code",[a._v(".env")]),a._v(" 文件以至少包含 "),s("code",[a._v("TRUSTED_PROXIES=*")]),a._v("。\n我们强烈建议提供特定的 IP 地址（或以英文逗号分隔的 IP 列表），而不是允许使用 "),s("code",[a._v("*")]),a._v("。例如，如果您的代理与服务器在同一台机器上运行，那么类似  "),s("code",[a._v("TRUSTED_PROXIES=127.0.0.1")]),a._v(" 之类的东西很可能适合您。")]),a._v(" "),s("h3",{attrs:{id:"nginx-特定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-特定配置"}},[a._v("#")]),a._v(" NGINX 特定配置")]),a._v(" "),s("p",[a._v("为了使翼龙正确响应 NGINX 反向代理，NGINX "),s("code",[a._v("location")]),a._v(" 配置必须包含以下内容：")]),a._v(" "),s("div",{staticClass:"language-Nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Real"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("IP "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("For "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_redirect")]),a._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_buffering")]),a._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nproxy_request_buffering off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"cloudflare-特定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-特定配置"}},[a._v("#")]),a._v(" Cloudflare 特定配置")]),a._v(" "),s("p",[a._v("如果您使用 Cloudflare 的灵活 SSL，您应该设置 "),s("code",[a._v("TRUSTED_PROXIES")]),a._v(" 以包含 "),s("a",{attrs:{href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"}},[a._v("他们的 IP 地址"),s("OutboundLink")],1),a._v("。以下是如何设置的示例。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")])])]),s("h2",{attrs:{id:"recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recaptcha"}},[a._v("#")]),a._v(" reCAPTCHA")]),a._v(" "),s("p",[a._v("面板使用隐形 reCAPTCHA 来保护登录页面免受暴力攻击。如果登录尝试被认为可疑，则可能会要求用户执行 reCAPTCHA 质询。")]),a._v(" "),s("h3",{attrs:{id:"配置-recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-recaptcha"}},[a._v("#")]),a._v(" 配置 reCAPTCHA")]),a._v(" "),s("p",[a._v("虽然我们默认提供全局 Site Key 和 Secret Key，但我们强烈建议您根据自己的设置更改它。")]),a._v(" "),s("p",[a._v("您可以在 "),s("a",{attrs:{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("reCAPTCHA 管理控制台"),s("OutboundLink")],1),a._v(" 中生成自己的密钥。")]),a._v(" "),s("p",[a._v("然后可以使用管理面板中的设置来应用这些密钥。reCAPTCHA 设置可以在"),s("strong",[a._v("高级")]),a._v("选项卡上找到。")]),a._v(" "),s("h3",{attrs:{id:"禁用-recaptcha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用-recaptcha"}},[a._v("#")]),a._v(" 禁用 reCAPTCHA")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("安全警告")]),a._v(" "),s("p",[a._v("我们不建议禁用 reCAPTCHA。这是一种安全机制，使对用户帐户执行暴力攻击时变得更加困难。")])]),a._v(" "),s("p",[a._v("如果用户在登录时遇到问题，或者您的面板没有暴露在互联网上，禁用 reCAPTCHA 是有意义的。")]),a._v(" "),s("p",[a._v("使用管理面板可以轻松禁用 reCAPTCHA。在设置中，选择"),s("strong",[a._v("高级")]),a._v("选项卡并将 reCAPTCHA 的"),s("strong",[a._v("状态")]),a._v("设置为"),s("strong",[a._v("禁用")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("如果您无法访问面板，导致改不了这部分的设置，你也可以在翼龙面板的根目录下的 "),s("code",[a._v(".env")]),a._v(" 文件中，设置环境变量中去禁用 reCAPTCHA。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("RECAPTCHA_ENABLED=false\n")])])])]),a._v(" "),s("h4",{attrs:{id:"编辑你的数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑你的数据库"}},[a._v("#")]),a._v(" 编辑你的数据库")]),a._v(" "),s("p",[a._v("如果您无法访问面板，可以使用以下命令直接修改数据库。")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'false'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::recaptcha:enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"动态口令认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态口令认证"}},[a._v("#")]),a._v(" 动态口令认证")]),a._v(" "),s("p",[a._v("如果可能，您应该使用面板更新您的动态口令认证设置。如果您出于某种原因无法访问您的面板，您可以使用以下步骤。")]),a._v(" "),s("h3",{attrs:{id:"禁用动态口令认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用动态口令认证"}},[a._v("#")]),a._v(" 禁用动态口令认证")]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::pterodactyl:auth:2fa_required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"为特定用户禁用动态口令认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为特定用户禁用动态口令认证"}},[a._v("#")]),a._v(" 为特定用户禁用动态口令认证")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("/var/www/pterodactyl")]),a._v(" (这里指翼龙所在的目录) 目录中运行以下命令。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("php artisan p:user:disable2fa\n")])])]),s("h2",{attrs:{id:"遥测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遥测"}},[a._v("#")]),a._v(" 遥测")]),a._v(" "),s("p",[a._v("从 1.11 开始，Panel 收集有关 Panel 和所有连接节点的匿名指标。\n此功能默认启用，但可以禁用。")]),a._v(" "),s("p",[a._v("此功能收集的数据不会出售或用于广告目的。 出于改进软件的目的，可能会公开或与第三方共享汇总统计数据。")]),a._v(" "),s("h3",{attrs:{id:"它是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的"}},[a._v("#")]),a._v(" 它是如何工作的？")]),a._v(" "),s("p",[a._v("遥测系统首先为 Panel 安装生成随机 UUIDv4 标识符。\n此标识符存储在数据库中，因此对多个 Panel 实例进行负载平衡的人仍然可以拥有唯一的标识符。 然后将该标识符连同相关遥测数据发送到远程服务器。 遥测数据每 24 小时收集一次，没有持续收集或本地存储遥测数据，我们在将数据发送到远程服务器之前立即收集数据。")]),a._v(" "),s("p",[a._v("目前，所有遥测收集逻辑都由面板上的 "),s("a",{attrs:{href:"https://github.com/pterodactyl/panel/blob/1.0-develop/app/Services/Telemetry/TelemetryCollectionService.php#L53",target:"_blank",rel:"noopener noreferrer"}},[a._v("TelemetryCollectionService"),s("OutboundLink")],1),a._v(" 处理。 该服务负责收集发送到远程服务器的所有数据。")]),a._v(" "),s("h3",{attrs:{id:"收集什么数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收集什么数据"}},[a._v("#")]),a._v(" 收集什么数据？")]),a._v(" "),s("p",[a._v("如果您希望查看收集到的完整数据，请查看 TelemetryCollectionService（如上链接），或使用 "),s("code",[a._v("php artisan p:telemetry")]),a._v(" 命令查看将发送到远程服务器的确切数据。")]),a._v(" "),s("p",[a._v("截至 2022-12-12，收集的数据包括：")]),a._v(" "),s("ul",[s("li",[a._v("面板的唯一标识符")]),a._v(" "),s("li",[a._v("面板的版本")]),a._v(" "),s("li",[a._v("PHP 版本")]),a._v(" "),s("li",[a._v("备份存储驱动程序（S3、本地等）")]),a._v(" "),s("li",[a._v("缓存驱动程序（Redis、Memcached 等）")]),a._v(" "),s("li",[a._v("数据库驱动程序和版本（MySQL、MariaDB、PostgreSQL 等）")]),a._v(" "),s("li",[a._v("资源\n"),s("ul",[s("li",[a._v("分配\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[a._v("已使用的分配总数（分配给服务器）")])])]),a._v(" "),s("li",[a._v("备份\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[a._v("备份存储的总字节数")])])]),a._v(" "),s("li",[a._v("预设\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[s("s",[a._v("使用该预设的服务器数量的映射")]),a._v("（在 1.11.2 中已删除）")])])]),a._v(" "),s("li",[a._v("位置\n"),s("ul",[s("li",[a._v("总数")])])]),a._v(" "),s("li",[a._v("挂载点\n"),s("ul",[s("li",[a._v("总数")])])]),a._v(" "),s("li",[a._v("预设组\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[s("s",[a._v("使用该预设组中预设的服务器数量的映射")]),a._v("（在 1.11.2 中已删除）")])])]),a._v(" "),s("li",[a._v("节点\n"),s("ul",[s("li",[a._v("总数")])])]),a._v(" "),s("li",[a._v("服务器\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[a._v("已暂停的服务器数量")])])]),a._v(" "),s("li",[a._v("用户\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[a._v("管理员用户数量")])])])])]),a._v(" "),s("li",[a._v("节点\n"),s("ul",[s("li",[a._v("节点 UUID")]),a._v(" "),s("li",[a._v("节点上 Wings 的版本")]),a._v(" "),s("li",[a._v("Docker\n"),s("ul",[s("li",[a._v("版本")]),a._v(" "),s("li",[a._v("Cgroups\n"),s("ul",[s("li",[a._v("驱动程序")]),a._v(" "),s("li",[a._v("版本")])])]),a._v(" "),s("li",[a._v("容器\n"),s("ul",[s("li",[a._v("总数")]),a._v(" "),s("li",[a._v("运行中")]),a._v(" "),s("li",[a._v("暂停中")]),a._v(" "),s("li",[a._v("已停止")])])]),a._v(" "),s("li",[a._v("存储\n"),s("ul",[s("li",[a._v("驱动程序")]),a._v(" "),s("li",[a._v("文件系统")])])]),a._v(" "),s("li",[a._v("runc\n"),s("ul",[s("li",[a._v("版本")])])])])]),a._v(" "),s("li",[a._v("系统\n"),s("ul",[s("li",[a._v("架构（"),s("code",[a._v("amd64")]),a._v("、"),s("code",[a._v("arm64")]),a._v(" 等）")]),a._v(" "),s("li",[a._v("CPU 线程数")]),a._v(" "),s("li",[a._v("内存字节数")]),a._v(" "),s("li",[a._v("内核版本")]),a._v(" "),s("li",[a._v("操作系统（Debian、Fedora、RHEL、Ubuntu 等）")]),a._v(" "),s("li",[a._v("操作系统类型（bsd、linux、windows 等）")])])])])])]),a._v(" "),s("h3",{attrs:{id:"数据是如何存储的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据是如何存储的"}},[a._v("#")]),a._v(" 数据是如何存储的？")]),a._v(" "),s("p",[a._v("目前，数据存储在 Cloudflare 中，我们使用 Worker 提取所有遥测数据，该 Worker 进行基本处理（例如验证），然后将其插入 Cloudflare D1。 目前，收集到的任何数据都没有 API 或可视化，只能手动查询。 目前只有 Matthew 能够查询数据，但我们正在研究替代方案，以使这些数据更易于访问。")]),a._v(" "),s("h3",{attrs:{id:"为什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么"}},[a._v("#")]),a._v(" 为什么？")]),a._v(" "),s("p",[a._v("收集这些数据的主要原因是帮助我们对该软件的未来做出更好的决策。 随着 1.11 的发布，最低 PHP 版本要求从 7.4 跃升至 8.0，但是，我们希望添加一项需要 PHP 8.1 的功能，这会使版本要求跃升并可能给某些用户带来问题。 通过收集这些数据，我们有望更深入地了解此类变化将如何影响社区，并在未来做出更好的决策。 这对于架构、内核版本和正在使用的操作系统节点等信息尤为重要。 例如，我们想利用仅存在于某些文件系统中的功能，但我们不知道有多少人在使用这些文件系统，因此我们无法确定是否值得为此付出努力。")]),a._v(" "),s("p",[a._v("有些数据对决策没有那么有用，但对我们了解仍然有用。\n例如，您有没有想过有多少个 Panel 实例？ 所有这些实例运行了多少台服务器？ 有多少用户在使用面板？ 这些用户中有多少是管理员？ 有多少台服务器在使用特定的预设？ 有多少服务器正在使用特定的预设组？\n所有这些问题都可以通过我们收集的数据来回答，并且可以帮助我们和社区更好地了解软件的使用方式。")]),a._v(" "),s("p",[a._v("如果您对我们收集的数据有任何疑问，请随时在 Discord 上联系我们。\n我们的目标是尽可能透明，并且我们希望确保社区理解我们在做什么以及为什么这样做。")]),a._v(" "),s("h3",{attrs:{id:"启用遥测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用遥测"}},[a._v("#")]),a._v(" 启用遥测")]),a._v(" "),s("p",[a._v("默认情况下启用遥测，如果您想在禁用它后启用它，请编辑您的 "),s("code",[a._v(".env")]),a._v(" 文件并删除 "),s("code",[a._v("PTERODACTYL_TELEMETRY_ENABLED")]),a._v(" 行，或将其设置为 "),s("code",[a._v("true")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("PTERODACTYL_TELEMETRY_ENABLED=true\n")])])]),s("p",[a._v("您还可以使用 "),s("code",[a._v("php artisan p:environment:setup")]),a._v(" 命令启用遥测，可添加 "),s("code",[a._v("--telemetry")]),a._v(" 参数来进行非交互式设置。")]),a._v(" "),s("h3",{attrs:{id:"禁用遥测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用遥测"}},[a._v("#")]),a._v(" 禁用遥测")]),a._v(" "),s("p",[a._v("要禁用遥测，请编辑您的 "),s("code",[a._v(".env")]),a._v(" 文件并将 "),s("code",[a._v("PTERODACTYL_TELEMETRY_ENABLED")]),a._v(" 设置为 "),s("code",[a._v("false")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("PTERODACTYL_TELEMETRY_ENABLED=false\n")])])]),s("p",[a._v("您还可以使用 "),s("code",[a._v("php artisan p:environment:setup")]),a._v(" 命令禁用遥测，可添加 "),s("code",[a._v("--telemetry=false")]),a._v(" 参数来进行非交互式设置。")])])}),[],!1,null,null,null);t.default=r.exports}}]);