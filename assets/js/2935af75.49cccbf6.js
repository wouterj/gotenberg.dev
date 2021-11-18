"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[2074],{8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),l=n(1048),i=n(2713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3309),u=n(6010),p="tabItem_1uMI";function d(e){var t,n,a,l=e.lazy,i=e.block,d=e.defaultValue,m=e.values,c=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),b=N.tabGroupChoices,P=N.setTabGroupChoices,D=(0,r.useState)(g),F=D[0],w=D[1],T=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var y=b[c];null!=y&&y!==F&&h.some((function(e){return e.value===y}))&&w(y)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==F&&(C(t),w(a),null!=c&&P(c,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:F===t?0:-1,"aria-selected":F===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":F===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:E,onClick:E},null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===F}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==F})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},635:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=n(7225),o=n(8448),s=["components"],u={id:"pdf-engines",title:"PDF Engines"},p=void 0,d={unversionedId:"modules/pdf-engines",id:"modules/pdf-engines",isDocsHomePage:!1,title:"PDF Engines",description:"The PDF Engines module gathers all engines that can manipulate PDF files.",source:"@site/docs/modules/pdf-engines.mdx",sourceDirName:"modules",slug:"/modules/pdf-engines",permalink:"/docs/modules/pdf-engines",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/modules/pdf-engines.mdx",tags:[],version:"current",frontMatter:{id:"pdf-engines",title:"PDF Engines"},sidebar:"version-7.x",previous:{title:"LibreOffice",permalink:"/docs/modules/libreoffice"},next:{title:"Webhook",permalink:"/docs/modules/webhook"}},m=[{value:"Properties",id:"properties",children:[],level:2},{value:"Routes",id:"routes",children:[{value:"Merge",id:"merge",children:[],level:3},{value:"Convert",id:"convert",children:[],level:3}],level:2},{value:"Engines",id:"engines",children:[{value:"PDFtk",id:"pdftk",children:[],level:3},{value:"PDFcpu",id:"pdfcpu",children:[],level:3},{value:"unoconv",id:"unoconv",children:[],level:3}],level:2},{value:"Metric",id:"metric",children:[],level:2}],c={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The PDF Engines module gathers all engines that can manipulate PDF files."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It calls each engine until one successfully handles a task."))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--pdfengines-engines        strings  Set the PDF engines - all by default\n--pdfengines-disable-routes bool     Disable the routes\n")),(0,l.kt)("h2",{id:"routes"},"Routes"),(0,l.kt)("p",null,"Each route accepts ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," requests."),(0,l.kt)("h3",{id:"merge"},"Merge"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /forms/pdfengines/merge")),(0,l.kt)("p",null,"This route accepts PDF files and merges them alphabetically."),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3-6}","{3-6}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n-o my.pdf\n")),(0,l.kt)(i.Z,{defaultValue:"pdf_format",values:[{label:"PDF Format",value:"pdf_format"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"pdf_format",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pdfFormat string  The PDF format of the resulting PDF\n")),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"After a merge, the PDF engines will convert the resulting PDF to a specific format."),(0,l.kt)("p",{parentName:"div"},"Check the available PDF formats:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pdf-engines#pdftk"},"PDFtk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pdf-engines#pdfcpu"},"PDFcpu")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pdf-engines#unoconv"},"unoconv"))))))),(0,l.kt)("h3",{id:"convert"},"Convert"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /forms/pdfengines/convert")),(0,l.kt)("p",null,"This route accepts PDF files and a form field ",(0,l.kt)("inlineCode",{parentName:"p"},"pdfFormat")," for converting them into the specified format."),(0,l.kt)("p",null,"For instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7-8}","{7-8}":!0},"curl \\\n--request POST 'http://localhost:3000/forms/pdfengines/convert' \\\n--form 'files=@\"/path/to/pdf1.pdf\"' \\\n--form 'files=@\"/path/to/pdf2.pdf\"' \\\n--form 'files=@\"/path/to/pdf3.pdf\"' \\\n--form 'files=@\"/path/to/pdf4.pdf\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.zip\n")),(0,l.kt)("h2",{id:"engines"},"Engines"),(0,l.kt)("h3",{id:"pdftk"},"PDFtk"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Module name: ",(0,l.kt)("inlineCode",{parentName:"li"},"pdftk")),(0,l.kt)("li",{parentName:"ul"},"\u2705 Merge"),(0,l.kt)("li",{parentName:"ul"},"\u274c Convert")),(0,l.kt)("p",null,"This engine uses ",(0,l.kt)("a",{parentName:"p",href:"https://gitlab.com/pdftk-java/pdftk"},"PDFtk")," - give it a star \u2b50\ufe0f"),(0,l.kt)("h3",{id:"pdfcpu"},"PDFcpu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Module name: ",(0,l.kt)("inlineCode",{parentName:"li"},"pdfcpu")),(0,l.kt)("li",{parentName:"ul"},"\u2705 Merge"),(0,l.kt)("li",{parentName:"ul"},"\u274c Convert")),(0,l.kt)("p",null,"This engine uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pdfcpu/pdfcpu"},"PDFcpu")," - give it a star \u2b50\ufe0f"),(0,l.kt)("h3",{id:"unoconv"},"unoconv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Module name: ",(0,l.kt)("inlineCode",{parentName:"li"},"unoconv-pdfengine")),(0,l.kt)("li",{parentName:"ul"},"\u274c Merge"),(0,l.kt)("li",{parentName:"ul"},"\u2705 Convert (format ",(0,l.kt)("inlineCode",{parentName:"li"},"PDF/A-1a"),")")),(0,l.kt)("p",null,"This engine uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/unoconv/unoconv"},"unoconv")," - give it a star \u2b50\ufe0f"),(0,l.kt)("h2",{id:"metric"},"Metric"),(0,l.kt)("p",null,"The PDF Engines module exposes the following metric:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{namespace}_pdftk_active_instances_count")," - current number of active PDFtk instances.")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"Prometheus"},"Prometheus")," for more details."))}f.isMDXComponent=!0}}]);