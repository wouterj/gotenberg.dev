"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[8773],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={id:"fonts",title:"Fonts"},i=void 0,l={unversionedId:"customize/fonts",id:"customize/fonts",title:"Fonts",description:"By default, the Docker image contains many fonts, including Asian ones.",source:"@site/docs/customize/fonts.md",sourceDirName:"customize",slug:"/customize/fonts",permalink:"/docs/customize/fonts",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/customize/fonts.md",tags:[],version:"current",frontMatter:{id:"fonts",title:"Fonts"},sidebar:"version-7.x",previous:{title:"Ownership",permalink:"/docs/customize/ownership"},next:{title:"Add Modules",permalink:"/docs/customize/add-modules"}},c={},s=[{value:"<code>.ttf</code>",id:"ttf",level:2},{value:"<code>apt-get install</code>",id:"apt-get-install",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, the Docker image contains many fonts, including Asian ones."),(0,o.kt)("p",null,"If you wish to use more fonts, you will have to build a Docker image."),(0,o.kt)("h2",{id:"ttf"},(0,o.kt)("inlineCode",{parentName:"h2"},".ttf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM gotenberg/gotenberg:7\n\nUSER root\n\nCOPY /local/path/to/{font}.ttf /usr/local/share/fonts/{font}.ttf\n\nUSER gotenberg\n")),(0,o.kt)("p",null,"Or, if you have many fonts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM gotenberg/gotenberg:7\n\nUSER root\n\nCOPY /local/path/to/fonts/* /usr/local/share/fonts/\n\nUSER gotenberg\n")),(0,o.kt)("h2",{id:"apt-get-install"},(0,o.kt)("inlineCode",{parentName:"h2"},"apt-get install")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM gotenberg/gotenberg:7\n\nUSER root\n\nRUN DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends my-fonts-package\n\nUSER gotenberg\n")))}p.isMDXComponent=!0}}]);