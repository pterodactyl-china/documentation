(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{397:function(t,e,a){"use strict";a.r(e);var s=a(48),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"additional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[t._v("#")]),t._v(" Additional Configuration")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("This Software is Abandoned")]),t._v(" "),a("p",[t._v("This documentation is for "),a("strong",[t._v("abandoned software")]),t._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),t._v(" "),a("p",[t._v("You should be installing and using "),a("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[t._v("Wings")]),t._v(" in production environments with\n"),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[t._v("Pterodactyl Panel 1.0")]),t._v(".")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#output-throttles"}},[t._v("Output Throttles")])]),a("li",[a("a",{attrs:{href:"#custom-network-interfaces"}},[t._v("Custom Network Interfaces")])]),a("li",[a("a",{attrs:{href:"#private-registries"}},[t._v("Private Registries")])]),a("li",[a("a",{attrs:{href:"#security-policies"}},[t._v("Security Policies")])]),a("li",[a("a",{attrs:{href:"#container-policy"}},[t._v("Container Policy")]),a("ul",[a("li",[a("a",{attrs:{href:"#default-security-opts-array"}},[t._v("Default Security Opts Array")])]),a("li",[a("a",{attrs:{href:"#default-capabilities-drop-array"}},[t._v("Default Capabilities Drop Array")])])])]),a("li",[a("a",{attrs:{href:"#enabling-cloudflare"}},[t._v("Enabling Cloudflare")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("These are advanced configurations for the daemon. You risk breaking your daemon and making containers un-usable if\nyou modify something incorrectly. Proceed at your own risk, and only if you know what each configuration value does.")])]),t._v(" "),a("p",[t._v("The documentation below uses dot-notated JSON to explain where each setting should live. You will need to manually\nexpand this syntax when adding to the "),a("code",[t._v("core.json")]),t._v(" file for the Daemon. For example, something like "),a("code",[t._v("internals.throttle.enabled")]),t._v("\nwould be expanded to the JSON below.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"internals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"throttle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"output-throttles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-throttles"}},[t._v("#")]),t._v(" Output Throttles")]),t._v(" "),a("p",[t._v("There are a few throttle limits built into the Daemon to keep people from causing issues with data volume and CPU usage.\nUnder normal circumstances users should not encounter these limits. You might see the occasional data throttling\nwarning while starting a server or when there is a sudden spike in data output.")]),t._v(" "),a("p",[t._v("If you're seeing more servers than you expected being killed as a result of the Daemon throttler, you can make\nadjustments to the settings below. Please note the configs below are in JSON dot-notation and should be expanded\nout into a normal JSON object.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Path")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enabled")])]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Determines if the throttle (and associated values below) should be used.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("kill_at_count")])]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("The number of warnings that can accumulate for a particular instance before the server process is killed. The decay time below affects how quickly this value is decreased.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("decay")])]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("The number of seconds that a server process must go without triggering a data throttle warning before the throttle count begins decreasing. This loop is processed every 5 seconds and will decrement the throttle count by one when the process goes more than this number of seconds without a data throttle occurring.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("bytes")])]),t._v(" "),a("td",[t._v("30720")]),t._v(" "),a("td",[t._v("⚠️ "),a("em",[t._v("(removed in v0.5.5)")]),t._v(" The maximum number of bytes of data that can be output in the defined interval before a warning occurs.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("lines")])]),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("⚠️ "),a("em",[t._v("(added in v0.5.6)")]),t._v(" The number of lines that can be output by the server process in the defined check interval time. By default, 5,000 lines in ~500ms results in a server process kill.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("check_interval_ms")])]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("The number of milliseconds between the throttle resetting the used bytes or line count.")])])])]),t._v(" "),a("p",[t._v("Please note that all of the settings above are in the "),a("code",[t._v("internals.throttle.X")]),t._v(" path. So, "),a("code",[t._v("enabled")]),t._v(" is actually "),a("code",[t._v("internals.throttle.enabled")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"custom-network-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-network-interfaces"}},[t._v("#")]),t._v(" Custom Network Interfaces")]),t._v(" "),a("p",[t._v("If for whatever reason you need to modify the network interfaces used for Pterodactyl's local Docker network you\ncan do so by modifying the "),a("code",[t._v("core.json")]),t._v(" file for the daemon. In most cases you'll just be modifying the network\nname to allow your servers to use the host network stack. To do so, just change "),a("code",[t._v("docker.network.name")]),t._v(" to be "),a("code",[t._v("host")]),t._v("\nrather than "),a("code",[t._v("pterodactyl_nw")]),t._v(" as shown below.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("While changing to the host network stack does allow servers running on Pterodactyl to have direct access to local\ninterfaces and bind to specific IP addresses (required for some Steam games), it is not recommended on public\ninstallations of Pterodactyl (where you have other users running servers).")]),t._v(" "),a("p",[t._v("Using the "),a("code",[t._v("host")]),t._v(" stack removes many network specific protections afforded by Docker, and will allow server processes\nto access anything on the host, as well as bind to any IP or Port they wish.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("危险")]),t._v(" "),a("p",[t._v("Any changes to the network after the daemon has been started will require you to remove the docker network and restart the daemon. Any servers on the host need to be stopped before and most likely rebuilt.")]),t._v(" "),a("p",[t._v("The following will stop the daemon, remove the network, and start the daemon again. Run at your own risk."),a("br"),t._v(" "),a("code",[t._v("systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docker"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"socket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/run/docker.sock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoupdate_images"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pterodactyl_nw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interfaces"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"v4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subnet"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.0/16"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gateway"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"interface"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"172.18.0.1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"private-registries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-registries"}},[t._v("#")]),t._v(" Private Registries")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Path")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("username")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("The username to use when connecting to the registry.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("password")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("The password associated with the account.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("images")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("An array of images that are associated with the private registry.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("auth")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("email")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("serveraddress")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("The address to the server the registry is located on.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("key")])]),t._v(" "),a("td",[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("A pre-generated base64 encoded authentication string. If provided none of the above options are required.")])])])]),t._v(" "),a("p",[t._v("Please note that all of the settings above are in the "),a("code",[t._v("docker.registry.X")]),t._v(" path. So, "),a("code",[t._v("username")]),t._v(" is actually "),a("code",[t._v("docker.registry.username")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"security-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-policies"}},[t._v("#")]),t._v(" Security Policies")]),t._v(" "),a("p",[t._v("This daemon ships with a very strict security configuration designed to limit access to the host system, and mitigate\na large range of potential attack vectors. However, some users might need to tweak these settings, or are running on\na private instance and are willing to decrease some of the security measures.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Path")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("ipv6")])]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Set this to false to disable IPv6 networking on the pterodactyl0 interface.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("internal")])]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Set this to true to prevent any external network access to all containers on the pterodactyl0 interface.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("enable_icc")])]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Set this to false to disallow containers to access services running on the host system's non-public IP addresses. Setting this to false does make it impossible to connect (from a container) to MySQL/Redis/etc. running on the host system without using the public IP address.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("enable_ip_masquerade")])]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Set this to false to disable IP Masquerading on the pterodactyl0 interface.")])])])]),t._v(" "),a("p",[t._v("Please note that all of the settings above are in the "),a("code",[t._v("docker.policy.network.X")]),t._v(" path. So, "),a("code",[t._v("ipv6")]),t._v(" is actually "),a("code",[t._v("docker.policy.network.ipv6")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"container-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-policy"}},[t._v("#")]),t._v(" Container Policy")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting Path")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("tmpfs")])]),t._v(" "),a("td",[a("code",[t._v("rw,exec,nosuid,size=50M")])]),t._v(" "),a("td",[t._v("These are the arguments used for mounting a "),a("code",[t._v("tmpfs")]),t._v(" directory into containers to allow certain programs to run.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("log_driver")])]),t._v(" "),a("td",[t._v("none")]),t._v(" "),a("td",[t._v("⚠️ This option was "),a("strong",[t._v("removed")]),t._v(" in "),a("code",[t._v("v0.6")]),t._v(" and is forcibly set to "),a("code",[t._v("json-file")]),t._v(". The log driver to use for containers. We default to "),a("code",[t._v("none")]),t._v(" to mitigate a potential DoS attack vector if a server were to spam log output.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("log_opts")])]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("log_opts.max_size")])]),t._v(" "),a("td",[a("code",[t._v("5m")])]),t._v(" "),a("td",[t._v("The maximum size of the server output log file created by Docker.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("log_opts.max_files")])]),t._v(" "),a("td",[a("code",[t._v("1")])]),t._v(" "),a("td",[t._v("The maximum number of files that Docker will create with output from the server.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("readonly_root")])]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Determines if the root filesystem of the container should be readonly.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("securityopts")])]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("An array of security options to apply to a container. The default array is provided below.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("cap_drop")])]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("An array of linux capabilities to drop from the container (in addition to ones "),a("a",{attrs:{href:"https://docs.docker.com/engine/security/security/#linux-kernel-capabilities",target:"_blank",rel:"noopener noreferrer"}},[t._v("dropped by docker already"),a("OutboundLink")],1),t._v(". A listing of the default array is below.")])])])]),t._v(" "),a("p",[t._v("Please note that all of the settings above are in the "),a("code",[t._v("docker.policy.container.X")]),t._v(" path. So, "),a("code",[t._v("tmpfs")]),t._v(" is actually "),a("code",[t._v("docker.policy.container.tmpfs")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"default-security-opts-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-security-opts-array"}},[t._v("#")]),t._v(" Default Security Opts Array")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'no-new-privileges'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"default-capabilities-drop-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-capabilities-drop-array"}},[t._v("#")]),t._v(" Default Capabilities Drop Array")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("Starting with "),a("code",[t._v("v0.6")]),t._v(" of the Daemon, the following previously "),a("em",[t._v("dropped")]),t._v(" capabilities are available in containers: "),a("code",[t._v("chown")]),t._v(", "),a("code",[t._v("kill")]),t._v(", "),a("code",[t._v("setgid")]),t._v(", and "),a("code",[t._v("setuid")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    'setpcap'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'mknod'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'audit_write'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_raw'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'dac_override'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fowner'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'fsetid'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'net_bind_service'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'sys_chroot'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    'setfcap'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"enabling-cloudflare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-cloudflare"}},[t._v("#")]),t._v(" Enabling Cloudflare")]),t._v(" "),a("p",[t._v("Enabling Cloudflare on the daemon isn't particularly useful since users do not connect directly to the daemon port, and users need an unproxied hostname to access any servers on the node.  As a result it's not possible to conceal the IP address of your node machine, but some people want to enable it regardless.")]),t._v(" "),a("p",[t._v("Cloudflare only proxies the default daemon port (8080) when using HTTP.  In order to get the daemon to work with Cloudflare when HTTPS is enabled you must change the daemon port to one that Cloudflare will proxy such as 8443.  Since Cloudflare only proxies HTTP/HTTPS traffic for non-enterprise plans you cannot proxy the SFTP port.")])])}),[],!1,null,null,null);e.default=o.exports}}]);