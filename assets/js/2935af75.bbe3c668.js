"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[74],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),i=n(1048),l=n(9623),o=n(6010),s="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,u=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),b=N.tabGroupChoices,y=N.setTabGroupChoices,P=(0,r.useState)(g),w=P[0],D=P[1],F=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=b[m];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&D(C)}var O=function(e){var t=e.currentTarget,n=F.indexOf(t),a=h[n].value;a!==w&&(_(t),D(a),null!=m&&y(m,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;n=F[a]||F[0];break;case"ArrowLeft":var r=F.indexOf(e.currentTarget)-1;n=F[r]||F[F.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return F.push(e)},onKeyDown:T,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},635:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=n(5529),o=n(8448),s=["components"],p={id:"pdf-engines",title:"PDF Engines"},u=void 0,d={unversionedId:"modules/pdf-engines",id:"modules/pdf-engines",title:"PDF Engines",description:"The PDF Engines module gathers all engines that can manipulate PDF files.",source:"@site/docs/modules/pdf-engines.mdx",sourceDirName:"modules",slug:"/modules/pdf-engines",permalink:"/docs/modules/pdf-engines",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/pdf-engines.mdx",tags:[],version:"current",frontMatter:{id:"pdf-engines",title:"PDF Engines"},sidebar:"version-7.x",previous:{title:"LibreOffice",permalink:"/docs/modules/libreoffice"},next:{title:"Webhook",permalink:"/docs/modules/webhook"}},c=[{value:"Properties",id:"properties",children:[],level:2},{value:"Routes",id:"routes",children:[{value:"Merge",id:"merge",children:[],level:3},{value:"Convert",id:"convert",children:[],level:3}],level:2},{value:"Engines",id:"engines",children:[{value:"PDFtk",id:"pdftk",children:[],level:3},{value:"PDFcpu",id:"pdfcpu",children:[],level:3},{value:"QPDF",id:"qpdf",children:[],level:3},{value:"UNO",id:"uno",children:[],level:3}],level:2},{value:"Metrics",id:"metrics",children:[],level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The PDF Engines module gathers all engines that can manipulate PDF files."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It calls each engine until one successfully handles a task."))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--pdfengines-engines        strings  Set the PDF engines and their order - all by default\n--pdfengines-disable-routes bool     Disable the routes\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't need all PDF engines, you may select only those you're interested in."),(0,i.kt)("p",{parentName:"div"},"For instance ",(0,i.kt)("inlineCode",{parentName:"p"},"--pdfengines-engines=pdftk,uno-pdfengine")," selects ",(0,i.kt)("a",{parentName:"p",href:"#pdftk"},"PDFtk")," as the first\nengine, and ",(0,i.kt)("a",{parentName:"p",href:"#uno"},"UNO")," as the second."))),(0,i.kt)("h2",{id:"routes"},"Routes"),(0,i.kt)("p",null,"Each route accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests."),(0,i.kt)("h3",{id:"merge"},"Merge"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /forms/pdfengines/merge")),(0,i.kt)("p",null,"This route accepts PDF files and merges them alphabetically."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3-6}","{3-6}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n-o my.pdf\n")),(0,i.kt)(l.Z,{defaultValue:"pdf_format",values:[{label:"PDF Format",value:"pdf_format"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pdf_format",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pdfFormat string  The PDF format of the resulting PDF\n")),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After a merge, the PDF engines will convert the resulting PDF to a specific format."),(0,i.kt)("p",{parentName:"div"},"Check the available PDF formats:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pdf-engines#pdftk"},"PDFtk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pdf-engines#pdfcpu"},"PDFcpu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pdf-engines#qpdf"},"QPDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"pdf-engines#uno"},"UNO"))))))),(0,i.kt)("h3",{id:"convert"},"Convert"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /forms/pdfengines/convert")),(0,i.kt)("p",null,"This route accepts PDF files and a form field ",(0,i.kt)("inlineCode",{parentName:"p"},"pdfFormat")," for converting them into the specified format."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7-8}","{7-8}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/convert' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.zip\n")),(0,i.kt)("h2",{id:"engines"},"Engines"),(0,i.kt)("h3",{id:"pdftk"},"PDFtk"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module name: ",(0,i.kt)("inlineCode",{parentName:"li"},"pdftk")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Merge"),(0,i.kt)("li",{parentName:"ul"},"\u274c Convert")),(0,i.kt)("p",null,"This engine uses ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/pdftk-java/pdftk"},"PDFtk")," - give it a star \u2b50\ufe0f"),(0,i.kt)("h3",{id:"pdfcpu"},"PDFcpu"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module name: ",(0,i.kt)("inlineCode",{parentName:"li"},"pdfcpu")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Merge"),(0,i.kt)("li",{parentName:"ul"},"\u274c Convert")),(0,i.kt)("p",null,"This engine uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pdfcpu/pdfcpu"},"PDFcpu")," - give it a star \u2b50\ufe0f"),(0,i.kt)("h3",{id:"qpdf"},"QPDF"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module name: ",(0,i.kt)("inlineCode",{parentName:"li"},"qpdf")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Merge"),(0,i.kt)("li",{parentName:"ul"},"\u274c Convert")),(0,i.kt)("p",null,"This engine uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/qpdf/qpdf"},"QPDF")," - give it a star \u2b50\ufe0f"),(0,i.kt)("h3",{id:"uno"},"UNO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module name: ",(0,i.kt)("inlineCode",{parentName:"li"},"uno-pdfengine")),(0,i.kt)("li",{parentName:"ul"},"\u274c Merge"),(0,i.kt)("li",{parentName:"ul"},"\u2705 Convert (formats: ",(0,i.kt)("inlineCode",{parentName:"li"},"PDF/A-1a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PDF/A-2b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PDF/A-3b"),")")),(0,i.kt)("p",null,"This engine uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unoconv/unoconv"},"unoconv")," - give it a star \u2b50\ufe0f"),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"The PDF Engines module exposes the following metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{namespace}_pdftk_active_instances_count")," - current number of active PDFtk instances."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{namespace}_qpdf_active_instances_count")," - current number of active QPDF instances."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{namespace}_unoconv_active_instances_count")," - current number of active unoconv instances."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{namespace}_libreoffice_listener_active_instances_count")," - current number of active LibreOffice listener instances."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{namespace}_libreoffice_listener_queue_length")," - current number of processes in the LibreOffice listener queue.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The metrics ",(0,i.kt)("inlineCode",{parentName:"p"},"unoconv_listener_active_instances_count")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unoconv_listener_queue_length"),"\nare deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"libreoffice_listener_active_instances_count")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"libreoffice_listener_queue_length"),"."))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"Prometheus"},"Prometheus")," for more details."))}f.isMDXComponent=!0}}]);