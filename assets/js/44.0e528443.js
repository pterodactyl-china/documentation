(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{392:function(t,s,a){"use strict";a.r(s);var e=a(48),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"debian-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian-10"}},[t._v("#")]),t._v(" Debian 10")]),t._v(" "),a("p",[t._v("In this guide we will install Pterodactyl's Wings v1.X — including all of it's dependencies — and configure it to use a SSL connection.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#install-requirements"}},[t._v("Install Requirements")]),a("ul",[a("li",[a("a",{attrs:{href:"#docker"}},[t._v("Docker")])])])]),a("li",[a("a",{attrs:{href:"#installing-wings"}},[t._v("Installing Wings")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This guide is based off the "),a("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for Debian 10.")],1)]),t._v(" "),a("h2",{attrs:{id:"install-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements"}},[t._v("#")]),t._v(" Install Requirements")]),t._v(" "),a("p",[t._v("We will first begin by installing all of Wings' "),a("RouterLink",{attrs:{to:"/wings/1.0/installing.html#dependencies"}},[t._v("required")]),t._v(" dependencies.")],1),t._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## install apt tools")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg2 software-properties-common\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Import the docker gpg key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/debian/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Add the docker stable repo")]),t._v("\nadd-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/debian '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Enable docker service")]),t._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" docker\nsystemctl start docker\n")])])]),a("h2",{attrs:{id:"installing-wings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-wings"}},[t._v("#")]),t._v(" Installing Wings")]),t._v(" "),a("p",[t._v("Great, now all of the dependencies have been dealt with. From here follow the "),a("RouterLink",{attrs:{to:"/wings/1.0/installing.html#enabling-swap"}},[t._v("official Wings installation documentation")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);