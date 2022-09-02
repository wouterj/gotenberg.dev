"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[154],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const a={id:"install",title:"Install"},i=void 0,l={unversionedId:"install",id:"version-6.x/install",title:"Install",description:"Gotenberg is shipped within a Docker image.",source:"@site/versioned_docs/version-6.x/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/6.x/install",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/install.md",tags:[],version:"6.x",frontMatter:{id:"install",title:"Install"},sidebar:"version-6.x",previous:{title:"Introduction",permalink:"/docs/6.x/introduction"},next:{title:"Clients",permalink:"/docs/6.x/clients"}},s={},p=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Cloud Run (Google Cloud)",id:"cloud-run-google-cloud",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gotenberg is shipped within a Docker image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://blazej-adamczyk.medium.com/0-day-bug-breaks-multi-million-dollar-system-38c9e31b27e9"},"Gotenberg should ONLY be used in a trusted network by trusted applications. Do NOT expose Gotenberg to the external world."))),(0,r.kt)("p",null,"You may start it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm -p 3000:3000 thecodingmachine/gotenberg:6\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The API will be available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),".")),(0,r.kt)("p",null,"The image uses a dedicated non-root user called ",(0,r.kt)("inlineCode",{parentName:"p"},"gotenberg")," with uid and gid ",(0,r.kt)("inlineCode",{parentName:"p"},"1001"),"."),(0,r.kt)("p",null,"If you wish to change those uid and gid, you will have to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"clone the project"),(0,r.kt)("li",{parentName:"ul"},"re-build the image"),(0,r.kt)("li",{parentName:"ul"},"publish the image in your own Docker repository")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/thecodingmachine/gotenberg.git\nmake publish GOTENBERG_USER_GID=your_custom_gid GOTENBERG_USER_UID=your_custom_uid DOCKER_REGISTRY=your_registry DOCKER_USER=registry_user DOCKER_PASSWORD=registry_password VERSION=version\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch is always up-to-date with the latest version of the API.")),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"You may also add it in your Docker Compose stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  # your other services\n\n  gotenberg:\n    image: thecodingmachine/gotenberg:6\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The API will be available under ",(0,r.kt)("inlineCode",{parentName:"p"},"gotenberg:3000")," in your Docker Compose network.")),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"It may also be deployed with Kubernetes."),(0,r.kt)("p",null,"Make sure to provide enough memory and CPU requests (for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"512Mi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2")," CPU)."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The more resources are granted, the quicker will be the conversions.")),(0,r.kt)("p",null,"In the deployment specification of the pod, also specify the uid of the user ",(0,r.kt)("inlineCode",{parentName:"p"},"gotenberg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"securityContext:\n  privileged: false\n  runAsUser: 1001\n")),(0,r.kt)("h2",{id:"cloud-run-google-cloud"},"Cloud Run (Google Cloud)"),(0,r.kt)("p",null,"If you're looking for cost savings, you might be interested by ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Cloud Run"),".\nHowever, according to some users, doing asynchronous conversion (with a webhook) might not working."),(0,r.kt)("p",null,"In the following examples, we will assume your\nGotenberg API is available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."))}c.isMDXComponent=!0}}]);