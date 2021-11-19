"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9046],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Lab Machines",c={unversionedId:"Contributing/Lab",id:"Contributing/Lab",isDocsHomePage:!1,title:"Lab Machines",description:"Enarx requires specific hardware to run \u2013\xa0and by extension to develop\xa0\u2013 namely a CPU with a supported Trusted Execution Environment.",source:"@site/docs/Contributing/Lab.md",sourceDirName:"Contributing",slug:"/Contributing/Lab",permalink:"/docs/Contributing/Lab",editUrl:"https://github.com/enarx/docs/blob/main/docs/Contributing/Lab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Outreach",permalink:"/docs/Contributing/Outreach"},next:{title:"Introduction",permalink:"/docs/Technical/Introduction"}},u=[{value:"Obtaining access",id:"obtaining-access",children:[],level:2},{value:"Using the lab machines",id:"using-the-lab-machines",children:[{value:"Connecting to the machines",id:"connecting-to-the-machines",children:[],level:3},{value:"Adding software packages",id:"adding-software-packages",children:[],level:3},{value:"Installing Rust",id:"installing-rust",children:[],level:3},{value:"Maintaining long-running sessions",id:"maintaining-long-running-sessions",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-machines"},"Lab Machines"),(0,o.kt)("p",null,"Enarx requires specific hardware to run \u2013\xa0and by extension to develop\xa0\u2013 namely a CPU with a supported Trusted Execution Environment."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://packet.com"},"Packet.com"),", we have some lab machines available, with direct hardware access (bare metal).",(0,o.kt)("br",{parentName:"p"}),"\n","These machines are open to the community to work on."),(0,o.kt)("p",null,"This document explains the rules regarding these machines as well as how to access them and use them."),(0,o.kt)("h2",{id:"obtaining-access"},"Obtaining access"),(0,o.kt)("p",null,"Access to the Enax Lab machines is relatively open, and the machines are intended to be used by the community. We do expect you to have started contributing to the project and to know you a minimum first, so please join the ",(0,o.kt)("a",{parentName:"p",href:"https://chat.enarx.dev"},"chat")," if you haven't already done so."),(0,o.kt)("p",null,"Practically, to request access, you will need to open a Pull Request against the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enarx/packet.com"},"enarx/packet.com")," repository, adding your user and SSH key to the Kickstart file used to configure the server (",(0,o.kt)("inlineCode",{parentName:"p"},"enarx.ks"),")."),(0,o.kt)("p",null,"You must follow the rules laid out in the kickstart file, reproduced below for clarity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"## Interactive User Policy\n## 1. User names MUST match GitHub accounts\n## 2. Users MUST be locked\n## 3. Users MUST define an ssh key\n")),(0,o.kt)("p",null,"Don't forget to also pick a user and group ID (uid, gid). Use the next available number, by looking at the currently used ones."),(0,o.kt)("p",null,"Regarding SSH\xa0keys, please try to stick to something modern."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enarx/packet.com/pull/17/files"},"one of the previous")," PRs as a model."),(0,o.kt)("h2",{id:"using-the-lab-machines"},"Using the lab machines"),(0,o.kt)("p",null,"We currently have two lab machines:"),(0,o.kt)("p",null,"An AMD SEV box, at rome.sev.lab.enarx.dev."),(0,o.kt)("p",null,"An Intel SGX2 box, at coffeelake.sgx.lab.enarx.dev."),(0,o.kt)("p",null,"Both machines are running Fedora (32, currently), with SELinux enforcing (of course)."),(0,o.kt)("h3",{id:"connecting-to-the-machines"},"Connecting to the machines"),(0,o.kt)("p",null,"Once your user has been created and SSH\xa0key authorized, you can connect using SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh my-github-username@rome.sev.lab.enarx.dev\n")),(0,o.kt)("h3",{id:"adding-software-packages"},"Adding software packages"),(0,o.kt)("p",null,"To request installation of software, please file a PR adding the package to the ",(0,o.kt)("inlineCode",{parentName:"p"},"enarx.ks")),(0,o.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"Given Enarx is written in Rust, you will want to install Rust and Cargo, its package manager."),(0,o.kt)("p",null,"To do so, follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"Code#rust"},"How to contribute code")," and install Rust to your home directory via rustup.rs."),(0,o.kt)("h3",{id:"maintaining-long-running-sessions"},"Maintaining long-running sessions"),(0,o.kt)("p",null,"The lab machines have ",(0,o.kt)("inlineCode",{parentName:"p"},"tmux")," installed, which will enable you to leave things running (such as compilation jobs).",(0,o.kt)("br",{parentName:"p"}),"\n","If you are new to tmux, this ",(0,o.kt)("a",{parentName:"p",href:"https://thoughtbot.com/blog/a-tmux-crash-course"},"crash course")," and ",(0,o.kt)("a",{parentName:"p",href:"https://thevaluable.dev/tmux-boost-productivity-terminal/"},"detailed walkthrough")," of a possible Tmux workflow may come in handy."))}d.isMDXComponent=!0}}]);