(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(7300)}])},2130:function(d,a,b){"use strict";var c=b(7294).createContext({});a.Z=c},1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},7300:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return n}});var e=a(7568);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var c=a(4051),g=a.n(c),h=a(5893);a(906);var i=a(7294),j=a(2130);a(84);var k=a(2920);a(993),a(9008);var l=JSON.parse('[{"title":"Logos \u8463\u4E8B\u6703\u8B70\u6848\u4E00","content":[{"text":"\u4F60\u662F\u5426\u540C\u610F\u62C6\u9664\u5149\u5FA9\u8DEF\u524D\u5929\u6A4B\uFF1F","answers":[{"text":"\u540C\u610F","count":0},{"text":"\u4E0D\u540C\u610F","count":0}]}]}]');a(1664);var m=a(1163),n=function(a){var r=a.Component,s=a.pageProps,D=(0,m.useRouter)(),b=(0,i.useState)(null),t=b[0],u=b[1],c=(0,i.useState)(l),v=c[0];c[1];var d=(0,i.useState)(2);d[0],d[1];var n=(0,i.useState)(null),w=n[0],x=n[1],o=(0,i.useState)(!1),y=o[0];o[1];var p=(0,i.useState)([]),z=p[0],A=p[1],q=(0,i.useState)(null),B=q[0],C=q[1];function E(){return(E=(0,e.Z)(g().mark(function a(){return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:D.push("/vote","/".concat("Vote_Frontend","/vote"));case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,h.jsxs)(j.Z.Provider,{value:{user:t,setUser:u,role:w,setRole:x,voting:y,result:v,ownedVotes:z,setOwnedVotes:A,logout:function(a){x(null),u(null),(0,k.Am)(a),D.push("/")},voteId:B,setVoteId:C,backToHome:function(){return E.apply(this,arguments)}},children:[(0,h.jsx)(k.Ix,{position:"top-center",autoClose:500,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,h.jsx)(r,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){f(d,a,c[a])})}return d}({},s))]})}},993:function(){},906:function(){},84:function(){},9008:function(a,c,b){a.exports=b(5443)},1664:function(a,c,b){a.exports=b(8418)},1163:function(a,c,b){a.exports=b(387)},7568:function(c,a,b){"use strict";function d(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(f,g){var h=a.apply(b,c);function e(a){d(h,f,g,e,i,"next",a)}function i(a){d(h,f,g,e,i,"throw",a)}e(void 0)})}}b.d(a,{Z:function(){return e}})},2920:function(n,h,e){"use strict";e.d(h,{Ix:function(){return g},Am:function(){return a}});var i=e(7294);function o(a){var b,d,c="";if("string"==typeof a||"number"==typeof a)c+=a;else if("object"==typeof a){if(Array.isArray(a))for(b=0;b<a.length;b++)a[b]&&(d=o(a[b]))&&(c&&(c+=" "),c+=d);else for(b in a)a[b]&&(c&&(c+=" "),c+=b)}return c}var p=function(){for(var b,c,d=0,a="";d<arguments.length;)(b=arguments[d++])&&(c=o(b))&&(a&&(a+=" "),a+=c);return a};function q(a){return"number"==typeof a&&!isNaN(a)}function r(a){return"boolean"==typeof a}function s(a){return"string"==typeof a}function t(a){return"function"==typeof a}function u(a){return s(a)||t(a)?a:null}function v(a){return 0===a||a}function w(a){return(0,i.isValidElement)(a)||s(a)||t(a)||q(a)}let f={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},b={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function c(a){let{enter:b,exit:c,appendPosition:d=!1,collapse:e=!0,collapseDuration:f=300}=a;return function(g){let{children:h,position:a,preventExitTransition:k,done:l,nodeRef:m,isIn:j}=g,n=d?b+"--"+a:b,o=d?c+"--"+a:c,p=(0,i.useRef)(),q=(0,i.useRef)(0);function r(b){if(b.target!==m.current)return;let a=m.current;a.dispatchEvent(new Event("d")),a.removeEventListener("animationend",r),a.removeEventListener("animationcancel",r),0===q.current&&"animationcancel"!==b.type&&(a.className=p.current)}function s(){let a=m.current;a.removeEventListener("animationend",s),e?function(b,c,a){void 0===a&&(a=300);let{scrollHeight:d,style:e}=b;requestAnimationFrame(()=>{e.minHeight="initial",e.height=d+"px",e.transition="all "+a+"ms",requestAnimationFrame(()=>{e.height="0",e.padding="0",e.margin="0",setTimeout(c,a)})})}(a,l,f):l()}return(0,i.useLayoutEffect)(()=>{(function b(){let a=m.current;p.current=a.className,a.className+=" "+n,a.addEventListener("animationend",r),a.addEventListener("animationcancel",r)})()},[]),(0,i.useEffect)(()=>{j||(k?s():function b(){q.current=1;let a=m.current;a.className+=" "+o,a.addEventListener("animationend",s)}())},[j]),i.createElement(i.Fragment,null,h)}}function x(a,b){return{content:a.content,containerId:a.props.containerId,id:a.props.toastId,theme:a.props.theme,type:a.props.type,data:a.props.data||{},isLoading:a.props.isLoading,icon:a.props.icon,status:b}}let j={list:new Map,emitQueue:new Map,on(a,b){return this.list.has(a)||this.list.set(a,[]),this.list.get(a).push(b),this},off(a,b){if(b){let c=this.list.get(a).filter(a=>a!==b);return this.list.set(a,c),this}return this.list.delete(a),this},cancelEmit(a){let b=this.emitQueue.get(a);return b&&(b.forEach(clearTimeout),this.emitQueue.delete(a)),this},emit(a){this.list.has(a)&&this.list.get(a).forEach(c=>{let b=setTimeout(()=>{c(...[].slice.call(arguments,1))},0);this.emitQueue.has(a)||this.emitQueue.set(a,[]),this.emitQueue.get(a).push(b)})}},y=a=>{let{theme:b,type:c,...d}=a;return i.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===b?"currentColor":"var(--toastify-icon-color-"+c+")",...d})},z={info:function(a){return i.createElement(y,{...a},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(a){return i.createElement(y,{...a},i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(a){return i.createElement(y,{...a},i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(a){return i.createElement(y,{...a},i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}},A=a=>a in z;function B(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function C(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function k(a){let{closeToast:d,theme:b,ariaLabel:c="close"}=a;return i.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+b,type:"button",onClick(a){a.stopPropagation(),d(a)},"aria-label":c},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function l(j){let{delay:k,isRunning:l,closeToast:q,type:d,hide:e,className:b,style:m,controlledProgress:a,progress:c,rtl:f,isIn:r,theme:n}=j,g={...m,animationDuration:k+"ms",animationPlayState:l?"running":"paused",opacity:e?0:1};a&&(g.transform="scaleX("+c+")");let h=p("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+n,"Toastify__progress-bar--"+d,{"Toastify__progress-bar--rtl":f}),o=t(b)?b({rtl:f,type:d,defaultClassName:h}):p(h,b);return i.createElement("div",{role:"progressbar","aria-hidden":e?"true":"false","aria-label":"notification timer",className:o,style:g,[a&&c>=1?"onTransitionEnd":"onAnimationEnd"]:a&&c<1?null:()=>{r&&q()}})}l.defaultProps={type:b.DEFAULT,hide:!1};let D=m=>{let{isRunning:y,preventExitTransition:z,toastRef:n,eventHandlers:A}=function(b){let[g,n]=(0,i.useState)(!1),[h,o]=(0,i.useState)(!1),j=(0,i.useRef)(null),p=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,q=(0,i.useRef)(b),{autoClose:k,pauseOnHover:l,closeToast:r,onClick:s,closeOnClick:m}=b;function c(c){if(b.draggable){u();let a=j.current;p.canCloseOnClick=!0,p.canDrag=!0,p.boundingRect=a.getBoundingClientRect(),a.style.transition="",p.x=B(c.nativeEvent),p.y=C(c.nativeEvent),"x"===b.draggableDirection?(p.start=p.x,p.removalDistance=a.offsetWidth*(b.draggablePercent/100)):(p.start=p.y,p.removalDistance=a.offsetHeight*(80===b.draggablePercent?1.5*b.draggablePercent:b.draggablePercent/100))}}function d(){if(p.boundingRect){let{top:a,bottom:c,left:d,right:g}=p.boundingRect;b.pauseOnHover&&p.x>=d&&p.x<=g&&p.y>=a&&p.y<=c?f():e()}}function e(){n(!0)}function f(){n(!1)}function u(){p.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",w),document.addEventListener("touchmove",v),document.addEventListener("touchend",w)}function v(c){let a=j.current;p.canDrag&&a&&(p.didMove=!0,g&&f(),p.x=B(c),p.y=C(c),"x"===b.draggableDirection?p.delta=p.x-p.start:p.delta=p.y-p.start,p.start!==p.x&&(p.canCloseOnClick=!1),a.style.transform="translate"+b.draggableDirection+"("+p.delta+"px)",a.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function w(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",w);let a=j.current;if(p.canDrag&&p.didMove&&a){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance){o(!0),b.closeToast();return}a.style.transition="transform 0.2s, opacity 0.2s",a.style.transform="translate"+b.draggableDirection+"(0)",a.style.opacity="1"}}(0,i.useEffect)(()=>{q.current=b}),(0,i.useEffect)(()=>(j.current&&j.current.addEventListener("d",e,{once:!0}),t(b.onOpen)&&b.onOpen((0,i.isValidElement)(b.children)&&b.children.props),()=>{let a=q.current;t(a.onClose)&&a.onClose((0,i.isValidElement)(a.children)&&a.children.props)}),[]),(0,i.useEffect)(()=>(b.pauseOnFocusLoss&&(document.hasFocus()||f(),window.addEventListener("focus",e),window.addEventListener("blur",f)),()=>{b.pauseOnFocusLoss&&(window.removeEventListener("focus",e),window.removeEventListener("blur",f))}),[b.pauseOnFocusLoss]);let a={onMouseDown:c,onTouchStart:c,onMouseUp:d,onTouchEnd:d};return k&&l&&(a.onMouseEnter=f,a.onMouseLeave=e),m&&(a.onClick=a=>{s&&s(a),p.canCloseOnClick&&r()}),{playToast:e,pauseToast:f,isRunning:g,preventExitTransition:h,toastRef:j,eventHandlers:a}}(m),{closeButton:a,children:D,autoClose:o,onClick:E,type:b,hideProgressBar:F,closeToast:q,transition:G,position:r,className:c,style:H,bodyClassName:d,bodyStyle:I,progressClassName:J,progressStyle:K,updateId:s,role:L,progress:u,rtl:e,toastId:M,deleteToast:N,isIn:f,isLoading:O,iconOut:v,theme:g}=m,w=p("Toastify__toast","Toastify__toast-theme--"+g,"Toastify__toast--"+b,{"Toastify__toast--rtl":e}),P=t(c)?c({rtl:e,position:r,type:b,defaultClassName:w}):p(w,c),h=!!u,j={closeToast:q,type:b,theme:g},x=null;return!1===a||(x=t(a)?a(j):i.isValidElement(a)?i.cloneElement(a,j):k(j)),i.createElement(G,{isIn:f,done:N,position:r,preventExitTransition:z,nodeRef:n},i.createElement("div",{id:M,onClick:E,className:P,...A,style:H,ref:n},i.createElement("div",{...f&&{role:L},className:t(d)?d({type:b}):p("Toastify__toast-body",d),style:I},null!=v&&i.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},v),i.createElement("div",null,D)),x,(o||h)&&i.createElement(l,{...s&&!h?{key:"pb-"+s}:{},rtl:e,theme:g,delay:o,isRunning:y,isIn:f,closeToast:q,hide:F,type:b,style:K,className:J,controlledProgress:h,progress:u})))},m=c({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0});c({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),c({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),c({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"});let g=(0,i.forwardRef)((a,e)=>{let{getToastToRender:b,containerRef:c,isToastActive:f}=function(b){let[,d]=(0,i.useReducer)(a=>a+1,0),[e,f]=(0,i.useState)([]),c=(0,i.useRef)(null),g=(0,i.useRef)(new Map).current,a=a=>-1!==e.indexOf(a),h=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:b,containerId:null,isToastActive:a,getToast:a=>g.get(a)}).current;function k(b){let{containerId:a}=b,{limit:c}=h.props;c&&(!a||h.containerId===a)&&(h.count-=h.queue.length,h.queue=[])}function l(a){f(b=>v(a)?b.filter(b=>b!==a):[])}function m(){let{toastContent:a,toastProps:b,staleId:c}=h.queue.shift();o(a,b,c)}function n(f,H){var n,k,C;let{delay:D,staleId:E,...a}=H;if(!w(f)||(n=a,!c.current||h.props.enableMultiContainer&&n.containerId!==h.props.containerId||g.has(n.toastId)&&null==n.updateId))return;let{toastId:I,updateId:F,data:y}=a,{props:b}=h,B=()=>l(I),G=null==F;G&&h.count++;let e={toastId:I,updateId:F,data:y,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||b.theme,icon:null!=a.icon?a.icon:b.icon,isIn:!1,key:a.key||h.toastKey++,type:a.type,closeToast:B,closeButton:a.closeButton,rtl:b.rtl,position:a.position||b.position,transition:a.transition||b.transition,className:u(a.className||b.toastClassName),bodyClassName:u(a.bodyClassName||b.bodyClassName),style:a.style||b.toastStyle,bodyStyle:a.bodyStyle||b.bodyStyle,onClick:a.onClick||b.onClick,pauseOnHover:r(a.pauseOnHover)?a.pauseOnHover:b.pauseOnHover,pauseOnFocusLoss:r(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:b.pauseOnFocusLoss,draggable:r(a.draggable)?a.draggable:b.draggable,draggablePercent:a.draggablePercent||b.draggablePercent,draggableDirection:a.draggableDirection||b.draggableDirection,closeOnClick:r(a.closeOnClick)?a.closeOnClick:b.closeOnClick,progressClassName:u(a.progressClassName||b.progressClassName),progressStyle:a.progressStyle||b.progressStyle,autoClose:!a.isLoading&&(k=a.autoClose,C=b.autoClose,!1===k||q(k)&&k>0?k:C),hideProgressBar:r(a.hideProgressBar)?a.hideProgressBar:b.hideProgressBar,progress:a.progress,role:a.role||b.role,deleteToast(){let f=x(g.get(I),"removed");g.delete(I),j.emit(4,f);let a=h.queue.length;if(h.count=v(I)?h.count-1:h.count-h.displayedToast,h.count<0&&(h.count=0),a>0){let b=v(I)?1:h.props.limit;if(1===a||1===b)h.displayedToast++,m();else{let c=b>a?a:b;h.displayedToast=c;for(let e=0;e<c;e++)m()}}else d()}};e.iconOut=function(e){let{theme:f,type:c,isLoading:g,icon:a}=e,b=null,d={theme:f,type:c};return!1===a||(t(a)?b=a(d):(0,i.isValidElement)(a)?b=(0,i.cloneElement)(a,d):s(a)||q(a)?b=a:g?b=z.spinner():A(c)&&(b=z[c](d))),b}(e),t(a.onOpen)&&(e.onOpen=a.onOpen),t(a.onClose)&&(e.onClose=a.onClose),e.closeButton=b.closeButton,!1===a.closeButton||w(a.closeButton)?e.closeButton=a.closeButton:!0===a.closeButton&&(e.closeButton=!w(b.closeButton)||b.closeButton);let p=f;(0,i.isValidElement)(f)&&!s(f.type)?p=(0,i.cloneElement)(f,{closeToast:B,toastProps:e,data:y}):t(f)&&(p=f({closeToast:B,toastProps:e,data:y})),b.limit&&b.limit>0&&h.count>b.limit&&G?h.queue.push({toastContent:p,toastProps:e,staleId:E}):q(D)?setTimeout(()=>{o(p,e,E)},D):o(p,e,E)}function o(d,b,c){let{toastId:e}=b;c&&g.delete(c);let a={content:d,props:b};g.set(e,a),f(a=>[...a,e].filter(a=>a!==c)),j.emit(4,x(a,null==a.props.updateId?"added":"updated"))}return(0,i.useEffect)(()=>(h.containerId=b.containerId,j.cancelEmit(3).on(0,n).on(1,a=>c.current&&l(a)).on(5,k).emit(2,h),()=>{g.clear(),j.emit(3,h)}),[]),(0,i.useEffect)(()=>{h.props=b,h.isToastActive=a,h.displayedToast=e.length}),{getToastToRender:function(d){let c=new Map,a=Array.from(g.values());return b.newestOnTop&&a.reverse(),a.forEach(b=>{let{position:a}=b.props;c.has(a)||c.set(a,[]),c.get(a).push(b)}),Array.from(c,a=>d(a[0],a[1]))},containerRef:c,isToastActive:a}}(a),{className:g,style:h,rtl:k,containerId:d}=a;return(0,i.useEffect)(()=>{e&&(e.current=c.current)},[]),i.createElement("div",{ref:c,className:"Toastify",id:d},b((a,b)=>{let c=b.length?{...h}:{...h,pointerEvents:"none"};return i.createElement("div",{className:function(a){let b=p("Toastify__toast-container","Toastify__toast-container--"+a,{"Toastify__toast-container--rtl":k});return t(g)?g({position:a,rtl:k,defaultClassName:b}):p(b,u(g))}(a),style:c,key:"container-"+a},b.map((c,d)=>{let{content:e,props:a}=c;return i.createElement(D,{...a,isIn:f(a.toastId),style:{...a.style,"--nth":d+1,"--len":b.length},key:"toast-"+a.key},e)}))}))});g.displayName="ToastContainer",g.defaultProps={position:f.TOP_RIGHT,transition:m,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let E=new Map,F,G=[];function H(){return Math.random().toString(36).substring(2,9)}function I(b,a){return E.size>0?j.emit(0,b,a):G.push({content:b,options:a}),a.toastId}function J(c,a){var b;return{...a,type:a&&a.type||c,toastId:(b=a)&&(s(b.toastId)||q(b.toastId))?b.toastId:H()}}function d(a){return(b,c)=>I(b,J(a,c))}function a(a,c){return I(a,J(b.DEFAULT,c))}a.loading=(a,c)=>I(a,J(b.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...c})),a.promise=function(c,f,d){let{pending:b,error:h,success:i}=f,g;b&&(g=s(b)?a.loading(b,d):a.loading(b.render,{...d,...b}));let j={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},k=(h,b,e)=>{if(null==b){a.dismiss(g);return}let f={type:h,...j,...d,data:e},c=s(b)?{render:b}:b;return g?a.update(g,{...f,...c}):a(c.render,{...f,...c}),e},e=t(c)?c():c;return e.then(a=>k("success",i,a)).catch(a=>k("error",h,a)),e},a.success=d(b.SUCCESS),a.info=d(b.INFO),a.error=d(b.ERROR),a.warning=d(b.WARNING),a.warn=a.warning,a.dark=(a,c)=>I(a,J(b.DEFAULT,{theme:"dark",...c})),a.dismiss=a=>j.emit(1,a),a.clearWaitingQueue=function(a){return void 0===a&&(a={}),j.emit(5,a)},a.isActive=b=>{let a=!1;return E.forEach(c=>{c.isToastActive&&c.isToastActive(b)&&(a=!0)}),a},a.update=function(b,a){void 0===a&&(a={}),setTimeout(()=>{let d=function(b,c){let{containerId:d}=c,a=E.get(d||F);return a?a.getToast(b):null}(b,a);if(d){let{props:e,content:f}=d,c={...e,...a,toastId:a.toastId||b,updateId:H()};c.toastId!==b&&(c.staleId=b);let g=c.render||f;delete c.render,I(g,c)}},0)},a.done=b=>{a.update(b,{progress:1})},a.onChange=a=>(j.on(4,a),()=>{j.off(4,a)}),a.POSITION=f,a.TYPE=b,j.on(2,a=>{F=a.containerId||a,E.set(F,a),G.forEach(a=>{j.emit(0,a.content,a.options)}),G=[]}).on(3,a=>{E.delete(a.containerId||a),0===E.size&&j.off(0).off(1).off(5)})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])