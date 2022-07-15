<template>
    <div class="home">
        <div class="header section bg-blue text-grey-lightest less-padding emphasize">
            <div class="container z-10">
                <div class="text-center">
                    <div>
                        <img class="max-w-xl w-full inline-block" src="./banner_china_logo.png"
                            alt="Pterodactyl">
                    </div>
                    <div class="mt-4">
                        <!-- <a class="btn hidden md:inline-block" href="https://demo.pterodactyl.io" target="_blank" rel="nofollow noopener">Demo</a> -->
                        <router-link class="btn inline-block" to="/panel/getting_started.html">让我们开始吧！</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-white">
            <div class="container text-center">
                <h1 class="text-blue mb-4">翼龙面板</h1>
                <h3 class="border-0 font-normal leading-normal mx-auto" style="max-width: 50rem">
                    翼龙&reg; 是一个免费的开源游戏服务器管理面板，使用 PHP、React 和 Go 构建。Pterodactyl 在设计时考虑了安全性，在隔离的 Docker
                    容器中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。
                </h3>
                <h3 class="border-0 leading-normal mx-auto mt-4" style="max-width: 50rem">
                    不要再安于现状了。让游戏服务器成为您平台上的一等公民。
                </h3>
                <img class="max-w-lg w-full m-4 inline-block"
                    src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png">
            </div>
        </div>
        <div class="section bg-blue text-grey-lightest">
            <div class="container text-center">
                <h1 class="mb-4">为什么选择翼龙&reg;</h1>
                <div class="flex flex-wrap">
                    <div class="feature">
                        <span><i class="icon icon-lock"></i></span>
                        <h3>安全至上</h3>
                        <p>安全性是该平台上的一等公民，具有 bcrypt 哈希、AES-256-CBC 加密和开箱即用的 HTTPS 支持。</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-beaker"></i></span>
                        <h3>现代化的工具</h3>
                        <p>建立在现代堆栈上，利用最佳设计实践，使其易于进入和修改。</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-anchor"></i></span>
                        <h3>Docker的核心</h3>
                        <p>所有服务器都在隔离的Docker容器中运行，限制了攻击媒介，提供了严格的资源限制，并提供了为每个特定游戏量身定做的环境。</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-wallet"></i></span>
                        <h3>免费和开源</h3>
                        <p>翼龙是100%免费的，并在MIT许可下授权。我们所有的代码也是完全开源的。</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-browser"></i></span>
                        <h3>用户友好</h3>
                        <p>把愤怒的点击和尖叫留给《守望先锋》吧。翼龙的界面设计得非常好，甚至连半藏都能使用它。</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-expand"></i></span>
                        <h3>可扩展性</h3>
                        <p>无论你是一家托管公司，还是下一个Hyplex，或者只是一些玩视频游戏的家伙，我们都能为你提供服务。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-white">
            <div class="text-center">
                <h1>屏幕截图</h1>
                <div class="screenshots">
                    <slick ref="slick" :options="slickOptions">
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png">
                        </a>
                    </slick>
                </div>
            </div>
        </div>
        <div class="section bg-blue text-grey-lightest">
            <div class="container text-center">
                <h1>开始吧</h1>
                <p class="m-4">准备好在翼龙号上飞翔了吗？</p>
                <div class="mt-4">
                    <router-link class="btn inline-block" to="/project/introduction.html">关于本项目</router-link>
                    <a class="btn inline-block" href="https://kook.top/0Grsf5">Discord</a>
                </div>
            </div>
        </div>
        <div class="section bg-black text-grey-lighter text-sm less-padding">
            <div class="container text-center">
                <div>
                    <img class="h-20" :src="$withBase('logos/banner_logo.png')" alt="pterodactyl banner logo">
                </div>
                <div class="text-left md:flex">
                    <div class="flex-none w-full md:w-1/2 md:pr-12">
                        <p class="my-4">
                            自2015年以来，翼龙&reg;一直在提供强大、高性能和安全的软件，使个人、网络和托管公司轻松地大规模运行游戏服务器。最重要的是？没有高昂的月费！
                        </p>
                        <p class="my-4">
                            今天就开始吧，看看为什么成千上万的用户信任翼龙&reg;来管理他们的游戏服务器。
                        </p>
                    </div>
                    <div class="hidden md:block md:flex-1 md:pr-12">
                        <p><a class="text-grey-lightest" href="https://github.com/pterodactyl-china">GitHub</a></p>
                        <p><a class="text-grey-lightest" href="/panel/troubleshooting.html">疑难解答</a></p>
                        <p><a class="text-grey-lightest" href="https://github.com/parkervcp/eggs">额外的游戏配置</a></p>
                    </div>
                    <div class="text-center mt-8 md:flex-1 md:mt-0">
                        <a href="https://kook.top/0Grsf5" target="_blank" rel="nofollow noopener">
                            <img src="https://api.pterodactyl.top/site-assets/kook.png" class="w-3/4">
                        </a>
                        <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow noopener">
                            沪ICP备2022002870号-18
                        </a>
                    </div>
                </div>
                <div class="footer">MIT Licensed | Pterodactyl&reg; Copyright &copy; 2015 - 2022 Dane Everitt &
                    contributors. | which Sinicizated by Pterodactyl-China.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavLink from './NavLink.vue';
    import Slick from './SlickCarousel.vue';

    export default {
        components: { NavLink, Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    speed: 1000,
                    autoplay: true,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    pauseOnHover: false,
                    pauseOnDotsHover: true,
                },
            }
        },
        computed: {
            data() {
                return this.$page.frontmatter;
            },
            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                };
            }
        },
    };
</script>
