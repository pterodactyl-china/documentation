if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const n=e=>i(e,t),c={module:{uri:t},exports:r,require:n};s[t]=Promise.all(a.map((e=>c[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-a3cf1d8c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-BF8dTUR7.js",revision:"2a3dbfbe60177b9a8823301dfe273ac0"},{url:"assets/0.5_to_0.6.html-B2_A-M_Q.js",revision:"3ca161306ff6a1dd122e6c51c28142d8"},{url:"assets/0.5.html-DT_zzsNx.js",revision:"498734f8f7899ad5f3afbfafb334456b"},{url:"assets/0.6_to_0.7.html-DPwRWQra.js",revision:"490728cc102fc491e21c86e5e58a8c6b"},{url:"assets/0.6.html-Q-3W0cz4.js",revision:"ea0c4f0c2f1336461c44185c6eac4047"},{url:"assets/0.7.html-CHtZeT74.js",revision:"3acc9316ab62f39766d6d53b05ee213b"},{url:"assets/404.html-Bt2sMeRD.js",revision:"1c578b84abaa0b0f29fcc8e5c26b4979"},{url:"assets/about.html-8TBGWpIZ.js",revision:"e04e5ed9d2d725006462a78b556038cb"},{url:"assets/about.html-CxP4--6V.js",revision:"994c3bda380cd847540eb80c9fb7df2e"},{url:"assets/add_node.html-BDDNYiw7.js",revision:"ecf7e15ab1e6e7810e047431f43c21c7"},{url:"assets/additional_configuration.html-BsYXtYoI.js",revision:"34627cdef206fa94355ef10e869a6bbe"},{url:"assets/app-DCIACnhC.js",revision:"8a76c78177655e717305168bca96d22b"},{url:"assets/artisan.html-Dvk4C96-.js",revision:"e9d8dea87cdb89156fea3452b59851c2"},{url:"assets/btpanel_getstarted.html-Cj8tFjZD.js",revision:"d95c471d3a378a93cb2c0a367ae63c2b"},{url:"assets/centos7.html-C_A6JeE7.js",revision:"feebd3835b16f786541ef56b2587b429"},{url:"assets/centos7.html-CzgUT9i5.js",revision:"6f3aff6283514a1793b67bc1eff9e42b"},{url:"assets/centos8.html-DAyGHAob.js",revision:"de219b696ba2f10272f773b9e9988bd3"},{url:"assets/centos8.html-te-3dvyM.js",revision:"a43688fb3c81d3a2b8eba5120b3851d8"},{url:"assets/community.html-BMbB7xeW.js",revision:"c85a78320a5dbf27b415104dbeb58d0b"},{url:"assets/configuration.html-D31jelXO.js",revision:"e2cecc4356e6d80be93fe4dfb70a8e9d"},{url:"assets/configuration.html-DAXqnfd2.js",revision:"4c2dc5644793ac1c27fd03baafb7e265"},{url:"assets/configuration.html-N-mHhPxm.js",revision:"63a2074c1290b032d78124a388de659f"},{url:"assets/creating_a_custom_egg.html-B-IyuY2c.js",revision:"e95b16b5b034d99abb87b143d9c37375"},{url:"assets/creating_a_custom_image.html-DdlVfh1e.js",revision:"aae8b9ff2496722c11f4e0b7a6a24574"},{url:"assets/creating_ssl_certificates.html-aKurYski.js",revision:"97d8bef3017e70af3cfeea8f226e28d3"},{url:"assets/debian_8_docker.html-CDtWbfN2.js",revision:"44ec9fe7ab51fbc894ea2c9c3bb73320"},{url:"assets/debian.html-DfktiN6w.js",revision:"d288330e2d3365705eeddde45608295c"},{url:"assets/debian.html-jzU57qwq.js",revision:"ef77887cfdecd95c17e4d75db334d60a"},{url:"assets/docker_getstarted.html-MsHboCmU.js",revision:"04f822446f33505a1da1b6538cc6c141"},{url:"assets/faq.html-B4_TC8DV.js",revision:"8c5123f0fbe4e608ba409b720d106f0e"},{url:"assets/getting_started.html-CPHxYCmS.js",revision:"0f64354272557987c561984598604c02"},{url:"assets/getting_started.html-ryLz9Ahu.js",revision:"c6ba0ce644d3a55694c181de3f445b25"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-B-M8YVCw.js",revision:"40d7ea1826cc2380bc051be77c0bdcdc"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-Br7Bk2kz.js",revision:"51171d8a1535ce9c7f2588a552cf418e"},{url:"assets/index.html-BSE9FmUu.js",revision:"d3e67b1d85d4c13a368c202577477710"},{url:"assets/index.html-Bv4S1sAp.js",revision:"9f989152a2135ed7ff15a89fcbf492d0"},{url:"assets/index.html-BV9lKJjA.js",revision:"ce33499a860ca47cdbb8068b8b9ef8b2"},{url:"assets/index.html-C1OMNNzz.js",revision:"3147fb913bc111685a6a017c3f75b33a"},{url:"assets/index.html-CfQHb_AV.js",revision:"21a7693efc3adb2d85ccfe2a9f7b773d"},{url:"assets/index.html-CkkBtrOs.js",revision:"f405c58ce4a0edab10e6270b7b5450db"},{url:"assets/index.html-ClKLCdtS.js",revision:"783d3bdc349ebda6fab53f9046a5fdd2"},{url:"assets/index.html-CPhzliii.js",revision:"312c59f7e52a683ec90d3a2479cca408"},{url:"assets/index.html-CvJjOR8q.js",revision:"2409e8c94e52bf7228759d944c036696"},{url:"assets/index.html-D23990lZ.js",revision:"13fc8ed8ffcc7e818dce3d5e82521f8d"},{url:"assets/index.html-d8XQdFgI.js",revision:"4cdafd7436b1b3e3225894c626f664d4"},{url:"assets/index.html-DfatOhJB.js",revision:"41d73f2391b6fbdeb440fdab2d5ed012"},{url:"assets/index.html-DMfFA8Nf.js",revision:"8c34da3fca601c127dea3aa4ed0a5cb6"},{url:"assets/index.html-Dn3P6QAw.js",revision:"2b384a2c88b4e6d936f0a94f192c87f2"},{url:"assets/index.html-DNW4_qE6.js",revision:"d4546f942df3d6dd05d76b241676c272"},{url:"assets/index.html-DrlP4OMh.js",revision:"16d2052f5dd45139f9b857bdf7918c30"},{url:"assets/index.html-DyCNSkqm.js",revision:"7163e4a7bb32474175e50347eb165c8d"},{url:"assets/index.html-L6gFm6RJ.js",revision:"b90524da4bbaff96c4a2468ae14dd0c5"},{url:"assets/index.html-o44trCqN.js",revision:"baf1ef03f61e77f2c6944afdd1fb4e47"},{url:"assets/index.html-PS4i9kgw.js",revision:"ccaf51a93d3e06d3013ed7f4b64017e2"},{url:"assets/index.html-wCKb8s04.js",revision:"3ba5550ed5eb9c3f833b8446f87a0519"},{url:"assets/index.html-XoYDRGaU.js",revision:"7098ed0a315f753e4d8a26bf46f22987"},{url:"assets/installing.html-Br-uarVg.js",revision:"da731c0c44f8eac4f11a58bbc2bfc052"},{url:"assets/installing.html-DMEMVxu0.js",revision:"da6169747215f70ed7c2b14b87f4e88e"},{url:"assets/introduction.html-DXClBxq9.js",revision:"5daf02b7e7c5de24f5c91bdf1e292042"},{url:"assets/kernel_modifications.html-Crmmh1JJ.js",revision:"7c3fa9936e3a44d20f9e6c1b3a9b2c87"},{url:"assets/legacy_upgrade.html-CMRhTxam.js",revision:"2e8622f4c7dfbc89aba59fc5e7280816"},{url:"assets/markdown.esm-DotuGrRK.js",revision:"105f3e127e961fc5731b3c7484dadcfb"},{url:"assets/migrating.html-BS1awn_r.js",revision:"667a562fe92ebf320c2c9186899cb1e0"},{url:"assets/migrating.html-fVCbZ0Ci.js",revision:"5050659d83218a05a20c69d6a0f35651"},{url:"assets/minecraft.html-B_i4JGPu.js",revision:"b95b951463a3f2fbbcb2b5950799737a"},{url:"assets/mounts.html-qWRKXTvw.js",revision:"ccfaed38798c7d7dace2c94f96190a6a"},{url:"assets/mysql_setup.html-CXefEU50.js",revision:"945c9b171a81e0b09fb0b7dcbb9d1e4b"},{url:"assets/panel.html-CCNN6EOF.js",revision:"5fd3ca80011a047c99978b2516e29be7"},{url:"assets/photoswipe.esm-DXWKOczD.js",revision:"8414c7616bec469bc22b7f465928e3eb"},{url:"assets/php_upgrade.html-B8Kqy3iN.js",revision:"a50af1fff3e50f92229e39d92dc11c59"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-B3O8JSaZ.js",revision:"96159e200211fae3ae52d7531326e475"},{url:"assets/setupDevtools-QXEOFQJV-CymeJxpV.js",revision:"f88f345fa9321e2435bd13b57cc5f489"},{url:"assets/standalone_sftp.html-Pu0RP70L.js",revision:"f3096febbe5251c07f8b573de3b1096b"},{url:"assets/style-BYiMJWty.css",revision:"0c251bc94255acba89a7ee95e353af57"},{url:"assets/terms.html-MzOVTvrz.js",revision:"c2c19bc9e426c09049ebc3d89548c0ab"},{url:"assets/troubleshooting.html-bjfpgNc9.js",revision:"68e97a3e092223c67db0b39079d75424"},{url:"assets/troubleshooting.html-DL4EvYTe.js",revision:"6dae7a855021cdbc54a768ce12b23bc4"},{url:"assets/updating.html-Cb8_GE-S.js",revision:"41a88eefc22b2de9f3b66f0ca75cf72b"},{url:"assets/upgrading.html-D__lKFJ_.js",revision:"40ba7927fb75abdd9ccd0890ad35a219"},{url:"assets/upgrading.html-DbmZPKHQ.js",revision:"bba26ba40389d448db3d9d61e8c5fd28"},{url:"assets/upgrading.html-tHMtWTsM.js",revision:"64c858c66e9626f742095628c4cadf0d"},{url:"assets/webserver_configuration.html-c3DGoRiz.js",revision:"084c1cd208b3f04fb9ca99e60c23cd1c"},{url:"assets/webserver_configuration.html-DwqSa52r.js",revision:"c54b75a08528c9224d9fba93ae8129fb"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-D_soGS-J.js",revision:"3bdd51077e0f5181f9fbf214e30a1168"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"829ca8a02c298862f888722d9e79af80"},{url:"community/about.html",revision:"a440a734b2ebb3e576676b88217d65bc"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"0760070765d5da70921789f05da08553"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"6986d924e7a2bac585b7516f23780277"},{url:"community/config/eggs/index.html",revision:"035b3d62bd27135782c993215b9393a9"},{url:"community/config/index.html",revision:"ca812901b7a7b2d5e38cf8138a302caf"},{url:"community/config/nodes/add_node.html",revision:"95e1de3e2576d7907243a7b2fbfd92ec"},{url:"community/config/nodes/index.html",revision:"6516ba85c9635c07d5635b376ba7d817"},{url:"community/customization/index.html",revision:"b0a431ba1c5f03097fdcdbc23e279149"},{url:"community/customization/panel.html",revision:"543551754348a483120185ed63fdd5ee"},{url:"community/customization/wings.html",revision:"7a01d9f93bc6d488e31e703cbce41484"},{url:"community/faq.html",revision:"0eeef02139eb359fffdb3d33c318ff81"},{url:"community/games/index.html",revision:"59036e764034e8b130ef984b6c20b505"},{url:"community/games/minecraft.html",revision:"2427e67f2f04ffc6e54ca44ecd4f5f1e"},{url:"community/index.html",revision:"bf61f1c02c7cb2f916fa705b2b553f01"},{url:"community/installation-guides/index.html",revision:"d9c3f79e95494e077e80cbfcb46c94e8"},{url:"community/installation-guides/panel/centos7.html",revision:"30dad709bbe8c8067de23ce79f556a7a"},{url:"community/installation-guides/panel/centos8.html",revision:"55c85ee2bfdd1a7dcc79daffd93eef36"},{url:"community/installation-guides/panel/debian.html",revision:"3c9c4da114b6039777653b1cfde6e522"},{url:"community/installation-guides/panel/index.html",revision:"b40fd3eacb077a7d50d105ddbe5f52b1"},{url:"community/installation-guides/wings/centos7.html",revision:"0372f8fb0e17f2dc5a7b7b49ed4d7b9e"},{url:"community/installation-guides/wings/centos8.html",revision:"10c6d0bfd65c40804643cce70e052ed9"},{url:"community/installation-guides/wings/debian.html",revision:"5657183536e78f770429fe76e9132fc6"},{url:"community/installation-guides/wings/index.html",revision:"823fb169e1d5fb3697fdeb97bbf43247"},{url:"community/tutorials/artisan.html",revision:"df235494ab28787a934ef9ea54f9e4fe"},{url:"community/tutorials/index.html",revision:"b9671211c99b2bf703aa2d847b9fa835"},{url:"community/tutorials/migrating.html",revision:"81048995f55a6568070c991d193df663"},{url:"daemon/0.6/configuration.html",revision:"b19fe875e029dc6e2eab8d2efdb8491a"},{url:"daemon/0.6/debian_8_docker.html",revision:"8911e8216be3fb7281e3c258196796f8"},{url:"daemon/0.6/index.html",revision:"664dda0ba6cd47d840896d5a5a4e1497"},{url:"daemon/0.6/installing.html",revision:"21124836cbb12e31e908a8f569ed66c5"},{url:"daemon/0.6/kernel_modifications.html",revision:"13bfbb408c09eef8a28a756b0670cb2e"},{url:"daemon/0.6/standalone_sftp.html",revision:"19e1e7a25906d86626afa7b54308b20b"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"ac2179e355ba64723b82b6b4b041f765"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"43e40d1b3ac71caaa4ae70d282349f2d"},{url:"daemon/0.6/upgrade/0.5.html",revision:"e7433d01826efcb6a78c53bcd96d4a75"},{url:"daemon/0.6/upgrade/0.6.html",revision:"98b94be3a24691e8d6f7b2e83ec02ce5"},{url:"daemon/0.6/upgrade/index.html",revision:"fc571ffc93b9ca5f3a4537b8a4752121"},{url:"daemon/0.6/upgrading.html",revision:"c343c59ac4a3da235dd68d457d25d33f"},{url:"daemon/index.html",revision:"63a3e8749ae8d0eee173e98394fcae0d"},{url:"guides/index.html",revision:"7786ff8183403b7dede7f1f7d1bf18ad"},{url:"guides/mounts.html",revision:"0968ac2c3623ca3d8ba87d152db6519d"},{url:"guides/php_upgrade.html",revision:"a0e895ef92501776f6b7522b1be56714"},{url:"index.html",revision:"9dd9163494b0cdb465b4d6833bf3daf0"},{url:"panel/0.7/configuration.html",revision:"594d2af4f0cf46aea0896d5b9409978d"},{url:"panel/0.7/getting_started.html",revision:"8c157577614f488b62befc919082451c"},{url:"panel/0.7/index.html",revision:"fc27b6dc91e209dcbf7bba98b39a1be7"},{url:"panel/0.7/troubleshooting.html",revision:"2a2f98220b809237959500edc2a5d372"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"40240d4e034edcbfe63468e59ed5898d"},{url:"panel/0.7/upgrade/0.7.html",revision:"778a88e27e0ed62d9f0abc4dc3eab0fb"},{url:"panel/0.7/upgrade/index.html",revision:"429d347ab2312b498df5ddfbb112b6a8"},{url:"panel/0.7/upgrading.html",revision:"36b40353ea8e5fd5f93f30cc36511021"},{url:"panel/0.7/webserver_configuration.html",revision:"2e55fb5493fdf876ba08cf0acffaf7dd"},{url:"panel/1.0/additional_configuration.html",revision:"d41464ae4417121edfbd6a24b9639fc0"},{url:"panel/1.0/btpanel_getstarted.html",revision:"ea7ce32374cf006afe2a3c1ee00e60cf"},{url:"panel/1.0/docker_getstarted.html",revision:"042559222c78fb050147c87b560790fe"},{url:"panel/1.0/getting_started.html",revision:"6915daa3c5456c758abef50ed25f4cdb"},{url:"panel/1.0/index.html",revision:"a5155dd659bdb8696139489a41eb6560"},{url:"panel/1.0/legacy_upgrade.html",revision:"725ec9db3e9e51d25bcad654aac9f774"},{url:"panel/1.0/troubleshooting.html",revision:"941ff4b095190bf4327b42277a5ab6c3"},{url:"panel/1.0/updating.html",revision:"2c67e5d5090973955ea34ffe3f84ce80"},{url:"panel/1.0/webserver_configuration.html",revision:"26d08efe00737b185c59353e49a79163"},{url:"panel/index.html",revision:"22db2779497ab08ebdc59304cfcb9feb"},{url:"project/about.html",revision:"6b05002306e0db5911a4f7fb38200c24"},{url:"project/community.html",revision:"88271c81dd41e3b96bbb035a7d19455b"},{url:"project/index.html",revision:"af3dc7d6255d8810300a9b291e383f2d"},{url:"project/introduction.html",revision:"c4dc11133e0b10403d6af726377531e4"},{url:"project/terms.html",revision:"b3a0eade2b24da18d3fdc9a356179686"},{url:"tutorials/creating_ssl_certificates.html",revision:"a5b7286c50b10691bd371d016f50aa2d"},{url:"tutorials/index.html",revision:"1028d212285627df1de54d0a83dd6843"},{url:"tutorials/mysql_setup.html",revision:"e4a207be085df123f8ee1a4397c2431b"},{url:"wings/1.0/configuration.html",revision:"2083bff48f274aa512ad259c5c53a806"},{url:"wings/1.0/index.html",revision:"e0916e343873d5fcfab975717f3fa2e4"},{url:"wings/1.0/installing.html",revision:"5923513f06d73b10fe5ba50aa05db8fa"},{url:"wings/1.0/migrating.html",revision:"dc86c9682443edc5c9e22405506254cf"},{url:"wings/1.0/upgrading.html",revision:"2241b141da26f10ad61163046da02283"},{url:"wings/index.html",revision:"0746d2aa673606efd35e241213529b00"}],{}),e.cleanupOutdatedCaches()}));
