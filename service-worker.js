if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),c={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>c[e]||r(e)))).then((e=>(d(...e),n)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/0.4_to_0.5.html-CRHZ-c_x.js",revision:"06ba785bcd9a8db4309a0e39d7a8d5c7"},{url:"assets/0.5_to_0.6.html-DyoHK3Wq.js",revision:"c177c1502466653915ec108309b987fc"},{url:"assets/0.5.html-DwdBRN3n.js",revision:"0389c2bfde2d182eec5744df7a350e79"},{url:"assets/0.6_to_0.7.html-CfpFWH0B.js",revision:"26a863047fb801ae6109e696bae3b195"},{url:"assets/0.6.html-CNPR1pUN.js",revision:"b8fe5f933066e7870af6a09d007adfb1"},{url:"assets/0.7.html-BX5h0eKs.js",revision:"515acf08bd769dfa3736c9e130475646"},{url:"assets/404.html-BGfWPss2.js",revision:"4171105be5df569da1d889c30152d326"},{url:"assets/about.html-DEDXW79J.js",revision:"3a3dd3e8ee864ba700c5b67f4115debb"},{url:"assets/about.html-DKhgJwgG.js",revision:"b9cb2cd8e5d846fe2be52f3a456652ab"},{url:"assets/add_node.html-6GjrxNpX.js",revision:"ec07c7b324e7cdedc166eff491685fb4"},{url:"assets/additional_configuration.html-d-32rjpV.js",revision:"88c930bb5c26a8931d3512085ecf84af"},{url:"assets/app-B3hu-smj.js",revision:"bbc5eb48da152815cf0a49655b3ea0d9"},{url:"assets/artisan.html-BseeTRSW.js",revision:"c9f4347175f2882c88dc1c87d07b1e5c"},{url:"assets/btpanel_getstarted.html-BoLOULOr.js",revision:"1796b59bf5db525aced03b98a59e86ab"},{url:"assets/centos7.html-DxyoDDhH.js",revision:"455a82e6c6a1795db48de3e2acb11c19"},{url:"assets/centos7.html-KyUou3Jc.js",revision:"b92aeec7f847622fbf74b6295dde6099"},{url:"assets/centos8.html-BVstHcNU.js",revision:"390bc0af04405eb182acc0f2d1a08ce7"},{url:"assets/centos8.html-klmqNd3Z.js",revision:"c9fbc94ee384e849c0b19e8eafc3f8c6"},{url:"assets/community.html-DsGMjGEi.js",revision:"a3c5c47d552d24afbac05df5dbb29005"},{url:"assets/configuration.html-Bj8CmLJW.js",revision:"8ad08d4c7e03f11a1446282d6a9c190c"},{url:"assets/configuration.html-CCVxMFgR.js",revision:"9f05ff94b167df208b8f0b68b10a7b90"},{url:"assets/configuration.html-DEhNW5Fj.js",revision:"a65aee5fc5618ad4b748fb3369f00ba3"},{url:"assets/creating_a_custom_egg.html-DpMe_xCv.js",revision:"02cb195ee049cde6e3b55b5ffaf4abf8"},{url:"assets/creating_a_custom_image.html-B8x3AQid.js",revision:"53ed689fcb8880c5364ba7cdae3769bd"},{url:"assets/creating_ssl_certificates.html-D4VP0GHx.js",revision:"2299a02a40588580c284048a46ed5b8e"},{url:"assets/debian_8_docker.html-YwLPn53T.js",revision:"cddb66275c3d19f9279eb07130498221"},{url:"assets/debian.html-D6fcYsXK.js",revision:"f691f53889c7035736ea85fb90305206"},{url:"assets/debian.html-GRAy0jUH.js",revision:"9b2dffd5eec073128b8aa5a5a7907390"},{url:"assets/docker_getstarted.html-D3uRSvDK.js",revision:"0b63f1c1740b31fe3bd2efa25a77eb70"},{url:"assets/getting_started.html-DlidpkVz.js",revision:"d3fa50bf44653c6d5627f2e3cf97d84c"},{url:"assets/getting_started.html-DYpT3l96.js",revision:"1c68bf89c23da70fa63dc55a9ca596bf"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_4ueDoYq.js",revision:"e143200464bfb0e598058fe7bfaa87f2"},{url:"assets/index.html-9neK2jGG.js",revision:"59f46b76ecd71a0df57804014a7c92e5"},{url:"assets/index.html-Be5ZROTM.js",revision:"4b98b0a1196ae689a7034d3c0e8c9e42"},{url:"assets/index.html-BFJr8HUl.js",revision:"64beff038a83d0d8ca956ea4da94440c"},{url:"assets/index.html-BJKxNhPr.js",revision:"0079a367555ec41834339e942e53e7be"},{url:"assets/index.html-BNiHmqAO.js",revision:"b1d4305846d2f04b13dfff11929c7487"},{url:"assets/index.html-BpCzWI1Q.js",revision:"c6ae462076f93cfc53ecfcadf7d781e1"},{url:"assets/index.html-BuxqtXyC.js",revision:"83a8588fdf1f0acb289bf670f18bb31e"},{url:"assets/index.html-c82MZi2a.js",revision:"eed9a1834d5c7ad403cb8369fea88bef"},{url:"assets/index.html-CF55l17W.js",revision:"45f9f4e3ddebfce897d7e464d4e2df5e"},{url:"assets/index.html-Cg-IoV1E.js",revision:"66616279f87f28ed405513efa52f0bfb"},{url:"assets/index.html-CgTkd4OW.js",revision:"1aac820543c522490ae6ee13da2ef2f8"},{url:"assets/index.html-ChmZ7vRJ.js",revision:"a6662c074e08e64ce31b96bb79742ab1"},{url:"assets/index.html-CMTRc0JY.js",revision:"a2103cd8543820e51cb1c7afb79b2726"},{url:"assets/index.html-Cum1gLn-.js",revision:"18482616dff598d0dfa618416fbed8f2"},{url:"assets/index.html-CUWsnrRH.js",revision:"c774949293cc5ce9a288116a071c32bc"},{url:"assets/index.html-CYfTsIr7.js",revision:"eb008a7d18d385038a6ee208cd1dc2d5"},{url:"assets/index.html-DNlwGCFK.js",revision:"7ff9d6fe8b01c757a6177dd9229c68b1"},{url:"assets/index.html-gwDlDCFu.js",revision:"a60ff41c95c4624082f1124e3b4874be"},{url:"assets/index.html-K6Xd_Ltn.js",revision:"6983de452dad406715cd3296d3601da0"},{url:"assets/index.html-MD9YGUbV.js",revision:"908d4422c44d2b7dcc4f5b9639480288"},{url:"assets/index.html-vogK2x7L.js",revision:"542c08ca5e4e4662449e0f04e100fd19"},{url:"assets/index.html-zDagldnM.js",revision:"8105b114c7aa9e48a2a4aa8184fa93cd"},{url:"assets/installing.html-Chbep6-S.js",revision:"55008d3ca358c975b91e5e89da6f60d9"},{url:"assets/installing.html-kOCpNIJn.js",revision:"51c7dbff1f93ad64054cf4d4a6dadbc8"},{url:"assets/introduction.html-CoGjPYtU.js",revision:"2590616655b9c8325485a3bd61408973"},{url:"assets/kernel_modifications.html-d7d9ScQ6.js",revision:"80a4cfd620cc6cdfc8f05de7854e88b2"},{url:"assets/legacy_upgrade.html-D0c_MX8-.js",revision:"48b98febea13e93a223bfa56eb74613c"},{url:"assets/markdown.esm-BG2Xu2Hd.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/migrating.html-DF9PWtHj.js",revision:"c2f837bea6033f63215cc8d0d5742db1"},{url:"assets/minecraft.html-DMY1HxLz.js",revision:"5cd39ab06acf1e51b7deabda6ed567cb"},{url:"assets/mounts.html-B2oeJx2B.js",revision:"d05a3eddca34cb1d89c58f7dc8eaf80c"},{url:"assets/mysql_setup.html-LsZXo0iC.js",revision:"ce8b3d613d31e8a8a8ae6e31cbce56af"},{url:"assets/panel.html-Dd400VnM.js",revision:"b57747036effe84e51c2a909152fb04c"},{url:"assets/photoswipe.esm-SzV8tJDW.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/php_upgrade.html-CSmX199k.js",revision:"07800db19a9972ed12445ebcca84709e"},{url:"assets/plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/reveal.esm-CYbl4_PU.js",revision:"d7a2a78c9e57530577ca771ebd6203f1"},{url:"assets/standalone_sftp.html-B5uxvcYp.js",revision:"f40212526749488c894f3f3e1f478da4"},{url:"assets/style-DoHw-qs3.css",revision:"485a38da48156c6be15130f1eae3b1ed"},{url:"assets/terms.html-D8-nwly6.js",revision:"ba787b1271d881583902d36dcf0eddd1"},{url:"assets/troubleshooting.html-BvlmhLlX.js",revision:"86adef791b6ce75b9e08257372bc44ff"},{url:"assets/troubleshooting.html-DBYjzD6J.js",revision:"bea00b9eff995b87d9d0c5cfdbbc50d2"},{url:"assets/ubuntu1804.html-CN9A2CFI.js",revision:"47295dd6b47eabaea1a4649eb253fac7"},{url:"assets/ubuntu1804.html-Du_uHgyR.js",revision:"e55cb0e8e91c68ed7080594bd41a9fc6"},{url:"assets/ubuntu2004.html-B9PHN4lb.js",revision:"3283aca19500e5a5b4408654af4ce717"},{url:"assets/ubuntu2004.html-rKac_n18.js",revision:"60fe5e2e53be143301774f5c5835c4a2"},{url:"assets/updating.html-BN3__7CK.js",revision:"b78aa44f00b8b6ef7f04b7003a97b1bd"},{url:"assets/upgrading.html-D1M5o0E_.js",revision:"a1f026c49bd7b346fb5e6d6e3097fc39"},{url:"assets/upgrading.html-D4ysMrJI.js",revision:"8861ee109b190e62e6631b53ec446d16"},{url:"assets/upgrading.html-DYjRtyDB.js",revision:"faaf234bcffc10c8b333b3b0937828e4"},{url:"assets/webserver_configuration.html-A71XgjNt.js",revision:"0282e2c58729408557981250d5c75091"},{url:"assets/webserver_configuration.html-BNsPEwdt.js",revision:"afdb95d6bb20c2b32dde2d47b5d77313"},{url:"assets/wings_configuration_example-CiiF11xE.js",revision:"e0576ca1ee55a2bea8484bb93399c3da"},{url:"assets/wings.html-DtIyid6i.js",revision:"e90de1d10dc1987562acbd42ffba4b99"},{url:"favicons/safari-pinned-tab.svg",revision:"db7d6b19affde4828e29e156a292d578"},{url:"frontpage/loading.svg",revision:"f9ac6b8127286b1a1b15d6938f96ea4a"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"logos/pterry.svg",revision:"f3fb9eb4376d84e63d648afd82d42591"},{url:"pterodactyl-flat.svg",revision:"210292be2b55fff33f927f259db9f81c"},{url:"404.html",revision:"9ec482e8aa1d51e41ac5087e5bc99333"},{url:"community/about.html",revision:"23913f263c8f19b6abd776eda0bbf3c2"},{url:"community/config/eggs/creating_a_custom_egg.html",revision:"b4110e081cbbb9794e81bbeb4067f358"},{url:"community/config/eggs/creating_a_custom_image.html",revision:"6c3468535517d480696f89b554eb488e"},{url:"community/config/eggs/index.html",revision:"34d2a28a05921ecc925cd85bd49bb5b7"},{url:"community/config/index.html",revision:"05a3727d0470a7287bc6be4c21774545"},{url:"community/config/nodes/add_node.html",revision:"2c5293567f27ee5af58023ebaf1d16ff"},{url:"community/config/nodes/index.html",revision:"a6e746de82c405eb76200315c13d01cd"},{url:"community/customization/index.html",revision:"c6873edd5934cbc495dde18912122767"},{url:"community/customization/panel.html",revision:"b47f386fb819a16ac751e5898d0fb2f3"},{url:"community/customization/wings.html",revision:"70a702d97a5538510f6ea49998daa1cd"},{url:"community/games/index.html",revision:"f0bcbaf975408e0f952c328fb1951a17"},{url:"community/games/minecraft.html",revision:"4b7b47a373f8bc045b7a061befb6bc62"},{url:"community/index.html",revision:"f825ccda50080256712b588359309612"},{url:"community/installation-guides/index.html",revision:"c121294b6933c8ab312a08831e18b3d8"},{url:"community/installation-guides/panel/centos7.html",revision:"3d9413363caa1daf6d87424831b5ad15"},{url:"community/installation-guides/panel/centos8.html",revision:"9f4a7d98ca5c6a278f0cb7b483ed202d"},{url:"community/installation-guides/panel/debian.html",revision:"48b20b718d1710fbcb1656fab22e1ee7"},{url:"community/installation-guides/panel/index.html",revision:"82c3a17e846cff17ee835fa538002e8a"},{url:"community/installation-guides/panel/ubuntu1804.html",revision:"6a87c6f4b535f3cdd00fc91c9f54aa01"},{url:"community/installation-guides/panel/ubuntu2004.html",revision:"eb436dfa7d1b069d966728daaba8a1c4"},{url:"community/installation-guides/wings/centos7.html",revision:"0731fc04a30dc4d01a40ebcd2fc450e3"},{url:"community/installation-guides/wings/centos8.html",revision:"80a09d895660235629014c503cf73192"},{url:"community/installation-guides/wings/debian.html",revision:"8cd60a65dcb7f8ab84badcc87148b08f"},{url:"community/installation-guides/wings/index.html",revision:"8eaef2059c1a2ef76652bc24117ca9eb"},{url:"community/installation-guides/wings/ubuntu1804.html",revision:"ef2d4a9a14ffbe58a6aab5f45be67910"},{url:"community/installation-guides/wings/ubuntu2004.html",revision:"d61a458301ff14b184e18fc589efbf07"},{url:"community/tutorials/artisan.html",revision:"6aa124fc8070081bc9a392375f2899c4"},{url:"community/tutorials/index.html",revision:"0b53e51adeb7abca19f4ce13ab7dd560"},{url:"daemon/0.6/configuration.html",revision:"1b310a822714b999e15f887d74c35984"},{url:"daemon/0.6/debian_8_docker.html",revision:"e2956db54ae620f01efaae67060df423"},{url:"daemon/0.6/index.html",revision:"8ea770e9f086f9f3c14ee150593cc3e2"},{url:"daemon/0.6/installing.html",revision:"f895c5438a4537d0aa2dc18149e0137f"},{url:"daemon/0.6/kernel_modifications.html",revision:"8e6afe7152f29253ec8fac236a75a3e7"},{url:"daemon/0.6/standalone_sftp.html",revision:"65c22ddf2b876dd55cebab53a609c25e"},{url:"daemon/0.6/upgrade/0.4_to_0.5.html",revision:"6d54d532c9422c50a3565efd44a7836e"},{url:"daemon/0.6/upgrade/0.5_to_0.6.html",revision:"a8f12eefb9b1414f8b5dfcc863ad3a36"},{url:"daemon/0.6/upgrade/0.5.html",revision:"717be9fd4fa5ac81a43e171bdfbdb63b"},{url:"daemon/0.6/upgrade/0.6.html",revision:"3b4bf67a5d3d1ca34ba082c654141a83"},{url:"daemon/0.6/upgrade/index.html",revision:"57bd7e367fd02442d79fd472e620aea6"},{url:"daemon/0.6/upgrading.html",revision:"64e017897c635577576b3bfad84975e9"},{url:"daemon/index.html",revision:"52ee9b8e72ca5ed01cc4345aa7445297"},{url:"guides/index.html",revision:"071ff7aab3757e98a9202b89b7998bd8"},{url:"guides/mounts.html",revision:"58ceaab6a2efe208915232879e9a801f"},{url:"guides/php_upgrade.html",revision:"d76c731003497cfa63d270cc28fb8fb1"},{url:"index.html",revision:"caffa3025f6b4b4f54ef5c8e0dc1104e"},{url:"panel/0.7/configuration.html",revision:"d22778ef886d90a824245e23b562832a"},{url:"panel/0.7/getting_started.html",revision:"41d34c428394bc85f728c78805c46286"},{url:"panel/0.7/index.html",revision:"6f8914c22fb4c6047cde5d2db3176a9a"},{url:"panel/0.7/troubleshooting.html",revision:"e787071aaec8b3ff8de88dd071d3d17d"},{url:"panel/0.7/upgrade/0.6_to_0.7.html",revision:"cf5a995943dc057814d7b0323c3be1cb"},{url:"panel/0.7/upgrade/0.7.html",revision:"942658bd454abf384c59417a5abf4b48"},{url:"panel/0.7/upgrade/index.html",revision:"bf2fa693925a6b521a6cc6b87428f18a"},{url:"panel/0.7/upgrading.html",revision:"df1399e10fb15d891ecf38530ffb8c89"},{url:"panel/0.7/webserver_configuration.html",revision:"bd16f352f50af688f4a189364fc74a95"},{url:"panel/1.0/additional_configuration.html",revision:"f54b168967104af6b92cb6987cd4d2a2"},{url:"panel/1.0/btpanel_getstarted.html",revision:"2b45cc73c99b878dfb10370fb47e28a3"},{url:"panel/1.0/docker_getstarted.html",revision:"db99d7eda4b3248c231082b91144c3ee"},{url:"panel/1.0/getting_started.html",revision:"c911c5d15c46a6ece06bfcdec5ac8160"},{url:"panel/1.0/index.html",revision:"f59f69d8dc6b98f92c5db2920a05695e"},{url:"panel/1.0/legacy_upgrade.html",revision:"40806513334beec54707bba9373533da"},{url:"panel/1.0/troubleshooting.html",revision:"2bbdd5ba05e2783032477c2dbadb2a81"},{url:"panel/1.0/updating.html",revision:"685f220b6fc56c731459a30b41ac977e"},{url:"panel/1.0/webserver_configuration.html",revision:"954cd5240671a5329a3cde92288d655b"},{url:"panel/index.html",revision:"37347517dee678b222515b0579d49d0f"},{url:"project/about.html",revision:"c3f0f72e9beb1d082aa4f2e12ae6003f"},{url:"project/community.html",revision:"0f2c929d999032faa50450caa678ae28"},{url:"project/index.html",revision:"a6c995a237cc796bc0bb83d836f6bff2"},{url:"project/introduction.html",revision:"6fb8993336712462f3b25ffb981c09af"},{url:"project/terms.html",revision:"c80b115d456c3bbc24bd61b652bbad23"},{url:"tutorials/creating_ssl_certificates.html",revision:"72fc1ccb545281e114027fdf916903d2"},{url:"tutorials/index.html",revision:"6e6d34aefc9746892de46afc01baa778"},{url:"tutorials/mysql_setup.html",revision:"ff6fe73c57a875b139441c1973295ea6"},{url:"wings/1.0/configuration.html",revision:"58b0cced5639796cd07a7238ab813001"},{url:"wings/1.0/index.html",revision:"50cc9b6b70db6d786ee2c36f44504735"},{url:"wings/1.0/installing.html",revision:"4b4b534b3c2d66a506f0f5c232a81f3b"},{url:"wings/1.0/migrating.html",revision:"aab21b945a21e718468280a2f4ab5ad0"},{url:"wings/1.0/upgrading.html",revision:"8a6b09b9e41e9d26395794fa9534a656"},{url:"wings/index.html",revision:"6a2cc839295d1d344414d4055942f1de"}],{}),e.cleanupOutdatedCaches()}));
