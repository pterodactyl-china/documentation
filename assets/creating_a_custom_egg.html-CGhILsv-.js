import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,c as l,a as e,e as i,b as o,w as r,d as s,o as c}from"./app-CxUaffK2.js";const p="/assets/Pterodactyl_Create_New_Egg_Select-Z3hcZ5jL.png",a="/assets/Pterodactyl_Create_New_Egg_Process_Management-Bc4ucuV1.png",h="/assets/Pterodactyl_Create_New_Egg_Copy_Settings_From-C1vJz7CI.png",k="/assets/Pterodactyl_Create_New_Egg_Variables-B1dI6xsc.png",g="/assets/Pterodactyl_Create_New_Egg_Startup-BwocVnH4.png",u={},m=s('<h1 id="创建自定义预设" tabindex="-1"><a class="header-anchor" href="#创建自定义预设"><span>创建自定义预设</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>您不应编辑面板随附的现有预设。我们每次对这些预设的更新，在你更新数据库时会覆盖面板的原有预设，也就是说你将丢失这些所有改动的内容。</p></div><p>您需要做的第一件事是创建一个新的预设组(类似文件夹)。名称和描述就不言而喻了。<code>预设组名称</code> <em>需要确保唯一性</em> ，不被其他任何预设组使用，并且只能包含字母、数字、下划线和破折号(中文也是可以的)。这是守护进程存储预设的预设组名称。</p><p>预设的默认启动命令也是必需的，但是可以根据变量进行动态更改。</p><h2 id="创建新的预设" tabindex="-1"><a class="header-anchor" href="#创建新的预设"><span>创建新的预设</span></a></h2><p>创建完预设组后, 点击页面右下角的 <code>新预设</code> 按钮。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>大多数配置都将在随后打开的这个预设设置页面中进行. 你要做的第一件事情就是从 <code>所属预设组</code> 下拉框中选择你的预设属于哪个预设租。</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>随后为你的预设起一个名字并填写在 <code>预设名</code> 中, 在这个样例中我使用了 <code>Widget</code> 这个名字. 你还需要提供一个有效的docker镜像和启动命令 (启动命令在具体的服务器创建后可以单独针对此服进行再次编辑)。</p>',10),y=e("em",null,"Docker images 必须是专门设计用于翼龙面板的那些。",-1),v=s('<h2 id="进程管理识别" tabindex="-1"><a class="header-anchor" href="#进程管理识别"><span>进程管理识别</span></a></h2><p>这是配置界面中最重要的一步, 这些信息能让进程知道如何启动并管理这个游戏预设。</p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第一个空是 <code>复制设置自</code>，默认为 <code>无</code>，如果你已经配置好了一个类似的预设，想要快速配置这些信息就可以点击下拉框并选中。</p><h3 id="关机指令" tabindex="-1"><a class="header-anchor" href="#关机指令"><span>关机指令</span></a></h3><p>下一个空是 <code>关机指令</code>，这个命令将用于安全的停止服务器，例如在我的世界里，通常使用 <code>stop</code> 命令来关闭服务器。当然也有一些游戏没有相关的管理员命令，例如幻兽帕鲁(也许未来会更新加入)。这种情况直接填入 <code>^C</code> 让守护进程执行一个 <code>SIGINT</code>来结束进程。</p><h3 id="日志存储" tabindex="-1"><a class="header-anchor" href="#日志存储"><span>日志存储</span></a></h3><p>现在日志完全由守护进程处理，并利用docker从服务器输出完整的日志。设置案例如下。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><p>接下来的 <code>配置文件</code> 是最重要的一个空. 在服务器启动之前,守护进程将会落实这些配置以确保服务器能够正确的应用。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;server.properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;find&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;server-ip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;0.0.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;enable-query&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;server-port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{{server.build.default.port}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;query.port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{{server.build.default.port}}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中, 我们让守护进程从 <code>/home/container</code> 路径读取 <code>server.properties</code> 这个文件. 在这个代码块里, 我们定义了一个解析器(<code>parser</code>)，在这里是 <code>properties</code> 但以下也是 <a href="https://github.com/pterodactyl-china/wings/blob/develop/parser/parser.go#L25-L30" target="_blank" rel="noopener noreferrer">有效的解析器</a>:</p><ul><li><code>file</code> — 此解析器基于匹配行的开头，而不是像其他五个解析器一样基于特定属性。如果可能的话，请避免使用此解析器。</li><li><code>yaml</code> (支持 <code>*</code> 符号)</li><li><code>properties</code></li><li><code>ini</code></li><li><code>json</code> (支持 <code>*</code> 符号)</li><li><code>xml</code></li></ul><p>定义了文件类型之后, 接下来开始编辑 <code>find</code> 代码块, 这将会让守护进程知道哪些特殊的元素需要被查找并替换. 在这个例子里, 可以看到代码块里填了4个 <code>server.properties</code> 文件中元素,这将会查找并自动替换这些元素为我们想要的值. 你可以使用精确的值，也可以从 <code>server.json</code> 文件中定义特殊的设置. 在本例中，我们将默认服务器端口指定为 <code>server-port</code> 和 <code>query.port</code>. <strong>这些占位符区分大小写, 并且不能含有空格.</strong></p><p>你可以在这里同时监听多个文件, 守护进程将在启动服务器之前检查并处理它们. 当文件是 <code>yaml</code> 或 <code>json</code> 类型时，你可以使用更高级的元素搜索方式.</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;config.yml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;parser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;yaml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;find&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;listeners[0].query_enabled&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;listeners[0].query_port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{{server.build.default.port}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;listeners[0].host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;0.0.0.0:{{server.build.default.port}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">            &quot;servers.*.address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">                &quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{{config.docker.interface}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">                &quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;{{config.docker.interface}}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子里, 我们定义了 <code>config.yml</code> 文件，它的类型时 <code>yaml</code>. 前三个元素只是简单的设定了端口和ip. 最后一个 <code>servers.*.address</code> 使用了 * 来匹配 <code>servers</code> 中的任意项目, 并找到当中的每一个 <code>address</code> 元素.</p>`,18),B=e("div",null,[e("p",null,[i("文件配置中有一个高级用法可以只用一行代码就能做到匹配并替换多个元素. 在本例中, 我们正在寻找 "),e("code",{"v-pre":""},"127.0.0.1"),i(" 或 "),e("code",{"v-pre":""},"localhost"),i(" 并且替换他们为docker中接口配置 "),e("code",{"v-pre":""},"{{config.docker.interface}}"),i(".")])],-1),b=s(`<h3 id="启动配置" tabindex="-1"><a class="header-anchor" href="#启动配置"><span>启动配置</span></a></h3><p>最后一个模块是 <code>启动配置</code>。这将用于判定服务器是否处于运行（running）状态.</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;done&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;)! For help, type &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个例子, 我们定义了 <code>done</code> 作为一整行, 或者是代表服务器已完成启动并且已经准备好让玩家进入的其他输出(其中一部分即可). 当守护进程检测到这些输出时, 它会标记服务器已经成功启动了 <code>ON</code> 而不是启动中 <code>STARTING</code>.</p><p>基本预设配置到此结束,快去实践看看吧。</p><h2 id="复制设置" tabindex="-1"><a class="header-anchor" href="#复制设置"><span>复制设置</span></a></h2><p>如上所示, 添加新选项时，有一个独特的 <code>复制设置自</code> 下拉列表。顾名思义，这让你能够从不同的选项复制上面定义的设置。</p><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在面板中，我们使用这个功能来复制在类似服务选项之间保持不变的设置，例如许多《我的世界》服务器当中的配置。</p><p>例如 <code>Sponge (SpongeVanilla)</code> 预设配置.</p><p>正如你所看到的，它被告知从 <code>Vanilla Minecraft</code>. 复制设置。这意味着任何留空将从指定的父级继承。然后我们定义一个特定的 <code>userInteraction</code> 元素，它与Sponge与Vanilla预设相比会有这个特定元素的区别，但别的一样。</p><p><em>请注意，<code>复制设置自</code> 不支持嵌套复制，您只能从单个父项复制。并且被用于复制的预设 <strong>其本身不能是复制其他预设的。.</strong></em></p><h2 id="预设的变量" tabindex="-1"><a class="header-anchor" href="#预设的变量"><span>预设的变量</span></a></h2><p>变量的一大优点是能够定义用户/管理员可以定义的特定变量，在不用让用户修改启动命令的情况下调整不同的设置。创建新变量或编辑现有的变量，请访问您创建的服务器预设界面，然后单击页面顶部的 <code>变量</code> 按钮。我们可以在一些例子里看看可以创建的变量示例。</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',15),_=e("div",null,[e("p",null,[i("名称和描述相当直观，所以我将跳过这部分，直接讲解"),e("code",{"v-pre":""},"环境变量"),i("框。这应该是一个只带有下划线、字母、数字的名称，并且应该是大写。这将是环境变量的名称，可以在启动命令中通过 "),e("code",{"v-pre":""},"{{WOOZLE_WOO}}"),i(" 访问，在文件修改中通过 "),e("code",{"v-pre":""},"{{env.WOOZLE_WOO}}"),i(" 访问，或者在任何shell脚本中通过 "),e("code",{"v-pre":""},"${WOOZLE_WOO}"),i(" 访问（它会在环境中传递）。在这个示例中，我们还为这个环境变量定义了一个默认值，但并不是必须这样做。")])],-1),f=s('<p>下一部分是<code>权限</code>，这是一个下拉菜单，有两个选项：<code>用户可以查看</code>和<code>用户可以编辑</code>。</p><ul><li><code>用户可以查看</code> — 允许用户在前端查看字段以及该变量的赋值。他们将能够在他们的启动命令中看到它被替换。</li><li><code>用户可以编辑</code> — 允许用户编辑变量的值，例如运行Minecraft预设，他们将可以修改 <code>server.jar</code> 文件的名称。</li></ul><p>在这里你应该小心，即使你没有分配任何权限，也并不意味着该值将被隐藏。狡猾的用户仍然能够在他们的服务器上获取环境。在大多数情况下，这只是对用户隐藏它，然后在Dockerfile中使用它来执行操作，因此用户无需看到它。</p><p>最后，你需要定义一些输入规则来验证该值。在这个例子中，我们使用 <code>required|string|between:1,10</code>，这意味着字段是 <code>必需</code>，必须是 <code>字符串</code>，并且长度必须在<code>1</code>到<code>10</code>个字符之间。你可以在Laravel网站上找到所有可用的验证规则。你也可以使用 <code>regex:</code> 规则标志进行基于 ReGEX 的验证。例如，<a href="https://regex101.com/r/k4oEOn/1" target="_blank" rel="noopener noreferrer"><code>required|regex:/^([\\w\\d._-]+)(\\.jar)$/</code></a>将要求字段，并将匹配正则表达式为任何字母或数字(<code>\\w\\d</code>)，包括下划线(<code>_</code>)，句点(<code>.</code>)和破折号(<code>-</code>)，以<code>.jar</code>结尾。</p><p>然后，当在Admin CP和前端管理服务器的启动时，它们将可见。</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="翼龙面板默认变量列表" tabindex="-1"><a class="header-anchor" href="#翼龙面板默认变量列表"><span>翼龙面板默认变量列表</span></a></h2><p>默认变量对所有预设都是可访问的，不必单独创建。它们可以在egg启动、安装脚本或配置文件解析器中使用。</p><table><thead><tr><th>变量名</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>TZ</td><td>时区</td><td><code>Etc/UTC</code></td></tr><tr><td>STARTUP</td><td>预设的启动命令</td><td><code>java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}</code></td></tr><tr><td>SERVER_MEMORY</td><td>服务器的可用内存(MB)</td><td><code>512</code></td></tr><tr><td>SERVER_IP</td><td>服务器的默认ip</td><td><code>127.0.0.1</code></td></tr><tr><td>SERVER_PORT</td><td>服务器的首选端口</td><td><code>27015</code></td></tr><tr><td>P_SERVER_LOCATION</td><td>服务器的位置</td><td><code>Example City</code></td></tr><tr><td>P_SERVER_UUID</td><td>服务器的UUID</td><td><code>539fdca8-4a08-4551-a8d2-8ee5475b50d9</code></td></tr><tr><td>P_SERVER_ALLOCATION_LIMIT</td><td>服务器分配的端口数</td><td><code>0</code></td></tr></tbody></table>',9);function E(C,q){const t=d("RouteLink");return c(),l("div",null,[m,e("p",null,[y,i(" 你可以在我们的"),o(t,{to:"/community/config/eggs/creating_a_custom_image.html"},{default:r(()=>[i("创建docker镜像")]),_:1}),i(" 指南中阅读更多相关信息。")]),v,B,b,_,f])}const x=n(u,[["render",E],["__file","creating_a_custom_egg.html.vue"]]),R=JSON.parse('{"path":"/community/config/eggs/creating_a_custom_egg.html","title":"创建自定义预设","lang":"zh-CN","frontmatter":{"description":"创建自定义预设 注意 您不应编辑面板随附的现有预设。我们每次对这些预设的更新，在你更新数据库时会覆盖面板的原有预设，也就是说你将丢失这些所有改动的内容。 您需要做的第一件事是创建一个新的预设组(类似文件夹)。名称和描述就不言而喻了。预设组名称 需要确保唯一性 ，不被其他任何预设组使用，并且只能包含字母、数字、下划线和破折号(中文也是可以的)。这是守护进...","head":[["meta",{"property":"og:url","content":"https://pterodactyl.top/community/config/eggs/creating_a_custom_egg.html"}],["meta",{"property":"og:site_name","content":"Pterodactyl-China"}],["meta",{"property":"og:title","content":"创建自定义预设"}],["meta",{"property":"og:description","content":"创建自定义预设 注意 您不应编辑面板随附的现有预设。我们每次对这些预设的更新，在你更新数据库时会覆盖面板的原有预设，也就是说你将丢失这些所有改动的内容。 您需要做的第一件事是创建一个新的预设组(类似文件夹)。名称和描述就不言而喻了。预设组名称 需要确保唯一性 ，不被其他任何预设组使用，并且只能包含字母、数字、下划线和破折号(中文也是可以的)。这是守护进..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T00:57:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T00:57:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建自定义预设\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T00:57:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建新的预设","slug":"创建新的预设","link":"#创建新的预设","children":[]},{"level":2,"title":"进程管理识别","slug":"进程管理识别","link":"#进程管理识别","children":[{"level":3,"title":"关机指令","slug":"关机指令","link":"#关机指令","children":[]},{"level":3,"title":"日志存储","slug":"日志存储","link":"#日志存储","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"启动配置","slug":"启动配置","link":"#启动配置","children":[]}]},{"level":2,"title":"复制设置","slug":"复制设置","link":"#复制设置","children":[]},{"level":2,"title":"预设的变量","slug":"预设的变量","link":"#预设的变量","children":[]},{"level":2,"title":"翼龙面板默认变量列表","slug":"翼龙面板默认变量列表","link":"#翼龙面板默认变量列表","children":[]}],"git":{"createdTime":1549089266000,"updatedTime":1713315474000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":5},{"name":"Alex","email":"admin@softwarenoob.com","commits":1},{"name":"Boy132","email":"Boy132@users.noreply.github.com","commits":1},{"name":"Dane Everitt","email":"dane@daneeveritt.com","commits":1},{"name":"LiuChangKing","email":"51718584+LiuChangKing@users.noreply.github.com","commits":1},{"name":"Niek Candaele","email":"22315101+niekcandaele@users.noreply.github.com","commits":1},{"name":"Proxymiity ☆","email":"commits@proxymiity.fr","commits":1},{"name":"SfTian","email":"admin@imxbt.cn","commits":1}]},"readingTime":{"minutes":7.95,"words":2385},"filePathRelative":"community/config/eggs/creating_a_custom_egg.md","localizedDate":"2019年2月2日","autoDesc":true}');export{x as comp,R as data};
