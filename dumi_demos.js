(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{F4QJ:function(T,v,f){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;function l(){var r=g(f("q1tI"));return l=function(){return r},r}function t(){var r=f("dEAq");return t=function(){return r},r}function g(r){return r&&r.__esModule?r:{default:r}}function E(r,n){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);n&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(r,b).enumerable})),c.push.apply(c,d)}return c}function u(r){for(var n=1;n<arguments.length;n++){var c=arguments[n]!=null?arguments[n]:{};n%2?E(Object(c),!0).forEach(function(d){I(r,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):E(Object(c)).forEach(function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(c,d))})}return r}function I(r,n,c){return n in r?Object.defineProperty(r,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[n]=c,r}var M=function(n){return n.render()},R=function(n,c){var d=[],b=n.match.params.uuid,j=n.location.query.wrapper===void 0,p=c[b];if(p){var _=u(u({},p.previewerProps),{},{hideActions:(p.previewerProps.hideActions||[]).concat(["EXTERNAL"])});n.location.query.capture!==void 0&&(_.motions=(_.motions||[]).slice(),_.motions.unshift("autoplay"),_.motions.every(function(S){return!S.startsWith("capture")})&&_.motions.push("capture:[id|=root]")),j?d=[l().default.createElement(M,{render:function(){return(0,t().useMotions)(_.motions||[],typeof window!="undefined"?document.documentElement:null),l().default.createElement("div",{},l().default.createElement(p.component))}})]:d=[_,l().default.createElement(p.component)]}return d};v.default=R},RZMt:function(T,v,f){},Zxc8:function(T,v,f){"use strict";f.r(v);var l=f("q1tI"),t=f.n(l),g=f("k3GJ"),E=f("MZF8"),u=f("dEAq"),I=f.n(u),M=f("H1Ra"),R=f("RZMt"),r=f.n(R);function n(a,i){return p(a)||j(a,i)||d(a,i)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(a,i){if(!!a){if(typeof a=="string")return b(a,i);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(a,i)}}function b(a,i){(i==null||i>a.length)&&(i=a.length);for(var o=0,m=new Array(i);o<i;o++)m[o]=a[o];return m}function j(a,i){var o=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(o!=null){var m=[],y=!0,O=!1,P,h;try{for(o=o.call(a);!(y=(P=o.next()).done)&&(m.push(P.value),!(i&&m.length===i));y=!0);}catch(e){O=!0,h=e}finally{try{!y&&o.return!=null&&o.return()}finally{if(O)throw h}}return m}}function p(a){if(Array.isArray(a))return a}function _(a,i){var o,m=(o=a.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return m||(m=i.tsx?"tsx":"jsx"),m}var S=function(i){var o,m,y,O=Object(l.useRef)(),P=Object(l.useContext)(u.context),h=P.locale,e=Object(u.useLocaleProps)(h,i),Z=Object(u.useDemoUrl)(e.identifier),x=e.demoUrl||Z,H=(E.a===null||E.a===void 0?void 0:E.a.location.hash)==="#".concat(e.identifier),X=Object.keys(e.sources).length===1,B=Object(u.useCodeSandbox)(((o=e.hideActions)===null||o===void 0?void 0:o.includes("CSB"))?null:e),N=Object(u.useRiddle)(((m=e.hideActions)===null||m===void 0?void 0:m.includes("RIDDLE"))?null:e),G=Object(u.useMotions)(e.motions||[],O.current),L=n(G,2),Q=L[0],z=L[1],V=Object(u.useCopy)(),U=n(V,2),Y=U[0],q=U[1],ee=Object(l.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),k=n(ee,2),C=k[0],te=k[1],re=Object(l.useState)(_(C,e.sources[C])),K=n(re,2),w=K[0],ne=K[1],ae=Object(l.useState)(Boolean(e.defaultShowCode)),W=n(ae,2),A=W[0],oe=W[1],ie=Object(l.useState)(Math.random()),$=n(ie,2),ue=$[0],F=$[1],D=e.sources[C][w]||e.sources[C].content,ce=Object(u.useTSPlaygroundUrl)(h,D),le=Object(l.useRef)(),de=Object(u.usePrefersColor)(),se=n(de,1),fe=se[0],J=e.actionBarRender,me=J===void 0?function(s){return s}:J;Object(l.useEffect)(function(){F(Math.random())},[fe]);function _e(s){te(s),ne(_(s,e.sources[s]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ue,src:x,ref:le}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(u.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},me(t.a.createElement(t.a.Fragment,null,B&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:B}),N&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:N}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return Q()}}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return F(Math.random())}}),!((y=e.hideActions)===null||y===void 0?void 0:y.includes("EXTERNAL"))&&t.a.createElement(u.Link,{target:"_blank",to:x},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(D)}}),w==="tsx"&&A&&t.a.createElement(u.Link,{target:"_blank",to:ce},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(A?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return oe(!A)}})))),A&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!X&&t.a.createElement(g.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:C,onChange:_e},Object.keys(e.sources).map(function(s){return t.a.createElement(g.TabPane,{tab:s==="_"?"index.".concat(_(s,e.sources[s])):s,key:s})})),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(M.a,{code:D,lang:w,showCopy:!1}))))};v.default=S}}]);
