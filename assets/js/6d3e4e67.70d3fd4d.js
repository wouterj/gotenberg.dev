"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[140],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),o=n(6010),l=n(1048),i=n(3609),u=n(1943),s=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:b,groupId:f,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===d?d:null!=(t=null!=d?d:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==T&&!g.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:x}=(0,u.U)(),[w,O]=(0,a.useState)(T),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=k[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==w&&(E(t),O(r),null!=f&&x(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;n=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;n=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:P,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},3388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),o=n(4259),l=n(425);const i={id:"timeout",title:"Timeout"},u=void 0,s={unversionedId:"timeout",id:"version-6.x/timeout",title:"Timeout",description:"All endpoints accept a form field named waitTimeout.",source:"@site/versioned_docs/version-6.x/timeout.mdx",sourceDirName:".",slug:"/timeout",permalink:"/docs/6.x/timeout",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/timeout.mdx",tags:[],version:"6.x",frontMatter:{id:"timeout",title:"Timeout"},sidebar:"version-6.x",previous:{title:"Merge",permalink:"/docs/6.x/merge"},next:{title:"Webhook",permalink:"/docs/6.x/webhook"}},c={},p=[{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All endpoints accept a form field named ",(0,a.kt)("inlineCode",{parentName:"p"},"waitTimeout"),"."),(0,a.kt)("p",null,"The API will wait the given ",(0,a.kt)("strong",{parentName:"p"},"seconds")," before it considers the conversion to be unsucessful.\nIf unsucessful, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"504")," HTTP code."),(0,a.kt)("p",null,"It takes a float as value (e.g ",(0,a.kt)("inlineCode",{parentName:"p"},"2.5")," for 2.5 seconds)."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may also define this value globally: see the ",(0,a.kt)("a",{parentName:"p",href:"environment_variables#default-wait-timeout"},"environment variables")," section.")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/html \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form files=@index.html \\\n     --form waitTimeout=2.5\n"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nindex, _ := gotenberg.NewDocumentFromPath("index.html", "/path/to/file")\nreq := gotenberg.NewHTMLRequest(index)\nreq.WaitTimeout(2.5)\nresp, _ := c.Post(req)\n'))),(0,a.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\DocumentFactory;\nuse TheCodingMachine\\Gotenberg\\HTMLRequest;\nuse TheCodingMachine\\Gotenberg\\Request;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$index = DocumentFactory::makeFromPath('index.html', '/path/to/file');\n$request = new HTMLRequest($index);\n$request->setWaitTimeout(2.5);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))))}d.isMDXComponent=!0}}]);