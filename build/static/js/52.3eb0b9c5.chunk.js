"use strict";(self.webpackChunkapp_gaf=self.webpackChunkapp_gaf||[]).push([[52],{1052:(e,t,s)=>{s.r(t),s.d(t,{default:()=>de});var a=s(5043),i=s(2774);const r={_origin:"https://api.emailjs.com"},n=(e,t,s)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const l=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((a,i)=>{const n=new XMLHttpRequest;n.addEventListener("load",(e=>{let{target:t}=e;const s=new o(t);200===s.status||"OK"===s.text?a(s):i(s)})),n.addEventListener("error",(e=>{let{target:t}=e;i(new o(t))})),n.open("POST",r._origin+e,!0),Object.keys(s).forEach((e=>{n.setRequestHeader(e,s[e])})),n.send(t)}))},c=(e,t,s,a)=>{const i=a||r._userID,o=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(s);n(i,e,t);const c=new FormData(o);return c.append("lib_version","3.12.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",i),l("/api/v1.0/email/send-form",c)};let d={data:""},p=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||d,m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,f=(e,t)=>{let s="",a="",i="";for(let r in e){let n=e[r];"@"==r[0]?"i"==r[1]?s=r+" "+n+";":a+="f"==r[1]?f(n,r):r+"{"+f(n,"k"==r[1]?"":t)+"}":"object"==typeof n?a+=f(n,t?t.replace(/([^,])+/g,(e=>r.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):r):null!=n&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=f.p?f.p(r,n):r+":"+n+";")}return s+(t&&i?t+"{"+i+"}":i)+a},x={},g=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+g(e[s]);return t}return e},b=(e,t,s,a,i)=>{let r=g(e),n=x[r]||(x[r]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(r));if(!x[n]){let t=r!==e?e:(e=>{let t,s,a=[{}];for(;t=m.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(s=t[3].replace(h," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(h," ").trim();return a[0]})(e);x[n]=f(i?{["@keyframes "+n]:t}:t,s?"":"."+n)}let o=s&&x.g?x.g:null;return s&&(x.g=x[n]),((e,t,s,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=s?e+t.data:t.data+e)})(x[n],t,a,o),n},y=(e,t,s)=>e.reduce(((e,a,i)=>{let r=t[i];if(r&&r.call){let e=r(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==r?"":r)}),"");function v(e){let t=this||{},s=e.call?e(t.p):e;return b(s.unshift?s.raw?y(s,[].slice.call(arguments,1),t.p):s.reduce(((e,s)=>Object.assign(e,s&&s.call?s(t.p):s)),{}):s,p(t.target),t.g,t.o,t.k)}v.bind({g:1});let j,w,N,E=v.bind({k:1});function k(e,t){let s=this||{};return function(){let a=arguments;function i(r,n){let o=Object.assign({},r),l=o.className||i.className;s.p=Object.assign({theme:w&&w()},o),s.o=/ *go\d+/.test(l),o.className=v.apply(s,a)+(l?" "+l:""),t&&(o.ref=n);let c=e;return e[0]&&(c=o.as||e,delete o.as),N&&c[0]&&N(o),j(c,o)}return t?t(i):i}}var O=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,T=(()=>{let e=0;return()=>(++e).toString()})(),$=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),C=new Map,_=e=>{if(C.has(e))return;let t=setTimeout((()=>{C.delete(e),M({type:4,toastId:e})}),1e3);C.set(e,t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=C.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:s}=t;return e.toasts.find((e=>e.id===s.id))?A(e,{type:1,toast:s}):A(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?_(a):e.toasts.forEach((e=>{_(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},S=[],D={toasts:[],pausedAt:void 0},M=e=>{D=A(D,e),S.forEach((e=>{e(D)}))},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=e=>(t,s)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",s=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||T()}}(t,e,s);return M({type:2,toast:a}),a.id},z=(e,t)=>P("blank")(e,t);z.error=P("error"),z.success=P("success"),z.loading=P("loading"),z.custom=P("custom"),z.dismiss=e=>{M({type:3,toastId:e})},z.remove=e=>M({type:4,toastId:e}),z.promise=(e,t,s)=>{let a=z.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then((e=>(z.success(O(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e))).catch((e=>{z.error(O(t.error,e),{id:a,...s,...null==s?void 0:s.error})})),e};var q=(e,t)=>{M({type:1,toast:{id:e,height:t}})},F=()=>{M({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:s}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,s]=(0,a.useState)(D);(0,a.useEffect)((()=>(S.push(s),()=>{let e=S.indexOf(s);e>-1&&S.splice(e,1)})),[t]);let i=t.toasts.map((t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:i}}(e);(0,a.useEffect)((()=>{if(s)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(s<0))return setTimeout((()=>z.dismiss(t.id)),s);t.visible&&z.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,s]);let i=(0,a.useCallback)((()=>{s&&M({type:6,time:Date.now()})}),[s]),r=(0,a.useCallback)(((e,s)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:r}=s||{},n=t.filter((t=>(t.position||r)===(e.position||r)&&t.height)),o=n.findIndex((t=>t.id===e.id)),l=n.filter(((e,t)=>t<o&&e.visible)).length;return n.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:q,startPause:F,endPause:i,calculateOffset:r}}},L=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,W=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,B=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=k("div")`
  position: absolute;
`,X=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ee=e=>{let{toast:t}=e,{icon:s,type:i,iconTheme:r}=t;return void 0!==s?"string"==typeof s?a.createElement(J,null,s):s:"blank"===i?null:a.createElement(X,null,a.createElement(G,{...r}),"loading"!==i&&a.createElement(Q,null,"error"===i?a.createElement(K,{...r}):a.createElement(B,{...r})))},te=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,se=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,ae=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ie=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,re=a.memo((e=>{let{toast:t,position:s,style:i,children:r}=e,n=t.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[te(s),se(s)];return{animation:t?`${E(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||s||"top-center",t.visible):{opacity:0},o=a.createElement(ee,{toast:t}),l=a.createElement(ie,{...t.ariaProps},O(t.message,t));return a.createElement(ae,{className:t.className,style:{...n,...i,...t.style}},"function"==typeof r?r({icon:o,message:l}):a.createElement(a.Fragment,null,o,l))}));!function(e,t,s,a){f.p=t,j=e,w=s,N=a}(a.createElement);var ne=e=>{let{id:t,className:s,style:i,onHeightUpdate:r,children:n}=e,o=a.useCallback((e=>{if(e){let s=()=>{let s=e.getBoundingClientRect().height;r(t,s)};s(),new MutationObserver(s).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,r]);return a.createElement("div",{ref:o,className:s,style:i},n)},oe=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,le=e=>{let{reverseOrder:t,position:s="top-center",toastOptions:i,gutter:r,children:n,containerStyle:o,containerClassName:l}=e,{toasts:c,handlers:d}=H(i);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let i=e.position||s,o=((e,t)=>{let s=e.includes("top"),a=s?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...a,...i}})(i,d.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:s}));return a.createElement(ne,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?oe:"",style:o},"custom"===e.type?O(e.message,e):n?n(e):a.createElement(re,{toast:e,position:i}))})))},ce=s(579);const de=()=>{const e=(0,a.useRef)();return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(le,{position:"bottom-center",reverseOrder:!1}),(0,ce.jsx)("div",{className:"container",children:(0,ce.jsx)("div",{className:"contact-area mg-top-120 mb-120",children:(0,ce.jsxs)("div",{className:"row g-0 justify-content-center",children:[(0,ce.jsx)("div",{className:"col-lg-7",children:(0,ce.jsxs)("form",{className:"contact-form text-center",ref:e,onSubmit:t=>{t.preventDefault(),c("service_yipk4xg","template_71bgc2q",e.current,"cwf8kROl5o3__96Ti").then((t=>{"OK"===t.text&&(z.success("Massage Sent Successfully!"),e.current[0].value="",e.current[1].value="",e.current[2].value="",e.current[3].value="")}),(e=>{"OK"!==e.text&&z.success("Massage Not Sent!")}))},children:[(0,ce.jsx)("h3",{children:"GET A QUOTE"}),(0,ce.jsxs)("div",{className:"row",children:[(0,ce.jsx)("div",{className:"col-md-6",children:(0,ce.jsxs)("div",{className:"single-input-inner",children:[(0,ce.jsx)("label",{children:(0,ce.jsx)(i.K9B,{})}),(0,ce.jsx)("input",{type:"text",placeholder:"Your name",name:"user_name"})]})}),(0,ce.jsx)("div",{className:"col-md-6",children:(0,ce.jsxs)("div",{className:"single-input-inner",children:[(0,ce.jsx)("label",{children:(0,ce.jsx)(i.Wjb,{})}),(0,ce.jsx)("input",{type:"text",placeholder:"Your email",name:"user_email"})]})}),(0,ce.jsx)("div",{className:"col-md-6",children:(0,ce.jsxs)("div",{className:"single-input-inner",children:[(0,ce.jsx)("label",{children:(0,ce.jsx)(i.Ani,{})}),(0,ce.jsx)("input",{type:"text",placeholder:" Phone number"})]})}),(0,ce.jsx)("div",{className:"col-md-6",children:(0,ce.jsxs)("div",{className:"single-select-inner",children:[(0,ce.jsx)("label",{children:(0,ce.jsx)(i.t69,{})}),(0,ce.jsxs)("select",{className:"single-select",children:[(0,ce.jsx)("option",{children:"Subject"}),(0,ce.jsx)("option",{value:1,children:"Some option"}),(0,ce.jsx)("option",{value:2,children:"Another option"})]})]})}),(0,ce.jsx)("div",{className:"col-12",children:(0,ce.jsxs)("div",{className:"single-input-inner",children:[(0,ce.jsx)("label",{children:(0,ce.jsx)(i.Mbp,{})}),(0,ce.jsx)("textarea",{placeholder:"Write massage",defaultValue:"",id:"massage"})]})}),(0,ce.jsx)("div",{className:"col-12",children:(0,ce.jsxs)("button",{className:"btn btn-base",type:"submit",children:[" ","SEND MESSAGE"]})})]})]})}),(0,ce.jsx)("div",{className:"col-lg-5",children:(0,ce.jsxs)("div",{className:"contact-information-wrap",children:[(0,ce.jsx)("h3",{children:"CONTACT INFORMATION"}),(0,ce.jsxs)("div",{className:"single-contact-info-wrap",children:[(0,ce.jsx)("h6",{children:"Contact Number:"}),(0,ce.jsxs)("div",{className:"media",children:[(0,ce.jsx)("div",{className:"icon",children:(0,ce.jsx)(i.dRU,{})}),(0,ce.jsxs)("div",{className:"media-body",children:[(0,ce.jsx)("p",{children:"+1 952-435-7106"}),(0,ce.jsx)("p",{children:"+1 932-654-9874"})]})]})]}),(0,ce.jsxs)("div",{className:"single-contact-info-wrap",children:[(0,ce.jsx)("h6",{children:"Mail Address:"}),(0,ce.jsxs)("div",{className:"media",children:[(0,ce.jsx)("div",{className:"icon",style:{background:"#080C24"},children:(0,ce.jsx)(i.Wjb,{})}),(0,ce.jsxs)("div",{className:"media-body",children:[(0,ce.jsx)("p",{children:"info@transpro.com"}),(0,ce.jsx)("p",{children:"info.example@gmail.com"})]})]})]}),(0,ce.jsxs)("div",{className:"single-contact-info-wrap mb-0",children:[(0,ce.jsx)("h6",{children:"Office Location:"}),(0,ce.jsxs)("div",{className:"media",children:[(0,ce.jsx)("div",{className:"icon",style:{background:"#565969"},children:(0,ce.jsx)(i.vq8,{})}),(0,ce.jsxs)("div",{className:"media-body",children:[(0,ce.jsx)("p",{children:"2245 Gilbert Ave, Cincinnati, OH"}),(0,ce.jsx)("p",{children:"45206, United States"})]})]})]})]})})]})})}),(0,ce.jsx)("div",{className:"contact-g-map",children:(0,ce.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd"})})]})}}}]);
//# sourceMappingURL=52.3eb0b9c5.chunk.js.map