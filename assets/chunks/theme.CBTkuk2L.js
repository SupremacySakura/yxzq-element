import{d as _,o as c,c as p,r as d,n as O,a as R,t as T,b as A,w as b,e as k,T as ut,_ as S,u as zr,i as Pr,f as Er,g as dt,h as V,j as ge,k as z,l as le,m,p as u,q as D,s as N,v as oe,x as it,y as ce,z as He,A as pt,B as Jt,C as Cr,D as Lr,E as ue,F as M,G as B,H as Qt,I as je,J as w,K as fe,L as Zt,M as Re,N as Oe,O as Ue,P as Tr,Q as er,R as Vr,S as Or,U as Mr,V as tr,W as Ir,X as rr,Y as sr,Z as Dr,$ as Nr,a0 as Br,a1 as Hr}from"./framework.o5qAeLTz.js";const jr=_({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(c(),p("span",{class:O(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[R(T(e.text),1)])],2))}}),Rr={key:0,class:"VPBackdrop"},Ur=_({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(c(),A(ut,{name:"fade"},{default:b(()=>[e.show?(c(),p("div",Rr)):k("",!0)]),_:1}))}}),qr=S(Ur,[["__scopeId","data-v-6f6fa9fb"]]),E=zr;function Fr(i,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(i,e):(i(),(r=!0)&&setTimeout(()=>r=!1,e))}}function ot(i){return/^\//.test(i)?i:`/${i}`}function ht(i){const{pathname:e,search:t,hash:r,protocol:s}=new URL(i,"http://a.com");if(Pr(i)||i.startsWith("#")||!s.startsWith("http")||!Er(e))return i;const{site:o}=E(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${r}`);return dt(a)}const ft=V(ge?location.hash:"");ge&&window.addEventListener("hashchange",()=>{ft.value=location.hash});function Pe({removeCurrent:i=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:r,page:s,theme:o}=E(),a=z(()=>{var l,h;return{label:(l=t.value.locales[r.value])==null?void 0:l.label,link:((h=t.value.locales[r.value])==null?void 0:h.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:z(()=>Object.entries(t.value.locales).flatMap(([l,h])=>i&&a.value.label===h.label?[]:{text:h.label,link:Kr(h.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(a.value.link.length-1),!t.value.cleanUrls)+ft.value})),currentLang:a}}function Kr(i,e,t,r){return e?i.replace(/\/$/,"")+ot(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):i}const Yr=i=>(D("data-v-a7a1a61a"),i=i(),N(),i),Gr={class:"NotFound"},Wr={class:"code"},Xr={class:"title"},Jr=Yr(()=>m("div",{class:"divider"},null,-1)),Qr={class:"quote"},Zr={class:"action"},es=["href","aria-label"],ts=_({__name:"NotFound",setup(i){const{site:e,theme:t}=E(),{localeLinks:r}=Pe({removeCurrent:!1}),s=V("/");return le(()=>{var a;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(s.value=((a=r.value.find(({link:n})=>n.startsWith(o)))==null?void 0:a.link)||r.value[0].link)}),(o,a)=>{var n,l,h,g,f;return c(),p("div",Gr,[m("p",Wr,T(((n=u(t).notFound)==null?void 0:n.code)??"404"),1),m("h1",Xr,T(((l=u(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),Jr,m("blockquote",Qr,T(((h=u(t).notFound)==null?void 0:h.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),m("div",Zr,[m("a",{class:"link",href:u(dt)(s.value),"aria-label":((g=u(t).notFound)==null?void 0:g.linkLabel)??"go to home"},T(((f=u(t).notFound)==null?void 0:f.linkText)??"Take me home"),9,es)])])}}}),rs=S(ts,[["__scopeId","data-v-a7a1a61a"]]);function ir(i,e){if(Array.isArray(i))return Me(i);if(i==null)return[];e=ot(e);const t=Object.keys(i).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(ot(s))),r=t?i[t]:[];return Array.isArray(r)?Me(r):Me(r.items,r.base)}function ss(i){const e=[];let t=0;for(const r in i){const s=i[r];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function is(i){const e=[];function t(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function at(i,e){return Array.isArray(e)?e.some(t=>at(i,t)):oe(i,e.link)?!0:e.items?at(i,e.items):!1}function Me(i,e){return[...i].map(t=>{const r={...t},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=Me(r.items,s)),r})}function Y(){const{frontmatter:i,page:e,theme:t}=E(),r=it("(min-width: 960px)"),s=V(!1),o=z(()=>{const I=t.value.sidebar,L=e.value.relativePath;return I?ir(I,L):[]}),a=V(o.value);ce(o,(I,L)=>{JSON.stringify(I)!==JSON.stringify(L)&&(a.value=o.value)});const n=z(()=>i.value.sidebar!==!1&&a.value.length>0&&i.value.layout!=="home"),l=z(()=>h?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),h=z(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),g=z(()=>n.value&&r.value),f=z(()=>n.value?ss(a.value):[]);function y(){s.value=!0}function P(){s.value=!1}function C(){s.value?P():y()}return{isOpen:s,sidebar:a,sidebarGroups:f,hasSidebar:n,hasAside:h,leftAside:l,isSidebarEnabled:g,open:y,close:P,toggle:C}}function os(i,e){let t;He(()=>{t=i.value?document.activeElement:void 0}),le(()=>{window.addEventListener("keyup",r)}),pt(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&i.value&&(e(),t==null||t.focus())}}function as(i){const{page:e}=E(),t=V(!1),r=z(()=>i.value.collapsed!=null),s=z(()=>!!i.value.link),o=V(!1),a=()=>{o.value=oe(e.value.relativePath,i.value.link)};ce([e,i,ft],a),le(a);const n=z(()=>o.value?!0:i.value.items?at(e.value.relativePath,i.value.items):!1),l=z(()=>!!(i.value.items&&i.value.items.length));He(()=>{t.value=!!(r.value&&i.value.collapsed)}),Jt(()=>{(o.value||n.value)&&(t.value=!1)});function h(){r.value&&(t.value=!t.value)}return{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:n,hasChildren:l,toggle:h}}function ns(){const{hasSidebar:i}=Y(),e=it("(min-width: 960px)"),t=it("(min-width: 1280px)");return{isAsideEnabled:z(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const nt=[];function or(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function bt(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:ls(t),link:"#"+t.id,level:r}});return cs(e,i)}function ls(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function cs(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;i=i.filter(a=>a.level>=r&&a.level<=s),nt.length=0;for(const{element:a,link:n}of i)nt.push({element:a,link:n});const o=[];e:for(let a=0;a<i.length;a++){const n=i[a];if(a===0)o.push(n);else{for(let l=a-1;l>=0;l--){const h=i[l];if(h.level<n.level){(h.children||(h.children=[])).push(n);continue e}}o.push(n)}}return o}function us(i,e){const{isAsideEnabled:t}=ns(),r=Fr(o,100);let s=null;le(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),Cr(()=>{a(location.hash)}),pt(()=>{window.removeEventListener("scroll",r)});function o(){if(!t.value)return;const n=window.scrollY,l=window.innerHeight,h=document.body.offsetHeight,g=Math.abs(n+l-h)<1,f=nt.map(({element:P,link:C})=>({link:C,top:ds(P)})).filter(({top:P})=>!Number.isNaN(P)).sort((P,C)=>P.top-C.top);if(!f.length){a(null);return}if(n<1){a(null);return}if(g){a(f[f.length-1].link);return}let y=null;for(const{link:P,top:C}of f){if(C>n+Lr()+4)break;y=P}a(y)}function a(n){s&&s.classList.remove("active"),n==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(n)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ds(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}const ps=["href","title"],hs=_({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const r=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(t,r)=>{const s=ue("VPDocOutlineItem",!0);return c(),p("ul",{class:O(["VPDocOutlineItem",t.root?"root":"nested"])},[(c(!0),p(M,null,B(t.headers,({children:o,link:a,title:n})=>(c(),p("li",null,[m("a",{class:"outline-link",href:a,onClick:e,title:n},T(n),9,ps),o!=null&&o.length?(c(),A(s,{key:0,headers:o},null,8,["headers"])):k("",!0)]))),256))],2)}}}),ar=S(hs,[["__scopeId","data-v-a2afcce7"]]),fs=i=>(D("data-v-7b6871a8"),i=i(),N(),i),bs={class:"content"},ms={class:"outline-title",role:"heading","aria-level":"2"},vs={"aria-labelledby":"doc-outline-aria-label"},gs=fs(()=>m("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),xs=_({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=E(),r=Qt([]);je(()=>{r.value=bt(e.value.outline??t.value.outline)});const s=V(),o=V();return us(s,o),(a,n)=>(c(),p("div",{class:O(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[m("div",bs,[m("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),m("div",ms,T(u(or)(u(t))),1),m("nav",vs,[gs,w(ar,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),ys=S(xs,[["__scopeId","data-v-7b6871a8"]]),ks={class:"VPDocAsideCarbonAds"},$s=_({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,r)=>(c(),p("div",ks,[w(u(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),_s=i=>(D("data-v-951edd61"),i=i(),N(),i),ws={class:"VPDocAside"},Ss=_s(()=>m("div",{class:"spacer"},null,-1)),As=_({__name:"VPDocAside",setup(i){const{theme:e}=E();return(t,r)=>(c(),p("div",ws,[d(t.$slots,"aside-top",{},void 0,!0),d(t.$slots,"aside-outline-before",{},void 0,!0),w(ys),d(t.$slots,"aside-outline-after",{},void 0,!0),Ss,d(t.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(c(),A($s,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):k("",!0),d(t.$slots,"aside-ads-after",{},void 0,!0),d(t.$slots,"aside-bottom",{},void 0,!0)]))}}),zs=S(As,[["__scopeId","data-v-951edd61"]]);function Ps(){const{theme:i,page:e}=E();return z(()=>{const{text:t="Edit this page",pattern:r=""}=i.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Es(){const{page:i,theme:e,frontmatter:t}=E();return z(()=>{var l,h,g,f,y,P,C,I;const r=ir(e.value.sidebar,i.value.relativePath),s=is(r),o=s.findIndex(L=>oe(i.value.relativePath,L.link)),a=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!t.value.prev||t.value.prev===!1,n=((h=e.value.docFooter)==null?void 0:h.next)===!1&&!t.value.next||t.value.next===!1;return{prev:a?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((g=s[o-1])==null?void 0:g.docFooterText)??((f=s[o-1])==null?void 0:f.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((y=s[o-1])==null?void 0:y.link)},next:n?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((P=s[o+1])==null?void 0:P.docFooterText)??((C=s[o+1])==null?void 0:C.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((I=s[o+1])==null?void 0:I.link)}}})}const q=_({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=z(()=>e.tag??(e.href?"a":"span")),r=z(()=>e.href&&Zt.test(e.href));return(s,o)=>(c(),A(fe(t.value),{class:O(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?u(ht)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:b(()=>[d(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Cs={class:"VPLastUpdated"},Ls=["datetime"],Ts=_({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,frontmatter:r,lang:s}=E(),o=z(()=>new Date(r.value.lastUpdated??t.value.lastUpdated)),a=z(()=>o.value.toISOString()),n=V("");return le(()=>{He(()=>{var l,h,g;n.value=new Intl.DateTimeFormat((h=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&h.forceLocale?s.value:void 0,((g=e.value.lastUpdated)==null?void 0:g.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,h)=>{var g;return c(),p("p",Cs,[R(T(((g=u(e).lastUpdated)==null?void 0:g.text)||u(e).lastUpdatedText||"Last updated")+": ",1),m("time",{datetime:a.value},T(n.value),9,Ls)])}}}),Vs=S(Ts,[["__scopeId","data-v-38b6dfd9"]]),Os=i=>(D("data-v-bbe5e75c"),i=i(),N(),i),Ms={key:0,class:"VPDocFooter"},Is={key:0,class:"edit-info"},Ds={key:0,class:"edit-link"},Ns=Os(()=>m("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Bs={key:1,class:"last-updated"},Hs={key:1,class:"prev-next"},js={class:"pager"},Rs=["innerHTML"],Us=["innerHTML"],qs={class:"pager"},Fs=["innerHTML"],Ks=["innerHTML"],Ys=_({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:r}=E(),s=Ps(),o=Es(),a=z(()=>e.value.editLink&&r.value.editLink!==!1),n=z(()=>t.value.lastUpdated&&r.value.lastUpdated!==!1),l=z(()=>a.value||n.value||o.value.prev||o.value.next);return(h,g)=>{var f,y,P,C;return l.value?(c(),p("footer",Ms,[d(h.$slots,"doc-footer-before",{},void 0,!0),a.value||n.value?(c(),p("div",Is,[a.value?(c(),p("div",Ds,[w(q,{class:"edit-link-button",href:u(s).url,"no-icon":!0},{default:b(()=>[Ns,R(" "+T(u(s).text),1)]),_:1},8,["href"])])):k("",!0),n.value?(c(),p("div",Bs,[w(Vs)])):k("",!0)])):k("",!0),(f=u(o).prev)!=null&&f.link||(y=u(o).next)!=null&&y.link?(c(),p("nav",Hs,[m("div",js,[(P=u(o).prev)!=null&&P.link?(c(),A(q,{key:0,class:"pager-link prev",href:u(o).prev.link},{default:b(()=>{var I;return[m("span",{class:"desc",innerHTML:((I=u(e).docFooter)==null?void 0:I.prev)||"Previous page"},null,8,Rs),m("span",{class:"title",innerHTML:u(o).prev.text},null,8,Us)]}),_:1},8,["href"])):k("",!0)]),m("div",qs,[(C=u(o).next)!=null&&C.link?(c(),A(q,{key:0,class:"pager-link next",href:u(o).next.link},{default:b(()=>{var I;return[m("span",{class:"desc",innerHTML:((I=u(e).docFooter)==null?void 0:I.next)||"Next page"},null,8,Fs),m("span",{class:"title",innerHTML:u(o).next.text},null,8,Ks)]}),_:1},8,["href"])):k("",!0)])])):k("",!0)])):k("",!0)}}}),Gs=S(Ys,[["__scopeId","data-v-bbe5e75c"]]),Ws=i=>(D("data-v-5fc3206a"),i=i(),N(),i),Xs={class:"container"},Js=Ws(()=>m("div",{class:"aside-curtain"},null,-1)),Qs={class:"aside-container"},Zs={class:"aside-content"},ei={class:"content"},ti={class:"content-container"},ri={class:"main"},si=_({__name:"VPDoc",setup(i){const{theme:e}=E(),t=Re(),{hasSidebar:r,hasAside:s,leftAside:o}=Y(),a=z(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(n,l)=>{const h=ue("Content");return c(),p("div",{class:O(["VPDoc",{"has-sidebar":u(r),"has-aside":u(s)}])},[d(n.$slots,"doc-top",{},void 0,!0),m("div",Xs,[u(s)?(c(),p("div",{key:0,class:O(["aside",{"left-aside":u(o)}])},[Js,m("div",Qs,[m("div",Zs,[w(zs,null,{"aside-top":b(()=>[d(n.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":b(()=>[d(n.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":b(()=>[d(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":b(()=>[d(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":b(()=>[d(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":b(()=>[d(n.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):k("",!0),m("div",ei,[m("div",ti,[d(n.$slots,"doc-before",{},void 0,!0),m("main",ri,[w(h,{class:O(["vp-doc",[a.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),w(Gs,null,{"doc-footer-before":b(()=>[d(n.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(n.$slots,"doc-after",{},void 0,!0)])])]),d(n.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ii=S(si,[["__scopeId","data-v-5fc3206a"]]),oi=_({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=z(()=>e.href&&Zt.test(e.href)),r=z(()=>e.tag||e.href?"a":"button");return(s,o)=>(c(),A(fe(r.value),{class:O(["VPButton",[s.size,s.theme]]),href:s.href?u(ht)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:b(()=>[R(T(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),ai=S(oi,[["__scopeId","data-v-3aa6481e"]]),ni=["src","alt"],li=_({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const r=ue("VPImage",!0);return e.image?(c(),p(M,{key:0},[typeof e.image=="string"||"src"in e.image?(c(),p("img",Oe({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(dt)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,ni)):(c(),p(M,{key:1},[w(r,Oe({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),w(r,Oe({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):k("",!0)}}}),De=S(li,[["__scopeId","data-v-31544fe0"]]),ci=i=>(D("data-v-5a0e971f"),i=i(),N(),i),ui={class:"container"},di={class:"main"},pi={key:0,class:"name"},hi=["innerHTML"],fi=["innerHTML"],bi=["innerHTML"],mi={key:0,class:"actions"},vi={key:0,class:"image"},gi={class:"image-container"},xi=ci(()=>m("div",{class:"image-bg"},null,-1)),yi=_({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=Ue("hero-image-slot-exists");return(t,r)=>(c(),p("div",{class:O(["VPHero",{"has-image":t.image||u(e)}])},[m("div",ui,[m("div",di,[d(t.$slots,"home-hero-info-before",{},void 0,!0),d(t.$slots,"home-hero-info",{},()=>[t.name?(c(),p("h1",pi,[m("span",{innerHTML:t.name,class:"clip"},null,8,hi)])):k("",!0),t.text?(c(),p("p",{key:1,innerHTML:t.text,class:"text"},null,8,fi)):k("",!0),t.tagline?(c(),p("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,bi)):k("",!0)],!0),d(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(c(),p("div",mi,[(c(!0),p(M,null,B(t.actions,s=>(c(),p("div",{key:s.link,class:"action"},[w(ai,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):k("",!0),d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||u(e)?(c(),p("div",vi,[m("div",gi,[xi,d(t.$slots,"home-hero-image",{},()=>[t.image?(c(),A(De,{key:0,class:"image-src",image:t.image},null,8,["image"])):k("",!0)],!0)])])):k("",!0)])],2))}}),ki=S(yi,[["__scopeId","data-v-5a0e971f"]]),$i=_({__name:"VPHomeHero",setup(i){const{frontmatter:e}=E();return(t,r)=>u(e).hero?(c(),A(ki,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":b(()=>[d(t.$slots,"home-hero-info-before")]),"home-hero-info":b(()=>[d(t.$slots,"home-hero-info")]),"home-hero-info-after":b(()=>[d(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":b(()=>[d(t.$slots,"home-hero-actions-after")]),"home-hero-image":b(()=>[d(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):k("",!0)}}),_i=i=>(D("data-v-29c05f11"),i=i(),N(),i),wi={class:"box"},Si={key:0,class:"icon"},Ai=["innerHTML"],zi=["innerHTML"],Pi=["innerHTML"],Ei={key:4,class:"link-text"},Ci={class:"link-text-value"},Li=_i(()=>m("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Ti=_({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(c(),A(q,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:b(()=>[m("article",wi,[typeof e.icon=="object"&&e.icon.wrap?(c(),p("div",Si,[w(De,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(c(),A(De,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(c(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Ai)):k("",!0),m("h2",{class:"title",innerHTML:e.title},null,8,zi),e.details?(c(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Pi)):k("",!0),e.linkText?(c(),p("div",Ei,[m("p",Ci,[R(T(e.linkText)+" ",1),Li])])):k("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Vi=S(Ti,[["__scopeId","data-v-29c05f11"]]),Oi={key:0,class:"VPFeatures"},Mi={class:"container"},Ii={class:"items"},Di=_({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=z(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(c(),p("div",Oi,[m("div",Mi,[m("div",Ii,[(c(!0),p(M,null,B(r.features,o=>(c(),p("div",{key:o.title,class:O(["item",[t.value]])},[w(Vi,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):k("",!0)}}),Ni=S(Di,[["__scopeId","data-v-e7779453"]]),Bi=_({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=E();return(t,r)=>u(e).features?(c(),A(Ni,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):k("",!0)}}),Hi=_({__name:"VPHomeContent",setup(i){const{width:e}=Tr({includeScrollbar:!1});return(t,r)=>(c(),p("div",{class:"vp-doc container",style:er(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(t.$slots,"default",{},void 0,!0)],4))}}),ji=S(Hi,[["__scopeId","data-v-cd81b872"]]),Ri={class:"VPHome"},Ui=_({__name:"VPHome",setup(i){const{frontmatter:e}=E();return(t,r)=>{const s=ue("Content");return c(),p("div",Ri,[d(t.$slots,"home-hero-before",{},void 0,!0),w($i,null,{"home-hero-info-before":b(()=>[d(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":b(()=>[d(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":b(()=>[d(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":b(()=>[d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":b(()=>[d(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(t.$slots,"home-hero-after",{},void 0,!0),d(t.$slots,"home-features-before",{},void 0,!0),w(Bi),d(t.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(c(),A(ji,{key:0},{default:b(()=>[w(s)]),_:1})):(c(),A(s,{key:1}))])}}}),qi=S(Ui,[["__scopeId","data-v-0d7cbeea"]]),Fi={},Ki={class:"VPPage"};function Yi(i,e){const t=ue("Content");return c(),p("div",Ki,[d(i.$slots,"page-top"),w(t),d(i.$slots,"page-bottom")])}const Gi=S(Fi,[["render",Yi]]),Wi=_({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=E(),{hasSidebar:r}=Y();return(s,o)=>(c(),p("div",{class:O(["VPContent",{"has-sidebar":u(r),"is-home":u(t).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(s.$slots,"not-found",{key:0},()=>[w(rs)],!0):u(t).layout==="page"?(c(),A(Gi,{key:1},{"page-top":b(()=>[d(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":b(()=>[d(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(t).layout==="home"?(c(),A(qi,{key:2},{"home-hero-before":b(()=>[d(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":b(()=>[d(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":b(()=>[d(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":b(()=>[d(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":b(()=>[d(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":b(()=>[d(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":b(()=>[d(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":b(()=>[d(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":b(()=>[d(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(t).layout&&u(t).layout!=="doc"?(c(),A(fe(u(t).layout),{key:3})):(c(),A(ii,{key:4},{"doc-top":b(()=>[d(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":b(()=>[d(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":b(()=>[d(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":b(()=>[d(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":b(()=>[d(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":b(()=>[d(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":b(()=>[d(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":b(()=>[d(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":b(()=>[d(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":b(()=>[d(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":b(()=>[d(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Xi=S(Wi,[["__scopeId","data-v-a0eadabb"]]),Ji={class:"container"},Qi=["innerHTML"],Zi=["innerHTML"],eo=_({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=E(),{hasSidebar:r}=Y();return(s,o)=>u(e).footer&&u(t).footer!==!1?(c(),p("footer",{key:0,class:O(["VPFooter",{"has-sidebar":u(r)}])},[m("div",Ji,[u(e).footer.message?(c(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Qi)):k("",!0),u(e).footer.copyright?(c(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Zi)):k("",!0)])],2)):k("",!0)}}),to=S(eo,[["__scopeId","data-v-3181bdf6"]]);function nr(){const{theme:i,frontmatter:e}=E(),t=Qt([]),r=z(()=>t.value.length>0);return je(()=>{t.value=bt(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:r}}const ro=i=>(D("data-v-cba91b6f"),i=i(),N(),i),so=ro(()=>m("span",{class:"vpi-chevron-right icon"},null,-1)),io={class:"header"},oo={class:"outline"},ao=_({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=E(),r=V(!1),s=V(0),o=V(),a=V();Vr(o,()=>{r.value=!1}),Or("Escape",()=>{r.value=!1}),je(()=>{r.value=!1});function n(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(g){g.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Mr(()=>{r.value=!1}))}function h(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,f)=>(c(),p("div",{class:"VPLocalNavOutlineDropdown",style:er({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[g.headers.length>0?(c(),p("button",{key:0,onClick:n,class:O({open:r.value})},[R(T(u(or)(u(t)))+" ",1),so],2)):(c(),p("button",{key:1,onClick:h},T(u(t).returnToTopLabel||"Return to top"),1)),w(ut,{name:"flyout"},{default:b(()=>[r.value?(c(),p("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:l},[m("div",io,[m("a",{class:"top-link",href:"#",onClick:h},T(u(t).returnToTopLabel||"Return to top"),1)]),m("div",oo,[w(ar,{headers:g.headers},null,8,["headers"])])],512)):k("",!0)]),_:1})],4))}}),no=S(ao,[["__scopeId","data-v-cba91b6f"]]),lo=i=>(D("data-v-3ed22da4"),i=i(),N(),i),co={class:"container"},uo=["aria-expanded"],po=lo(()=>m("span",{class:"vpi-align-left menu-icon"},null,-1)),ho={class:"menu-text"},fo=_({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=E(),{hasSidebar:r}=Y(),{headers:s}=nr(),{y:o}=tr(),a=V(0);le(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),je(()=>{s.value=bt(t.value.outline??e.value.outline)});const n=z(()=>s.value.length===0),l=z(()=>n.value&&!r.value),h=z(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:n.value,fixed:l.value}));return(g,f)=>u(t).layout!=="home"&&(!l.value||u(o)>=a.value)?(c(),p("div",{key:0,class:O(h.value)},[m("div",co,[u(r)?(c(),p("button",{key:0,class:"menu","aria-expanded":g.open,"aria-controls":"VPSidebarNav",onClick:f[0]||(f[0]=y=>g.$emit("open-menu"))},[po,m("span",ho,T(u(e).sidebarMenuLabel||"Menu"),1)],8,uo)):k("",!0),w(no,{headers:u(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):k("",!0)}}),bo=S(fo,[["__scopeId","data-v-3ed22da4"]]);function mo(){const i=V(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function r(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const o=Re();return ce(()=>o.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:r}}const vo={},go={class:"VPSwitch",type:"button",role:"switch"},xo={class:"check"},yo={key:0,class:"icon"};function ko(i,e){return c(),p("button",go,[m("span",xo,[i.$slots.default?(c(),p("span",yo,[d(i.$slots,"default",{},void 0,!0)])):k("",!0)])])}const $o=S(vo,[["render",ko],["__scopeId","data-v-3c9bcffa"]]),lr=i=>(D("data-v-a529835a"),i=i(),N(),i),_o=lr(()=>m("span",{class:"vpi-sun sun"},null,-1)),wo=lr(()=>m("span",{class:"vpi-moon moon"},null,-1)),So=_({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=E(),r=Ue("toggle-appearance",()=>{e.value=!e.value}),s=z(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(o,a)=>(c(),A($o,{title:s.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(r)},{default:b(()=>[_o,wo]),_:1},8,["title","aria-checked","onClick"]))}}),mt=S(So,[["__scopeId","data-v-a529835a"]]),Ao={key:0,class:"VPNavBarAppearance"},zo=_({__name:"VPNavBarAppearance",setup(i){const{site:e}=E();return(t,r)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",Ao,[w(mt)])):k("",!0)}}),Po=S(zo,[["__scopeId","data-v-786f23a7"]]),vt=V();let cr=!1,Ge=0;function Eo(i){const e=V(!1);if(ge){!cr&&Co(),Ge++;const t=ce(vt,r=>{var s,o,a;r===i.el.value||(s=i.el.value)!=null&&s.contains(r)?(e.value=!0,(o=i.onFocus)==null||o.call(i)):(e.value=!1,(a=i.onBlur)==null||a.call(i))});pt(()=>{t(),Ge--,Ge||Lo()})}return Ir(e)}function Co(){document.addEventListener("focusin",ur),cr=!0,vt.value=document.activeElement}function Lo(){document.removeEventListener("focusin",ur)}function ur(){vt.value=document.activeElement}const To={class:"VPMenuLink"},Vo=_({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=E();return(t,r)=>(c(),p("div",To,[w(q,{class:O({active:u(oe)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:b(()=>[R(T(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),qe=S(Vo,[["__scopeId","data-v-1f793dae"]]),Oo={class:"VPMenuGroup"},Mo={key:0,class:"title"},Io=_({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(c(),p("div",Oo,[e.text?(c(),p("p",Mo,T(e.text),1)):k("",!0),(c(!0),p(M,null,B(e.items,r=>(c(),p(M,null,["link"in r?(c(),A(qe,{key:0,item:r},null,8,["item"])):k("",!0)],64))),256))]))}}),Do=S(Io,[["__scopeId","data-v-11001275"]]),No={class:"VPMenu"},Bo={key:0,class:"items"},Ho=_({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(c(),p("div",No,[e.items?(c(),p("div",Bo,[(c(!0),p(M,null,B(e.items,r=>(c(),p(M,{key:r.text},["link"in r?(c(),A(qe,{key:0,item:r},null,8,["item"])):(c(),A(Do,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):k("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),jo=S(Ho,[["__scopeId","data-v-40114911"]]),Ro=i=>(D("data-v-ca516adc"),i=i(),N(),i),Uo=["aria-expanded","aria-label"],qo={key:0,class:"text"},Fo=["innerHTML"],Ko=Ro(()=>m("span",{class:"vpi-chevron-down text-icon"},null,-1)),Yo={key:1,class:"vpi-more-horizontal icon"},Go={class:"menu"},Wo=_({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=V(!1),t=V();Eo({el:t,onBlur:r});function r(){e.value=!1}return(s,o)=>(c(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[m("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[s.button||s.icon?(c(),p("span",qo,[s.icon?(c(),p("span",{key:0,class:O([s.icon,"option-icon"])},null,2)):k("",!0),s.button?(c(),p("span",{key:1,innerHTML:s.button},null,8,Fo)):k("",!0),Ko])):(c(),p("span",Yo))],8,Uo),m("div",Go,[w(jo,{items:s.items},{default:b(()=>[d(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),gt=S(Wo,[["__scopeId","data-v-ca516adc"]]),Xo=["href","aria-label","innerHTML"],Jo=_({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=z(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(r,s)=>(c(),p("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,Xo))}}),Qo=S(Jo,[["__scopeId","data-v-e5af8ed1"]]),Zo={class:"VPSocialLinks"},ea=_({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(c(),p("div",Zo,[(c(!0),p(M,null,B(e.links,({link:r,icon:s,ariaLabel:o})=>(c(),A(Qo,{key:r,icon:s,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),xt=S(ea,[["__scopeId","data-v-2ea1f528"]]),ta={key:0,class:"group translations"},ra={class:"trans-title"},sa={key:1,class:"group"},ia={class:"item appearance"},oa={class:"label"},aa={class:"appearance-action"},na={key:2,class:"group"},la={class:"item social-links"},ca=_({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=E(),{localeLinks:r,currentLang:s}=Pe({correspondingLink:!0}),o=z(()=>r.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,n)=>o.value?(c(),A(gt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:b(()=>[u(r).length&&u(s).label?(c(),p("div",ta,[m("p",ra,T(u(s).label),1),(c(!0),p(M,null,B(u(r),l=>(c(),A(qe,{key:l.link,item:l},null,8,["item"]))),128))])):k("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",sa,[m("div",ia,[m("p",oa,T(u(t).darkModeSwitchLabel||"Appearance"),1),m("div",aa,[w(mt)])])])):k("",!0),u(t).socialLinks?(c(),p("div",na,[m("div",la,[w(xt,{class:"social-links-list",links:u(t).socialLinks},null,8,["links"])])])):k("",!0)]),_:1})):k("",!0)}}),ua=S(ca,[["__scopeId","data-v-918c0501"]]),da=i=>(D("data-v-dbac2bdb"),i=i(),N(),i),pa=["aria-expanded"],ha=da(()=>m("span",{class:"container"},[m("span",{class:"top"}),m("span",{class:"middle"}),m("span",{class:"bottom"})],-1)),fa=[ha],ba=_({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(c(),p("button",{type:"button",class:O(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},fa,10,pa))}}),ma=S(ba,[["__scopeId","data-v-dbac2bdb"]]),va=["innerHTML"],ga=_({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=E();return(t,r)=>(c(),A(q,{class:O({VPNavBarMenuLink:!0,active:u(oe)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:b(()=>[m("span",{innerHTML:t.item.text},null,8,va)]),_:1},8,["class","href","target","rel"]))}}),xa=S(ga,[["__scopeId","data-v-1513c207"]]),ya=_({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=E(),r=o=>"link"in o?oe(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),s=z(()=>r(e.item));return(o,a)=>(c(),A(gt,{class:O({VPNavBarMenuGroup:!0,active:u(oe)(u(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),ka=i=>(D("data-v-5a2822ec"),i=i(),N(),i),$a={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},_a=ka(()=>m("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),wa=_({__name:"VPNavBarMenu",setup(i){const{theme:e}=E();return(t,r)=>u(e).nav?(c(),p("nav",$a,[_a,(c(!0),p(M,null,B(u(e).nav,s=>(c(),p(M,{key:s.text},["link"in s?(c(),A(xa,{key:0,item:s},null,8,["item"])):(c(),A(ya,{key:1,item:s},null,8,["item"]))],64))),128))])):k("",!0)}}),Sa=S(wa,[["__scopeId","data-v-5a2822ec"]]);function Aa(i){const{localeIndex:e,theme:t}=E();function r(s){var C,I,L;const o=s.split("."),a=(C=t.value.search)==null?void 0:C.options,n=a&&typeof a=="object",l=n&&((L=(I=a.locales)==null?void 0:I[e.value])==null?void 0:L.translations)||null,h=n&&a.translations||null;let g=l,f=h,y=i;const P=o.pop();for(const Ce of o){let X=null;const de=y==null?void 0:y[Ce];de&&(X=y=de);const Ke=f==null?void 0:f[Ce];Ke&&(X=f=Ke);const Ye=g==null?void 0:g[Ce];Ye&&(X=g=Ye),de||(y=X),Ke||(f=X),Ye||(g=X)}return(g==null?void 0:g[P])??(f==null?void 0:f[P])??(y==null?void 0:y[P])??""}return r}const za=["aria-label"],Pa={class:"DocSearch-Button-Container"},Ea=m("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Ca={class:"DocSearch-Button-Placeholder"},La=m("span",{class:"DocSearch-Button-Keys"},[m("kbd",{class:"DocSearch-Button-Key"}),m("kbd",{class:"DocSearch-Button-Key"},"K")],-1),Tt=_({__name:"VPNavBarSearchButton",setup(i){const t=Aa({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(c(),p("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(t)("button.buttonAriaLabel")},[m("span",Pa,[Ea,m("span",Ca,T(u(t)("button.buttonText")),1)]),La],8,za))}}),Ta={class:"VPNavBarSearch"},Va={id:"local-search"},Oa={key:1,id:"docsearch"},Ma=_({__name:"VPNavBarSearch",setup(i){const e=()=>null,t=()=>null,{theme:r}=E(),s=V(!1),o=V(!1);le(()=>{});function a(){s.value||(s.value=!0,setTimeout(n,16))}function n(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||n()},16)}const l=V(!1),h="";return(g,f)=>{var y;return c(),p("div",Ta,[u(h)==="local"?(c(),p(M,{key:0},[l.value?(c(),A(u(e),{key:0,onClose:f[0]||(f[0]=P=>l.value=!1)})):k("",!0),m("div",Va,[w(Tt,{onClick:f[1]||(f[1]=P=>l.value=!0)})])],64)):u(h)==="algolia"?(c(),p(M,{key:1},[s.value?(c(),A(u(t),{key:0,algolia:((y=u(r).search)==null?void 0:y.options)??u(r).algolia,onVnodeBeforeMount:f[2]||(f[2]=P=>o.value=!0)},null,8,["algolia"])):k("",!0),o.value?k("",!0):(c(),p("div",Oa,[w(Tt,{onClick:a})]))],64)):k("",!0)])}}}),Ia=_({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=E();return(t,r)=>u(e).socialLinks?(c(),A(xt,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):k("",!0)}}),Da=S(Ia,[["__scopeId","data-v-8aed4598"]]),Na=["href","rel","target"],Ba={key:1},Ha={key:2},ja=_({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=E(),{hasSidebar:r}=Y(),{currentLang:s}=Pe(),o=z(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),a=z(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),n=z(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,h)=>(c(),p("div",{class:O(["VPNavBarTitle",{"has-sidebar":u(r)}])},[m("a",{class:"title",href:o.value??u(ht)(u(s).link),rel:a.value,target:n.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),u(t).logo?(c(),A(De,{key:0,class:"logo",image:u(t).logo},null,8,["image"])):k("",!0),u(t).siteTitle?(c(),p("span",Ba,T(u(t).siteTitle),1)):u(t).siteTitle===void 0?(c(),p("span",Ha,T(u(e).title),1)):k("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Na)],2))}}),Ra=S(ja,[["__scopeId","data-v-5598953a"]]),Ua={class:"items"},qa={class:"title"},Fa=_({__name:"VPNavBarTranslations",setup(i){const{theme:e}=E(),{localeLinks:t,currentLang:r}=Pe({correspondingLink:!0});return(s,o)=>u(t).length&&u(r).label?(c(),A(gt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:b(()=>[m("div",Ua,[m("p",qa,T(u(r).label),1),(c(!0),p(M,null,B(u(t),a=>(c(),A(qe,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):k("",!0)}}),Ka=S(Fa,[["__scopeId","data-v-aaab09ea"]]),Ya=i=>(D("data-v-cd0bf013"),i=i(),N(),i),Ga={class:"wrapper"},Wa={class:"container"},Xa={class:"title"},Ja={class:"content"},Qa={class:"content-body"},Za=Ya(()=>m("div",{class:"divider"},[m("div",{class:"divider-line"})],-1)),en=_({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const{y:e}=tr(),{hasSidebar:t}=Y(),{hasLocalNav:r}=nr(),{frontmatter:s}=E(),o=V({});return Jt(()=>{o.value={"has-sidebar":t.value,"has-local-nav":r.value,top:s.value.layout==="home"&&e.value===0}}),(a,n)=>(c(),p("div",{class:O(["VPNavBar",o.value])},[m("div",Ga,[m("div",Wa,[m("div",Xa,[w(Ra,null,{"nav-bar-title-before":b(()=>[d(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":b(()=>[d(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),m("div",Ja,[m("div",Qa,[d(a.$slots,"nav-bar-content-before",{},void 0,!0),w(Ma,{class:"search"}),w(Sa,{class:"menu"}),w(Ka,{class:"translations"}),w(Po,{class:"appearance"}),w(Da,{class:"social-links"}),w(ua,{class:"extra"}),d(a.$slots,"nav-bar-content-after",{},void 0,!0),w(ma,{class:"hamburger",active:a.isScreenOpen,onClick:n[0]||(n[0]=l=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),Za],2))}}),tn=S(en,[["__scopeId","data-v-cd0bf013"]]),rn={key:0,class:"VPNavScreenAppearance"},sn={class:"text"},on=_({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=E();return(r,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(c(),p("div",rn,[m("p",sn,T(u(t).darkModeSwitchLabel||"Appearance"),1),w(mt)])):k("",!0)}}),an=S(on,[["__scopeId","data-v-2ed7559f"]]),nn=_({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=Ue("close-screen");return(t,r)=>(c(),A(q,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:b(()=>[R(T(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),ln=S(nn,[["__scopeId","data-v-c303e757"]]),cn=_({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=Ue("close-screen");return(t,r)=>(c(),A(q,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:b(()=>[R(T(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),dr=S(cn,[["__scopeId","data-v-4bd09630"]]),un={class:"VPNavScreenMenuGroupSection"},dn={key:0,class:"title"},pn=_({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(c(),p("div",un,[e.text?(c(),p("p",dn,T(e.text),1)):k("",!0),(c(!0),p(M,null,B(e.items,r=>(c(),A(dr,{key:r.text,item:r},null,8,["item"]))),128))]))}}),hn=S(pn,[["__scopeId","data-v-ca3d4e61"]]),fn=i=>(D("data-v-0a808fc4"),i=i(),N(),i),bn=["aria-controls","aria-expanded"],mn=["innerHTML"],vn=fn(()=>m("span",{class:"vpi-plus button-icon"},null,-1)),gn=["id"],xn={key:1,class:"group"},yn=_({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=V(!1),r=z(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,a)=>(c(),p("div",{class:O(["VPNavScreenMenuGroup",{open:t.value}])},[m("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:s},[m("span",{class:"button-text",innerHTML:o.text},null,8,mn),vn],8,bn),m("div",{id:r.value,class:"items"},[(c(!0),p(M,null,B(o.items,n=>(c(),p(M,{key:n.text},["link"in n?(c(),p("div",{key:n.text,class:"item"},[w(dr,{item:n},null,8,["item"])])):(c(),p("div",xn,[w(hn,{text:n.text,items:n.items},null,8,["text","items"])]))],64))),128))],8,gn)],2))}}),kn=S(yn,[["__scopeId","data-v-0a808fc4"]]),$n={key:0,class:"VPNavScreenMenu"},_n=_({__name:"VPNavScreenMenu",setup(i){const{theme:e}=E();return(t,r)=>u(e).nav?(c(),p("nav",$n,[(c(!0),p(M,null,B(u(e).nav,s=>(c(),p(M,{key:s.text},["link"in s?(c(),A(ln,{key:0,item:s},null,8,["item"])):(c(),A(kn,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):k("",!0)}}),wn=_({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=E();return(t,r)=>u(e).socialLinks?(c(),A(xt,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):k("",!0)}}),pr=i=>(D("data-v-46ce0713"),i=i(),N(),i),Sn=pr(()=>m("span",{class:"vpi-languages icon lang"},null,-1)),An=pr(()=>m("span",{class:"vpi-chevron-down icon chevron"},null,-1)),zn={class:"list"},Pn=_({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=Pe({correspondingLink:!0}),r=V(!1);function s(){r.value=!r.value}return(o,a)=>u(e).length&&u(t).label?(c(),p("div",{key:0,class:O(["VPNavScreenTranslations",{open:r.value}])},[m("button",{class:"title",onClick:s},[Sn,R(" "+T(u(t).label)+" ",1),An]),m("ul",zn,[(c(!0),p(M,null,B(u(e),n=>(c(),p("li",{key:n.link,class:"item"},[w(q,{class:"link",href:n.link},{default:b(()=>[R(T(n.text),1)]),_:2},1032,["href"])]))),128))])],2)):k("",!0)}}),En=S(Pn,[["__scopeId","data-v-46ce0713"]]),Cn={class:"container"},Ln=_({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=V(null),t=rr(ge?document.body:null);return(r,s)=>(c(),A(ut,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:b(()=>[r.open?(c(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[m("div",Cn,[d(r.$slots,"nav-screen-content-before",{},void 0,!0),w(_n,{class:"menu"}),w(En,{class:"translations"}),w(an,{class:"appearance"}),w(wn,{class:"social-links"}),d(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):k("",!0)]),_:3}))}}),Tn=S(Ln,[["__scopeId","data-v-a1d80ed4"]]),Vn={key:0,class:"VPNav"},On=_({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=mo(),{frontmatter:s}=E(),o=z(()=>s.value.navbar!==!1);return sr("close-screen",t),He(()=>{ge&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,n)=>o.value?(c(),p("header",Vn,[w(tn,{"is-screen-open":u(e),onToggleScreen:u(r)},{"nav-bar-title-before":b(()=>[d(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":b(()=>[d(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":b(()=>[d(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":b(()=>[d(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),w(Tn,{open:u(e)},{"nav-screen-content-before":b(()=>[d(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":b(()=>[d(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):k("",!0)}}),Mn=S(On,[["__scopeId","data-v-08aa4208"]]),hr=i=>(D("data-v-601fff8e"),i=i(),N(),i),In=["role","tabindex"],Dn=hr(()=>m("div",{class:"indicator"},null,-1)),Nn=hr(()=>m("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Bn=[Nn],Hn={key:1,class:"items"},jn=_({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:a,hasChildren:n,toggle:l}=as(z(()=>e.item)),h=z(()=>n.value?"section":"div"),g=z(()=>s.value?"a":"div"),f=z(()=>n.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),y=z(()=>s.value?void 0:"button"),P=z(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":a.value}]);function C(L){"key"in L&&L.key!=="Enter"||!e.item.link&&l()}function I(){e.item.link&&l()}return(L,Ce)=>{const X=ue("VPSidebarItem",!0);return c(),A(fe(h.value),{class:O(["VPSidebarItem",P.value])},{default:b(()=>[L.item.text?(c(),p("div",Oe({key:0,class:"item",role:y.value},Nr(L.item.items?{click:C,keydown:C}:{},!0),{tabindex:L.item.items&&0}),[Dn,L.item.link?(c(),A(q,{key:0,tag:g.value,class:"link",href:L.item.link,rel:L.item.rel,target:L.item.target},{default:b(()=>[(c(),A(fe(f.value),{class:"text",innerHTML:L.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(c(),A(fe(f.value),{key:1,class:"text",innerHTML:L.item.text},null,8,["innerHTML"])),L.item.collapsed!=null?(c(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:I,onKeydown:Dr(I,["enter"]),tabindex:"0"},Bn,32)):k("",!0)],16,In)):k("",!0),L.item.items&&L.item.items.length?(c(),p("div",Hn,[L.depth<5?(c(!0),p(M,{key:0},B(L.item.items,de=>(c(),A(X,{key:de.text,item:de,depth:L.depth+1},null,8,["item","depth"]))),128)):k("",!0)])):k("",!0)]),_:1},8,["class"])}}}),Rn=S(jn,[["__scopeId","data-v-601fff8e"]]),fr=i=>(D("data-v-ba982e17"),i=i(),N(),i),Un=fr(()=>m("div",{class:"curtain"},null,-1)),qn={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Fn=fr(()=>m("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Kn=_({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=Y(),r=i,s=V(null),o=rr(ge?document.body:null);return ce([r,s],()=>{var a;r.open?(o.value=!0,(a=s.value)==null||a.focus()):o.value=!1},{immediate:!0,flush:"post"}),(a,n)=>u(t)?(c(),p("aside",{key:0,class:O(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:s,onClick:n[0]||(n[0]=Br(()=>{},["stop"]))},[Un,m("nav",qn,[Fn,d(a.$slots,"sidebar-nav-before",{},void 0,!0),(c(!0),p(M,null,B(u(e),l=>(c(),p("div",{key:l.text,class:"group"},[w(Rn,{item:l,depth:0},null,8,["item"])]))),128)),d(a.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):k("",!0)}}),Yn=S(Kn,[["__scopeId","data-v-ba982e17"]]),Gn=_({__name:"VPSkipLink",setup(i){const e=Re(),t=V();ce(()=>e.path,()=>t.value.focus());function r({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const a=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",a)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",a),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(c(),p(M,null,[m("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),m("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),Wn=S(Gn,[["__scopeId","data-v-b79a1e83"]]),Xn=_({__name:"Layout",setup(i){const{isOpen:e,open:t,close:r}=Y(),s=Re();ce(()=>s.path,r),os(e,r);const{frontmatter:o}=E(),a=Hr(),n=z(()=>!!a["home-hero-image"]);return sr("hero-image-slot-exists",n),(l,h)=>{const g=ue("Content");return u(o).layout!==!1?(c(),p("div",{key:0,class:O(["Layout",u(o).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),w(Wn),w(qr,{class:"backdrop",show:u(e),onClick:u(r)},null,8,["show","onClick"]),w(Mn,null,{"nav-bar-title-before":b(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":b(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":b(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":b(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":b(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":b(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),w(bo,{open:u(e),onOpenMenu:u(t)},null,8,["open","onOpenMenu"]),w(Yn,{open:u(e)},{"sidebar-nav-before":b(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":b(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),w(Xi,null,{"page-top":b(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":b(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":b(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":b(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":b(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":b(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":b(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":b(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":b(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":b(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":b(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":b(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":b(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":b(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":b(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":b(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":b(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":b(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":b(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":b(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":b(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":b(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":b(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),w(to),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(c(),A(g,{key:1}))}}}),Jn=S(Xn,[["__scopeId","data-v-1333ba00"]]),ac={Layout:Jn,enhanceApp:({app:i})=>{i.component("Badge",jr)}},Qn=()=>typeof customElements>"u"?void 0:customElements;function G(i,e,t=Qn()){if(!t)return e;const r=t.get(i);return r||(t.define(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=globalThis,yt=Ie.ShadowRoot&&(Ie.ShadyCSS===void 0||Ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),Vt=new WeakMap;let br=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Vt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Vt.set(t,e))}return e}toString(){return this.cssText}};const Zn=i=>new br(typeof i=="string"?i:i+"",void 0,kt),W=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new br(t,i,kt)},el=(i,e)=>{if(yt)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=Ie.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},Ot=yt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Zn(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tl,defineProperty:rl,getOwnPropertyDescriptor:sl,getOwnPropertyNames:il,getOwnPropertySymbols:ol,getPrototypeOf:al}=Object,Z=globalThis,Mt=Z.trustedTypes,nl=Mt?Mt.emptyScript:"",We=Z.reactiveElementPolyfillSupport,ke=(i,e)=>i,lt={toAttribute(i,e){switch(e){case Boolean:i=i?nl:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},mr=(i,e)=>!tl(i,e),It={attribute:!0,type:String,converter:lt,reflect:!1,useDefault:!1,hasChanged:mr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Z.litPropertyMetadata??(Z.litPropertyMetadata=new WeakMap);let pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=It){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&rl(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=sl(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const n=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??It}static _$Ei(){if(this.hasOwnProperty(ke("elementProperties")))return;const e=al(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ke("properties"))){const t=this.properties,r=[...il(t),...ol(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(Ot(s))}else e!==void 0&&t.push(Ot(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return el(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var o;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:lt).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var o,a;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:lt;this._$Em=s;const h=l.fromAttribute(t,n.type);this[s]=h??((a=this._$Ej)==null?void 0:a.get(s))??h,this._$Em=null}}requestUpdate(e,t,r,s=!1,o){var a;if(e!==void 0){const n=this.constructor;if(s===!1&&(o=this[e]),r??(r=n.getPropertyOptions(e)),!((r.hasChanged??mr)(o,t)||r.useDefault&&r.reflect&&o===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[ke("elementProperties")]=new Map,pe[ke("finalized")]=new Map,We==null||We({ReactiveElement:pe}),(Z.reactiveElementVersions??(Z.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=globalThis,Dt=i=>i,Ne=$e.trustedTypes,Nt=Ne?Ne.createPolicy("lit-html",{createHTML:i=>i}):void 0,vr="$lit$",Q=`lit$${Math.random().toFixed(9).slice(2)}$`,gr="?"+Q,ll=`<${gr}>`,ae=document,Se=()=>ae.createComment(""),Ae=i=>i===null||typeof i!="object"&&typeof i!="function",$t=Array.isArray,cl=i=>$t(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Xe=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Ht=/>/g,ee=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Rt=/"/g,xr=/^(?:script|style|textarea|title)$/i,ul=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),v=ul(1),U=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ut=new WeakMap,se=ae.createTreeWalker(ae,129);function yr(i,e){if(!$t(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(e):e}const dl=(i,e)=>{const t=i.length-1,r=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=xe;for(let n=0;n<t;n++){const l=i[n];let h,g,f=-1,y=0;for(;y<l.length&&(a.lastIndex=y,g=a.exec(l),g!==null);)y=a.lastIndex,a===xe?g[1]==="!--"?a=Bt:g[1]!==void 0?a=Ht:g[2]!==void 0?(xr.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=ee):g[3]!==void 0&&(a=ee):a===ee?g[0]===">"?(a=s??xe,f=-1):g[1]===void 0?f=-2:(f=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?ee:g[3]==='"'?Rt:jt):a===Rt||a===jt?a=ee:a===Bt||a===Ht?a=xe:(a=ee,s=void 0);const P=a===ee&&i[n+1].startsWith("/>")?" ":"";o+=a===xe?l+ll:f>=0?(r.push(h),l.slice(0,f)+vr+l.slice(f)+Q+P):l+Q+(f===-2?n:P)}return[yr(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ze{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,a=0;const n=e.length-1,l=this.parts,[h,g]=dl(e,t);if(this.el=ze.createElement(h,r),se.currentNode=this.el.content,t===2||t===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=se.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(vr)){const y=g[a++],P=s.getAttribute(f).split(Q),C=/([.?@])?(.*)/.exec(y);l.push({type:1,index:o,name:C[2],strings:P,ctor:C[1]==="."?hl:C[1]==="?"?fl:C[1]==="@"?bl:Fe}),s.removeAttribute(f)}else f.startsWith(Q)&&(l.push({type:6,index:o}),s.removeAttribute(f));if(xr.test(s.tagName)){const f=s.textContent.split(Q),y=f.length-1;if(y>0){s.textContent=Ne?Ne.emptyScript:"";for(let P=0;P<y;P++)s.append(f[P],Se()),se.nextNode(),l.push({type:2,index:++o});s.append(f[y],Se())}}}else if(s.nodeType===8)if(s.data===gr)l.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(Q,f+1))!==-1;)l.push({type:7,index:o}),f+=Q.length-1}o++}}static createElement(e,t){const r=ae.createElement("template");return r.innerHTML=e,r}}function me(i,e,t=i,r){var a,n;if(e===U)return e;let s=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const o=Ae(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=me(i,s._$AS(i,e.values),s,r)),e}class pl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??ae).importNode(t,!0);se.currentNode=s;let o=se.nextNode(),a=0,n=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Ee(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new ml(o,this,e)),this._$AV.push(h),l=r[++n]}a!==(l==null?void 0:l.index)&&(o=se.nextNode(),a++)}return se.currentNode=ae,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Ee{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=me(this,e,t),Ae(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(ae.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ze.createElement(yr(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const a=new pl(s,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=Ut.get(e.strings);return t===void 0&&Ut.set(e.strings,t=new ze(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new Ee(this.O(Se()),this.O(Se()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const s=Dt(e).nextSibling;Dt(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,t=this,r,s){const o=this.strings;let a=!1;if(o===void 0)e=me(this,e,t,0),a=!Ae(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const n=e;let l,h;for(e=o[0],l=0;l<o.length-1;l++)h=me(this,n[r+l],t,l),h===U&&(h=this._$AH[l]),a||(a=!Ae(h)||h!==this._$AH[l]),h===x?e=x:e!==x&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hl extends Fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}class fl extends Fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}}class bl extends Fe{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=me(this,e,t,0)??x)===U)return;const r=this._$AH,s=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==x&&(r===x||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ml{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){me(this,e)}}const Je=$e.litHtmlPolyfillSupport;Je==null||Je(ze,Ee),($e.litHtmlVersions??($e.litHtmlVersions=[])).push("3.3.3");const vl=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new Ee(e.insertBefore(Se(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis;let j=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return U}};var Xt;j._$litElement$=!0,j.finalized=!0,(Xt=ie.litElementHydrateSupport)==null||Xt.call(ie,{LitElement:j});const Qe=ie.litElementPolyfillSupport;Qe==null||Qe({LitElement:j});(ie.litElementVersions??(ie.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=i=>i??x;class _t extends j{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:v`<slot></slot>`;return v`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${$(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?v`<span class="spinner" part="spinner" aria-hidden="true"></span>`:v`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?x:v`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(_t,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(_t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const gl="super-button",xl=i=>G(gl,_t,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kr=i=>(...e)=>({_$litDirective$:i,values:e});class $r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=i=>i.strings===void 0,yl={},kl=(i,e=yl)=>i._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=kr(class extends $r{constructor(i){if(super(i),i.type!==re.PROPERTY&&i.type!==re.ATTRIBUTE&&i.type!==re.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_r(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===U||e===x)return e;const t=i.element,r=i.name;if(i.type===re.PROPERTY){if(e===t[r])return U}else if(i.type===re.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return U}else if(i.type===re.ATTRIBUTE&&t.getAttribute(r)===e+"")return U;return kl(i),e}});class wt extends j{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.indeterminate=!1,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked,this.indeterminate=!1;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return v`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${ve(this.checked)}
            .indeterminate=${this.indeterminate}
            name=${this.name}
            value=${this.value}
            aria-label=${$(this.accessibleLabel||void 0)}
            aria-labelledby=${$(this.accessibleLabel?void 0:"super-checkbox-label")}
            aria-describedby=${$(e)}
            aria-invalid=${$(t)}
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
        ${this.helperText?v`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${$(this.validation==="error"?"alert":void 0)}
              aria-live=${$(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:x}
      </span>
    `}}Object.defineProperty(wt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(wt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const $l="super-checkbox",_l=i=>G($l,wt,i),wl=/^(\d{4})-(\d{2})-(\d{2})$/,Sl=/^(\d{4})-(\d{2})$/,Al=/^\d{4}$/,K=1,ne=9999,qt=ne-11,Ze="zh-CN",ct=i=>String(i).padStart(2,"0"),he=i=>String(i).padStart(4,"0"),ye=i=>Math.min(ne,Math.max(K,i)),F=(i,e,t)=>{const r=new Date(0);return r.setHours(0,0,0,0),r.setFullYear(i,e-1,t),r},be=(i,e,t)=>`${he(i)}-${ct(e)}-${ct(t)}`,Le=(i,e)=>`${he(i)}-${ct(e)}`,_e=i=>{const e=wl.exec(i);if(!e)return null;const t=Number(e[1]),r=Number(e[2]),s=Number(e[3]);if(t<K||t>ne||r<1||r>12||s<1)return null;const o=F(t,r,s);return o.getFullYear()!==t||o.getMonth()!==r-1||o.getDate()!==s?null:{year:t,month:r,day:s}},Ft=i=>_e(i)!==null,wr=i=>Al.test(i)&&Number(i)>=K,zl=i=>{const e=Sl.exec(i);if(!e||!wr(e[1]))return!1;const t=Number(e[2]);return t>=1&&t<=12},Kt=(i,e)=>F(i,e+1,0).getDate(),Pl=(i,e,t)=>F(i,e,t).getDay(),Yt=(i,e)=>{const t=_e(i);if(!t)return i;const r=F(t.year,t.month,t.day);return r.setDate(r.getDate()+e),r.getFullYear()<K?be(K,1,1):r.getFullYear()>ne?be(ne,12,31):be(r.getFullYear(),r.getMonth()+1,r.getDate())},te=(i,e,t)=>{const r=i*12+(e-1)+t,s=Math.floor(r/12);if(s<K)return{year:K,month:1};if(s>ne)return{year:ne,month:12};const o=(r%12+12)%12;return{year:s,month:o+1}},et=()=>{const i=new Date;return be(i.getFullYear(),i.getMonth()+1,i.getDate())};class St extends j{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{!this.open||t.composedPath().includes(this)||this.setOpen(!1,"outside",t)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{this.setOpen(!this.open,"trigger",t)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.stopPropagation(),this.clearValue(t,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(!this.disabled){if(t.key==="Escape"&&this.open){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t);return}(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),this.setOpen(!0,"trigger",t))}}}),Object.defineProperty(this,"handleGridKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{var o;if(t.key==="Escape"){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t),(o=this.triggerElement)==null||o.focus();return}const s={ArrowLeft:-1,ArrowRight:1,ArrowUp:this.mode==="date"||this.mode==="range"?-7:-4,ArrowDown:this.mode==="date"||this.mode==="range"?7:4}[t.key];s!==void 0&&(t.preventDefault(),this.moveActive(s))}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t))}}),Object.defineProperty(this,"handleCellClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;if(s){if(this.mode==="month"){this.pickMonth(s,t);return}if(this.mode==="year"){this.pickYear(s,t);return}this.activeDate=s,this.pickDay(s,t)}}}),Object.defineProperty(this,"handleCellMouseEnter",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(this.mode!=="range"||this.pendingStart===null)return;const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;s&&!this.isKeyDisabled(s)&&(this.hoverDate=s)}}),this.mode="date",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.open=!1,this.name="",this.placeholder="选择日期",this.startPlaceholder="开始日期",this.endPlaceholder="结束日期",this.min="",this.max="",this.firstDayOfWeek=1,this.locale=Ze,this.helperText="",this.accessibleLabel="",this.todayLabel="今天",this.clearLabel="清空",this.prevMonthLabel="上个月",this.nextMonthLabel="下个月",this.prevYearLabel="上一年",this.nextYearLabel="下一年",this.disabledDate=void 0,this.shortcuts=[];const e=new Date;this.viewYear=e.getFullYear(),this.viewMonth=e.getMonth()+1,this.activeDate="",this.pendingStart=null,this.hoverDate=null}get value(){return this._value}set value(e){this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}normalizeValue(e){return this.mode==="range"?Array.isArray(e)?e.filter(t=>typeof t=="string").filter(Ft).slice(0,2).sort():[]:Array.isArray(e)?"":this.mode==="month"?zl(e)?e:"":this.mode==="year"?wr(e)?e:"":Ft(e)?e:""}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){e.has("mode")&&(this.setInternalValue(this.value),this.pendingStart=null,this.hoverDate=null,this.syncView()),this.disabled&&this.open&&(this.open=!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>this.focusActiveCell())}syncView(){const e=this.viewAnchor();this.viewYear=e.year,this.viewMonth=e.month,this.mode==="year"?this.activeDate=he(e.year):this.mode==="month"?this.activeDate=Le(e.year,e.month):this.activeDate=be(e.year,e.month,e.day)}viewAnchor(){const e=this.value,t=Array.isArray(e)?e[0]:e;let r="";typeof t=="string"&&t!==""&&(this.mode==="year"?r=`${t}-01-01`:this.mode==="month"?r=`${t}-01`:r=t);const s=r===""?null:_e(r);if(s)return s;const o=new Date;return{year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()}}dateFormatter(e){try{return new Intl.DateTimeFormat(this.locale||Ze,e)}catch{return new Intl.DateTimeFormat(Ze,e)}}formatMonthTitle(e,t){return this.dateFormatter({year:"numeric",month:"long"}).format(F(e,t,1))}formatYearTitle(e){return this.dateFormatter({year:"numeric"}).format(F(e,1,1))}formatMonthCell(e,t){return this.dateFormatter({month:"short"}).format(F(e,t,1))}minKey(){return this.mode==="year"?this.min.slice(0,4):this.mode==="month"?this.min.slice(0,7):this.min.slice(0,10)}maxKey(){return this.mode==="year"?this.max.slice(0,4):this.mode==="month"?this.max.slice(0,7):this.max.slice(0,10)}isKeyDisabled(e){const t=this.minKey(),r=this.maxKey();if(t!==""&&e<t||r!==""&&e>r)return!0;if((this.mode==="date"||this.mode==="range")&&this.disabledDate!==void 0){const s=_e(e);if(s)return this.disabledDate(F(s.year,s.month,s.day))}return!1}focusActiveCell(){const e=this.renderRoot.querySelector(".cell[data-active]");e==null||e.focus()}emitChange(e){this.dispatchEvent(new CustomEvent("super-date-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,mode:this.mode,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-date-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(e&&(this.syncView(),this.pendingStart=null,this.hoverDate=null),this.open=e,this.dispatchEvent(new CustomEvent("super-date-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),!e&&t!=="outside"&&this.updateComplete.then(()=>{var s;return(s=this.triggerElement)==null?void 0:s.focus()}))}clearValue(e,t){this.disabled||(this.setInternalValue(this.mode==="range"?[]:""),this.pendingStart=null,this.hoverDate=null,this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e))}pickDay(e,t){if(!this.isKeyDisabled(e)){if(this.mode==="range"){if(this.pendingStart===null){this.pendingStart=e,this.hoverDate=null,this.activeDate=e;return}const r=[this.pendingStart,e].sort();this.pendingStart=null,this.hoverDate=null,this.setInternalValue(r),this.emitChange(t),this.setOpen(!1,"select",t);return}this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t)}}pickMonth(e,t){this.isKeyDisabled(e)||(this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t))}pickYear(e,t){this.isKeyDisabled(e)||(this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t))}pickToday(e){const t=et();this.isKeyDisabled(t)||(this.setInternalValue(t),this.emitChange(e),this.setOpen(!1,"today",e))}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r),o=Array.isArray(s)?s.length===0:s==="",a=Array.isArray(s)?s:[s];o||a.some(n=>this.isKeyDisabled(n))||(this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t))}shiftView(e,t){if(this.mode==="year"){const s=t!==0?t*12:e*12;this.viewYear=Math.min(qt,Math.max(K,this.decadeStart()+s));return}if(this.mode==="month"){this.viewYear=ye(this.viewYear+(t!==0?t:e));return}if(t!==0){this.viewYear=ye(this.viewYear+t);return}const r=te(this.viewYear,this.viewMonth,e);this.viewYear=r.year,this.viewMonth=r.month}moveActive(e){if(this.mode==="year"){const t=Number(this.activeDate)||this.viewAnchor().year;let r=ye(t+e),s=0;for(;this.isKeyDisabled(he(r))&&s<200;){const o=ye(r+(e>0?1:-1));if(o===r)break;r=o,s+=1}this.activeDate=he(r),this.ensureYearVisible(r)}else if(this.mode==="month"){const t=Number(this.activeDate.slice(0,4))||this.viewAnchor().year,r=Number(this.activeDate.slice(5,7))||this.viewAnchor().month;let s=te(t,r,e),o=0;for(;this.isKeyDisabled(Le(s.year,s.month))&&o<200;)s=te(s.year,s.month,e>0?1:-1),o+=1;this.activeDate=Le(s.year,s.month),this.viewYear=s.year}else{let t=Yt(this.activeDate||et(),e),r=0;for(;this.isKeyDisabled(t)&&r<500;)t=Yt(t,e>0?1:-1),r+=1;this.activeDate=t;const s=_e(t);s&&(this.viewYear=s.year,this.viewMonth=s.month)}this.updateComplete.then(()=>this.focusActiveCell())}ensureYearVisible(e){const t=this.decadeStart();(e<t||e>t+11)&&(this.viewYear=e)}decadeStart(){const e=ye(this.viewYear),t=e-e%12;return Math.min(Math.max(K,t),qt)}rangePreview(){if(this.mode!=="range")return null;if(this.pendingStart!==null){const t=this.hoverDate??this.pendingStart,r=[this.pendingStart,t].sort();return{start:r[0],end:r[1]}}const e=this.value;return Array.isArray(e)&&e.length===2?{start:e[0],end:e[1]}:null}buildDayCells(e,t){const r=(Pl(e,t,1)-this.firstDayOfWeek+70)%7,s=Kt(e,t),o=et(),a=[],n=(y,P,C,I)=>{const L=be(y,P,C);a.push({year:y,month:P,day:C,key:L,adjacent:I,disabled:this.isKeyDisabled(L),today:L===o})},l=te(e,t,-1),h=Kt(l.year,l.month);for(let y=r-1;y>=0;y-=1)n(l.year,l.month,h-y,!0);for(let y=1;y<=s;y+=1)n(e,t,y,!1);const g=te(e,t,1);let f=1;for(;a.length%7!==0;)n(g.year,g.month,f,!0),f+=1;return a}weekdayLabels(){const e=(this.firstDayOfWeek%7+7)%7,t=this.dateFormatter({weekday:"narrow"});return Array.from({length:7},(r,s)=>{const o=(e+s)%7;return t.format(F(2024,1,7+o))})}renderNav(e){const t=this.mode==="date"||this.mode==="range",r=e?te(this.viewYear,this.viewMonth,1):{year:this.viewYear,month:this.viewMonth},s=t?this.formatMonthTitle(this.viewYear,this.viewMonth):this.mode==="month"?this.formatYearTitle(this.viewYear):`${this.decadeStart()} – ${this.decadeStart()+11}`,o=this.formatMonthTitle(r.year,r.month);return v`
      <div class="nav" part="nav">
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.prevYearLabel}
          @click=${()=>this.shiftView(0,-1)}
        >«</button>
        ${t?v`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.prevMonthLabel}
              @click=${()=>this.shiftView(-1,0)}
            >‹</button>`:x}
        <span class="title" part="title">${s}</span>
        ${e?v`<span class="title" part="title">${o}</span>`:x}
        ${t?v`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.nextMonthLabel}
              @click=${()=>this.shiftView(1,0)}
            >›</button>`:x}
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.nextYearLabel}
          @click=${()=>this.shiftView(0,1)}
        >»</button>
      </div>
    `}renderDayPanel(e,t){const r=this.buildDayCells(e,t),s=this.rangePreview(),o=this.value,a=!Array.isArray(o)&&this.mode==="date"?o:"";return v`
      <div class="panel" part="panel">
        <div class="weekdays" part="weekdays" aria-hidden="true">
          ${this.weekdayLabels().map(n=>v`<span class="weekday">${n}</span>`)}
        </div>
        <div
          class="grid"
          part="grid"
          role="group"
          aria-label=${this.formatMonthTitle(e,t)}
          @keydown=${this.handleGridKeydown}
        >
          ${r.map(n=>{const l=s!==null&&!n.disabled&&n.key>=s.start&&n.key<=s.end&&s.start!==s.end,h=s!==null&&(n.key===s.start||n.key===s.end)&&(this.pendingStart!==null||s.start!==s.end),g=this.mode==="range"?h:n.key===a;return v`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${n.key}
                tabindex=${n.key===this.activeDate?"0":"-1"}
                ?data-active=${n.key===this.activeDate}
                ?data-adjacent=${n.adjacent}
                ?data-today=${n.today}
                ?data-in-range=${l}
                aria-pressed=${g?"true":"false"}
                ?disabled=${n.disabled}
                @click=${this.handleCellClick}
                @mouseenter=${this.handleCellMouseEnter}
              >${n.day}</button>
            `})}
        </div>
      </div>
    `}renderMonthPanel(){const e=this.value,t=typeof e=="string"?e:"";return v`
      <div class="panel" part="panel">
        <div
          class="month-grid"
          part="grid"
          role="group"
          aria-label=${this.formatYearTitle(this.viewYear)}
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(r,s)=>{const o=s+1,a=Le(this.viewYear,o);return v`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${a}
                tabindex=${a===this.activeDate?"0":"-1"}
                ?data-active=${a===this.activeDate}
                aria-pressed=${a===t?"true":"false"}
                ?disabled=${this.isKeyDisabled(a)}
                @click=${this.handleCellClick}
              >${this.formatMonthCell(this.viewYear,o)}</button>
            `})}
        </div>
      </div>
    `}renderYearPanel(){const e=this.value,t=typeof e=="string"?e:"",r=this.decadeStart();return v`
      <div class="panel" part="panel">
        <div
          class="year-grid"
          part="grid"
          role="group"
          aria-label="${r} – ${r+11}"
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(s,o)=>{const a=r+o,n=he(a);return v`
              <button
                class="cell"
                part="cell"
                type="button"
                data-key=${n}
                tabindex=${n===this.activeDate?"0":"-1"}
                ?data-active=${n===this.activeDate}
                aria-pressed=${n===t?"true":"false"}
                ?disabled=${this.isKeyDisabled(n)}
                @click=${this.handleCellClick}
              >${a}</button>
            `})}
        </div>
      </div>
    `}renderShortcuts(){return this.shortcuts.length===0?x:v`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>v`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.mode==="date",t=this.clearable;return!e&&!t?x:v`
      <div class="footer" part="footer">
        ${e?v`<button
              class="footer-button today-button"
              part="today-button"
              type="button"
              @click=${r=>this.pickToday(r)}
            >${this.todayLabel}</button>`:x}
        ${t?v`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${r=>this.clearValue(r,!0)}
            >${this.clearLabel}</button>`:x}
      </div>
    `}renderPanelsWithNav(){const e=this.mode==="range",t=te(this.viewYear,this.viewMonth,1);let r;return this.mode==="month"?r=this.renderMonthPanel():this.mode==="year"?r=this.renderYearPanel():r=v`
        ${this.renderDayPanel(this.viewYear,this.viewMonth)}
        ${e?this.renderDayPanel(t.year,t.month):x}
      `,v`
      <div class="popup-body">
        ${this.renderShortcuts()}
        <div class="panels-wrap">
          ${this.renderNav(e)}
          <div class="panels">${r}</div>
        </div>
      </div>
    `}renderTriggerText(){const e=this.value;if(this.mode==="range"){const r=Array.isArray(e)?e:[],s=r[0]??"",o=r[1]??"";return v`
        <span class="trigger-text ${s===""?"placeholder":""}" part="label">
          ${s===""?this.startPlaceholder:s}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${o===""?"placeholder":""}">
          ${o===""?this.endPlaceholder:o}
        </span>
      `}const t=typeof e=="string"?e:"";return v`
      <span class="trigger-text ${t===""?"placeholder":""}" part="label">
        ${t===""?this.placeholder:t}
      </span>
    `}render(){const e=Array.isArray(this.value)?this.value.length>0:this.value!=="",t=this.clearable&&e&&!this.disabled;return v`
      <div class="control" part="control">
        <span class="prefix" part="prefix"><slot name="prefix"></slot></span>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="popup"
          aria-label=${$(this.accessibleLabel||void 0)}
          ?disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeydown}
        >
          ${this.renderTriggerText()}
        </button>
        ${t?v`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:x}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">
            <span class="calendar-icon"></span>
          </slot>
        </span>
      </div>
      ${this.helperText!==""?v`<div class="helper" part="helper">${this.helperText}</div>`:x}
      ${this.open?v`
            <div
              class="popup"
              part="popup"
              id="popup"
              role="dialog"
              aria-modal="false"
              aria-label=${this.accessibleLabel||this.placeholder}
              data-layout=${this.mode==="range"?"range":"single"}
              @keydown=${this.handlePopupKeydown}
            >
              ${this.renderPanelsWithNav()}
              ${this.renderFooter()}
            </div>
          `:x}
    `}}Object.defineProperty(St,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{mode:{type:String,reflect:!0},value:{attribute:"value",noAccessor:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},min:{type:String},max:{type:String},firstDayOfWeek:{type:Number,attribute:"first-day-of-week"},locale:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},todayLabel:{type:String,attribute:"today-label"},clearLabel:{type:String,attribute:"clear-label"},prevMonthLabel:{type:String,attribute:"prev-month-label"},nextMonthLabel:{type:String,attribute:"next-month-label"},prevYearLabel:{type:String,attribute:"prev-year-label"},nextYearLabel:{type:String,attribute:"next-year-label"},disabledDate:{attribute:!1},shortcuts:{attribute:!1},viewYear:{state:!0},viewMonth:{state:!0},activeDate:{state:!0},pendingStart:{state:!0},hoverDate:{state:!0}}});Object.defineProperty(St,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
    :host {
      --super-date-picker-width: 250px;
      --super-date-picker-height: 38px;
      --super-date-picker-padding-inline: 12px;
      --super-date-picker-gap: 8px;
      --super-date-picker-font-size: 15px;
      --super-date-picker-background: #fffef9;
      --super-date-picker-color: #292524;
      --super-date-picker-placeholder-color: #64748b;
      --super-date-picker-border-color: #34445f;
      --super-date-picker-hover-color: #3f9b68;
      --super-date-picker-focus-color: #356df3;
      --super-date-picker-shadow-color: #a8b3bf;
      --super-date-picker-validation-color: var(--super-date-picker-border-color);
      --super-date-picker-panel-background: #fffef9;
      --super-date-picker-cell-hover-background: #eef5ff;
      --super-date-picker-cell-selected-background: #dfeaff;
      --super-date-picker-cell-selected-color: #174ea6;
      --super-date-picker-cell-range-background: #edf4ff;
      --super-date-picker-range-panel-width: 640px;
      --super-date-picker-z-index: 30;
      --super-date-picker-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-date-picker-width);
      max-inline-size: 100%;
      color: var(--super-date-picker-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-date-picker-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-date-picker-z-index);
    }

    :host([size="large"]) {
      --super-date-picker-height: 46px;
      --super-date-picker-padding-inline: 14px;
      --super-date-picker-font-size: 17px;
    }

    :host([size="small"]) {
      --super-date-picker-height: 31px;
      --super-date-picker-padding-inline: 9px;
      --super-date-picker-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-date-picker-validation-color: #23804a;
      --super-date-picker-border-color: #23804a;
      --super-date-picker-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-date-picker-validation-color: #a05f00;
      --super-date-picker-border-color: #a05f00;
      --super-date-picker-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-date-picker-validation-color: #cf3038;
      --super-date-picker-border-color: #cf3038;
      --super-date-picker-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-date-picker-validation-color: #64748b;
      --super-date-picker-border-color: #64748b;
      --super-date-picker-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-date-picker-height);
      padding-inline: var(--super-date-picker-padding-inline);
      color: var(--super-date-picker-color);
      background: var(--super-date-picker-background);
      border: 1.8px solid var(--super-date-picker-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-date-picker-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-date-picker-rotation));
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

    :host([open]) .control,
    .control:focus-within {
      border-color: var(--super-date-picker-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-date-picker-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-date-picker-gap);
      color: #526277;
      line-height: 1;
    }

    .trigger {
      display: inline-flex;
      flex: 1 1 auto;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-date-picker-height) - 10px);
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

    .trigger-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .placeholder {
      color: var(--super-date-picker-placeholder-color);
    }

    .range-separator {
      flex: none;
      padding-inline: 4px;
      color: var(--super-date-picker-placeholder-color);
    }

    .clear-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: #526277;
      font: inherit;
      font-size: 1.05em;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear-button:hover {
      color: #174ea6;
      background: rgb(53 109 243 / 12%);
    }

    .clear-button:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      pointer-events: none;
    }

    .calendar-icon {
      position: relative;
      box-sizing: border-box;
      inline-size: 13px;
      block-size: 12px;
      border: 1.6px solid currentColor;
      border-radius: 3px 4px 2px 4px / 3px 2px 4px 3px;
      transform: rotate(-2deg);
    }

    .calendar-icon::before {
      position: absolute;
      top: 2.5px;
      right: 0;
      left: 0;
      content: "";
      border-top: 1.4px solid currentColor;
    }

    .calendar-icon::after {
      position: absolute;
      top: -3.5px;
      left: 2px;
      inline-size: 6px;
      block-size: 3px;
      content: "";
      border-right: 1.4px solid currentColor;
      border-left: 1.4px solid currentColor;
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-date-picker-validation-color);
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
      padding: 8px;
      color: var(--super-date-picker-color);
      background: var(--super-date-picker-panel-background);
      border: 1.8px solid var(--super-date-picker-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-date-picker-shadow-color);
      transform: rotate(0.08deg);
      animation: super-date-picker-pop 130ms ease-out;
    }

    .popup-body {
      display: flex;
      align-items: stretch;
      gap: 8px;
    }

    .popup[data-layout="range"] {
      left: 50%;
      inline-size: min(
        var(--super-date-picker-range-panel-width),
        calc(100vw - 24px)
      );
      max-inline-size: none;
      translate: -50% 0;
    }

    .shortcuts {
      display: flex;
      flex: none;
      flex-direction: column;
      gap: 2px;
      padding-inline-end: 8px;
      border-inline-end: 1px dashed #cbd5e1;
    }

    .panels-wrap {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .panels {
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
    }

    .panel {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-block-end: 6px;
    }

    .nav-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: #34445f;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
    }

    .nav-button:hover {
      color: #174ea6;
      background: var(--super-date-picker-cell-hover-background);
    }

    .nav-button:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .title {
      flex: 1 1 auto;
      color: var(--super-date-picker-color);
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .weekdays,
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }

    .weekdays {
      margin-block-end: 2px;
    }

    .weekday {
      padding-block: 2px;
      color: #526277;
      font-size: 0.78em;
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .month-grid,
    .year-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      padding-block: 4px;
    }

    .cell {
      position: relative;
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: 30px;
      margin: 0;
      padding: 2px;
      color: var(--super-date-picker-color);
      font: inherit;
      font-size: 0.88em;
      line-height: 1.2;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .month-grid .cell,
    .year-grid .cell {
      min-block-size: 34px;
    }

    .cell:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    .cell[data-adjacent] {
      color: #a8b3bf;
    }

    .cell[data-today]::after {
      position: absolute;
      inset: 3px;
      content: "";
      border: 1.3px dashed #3978e9;
      border-radius: 6px 9px 5px 8px / 7px 5px 8px 6px;
      opacity: 0.75;
      pointer-events: none;
      transform: rotate(-1.2deg);
    }

    .cell[data-in-range] {
      background: var(--super-date-picker-cell-range-background);
      border-radius: 2px;
    }

    .cell[aria-pressed="true"] {
      color: var(--super-date-picker-cell-selected-color);
      font-weight: 700;
      background: var(--super-date-picker-cell-selected-background);
    }

    .cell:disabled {
      color: #b6bfca;
      cursor: not-allowed;
      opacity: 0.62;
      text-decoration: line-through;
      text-decoration-color: rgb(100 116 139 / 45%);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-block-start: 8px;
      padding-block-start: 7px;
      border-top: 1px dashed #cbd5e1;
    }

    .footer:empty {
      display: none;
    }

    .shortcut,
    .footer-button {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 3px 9px;
      color: #16428f;
      font: inherit;
      font-size: 0.84em;
      line-height: 1.3;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
    }

    .shortcut {
      inline-size: 100%;
      white-space: nowrap;
    }

    .shortcut:hover,
    .footer-button:hover {
      color: #174ea6;
      background: var(--super-date-picker-cell-hover-background);
    }

    .shortcut:focus-visible,
    .footer-button:focus-visible {
      outline: 2px solid var(--super-date-picker-focus-color);
      outline-offset: 1px;
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.46;
      box-shadow: none;
      filter: grayscale(0.28);
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      :host(:not([disabled])) .control:hover {
        border-color: var(--super-date-picker-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .cell:not(:disabled):not([aria-pressed="true"]):hover {
        background: var(--super-date-picker-cell-hover-background);
      }
    }

    @media (max-width: 700px) {
      .popup[data-layout="range"] {
        inline-size: min(100%, calc(100vw - 24px));
      }

      .popup[data-layout="range"] .title + .title,
      .popup[data-layout="range"] .panel + .panel {
        display: none;
      }
    }

    @keyframes super-date-picker-pop {
      from {
        opacity: 0;
        transform: translateY(-4px) rotate(-0.1deg) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(0.08deg) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .cell,
      .popup {
        transition: none;
        animation: none;
      }
    }
  `});const El="super-date-picker",Cl=i=>G(El,St,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const s of t)(r=s._$AO)==null||r.call(s,e,!1),we(s,e);return!0},Be=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Sr=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Vl(e)}};function Ll(i){this._$AN!==void 0?(Be(this),this._$AM=i,Sr(this)):this._$AM=i}function Tl(i,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let o=t;o<r.length;o++)we(r[o],!1),Be(r[o]);else r!=null&&(we(r,!1),Be(r));else we(this,i)}const Vl=i=>{i.type==re.CHILD&&(i._$AP??(i._$AP=Tl),i._$AQ??(i._$AQ=Ll))};class Ol extends $r{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Sr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),t&&(we(this,e),Be(this))}setValue(e){if(_r(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const tt=new WeakMap,Ml=kr(class extends Ol{render(i){return x}update(i,[e]){var r;const t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),x}rt(i){if(this.G!==void 0)if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=tt.get(e);t===void 0&&(t=new WeakMap,tt.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e;return typeof this.G=="function"?(i=tt.get(this.ht??globalThis))==null?void 0:i.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=Symbol.for(""),Il=i=>{if((i==null?void 0:i.r)===Ar)return i==null?void 0:i._$litStatic$},Dl=i=>({_$litStatic$:i,r:Ar}),Gt=new Map,Nl=i=>(e,...t)=>{const r=t.length;let s,o;const a=[],n=[];let l,h=0,g=!1;for(;h<r;){for(l=e[h];h<r&&(o=t[h],(s=Il(o))!==void 0);)l+=s+e[++h],g=!0;h!==r&&n.push(o),a.push(l),h++}if(h===r&&a.push(e[r]),g){const f=a.join("$$lit$$");(e=Gt.get(f))===void 0&&(a.raw=a,Gt.set(f,e=a)),t=n}return i(e,...t)},Bl=Nl(v),Hl={fields:[]},J=i=>({...i}),Wt=(i,e)=>Object.is(i,e),jl=/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]*$/;class At extends j{constructor(){super(),Object.defineProperty(this,"currentValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"resetValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"hasAssignedValue",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"changeHandlers",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"assignedPropertyNames",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),this.schema=Hl,this.submitting=!1,this.formErrors={}}get value(){return this.currentValue}set value(e){const t=this.currentValue;this.currentValue=this.normalizeValues(e),this.resetValue=J(this.currentValue),this.hasAssignedValue=!0,this.requestUpdate("value",t)}get errors(){return{...this.formErrors}}get fields(){var e;return((e=this.schema)==null?void 0:e.fields)??[]}normalizeValues(e){const t=e&&typeof e=="object"?e:{},r=new Set(this.fields.map(o=>o.field)),s={};return this.fields.forEach(o=>{Object.prototype.hasOwnProperty.call(t,o.field)?s[o.field]=t[o.field]:o.defaultValue!==void 0&&(s[o.field]=o.defaultValue)}),r.size?s:{...t}}setInternalValue(e){const t=this.currentValue;this.currentValue=e,this.requestUpdate("value",t)}dependenciesFor(e,t=this.currentValue){return Object.fromEntries((e.deps??[]).map(r=>[r,t[r]]))}isVisible(e,t=this.currentValue){return typeof e.visible=="boolean"?e.visible:typeof e.visible!="function"?!0:e.visible(this.dependenciesFor(e,t))}propsFor(e){return typeof e.props=="function"?e.props(this.dependenciesFor(e)):e.props??{}}getChangeHandler(e){const t=this.changeHandlers.get(e);if(t)return t;const r=(s,o)=>{this.updateFieldValue(e,s,o)};return this.changeHandlers.set(e,r),r}applyDependencyEffects(e,t,r){const s=[e],o=new Set;for(;s.length>0;){const a=s.shift();a&&(o.has(a)||(o.add(a),this.fields.forEach(n=>{if(!(n.deps??[]).includes(a))return;let l;if(n.clearWhenDepsChange?l="dependency":n.clearWhenHidden&&!this.isVisible(n,t)&&(l="visibility"),!l||!Object.prototype.hasOwnProperty.call(t,n.field)||t[n.field]===void 0)return;const h=t[n.field];t[n.field]=void 0,r.push({field:n.field,previousValue:h,value:void 0,reason:l}),s.push(n.field)})))}}updateFieldValue(e,t,r){const s=this.currentValue,o=s[e];if(Wt(o,t))return;const a=J(s);a[e]=t;const n=[{field:e,previousValue:o,value:t,reason:"user"}];this.applyDependencyEffects(e,a,n),this.setInternalValue(a),(this.schema.validateOn==="change"||n.some(l=>!!this.formErrors[l.field]))&&this.validate(),this.dispatchEvent(new CustomEvent("super-form-change",{detail:{field:e,value:t,changes:n,values:J(a),originalEvent:r},bubbles:!0,composed:!0}))}assignElementProps(e,t){const r=new Set(Object.keys(t));(this.assignedPropertyNames.get(e)??new Set).forEach(o=>{r.has(o)||Reflect.set(e,o,void 0)}),Object.entries(t).forEach(([o,a])=>{Reflect.set(e,o,a)}),this.assignedPropertyNames.set(e,r)}renderStringComponent(e,t){if(!jl.test(e))return v`<span class="config-error" role="alert">
        “${e}”不是合法的自定义元素标签
      </span>`;const r=Dl(e);return Bl`<${r}
      ${Ml(s=>{s instanceof HTMLElement&&this.assignElementProps(s,t)})}
    ></${r}>`}renderFieldComponent(e){const t={...this.propsFor(e),value:this.currentValue[e.field],onchange:this.getChangeHandler(e.field)};return typeof e.component=="string"?this.renderStringComponent(e.component,t):e.component(t)}renderField(e,t){if(this.fields.findIndex(o=>o.field===e.field)!==t)return v`<div class="config-error" role="alert">
        字段名“${e.field}”重复，请为每个字段配置唯一名称
      </div>`;if(!this.isVisible(e))return x;const r=this.formErrors[e.field],s=Math.min(e.span??1,this.schema.columns??1);return v`
      <div
        class="item"
        part="item"
        data-field=${e.field}
        style=${`--super-form-field-span: ${s}`}
      >
        <div class="label-row" part="label-row">
          ${e.label?v`<span class="label" part="label">${e.label}</span>`:x}
          ${e.required?v`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:x}
        </div>
        <div class="control-stack">
          <div class="control" part="control">
            ${this.renderFieldComponent(e)}
          </div>
          ${e.extra?v`<span class="extra" part="extra">${e.extra}</span>`:x}
          ${r?v`<span class="error" part="error" role="alert">${r}</span>`:x}
        </div>
      </div>
    `}formElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("form"))??null}validate(){const e={};return this.fields.forEach(t=>{if(!this.isVisible(t)||!t.rule)return;let r=!1;try{r=t.rule(this.currentValue[t.field])}catch{r=!1}r||(e[t.field]=t.errorMessage||"校验未通过")}),this.formErrors=e,Object.keys(e).length===0}reset(e){this.setInternalValue(J(this.resetValue)),this.formErrors={},this.dispatchEvent(new CustomEvent("super-form-reset",{detail:{values:J(this.resetValue),originalEvent:e},bubbles:!0,composed:!0}))}requestSubmit(){const e=this.formElement();if(e){e.requestSubmit();return}this.handleSubmit(new SubmitEvent("submit",{cancelable:!0}))}focusField(e){var s;const t=Array.from(((s=this.renderRoot)==null?void 0:s.querySelectorAll("[data-field]"))??[]).find(o=>o.dataset.field===e),r=t==null?void 0:t.querySelector("[part='control'] > *, input, textarea, select, button, [tabindex]");r==null||r.focus()}handleSubmit(e){if(e.preventDefault(),!this.submitting){if(!this.validate()){this.dispatchEvent(new CustomEvent("super-form-invalid",{detail:{values:J(this.currentValue),errors:{...this.formErrors},originalEvent:e},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("super-form-submit",{detail:{values:J(this.currentValue),originalEvent:e},bubbles:!0,composed:!0}))}}handleReset(e){e.preventDefault(),this.reset(e)}willUpdate(e){if(e.has("schema")){const t=this.schema.layout??"vertical",r=this.schema.columns??1,s=this.schema.actionsAlign==="start"?"flex-start":this.schema.actionsAlign==="center"?"center":"flex-end";this.setAttribute("layout",t),this.style.setProperty("--super-form-columns",String(r)),this.style.setProperty("--super-form-actions-align",s);const o=this.normalizeValues(this.currentValue);this.resetValue=this.hasAssignedValue?this.normalizeValues(this.resetValue):J(o),(Object.keys(o).length!==Object.keys(this.currentValue).length||Object.keys(o).some(l=>!Wt(o[l],this.currentValue[l])))&&this.setInternalValue(o);const a=new Set(this.fields.map(l=>l.field)),n=Object.fromEntries(Object.entries(this.formErrors).filter(([l])=>a.has(l)));Object.keys(n).length!==Object.keys(this.formErrors).length&&(this.formErrors=n),this.changeHandlers.clear()}}render(){const e=this.schema.showReset??!1,t=this.submitting?this.schema.submittingText??"提交中...":this.schema.submitText??"提交";return v`
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
          ${this.fields.map((r,s)=>this.renderField(r,s))}
        </div>
        <div class="actions" part="actions">
          <slot name="actions">
            ${e?v`<button
                  class="reset"
                  part="reset-button"
                  type="reset"
                  ?disabled=${this.submitting}
                >${this.schema.resetText??"重置"}</button>`:x}
            <button
              class="submit"
              part="submit-button"
              type="submit"
              ?disabled=${this.submitting}
            >
              ${this.submitting?v`<span class="submitting-mark" aria-hidden="true"></span>`:x}
              ${t}
            </button>
          </slot>
        </div>
        <div class="footer" part="footer"><slot name="footer"></slot></div>
      </form>
    `}}Object.defineProperty(At,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{schema:{attribute:!1},value:{attribute:!1,noAccessor:!0},submitting:{type:Boolean,reflect:!0},formErrors:{state:!0}}});Object.defineProperty(At,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const Rl="super-form",Ul=i=>G(Rl,At,i);class zt extends j{constructor(){super(),this.value="",this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-input",e)}handleChange(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-change",e)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value;e.value="",this.value="",e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly||(e>0?t.stepUp():t.stepDown(),this.value=t.value,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),t.focus())}updateSlotPresence(e,t){const s=e.currentTarget.assignedNodes({flatten:!0}).some(o=>{var a;return o.nodeType!==Node.TEXT_NODE||!!((a=o.textContent)!=null&&a.trim())});t==="prefix"?this.hasPrefix=s:t==="suffix"?this.hasSuffix=s:this.hasAction=s}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??x}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return v`
        <textarea
          class="field"
          part="input"
          .value=${ve(this.value)}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${$(this.maxLength)}
          minlength=${$(this.minLength)}
          inputmode=${$(this.inputMode||void 0)}
          autocomplete=${$(this.autocomplete||void 0)}
          aria-label=${$(this.accessibleLabel||void 0)}
          aria-describedby=${$(e)}
          aria-invalid=${$(t)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
      `;const r=this.type==="password"&&this.passwordVisible?"text":this.type;return v`
      <input
        class="field"
        part="input"
        .value=${ve(this.value)}
        type=${r}
        placeholder=${this.placeholder}
        maxlength=${$(this.maxLength)}
        minlength=${$(this.minLength)}
        min=${$(this.min||void 0)}
        max=${$(this.max||void 0)}
        step=${$(this.step||void 0)}
        inputmode=${$(this.inputMode||void 0)}
        autocomplete=${$(this.autocomplete||void 0)}
        aria-label=${$(this.accessibleLabel||void 0)}
        aria-describedby=${$(e)}
        aria-invalid=${$(t)}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        @input=${this.handleInput}
        @change=${this.handleChange}
      />
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,r=this.type==="password"&&this.revealable,s=this.validationSymbol(),o=!!this.helperText||this.showCount&&this.maxLength!==void 0;return v`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${a=>this.updateSlotPresence(a,"prefix")}
          ></slot>
        </span>
        ${this.required?v`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:x}
        ${this.type==="number"&&!this.multiline?v`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:x}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?v`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:x}
        <span class="trailing">
          ${s===x?x:v`<span class="validation-icon" part="validation-icon" aria-hidden="true">${s}</span>`}
          ${t?v`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:x}
          ${r?v`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:x}
        </span>
        <span class="adornment suffix" part="suffix" ?hidden=${!this.hasSuffix}>
          <slot
            name="suffix"
            @slotchange=${a=>this.updateSlotPresence(a,"suffix")}
          ></slot>
        </span>
        <span class="action" part="action" ?hidden=${!this.hasAction}>
          <slot
            name="action"
            @slotchange=${a=>this.updateSlotPresence(a,"action")}
          ></slot>
        </span>
      </div>
      ${o?v`
            <div class="meta" part="meta">
              ${this.helperText?v`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${$(this.validation==="error"?"alert":void 0)}
                    aria-live=${$(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:x}
              ${this.showCount&&this.maxLength!==void 0?v`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:x}
            </div>
          `:x}
    `}}Object.defineProperty(zt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(zt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const ql="super-input",Fl=i=>G(ql,zt,i);class Pt extends j{constructor(){super(),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.checked=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(r=>!r.disabled);return(e.find(r=>r.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&(e.checked=!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){this.disabled||this.checked||(this.checked=!0,this.uncheckGroupPeers(),this.emitChange(e))}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(n=>!n.disabled);if(t.length<2)return;e.preventDefault();const r=Math.max(0,t.indexOf(this)),s=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,o=(r+s+t.length)%t.length,a=t[o];a.selectFromInteraction(e),a.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked;t||(this.checked=!0,this.uncheckGroupPeers());const r=new Event("change");super.click(),t||this.emitChange(r)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return v`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${ve(this.checked)}
            .tabIndex=${this.radioTabIndex}
            name=${this.name}
            value=${this.value}
            aria-label=${$(this.accessibleLabel||void 0)}
            aria-labelledby=${$(this.accessibleLabel?void 0:"super-radio-label")}
            aria-describedby=${$(e)}
            aria-invalid=${$(t)}
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
        ${this.helperText?v`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${$(this.validation==="error"?"alert":void 0)}
              aria-live=${$(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:x}
      </span>
    `}}Object.defineProperty(Pt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Pt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const Kl="super-radio",Yl=i=>G(Kl,Pt,i),Gl=(i,e)=>i.length===e.length&&i.every((t,r)=>t===e[r]);class Et extends j{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"valueIsControlled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"optionObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"optionIds",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"nextOptionId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"initializedOptions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"hasConnected",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"selectedAttributeStates",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"typeahead",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"typeaheadTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleOptionMutations",{enumerable:!0,configurable:!0,writable:!0,value:e=>{let t=!1,r=!1,s;const o=n=>n instanceof HTMLOptionElement?[n]:n instanceof HTMLElement?Array.from(n.querySelectorAll("option")):[],a=new Set(this.collectOptions().map(n=>n.source));e.forEach(n=>{if(n.type==="attributes"){if((n.target instanceof HTMLOptionElement||n.target instanceof HTMLOptGroupElement)&&(t=!0),n.attributeName==="selected"&&n.target instanceof HTMLOptionElement){const l=n.target.hasAttribute("selected");a.has(n.target)&&(this.selectedAttributeStates.set(n.target,l),r=!0,n.target.selected=l,l&&(s=n.target))}return}(n.type==="characterData"||n.type==="childList")&&(t=!0,n.addedNodes.forEach(l=>{o(l).forEach(h=>{if(!a.has(h))return;const g=h.hasAttribute("selected"),f=this.selectedAttributeStates.has(h),y=f&&this.selectedAttributeStates.get(h)!==g;(!f&&g||y)&&(h.selected=g,r=!0,g&&(s=h)),this.selectedAttributeStates.set(h,g)})}))}),t&&this.syncOptions(r,s,r)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),this.multiple=!1,this.searchable=!1,this.clearable=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.loading=!1,this.open=!1,this.name="",this.size="medium",this.variant="default",this.validation="none",this.placeholder="请选择",this.helperText="",this.accessibleLabel="",this.clearLabel="清空选择",this.removeLabel="移除",this.searchLabel="搜索选项",this.searchPlaceholder="搜索并选择",this.emptyText="暂无可选项",this.loadingText="加载中...",this.options=[],this.query="",this.activeIndex=-1,this.hasPrefix=!1}get value(){return this._value}set value(e){this.valueIsControlled=!0,this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get comboboxElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('[role="combobox"]'))??null}get selectedValues(){const e=Array.isArray(this.value)?this.value:this.value?[this.value]:[];return Array.from(new Set(e))}get selectedOptions(){return this.selectedValues.map(t=>this.options.find(r=>r.value===t)).filter(t=>t!==void 0)}get filteredOptions(){const e=this.searchable?this.query.trim().toLocaleLowerCase():"";return this.options.filter(t=>t.hidden?!1:e?t.label.toLocaleLowerCase().includes(e)||t.value.toLocaleLowerCase().includes(e):!0)}get hasValue(){return this.selectedValues.length>0}get hasMutableValue(){return this.selectedOptions.some(e=>!e.disabled)}get activeOption(){return this.filteredOptions[this.activeIndex]}get describedBy(){return this.helperText?"super-select-helper":void 0}get invalid(){return this.validation==="error"?"true":void 0}get comboboxLabel(){if(this.accessibleLabel)return this.accessibleLabel;const e=this.selectedOptions.map(t=>t.label);return e.length?e.join("、"):this.placeholder}getOptionId(e){const t=this.optionIds.get(e);if(t)return t;const r=`super-select-option-${this.nextOptionId++}`;return this.optionIds.set(e,r),r}collectOptions(){const e=[],t=(r,s,o)=>{e.push({source:r,id:this.getOptionId(r),value:r.value,label:(r.label||r.textContent||"").trim(),disabled:r.disabled||!!(s!=null&&s.disabled),hidden:r.hidden||!!(s!=null&&s.hidden),group:(s==null?void 0:s.label)||void 0,groupKey:o})};return Array.from(this.children).forEach((r,s)=>{if(r instanceof HTMLOptionElement){t(r);return}r instanceof HTMLOptGroupElement&&Array.from(r.children).forEach(o=>{o instanceof HTMLOptionElement&&t(o,r,`super-select-group-${s}`)})}),e}normalizeValue(e,t=this.options,r=!1){const s=new Set(t.map(n=>n.value)),o=n=>{const l=Array.from(new Set(n.filter(Boolean)));return t.length&&!r?l.filter(h=>s.has(h)):l};if(this.multiple){const n=Array.isArray(e)?e:e?[e]:[];return o(n)}const a=Array.isArray(e)?e[0]??"":e;return!a||t.length&&!r&&!s.has(a)?"":a}valueEqual(e,t){return Array.isArray(e)&&Array.isArray(t)?Gl(e,t):e===t}syncSourceSelection(e=this.options,t=this.value){const r=new Set(Array.isArray(t)?t:t?[t]:[]);e.forEach(s=>{s.source.selected=r.has(s.value)})}syncOptions(e,t,r=!1){var l,h;const s=(l=this.activeOption)==null?void 0:l.id,o=this.collectOptions(),a=e&&(r||this.initializedOptions||!this.valueIsControlled);let n=this.value;if(a){const g=o.filter(f=>f.source.selected);if(this.multiple)n=g.map(f=>f.value);else{const f=t?o.find(y=>y.source===t):void 0;n=(f==null?void 0:f.value)??((h=g.at(-1))==null?void 0:h.value)??""}}n=this.normalizeValue(n,o,this.valueIsControlled&&!a),this.options=o,this.valueEqual(this.value,n)||this.setInternalValue(n),this.syncSourceSelection(o,n),o.length>0&&(this.initializedOptions=!0),s&&(this.activeIndex=this.filteredOptions.findIndex(g=>g.id===s&&!g.disabled)),this.realignActiveOption()}refreshOptions(){this.syncOptions(!0,void 0,!0),this.rememberSelectedAttributeStates()}realignActiveOption(){if(!this.open||this.loading){this.activeIndex=-1;return}const e=this.filteredOptions,t=e[this.activeIndex];if(t&&!t.disabled)return;const r=new Set(this.selectedValues),s=e.findIndex(o=>r.has(o.value)&&!o.disabled);this.activeIndex=s>=0?s:e.findIndex(o=>!o.disabled)}rememberSelectedAttributeStates(){this.collectOptions().forEach(({source:e})=>{this.selectedAttributeStates.set(e,e.hasAttribute("selected"))})}reconcileDisconnectedSelectedAttributes(){let e=!1,t;return this.collectOptions().forEach(({source:r})=>{const s=r.hasAttribute("selected"),o=this.selectedAttributeStates.has(r);(o&&this.selectedAttributeStates.get(r)!==s||!o&&s)&&(r.selected=s,e=!0,s&&(t=r)),this.selectedAttributeStates.set(r,s)}),{changed:e,preferredOption:t}}connectedCallback(){var r;super.connectedCallback();const e=this.hasConnected?this.reconcileDisconnectedSelectedAttributes():{changed:!1},t=(r=this.ownerDocument.defaultView)==null?void 0:r.MutationObserver;t&&(this.optionObserver=new t(this.handleOptionMutations),this.optionObserver.observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["value","label","disabled","selected","hidden"]})),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.syncOptions(e.changed||!this.initializedOptions,e.preferredOption,e.changed),this.rememberSelectedAttributeStates(),this.hasConnected=!0}disconnectedCallback(){var r,s;const e=((r=this.optionObserver)==null?void 0:r.takeRecords())??[];e.length>0&&this.handleOptionMutations(e),this.rememberSelectedAttributeStates(),(s=this.optionObserver)==null||s.disconnect(),this.optionObserver=null,this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0);const t=this.ownerDocument.defaultView;this.typeaheadTimer!==void 0&&(t==null||t.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=void 0),this.typeahead="",super.disconnectedCallback()}willUpdate(e){if(e.has("multiple")||e.has("value")){const t=this.normalizeValue(this.value,this.options,this.valueIsControlled);this.valueEqual(this.value,t)||this.setInternalValue(t),this.syncSourceSelection(this.options,t)}if(this.disabled&&this.open&&(this.open=!1),!this.open){this.query="",this.activeIndex=-1;return}(e.has("open")||e.has("loading")||e.has("searchable")||e.has("multiple")||e.has("value"))&&this.realignActiveOption()}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this.comboboxElement)==null?void 0:t.focus()}),e.has("activeIndex")&&this.open&&this.activeIndex>=0&&this.updateComplete.then(()=>{const t=this.renderRoot.querySelector('[role="option"][data-active]');typeof(t==null?void 0:t.scrollIntoView)=="function"&&t.scrollIntoView({block:"nearest"})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-select-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,values:[...this.selectedValues],name:this.name,selectedOptions:this.selectedOptions.map(t=>t.source),originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(e&&this.syncOptions(!1),this.open=e,e?this.realignActiveOption():(this.query="",this.activeIndex=-1),this.dispatchEvent(new CustomEvent("super-select-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),e&&this.updateComplete.then(()=>{var s;return(s=this.comboboxElement)==null?void 0:s.focus()}))}selectOption(e,t){if(e.disabled||this.disabled||this.readOnly||this.loading)return;if(this.multiple){const s=this.selectedValues;this.setInternalValue(s.includes(e.value)?s.filter(o=>o!==e.value):[...s,e.value]),this.syncSourceSelection(this.options,this.value),this.emitChange(t);return}const r=this.value!==e.value;this.setInternalValue(e.value),this.syncSourceSelection(this.options,this.value),r&&this.emitChange(t),this.setOpen(!1,"selection",t)}clearSelection(e){var o;if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readOnly||this.loading||!this.hasValue)return;const t=Array.isArray(this.value)?[...this.value]:this.value,r=this.selectedOptions.filter(a=>a.disabled).map(a=>a.value),s=this.multiple?r:r[0]??"";this.valueEqual(this.value,s)||(this.setInternalValue(s),this.syncSourceSelection(this.options,this.value),this.dispatchEvent(new CustomEvent("super-select-clear",{detail:{previousValue:t,originalEvent:e},bubbles:!0,composed:!0})),this.emitChange(e),(o=this.comboboxElement)==null||o.focus())}removeValue(e,t){var s;t.preventDefault(),t.stopPropagation();const r=this.options.find(o=>o.value===e);!this.multiple||this.disabled||this.readOnly||this.loading||r!=null&&r.disabled||(this.setInternalValue(this.selectedValues.filter(o=>o!==e)),this.syncSourceSelection(this.options,this.value),this.emitChange(t),(s=this.comboboxElement)==null||s.focus())}moveActive(e){var s;const t=this.filteredOptions;if(!t.length){this.activeIndex=-1;return}let r=this.activeIndex;for(let o=0;o<t.length;o+=1)if(r=(r+e+t.length)%t.length,!((s=t[r])!=null&&s.disabled)){this.activeIndex=r;return}this.activeIndex=-1}moveToBoundary(e){const t=this.filteredOptions,r=e==="start"?t.map((s,o)=>o):t.map((s,o)=>o).reverse();this.activeIndex=r.find(s=>{var o;return!((o=t[s])!=null&&o.disabled)})??-1}handleTypeahead(e,t){const r=this.ownerDocument.defaultView;this.typeahead+=e.toLocaleLowerCase(),this.typeaheadTimer!==void 0&&(r==null||r.clearTimeout(this.typeaheadTimer)),this.typeaheadTimer=r==null?void 0:r.setTimeout(()=>{this.typeahead="",this.typeaheadTimer=void 0},650),this.open||this.setOpen(!0,"keyboard",t);const s=this.filteredOptions,o=Math.max(this.activeIndex+1,0),n=[...s.slice(o),...s.slice(0,o)].find(l=>!l.disabled&&l.label.toLocaleLowerCase().startsWith(this.typeahead));n&&(this.activeIndex=s.indexOf(n))}handleKeyDown(e){var s;const t=e.composedPath()[0];if(t instanceof HTMLElement&&(t.classList.contains("tag-remove")||t.classList.contains("clear-button"))||this.disabled)return;if(!this.searchable&&e.key.length===1&&e.key!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),this.handleTypeahead(e.key,e);return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const o=e.key==="ArrowDown"?1:-1;this.open?this.moveActive(o):(this.setOpen(!0,"keyboard",e),this.realignActiveOption());return}const r=t instanceof HTMLInputElement&&t.classList.contains("search");if((e.key==="Home"||e.key==="End")&&!r){if(!this.open)return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"||e.key===" "&&!this.searchable){e.preventDefault(),this.open?this.activeOption&&this.selectOption(this.activeOption,e):this.setOpen(!0,"keyboard",e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"escape",e),(s=this.comboboxElement)==null||s.focus();return}e.key==="Tab"&&this.open&&this.setOpen(!1,"keyboard",e)}handleControlClick(e){if(this.disabled)return;const t=e.composedPath()[0];this.searchable&&this.open&&t instanceof HTMLInputElement&&t.classList.contains("search")||this.setOpen(!this.open,"trigger",e)}handleSearch(e){const t=e.currentTarget;this.query=t.value,this.open||this.setOpen(!0,"search",e),this.activeIndex=this.filteredOptions.findIndex(r=>!r.disabled),this.dispatchEvent(new CustomEvent("super-select-search",{detail:{query:this.query,originalEvent:e},bubbles:!0,composed:!0}))}handleSearchFocus(e){this.open||e.currentTarget.select()}handlePrefixSlotChange(e){const t=e.currentTarget;this.hasPrefix=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}click(){var r;if(this.disabled)return;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".control");if(e){e.click();return}const t=new MouseEvent("click");super.click(),this.setOpen(!this.open,"trigger",t)}focus(e){const t=this.comboboxElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.comboboxElement;if(e){e.blur();return}super.blur()}validationSymbol(){switch(this.validation){case"success":return"✓";case"warning":return"!";case"error":return"×";case"info":return"i";default:return""}}renderTags(){return this.multiple?v`
      <span class="tags" part="tags">
        ${this.selectedOptions.map(e=>v`
          <span class="tag" part="tag">
            <span class="tag-label">${e.label}</span>
            ${this.readOnly||this.disabled||this.loading||e.disabled?x:v`<button
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
    `:x}renderDefaultTrigger(){if(this.multiple&&this.hasValue)return x;const e=this.selectedOptions[0];return e?v`<span part="value">${e.label}</span>`:v`<span class="placeholder" part="placeholder">${this.placeholder}</span>`}renderCombobox(){var r,s;const e=this.open&&!this.loading?(r=this.activeOption)==null?void 0:r.id:void 0,t={expanded:this.open?"true":"false",required:this.required?"true":void 0,readonly:this.readOnly?"true":void 0,busy:this.loading?"true":void 0};if(this.searchable){const o=(s=this.selectedOptions[0])==null?void 0:s.label,a=this.open?this.searchPlaceholder:this.multiple&&this.hasValue?"":this.placeholder;return v`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${ve(this.open?this.query:this.multiple?"":o??"")}
          placeholder=${a}
          aria-label=${this.accessibleLabel||this.searchLabel}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded=${t.expanded}
          aria-controls="super-select-listbox"
          aria-activedescendant=${$(e)}
          aria-required=${$(t.required)}
          aria-readonly=${$(t.readonly)}
          aria-invalid=${$(this.invalid)}
          aria-busy=${$(t.busy)}
          aria-describedby=${$(this.describedBy)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          @input=${this.handleSearch}
          @focus=${this.handleSearchFocus}
        />
      `}return v`
      <button
        class="trigger"
        part="trigger"
        type="button"
        role="combobox"
        aria-label=${this.comboboxLabel}
        aria-haspopup="listbox"
        aria-expanded=${t.expanded}
        aria-controls="super-select-listbox"
        aria-activedescendant=${$(e)}
        aria-required=${$(t.required)}
        aria-readonly=${$(t.readonly)}
        aria-invalid=${$(this.invalid)}
        aria-busy=${$(t.busy)}
        aria-describedby=${$(this.describedBy)}
        ?disabled=${this.disabled}
      >
        <slot name="trigger">${this.renderDefaultTrigger()}</slot>
      </button>
    `}renderOption(e,t){const r=this.selectedValues.includes(e.value),s=this.readOnly||this.loading;return v`
      <div
        id=${e.id}
        class="option"
        part="option"
        role="option"
        aria-selected=${r?"true":"false"}
        aria-disabled=${e.disabled||s?"true":"false"}
        ?data-active=${t===this.activeIndex}
        @pointerdown=${o=>o.preventDefault()}
        @click=${o=>this.selectOption(e,o)}
      >
        <span class="option-check" part="option-check" aria-hidden="true">
          ${r?"✓":""}
        </span>
        <span class="option-label">${e.label}</span>
      </div>
    `}renderOptionGroups(){const e=this.filteredOptions,t=[];return e.forEach((r,s)=>{const o=r.groupKey??"super-select-ungrouped";let a=t.at(-1);(!a||a.key!==o)&&(a={key:o,label:r.group,options:[]},t.push(a)),a.options.push({option:r,index:s})}),t.map(r=>v`
      <div
        class="group"
        part="group"
        role=${r.label?"group":"presentation"}
        aria-label=${$(r.label)}
      >
        ${r.label?v`<div class="group-label" part="group-label">${r.label}</div>`:x}
        ${r.options.map(({option:s,index:o})=>this.renderOption(s,o))}
      </div>
    `)}renderPopup(){if(!this.open)return x;const e=this.filteredOptions;return v`
      <div class="popup" part="popup">
        <div
          id="super-select-listbox"
          class="listbox"
          part="listbox"
          role="listbox"
          aria-label=${this.accessibleLabel||this.placeholder}
          aria-multiselectable=${$(this.multiple?"true":void 0)}
          aria-readonly=${$(this.readOnly?"true":void 0)}
          aria-busy=${this.loading?"true":"false"}
        >
          ${!this.loading&&e.length?this.renderOptionGroups():x}
        </div>
        ${this.loading?v`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`:e.length?x:v`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`}
      </div>
    `}render(){const e=this.validationSymbol(),t=`control${this.hasValue?" has-value":""}`;return v`
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
        ${this.clearable&&this.hasMutableValue&&!this.disabled&&!this.readOnly&&!this.loading?v`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${r=>r.stopPropagation()}
            >×</button>`:x}
        ${e?v`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${e}
            </span>`:x}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText?v`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${$(this.validation==="error"?"alert":void 0)}
            aria-live=${$(this.validation==="error"?void 0:"polite")}
          >${this.helperText}</span>`:x}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${()=>this.syncOptions(!1)}></slot>
      </span>
    `}}Object.defineProperty(Et,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},multiple:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},removeLabel:{type:String,attribute:"remove-label"},searchLabel:{type:String,attribute:"search-label"},searchPlaceholder:{type:String,attribute:"search-placeholder"},emptyText:{type:String,attribute:"empty-text"},loadingText:{type:String,attribute:"loading-text"},options:{state:!0},query:{state:!0},activeIndex:{state:!0},hasPrefix:{state:!0}}});Object.defineProperty(Et,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const Wl="super-select",Xl=i=>G(Wl,Et,i);class Ct extends j{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return v`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${ve(this.checked)}
            name=${this.name}
            value=${this.value}
            aria-label=${$(this.accessibleLabel||void 0)}
            aria-labelledby=${$(this.accessibleLabel?void 0:"super-switch-label")}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby=${$(e)}
            aria-invalid=${$(t)}
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
        ${this.helperText?v`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${$(this.validation==="error"?"alert":void 0)}
              aria-live=${$(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:x}
      </span>
    `}}Object.defineProperty(Ct,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Ct,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
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
  `});const Jl="super-switch",Ql=i=>G(Jl,Ct,i),Zl=/^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,ec=/HH|hh|mm|ss|H|h|A|a/g,H=i=>String(i).padStart(2,"0"),Te=i=>{const e=Zl.exec(i);return e?{hour:Number(e[1]),minute:Number(e[2]),second:e[3]===void 0?0:Number(e[3])}:null},rt=(i,e)=>e?`${H(i.hour)}:${H(i.minute)}:${H(i.second)}`:`${H(i.hour)}:${H(i.minute)}`,st=(i,e)=>{const t=Math.max(1,Math.floor(e)||1),r=[];for(let s=0;s<i;s+=t)r.push(s);return r},Ve=i=>(i.length>0&&!i.some(e=>e.tabbable)&&(i[0].tabbable=!0),i);class Lt extends j{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.setOpen(!this.open,"trigger",e)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.stopPropagation(),this.clearValue(e,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.disabled){if(e.key==="Escape"&&this.open){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e);return}(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.setOpen(!0,"trigger",e))}}}),Object.defineProperty(this,"handleColumnsKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var P,C;if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e),(P=this.triggerElement)==null||P.focus();return}if(e.key!=="ArrowUp"&&e.key!=="ArrowDown"&&e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const t=e.target.closest(".cell"),r=t==null?void 0:t.closest(".column"),s=r==null?void 0:r.closest(".group");if(!t||!r||!s)return;e.preventDefault();const o=Array.from(r.querySelectorAll(".cell")),a=o.indexOf(t);if(e.key==="ArrowUp"||e.key==="ArrowDown"){const I=e.key==="ArrowUp"?-1:1,L=(a+I+o.length)%o.length;(C=o[L])==null||C.focus();return}const n=Array.from(s.querySelectorAll(".column")),l=n.indexOf(r),h=e.key==="ArrowLeft"?-1:1,g=n[l+h];if(!g)return;const f=g.querySelectorAll(".cell"),y=f[Math.min(a,f.length-1)];y==null||y.focus()}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e))}}),this.range=!1,this.format="HH:mm",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.open=!1,this.name="",this.placeholder="选择时间",this.startPlaceholder="开始时间",this.endPlaceholder="结束时间",this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.helperText="",this.accessibleLabel="",this.clearLabel="清空",this.confirmLabel="确定",this.amLabel="上午",this.pmLabel="下午",this.startLabel="开始",this.endLabel="结束",this.shortcuts=[]}get value(){return this._value}set value(e){this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}hasSeconds(){return this.format.includes("ss")}isHour12(){return/h/.test(this.format)&&/[Aa]/.test(this.format)}hasValue(){return Array.isArray(this.value)?this.value.some(e=>e!==""):this.value!==""}normalizeSingle(e){const t=Te(e);return t===null?"":rt(t,this.hasSeconds())}normalizeValue(e){return this.range?Array.isArray(e)?e.filter(t=>typeof t=="string").map(t=>this.normalizeSingle(t)).slice(0,2):[]:Array.isArray(e)?"":this.normalizeSingle(e)}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){(e.has("range")||e.has("format"))&&this.setInternalValue(this.value),this.disabled&&this.open&&(this.open=!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{this.renderRoot.querySelectorAll('.cell[aria-pressed="true"]').forEach(t=>{typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"nearest"})})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-time-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-time-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(this.open=e,this.dispatchEvent(new CustomEvent("super-time-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),!e&&t!=="outside"&&this.updateComplete.then(()=>{var s;return(s=this.triggerElement)==null?void 0:s.focus()}))}clearValue(e,t){this.disabled||!this.hasValue()||(this.setInternalValue(this.range?[]:""),this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e))}groupParts(e){if(!this.range)return typeof this.value=="string"&&this.value!==""?Te(this.value):null;const r=(Array.isArray(this.value)?this.value:[])[e]??"";return r===""?null:Te(r)}commitSingle(e,t){this.setInternalValue(rt(e,this.hasSeconds())),this.emitChange(t)}commitRange(e,t,r){const s=Array.isArray(this.value)?[...this.value]:[];for(;s.length<2;)s.push("");s[e]=rt(t,this.hasSeconds());let o=s.slice(0,2);o[0]!==""&&o[1]!==""&&o[0]>o[1]&&(o=[o[1],o[0]]),this.setInternalValue(o),this.emitChange(r)}pickUnit(e,t,r,s){const o=this.groupParts(e)??{hour:0,minute:0,second:0},a={...o};if(t==="hour"&&typeof r=="number")if(this.isHour12()){const n=o.hour>=12;a.hour=n?r%12+12:r%12}else a.hour=r;else t==="minute"&&typeof r=="number"?a.minute=r:t==="second"&&typeof r=="number"?a.second=r:t==="period"&&(r==="am"&&a.hour>=12&&(a.hour-=12),r==="pm"&&a.hour<12&&(a.hour+=12));if(this.range){this.commitRange(e,a,s);return}this.commitSingle(a,s)}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r);(Array.isArray(s)?s.length===0:s==="")||(this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t))}displayValue(e){const t=Te(e);if(t===null)return e;const r=t.hour%12===0?12:t.hour%12,s={HH:H(t.hour),H:String(t.hour),hh:H(r),h:String(r),mm:H(t.minute),ss:H(t.second),A:t.hour<12?"AM":"PM",a:t.hour<12?"am":"pm"};return this.format.replace(ec,o=>s[o]??o)}renderColumn(e,t,r){return v`
      <div
        class="column"
        part="column"
        role="group"
        data-unit=${t}
        @keydown=${this.handleColumnsKeydown}
      >
        ${r.map(s=>v`
            <button
              class="cell"
              part="cell"
              type="button"
              data-unit=${t}
              data-value=${String(s.key)}
              tabindex=${s.tabbable?"0":"-1"}
              aria-pressed=${s.selected?"true":"false"}
              @click=${o=>this.pickUnit(e,t,s.key,o)}
            >${s.label}</button>
          `)}
      </div>
    `}renderGroup(e,t){const r=this.groupParts(e),s=this.isHour12(),o=this.hasSeconds(),a=Ve(s?Array.from({length:12},(f,y)=>{const P=y+1,C=r!==null&&(r.hour%12===0?12:r.hour%12)===P;return{key:P,label:H(P),selected:C,tabbable:C||r===null&&P===1}}):st(24,this.hourStep).map((f,y)=>({key:f,label:H(f),selected:r!==null&&r.hour===f,tabbable:r!==null&&r.hour===f||r===null&&y===0}))),n=Ve(st(60,this.minuteStep).map((f,y)=>({key:f,label:H(f),selected:r!==null&&r.minute===f,tabbable:r!==null&&r.minute===f||r===null&&y===0}))),l=Ve(st(60,this.secondStep).map((f,y)=>({key:f,label:H(f),selected:r!==null&&r.second===f,tabbable:r!==null&&r.second===f||r===null&&y===0}))),h=r!==null&&r.hour>=12,g=Ve([{key:"am",label:this.amLabel,selected:r!==null&&!h,tabbable:r===null||!h},{key:"pm",label:this.pmLabel,selected:h,tabbable:h}]);return v`
      <div class="group" part="panel" data-group=${e}>
        ${t!==""?v`<div class="group-title" part="column-title">${t}</div>`:x}
        <div class="columns">
          ${this.renderColumn(e,"hour",a)}
          ${this.renderColumn(e,"minute",n)}
          ${o?this.renderColumn(e,"second",l):x}
          ${s?this.renderColumn(e,"period",g):x}
        </div>
      </div>
    `}renderShortcuts(){return this.shortcuts.length===0?x:v`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>v`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.clearable&&this.hasValue();return v`
      <div class="footer" part="footer">
        ${e?v`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${t=>this.clearValue(t,!0)}
            >${this.clearLabel}</button>`:x}
        <button
          class="footer-button confirm-button"
          part="confirm-button"
          type="button"
          @click=${t=>this.setOpen(!1,"confirm",t)}
        >${this.confirmLabel}</button>
      </div>
    `}renderTriggerText(){if(this.range){const t=Array.isArray(this.value)?this.value:[],r=t[0]??"",s=t[1]??"";return v`
        <span class="trigger-text ${r===""?"placeholder":""}" part="label">
          ${r===""?this.startPlaceholder:this.displayValue(r)}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${s===""?"placeholder":""}">
          ${s===""?this.endPlaceholder:this.displayValue(s)}
        </span>
      `}const e=typeof this.value=="string"?this.value:"";return v`
      <span class="trigger-text ${e===""?"placeholder":""}" part="label">
        ${e===""?this.placeholder:this.displayValue(e)}
      </span>
    `}render(){const e=this.hasValue(),t=this.clearable&&e&&!this.disabled;return v`
      <div class="control" part="control">
        <span class="prefix" part="prefix"><slot name="prefix"></slot></span>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="popup"
          aria-label=${$(this.accessibleLabel||void 0)}
          ?disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeydown}
        >
          ${this.renderTriggerText()}
        </button>
        ${t?v`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:x}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">◷</slot>
        </span>
      </div>
      ${this.helperText!==""?v`<div class="helper" part="helper">${this.helperText}</div>`:x}
      ${this.open?v`
            <div
              class="popup"
              part="popup"
              id="popup"
              role="dialog"
              aria-modal="false"
              aria-label=${this.accessibleLabel||this.placeholder}
              @keydown=${this.handlePopupKeydown}
            >
              <div class="popup-body">
                ${this.renderShortcuts()}
                <div class="groups">
                  ${this.range?v`
                        ${this.renderGroup(0,this.startLabel)}
                        ${this.renderGroup(1,this.endLabel)}
                      `:this.renderGroup(0,"")}
                </div>
              </div>
              ${this.renderFooter()}
            </div>
          `:x}
    `}}Object.defineProperty(Lt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},range:{type:Boolean,reflect:!0},format:{type:String},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},hourStep:{type:Number,attribute:"hour-step"},minuteStep:{type:Number,attribute:"minute-step"},secondStep:{type:Number,attribute:"second-step"},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},confirmLabel:{type:String,attribute:"confirm-label"},amLabel:{type:String,attribute:"am-label"},pmLabel:{type:String,attribute:"pm-label"},startLabel:{type:String,attribute:"start-label"},endLabel:{type:String,attribute:"end-label"},shortcuts:{attribute:!1}}});Object.defineProperty(Lt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:W`
    :host {
      --super-time-picker-width: 220px;
      --super-time-picker-height: 38px;
      --super-time-picker-padding-inline: 12px;
      --super-time-picker-gap: 8px;
      --super-time-picker-font-size: 15px;
      --super-time-picker-background: #fffef9;
      --super-time-picker-color: #292524;
      --super-time-picker-placeholder-color: #64748b;
      --super-time-picker-border-color: #34445f;
      --super-time-picker-hover-color: #3f9b68;
      --super-time-picker-focus-color: #356df3;
      --super-time-picker-shadow-color: #a8b3bf;
      --super-time-picker-validation-color: var(--super-time-picker-border-color);
      --super-time-picker-panel-background: #fffef9;
      --super-time-picker-cell-hover-background: #eef5ff;
      --super-time-picker-cell-selected-background: #dfeaff;
      --super-time-picker-cell-selected-color: #174ea6;
      --super-time-picker-column-height: 176px;
      --super-time-picker-z-index: 30;
      --super-time-picker-rotation: -0.16deg;

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-time-picker-width);
      max-inline-size: 100%;
      color: var(--super-time-picker-color);
      font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
      font-size: var(--super-time-picker-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-time-picker-z-index);
    }

    :host([size="large"]) {
      --super-time-picker-height: 46px;
      --super-time-picker-padding-inline: 14px;
      --super-time-picker-font-size: 17px;
    }

    :host([size="small"]) {
      --super-time-picker-height: 31px;
      --super-time-picker-padding-inline: 9px;
      --super-time-picker-font-size: 13px;
    }

    :host([validation="success"]) {
      --super-time-picker-validation-color: #23804a;
      --super-time-picker-border-color: #23804a;
      --super-time-picker-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-time-picker-validation-color: #a05f00;
      --super-time-picker-border-color: #a05f00;
      --super-time-picker-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-time-picker-validation-color: #cf3038;
      --super-time-picker-border-color: #cf3038;
      --super-time-picker-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-time-picker-validation-color: #64748b;
      --super-time-picker-border-color: #64748b;
      --super-time-picker-shadow-color: #cbd5e1;
    }

    .control {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: var(--super-time-picker-height);
      padding-inline: var(--super-time-picker-padding-inline);
      color: var(--super-time-picker-color);
      background: var(--super-time-picker-background);
      border: 1.8px solid var(--super-time-picker-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 2px 0 -1px var(--super-time-picker-shadow-color);
      cursor: pointer;
      transform: rotate(var(--super-time-picker-rotation));
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

    :host([open]) .control,
    .control:focus-within {
      border-color: var(--super-time-picker-focus-color);
      box-shadow:
        0 0 0 3px rgb(53 109 243 / 18%),
        2px 3px 0 -1px var(--super-time-picker-focus-color);
      transform: rotate(0deg);
    }

    .prefix {
      display: inline-flex;
      flex: none;
      align-items: center;
      margin-inline-end: var(--super-time-picker-gap);
      color: #526277;
      line-height: 1;
    }

    .trigger {
      display: inline-flex;
      flex: 1 1 auto;
      align-items: center;
      box-sizing: border-box;
      min-inline-size: 0;
      min-block-size: calc(var(--super-time-picker-height) - 10px);
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

    .trigger-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .placeholder {
      color: var(--super-time-picker-placeholder-color);
    }

    .range-separator {
      flex: none;
      padding-inline: 4px;
      color: var(--super-time-picker-placeholder-color);
    }

    .clear-button {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: #526277;
      font: inherit;
      font-size: 1.05em;
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear-button:hover {
      color: #174ea6;
      background: rgb(53 109 243 / 12%);
    }

    .clear-button:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .indicator {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 20px;
      margin-inline-start: 4px;
      color: #34445f;
      font-size: 1.05em;
      pointer-events: none;
      transform: rotate(-4deg);
    }

    .helper {
      margin-block-start: 6px;
      padding-inline: 4px;
      color: var(--super-time-picker-validation-color);
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
      padding: 8px;
      color: var(--super-time-picker-color);
      background: var(--super-time-picker-panel-background);
      border: 1.8px solid var(--super-time-picker-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 3px 4px 0 -1px var(--super-time-picker-shadow-color);
      transform: rotate(0.08deg);
      animation: super-time-picker-pop 130ms ease-out;
    }

    .popup-body {
      display: flex;
      align-items: stretch;
      gap: 8px;
    }

    .shortcuts {
      display: flex;
      flex: none;
      flex-direction: column;
      gap: 2px;
      padding-inline-end: 8px;
      border-inline-end: 1px dashed #cbd5e1;
    }

    .groups {
      display: flex;
      flex: 1 1 auto;
      gap: 12px;
    }

    .group {
      flex: 1 1 auto;
      min-inline-size: 0;
    }

    .group-title {
      padding-block-end: 4px;
      color: #526277;
      font-size: 0.78em;
      font-weight: 700;
      text-align: center;
      user-select: none;
    }

    .columns {
      display: flex;
      gap: 4px;
    }

    .column {
      flex: 1 1 0;
      min-inline-size: 44px;
      max-block-size: var(--super-time-picker-column-height);
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }

    .column + .column {
      border-inline-start: 1px dashed #e2e8f0;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-block-size: 28px;
      margin: 0;
      padding: 2px 4px;
      color: var(--super-time-picker-color);
      font: inherit;
      font-size: 0.88em;
      line-height: 1.2;
      text-align: center;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
      user-select: none;
      transition: background-color 100ms ease, color 100ms ease;
    }

    .cell:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .cell[aria-pressed="true"] {
      color: var(--super-time-picker-cell-selected-color);
      font-weight: 700;
      background: var(--super-time-picker-cell-selected-background);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-block-start: 8px;
      padding-block-start: 7px;
      border-top: 1px dashed #cbd5e1;
    }

    .shortcut,
    .footer-button {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      margin: 0;
      padding: 3px 9px;
      color: #16428f;
      font: inherit;
      font-size: 0.84em;
      line-height: 1.3;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius: 5px 8px 4px 7px / 7px 4px 8px 5px;
      cursor: pointer;
    }

    .shortcut {
      inline-size: 100%;
      white-space: nowrap;
    }

    .shortcut:hover,
    .footer-button:hover {
      color: #174ea6;
      background: var(--super-time-picker-cell-hover-background);
    }

    .shortcut:focus-visible,
    .footer-button:focus-visible {
      outline: 2px solid var(--super-time-picker-focus-color);
      outline-offset: 1px;
    }

    .confirm-button {
      color: #ffffff;
      background: #4b87f5;
      border: 1.5px solid #174ea6;
      box-shadow: 1px 2px 0 -1px #174ea6;
    }

    .confirm-button:hover {
      color: #ffffff;
      background: #6a9df7;
    }

    :host([disabled]) .control {
      cursor: not-allowed;
      opacity: 0.46;
      box-shadow: none;
      filter: grayscale(0.28);
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      :host(:not([disabled])) .control:hover {
        border-color: var(--super-time-picker-hover-color);
        box-shadow: 2px 3px 0 -1px #b9ddc3;
        transform: translate(-0.5px, -0.5px) rotate(0.1deg);
      }

      .cell:not([aria-pressed="true"]):hover {
        background: var(--super-time-picker-cell-hover-background);
      }
    }

    @keyframes super-time-picker-pop {
      from {
        opacity: 0;
        transform: translateY(-4px) rotate(-0.1deg) scale(0.985);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotate(0.08deg) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .cell,
      .popup {
        transition: none;
        animation: none;
      }
    }
  `});const tc="super-time-picker",rc=i=>G(tc,Lt,i),sc=[xl,_l,Cl,Ul,Fl,Yl,Xl,Ql,rc];function ic(i){sc.forEach(e=>{e(i)})}ic();export{ac as t};
