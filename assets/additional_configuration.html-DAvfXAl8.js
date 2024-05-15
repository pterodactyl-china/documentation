import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as s}from"./app-BJQLG3NG.js";const l={},i=s(`<h1 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h1><h2 id="备份" tabindex="-1"><a class="header-anchor" href="#备份"><span>备份</span></a></h2><p>翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。</p><p>当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。 在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。</p><h3 id="使用本地备份" tabindex="-1"><a class="header-anchor" href="#使用本地备份"><span>使用本地备份</span></a></h3><p>默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，这种备份存储方式可以在 <code>.env</code> 文件中通过以下配置明确设置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将你的面板设置为通过 Wings 使用本地存储进行备份</span>
<span class="token assign-left variable">APP_BACKUP_DRIVER</span><span class="token operator">=</span>wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，当通过 Wings 使用本地存储时，备份的目的地是在 Wings 的 <code>config.yml</code> 中设置的，设置内容如下。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">system</span><span class="token punctuation">:</span>
  <span class="token key atrule">backup_directory</span><span class="token punctuation">:</span> /path/to/backup/storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-s3-备份" tabindex="-1"><a class="header-anchor" href="#使用-s3-备份"><span>使用 S3 备份</span></a></h3><p>AWS S3（或兼容的存储）可以用来存储远程或基于云的备份。必须在 <code>.env</code> 文件中设置以下配置选项或作为环境变量，以便启用它。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将你的面板设置为使用 s3 进行备份</span>
<span class="token assign-left variable">APP_BACKUP_DRIVER</span><span class="token operator">=</span>s3

<span class="token comment"># 实际使用 s3 的信息</span>
<span class="token assign-left variable">AWS_DEFAULT_REGION</span><span class="token operator">=</span>
<span class="token assign-left variable">AWS_ACCESS_KEY_ID</span><span class="token operator">=</span>
<span class="token assign-left variable">AWS_SECRET_ACCESS_KEY</span><span class="token operator">=</span>
<span class="token assign-left variable">AWS_BACKUPS_BUCKET</span><span class="token operator">=</span>
<span class="token assign-left variable">AWS_ENDPOINT</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于某些配置，你可能需要将你的 S3 URL 从 <code>bucket.domain.com</code> 改为 <code>domain.com/bucket</code>。为了达到这个目的，在你的 <code>.env</code> 文件中添加 <code>AWS_USE_PATH_STYLE_ENDPOINT=true</code>。</p><h4 id="分段上传" tabindex="-1"><a class="header-anchor" href="#分段上传"><span>分段上传</span></a></h4><p>S3 备份使用 S3 分段上传功能。在极少数情况下，您可能需要调整单个分段大小或生成的预签名 URL 的生命周期。</p><p>默认分段大小为 5GB，默认预签名 URL 生命周期为 60 分钟。您可以使用 <code>BACKUP_MAX_PART_SIZE</code> 环境变量配置最大分段尺寸。 您必须以字节为单位指定大小。 要定义预签名 URL 的生命周期，请使用 <code>BACKUP_PRESIGNED_URL_LIFESPAN</code> 变量。预期单位是分钟。</p><p>以下 <code>.env</code> 片段配置 1GB 部分并使用 120 分钟作为预签名 URL 生命周期：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">BACKUP_MAX_PART_SIZE</span><span class="token operator">=</span><span class="token number">1073741824</span>
<span class="token assign-left variable">BACKUP_PRESIGNED_URL_LIFESPAN</span><span class="token operator">=</span><span class="token number">120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="存储类" tabindex="-1"><a class="header-anchor" href="#存储类"><span>存储类</span></a></h4><p>如果您需要指定存储类，请使用 <code>AWS_BACKUPS_STORAGE_CLASS</code> 环境变量。默认选项是 <code>STANDARD</code>（S3 标准）。</p><p>以下 <code>.env</code> 片段将类设置为 <code>STANDARD_IA</code>（这是一个示例）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># STANDARD_IA 就是一个例子。</span>
<span class="token assign-left variable">AWS_BACKUPS_STORAGE_CLASS</span><span class="token operator">=</span>STANDARD_IA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向代理设置" tabindex="-1"><a class="header-anchor" href="#反向代理设置"><span>反向代理设置</span></a></h2><p>在反向代理后面运行 Pterodactyl 时，例如 <a href="https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-" target="_blank" rel="noopener noreferrer">Cloudflare 的灵活 SSL</a> 或 Nginx/Apache/Caddy 等，您将需要对面板进行快速修改，以确保一切按预期继续工作。 默认情况下，当使用这些反向代理时，您的面板将无法正确处理请求。 您很可能无法登录或在浏览器控制台中看到安全警告，因为它试图加载不安全的资源。 这是因为面板用来确定如何生成链接的内部逻辑认为它是通过 HTTP 而不是通过 HTTPS 运行的。</p><p>您需要编辑面板根目录中的 <code>.env</code> 文件以至少包含 <code>TRUSTED_PROXIES=*</code>。 我们强烈建议提供特定的 IP 地址（或以英文逗号分隔的 IP 列表），而不是允许使用 <code>*</code>。例如，如果您的代理与服务器在同一台机器上运行，那么类似 <code>TRUSTED_PROXIES=127.0.0.1</code> 之类的东西很可能适合您。</p><h3 id="nginx-特定配置" tabindex="-1"><a class="header-anchor" href="#nginx-特定配置"><span>NGINX 特定配置</span></a></h3><p>为了使翼龙正确响应 NGINX 反向代理，NGINX <code>location</code> 配置必须包含以下内容：</p><div class="language-Nginx line-numbers-mode" data-ext="Nginx" data-title="Nginx"><pre class="language-Nginx"><code>proxy_set_header X-Real-IP $remote_addr;
proxy_set_header Host $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_redirect off;
proxy_buffering off;
proxy_request_buffering off;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cloudflare-特定配置" tabindex="-1"><a class="header-anchor" href="#cloudflare-特定配置"><span>Cloudflare 特定配置</span></a></h3><p>如果您使用 Cloudflare 的灵活 SSL，您应该设置 <code>TRUSTED_PROXIES</code> 以包含 <a href="https://www.cloudflare.com/ips/" target="_blank" rel="noopener noreferrer">他们的 IP 地址</a>。以下是如何设置的示例。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="recaptcha" tabindex="-1"><a class="header-anchor" href="#recaptcha"><span>reCAPTCHA</span></a></h2><p>面板使用隐形 reCAPTCHA 来保护登录页面免受暴力攻击。如果登录尝试被认为可疑，则可能会要求用户执行 reCAPTCHA 质询。</p><h3 id="配置-recaptcha" tabindex="-1"><a class="header-anchor" href="#配置-recaptcha"><span>配置 reCAPTCHA</span></a></h3><p>虽然我们默认提供全局 Site Key 和 Secret Key，但我们强烈建议您根据自己的设置更改它。</p><p>您可以在 <a href="https://www.google.com/recaptcha/admin" target="_blank" rel="noopener noreferrer">reCAPTCHA 管理控制台</a> 中生成自己的密钥。</p><p>然后可以使用管理面板中的设置来应用这些密钥。reCAPTCHA 设置可以在<strong>高级</strong>选项卡上找到。</p><h3 id="禁用-recaptcha" tabindex="-1"><a class="header-anchor" href="#禁用-recaptcha"><span>禁用 reCAPTCHA</span></a></h3><div class="hint-container warning"><p class="hint-container-title">安全警告</p><p>我们不建议禁用 reCAPTCHA。这是一种安全机制，使对用户帐户执行暴力攻击时变得更加困难。</p></div><p>如果用户在登录时遇到问题，或者您的面板没有暴露在互联网上，禁用 reCAPTCHA 是有意义的。</p><p>使用管理面板可以轻松禁用 reCAPTCHA。在设置中，选择<strong>高级</strong>选项卡并将 reCAPTCHA 的<strong>状态</strong>设置为<strong>禁用</strong>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您无法访问面板，导致改不了这部分的设置，你也可以在翼龙面板的根目录下的 <code>.env</code> 文件中，设置环境变量中去禁用 reCAPTCHA。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RECAPTCHA_ENABLED=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h4 id="编辑你的数据库" tabindex="-1"><a class="header-anchor" href="#编辑你的数据库"><span>编辑你的数据库</span></a></h4><p>如果您无法访问面板，可以使用以下命令直接修改数据库。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p
<span class="token keyword">UPDATE</span> panel<span class="token punctuation">.</span>settings <span class="token keyword">SET</span> <span class="token keyword">value</span> <span class="token operator">=</span> <span class="token string">&#39;false&#39;</span> <span class="token keyword">WHERE</span> <span class="token identifier"><span class="token punctuation">\`</span>key<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;settings::recaptcha:enabled&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态口令认证" tabindex="-1"><a class="header-anchor" href="#动态口令认证"><span>动态口令认证</span></a></h2><p>如果可能，您应该使用面板更新您的动态口令认证设置。如果您出于某种原因无法访问您的面板，您可以使用以下步骤。</p><h3 id="禁用动态口令认证" tabindex="-1"><a class="header-anchor" href="#禁用动态口令认证"><span>禁用动态口令认证</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p
<span class="token keyword">UPDATE</span> panel<span class="token punctuation">.</span>settings <span class="token keyword">SET</span> <span class="token keyword">value</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">WHERE</span> <span class="token identifier"><span class="token punctuation">\`</span>key<span class="token punctuation">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;settings::pterodactyl:auth:2fa_required&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为特定用户禁用动态口令认证" tabindex="-1"><a class="header-anchor" href="#为特定用户禁用动态口令认证"><span>为特定用户禁用动态口令认证</span></a></h3><p>在 <code>/var/www/pterodactyl</code> (这里指翼龙所在的目录) 目录中运行以下命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan p:user:disable2fa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="遥测" tabindex="-1"><a class="header-anchor" href="#遥测"><span>遥测</span></a></h2><p>从 1.11 开始，Panel 收集有关 Panel 和所有连接节点的匿名指标。 此功能默认启用，但可以禁用。</p><p>此功能收集的数据不会出售或用于广告目的。 出于改进软件的目的，可能会公开或与第三方共享汇总统计数据。</p><h3 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的"><span>它是如何工作的？</span></a></h3><p>遥测系统首先为 Panel 安装生成随机 UUIDv4 标识符。 此标识符存储在数据库中，因此对多个 Panel 实例进行负载平衡的人仍然可以拥有唯一的标识符。 然后将该标识符连同相关遥测数据发送到远程服务器。 遥测数据每 24 小时收集一次，没有持续收集或本地存储遥测数据，我们在将数据发送到远程服务器之前立即收集数据。</p><p>目前，所有遥测收集逻辑都由面板上的 <a href="https://github.com/pterodactyl/panel/blob/1.0-develop/app/Services/Telemetry/TelemetryCollectionService.php#L53" target="_blank" rel="noopener noreferrer">TelemetryCollectionService</a> 处理。 该服务负责收集发送到远程服务器的所有数据。</p><h3 id="收集什么数据" tabindex="-1"><a class="header-anchor" href="#收集什么数据"><span>收集什么数据？</span></a></h3><p>如果您希望查看收集到的完整数据，请查看 TelemetryCollectionService（如上链接），或使用 <code>php artisan p:telemetry</code> 命令查看将发送到远程服务器的确切数据。</p><p>截至 2022-12-12，收集的数据包括：</p><ul><li>面板的唯一标识符</li><li>面板的版本</li><li>PHP 版本</li><li>备份存储驱动程序（S3、本地等）</li><li>缓存驱动程序（Redis、Memcached 等）</li><li>数据库驱动程序和版本（MySQL、MariaDB、PostgreSQL 等）</li><li>资源 <ul><li>分配 <ul><li>总数</li><li>已使用的分配总数（分配给服务器）</li></ul></li><li>备份 <ul><li>总数</li><li>备份存储的总字节数</li></ul></li><li>预设 <ul><li>总数</li><li><s>使用该预设的服务器数量的映射</s>（在 1.11.2 中已删除）</li></ul></li><li>位置 <ul><li>总数</li></ul></li><li>挂载点 <ul><li>总数</li></ul></li><li>预设组 <ul><li>总数</li><li><s>使用该预设组中预设的服务器数量的映射</s>（在 1.11.2 中已删除）</li></ul></li><li>节点 <ul><li>总数</li></ul></li><li>服务器 <ul><li>总数</li><li>已暂停的服务器数量</li></ul></li><li>用户 <ul><li>总数</li><li>管理员用户数量</li></ul></li></ul></li><li>节点 <ul><li>节点 UUID</li><li>节点上 Wings 的版本</li><li>Docker <ul><li>版本</li><li>Cgroups <ul><li>驱动程序</li><li>版本</li></ul></li><li>容器 <ul><li>总数</li><li>运行中</li><li>暂停中</li><li>已停止</li></ul></li><li>存储 <ul><li>驱动程序</li><li>文件系统</li></ul></li><li>runc <ul><li>版本</li></ul></li></ul></li><li>系统 <ul><li>架构（<code>amd64</code>、<code>arm64</code> 等）</li><li>CPU 线程数</li><li>内存字节数</li><li>内核版本</li><li>操作系统（Debian、Fedora、RHEL、Ubuntu 等）</li><li>操作系统类型（bsd、linux、windows 等）</li></ul></li></ul></li></ul><h3 id="数据是如何存储的" tabindex="-1"><a class="header-anchor" href="#数据是如何存储的"><span>数据是如何存储的？</span></a></h3><p>目前，数据存储在 Cloudflare 中，我们使用 Worker 提取所有遥测数据，该 Worker 进行基本处理（例如验证），然后将其插入 Cloudflare D1。 目前，收集到的任何数据都没有 API 或可视化，只能手动查询。 目前只有 Matthew 能够查询数据，但我们正在研究替代方案，以使这些数据更易于访问。</p><h3 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么"><span>为什么？</span></a></h3><p>收集这些数据的主要原因是帮助我们对该软件的未来做出更好的决策。 随着 1.11 的发布，最低 PHP 版本要求从 7.4 跃升至 8.0，但是，我们希望添加一项需要 PHP 8.1 的功能，这会使版本要求跃升并可能给某些用户带来问题。 通过收集这些数据，我们有望更深入地了解此类变化将如何影响社区，并在未来做出更好的决策。 这对于架构、内核版本和正在使用的操作系统节点等信息尤为重要。 例如，我们想利用仅存在于某些文件系统中的功能，但我们不知道有多少人在使用这些文件系统，因此我们无法确定是否值得为此付出努力。</p><p>有些数据对决策没有那么有用，但对我们了解仍然有用。 例如，您有没有想过有多少个 Panel 实例？ 所有这些实例运行了多少台服务器？ 有多少用户在使用面板？ 这些用户中有多少是管理员？ 有多少台服务器在使用特定的预设？ 有多少服务器正在使用特定的预设组？ 所有这些问题都可以通过我们收集的数据来回答，并且可以帮助我们和社区更好地了解软件的使用方式。</p><p>如果您对我们收集的数据有任何疑问，请随时在 Discord 上联系我们。 我们的目标是尽可能透明，并且我们希望确保社区理解我们在做什么以及为什么这样做。</p><h3 id="启用遥测" tabindex="-1"><a class="header-anchor" href="#启用遥测"><span>启用遥测</span></a></h3><p>默认情况下启用遥测，如果您想在禁用它后启用它，请编辑您的 <code>.env</code> 文件并删除 <code>PTERODACTYL_TELEMETRY_ENABLED</code> 行，或将其设置为 <code>true</code>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PTERODACTYL_TELEMETRY_ENABLED=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您还可以使用 <code>php artisan p:environment:setup</code> 命令启用遥测，可添加 <code>--telemetry</code> 参数来进行非交互式设置。</p><h3 id="禁用遥测" tabindex="-1"><a class="header-anchor" href="#禁用遥测"><span>禁用遥测</span></a></h3><p>要禁用遥测，请编辑您的 <code>.env</code> 文件并将 <code>PTERODACTYL_TELEMETRY_ENABLED</code> 设置为 <code>false</code>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PTERODACTYL_TELEMETRY_ENABLED=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您还可以使用 <code>php artisan p:environment:setup</code> 命令禁用遥测，可添加 <code>--telemetry=false</code> 参数来进行非交互式设置。</p>`,76),t=[i];function r(d,o){return n(),a("div",null,t)}const u=e(l,[["render",r],["__file","additional_configuration.html.vue"]]),h=JSON.parse('{"path":"/panel/1.0/additional_configuration.html","title":"其他配置","lang":"zh-CN","frontmatter":{"description":"其他配置 备份 翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。 当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。 在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。 使用本地备份 默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/panel/1.0/additional_configuration.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"其他配置"}],["meta",{"property":"og:description","content":"其他配置 备份 翼龙面板允许用户为其服务器创建备份。为了创建备份，必须配置一个备份存储方法。 当改变翼龙面板的备份存储方式时，用户仍然可以从以前的存储驱动下载或删除现有的备份。 在从S3迁移到本地备份的例子中，切换到本地备份存储方式后，S3凭证必须保持配置。 使用本地备份 默认情况下，翼龙面板通过 Wings (后端) 使用本地存储进行备份。也就是说，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其他配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"备份","slug":"备份","link":"#备份","children":[{"level":3,"title":"使用本地备份","slug":"使用本地备份","link":"#使用本地备份","children":[]},{"level":3,"title":"使用 S3 备份","slug":"使用-s3-备份","link":"#使用-s3-备份","children":[]}]},{"level":2,"title":"反向代理设置","slug":"反向代理设置","link":"#反向代理设置","children":[{"level":3,"title":"NGINX 特定配置","slug":"nginx-特定配置","link":"#nginx-特定配置","children":[]},{"level":3,"title":"Cloudflare 特定配置","slug":"cloudflare-特定配置","link":"#cloudflare-特定配置","children":[]}]},{"level":2,"title":"reCAPTCHA","slug":"recaptcha","link":"#recaptcha","children":[{"level":3,"title":"配置 reCAPTCHA","slug":"配置-recaptcha","link":"#配置-recaptcha","children":[]},{"level":3,"title":"禁用 reCAPTCHA","slug":"禁用-recaptcha","link":"#禁用-recaptcha","children":[]}]},{"level":2,"title":"动态口令认证","slug":"动态口令认证","link":"#动态口令认证","children":[{"level":3,"title":"禁用动态口令认证","slug":"禁用动态口令认证","link":"#禁用动态口令认证","children":[]},{"level":3,"title":"为特定用户禁用动态口令认证","slug":"为特定用户禁用动态口令认证","link":"#为特定用户禁用动态口令认证","children":[]}]},{"level":2,"title":"遥测","slug":"遥测","link":"#遥测","children":[{"level":3,"title":"它是如何工作的？","slug":"它是如何工作的","link":"#它是如何工作的","children":[]},{"level":3,"title":"收集什么数据？","slug":"收集什么数据","link":"#收集什么数据","children":[]},{"level":3,"title":"数据是如何存储的？","slug":"数据是如何存储的","link":"#数据是如何存储的","children":[]},{"level":3,"title":"为什么？","slug":"为什么","link":"#为什么","children":[]},{"level":3,"title":"启用遥测","slug":"启用遥测","link":"#启用遥测","children":[]},{"level":3,"title":"禁用遥测","slug":"禁用遥测","link":"#禁用遥测","children":[]}]}],"git":{"createdTime":1607696657000,"updatedTime":1713315474000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":15},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":4},{"name":"Alex","email":"admin@softwarenoob.com","commits":3},{"name":"Dominika Jadowska","email":"domi.jadowska@gmail.com","commits":2},{"name":"Matthew Penner","email":"me@matthewp.io","commits":2},{"name":"Jakob Schrettenbrunner","email":"dev@schrej.net","commits":1},{"name":"Pascal Zarrad","email":"p.zarrad@outlook.de","commits":1},{"name":"VersatileSft","email":"96596027+VersatileSft@users.noreply.github.com","commits":1},{"name":"argonaut-network","email":"86501673+argonaut-network@users.noreply.github.com","commits":1},{"name":"matweycat","email":"52543076+MatweyCat@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.93,"words":2679},"filePathRelative":"panel/1.0/additional_configuration.md","localizedDate":"2020年12月11日","autoDesc":true}');export{u as comp,h as data};
