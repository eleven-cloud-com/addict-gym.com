(self.webpackChunkaddict_gym_com=self.webpackChunkaddict_gym_com||[]).push([[351],{8105:function(e,t,n){"use strict";n.d(t,{ZP:function(){return A}});var r=n(1461),i=n(7896),o=n(2784),a=n(6277),c=n(9929),u=n(9836),s=n(9075),l=n(5992),f=n(1229),p=n(7746);var d=o.createContext(),m=n(9222),h=n(5672);function y(e){return(0,h.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var b=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),v=n(2322);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function T(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function S({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const O=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:i,item:o,spacing:a,wrap:c,zeroMinWidth:u,breakpoints:s}=n;let l=[];r&&(l=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])})),r}(a,s,t));const f=[];return s.forEach((e=>{const r=n[e];r&&f.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,o&&t.item,u&&t.zeroMinWidth,...l,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==c&&t[`wrap-xs-${String(c)}`],...f]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,c.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,c.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${b.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,c.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),i=(0,c.k9)({theme:e},t,((t,r)=>{var i;const o=e.spacing(t);return"0px"!==o?{marginTop:`-${T(o)}`,[`& > .${b.item}`]:{paddingTop:T(o)}}:null!=(i=n)&&i.includes(r)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,c.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),i=(0,c.k9)({theme:e},t,((t,r)=>{var i;const o=e.spacing(t);return"0px"!==o?{width:`calc(100% + ${T(o)})`,marginLeft:`-${T(o)}`,[`& > .${b.item}`]:{paddingLeft:T(o)}}:null!=(i=n)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}}))}return i}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,o)=>{let a={};if(t[o]&&(n=t[o]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=(0,c.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof u?u[o]:u;if(null==s)return r;const l=Math.round(n/s*1e8)/1e6+"%";let f={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${l} + ${T(n)})`;f={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===e.breakpoints.values[o]?Object.assign(r,a):r[e.breakpoints.up(o)]=a,r}),{})}));const x=e=>{const{classes:t,container:n,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:c,breakpoints:u}=e;let l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(o,u));const f=[];u.forEach((t=>{const n=e[t];n&&f.push(`grid-${t}-${String(n)}`)}));const p={root:["root",n&&"container",i&&"item",c&&"zeroMinWidth",...l,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...f]};return(0,s.Z)(p,y,t)},C=o.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiGrid"}),{breakpoints:c}=(0,p.Z)(),s=(0,u.Z)(n),{className:l,columns:m,columnSpacing:h,component:y="div",container:g=!1,direction:b="row",item:T=!1,rowSpacing:S,spacing:C=0,wrap:A="wrap",zeroMinWidth:k=!1}=s,E=(0,r.Z)(s,w),j=S||C,P=h||C,M=o.useContext(d),L=g?m||12:M,I={},N=(0,i.Z)({},E);c.keys.forEach((e=>{null!=E[e]&&(I[e]=E[e],delete N[e])}));const $=(0,i.Z)({},s,{columns:L,container:g,direction:b,item:T,rowSpacing:j,columnSpacing:P,wrap:A,zeroMinWidth:k,spacing:C},I,{breakpoints:c.keys}),W=x($);return(0,v.jsx)(d.Provider,{value:L,children:(0,v.jsx)(O,(0,i.Z)({ownerState:$,className:(0,a.Z)(W.root,l),as:y,ref:t},N))})}));var A=C},7728:function(e){"use strict";e.exports=Object.assign},1710:function(e,t,n){"use strict";n(2784);var r=n(8434),i=n(1488),o=n(8165);t.Z=e=>{let{children:t,align:n="center",theme:a="light"}=e;const c="light"===a;return(0,o.tZ)(r.Z,{variant:"h4",align:n,sx:{mb:4,color:c?i._4:i.R2}},t)}},2459:function(e,t,n){"use strict";n(2784);var r=n(3066),i=n(1488),o=n(8165);t.Z=e=>{let{children:t,id:n,maxWidth:a="lg",theme:c="light"}=e;const u="light"===c;return(0,o.tZ)(r.Z,{id:n,maxWidth:!1,sx:{py:9,backgroundColor:u?i.R2:i._4,color:u?i._4:i.R2}},(0,o.tZ)(r.Z,{maxWidth:a},t))}},8435:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},8671:function(e,t,n){"use strict";n.d(t,{q:function(){return he}});var r,i,o,a,c=n(3980),u=n.n(c),s=n(7512),l=n.n(s),f=n(8435),p=n.n(f),d=n(2784),m=n(7728),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",S="href",O="http-equiv",x="innerHTML",C="itemprop",A="name",k="property",E="rel",j="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",N="encodeSpecialCharacters",$="onChangeClientState",W="titleTemplate",Z=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),R=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(e){var t=Q(e,v.TITLE),n=Q(e,W);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},U=function(e){return Q(e,$)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===E&&"canonical"===e[n].toLowerCase()||u===E&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==x&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=h()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,i),ce(f,p);var d={baseTag:se(v.BASE,n),linkTags:se(v.LINK,o),metaTags:se(v.META,a),noscriptTags:se(v.NOSCRIPT,c),scriptTags:se(v.SCRIPT,s),styleTags:se(v.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+z+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,i=fe(n,r),[d.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ae(t);return i?"<"+e+" "+z+'="true" '+i+">"+G(o,r)+"</"+e+">":"<"+e+" "+z+'="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===x||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),d.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+" "+z+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,i,r),link:pe(v.LINK,o,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,u,r),style:pe(v.STYLE,s,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:V([S,P],e),bodyAttributes:K(y,e),defer:Q(e,I),encode:Q(e,N),htmlAttributes:K(g,e),linkTags:X(v.LINK,[E,S],e),metaTags:X(v.META,[A,w,O,k,C],e),noscriptTags:X(v.NOSCRIPT,[x],e),onChangeClientState:U(e),scriptTags:X(v.SCRIPT,[j,x],e),styleTags:X(v.STYLE,[T],e),title:q(e),titleAttributes:K(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),he=(i=me,a=o=function(e){function t(){return _(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return H({},i,((t={})[r.type]=a,t.titleAttributes=H({},o),t));case v.BODY:return H({},i,{bodyAttributes:H({},o)});case v.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(B(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(i,r)},Y(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind},7512:function(e,t,n){"use strict";var r,i=n(2784),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2148:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAxOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNiMjgyMjM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSLjg6zjgqTjg6Tjg7xfMiIgZGF0YS1uYW1lPSLjg6zjgqTjg6Tjg7wgMiI+PGcgaWQ9IuODrOOCpOODpOODvF8xLTIiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiPjxwYXRoIGlkPSJpY29ubW9uc3RyLWVtYWlsLTQiIGNsYXNzPSJjbHMtMSIgZD0iTTAsMFYxOEgyNFYwWk0yMS41MiwyLDEyLDkuNzEsMi40OCwyWk0yLDE2VjQuMThsMTAsOC4xLDEwLTguMVYxNloiLz48L2c+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=commons-a1d7db2a3378fb1e58eb.js.map