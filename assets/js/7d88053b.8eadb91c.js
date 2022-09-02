"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[796],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=n.createContext({}),c=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(g,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var g in t)hasOwnProperty.call(t,g)&&(a[g]=t[g]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={id:"logging",title:"Logging"},l=void 0,a={unversionedId:"modules/logging",id:"modules/logging",title:"Logging",description:"The Logging module provides a logger to Gotenberg.",source:"@site/docs/modules/logging.md",sourceDirName:"modules",slug:"/modules/logging",permalink:"/docs/modules/logging",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/logging.md",tags:[],version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"version-7.x",previous:{title:"Prometheus",permalink:"/docs/modules/prometheus"},next:{title:"More",permalink:"/docs/modules/more"}},g={},c=[{value:"Properties",id:"properties",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Logging module provides a logger to Gotenberg."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The logger writes ",(0,o.kt)("a",{parentName:"p",href:"https://www.sumologic.com/glossary/structured-logging/#:~:text=Structured%20logging%20is%20the%20practice,data%20sets%20rather%20than%20text."},"structured logs"),".")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--log-format string  Set log format - auto, json, or text (default "auto")\n--log-level  string  Set the log level - error, warn, info, or debug (default "info")\n')))}u.isMDXComponent=!0}}]);