"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6385],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=p,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(2182),p=t(9028),o=(t(9496),t(9613)),l=["components"],a={id:"uninstall",title:"\u5378\u8f7d pnpm"},i=void 0,c={unversionedId:"uninstall",id:"uninstall",title:"\u5378\u8f7d pnpm",description:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/zh/next/uninstall",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"uninstall",title:"\u5378\u8f7d pnpm"},sidebar:"docs",previous:{title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684",permalink:"/zh/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/zh/next/pnpm-vs-npm"}},m={},u=[{value:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",level:2},{value:"\u79fb\u9664 pnpm CLI",id:"\u79fb\u9664-pnpm-cli",level:2},{value:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",level:2}],s={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"},"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"),(0,o.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,o.kt)("p",null,"\u8981\u5217\u51fa\u6240\u6709\u5168\u5c40\u5305\uff0c\u8bf7\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\u3002 \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u5168\u5c40\u5305\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," \u5217\u51fa\u6bcf\u4e2a\u5168\u5c40\u5305\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," \u627e\u5230\u5168\u5c40\u76ee\u5f55\u7684\u4f4d\u7f6e\u5e76\u624b\u52a8\u5220\u9664\u5b83\u3002")),(0,o.kt)("h2",{id:"\u79fb\u9664-pnpm-cli"},"\u79fb\u9664 pnpm CLI"),(0,o.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,o.kt)("p",null,"You might also want to clean the ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 npm \u5b89\u88c5 pnpm\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u4f7f\u7528 npm \u5378\u8f7d pnpm\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,o.kt)("h2",{id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"},"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,o.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);