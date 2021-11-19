"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5626],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="FAQ",h={unversionedId:"Technical/FAQ",id:"Technical/FAQ",isDocsHomePage:!1,title:"FAQ",description:"What's the point of Enarx?",source:"@site/docs/Technical/FAQ.md",sourceDirName:"Technical",slug:"/Technical/FAQ",permalink:"/docs/Technical/FAQ",editUrl:"https://github.com/enarx/docs/blob/main/docs/Technical/FAQ.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/docs/Technical/Cases"}},c=[{value:"What&#39;s the point of Enarx?",id:"whats-the-point-of-enarx",children:[],level:2},{value:"How do I pronounce &quot;Enarx&quot;?",id:"how-do-i-pronounce-enarx",children:[],level:2},{value:"What does the word Enarx mean?",id:"what-does-the-word-enarx-mean",children:[],level:2},{value:"Is Enarx open source?",id:"is-enarx-open-source",children:[],level:2},{value:"Who needs Enarx?",id:"who-needs-enarx",children:[],level:2},{value:"What&#39;s a TEE?",id:"whats-a-tee",children:[],level:2},{value:"What&#39;s a Keep?",id:"whats-a-keep",children:[],level:2},{value:"Why not do containers?",id:"why-not-do-containers",children:[],level:2},{value:"Is Enarx a host attestation project?",id:"is-enarx-a-host-attestation-project",children:[],level:2},{value:"Does Enarx use/need a TPM?",id:"does-enarx-useneed-a-tpm",children:[],level:2},{value:"Will Enarx support RT (realtime) execution?",id:"will-enarx-support-rt-realtime-execution",children:[],level:2},{value:"Will Enarx offer protection against side-channel attacks?",id:"will-enarx-offer-protection-against-side-channel-attacks",children:[],level:2},{value:"How can I contribute?",id:"how-can-i-contribute",children:[],level:2},{value:"Does Red Hat own Enarx?",id:"does-red-hat-own-enarx",children:[],level:2},{value:"Who writes this stuff?",id:"who-writes-this-stuff",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"whats-the-point-of-enarx"},"What's the point of Enarx?"),(0,r.kt)("p",null,"Enarx aims to make it simple to deploy workloads to a variety of different TEEs in the cloud, on your premises or elsewhere, and to allow you to have confidence that your application workload is as secure as possible."),(0,r.kt)("p",null,"The problem we're trying to address is that there are many sensitive workloads that you shouldn't entrust to a public cloud to run, or may even have concerns about running on on-premises systems.  TEEs (see below) provide a great opportunity to help secure these workloads, but they're not easy to use.  Enarx aims to make it simple to deploy workloads to a variety of different TEE technologies in the cloud, on your premises or elsewhere, and to ensure that your application workload is as secure as possible.  "),(0,r.kt)("p",null,"You can find a basic introduction here: ",(0,r.kt)("a",{parentName:"p",href:"https://aliceevebob.com/2019/05/07/announcing-enarx/"},"Introducing Enarx"),"."),(0,r.kt)("p",null,"If you like your information presented visually, here's ",(0,r.kt)("a",{parentName:"p",href:"Problem"},"the problem we're looking to solve"),"."),(0,r.kt)("h2",{id:"how-do-i-pronounce-enarx"},'How do I pronounce "Enarx"?'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx.github.io/raw/master/assets/audio/enarx.mp3"},"Enarx pronunciation guide (British English)")),(0,r.kt)("p",null,'The way you\'d pronounce the letter "n", then "arks".  En-arks.  Enarx.  ',(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NKHyqjHqQLU&t=66"},"Simple"),"."),(0,r.kt)("h2",{id:"what-does-the-word-enarx-mean"},"What does the word Enarx mean?"),(0,r.kt)("p",null,'It\'s almost Latin for "in the citadel" or "within the stronghold".  ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/npmccallum"},"Nathaniel McCallum")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MikeCamel"},"Mike Bursell"),", who are ultimately to blame for the project, are both old/ancient language geeks, and wanted a cool name.  We tried lots: some were rubbish, some were taken.  We chose Enarx, which also (luckily) turned out not to be trademark-encumbered. "),(0,r.kt)("h2",{id:"is-enarx-open-source"},"Is Enarx open source?"),(0,r.kt)("p",null,"Absolutely.  All of Enarx is, and always will be, open source.  We use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/blob/master/LICENSE"},"Apache 2.0 license"),"."),(0,r.kt)("h2",{id:"who-needs-enarx"},"Who needs Enarx?"),(0,r.kt)("p",null,"Everybody.  No: really.  Do you have some sensitive data or processes?  Yes, you do.  So you're a potential Enarx user. See also \"",(0,r.kt)("a",{parentName:"p",href:"Introduction#use-cases-and-applications"},"Enarx for\u2026"),'" in the Enarx introduction page.'),(0,r.kt)("h2",{id:"whats-a-tee"},"What's a TEE?"),(0,r.kt)("p",null,"A TEE is Trusted Execution Environment.  TEE technology is such a key part of the architecture of Enarx that is has its own page: ",(0,r.kt)("a",{parentName:"p",href:"TEE"},"TEEs (Trusted Execution Environments)"),")."),(0,r.kt)("h2",{id:"whats-a-keep"},"What's a Keep?"),(0,r.kt)("p",null,"A Keep is the Enarx project's term for a TEE instance with all of the Enarx runtime and associated pieces inside it."),(0,r.kt)("h2",{id:"why-not-do-containers"},"Why not do containers?"),(0,r.kt)("p",null,"Would it be possible to implement containers within TEEs?  That depends somewhat on the TEE implementation, but the answer is a \"kind of yes\".  However, when you run containers on a host, the interactions that the container runtime has with the host leak all sorts of information that we really don't want to be making available to it.  One of the design goals of Enarx is to reduce the number of layers that you need to trust, so this isn't a great fit.  We know that containers are great, and one of the interesting sets of questions around Enarx revolves around exactly how you orchestrate Keeps, but whatever that looks like, we won't be doing something which meets the specification for containers, for the reasons outlined above."),(0,r.kt)("h2",{id:"is-enarx-a-host-attestation-project"},"Is Enarx a host attestation project?"),(0,r.kt)("p",null,"No.  Enarx uses attestation as part of its workflow, but it is not a host attestation project (like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/keylime"},"Keylime")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/intel-secl"},"ISECL"),"). Host attestation projects tackle the issue of trust in the host in a different way to Enarx, by measuring the various layers of the stack - typically at boot-up - to check that they are as expected, and have not been substituted for untrusted pieces.  They typically use TPMs (Trusted Platform Modules) as their hardware root of trust.  Enarx aims to remove the need to trust these layers by taking them out of the stack.  We expect both approaches to coexist, at least until TEEs are ubiquitous and people choose to execute all of their workloads in Enarx Keeps!"),(0,r.kt)("h2",{id:"does-enarx-useneed-a-tpm"},"Does Enarx use/need a TPM?"),(0,r.kt)("p",null,"No.  Enarx uses TEEs for generic computation, rather than using the capabilities provided by TPMs for more specialised cryptographic operations.  Enarx also does not need a TPM as part of its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/Trust-architecture"},"trust model"),", which is anchored in the host CPU and firmware.  TPMs are typically used for host attestation, which is a different approach to trust management to that offered by Enarx."),(0,r.kt)("h2",{id:"will-enarx-support-rt-realtime-execution"},"Will Enarx support RT (realtime) execution?"),(0,r.kt)("p",null,"There are currently no plans for Enarx to support RT execution.  The architecture of TEEs means that it would be difficult to make the sorts of guarantees about timely execution that RT applications require, and doing this on top of another operating system (Linux, the host) is not considered feasible at this time."),(0,r.kt)("h2",{id:"will-enarx-offer-protection-against-side-channel-attacks"},"Will Enarx offer protection against side-channel attacks?"),(0,r.kt)("p",null,"The short answer is yes, where possible.",(0,r.kt)("br",{parentName:"p"}),"\n","To expand on this, first of all this is only a goal for now, as we won't be focusing our efforts on it immediately given we are still working on core functionality.\nSecondly, it is likely to be impossible to mitigate all side-channel attacks, but we certainly will attempt to do so where possible, as part of our aim to make Enarx Keeps as secure as possible."),(0,r.kt)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),(0,r.kt)("p",null,"You can find information on how to get started over at ",(0,r.kt)("a",{parentName:"p",href:"/docs/Contributing/Introduction"},"How to contribute"),"."),(0,r.kt)("h2",{id:"does-red-hat-own-enarx"},"Does Red Hat own Enarx?"),(0,r.kt)("p",null,'No single company or organisation "owns" Enarx.  It\'s open source software.   Copyright on code is owned by whoever contributes it to the project.  For more information, try ',(0,r.kt)("a",{parentName:"p",href:"https://opensource.com/resources/what-open-source"},"this definition")," from ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.com"},"Opensource.com")," or our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/blob/master/LICENSE"},"license page")," (spoiler: it's Apache 2.0)."),(0,r.kt)("h2",{id:"who-writes-this-stuff"},"Who writes this stuff?"),(0,r.kt)("p",null,"Well, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MikeCamel"},"Mike Bursell")," wrote quite a lot of this, which is why it's in pristine British English, with the exception of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"any typos"),(0,r.kt)("li",{parentName:"ul"},"the few times that ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/npmccallum"},"Nathaniel McCallum")," pressured him into writing something understandable by broader audiences",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(why ",(0,r.kt)("em",{parentName:"li"},"can't")," we have ",(0,r.kt)("strong",{parentName:"li"},"Enarx'"),' as the possessive for "Enarx"?)'))),(0,r.kt)("li",{parentName:"ul"},'the word "LICENSE", which is an important part of the project, and has established meaning within the project hierarchy.'),(0,r.kt)("li",{parentName:"ul"},"the bits written by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/axelsimon"},"axel simon"),", which are in less-than-pristine hybrid English (and usually of lower entertainment value).")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);