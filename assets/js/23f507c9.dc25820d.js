"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[1127],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(2713);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",m="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,p=e.values,d=e.groupId,c=e.className,u=a.Children.toArray(e.children),h=null!=p?p:u.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),v=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(f),w=N[0],b=N[1],y=[];if(null!=d){var C=v[d];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&b(C)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),a=h[n].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8108:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(7358),l=n(8448),m=["components"],s={id:"chromium",title:"Chromium"},p=void 0,d={unversionedId:"modules/chromium",id:"modules/chromium",isDocsHomePage:!1,title:"Chromium",description:"The Chromium module interacts with the Chromium browser to convert HTML documents to PDF.",source:"@site/docs/modules/chromium.mdx",sourceDirName:"modules",slug:"/modules/chromium",permalink:"/docs/modules/chromium",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/chromium.mdx",tags:[],version:"current",frontMatter:{id:"chromium",title:"Chromium"},sidebar:"version-7.x",previous:{title:"API",permalink:"/docs/modules/api"},next:{title:"LibreOffice",permalink:"/docs/modules/libreoffice"}},c=[{value:"Properties",id:"properties",children:[]},{value:"Routes",id:"routes",children:[{value:"URL",id:"url",children:[]},{value:"HTML",id:"html",children:[]},{value:"Markdown",id:"markdown",children:[]}]},{value:"Metric",id:"metric",children:[]}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Chromium module interacts with the Chromium browser to convert HTML documents to PDF."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It starts a dedicated Chromium instance for each request."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," Docker image uses Google Chrome stable, while other architectures use an earlier version of Chromium."),(0,o.kt)("p",{parentName:"div"},"Until Google or Debian packages' managers provide a more up-to-date version of Chromium for ",(0,o.kt)("inlineCode",{parentName:"p"},"arm64"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"armhf"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"i386"),"\nplatforms, the Docker images will differ, alas."))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--chromium-allow-file-access-from-files bool    Allow file:// URIs to read other file:// URIs\n--chromium-allow-list                   string  Set the allowed URLs for Chromium using a regular expression\n--chromium-deny-list                    string  Set the denied URLs for Chromium using a regular expression (default "^file:///[^tmp].*")\n--chromium-user-agent                   string  Override the default User-Agent header\n--chromium-ignore-certificate-errors    bool    Ignore the certificate errors\n--chromium-incognito                    bool    Start Chromium with incognito mode\n--chromium-disable-routes               bool    Disable the routes\n')),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("p",null,"Each route accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests."),(0,o.kt)("p",null,"They share the following form fields:"),(0,o.kt)(i.Z,{defaultValue:"paper_props",values:[{label:"Paper Properties",value:"paper_props"},{label:"Header & Footer",value:"header_footer"},{label:"JavaScript",value:"javascript"},{label:"Extra HTTP Headers",value:"extra_http_headers"},{label:"Page Ranges",value:"page_ranges"},{label:"PDF Format",value:"pdf_format"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"paper_props",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"paperWidth        float  Paper width, in inches (default 8.5)\npaperHeight       float  Paper height, in inches (default 11)\nmarginTop         float  Top margin, in inches (default 0.39)\nmarginBottom      float  Bottom margin, in inches (default 0.39)\nmarginLeft        float  Left margin, in inches (default 0.39)\nmarginRight       float  Right margin, in inches (default 0.39)\npreferCssPageSize bool   Define whether to prefer page size as defined by CSS (default false)\nprintBackground   bool   Print the background graphics (default false)\nlandscape         bool   Set the paper orientation to landscape (default false)\nscale             float  The scale of the page rendering (default 1.0)\n")),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-13}","{4-13}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'paperWidth=\"8.27\"' \\\n--form 'paperHeight=\"11.7\"' \\\n--form 'marginTop=\"1\"' \\\n--form 'marginBottom=\"1\"' \\\n--form 'marginLeft=\"1\"' \\\n--form 'marginRight=\"1\"' \\\n--form 'preferCssPageSize=\"false\"' \\\n--form 'printBackground=\"true\"' \\\n--form 'landscape=\"true\"' \\\n--form 'scale=\"2.0\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Examples of paper size (width x height):"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Letter")," - 8.5 x 11 (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Legal")," - 8.5 x 14"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tabloid")," - 11 x 17"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ledger")," - 17 x 11"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A0")," - 33.1 x 46.8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A1")," - 23.4 x 33.1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A2")," - 16.54 x 23.4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A3")," - 11.7 x 16.54"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A4")," - 8.27 x 11.7"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A5")," - 5.83 x 8.27"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"A6")," - 4.13 x 5.83"))))),(0,o.kt)(l.Z,{value:"header_footer",mdxType:"TabItem"},(0,o.kt)("p",null,"Each route accepts files named ",(0,o.kt)("inlineCode",{parentName:"p"},"header.html")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"footer.html"),"."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-5}","{4-5}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'files=@\"/path/to/header.html\"' \\\n--form 'files=@\"/path/to/footer.html\"' \\\n-o my.pdf\n")),(0,o.kt)("p",null,"Each of them has to be a ",(0,o.kt)("strong",{parentName:"p"},"complete HTML document"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n    <style>\n    body {\n        font-size: 8rem;\n        margin: 4rem auto;\n    }\n    </style>\n</head>\n<body>\n<p><span class="pageNumber"></span> of <span class="totalPages"></span></p>\n</body>\n</html>\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following classes allow you to inject printing values:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"date")," - formatted print date."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title")," - document title."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," - document location."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageNumber")," - current page number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"totalPages")," - total pages in the document.")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Margins top and bottom are large enough."),(0,o.kt)("li",{parentName:"ol"},"The font size is big enough.")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are some limitations:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"No JavaScript."),(0,o.kt)("li",{parentName:"ul"},"The CSS properties are independent of the ones from the HTML document."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"footer.html")," CSS properties override the ones from ",(0,o.kt)("inlineCode",{parentName:"li"},"header.html"),"."),(0,o.kt)("li",{parentName:"ul"},"Only fonts installed in the Docker image are loaded - see the ",(0,o.kt)("a",{parentName:"li",href:"../customize/fonts"},"Fonts")," chapter."),(0,o.kt)("li",{parentName:"ul"},"Images only work using a base64 encoded source - i.e., ",(0,o.kt)("inlineCode",{parentName:"li"},"data:image/png;base64, iVBORw0K..."),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"background-color")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"color")," CSS properties require an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"-webkit-print-color-adjust: exact")," CSS property in order to work."),(0,o.kt)("li",{parentName:"ul"},"Assets are not loaded - see ",(0,o.kt)("a",{parentName:"li",href:"#html"},"HTML")," or ",(0,o.kt)("a",{parentName:"li",href:"#markdown"},"Markdown")," routes."))))),(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"waitDelay        duration  Duration to wait when loading an HTML document before converting it to PDF\nwaitWindowStatus string    The window.status value to wait for before converting an HTML document to PDF\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitDelay")),(0,o.kt)("p",null,"When the page relies on JavaScript for rendering, and you don't have access to the page's code, you may want to wait a\ncertain amount of time to make sure Chromium has fully rendered the page you're trying to generate."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'waitDelay=\"5s\"' \\\n-o my.pdf\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"waitWindowStatus")),(0,o.kt)("p",null,"If you have access to the page's code, you may set the window status and tell Gotenberg to wait for a specific value."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await promises()\nwindow.status = 'ready'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'waitWindowStatus=\"ready\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Prefer this option over ",(0,o.kt)("inlineCode",{parentName:"p"},"waitDelay"),".")))),(0,o.kt)(l.Z,{value:"extra_http_headers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"extraHttpHeaders string  HTTP headers to send by Chromium while loading the HTML document (JSON format)\n")),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},'curl \\\n--request POST \'http://localhost:3000/forms/chromium/convert/url\' \\\n--form \'url="https://my.url"\' \\\n--form \'extraHttpHeaders="{\\"MyHeader\\": \\"MyValue\\"}"\' \\\n-o my.pdf\n'))),(0,o.kt)(l.Z,{value:"page_ranges",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nativePageRanges string  Page ranges to print, e.g., '1-5, 8, 11-13' - empty means all pages\n")),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'nativePageRanges=\"1-5\"' \\\n-o my.pdf\n"))),(0,o.kt)(l.Z,{value:"pdf_format",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pdfFormat string  The PDF format of the resulting PDF\n")),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After a Chromium conversion, the PDF engines will convert the resulting PDF to a specific format."),(0,o.kt)("p",{parentName:"div"},"Check the available PDF formats:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"pdf-engines#pdftk"},"PDFtk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"pdf-engines#pdfcpu"},"PDFcpu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"pdf-engines#unoconv"},"unoconv"))))))),(0,o.kt)("h3",{id:"url"},"URL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/url")),(0,o.kt)("p",null,"This route accepts a form field ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," with the URL of the page you want to convert to PDF."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'marginTop=\"0\"' \\\n--form 'marginBottom=\"0\"' \\\n--form 'marginLeft=\"0\"' \\\n--form 'marginRight=\"0\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When converting a website to PDF, you should remove all margins. If not, the resulting PDF might not contain all\ncontent from the page."))),(0,o.kt)("h3",{id:"html"},"HTML"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/html")),(0,o.kt)("p",null,"This route accepts a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3}","{3}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/html' \\\n--form 'files=@\"/path/to/index.html\"' \\\n-o my.pdf\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You may also send additional files, like images, fonts, stylesheets, and so on."),(0,o.kt)("p",null,"The only requirement is that their paths in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file are on the root level."),(0,o.kt)("p",null,"For instance, this will work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="img.png" />\n  </body>\n</html>\n')),(0,o.kt)("p",null,"But this won't:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>My PDF</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n    <img src="/foo/img.png" />\n  </body>\n</html>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-6}","{4-6}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/html' \\\n--form 'files=@\"/path/to/index.html\"' \\\n--form 'files=@\"/path/to/style.css\"' \\\n--form 'files=@\"/path/to/img.png\"' \\\n--form 'files=@\"/path/to/font.woff\"' \\\n-o my.pdf\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remote paths for images, fonts (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://fonts.google.com/"},"Google Fonts"),"), etc., works too."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"../customize/fonts"},"Fonts")," chapter if you want to install fonts in the Docker image."))),(0,o.kt)("h3",{id:"markdown"},"Markdown"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /forms/chromium/convert/markdown")),(0,o.kt)("p",null,"This route accepts a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," plus markdown files."),(0,o.kt)("p",null,"It works like the ",(0,o.kt)("a",{parentName:"p",href:"#html"},"HTML")," route but with access to a Go template function ",(0,o.kt)("inlineCode",{parentName:"p"},"toHTML"),". It converts a\nmarkdown file's content to HTML."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"{8}","{8}":!0},'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>My PDF</title>\n  </head>\n  <body>\n    {{ toHTML "file.md" }}\n  </body>\n</html>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/markdown' \\\n--form 'files=@\"/path/to/index.html\"' \\\n--form 'files=@\"/path/to/file.md\"' \\\n-o my.pdf\n")),(0,o.kt)("h2",{id:"metric"},"Metric"),(0,o.kt)("p",null,"The Chromium module exposes the following metric:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{namespace}_chromium_active_instances_count")," - current number of active Chromium instances.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"Prometheus"},"Prometheus")," for more details."))}h.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);