if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const n=e=>a(e,c),r={module:{uri:c},exports:d,require:n};s[c]=Promise.all(i.map((e=>r[e]||n(e)))).then((e=>(t(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-DS1rKHWz.js",revision:"b4a751cb9629fa91ce8e1b6828e41a2c"},{url:"assets/0.5_to_0.6.html-BtStsoEG.js",revision:"948f8d43e8529e1d53edd8ad12a18b92"},{url:"assets/0.5.html-BJGFcj3L.js",revision:"408ab78bae6c95c966a888606e28812f"},{url:"assets/0.6_to_0.7.html-BO9CYXOY.js",revision:"75b170d6d0748f27ad22b6c22eb275c9"},{url:"assets/0.6.html-CCUWp1RR.js",revision:"9f70cb0249e33ce53509352eacbd047d"},{url:"assets/0.7.html-CQ69_D-w.js",revision:"7bde87e33724f6a57c6d0a46eed60760"},{url:"assets/404.html-B_9lhEFt.js",revision:"984c7cfbf8ec7cfe273eeab000871c6e"},{url:"assets/about.html-C7dis_Zs.js",revision:"380a3be3009eee37c6f2d43544d20250"},{url:"assets/about.html-DvcT101F.js",revision:"f1466755c65c69c00921730d0c288e5e"},{url:"assets/add_node.html-BpOYGb0r.js",revision:"35a0738c7d413e47fc74ebef8332f874"},{url:"assets/additional_configuration.html-DFtzAknX.js",revision:"df769972702c9885c554e7fc4561ee87"},{url:"assets/app-COlaV3pa.js",revision:"f7b8c693f3d6b7d1a211d7b62c678ff1"},{url:"assets/artisan.html-DRGsmTMY.js",revision:"b096ce9b7fd9466ebfcc0424584e04a5"},{url:"assets/btpanel_getstarted.html-DgbXMcgh.js",revision:"fc38ba8ee9fdba24d38ce28947b701d0"},{url:"assets/centos7.html-KCMZ7PtM.js",revision:"cd1e26a8359e640fa2888047f10a2cff"},{url:"assets/centos7.html-wrklFwBh.js",revision:"60cf7b58999d7b1118e447fa531ece26"},{url:"assets/centos8.html-BKnP6vrp.js",revision:"b7930c24498a97a715b2468fca84225b"},{url:"assets/centos8.html-DeNmTX31.js",revision:"efdad7de3cf86aab7f8143890d554c49"},{url:"assets/community.html-Cw9sQGda.js",revision:"999a71e0b51412ba55f27165275516b6"},{url:"assets/configuration.html-D7xNpY8v.js",revision:"c0f33fa76a553bd91c273e50a1426045"},{url:"assets/configuration.html-DDYwhek9.js",revision:"a43806b5f45b0cc7442713745347beb6"},{url:"assets/configuration.html-IFMIdaZo.js",revision:"281479d469b7cd2093ed23ba276155e0"},{url:"assets/creating_a_custom_egg.html-DyKJrveB.js",revision:"6da28d8ccd56b0b884caa1e017b7c868"},{url:"assets/creating_a_custom_image.html-42_auXtg.js",revision:"70c88a48ff276c02dcbbb9e4d6ecdd99"},{url:"assets/creating_ssl_certificates.html-BCO6K1Qb.js",revision:"a0e3a2a5fef59ef153cf917869a44d11"},{url:"assets/debian_8_docker.html-DMFa681z.js",revision:"1fe7b14a155f7d74c4a2222f4df37b26"},{url:"assets/debian.html-9QCxCpOp.js",revision:"4a566e41e6b6e3a455c0f399b434318d"},{url:"assets/debian.html-C83P8E_9.js",revision:"db79d01f01d7acbb381c752eca8ce646"},{url:"assets/docker_getstarted.html-BTaKG7V8.js",revision:"76b0dc2001c3a7994afd207a84c0061a"},{url:"assets/getting_started.html-C_owy2Px.js",revision:"acb87b59894dc28d1b25ada612656773"},{url:"assets/getting_started.html-CWukvdbe.js",revision:"40b946a326468e3e0c2614237432680c"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_TExXOs5.js",revision:"ca0e057bbb37d3687bd1786b674a2580"},{url:"assets/index.html-1H5QDsix.js",revision:"4a6e03c2fea77deae472ba9b3ac91955"},{url:"assets/index.html-B34h9AoS.js",revision:"21dc2cd35dcd603bc4547576daf541b6"},{url:"assets/index.html-BaGjuEzl.js",revision:"6ca13e2a7dd4fd9e3fb8243da5415208"},{url:"assets/index.html-BicNCy3Z.js",revision:"3849268fc7367c37dd9a89ccb9767aa1"},{url:"assets/index.html-BpL1aw8d.js",revision:"0a874287fd6ba2fa7f09a770047c3359"},{url:"assets/index.html-BVN-4mSE.js",revision:"c2b6286be4d921eeb391bff59ad33446"},{url:"assets/index.html-C23IUu5L.js",revision:"c7dc3cbc992a3bc0fe355c12840e7ea0"},{url:"assets/index.html-C92C6Vpe.js",revision:"5aa512bbc6e75965fc0a546ccdfbd278"},{url:"assets/index.html-DAQwG5NX.js",revision:"c092bf84268c3a436f91ef779823b2ee"},{url:"assets/index.html-DBh4qusz.js",revision:"2f86ef01a82349ecde2c047383280865"},{url:"assets/index.html-DG00zamc.js",revision:"ee24d1f2bd885334f9acb94600ffb3d1"},{url:"assets/index.html-Dl37dkkD.js",revision:"33f055594bbecb876033d1742e4492c4"},{url:"assets/index.html-DlOvo2LI.js",revision:"af4a0017e84aa28aaf442bbff61df639"},{url:"assets/index.html-DQIVLHNv.js",revision:"7d44a7a17ae5cbf680272a3f305c56c5"},{url:"assets/index.html-DsL7vgsL.js",revision:"4611c2937bcfe835bf5b09961e62ad60"},{url:"assets/index.html-dVrlus9i.js",revision:"e56daf4e3c3811d508e6585c1390f915"},{url:"assets/index.html-DWNB8kkV.js",revision:"648fadc77a9e7a97deeedfce2a9b8d3c"},{url:"assets/index.html-DZDKjkCd.js",revision:"54dd71d94ea1c4e4a886f45b589446ee"},{url:"assets/index.html-FsIso50L.js",revision:"1a41afaf3bd8e333c24be2e5dcd78030"},{url:"assets/index.html-i33xa5Tf.js",revision:"3f7be1a4bcbcc214708d619e5672cb1c"},{url:"assets/index.html-t1p3VhkY.js",revision:"886bca7eb3fd31e50a515dbb6b14f503"},{url:"assets/index.html-Urx9KKHq.js",revision:"5be0fe3c05b0abe1760bd57809677686"},{url:"assets/installing.html-CsaRuFOd.js",revision:"608b37744d883316b54ad7f130d09646"},{url:"assets/installing.html-I_1ObU2B.js",revision:"4a17193e8ac0f8f73a9b01316eee2ee5"},{url:"assets/introduction.html-CQPEwulu.js",revision:"a8f510af8d08c3f78b8c1a60a36108d2"},{url:"assets/kernel_modifications.html-DSMpsbkW.js",revision:"f949550d3992c249383ddf7c60f9d829"},{url:"assets/legacy_upgrade.html-COC1Siby.js",revision:"127d0003845c81d9db508efb683a94d5"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-CwlS7AVX.js",revision:"348982205f103f7cf61b0e379eb5ab24"},{url:"assets/minecraft.html-DytL6JQB.js",revision:"bd6552359a708f989604ffa26abc1293"},{url:"assets/mounts.html-YX0H862W.js",revision:"e47a3e1d6dc605ee75b28ee0f51d8961"},{url:"assets/mysql_setup.html-BXVYDbEe.js",revision:"ab0fa8b9b2ab32f5265c408fa00108ad"},{url:"assets/panel.html-BduRsAAV.js",revision:"0abf2e165284ffec42dd5e6ab572bce1"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/php_upgrade.html-BSRSWBaC.js",revision:"4962c5f54700368d0c438aa259cf9e92"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-95w5Juxe.js",revision:"7a50f2584c69ea4d80a781db3437c66a"},{url:"assets/style-CwAqk24W.css",revision:"97373d9ee6f861eee3bceef93b8e9c22"},{url:"assets/terms.html-BqehIPaC.js",revision:"65ed41f928be55a3c7b4b8dea561d3a6"},{url:"assets/troubleshooting.html-Bkpnf4G5.js",revision:"ae4ff1950f8a489239844a20043f1792"},{url:"assets/troubleshooting.html-DAat3e2a.js",revision:"66edc41cb964002830c3790c502da0ea"},{url:"assets/ubuntu1804.html-8wK1ZZFi.js",revision:"c51a1bcafd251c2e605c9d9b29e900b5"},{url:"assets/ubuntu1804.html-DHVOrtVo.js",revision:"25b3cff85dd44b64f89ba6ca104b6468"},{url:"assets/ubuntu2004.html-BlvHitoy.js",revision:"930da3c7ecc00b92d8bce1270d25c060"},{url:"assets/ubuntu2004.html-EmyPJs8H.js",revision:"264841d5377c8dc18bb663bd167511d2"},{url:"assets/updating.html-CND8pYUw.js",revision:"2313213d2c160839e8a3af48d68ecec3"},{url:"assets/upgrading.html-D64S_YUD.js",revision:"70d5830d8033910ae239bac637c847ad"},{url:"assets/upgrading.html-DM9_yTx_.js",revision:"1f40ac7a70c836a116447971c4e38ae4"},{url:"assets/upgrading.html-DojnxZQt.js",revision:"2b694c9c9890645d82c0c99eb63e2f52"},{url:"assets/webserver_configuration.html-B2EA3-SC.js",revision:"b2d04a8984f14e3c47b3cc90628a06fc"},{url:"assets/webserver_configuration.html-C0glXOMW.js",revision:"c040cdabc033c21c534cd97ef5030a0b"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-D_wSnkZZ.js",revision:"cf5abb54c4290b77fae7d87d44f17a16"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"8a0f5db954f83fa9003b31409688a19a"},{url:"community/about.html",revision:"b11fdc748a935733bf7800f1670fabae"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"2ae39f0bf4937afee7cfe43ce40494e8"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"72c634aa751400298f940c5c5cf9fba1"},{url:"community/config/eggs/index.html",revision:"8a70abce0fc17ef929fde8af63ceadac"},{url:"community/config/index.html",revision:"24dad8010ca37e92e821332cfe8ad711"},{url:"community/config/nodes/add_node.html",revision:"5feafc0ba52e89d3bbf4c8539e931e3e"},{url:"community/config/nodes/index.html",revision:"6dbb9e5c7e07b73764cddec618130937"},{url:"community/customization/index.html",revision:"ac631b7fb789d6beb6278487a0b16526"},{url:"community/customization/panel.html",revision:"6170eb4bad3eda0a4088941c4a7bf27a"},{url:"community/customization/wings.html",revision:"17394c14ce768bfaeccedbaba52788d2"},{url:"community/games/index.html",revision:"5c9591a0d53c103701781f856d25d77a"},{url:"community/games/minecraft.html",revision:"2384c1859f28b8667b8b553bacda26d8"},{url:"community/index.html",revision:"f4eb6a680c3ad949ceed99528ac3686f"},{url:"community/installation-guides/index.html",revision:"e8bcc468faf688f423a809a56f4b037b"},{url:"community/installation-guides/panel/centos7.html",revision:"88b4afb77f6fdb53757489728b840149"},{url:"community/installation-guides/panel/centos8.html",revision:"7dc24610ed6beddb41f8095708527274"},{url:"community/installation-guides/panel/debian.html",revision:"227beaf7c52a60b984df2ddbcfee7556"},{url:"community/installation-guides/panel/index.html",revision:"1773e4d0b0f836c75b301c9730fa75be"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"a4378f29c50609f9336ef91488e1d989"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"d81610e2fc399a70befed7282095ff36"},{url:"community/installation-guides/wings/centos7.html",revision:"56ae931a0875a3c0e2c89849c9edb675"},{url:"community/installation-guides/wings/centos8.html",revision:"7537740075aeb04749edbea89041f38c"},{url:"community/installation-guides/wings/debian.html",revision:"d2e30f88d0b9642e864333e618d48608"},{url:"community/installation-guides/wings/index.html",revision:"ece155765eb32b1ccf636b95cc94b1bd"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"89c28157f73b64bf0197fe2d8c1e9335"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"6d009fa2a5d89f0dc74683d40bc6922a"},{url:"community/tutorials/artisan.html",revision:"391e8d3b51e21183cda33e527aea1e7e"},{url:"community/tutorials/index.html",revision:"ca2dec53cfaaa7e6d1c087b8b8a3353c"},{url:"daemon/0.6/configuration.html",revision:"c9d6a6b49f143777a7dc9310952d1ab8"},{url:"daemon/0.6/debian_8_docker.html",revision:"f48bc8e59d41f237af61330c8ebfecfc"},{url:"daemon/0.6/index.html",revision:"bab272be949d274060bd0cdf5b470151"},{url:"daemon/0.6/installing.html",revision:"41010422edabe6be970635eb17a0189a"},{url:"daemon/0.6/kernel_modifications.html",revision:"3cc3e19db62cdc302fb7b189e2a9d202"},{url:"daemon/0.6/standalone_sftp.html",revision:"9c831d766802c75303f5c369febd6ca4"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"f5249d1ff4b16e894daab703765dbe54"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"c6b809e66d9eeec9e76980a3b2f3b599"},{url:"daemon/0.6/upgrade/0.5.html",revision:"356dd59b82bf8ca77b6b46d965acd601"},{url:"daemon/0.6/upgrade/0.6.html",revision:"ff5a65ad3ce0dba5c0b554c3e276aca8"},{url:"daemon/0.6/upgrade/index.html",revision:"fde20ce96e1a90125edb39a2665d43ae"},{url:"daemon/0.6/upgrading.html",revision:"2430483e3a10b8dcccf7d55db39add8e"},{url:"daemon/index.html",revision:"bad62b0574f11fe15fc203c9df2759be"},{url:"guides/index.html",revision:"c9f78830f910271dfe06089897c09e23"},{url:"guides/mounts.html",revision:"0e726a985dcf710ae4e21173b99c7237"},{url:"guides/php_upgrade.html",revision:"830c47bcfe04760af8ad740e56740e77"},{url:"index.html",revision:"a03bc3b24e5b4c23bbb827c75954abbb"},{url:"panel/0.7/configuration.html",revision:"c45154d2aa0bd19341910cfeb0a3dc07"},{url:"panel/0.7/getting_started.html",revision:"33b5e260116f0d872c7d60ebc47f2ebb"},{url:"panel/0.7/index.html",revision:"dd619cf033eb82f8bfdd6e1c89d30df9"},{url:"panel/0.7/troubleshooting.html",revision:"0894439b4f0ff4c8c934b0f2ac6f7dfc"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"ebe6f935083cd915359a308cd12252e1"},{url:"panel/0.7/upgrade/0.7.html",revision:"ec67bb39cdf28f4b2f2a5127b4738002"},{url:"panel/0.7/upgrade/index.html",revision:"89361e4cfd480069a4e4cf436e1bb79d"},{url:"panel/0.7/upgrading.html",revision:"7dffb7212fdabb0a24c914cefd441c92"},{url:"panel/0.7/webserver_configuration.html",revision:"23e349677d1cf5913812c4344a443342"},{url:"panel/1.0/additional_configuration.html",revision:"336b5c9ddda593697e3c2e631ecd89c2"},{url:"panel/1.0/btpanel_getstarted.html",revision:"78d6b80c93dcc7f6fccfc406684fb6f0"},{url:"panel/1.0/docker_getstarted.html",revision:"d8f337f7b9a9590346cbf5c1352050a0"},{url:"panel/1.0/getting_started.html",revision:"fe74fec43ce44914be440d627c9d57ce"},{url:"panel/1.0/index.html",revision:"e8fce5e2e9d349f62c62e94e1b368c50"},{url:"panel/1.0/legacy_upgrade.html",revision:"06ae8ac4f534acacf0b580bd23e91d6f"},{url:"panel/1.0/troubleshooting.html",revision:"cfa1fc880e418c962ff7075e3d7fef74"},{url:"panel/1.0/updating.html",revision:"4e5aa8eaaa355c451c3afd33993deae3"},{url:"panel/1.0/webserver_configuration.html",revision:"82277b95cb824302f080f9f36eb5d390"},{url:"panel/index.html",revision:"1220fae34d181acb08266b11da83ba7f"},{url:"project/about.html",revision:"d198480bb161468ae191ef2f817cc5ec"},{url:"project/community.html",revision:"fba1c756f1d0698021a9c3b5eb273cce"},{url:"project/index.html",revision:"4cae9d891c0763994b84aa850f3441f6"},{url:"project/introduction.html",revision:"eb2abef010d4edca5bfd289ac4b4d029"},{url:"project/terms.html",revision:"15c83090a6f7f984fbc6233691b4fb30"},{url:"tutorials/creating_ssl_certificates.html",revision:"5033f86dfd65080e45dc19c28a489100"},{url:"tutorials/index.html",revision:"f0a1b88d41c213f0d4f0bebdaf9b4f58"},{url:"tutorials/mysql_setup.html",revision:"06a66a490d7e8f5e259e510533991103"},{url:"wings/1.0/configuration.html",revision:"4aad225829cb22ccfd4fd163ba2c1cbb"},{url:"wings/1.0/index.html",revision:"39ea117a45459ef9beffa226075551dd"},{url:"wings/1.0/installing.html",revision:"3d8eca5708b6923c4eee79720aca2609"},{url:"wings/1.0/migrating.html",revision:"1bd78bc188622e9e16fdbcc1e6e50894"},{url:"wings/1.0/upgrading.html",revision:"abc695cb840f01868913dcd1ccff5cf4"},{url:"wings/index.html",revision:"a7d1a49151590e66ec20f1135e9563f1"}],{}),e.cleanupOutdatedCaches()}));
