"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7149],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(2962),i=n(2742),a=(n(9496),n(9613)),o=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"cli/audit",title:"pnpm audit",description:"Checks for known security issues with the installed packages.",source:"@site/docs/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/next/cli/audit",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/audit.md",tags:[],version:"current",lastUpdatedBy:"Coby Sher",lastUpdatedAt:1668040139,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm patch-commit <path>",permalink:"/next/cli/patch-commit"},next:{title:"pnpm list",permalink:"/next/cli/list"}},u={},d=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Checks for known security issues with the installed packages."),(0,a.kt)("p",null,"If security issues are found, try to update your dependencies via ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update"),".\nIf a simple update does not fix all the issues, use ",(0,a.kt)("a",{parentName:"p",href:"/next/package_json#pnpmoverrides"},"overrides")," to force\nversions that are not vulnerable. For instance, if ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable,\nuse this overrides to force ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Or alternatively, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,a.kt)("p",null,"If you want to tolerate some vulnerabilities as they don't affect your project, you may use the ",(0,a.kt)("a",{parentName:"p",href:"/next/package_json#pnpmauditconfigignorecves"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves"))," setting."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"low"),", ",(0,a.kt)("strong",{parentName:"li"},"moderate"),", ",(0,a.kt)("strong",{parentName:"li"},"high"),", ",(0,a.kt)("strong",{parentName:"li"},"critical")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"low"))),(0,a.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,a.kt)("h3",{id:"--fix"},"--fix"),(0,a.kt)("p",null,"Add overrides to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file in order to force non-vulnerable versions of the dependencies."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Output audit report in JSON format."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only audit dev dependencies."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Only audit production dependencies."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Don't audit ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,a.kt)("p",null,"If the registry responds with a non-200 status code, the process should exit with 0.\nSo the process will fail only if the registry actually successfully responds with found vulnerabilities."))}m.isMDXComponent=!0}}]);