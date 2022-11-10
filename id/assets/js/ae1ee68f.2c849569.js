"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8636],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(2962),r=t(2742),i=(t(9496),t(9613)),l=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/id/cli/audit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm patch-commit <path>",permalink:"/id/cli/patch-commit"},next:{title:"pnpm list",permalink:"/id/cli/list"}},d={},u=[{value:"Opsi",id:"opsi",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang."),(0,i.kt)("p",null,"Jika masalah keamanan ditemukan, coba perbarui dependensi Anda melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Jika sebuah update sederhana tidak memperbaiki semua masalah, gunakan ",(0,i.kt)("a",{parentName:"p",href:"/id/package_json#pnpmoverrides"},"overrides")," untuk memaksa versi yang tidak rentan. Misalnya, jika ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash @<2.1.0")," rentan, gunakan overrides untuk memaksa ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Atau sebagai alternatif, jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,i.kt)("p",null,"If you want to tolerate some vulnerabilities as they don't affect your project, you may use the ",(0,i.kt)("a",{parentName:"p",href:"/id/package_json#pnpmauditconfigignorecves"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm.auditConfig.ignoreCves"))," setting."),(0,i.kt)("h2",{id:"opsi"},"Opsi"),(0,i.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"low"),", ",(0,i.kt)("strong",{parentName:"li"},"moderate"),", ",(0,i.kt)("strong",{parentName:"li"},"high"),", ",(0,i.kt)("strong",{parentName:"li"},"critical")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"low"))),(0,i.kt)("p",null,"Tampilkan saran dengan tingkat keparahan yang lebih besar dari atau sama dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,i.kt)("h3",{id:"--fix"},"--fix"),(0,i.kt)("p",null,"Tambahkan penggantian ke file ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," untuk memaksa versi dependensi yang tidak rentan."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Keluarkan laporan audit dalam format JSON."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Hanya audit dependensi dev."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only audit production dependencies."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Jangan audit ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,i.kt)("p",null,"Jika registri merespons dengan kode status non-200, proses harus keluar dengan 0. Jadi prosesnya akan gagal hanya jika registri benar-benar berhasil merespons dengan kerentanan yang ditemukan."))}m.isMDXComponent=!0}}]);