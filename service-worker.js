if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),c={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>c[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-DOb9kdkU.js",revision:"5fd4728670b591eaaa6fcb800b508cf2"},{url:"assets/0.5_to_0.6.html-BQgwZ5eY.js",revision:"d49fa10ef7beff98615b32bb7bcbbeb9"},{url:"assets/0.5.html-DJhcl-xo.js",revision:"a5ba7cba92f76edc9d7c37daf618dba0"},{url:"assets/0.6_to_0.7.html-ccCx8ism.js",revision:"2a428eded5c4e0094fd989ef926f7e84"},{url:"assets/0.6.html-C4GJXC45.js",revision:"7550c39016101fb3ad9879bb017917f7"},{url:"assets/0.7.html-Ds_uw5Kq.js",revision:"a9ee9a00e50b6ed9b525bca3b0a28624"},{url:"assets/404.html-CDVB-K_d.js",revision:"03df7aac189ec04f7e26af80d0b64083"},{url:"assets/about.html-BeEXhe00.js",revision:"918bd1c71edffb95bd83a1adf65d702a"},{url:"assets/about.html-Bs_9Vgv8.js",revision:"49d53266fe497f8fde0c33d32fd69ef0"},{url:"assets/add_node.html-CGJ6P44D.js",revision:"c74bbd5cbb423941c6b4d0b617a007db"},{url:"assets/additional_configuration.html-ejRnrA3n.js",revision:"703e45049ccfb8f4a32708bd71609d32"},{url:"assets/app-C-k_0nzz.js",revision:"d866bdb17a80044bbe087afd6aa47c20"},{url:"assets/artisan.html-Bq0IVOK2.js",revision:"982d2f88149bb5d7cd1aa52c10ca97bf"},{url:"assets/btpanel_getstarted.html-SgCImgRN.js",revision:"fcfb30a4f0b4cf5b03a1abeb2372eec0"},{url:"assets/centos7.html-DkLex02s.js",revision:"740a5d65691a398d0a0db96d3b4167ee"},{url:"assets/centos7.html-FHUPSPSN.js",revision:"dabad3fea7c71984ee7c982bf15a9c5b"},{url:"assets/centos8.html-C2jsmrQE.js",revision:"f74ef0254779b125ae0de5243901a75d"},{url:"assets/centos8.html-D7ZRF7LF.js",revision:"83c89e6bf5004f88cba7dc1a6df6ca8d"},{url:"assets/community.html-D8ahdCLb.js",revision:"6af882d388a015ea86bdad11230a02a9"},{url:"assets/configuration.html-BrYsaArT.js",revision:"9ce1facc789cd5a9641fa27dc9810b00"},{url:"assets/configuration.html-CSzvtEWV.js",revision:"fb0776eef2d5388271b169a55f898de6"},{url:"assets/configuration.html-Cy0m0QU8.js",revision:"9635a024fa193968be40137d7103e18a"},{url:"assets/creating_a_custom_egg.html-B0ZAIcjL.js",revision:"2ea39673149ec0d395d5f010e3d45a11"},{url:"assets/creating_a_custom_image.html-DwH4uTqc.js",revision:"3ac393bc19dc38eca0570f9d8e0fd437"},{url:"assets/creating_ssl_certificates.html-CSl_hctu.js",revision:"0945dee3aab32ec7232f37523b7b9062"},{url:"assets/debian_8_docker.html-D-z3nQIW.js",revision:"f8ed04041cb88ab033d916d27ca06f3a"},{url:"assets/debian.html-BBQY3e4z.js",revision:"26231c011c394c31669b75782e98bdcd"},{url:"assets/debian.html-w6ZWTOTl.js",revision:"dd62e11331ec43ab07c6ed135029c253"},{url:"assets/docker_getstarted.html-KIIzpYcA.js",revision:"87f634b192288a38f8b07f1505a8d03b"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/faq.html-CQi0DtBz.js",revision:"99b070addb24a260e8ab570691ccc41c"},{url:"assets/getting_started.html-CavAIME9.js",revision:"23aa0f2a38eebaaf3ceb7f3fd3ed6dec"},{url:"assets/getting_started.html-D1_1Fj2-.js",revision:"790c1206a8853246aea75a2dc44f4be8"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-Ds2TtRM5.js",revision:"4b2541a3a6e4abc1431da28a1aa02b8c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-B2EnrZuc.js",revision:"509fa6cb6c148786edd7795df6430436"},{url:"assets/index.html-B2VBzW7Y.js",revision:"89b356d389dc4a82f4bf0b30af775861"},{url:"assets/index.html-BIu2U2tC.js",revision:"515073d724cf73c550651653e491676b"},{url:"assets/index.html-BLtajkV-.js",revision:"e40fa6c82f11298e3515072a37e7643c"},{url:"assets/index.html-BRR32FPJ.js",revision:"312af57ea0e6c4403c62ebfbc2064e06"},{url:"assets/index.html-BvdFIpYJ.js",revision:"eb931ad433b5bb111d509966dbfb2306"},{url:"assets/index.html-BYJ1FOC0.js",revision:"d339142c5b2cd2f7d7825a102840c1d0"},{url:"assets/index.html-ByTGZvSF.js",revision:"cb93ab690f0f8a103f85c1f8ff6fc0e7"},{url:"assets/index.html-CKb8pnNZ.js",revision:"e34f671e4915078f1065a6647fd90d68"},{url:"assets/index.html-CngUCoc-.js",revision:"d7c0c207321c62df225ad417de96c133"},{url:"assets/index.html-CnU7omYO.js",revision:"b4bfdc56a517c080ac12325382c486ce"},{url:"assets/index.html-CsmCfeFm.js",revision:"8538196145f8730a4a3a0f16614214d7"},{url:"assets/index.html-CtbjzgqR.js",revision:"b316cf1657db331749cfe969bb3ccc1c"},{url:"assets/index.html-DcP7kxJz.js",revision:"c24324c7850c763ab943f158d9ba030b"},{url:"assets/index.html-Djhu_rDQ.js",revision:"79faf9a7f9393fc7a0369b44f19c5af8"},{url:"assets/index.html-DnZT8tk3.js",revision:"18f71c2283d5ed51fddb597f9c97f52a"},{url:"assets/index.html-DohzK3-7.js",revision:"8af3742d9e7d63d8090a41e6835d172d"},{url:"assets/index.html-DtQHqbYx.js",revision:"bfff15dbb42a49ac4c3e145a7c37bd65"},{url:"assets/index.html-DYqACy6_.js",revision:"25589a835a55b16b85289b167e3bc795"},{url:"assets/index.html-EZRL50g8.js",revision:"bb8a20a44b331d63d90693e24ff02a34"},{url:"assets/index.html-F2A04Soj.js",revision:"8fd4ab58aa522e060ae6da282978515d"},{url:"assets/index.html-GoeNRXyV.js",revision:"b82b683c91d3736cb1684aab62683b8d"},{url:"assets/index.html-SL6jWsDM.js",revision:"4a81018c41972db70aa11d210fe8d62c"},{url:"assets/installing.html-C3ynrOPt.js",revision:"b5e73992332d1add2bc9c225a22ba179"},{url:"assets/installing.html-XQ9PYsP4.js",revision:"c3d3ef9a92a2aa948daaf3490c49bc7d"},{url:"assets/introduction.html-Dox4jkek.js",revision:"780ef59a5e7078265a1368491d51e176"},{url:"assets/kernel_modifications.html-vgshG79m.js",revision:"6cf3af36bb984839771d3ac6c15c58a4"},{url:"assets/legacy_upgrade.html-Cd8lAnmK.js",revision:"090981dcb2664b819c86156f2b6b36dc"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-B3tKMRhU.js",revision:"746cb65ae3cd83a15ac1bb5e57c6e65c"},{url:"assets/migrating.html-siQfG0aJ.js",revision:"4da0a34631671f28f19ec5894e8d162f"},{url:"assets/minecraft.html-BQis2DA2.js",revision:"f0d725240f1d1341cb4781d62cb7089b"},{url:"assets/mounts.html-CA5Zhx1z.js",revision:"de8ecb2fbf07676870e1d90b97ea3cfb"},{url:"assets/mysql_setup.html-3MYai6z0.js",revision:"a01879101bdad08e074e419c0b876b13"},{url:"assets/panel.html-6o1-CJtc.js",revision:"a312a0980ac2d370700fe07687cfb74a"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/php_upgrade.html-d3AmqHzq.js",revision:"536d922d7fefe0df1814ff97e8ed407a"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-BhxykVTW.js",revision:"b3b3b247322ab7f08c19b330cca0e23c"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-zcNyhLjx.css",revision:"f6f181bdb5c976c0791e2edbeb98fc9b"},{url:"assets/terms.html-vKvyKqXJ.js",revision:"12a2a3222b52caad090cd0a5ebd54dc7"},{url:"assets/troubleshooting.html-bdlOkaHC.js",revision:"a5842e9b80fcf4f37a50f629b478553d"},{url:"assets/troubleshooting.html-DYB4xx-S.js",revision:"3e48cc61db76616c1608160f6ca4d64a"},{url:"assets/ubuntu1804.html-DARYlBSV.js",revision:"bc4d91e141a2f7f533086287cffbd42b"},{url:"assets/ubuntu1804.html-Lf5nHjAO.js",revision:"fcd7d890c65a8e823968158acd32aa7a"},{url:"assets/ubuntu2004.html-BGh6pAQT.js",revision:"cd29e513322a393713e208ec82540142"},{url:"assets/ubuntu2004.html-BXLgSo8n.js",revision:"6ee7e13e1a25e5b0cd6c11c8759fb2d3"},{url:"assets/updating.html-CRL4MDO5.js",revision:"99aab955aed57ad4208aee9b2c11f9be"},{url:"assets/upgrading.html-7MCmFmP2.js",revision:"9d85d82e0be514d211f65b9d2ed73040"},{url:"assets/upgrading.html-avbsBLoH.js",revision:"7d2e1cae56c76eebc60d000d9161b563"},{url:"assets/upgrading.html-d050Au1-.js",revision:"3f732d679024609f296af0079c4fc641"},{url:"assets/webserver_configuration.html-BXIfLsJZ.js",revision:"1584f6ce353d18363abfc76f6e05083b"},{url:"assets/webserver_configuration.html-DMbUmp2n.js",revision:"c1058d3eddfeb90d2b959343a9275b89"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-BQ0KFZuM.js",revision:"598dd54324b62f2d9d32624e65254364"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"fb870c47efb1890cafd4119eec60afbd"},{url:"community/about.html",revision:"4fe67dc37a8285a7cccc4f8b06ef32bc"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"ad693591ca81918aa3b5aa49a1c355f3"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"df9a865871def97755d37e3037c57427"},{url:"community/config/eggs/index.html",revision:"4dede99dbbca4eb722a5f8da85745b63"},{url:"community/config/index.html",revision:"2369cb71da5858605edc44b3fa2c3ad2"},{url:"community/config/nodes/add_node.html",revision:"ac3d810ee63e9ecb92c2a477ad4e3fb6"},{url:"community/config/nodes/index.html",revision:"ff98f22e0b1189cea68553e07bbbfd70"},{url:"community/customization/index.html",revision:"0255972217c150521105d1f690cfc3e8"},{url:"community/customization/panel.html",revision:"2fd3c203fd19f9e0d86545a10f164115"},{url:"community/customization/wings.html",revision:"894f986121fc5ee8e12aff34cac136bf"},{url:"community/faq.html",revision:"f9ceb57394514edcfe8f6b1b40f0b301"},{url:"community/games/index.html",revision:"b5f316ed5c1ac7dd51c2f44df2914480"},{url:"community/games/minecraft.html",revision:"d4da6557adbd5c4d09aaa22d6884a94d"},{url:"community/index.html",revision:"dffa60a2d9295aff9f26ef14afd708f1"},{url:"community/installation-guides/index.html",revision:"71ef8149273f11912567fc00784ed006"},{url:"community/installation-guides/panel/centos7.html",revision:"d36c110c67678fd83d04cde994a41e93"},{url:"community/installation-guides/panel/centos8.html",revision:"e1a58ce8497be99ac6e34d8393930682"},{url:"community/installation-guides/panel/debian.html",revision:"1d8966f416804e5277818824b3284fdc"},{url:"community/installation-guides/panel/index.html",revision:"5041a69a781eb4f0b225928b34d41544"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"3db97d1318760d3b2dc7f27a559631bb"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"0ed62c786a2aa0db56262a25639bee91"},{url:"community/installation-guides/wings/centos7.html",revision:"d73d12d8a7d41b22c4610e7ae394e2b3"},{url:"community/installation-guides/wings/centos8.html",revision:"71435e6acc7c7638f5e99fced48c9d4e"},{url:"community/installation-guides/wings/debian.html",revision:"3a3092650c6187d0e431fb19f6c0a396"},{url:"community/installation-guides/wings/index.html",revision:"3de7a1b42f3f29e11dad7ef7f988d624"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"52b063b4761c8c6e5557e0d29abe3bca"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"c7a8526a7231ac2326b2626dcda343a4"},{url:"community/tutorials/artisan.html",revision:"29d1ae17546167597590ae7b55d44eba"},{url:"community/tutorials/index.html",revision:"1501f6aef938fda8fd251c995d00505c"},{url:"community/tutorials/migrating.html",revision:"0d73ed467b6aa9d2161a938f9985a011"},{url:"daemon/0.6/configuration.html",revision:"39f99eede5846b18dfcc47c227bf53dc"},{url:"daemon/0.6/debian_8_docker.html",revision:"2e2381ce38123c1f2ea6812383921b2e"},{url:"daemon/0.6/index.html",revision:"e1a3fadd394ef81f9b042e464e21daf2"},{url:"daemon/0.6/installing.html",revision:"f3f78cbde72a3ce83015617905217074"},{url:"daemon/0.6/kernel_modifications.html",revision:"c1137288f1b075be6d4bcdd23b1ffce0"},{url:"daemon/0.6/standalone_sftp.html",revision:"0875bb320fcaf23c79e7636fde151b28"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"68da33d8fb4c65837767aedc06856704"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"7ddba0a59aa1baff1ec5d4efc764bf3c"},{url:"daemon/0.6/upgrade/0.5.html",revision:"bc179b187e0d84aa88f405cf717eace7"},{url:"daemon/0.6/upgrade/0.6.html",revision:"f2167087af7a3c06a7d0d071147dcdac"},{url:"daemon/0.6/upgrade/index.html",revision:"d82d8b9ce2682598d6067e65a4a45966"},{url:"daemon/0.6/upgrading.html",revision:"f0461b84dd4c91c270f3e39807a3bde3"},{url:"daemon/index.html",revision:"97cc854b352f2a8e21cfad534f4c0f07"},{url:"guides/index.html",revision:"dfe660e6e11b8871641293439bc39af0"},{url:"guides/mounts.html",revision:"ca6c1ae585a75c65428b10e1f9bb7eff"},{url:"guides/php_upgrade.html",revision:"82f5adf877caa4d749834fbf7d24b7e4"},{url:"index.html",revision:"1b73d0cfe29f5636d23f4691c3cd90d0"},{url:"panel/0.7/configuration.html",revision:"007d25ab8654032fce545e056b0a0844"},{url:"panel/0.7/getting_started.html",revision:"31457244610d29f1240fc0ee0012d984"},{url:"panel/0.7/index.html",revision:"eae69b3eff214f795e6b04f90cbe62a8"},{url:"panel/0.7/troubleshooting.html",revision:"11854d816364a30169ab6f32a9f3a733"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"3ec8ba29aada07b3d24d808f85eaff70"},{url:"panel/0.7/upgrade/0.7.html",revision:"e85e06af0159c9c4e353ecac776db9cb"},{url:"panel/0.7/upgrade/index.html",revision:"76e49700d1e52cdf1334ea4419da5e42"},{url:"panel/0.7/upgrading.html",revision:"aa1f2bcb17404ab5894a778e6f7d8306"},{url:"panel/0.7/webserver_configuration.html",revision:"ca36ad91efe5431d6071bda9d071e07c"},{url:"panel/1.0/additional_configuration.html",revision:"16f6d0c6c58b07a5e9c19bfcd6b3e72a"},{url:"panel/1.0/btpanel_getstarted.html",revision:"7258cab22c646c1ea18d1e745473623f"},{url:"panel/1.0/docker_getstarted.html",revision:"a002777a8777b28cdcdc48ed70f5aae8"},{url:"panel/1.0/getting_started.html",revision:"2c59fa05bc9738f1dfc2a6924a7c0ae5"},{url:"panel/1.0/index.html",revision:"8b8e296fdabbe8d10ff9bb384c0ca118"},{url:"panel/1.0/legacy_upgrade.html",revision:"c8cfe6ae746d4b6ec6ee4f6f823aeb53"},{url:"panel/1.0/troubleshooting.html",revision:"fd36bea937ab8814696765f63e640b14"},{url:"panel/1.0/updating.html",revision:"f3398d7f2416e526ace3cb275903709c"},{url:"panel/1.0/webserver_configuration.html",revision:"ade28f56ffd82d9c023f91df51c439e7"},{url:"panel/index.html",revision:"b85e594c9e659a1387209424da8fc720"},{url:"project/about.html",revision:"8146ba2af7b21ffb96558558e24e32d8"},{url:"project/community.html",revision:"97307062e3622e654f7a573016eef17d"},{url:"project/index.html",revision:"b52aaeb946ef662851808f3125cbc03c"},{url:"project/introduction.html",revision:"b07502d79fc03f04199b962922c2ba54"},{url:"project/terms.html",revision:"917ba6e6114f7c9e051163dcfca7ec25"},{url:"tutorials/creating_ssl_certificates.html",revision:"6298b5461b078806f719716618cd78fe"},{url:"tutorials/index.html",revision:"cca032d8376f905b6fd6465351821e15"},{url:"tutorials/mysql_setup.html",revision:"b82c4cacde9abfb1a786a438c34eb8e0"},{url:"wings/1.0/configuration.html",revision:"d94f1e0e77935e9f7ac0fc08bca8666e"},{url:"wings/1.0/index.html",revision:"0d47ebe54f45e7beabbd1adcc7e33e98"},{url:"wings/1.0/installing.html",revision:"db8593bec0bf88558de2ea43f7676572"},{url:"wings/1.0/migrating.html",revision:"6c3160086e8833b368ed6f4885240b18"},{url:"wings/1.0/upgrading.html",revision:"348d2f5a59b6cbaf92c1cc8ff79b0d73"},{url:"wings/index.html",revision:"a55e02e304466651ddf3cb25292468ea"}],{}),e.cleanupOutdatedCaches()}));
