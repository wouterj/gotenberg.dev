"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[8017],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(m,".").concat(c)]||d[c]||u[c]||i;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(4137));const i={id:"environment_variables",title:"Environment Variables"},r=void 0,l={unversionedId:"environment_variables",id:"version-6.x/environment_variables",title:"Environment Variables",description:"You may customize the API behaviour thanks to environment variables.",source:"@site/versioned_docs/version-6.x/environment_variables.md",sourceDirName:".",slug:"/environment_variables",permalink:"/docs/6.x/environment_variables",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/environment_variables.md",tags:[],version:"6.x",frontMatter:{id:"environment_variables",title:"Environment Variables"},sidebar:"version-6.x",previous:{title:"Clients",permalink:"/docs/6.x/clients"},next:{title:"HTML",permalink:"/docs/6.x/html"}},m={},p=[{value:"Log level",id:"log-level",level:2},{value:"Default listen port",id:"default-listen-port",level:2},{value:"Root path",id:"root-path",level:2},{value:"Disable Google Chrome",id:"disable-google-chrome",level:2},{value:"Default Google Chrome rpcc buffer size",id:"default-google-chrome-rpcc-buffer-size",level:2},{value:"Google Chrome ignore certificate errors",id:"google-chrome-ignore-certificate-errors",level:2},{value:"Disable LibreOffice (unoconv)",id:"disable-libreoffice-unoconv",level:2},{value:"Default wait timeout",id:"default-wait-timeout",level:2},{value:"Maximum wait timeout",id:"maximum-wait-timeout",level:2},{value:"Default webhook URL timeout",id:"default-webhook-url-timeout",level:2},{value:"Maximum webhook URL timeout",id:"maximum-webhook-url-timeout",level:2},{value:"Maximum wait delay",id:"maximum-wait-delay",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You may customize the API behaviour thanks to environment variables."),(0,a.kt)("h2",{id:"log-level"},"Log level"),(0,a.kt)("p",null,"The API provides structured logging allowing you to have relevant information\nabout what's going on."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If a TTY is attached, the log entries are displayed in text format with colors, otherwise in JSON format.")),(0,a.kt)("p",null,"You may customize the severity of the log entries thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),"."),(0,a.kt)("p",null,"It accepts one of the following severities: ",(0,a.kt)("inlineCode",{parentName:"p"},'"DEBUG"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"INFO"')," (default) and ",(0,a.kt)("inlineCode",{parentName:"p"},'"ERROR"'),"."),(0,a.kt)("h2",{id:"default-listen-port"},"Default listen port"),(0,a.kt)("p",null,"By default, the API will listen on port ",(0,a.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,a.kt)("p",null,"You may customize this value with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT_LISTEN_PORT"),"."),(0,a.kt)("p",null,"This environment variable accepts any string that can be turned into a port number."),(0,a.kt)("h2",{id:"root-path"},"Root path"),(0,a.kt)("p",null,"By default, the API root path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("p",null,"You may customize this value with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ROOT_PATH"),"."),(0,a.kt)("p",null,"This environment variable accepts a string starting and ending with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("p",null,"For instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"/gotenberg/")," is a valid value while ",(0,a.kt)("inlineCode",{parentName:"p"},"gotenberg")," is not."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This is useful if you wish to do service discovery via URL paths.")),(0,a.kt)("h2",{id:"disable-google-chrome"},"Disable Google Chrome"),(0,a.kt)("p",null,"In order to save some resources, the Gotenberg image accepts the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DISABLE_GOOGLE_CHROME"),"\nfor disabling Google Chrome."),(0,a.kt)("p",null,"It takes the strings ",(0,a.kt)("inlineCode",{parentName:"p"},'"0"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"1"')," as value where ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If Google Chrome is disabled, the following conversions will ",(0,a.kt)("strong",{parentName:"p"},"not")," be available anymore:\n",(0,a.kt)("a",{parentName:"p",href:"html"},"HTML"),", ",(0,a.kt)("a",{parentName:"p",href:"url"},"URL")," and ",(0,a.kt)("a",{parentName:"p",href:"markdown"},"Markdown"))),(0,a.kt)("h2",{id:"default-google-chrome-rpcc-buffer-size"},"Default Google Chrome rpcc buffer size"),(0,a.kt)("p",null,"When performing a ",(0,a.kt)("a",{parentName:"p",href:"html"},"HTML"),", ",(0,a.kt)("a",{parentName:"p",href:"url"},"URL")," or ",(0,a.kt)("a",{parentName:"p",href:"markdown"},"Markdown")," conversion, the API might return\na ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," HTTP code with the message ",(0,a.kt)("inlineCode",{parentName:"p"},"increase the Google Chrome rpcc buffer size"),"."),(0,a.kt)("p",null,"If so, you may increase this buffer size with the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT_GOOGLE_CHROME_RPCC_BUFFER_SIZE"),"."),(0,a.kt)("p",null,"It takes a string representation of an int as value (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'"1048576"')," for 1 MB).\nThe hard limit is 100 MB and is defined by Google Chrome itself."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The default Google Chrome rpcc buffer size may also be overridden per request thanks to the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"googleChromeRpccBufferSize"),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"html#rpcc-buffer-size"},"rpcc buffer size section"),".")),(0,a.kt)("h2",{id:"google-chrome-ignore-certificate-errors"},"Google Chrome ignore certificate errors"),(0,a.kt)("p",null,"When performing a ",(0,a.kt)("a",{parentName:"p",href:"url"},"URL")," conversion, Google Chrome will not accept certificate errors."),(0,a.kt)("p",null,"You may allow insecure connections by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOGLE_CHROME_IGNORE_CERTIFICATE_ERRORS")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},'"1"'),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You should be careful with this feature and only enable it in your development environment.")),(0,a.kt)("h2",{id:"disable-libreoffice-unoconv"},"Disable LibreOffice (unoconv)"),(0,a.kt)("p",null,"You may also disable LibreOffice (unoconv) with ",(0,a.kt)("inlineCode",{parentName:"p"},"DISABLE_UNOCONV"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If LibreOffice (unoconv) is disabled, the following conversion will ",(0,a.kt)("strong",{parentName:"p"},"not")," be available anymore:\n",(0,a.kt)("a",{parentName:"p",href:"office"},"Office"))),(0,a.kt)("h2",{id:"default-wait-timeout"},"Default wait timeout"),(0,a.kt)("p",null,"By default, the API will wait 10 seconds before it considers the conversion to be unsuccessful.\nIf unsucessful, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"504")," HTTP code."),(0,a.kt)("p",null,"You may customize this timeout thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT_WAIT_TIMEOUT"),"."),(0,a.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The default timeout may also be overridden per request thanks to the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"waitTimeout"),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"timeout"},"timeout section"),".")),(0,a.kt)("h2",{id:"maximum-wait-timeout"},"Maximum wait timeout"),(0,a.kt)("p",null,"By default, the value of the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"waitTimeout")," cannot be more than 30 seconds."),(0,a.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WAIT_TIMEOUT"),"."),(0,a.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,a.kt)("h2",{id:"default-webhook-url-timeout"},"Default webhook URL timeout"),(0,a.kt)("p",null,"By default, the API will wait 10 seconds before it considers the sending of the resulting PDF to be unsuccessful."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"webhook"},"webhook section"),".")),(0,a.kt)("p",null,"You may customize this timeout thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT_WEBHOOK_URL_TIMEOUT"),"."),(0,a.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The default timeout may also be overridden per request thanks to the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURLTimeout"),".\nSee the ",(0,a.kt)("a",{parentName:"p",href:"webhook#timeout"},"webhook timeout section"),".")),(0,a.kt)("h2",{id:"maximum-webhook-url-timeout"},"Maximum webhook URL timeout"),(0,a.kt)("p",null,"By default, the value of the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"webhookURLTimeout")," cannot be more than 30 seconds."),(0,a.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WEBHOOK_URL_TIMEOUT"),"."),(0,a.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,a.kt)("h2",{id:"maximum-wait-delay"},"Maximum wait delay"),(0,a.kt)("p",null,"By default, the value of the form field ",(0,a.kt)("inlineCode",{parentName:"p"},"waitDelay")," cannot be more than 10 seconds."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"html#wait-delay"},"wait delay section"),".")),(0,a.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WAIT_DELAY"),"."),(0,a.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."))}u.isMDXComponent=!0}}]);