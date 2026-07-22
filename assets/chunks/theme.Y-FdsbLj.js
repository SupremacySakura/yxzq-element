import{d as x,o as c,c as p,r as d,n as C,a as R,t as L,b as S,w as h,e as g,T as Ke,_ as w,u as rs,i as os,f as is,g as We,h as T,j as de,k as A,l as te,m as f,p as u,q as N,s as B,v as Z,x as je,y as se,z as Ee,A as Ye,B as Et,C as ns,D as as,E as re,F as O,G as H,H as zt,I as ze,J as k,K as le,L as Lt,M as Le,N as ke,O as Te,P as ls,Q as Tt,R as cs,S as us,U as ds,V as Vt,W as ps,X as Ct,Y as Ot,Z as hs,$ as fs,a0 as bs,a1 as ms}from"./framework.o5qAeLTz.js";const vs=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(o){return(e,t)=>(c(),p("span",{class:C(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[R(L(e.text),1)])],2))}}),gs={key:0,class:"VPBackdrop"},xs=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(o){return(e,t)=>(c(),S(Ke,{name:"fade"},{default:h(()=>[e.show?(c(),p("div",gs)):g("",!0)]),_:1}))}}),ys=w(xs,[["__scopeId","data-v-6f6fa9fb"]]),E=rs;function _s(o,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(o,e):(o(),(s=!0)&&setTimeout(()=>s=!1,e))}}function qe(o){return/^\//.test(o)?o:`/${o}`}function Xe(o){const{pathname:e,search:t,hash:s,protocol:r}=new URL(o,"http://a.com");if(os(o)||o.startsWith("#")||!r.startsWith("http")||!is(e))return o;const{site:i}=E(),n=e.endsWith("/")||e.endsWith(".html")?o:o.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${t}${s}`);return We(n)}const Je=T(de?location.hash:"");de&&window.addEventListener("hashchange",()=>{Je.value=location.hash});function xe({removeCurrent:o=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:s,page:r,theme:i}=E(),n=A(()=>{var l,b;return{label:(l=t.value.locales[s.value])==null?void 0:l.label,link:((b=t.value.locales[s.value])==null?void 0:b.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:A(()=>Object.entries(t.value.locales).flatMap(([l,b])=>o&&n.value.label===b.label?[]:{text:b.label,link:ks(b.link||(l==="root"?"/":`/${l}/`),i.value.i18nRouting!==!1&&e,r.value.relativePath.slice(n.value.link.length-1),!t.value.cleanUrls)+Je.value})),currentLang:n}}function ks(o,e,t,s){return e?o.replace(/\/$/,"")+qe(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):o}const $s=o=>(N("data-v-a7a1a61a"),o=o(),B(),o),ws={class:"NotFound"},Ss={class:"code"},As={class:"title"},Ps=$s(()=>f("div",{class:"divider"},null,-1)),Es={class:"quote"},zs={class:"action"},Ls=["href","aria-label"],Ts=x({__name:"NotFound",setup(o){const{site:e,theme:t}=E(),{localeLinks:s}=xe({removeCurrent:!1}),r=T("/");return te(()=>{var n;const i=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(r.value=((n=s.value.find(({link:a})=>a.startsWith(i)))==null?void 0:n.link)||s.value[0].link)}),(i,n)=>{var a,l,b,v,m;return c(),p("div",ws,[f("p",Ss,L(((a=u(t).notFound)==null?void 0:a.code)??"404"),1),f("h1",As,L(((l=u(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Ps,f("blockquote",Es,L(((b=u(t).notFound)==null?void 0:b.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),f("div",zs,[f("a",{class:"link",href:u(We)(r.value),"aria-label":((v=u(t).notFound)==null?void 0:v.linkLabel)??"go to home"},L(((m=u(t).notFound)==null?void 0:m.linkText)??"Take me home"),9,Ls)])])}}}),Vs=w(Ts,[["__scopeId","data-v-a7a1a61a"]]);function It(o,e){if(Array.isArray(o))return $e(o);if(o==null)return[];e=qe(e);const t=Object.keys(o).sort((r,i)=>i.split("/").length-r.split("/").length).find(r=>e.startsWith(qe(r))),s=t?o[t]:[];return Array.isArray(s)?$e(s):$e(s.items,s.base)}function Cs(o){const e=[];let t=0;for(const s in o){const r=o[s];if(r.items){t=e.push(r);continue}e[t]||e.push({items:[]}),e[t].items.push(r)}return e}function Os(o){const e=[];function t(s){for(const r of s)r.text&&r.link&&e.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&t(r.items)}return t(o),e}function Ue(o,e){return Array.isArray(e)?e.some(t=>Ue(o,t)):Z(o,e.link)?!0:e.items?Ue(o,e.items):!1}function $e(o,e){return[...o].map(t=>{const s={...t},r=s.base||e;return r&&s.link&&(s.link=r+s.link),s.items&&(s.items=$e(s.items,r)),s})}function U(){const{frontmatter:o,page:e,theme:t}=E(),s=je("(min-width: 960px)"),r=T(!1),i=A(()=>{const M=t.value.sidebar,V=e.value.relativePath;return M?It(M,V):[]}),n=T(i.value);se(i,(M,V)=>{JSON.stringify(M)!==JSON.stringify(V)&&(n.value=i.value)});const a=A(()=>o.value.sidebar!==!1&&n.value.length>0&&o.value.layout!=="home"),l=A(()=>b?o.value.aside==null?t.value.aside==="left":o.value.aside==="left":!1),b=A(()=>o.value.layout==="home"?!1:o.value.aside!=null?!!o.value.aside:t.value.aside!==!1),v=A(()=>a.value&&s.value),m=A(()=>a.value?Cs(n.value):[]);function P(){r.value=!0}function z(){r.value=!1}function I(){r.value?z():P()}return{isOpen:r,sidebar:n,sidebarGroups:m,hasSidebar:a,hasAside:b,leftAside:l,isSidebarEnabled:v,open:P,close:z,toggle:I}}function Is(o,e){let t;Ee(()=>{t=o.value?document.activeElement:void 0}),te(()=>{window.addEventListener("keyup",s)}),Ye(()=>{window.removeEventListener("keyup",s)});function s(r){r.key==="Escape"&&o.value&&(e(),t==null||t.focus())}}function Ms(o){const{page:e}=E(),t=T(!1),s=A(()=>o.value.collapsed!=null),r=A(()=>!!o.value.link),i=T(!1),n=()=>{i.value=Z(e.value.relativePath,o.value.link)};se([e,o,Je],n),te(n);const a=A(()=>i.value?!0:o.value.items?Ue(e.value.relativePath,o.value.items):!1),l=A(()=>!!(o.value.items&&o.value.items.length));Ee(()=>{t.value=!!(s.value&&o.value.collapsed)}),Et(()=>{(i.value||a.value)&&(t.value=!1)});function b(){s.value&&(t.value=!t.value)}return{collapsed:t,collapsible:s,isLink:r,isActiveLink:i,hasActiveLink:a,hasChildren:l,toggle:b}}function Ns(){const{hasSidebar:o}=U(),e=je("(min-width: 960px)"),t=je("(min-width: 1280px)");return{isAsideEnabled:A(()=>!t.value&&!e.value?!1:o.value?t.value:e.value)}}const Fe=[];function Mt(o){return typeof o.outline=="object"&&!Array.isArray(o.outline)&&o.outline.label||o.outlineTitle||"On this page"}function Qe(o){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:Bs(t),link:"#"+t.id,level:s}});return Hs(e,o)}function Bs(o){let e="";for(const t of o.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Hs(o,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,r]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;o=o.filter(n=>n.level>=s&&n.level<=r),Fe.length=0;for(const{element:n,link:a}of o)Fe.push({element:n,link:a});const i=[];e:for(let n=0;n<o.length;n++){const a=o[n];if(n===0)i.push(a);else{for(let l=n-1;l>=0;l--){const b=o[l];if(b.level<a.level){(b.children||(b.children=[])).push(a);continue e}}i.push(a)}}return i}function Ds(o,e){const{isAsideEnabled:t}=Ns(),s=_s(i,100);let r=null;te(()=>{requestAnimationFrame(i),window.addEventListener("scroll",s)}),ns(()=>{n(location.hash)}),Ye(()=>{window.removeEventListener("scroll",s)});function i(){if(!t.value)return;const a=window.scrollY,l=window.innerHeight,b=document.body.offsetHeight,v=Math.abs(a+l-b)<1,m=Fe.map(({element:z,link:I})=>({link:I,top:Rs(z)})).filter(({top:z})=>!Number.isNaN(z)).sort((z,I)=>z.top-I.top);if(!m.length){n(null);return}if(a<1){n(null);return}if(v){n(m[m.length-1].link);return}let P=null;for(const{link:z,top:I}of m){if(I>a+as()+4)break;P=z}n(P)}function n(a){r&&r.classList.remove("active"),a==null?r=null:r=o.value.querySelector(`a[href="${decodeURIComponent(a)}"]`);const l=r;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Rs(o){let e=0;for(;o!==document.body;){if(o===null)return NaN;e+=o.offsetTop,o=o.offsetParent}return e}const js=["href","title"],qs=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(o){function e({target:t}){const s=t.href.split("#")[1],r=document.getElementById(decodeURIComponent(s));r==null||r.focus({preventScroll:!0})}return(t,s)=>{const r=re("VPDocOutlineItem",!0);return c(),p("ul",{class:C(["VPDocOutlineItem",t.root?"root":"nested"])},[(c(!0),p(O,null,H(t.headers,({children:i,link:n,title:a})=>(c(),p("li",null,[f("a",{class:"outline-link",href:n,onClick:e,title:a},L(a),9,js),i!=null&&i.length?(c(),S(r,{key:0,headers:i},null,8,["headers"])):g("",!0)]))),256))],2)}}}),Nt=w(qs,[["__scopeId","data-v-a2afcce7"]]),Us=o=>(N("data-v-7b6871a8"),o=o(),B(),o),Fs={class:"content"},Gs={class:"outline-title",role:"heading","aria-level":"2"},Ks={"aria-labelledby":"doc-outline-aria-label"},Ws=Us(()=>f("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Ys=x({__name:"VPDocAsideOutline",setup(o){const{frontmatter:e,theme:t}=E(),s=zt([]);ze(()=>{s.value=Qe(e.value.outline??t.value.outline)});const r=T(),i=T();return Ds(r,i),(n,a)=>(c(),p("div",{class:C(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:r,role:"navigation"},[f("div",Fs,[f("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),f("div",Gs,L(u(Mt)(u(t))),1),f("nav",Ks,[Ws,k(Nt,{headers:s.value,root:!0},null,8,["headers"])])])],2))}}),Xs=w(Ys,[["__scopeId","data-v-7b6871a8"]]),Js={class:"VPDocAsideCarbonAds"},Qs=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(o){const e=()=>null;return(t,s)=>(c(),p("div",Js,[k(u(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Zs=o=>(N("data-v-951edd61"),o=o(),B(),o),er={class:"VPDocAside"},tr=Zs(()=>f("div",{class:"spacer"},null,-1)),sr=x({__name:"VPDocAside",setup(o){const{theme:e}=E();return(t,s)=>(c(),p("div",er,[d(t.$slots,"aside-top",{},void 0,!0),d(t.$slots,"aside-outline-before",{},void 0,!0),k(Xs),d(t.$slots,"aside-outline-after",{},void 0,!0),tr,d(t.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),S(Qs,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):g("",!0),d(t.$slots,"aside-ads-after",{},void 0,!0),d(t.$slots,"aside-bottom",{},void 0,!0)]))}}),rr=w(sr,[["__scopeId","data-v-951edd61"]]);function or(){const{theme:o,page:e}=E();return A(()=>{const{text:t="Edit this page",pattern:s=""}=o.value.editLink||{};let r;return typeof s=="function"?r=s(e.value):r=s.replace(/:path/g,e.value.filePath),{url:r,text:t}})}function ir(){const{page:o,theme:e,frontmatter:t}=E();return A(()=>{var l,b,v,m,P,z,I,M;const s=It(e.value.sidebar,o.value.relativePath),r=Os(s),i=r.findIndex(V=>Z(o.value.relativePath,V.link)),n=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!t.value.prev||t.value.prev===!1,a=((b=e.value.docFooter)==null?void 0:b.next)===!1&&!t.value.next||t.value.next===!1;return{prev:n?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((v=r[i-1])==null?void 0:v.docFooterText)??((m=r[i-1])==null?void 0:m.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((P=r[i-1])==null?void 0:P.link)},next:a?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((z=r[i+1])==null?void 0:z.docFooterText)??((I=r[i+1])==null?void 0:I.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=r[i+1])==null?void 0:M.link)}}})}const q=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(o){const e=o,t=A(()=>e.tag??(e.href?"a":"span")),s=A(()=>e.href&&Lt.test(e.href));return(r,i)=>(c(),S(le(t.value),{class:C(["VPLink",{link:r.href,"vp-external-link-icon":s.value,"no-icon":r.noIcon}]),href:r.href?u(Xe)(r.href):void 0,target:r.target??(s.value?"_blank":void 0),rel:r.rel??(s.value?"noreferrer":void 0)},{default:h(()=>[d(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),nr={class:"VPLastUpdated"},ar=["datetime"],lr=x({__name:"VPDocFooterLastUpdated",setup(o){const{theme:e,page:t,frontmatter:s,lang:r}=E(),i=A(()=>new Date(s.value.lastUpdated??t.value.lastUpdated)),n=A(()=>i.value.toISOString()),a=T("");return te(()=>{Ee(()=>{var l,b,v;a.value=new Intl.DateTimeFormat((b=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&b.forceLocale?r.value:void 0,((v=e.value.lastUpdated)==null?void 0:v.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(i.value)})}),(l,b)=>{var v;return c(),p("p",nr,[R(L(((v=u(e).lastUpdated)==null?void 0:v.text)||u(e).lastUpdatedText||"Last updated")+": ",1),f("time",{datetime:n.value},L(a.value),9,ar)])}}}),cr=w(lr,[["__scopeId","data-v-38b6dfd9"]]),ur=o=>(N("data-v-bbe5e75c"),o=o(),B(),o),dr={key:0,class:"VPDocFooter"},pr={key:0,class:"edit-info"},hr={key:0,class:"edit-link"},fr=ur(()=>f("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),br={key:1,class:"last-updated"},mr={key:1,class:"prev-next"},vr={class:"pager"},gr=["innerHTML"],xr=["innerHTML"],yr={class:"pager"},_r=["innerHTML"],kr=["innerHTML"],$r=x({__name:"VPDocFooter",setup(o){const{theme:e,page:t,frontmatter:s}=E(),r=or(),i=ir(),n=A(()=>e.value.editLink&&s.value.editLink!==!1),a=A(()=>t.value.lastUpdated&&s.value.lastUpdated!==!1),l=A(()=>n.value||a.value||i.value.prev||i.value.next);return(b,v)=>{var m,P,z,I;return l.value?(c(),p("footer",dr,[d(b.$slots,"doc-footer-before",{},void 0,!0),n.value||a.value?(c(),p("div",pr,[n.value?(c(),p("div",hr,[k(q,{class:"edit-link-button",href:u(r).url,"no-icon":!0},{default:h(()=>[fr,R(" "+L(u(r).text),1)]),_:1},8,["href"])])):g("",!0),a.value?(c(),p("div",br,[k(cr)])):g("",!0)])):g("",!0),(m=u(i).prev)!=null&&m.link||(P=u(i).next)!=null&&P.link?(c(),p("nav",mr,[f("div",vr,[(z=u(i).prev)!=null&&z.link?(c(),S(q,{key:0,class:"pager-link prev",href:u(i).prev.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,gr),f("span",{class:"title",innerHTML:u(i).prev.text},null,8,xr)]}),_:1},8,["href"])):g("",!0)]),f("div",yr,[(I=u(i).next)!=null&&I.link?(c(),S(q,{key:0,class:"pager-link next",href:u(i).next.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.next)||"Next page"},null,8,_r),f("span",{class:"title",innerHTML:u(i).next.text},null,8,kr)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),wr=w($r,[["__scopeId","data-v-bbe5e75c"]]),Sr=o=>(N("data-v-5fc3206a"),o=o(),B(),o),Ar={class:"container"},Pr=Sr(()=>f("div",{class:"aside-curtain"},null,-1)),Er={class:"aside-container"},zr={class:"aside-content"},Lr={class:"content"},Tr={class:"content-container"},Vr={class:"main"},Cr=x({__name:"VPDoc",setup(o){const{theme:e}=E(),t=Le(),{hasSidebar:s,hasAside:r,leftAside:i}=U(),n=A(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(a,l)=>{const b=re("Content");return c(),p("div",{class:C(["VPDoc",{"has-sidebar":u(s),"has-aside":u(r)}])},[d(a.$slots,"doc-top",{},void 0,!0),f("div",Ar,[u(r)?(c(),p("div",{key:0,class:C(["aside",{"left-aside":u(i)}])},[Pr,f("div",Er,[f("div",zr,[k(rr,null,{"aside-top":h(()=>[d(a.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(a.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(a.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),f("div",Lr,[f("div",Tr,[d(a.$slots,"doc-before",{},void 0,!0),f("main",Vr,[k(b,{class:C(["vp-doc",[n.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(wr,null,{"doc-footer-before":h(()=>[d(a.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(a.$slots,"doc-after",{},void 0,!0)])])]),d(a.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Or=w(Cr,[["__scopeId","data-v-5fc3206a"]]),Ir=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(o){const e=o,t=A(()=>e.href&&Lt.test(e.href)),s=A(()=>e.tag||e.href?"a":"button");return(r,i)=>(c(),S(le(s.value),{class:C(["VPButton",[r.size,r.theme]]),href:r.href?u(Xe)(r.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:h(()=>[R(L(r.text),1)]),_:1},8,["class","href","target","rel"]))}}),Mr=w(Ir,[["__scopeId","data-v-3aa6481e"]]),Nr=["src","alt"],Br=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(o){return(e,t)=>{const s=re("VPImage",!0);return e.image?(c(),p(O,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),p("img",ke({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(We)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Nr)):(c(),p(O,{key:1},[k(s,ke({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),k(s,ke({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),Se=w(Br,[["__scopeId","data-v-31544fe0"]]),Hr=o=>(N("data-v-5a0e971f"),o=o(),B(),o),Dr={class:"container"},Rr={class:"main"},jr={key:0,class:"name"},qr=["innerHTML"],Ur=["innerHTML"],Fr=["innerHTML"],Gr={key:0,class:"actions"},Kr={key:0,class:"image"},Wr={class:"image-container"},Yr=Hr(()=>f("div",{class:"image-bg"},null,-1)),Xr=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(o){const e=Te("hero-image-slot-exists");return(t,s)=>(c(),p("div",{class:C(["VPHero",{"has-image":t.image||u(e)}])},[f("div",Dr,[f("div",Rr,[d(t.$slots,"home-hero-info-before",{},void 0,!0),d(t.$slots,"home-hero-info",{},()=>[t.name?(c(),p("h1",jr,[f("span",{innerHTML:t.name,class:"clip"},null,8,qr)])):g("",!0),t.text?(c(),p("p",{key:1,innerHTML:t.text,class:"text"},null,8,Ur)):g("",!0),t.tagline?(c(),p("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Fr)):g("",!0)],!0),d(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(c(),p("div",Gr,[(c(!0),p(O,null,H(t.actions,r=>(c(),p("div",{key:r.link,class:"action"},[k(Mr,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||u(e)?(c(),p("div",Kr,[f("div",Wr,[Yr,d(t.$slots,"home-hero-image",{},()=>[t.image?(c(),S(Se,{key:0,class:"image-src",image:t.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),Jr=w(Xr,[["__scopeId","data-v-5a0e971f"]]),Qr=x({__name:"VPHomeHero",setup(o){const{frontmatter:e}=E();return(t,s)=>u(e).hero?(c(),S(Jr,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),Zr=o=>(N("data-v-29c05f11"),o=o(),B(),o),eo={class:"box"},to={key:0,class:"icon"},so=["innerHTML"],ro=["innerHTML"],oo=["innerHTML"],io={key:4,class:"link-text"},no={class:"link-text-value"},ao=Zr(()=>f("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),lo=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(o){return(e,t)=>(c(),S(q,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[f("article",eo,[typeof e.icon=="object"&&e.icon.wrap?(c(),p("div",to,[k(Se,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),S(Se,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,so)):g("",!0),f("h2",{class:"title",innerHTML:e.title},null,8,ro),e.details?(c(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,oo)):g("",!0),e.linkText?(c(),p("div",io,[f("p",no,[R(L(e.linkText)+" ",1),ao])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),co=w(lo,[["__scopeId","data-v-29c05f11"]]),uo={key:0,class:"VPFeatures"},po={class:"container"},ho={class:"items"},fo=x({__name:"VPFeatures",props:{features:{}},setup(o){const e=o,t=A(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,r)=>s.features?(c(),p("div",uo,[f("div",po,[f("div",ho,[(c(!0),p(O,null,H(s.features,i=>(c(),p("div",{key:i.title,class:C(["item",[t.value]])},[k(co,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),bo=w(fo,[["__scopeId","data-v-e7779453"]]),mo=x({__name:"VPHomeFeatures",setup(o){const{frontmatter:e}=E();return(t,s)=>u(e).features?(c(),S(bo,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):g("",!0)}}),vo=x({__name:"VPHomeContent",setup(o){const{width:e}=ls({includeScrollbar:!1});return(t,s)=>(c(),p("div",{class:"vp-doc container",style:Tt(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(t.$slots,"default",{},void 0,!0)],4))}}),go=w(vo,[["__scopeId","data-v-cd81b872"]]),xo={class:"VPHome"},yo=x({__name:"VPHome",setup(o){const{frontmatter:e}=E();return(t,s)=>{const r=re("Content");return c(),p("div",xo,[d(t.$slots,"home-hero-before",{},void 0,!0),k(Qr,null,{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(t.$slots,"home-hero-after",{},void 0,!0),d(t.$slots,"home-features-before",{},void 0,!0),k(mo),d(t.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(c(),S(go,{key:0},{default:h(()=>[k(r)]),_:1})):(c(),S(r,{key:1}))])}}}),_o=w(yo,[["__scopeId","data-v-0d7cbeea"]]),ko={},$o={class:"VPPage"};function wo(o,e){const t=re("Content");return c(),p("div",$o,[d(o.$slots,"page-top"),k(t),d(o.$slots,"page-bottom")])}const So=w(ko,[["render",wo]]),Ao=x({__name:"VPContent",setup(o){const{page:e,frontmatter:t}=E(),{hasSidebar:s}=U();return(r,i)=>(c(),p("div",{class:C(["VPContent",{"has-sidebar":u(s),"is-home":u(t).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(r.$slots,"not-found",{key:0},()=>[k(Vs)],!0):u(t).layout==="page"?(c(),S(So,{key:1},{"page-top":h(()=>[d(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(r.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(t).layout==="home"?(c(),S(_o,{key:2},{"home-hero-before":h(()=>[d(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(r.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(t).layout&&u(t).layout!=="doc"?(c(),S(le(u(t).layout),{key:3})):(c(),S(Or,{key:4},{"doc-top":h(()=>[d(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(r.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[d(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(r.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[d(r.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[d(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(r.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[d(r.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Po=w(Ao,[["__scopeId","data-v-a0eadabb"]]),Eo={class:"container"},zo=["innerHTML"],Lo=["innerHTML"],To=x({__name:"VPFooter",setup(o){const{theme:e,frontmatter:t}=E(),{hasSidebar:s}=U();return(r,i)=>u(e).footer&&u(t).footer!==!1?(c(),p("footer",{key:0,class:C(["VPFooter",{"has-sidebar":u(s)}])},[f("div",Eo,[u(e).footer.message?(c(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,zo)):g("",!0),u(e).footer.copyright?(c(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Lo)):g("",!0)])],2)):g("",!0)}}),Vo=w(To,[["__scopeId","data-v-3181bdf6"]]);function Bt(){const{theme:o,frontmatter:e}=E(),t=zt([]),s=A(()=>t.value.length>0);return ze(()=>{t.value=Qe(e.value.outline??o.value.outline)}),{headers:t,hasLocalNav:s}}const Co=o=>(N("data-v-cba91b6f"),o=o(),B(),o),Oo=Co(()=>f("span",{class:"vpi-chevron-right icon"},null,-1)),Io={class:"header"},Mo={class:"outline"},No=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(o){const e=o,{theme:t}=E(),s=T(!1),r=T(0),i=T(),n=T();cs(i,()=>{s.value=!1}),us("Escape",()=>{s.value=!1}),ze(()=>{s.value=!1});function a(){s.value=!s.value,r.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(v){v.target.classList.contains("outline-link")&&(n.value&&(n.value.style.transition="none"),ds(()=>{s.value=!1}))}function b(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,m)=>(c(),p("div",{class:"VPLocalNavOutlineDropdown",style:Tt({"--vp-vh":r.value+"px"}),ref_key:"main",ref:i},[v.headers.length>0?(c(),p("button",{key:0,onClick:a,class:C({open:s.value})},[R(L(u(Mt)(u(t)))+" ",1),Oo],2)):(c(),p("button",{key:1,onClick:b},L(u(t).returnToTopLabel||"Return to top"),1)),k(Ke,{name:"flyout"},{default:h(()=>[s.value?(c(),p("div",{key:0,ref_key:"items",ref:n,class:"items",onClick:l},[f("div",Io,[f("a",{class:"top-link",href:"#",onClick:b},L(u(t).returnToTopLabel||"Return to top"),1)]),f("div",Mo,[k(Nt,{headers:v.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),Bo=w(No,[["__scopeId","data-v-cba91b6f"]]),Ho=o=>(N("data-v-3ed22da4"),o=o(),B(),o),Do={class:"container"},Ro=["aria-expanded"],jo=Ho(()=>f("span",{class:"vpi-align-left menu-icon"},null,-1)),qo={class:"menu-text"},Uo=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(o){const{theme:e,frontmatter:t}=E(),{hasSidebar:s}=U(),{headers:r}=Bt(),{y:i}=Vt(),n=T(0);te(()=>{n.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),ze(()=>{r.value=Qe(t.value.outline??e.value.outline)});const a=A(()=>r.value.length===0),l=A(()=>a.value&&!s.value),b=A(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:a.value,fixed:l.value}));return(v,m)=>u(t).layout!=="home"&&(!l.value||u(i)>=n.value)?(c(),p("div",{key:0,class:C(b.value)},[f("div",Do,[u(s)?(c(),p("button",{key:0,class:"menu","aria-expanded":v.open,"aria-controls":"VPSidebarNav",onClick:m[0]||(m[0]=P=>v.$emit("open-menu"))},[jo,f("span",qo,L(u(e).sidebarMenuLabel||"Menu"),1)],8,Ro)):g("",!0),k(Bo,{headers:u(r),navHeight:n.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),Fo=w(Uo,[["__scopeId","data-v-3ed22da4"]]);function Go(){const o=T(!1);function e(){o.value=!0,window.addEventListener("resize",r)}function t(){o.value=!1,window.removeEventListener("resize",r)}function s(){o.value?t():e()}function r(){window.outerWidth>=768&&t()}const i=Le();return se(()=>i.path,t),{isScreenOpen:o,openScreen:e,closeScreen:t,toggleScreen:s}}const Ko={},Wo={class:"VPSwitch",type:"button",role:"switch"},Yo={class:"check"},Xo={key:0,class:"icon"};function Jo(o,e){return c(),p("button",Wo,[f("span",Yo,[o.$slots.default?(c(),p("span",Xo,[d(o.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Qo=w(Ko,[["render",Jo],["__scopeId","data-v-3c9bcffa"]]),Ht=o=>(N("data-v-a529835a"),o=o(),B(),o),Zo=Ht(()=>f("span",{class:"vpi-sun sun"},null,-1)),ei=Ht(()=>f("span",{class:"vpi-moon moon"},null,-1)),ti=x({__name:"VPSwitchAppearance",setup(o){const{isDark:e,theme:t}=E(),s=Te("toggle-appearance",()=>{e.value=!e.value}),r=A(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(i,n)=>(c(),S(Qo,{title:r.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(s)},{default:h(()=>[Zo,ei]),_:1},8,["title","aria-checked","onClick"]))}}),Ze=w(ti,[["__scopeId","data-v-a529835a"]]),si={key:0,class:"VPNavBarAppearance"},ri=x({__name:"VPNavBarAppearance",setup(o){const{site:e}=E();return(t,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",si,[k(Ze)])):g("",!0)}}),oi=w(ri,[["__scopeId","data-v-786f23a7"]]),et=T();let Dt=!1,Me=0;function ii(o){const e=T(!1);if(de){!Dt&&ni(),Me++;const t=se(et,s=>{var r,i,n;s===o.el.value||(r=o.el.value)!=null&&r.contains(s)?(e.value=!0,(i=o.onFocus)==null||i.call(o)):(e.value=!1,(n=o.onBlur)==null||n.call(o))});Ye(()=>{t(),Me--,Me||ai()})}return ps(e)}function ni(){document.addEventListener("focusin",Rt),Dt=!0,et.value=document.activeElement}function ai(){document.removeEventListener("focusin",Rt)}function Rt(){et.value=document.activeElement}const li={class:"VPMenuLink"},ci=x({__name:"VPMenuLink",props:{item:{}},setup(o){const{page:e}=E();return(t,s)=>(c(),p("div",li,[k(q,{class:C({active:u(Z)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:h(()=>[R(L(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ve=w(ci,[["__scopeId","data-v-1f793dae"]]),ui={class:"VPMenuGroup"},di={key:0,class:"title"},pi=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(o){return(e,t)=>(c(),p("div",ui,[e.text?(c(),p("p",di,L(e.text),1)):g("",!0),(c(!0),p(O,null,H(e.items,s=>(c(),p(O,null,["link"in s?(c(),S(Ve,{key:0,item:s},null,8,["item"])):g("",!0)],64))),256))]))}}),hi=w(pi,[["__scopeId","data-v-11001275"]]),fi={class:"VPMenu"},bi={key:0,class:"items"},mi=x({__name:"VPMenu",props:{items:{}},setup(o){return(e,t)=>(c(),p("div",fi,[e.items?(c(),p("div",bi,[(c(!0),p(O,null,H(e.items,s=>(c(),p(O,{key:s.text},["link"in s?(c(),S(Ve,{key:0,item:s},null,8,["item"])):(c(),S(hi,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),vi=w(mi,[["__scopeId","data-v-40114911"]]),gi=o=>(N("data-v-ca516adc"),o=o(),B(),o),xi=["aria-expanded","aria-label"],yi={key:0,class:"text"},_i=["innerHTML"],ki=gi(()=>f("span",{class:"vpi-chevron-down text-icon"},null,-1)),$i={key:1,class:"vpi-more-horizontal icon"},wi={class:"menu"},Si=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(o){const e=T(!1),t=T();ii({el:t,onBlur:s});function s(){e.value=!1}return(r,i)=>(c(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:i[1]||(i[1]=n=>e.value=!0),onMouseleave:i[2]||(i[2]=n=>e.value=!1)},[f("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":r.label,onClick:i[0]||(i[0]=n=>e.value=!e.value)},[r.button||r.icon?(c(),p("span",yi,[r.icon?(c(),p("span",{key:0,class:C([r.icon,"option-icon"])},null,2)):g("",!0),r.button?(c(),p("span",{key:1,innerHTML:r.button},null,8,_i)):g("",!0),ki])):(c(),p("span",$i))],8,xi),f("div",wi,[k(vi,{items:r.items},{default:h(()=>[d(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),tt=w(Si,[["__scopeId","data-v-ca516adc"]]),Ai=["href","aria-label","innerHTML"],Pi=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(o){const e=o,t=A(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(s,r)=>(c(),p("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Ai))}}),Ei=w(Pi,[["__scopeId","data-v-e5af8ed1"]]),zi={class:"VPSocialLinks"},Li=x({__name:"VPSocialLinks",props:{links:{}},setup(o){return(e,t)=>(c(),p("div",zi,[(c(!0),p(O,null,H(e.links,({link:s,icon:r,ariaLabel:i})=>(c(),S(Ei,{key:s,icon:r,link:s,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),st=w(Li,[["__scopeId","data-v-2ea1f528"]]),Ti={key:0,class:"group translations"},Vi={class:"trans-title"},Ci={key:1,class:"group"},Oi={class:"item appearance"},Ii={class:"label"},Mi={class:"appearance-action"},Ni={key:2,class:"group"},Bi={class:"item social-links"},Hi=x({__name:"VPNavBarExtra",setup(o){const{site:e,theme:t}=E(),{localeLinks:s,currentLang:r}=xe({correspondingLink:!0}),i=A(()=>s.value.length&&r.value.label||e.value.appearance||t.value.socialLinks);return(n,a)=>i.value?(c(),S(tt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(s).length&&u(r).label?(c(),p("div",Ti,[f("p",Vi,L(u(r).label),1),(c(!0),p(O,null,H(u(s),l=>(c(),S(Ve,{key:l.link,item:l},null,8,["item"]))),128))])):g("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",Ci,[f("div",Oi,[f("p",Ii,L(u(t).darkModeSwitchLabel||"Appearance"),1),f("div",Mi,[k(Ze)])])])):g("",!0),u(t).socialLinks?(c(),p("div",Ni,[f("div",Bi,[k(st,{class:"social-links-list",links:u(t).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),Di=w(Hi,[["__scopeId","data-v-918c0501"]]),Ri=o=>(N("data-v-dbac2bdb"),o=o(),B(),o),ji=["aria-expanded"],qi=Ri(()=>f("span",{class:"container"},[f("span",{class:"top"}),f("span",{class:"middle"}),f("span",{class:"bottom"})],-1)),Ui=[qi],Fi=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(o){return(e,t)=>(c(),p("button",{type:"button",class:C(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},Ui,10,ji))}}),Gi=w(Fi,[["__scopeId","data-v-dbac2bdb"]]),Ki=["innerHTML"],Wi=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(o){const{page:e}=E();return(t,s)=>(c(),S(q,{class:C({VPNavBarMenuLink:!0,active:u(Z)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:h(()=>[f("span",{innerHTML:t.item.text},null,8,Ki)]),_:1},8,["class","href","target","rel"]))}}),Yi=w(Wi,[["__scopeId","data-v-1513c207"]]),Xi=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(o){const e=o,{page:t}=E(),s=i=>"link"in i?Z(t.value.relativePath,i.link,!!e.item.activeMatch):i.items.some(s),r=A(()=>s(e.item));return(i,n)=>(c(),S(tt,{class:C({VPNavBarMenuGroup:!0,active:u(Z)(u(t).relativePath,i.item.activeMatch,!!i.item.activeMatch)||r.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),Ji=o=>(N("data-v-5a2822ec"),o=o(),B(),o),Qi={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Zi=Ji(()=>f("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),en=x({__name:"VPNavBarMenu",setup(o){const{theme:e}=E();return(t,s)=>u(e).nav?(c(),p("nav",Qi,[Zi,(c(!0),p(O,null,H(u(e).nav,r=>(c(),p(O,{key:r.text},["link"in r?(c(),S(Yi,{key:0,item:r},null,8,["item"])):(c(),S(Xi,{key:1,item:r},null,8,["item"]))],64))),128))])):g("",!0)}}),tn=w(en,[["__scopeId","data-v-5a2822ec"]]);function sn(o){const{localeIndex:e,theme:t}=E();function s(r){var I,M,V;const i=r.split("."),n=(I=t.value.search)==null?void 0:I.options,a=n&&typeof n=="object",l=a&&((V=(M=n.locales)==null?void 0:M[e.value])==null?void 0:V.translations)||null,b=a&&n.translations||null;let v=l,m=b,P=o;const z=i.pop();for(const _e of i){let F=null;const ne=P==null?void 0:P[_e];ne&&(F=P=ne);const Oe=m==null?void 0:m[_e];Oe&&(F=m=Oe);const Ie=v==null?void 0:v[_e];Ie&&(F=v=Ie),ne||(P=F),Oe||(m=F),Ie||(v=F)}return(v==null?void 0:v[z])??(m==null?void 0:m[z])??(P==null?void 0:P[z])??""}return s}const rn=["aria-label"],on={class:"DocSearch-Button-Container"},nn=f("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),an={class:"DocSearch-Button-Placeholder"},ln=f("span",{class:"DocSearch-Button-Keys"},[f("kbd",{class:"DocSearch-Button-Key"}),f("kbd",{class:"DocSearch-Button-Key"},"K")],-1),ht=x({__name:"VPNavBarSearchButton",setup(o){const t=sn({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,r)=>(c(),p("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(t)("button.buttonAriaLabel")},[f("span",on,[nn,f("span",an,L(u(t)("button.buttonText")),1)]),ln],8,rn))}}),cn={class:"VPNavBarSearch"},un={id:"local-search"},dn={key:1,id:"docsearch"},pn=x({__name:"VPNavBarSearch",setup(o){const e=()=>null,t=()=>null,{theme:s}=E(),r=T(!1),i=T(!1);te(()=>{});function n(){r.value||(r.value=!0,setTimeout(a,16))}function a(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||a()},16)}const l=T(!1),b="";return(v,m)=>{var P;return c(),p("div",cn,[u(b)==="local"?(c(),p(O,{key:0},[l.value?(c(),S(u(e),{key:0,onClose:m[0]||(m[0]=z=>l.value=!1)})):g("",!0),f("div",un,[k(ht,{onClick:m[1]||(m[1]=z=>l.value=!0)})])],64)):u(b)==="algolia"?(c(),p(O,{key:1},[r.value?(c(),S(u(t),{key:0,algolia:((P=u(s).search)==null?void 0:P.options)??u(s).algolia,onVnodeBeforeMount:m[2]||(m[2]=z=>i.value=!0)},null,8,["algolia"])):g("",!0),i.value?g("",!0):(c(),p("div",dn,[k(ht,{onClick:n})]))],64)):g("",!0)])}}}),hn=x({__name:"VPNavBarSocialLinks",setup(o){const{theme:e}=E();return(t,s)=>u(e).socialLinks?(c(),S(st,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),fn=w(hn,[["__scopeId","data-v-8aed4598"]]),bn=["href","rel","target"],mn={key:1},vn={key:2},gn=x({__name:"VPNavBarTitle",setup(o){const{site:e,theme:t}=E(),{hasSidebar:s}=U(),{currentLang:r}=xe(),i=A(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),n=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),a=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,b)=>(c(),p("div",{class:C(["VPNavBarTitle",{"has-sidebar":u(s)}])},[f("a",{class:"title",href:i.value??u(Xe)(u(r).link),rel:n.value,target:a.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),u(t).logo?(c(),S(Se,{key:0,class:"logo",image:u(t).logo},null,8,["image"])):g("",!0),u(t).siteTitle?(c(),p("span",mn,L(u(t).siteTitle),1)):u(t).siteTitle===void 0?(c(),p("span",vn,L(u(e).title),1)):g("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,bn)],2))}}),xn=w(gn,[["__scopeId","data-v-5598953a"]]),yn={class:"items"},_n={class:"title"},kn=x({__name:"VPNavBarTranslations",setup(o){const{theme:e}=E(),{localeLinks:t,currentLang:s}=xe({correspondingLink:!0});return(r,i)=>u(t).length&&u(s).label?(c(),S(tt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:h(()=>[f("div",yn,[f("p",_n,L(u(s).label),1),(c(!0),p(O,null,H(u(t),n=>(c(),S(Ve,{key:n.link,item:n},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),$n=w(kn,[["__scopeId","data-v-aaab09ea"]]),wn=o=>(N("data-v-cd0bf013"),o=o(),B(),o),Sn={class:"wrapper"},An={class:"container"},Pn={class:"title"},En={class:"content"},zn={class:"content-body"},Ln=wn(()=>f("div",{class:"divider"},[f("div",{class:"divider-line"})],-1)),Tn=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(o){const{y:e}=Vt(),{hasSidebar:t}=U(),{hasLocalNav:s}=Bt(),{frontmatter:r}=E(),i=T({});return Et(()=>{i.value={"has-sidebar":t.value,"has-local-nav":s.value,top:r.value.layout==="home"&&e.value===0}}),(n,a)=>(c(),p("div",{class:C(["VPNavBar",i.value])},[f("div",Sn,[f("div",An,[f("div",Pn,[k(xn,null,{"nav-bar-title-before":h(()=>[d(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(n.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),f("div",En,[f("div",zn,[d(n.$slots,"nav-bar-content-before",{},void 0,!0),k(pn,{class:"search"}),k(tn,{class:"menu"}),k($n,{class:"translations"}),k(oi,{class:"appearance"}),k(fn,{class:"social-links"}),k(Di,{class:"extra"}),d(n.$slots,"nav-bar-content-after",{},void 0,!0),k(Gi,{class:"hamburger",active:n.isScreenOpen,onClick:a[0]||(a[0]=l=>n.$emit("toggle-screen"))},null,8,["active"])])])])]),Ln],2))}}),Vn=w(Tn,[["__scopeId","data-v-cd0bf013"]]),Cn={key:0,class:"VPNavScreenAppearance"},On={class:"text"},In=x({__name:"VPNavScreenAppearance",setup(o){const{site:e,theme:t}=E();return(s,r)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",Cn,[f("p",On,L(u(t).darkModeSwitchLabel||"Appearance"),1),k(Ze)])):g("",!0)}}),Mn=w(In,[["__scopeId","data-v-2ed7559f"]]),Nn=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(o){const e=Te("close-screen");return(t,s)=>(c(),S(q,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:h(()=>[R(L(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Bn=w(Nn,[["__scopeId","data-v-c303e757"]]),Hn=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(o){const e=Te("close-screen");return(t,s)=>(c(),S(q,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:h(()=>[R(L(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),jt=w(Hn,[["__scopeId","data-v-4bd09630"]]),Dn={class:"VPNavScreenMenuGroupSection"},Rn={key:0,class:"title"},jn=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(o){return(e,t)=>(c(),p("div",Dn,[e.text?(c(),p("p",Rn,L(e.text),1)):g("",!0),(c(!0),p(O,null,H(e.items,s=>(c(),S(jt,{key:s.text,item:s},null,8,["item"]))),128))]))}}),qn=w(jn,[["__scopeId","data-v-ca3d4e61"]]),Un=o=>(N("data-v-0a808fc4"),o=o(),B(),o),Fn=["aria-controls","aria-expanded"],Gn=["innerHTML"],Kn=Un(()=>f("span",{class:"vpi-plus button-icon"},null,-1)),Wn=["id"],Yn={key:1,class:"group"},Xn=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(o){const e=o,t=T(!1),s=A(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function r(){t.value=!t.value}return(i,n)=>(c(),p("div",{class:C(["VPNavScreenMenuGroup",{open:t.value}])},[f("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:r},[f("span",{class:"button-text",innerHTML:i.text},null,8,Gn),Kn],8,Fn),f("div",{id:s.value,class:"items"},[(c(!0),p(O,null,H(i.items,a=>(c(),p(O,{key:a.text},["link"in a?(c(),p("div",{key:a.text,class:"item"},[k(jt,{item:a},null,8,["item"])])):(c(),p("div",Yn,[k(qn,{text:a.text,items:a.items},null,8,["text","items"])]))],64))),128))],8,Wn)],2))}}),Jn=w(Xn,[["__scopeId","data-v-0a808fc4"]]),Qn={key:0,class:"VPNavScreenMenu"},Zn=x({__name:"VPNavScreenMenu",setup(o){const{theme:e}=E();return(t,s)=>u(e).nav?(c(),p("nav",Qn,[(c(!0),p(O,null,H(u(e).nav,r=>(c(),p(O,{key:r.text},["link"in r?(c(),S(Bn,{key:0,item:r},null,8,["item"])):(c(),S(Jn,{key:1,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),ea=x({__name:"VPNavScreenSocialLinks",setup(o){const{theme:e}=E();return(t,s)=>u(e).socialLinks?(c(),S(st,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),qt=o=>(N("data-v-46ce0713"),o=o(),B(),o),ta=qt(()=>f("span",{class:"vpi-languages icon lang"},null,-1)),sa=qt(()=>f("span",{class:"vpi-chevron-down icon chevron"},null,-1)),ra={class:"list"},oa=x({__name:"VPNavScreenTranslations",setup(o){const{localeLinks:e,currentLang:t}=xe({correspondingLink:!0}),s=T(!1);function r(){s.value=!s.value}return(i,n)=>u(e).length&&u(t).label?(c(),p("div",{key:0,class:C(["VPNavScreenTranslations",{open:s.value}])},[f("button",{class:"title",onClick:r},[ta,R(" "+L(u(t).label)+" ",1),sa]),f("ul",ra,[(c(!0),p(O,null,H(u(e),a=>(c(),p("li",{key:a.link,class:"item"},[k(q,{class:"link",href:a.link},{default:h(()=>[R(L(a.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),ia=w(oa,[["__scopeId","data-v-46ce0713"]]),na={class:"container"},aa=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(o){const e=T(null),t=Ct(de?document.body:null);return(s,r)=>(c(),S(Ke,{name:"fade",onEnter:r[0]||(r[0]=i=>t.value=!0),onAfterLeave:r[1]||(r[1]=i=>t.value=!1)},{default:h(()=>[s.open?(c(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[f("div",na,[d(s.$slots,"nav-screen-content-before",{},void 0,!0),k(Zn,{class:"menu"}),k(ia,{class:"translations"}),k(Mn,{class:"appearance"}),k(ea,{class:"social-links"}),d(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),la=w(aa,[["__scopeId","data-v-a1d80ed4"]]),ca={key:0,class:"VPNav"},ua=x({__name:"VPNav",setup(o){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=Go(),{frontmatter:r}=E(),i=A(()=>r.value.navbar!==!1);return Ot("close-screen",t),Ee(()=>{de&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(n,a)=>i.value?(c(),p("header",ca,[k(Vn,{"is-screen-open":u(e),onToggleScreen:u(s)},{"nav-bar-title-before":h(()=>[d(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(n.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(n.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(n.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(la,{open:u(e)},{"nav-screen-content-before":h(()=>[d(n.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(n.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),da=w(ua,[["__scopeId","data-v-08aa4208"]]),Ut=o=>(N("data-v-601fff8e"),o=o(),B(),o),pa=["role","tabindex"],ha=Ut(()=>f("div",{class:"indicator"},null,-1)),fa=Ut(()=>f("span",{class:"vpi-chevron-right caret-icon"},null,-1)),ba=[fa],ma={key:1,class:"items"},va=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(o){const e=o,{collapsed:t,collapsible:s,isLink:r,isActiveLink:i,hasActiveLink:n,hasChildren:a,toggle:l}=Ms(A(()=>e.item)),b=A(()=>a.value?"section":"div"),v=A(()=>r.value?"a":"div"),m=A(()=>a.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),P=A(()=>r.value?void 0:"button"),z=A(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":r.value},{"is-active":i.value},{"has-active":n.value}]);function I(V){"key"in V&&V.key!=="Enter"||!e.item.link&&l()}function M(){e.item.link&&l()}return(V,_e)=>{const F=re("VPSidebarItem",!0);return c(),S(le(b.value),{class:C(["VPSidebarItem",z.value])},{default:h(()=>[V.item.text?(c(),p("div",ke({key:0,class:"item",role:P.value},fs(V.item.items?{click:I,keydown:I}:{},!0),{tabindex:V.item.items&&0}),[ha,V.item.link?(c(),S(q,{key:0,tag:v.value,class:"link",href:V.item.link,rel:V.item.rel,target:V.item.target},{default:h(()=>[(c(),S(le(m.value),{class:"text",innerHTML:V.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),S(le(m.value),{key:1,class:"text",innerHTML:V.item.text},null,8,["innerHTML"])),V.item.collapsed!=null?(c(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:hs(M,["enter"]),tabindex:"0"},ba,32)):g("",!0)],16,pa)):g("",!0),V.item.items&&V.item.items.length?(c(),p("div",ma,[V.depth<5?(c(!0),p(O,{key:0},H(V.item.items,ne=>(c(),S(F,{key:ne.text,item:ne,depth:V.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),ga=w(va,[["__scopeId","data-v-601fff8e"]]),Ft=o=>(N("data-v-ba982e17"),o=o(),B(),o),xa=Ft(()=>f("div",{class:"curtain"},null,-1)),ya={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},_a=Ft(()=>f("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ka=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(o){const{sidebarGroups:e,hasSidebar:t}=U(),s=o,r=T(null),i=Ct(de?document.body:null);return se([s,r],()=>{var n;s.open?(i.value=!0,(n=r.value)==null||n.focus()):i.value=!1},{immediate:!0,flush:"post"}),(n,a)=>u(t)?(c(),p("aside",{key:0,class:C(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:r,onClick:a[0]||(a[0]=bs(()=>{},["stop"]))},[xa,f("nav",ya,[_a,d(n.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),p(O,null,H(u(e),l=>(c(),p("div",{key:l.text,class:"group"},[k(ga,{item:l,depth:0},null,8,["item"])]))),128)),d(n.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),$a=w(ka,[["__scopeId","data-v-ba982e17"]]),wa=x({__name:"VPSkipLink",setup(o){const e=Le(),t=T();se(()=>e.path,()=>t.value.focus());function s({target:r}){const i=document.getElementById(decodeURIComponent(r.hash).slice(1));if(i){const n=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",n)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",n),i.focus(),window.scrollTo(0,0)}}return(r,i)=>(c(),p(O,null,[f("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),f("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),Sa=w(wa,[["__scopeId","data-v-b79a1e83"]]),Aa=x({__name:"Layout",setup(o){const{isOpen:e,open:t,close:s}=U(),r=Le();se(()=>r.path,s),Is(e,s);const{frontmatter:i}=E(),n=ms(),a=A(()=>!!n["home-hero-image"]);return Ot("hero-image-slot-exists",a),(l,b)=>{const v=re("Content");return u(i).layout!==!1?(c(),p("div",{key:0,class:C(["Layout",u(i).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),k(Sa),k(ys,{class:"backdrop",show:u(e),onClick:u(s)},null,8,["show","onClick"]),k(da,null,{"nav-bar-title-before":h(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(Fo,{open:u(e),onOpenMenu:u(t)},null,8,["open","onOpenMenu"]),k($a,{open:u(e)},{"sidebar-nav-before":h(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(Po,null,{"page-top":h(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(Vo),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),S(v,{key:1}))}}}),Pa=w(Aa,[["__scopeId","data-v-1333ba00"]]),Sl={Layout:Pa,enhanceApp:({app:o})=>{o.component("Badge",vs)}},Ea=()=>typeof customElements>"u"?void 0:customElements;function oe(o,e,t=Ea()){if(!t)return e;const s=t.get(o);return s||(t.define(o,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=globalThis,rt=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),ft=new WeakMap;let Gt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(rt&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ft.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ft.set(t,e))}return e}toString(){return this.cssText}};const za=o=>new Gt(typeof o=="string"?o:o+"",void 0,ot),ie=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Gt(t,o,ot)},La=(o,e)=>{if(rt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=we.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,o.appendChild(s)}},bt=rt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return za(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ta,defineProperty:Va,getOwnPropertyDescriptor:Ca,getOwnPropertyNames:Oa,getOwnPropertySymbols:Ia,getPrototypeOf:Ma}=Object,W=globalThis,mt=W.trustedTypes,Na=mt?mt.emptyScript:"",Ne=W.reactiveElementPolyfillSupport,he=(o,e)=>o,Ge={toAttribute(o,e){switch(e){case Boolean:o=o?Na:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Kt=(o,e)=>!Ta(o,e),vt={attribute:!0,type:String,converter:Ge,reflect:!1,useDefault:!1,hasChanged:Kt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),W.litPropertyMetadata??(W.litPropertyMetadata=new WeakMap);let ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Va(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Ca(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);i==null||i.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vt}static _$Ei(){if(this.hasOwnProperty(he("elementProperties")))return;const e=Ma(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he("properties"))){const t=this.properties,s=[...Oa(t),...Ia(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(bt(r))}else e!==void 0&&t.push(bt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return La(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var i;const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:Ge).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var i,n;const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Ge;this._$Em=r;const b=l.fromAttribute(t,a.type);this[r]=b??((n=this._$Ej)==null?void 0:n.get(r))??b,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){var n;if(e!==void 0){const a=this.constructor;if(r===!1&&(i=this[e]),s??(s=a.getPropertyOptions(e)),!((s.hasChanged??Kt)(i,t)||s.useDefault&&s.reflect&&i===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r){const{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},ae[he("elementProperties")]=new Map,ae[he("finalized")]=new Map,Ne==null||Ne({ReactiveElement:ae}),(W.reactiveElementVersions??(W.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=globalThis,gt=o=>o,Ae=fe.trustedTypes,xt=Ae?Ae.createPolicy("lit-html",{createHTML:o=>o}):void 0,Wt="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,Yt="?"+K,Ba=`<${Yt}>`,ee=document,me=()=>ee.createComment(""),ve=o=>o===null||typeof o!="object"&&typeof o!="function",it=Array.isArray,Ha=o=>it(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,_t=/>/g,Y=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,$t=/"/g,Xt=/^(?:script|style|textarea|title)$/i,Da=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),$=Da(1),j=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),wt=new WeakMap,J=ee.createTreeWalker(ee,129);function Jt(o,e){if(!it(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(e):e}const Ra=(o,e)=>{const t=o.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",n=pe;for(let a=0;a<t;a++){const l=o[a];let b,v,m=-1,P=0;for(;P<l.length&&(n.lastIndex=P,v=n.exec(l),v!==null);)P=n.lastIndex,n===pe?v[1]==="!--"?n=yt:v[1]!==void 0?n=_t:v[2]!==void 0?(Xt.test(v[2])&&(r=RegExp("</"+v[2],"g")),n=Y):v[3]!==void 0&&(n=Y):n===Y?v[0]===">"?(n=r??pe,m=-1):v[1]===void 0?m=-2:(m=n.lastIndex-v[2].length,b=v[1],n=v[3]===void 0?Y:v[3]==='"'?$t:kt):n===$t||n===kt?n=Y:n===yt||n===_t?n=pe:(n=Y,r=void 0);const z=n===Y&&o[a+1].startsWith("/>")?" ":"";i+=n===pe?l+Ba:m>=0?(s.push(b),l.slice(0,m)+Wt+l.slice(m)+K+z):l+K+(m===-2?a:z)}return[Jt(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class ge{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,n=0;const a=e.length-1,l=this.parts,[b,v]=Ra(e,t);if(this.el=ge.createElement(b,s),J.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=J.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const m of r.getAttributeNames())if(m.endsWith(Wt)){const P=v[n++],z=r.getAttribute(m).split(K),I=/([.?@])?(.*)/.exec(P);l.push({type:1,index:i,name:I[2],strings:z,ctor:I[1]==="."?qa:I[1]==="?"?Ua:I[1]==="@"?Fa:Ce}),r.removeAttribute(m)}else m.startsWith(K)&&(l.push({type:6,index:i}),r.removeAttribute(m));if(Xt.test(r.tagName)){const m=r.textContent.split(K),P=m.length-1;if(P>0){r.textContent=Ae?Ae.emptyScript:"";for(let z=0;z<P;z++)r.append(m[z],me()),J.nextNode(),l.push({type:2,index:++i});r.append(m[P],me())}}}else if(r.nodeType===8)if(r.data===Yt)l.push({type:2,index:i});else{let m=-1;for(;(m=r.data.indexOf(K,m+1))!==-1;)l.push({type:7,index:i}),m+=K.length-1}i++}}static createElement(e,t){const s=ee.createElement("template");return s.innerHTML=e,s}}function ce(o,e,t=o,s){var n,a;if(e===j)return e;let r=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const i=ve(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=r:t._$Cl=r),r!==void 0&&(e=ce(o,r._$AS(o,e.values),r,s)),e}class ja{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=((e==null?void 0:e.creationScope)??ee).importNode(t,!0);J.currentNode=r;let i=J.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let b;l.type===2?b=new ye(i,i.nextSibling,this,e):l.type===1?b=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(b=new Ga(i,this,e)),this._$AV.push(b),l=s[++a]}n!==(l==null?void 0:l.index)&&(i=J.nextNode(),n++)}return J.currentNode=ee,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ye{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ce(this,e,t),ve(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ha(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(ee.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ge.createElement(Jt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const n=new ja(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=wt.get(e.strings);return t===void 0&&wt.set(e.strings,t=new ge(e)),t}k(e){it(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new ye(this.O(me()),this.O(me()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const r=gt(e).nextSibling;gt(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ce{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(e,t=this,s,r){const i=this.strings;let n=!1;if(i===void 0)e=ce(this,e,t,0),n=!ve(e)||e!==this._$AH&&e!==j,n&&(this._$AH=e);else{const a=e;let l,b;for(e=i[0],l=0;l<i.length-1;l++)b=ce(this,a[s+l],t,l),b===j&&(b=this._$AH[l]),n||(n=!ve(b)||b!==this._$AH[l]),b===_?e=_:e!==_&&(e+=(b??"")+i[l+1]),this._$AH[l]=b}n&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qa extends Ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Ua extends Ce{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Fa extends Ce{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=ce(this,e,t,0)??_)===j)return;const s=this._$AH,r=e===_&&s!==_||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==_&&(s===_||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ga{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ce(this,e)}}const He=fe.litHtmlPolyfillSupport;He==null||He(ge,ye),(fe.litHtmlVersions??(fe.litHtmlVersions=[])).push("3.3.3");const Ka=(o,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let r=s._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;s._$litPart$=r=new ye(e.insertBefore(me(),i),i,void 0,t??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis;let D=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ka(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return j}};var Pt;D._$litElement$=!0,D.finalized=!0,(Pt=Q.litElementHydrateSupport)==null||Pt.call(Q,{LitElement:D});const De=Q.litElementPolyfillSupport;De==null||De({LitElement:D});(Q.litElementVersions??(Q.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=o=>o??_;class nt extends D{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:$`<slot></slot>`;return $`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${y(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?$`<span class="spinner" part="spinner" aria-hidden="true"></span>`:$`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?_:$`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(nt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(nt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-button-height: 38px;
      --super-button-padding-inline: 17px;
      --super-button-gap: 7px;
      --super-button-font-size: 15px;
      --super-button-font-weight: 700;
      --super-button-background: #4b87f5;
      --super-button-background-hover: #6a9df7;
      --super-button-background-active: #3272e8;
      --super-button-color: #ffffff;
      --super-button-border-color: #174ea6;
      --super-button-shadow-color: #174ea6;
      --super-button-focus-color: #56c6b7;
      --super-button-rotation: -0.25deg;

      display: inline-block;
      max-inline-size: 100%;
      color: #292524;
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-button-height: 48px;
      --super-button-padding-inline: 22px;
      --super-button-gap: 9px;
      --super-button-font-size: 18px;
    }

    :host([size="small"]) {
      --super-button-height: 30px;
      --super-button-padding-inline: 12px;
      --super-button-gap: 5px;
      --super-button-font-size: 13px;
    }

    :host([variant="secondary"]) {
      --super-button-background: #f8fafc;
      --super-button-background-hover: #ffffff;
      --super-button-background-active: #dce3ea;
      --super-button-color: #292524;
      --super-button-border-color: #536170;
      --super-button-shadow-color: #a8b3bf;
    }

    :host([variant="success"]) {
      --super-button-background: #86cf8b;
      --super-button-background-hover: #a2dca5;
      --super-button-background-active: #66b96f;
      --super-button-color: #ffffff;
      --super-button-border-color: #2e7738;
      --super-button-shadow-color: #2e7738;
    }

    :host([variant="warning"]) {
      --super-button-background: #ffca50;
      --super-button-background-hover: #ffda79;
      --super-button-background-active: #edac27;
      --super-button-color: #352809;
      --super-button-border-color: #9e6508;
      --super-button-shadow-color: #b67b17;
    }

    :host([variant="danger"]) {
      --super-button-background: #ff7067;
      --super-button-background-hover: #ff918a;
      --super-button-background-active: #ed5148;
      --super-button-color: #ffffff;
      --super-button-border-color: #b7352f;
      --super-button-shadow-color: #b7352f;
    }

    :host([variant="outline"]) {
      --super-button-background: #fffef9;
      --super-button-background-hover: #edf4ff;
      --super-button-background-active: #d7e7ff;
      --super-button-color: #16428f;
      --super-button-border-color: #16428f;
      --super-button-shadow-color: #9fb7dc;
    }

    :host([variant="ghost"]) {
      --super-button-background: transparent;
      --super-button-background-hover: #f5f8fc;
      --super-button-background-active: #e7edf5;
      --super-button-color: #596779;
      --super-button-border-color: #9ba9ba;
      --super-button-shadow-color: transparent;
    }

    :host([variant="text"]) {
      --super-button-background: transparent;
      --super-button-background-hover: #eef5ff;
      --super-button-background-active: #dceaff;
      --super-button-color: #1d57bf;
      --super-button-border-color: transparent;
      --super-button-shadow-color: transparent;
      --super-button-padding-inline: 8px;
    }

    button {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-inline-size: var(--super-button-height);
      block-size: var(--super-button-height);
      margin: 0;
      padding: 0 var(--super-button-padding-inline);
      overflow: visible;
      color: var(--super-button-color);
      font: inherit;
      font-size: var(--super-button-font-size);
      font-weight: var(--super-button-font-weight);
      line-height: 1;
      letter-spacing: 0.02em;
      white-space: nowrap;
      background: var(--super-button-background);
      border: 2px solid var(--super-button-border-color);
      border-radius: 8px 11px 7px 10px / 9px 7px 10px 8px;
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 24%),
        2px 3px 0 -1px var(--super-button-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-button-rotation));
      transform-origin: center;
      transition:
        background-color 140ms ease,
        box-shadow 140ms ease,
        filter 140ms ease,
        transform 100ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    button::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 6px 9px 5px 8px / 7px 5px 8px 6px;
      opacity: 0.14;
      pointer-events: none;
      transform: rotate(0.35deg);
    }

    :host([variant="ghost"]) button {
      border-style: dashed;
      box-shadow: none;
    }

    :host([variant="ghost"]) button::after,
    :host([variant="text"]) button::after {
      display: none;
    }

    :host([variant="text"]) button {
      min-inline-size: 0;
      box-shadow: none;
    }

    :host([variant="text"]) button::before {
      position: absolute;
      right: 8px;
      bottom: 4px;
      left: 8px;
      content: "";
      border-bottom: 2px solid currentColor;
      opacity: 0;
      transform: rotate(-1.5deg) scaleX(0.7);
      transition: opacity 140ms ease, transform 140ms ease;
    }

    :host([shape="pill"]) button {
      padding-inline: calc(var(--super-button-padding-inline) + 3px);
      border-radius: 999px 920px 980px 900px / 860px 990px 910px 970px;
    }

    :host([shape="pill"]) button::after {
      border-radius: inherit;
    }

    :host([shape="square"]) button {
      inline-size: var(--super-button-height);
      min-inline-size: var(--super-button-height);
      padding: 0;
      border-radius: 10px 7px 11px 8px / 8px 11px 7px 10px;
    }

    .content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-inline-size: 100%;
      min-inline-size: 0;
      gap: var(--super-button-gap);
    }

    .label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-inline-size: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    slot {
      display: contents;
    }

    ::slotted([slot="prefix"]),
    ::slotted([slot="suffix"]) {
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      inline-size: 1em;
      block-size: 1em;
      font-size: 1.15em;
      line-height: 1;
    }

    ::slotted(svg) {
      max-inline-size: 1.2em;
      max-block-size: 1.2em;
    }

    :host([shape="square"][loading]) .label {
      display: none;
    }

    .spinner {
      box-sizing: border-box;
      flex: none;
      inline-size: 1.05em;
      block-size: 1.05em;
      border: 2px dotted currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: super-button-spin 800ms steps(8, end) infinite;
    }

    button:focus-visible {
      outline: 3px solid var(--super-button-focus-color);
      outline-offset: 3px;
    }

    @media (hover: hover) {
      button:not(:disabled):hover {
        background: var(--super-button-background-hover);
        box-shadow:
          inset 0 0 0 1px rgb(255 255 255 / 28%),
          3px 4px 0 -1px var(--super-button-shadow-color);
        transform: translate(-1px, -1px) rotate(0.15deg);
      }

      :host([variant="text"]) button:not(:disabled):hover::before {
        opacity: 0.45;
        transform: rotate(-1.5deg) scaleX(1);
      }
    }

    button:not(:disabled):active {
      background: var(--super-button-background-active);
      box-shadow:
        inset 0 2px 3px rgb(15 23 42 / 18%),
        1px 1px 0 -1px var(--super-button-shadow-color);
      transform: translate(2px, 2px) rotate(-0.15deg);
    }

    button:disabled {
      cursor: not-allowed;
      filter: grayscale(0.18) saturate(0.62);
      box-shadow: 1px 1px 0 -1px var(--super-button-shadow-color);
      opacity: 0.46;
      transform: rotate(0deg);
    }

    :host([loading]) button:disabled {
      cursor: wait;
      filter: saturate(0.84);
      opacity: 0.88;
    }

    @keyframes super-button-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      button {
        transition: none;
      }

      .spinner {
        animation-duration: 1600ms;
      }
    }
  `});const Wa="super-button",Ya=o=>oe(Wa,nt,o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qt=o=>(...e)=>({_$litDirective$:o,values:e});class Zt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=o=>o.strings===void 0,Xa={},Ja=(o,e=Xa)=>o._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=Qt(class extends Zt{constructor(o){if(super(o),o.type!==X.PROPERTY&&o.type!==X.ATTRIBUTE&&o.type!==X.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!es(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===j||e===_)return e;const t=o.element,s=o.name;if(o.type===X.PROPERTY){if(e===t[s])return j}else if(o.type===X.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return j}else if(o.type===X.ATTRIBUTE&&t.getAttribute(s)===e+"")return j;return Ja(o),e}});class at extends D{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.indeterminate=!1,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked,this.indeterminate=!1;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return $`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${ue(this.checked)}
            .indeterminate=${this.indeterminate}
            name=${this.name}
            value=${this.value}
            aria-label=${y(this.accessibleLabel||void 0)}
            aria-labelledby=${y(this.accessibleLabel?void 0:"super-checkbox-label")}
            aria-describedby=${y(e)}
            aria-invalid=${y(t)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <span class="surface">
            <span class="icon" part="icon" aria-hidden="true">
              <slot name="icon"></slot>
            </span>
            <span class="box" part="indicator" aria-hidden="true">
              <span class="mark" part="mark"></span>
            </span>
            <span class="content" part="content">
              <span id="super-checkbox-label" class="label" part="label">
                <slot></slot>
              </span>
              <span
                id="super-checkbox-description"
                class="description"
                part="description"
              ><slot name="description"></slot></span>
            </span>
          </span>
        </label>
        ${this.helperText?$`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${y(this.validation==="error"?"alert":void 0)}
              aria-live=${y(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:_}
      </span>
    `}}Object.defineProperty(at,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(at,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-checkbox-size: 22px;
      --super-checkbox-gap: 10px;
      --super-checkbox-font-size: 15px;
      --super-checkbox-color: #292524;
      --super-checkbox-border-color: #34445f;
      --super-checkbox-background: #fffef9;
      --super-checkbox-checked-background: #3978e9;
      --super-checkbox-checked-color: #ffffff;
      --super-checkbox-hover-color: #3fa66a;
      --super-checkbox-focus-color: #356df3;
      --super-checkbox-shadow-color: #9fb7dc;
      --super-checkbox-validation-color: var(--super-checkbox-border-color);
      --super-checkbox-rotation: -0.35deg;
      --super-checkbox-card-background: #fffef9;
      --super-checkbox-card-checked-background: #f3f7ff;
      --super-checkbox-card-padding: 13px 16px;

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-checkbox-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-checkbox-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-checkbox-size: 27px;
      --super-checkbox-gap: 12px;
      --super-checkbox-font-size: 17px;
    }

    :host([size="small"]) {
      --super-checkbox-size: 18px;
      --super-checkbox-gap: 7px;
      --super-checkbox-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-checkbox-validation-color: #23804a;
    }

    :host([validation="warning"]) {
      --super-checkbox-validation-color: #a05f00;
    }

    :host([validation="error"]) {
      --super-checkbox-validation-color: #cf3038;
    }

    :host([validation="info"]) {
      --super-checkbox-validation-color: #64748b;
    }

    .wrapper {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .control {
      position: relative;
      display: inline-flex;
      min-inline-size: 0;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .native {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .surface {
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-checkbox-gap);
      border: 2px solid transparent;
      border-radius: 9px 12px 8px 11px / 11px 8px 12px 9px;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    :host([variant="card"]) .surface {
      box-sizing: border-box;
      min-inline-size: 184px;
      padding: var(--super-checkbox-card-padding);
      background: var(--super-checkbox-card-background);
      border-color: var(--super-checkbox-border-color);
      box-shadow: 2px 3px 0 -1px var(--super-checkbox-shadow-color);
      transform: rotate(var(--super-checkbox-rotation));
    }

    :host([variant="card"]) .wrapper,
    :host([variant="card"]) .control,
    :host([variant="card"]) .surface {
      inline-size: 100%;
    }

    :host([variant="card"][checked]) .surface,
    :host([variant="card"][indeterminate]) .surface {
      background: var(--super-checkbox-card-checked-background);
      border-color: var(--super-checkbox-checked-background);
      box-shadow: 2px 3px 0 -1px #9fb7dc;
    }

    .box {
      position: relative;
      display: inline-block;
      flex: none;
      box-sizing: border-box;
      inline-size: var(--super-checkbox-size);
      block-size: var(--super-checkbox-size);
      color: var(--super-checkbox-checked-color);
      background: var(--super-checkbox-background);
      border: 2px solid var(--super-checkbox-border-color);
      border-radius: 4px 6px 3px 5px / 5px 3px 6px 4px;
      box-shadow: 1.5px 2px 0 -1px var(--super-checkbox-shadow-color);
      transform: rotate(var(--super-checkbox-rotation));
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .box::before {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 2px 4px 2px 3px;
      opacity: 0.08;
      pointer-events: none;
    }

    .mark {
      position: absolute;
      top: 42%;
      left: 50%;
      box-sizing: border-box;
      inline-size: 34%;
      block-size: 62%;
      border-right: 2.5px solid currentColor;
      border-bottom: 2.5px solid currentColor;
      opacity: 0;
      transform: translate(-50%, -58%) rotate(42deg) scale(0.55);
      transition: opacity 100ms ease, transform 120ms ease;
    }

    :host([checked]) .box,
    :host([indeterminate]) .box {
      background: var(--super-checkbox-checked-background);
      border-color: #174ea6;
      box-shadow: 2px 2.5px 0 -1px #174ea6;
    }

    :host([checked]) .mark {
      opacity: 1;
      transform: translate(-50%, -58%) rotate(42deg) scale(1);
    }

    :host([indeterminate]) .mark {
      top: 50%;
      inline-size: 58%;
      block-size: 0;
      border-right: 0;
      border-bottom-width: 2.5px;
      opacity: 1;
      transform: translate(-50%, -50%) rotate(-1deg);
    }

    :host(:not([validation="none"])) .box {
      border-color: var(--super-checkbox-validation-color);
    }

    .icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      color: var(--super-checkbox-checked-background);
      font-size: 1.25em;
    }

    .content {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .label {
      min-inline-size: 0;
      color: inherit;
    }

    .description {
      color: #64748b;
      font-size: 0.8em;
      line-height: 1.35;
    }

    slot {
      display: contents;
    }

    .helper {
      margin-top: 5px;
      padding-left: calc(var(--super-checkbox-size) + var(--super-checkbox-gap));
      color: var(--super-checkbox-validation-color);
      font-size: 0.8em;
      line-height: 1.35;
    }

    .native:focus-visible + .surface {
      outline: 3px solid var(--super-checkbox-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      .control:hover .box {
        border-color: var(--super-checkbox-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }

      :host([variant="card"]) .control:hover .surface {
        border-color: var(--super-checkbox-hover-color);
        box-shadow: 3px 4px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.42;
    }

    :host([disabled]) .box {
      filter: grayscale(0.35);
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([disabled]) .surface {
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([variant="card"]) .helper {
      padding-left: 16px;
    }

    @media (prefers-reduced-motion: reduce) {
      .box,
      .mark,
      .surface {
        transition: none;
      }
    }
  `});const Qa="super-checkbox",Za=o=>oe(Qa,at,o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=(o,e)=>{var s;const t=o._$AN;if(t===void 0)return!1;for(const r of t)(s=r._$AO)==null||s.call(r,e,!1),be(r,e);return!0},Pe=o=>{let e,t;do{if((e=o._$AM)===void 0)break;t=e._$AN,t.delete(o),o=e}while((t==null?void 0:t.size)===0)},ts=o=>{for(let e;e=o._$AM;o=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(o))break;t.add(o),sl(e)}};function el(o){this._$AN!==void 0?(Pe(this),this._$AM=o,ts(this)):this._$AM=o}function tl(o,e=!1,t=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let i=t;i<s.length;i++)be(s[i],!1),Pe(s[i]);else s!=null&&(be(s,!1),Pe(s));else be(this,o)}const sl=o=>{o.type==X.CHILD&&(o._$AP??(o._$AP=tl),o._$AQ??(o._$AQ=el))};class rl extends Zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),ts(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,r;e!==this.isConnected&&(this.isConnected=e,e?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),t&&(be(this,e),Pe(this))}setValue(e){if(es(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Re=new WeakMap,ol=Qt(class extends rl{render(o){return _}update(o,[e]){var s;const t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(s=o.options)==null?void 0:s.host,this.rt(this.ct=o.element)),_}rt(o){if(this.G!==void 0)if(this.isConnected||(o=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Re.get(e);t===void 0&&(t=new WeakMap,Re.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,o),o!==void 0&&this.G.call(this.ht,o)}else this.G.value=o}get lt(){var o,e;return typeof this.G=="function"?(o=Re.get(this.ht??globalThis))==null?void 0:o.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=Symbol.for(""),il=o=>{if((o==null?void 0:o.r)===ss)return o==null?void 0:o._$litStatic$},nl=o=>({_$litStatic$:o,r:ss}),St=new Map,al=o=>(e,...t)=>{const s=t.length;let r,i;const n=[],a=[];let l,b=0,v=!1;for(;b<s;){for(l=e[b];b<s&&(i=t[b],(r=il(i))!==void 0);)l+=r+e[++b],v=!0;b!==s&&a.push(i),n.push(l),b++}if(b===s&&n.push(e[s]),v){const m=n.join("$$lit$$");(e=St.get(m))===void 0&&(n.raw=n,St.set(m,e=n)),t=a}return o(e,...t)},ll=al($),cl={fields:[]},G=o=>({...o}),At=(o,e)=>Object.is(o,e),ul=/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]*$/;class lt extends D{constructor(){super(),Object.defineProperty(this,"currentValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"resetValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"hasAssignedValue",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"changeHandlers",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"assignedPropertyNames",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),this.schema=cl,this.submitting=!1,this.formErrors={}}get value(){return this.currentValue}set value(e){const t=this.currentValue;this.currentValue=this.normalizeValues(e),this.resetValue=G(this.currentValue),this.hasAssignedValue=!0,this.requestUpdate("value",t)}get errors(){return{...this.formErrors}}get fields(){var e;return((e=this.schema)==null?void 0:e.fields)??[]}normalizeValues(e){const t=e&&typeof e=="object"?e:{},s=new Set(this.fields.map(i=>i.field)),r={};return this.fields.forEach(i=>{Object.prototype.hasOwnProperty.call(t,i.field)?r[i.field]=t[i.field]:i.defaultValue!==void 0&&(r[i.field]=i.defaultValue)}),s.size?r:{...t}}setInternalValue(e){const t=this.currentValue;this.currentValue=e,this.requestUpdate("value",t)}dependenciesFor(e,t=this.currentValue){return Object.fromEntries((e.deps??[]).map(s=>[s,t[s]]))}isVisible(e,t=this.currentValue){return typeof e.visible=="boolean"?e.visible:typeof e.visible!="function"?!0:e.visible(this.dependenciesFor(e,t))}propsFor(e){return typeof e.props=="function"?e.props(this.dependenciesFor(e)):e.props??{}}getChangeHandler(e){const t=this.changeHandlers.get(e);if(t)return t;const s=(r,i)=>{this.updateFieldValue(e,r,i)};return this.changeHandlers.set(e,s),s}applyDependencyEffects(e,t,s){const r=[e],i=new Set;for(;r.length>0;){const n=r.shift();n&&(i.has(n)||(i.add(n),this.fields.forEach(a=>{if(!(a.deps??[]).includes(n))return;let l;if(a.clearWhenDepsChange?l="dependency":a.clearWhenHidden&&!this.isVisible(a,t)&&(l="visibility"),!l||!Object.prototype.hasOwnProperty.call(t,a.field)||t[a.field]===void 0)return;const b=t[a.field];t[a.field]=void 0,s.push({field:a.field,previousValue:b,value:void 0,reason:l}),r.push(a.field)})))}}updateFieldValue(e,t,s){const r=this.currentValue,i=r[e];if(At(i,t))return;const n=G(r);n[e]=t;const a=[{field:e,previousValue:i,value:t,reason:"user"}];this.applyDependencyEffects(e,n,a),this.setInternalValue(n),(this.schema.validateOn==="change"||a.some(l=>!!this.formErrors[l.field]))&&this.validate(),this.dispatchEvent(new CustomEvent("super-form-change",{detail:{field:e,value:t,changes:a,values:G(n),originalEvent:s},bubbles:!0,composed:!0}))}assignElementProps(e,t){const s=new Set(Object.keys(t));(this.assignedPropertyNames.get(e)??new Set).forEach(i=>{s.has(i)||Reflect.set(e,i,void 0)}),Object.entries(t).forEach(([i,n])=>{Reflect.set(e,i,n)}),this.assignedPropertyNames.set(e,s)}renderStringComponent(e,t){if(!ul.test(e))return $`<span class="config-error" role="alert">
        “${e}”不是合法的自定义元素标签
      </span>`;const s=nl(e);return ll`<${s}
      ${ol(r=>{r instanceof HTMLElement&&this.assignElementProps(r,t)})}
    ></${s}>`}renderFieldComponent(e){const t={...this.propsFor(e),value:this.currentValue[e.field],onchange:this.getChangeHandler(e.field)};return typeof e.component=="string"?this.renderStringComponent(e.component,t):e.component(t)}renderField(e,t){if(this.fields.findIndex(i=>i.field===e.field)!==t)return $`<div class="config-error" role="alert">
        字段名“${e.field}”重复，请为每个字段配置唯一名称
      </div>`;if(!this.isVisible(e))return _;const s=this.formErrors[e.field],r=Math.min(e.span??1,this.schema.columns??1);return $`
      <div
        class="item"
        part="item"
        data-field=${e.field}
        style=${`--super-form-field-span: ${r}`}
      >
        <div class="label-row" part="label-row">
          ${e.label?$`<span class="label" part="label">${e.label}</span>`:_}
          ${e.required?$`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:_}
        </div>
        <div class="control-stack">
          <div class="control" part="control">
            ${this.renderFieldComponent(e)}
          </div>
          ${e.extra?$`<span class="extra" part="extra">${e.extra}</span>`:_}
          ${s?$`<span class="error" part="error" role="alert">${s}</span>`:_}
        </div>
      </div>
    `}formElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("form"))??null}validate(){const e={};return this.fields.forEach(t=>{if(!this.isVisible(t)||!t.rule)return;let s=!1;try{s=t.rule(this.currentValue[t.field])}catch{s=!1}s||(e[t.field]=t.errorMessage||"校验未通过")}),this.formErrors=e,Object.keys(e).length===0}reset(e){this.setInternalValue(G(this.resetValue)),this.formErrors={},this.dispatchEvent(new CustomEvent("super-form-reset",{detail:{values:G(this.resetValue),originalEvent:e},bubbles:!0,composed:!0}))}requestSubmit(){const e=this.formElement();if(e){e.requestSubmit();return}this.handleSubmit(new SubmitEvent("submit",{cancelable:!0}))}focusField(e){var r;const t=Array.from(((r=this.renderRoot)==null?void 0:r.querySelectorAll("[data-field]"))??[]).find(i=>i.dataset.field===e),s=t==null?void 0:t.querySelector("[part='control'] > *, input, textarea, select, button, [tabindex]");s==null||s.focus()}handleSubmit(e){if(e.preventDefault(),!this.submitting){if(!this.validate()){this.dispatchEvent(new CustomEvent("super-form-invalid",{detail:{values:G(this.currentValue),errors:{...this.formErrors},originalEvent:e},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("super-form-submit",{detail:{values:G(this.currentValue),originalEvent:e},bubbles:!0,composed:!0}))}}handleReset(e){e.preventDefault(),this.reset(e)}willUpdate(e){if(e.has("schema")){const t=this.schema.layout??"vertical",s=this.schema.columns??1,r=this.schema.actionsAlign==="start"?"flex-start":this.schema.actionsAlign==="center"?"center":"flex-end";this.setAttribute("layout",t),this.style.setProperty("--super-form-columns",String(s)),this.style.setProperty("--super-form-actions-align",r);const i=this.normalizeValues(this.currentValue);this.resetValue=this.hasAssignedValue?this.normalizeValues(this.resetValue):G(i),(Object.keys(i).length!==Object.keys(this.currentValue).length||Object.keys(i).some(l=>!At(i[l],this.currentValue[l])))&&this.setInternalValue(i);const n=new Set(this.fields.map(l=>l.field)),a=Object.fromEntries(Object.entries(this.formErrors).filter(([l])=>n.has(l)));Object.keys(a).length!==Object.keys(this.formErrors).length&&(this.formErrors=a),this.changeHandlers.clear()}}render(){const e=this.schema.showReset??!1,t=this.submitting?this.schema.submittingText??"提交中...":this.schema.submitText??"提交";return $`
      <form
        class="form"
        part="form"
        novalidate
        aria-busy=${this.submitting?"true":"false"}
        @submit=${this.handleSubmit}
        @reset=${this.handleReset}
      >
        <div class="header" part="header"><slot name="header"></slot></div>
        <div class="fields" part="fields">
          ${this.fields.map((s,r)=>this.renderField(s,r))}
        </div>
        <div class="actions" part="actions">
          <slot name="actions">
            ${e?$`<button
                  class="reset"
                  part="reset-button"
                  type="reset"
                  ?disabled=${this.submitting}
                >${this.schema.resetText??"重置"}</button>`:_}
            <button
              class="submit"
              part="submit-button"
              type="submit"
              ?disabled=${this.submitting}
            >
              ${this.submitting?$`<span class="submitting-mark" aria-hidden="true"></span>`:_}
              ${t}
            </button>
          </slot>
        </div>
        <div class="footer" part="footer"><slot name="footer"></slot></div>
      </form>
    `}}Object.defineProperty(lt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{schema:{attribute:!1},value:{attribute:!1,noAccessor:!0},submitting:{type:Boolean,reflect:!0},formErrors:{state:!0}}});Object.defineProperty(lt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-form-columns: 1;
      --super-form-gap: 18px;
      --super-form-row-gap: 20px;
      --super-form-label-width: 112px;
      --super-form-paper: #fffdf7;
      --super-form-paper-accent: #fffaf0;
      --super-form-color: #292524;
      --super-form-muted-color: #687386;
      --super-form-border-color: #46556b;
      --super-form-line-color: #c8ced8;
      --super-form-primary-color: #3978e9;
      --super-form-primary-hover-color: #5d91ef;
      --super-form-primary-active-color: #2866d7;
      --super-form-primary-shadow-color: #174ea6;
      --super-form-danger-color: #df343d;
      --super-form-focus-color: #56c6b7;
      --super-form-radius: 16px 12px 18px 11px / 13px 17px 12px 18px;
      --super-form-font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui,
        sans-serif;

      display: block;
      box-sizing: border-box;
      max-inline-size: 100%;
      color: var(--super-form-color);
      font-family: var(--super-form-font-family);
    }

    :host([hidden]) {
      display: none;
    }

    .form {
      position: relative;
      box-sizing: border-box;
      padding: 22px;
      overflow: hidden;
      background:
        linear-gradient(90deg, rgb(57 120 233 / 3%) 1px, transparent 1px) 0 0 / 28px 28px,
        linear-gradient(rgb(57 120 233 / 3%) 1px, transparent 1px) 0 0 / 28px 28px,
        linear-gradient(
          135deg,
          var(--super-form-paper),
          var(--super-form-paper-accent)
        );
      border: 2px solid var(--super-form-border-color);
      border-radius: var(--super-form-radius);
      box-shadow: 3px 4px 0 -1px #b7c0ce;
    }

    .form::before {
      position: absolute;
      inset: 8px 10px auto;
      block-size: 1px;
      background: repeating-linear-gradient(
        90deg,
        var(--super-form-line-color) 0 7px,
        transparent 7px 13px
      );
      content: "";
      opacity: 0.75;
    }

    .form[aria-busy="true"] {
      cursor: progress;
    }

    .header:empty,
    .footer:empty {
      display: none;
    }

    .header {
      margin-block-end: 18px;
    }

    .footer {
      margin-block-start: 18px;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(var(--super-form-columns), minmax(0, 1fr));
      gap: var(--super-form-row-gap) var(--super-form-gap);
    }

    .item {
      display: flex;
      grid-column: span min(
        var(--super-form-field-span, 1),
        var(--super-form-columns)
      );
      flex-direction: column;
      min-inline-size: 0;
    }

    .label-row {
      display: flex;
      align-items: baseline;
      min-block-size: 24px;
      margin-block-end: 6px;
      gap: 5px;
    }

    .label {
      color: var(--super-form-color);
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: 1.4;
    }

    .required-mark {
      color: var(--super-form-danger-color);
      font-family: system-ui, sans-serif;
      font-size: 18px;
      font-weight: 800;
      line-height: 1;
      transform: rotate(8deg);
    }

    .control-stack {
      min-inline-size: 0;
    }

    .control {
      min-inline-size: 0;
    }

    .control > * {
      max-inline-size: 100%;
    }

    .extra,
    .error {
      display: flex;
      align-items: flex-start;
      margin-block-start: 6px;
      gap: 5px;
      font-size: 12px;
      line-height: 1.45;
    }

    .extra {
      color: var(--super-form-muted-color);
    }

    .extra::before {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 14px;
      block-size: 14px;
      margin-block-start: 1px;
      border: 1.5px solid currentcolor;
      border-radius: 50%;
      content: "i";
      font-family: serif;
      font-size: 10px;
      font-weight: 700;
    }

    .error {
      color: var(--super-form-danger-color);
      font-weight: 700;
    }

    .error::before {
      flex: none;
      content: "×";
      font-family: system-ui, sans-serif;
      font-size: 14px;
      font-weight: 900;
      line-height: 1.1;
    }

    :host([layout="horizontal"]) .item {
      display: grid;
      grid-template-columns: minmax(72px, var(--super-form-label-width)) minmax(0, 1fr);
      align-items: start;
      column-gap: 12px;
    }

    :host([layout="horizontal"]) .label-row {
      justify-content: flex-end;
      margin-block: 8px 0;
      text-align: end;
    }

    :host([layout="inline"]) .fields {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    :host([layout="inline"]) .item {
      display: grid;
      flex: 0 1 auto;
      grid-template-columns: auto minmax(120px, auto);
      align-items: start;
      column-gap: 8px;
    }

    :host([layout="inline"]) .label-row {
      margin-block: 8px 0;
    }

    .actions {
      display: flex;
      justify-content: var(--super-form-actions-align, flex-end);
      margin-block-start: 24px;
      padding-block-start: 17px;
      gap: 12px;
      border-top: 1.5px dashed var(--super-form-line-color);
    }

    .actions button {
      box-sizing: border-box;
      min-inline-size: 84px;
      min-block-size: 38px;
      padding: 8px 17px;
      color: var(--super-form-color);
      font: 700 15px/1 var(--super-form-font-family);
      background: #fffef9;
      border: 2px solid var(--super-form-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 2px 3px 0 -1px #a8b3bf;
      cursor: pointer;
      transform: rotate(-0.25deg);
      transition:
        background-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .actions button:hover:not(:disabled) {
      background: #f4f8ff;
      box-shadow: 3px 4px 0 -1px #a9bad3;
      transform: translate(-0.5px, -0.5px) rotate(0.15deg);
    }

    .actions button:focus-visible {
      outline: 3px solid var(--super-form-focus-color);
      outline-offset: 3px;
    }

    .actions button:active:not(:disabled) {
      box-shadow: 1px 1px 0 -1px #a8b3bf;
      transform: translate(1px, 1px) rotate(0deg);
    }

    .actions .submit {
      color: #fff;
      background: var(--super-form-primary-color);
      border-color: var(--super-form-primary-shadow-color);
      box-shadow: 2px 3px 0 -1px var(--super-form-primary-shadow-color);
    }

    .actions .submit:hover:not(:disabled) {
      background: var(--super-form-primary-hover-color);
      box-shadow: 3px 4px 0 -1px var(--super-form-primary-shadow-color);
    }

    .actions .submit:active:not(:disabled) {
      background: var(--super-form-primary-active-color);
    }

    .actions button:disabled {
      cursor: not-allowed;
      filter: grayscale(0.35);
      opacity: 0.5;
      box-shadow: none;
      transform: none;
    }

    .submitting-mark {
      display: inline-block;
      inline-size: 12px;
      block-size: 12px;
      margin-inline-end: 7px;
      vertical-align: -1px;
      border: 2px dotted currentcolor;
      border-radius: 50%;
      animation: super-form-spin 850ms linear infinite;
    }

    .config-error {
      display: block;
      padding: 9px 11px;
      color: var(--super-form-danger-color);
      background: #fff1f1;
      border: 1.5px dashed currentcolor;
      border-radius: 8px;
      font-size: 13px;
    }

    @keyframes super-form-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @media (max-width: 720px) {
      .form {
        padding: 18px 15px;
      }

      .fields {
        grid-template-columns: minmax(0, 1fr);
      }

      .item {
        grid-column: 1 / -1;
      }

      :host([layout="horizontal"]) .item,
      :host([layout="inline"]) .item {
        display: flex;
        flex-direction: column;
      }

      :host([layout="horizontal"]) .label-row,
      :host([layout="inline"]) .label-row {
        justify-content: flex-start;
        margin-block: 0 6px;
        text-align: start;
      }

      .actions {
        justify-content: stretch;
      }

      .actions button {
        flex: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .actions button {
        transition: none;
      }

      .submitting-mark {
        animation: none;
      }
    }

    :host-context(html.dark) {
      --super-form-paper: #242321;
      --super-form-paper-accent: #2c2925;
      --super-form-color: #f5f1e8;
      --super-form-muted-color: #b7c0ce;
      --super-form-border-color: #aab5c6;
      --super-form-line-color: #5d6570;
    }

    :host-context(html.dark) .actions button {
      color: var(--super-form-color);
      background: #302e2a;
    }

    :host-context(html.dark) .actions .submit {
      color: #fff;
      background: var(--super-form-primary-color);
    }
  `});const dl="super-form",pl=o=>oe(dl,lt,o);class ct extends D{constructor(){super(),this.value="",this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-input",e)}handleChange(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-change",e)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value;e.value="",this.value="",e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly||(e>0?t.stepUp():t.stepDown(),this.value=t.value,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),t.focus())}updateSlotPresence(e,t){const r=e.currentTarget.assignedNodes({flatten:!0}).some(i=>{var n;return i.nodeType!==Node.TEXT_NODE||!!((n=i.textContent)!=null&&n.trim())});t==="prefix"?this.hasPrefix=r:t==="suffix"?this.hasSuffix=r:this.hasAction=r}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??_}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return $`
        <textarea
          class="field"
          part="input"
          .value=${ue(this.value)}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${y(this.maxLength)}
          minlength=${y(this.minLength)}
          inputmode=${y(this.inputMode||void 0)}
          autocomplete=${y(this.autocomplete||void 0)}
          aria-label=${y(this.accessibleLabel||void 0)}
          aria-describedby=${y(e)}
          aria-invalid=${y(t)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
      `;const s=this.type==="password"&&this.passwordVisible?"text":this.type;return $`
      <input
        class="field"
        part="input"
        .value=${ue(this.value)}
        type=${s}
        placeholder=${this.placeholder}
        maxlength=${y(this.maxLength)}
        minlength=${y(this.minLength)}
        min=${y(this.min||void 0)}
        max=${y(this.max||void 0)}
        step=${y(this.step||void 0)}
        inputmode=${y(this.inputMode||void 0)}
        autocomplete=${y(this.autocomplete||void 0)}
        aria-label=${y(this.accessibleLabel||void 0)}
        aria-describedby=${y(e)}
        aria-invalid=${y(t)}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        @input=${this.handleInput}
        @change=${this.handleChange}
      />
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,s=this.type==="password"&&this.revealable,r=this.validationSymbol(),i=!!this.helperText||this.showCount&&this.maxLength!==void 0;return $`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${n=>this.updateSlotPresence(n,"prefix")}
          ></slot>
        </span>
        ${this.required?$`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:_}
        ${this.type==="number"&&!this.multiline?$`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:_}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?$`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:_}
        <span class="trailing">
          ${r===_?_:$`<span class="validation-icon" part="validation-icon" aria-hidden="true">${r}</span>`}
          ${t?$`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:_}
          ${s?$`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:_}
        </span>
        <span class="adornment suffix" part="suffix" ?hidden=${!this.hasSuffix}>
          <slot
            name="suffix"
            @slotchange=${n=>this.updateSlotPresence(n,"suffix")}
          ></slot>
        </span>
        <span class="action" part="action" ?hidden=${!this.hasAction}>
          <slot
            name="action"
            @slotchange=${n=>this.updateSlotPresence(n,"action")}
          ></slot>
        </span>
      </div>
      ${i?$`
            <div class="meta" part="meta">
              ${this.helperText?$`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${y(this.validation==="error"?"alert":void 0)}
                    aria-live=${y(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:_}
              ${this.showCount&&this.maxLength!==void 0?$`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:_}
            </div>
          `:_}
    `}}Object.defineProperty(ct,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(ct,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-input-width: 240px;
      --super-input-height: 38px;
      --super-input-min-height: 86px;
      --super-input-padding-inline: 12px;
      --super-input-gap: 8px;
      --super-input-font-size: 15px;
      --super-input-background: #fffef9;
      --super-input-color: #292524;
      --super-input-placeholder-color: #8a94a3;
      --super-input-border-color: #34445f;
      --super-input-hover-color: #4cae72;
      --super-input-focus-color: #356df3;
      --super-input-shadow-color: #a8b3bf;
      --super-input-validation-color: var(--super-input-border-color);
      --super-input-rotation: -0.12deg;

      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-input-width);
      max-inline-size: 100%;
      color: var(--super-input-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-input-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-input-height: 46px;
      --super-input-min-height: 108px;
      --super-input-padding-inline: 14px;
      --super-input-gap: 9px;
      --super-input-font-size: 17px;
    }

    :host([size="small"]) {
      --super-input-height: 31px;
      --super-input-min-height: 70px;
      --super-input-padding-inline: 9px;
      --super-input-gap: 6px;
      --super-input-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-input-validation-color: #269453;
      --super-input-border-color: #269453;
      --super-input-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-input-validation-color: #e58a08;
      --super-input-border-color: #e58a08;
      --super-input-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-input-validation-color: #ef3f42;
      --super-input-border-color: #ef3f42;
      --super-input-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-input-validation-color: #64748b;
      --super-input-border-color: #64748b;
      --super-input-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: stretch;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-input-height);
      overflow: hidden;
      color: var(--super-input-color);
      background: var(--super-input-background);
      border: 1.8px solid var(--super-input-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-input-shadow-color);
      transform: rotate(var(--super-input-rotation));
      transform-origin: center;
      transition:
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .control::after {
      position: absolute;
      inset: 2px 3px 2px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 5px 8px 5px 7px / 7px 5px 8px 6px;
      opacity: 0.06;
      pointer-events: none;
      transform: rotate(0.18deg);
    }

    :host([multiline]) .control {
      min-block-size: var(--super-input-min-height);
      overflow: visible;
    }

    .field {
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      inline-size: 100%;
      min-block-size: calc(var(--super-input-height) - 4px);
      margin: 0;
      padding: 0 var(--super-input-padding-inline);
      color: inherit;
      font: inherit;
      line-height: 1.35;
      background: transparent;
      border: 0;
      border-radius: inherit;
      outline: 0;
      appearance: none;
    }

    textarea.field {
      min-block-size: calc(var(--super-input-min-height) - 4px);
      padding-block: 10px;
      resize: vertical;
    }

    .field::placeholder {
      color: var(--super-input-placeholder-color);
      opacity: 1;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      margin: 0;
      appearance: none;
    }

    .adornment,
    .trailing,
    .action,
    .step-button {
      position: relative;
      z-index: 1;
      display: inline-flex;
      flex: none;
      align-items: center;
      justify-content: center;
      color: inherit;
    }

    .adornment {
      gap: var(--super-input-gap);
      min-inline-size: calc(var(--super-input-height) - 3px);
      padding-inline: calc(var(--super-input-padding-inline) - 3px);
      background: rgb(241 245 249 / 72%);
    }

    .adornment.prefix {
      border-right: 1.5px solid #a8b3bf;
    }

    .adornment.suffix {
      border-left: 1.5px solid #a8b3bf;
    }

    .adornment[hidden],
    .action[hidden] {
      display: none;
    }

    .required-mark {
      align-self: center;
      flex: none;
      margin-left: var(--super-input-padding-inline);
      color: #e33b34;
      font-weight: 800;
    }

    .required-mark + .field {
      padding-left: 5px;
    }

    .trailing {
      gap: 2px;
      padding-right: 6px;
    }

    .icon-button,
    .step-button {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .icon-button {
      inline-size: 27px;
      block-size: 27px;
      border-radius: 50%;
    }

    .icon-button:hover {
      color: #174ea6;
      background: #e8f0ff;
    }

    .icon-button:focus-visible,
    .step-button:focus-visible {
      outline: 2px solid var(--super-input-focus-color);
      outline-offset: -3px;
    }

    .step-button {
      inline-size: calc(var(--super-input-height) - 2px);
      min-inline-size: calc(var(--super-input-height) - 2px);
      font-size: 1.2em;
      font-weight: 700;
    }

    .step-button.decrement {
      border-right: 1.5px solid #a8b3bf;
    }

    .step-button.increment {
      border-left: 1.5px solid #a8b3bf;
    }

    .step-button:hover {
      color: #174ea6;
      background: #edf4ff;
    }

    .validation-icon {
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      inline-size: 19px;
      block-size: 19px;
      color: var(--super-input-validation-color);
      font-size: 12px;
      font-weight: 900;
      line-height: 1;
      border: 1.7px solid currentColor;
      border-radius: 50%;
    }

    .action {
      min-block-size: calc(var(--super-input-height) - 3px);
      border-left: 1.5px solid #536170;
    }

    ::slotted([slot="prefix"]),
    ::slotted([slot="suffix"]) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-inline-size: 1em;
      line-height: 1;
      white-space: nowrap;
    }

    ::slotted(svg) {
      max-inline-size: 1.2em;
      max-block-size: 1.2em;
    }

    ::slotted([slot="action"]) {
      align-self: stretch;
    }

    .meta {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      min-inline-size: 0;
      padding: 6px 4px 0;
      color: var(--super-input-validation-color);
      font-size: 0.78em;
      line-height: 1.35;
    }

    .helper {
      min-inline-size: 0;
    }

    .count {
      flex: none;
      margin-left: auto;
      color: #596779;
      font-variant-numeric: tabular-nums;
    }

    @media (hover: hover) {
      :host([validation="none"]:not([disabled])) .control:hover {
        border-color: var(--super-input-hover-color);
        box-shadow: 3px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.08deg);
      }
    }

    .control:focus-within {
      border-color: var(--super-input-focus-color);
      box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px var(--super-input-focus-color),
        3px 3px 0 -1px #9db7fa;
      transform: rotate(0deg);
    }

    :host([disabled]) .control {
      color: #7f8a99;
      background: #eef1f5;
      border-color: #b7c0cc;
      box-shadow: 1px 1px 0 -1px #cbd5e1;
      cursor: not-allowed;
      opacity: 0.68;
      transform: rotate(0deg);
    }

    :host([disabled]) .field,
    :host([disabled]) button {
      cursor: not-allowed;
    }

    :host([readonly]) .control {
      background: #f5f7f9;
      border-color: #8290a3;
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .control {
        transition: none;
      }
    }
  `});const hl="super-input",fl=o=>oe(hl,ct,o);class ut extends D{constructor(){super(),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.checked=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(s=>!s.disabled);return(e.find(s=>s.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&(e.checked=!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){this.disabled||this.checked||(this.checked=!0,this.uncheckGroupPeers(),this.emitChange(e))}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(a=>!a.disabled);if(t.length<2)return;e.preventDefault();const s=Math.max(0,t.indexOf(this)),r=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,i=(s+r+t.length)%t.length,n=t[i];n.selectFromInteraction(e),n.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked;t||(this.checked=!0,this.uncheckGroupPeers());const s=new Event("change");super.click(),t||this.emitChange(s)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return $`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${ue(this.checked)}
            .tabIndex=${this.radioTabIndex}
            name=${this.name}
            value=${this.value}
            aria-label=${y(this.accessibleLabel||void 0)}
            aria-labelledby=${y(this.accessibleLabel?void 0:"super-radio-label")}
            aria-describedby=${y(e)}
            aria-invalid=${y(t)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
            @keydown=${this.handleKeyDown}
          />
          <span class="surface">
            <span class="circle" part="indicator" aria-hidden="true">
              <span class="dot" part="dot"></span>
            </span>
            <span class="icon" part="icon" aria-hidden="true">
              <slot name="icon"></slot>
            </span>
            <span class="content" part="content">
              <span id="super-radio-label" class="label" part="label">
                <slot></slot>
              </span>
              <span
                id="super-radio-description"
                class="description"
                part="description"
              ><slot name="description"></slot></span>
            </span>
          </span>
        </label>
        ${this.helperText?$`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${y(this.validation==="error"?"alert":void 0)}
              aria-live=${y(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:_}
      </span>
    `}}Object.defineProperty(ut,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ut,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-radio-size: 22px;
      --super-radio-dot-size: 10px;
      --super-radio-gap: 10px;
      --super-radio-font-size: 15px;
      --super-radio-color: #292524;
      --super-radio-border-color: #34445f;
      --super-radio-background: #fffef9;
      --super-radio-checked-color: #3978e9;
      --super-radio-hover-color: #3fa66a;
      --super-radio-focus-color: #356df3;
      --super-radio-shadow-color: #9fb7dc;
      --super-radio-validation-color: var(--super-radio-border-color);
      --super-radio-rotation: -0.4deg;
      --super-radio-option-background: #fffef9;
      --super-radio-option-checked-background: #dff3df;
      --super-radio-option-padding: 9px 15px;

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-radio-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-radio-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-radio-size: 27px;
      --super-radio-dot-size: 12px;
      --super-radio-gap: 12px;
      --super-radio-font-size: 17px;
    }

    :host([size="small"]) {
      --super-radio-size: 18px;
      --super-radio-dot-size: 8px;
      --super-radio-gap: 7px;
      --super-radio-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-radio-validation-color: #23804a;
    }

    :host([validation="warning"]) {
      --super-radio-validation-color: #a05f00;
    }

    :host([validation="error"]) {
      --super-radio-validation-color: #cf3038;
    }

    :host([validation="info"]) {
      --super-radio-validation-color: #64748b;
    }

    .wrapper {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .control {
      position: relative;
      display: inline-flex;
      min-inline-size: 0;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .native {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .surface {
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-radio-gap);
      border: 2px solid transparent;
      border-radius: 10px 13px 9px 12px / 12px 9px 13px 10px;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    :host([variant="button"]) .surface,
    :host([variant="card"]) .surface {
      box-sizing: border-box;
      padding: var(--super-radio-option-padding);
      background: var(--super-radio-option-background);
      border-color: var(--super-radio-border-color);
      box-shadow: 2px 3px 0 -1px var(--super-radio-shadow-color);
      transform: rotate(var(--super-radio-rotation));
    }

    :host([variant="button"]) .surface {
      min-block-size: 40px;
      border-radius: 999px 920px 980px 900px / 860px 990px 910px 970px;
    }

    :host([variant="button"]) .circle {
      display: none;
    }

    :host([variant="card"]) .surface {
      align-items: flex-start;
      min-inline-size: 156px;
      padding: 16px;
    }

    :host([variant="card"]) .wrapper,
    :host([variant="card"]) .control,
    :host([variant="card"]) .surface {
      inline-size: 100%;
    }

    :host([variant="button"][checked]) .surface,
    :host([variant="card"][checked]) .surface {
      background: var(--super-radio-option-checked-background);
      border-color: var(--super-radio-checked-color);
      box-shadow: 2px 3px 0 -1px #86bd8b;
    }

    :host([variant="button"][checked]) .surface::after {
      box-sizing: border-box;
      inline-size: 6px;
      block-size: 11px;
      content: "";
      border-right: 2px solid #246b36;
      border-bottom: 2px solid #246b36;
      transform: translateY(-1px) rotate(42deg);
    }

    .circle {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-radio-size);
      block-size: var(--super-radio-size);
      background: var(--super-radio-background);
      border: 2px solid var(--super-radio-border-color);
      border-radius: 49% 53% 47% 51% / 52% 48% 54% 46%;
      box-shadow: 1.5px 2px 0 -1px var(--super-radio-shadow-color);
      transform: rotate(var(--super-radio-rotation));
      transition:
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .dot {
      inline-size: var(--super-radio-dot-size);
      block-size: var(--super-radio-dot-size);
      background: var(--super-radio-checked-color);
      border-radius: 46% 54% 49% 51% / 54% 47% 53% 46%;
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 42%);
      opacity: 0;
      transform: rotate(8deg) scale(0.35);
      transition: opacity 100ms ease, transform 120ms ease;
    }

    .circle::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 50%;
      opacity: 0.06;
      pointer-events: none;
    }

    :host([checked]) .circle {
      border-color: var(--super-radio-checked-color);
      box-shadow: 2px 2.5px 0 -1px #9fb7dc;
    }

    :host([checked]) .dot {
      opacity: 1;
      transform: rotate(-4deg) scale(1);
    }

    :host(:not([validation="none"])) .circle {
      border-color: var(--super-radio-validation-color);
    }

    :host(:not([validation="none"])):is([variant="button"], [variant="card"]) .surface {
      border-color: var(--super-radio-validation-color);
    }

    .icon {
      display: inline-flex;
      flex: none;
      align-items: center;
      color: var(--super-radio-checked-color);
      font-size: 1.45em;
      line-height: 1;
    }

    .content {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .label {
      min-inline-size: 0;
      color: inherit;
    }

    .description {
      color: #64748b;
      font-size: 0.8em;
      line-height: 1.35;
    }

    slot {
      display: contents;
    }

    .helper {
      margin-top: 5px;
      padding-left: calc(var(--super-radio-size) + var(--super-radio-gap));
      color: var(--super-radio-validation-color);
      font-size: 0.8em;
      line-height: 1.35;
    }

    .native:focus-visible + .surface {
      outline: 3px solid var(--super-radio-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      .control:hover .circle {
        border-color: var(--super-radio-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }

      :host([variant="button"]) .control:hover .surface,
      :host([variant="card"]) .control:hover .surface {
        border-color: var(--super-radio-hover-color);
        box-shadow: 3px 4px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.42;
    }

    :host([disabled]) .circle {
      filter: grayscale(0.35);
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host([disabled]) .surface {
      box-shadow: none;
      transform: rotate(0deg);
    }

    :host(:is([variant="button"], [variant="card"])) .helper {
      padding-left: 15px;
    }

    @media (prefers-reduced-motion: reduce) {
      .circle,
      .dot,
      .surface {
        transition: none;
      }
    }
  `});const bl="super-radio",ml=o=>oe(bl,ut,o),vl=(o,e)=>o.length===e.length&&o.every((t,s)=>t===e[s]);class dt extends D{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"valueIsControlled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"optionObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"optionIds",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"nextOptionId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"initializedOptions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"hasConnected",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"selectedAttributeStates",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"typeahead",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"typeaheadTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleOptionMutations",{enumerable:!0,configurable:!0,writable:!0,value:e=>{let t=!1,s=!1,r;const i=a=>a instanceof HTMLOptionElement?[a]:a instanceof HTMLElement?Array.from(a.querySelectorAll("option")):[],n=new Set(this.collectOptions().map(a=>a.source));e.forEach(a=>{if(a.type==="attributes"){if((a.target instanceof HTMLOptionElement||a.target instanceof HTMLOptGroupElement)&&(t=!0),a.attributeName==="selected"&&a.target instanceof HTMLOptionElement){const l=a.target.hasAttribute("selected");n.has(a.target)&&(this.selectedAttributeStates.set(a.target,l),s=!0,a.target.selected=l,l&&(r=a.target))}return}(a.type==="characterData"||a.type==="childList")&&(t=!0,a.addedNodes.forEach(l=>{i(l).forEach(b=>{if(!n.has(b))return;const v=b.hasAttribute("selected"),m=this.selectedAttributeStates.has(b),P=m&&this.selectedAttributeStates.get(b)!==v;(!m&&v||P)&&(b.selected=v,s=!0,v&&(r=b)),this.selectedAttributeStates.set(b,v)})}))}),t&&this.syncOptions(s,r,s)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),this.multiple=!1,this.searchable=!1,this.clearable=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.loading=!1,this.open=!1,this.name="",this.size="medium",this.variant="default",this.validation="none",this.placeholder="请选择",this.helperText="",this.accessibleLabel="",this.clearLabel="清空选择",this.removeLabel="移除",this.searchLabel="搜索选项",this.searchPlaceholder="搜索并选择",this.emptyText="暂无可选项",this.loadingText="加载中...",this.options=[],this.query="",this.activeIndex=-1,this.hasPrefix=!1}get value(){return this._value}set value(e){this.valueIsControlled=!0,this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get comboboxElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('[role="combobox"]'))??null}get selectedValues(){const e=Array.isArray(this.value)?this.value:this.value?[this.value]:[];return Array.from(new Set(e))}get selectedOptions(){return this.selectedValues.map(t=>this.options.find(s=>s.value===t)).filter(t=>t!==void 0)}get filteredOptions(){const e=this.searchable?this.query.trim().toLocaleLowerCase():"";return this.options.filter(t=>t.hidden?!1:e?t.label.toLocaleLowerCase().includes(e)||t.value.toLocaleLowerCase().includes(e):!0)}get hasValue(){return this.selectedValues.length>0}get hasMutableValue(){return this.selectedOptions.some(e=>!e.disabled)}get activeOption(){return this.filteredOptions[this.activeIndex]}get describedBy(){return this.helperText?"super-select-helper":void 0}get invalid(){return this.validation==="error"?"true":void 0}get comboboxLabel(){if(this.accessibleLabel)return this.accessibleLabel;const e=this.selectedOptions.map(t=>t.label);return e.length?e.join("、"):this.placeholder}getOptionId(e){const t=this.optionIds.get(e);if(t)return t;const s=`super-select-option-${this.nextOptionId++}`;return this.optionIds.set(e,s),s}collectOptions(){const e=[],t=(s,r,i)=>{e.push({source:s,id:this.getOptionId(s),value:s.value,label:(s.label||s.textContent||"").trim(),disabled:s.disabled||!!(r!=null&&r.disabled),hidden:s.hidden||!!(r!=null&&r.hidden),group:(r==null?void 0:r.label)||void 0,groupKey:i})};return Array.from(this.children).forEach((s,r)=>{if(s instanceof HTMLOptionElement){t(s);return}s instanceof HTMLOptGroupElement&&Array.from(s.children).forEach(i=>{i instanceof HTMLOptionElement&&t(i,s,`super-select-group-${r}`)})}),e}normalizeValue(e,t=this.options,s=!1){const r=new Set(t.map(a=>a.value)),i=a=>{const l=Array.from(new Set(a.filter(Boolean)));return t.length&&!s?l.filter(b=>r.has(b)):l};if(this.multiple){const a=Array.isArray(e)?e:e?[e]:[];return i(a)}const n=Array.isArray(e)?e[0]??"":e;return!n||t.length&&!s&&!r.has(n)?"":n}valueEqual(e,t){return Array.isArray(e)&&Array.isArray(t)?vl(e,t):e===t}syncSourceSelection(e=this.options,t=this.value){const s=new Set(Array.isArray(t)?t:t?[t]:[]);e.forEach(r=>{r.source.selected=s.has(r.value)})}syncOptions(e,t,s=!1){var l,b;const r=(l=this.activeOption)==null?void 0:l.id,i=this.collectOptions(),n=e&&(s||this.initializedOptions||!this.valueIsControlled);let a=this.value;if(n){const v=i.filter(m=>m.source.selected);if(this.multiple)a=v.map(m=>m.value);else{const m=t?i.find(P=>P.source===t):void 0;a=(m==null?void 0:m.value)??((b=v.at(-1))==null?void 0:b.value)??""}}a=this.normalizeValue(a,i,this.valueIsControlled&&!n),this.options=i,this.valueEqual(this.value,a)||this.setInternalValue(a),this.syncSourceSelection(i,a),i.length>0&&(this.initializedOptions=!0),r&&(this.activeIndex=this.filteredOptions.findIndex(v=>v.id===r&&!v.disabled)),this.realignActiveOption()}refreshOptions(){this.syncOptions(!0,void 0,!0),this.rememberSelectedAttributeStates()}realignActiveOption(){if(!this.open||this.loading){this.activeIndex=-1;return}const e=this.filteredOptions,t=e[this.activeIndex];if(t&&!t.disabled)return;const s=new Set(this.selectedValues),r=e.findIndex(i=>s.has(i.value)&&!i.disabled);this.activeIndex=r>=0?r:e.findIndex(i=>!i.disabled)}rememberSelectedAttributeStates(){this.collectOptions().forEach(({source:e})=>{this.selectedAttributeStates.set(e,e.hasAttribute("selected"))})}reconcileDisconnectedSelectedAttributes(){let e=!1,t;return this.collectOptions().forEach(({source:s})=>{const r=s.hasAttribute("selected"),i=this.selectedAttributeStates.has(s);(i&&this.selectedAttributeStates.get(s)!==r||!i&&r)&&(s.selected=r,e=!0,r&&(t=s)),this.selectedAttributeStates.set(s,r)}),{changed:e,preferredOption:t}}connectedCallback(){var s;super.connectedCallback();const e=this.hasConnected?this.reconcileDisconnectedSelectedAttributes():{changed:!1},t=(s=this.ownerDocument.defaultView)==null?void 0:s.MutationObserver;t&&(this.optionObserver=new t(this.handleOptionMutations),this.optionObserver.observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["value","label","disabled","selected","hidden"]})),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.syncOptions(e.changed||!this.initializedOptions,e.preferredOption,e.changed),this.rememberSelectedAttributeStates(),this.hasConnected=!0}disconnectedCallback(){var s,r;const e=((s=this.optionObserver)==null?void 0:s.takeRecords())??[];e.length>0&&this.handleOptionMutations(e),this.rememberSelectedAttributeStates(),(r=this.optionObserver)==null||r.disconnect(),this.optionObserver=null,this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0);const t=this.ownerDocument.defaultView;this.typeaheadTimer!==void 0&&(t==null||t.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=void 0),this.typeahead="",super.disconnectedCallback()}willUpdate(e){if(e.has("multiple")||e.has("value")){const t=this.normalizeValue(this.value,this.options,this.valueIsControlled);this.valueEqual(this.value,t)||this.setInternalValue(t),this.syncSourceSelection(this.options,t)}if(this.disabled&&this.open&&(this.open=!1),!this.open){this.query="",this.activeIndex=-1;return}(e.has("open")||e.has("loading")||e.has("searchable")||e.has("multiple")||e.has("value"))&&this.realignActiveOption()}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this.comboboxElement)==null?void 0:t.focus()}),e.has("activeIndex")&&this.open&&this.activeIndex>=0&&this.updateComplete.then(()=>{const t=this.renderRoot.querySelector('[role="option"][data-active]');typeof(t==null?void 0:t.scrollIntoView)=="function"&&t.scrollIntoView({block:"nearest"})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-select-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,values:[...this.selectedValues],name:this.name,selectedOptions:this.selectedOptions.map(t=>t.source),originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,s){e&&this.disabled||this.open===e||(e&&this.syncOptions(!1),this.open=e,e?this.realignActiveOption():(this.query="",this.activeIndex=-1),this.dispatchEvent(new CustomEvent("super-select-open-change",{detail:{open:e,reason:t,originalEvent:s},bubbles:!0,composed:!0})),e&&this.updateComplete.then(()=>{var r;return(r=this.comboboxElement)==null?void 0:r.focus()}))}selectOption(e,t){if(e.disabled||this.disabled||this.readOnly||this.loading)return;if(this.multiple){const r=this.selectedValues;this.setInternalValue(r.includes(e.value)?r.filter(i=>i!==e.value):[...r,e.value]),this.syncSourceSelection(this.options,this.value),this.emitChange(t);return}const s=this.value!==e.value;this.setInternalValue(e.value),this.syncSourceSelection(this.options,this.value),s&&this.emitChange(t),this.setOpen(!1,"selection",t)}clearSelection(e){var i;if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readOnly||this.loading||!this.hasValue)return;const t=Array.isArray(this.value)?[...this.value]:this.value,s=this.selectedOptions.filter(n=>n.disabled).map(n=>n.value),r=this.multiple?s:s[0]??"";this.valueEqual(this.value,r)||(this.setInternalValue(r),this.syncSourceSelection(this.options,this.value),this.dispatchEvent(new CustomEvent("super-select-clear",{detail:{previousValue:t,originalEvent:e},bubbles:!0,composed:!0})),this.emitChange(e),(i=this.comboboxElement)==null||i.focus())}removeValue(e,t){var r;t.preventDefault(),t.stopPropagation();const s=this.options.find(i=>i.value===e);!this.multiple||this.disabled||this.readOnly||this.loading||s!=null&&s.disabled||(this.setInternalValue(this.selectedValues.filter(i=>i!==e)),this.syncSourceSelection(this.options,this.value),this.emitChange(t),(r=this.comboboxElement)==null||r.focus())}moveActive(e){var r;const t=this.filteredOptions;if(!t.length){this.activeIndex=-1;return}let s=this.activeIndex;for(let i=0;i<t.length;i+=1)if(s=(s+e+t.length)%t.length,!((r=t[s])!=null&&r.disabled)){this.activeIndex=s;return}this.activeIndex=-1}moveToBoundary(e){const t=this.filteredOptions,s=e==="start"?t.map((r,i)=>i):t.map((r,i)=>i).reverse();this.activeIndex=s.find(r=>{var i;return!((i=t[r])!=null&&i.disabled)})??-1}handleTypeahead(e,t){const s=this.ownerDocument.defaultView;this.typeahead+=e.toLocaleLowerCase(),this.typeaheadTimer!==void 0&&(s==null||s.clearTimeout(this.typeaheadTimer)),this.typeaheadTimer=s==null?void 0:s.setTimeout(()=>{this.typeahead="",this.typeaheadTimer=void 0},650),this.open||this.setOpen(!0,"keyboard",t);const r=this.filteredOptions,i=Math.max(this.activeIndex+1,0),a=[...r.slice(i),...r.slice(0,i)].find(l=>!l.disabled&&l.label.toLocaleLowerCase().startsWith(this.typeahead));a&&(this.activeIndex=r.indexOf(a))}handleKeyDown(e){var r;const t=e.composedPath()[0];if(t instanceof HTMLElement&&(t.classList.contains("tag-remove")||t.classList.contains("clear-button"))||this.disabled)return;if(!this.searchable&&e.key.length===1&&e.key!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),this.handleTypeahead(e.key,e);return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const i=e.key==="ArrowDown"?1:-1;this.open?this.moveActive(i):(this.setOpen(!0,"keyboard",e),this.realignActiveOption());return}const s=t instanceof HTMLInputElement&&t.classList.contains("search");if((e.key==="Home"||e.key==="End")&&!s){if(!this.open)return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"||e.key===" "&&!this.searchable){e.preventDefault(),this.open?this.activeOption&&this.selectOption(this.activeOption,e):this.setOpen(!0,"keyboard",e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"escape",e),(r=this.comboboxElement)==null||r.focus();return}e.key==="Tab"&&this.open&&this.setOpen(!1,"keyboard",e)}handleControlClick(e){if(this.disabled)return;const t=e.composedPath()[0];this.searchable&&this.open&&t instanceof HTMLInputElement&&t.classList.contains("search")||this.setOpen(!this.open,"trigger",e)}handleSearch(e){const t=e.currentTarget;this.query=t.value,this.open||this.setOpen(!0,"search",e),this.activeIndex=this.filteredOptions.findIndex(s=>!s.disabled),this.dispatchEvent(new CustomEvent("super-select-search",{detail:{query:this.query,originalEvent:e},bubbles:!0,composed:!0}))}handleSearchFocus(e){this.open||e.currentTarget.select()}handlePrefixSlotChange(e){const t=e.currentTarget;this.hasPrefix=t.assignedNodes({flatten:!0}).some(s=>{var r;return s.nodeType!==Node.TEXT_NODE||!!((r=s.textContent)!=null&&r.trim())})}click(){var s;if(this.disabled)return;const e=(s=this.renderRoot)==null?void 0:s.querySelector(".control");if(e){e.click();return}const t=new MouseEvent("click");super.click(),this.setOpen(!this.open,"trigger",t)}focus(e){const t=this.comboboxElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.comboboxElement;if(e){e.blur();return}super.blur()}validationSymbol(){switch(this.validation){case"success":return"✓";case"warning":return"!";case"error":return"×";case"info":return"i";default:return""}}renderTags(){return this.multiple?$`
      <span class="tags" part="tags">
        ${this.selectedOptions.map(e=>$`
          <span class="tag" part="tag">
            <span class="tag-label">${e.label}</span>
            ${this.readOnly||this.disabled||this.loading||e.disabled?_:$`<button
                  class="tag-remove"
                  part="tag-remove"
                  type="button"
                  aria-label=${`${this.removeLabel}：${e.label}`}
                  @click=${t=>this.removeValue(e.value,t)}
                  @keydown=${t=>t.stopPropagation()}
                >×</button>`}
          </span>
        `)}
      </span>
    `:_}renderDefaultTrigger(){if(this.multiple&&this.hasValue)return _;const e=this.selectedOptions[0];return e?$`<span part="value">${e.label}</span>`:$`<span class="placeholder" part="placeholder">${this.placeholder}</span>`}renderCombobox(){var s,r;const e=this.open&&!this.loading?(s=this.activeOption)==null?void 0:s.id:void 0,t={expanded:this.open?"true":"false",required:this.required?"true":void 0,readonly:this.readOnly?"true":void 0,busy:this.loading?"true":void 0};if(this.searchable){const i=(r=this.selectedOptions[0])==null?void 0:r.label,n=this.open?this.searchPlaceholder:this.multiple&&this.hasValue?"":this.placeholder;return $`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${ue(this.open?this.query:this.multiple?"":i??"")}
          placeholder=${n}
          aria-label=${this.accessibleLabel||this.searchLabel}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded=${t.expanded}
          aria-controls="super-select-listbox"
          aria-activedescendant=${y(e)}
          aria-required=${y(t.required)}
          aria-readonly=${y(t.readonly)}
          aria-invalid=${y(this.invalid)}
          aria-busy=${y(t.busy)}
          aria-describedby=${y(this.describedBy)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          @input=${this.handleSearch}
          @focus=${this.handleSearchFocus}
        />
      `}return $`
      <button
        class="trigger"
        part="trigger"
        type="button"
        role="combobox"
        aria-label=${this.comboboxLabel}
        aria-haspopup="listbox"
        aria-expanded=${t.expanded}
        aria-controls="super-select-listbox"
        aria-activedescendant=${y(e)}
        aria-required=${y(t.required)}
        aria-readonly=${y(t.readonly)}
        aria-invalid=${y(this.invalid)}
        aria-busy=${y(t.busy)}
        aria-describedby=${y(this.describedBy)}
        ?disabled=${this.disabled}
      >
        <slot name="trigger">${this.renderDefaultTrigger()}</slot>
      </button>
    `}renderOption(e,t){const s=this.selectedValues.includes(e.value),r=this.readOnly||this.loading;return $`
      <div
        id=${e.id}
        class="option"
        part="option"
        role="option"
        aria-selected=${s?"true":"false"}
        aria-disabled=${e.disabled||r?"true":"false"}
        ?data-active=${t===this.activeIndex}
        @pointerdown=${i=>i.preventDefault()}
        @click=${i=>this.selectOption(e,i)}
      >
        <span class="option-check" part="option-check" aria-hidden="true">
          ${s?"✓":""}
        </span>
        <span class="option-label">${e.label}</span>
      </div>
    `}renderOptionGroups(){const e=this.filteredOptions,t=[];return e.forEach((s,r)=>{const i=s.groupKey??"super-select-ungrouped";let n=t.at(-1);(!n||n.key!==i)&&(n={key:i,label:s.group,options:[]},t.push(n)),n.options.push({option:s,index:r})}),t.map(s=>$`
      <div
        class="group"
        part="group"
        role=${s.label?"group":"presentation"}
        aria-label=${y(s.label)}
      >
        ${s.label?$`<div class="group-label" part="group-label">${s.label}</div>`:_}
        ${s.options.map(({option:r,index:i})=>this.renderOption(r,i))}
      </div>
    `)}renderPopup(){if(!this.open)return _;const e=this.filteredOptions;return $`
      <div class="popup" part="popup">
        <div
          id="super-select-listbox"
          class="listbox"
          part="listbox"
          role="listbox"
          aria-label=${this.accessibleLabel||this.placeholder}
          aria-multiselectable=${y(this.multiple?"true":void 0)}
          aria-readonly=${y(this.readOnly?"true":void 0)}
          aria-busy=${this.loading?"true":"false"}
        >
          ${!this.loading&&e.length?this.renderOptionGroups():_}
        </div>
        ${this.loading?$`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`:e.length?_:$`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`}
      </div>
    `}render(){const e=this.validationSymbol(),t=`control${this.hasValue?" has-value":""}`;return $`
      <div
        class=${t}
        part="control"
        @click=${this.handleControlClick}
        @keydown=${this.handleKeyDown}
      >
        <span
          class="prefix"
          part="prefix"
          aria-hidden="true"
          ?hidden=${!this.hasPrefix}
        >
          <slot name="prefix" @slotchange=${this.handlePrefixSlotChange}></slot>
        </span>
        <span class="selection" part="value">
          ${this.renderTags()}
          ${this.renderCombobox()}
        </span>
        ${this.clearable&&this.hasMutableValue&&!this.disabled&&!this.readOnly&&!this.loading?$`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${s=>s.stopPropagation()}
            >×</button>`:_}
        ${e?$`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${e}
            </span>`:_}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText?$`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${y(this.validation==="error"?"alert":void 0)}
            aria-live=${y(this.validation==="error"?void 0:"polite")}
          >${this.helperText}</span>`:_}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${()=>this.syncOptions(!1)}></slot>
      </span>
    `}}Object.defineProperty(dt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},multiple:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},removeLabel:{type:String,attribute:"remove-label"},searchLabel:{type:String,attribute:"search-label"},searchPlaceholder:{type:String,attribute:"search-placeholder"},emptyText:{type:String,attribute:"empty-text"},loadingText:{type:String,attribute:"loading-text"},options:{state:!0},query:{state:!0},activeIndex:{state:!0},hasPrefix:{state:!0}}});Object.defineProperty(dt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-select-width: 240px;
      --super-select-height: 38px;
      --super-select-padding-inline: 12px;
      --super-select-gap: 8px;
      --super-select-font-size: 15px;
      --super-select-background: #fffef9;
      --super-select-color: #292524;
      --super-select-placeholder-color: #64748b;
      --super-select-border-color: #34445f;
      --super-select-hover-color: #3f9b68;
      --super-select-focus-color: #356df3;
      --super-select-shadow-color: #a8b3bf;
      --super-select-validation-color: var(--super-select-border-color);
      --super-select-panel-background: #fffef9;
      --super-select-option-hover-background: #eef5ff;
      --super-select-option-selected-background: #dfeaff;
      --super-select-option-selected-color: #174ea6;
      --super-select-tag-background: #edf4ff;
      --super-select-tag-border-color: #9fb7dc;
      --super-select-panel-max-height: 260px;
      --super-select-z-index: 30;
      --super-select-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-select-width);
      max-inline-size: 100%;
      color: var(--super-select-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-select-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-select-z-index);
    }

    :host([size="large"]) {
      --super-select-height: 46px;
      --super-select-padding-inline: 14px;
      --super-select-gap: 9px;
      --super-select-font-size: 17px;
    }

    :host([size="small"]) {
      --super-select-height: 31px;
      --super-select-padding-inline: 9px;
      --super-select-gap: 6px;
      --super-select-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-select-validation-color: #23804a;
      --super-select-border-color: #23804a;
      --super-select-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-select-validation-color: #a05f00;
      --super-select-border-color: #a05f00;
      --super-select-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-select-validation-color: #cf3038;
      --super-select-border-color: #cf3038;
      --super-select-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-select-validation-color: #64748b;
      --super-select-border-color: #64748b;
      --super-select-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-select-height);
      padding-inline: var(--super-select-padding-inline);
      color: var(--super-select-color);
      background: var(--super-select-background);
      border: 1.8px solid var(--super-select-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-select-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-select-rotation));
      transform-origin: center;
      transition:
        background-color 140ms ease,
        border-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .control::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      z-index: -1;
      content: "";
      border: 1px solid currentColor;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      opacity: 0.08;
      pointer-events: none;
      transform: rotate(0.24deg);
    }

    :host([multiple]) .control {
      min-block-size: var(--super-select-height);
      padding-block: 4px;
    }

    :host([variant="pill"]) .control {
      border-radius: 999px 930px 980px 920px / 920px 990px 930px 970px;
    }

    :host([variant="pill"]) .control::after {
      border-radius: inherit;
    }

    :host([variant="filled"]) .control {
      background: #edf4ff;
      box-shadow: inset 0 -2px 0 #c4d5f5;
    }

    :host([variant="ghost"]) .control {
      background: transparent;
      border-style: dashed;
      box-shadow: none;
    }

    :host([open]) .control,
    .control:focus-within {
      border-color: var(--super-select-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-select-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-select-gap);
      color: #526277;
      line-height: 1;
    }

    .selection {
      display: flex;
      flex: 1 1 auto;
      flex-wrap: wrap;
      align-items: center;
      min-inline-size: 0;
      gap: 5px;
    }

    .trigger,
    .search {
      flex: 1 1 44px;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-select-height) - 10px);
      margin: 0;
      padding: 0;
      overflow: hidden;
      color: inherit;
      font: inherit;
      line-height: 1.2;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      outline: 0;
      cursor: inherit;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
    }

    .placeholder {
      color: var(--super-select-placeholder-color);
    }

    .search::placeholder {
      color: var(--super-select-placeholder-color);
      opacity: 1;
    }

    .control.has-value .search:not(:focus)::placeholder {
      color: var(--super-select-color);
    }

    .search-icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1.15em;
      margin-inline-end: 4px;
      color: #526277;
      font-size: 0.95em;
    }

    .tags {
      display: contents;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-block-size: 24px;
      padding: 1px 4px 1px 8px;
      overflow: hidden;
      color: #253c62;
      background: var(--super-select-tag-background);
      border: 1.4px solid var(--super-select-tag-border-color);
      border-radius: 6px 8px 5px 7px / 7px 5px 8px 6px;
      transform: rotate(-0.2deg);
    }

    .tag-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tag-remove,
    .clear-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .tag-remove {
      inline-size: 19px;
      block-size: 19px;
      margin-inline-start: 3px;
      font-size: 0.9em;
    }

    .clear-button {
      inline-size: 24px;
      block-size: 24px;
      color: #526277;
      font-size: 1.05em;
    }

    .tag-remove:hover,
    .clear-button:hover {
      color: #174ea6;
      background: rgb(53 109 243 / 12%);
    }

    .tag-remove:focus-visible,
    .clear-button:focus-visible {
      outline: 2px solid var(--super-select-focus-color);
      outline-offset: 1px;
    }

    .validation-icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 20px;
      block-size: 20px;
      margin-inline-start: 4px;
      color: var(--super-select-validation-color);
      border: 1.5px solid currentColor;
      border-radius: 50%;
      font-size: 0.76em;
      font-weight: 700;
      line-height: 1;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      pointer-events: none;
      transition: transform 140ms ease;
    }

    :host([open]) .indicator {
      transform: rotate(180deg);
    }

    .chevron {
      inline-size: 7px;
      block-size: 7px;
      border-right: 1.8px solid currentColor;
      border-bottom: 1.8px solid currentColor;
      transform: translateY(-2px) rotate(45deg);
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-select-validation-color);
      font-size: 0.82em;
      line-height: 1.35;
    }

    .popup {
      position: absolute;
      top: calc(100% + 7px);
      left: 0;
      z-index: 2;
      box-sizing: border-box;
      min-inline-size: 100%;
      max-inline-size: max(100%, 360px);
      padding: 6px;
      color: var(--super-select-color);
      background: var(--super-select-panel-background);
      border: 1.8px solid var(--super-select-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-select-shadow-color);
      transform: rotate(0.08deg);
      animation: super-select-pop 130ms ease-out;
    }

    .listbox {
      box-sizing: border-box;
      max-block-size: var(--super-select-panel-max-height);
      overflow: auto;
      outline: 0;
      overscroll-behavior: contain;
    }

    .group + .group {
      margin-block-start: 5px;
      padding-block-start: 5px;
      border-top: 1px dashed #cbd5e1;
    }

    .group-label {
      padding: 6px 9px 4px;
      color: #526277;
      font-size: 0.82em;
      font-weight: 700;
    }

    .option {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-block-size: 34px;
      padding: 6px 9px;
      gap: 8px;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .option[data-active] {
      background: var(--super-select-option-hover-background);
      outline: 2px solid rgb(53 109 243 / 22%);
      outline-offset: -2px;
    }

    .option[aria-selected="true"] {
      color: var(--super-select-option-selected-color);
      font-weight: 700;
      background: var(--super-select-option-selected-background);
    }

    .option[aria-disabled="true"] {
      color: #94a3b8;
      cursor: not-allowed;
      opacity: 0.72;
    }

    .option-label {
      flex: 1 1 auto;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .option-check {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 17px;
      block-size: 17px;
      color: #fff;
      background: transparent;
      border: 1.5px solid #64748b;
      border-radius: 3px 5px 2px 4px / 4px 2px 5px 3px;
      font-size: 0.75em;
      line-height: 1;
    }

    :host(:not([multiple])) .option-check {
      border-color: transparent;
      border-radius: 50%;
    }

    .option[aria-selected="true"] .option-check {
      background: #3978e9;
      border-color: #174ea6;
    }

    .empty,
    .loading {
      display: grid;
      place-items: center;
      min-block-size: 118px;
      padding: 12px;
      color: #64748b;
      text-align: center;
    }

    .loading-content {
      display: inline-flex;
      align-items: center;
      gap: 9px;
    }

    .spinner {
      inline-size: 20px;
      block-size: 20px;
      border: 2px dotted #174ea6;
      border-radius: 50%;
      animation: super-select-spin 850ms linear infinite;
    }

    .source {
      display: none;
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.46;
      box-shadow: none;
      filter: grayscale(0.28);
      transform: rotate(0deg);
    }

    :host([readonly]) .control {
      cursor: default;
      background: #f7f7f3;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .control:hover {
        border-color: var(--super-select-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .option:not([aria-disabled="true"]):hover {
        background: var(--super-select-option-hover-background);
      }
    }

    @keyframes super-select-pop {
      from {
        opacity: 0;
        transform: translateY(-4px) rotate(-0.1deg) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(0.08deg) scale(1);
      }
    }

    @keyframes super-select-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .indicator,
      .option,
      .popup,
      .spinner {
        transition: none;
        animation: none;
      }
    }
  `});const gl="super-select",xl=o=>oe(gl,dt,o);class pt extends D{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return $`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${ue(this.checked)}
            name=${this.name}
            value=${this.value}
            aria-label=${y(this.accessibleLabel||void 0)}
            aria-labelledby=${y(this.accessibleLabel?void 0:"super-switch-label")}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby=${y(e)}
            aria-invalid=${y(t)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <span class="track" part="track" aria-hidden="true">
            <span class="thumb" part="thumb">
              <span class="thumb-icon unchecked-icon" part="unchecked-icon">
                <slot name="unchecked-icon"></slot>
              </span>
              <span class="thumb-icon checked-icon" part="checked-icon">
                <slot name="checked-icon"></slot>
              </span>
            </span>
          </span>
          <span class="content" part="content">
            <span id="super-switch-label" class="label" part="label">
              <slot></slot>
              <span
                class="unchecked-label"
                part="unchecked-label"
                aria-hidden="true"
              ><slot name="unchecked-label"></slot></span>
              <span
                class="checked-label"
                part="checked-label"
                aria-hidden="true"
              ><slot name="checked-label"></slot></span>
            </span>
            <span
              id="super-switch-description"
              class="description"
              part="description"
            ><slot name="description"></slot></span>
          </span>
        </label>
        ${this.helperText?$`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${y(this.validation==="error"?"alert":void 0)}
              aria-live=${y(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:_}
      </span>
    `}}Object.defineProperty(pt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(pt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ie`
    :host {
      --super-switch-width: 48px;
      --super-switch-height: 27px;
      --super-switch-thumb-size: 21px;
      --super-switch-gap: 10px;
      --super-switch-font-size: 15px;
      --super-switch-color: #292524;
      --super-switch-background: #d6d9de;
      --super-switch-checked-background: #68c875;
      --super-switch-border-color: #6b7280;
      --super-switch-checked-border-color: #2e7738;
      --super-switch-focus-color: #356df3;
      --super-switch-shadow-color: #9ba5b2;
      --super-switch-validation-color: var(--super-switch-border-color);
      --super-switch-rotation: -0.3deg;

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-switch-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-switch-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-switch-width: 57px;
      --super-switch-height: 31px;
      --super-switch-thumb-size: 25px;
      --super-switch-gap: 12px;
      --super-switch-font-size: 17px;
    }

    :host([size="small"]) {
      --super-switch-width: 40px;
      --super-switch-height: 23px;
      --super-switch-thumb-size: 17px;
      --super-switch-gap: 7px;
      --super-switch-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-switch-validation-color: #23804a;
    }

    :host([validation="warning"]) {
      --super-switch-validation-color: #a05f00;
    }

    :host([validation="error"]) {
      --super-switch-validation-color: #cf3038;
    }

    :host([validation="info"]) {
      --super-switch-validation-color: #64748b;
    }

    .wrapper {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .control {
      position: relative;
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-switch-gap);
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .native {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    .track {
      position: relative;
      display: inline-flex;
      flex: none;
      align-items: center;
      box-sizing: border-box;
      inline-size: var(--super-switch-width);
      block-size: var(--super-switch-height);
      padding: 2px;
      background: var(--super-switch-background);
      border: 1.8px solid var(--super-switch-border-color);
      border-radius: 999px 940px 980px 920px / 920px 990px 930px 970px;
      box-shadow:
        inset 0 1px 2px rgb(15 23 42 / 14%),
        1.5px 2px 0 -1px var(--super-switch-shadow-color);
      transform: rotate(var(--super-switch-rotation));
      transition:
        background-color 160ms ease,
        border-color 160ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .track::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.06;
      pointer-events: none;
    }

    .thumb {
      position: relative;
      z-index: 1;
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-switch-thumb-size);
      block-size: var(--super-switch-thumb-size);
      color: #536170;
      background: #fffef9;
      border: 1.5px solid #6b7280;
      border-radius: 48% 52% 46% 54% / 52% 47% 53% 48%;
      box-shadow: 1px 1px 1px rgb(15 23 42 / 22%);
      transform: translateX(0) rotate(-1deg);
      transition: transform 170ms cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    :host([checked]) .track {
      background: var(--super-switch-checked-background);
      border-color: var(--super-switch-checked-border-color);
      box-shadow:
        inset 0 1px 2px rgb(15 23 42 / 12%),
        2px 2px 0 -1px #6bad73;
    }

    :host([checked]) .thumb {
      color: #2e7738;
      border-color: #2e7738;
      transform: translateX(
        calc(var(--super-switch-width) - var(--super-switch-thumb-size) - 6px)
      ) rotate(1deg);
    }

    :host(:not([validation="none"])) .track {
      border-color: var(--super-switch-validation-color);
    }

    .thumb-icon {
      display: inline-grid;
      place-items: center;
      font-size: 0.65em;
      line-height: 1;
    }

    .checked-icon,
    :host([checked]) .unchecked-icon {
      display: none;
    }

    :host([checked]) .checked-icon {
      display: inline-grid;
    }

    .content {
      display: inline-flex;
      flex-direction: column;
      min-inline-size: 0;
    }

    .label {
      display: inline-flex;
      align-items: center;
      min-inline-size: 0;
      gap: 0.35em;
      color: inherit;
    }

    .description {
      color: #64748b;
      font-size: 0.8em;
      line-height: 1.35;
    }

    .checked-label,
    :host([checked]) .unchecked-label {
      display: none;
    }

    :host([checked]) .checked-label {
      display: inline;
    }

    slot {
      display: contents;
    }

    ::slotted([slot="checked-icon"]),
    ::slotted([slot="unchecked-icon"]) {
      display: inline-grid;
      place-items: center;
      line-height: 1;
    }

    .helper {
      margin-top: 5px;
      padding-left: calc(var(--super-switch-width) + var(--super-switch-gap));
      color: var(--super-switch-validation-color);
      font-size: 0.8em;
      line-height: 1.35;
    }

    .native:focus-visible + .track {
      outline: 3px solid var(--super-switch-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      .control:hover .track {
        box-shadow:
          inset 0 1px 2px rgb(15 23 42 / 12%),
          2px 3px 0 -1px #9db7fa;
        transform: translate(-0.5px, -0.5px) rotate(0.2deg);
      }
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.42;
    }

    :host([disabled]) .track {
      filter: grayscale(0.42);
      box-shadow: none;
      transform: rotate(0deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .track,
      .thumb {
        transition: none;
      }
    }
  `});const yl="super-switch",_l=o=>oe(yl,pt,o),kl=[Ya,Za,pl,fl,ml,xl,_l];function $l(o){kl.forEach(e=>{e(o)})}$l();export{Sl as t};
