"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[4652],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),a=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=a(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=a(r),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var a=2;a<l;a++)i[a]=r[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var o=r(7462),n=(r(7294),r(4137));const l={id:"prometheus",title:"Prometheus"},i=void 0,s={unversionedId:"modules/prometheus",id:"modules/prometheus",title:"Prometheus",description:"The Prometheus module collects metrics from other modules.",source:"@site/docs/modules/prometheus.md",sourceDirName:"modules",slug:"/modules/prometheus",permalink:"/docs/modules/prometheus",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/prometheus.md",tags:[],version:"current",frontMatter:{id:"prometheus",title:"Prometheus"},sidebar:"version-7.x",previous:{title:"Webhook",permalink:"/docs/modules/webhook"},next:{title:"Logging",permalink:"/docs/modules/logging"}},u={},a=[{value:"Properties",id:"properties",level:2},{value:"Route",id:"route",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Modules",id:"modules",level:3}],c={toc:a};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Prometheus module collects metrics from other modules."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--prometheus-collect-interval      duration  Set the interval for collecting modules' metrics (default 1s)\n--prometheus-namespace             string    Set the namespace of modules' metrics (default \"gotenberg\")\n--prometheus-disable-collect       bool      Disable the collect of metrics\n--prometheus-disable-route-logging bool      Disable the route logging\n")),(0,n.kt)("h2",{id:"route"},"Route"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /prometheus/metrics")),(0,n.kt)("p",null,"This route exposes the metrics from other modules."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("h3",{id:"modules"},"Modules"),(0,n.kt)("p",null,"The following modules provide metrics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"chromium#metric"},"Chromium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"libreoffice#metrics"},"LibreOffice")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pdf-engines#metrics"},"PDF Engines"))))}m.isMDXComponent=!0}}]);