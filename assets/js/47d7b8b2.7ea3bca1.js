"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[4925],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8448:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},7358:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(2713);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,r=e.block,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,c=n.Children.toArray(e.children),h=null!=d?d:c.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),f=k.tabGroupChoices,g=k.setTabGroupChoices,b=(0,n.useState)(v),N=b[0],y=b[1],T=[];if(null!=p){var w=f[p];null!=w&&w!==N&&h.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var t=e.currentTarget,a=T.indexOf(t),n=h[a].value;y(n),null!=p&&(g(p,n),setTimeout((function(){var e,a,n,r,o,i,l,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.target)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.target)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:C,onClick:C},null!=a?a:t)}))),a?(0,n.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},2713:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},6071:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=a(7358),l=a(8448),s=["components"],u={id:"api",title:"API"},d=void 0,p={unversionedId:"modules/api",id:"modules/api",isDocsHomePage:!1,title:"API",description:"The API module is an HTTP/1 and HTTP/2 (H2C) server. Other modules may add routes, middlewares, and health checks.",source:"@site/docs/modules/api.mdx",sourceDirName:"modules",slug:"/modules/api",permalink:"/docs/modules/api",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/api.mdx",tags:[],version:"current",frontMatter:{id:"api",title:"API"},sidebar:"version-7.x",previous:{title:"Cloud Run",permalink:"/docs/get-started/cloud-run"},next:{title:"Chromium",permalink:"/docs/modules/chromium"}},m=[{value:"Properties",id:"properties",children:[]},{value:"Routes",id:"routes",children:[{value:"Health",id:"health",children:[]},{value:"Modules",id:"modules",children:[]}]},{value:"Middlewares",id:"middlewares",children:[{value:'Trace <span class="badge badge--secondary">all routes</span>',id:"trace-all-routes",children:[]},{value:'Timeout <span class="badge badge--secondary">all routes</span>',id:"timeout-all-routes",children:[]},{value:'Output Filename <span class="badge badge--secondary">multipart</span>',id:"output-filename-multipart",children:[]},{value:"Modules",id:"modules-1",children:[]}]}],c={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API module is an HTTP/1 and HTTP/2 (H2C) server. Other modules may add routes, middlewares, and health checks."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(i.Z,{defaultValue:"port",values:[{label:"Port",value:"port"},{label:"Timeout",value:"timeout"},{label:"Root path",value:"root_path"},{label:"Trace",value:"trace"},{label:"Health",value:"health"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"port",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--api-port          int     Set the port on which the API should listen (default 3000)\n--api-port-from-env string  Set the environment variable with the port on which the API should listen - override the default port\n"))),(0,o.kt)(l.Z,{value:"timeout",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--api-read-timeout    duration  Set the maximum duration allowed to read a complete request, including the body (default 30s)\n--api-process-timeout duration  Set the maximum duration allowed to process a request (default 30s)\n--api-write-timeout   duration  Set the maximum duration before timing out writes of the response (default 30s)\n"))),(0,o.kt)(l.Z,{value:"root_path",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--api-root-path string  Set the root path of the API - for service discovery via URL paths (default "/")\n'))),(0,o.kt)(l.Z,{value:"trace",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--api-trace-header string  Set the header name to use for identifying requests (default "Gotenberg-Trace")\n'))),(0,o.kt)(l.Z,{value:"health",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--api-disable-health-check-logging bool  Disable health check logging\n")))),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("h3",{id:"health"},"Health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET /health")),(0,o.kt)(i.Z,{defaultValue:"success",values:[{label:"Success",value:"success"},{label:"Error",value:"error"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"success",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Status: 200 OK\n\nContent-Type: application/json\nGotenberg-Trace: {trace}\n\nBody:\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "up",\n    "details": {\n        "moduleX": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n        "moduleY": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"error",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Status: 503 Service Unavailable\n\nContent-Type: application/json\nGotenberg-Trace: {trace}\n\nBody:\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "down",\n    "details": {\n        "moduleX": {\n            "status": "up",\n            "timestamp": "2021-07-01T08:05:14.603364Z"\n        },\n        "moduleY": {\n            "status": "down",\n            "timestamp": "2021-07-01T08:05:14.603364Z",\n            "error": "An health check error"\n        },\n    }\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are no health checks in the standard version of Gotenberg. The ",(0,o.kt)("inlineCode",{parentName:"p"},"details")," key is therefore not present."))),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("h4",{id:"multipartform-data"},"multipart/form-data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"METHOD /forms/{module}/{handler}")),(0,o.kt)("p",null,"The following modules provide ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," routes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"chromium"},"Chromium")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"libreoffice"},"LibreOffice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"pdf-engines"},"PDF Engines"))),(0,o.kt)(i.Z,{defaultValue:"success",values:[{label:"Success",value:"success"},{label:"Error",value:"error"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"success",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Status: 200 OK\n\nContent-Disposition: attachement; filename={output-filename.ext}\nContent-Type: {content-type}\nContent-Length: {content-length}\nGotenberg-Trace: {trace}\n\nBody: {output-file}\n"))),(0,o.kt)(l.Z,{value:"error",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Status: {status}\n\nContent-Type: text/plain; charset=UTF-8\nGotenberg-Trace: {trace}\n\nBody: {error}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"other-routes"},"Other routes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"METHOD /{module}/{handler}")),(0,o.kt)("p",null,"Currently, only the following module provides a non-",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," route:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"prometheus"},"Prometheus"))),(0,o.kt)("h2",{id:"middlewares"},"Middlewares"),(0,o.kt)("h3",{id:"trace-all-routes"},"Trace ",(0,o.kt)("span",{class:"badge badge--secondary"},"all routes")),(0,o.kt)("p",null,"The trace, or request ID, identifies a request in the logs."),(0,o.kt)("p",null,"By default, the API generates a ",(0,o.kt)("em",{parentName:"p"},"UUID")," trace for each request. However, you may also specify the trace per request,\nthanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gotenberg-Trace")," header."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Trace: debug' \\\n--form 'url=\"https://my.url\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The API adds a header ",(0,o.kt)("inlineCode",{parentName:"p"},"Gotenberg-Trace")," to each response. If you're using the webhook feature, it also adds the header\nto each request to your callbacks."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may customize the trace header thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--api-trace-header")," property."))),(0,o.kt)("h3",{id:"timeout-all-routes"},"Timeout ",(0,o.kt)("span",{class:"badge badge--secondary"},"all routes")),(0,o.kt)("p",null,"The API returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"503 Service Unavailable")," response if a request fails to finish before a given duration in one of\nthese steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The server is reading a request."),(0,o.kt)("li",{parentName:"ol"},"A route handler is processing a request."),(0,o.kt)("li",{parentName:"ol"},"A route handler keeps processing a request, even if the timeout duration has expired (hard timeout)."),(0,o.kt)("li",{parentName:"ol"},"The server is writing a response.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may customize the timeout durations thanks to the following properties:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--api-read-timeout")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--api-process-timeout")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--api-write-timeout"))))),(0,o.kt)("h3",{id:"output-filename-multipart"},"Output Filename ",(0,o.kt)("span",{class:"badge badge--secondary"},"multipart")),(0,o.kt)("p",null,"By default, the API generates a ",(0,o.kt)("em",{parentName:"p"},"UUID")," filename. However, you may also specify the filename per request, thanks to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Gotenberg-Output-Filename")," header."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Output-Filename: result' \\\n--form 'url=\"https://my.url\"' \\\n-O -J\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The API adds the file extension automatically; you don't have to set it."))),(0,o.kt)("h3",{id:"modules-1"},"Modules"),(0,o.kt)("p",null,"Currently, only the following module provides a middleware:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"webhook"},"Webhook"))))}h.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);