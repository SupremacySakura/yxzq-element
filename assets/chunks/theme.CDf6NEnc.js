import{d as _,o as h,c as v,r as g,n as B,a as Q,t as j,b as T,w as x,e as z,T as pr,_ as P,u as Vs,i as js,f as Ns,g as dr,h as R,j as Ye,k as A,l as De,m as y,p as b,q as H,s as U,v as Te,x as tr,y as Me,z as Ct,A as hr,B as Xi,C as Rs,D as Bs,E as Ve,F,G as q,H as Ji,I as Pt,J as C,K as Fe,L as Zi,M as Tt,N as gt,O as At,P as Fs,Q as Qi,R as Ks,S as Hs,U as Us,V as es,W as qs,X as ts,Y as rs,Z as Gs,$ as Ys,a0 as Ws,a1 as Xs}from"./framework.o5qAeLTz.js";const Js=_({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(h(),v("span",{class:B(["VPBadge",e.type])},[g(e.$slots,"default",{},()=>[Q(j(e.text),1)])],2))}}),Zs={key:0,class:"VPBackdrop"},Qs=_({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(h(),T(pr,{name:"fade"},{default:x(()=>[e.show?(h(),v("div",Zs)):z("",!0)]),_:1}))}}),eo=P(Qs,[["__scopeId","data-v-6f6fa9fb"]]),L=Vs;function to(i,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(i,e):(i(),(r=!0)&&setTimeout(()=>r=!1,e))}}function rr(i){return/^\//.test(i)?i:`/${i}`}function fr(i){const{pathname:e,search:t,hash:r,protocol:s}=new URL(i,"http://a.com");if(js(i)||i.startsWith("#")||!s.startsWith("http")||!Ns(e))return i;const{site:o}=L(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${r}`);return dr(a)}const br=R(Ye?location.hash:"");Ye&&window.addEventListener("hashchange",()=>{br.value=location.hash});function ct({removeCurrent:i=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:r,page:s,theme:o}=L(),a=A(()=>{var l,u;return{label:(l=t.value.locales[r.value])==null?void 0:l.label,link:((u=t.value.locales[r.value])==null?void 0:u.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:A(()=>Object.entries(t.value.locales).flatMap(([l,u])=>i&&a.value.label===u.label?[]:{text:u.label,link:ro(u.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(a.value.link.length-1),!t.value.cleanUrls)+br.value})),currentLang:a}}function ro(i,e,t,r){return e?i.replace(/\/$/,"")+rr(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):i}const io=i=>(H("data-v-a7a1a61a"),i=i(),U(),i),so={class:"NotFound"},oo={class:"code"},ao={class:"title"},no=io(()=>y("div",{class:"divider"},null,-1)),lo={class:"quote"},co={class:"action"},uo=["href","aria-label"],po=_({__name:"NotFound",setup(i){const{site:e,theme:t}=L(),{localeLinks:r}=ct({removeCurrent:!1}),s=R("/");return De(()=>{var a;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(s.value=((a=r.value.find(({link:n})=>n.startsWith(o)))==null?void 0:a.link)||r.value[0].link)}),(o,a)=>{var n,l,u,d,p;return h(),v("div",so,[y("p",oo,j(((n=b(t).notFound)==null?void 0:n.code)??"404"),1),y("h1",ao,j(((l=b(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),no,y("blockquote",lo,j(((u=b(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),y("div",co,[y("a",{class:"link",href:b(dr)(s.value),"aria-label":((d=b(t).notFound)==null?void 0:d.linkLabel)??"go to home"},j(((p=b(t).notFound)==null?void 0:p.linkText)??"Take me home"),9,uo)])])}}}),ho=P(po,[["__scopeId","data-v-a7a1a61a"]]);function is(i,e){if(Array.isArray(i))return vt(i);if(i==null)return[];e=rr(e);const t=Object.keys(i).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(rr(s))),r=t?i[t]:[];return Array.isArray(r)?vt(r):vt(r.items,r.base)}function fo(i){const e=[];let t=0;for(const r in i){const s=i[r];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function bo(i){const e=[];function t(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function ir(i,e){return Array.isArray(e)?e.some(t=>ir(i,t)):Te(i,e.link)?!0:e.items?ir(i,e.items):!1}function vt(i,e){return[...i].map(t=>{const r={...t},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=vt(r.items,s)),r})}function ue(){const{frontmatter:i,page:e,theme:t}=L(),r=tr("(min-width: 960px)"),s=R(!1),o=A(()=>{const E=t.value.sidebar,S=e.value.relativePath;return E?is(E,S):[]}),a=R(o.value);Me(o,(E,S)=>{JSON.stringify(E)!==JSON.stringify(S)&&(a.value=o.value)});const n=A(()=>i.value.sidebar!==!1&&a.value.length>0&&i.value.layout!=="home"),l=A(()=>u?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),u=A(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),d=A(()=>n.value&&r.value),p=A(()=>n.value?fo(a.value):[]);function m(){s.value=!0}function k(){s.value=!1}function $(){s.value?k():m()}return{isOpen:s,sidebar:a,sidebarGroups:p,hasSidebar:n,hasAside:u,leftAside:l,isSidebarEnabled:d,open:m,close:k,toggle:$}}function mo(i,e){let t;Ct(()=>{t=i.value?document.activeElement:void 0}),De(()=>{window.addEventListener("keyup",r)}),hr(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&i.value&&(e(),t==null||t.focus())}}function go(i){const{page:e}=L(),t=R(!1),r=A(()=>i.value.collapsed!=null),s=A(()=>!!i.value.link),o=R(!1),a=()=>{o.value=Te(e.value.relativePath,i.value.link)};Me([e,i,br],a),De(a);const n=A(()=>o.value?!0:i.value.items?ir(e.value.relativePath,i.value.items):!1),l=A(()=>!!(i.value.items&&i.value.items.length));Ct(()=>{t.value=!!(r.value&&i.value.collapsed)}),Xi(()=>{(o.value||n.value)&&(t.value=!1)});function u(){r.value&&(t.value=!t.value)}return{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:n,hasChildren:l,toggle:u}}function vo(){const{hasSidebar:i}=ue(),e=tr("(min-width: 960px)"),t=tr("(min-width: 1280px)");return{isAsideEnabled:A(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const sr=[];function ss(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function mr(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:xo(t),link:"#"+t.id,level:r}});return yo(e,i)}function xo(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function yo(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;i=i.filter(a=>a.level>=r&&a.level<=s),sr.length=0;for(const{element:a,link:n}of i)sr.push({element:a,link:n});const o=[];e:for(let a=0;a<i.length;a++){const n=i[a];if(a===0)o.push(n);else{for(let l=a-1;l>=0;l--){const u=i[l];if(u.level<n.level){(u.children||(u.children=[])).push(n);continue e}}o.push(n)}}return o}function ko(i,e){const{isAsideEnabled:t}=vo(),r=to(o,100);let s=null;De(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),Rs(()=>{a(location.hash)}),hr(()=>{window.removeEventListener("scroll",r)});function o(){if(!t.value)return;const n=window.scrollY,l=window.innerHeight,u=document.body.offsetHeight,d=Math.abs(n+l-u)<1,p=sr.map(({element:k,link:$})=>({link:$,top:wo(k)})).filter(({top:k})=>!Number.isNaN(k)).sort((k,$)=>k.top-$.top);if(!p.length){a(null);return}if(n<1){a(null);return}if(d){a(p[p.length-1].link);return}let m=null;for(const{link:k,top:$}of p){if($>n+Bs()+4)break;m=k}a(m)}function a(n){s&&s.classList.remove("active"),n==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(n)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function wo(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}const $o=["href","title"],zo=_({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const r=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(t,r)=>{const s=Ve("VPDocOutlineItem",!0);return h(),v("ul",{class:B(["VPDocOutlineItem",t.root?"root":"nested"])},[(h(!0),v(F,null,q(t.headers,({children:o,link:a,title:n})=>(h(),v("li",null,[y("a",{class:"outline-link",href:a,onClick:e,title:n},j(n),9,$o),o!=null&&o.length?(h(),T(s,{key:0,headers:o},null,8,["headers"])):z("",!0)]))),256))],2)}}}),os=P(zo,[["__scopeId","data-v-a2afcce7"]]),So=i=>(H("data-v-7b6871a8"),i=i(),U(),i),_o={class:"content"},Eo={class:"outline-title",role:"heading","aria-level":"2"},Co={"aria-labelledby":"doc-outline-aria-label"},Po=So(()=>y("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),To=_({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=L(),r=Ji([]);Pt(()=>{r.value=mr(e.value.outline??t.value.outline)});const s=R(),o=R();return ko(s,o),(a,n)=>(h(),v("div",{class:B(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[y("div",_o,[y("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),y("div",Eo,j(b(ss)(b(t))),1),y("nav",Co,[Po,C(os,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Ao=P(To,[["__scopeId","data-v-7b6871a8"]]),Oo={class:"VPDocAsideCarbonAds"},Lo=_({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,r)=>(h(),v("div",Oo,[C(b(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Io=i=>(H("data-v-951edd61"),i=i(),U(),i),Do={class:"VPDocAside"},Mo=Io(()=>y("div",{class:"spacer"},null,-1)),Vo=_({__name:"VPDocAside",setup(i){const{theme:e}=L();return(t,r)=>(h(),v("div",Do,[g(t.$slots,"aside-top",{},void 0,!0),g(t.$slots,"aside-outline-before",{},void 0,!0),C(Ao),g(t.$slots,"aside-outline-after",{},void 0,!0),Mo,g(t.$slots,"aside-ads-before",{},void 0,!0),b(e).carbonAds?(h(),T(Lo,{key:0,"carbon-ads":b(e).carbonAds},null,8,["carbon-ads"])):z("",!0),g(t.$slots,"aside-ads-after",{},void 0,!0),g(t.$slots,"aside-bottom",{},void 0,!0)]))}}),jo=P(Vo,[["__scopeId","data-v-951edd61"]]);function No(){const{theme:i,page:e}=L();return A(()=>{const{text:t="Edit this page",pattern:r=""}=i.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Ro(){const{page:i,theme:e,frontmatter:t}=L();return A(()=>{var l,u,d,p,m,k,$,E;const r=is(e.value.sidebar,i.value.relativePath),s=bo(r),o=s.findIndex(S=>Te(i.value.relativePath,S.link)),a=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!t.value.prev||t.value.prev===!1,n=((u=e.value.docFooter)==null?void 0:u.next)===!1&&!t.value.next||t.value.next===!1;return{prev:a?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((d=s[o-1])==null?void 0:d.docFooterText)??((p=s[o-1])==null?void 0:p.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((m=s[o-1])==null?void 0:m.link)},next:n?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((k=s[o+1])==null?void 0:k.docFooterText)??(($=s[o+1])==null?void 0:$.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((E=s[o+1])==null?void 0:E.link)}}})}const se=_({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=A(()=>e.tag??(e.href?"a":"span")),r=A(()=>e.href&&Zi.test(e.href));return(s,o)=>(h(),T(Fe(t.value),{class:B(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?b(fr)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:x(()=>[g(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Bo={class:"VPLastUpdated"},Fo=["datetime"],Ko=_({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,frontmatter:r,lang:s}=L(),o=A(()=>new Date(r.value.lastUpdated??t.value.lastUpdated)),a=A(()=>o.value.toISOString()),n=R("");return De(()=>{Ct(()=>{var l,u,d;n.value=new Intl.DateTimeFormat((u=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&u.forceLocale?s.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,u)=>{var d;return h(),v("p",Bo,[Q(j(((d=b(e).lastUpdated)==null?void 0:d.text)||b(e).lastUpdatedText||"Last updated")+": ",1),y("time",{datetime:a.value},j(n.value),9,Fo)])}}}),Ho=P(Ko,[["__scopeId","data-v-38b6dfd9"]]),Uo=i=>(H("data-v-bbe5e75c"),i=i(),U(),i),qo={key:0,class:"VPDocFooter"},Go={key:0,class:"edit-info"},Yo={key:0,class:"edit-link"},Wo=Uo(()=>y("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Xo={key:1,class:"last-updated"},Jo={key:1,class:"prev-next"},Zo={class:"pager"},Qo=["innerHTML"],ea=["innerHTML"],ta={class:"pager"},ra=["innerHTML"],ia=["innerHTML"],sa=_({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:r}=L(),s=No(),o=Ro(),a=A(()=>e.value.editLink&&r.value.editLink!==!1),n=A(()=>t.value.lastUpdated&&r.value.lastUpdated!==!1),l=A(()=>a.value||n.value||o.value.prev||o.value.next);return(u,d)=>{var p,m,k,$;return l.value?(h(),v("footer",qo,[g(u.$slots,"doc-footer-before",{},void 0,!0),a.value||n.value?(h(),v("div",Go,[a.value?(h(),v("div",Yo,[C(se,{class:"edit-link-button",href:b(s).url,"no-icon":!0},{default:x(()=>[Wo,Q(" "+j(b(s).text),1)]),_:1},8,["href"])])):z("",!0),n.value?(h(),v("div",Xo,[C(Ho)])):z("",!0)])):z("",!0),(p=b(o).prev)!=null&&p.link||(m=b(o).next)!=null&&m.link?(h(),v("nav",Jo,[y("div",Zo,[(k=b(o).prev)!=null&&k.link?(h(),T(se,{key:0,class:"pager-link prev",href:b(o).prev.link},{default:x(()=>{var E;return[y("span",{class:"desc",innerHTML:((E=b(e).docFooter)==null?void 0:E.prev)||"Previous page"},null,8,Qo),y("span",{class:"title",innerHTML:b(o).prev.text},null,8,ea)]}),_:1},8,["href"])):z("",!0)]),y("div",ta,[($=b(o).next)!=null&&$.link?(h(),T(se,{key:0,class:"pager-link next",href:b(o).next.link},{default:x(()=>{var E;return[y("span",{class:"desc",innerHTML:((E=b(e).docFooter)==null?void 0:E.next)||"Next page"},null,8,ra),y("span",{class:"title",innerHTML:b(o).next.text},null,8,ia)]}),_:1},8,["href"])):z("",!0)])])):z("",!0)])):z("",!0)}}}),oa=P(sa,[["__scopeId","data-v-bbe5e75c"]]),aa=i=>(H("data-v-5fc3206a"),i=i(),U(),i),na={class:"container"},la=aa(()=>y("div",{class:"aside-curtain"},null,-1)),ca={class:"aside-container"},ua={class:"aside-content"},pa={class:"content"},da={class:"content-container"},ha={class:"main"},fa=_({__name:"VPDoc",setup(i){const{theme:e}=L(),t=Tt(),{hasSidebar:r,hasAside:s,leftAside:o}=ue(),a=A(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(n,l)=>{const u=Ve("Content");return h(),v("div",{class:B(["VPDoc",{"has-sidebar":b(r),"has-aside":b(s)}])},[g(n.$slots,"doc-top",{},void 0,!0),y("div",na,[b(s)?(h(),v("div",{key:0,class:B(["aside",{"left-aside":b(o)}])},[la,y("div",ca,[y("div",ua,[C(jo,null,{"aside-top":x(()=>[g(n.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":x(()=>[g(n.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":x(()=>[g(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(n.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):z("",!0),y("div",pa,[y("div",da,[g(n.$slots,"doc-before",{},void 0,!0),y("main",ha,[C(u,{class:B(["vp-doc",[a.value,b(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),C(oa,null,{"doc-footer-before":x(()=>[g(n.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),g(n.$slots,"doc-after",{},void 0,!0)])])]),g(n.$slots,"doc-bottom",{},void 0,!0)],2)}}}),ba=P(fa,[["__scopeId","data-v-5fc3206a"]]),ma=_({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=A(()=>e.href&&Zi.test(e.href)),r=A(()=>e.tag||e.href?"a":"button");return(s,o)=>(h(),T(Fe(r.value),{class:B(["VPButton",[s.size,s.theme]]),href:s.href?b(fr)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:x(()=>[Q(j(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),ga=P(ma,[["__scopeId","data-v-3aa6481e"]]),va=["src","alt"],xa=_({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const r=Ve("VPImage",!0);return e.image?(h(),v(F,{key:0},[typeof e.image=="string"||"src"in e.image?(h(),v("img",gt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:b(dr)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,va)):(h(),v(F,{key:1},[C(r,gt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),C(r,gt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):z("",!0)}}}),yt=P(xa,[["__scopeId","data-v-31544fe0"]]),ya=i=>(H("data-v-5a0e971f"),i=i(),U(),i),ka={class:"container"},wa={class:"main"},$a={key:0,class:"name"},za=["innerHTML"],Sa=["innerHTML"],_a=["innerHTML"],Ea={key:0,class:"actions"},Ca={key:0,class:"image"},Pa={class:"image-container"},Ta=ya(()=>y("div",{class:"image-bg"},null,-1)),Aa=_({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=At("hero-image-slot-exists");return(t,r)=>(h(),v("div",{class:B(["VPHero",{"has-image":t.image||b(e)}])},[y("div",ka,[y("div",wa,[g(t.$slots,"home-hero-info-before",{},void 0,!0),g(t.$slots,"home-hero-info",{},()=>[t.name?(h(),v("h1",$a,[y("span",{innerHTML:t.name,class:"clip"},null,8,za)])):z("",!0),t.text?(h(),v("p",{key:1,innerHTML:t.text,class:"text"},null,8,Sa)):z("",!0),t.tagline?(h(),v("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,_a)):z("",!0)],!0),g(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(h(),v("div",Ea,[(h(!0),v(F,null,q(t.actions,s=>(h(),v("div",{key:s.link,class:"action"},[C(ga,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):z("",!0),g(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||b(e)?(h(),v("div",Ca,[y("div",Pa,[Ta,g(t.$slots,"home-hero-image",{},()=>[t.image?(h(),T(yt,{key:0,class:"image-src",image:t.image},null,8,["image"])):z("",!0)],!0)])])):z("",!0)])],2))}}),Oa=P(Aa,[["__scopeId","data-v-5a0e971f"]]),La=_({__name:"VPHomeHero",setup(i){const{frontmatter:e}=L();return(t,r)=>b(e).hero?(h(),T(Oa,{key:0,class:"VPHomeHero",name:b(e).hero.name,text:b(e).hero.text,tagline:b(e).hero.tagline,image:b(e).hero.image,actions:b(e).hero.actions},{"home-hero-info-before":x(()=>[g(t.$slots,"home-hero-info-before")]),"home-hero-info":x(()=>[g(t.$slots,"home-hero-info")]),"home-hero-info-after":x(()=>[g(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":x(()=>[g(t.$slots,"home-hero-actions-after")]),"home-hero-image":x(()=>[g(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):z("",!0)}}),Ia=i=>(H("data-v-29c05f11"),i=i(),U(),i),Da={class:"box"},Ma={key:0,class:"icon"},Va=["innerHTML"],ja=["innerHTML"],Na=["innerHTML"],Ra={key:4,class:"link-text"},Ba={class:"link-text-value"},Fa=Ia(()=>y("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Ka=_({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(h(),T(se,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:x(()=>[y("article",Da,[typeof e.icon=="object"&&e.icon.wrap?(h(),v("div",Ma,[C(yt,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(h(),T(yt,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(h(),v("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Va)):z("",!0),y("h2",{class:"title",innerHTML:e.title},null,8,ja),e.details?(h(),v("p",{key:3,class:"details",innerHTML:e.details},null,8,Na)):z("",!0),e.linkText?(h(),v("div",Ra,[y("p",Ba,[Q(j(e.linkText)+" ",1),Fa])])):z("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ha=P(Ka,[["__scopeId","data-v-29c05f11"]]),Ua={key:0,class:"VPFeatures"},qa={class:"container"},Ga={class:"items"},Ya=_({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=A(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(h(),v("div",Ua,[y("div",qa,[y("div",Ga,[(h(!0),v(F,null,q(r.features,o=>(h(),v("div",{key:o.title,class:B(["item",[t.value]])},[C(Ha,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):z("",!0)}}),Wa=P(Ya,[["__scopeId","data-v-e7779453"]]),Xa=_({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=L();return(t,r)=>b(e).features?(h(),T(Wa,{key:0,class:"VPHomeFeatures",features:b(e).features},null,8,["features"])):z("",!0)}}),Ja=_({__name:"VPHomeContent",setup(i){const{width:e}=Fs({includeScrollbar:!1});return(t,r)=>(h(),v("div",{class:"vp-doc container",style:Qi(b(e)?{"--vp-offset":`calc(50% - ${b(e)/2}px)`}:{})},[g(t.$slots,"default",{},void 0,!0)],4))}}),Za=P(Ja,[["__scopeId","data-v-cd81b872"]]),Qa={class:"VPHome"},en=_({__name:"VPHome",setup(i){const{frontmatter:e}=L();return(t,r)=>{const s=Ve("Content");return h(),v("div",Qa,[g(t.$slots,"home-hero-before",{},void 0,!0),C(La,null,{"home-hero-info-before":x(()=>[g(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),g(t.$slots,"home-hero-after",{},void 0,!0),g(t.$slots,"home-features-before",{},void 0,!0),C(Xa),g(t.$slots,"home-features-after",{},void 0,!0),b(e).markdownStyles!==!1?(h(),T(Za,{key:0},{default:x(()=>[C(s)]),_:1})):(h(),T(s,{key:1}))])}}}),tn=P(en,[["__scopeId","data-v-0d7cbeea"]]),rn={},sn={class:"VPPage"};function on(i,e){const t=Ve("Content");return h(),v("div",sn,[g(i.$slots,"page-top"),C(t),g(i.$slots,"page-bottom")])}const an=P(rn,[["render",on]]),nn=_({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=L(),{hasSidebar:r}=ue();return(s,o)=>(h(),v("div",{class:B(["VPContent",{"has-sidebar":b(r),"is-home":b(t).layout==="home"}]),id:"VPContent"},[b(e).isNotFound?g(s.$slots,"not-found",{key:0},()=>[C(ho)],!0):b(t).layout==="page"?(h(),T(an,{key:1},{"page-top":x(()=>[g(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":x(()=>[g(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):b(t).layout==="home"?(h(),T(tn,{key:2},{"home-hero-before":x(()=>[g(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":x(()=>[g(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":x(()=>[g(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":x(()=>[g(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":x(()=>[g(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):b(t).layout&&b(t).layout!=="doc"?(h(),T(Fe(b(t).layout),{key:3})):(h(),T(ba,{key:4},{"doc-top":x(()=>[g(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":x(()=>[g(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":x(()=>[g(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":x(()=>[g(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":x(()=>[g(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":x(()=>[g(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":x(()=>[g(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":x(()=>[g(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ln=P(nn,[["__scopeId","data-v-a0eadabb"]]),cn={class:"container"},un=["innerHTML"],pn=["innerHTML"],dn=_({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=ue();return(s,o)=>b(e).footer&&b(t).footer!==!1?(h(),v("footer",{key:0,class:B(["VPFooter",{"has-sidebar":b(r)}])},[y("div",cn,[b(e).footer.message?(h(),v("p",{key:0,class:"message",innerHTML:b(e).footer.message},null,8,un)):z("",!0),b(e).footer.copyright?(h(),v("p",{key:1,class:"copyright",innerHTML:b(e).footer.copyright},null,8,pn)):z("",!0)])],2)):z("",!0)}}),hn=P(dn,[["__scopeId","data-v-3181bdf6"]]);function as(){const{theme:i,frontmatter:e}=L(),t=Ji([]),r=A(()=>t.value.length>0);return Pt(()=>{t.value=mr(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:r}}const fn=i=>(H("data-v-cba91b6f"),i=i(),U(),i),bn=fn(()=>y("span",{class:"vpi-chevron-right icon"},null,-1)),mn={class:"header"},gn={class:"outline"},vn=_({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=L(),r=R(!1),s=R(0),o=R(),a=R();Ks(o,()=>{r.value=!1}),Hs("Escape",()=>{r.value=!1}),Pt(()=>{r.value=!1});function n(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(d){d.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Us(()=>{r.value=!1}))}function u(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,p)=>(h(),v("div",{class:"VPLocalNavOutlineDropdown",style:Qi({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[d.headers.length>0?(h(),v("button",{key:0,onClick:n,class:B({open:r.value})},[Q(j(b(ss)(b(t)))+" ",1),bn],2)):(h(),v("button",{key:1,onClick:u},j(b(t).returnToTopLabel||"Return to top"),1)),C(pr,{name:"flyout"},{default:x(()=>[r.value?(h(),v("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:l},[y("div",mn,[y("a",{class:"top-link",href:"#",onClick:u},j(b(t).returnToTopLabel||"Return to top"),1)]),y("div",gn,[C(os,{headers:d.headers},null,8,["headers"])])],512)):z("",!0)]),_:1})],4))}}),xn=P(vn,[["__scopeId","data-v-cba91b6f"]]),yn=i=>(H("data-v-3ed22da4"),i=i(),U(),i),kn={class:"container"},wn=["aria-expanded"],$n=yn(()=>y("span",{class:"vpi-align-left menu-icon"},null,-1)),zn={class:"menu-text"},Sn=_({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=ue(),{headers:s}=as(),{y:o}=es(),a=R(0);De(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Pt(()=>{s.value=mr(t.value.outline??e.value.outline)});const n=A(()=>s.value.length===0),l=A(()=>n.value&&!r.value),u=A(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:n.value,fixed:l.value}));return(d,p)=>b(t).layout!=="home"&&(!l.value||b(o)>=a.value)?(h(),v("div",{key:0,class:B(u.value)},[y("div",kn,[b(r)?(h(),v("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=m=>d.$emit("open-menu"))},[$n,y("span",zn,j(b(e).sidebarMenuLabel||"Menu"),1)],8,wn)):z("",!0),C(xn,{headers:b(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):z("",!0)}}),_n=P(Sn,[["__scopeId","data-v-3ed22da4"]]);function En(){const i=R(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function r(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const o=Tt();return Me(()=>o.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:r}}const Cn={},Pn={class:"VPSwitch",type:"button",role:"switch"},Tn={class:"check"},An={key:0,class:"icon"};function On(i,e){return h(),v("button",Pn,[y("span",Tn,[i.$slots.default?(h(),v("span",An,[g(i.$slots,"default",{},void 0,!0)])):z("",!0)])])}const Ln=P(Cn,[["render",On],["__scopeId","data-v-3c9bcffa"]]),ns=i=>(H("data-v-a529835a"),i=i(),U(),i),In=ns(()=>y("span",{class:"vpi-sun sun"},null,-1)),Dn=ns(()=>y("span",{class:"vpi-moon moon"},null,-1)),Mn=_({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=L(),r=At("toggle-appearance",()=>{e.value=!e.value}),s=A(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(o,a)=>(h(),T(Ln,{title:s.value,class:"VPSwitchAppearance","aria-checked":b(e),onClick:b(r)},{default:x(()=>[In,Dn]),_:1},8,["title","aria-checked","onClick"]))}}),gr=P(Mn,[["__scopeId","data-v-a529835a"]]),Vn={key:0,class:"VPNavBarAppearance"},jn=_({__name:"VPNavBarAppearance",setup(i){const{site:e}=L();return(t,r)=>b(e).appearance&&b(e).appearance!=="force-dark"?(h(),v("div",Vn,[C(gr)])):z("",!0)}}),Nn=P(jn,[["__scopeId","data-v-786f23a7"]]),vr=R();let ls=!1,Ft=0;function Rn(i){const e=R(!1);if(Ye){!ls&&Bn(),Ft++;const t=Me(vr,r=>{var s,o,a;r===i.el.value||(s=i.el.value)!=null&&s.contains(r)?(e.value=!0,(o=i.onFocus)==null||o.call(i)):(e.value=!1,(a=i.onBlur)==null||a.call(i))});hr(()=>{t(),Ft--,Ft||Fn()})}return qs(e)}function Bn(){document.addEventListener("focusin",cs),ls=!0,vr.value=document.activeElement}function Fn(){document.removeEventListener("focusin",cs)}function cs(){vr.value=document.activeElement}const Kn={class:"VPMenuLink"},Hn=_({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,r)=>(h(),v("div",Kn,[C(se,{class:B({active:b(Te)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:x(()=>[Q(j(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ot=P(Hn,[["__scopeId","data-v-1f793dae"]]),Un={class:"VPMenuGroup"},qn={key:0,class:"title"},Gn=_({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(h(),v("div",Un,[e.text?(h(),v("p",qn,j(e.text),1)):z("",!0),(h(!0),v(F,null,q(e.items,r=>(h(),v(F,null,["link"in r?(h(),T(Ot,{key:0,item:r},null,8,["item"])):z("",!0)],64))),256))]))}}),Yn=P(Gn,[["__scopeId","data-v-11001275"]]),Wn={class:"VPMenu"},Xn={key:0,class:"items"},Jn=_({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(h(),v("div",Wn,[e.items?(h(),v("div",Xn,[(h(!0),v(F,null,q(e.items,r=>(h(),v(F,{key:r.text},["link"in r?(h(),T(Ot,{key:0,item:r},null,8,["item"])):(h(),T(Yn,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):z("",!0),g(e.$slots,"default",{},void 0,!0)]))}}),Zn=P(Jn,[["__scopeId","data-v-40114911"]]),Qn=i=>(H("data-v-ca516adc"),i=i(),U(),i),el=["aria-expanded","aria-label"],tl={key:0,class:"text"},rl=["innerHTML"],il=Qn(()=>y("span",{class:"vpi-chevron-down text-icon"},null,-1)),sl={key:1,class:"vpi-more-horizontal icon"},ol={class:"menu"},al=_({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=R(!1),t=R();Rn({el:t,onBlur:r});function r(){e.value=!1}return(s,o)=>(h(),v("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[y("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[s.button||s.icon?(h(),v("span",tl,[s.icon?(h(),v("span",{key:0,class:B([s.icon,"option-icon"])},null,2)):z("",!0),s.button?(h(),v("span",{key:1,innerHTML:s.button},null,8,rl)):z("",!0),il])):(h(),v("span",sl))],8,el),y("div",ol,[C(Zn,{items:s.items},{default:x(()=>[g(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),xr=P(al,[["__scopeId","data-v-ca516adc"]]),nl=["href","aria-label","innerHTML"],ll=_({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=A(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(r,s)=>(h(),v("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,nl))}}),cl=P(ll,[["__scopeId","data-v-e5af8ed1"]]),ul={class:"VPSocialLinks"},pl=_({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(h(),v("div",ul,[(h(!0),v(F,null,q(e.links,({link:r,icon:s,ariaLabel:o})=>(h(),T(cl,{key:r,icon:s,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),yr=P(pl,[["__scopeId","data-v-2ea1f528"]]),dl={key:0,class:"group translations"},hl={class:"trans-title"},fl={key:1,class:"group"},bl={class:"item appearance"},ml={class:"label"},gl={class:"appearance-action"},vl={key:2,class:"group"},xl={class:"item social-links"},yl=_({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=L(),{localeLinks:r,currentLang:s}=ct({correspondingLink:!0}),o=A(()=>r.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,n)=>o.value?(h(),T(xr,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:x(()=>[b(r).length&&b(s).label?(h(),v("div",dl,[y("p",hl,j(b(s).label),1),(h(!0),v(F,null,q(b(r),l=>(h(),T(Ot,{key:l.link,item:l},null,8,["item"]))),128))])):z("",!0),b(e).appearance&&b(e).appearance!=="force-dark"?(h(),v("div",fl,[y("div",bl,[y("p",ml,j(b(t).darkModeSwitchLabel||"Appearance"),1),y("div",gl,[C(gr)])])])):z("",!0),b(t).socialLinks?(h(),v("div",vl,[y("div",xl,[C(yr,{class:"social-links-list",links:b(t).socialLinks},null,8,["links"])])])):z("",!0)]),_:1})):z("",!0)}}),kl=P(yl,[["__scopeId","data-v-918c0501"]]),wl=i=>(H("data-v-dbac2bdb"),i=i(),U(),i),$l=["aria-expanded"],zl=wl(()=>y("span",{class:"container"},[y("span",{class:"top"}),y("span",{class:"middle"}),y("span",{class:"bottom"})],-1)),Sl=[zl],_l=_({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(h(),v("button",{type:"button",class:B(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},Sl,10,$l))}}),El=P(_l,[["__scopeId","data-v-dbac2bdb"]]),Cl=["innerHTML"],Pl=_({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,r)=>(h(),T(se,{class:B({VPNavBarMenuLink:!0,active:b(Te)(b(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:x(()=>[y("span",{innerHTML:t.item.text},null,8,Cl)]),_:1},8,["class","href","target","rel"]))}}),Tl=P(Pl,[["__scopeId","data-v-1513c207"]]),Al=_({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=L(),r=o=>"link"in o?Te(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),s=A(()=>r(e.item));return(o,a)=>(h(),T(xr,{class:B({VPNavBarMenuGroup:!0,active:b(Te)(b(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Ol=i=>(H("data-v-5a2822ec"),i=i(),U(),i),Ll={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Il=Ol(()=>y("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Dl=_({__name:"VPNavBarMenu",setup(i){const{theme:e}=L();return(t,r)=>b(e).nav?(h(),v("nav",Ll,[Il,(h(!0),v(F,null,q(b(e).nav,s=>(h(),v(F,{key:s.text},["link"in s?(h(),T(Tl,{key:0,item:s},null,8,["item"])):(h(),T(Al,{key:1,item:s},null,8,["item"]))],64))),128))])):z("",!0)}}),Ml=P(Dl,[["__scopeId","data-v-5a2822ec"]]);function Vl(i){const{localeIndex:e,theme:t}=L();function r(s){var $,E,S;const o=s.split("."),a=($=t.value.search)==null?void 0:$.options,n=a&&typeof a=="object",l=n&&((S=(E=a.locales)==null?void 0:E[e.value])==null?void 0:S.translations)||null,u=n&&a.translations||null;let d=l,p=u,m=i;const k=o.pop();for(const I of o){let V=null;const N=m==null?void 0:m[I];N&&(V=m=N);const K=p==null?void 0:p[I];K&&(V=p=K);const G=d==null?void 0:d[I];G&&(V=d=G),N||(m=V),K||(p=V),G||(d=V)}return(d==null?void 0:d[k])??(p==null?void 0:p[k])??(m==null?void 0:m[k])??""}return r}const jl=["aria-label"],Nl={class:"DocSearch-Button-Container"},Rl=y("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Bl={class:"DocSearch-Button-Placeholder"},Fl=y("span",{class:"DocSearch-Button-Keys"},[y("kbd",{class:"DocSearch-Button-Key"}),y("kbd",{class:"DocSearch-Button-Key"},"K")],-1),gi=_({__name:"VPNavBarSearchButton",setup(i){const t=Vl({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(h(),v("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":b(t)("button.buttonAriaLabel")},[y("span",Nl,[Rl,y("span",Bl,j(b(t)("button.buttonText")),1)]),Fl],8,jl))}}),Kl={class:"VPNavBarSearch"},Hl={id:"local-search"},Ul={key:1,id:"docsearch"},ql=_({__name:"VPNavBarSearch",setup(i){const e=()=>null,t=()=>null,{theme:r}=L(),s=R(!1),o=R(!1);De(()=>{});function a(){s.value||(s.value=!0,setTimeout(n,16))}function n(){const d=new Event("keydown");d.key="k",d.metaKey=!0,window.dispatchEvent(d),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||n()},16)}const l=R(!1),u="";return(d,p)=>{var m;return h(),v("div",Kl,[b(u)==="local"?(h(),v(F,{key:0},[l.value?(h(),T(b(e),{key:0,onClose:p[0]||(p[0]=k=>l.value=!1)})):z("",!0),y("div",Hl,[C(gi,{onClick:p[1]||(p[1]=k=>l.value=!0)})])],64)):b(u)==="algolia"?(h(),v(F,{key:1},[s.value?(h(),T(b(t),{key:0,algolia:((m=b(r).search)==null?void 0:m.options)??b(r).algolia,onVnodeBeforeMount:p[2]||(p[2]=k=>o.value=!0)},null,8,["algolia"])):z("",!0),o.value?z("",!0):(h(),v("div",Ul,[C(gi,{onClick:a})]))],64)):z("",!0)])}}}),Gl=_({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=L();return(t,r)=>b(e).socialLinks?(h(),T(yr,{key:0,class:"VPNavBarSocialLinks",links:b(e).socialLinks},null,8,["links"])):z("",!0)}}),Yl=P(Gl,[["__scopeId","data-v-8aed4598"]]),Wl=["href","rel","target"],Xl={key:1},Jl={key:2},Zl=_({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=L(),{hasSidebar:r}=ue(),{currentLang:s}=ct(),o=A(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),a=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),n=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,u)=>(h(),v("div",{class:B(["VPNavBarTitle",{"has-sidebar":b(r)}])},[y("a",{class:"title",href:o.value??b(fr)(b(s).link),rel:a.value,target:n.value},[g(l.$slots,"nav-bar-title-before",{},void 0,!0),b(t).logo?(h(),T(yt,{key:0,class:"logo",image:b(t).logo},null,8,["image"])):z("",!0),b(t).siteTitle?(h(),v("span",Xl,j(b(t).siteTitle),1)):b(t).siteTitle===void 0?(h(),v("span",Jl,j(b(e).title),1)):z("",!0),g(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Wl)],2))}}),Ql=P(Zl,[["__scopeId","data-v-5598953a"]]),ec={class:"items"},tc={class:"title"},rc=_({__name:"VPNavBarTranslations",setup(i){const{theme:e}=L(),{localeLinks:t,currentLang:r}=ct({correspondingLink:!0});return(s,o)=>b(t).length&&b(r).label?(h(),T(xr,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:b(e).langMenuLabel||"Change language"},{default:x(()=>[y("div",ec,[y("p",tc,j(b(r).label),1),(h(!0),v(F,null,q(b(t),a=>(h(),T(Ot,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):z("",!0)}}),ic=P(rc,[["__scopeId","data-v-aaab09ea"]]),sc=i=>(H("data-v-cd0bf013"),i=i(),U(),i),oc={class:"wrapper"},ac={class:"container"},nc={class:"title"},lc={class:"content"},cc={class:"content-body"},uc=sc(()=>y("div",{class:"divider"},[y("div",{class:"divider-line"})],-1)),pc=_({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const{y:e}=es(),{hasSidebar:t}=ue(),{hasLocalNav:r}=as(),{frontmatter:s}=L(),o=R({});return Xi(()=>{o.value={"has-sidebar":t.value,"has-local-nav":r.value,top:s.value.layout==="home"&&e.value===0}}),(a,n)=>(h(),v("div",{class:B(["VPNavBar",o.value])},[y("div",oc,[y("div",ac,[y("div",nc,[C(Ql,null,{"nav-bar-title-before":x(()=>[g(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),y("div",lc,[y("div",cc,[g(a.$slots,"nav-bar-content-before",{},void 0,!0),C(ql,{class:"search"}),C(Ml,{class:"menu"}),C(ic,{class:"translations"}),C(Nn,{class:"appearance"}),C(Yl,{class:"social-links"}),C(kl,{class:"extra"}),g(a.$slots,"nav-bar-content-after",{},void 0,!0),C(El,{class:"hamburger",active:a.isScreenOpen,onClick:n[0]||(n[0]=l=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),uc],2))}}),dc=P(pc,[["__scopeId","data-v-cd0bf013"]]),hc={key:0,class:"VPNavScreenAppearance"},fc={class:"text"},bc=_({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=L();return(r,s)=>b(e).appearance&&b(e).appearance!=="force-dark"?(h(),v("div",hc,[y("p",fc,j(b(t).darkModeSwitchLabel||"Appearance"),1),C(gr)])):z("",!0)}}),mc=P(bc,[["__scopeId","data-v-2ed7559f"]]),gc=_({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=At("close-screen");return(t,r)=>(h(),T(se,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:b(e)},{default:x(()=>[Q(j(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),vc=P(gc,[["__scopeId","data-v-c303e757"]]),xc=_({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=At("close-screen");return(t,r)=>(h(),T(se,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:b(e)},{default:x(()=>[Q(j(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),us=P(xc,[["__scopeId","data-v-4bd09630"]]),yc={class:"VPNavScreenMenuGroupSection"},kc={key:0,class:"title"},wc=_({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(h(),v("div",yc,[e.text?(h(),v("p",kc,j(e.text),1)):z("",!0),(h(!0),v(F,null,q(e.items,r=>(h(),T(us,{key:r.text,item:r},null,8,["item"]))),128))]))}}),$c=P(wc,[["__scopeId","data-v-ca3d4e61"]]),zc=i=>(H("data-v-0a808fc4"),i=i(),U(),i),Sc=["aria-controls","aria-expanded"],_c=["innerHTML"],Ec=zc(()=>y("span",{class:"vpi-plus button-icon"},null,-1)),Cc=["id"],Pc={key:1,class:"group"},Tc=_({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=R(!1),r=A(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,a)=>(h(),v("div",{class:B(["VPNavScreenMenuGroup",{open:t.value}])},[y("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:s},[y("span",{class:"button-text",innerHTML:o.text},null,8,_c),Ec],8,Sc),y("div",{id:r.value,class:"items"},[(h(!0),v(F,null,q(o.items,n=>(h(),v(F,{key:n.text},["link"in n?(h(),v("div",{key:n.text,class:"item"},[C(us,{item:n},null,8,["item"])])):(h(),v("div",Pc,[C($c,{text:n.text,items:n.items},null,8,["text","items"])]))],64))),128))],8,Cc)],2))}}),Ac=P(Tc,[["__scopeId","data-v-0a808fc4"]]),Oc={key:0,class:"VPNavScreenMenu"},Lc=_({__name:"VPNavScreenMenu",setup(i){const{theme:e}=L();return(t,r)=>b(e).nav?(h(),v("nav",Oc,[(h(!0),v(F,null,q(b(e).nav,s=>(h(),v(F,{key:s.text},["link"in s?(h(),T(vc,{key:0,item:s},null,8,["item"])):(h(),T(Ac,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):z("",!0)}}),Ic=_({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=L();return(t,r)=>b(e).socialLinks?(h(),T(yr,{key:0,class:"VPNavScreenSocialLinks",links:b(e).socialLinks},null,8,["links"])):z("",!0)}}),ps=i=>(H("data-v-46ce0713"),i=i(),U(),i),Dc=ps(()=>y("span",{class:"vpi-languages icon lang"},null,-1)),Mc=ps(()=>y("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Vc={class:"list"},jc=_({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=ct({correspondingLink:!0}),r=R(!1);function s(){r.value=!r.value}return(o,a)=>b(e).length&&b(t).label?(h(),v("div",{key:0,class:B(["VPNavScreenTranslations",{open:r.value}])},[y("button",{class:"title",onClick:s},[Dc,Q(" "+j(b(t).label)+" ",1),Mc]),y("ul",Vc,[(h(!0),v(F,null,q(b(e),n=>(h(),v("li",{key:n.link,class:"item"},[C(se,{class:"link",href:n.link},{default:x(()=>[Q(j(n.text),1)]),_:2},1032,["href"])]))),128))])],2)):z("",!0)}}),Nc=P(jc,[["__scopeId","data-v-46ce0713"]]),Rc={class:"container"},Bc=_({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=R(null),t=ts(Ye?document.body:null);return(r,s)=>(h(),T(pr,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:x(()=>[r.open?(h(),v("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[y("div",Rc,[g(r.$slots,"nav-screen-content-before",{},void 0,!0),C(Lc,{class:"menu"}),C(Nc,{class:"translations"}),C(mc,{class:"appearance"}),C(Ic,{class:"social-links"}),g(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):z("",!0)]),_:3}))}}),Fc=P(Bc,[["__scopeId","data-v-a1d80ed4"]]),Kc={key:0,class:"VPNav"},Hc=_({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=En(),{frontmatter:s}=L(),o=A(()=>s.value.navbar!==!1);return rs("close-screen",t),Ct(()=>{Ye&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,n)=>o.value?(h(),v("header",Kc,[C(dc,{"is-screen-open":b(e),onToggleScreen:b(r)},{"nav-bar-title-before":x(()=>[g(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":x(()=>[g(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":x(()=>[g(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),C(Fc,{open:b(e)},{"nav-screen-content-before":x(()=>[g(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":x(()=>[g(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):z("",!0)}}),Uc=P(Hc,[["__scopeId","data-v-08aa4208"]]),ds=i=>(H("data-v-601fff8e"),i=i(),U(),i),qc=["role","tabindex"],Gc=ds(()=>y("div",{class:"indicator"},null,-1)),Yc=ds(()=>y("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Wc=[Yc],Xc={key:1,class:"items"},Jc=_({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:a,hasChildren:n,toggle:l}=go(A(()=>e.item)),u=A(()=>n.value?"section":"div"),d=A(()=>s.value?"a":"div"),p=A(()=>n.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),m=A(()=>s.value?void 0:"button"),k=A(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":a.value}]);function $(S){"key"in S&&S.key!=="Enter"||!e.item.link&&l()}function E(){e.item.link&&l()}return(S,I)=>{const V=Ve("VPSidebarItem",!0);return h(),T(Fe(u.value),{class:B(["VPSidebarItem",k.value])},{default:x(()=>[S.item.text?(h(),v("div",gt({key:0,class:"item",role:m.value},Ys(S.item.items?{click:$,keydown:$}:{},!0),{tabindex:S.item.items&&0}),[Gc,S.item.link?(h(),T(se,{key:0,tag:d.value,class:"link",href:S.item.link,rel:S.item.rel,target:S.item.target},{default:x(()=>[(h(),T(Fe(p.value),{class:"text",innerHTML:S.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(h(),T(Fe(p.value),{key:1,class:"text",innerHTML:S.item.text},null,8,["innerHTML"])),S.item.collapsed!=null?(h(),v("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:E,onKeydown:Gs(E,["enter"]),tabindex:"0"},Wc,32)):z("",!0)],16,qc)):z("",!0),S.item.items&&S.item.items.length?(h(),v("div",Xc,[S.depth<5?(h(!0),v(F,{key:0},q(S.item.items,N=>(h(),T(V,{key:N.text,item:N,depth:S.depth+1},null,8,["item","depth"]))),128)):z("",!0)])):z("",!0)]),_:1},8,["class"])}}}),Zc=P(Jc,[["__scopeId","data-v-601fff8e"]]),hs=i=>(H("data-v-ba982e17"),i=i(),U(),i),Qc=hs(()=>y("div",{class:"curtain"},null,-1)),eu={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},tu=hs(()=>y("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ru=_({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=ue(),r=i,s=R(null),o=ts(Ye?document.body:null);return Me([r,s],()=>{var a;r.open?(o.value=!0,(a=s.value)==null||a.focus()):o.value=!1},{immediate:!0,flush:"post"}),(a,n)=>b(t)?(h(),v("aside",{key:0,class:B(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:s,onClick:n[0]||(n[0]=Ws(()=>{},["stop"]))},[Qc,y("nav",eu,[tu,g(a.$slots,"sidebar-nav-before",{},void 0,!0),(h(!0),v(F,null,q(b(e),l=>(h(),v("div",{key:l.text,class:"group"},[C(Zc,{item:l,depth:0},null,8,["item"])]))),128)),g(a.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):z("",!0)}}),iu=P(ru,[["__scopeId","data-v-ba982e17"]]),su=_({__name:"VPSkipLink",setup(i){const e=Tt(),t=R();Me(()=>e.path,()=>t.value.focus());function r({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const a=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",a)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",a),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(h(),v(F,null,[y("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),y("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),ou=P(su,[["__scopeId","data-v-b79a1e83"]]),au=_({__name:"Layout",setup(i){const{isOpen:e,open:t,close:r}=ue(),s=Tt();Me(()=>s.path,r),mo(e,r);const{frontmatter:o}=L(),a=Xs(),n=A(()=>!!a["home-hero-image"]);return rs("hero-image-slot-exists",n),(l,u)=>{const d=Ve("Content");return b(o).layout!==!1?(h(),v("div",{key:0,class:B(["Layout",b(o).pageClass])},[g(l.$slots,"layout-top",{},void 0,!0),C(ou),C(eo,{class:"backdrop",show:b(e),onClick:b(r)},null,8,["show","onClick"]),C(Uc,null,{"nav-bar-title-before":x(()=>[g(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":x(()=>[g(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":x(()=>[g(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":x(()=>[g(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":x(()=>[g(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),C(_n,{open:b(e),onOpenMenu:b(t)},null,8,["open","onOpenMenu"]),C(iu,{open:b(e)},{"sidebar-nav-before":x(()=>[g(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":x(()=>[g(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),C(ln,null,{"page-top":x(()=>[g(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":x(()=>[g(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":x(()=>[g(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":x(()=>[g(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":x(()=>[g(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":x(()=>[g(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":x(()=>[g(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":x(()=>[g(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":x(()=>[g(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":x(()=>[g(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":x(()=>[g(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":x(()=>[g(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":x(()=>[g(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":x(()=>[g(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":x(()=>[g(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":x(()=>[g(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),C(hn),g(l.$slots,"layout-bottom",{},void 0,!0)],2)):(h(),T(d,{key:1}))}}}),nu=P(au,[["__scopeId","data-v-1333ba00"]]),Mh={Layout:nu,enhanceApp:({app:i})=>{i.component("Badge",Js)}},lu=()=>typeof customElements>"u"?void 0:customElements;function D(i,e,t=lu()){if(!t)return e;const r=t.get(i);return r||(t.define(i,e),e)}const cu=["a[href]","area[href]","button:not([disabled])","input:not([disabled]):not([type='hidden'])","select:not([disabled])","textarea:not([disabled])","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])","[tabindex]:not([tabindex='-1'])"].join(","),uu=i=>{if(i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")return!1;const e=typeof getComputedStyle>"u"?null:getComputedStyle(i);if(e&&(e.display==="none"||e.visibility==="hidden"))return!1;for(let t=i.parentElement;t;t=t.parentElement){if(t.hasAttribute("hidden")||t.getAttribute("aria-hidden")==="true")return!1;const r=typeof getComputedStyle>"u"?null:getComputedStyle(t);if(r&&(r.display==="none"||r.visibility==="hidden"))return!1}return!0};function Ue(i){return Array.from(i.querySelectorAll(cu)).filter(e=>!e.hasAttribute("disabled")&&uu(e))}function kr(i,e={}){let t=!1,r=null;const s=n=>{if(n.key!=="Tab")return;const l=Ue(i);if(l.length===0){n.preventDefault();return}const u=l[0],d=l[l.length-1],p=document.activeElement;if(!n.shiftKey&&(p===d||!i.contains(p))){n.preventDefault(),u.focus();return}n.shiftKey&&(p===u||!i.contains(p))&&(n.preventDefault(),d.focus())};return{activate:()=>{if(t)return;t=!0,r=e.returnFocus??document.activeElement,document.addEventListener("keydown",s,!0),(e.initialFocus??Ue(i)[0]??i).focus()},deactivate:()=>{var n;t&&(t=!1,document.removeEventListener("keydown",s,!0),(n=r==null?void 0:r.focus)==null||n.call(r),r=null)},isActive:()=>t}}let Je=0,vi="",xi="";function wr(){const i=typeof document>"u"?void 0:document.body;if(!i)return()=>{};Je===0&&(vi=i.style.overflow,xi=document.documentElement.style.overflow,i.style.overflow="hidden",document.documentElement.style.overflow="hidden",i.setAttribute("data-super-scroll-lock","")),Je+=1;let e=!1;return()=>{e||(e=!0,Je=Math.max(0,Je-1),!(Je>0)&&(i.style.overflow=vi,document.documentElement.style.overflow=xi,i.removeAttribute("data-super-scroll-lock")))}}function $r(i={}){const{color:e="rgb(120 113 100 / 6%)",opacity:t=1,size:r="6px 6px"}=i;return["pointer-events: none",`opacity: ${t}`,`background-size: ${r}`,`background-image: radial-gradient(${e} 1px, transparent 1px), radial-gradient(${e} 1px, transparent 1px)`,"background-position: 0 0, 3px 3px"].join("; ")}function je(i={}){const{color:e="rgb(23 78 166 / 28%)",offsetX:t=2,offsetY:r=3,blur:s=0}=i;return`inset 0 0 0 1px rgb(255 255 255 / 24%), ${t}px ${r}px ${s}px -1px ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,zr=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Sr=Symbol(),yi=new WeakMap;let fs=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(zr&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=yi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&yi.set(t,e))}return e}toString(){return this.cssText}};const ee=i=>new fs(typeof i=="string"?i:i+"",void 0,Sr),M=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new fs(t,i,Sr)},pu=(i,e)=>{if(zr)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=xt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},ki=zr?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ee(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:du,defineProperty:hu,getOwnPropertyDescriptor:fu,getOwnPropertyNames:bu,getOwnPropertySymbols:mu,getPrototypeOf:gu}=Object,ve=globalThis,wi=ve.trustedTypes,vu=wi?wi.emptyScript:"",Kt=ve.reactiveElementPolyfillSupport,et=(i,e)=>i,or={toAttribute(i,e){switch(e){case Boolean:i=i?vu:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},bs=(i,e)=>!du(i,e),$i={attribute:!0,type:String,converter:or,reflect:!1,useDefault:!1,hasChanged:bs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ve.litPropertyMetadata??(ve.litPropertyMetadata=new WeakMap);let Re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$i){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&hu(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=fu(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const n=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$i}static _$Ei(){if(this.hasOwnProperty(et("elementProperties")))return;const e=gu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(et("properties"))){const t=this.properties,r=[...bu(t),...mu(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(ki(s))}else e!==void 0&&t.push(ki(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var o;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:or).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var o,a;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:or;this._$Em=s;const u=l.fromAttribute(t,n.type);this[s]=u??((a=this._$Ej)==null?void 0:a.get(s))??u,this._$Em=null}}requestUpdate(e,t,r,s=!1,o){var a;if(e!==void 0){const n=this.constructor;if(s===!1&&(o=this[e]),r??(r=n.getPropertyOptions(e)),!((r.hasChanged??bs)(o,t)||r.useDefault&&r.reflect&&o===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},Re[et("elementProperties")]=new Map,Re[et("finalized")]=new Map,Kt==null||Kt({ReactiveElement:Re}),(ve.reactiveElementVersions??(ve.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,zi=i=>i,kt=tt.trustedTypes,Si=kt?kt.createPolicy("lit-html",{createHTML:i=>i}):void 0,ms="$lit$",be=`lit$${Math.random().toFixed(9).slice(2)}$`,gs="?"+be,xu=`<${gs}>`,Ae=document,st=()=>Ae.createComment(""),ot=i=>i===null||typeof i!="object"&&typeof i!="function",_r=Array.isArray,yu=i=>_r(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ht=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_i=/-->/g,Ei=/>/g,$e=RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,Pi=/"/g,vs=/^(?:script|style|textarea|title)$/i,ku=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),c=ku(1),Z=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ti=new WeakMap,Ee=Ae.createTreeWalker(Ae,129);function xs(i,e){if(!_r(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Si!==void 0?Si.createHTML(e):e}const wu=(i,e)=>{const t=i.length-1,r=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=Ze;for(let n=0;n<t;n++){const l=i[n];let u,d,p=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===Ze?d[1]==="!--"?a=_i:d[1]!==void 0?a=Ei:d[2]!==void 0?(vs.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=$e):d[3]!==void 0&&(a=$e):a===$e?d[0]===">"?(a=s??Ze,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,u=d[1],a=d[3]===void 0?$e:d[3]==='"'?Pi:Ci):a===Pi||a===Ci?a=$e:a===_i||a===Ei?a=Ze:(a=$e,s=void 0);const k=a===$e&&i[n+1].startsWith("/>")?" ":"";o+=a===Ze?l+xu:p>=0?(r.push(u),l.slice(0,p)+ms+l.slice(p)+be+k):l+be+(p===-2?n:k)}return[xs(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class at{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,a=0;const n=e.length-1,l=this.parts,[u,d]=wu(e,t);if(this.el=at.createElement(u,r),Ee.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Ee.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(ms)){const m=d[a++],k=s.getAttribute(p).split(be),$=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:$[2],strings:k,ctor:$[1]==="."?zu:$[1]==="?"?Su:$[1]==="@"?_u:Lt}),s.removeAttribute(p)}else p.startsWith(be)&&(l.push({type:6,index:o}),s.removeAttribute(p));if(vs.test(s.tagName)){const p=s.textContent.split(be),m=p.length-1;if(m>0){s.textContent=kt?kt.emptyScript:"";for(let k=0;k<m;k++)s.append(p[k],st()),Ee.nextNode(),l.push({type:2,index:++o});s.append(p[m],st())}}}else if(s.nodeType===8)if(s.data===gs)l.push({type:2,index:o});else{let p=-1;for(;(p=s.data.indexOf(be,p+1))!==-1;)l.push({type:7,index:o}),p+=be.length-1}o++}}static createElement(e,t){const r=Ae.createElement("template");return r.innerHTML=e,r}}function qe(i,e,t=i,r){var a,n;if(e===Z)return e;let s=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const o=ot(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=qe(i,s._$AS(i,e.values),s,r)),e}class $u{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??Ae).importNode(t,!0);Ee.currentNode=s;let o=Ee.nextNode(),a=0,n=0,l=r[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new ut(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Eu(o,this,e)),this._$AV.push(u),l=r[++n]}a!==(l==null?void 0:l.index)&&(o=Ee.nextNode(),a++)}return Ee.currentNode=Ae,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ut{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qe(this,e,t),ot(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&ot(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=at.createElement(xs(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const a=new $u(s,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=Ti.get(e.strings);return t===void 0&&Ti.set(e.strings,t=new at(e)),t}k(e){_r(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new ut(this.O(st()),this.O(st()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const s=zi(e).nextSibling;zi(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,s){const o=this.strings;let a=!1;if(o===void 0)e=qe(this,e,t,0),a=!ot(e)||e!==this._$AH&&e!==Z,a&&(this._$AH=e);else{const n=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=qe(this,n[r+l],t,l),u===Z&&(u=this._$AH[l]),a||(a=!ot(u)||u!==this._$AH[l]),u===f?e=f:e!==f&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}a&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zu extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Su extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class _u extends Lt{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=qe(this,e,t,0)??f)===Z)return;const r=this._$AH,s=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==f&&(r===f||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}}const Ut=tt.litHtmlPolyfillSupport;Ut==null||Ut(at,ut),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.3");const Cu=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new ut(e.insertBefore(st(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=globalThis;let O=class extends Re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Z}};var Wi;O._$litElement$=!0,O.finalized=!0,(Wi=Ce.litElementHydrateSupport)==null||Wi.call(Ce,{LitElement:O});const qt=Ce.litElementPolyfillSupport;qt==null||qt({LitElement:O});(Ce.litElementVersions??(Ce.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=i=>i??f;class Er extends O{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:c`<slot></slot>`;return c`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${w(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?c`<span class="spinner" part="spinner" aria-hidden="true"></span>`:c`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?f:c`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(Er,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Er,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-button-height: 38px;
      --super-button-padding-inline: 17px;
      --super-button-gap: 7px;
      --super-button-font-size: 15px;
      --super-button-font-weight: 700;
      --super-button-background: #4b87f5;
      --super-button-background-hover: #6a9df7;
      --super-button-background-active: #3272e8;
      --super-button-color: var(--super-text-color-inverse, #ffffff);
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
      --super-button-color: var(--super-text-color-inverse, #ffffff);
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
      --super-button-color: var(--super-text-color-inverse, #ffffff);
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
  `});const Pu="super-button",Tu=i=>D(Pu,Er,i);class Cr extends O{constructor(){super(),Object.defineProperty(this,"handleImageError",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.imageFailed=!0}}),this.src="",this.alt="",this.size="medium",this.shape="circle",this.icon="人",this.fallback="",this.imageFailed=!1}willUpdate(e){e.has("src")&&(this.imageFailed=!1)}render(){const e=this.src!==""&&!this.imageFailed,t=this.imageFailed?this.fallback||this.icon:this.icon;return c`
      <span class="avatar" part="avatar">
        ${e?c`
              <img
                class="image"
                part="image"
                src=${this.src}
                alt=${this.alt}
                @error=${this.handleImageError}
              />
            `:c`
              <span
                class="fallback"
                part="fallback"
                role=${w(this.alt?"img":void 0)}
                aria-label=${w(this.alt||void 0)}
              >
                <slot>${t}</slot>
              </span>
            `}
      </span>
    `}}Object.defineProperty(Cr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},icon:{type:String,reflect:!0},fallback:{type:String,reflect:!0},imageFailed:{state:!0}}});Object.defineProperty(Cr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-avatar-size: 40px;
      --super-avatar-font-size: 16px;
      --super-avatar-border-width: var(--super-sketch-width, 2px);
      --super-avatar-color: var(--super-text-color-regular, #4a4441);
      --super-avatar-background: var(--super-background-color-soft, #f7f4ec);
      --super-avatar-border-color: var(--super-border-color-light, #b6ada6);
      --super-avatar-shadow-color: rgb(41 37 36 / 18%);
      --super-avatar-radius: 49% 51% 48% 52% / 52% 48% 52% 48%;
      --super-avatar-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-avatar-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-avatar-size: 52px;
      --super-avatar-font-size: 20px;
      --super-avatar-border-width: 2.5px;
    }

    :host([size="small"]) {
      --super-avatar-size: 28px;
      --super-avatar-font-size: 12px;
      --super-avatar-border-width: 1.5px;
    }

    :host([shape="square"]) {
      --super-avatar-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 3px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) - 1px);
    }

    .avatar {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-avatar-size);
      block-size: var(--super-avatar-size);
      overflow: hidden;
      background: var(--super-avatar-background);
      border: var(--super-avatar-border-width) solid var(--super-avatar-border-color);
      border-radius: var(--super-avatar-radius);
      box-shadow: ${ee(je({color:"var(--super-avatar-shadow-color)",offsetX:1,offsetY:2}))};
      transform: rotate(var(--super-avatar-rotation));
    }

    .avatar::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.1;
      pointer-events: none;
    }

    .image {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }

    .fallback {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: 100%;
      padding: 2px;
      overflow: hidden;
      color: inherit;
      font-size: var(--super-avatar-font-size);
      font-weight: 700;
      line-height: 1;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    slot {
      display: contents;
    }
  `});const Au="super-avatar",Ou=i=>D(Au,Cr,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pr=i=>(...e)=>({_$litDirective$:i,values:e});let Tr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=i=>i.strings===void 0,Lu={},Iu=(i,e=Lu)=>i._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=Pr(class extends Tr{constructor(i){if(super(i),i.type!==fe.PROPERTY&&i.type!==fe.ATTRIBUTE&&i.type!==fe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ys(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===Z||e===f)return e;const t=i.element,r=i.name;if(i.type===fe.PROPERTY){if(e===t[r])return Z}else if(i.type===fe.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return Z}else if(i.type===fe.ATTRIBUTE&&t.getAttribute(r)===e+"")return Z;return Iu(i),e}}),wt=Math.min,Pe=Math.max,$t=Math.round,ht=Math.floor,le=i=>({x:i,y:i}),Du={left:"right",right:"left",bottom:"top",top:"bottom"};function Mu(i,e,t){return Pe(i,wt(e,t))}function It(i,e){return typeof i=="function"?i(e):i}function Ge(i){return i.split("-")[0]}function Dt(i){return i.split("-")[1]}function ks(i){return i==="x"?"y":"x"}function ws(i){return i==="y"?"height":"width"}function me(i){const e=i[0];return e==="t"||e==="b"?"y":"x"}function $s(i){return ks(me(i))}function Vu(i,e,t){t===void 0&&(t=!1);const r=Dt(i),s=$s(i),o=ws(s);let a=s==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=zt(a)),[a,zt(a)]}function ju(i){const e=zt(i);return[ar(i),e,ar(e)]}function ar(i){return i.includes("start")?i.replace("start","end"):i.replace("end","start")}const Ai=["left","right"],Oi=["right","left"],Nu=["top","bottom"],Ru=["bottom","top"];function Bu(i,e,t){switch(i){case"top":case"bottom":return t?e?Oi:Ai:e?Ai:Oi;case"left":case"right":return e?Nu:Ru;default:return[]}}function Fu(i,e,t,r){const s=Dt(i);let o=Bu(Ge(i),t==="start",r);return s&&(o=o.map(a=>a+"-"+s),e&&(o=o.concat(o.map(ar)))),o}function zt(i){const e=Ge(i);return Du[e]+i.slice(e.length)}function Ku(i){var e,t,r,s;return{top:(e=i.top)!=null?e:0,right:(t=i.right)!=null?t:0,bottom:(r=i.bottom)!=null?r:0,left:(s=i.left)!=null?s:0}}function Hu(i){return typeof i!="number"?Ku(i):{top:i,right:i,bottom:i,left:i}}function St(i){const{x:e,y:t,width:r,height:s}=i;return{width:r,height:s,top:t,left:e,right:e+r,bottom:t+s,x:e,y:t}}function Li(i,e,t){let{reference:r,floating:s}=i;const o=me(e),a=$s(e),n=ws(a),l=Ge(e),u=o==="y",d=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,m=r[n]/2-s[n]/2;let k;switch(l){case"top":k={x:d,y:r.y-s.height};break;case"bottom":k={x:d,y:r.y+r.height};break;case"right":k={x:r.x+r.width,y:p};break;case"left":k={x:r.x-s.width,y:p};break;default:k={x:r.x,y:r.y}}const $=Dt(e);return $&&(k[a]+=m*($==="end"?1:-1)*(t&&u?-1:1)),k}async function Uu(i,e){var t;e===void 0&&(e={});const{x:r,y:s,platform:o,rects:a,elements:n,strategy:l}=i,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:k=0}=It(e,i),$=Hu(k),S=n[m?p==="floating"?"reference":"floating":p],I=St(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(S)))==null||t?S:S.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(n.floating)),boundary:u,rootBoundary:d,strategy:l})),V=p==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,N=await(o.getOffsetParent==null?void 0:o.getOffsetParent(n.floating)),K=await(o.isElement==null?void 0:o.isElement(N))&&await(o.getScale==null?void 0:o.getScale(N))||{x:1,y:1},G=St(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:V,offsetParent:N,strategy:l}):V);return{top:(I.top-G.top+$.top)/K.y,bottom:(G.bottom-I.bottom+$.bottom)/K.y,left:(I.left-G.left+$.left)/K.x,right:(G.right-I.right+$.right)/K.x}}const qu=50,Gu=async(i,e,t)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=t,n=a.detectOverflow?a:{...a,detectOverflow:Uu},l=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:i,floating:e,strategy:s}),{x:d,y:p}=Li(u,r,l),m=r,k=0;const $={};for(let E=0;E<o.length;E++){const S=o[E];if(!S)continue;const{name:I,fn:V}=S,{x:N,y:K,data:G,reset:W}=await V({x:d,y:p,initialPlacement:r,placement:m,strategy:s,middlewareData:$,rects:u,platform:n,elements:{reference:i,floating:e}});d=N??d,p=K??p,$[I]={...$[I],...G},W&&k<qu&&(k++,typeof W=="object"&&(W.placement&&(m=W.placement),W.rects&&(u=W.rects===!0?await a.getElementRects({reference:i,floating:e,strategy:s}):W.rects),{x:d,y:p}=Li(u,m,l)),E=-1)}return{x:d,y:p,placement:m,strategy:s,middlewareData:$}},Yu=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t,r;const{placement:s,middlewareData:o,rects:a,initialPlacement:n,platform:l,elements:u}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:E=!0,...S}=It(i,e);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const I=Ge(s),V=me(n),N=Ge(n)===n,K=await(l.isRTL==null?void 0:l.isRTL(u.floating)),G=m||(N||!E?[zt(n)]:ju(n)),W=$!=="none";!m&&W&&G.push(...Fu(n,E,$,K));const dt=[n,...G],Ne=await l.detectOverflow(e,S),ye=[];let re=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&ye.push(Ne[I]),p){const ke=Vu(s,a,K);ye.push(Ne[ke[0]],Ne[ke[1]])}if(re=[...re,{placement:s,overflows:ye}],!ye.every(ke=>ke<=0)){var fi,bi;const ke=(((fi=o.flip)==null?void 0:fi.index)||0)+1,Bt=dt[ke];if(Bt&&(!(p==="alignment"?V!==me(Bt):!1)||re.every(J=>me(J.placement)===V?J.overflows[0]>0:!0)))return{data:{index:ke,overflows:re},reset:{placement:Bt}};let Xe=(bi=re.filter(we=>we.overflows[0]<=0).sort((we,J)=>we.overflows[1]-J.overflows[1])[0])==null?void 0:bi.placement;if(!Xe)switch(k){case"bestFit":{var mi;const we=(mi=re.filter(J=>{if(W){const de=me(J.placement);return de===V||de==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(de=>de>0).reduce((de,Ms)=>de+Ms,0)]).sort((J,de)=>J[1]-de[1])[0])==null?void 0:mi[0];we&&(Xe=we);break}case"initialPlacement":Xe=n;break}if(s!==Xe)return{reset:{placement:Xe}}}return{}}}},Wu=new Set(["left","top"]);async function Xu(i,e){const{placement:t,platform:r,elements:s}=i,o=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=Ge(t),n=Dt(t),l=me(t)==="y",u=Wu.has(a)?-1:1,d=o&&l?-1:1,p=It(e,i);let{mainAxis:m,crossAxis:k,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return n&&typeof $=="number"&&(k=n==="end"?$*-1:$),l?{x:k*d,y:m*u}:{x:m*u,y:k*d}}const Ju=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){var t,r;const{x:s,y:o,placement:a,middlewareData:n}=e,l=await Xu(e,i);return a===((t=n.offset)==null?void 0:t.placement)&&(r=n.arrow)!=null&&r.alignmentOffset?{}:{x:s+l.x,y:o+l.y,data:{...l,placement:a}}}}},Zu=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:r,placement:s,platform:o}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:l={fn:V=>{let{x:N,y:K}=V;return{x:N,y:K}}},...u}=It(i,e),d={x:t,y:r},p=await o.detectOverflow(e,u),m=me(s),k=ks(m);let $=d[k],E=d[m];const S=(V,N)=>Mu(N+p[V==="y"?"top":"left"],N,N-p[V==="y"?"bottom":"right"]);a&&($=S(k,$)),n&&(E=S(m,E));const I=l.fn({...e,[k]:$,[m]:E});return{...I,data:{x:I.x-t,y:I.y-r,enabled:{[k]:a,[m]:n}}}}}};function Mt(){return typeof window<"u"}function We(i){return zs(i)?(i.nodeName||"").toLowerCase():"#document"}function Y(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function pe(i){var e;return(e=(zs(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function zs(i){return Mt()?i instanceof Node||i instanceof Y(i).Node:!1}function oe(i){return Mt()?i instanceof Element||i instanceof Y(i).Element:!1}function xe(i){return Mt()?i instanceof HTMLElement||i instanceof Y(i).HTMLElement:!1}function Ii(i){return!Mt()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Y(i).ShadowRoot}function Vt(i){const{overflow:e,overflowX:t,overflowY:r,display:s}=ae(i);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&s!=="inline"&&s!=="contents"}function Qu(i){return/^(table|td|th)$/.test(We(i))}function jt(i){try{if(i.matches(":popover-open"))return!0}catch{}try{return i.matches(":modal")}catch{return!1}}const ep=/transform|translate|scale|rotate|perspective|filter/,tp=/paint|layout|strict|content/,ze=i=>!!i&&i!=="none";let Gt;function Ar(i){const e=oe(i)?ae(i):i;return ze(e.transform)||ze(e.translate)||ze(e.scale)||ze(e.rotate)||ze(e.perspective)||!Or()&&(ze(e.backdropFilter)||ze(e.filter))||ep.test(e.willChange||"")||tp.test(e.contain||"")}function rp(i){let e=Oe(i);for(;xe(e)&&!nt(e);){if(Ar(e))return e;if(jt(e))return null;e=Oe(e)}return null}function Or(){return Gt==null&&(Gt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Gt}function nt(i){return/^(html|body|#document)$/.test(We(i))}function ae(i){return Y(i).getComputedStyle(i)}function Nt(i){return oe(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Oe(i){if(We(i)==="html")return i;const e=i.assignedSlot||i.parentNode||Ii(i)&&i.host||pe(i);return Ii(e)?e.host:e}function Ss(i){const e=Oe(i);return nt(e)?(i.ownerDocument||i).body:xe(e)&&Vt(e)?e:Ss(e)}function lt(i,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Ss(i),o=s===((r=i.ownerDocument)==null?void 0:r.body),a=Y(s);if(o){const n=nr(a);return e.concat(a,a.visualViewport||[],Vt(s)?s:[],n&&t?lt(n):[])}else return e.concat(s,lt(s,[],t))}function nr(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function _s(i){const e=ae(i);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=xe(i),o=s?i.offsetWidth:t,a=s?i.offsetHeight:r,n=$t(t)!==o||$t(r)!==a;return n&&(t=o,r=a),{width:t,height:r,$:n}}function Lr(i){return oe(i)?i:i.contextElement}function Ke(i){const e=Lr(i);if(!xe(e))return le(1);const t=e.getBoundingClientRect(),{width:r,height:s,$:o}=_s(e);let a=(o?$t(t.width):t.width)/r,n=(o?$t(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const ip=le(0);function Es(i){const e=Y(i);return!Or()||!e.visualViewport?ip:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function sp(i,e,t){return e===void 0&&(e=!1),!!t&&e&&t===Y(i)}function Le(i,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=i.getBoundingClientRect(),o=Lr(i);let a=le(1);e&&(r?oe(r)&&(a=Ke(r)):a=Ke(i));const n=sp(o,t,r)?Es(o):le(0);let l=(s.left+n.x)/a.x,u=(s.top+n.y)/a.y,d=s.width/a.x,p=s.height/a.y;if(o&&r){const m=Y(o),k=oe(r)?Y(r):r;let $=m,E=nr($);for(;E&&k!==$;){const S=Ke(E),I=E.getBoundingClientRect(),V=ae(E),N=I.left+(E.clientLeft+parseFloat(V.paddingLeft))*S.x,K=I.top+(E.clientTop+parseFloat(V.paddingTop))*S.y;l*=S.x,u*=S.y,d*=S.x,p*=S.y,l+=N,u+=K,$=Y(E),E=nr($)}}return St({width:d,height:p,x:l,y:u})}function Rt(i,e){const t=Nt(i).scrollLeft;return e?e.left+t:Le(pe(i)).left+t}function Cs(i,e){const t=i.getBoundingClientRect(),r=t.left+e.scrollLeft-Rt(i,t),s=t.top+e.scrollTop;return{x:r,y:s}}function op(i){let{elements:e,rect:t,offsetParent:r,strategy:s}=i;const o=s==="fixed",a=pe(r),n=e?jt(e.floating):!1;if(r===a||n&&o)return t;let l={scrollLeft:0,scrollTop:0},u=le(1);const d=le(0),p=xe(r);if((p||!o)&&((We(r)!=="body"||Vt(a))&&(l=Nt(r)),p)){const k=Le(r);u=Ke(r),d.x=k.x+r.clientLeft,d.y=k.y+r.clientTop}const m=a&&!p&&!o?Cs(a,l):le(0);return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x+m.x,y:t.y*u.y-l.scrollTop*u.y+d.y+m.y}}function ap(i){return i.getClientRects?Array.from(i.getClientRects()):[]}function np(i){const e=Nt(i),t=i.ownerDocument.body,r=Pe(i.scrollWidth,i.clientWidth,t.scrollWidth,t.clientWidth),s=Pe(i.scrollHeight,i.clientHeight,t.scrollHeight,t.clientHeight);let o=-e.scrollLeft+Rt(i);const a=-e.scrollTop;return ae(t).direction==="rtl"&&(o+=Pe(i.clientWidth,t.clientWidth)-r),{width:r,height:s,x:o,y:a}}const lp=25;function cp(i,e,t){t===void 0&&(t="viewport");const r=t==="layoutViewport",s=Y(i),o=pe(i),a=s.visualViewport;let n=o.clientWidth,l=o.clientHeight,u=0,d=0;if(a){const m=!Or()||e==="fixed";r?m||(u=-a.offsetLeft,d=-a.offsetTop):(n=a.width,l=a.height,m&&(u=a.offsetLeft,d=a.offsetTop))}if(Rt(o)<=0){const m=o.ownerDocument,k=m.body,$=getComputedStyle(k),E=m.compatMode==="CSS1Compat"&&parseFloat($.marginLeft)+parseFloat($.marginRight)||0,S=Math.abs(o.clientWidth-k.clientWidth-E),I=getComputedStyle(o).scrollbarGutter==="stable both-edges"?S/2:S;I<=lp&&(n-=I)}return{width:n,height:l,x:u,y:d}}function up(i,e){const t=Le(i,!0,e==="fixed"),r=t.top+i.clientTop,s=t.left+i.clientLeft,o=Ke(i),a=i.clientWidth*o.x,n=i.clientHeight*o.y,l=s*o.x,u=r*o.y;return{width:a,height:n,x:l,y:u}}function Di(i,e,t){let r;if(e==="viewport"||e==="layoutViewport")r=cp(i,t,e);else if(e==="document")r=np(pe(i));else if(oe(e))r=up(e,t);else{const s=Es(i);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return St(r)}function pp(i,e){const t=e.get(i);if(t)return t;let r=lt(i,[],!1).filter(n=>oe(n)&&We(n)!=="body"),s=null;const o=ae(i).position==="fixed";let a=o?Oe(i):i;for(;oe(a)&&!nt(a);){const n=ae(a),l=Ar(a),u=s?s.position:o?"fixed":"";!l&&(u==="fixed"||u==="absolute"&&n.position==="static")?r=r.filter(p=>p!==a):s=n,a=Oe(a)}return e.set(i,r),r}function dp(i){let{element:e,boundary:t,rootBoundary:r,strategy:s}=i;const a=[...t==="clippingAncestors"?jt(e)?[]:pp(e,this._c):[].concat(t),r],n=Di(e,a[0],s);let l=n.top,u=n.right,d=n.bottom,p=n.left;for(let m=1;m<a.length;m++){const k=Di(e,a[m],s);l=Pe(k.top,l),u=wt(k.right,u),d=wt(k.bottom,d),p=Pe(k.left,p)}return{width:u-p,height:d-l,x:p,y:l}}function hp(i){const{width:e,height:t}=_s(i);return{width:e,height:t}}function fp(i,e,t){const r=xe(e),s=pe(e),o=t==="fixed",a=Le(i,!0,o,e);let n={scrollLeft:0,scrollTop:0};const l=le(0);if((r||!o)&&((We(e)!=="body"||Vt(s))&&(n=Nt(e)),r)){const m=Le(e,!0,o,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}!r&&s&&(l.x=Rt(s));const u=s&&!r&&!o?Cs(s,n):le(0),d=a.left+n.scrollLeft-l.x-u.x,p=a.top+n.scrollTop-l.y-u.y;return{x:d,y:p,width:a.width,height:a.height}}function Yt(i){return ae(i).position==="static"}function Mi(i,e){if(!xe(i)||ae(i).position==="fixed")return null;if(e)return e(i);let t=i.offsetParent;return pe(i)===t&&(t=t.ownerDocument.body),t}function Ps(i,e){const t=Y(i);if(jt(i))return t;if(!xe(i)){let s=Oe(i);for(;s&&!nt(s);){if(oe(s)&&!Yt(s))return s;s=Oe(s)}return t}let r=Mi(i,e);for(;r&&Qu(r)&&Yt(r);)r=Mi(r,e);return r&&nt(r)&&Yt(r)&&!Ar(r)?t:r||rp(i)||t}const bp=async function(i){const e=this.getOffsetParent||Ps,t=this.getDimensions,r=await t(i.floating);return{reference:fp(i.reference,await e(i.floating),i.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function mp(i){return ae(i).direction==="rtl"}const gp={convertOffsetParentRelativeRectToViewportRelativeRect:op,getDocumentElement:pe,getClippingRect:dp,getOffsetParent:Ps,getElementRects:bp,getClientRects:ap,getDimensions:hp,getScale:Ke,isElement:oe,isRTL:mp};function Ts(i,e){return i.x===e.x&&i.y===e.y&&i.width===e.width&&i.height===e.height}function vp(i,e,t){let r=null,s;const o=pe(i);function a(){var d;clearTimeout(s),(d=r)==null||d.disconnect(),r=null}function n(d,p){d===void 0&&(d=!1),p===void 0&&(p=1),a();const m=i.getBoundingClientRect(),{left:k,top:$,width:E,height:S}=m;if(d||e(),!E||!S)return;const I=ht($),V=ht(o.clientWidth-(k+E)),N=ht(o.clientHeight-($+S)),K=ht(k),W={rootMargin:-I+"px "+-V+"px "+-N+"px "+-K+"px",threshold:Pe(0,wt(1,p))||1};let dt=!0;function Ne(ye){const re=ye[0].intersectionRatio;if(!Ts(m,i.getBoundingClientRect()))return n();if(re!==p){if(!dt)return n();re?n(!1,re):s=setTimeout(()=>{n(!1,1e-7)},1e3)}dt=!1}try{r=new IntersectionObserver(Ne,{...W,root:o.ownerDocument})}catch{r=new IntersectionObserver(Ne,W)}r.observe(i)}const l=Y(i),u=()=>n(t);return l.addEventListener("resize",u),n(!0),()=>{l.removeEventListener("resize",u),a()}}function xp(i,e,t,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Lr(i),d=s||o?[...u?lt(u):[],...e?lt(e):[]]:[];d.forEach(I=>{s&&I.addEventListener("scroll",t),o&&I.addEventListener("resize",t)});const p=u&&n?vp(u,t,o):null;let m=-1,k=null;a&&(k=new ResizeObserver(I=>{let[V]=I;V&&V.target===u&&k&&e&&(k.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var N;(N=k)==null||N.observe(e)})),t()}),u&&!l&&k.observe(u),e&&k.observe(e));let $,E=l?Le(i):null;l&&S();function S(){const I=Le(i);E&&!Ts(E,I)&&t(),E=I,$=requestAnimationFrame(S)}return t(),()=>{var I;d.forEach(V=>{s&&V.removeEventListener("scroll",t),o&&V.removeEventListener("resize",t)}),p==null||p(),(I=k)==null||I.disconnect(),k=null,l&&cancelAnimationFrame($)}}const yp=Ju,kp=Zu,wp=Yu,$p=(i,e,t)=>{const r=new Map,s=t??{},o={...gp,...s.platform,_c:r};return Gu(i,e,{...s,platform:o})},zp=()=>({update:async()=>{},destroy:()=>{}});function pt(i,e,t={}){if(typeof document>"u"||!i||!e)return zp();const r=t.placement??"top",s=t.strategy??"fixed",o=t.padding??8,a=t.offset??8;let n=!1,l=0,u;const d=async()=>{if(n||!i.isConnected||!e.isConnected)return;const p=++l;try{const m=await $p(i,e,{placement:r,strategy:s,middleware:[yp(a),wp({padding:o}),kp({padding:o})]});if(n||p!==l)return;e.style.position=s,e.style.left=`${Math.round(m.x)}px`,e.style.top=`${Math.round(m.y)}px`,e.dataset.placement=m.placement}catch{}};try{u=xp(i,e,()=>{d()})}catch{d()}return{update:d,destroy:()=>{n||(n=!0,u==null||u(),u=void 0)}}}let Sp=0;class Ir extends O{constructor(){super(),Object.defineProperty(this,"controlId",{enumerable:!0,configurable:!0,writable:!0,value:`super-autocomplete-${++Sp}`}),Object.defineProperty(this,"listboxId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.controlId}-listbox`}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"listboxElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inputElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"suppressFocusOpen",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"handleInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget;this.value=t.value,this.disabled||(this.setOpen(!0),this.realignActiveOption()),this.dispatchEvent(new CustomEvent("super-autocomplete-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}}),Object.defineProperty(this,"handleClear",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(e.preventDefault(),e.stopPropagation(),this.disabled||!this.showClear)return;const t=this.value;this.value="",this.activeIndex=-1,this.setOpen(!1),this.dispatchEvent(new CustomEvent("super-autocomplete-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),this.focusInputWithoutOpening()}}),Object.defineProperty(this,"handleOptionClick",{enumerable:!0,configurable:!0,writable:!0,value:(e,t)=>{t.preventDefault(),this.selectOption(e,t)}}),Object.defineProperty(this,"handleKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.disabled){if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault(),this.open?this.moveActive(e.key==="ArrowDown"?1:-1):(this.setOpen(!0),this.realignActiveOption());return}if(e.key==="Home"||e.key==="End"){if(!this.open||this.value!=="")return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"){if(!this.open||!this.activeOption)return;e.preventDefault(),this.selectOption(this.activeOption,e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1),this.focusInputWithoutOpening();return}e.key==="Tab"&&this.open&&this.setOpen(!1)}}}),Object.defineProperty(this,"handleFocus",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.disabled||this.suppressFocusOpen){this.suppressFocusOpen=!1;return}this.realignActiveOption(),this.setOpen(!0)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1)}}),this.value="",this.items=[],this.open=!1,this.placeholder="输入以搜索",this.disabled=!1,this.size="medium",this.validation="none",this.clearable=!1,this.loading=!1,this.emptyText="没有匹配项",this.clearLabel="清空输入",this.loadingText="加载中...",this.minChars=0,this.filter=void 0,this.accessibleLabel="",this.activeIndex=-1}get normalizedItems(){return(Array.isArray(this.items)?this.items:[]).map((t,r)=>{const s=typeof t=="string"?{value:t}:t;return{value:s.value,label:s.label??s.value,disabled:!!s.disabled,id:`${this.controlId}-option-${r}`,index:r}})}get filteredItems(){if(this.loading)return[];const e=this.value.trim().toLocaleLowerCase(),t=this.normalizedItems;return e.length<Math.max(0,this.minChars)?[]:e?t.filter(r=>this.filter?this.filter({value:r.value,label:r.label,disabled:r.disabled},this.value):r.label.toLocaleLowerCase().includes(e)||r.value.toLocaleLowerCase().includes(e)):t}get activeOption(){return this.filteredItems[this.activeIndex]}get showClear(){return this.clearable&&!this.disabled&&this.value!==""}get showListbox(){return this.open&&!this.disabled}get inputLabel(){return this.accessibleLabel||this.placeholder||"搜索"}realignActiveOption(){var t;if(!this.open){this.activeIndex=-1;return}const e=this.filteredItems;this.activeIndex>=0&&this.activeIndex<e.length&&!((t=e[this.activeIndex])!=null&&t.disabled)||(this.activeIndex=e.findIndex(r=>!r.disabled))}setOpen(e){e&&this.disabled||this.open!==e&&(this.open=e,e?this.realignActiveOption():this.activeIndex=-1,this.dispatchEvent(new CustomEvent("super-autocomplete-open-change",{detail:{open:e},bubbles:!0,composed:!0})))}moveActive(e){var s;const t=this.filteredItems;if(t.length===0){this.activeIndex=-1;return}let r=this.activeIndex;for(let o=0;o<t.length;o+=1)if(r=(r+e+t.length)%t.length,!((s=t[r])!=null&&s.disabled)){this.activeIndex=r;return}}moveToBoundary(e){const t=this.filteredItems,r=e==="start"?t.map((s,o)=>o):t.map((s,o)=>o).reverse();this.activeIndex=r.find(s=>{var o;return!((o=t[s])!=null&&o.disabled)})??-1}selectOption(e,t){e.disabled||this.disabled||this.loading||(this.value=e.value,this.activeIndex=-1,this.setOpen(!1),this.dispatchEvent(new CustomEvent("super-autocomplete-change",{detail:{value:e.value},bubbles:!0,composed:!0})),this.focusInputWithoutOpening())}focusInputWithoutOpening(){const e=this.inputElement;!e||this.renderRoot.activeElement===e||(this.suppressFocusOpen=!0,e.focus({preventScroll:!0}),this.suppressFocusOpen=!1)}startFloating(){var s;this.destroyFloating();const e=(s=this.inputElement)==null?void 0:s.closest(".field"),t=this.listboxElement;if(!e||!t)return;t.style.position="fixed",t.style.left="0px",t.style.top="0px";const r=e.getBoundingClientRect().width;r>0&&(t.style.minInlineSize=`${Math.ceil(r)}px`),this.floating=pt(e,t,{placement:"bottom-start",offset:6})}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}focus(e){if(this.inputElement){this.inputElement.focus(e);return}super.focus(e)}blur(){if(this.inputElement){this.inputElement.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.destroyFloating(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.open=!1,this.activeIndex=-1),e.has("loading")&&this.loading&&(this.activeIndex=-1),(e.has("items")||e.has("value")||e.has("minChars")||e.has("filter"))&&this.open&&this.realignActiveOption()}updated(e){var t;this.inputElement=this.renderRoot.querySelector('[part="input"]'),this.listboxElement=this.renderRoot.querySelector('[part="listbox"]'),e.has("open")||e.has("disabled")?this.showListbox?this.startFloating():this.destroyFloating():this.showListbox&&(e.has("items")||e.has("value")||e.has("loading"))&&((t=this.floating)==null||t.update()),e.has("activeIndex")&&this.activeIndex>=0&&this.updateComplete.then(()=>{var r,s;(s=(r=this.renderRoot.querySelector('[role="option"][data-active]'))==null?void 0:r.scrollIntoView)==null||s.call(r,{block:"nearest"})})}renderListboxContent(){if(this.loading)return c`
        <div class="loading" part="empty" role="status" aria-live="polite">
          <span class="spinner" aria-hidden="true"></span>
          <span>${this.loadingText}</span>
        </div>
      `;const e=this.filteredItems;return e.length===0?c`
        <div class="empty" part="empty" role="status" aria-live="polite">
          ${this.emptyText}
        </div>
      `:e.map((t,r)=>c`
        <div
          id=${t.id}
          class="option"
          part="option"
          role="option"
          aria-selected=${t.value===this.value?"true":"false"}
          aria-disabled=${t.disabled?"true":"false"}
          ?data-active=${r===this.activeIndex}
          @pointerdown=${s=>s.preventDefault()}
          @click=${s=>this.handleOptionClick(t,s)}
        >${t.label}</div>
      `)}render(){var t;const e=this.showListbox&&!this.loading?(t=this.activeOption)==null?void 0:t.id:void 0;return c`
      <div class="field" part="field">
        <input
          class="input"
          part="input"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          aria-autocomplete="list"
          aria-expanded=${this.open?"true":"false"}
          aria-controls=${this.listboxId}
          aria-activedescendant=${w(e)}
          aria-label=${this.inputLabel}
          aria-invalid=${this.validation==="error"?"true":f}
          aria-busy=${this.loading?"true":f}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          .value=${te(this.value)}
          @input=${this.handleInput}
          @keydown=${this.handleKeydown}
          @focus=${this.handleFocus}
        />
        <button
          class="clear"
          part="clear"
          type="button"
          tabindex="-1"
          aria-label=${this.clearLabel}
          ?hidden=${!this.showClear}
          @click=${this.handleClear}
        >×</button>
      </div>
      ${this.showListbox?c`
            <div
              class="listbox"
              part="listbox"
              id=${this.listboxId}
              role="listbox"
              aria-label=${this.inputLabel}
              @pointerdown=${r=>r.preventDefault()}
            >
              ${this.renderListboxContent()}
            </div>
          `:f}
    `}}Object.defineProperty(Ir,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String,reflect:!0},items:{attribute:!1},open:{type:Boolean,reflect:!0},placeholder:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},clearable:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},emptyText:{type:String,attribute:"empty-text",reflect:!0},clearLabel:{type:String,attribute:"clear-label",reflect:!0},loadingText:{type:String,attribute:"loading-text",reflect:!0},minChars:{type:Number,attribute:"min-chars",reflect:!0},filter:{attribute:!1},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},activeIndex:{state:!0}}});Object.defineProperty(Ir,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-autocomplete-width: 260px;
      --super-autocomplete-height: 38px;
      --super-autocomplete-padding-inline: 12px;
      --super-autocomplete-gap: 8px;
      --super-autocomplete-font-size: var(--super-font-size-base, 14px);
      --super-autocomplete-background: var(--super-background-color, #fffef9);
      --super-autocomplete-color: var(--super-text-color-primary, #292524);
      --super-autocomplete-placeholder-color: var(
        --super-text-color-placeholder,
        #9a938f
      );
      --super-autocomplete-border-color: var(--super-border-color, #2f2a27);
      --super-autocomplete-hover-color: #3f9b68;
      --super-autocomplete-focus-color: var(--super-focus-color, #56c6b7);
      --super-autocomplete-shadow-color: #a8b3bf;
      --super-autocomplete-validation-color: var(
        --super-autocomplete-border-color
      );
      --super-autocomplete-listbox-background: var(
        --super-background-color,
        #fffef9
      );
      --super-autocomplete-option-hover-background: #eef5ff;
      --super-autocomplete-option-active-background: #dfeaff;
      --super-autocomplete-option-active-color: #174ea6;
      --super-autocomplete-listbox-max-height: 260px;
      --super-autocomplete-z-index: var(--super-z-index-overlay, 2000);
      --super-autocomplete-rotation: var(--super-sketch-rotation, -0.12deg);
      --super-autocomplete-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px);

      position: relative;
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--super-autocomplete-width);
      max-inline-size: 100%;
      color: var(--super-autocomplete-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-autocomplete-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-autocomplete-z-index);
    }

    :host([size="large"]) {
      --super-autocomplete-height: 46px;
      --super-autocomplete-padding-inline: 14px;
      --super-autocomplete-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-autocomplete-height: 31px;
      --super-autocomplete-padding-inline: 9px;
      --super-autocomplete-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-autocomplete-validation-color: #23804a;
      --super-autocomplete-border-color: #23804a;
      --super-autocomplete-shadow-color: #b4dfc2;
    }

    :host([validation="warning"]) {
      --super-autocomplete-validation-color: #a05f00;
      --super-autocomplete-border-color: #a05f00;
      --super-autocomplete-shadow-color: #f4d18e;
    }

    :host([validation="error"]) {
      --super-autocomplete-validation-color: #cf3038;
      --super-autocomplete-border-color: #cf3038;
      --super-autocomplete-shadow-color: #f2aaaa;
    }

    :host([validation="info"]) {
      --super-autocomplete-validation-color: #64748b;
      --super-autocomplete-border-color: #64748b;
      --super-autocomplete-shadow-color: #cbd5e1;
    }

    .field {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-autocomplete-gap);
      min-block-size: var(--super-autocomplete-height);
      padding-inline: var(--super-autocomplete-padding-inline);
      background: var(--super-autocomplete-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-autocomplete-border-color);
      border-radius: var(--super-autocomplete-radius);
      box-shadow: 2px 2px 0 -1px var(--super-autocomplete-shadow-color);
      transform: rotate(var(--super-autocomplete-rotation));
      transition:
        border-color var(--super-motion-duration, 140ms) ease,
        box-shadow var(--super-motion-duration, 140ms) ease,
        transform 120ms ease;
    }

    .field:focus-within {
      border-color: var(--super-autocomplete-focus-color);
      box-shadow:
        0 0 0 2px var(--super-autocomplete-background),
        0 0 0 4px var(--super-autocomplete-focus-color),
        3px 3px 0 -1px #9db7fa;
      transform: rotate(0deg);
    }

    @media (hover: hover) {
      :host([validation="none"]:not([disabled])) .field:hover {
        border-color: var(--super-autocomplete-hover-color);
        box-shadow: 3px 3px 0 -1px #b9ddc3;
      }
    }

    :host([disabled]) .field {
      color: #7f8a99;
      background: #eef1f5;
      border-color: #b7c0cc;
      box-shadow: 1px 1px 0 -1px #cbd5e1;
      cursor: not-allowed;
      opacity: 0.68;
      transform: rotate(0deg);
    }

    .input {
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      inline-size: 100%;
      min-block-size: calc(var(--super-autocomplete-height) - 4px);
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      outline: 0;
    }

    .input::placeholder {
      color: var(--super-autocomplete-placeholder-color);
      opacity: 1;
    }

    .input::-webkit-search-cancel-button {
      display: none;
    }

    .clear {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      background: transparent;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }

    .clear:hover {
      color: #174ea6;
      background: #e8f0ff;
    }

    .clear:focus-visible {
      outline: 2px solid var(--super-autocomplete-focus-color);
      outline-offset: -2px;
    }

    .clear[hidden] {
      display: none;
    }

    .listbox {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-autocomplete-z-index);
      box-sizing: border-box;
      min-inline-size: 100%;
      max-inline-size: calc(100vw - 16px);
      max-block-size: var(--super-autocomplete-listbox-max-height);
      margin: 0;
      padding: var(--super-spacing-xs, 4px);
      overflow: auto;
      overscroll-behavior: contain;
      color: var(--super-autocomplete-color);
      background: var(--super-autocomplete-listbox-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-autocomplete-border-color);
      border-radius: var(--super-autocomplete-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      transform: rotate(var(--super-autocomplete-rotation));
      transform-origin: top center;
    }

    .option {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-spacing-sm, 8px);
      min-block-size: 32px;
      padding: 6px 10px;
      color: inherit;
      cursor: pointer;
      outline: none;
      user-select: none;
      border-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
    }

    .option:hover {
      background: var(--super-autocomplete-option-hover-background);
    }

    .option[data-active] {
      color: var(--super-autocomplete-option-active-color);
      background: var(--super-autocomplete-option-active-background);
    }

    .option[aria-disabled="true"] {
      color: var(--super-text-color-secondary, #6b6360);
      cursor: not-allowed;
      opacity: 0.62;
    }

    .option[aria-disabled="true"]:hover {
      background: transparent;
    }

    .empty,
    .loading {
      display: grid;
      gap: 6px;
      justify-items: center;
      padding: 12px;
      color: var(--super-text-color-secondary, #6b6360);
      text-align: center;
    }

    .spinner {
      inline-size: 14px;
      block-size: 14px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: super-autocomplete-spin 700ms linear infinite;
    }

    @keyframes super-autocomplete-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .field,
      .spinner {
        transition: none;
        animation: none;
      }
    }
  `});const _p="super-autocomplete",Ep=i=>D(_p,Ir,i);class Dr extends O{constructor(){super(),this.value="",this.max=99,this.dot=!1,this.status="primary",this.size="medium",this.hidden=!1}get displayValue(){const e=this.value;if(e===""||e===null||e===void 0)return"";const t=String(e).trim();if(t==="")return"";const r=Number(t);return Number.isFinite(r)&&this.max>0&&r>this.max?`${this.max}+`:t}get shouldShowBadge(){return!this.hidden&&(this.dot||this.displayValue!=="")}render(){const e=this.shouldShowBadge,t=this.displayValue;return c`
      <span class="container" part="container">
        <span class="content" part="content"><slot></slot></span>
        ${e?c`
              <span
                class="badge"
                part="badge"
                data-dot=${w(this.dot?"":void 0)}
                role=${w(this.dot?void 0:"status")}
                aria-hidden=${w(this.dot?"true":void 0)}
              >${this.dot?"":t}</span>
            `:null}
      </span>
    `}}Object.defineProperty(Dr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String,reflect:!0},max:{type:Number,reflect:!0},dot:{type:Boolean,reflect:!0},status:{type:String,reflect:!0},size:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0}}});Object.defineProperty(Dr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-badge-height: 20px;
      --super-badge-min-width: 20px;
      --super-badge-dot-size: 9px;
      --super-badge-offset: 4px;
      --super-badge-padding-inline: 5px;
      --super-badge-font-size: 12px;
      --super-badge-color: var(--super-text-color-inverse, #ffffff);
      --super-badge-background: var(--super-color-primary, #4b87f5);
      --super-badge-border-color: #174ea6;
      --super-badge-shadow-color: rgb(23 78 166 / 24%);
      --super-badge-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px);
      --super-badge-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-text-color-primary, #292524);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: inline-flex !important;
    }

    :host([size="large"]) {
      --super-badge-height: 24px;
      --super-badge-min-width: 24px;
      --super-badge-dot-size: 11px;
      --super-badge-offset: 5px;
      --super-badge-padding-inline: 7px;
      --super-badge-font-size: 14px;
      --super-badge-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 3px)
        var(--super-radius-md, 9px);
    }

    :host([size="small"]) {
      --super-badge-height: 16px;
      --super-badge-min-width: 16px;
      --super-badge-dot-size: 7px;
      --super-badge-offset: 3px;
      --super-badge-padding-inline: 4px;
      --super-badge-font-size: 10px;
      --super-badge-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        5px
        calc(var(--super-radius-sm, 6px) + 2px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px);
    }

    :host([status="success"]) {
      --super-badge-background: var(--super-color-success, #86cf8b);
      --super-badge-border-color: #2e7738;
      --super-badge-shadow-color: rgb(46 119 56 / 22%);
    }

    :host([status="warning"]) {
      --super-badge-background: var(--super-color-warning, #ffca50);
      --super-badge-border-color: #9e6508;
      --super-badge-color: #352809;
      --super-badge-shadow-color: rgb(158 101 8 / 22%);
    }

    :host([status="danger"]) {
      --super-badge-background: var(--super-color-danger, #ff7067);
      --super-badge-border-color: #b7352f;
      --super-badge-shadow-color: rgb(183 53 47 / 22%);
    }

    :host([status="info"]) {
      --super-badge-background: var(--super-color-info, #7d8896);
      --super-badge-border-color: #536170;
      --super-badge-shadow-color: rgb(89 103 121 / 20%);
    }

    .container {
      position: relative;
      display: inline-flex;
      align-items: center;
      max-inline-size: 100%;
      min-inline-size: 0;
    }

    .content {
      display: inline-flex;
      align-items: center;
      max-inline-size: 100%;
      min-inline-size: 0;
    }

    .badge {
      position: absolute;
      inset-block-start: calc(-1 * var(--super-badge-offset));
      inset-inline-end: calc(-1 * var(--super-badge-offset));
      z-index: 1;
      display: inline-grid;
      place-items: center;
      box-sizing: border-box;
      min-inline-size: var(--super-badge-min-width);
      block-size: var(--super-badge-height);
      padding-inline: var(--super-badge-padding-inline);
      color: var(--super-badge-color);
      font: inherit;
      font-size: var(--super-badge-font-size);
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      background: var(--super-badge-background);
      border: var(--super-sketch-width, 2px) solid var(--super-badge-border-color);
      border-radius: var(--super-badge-radius);
      box-shadow: ${ee(je({color:"var(--super-badge-shadow-color)"}))};
      transform: translate(50%, -50%) rotate(var(--super-badge-rotation));
      transform-origin: center;
    }

    .badge[data-dot] {
      inline-size: var(--super-badge-dot-size);
      min-inline-size: var(--super-badge-dot-size);
      block-size: var(--super-badge-dot-size);
      padding: 0;
      border-radius: 48% 52% 47% 53% / 53% 46% 54% 47%;
    }

    slot {
      display: contents;
    }
  `});const Cp="super-badge",Pp=i=>D(Cp,Dr,i);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As="important",Tp=" !"+As,ie=Pr(class extends Tr{constructor(i){var e;if(super(i),i.type!==fe.ATTRIBUTE||i.name!=="style"||((e=i.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const s=e[r];if(s!=null){this.ft.add(r);const o=typeof s=="string"&&s.endsWith(Tp);r.includes("-")||o?t.setProperty(r,o?s.slice(0,-11):s,o?As:""):t[r]=s}}return Z}});class Mr extends O{constructor(){super(),this.separator="/",this.size="medium",this.maxItems=0,this.accessibleLabel="面包屑导航",this.items=[]}get visibleEntries(){const e=this.items.map((n,l)=>({type:"item",item:n,index:l})),t=Math.trunc(this.maxItems);if(t<=0||e.length<=t)return e;const r=Math.max(3,t),s=Math.max(1,r-2),o=e.slice(0,s),a=e[e.length-1];return a?[...o,{type:"ellipsis",index:o.length},a]:e}renderEntry(e){if(e.type==="ellipsis")return c`
        <li class="item" part="item ellipsis-item" aria-hidden="true">
          <span class="ellipsis" part="ellipsis">…</span>
        </li>
      `;const{item:t}=e,r=!!t.current,s=r||!t.href?c`<span
          class=${r?"current":"label"}
          part=${r?"current":"label"}
          aria-current=${w(r?"page":void 0)}
        >${t.label}</span>`:c`<a
          class="link"
          part="link"
          href=${t.href}
        >${t.label}</a>`;return c`
      <li class="item" part="item">
        ${e.index>0?c`<span
              class="separator"
              part="separator"
              aria-hidden="true"
            >${this.separator}</span>`:f}
        ${s}
      </li>
    `}render(){const e=this.items.length>0,t={"--super-breadcrumb-separator":JSON.stringify(this.separator)};return c`
      <nav
        class="breadcrumb"
        part="breadcrumb"
        aria-label=${w(this.accessibleLabel||void 0)}
        style=${this.separator==="/"?f:ie(t)}
      >
        <ol class="list" part="list">
          ${e?this.visibleEntries.map(r=>this.renderEntry(r)):c`<slot></slot>`}
        </ol>
      </nav>
    `}}Object.defineProperty(Mr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{separator:{type:String,reflect:!0},size:{type:String,reflect:!0},maxItems:{type:Number,attribute:"max-items",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},items:{attribute:!1}}});Object.defineProperty(Mr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-breadcrumb-gap: var(--super-spacing-sm, 8px);
      --super-breadcrumb-font-size: var(--super-font-size-base, 14px);
      --super-breadcrumb-color: var(--super-text-color-secondary, #6b6360);
      --super-breadcrumb-link-color: var(--super-text-color-regular, #4a4441);
      --super-breadcrumb-current-color: var(--super-text-color-primary, #292524);
      --super-breadcrumb-separator-color: var(--super-text-color-placeholder, #9a938f);
      --super-breadcrumb-focus-color: var(--super-focus-color, #56c6b7);
      --super-breadcrumb-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
      --super-breadcrumb-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-breadcrumb-separator: "/";

      display: block;
      box-sizing: border-box;
      color: var(--super-breadcrumb-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-breadcrumb-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-breadcrumb-font-size: var(--super-font-size-lg, 16px);
      --super-breadcrumb-gap: var(--super-spacing-md, 12px);
    }

    :host([size="small"]) {
      --super-breadcrumb-font-size: var(--super-font-size-sm, 13px);
      --super-breadcrumb-gap: 6px;
    }

    .breadcrumb {
      display: block;
      min-inline-size: 0;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-breadcrumb-gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .item {
      display: inline-flex;
      min-inline-size: 0;
      align-items: center;
      gap: var(--super-breadcrumb-gap);
      color: inherit;
    }

    .separator {
      flex: none;
      color: var(--super-breadcrumb-separator-color);
      font-weight: 400;
      line-height: 1;
      user-select: none;
      transform: rotate(var(--super-breadcrumb-rotation));
    }

    .link,
    .current,
    .label {
      display: inline-flex;
      min-inline-size: 0;
      align-items: center;
      padding: 2px 4px;
      overflow: hidden;
      color: var(--super-breadcrumb-link-color);
      font: inherit;
      line-height: 1.4;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-radius: var(--super-breadcrumb-radius);
    }

    .link {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 4px;
      cursor: pointer;
      transition:
        color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .link:hover {
      color: var(--super-breadcrumb-current-color);
      background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 9%,
        transparent
      );
    }

    .link:focus-visible,
    ::slotted(a:focus-visible) {
      outline: 3px solid var(--super-breadcrumb-focus-color);
      outline-offset: 2px;
    }

    .current {
      color: var(--super-breadcrumb-current-color);
      font-weight: 700;
      text-decoration: none;
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-inline-size: 1.5em;
      color: var(--super-breadcrumb-separator-color);
      letter-spacing: 0.08em;
      user-select: none;
    }

    ::slotted(li) {
      display: inline-flex;
      align-items: center;
      gap: var(--super-breadcrumb-gap);
      min-inline-size: 0;
    }

    ::slotted(li:not(:first-child))::before {
      color: var(--super-breadcrumb-separator-color);
      content: var(--super-breadcrumb-separator);
      transform: rotate(var(--super-breadcrumb-rotation));
    }

    ::slotted(a) {
      color: var(--super-breadcrumb-link-color);
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 4px;
    }

    ::slotted([aria-current="page"]) {
      color: var(--super-breadcrumb-current-color);
      font-weight: 700;
      text-decoration: none;
    }

    slot {
      display: contents;
    }

    @media (prefers-reduced-motion: reduce) {
      .link {
        transition: none;
      }
    }
  `});const Ap="super-breadcrumb",Op=i=>D(Ap,Mr,i);class Vr extends O{constructor(){super(),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.isInteractive&&this.emitClick(e)}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.isInteractive||e.defaultPrevented||e.target!==this||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.emitClick(e))}}),this.variant="default",this.size="medium",this.hoverable=!1,this.clickable=!1,this.accessibleLabel=""}get isInteractive(){return this.clickable}emitClick(e){this.dispatchEvent(new CustomEvent("super-card-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}updated(e){(e.has("clickable")||e.size===0)&&this.syncInteractionAttributes()}syncInteractionAttributes(){if(this.clickable){this.setAttribute("role","button"),this.setAttribute("tabindex","0");return}this.removeAttribute("role"),this.removeAttribute("tabindex")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}render(){return c`
      <div
        class="surface"
        part="surface"
      >
        <div class="media" part="media" hidden>
          <slot name="media" @slotchange=${this.syncSlotPresence}></slot>
        </div>
        <div class="header" part="header" hidden>
          <slot name="header" @slotchange=${this.syncSlotPresence}></slot>
        </div>
        <div class="body" part="body">
          <slot></slot>
        </div>
        <div class="footer" part="footer" hidden>
          <slot name="footer" @slotchange=${this.syncSlotPresence}></slot>
        </div>
      </div>
    `}syncSlotPresence(e){const t=e.currentTarget,r=t.assignedNodes({flatten:!0}).some(o=>{var a;return o.nodeType!==Node.TEXT_NODE||!!((a=o.textContent)!=null&&a.trim())}),s=t.closest("[hidden]")??t.parentElement;if(s&&(s.hidden=!r,t.name==="header")){const o=this.renderRoot.querySelector(".body");o==null||o.classList.toggle("has-header",r)}}}Object.defineProperty(Vr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},hoverable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Vr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-card-padding: var(--super-spacing-lg, 16px);
      --super-card-gap: var(--super-spacing-md, 12px);
      --super-card-font-size: var(--super-font-size-base, 14px);
      --super-card-background: var(--super-background-color, #fffef9);
      --super-card-color: var(--super-text-color-primary, #292524);
      --super-card-border-color: var(--super-border-color, #2f2a27);
      --super-card-border-width: var(--super-sketch-width, 2px);
      --super-card-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-card-radius:
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        var(--super-radius-sm, 6px)
        /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px);
      --super-card-header-color: var(--super-text-color-primary, #292524);
      --super-card-footer-color: var(--super-text-color-secondary, #6b6360);
      --super-card-media-background: var(--super-background-color-soft, #f7f4ec);
      --super-card-hover-lift: 3px;
      --super-card-focus-color: var(--super-focus-color, #56c6b7);
      --super-card-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      min-inline-size: 0;
      color: var(--super-card-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-card-font-size);
      line-height: 1.55;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-card-padding: var(--super-spacing-xl, 24px);
      --super-card-gap: var(--super-spacing-lg, 16px);
      --super-card-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-card-padding: var(--super-spacing-md, 12px);
      --super-card-gap: var(--super-spacing-sm, 8px);
      --super-card-font-size: var(--super-font-size-sm, 13px);
    }

    :host([variant="outlined"]) {
      --super-card-background: transparent;
      --super-card-shadow-color: transparent;
    }

    :host([variant="filled"]) {
      --super-card-background: var(--super-background-color-soft, #f7f4ec);
      --super-card-border-color: var(--super-border-color-light, #b6ada6);
      --super-card-shadow-color: transparent;
    }

    :host([variant="ghost"]) {
      --super-card-background: transparent;
      --super-card-border-color: transparent;
      --super-card-shadow-color: transparent;
      --super-card-header-color: var(--super-text-color-regular, #4a4441);
    }

    .surface {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-inline-size: 0;
      overflow: hidden;
      background: var(--super-card-background);
      border: var(--super-card-border-width) solid var(--super-card-border-color);
      border-radius: var(--super-card-radius);
      box-shadow: ${ee(je({color:"var(--super-card-shadow-color)"}))};
    }

    .surface::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${ee($r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
    }

    :host([variant="filled"]) .surface {
      border-style: dashed;
    }

    :host([variant="ghost"]) .surface {
      border-width: 0;
      border-radius: 0;
      box-shadow: none;
    }

    :host([variant="ghost"]) .surface::before {
      display: none;
    }

    .media {
      display: block;
      overflow: hidden;
      background: var(--super-card-media-background);
      border-block-end: var(--super-card-border-width) dashed var(--super-card-border-color);
    }

    .media[hidden] {
      display: none;
    }

    ::slotted([slot="media"]) {
      display: block;
      max-inline-size: 100%;
    }

    .header {
      display: block;
      padding: var(--super-card-padding) var(--super-card-padding) 0;
      color: var(--super-card-header-color);
      font-size: 1.08em;
      font-weight: 700;
    }

    .header[hidden] {
      display: none;
    }

    .body {
      display: block;
      padding: var(--super-card-padding);
    }

    .body.has-header {
      padding-block-start: var(--super-card-gap);
    }

    .footer {
      display: block;
      padding: 0 var(--super-card-padding) var(--super-card-padding);
      color: var(--super-card-footer-color);
      font-size: 0.92em;
    }

    .footer[hidden] {
      display: none;
    }

    :host([clickable]) {
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([clickable]) .surface {
      transition:
        box-shadow var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([clickable]:focus-visible) {
      outline: none;
    }

    :host([clickable]:focus-visible) .surface {
      outline: 3px solid var(--super-card-focus-color);
      outline-offset: 3px;
    }

    @media (hover: hover) {
      :host([hoverable]) .surface,
      :host([clickable]) .surface {
        transform: rotate(var(--super-card-rotation));
      }

      :host([hoverable]:hover) .surface,
      :host([clickable]:hover) .surface {
        box-shadow:
          inset 0 0 0 1px rgb(255 255 255 / 24%),
          4px 5px 0 -1px var(--super-card-shadow-color);
        transform: translate(
            calc(0px - var(--super-card-hover-lift)),
            calc(0px - var(--super-card-hover-lift))
          )
          rotate(0.15deg);
      }
    }

    :host([clickable]:active) .surface {
      box-shadow:
        inset 0 2px 3px rgb(15 23 42 / 14%),
        1px 1px 0 -1px var(--super-card-shadow-color);
      transform: translate(1px, 1px) rotate(-0.15deg);
    }

    @media (prefers-reduced-motion: reduce) {
      :host([clickable]) .surface {
        transition: none;
      }

      :host([hoverable]:hover) .surface,
      :host([clickable]:hover) .surface,
      :host([clickable]:active) .surface {
        transform: none;
      }
    }
  `});const Lp="super-card",Ip=i=>D(Lp,Vr,i);class jr extends O{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.indeterminate=!1,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked,this.indeterminate=!1;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return c`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${te(this.checked)}
            .indeterminate=${this.indeterminate}
            name=${this.name}
            value=${this.value}
            aria-label=${w(this.accessibleLabel||void 0)}
            aria-labelledby=${w(this.accessibleLabel?void 0:"super-checkbox-label")}
            aria-describedby=${w(e)}
            aria-invalid=${w(t)}
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
        ${this.helperText?c`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:f}
      </span>
    `}}Object.defineProperty(jr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(jr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-checkbox-size: 22px;
      --super-checkbox-gap: 10px;
      --super-checkbox-font-size: 15px;
      --super-checkbox-color: #292524;
      --super-checkbox-border-color: #34445f;
      --super-checkbox-background: #fffef9;
      --super-checkbox-checked-background: #3978e9;
      --super-checkbox-checked-color: var(
        --super-text-color-inverse,
        #ffffff
      );
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
  `});const Dp="super-checkbox",Mp=i=>D(Dp,jr,i),Vp=/^(\d{4})-(\d{2})-(\d{2})$/,jp=/^(\d{4})-(\d{2})$/,Np=/^\d{4}$/,ce=1,Ie=9999,Vi=Ie-11,Wt="zh-CN",lr=i=>String(i).padStart(2,"0"),Be=i=>String(i).padStart(4,"0"),Qe=i=>Math.min(Ie,Math.max(ce,i)),ne=(i,e,t)=>{const r=new Date(0);return r.setHours(0,0,0,0),r.setFullYear(i,e-1,t),r},He=(i,e,t)=>`${Be(i)}-${lr(e)}-${lr(t)}`,ft=(i,e)=>`${Be(i)}-${lr(e)}`,rt=i=>{const e=Vp.exec(i);if(!e)return null;const t=Number(e[1]),r=Number(e[2]),s=Number(e[3]);if(t<ce||t>Ie||r<1||r>12||s<1)return null;const o=ne(t,r,s);return o.getFullYear()!==t||o.getMonth()!==r-1||o.getDate()!==s?null:{year:t,month:r,day:s}},ji=i=>rt(i)!==null,Os=i=>Np.test(i)&&Number(i)>=ce,Rp=i=>{const e=jp.exec(i);if(!e||!Os(e[1]))return!1;const t=Number(e[2]);return t>=1&&t<=12},Ni=(i,e)=>ne(i,e+1,0).getDate(),Bp=(i,e,t)=>ne(i,e,t).getDay(),Ri=(i,e)=>{const t=rt(i);if(!t)return i;const r=ne(t.year,t.month,t.day);return r.setDate(r.getDate()+e),r.getFullYear()<ce?He(ce,1,1):r.getFullYear()>Ie?He(Ie,12,31):He(r.getFullYear(),r.getMonth()+1,r.getDate())},Se=(i,e,t)=>{const r=i*12+(e-1)+t,s=Math.floor(r/12);if(s<ce)return{year:ce,month:1};if(s>Ie)return{year:Ie,month:12};const o=(r%12+12)%12;return{year:s,month:o+1}},Xt=()=>{const i=new Date;return He(i.getFullYear(),i.getMonth()+1,i.getDate())};class Nr extends O{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{!this.open||t.composedPath().includes(this)||this.setOpen(!1,"outside",t)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{this.setOpen(!this.open,"trigger",t)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.stopPropagation(),this.clearValue(t,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(!this.disabled){if(t.key==="Escape"&&this.open){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t);return}(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),this.setOpen(!0,"trigger",t))}}}),Object.defineProperty(this,"handleGridKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{var o;if(t.key==="Escape"){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t),(o=this.triggerElement)==null||o.focus();return}const s={ArrowLeft:-1,ArrowRight:1,ArrowUp:this.mode==="date"||this.mode==="range"?-7:-4,ArrowDown:this.mode==="date"||this.mode==="range"?7:4}[t.key];s!==void 0&&(t.preventDefault(),this.moveActive(s))}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t))}}),Object.defineProperty(this,"handleCellClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;if(s){if(this.mode==="month"){this.pickMonth(s,t);return}if(this.mode==="year"){this.pickYear(s,t);return}this.activeDate=s,this.pickDay(s,t)}}}),Object.defineProperty(this,"handleCellMouseEnter",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(this.mode!=="range"||this.pendingStart===null)return;const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;s&&!this.isKeyDisabled(s)&&(this.hoverDate=s)}}),this.mode="date",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.open=!1,this.name="",this.placeholder="选择日期",this.startPlaceholder="开始日期",this.endPlaceholder="结束日期",this.min="",this.max="",this.firstDayOfWeek=1,this.locale=Wt,this.helperText="",this.accessibleLabel="",this.todayLabel="今天",this.clearLabel="清空",this.prevMonthLabel="上个月",this.nextMonthLabel="下个月",this.prevYearLabel="上一年",this.nextYearLabel="下一年",this.disabledDate=void 0,this.shortcuts=[];const e=new Date;this.viewYear=e.getFullYear(),this.viewMonth=e.getMonth()+1,this.activeDate="",this.pendingStart=null,this.hoverDate=null}get value(){return this._value}set value(e){this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}normalizeValue(e){return this.mode==="range"?Array.isArray(e)?e.filter(t=>typeof t=="string").filter(ji).slice(0,2).sort():[]:Array.isArray(e)?"":this.mode==="month"?Rp(e)?e:"":this.mode==="year"?Os(e)?e:"":ji(e)?e:""}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){e.has("mode")&&(this.setInternalValue(this.value),this.pendingStart=null,this.hoverDate=null,this.syncView()),this.disabled&&this.open&&(this.open=!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>this.focusActiveCell())}syncView(){const e=this.viewAnchor();this.viewYear=e.year,this.viewMonth=e.month,this.mode==="year"?this.activeDate=Be(e.year):this.mode==="month"?this.activeDate=ft(e.year,e.month):this.activeDate=He(e.year,e.month,e.day)}viewAnchor(){const e=this.value,t=Array.isArray(e)?e[0]:e;let r="";typeof t=="string"&&t!==""&&(this.mode==="year"?r=`${t}-01-01`:this.mode==="month"?r=`${t}-01`:r=t);const s=r===""?null:rt(r);if(s)return s;const o=new Date;return{year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()}}dateFormatter(e){try{return new Intl.DateTimeFormat(this.locale||Wt,e)}catch{return new Intl.DateTimeFormat(Wt,e)}}formatMonthTitle(e,t){return this.dateFormatter({year:"numeric",month:"long"}).format(ne(e,t,1))}formatYearTitle(e){return this.dateFormatter({year:"numeric"}).format(ne(e,1,1))}formatMonthCell(e,t){return this.dateFormatter({month:"short"}).format(ne(e,t,1))}minKey(){return this.mode==="year"?this.min.slice(0,4):this.mode==="month"?this.min.slice(0,7):this.min.slice(0,10)}maxKey(){return this.mode==="year"?this.max.slice(0,4):this.mode==="month"?this.max.slice(0,7):this.max.slice(0,10)}isKeyDisabled(e){const t=this.minKey(),r=this.maxKey();if(t!==""&&e<t||r!==""&&e>r)return!0;if((this.mode==="date"||this.mode==="range")&&this.disabledDate!==void 0){const s=rt(e);if(s)return this.disabledDate(ne(s.year,s.month,s.day))}return!1}focusActiveCell(){const e=this.renderRoot.querySelector(".cell[data-active]");e==null||e.focus()}emitChange(e){this.dispatchEvent(new CustomEvent("super-date-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,mode:this.mode,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-date-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(e&&(this.syncView(),this.pendingStart=null,this.hoverDate=null),this.open=e,this.dispatchEvent(new CustomEvent("super-date-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),!e&&t!=="outside"&&this.updateComplete.then(()=>{var s;return(s=this.triggerElement)==null?void 0:s.focus()}))}clearValue(e,t){this.disabled||(this.setInternalValue(this.mode==="range"?[]:""),this.pendingStart=null,this.hoverDate=null,this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e))}pickDay(e,t){if(!this.isKeyDisabled(e)){if(this.mode==="range"){if(this.pendingStart===null){this.pendingStart=e,this.hoverDate=null,this.activeDate=e;return}const r=[this.pendingStart,e].sort();this.pendingStart=null,this.hoverDate=null,this.setInternalValue(r),this.emitChange(t),this.setOpen(!1,"select",t);return}this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t)}}pickMonth(e,t){this.isKeyDisabled(e)||(this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t))}pickYear(e,t){this.isKeyDisabled(e)||(this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t))}pickToday(e){const t=Xt();this.isKeyDisabled(t)||(this.setInternalValue(t),this.emitChange(e),this.setOpen(!1,"today",e))}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r),o=Array.isArray(s)?s.length===0:s==="",a=Array.isArray(s)?s:[s];o||a.some(n=>this.isKeyDisabled(n))||(this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t))}shiftView(e,t){if(this.mode==="year"){const s=t!==0?t*12:e*12;this.viewYear=Math.min(Vi,Math.max(ce,this.decadeStart()+s));return}if(this.mode==="month"){this.viewYear=Qe(this.viewYear+(t!==0?t:e));return}if(t!==0){this.viewYear=Qe(this.viewYear+t);return}const r=Se(this.viewYear,this.viewMonth,e);this.viewYear=r.year,this.viewMonth=r.month}moveActive(e){if(this.mode==="year"){const t=Number(this.activeDate)||this.viewAnchor().year;let r=Qe(t+e),s=0;for(;this.isKeyDisabled(Be(r))&&s<200;){const o=Qe(r+(e>0?1:-1));if(o===r)break;r=o,s+=1}this.activeDate=Be(r),this.ensureYearVisible(r)}else if(this.mode==="month"){const t=Number(this.activeDate.slice(0,4))||this.viewAnchor().year,r=Number(this.activeDate.slice(5,7))||this.viewAnchor().month;let s=Se(t,r,e),o=0;for(;this.isKeyDisabled(ft(s.year,s.month))&&o<200;)s=Se(s.year,s.month,e>0?1:-1),o+=1;this.activeDate=ft(s.year,s.month),this.viewYear=s.year}else{let t=Ri(this.activeDate||Xt(),e),r=0;for(;this.isKeyDisabled(t)&&r<500;)t=Ri(t,e>0?1:-1),r+=1;this.activeDate=t;const s=rt(t);s&&(this.viewYear=s.year,this.viewMonth=s.month)}this.updateComplete.then(()=>this.focusActiveCell())}ensureYearVisible(e){const t=this.decadeStart();(e<t||e>t+11)&&(this.viewYear=e)}decadeStart(){const e=Qe(this.viewYear),t=e-e%12;return Math.min(Math.max(ce,t),Vi)}rangePreview(){if(this.mode!=="range")return null;if(this.pendingStart!==null){const t=this.hoverDate??this.pendingStart,r=[this.pendingStart,t].sort();return{start:r[0],end:r[1]}}const e=this.value;return Array.isArray(e)&&e.length===2?{start:e[0],end:e[1]}:null}buildDayCells(e,t){const r=(Bp(e,t,1)-this.firstDayOfWeek+70)%7,s=Ni(e,t),o=Xt(),a=[],n=(m,k,$,E)=>{const S=He(m,k,$);a.push({year:m,month:k,day:$,key:S,adjacent:E,disabled:this.isKeyDisabled(S),today:S===o})},l=Se(e,t,-1),u=Ni(l.year,l.month);for(let m=r-1;m>=0;m-=1)n(l.year,l.month,u-m,!0);for(let m=1;m<=s;m+=1)n(e,t,m,!1);const d=Se(e,t,1);let p=1;for(;a.length%7!==0;)n(d.year,d.month,p,!0),p+=1;return a}weekdayLabels(){const e=(this.firstDayOfWeek%7+7)%7,t=this.dateFormatter({weekday:"narrow"});return Array.from({length:7},(r,s)=>{const o=(e+s)%7;return t.format(ne(2024,1,7+o))})}renderNav(e){const t=this.mode==="date"||this.mode==="range",r=e?Se(this.viewYear,this.viewMonth,1):{year:this.viewYear,month:this.viewMonth},s=t?this.formatMonthTitle(this.viewYear,this.viewMonth):this.mode==="month"?this.formatYearTitle(this.viewYear):`${this.decadeStart()} – ${this.decadeStart()+11}`,o=this.formatMonthTitle(r.year,r.month);return c`
      <div class="nav" part="nav">
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.prevYearLabel}
          @click=${()=>this.shiftView(0,-1)}
        >«</button>
        ${t?c`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.prevMonthLabel}
              @click=${()=>this.shiftView(-1,0)}
            >‹</button>`:f}
        <span class="title" part="title">${s}</span>
        ${e?c`<span class="title" part="title">${o}</span>`:f}
        ${t?c`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.nextMonthLabel}
              @click=${()=>this.shiftView(1,0)}
            >›</button>`:f}
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.nextYearLabel}
          @click=${()=>this.shiftView(0,1)}
        >»</button>
      </div>
    `}renderDayPanel(e,t){const r=this.buildDayCells(e,t),s=this.rangePreview(),o=this.value,a=!Array.isArray(o)&&this.mode==="date"?o:"";return c`
      <div class="panel" part="panel">
        <div class="weekdays" part="weekdays" aria-hidden="true">
          ${this.weekdayLabels().map(n=>c`<span class="weekday">${n}</span>`)}
        </div>
        <div
          class="grid"
          part="grid"
          role="group"
          aria-label=${this.formatMonthTitle(e,t)}
          @keydown=${this.handleGridKeydown}
        >
          ${r.map(n=>{const l=s!==null&&!n.disabled&&n.key>=s.start&&n.key<=s.end&&s.start!==s.end,u=s!==null&&(n.key===s.start||n.key===s.end)&&(this.pendingStart!==null||s.start!==s.end),d=this.mode==="range"?u:n.key===a;return c`
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
                aria-pressed=${d?"true":"false"}
                ?disabled=${n.disabled}
                @click=${this.handleCellClick}
                @mouseenter=${this.handleCellMouseEnter}
              >${n.day}</button>
            `})}
        </div>
      </div>
    `}renderMonthPanel(){const e=this.value,t=typeof e=="string"?e:"";return c`
      <div class="panel" part="panel">
        <div
          class="month-grid"
          part="grid"
          role="group"
          aria-label=${this.formatYearTitle(this.viewYear)}
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(r,s)=>{const o=s+1,a=ft(this.viewYear,o);return c`
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
    `}renderYearPanel(){const e=this.value,t=typeof e=="string"?e:"",r=this.decadeStart();return c`
      <div class="panel" part="panel">
        <div
          class="year-grid"
          part="grid"
          role="group"
          aria-label="${r} – ${r+11}"
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(s,o)=>{const a=r+o,n=Be(a);return c`
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
    `}renderShortcuts(){return this.shortcuts.length===0?f:c`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>c`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.mode==="date",t=this.clearable;return!e&&!t?f:c`
      <div class="footer" part="footer">
        ${e?c`<button
              class="footer-button today-button"
              part="today-button"
              type="button"
              @click=${r=>this.pickToday(r)}
            >${this.todayLabel}</button>`:f}
        ${t?c`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${r=>this.clearValue(r,!0)}
            >${this.clearLabel}</button>`:f}
      </div>
    `}renderPanelsWithNav(){const e=this.mode==="range",t=Se(this.viewYear,this.viewMonth,1);let r;return this.mode==="month"?r=this.renderMonthPanel():this.mode==="year"?r=this.renderYearPanel():r=c`
        ${this.renderDayPanel(this.viewYear,this.viewMonth)}
        ${e?this.renderDayPanel(t.year,t.month):f}
      `,c`
      <div class="popup-body">
        ${this.renderShortcuts()}
        <div class="panels-wrap">
          ${this.renderNav(e)}
          <div class="panels">${r}</div>
        </div>
      </div>
    `}renderTriggerText(){const e=this.value;if(this.mode==="range"){const r=Array.isArray(e)?e:[],s=r[0]??"",o=r[1]??"";return c`
        <span class="trigger-text ${s===""?"placeholder":""}" part="label">
          ${s===""?this.startPlaceholder:s}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${o===""?"placeholder":""}">
          ${o===""?this.endPlaceholder:o}
        </span>
      `}const t=typeof e=="string"?e:"";return c`
      <span class="trigger-text ${t===""?"placeholder":""}" part="label">
        ${t===""?this.placeholder:t}
      </span>
    `}render(){const e=Array.isArray(this.value)?this.value.length>0:this.value!=="",t=this.clearable&&e&&!this.disabled;return c`
      <div class="control" part="control">
        <span class="prefix" part="prefix"><slot name="prefix"></slot></span>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="popup"
          aria-label=${w(this.accessibleLabel||void 0)}
          ?disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeydown}
        >
          ${this.renderTriggerText()}
        </button>
        ${t?c`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:f}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">
            <span class="calendar-icon"></span>
          </slot>
        </span>
      </div>
      ${this.helperText!==""?c`<div class="helper" part="helper">${this.helperText}</div>`:f}
      ${this.open?c`
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
          `:f}
    `}}Object.defineProperty(Nr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{mode:{type:String,reflect:!0},value:{attribute:"value",noAccessor:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},min:{type:String},max:{type:String},firstDayOfWeek:{type:Number,attribute:"first-day-of-week"},locale:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},todayLabel:{type:String,attribute:"today-label"},clearLabel:{type:String,attribute:"clear-label"},prevMonthLabel:{type:String,attribute:"prev-month-label"},nextMonthLabel:{type:String,attribute:"next-month-label"},prevYearLabel:{type:String,attribute:"prev-year-label"},nextYearLabel:{type:String,attribute:"next-year-label"},disabledDate:{attribute:!1},shortcuts:{attribute:!1},viewYear:{state:!0},viewMonth:{state:!0},activeDate:{state:!0},pendingStart:{state:!0},hoverDate:{state:!0}}});Object.defineProperty(Nr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Fp="super-date-picker",Kp=i=>D(Fp,Nr,i),cr={fromAttribute:i=>i!==null&&i!=="false",toAttribute:i=>i?"":null},ge={fromAttribute:i=>i!=="false",toAttribute:i=>i?"":null};class _t{constructor(e,t){Object.defineProperty(this,"host",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"panel",{enumerable:!0,configurable:!0,writable:!0,value:t})}querySelectorAll(e){return[...Array.from(this.panel.querySelectorAll(e)),...Array.from(this.host.querySelectorAll(e))].filter((t,r,s)=>s.indexOf(t)===r)}contains(e){if(!e)return!1;let t=e;for(;t;){if(this.panel.contains(t)||this.host.contains(t))return!0;const r=t.getRootNode();t=r instanceof ShadowRoot?r.host:null}return!1}}function Ls({host:i,eventPrefix:e,reason:t,close:r}){const s=new CustomEvent(`${e}-before-close`,{detail:{reason:t},bubbles:!0,composed:!0,cancelable:!0});return i.dispatchEvent(s)?(t==="confirm"?i.dispatchEvent(new CustomEvent(`${e}-confirm`,{detail:{reason:"confirm"},bubbles:!0,composed:!0})):t==="cancel"&&i.dispatchEvent(new CustomEvent(`${e}-cancel`,{detail:{reason:"cancel"},bubbles:!0,composed:!0})),r(),i.dispatchEvent(new CustomEvent(`${e}-close`,{detail:{reason:t},bubbles:!0,composed:!0})),!0):!1}let Hp=0;class Rr extends O{constructor(){super(),Object.defineProperty(this,"dialogId",{enumerable:!0,configurable:!0,writable:!0,value:`super-dialog-${++Hp}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.dialogId}-title`}),Object.defineProperty(this,"bodyId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.dialogId}-body`}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.loading||this.close("confirm")}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("cancel")}}),Object.defineProperty(this,"handleMaskClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.maskClosable||e.target!==e.currentTarget||this.close("mask")}}),Object.defineProperty(this,"handleDialogKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key!=="Escape"||!this.closeOnEscape||e.defaultPrevented||(e.preventDefault(),this.close("escape"))}}),Object.defineProperty(this,"handleTabKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var u;if(!this.open||e.key!=="Tab"||e.defaultPrevented)return;const t=this.panel;if(!t)return;const r=new _t(this,t);let s=this.ownerDocument.activeElement;for(;(u=s==null?void 0:s.shadowRoot)!=null&&u.activeElement;)s=s.shadowRoot.activeElement;const o=s;if(!o||!r.contains(o))return;e.stopImmediatePropagation();const a=[...Ue(t),...Ue(this)].filter((d,p,m)=>m.indexOf(d)===p);if(a.length===0){e.preventDefault(),t.focus();return}const n=a[0],l=a[a.length-1];if(!e.shiftKey&&(o===l||!a.includes(o))){o!==n&&(e.preventDefault(),n.focus());return}e.shiftKey&&(o===n||!a.includes(o))&&(e.preventDefault(),l.focus())}}),Object.defineProperty(this,"handleFooterSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.target;this.hasFooterSlot=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}}),this.open=!1,this.title="",this.width="",this.size="medium",this.closable=!0,this.maskClosable=!0,this.closeOnEscape=!0,this.closeLabel="关闭对话框",this.showFooter=!0,this.confirmText="确定",this.cancelText="取消",this.loading=!1,this.hasFooterSlot=!1}get panel(){return this.renderRoot.querySelector('[part="dialog"]')}releaseOpenState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null,this.triggerElement=null}activateOpenState(){if(!this.isConnected)return;const e=this.panel;if(!e||this.focusTrap)return;const t=this.ownerDocument.activeElement;this.triggerElement=t instanceof HTMLElement&&!this.contains(t)?t:null,this.releaseScroll=wr();const r=new _t(this,e);this.focusTrap=kr(r,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()}close(e){this.open&&Ls({host:this,eventPrefix:"super-dialog",reason:e,close:()=>{this.open=!1}})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDialogKeydown),this.ownerDocument.addEventListener("keydown",this.handleTabKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.releaseOpenState(),this.removeEventListener("keydown",this.handleDialogKeydown),this.ownerDocument.removeEventListener("keydown",this.handleTabKeydown,!0),super.disconnectedCallback()}updated(){this.open?this.activateOpenState():this.releaseOpenState()}render(){if(!this.open)return f;const e=this.width!==""&&this.width!==void 0?`--_super-dialog-width: ${this.width};`:"",t=this.showFooter&&!this.hasFooterSlot;return c`
      <div
        class="mask"
        part="mask"
        @click=${this.handleMaskClick}
      >
        <div
          class="dialog"
          part="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby=${this.titleId}
          aria-describedby=${this.bodyId}
          tabindex="-1"
          style=${e}
        >
          <header class="header" part="header">
            <div class="title" part="title" id=${this.titleId}>
              <slot name="header">
                ${this.title!==""?this.title:c`<span class="visually-hidden">对话框</span>`}
              </slot>
            </div>
            ${this.closable?c`
                  <button
                    class="close"
                    part="close"
                    type="button"
                    aria-label=${this.closeLabel}
                    @click=${()=>this.close("close-button")}
                  >
                    ×
                  </button>
                `:f}
          </header>
          <div class="body" part="body" id=${this.bodyId}>
            <slot></slot>
          </div>
          ${this.showFooter?c`
                <footer class="footer" part="footer">
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}>
                    ${t?c`
                          <button
                            class="action"
                            type="button"
                            @click=${this.handleCancel}
                          >
                            ${this.cancelText}
                          </button>
                          <button
                            class="action primary"
                            type="button"
                            aria-busy=${this.loading?"true":"false"}
                            ?disabled=${this.loading}
                            @click=${this.handleConfirm}
                          >
                            ${this.confirmText}
                          </button>
                        `:f}
                  </slot>
                </footer>
              `:f}
        </div>
      </div>
    `}}Object.defineProperty(Rr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,converter:cr},title:{type:String,reflect:!0},width:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0,converter:ge,useDefault:!0},maskClosable:{type:Boolean,attribute:"mask-closable",reflect:!0,converter:ge,useDefault:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0,converter:ge,useDefault:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showFooter:{type:Boolean,attribute:"show-footer",reflect:!0,converter:ge,useDefault:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},loading:{type:Boolean,reflect:!0,converter:cr},hasFooterSlot:{state:!0}}});Object.defineProperty(Rr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-dialog-width: 460px;
      --super-dialog-max-width: calc(100vw - 32px);
      --super-dialog-max-height: calc(100vh - 48px);
      --super-dialog-padding: var(--super-spacing-xl, 24px);
      --super-dialog-gap: var(--super-spacing-lg, 16px);
      --super-dialog-background: var(--super-background-color, #fffef9);
      --super-dialog-color: var(--super-text-color-primary, #292524);
      --super-dialog-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-dialog-border-color: var(--super-border-color, #2f2a27);
      --super-dialog-border-width: var(--super-sketch-width, 2px);
      --super-dialog-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-dialog-mask-background: rgb(41 37 36 / 46%);
      --super-dialog-focus-color: var(--super-focus-color, #56c6b7);
      --super-dialog-primary-color: var(--super-color-primary, #4b87f5);
      --super-dialog-primary-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-dialog-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-lg, 14px);
      --super-dialog-font-size: var(--super-font-size-base, 14px);
      --super-dialog-title-font-size: var(--super-font-size-lg, 16px);
      --super-dialog-z-index: var(--super-z-index-modal, 2100);
      --super-dialog-rotation: -0.16deg;

      display: contents;
      color: var(--super-dialog-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-dialog-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="small"]) {
      --super-dialog-width: 340px;
    }

    :host([size="large"]) {
      --super-dialog-width: 640px;
    }

    .mask {
      position: fixed;
      inset: 0;
      z-index: var(--super-dialog-z-index);
      display: grid;
      place-items: center;
      box-sizing: border-box;
      padding: 24px;
      overflow: auto;
      background: var(--super-dialog-mask-background);
      animation: super-dialog-mask-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .dialog {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      inline-size: var(--_super-dialog-width, var(--super-dialog-width));
      max-inline-size: var(--super-dialog-max-width);
      max-block-size: var(--super-dialog-max-height);
      min-block-size: 0;
      overflow: hidden;
      color: var(--super-dialog-color);
      background: var(--super-dialog-background);
      border: var(--super-dialog-border-width) solid
        var(--super-dialog-border-color);
      border-radius: var(--super-dialog-radius);
      box-shadow: ${ee(je({color:"var(--super-dialog-shadow-color)"}))};
      transform: rotate(var(--super-dialog-rotation));
      transform-origin: center;
      animation: super-dialog-panel-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .dialog::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${ee($r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
    }

    .header {
      display: flex;
      flex: none;
      gap: var(--super-spacing-md, 12px);
      align-items: flex-start;
      justify-content: space-between;
      box-sizing: border-box;
      padding: var(--super-dialog-padding);
      padding-block-end: var(--super-spacing-md, 12px);
      border-block-end: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .title {
      min-inline-size: 0;
      margin: 0;
      color: var(--super-dialog-color);
      font-size: var(--super-dialog-title-font-size);
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 30px;
      block-size: 30px;
      margin: -5px -6px 0 0;
      padding: 0;
      color: var(--super-dialog-muted-color);
      font: inherit;
      font-size: 19px;
      line-height: 1;
      background: transparent;
      border: 1.5px solid transparent;
      border-radius: 7px 9px 6px 8px / 8px 6px 9px 7px;
      cursor: pointer;
    }

    .close:hover {
      color: var(--super-dialog-color);
      background: var(--super-background-color-soft, #f7f4ec);
      border-color: var(--super-dialog-border-color);
    }

    .close:focus-visible,
    .action:focus-visible {
      outline: 3px solid var(--super-dialog-focus-color);
      outline-offset: 2px;
    }

    .body {
      flex: 1 1 auto;
      min-block-size: 0;
      padding: var(--super-spacing-md, 12px) var(--super-dialog-padding)
        var(--super-dialog-padding);
      overflow: auto;
      overflow-wrap: anywhere;
    }

    .footer {
      display: flex;
      flex: none;
      flex-wrap: wrap;
      gap: var(--super-spacing-sm, 8px);
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: var(--super-spacing-md, 12px) var(--super-dialog-padding)
        var(--super-dialog-padding);
      border-block-start: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .action {
      box-sizing: border-box;
      min-block-size: 36px;
      padding: 6px 16px;
      color: var(--super-dialog-color);
      font: inherit;
      font-weight: 700;
      line-height: 1.3;
      background: var(--super-background-color, #fffef9);
      border: var(--super-dialog-border-width) solid
        var(--super-dialog-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 3px 0 -1px var(--super-dialog-shadow-color);
      cursor: pointer;
    }

    .action:hover {
      transform: translate(-1px, -1px) rotate(0.15deg);
    }

    .action:active {
      transform: translate(1px, 1px);
      box-shadow: none;
    }

    .action.primary {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-dialog-primary-color);
      border-color: var(--super-dialog-primary-border-color);
    }

    .action:disabled {
      cursor: wait;
      opacity: 0.65;
    }

    .visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    @keyframes super-dialog-mask-in {
      from {
        opacity: 0;
      }
    }

    @keyframes super-dialog-panel-in {
      from {
        opacity: 0;
        transform: translateY(8px) rotate(var(--super-dialog-rotation));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .mask,
      .dialog {
        animation: none;
      }

      .dialog {
        transform: none;
      }
    }

    @media (max-width: 560px) {
      :host {
        --super-dialog-padding: var(--super-spacing-lg, 16px);
        --super-dialog-max-width: calc(100vw - 24px);
        --super-dialog-max-height: calc(100vh - 24px);
      }

      .mask {
        padding: 12px;
      }
    }
  `});const Up="super-dialog",qp=i=>D(Up,Rr,i);class Br extends O{constructor(){super(),Object.defineProperty(this,"hasContent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"syncContentPresence",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasContent&&(this.hasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.syncContentPresence(e)}}),this.direction="horizontal",this.contentPosition="center",this.variant="solid",this.color="",this.size="medium",this.hasContent=!1}render(){const e=this.direction==="vertical",t=this.color?{"--super-divider-color":this.color}:{};return c`
      <div
        class="divider"
        part="divider"
        role="separator"
        aria-orientation=${e?"vertical":"horizontal"}
        style=${ie(t)}
      >
        <span class="line start" part="line" aria-hidden="true"></span>
        ${e?f:c`
              <span class="content" part="content" ?hidden=${!this.hasContent}>
                <slot @slotchange=${this.handleSlotChange}></slot>
              </span>
            `}
        <span class="line end" part="line" aria-hidden="true"></span>
      </div>
    `}}Object.defineProperty(Br,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{direction:{type:String,reflect:!0},contentPosition:{type:String,attribute:"content-position",reflect:!0},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Br,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-divider-color: var(--super-border-color-lighter, #ddd5cd);
      --super-divider-thickness: var(--super-sketch-width, 2px);
      --super-divider-gap: var(--super-spacing-md, 12px);
      --super-divider-font-size: var(--super-font-size-sm, 13px);
      --super-divider-content-color: var(--super-text-color-secondary, #6b6360);
      --super-divider-content-background: var(--super-background-color, #fffef9);
      --super-divider-content-padding: 0 var(--super-spacing-sm, 8px);
      --super-divider-vertical-height: 1.25em;
      --super-divider-rotation: -0.45deg;

      display: block;
      box-sizing: border-box;
      color: var(--super-divider-content-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-divider-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-divider-gap: var(--super-spacing-lg, 16px);
      --super-divider-font-size: var(--super-font-size-lg, 16px);
      --super-divider-content-padding: 0 var(--super-spacing-md, 12px);
    }

    :host([size="small"]) {
      --super-divider-gap: var(--super-spacing-xs, 4px);
      --super-divider-font-size: 12px;
      --super-divider-content-padding: 0 var(--super-spacing-xs, 4px);
    }

    :host([direction="vertical"]) {
      display: inline-block;
      block-size: var(--super-divider-vertical-height);
      vertical-align: middle;
    }

    .divider {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-inline-size: 0;
    }

    :host([direction="vertical"]) .divider {
      flex-direction: column;
      inline-size: auto;
      block-size: 100%;
    }

    .line {
      display: block;
      flex: 1 1 0;
      min-inline-size: 0;
      min-block-size: var(--super-divider-thickness);
      background: var(--super-divider-color);
      border-radius: 45% 55% 48% 52% / 100%;
      opacity: 0.9;
      transform: rotate(var(--super-divider-rotation));
    }

    :host([variant="dashed"]) .line {
      background: repeating-linear-gradient(
        90deg,
        var(--super-divider-color) 0 7px,
        transparent 7px 12px
      );
    }

    :host([variant="hand-drawn"]) .line {
      background:
        linear-gradient(
          90deg,
          transparent 0 1.5%,
          var(--super-divider-color) 1.5% 98.5%,
          transparent 98.5%
        );
      transform: rotate(var(--super-divider-rotation)) translateY(0.25px);
    }

    :host([variant="hand-drawn"]) .line.end {
      transform: rotate(calc(var(--super-divider-rotation) + 0.765deg)) translateY(-0.25px);
    }

    :host([direction="vertical"]) .line {
      inline-size: var(--super-divider-thickness);
      min-block-size: 0;
      min-inline-size: 0;
      flex: 1 1 0;
      transform: rotate(var(--super-divider-rotation));
    }

    :host([direction="vertical"][variant="dashed"]) .line {
      background: repeating-linear-gradient(
        180deg,
        var(--super-divider-color) 0 7px,
        transparent 7px 12px
      );
    }

    :host([direction="vertical"][variant="hand-drawn"]) .line {
      background:
        linear-gradient(
          180deg,
          transparent 0 1.5%,
          var(--super-divider-color) 1.5% 98.5%,
          transparent 98.5%
        );
    }

    .content {
      flex: 0 0 auto;
      margin-inline: var(--super-divider-gap);
      padding: var(--super-divider-content-padding);
      color: var(--super-divider-content-color);
      background: var(--super-divider-content-background);
      white-space: nowrap;
    }

    .content[hidden] {
      display: none;
    }

    :host([content-position="left"]) .line.start {
      flex: 0 0 var(--super-divider-gap);
    }

    :host([content-position="right"]) .line.end {
      flex: 0 0 var(--super-divider-gap);
    }

    :host([direction="vertical"]) .content {
      display: none;
    }

    slot {
      display: contents;
    }
  `});const Gp="super-divider",Yp=i=>D(Gp,Br,i),Bi="button, a[href], input, select, textarea, summary",Wp=120;let Xp=0;class Fr extends O{constructor(){super(),Object.defineProperty(this,"dropdownId",{enumerable:!0,configurable:!0,writable:!0,value:`super-dropdown-${++Xp}`}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"menuElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pendingFocus",{enumerable:!0,configurable:!0,writable:!0,value:"none"}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&(this.triggerElement?this.startFloating():this.destroyFloating())}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="click"||e.composedPath().includes(this.triggerElement)&&(this.clearHoverCloseTimer(),this.setOpen(!this.open))}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger==="manual")return;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const r=e.key==="ArrowDown"?"first":"last";this.open?this.focusMenuEdge(r):this.setOpen(!0,r);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"trigger");return}if(e.key==="Tab"&&this.open){this.setOpen(!1);return}if(e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;this.trigger!=="click"||e.repeat||!t||this.hasNativeActivation(e,t)||(e.preventDefault(),this.setOpen(!this.open,this.open?"none":"first"))}}),Object.defineProperty(this,"handleMenuKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.open||e.defaultPrevented)return;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault(),this.moveMenuFocus(e.key==="ArrowDown"?1:-1);return}if(e.key==="Home"||e.key==="End"){e.preventDefault(),this.focusMenuEdge(e.key==="Home"?"first":"last");return}if(e.key==="Escape"){e.preventDefault(),this.setOpen(!1,"trigger");return}if(e.key==="Tab"){this.setOpen(!1);return}if(e.key!=="Enter"&&e.key!==" ")return;const t=e.composedPath()[0];if(!(t instanceof HTMLElement))return;const r=t.closest('[role="menuitem"]'),s=Number(r==null?void 0:r.dataset.index),o=Number.isInteger(s)?this.items[s]:void 0;!o||o.disabled||o.divider||(e.preventDefault(),this.selectItem(o))}}),Object.defineProperty(this,"handleItemPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget;t.getAttribute("aria-disabled")!=="true"&&t.focus({preventScroll:!0})}}),Object.defineProperty(this,"handleItemClick",{enumerable:!0,configurable:!0,writable:!0,value:(e,t)=>{t.preventDefault(),this.selectItem(e)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.setOpen(!1,"trigger"))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||(e.preventDefault(),this.clearHoverCloseTimer(),this.setOpen(!1,"trigger"))}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||e.relatedTarget instanceof Node&&this.contains(e.relatedTarget)||this.scheduleHoverClose()}}),this.open=!1,this.items=[],this.trigger="click",this.placement="bottom-start",this.closeOnSelect=!0,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.disabled=!1,this.size="medium"}get menuId(){return`${this.dropdownId}-menu`}get menuLabel(){var e;return((e=this.getAttribute("aria-label"))==null?void 0:e.trim())||"操作菜单"}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},Wp)}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}focusMenuEdge(e){const t=this.enabledMenuItems,r=e==="first"?t[0]:t.at(-1);r==null||r.focus({preventScroll:!0})}scheduleMenuFocus(e){this.pendingFocus=e,this.updateComplete.then(()=>{!this.open||this.pendingFocus!==e||(this.pendingFocus="none",this.focusMenuEdge(e))})}setOpen(e,t="none"){if(!(e&&this.disabled)){if(this.open===e){e&&(t==="first"||t==="last")&&this.scheduleMenuFocus(t);return}this.pendingFocus=e?t:"none",this.open=e,this.dispatchEvent(new CustomEvent("super-dropdown-open-change",{detail:{open:e},bubbles:!0,composed:!0})),!e&&t==="trigger"&&this.focusTrigger()}}get enabledMenuItems(){return Array.from(this.renderRoot.querySelectorAll('[part="menu"] [role="menuitem"]:not([aria-disabled="true"])'))}moveMenuFocus(e){var a;const t=this.enabledMenuItems;if(t.length===0)return;const r=this.renderRoot.activeElement,s=t.indexOf(r),o=s<0?e===1?0:t.length-1:(s+e+t.length)%t.length;(a=t[o])==null||a.focus({preventScroll:!0})}syncTriggerAria(){var t,r;const e=this.triggerElement;e&&(e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.open?e.setAttribute("aria-controls",this.menuId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"),this.disabled?e.setAttribute("aria-disabled","true"):(r=this.triggerAria)!=null&&r.disabled?e.setAttribute("aria-disabled",this.triggerAria.disabled):e.removeAttribute("aria-disabled"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls),r("aria-disabled",t.disabled)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls"),disabled:e.getAttribute("aria-disabled")},e.addEventListener("click",this.handleTriggerClick),e.addEventListener("keydown",this.handleTriggerKeydown),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleTriggerClick),e.removeEventListener("keydown",this.handleTriggerKeydown),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.menuElement;if(!e||!t)return;t.style.position="fixed",t.style.left="0px",t.style.top="0px";const r=e.getBoundingClientRect().width;r>0&&(t.style.minInlineSize=`${Math.ceil(r)}px`),this.floating=pt(e,t,{placement:this.placement,offset:6})}activateOpenState(){this.startFloating();const e=this.pendingFocus;e==="first"||e==="last"?this.scheduleMenuFocus(e):this.pendingFocus="none"}deactivateOpenState(){this.destroyFloating(),this.pendingFocus="none"}hasNativeActivation(e,t){return t.matches(Bi)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(Bi))}selectItem(e){this.disabled||e.disabled||e.divider||(this.dispatchEvent(new CustomEvent("super-dropdown-select",{detail:{key:e.key},bubbles:!0,composed:!0})),this.closeOnSelect&&this.setOpen(!1,"trigger"))}focus(e){if(this.triggerElement){this.triggerElement.focus(e);return}super.focus(e)}blur(){if(this.triggerElement){this.triggerElement.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointerleave",this.handlePointerLeave),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.deactivateOpenState(),this.unbindTrigger(),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointerleave",this.handlePointerLeave),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.open=!1,this.pendingFocus="none"),e.has("trigger")&&e.get("trigger")!==void 0&&this.open&&(this.open=!1,this.pendingFocus="none")}updated(e){var r;this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled")||e.has("trigger"))&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}e.has("placement")?this.startFloating():e.has("items")&&((r=this.floating)==null||r.update())}render(){return c`
      <span class="trigger" part="trigger">
        <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      </span>
      ${this.open?c`
            <div
              class="menu"
              part="menu"
              id=${this.menuId}
              role="menu"
              tabindex="-1"
              aria-label=${this.menuLabel}
              data-placement=${this.placement}
              @keydown=${this.handleMenuKeydown}
              @pointerenter=${this.handlePointerEnter}
              @pointerleave=${this.handlePointerLeave}
            >
              ${this.items.map((e,t)=>e.divider?c`
                      <div
                        class="divider"
                        part="divider"
                        role="separator"
                      ></div>
                    `:c`
                      <div
                        class="item"
                        part="item"
                        role="menuitem"
                        tabindex=${e.disabled?"-1":"0"}
                        data-index=${t}
                        ?data-danger=${e.danger}
                        aria-disabled=${e.disabled?"true":"false"}
                        @click=${r=>this.handleItemClick(e,r)}
                        @pointerenter=${this.handleItemPointerEnter}
                      >${e.label}</div>
                    `)}
            </div>
          `:f}
    `}}Object.defineProperty(Fr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},items:{attribute:!1},trigger:{type:String,reflect:!0},placement:{type:String,reflect:!0},closeOnSelect:{type:Boolean,attribute:"close-on-select",reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Fr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-dropdown-menu-min-width: 160px;
      --super-dropdown-menu-padding: var(--super-spacing-xs, 4px);
      --super-dropdown-item-gap: var(--super-spacing-sm, 8px);
      --super-dropdown-item-padding-block: 7px;
      --super-dropdown-item-padding-inline: 10px;
      --super-dropdown-font-size: var(--super-font-size-base, 14px);
      --super-dropdown-color: var(--super-text-color-primary, #292524);
      --super-dropdown-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-dropdown-background: var(--super-background-color, #fffef9);
      --super-dropdown-border-color: var(--super-border-color, #2f2a27);
      --super-dropdown-divider-color: var(--super-border-color-light, #b6ada6);
      --super-dropdown-hover-background: #eef5ff;
      --super-dropdown-focus-color: var(--super-focus-color, #56c6b7);
      --super-dropdown-danger-color: #cf3038;
      --super-dropdown-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-dropdown-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px);
      --super-dropdown-z-index: var(--super-z-index-overlay, 2000);
      --super-dropdown-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-dropdown-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-dropdown-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([open]) {
      z-index: var(--super-dropdown-z-index);
    }

    .trigger {
      display: inline-flex;
      max-inline-size: 100%;
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-dropdown-z-index);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-inline-size: var(--super-dropdown-menu-min-width);
      max-inline-size: calc(100vw - 16px);
      max-block-size: min(60vh, 360px);
      margin: 0;
      padding: var(--super-dropdown-menu-padding);
      overflow: auto;
      overscroll-behavior: contain;
      color: var(--super-dropdown-color);
      background: var(--super-dropdown-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-dropdown-border-color);
      border-radius: var(--super-dropdown-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-dropdown-shadow-color);
      outline: none;
      transform: rotate(var(--super-dropdown-rotation));
      transform-origin: top center;
    }

    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-dropdown-item-gap);
      min-block-size: 32px;
      padding: var(--super-dropdown-item-padding-block)
        var(--super-dropdown-item-padding-inline);
      color: inherit;
      font: inherit;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
      cursor: pointer;
      outline: none;
      user-select: none;
    }

    .item:hover,
    .item:focus-visible,
    .item[data-active] {
      background: var(--super-dropdown-hover-background);
    }

    .item:focus-visible {
      outline: 2px solid var(--super-dropdown-focus-color);
      outline-offset: -2px;
    }

    .item[data-danger] {
      color: var(--super-dropdown-danger-color);
    }

    .item[aria-disabled="true"] {
      color: var(--super-dropdown-muted-color);
      cursor: not-allowed;
      opacity: 0.62;
    }

    .item[aria-disabled="true"]:hover,
    .item[aria-disabled="true"]:focus-visible {
      background: transparent;
    }

    .divider {
      block-size: 0;
      margin: 4px 6px;
      border-block-start: 1.5px dashed var(--super-dropdown-divider-color);
    }

    :host([size="large"]) {
      --super-dropdown-item-padding-block: 10px;
      --super-dropdown-item-padding-inline: 13px;
      --super-dropdown-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-dropdown-item-padding-block: 5px;
      --super-dropdown-item-padding-inline: 8px;
      --super-dropdown-font-size: var(--super-font-size-sm, 13px);
    }

    @media (prefers-reduced-motion: reduce) {
      .menu {
        transform: none;
      }
    }
  `});const Jp="super-dropdown",Zp=i=>D(Jp,Fr,i),Qp=["small","medium","large"];let ed=0;class Kr extends O{constructor(){super(),Object.defineProperty(this,"drawerId",{enumerable:!0,configurable:!0,writable:!0,value:`super-drawer-${++ed}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.drawerId}-title`}),Object.defineProperty(this,"bodyId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.drawerId}-body`}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("confirm")}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("cancel")}}),Object.defineProperty(this,"handleMaskClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.maskClosable||e.target!==e.currentTarget||this.close("mask")}}),Object.defineProperty(this,"handleDrawerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key!=="Escape"||!this.closeOnEscape||e.defaultPrevented||(e.preventDefault(),this.close("escape"))}}),Object.defineProperty(this,"handleTabKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var u;if(!this.open||e.key!=="Tab"||e.defaultPrevented)return;const t=this.panel;if(!t)return;const r=new _t(this,t);let s=this.ownerDocument.activeElement;for(;(u=s==null?void 0:s.shadowRoot)!=null&&u.activeElement;)s=s.shadowRoot.activeElement;const o=s;if(!o||!r.contains(o))return;e.stopImmediatePropagation();const a=[...Ue(t),...Ue(this)].filter((d,p,m)=>m.indexOf(d)===p);if(a.length===0){e.preventDefault(),t.focus();return}const n=a[0],l=a[a.length-1];if(!e.shiftKey&&(o===l||!a.includes(o))){o!==n&&(e.preventDefault(),n.focus());return}e.shiftKey&&(o===n||!a.includes(o))&&(e.preventDefault(),l.focus())}}),Object.defineProperty(this,"handleFooterSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.target;this.hasFooterSlot=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}}),this.open=!1,this.title="",this.placement="right",this.size="medium",this.closable=!0,this.maskClosable=!0,this.closeOnEscape=!0,this.closeLabel="关闭抽屉",this.showFooter=!0,this.confirmText="确定",this.cancelText="取消",this.hasFooterSlot=!1}get panel(){return this.renderRoot.querySelector('[part="drawer"]')}releaseOpenState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null,this.triggerElement=null}activateOpenState(){if(!this.isConnected)return;const e=this.panel;if(!e||this.focusTrap)return;const t=this.ownerDocument.activeElement;this.triggerElement=t instanceof HTMLElement&&!this.contains(t)?t:null,this.releaseScroll=wr();const r=new _t(this,e);this.focusTrap=kr(r,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()}close(e){this.open&&Ls({host:this,eventPrefix:"super-drawer",reason:e,close:()=>{this.open=!1}})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDrawerKeydown),this.ownerDocument.addEventListener("keydown",this.handleTabKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.releaseOpenState(),this.removeEventListener("keydown",this.handleDrawerKeydown),this.ownerDocument.removeEventListener("keydown",this.handleTabKeydown,!0),super.disconnectedCallback()}updated(){this.open?this.activateOpenState():this.releaseOpenState()}render(){if(!this.open)return f;const e=Number.isFinite(this.size)?`${Math.max(0,this.size)}px`:typeof this.size=="string"&&this.size!==""&&!Qp.includes(this.size)?this.size:void 0,t=e?`--_super-drawer-size: ${e};`:"",r=this.showFooter&&!this.hasFooterSlot;return c`
      <div
        class="mask"
        part="mask"
        @click=${this.handleMaskClick}
      >
        <div
          class="drawer"
          part="drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby=${this.titleId}
          aria-describedby=${this.bodyId}
          tabindex="-1"
          style=${t}
        >
          <header class="header" part="header">
            <div class="title" part="title" id=${this.titleId}>
              <slot name="header">
                ${this.title!==""?this.title:c`<span class="visually-hidden">抽屉</span>`}
              </slot>
            </div>
            ${this.closable?c`
                  <button
                    class="close"
                    part="close"
                    type="button"
                    aria-label=${this.closeLabel}
                    @click=${()=>this.close("close-button")}
                  >
                    ×
                  </button>
                `:f}
          </header>
          <div class="body" part="body" id=${this.bodyId}>
            <slot></slot>
          </div>
          ${this.showFooter?c`
                <footer class="footer" part="footer">
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}>
                    ${r?c`
                          <button
                            class="action"
                            type="button"
                            @click=${this.handleCancel}
                          >
                            ${this.cancelText}
                          </button>
                          <button
                            class="action primary"
                            type="button"
                            @click=${this.handleConfirm}
                          >
                            ${this.confirmText}
                          </button>
                        `:f}
                  </slot>
                </footer>
              `:f}
        </div>
      </div>
    `}}Object.defineProperty(Kr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,converter:cr},title:{type:String,reflect:!0},placement:{type:String,reflect:!0},size:{type:String,reflect:!0,converter:{fromAttribute:i=>{if(i===null)return"medium";const e=Number(i);return i.trim()!==""&&Number.isFinite(e)?e:i},toAttribute:i=>String(i)}},closable:{type:Boolean,reflect:!0,converter:ge,useDefault:!0},maskClosable:{type:Boolean,attribute:"mask-closable",reflect:!0,converter:ge,useDefault:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0,converter:ge,useDefault:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showFooter:{type:Boolean,attribute:"show-footer",reflect:!0,converter:ge,useDefault:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},hasFooterSlot:{state:!0}}});Object.defineProperty(Kr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-drawer-size: 380px;
      --super-drawer-max-width: calc(100vw - 32px);
      --super-drawer-max-height: calc(100vh - 32px);
      --super-drawer-padding: var(--super-spacing-xl, 24px);
      --super-drawer-background: var(--super-background-color, #fffef9);
      --super-drawer-color: var(--super-text-color-primary, #292524);
      --super-drawer-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-drawer-border-color: var(--super-border-color, #2f2a27);
      --super-drawer-border-width: var(--super-sketch-width, 2px);
      --super-drawer-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-drawer-mask-background: rgb(41 37 36 / 46%);
      --super-drawer-focus-color: var(--super-focus-color, #56c6b7);
      --super-drawer-primary-color: var(--super-color-primary, #4b87f5);
      --super-drawer-primary-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-drawer-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-lg, 14px);
      --super-drawer-font-size: var(--super-font-size-base, 14px);
      --super-drawer-title-font-size: var(--super-font-size-lg, 16px);
      --super-drawer-z-index: var(--super-z-index-modal, 2100);
      --super-drawer-rotation: -0.14deg;

      display: contents;
      color: var(--super-drawer-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-drawer-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="small"]) {
      --super-drawer-size: 280px;
    }

    :host([size="large"]) {
      --super-drawer-size: 520px;
    }

    :host([placement="left"]),
    :host([placement="right"]) {
      --_super-drawer-length: var(--_super-drawer-size, var(--super-drawer-size));
    }

    :host([placement="top"]),
    :host([placement="bottom"]) {
      --_super-drawer-length: var(
        --_super-drawer-size,
        var(--super-drawer-size)
      );
    }

    .mask {
      position: fixed;
      inset: 0;
      z-index: var(--super-drawer-z-index);
      background: var(--super-drawer-mask-background);
      animation: super-drawer-mask-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .drawer {
      position: absolute;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      max-inline-size: var(--super-drawer-max-width);
      max-block-size: var(--super-drawer-max-height);
      overflow: hidden;
      color: var(--super-drawer-color);
      background: var(--super-drawer-background);
      border: var(--super-drawer-border-width) solid
        var(--super-drawer-border-color);
      border-radius: var(--super-drawer-radius);
      box-shadow: ${ee(je({color:"var(--super-drawer-shadow-color)"}))};
      transform: rotate(var(--super-drawer-rotation));
      animation: super-drawer-panel-in var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .drawer::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${ee($r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
    }

    :host([placement="right"]) .drawer {
      inset-block: 16px;
      inset-inline-end: 16px;
      inline-size: var(--_super-drawer-length);
    }

    :host([placement="left"]) .drawer {
      inset-block: 16px;
      inset-inline-start: 16px;
      inline-size: var(--_super-drawer-length);
    }

    :host([placement="top"]) .drawer {
      inset-block-start: 16px;
      inset-inline: 16px;
      block-size: var(--_super-drawer-length);
    }

    :host([placement="bottom"]) .drawer {
      inset-block-end: 16px;
      inset-inline: 16px;
      block-size: var(--_super-drawer-length);
    }

    .header {
      display: flex;
      flex: none;
      gap: var(--super-spacing-md, 12px);
      align-items: flex-start;
      justify-content: space-between;
      box-sizing: border-box;
      padding: var(--super-drawer-padding);
      padding-block-end: var(--super-spacing-md, 12px);
      border-block-end: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .title {
      min-inline-size: 0;
      margin: 0;
      color: var(--super-drawer-color);
      font-size: var(--super-drawer-title-font-size);
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: 30px;
      block-size: 30px;
      margin: -5px -6px 0 0;
      padding: 0;
      color: var(--super-drawer-muted-color);
      font: inherit;
      font-size: 19px;
      line-height: 1;
      background: transparent;
      border: 1.5px solid transparent;
      border-radius: 7px 9px 6px 8px / 8px 6px 9px 7px;
      cursor: pointer;
    }

    .close:hover {
      color: var(--super-drawer-color);
      background: var(--super-background-color-soft, #f7f4ec);
      border-color: var(--super-drawer-border-color);
    }

    .close:focus-visible,
    .action:focus-visible {
      outline: 3px solid var(--super-drawer-focus-color);
      outline-offset: 2px;
    }

    .body {
      flex: 1 1 auto;
      min-block-size: 0;
      padding: var(--super-spacing-md, 12px) var(--super-drawer-padding)
        var(--super-drawer-padding);
      overflow: auto;
      overflow-wrap: anywhere;
    }

    .footer {
      display: flex;
      flex: none;
      flex-wrap: wrap;
      gap: var(--super-spacing-sm, 8px);
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: var(--super-spacing-md, 12px) var(--super-drawer-padding)
        var(--super-drawer-padding);
      border-block-start: 1.5px dashed var(--super-border-color-light, #b6ada6);
    }

    .action {
      box-sizing: border-box;
      min-block-size: 36px;
      padding: 6px 16px;
      color: var(--super-drawer-color);
      font: inherit;
      font-weight: 700;
      line-height: 1.3;
      background: var(--super-background-color, #fffef9);
      border: var(--super-drawer-border-width) solid
        var(--super-drawer-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 2px 3px 0 -1px var(--super-drawer-shadow-color);
      cursor: pointer;
    }

    .action:hover {
      transform: translate(-1px, -1px) rotate(0.15deg);
    }

    .action:active {
      transform: translate(1px, 1px);
      box-shadow: none;
    }

    .action.primary {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-drawer-primary-color);
      border-color: var(--super-drawer-primary-border-color);
    }

    .visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    @keyframes super-drawer-mask-in {
      from {
        opacity: 0;
      }
    }

    @keyframes super-drawer-panel-in {
      from {
        opacity: 0;
        transform: translateX(10px) rotate(var(--super-drawer-rotation));
      }
    }

    :host([placement="left"]) .drawer {
      animation-name: super-drawer-panel-in-left;
    }

    :host([placement="top"]) .drawer {
      animation-name: super-drawer-panel-in-top;
    }

    :host([placement="bottom"]) .drawer {
      animation-name: super-drawer-panel-in-bottom;
    }

    @keyframes super-drawer-panel-in-left {
      from {
        opacity: 0;
        transform: translateX(-10px) rotate(var(--super-drawer-rotation));
      }
    }

    @keyframes super-drawer-panel-in-top {
      from {
        opacity: 0;
        transform: translateY(-10px) rotate(var(--super-drawer-rotation));
      }
    }

    @keyframes super-drawer-panel-in-bottom {
      from {
        opacity: 0;
        transform: translateY(10px) rotate(var(--super-drawer-rotation));
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .mask,
      .drawer {
        animation: none;
      }

      .drawer {
        transform: none;
      }
    }

    @media (max-width: 560px) {
      :host {
        --super-drawer-padding: var(--super-spacing-lg, 16px);
        --super-drawer-max-width: calc(100vw - 24px);
        --super-drawer-max-height: calc(100vh - 24px);
      }

      :host([placement="right"]) .drawer,
      :host([placement="left"]) .drawer {
        inset-block: 12px;
        inline-size: calc(100vw - 24px);
      }

      :host([placement="right"]) .drawer {
        inset-inline-end: 12px;
      }

      :host([placement="left"]) .drawer {
        inset-inline-start: 12px;
      }

      :host([placement="top"]) .drawer,
      :host([placement="bottom"]) .drawer {
        inset-inline: 12px;
        block-size: calc(100vh - 24px);
      }

      :host([placement="top"]) .drawer {
        inset-block-start: 12px;
      }

      :host([placement="bottom"]) .drawer {
        inset-block-end: 12px;
      }
    }
  `});const td="super-drawer",rd=i=>D(td,Kr,i);class Hr extends O{constructor(){super(),Object.defineProperty(this,"hasAction",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"syncActionPresence",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasAction&&(this.hasAction=r,this.requestUpdate())}}),this.description="暂无数据",this.size="medium",this.image=""}render(){return c`
      <div class="empty" part="empty" role="status">
        <div class="illustration" part="illustration" aria-hidden="true">
          ${this.image?c`<img
                class="image"
                part="image"
                src=${this.image}
                alt=""
                aria-hidden="true"
              />`:c`
                <slot>
                  <svg
                    class="drawing"
                    viewBox="0 0 120 96"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M18 70c4-17 17-28 35-29 19-1 37 8 47 24"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-dasharray="3 5"
                    />
                    <path
                      d="M28 62c2-12 10-20 21-22 12-2 24 4 31 15"
                      stroke="currentColor"
                      stroke-width="2.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M38 78h44"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-dasharray="7 6"
                    />
                    <path
                      d="M47 43l3-7 6-2 5 4-2 7-7 2-5-4Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M72 30l2-5 5-1 3 4-2 5-5 1-3-4Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linejoin="round"
                    />
                  </svg>
                </slot>
              `}
        </div>
        <p class="description" part="description">${this.description}</p>
        <div class="action" part="action" ?hidden=${!this.hasAction}>
          <slot name="action" @slotchange=${this.syncActionPresence}></slot>
        </div>
      </div>
    `}}Object.defineProperty(Hr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{description:{type:String,reflect:!0},size:{type:String,reflect:!0},image:{type:String,reflect:!0}}});Object.defineProperty(Hr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-empty-illustration-size: 132px;
      --super-empty-gap: var(--super-spacing-md, 12px);
      --super-empty-padding: var(--super-spacing-xl, 24px);
      --super-empty-font-size: var(--super-font-size-base, 14px);
      --super-empty-color: var(--super-text-color-secondary, #6b6360);
      --super-empty-illustration-color: var(--super-text-color-placeholder, #9a938f);
      --super-empty-illustration-background: var(--super-background-color-soft, #f7f4ec);
      --super-empty-illustration-border-color: var(--super-border-color-light, #b6ada6);
      --super-empty-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-lg, 14px);
      --super-empty-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-empty-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-empty-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-empty-illustration-size: 176px;
      --super-empty-gap: var(--super-spacing-lg, 16px);
      --super-empty-padding: var(--super-spacing-xl, 32px);
      --super-empty-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-empty-illustration-size: 88px;
      --super-empty-gap: var(--super-spacing-sm, 8px);
      --super-empty-padding: var(--super-spacing-lg, 16px);
      --super-empty-font-size: var(--super-font-size-sm, 13px);
    }

    .empty {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      inline-size: 100%;
      gap: var(--super-empty-gap);
      padding: var(--super-empty-padding);
      text-align: center;
    }

    .illustration {
      display: grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-empty-illustration-size);
      max-inline-size: 100%;
      aspect-ratio: 1;
      overflow: hidden;
      color: var(--super-empty-illustration-color);
      background: var(--super-empty-illustration-background);
      border: var(--super-sketch-width, 2px) solid var(--super-empty-illustration-border-color);
      border-radius: var(--super-empty-radius);
      transform: rotate(var(--super-empty-rotation));
    }

    .image {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      object-fit: contain;
    }

    .drawing {
      inline-size: 78%;
      block-size: auto;
      overflow: visible;
      opacity: 0.86;
    }

    .description {
      max-inline-size: 40ch;
      margin: 0;
      color: var(--super-empty-color);
      font-size: var(--super-empty-font-size);
    }

    .action {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--super-empty-gap);
    }

    .action[hidden] {
      display: none;
    }

    slot {
      display: contents;
    }
  `});const id="super-empty",sd=i=>D(id,Hr,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const s of t)(r=s._$AO)==null||r.call(s,e,!1),it(s,e);return!0},Et=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},Is=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),nd(e)}};function od(i){this._$AN!==void 0?(Et(this),this._$AM=i,Is(this)):this._$AM=i}function ad(i,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let o=t;o<r.length;o++)it(r[o],!1),Et(r[o]);else r!=null&&(it(r,!1),Et(r));else it(this,i)}const nd=i=>{i.type==fe.CHILD&&(i._$AP??(i._$AP=ad),i._$AQ??(i._$AQ=od))};class ld extends Tr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Is(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),t&&(it(this,e),Et(this))}setValue(e){if(ys(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Jt=new WeakMap,cd=Pr(class extends ld{render(i){return f}update(i,[e]){var r;const t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),f}rt(i){if(this.G!==void 0)if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Jt.get(e);t===void 0&&(t=new WeakMap,Jt.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e;return typeof this.G=="function"?(i=Jt.get(this.ht??globalThis))==null?void 0:i.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds=Symbol.for(""),ud=i=>{if((i==null?void 0:i.r)===Ds)return i==null?void 0:i._$litStatic$},pd=i=>({_$litStatic$:i,r:Ds}),Fi=new Map,dd=i=>(e,...t)=>{const r=t.length;let s,o;const a=[],n=[];let l,u=0,d=!1;for(;u<r;){for(l=e[u];u<r&&(o=t[u],(s=ud(o))!==void 0);)l+=s+e[++u],d=!0;u!==r&&n.push(o),a.push(l),u++}if(u===r&&a.push(e[r]),d){const p=a.join("$$lit$$");(e=Fi.get(p))===void 0&&(a.raw=a,Fi.set(p,e=a)),t=n}return i(e,...t)},hd=dd(c),fd={fields:[]},he=i=>({...i}),Ki=(i,e)=>Object.is(i,e),bd=/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]*$/;class Ur extends O{constructor(){super(),Object.defineProperty(this,"currentValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"resetValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"hasAssignedValue",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"changeHandlers",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"assignedPropertyNames",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),this.schema=fd,this.submitting=!1,this.formErrors={}}get value(){return this.currentValue}set value(e){const t=this.currentValue;this.currentValue=this.normalizeValues(e),this.resetValue=he(this.currentValue),this.hasAssignedValue=!0,this.requestUpdate("value",t)}get errors(){return{...this.formErrors}}get fields(){var e;return((e=this.schema)==null?void 0:e.fields)??[]}normalizeValues(e){const t=e&&typeof e=="object"?e:{},r=new Set(this.fields.map(o=>o.field)),s={};return this.fields.forEach(o=>{Object.prototype.hasOwnProperty.call(t,o.field)?s[o.field]=t[o.field]:o.defaultValue!==void 0&&(s[o.field]=o.defaultValue)}),r.size?s:{...t}}setInternalValue(e){const t=this.currentValue;this.currentValue=e,this.requestUpdate("value",t)}dependenciesFor(e,t=this.currentValue){return Object.fromEntries((e.deps??[]).map(r=>[r,t[r]]))}isVisible(e,t=this.currentValue){return typeof e.visible=="boolean"?e.visible:typeof e.visible!="function"?!0:e.visible(this.dependenciesFor(e,t))}propsFor(e){return typeof e.props=="function"?e.props(this.dependenciesFor(e)):e.props??{}}getChangeHandler(e){const t=this.changeHandlers.get(e);if(t)return t;const r=(s,o)=>{this.updateFieldValue(e,s,o)};return this.changeHandlers.set(e,r),r}applyDependencyEffects(e,t,r){const s=[e],o=new Set;for(;s.length>0;){const a=s.shift();a&&(o.has(a)||(o.add(a),this.fields.forEach(n=>{if(!(n.deps??[]).includes(a))return;let l;if(n.clearWhenDepsChange?l="dependency":n.clearWhenHidden&&!this.isVisible(n,t)&&(l="visibility"),!l||!Object.prototype.hasOwnProperty.call(t,n.field)||t[n.field]===void 0)return;const u=t[n.field];t[n.field]=void 0,r.push({field:n.field,previousValue:u,value:void 0,reason:l}),s.push(n.field)})))}}updateFieldValue(e,t,r){const s=this.currentValue,o=s[e];if(Ki(o,t))return;const a=he(s);a[e]=t;const n=[{field:e,previousValue:o,value:t,reason:"user"}];this.applyDependencyEffects(e,a,n),this.setInternalValue(a),(this.schema.validateOn==="change"||n.some(l=>!!this.formErrors[l.field]))&&this.validate(),this.dispatchEvent(new CustomEvent("super-form-change",{detail:{field:e,value:t,changes:n,values:he(a),originalEvent:r},bubbles:!0,composed:!0}))}assignElementProps(e,t){const r=new Set(Object.keys(t));(this.assignedPropertyNames.get(e)??new Set).forEach(o=>{r.has(o)||Reflect.set(e,o,void 0)}),Object.entries(t).forEach(([o,a])=>{Reflect.set(e,o,a)}),this.assignedPropertyNames.set(e,r)}renderStringComponent(e,t){if(!bd.test(e))return c`<span class="config-error" role="alert">
        “${e}”不是合法的自定义元素标签
      </span>`;const r=pd(e);return hd`<${r}
      ${cd(s=>{s instanceof HTMLElement&&this.assignElementProps(s,t)})}
    ></${r}>`}renderFieldComponent(e){const t={...this.propsFor(e),value:this.currentValue[e.field],onchange:this.getChangeHandler(e.field)};return typeof e.component=="string"?this.renderStringComponent(e.component,t):e.component(t)}renderField(e,t){if(this.fields.findIndex(o=>o.field===e.field)!==t)return c`<div class="config-error" role="alert">
        字段名“${e.field}”重复，请为每个字段配置唯一名称
      </div>`;if(!this.isVisible(e))return f;const r=this.formErrors[e.field],s=Math.min(e.span??1,this.schema.columns??1);return c`
      <div
        class="item"
        part="item"
        data-field=${e.field}
        style=${`--super-form-field-span: ${s}`}
      >
        <div class="label-row" part="label-row">
          ${e.label?c`<span class="label" part="label">${e.label}</span>`:f}
          ${e.required?c`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:f}
        </div>
        <div class="control-stack">
          <div class="control" part="control">
            ${this.renderFieldComponent(e)}
          </div>
          ${e.extra?c`<span class="extra" part="extra">${e.extra}</span>`:f}
          ${r?c`<span class="error" part="error" role="alert">${r}</span>`:f}
        </div>
      </div>
    `}formElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("form"))??null}validate(){const e={};return this.fields.forEach(t=>{if(!this.isVisible(t)||!t.rule)return;let r=!1;try{r=t.rule(this.currentValue[t.field])}catch{r=!1}r||(e[t.field]=t.errorMessage||"校验未通过")}),this.formErrors=e,Object.keys(e).length===0}reset(e){this.setInternalValue(he(this.resetValue)),this.formErrors={},this.dispatchEvent(new CustomEvent("super-form-reset",{detail:{values:he(this.resetValue),originalEvent:e},bubbles:!0,composed:!0}))}requestSubmit(){const e=this.formElement();if(e){e.requestSubmit();return}this.handleSubmit(new SubmitEvent("submit",{cancelable:!0}))}focusField(e){var s;const t=Array.from(((s=this.renderRoot)==null?void 0:s.querySelectorAll("[data-field]"))??[]).find(o=>o.dataset.field===e),r=t==null?void 0:t.querySelector("[part='control'] > *, input, textarea, select, button, [tabindex]");r==null||r.focus()}handleSubmit(e){if(e.preventDefault(),!this.submitting){if(!this.validate()){this.dispatchEvent(new CustomEvent("super-form-invalid",{detail:{values:he(this.currentValue),errors:{...this.formErrors},originalEvent:e},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("super-form-submit",{detail:{values:he(this.currentValue),originalEvent:e},bubbles:!0,composed:!0}))}}handleReset(e){e.preventDefault(),this.reset(e)}willUpdate(e){if(e.has("schema")){const t=this.schema.layout??"vertical",r=this.schema.columns??1,s=this.schema.actionsAlign==="start"?"flex-start":this.schema.actionsAlign==="center"?"center":"flex-end";this.setAttribute("layout",t),this.style.setProperty("--super-form-columns",String(r)),this.style.setProperty("--super-form-actions-align",s);const o=this.normalizeValues(this.currentValue);this.resetValue=this.hasAssignedValue?this.normalizeValues(this.resetValue):he(o),(Object.keys(o).length!==Object.keys(this.currentValue).length||Object.keys(o).some(l=>!Ki(o[l],this.currentValue[l])))&&this.setInternalValue(o);const a=new Set(this.fields.map(l=>l.field)),n=Object.fromEntries(Object.entries(this.formErrors).filter(([l])=>a.has(l)));Object.keys(n).length!==Object.keys(this.formErrors).length&&(this.formErrors=n),this.changeHandlers.clear()}}render(){const e=this.schema.showReset??!1,t=this.submitting?this.schema.submittingText??"提交中...":this.schema.submitText??"提交";return c`
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
            ${e?c`<button
                  class="reset"
                  part="reset-button"
                  type="reset"
                  ?disabled=${this.submitting}
                >${this.schema.resetText??"重置"}</button>`:f}
            <button
              class="submit"
              part="submit-button"
              type="submit"
              ?disabled=${this.submitting}
            >
              ${this.submitting?c`<span class="submitting-mark" aria-hidden="true"></span>`:f}
              ${t}
            </button>
          </slot>
        </div>
        <div class="footer" part="footer"><slot name="footer"></slot></div>
      </form>
    `}}Object.defineProperty(Ur,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{schema:{attribute:!1},value:{attribute:!1,noAccessor:!0},submitting:{type:Boolean,reflect:!0},formErrors:{state:!0}}});Object.defineProperty(Ur,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      color: var(--super-text-color-inverse, #ffffff);
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
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-form-primary-color);
    }
  `});const md="super-form",gd=i=>D(md,Ur,i);class qr extends O{constructor(){super(),this.value="",this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-input",e)}handleChange(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-change",e)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value;e.value="",this.value="",e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly||(e>0?t.stepUp():t.stepDown(),this.value=t.value,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),t.focus())}updateSlotPresence(e,t){const s=e.currentTarget.assignedNodes({flatten:!0}).some(o=>{var a;return o.nodeType!==Node.TEXT_NODE||!!((a=o.textContent)!=null&&a.trim())});t==="prefix"?this.hasPrefix=s:t==="suffix"?this.hasSuffix=s:this.hasAction=s}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??f}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return c`
        <textarea
          class="field"
          part="input"
          .value=${te(this.value)}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${w(this.maxLength)}
          minlength=${w(this.minLength)}
          inputmode=${w(this.inputMode||void 0)}
          autocomplete=${w(this.autocomplete||void 0)}
          aria-label=${w(this.accessibleLabel||void 0)}
          aria-describedby=${w(e)}
          aria-invalid=${w(t)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
      `;const r=this.type==="password"&&this.passwordVisible?"text":this.type;return c`
      <input
        class="field"
        part="input"
        .value=${te(this.value)}
        type=${r}
        placeholder=${this.placeholder}
        maxlength=${w(this.maxLength)}
        minlength=${w(this.minLength)}
        min=${w(this.min||void 0)}
        max=${w(this.max||void 0)}
        step=${w(this.step||void 0)}
        inputmode=${w(this.inputMode||void 0)}
        autocomplete=${w(this.autocomplete||void 0)}
        aria-label=${w(this.accessibleLabel||void 0)}
        aria-describedby=${w(e)}
        aria-invalid=${w(t)}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        @input=${this.handleInput}
        @change=${this.handleChange}
      />
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,r=this.type==="password"&&this.revealable,s=this.validationSymbol(),o=!!this.helperText||this.showCount&&this.maxLength!==void 0;return c`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${a=>this.updateSlotPresence(a,"prefix")}
          ></slot>
        </span>
        ${this.required?c`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:f}
        ${this.type==="number"&&!this.multiline?c`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:f}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?c`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:f}
        <span class="trailing">
          ${s===f?f:c`<span class="validation-icon" part="validation-icon" aria-hidden="true">${s}</span>`}
          ${t?c`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:f}
          ${r?c`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:f}
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
      ${o?c`
            <div class="meta" part="meta">
              ${this.helperText?c`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${w(this.validation==="error"?"alert":void 0)}
                    aria-live=${w(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:f}
              ${this.showCount&&this.maxLength!==void 0?c`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:f}
            </div>
          `:f}
    `}}Object.defineProperty(qr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(qr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const vd="super-input",xd=i=>D(vd,qr,i),yd=["info","success","warning","error"],kd={info:"i",success:"✓",warning:"!",error:"×"},wd=i=>yd.includes(i);class Gr extends O{constructor(){super(),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.open=!1,this.message="",this.type="info",this.duration=3e3,this.closable=!1,this.closeLabel="关闭提示",this.showIcon=!0,this.size="medium"}get resolvedType(){return wd(this.type)?this.type:"info"}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){if(this.clearCloseTimer(),!this.open||!Number.isFinite(this.duration)||this.duration<=0)return;const e=this.ownerDocument.defaultView;e&&(this.closeTimer=e.setTimeout(()=>{this.closeTimer=void 0,this.close()},this.duration))}close(){this.open&&(this.clearCloseTimer(),this.open=!1,this.dispatchEvent(new CustomEvent("super-message-close",{detail:{type:this.resolvedType},bubbles:!0,composed:!0})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.open&&this.scheduleClose()}disconnectedCallback(){this.clearCloseTimer(),super.disconnectedCallback()}updated(e){if(!this.open){this.clearCloseTimer();return}(e.has("open")||e.has("duration")||e.has("type"))&&this.scheduleClose()}render(){if(!this.open)return f;const e=this.resolvedType,t=e==="error";return c`
      <div
        class="message"
        part="message"
        role=${t?"alert":"status"}
        aria-live=${t?"assertive":"polite"}
        aria-atomic="true"
      >
        ${this.showIcon?c`
              <span class="icon" part="icon" aria-hidden="true">
                ${kd[e]}
              </span>
            `:f}
        <span class="content" part="content"><slot>${this.message}</slot></span>
        ${this.closable?c`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            `:f}
      </div>
    `}}Object.defineProperty(Gr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},message:{type:String,reflect:!0},type:{type:String,reflect:!0},duration:{type:Number,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showIcon:{type:Boolean,attribute:"show-icon",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Gr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-message-background: var(--super-background-color, #fffef9);
      --super-message-color: var(--super-text-color-primary, #292524);
      --super-message-border-color: var(--super-border-color, #2f2a27);
      --super-message-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-message-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-message-icon-color: var(--super-color-info, #7d8896);
      --super-message-focus-color: var(--super-focus-color, #56c6b7);
      --super-message-close-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        transparent
      );
      --super-message-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 4px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-lg, 14px) - 2px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 3px);
      --super-message-font-size: var(--super-font-size-base, 14px);
      --super-message-gap: var(--super-spacing-sm, 8px);
      --super-message-padding-block: 9px;
      --super-message-padding-inline: 14px;
      --super-message-icon-size: 22px;
      --super-message-max-width: 560px;
      --super-message-top: var(--super-spacing-lg, 16px);
      --super-message-z-index: var(--super-z-index-message, 3000);
      --super-message-rotation: var(--super-sketch-rotation, -0.25deg);

      position: fixed;
      top: var(--super-message-top);
      left: 50%;
      z-index: var(--super-message-z-index);
      display: block;
      box-sizing: border-box;
      inline-size: max-content;
      max-inline-size: min(calc(100vw - 32px), var(--super-message-max-width));
      color: var(--super-message-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-message-font-size);
      line-height: 1.5;
      pointer-events: none;
      transform: translateX(-50%);
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-message-font-size: var(--super-font-size-lg, 16px);
      --super-message-gap: var(--super-spacing-md, 12px);
      --super-message-padding-block: 12px;
      --super-message-padding-inline: 18px;
      --super-message-icon-size: 26px;
      --super-message-max-width: 600px;
    }

    :host([size="small"]) {
      --super-message-font-size: var(--super-font-size-sm, 13px);
      --super-message-gap: 6px;
      --super-message-padding-block: 7px;
      --super-message-padding-inline: 11px;
      --super-message-icon-size: 18px;
      --super-message-max-width: 480px;
    }

    :host([type="success"]) {
      --super-message-icon-color: var(--super-color-success, #86cf8b);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="warning"]) {
      --super-message-icon-color: var(--super-color-warning, #ffca50);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 45%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="error"]) {
      --super-message-icon-color: var(--super-color-danger, #ff7067);
      --super-message-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    .message {
      display: flex;
      box-sizing: border-box;
      align-items: flex-start;
      gap: var(--super-message-gap);
      padding: var(--super-message-padding-block)
        var(--super-message-padding-inline);
      color: var(--super-message-color);
      font: inherit;
      background: var(--super-message-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-message-border-color);
      border-radius: var(--super-message-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-message-shadow-color);
      pointer-events: auto;
      transform: rotate(var(--super-message-rotation));
      transform-origin: center;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-message-icon-size);
      block-size: var(--super-message-icon-size);
      color: var(--super-message-icon-color);
      font-size: 0.85em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-message-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 48% 52% 45% 55% / 53% 46% 54% 47%;
    }

    .content {
      min-inline-size: 0;
      padding-block: 2px;
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 24px;
      block-size: 24px;
      margin: -2px -4px -2px 0;
      padding: 0;
      color: inherit;
      font: inherit;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 46% 54% 48% 52% / 52% 47% 53% 48%;
      cursor: pointer;
      opacity: 0.68;
    }

    .close:hover {
      background: var(--super-message-close-hover-background);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-message-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .message {
        transform: none;
      }
    }
  `});const $d="super-message",zd=i=>D($d,Gr,i);let Sd=0;class Yr extends O{constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-menu-${++Sd}`}),Object.defineProperty(this,"openKeys",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"tabbableKey",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var l,u;const t=this.resolveEntry(e);if(!t||t.item.disabled)return;const r=t.level===0&&this.orientation==="horizontal",s=r?"ArrowLeft":"ArrowUp",o=r?"ArrowRight":"ArrowDown",a=r?"ArrowDown":"ArrowRight",n=r?"ArrowUp":"ArrowLeft";if(e.key===s||e.key===o){e.preventDefault(),this.moveFocus(t,e.key===o?1:-1);return}if(e.key==="Home"||e.key==="End"){e.preventDefault(),this.focusEdge(t,e.key==="Home"?"first":"last");return}if(e.key===a){e.preventDefault(),(l=t.item.children)!=null&&l.length&&this.setOpen(t,!0,"first-child");return}if(e.key===n){e.preventDefault(),this.closeCurrent(t);return}if(e.key==="Enter"||e.key===" "){if(e.preventDefault(),e.repeat)return;(u=t.item.children)!=null&&u.length?this.setOpen(t,!this.openKeys.has(t.item.key),"first-child"):this.selectItem(t.item);return}if(e.key==="Escape"&&t.parentKey){e.preventDefault();const d=this.findEntry(t.parentKey);d&&this.setOpen(d,!1,"self")}}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var s;const t=e.composedPath().find(o=>o instanceof HTMLElement&&!!o.dataset.menuKey);if(!t)return;const r=this.findEntry(t.dataset.menuKey??"");!r||r.item.disabled||((s=r.item.children)!=null&&s.length?this.setOpen(r,!this.openKeys.has(r.item.key)):this.selectItem(r.item))}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.composedPath().find(r=>r instanceof HTMLElement&&!!r.dataset.menuKey);t!=null&&t.dataset.menuKey&&this.tabbableKey!==t.dataset.menuKey&&(this.tabbableKey=t.dataset.menuKey,this.requestUpdate())}}),this.items=[],this.active="",this.orientation="vertical",this.mode="inline",this.collapsed=!1,this.size="medium",this.accessibleLabel="导航菜单"}allEntries(){const e=[],t=(r,s,o,a)=>{r.forEach((n,l)=>{var d;const u=[...a,l];e.push({item:n,level:s,parentKey:o,path:u}),(d=n.children)!=null&&d.length&&t(n.children,s+1,n.key,u)})};return t(this.items,0,null,[]),e}visibleEntries(){const e=[],t=(r,s,o,a)=>{r.forEach((n,l)=>{var d;const u=[...a,l];e.push({item:n,level:s,parentKey:o,path:u}),(d=n.children)!=null&&d.length&&this.openKeys.has(n.key)&&t(n.children,s+1,n.key,u)})};return t(this.items,0,null,[]),e}siblingsOf(e){return this.visibleEntries().filter(t=>t.level===e.level&&t.parentKey===e.parentKey)}isTabbable(e){var o;const r=this.visibleEntries().filter(a=>!a.item.disabled);if(r.length===0)return!1;const s=r.some(a=>a.item.key===this.tabbableKey)?this.tabbableKey:((o=r[0])==null?void 0:o.item.key)??"";return e===s}itemId(e){return`${this.uid}-item-${e.join("-")}`}submenuId(e){return`${this.uid}-menu-${e.length>0?e.join("-"):"root"}`}findEntry(e){return this.visibleEntries().find(t=>t.item.key===e)}get rail(){return this.collapsed&&this.mode==="inline"}descendantKeys(e){const t=[],r=s=>{s==null||s.forEach(o=>{t.push(o.key),r(o.children)})};return r(e.children),t}ancestorKeys(e){const t=[],r=(s,o)=>{var a;for(const n of s){if(n.key===e)return t.push(...o),!0;if((a=n.children)!=null&&a.length&&r(n.children,[...o,n.key]))return!0}return!1};return r(this.items,[]),t}focusItem(e){this.updateComplete.then(()=>{const t=Array.from(this.renderRoot.querySelectorAll("[data-menu-key]")).find(r=>r.dataset.menuKey===e);t==null||t.focus({preventScroll:!0})})}firstEnabledChild(e){var t;return(t=e.item.children)==null?void 0:t.find(r=>!r.disabled)}dispatchOpenChange(e,t){this.dispatchEvent(new CustomEvent("super-menu-open-change",{detail:{key:e,open:t},bubbles:!0,composed:!0}))}setOpen(e,t,r="none"){const s=e.item.key;if(this.openKeys.has(s)===t){if(t&&r==="first-child"){const a=this.firstEnabledChild(e);a&&this.focusItem(a.key)}return}if(t?this.openKeys.add(s):this.openKeys.delete(s),this.dispatchOpenChange(s,t),!t){const a=this.descendantKeys(e.item);(this.tabbableKey===s||a.includes(this.tabbableKey))&&(this.tabbableKey=s),this.requestUpdate(),r==="self"&&this.focusItem(s);return}if(this.requestUpdate(),r==="first-child"){const a=this.firstEnabledChild(e);a&&this.focusItem(a.key)}}selectItem(e){e.disabled||(this.active=e.key,this.dispatchEvent(new CustomEvent("super-menu-select",{detail:{key:e.key},bubbles:!0,composed:!0})))}moveFocus(e,t){const r=this.siblingsOf(e).filter(n=>!n.item.disabled);if(r.length===0)return;const s=r.findIndex(n=>n.item.key===e.item.key),o=s<0?t===1?0:r.length-1:(s+t+r.length)%r.length,a=r[o];a&&(this.tabbableKey=a.item.key,this.focusItem(a.item.key))}focusEdge(e,t){const r=this.siblingsOf(e).filter(o=>!o.item.disabled),s=t==="first"?r[0]:r.at(-1);s&&(this.tabbableKey=s.item.key,this.focusItem(s.item.key))}closeCurrent(e){var r;if((r=e.item.children)!=null&&r.length&&this.openKeys.has(e.item.key)){this.setOpen(e,!1,"self");return}if(!e.parentKey)return;const t=this.findEntry(e.parentKey);t&&this.setOpen(t,!1,"self")}resolveEntry(e){const t=e.composedPath().find(a=>a instanceof HTMLElement&&!!a.dataset.menuKey),r=this.renderRoot instanceof ShadowRoot?this.renderRoot.activeElement:null,s=r instanceof HTMLElement?r.dataset.menuKey:void 0,o=(t==null?void 0:t.dataset.menuKey)??s??this.tabbableKey;return o?this.findEntry(o):void 0}willUpdate(e){if((e.has("collapsed")||e.has("mode"))&&this.openKeys.clear(),e.has("items")){const t=new Set(this.allEntries().map(r=>r.item.key));for(const r of this.openKeys)t.has(r)||this.openKeys.delete(r)}if(!this.rail&&(e.has("items")||e.has("active")))for(const t of this.ancestorKeys(this.active))this.openKeys.add(t);e.has("active")&&this.active&&(this.tabbableKey=this.active)}renderItem(e){var l;const{item:t,path:r}=e,s=!!((l=t.children)!=null&&l.length),o=s&&this.openKeys.has(t.key),n=this.rail&&!!t.icon;return c`
      <li class="menu-item" role="none">
        <button
          class="item"
          part="item"
          type="button"
          role="menuitem"
          id=${this.itemId(r)}
          data-menu-key=${t.key}
          ?data-icon=${!!t.icon}
          tabindex=${this.isTabbable(t.key)?"0":"-1"}
          aria-current=${t.key===this.active?"true":f}
          aria-disabled=${t.disabled?"true":f}
          aria-haspopup=${s?"menu":f}
          aria-expanded=${s?String(o):f}
          aria-controls=${s&&o?this.submenuId(r):f}
          aria-label=${n?t.label:f}
          title=${n?t.label:f}
        >
          ${t.icon?c`<span class="icon" part="icon" aria-hidden="true"
                >${t.icon}</span
              >`:f}
          <span class="label" part="label">${t.label}</span>
          ${s?c`<span class="toggle" part="toggle" aria-hidden="true"
                >▸</span
              >`:f}
        </button>
        ${s&&o?this.renderMenu(t.children??[],e,r):f}
      </li>
    `}renderMenu(e,t,r){const s=t?t.level+1:0,o=t?this.itemId(t.path):void 0;return c`
      <ul
        class=${s===0?"menu":"submenu"}
        part=${s===0?"menu":"submenu"}
        id=${this.submenuId(r)}
        role="menu"
        aria-orientation=${s===0?this.orientation:"vertical"}
        aria-label=${w(s===0&&this.accessibleLabel||void 0)}
        aria-labelledby=${w(o)}
        @keydown=${s===0?this.handleKeyDown:f}
        @click=${s===0?this.handleClick:f}
        @focusin=${s===0?this.handleFocusIn:f}
      >
        ${e.map((a,n)=>this.renderItem({item:a,level:s,parentKey:(t==null?void 0:t.item.key)??null,path:[...r,n]}))}
      </ul>
    `}render(){return this.renderMenu(this.items,null,[])}}Object.defineProperty(Yr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{items:{attribute:!1},active:{type:String,reflect:!0},orientation:{type:String,reflect:!0},mode:{type:String,reflect:!0},collapsed:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0}}});Object.defineProperty(Yr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-menu-gap: 2px;
      --super-menu-item-height: 34px;
      --super-menu-item-padding-block: 6px;
      --super-menu-item-padding-inline: 11px;
      --super-menu-item-gap: 8px;
      --super-menu-font-size: var(--super-font-size-base, 14px);
      --super-menu-color: var(--super-text-color-regular, #4a4441);
      --super-menu-active-color: var(--super-color-primary-dark-2, #3272e8);
      --super-menu-active-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 13%,
        var(--super-background-color, #fffef9)
      );
      --super-menu-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 8%,
        transparent
      );
      --super-menu-background: var(--super-background-color, #fffef9);
      --super-menu-border-color: var(--super-border-color, #2f2a27);
      --super-menu-divider-color: var(--super-border-color-light, #b6ada6);
      --super-menu-muted-color: var(--super-text-color-placeholder, #9a938f);
      --super-menu-focus-color: var(--super-focus-color, #56c6b7);
      --super-menu-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-menu-submenu-min-width: 180px;
      --super-menu-submenu-padding: 5px;
      --super-menu-z-index: var(--super-z-index-overlay, 2000);
      --super-menu-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 2px)
        calc(var(--super-radius-sm, 6px) + 1px);
      --super-menu-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-menu-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-menu-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-menu-item-height: 42px;
      --super-menu-item-padding-block: 9px;
      --super-menu-item-padding-inline: 14px;
      --super-menu-item-gap: 10px;
      --super-menu-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-menu-item-height: 28px;
      --super-menu-item-padding-block: 4px;
      --super-menu-item-padding-inline: 8px;
      --super-menu-item-gap: 6px;
      --super-menu-font-size: var(--super-font-size-sm, 13px);
    }

    .menu {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-menu-gap);
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation="horizontal"]) .menu {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }

    .menu-item {
      position: relative;
      min-inline-size: 0;
      margin: 0;
      padding: 0;
    }

    :host([orientation="horizontal"]) .menu > .menu-item {
      flex: none;
    }

    .item {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-menu-item-gap);
      inline-size: 100%;
      min-block-size: var(--super-menu-item-height);
      margin: 0;
      padding: var(--super-menu-item-padding-block)
        var(--super-menu-item-padding-inline);
      overflow: hidden;
      color: inherit;
      font: inherit;
      font-weight: 600;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      border-radius: var(--super-menu-radius);
      cursor: pointer;
      outline: none;
      user-select: none;
      transition:
        background-color var(--super-motion-duration, 140ms)
          var(--super-motion-easing, ease),
        color var(--super-motion-duration, 140ms)
          var(--super-motion-easing, ease);
    }

    .item:hover {
      background: var(--super-menu-hover-background);
    }

    .item:focus-visible {
      outline: 3px solid var(--super-menu-focus-color);
      outline-offset: -2px;
    }

    .item[aria-current="true"] {
      color: var(--super-menu-active-color);
      background: var(--super-menu-active-background);
    }

    .item[aria-current="true"]::after {
      position: absolute;
      inset-block: 22%;
      inset-inline-start: 2px;
      inline-size: 3px;
      content: "";
      background: var(--super-menu-active-color);
      border-radius: 45% 55% 48% 52% / 55% 46% 54% 45%;
      transform: rotate(-1deg);
    }

    .item[aria-disabled="true"] {
      color: var(--super-menu-muted-color);
      cursor: not-allowed;
      opacity: 0.6;
    }

    .item[aria-disabled="true"]:hover {
      background: transparent;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1.25em;
      font-size: 1.05em;
      line-height: 1;
    }

    .label {
      flex: 1 1 auto;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .toggle {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1em;
      margin-inline-start: auto;
      color: var(--super-menu-muted-color);
      font-size: 0.8em;
      line-height: 1;
      transition: transform var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .item[aria-expanded="true"] .toggle {
      transform: rotate(90deg);
    }

    .submenu {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-menu-gap);
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation="vertical"][mode="inline"]:not([collapsed])) .submenu {
      margin-inline-start: calc(var(--super-menu-item-padding-inline) / 2);
      padding-inline-start: 12px;
      border-inline-start: 1.5px dashed var(--super-menu-divider-color);
    }

    :host([orientation="horizontal"]) .submenu,
    :host([orientation="vertical"][mode="vertical"]) .submenu,
    :host([orientation="vertical"][mode="popup"]) .submenu,
    :host([collapsed][mode="inline"]) .submenu {
      position: absolute;
      z-index: var(--super-menu-z-index);
      box-sizing: border-box;
      min-inline-size: var(--super-menu-submenu-min-width);
      max-inline-size: min(280px, calc(100vw - 16px));
      margin: 0;
      padding: var(--super-menu-submenu-padding);
      background: var(--super-menu-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-menu-border-color);
      border-radius: var(--super-menu-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 26%),
        3px 4px 0 -1px var(--super-menu-shadow-color);
      transform: rotate(var(--super-menu-rotation));
    }

    :host([orientation="horizontal"]) .menu > .menu-item > .submenu {
      inset-block-start: calc(100% + 4px);
      inset-inline-start: 0;
    }

    :host([orientation="horizontal"]) .submenu .submenu,
    :host([orientation="vertical"][mode="vertical"]) .submenu,
    :host([orientation="vertical"][mode="popup"]) .submenu,
    :host([collapsed][mode="inline"]) .submenu {
      inset-block-start: 0;
      inset-inline-start: calc(100% + 4px);
    }

    :host([collapsed][mode="inline"]) {
      inline-size: max-content;
      max-inline-size: 100%;
    }

    :host([collapsed][mode="inline"]) .menu {
      inline-size: max-content;
    }

    :host([collapsed][mode="inline"]) .item {
      justify-content: center;
      padding-inline: 8px;
    }

    :host([collapsed][mode="inline"]) .item[data-icon] .label {
      display: none;
    }

    :host([collapsed][mode="inline"]) .item .toggle {
      display: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .item,
      .toggle {
        transition: none;
      }
    }
  `});const _d="super-menu",Ed=i=>D(_d,Yr,i),Cd=["info","success","warning","error"],Pd=["top-right","top-left","bottom-right","bottom-left"],Td={info:"i",success:"✓",warning:"!",error:"×"},Ad=i=>Cd.includes(i),Od=i=>Pd.includes(i);class Wr extends O{constructor(){super(),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleTitleSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasTitleSlot&&(this.hasTitleSlot=r)}}),Object.defineProperty(this,"handleMessageSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasMessageSlot&&(this.hasMessageSlot=r)}}),this.open=!1,this.title="",this.message="",this.type="info",this.placement="top-right",this.duration=4500,this.closable=!0,this.closeLabel="关闭通知",this.showIcon=!0,this.size="medium",this.hasTitleSlot=!1,this.hasMessageSlot=!1}get resolvedType(){return Ad(this.type)?this.type:"info"}get resolvedPlacement(){return Od(this.placement)?this.placement:"top-right"}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){if(this.clearCloseTimer(),!this.open||!Number.isFinite(this.duration)||this.duration<=0)return;const e=this.ownerDocument.defaultView;e&&(this.closeTimer=e.setTimeout(()=>{this.closeTimer=void 0,this.close()},this.duration))}close(){this.open&&(this.clearCloseTimer(),this.open=!1,this.dispatchEvent(new CustomEvent("super-notification-close",{detail:{type:this.resolvedType},bubbles:!0,composed:!0})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.open&&this.scheduleClose()}disconnectedCallback(){this.clearCloseTimer(),super.disconnectedCallback()}updated(e){if(!this.open){this.clearCloseTimer();return}(e.has("open")||e.has("duration")||e.has("type"))&&this.scheduleClose()}render(){if(!this.open)return f;const e=this.resolvedType,t=e==="error",r=this.title!==""||this.hasTitleSlot;return c`
      <div
        class="notification"
        part="notification"
        role=${t?"alert":"status"}
        aria-live=${t?"assertive":"polite"}
        aria-atomic="true"
        data-placement=${this.resolvedPlacement}
      >
        ${this.showIcon?c`
              <span class="icon" part="icon" aria-hidden="true">
                ${Td[e]}
              </span>
            `:f}
        <div class="body">
          <div class="title" part="title" ?hidden=${!r}>
            <slot name="title" @slotchange=${this.handleTitleSlotChange}>
              ${this.hasTitleSlot?f:this.title}
            </slot>
          </div>
          <div class="content" part="content">
            <slot @slotchange=${this.handleMessageSlotChange}>
              ${this.hasMessageSlot?f:this.message}
            </slot>
          </div>
        </div>
        ${this.closable?c`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${s=>{s.stopPropagation(),this.close()}}
              >
                <span aria-hidden="true">×</span>
              </button>
            `:f}
      </div>
    `}}Object.defineProperty(Wr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},title:{type:String,reflect:!0},message:{type:String,reflect:!0},type:{type:String,reflect:!0},placement:{type:String,reflect:!0},duration:{type:Number,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showIcon:{type:Boolean,attribute:"show-icon",reflect:!0},size:{type:String,reflect:!0},hasTitleSlot:{state:!0},hasMessageSlot:{state:!0}}});Object.defineProperty(Wr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-notification-background: var(--super-background-color, #fffef9);
      --super-notification-color: var(--super-text-color-primary, #292524);
      --super-notification-content-color: var(
        --super-text-color-regular,
        #4a4441
      );
      --super-notification-border-color: var(--super-border-color, #2f2a27);
      --super-notification-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-notification-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-notification-icon-color: var(--super-color-info, #7d8896);
      --super-notification-focus-color: var(--super-focus-color, #56c6b7);
      --super-notification-close-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        transparent
      );
      --super-notification-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 1px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-lg, 14px);
      --super-notification-width: 340px;
      --super-notification-font-size: var(--super-font-size-base, 14px);
      --super-notification-title-size: var(--super-font-size-lg, 16px);
      --super-notification-gap: var(--super-spacing-sm, 8px);
      --super-notification-padding-block: var(--super-spacing-md, 12px);
      --super-notification-padding-inline: var(--super-spacing-lg, 16px);
      --super-notification-icon-size: 26px;
      --super-notification-offset: var(--super-spacing-lg, 16px);
      --super-notification-z-index: var(--super-z-index-message, 3000);
      --super-notification-rotation: var(--super-sketch-rotation, -0.25deg);

      position: fixed;
      top: var(--super-notification-offset);
      right: var(--super-notification-offset);
      z-index: var(--super-notification-z-index);
      display: block;
      box-sizing: border-box;
      inline-size: min(
        var(--super-notification-width),
        calc(100vw - 32px)
      );
      color: var(--super-notification-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-notification-font-size);
      line-height: 1.5;
      pointer-events: none;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-notification-width: 380px;
      --super-notification-font-size: var(--super-font-size-lg, 16px);
      --super-notification-title-size: 18px;
      --super-notification-gap: var(--super-spacing-md, 12px);
      --super-notification-padding-block: var(--super-spacing-lg, 16px);
      --super-notification-padding-inline: 20px;
      --super-notification-icon-size: 30px;
    }

    :host([size="small"]) {
      --super-notification-width: 300px;
      --super-notification-font-size: var(--super-font-size-sm, 13px);
      --super-notification-title-size: var(--super-font-size-base, 14px);
      --super-notification-gap: 6px;
      --super-notification-padding-block: var(--super-spacing-sm, 8px);
      --super-notification-padding-inline: var(--super-spacing-md, 12px);
      --super-notification-icon-size: 22px;
    }

    :host([placement="top-left"]) {
      right: auto;
      left: var(--super-notification-offset);
    }

    :host([placement="bottom-right"]) {
      top: auto;
      bottom: var(--super-notification-offset);
    }

    :host([placement="bottom-left"]) {
      top: auto;
      right: auto;
      bottom: var(--super-notification-offset);
      left: var(--super-notification-offset);
    }

    :host([type="success"]) {
      --super-notification-icon-color: var(--super-color-success, #86cf8b);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="warning"]) {
      --super-notification-icon-color: var(--super-color-warning, #ffca50);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 45%,
        var(--super-border-color, #2f2a27)
      );
    }

    :host([type="error"]) {
      --super-notification-icon-color: var(--super-color-danger, #ff7067);
      --super-notification-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 55%,
        var(--super-border-color, #2f2a27)
      );
    }

    .notification {
      display: flex;
      box-sizing: border-box;
      align-items: flex-start;
      gap: var(--super-notification-gap);
      padding: var(--super-notification-padding-block)
        var(--super-notification-padding-inline);
      color: var(--super-notification-color);
      font: inherit;
      background: var(--super-notification-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-notification-border-color);
      border-radius: var(--super-notification-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-notification-shadow-color);
      pointer-events: auto;
      transform: rotate(var(--super-notification-rotation));
      transform-origin: center;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-notification-icon-size);
      block-size: var(--super-notification-icon-size);
      color: var(--super-notification-icon-color);
      font-size: 0.88em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-notification-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 47% 53% 44% 56% / 54% 45% 55% 46%;
    }

    .body {
      display: grid;
      flex: 1 1 auto;
      min-inline-size: 0;
      gap: 3px;
      padding-block: 2px;
    }

    .title {
      margin: 0;
      color: var(--super-notification-color);
      font-size: var(--super-notification-title-size);
      font-weight: 700;
      line-height: 1.35;
      overflow-wrap: anywhere;
    }

    .content {
      color: var(--super-notification-content-color);
      overflow-wrap: anywhere;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 24px;
      block-size: 24px;
      margin: -2px -4px -2px 0;
      padding: 0;
      color: inherit;
      font: inherit;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 46% 54% 48% 52% / 52% 47% 53% 48%;
      cursor: pointer;
      opacity: 0.68;
    }

    .close:hover {
      background: var(--super-notification-close-hover-background);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-notification-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .notification {
        transform: none;
      }
    }
  `});const Ld="super-notification",Id=i=>D(Ld,Wr,i);class Xr extends O{constructor(){super(),Object.defineProperty(this,"handlePrev",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.goToPage(this.currentPage-1)}}),Object.defineProperty(this,"handleNext",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.goToPage(this.currentPage+1)}}),Object.defineProperty(this,"handlePageClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget;this.goToPage(Number(t.dataset.page))}}),Object.defineProperty(this,"handlePageSizeChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled)return;const t=e.currentTarget,r=Math.trunc(Number(t.value));!Number.isFinite(r)||r<=0||r===this.normalizedPageSize||(this.pageSize=r,this.page=1,this.emitChange(1,r))}}),Object.defineProperty(this,"handleJumperChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.commitJumper(e.currentTarget)}}),Object.defineProperty(this,"handleJumperKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key==="Enter"&&(e.preventDefault(),this.commitJumper(e.currentTarget))}}),Object.defineProperty(this,"handlePagesKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var a,n;if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const t=Array.from(((a=this.renderRoot)==null?void 0:a.querySelectorAll(".page-button"))??[]);if(t.length===0)return;const r=e.composedPath().find(l=>l instanceof HTMLButtonElement&&l.classList.contains("page-button")),s=Math.max(0,r?t.indexOf(r):0);let o=s;if(e.key==="Home")o=0;else if(e.key==="End")o=t.length-1;else{const l=e.key==="ArrowRight"?1:-1;o=(s+l+t.length)%t.length}e.preventDefault(),(n=t[o])==null||n.focus()}}),this.total=0,this.page=1,this.pageSize=10,this.pageSizes=[],this.size="medium",this.disabled=!1,this.showTotal=!1,this.showJumper=!1,this.simple=!1,this.accessibleLabel="分页导航",this.prevLabel="上一页",this.nextLabel="下一页",this.pageLabel="页码",this.jumperLabel="跳至",this.totalLabel="共",this.itemsLabel="条",this.pageSuffixLabel="页",this.pageSizeLabel="每页条数"}get normalizedTotal(){const e=Math.trunc(Number(this.total));return Number.isFinite(e)?Math.max(0,e):0}get normalizedPageSize(){const e=Math.trunc(Number(this.pageSize));return Number.isFinite(e)?Math.max(1,e):1}get pageCount(){return Math.max(1,Math.ceil(this.normalizedTotal/this.normalizedPageSize))}get currentPage(){const e=Math.trunc(Number(this.page));return Number.isFinite(e)?Math.min(this.pageCount,Math.max(1,e)):1}get sizeOptions(){const e=new Set;return this.pageSizes.forEach(t=>{const r=Math.trunc(Number(t));Number.isFinite(r)&&r>0&&e.add(r)}),e.add(this.normalizedPageSize),Array.from(e).sort((t,r)=>t-r)}get pageEntries(){const e=this.pageCount;if(e<=7)return Array.from({length:e},(a,n)=>n+1);const t=this.currentPage,r=new Set([1,e,t-1,t,t+1]);t<=4&&[2,3,4,5].forEach(a=>r.add(a)),t>=e-3&&[e-4,e-3,e-2,e-1].forEach(a=>r.add(a));const s=Array.from(r).filter(a=>a>=1&&a<=e).sort((a,n)=>a-n),o=[];return s.forEach((a,n)=>{const l=s[n-1];l!==void 0&&a-l>1&&o.push("ellipsis"),o.push(a)}),o}emitChange(e,t){this.dispatchEvent(new CustomEvent("super-pagination-change",{detail:{page:e,pageSize:t},bubbles:!0,composed:!0}))}goToPage(e){if(this.disabled)return;const t=Math.min(this.pageCount,Math.max(1,Math.trunc(e)));!Number.isFinite(t)||t===this.currentPage||(this.page=t,this.emitChange(t,this.normalizedPageSize))}commitJumper(e){if(this.disabled)return;const t=Math.trunc(Number(e.value));if(!Number.isFinite(t)){e.value=String(this.currentPage);return}const r=Math.min(this.pageCount,Math.max(1,t));e.value=String(r),r!==this.currentPage&&(this.page=r,this.emitChange(r,this.normalizedPageSize))}renderPageEntry(e){if(e==="ellipsis")return c`
        <li class="page-item" part="page-item">
          <span class="ellipsis" part="ellipsis" aria-hidden="true">…</span>
        </li>
      `;const t=e===this.currentPage;return c`
      <li class="page-item" part="page-item">
        <button
          class="page-button"
          part=${t?"page current":"page"}
          type="button"
          data-page=${e}
          aria-label=${`${this.pageLabel} ${e}`}
          aria-current=${w(t?"page":void 0)}
          ?disabled=${this.disabled}
          @click=${this.handlePageClick}
        >${e}</button>
      </li>
    `}renderSimple(){return c`
      <span class="simple-status" part="simple-status" aria-current="page">
        ${this.currentPage}
        <span class="separator" aria-hidden="true">/</span>
        ${this.pageCount}
        ${this.pageSuffixLabel}
      </span>
    `}render(){const e=this.currentPage;return c`
      <nav
        class="pagination"
        part="pagination"
        role="navigation"
        aria-label=${w(this.accessibleLabel||void 0)}
      >
        ${this.showTotal?c`<span class="total" part="total">
              ${this.totalLabel} ${this.normalizedTotal} ${this.itemsLabel}
            </span>`:f}

        <button
          class="control prev"
          part="prev"
          type="button"
          aria-label=${this.prevLabel}
          ?disabled=${this.disabled||e<=1}
          @click=${this.handlePrev}
        >
          <span class="nav-icon" aria-hidden="true">‹</span>
          <span class="nav-text">${this.prevLabel}</span>
        </button>

        ${this.simple?this.renderSimple():c`
              <ul
                class="pages"
                part="pages"
                @keydown=${this.handlePagesKeyDown}
              >
                ${this.pageEntries.map(t=>this.renderPageEntry(t))}
              </ul>
            `}

        <button
          class="control next"
          part="next"
          type="button"
          aria-label=${this.nextLabel}
          ?disabled=${this.disabled||e>=this.pageCount}
          @click=${this.handleNext}
        >
          <span class="nav-text">${this.nextLabel}</span>
          <span class="nav-icon" aria-hidden="true">›</span>
        </button>

        ${!this.simple&&this.pageSizes.length>0?c`
              <label class="page-size" part="page-size">
                <select
                  class="page-size-select"
                  part="page-size-select"
                  aria-label=${this.pageSizeLabel}
                  .value=${String(this.normalizedPageSize)}
                  ?disabled=${this.disabled}
                  @change=${this.handlePageSizeChange}
                >
                  ${this.sizeOptions.map(t=>c`<option value=${String(t)}>
                      ${t} ${this.itemsLabel}/${this.pageSuffixLabel}
                    </option>`)}
                </select>
              </label>
            `:f}

        ${!this.simple&&this.showJumper?c`
              <label class="jumper" part="jumper">
                <span>${this.jumperLabel}</span>
                <input
                  class="jumper-input"
                  part="jumper-input"
                  type="number"
                  inputmode="numeric"
                  min="1"
                  max=${String(this.pageCount)}
                  step="1"
                  aria-label=${`${this.jumperLabel}${this.pageSuffixLabel}`}
                  .value=${te(String(e))}
                  ?disabled=${this.disabled}
                  @change=${this.handleJumperChange}
                  @keydown=${this.handleJumperKeyDown}
                />
                <span>${this.pageSuffixLabel}</span>
              </label>
            `:f}
      </nav>
    `}}Object.defineProperty(Xr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{total:{type:Number,reflect:!0},page:{type:Number,reflect:!0},pageSize:{type:Number,attribute:"page-size",reflect:!0},pageSizes:{attribute:!1},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},showTotal:{type:Boolean,attribute:"show-total",reflect:!0},showJumper:{type:Boolean,attribute:"show-jumper",reflect:!0},simple:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},prevLabel:{type:String,attribute:"prev-label",reflect:!0},nextLabel:{type:String,attribute:"next-label",reflect:!0},pageLabel:{type:String,attribute:"page-label",reflect:!0},jumperLabel:{type:String,attribute:"jumper-label",reflect:!0},totalLabel:{type:String,attribute:"total-label",reflect:!0},itemsLabel:{type:String,attribute:"items-label",reflect:!0},pageSuffixLabel:{type:String,attribute:"page-suffix-label",reflect:!0},pageSizeLabel:{type:String,attribute:"page-size-label",reflect:!0}}});Object.defineProperty(Xr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-pagination-gap: var(--super-spacing-sm, 8px);
      --super-pagination-control-height: 34px;
      --super-pagination-control-min-width: 34px;
      --super-pagination-padding-inline: 9px;
      --super-pagination-font-size: var(--super-font-size-base, 14px);
      --super-pagination-color: var(--super-text-color-regular, #4a4441);
      --super-pagination-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-pagination-background: var(--super-background-color, #fffef9);
      --super-pagination-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 10%,
        var(--super-background-color, #fffef9)
      );
      --super-pagination-current-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 16%,
        var(--super-background-color, #fffef9)
      );
      --super-pagination-current-color: var(--super-color-primary-dark-2, #3272e8);
      --super-pagination-border-color: var(--super-border-color-light, #b6ada6);
      --super-pagination-current-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-pagination-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-pagination-focus-color: var(--super-focus-color, #56c6b7);
      --super-pagination-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
      --super-pagination-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-pagination-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-pagination-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-pagination-control-height: 42px;
      --super-pagination-control-min-width: 42px;
      --super-pagination-padding-inline: 12px;
      --super-pagination-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-pagination-control-height: 28px;
      --super-pagination-control-min-width: 28px;
      --super-pagination-padding-inline: 7px;
      --super-pagination-font-size: var(--super-font-size-sm, 13px);
    }

    .pagination {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--super-pagination-gap);
      min-inline-size: 0;
    }

    .total,
    .page-size,
    .jumper,
    .simple-status {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: var(--super-pagination-muted-color);
      white-space: nowrap;
    }

    .pages {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--super-pagination-gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .page-item {
      display: inline-flex;
      min-inline-size: 0;
    }

    .control,
    .page-button,
    .jumper-input,
    .page-size-select {
      box-sizing: border-box;
      block-size: var(--super-pagination-control-height);
      margin: 0;
      color: inherit;
      font: inherit;
      background: var(--super-pagination-background);
      border: var(--super-sketch-width, 2px) solid var(--super-pagination-border-color);
      border-radius: var(--super-pagination-radius);
      transform: rotate(var(--super-pagination-rotation));
    }

    .control,
    .page-button {
      display: inline-flex;
      min-inline-size: var(--super-pagination-control-min-width);
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 0 var(--super-pagination-padding-inline);
      cursor: pointer;
      transition:
        color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform 100ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .control:hover:not(:disabled),
    .page-button:hover:not(:disabled) {
      background: var(--super-pagination-hover-background);
      transform: translate(-1px, -1px) rotate(0.1deg);
    }

    .control:active:not(:disabled),
    .page-button:active:not(:disabled) {
      background: var(--super-pagination-current-background);
      transform: translate(1px, 1px) rotate(-0.1deg);
    }

    .control:focus-visible,
    .page-button:focus-visible,
    .jumper-input:focus-visible,
    .page-size-select:focus-visible {
      outline: 3px solid var(--super-pagination-focus-color);
      outline-offset: 2px;
    }

    .control:disabled,
    .page-button:disabled,
    .jumper-input:disabled,
    .page-size-select:disabled {
      cursor: not-allowed;
      opacity: 0.42;
      transform: rotate(0deg);
    }

    .page-button[aria-current="page"] {
      color: var(--super-pagination-current-color);
      font-weight: 700;
      background: var(--super-pagination-current-background);
      border-color: var(--super-pagination-current-border-color);
      box-shadow: 1px 2px 0 -1px var(--super-pagination-shadow-color);
    }

    .nav-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .nav-icon {
      flex: none;
      font-size: 1.25em;
      line-height: 1;
    }

    .ellipsis {
      display: inline-grid;
      min-inline-size: var(--super-pagination-control-min-width);
      block-size: var(--super-pagination-control-height);
      place-items: center;
      color: var(--super-pagination-muted-color);
      letter-spacing: 0.1em;
      user-select: none;
    }

    .jumper-input {
      inline-size: 4.5em;
      padding: 0 7px;
      text-align: center;
    }

    .jumper-input::-webkit-inner-spin-button,
    .jumper-input::-webkit-outer-spin-button {
      margin: 0;
      appearance: none;
    }

    .page-size-select {
      min-inline-size: 5.5em;
      padding: 0 6px;
      cursor: pointer;
    }

    .simple-status {
      min-inline-size: 6.5em;
      justify-content: center;
      padding: 0 6px;
      color: var(--super-pagination-current-color);
      font-weight: 700;
    }

    .separator {
      color: var(--super-pagination-muted-color);
      opacity: 0.7;
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .page-button {
        transition: none;
      }
    }
  `});const Dd="super-pagination",Md=i=>D(Dd,Xr,i),Hi="button, a[href], input, select, textarea, summary",Vd=120;let jd=0;class Jr extends O{constructor(){super(),Object.defineProperty(this,"panelId",{enumerable:!0,configurable:!0,writable:!0,value:`super-popconfirm-${++jd}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.panelId}-title`}),Object.defineProperty(this,"contentId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.panelId}-content`}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnFocusOnClose",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"contentSlotHasContent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&this.startFloating()}}),Object.defineProperty(this,"handleContentSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.contentSlotHasContent&&(this.contentSlotHasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.resolvedTrigger!=="click")return;const t=this.triggerElement;if(!t||!e.composedPath().includes(t))return;this.clearHoverCloseTimer();const r=!this.open;r||(this.returnFocusOnClose=!0),this.setOpen(r)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.resolvedTrigger!=="click"||e.repeat||e.altKey||e.ctrlKey||e.metaKey||e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;if(!t||this.hasNativeActivation(e,t))return;e.preventDefault();const r=!this.open;r||(this.returnFocusOnClose=!0),this.setOpen(r)}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.resolvedTrigger!=="hover"||this.isInsidePopconfirm(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.resolvedTrigger!=="hover"||this.isInsidePopconfirm(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.setOpen(!1))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||e.defaultPrevented||(e.preventDefault(),this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.focusTrigger(),this.setOpen(!1))}}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.confirmLoading)return;const t=new CustomEvent("super-popconfirm-confirm",{detail:{originalEvent:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.returnFocusOnClose=!1,this.focusTrigger(),this.setOpen(!1))}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||(this.dispatchEvent(new CustomEvent("super-popconfirm-cancel",{detail:{originalEvent:e},bubbles:!0,composed:!0})),this.returnFocusOnClose=!0,this.setOpen(!1))}}),this.open=!1,this.title="",this.content="",this.placement="top",this.trigger="click",this.confirmText="确定",this.cancelText="取消",this.confirmLoading=!1,this.disabled=!1,this.icon="?",this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.size="medium"}get panel(){return this.renderRoot.querySelector('[part="popconfirm"]')}get cancelButton(){return this.renderRoot.querySelector('[part="cancel"]')}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}get resolvedTrigger(){return this.trigger==="hover"?"hover":"click"}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},Vd)}setOpen(e){e&&this.disabled||this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("super-popconfirm-open-change",{detail:{open:e},bubbles:!0,composed:!0})))}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}isInsidePopconfirm(e){var t;return e instanceof Node&&(this===e||this.contains(e)||!!((t=this.shadowRoot)!=null&&t.contains(e)))}syncTriggerAria(){var t;const e=this.triggerElement;e&&(e.setAttribute("aria-expanded",this.open?"true":"false"),e.setAttribute("aria-haspopup","dialog"),this.open?e.setAttribute("aria-controls",this.panelId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls")},e.addEventListener("click",this.handleTriggerClick),e.addEventListener("keydown",this.handleTriggerKeydown),e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave),e.addEventListener("focusin",this.handleFocusIn),e.addEventListener("focusout",this.handleFocusOut),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleTriggerClick),e.removeEventListener("keydown",this.handleTriggerKeydown),e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave),e.removeEventListener("focusin",this.handleFocusIn),e.removeEventListener("focusout",this.handleFocusOut),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}attachPanelListeners(){const e=this.panel;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave),e.addEventListener("focusin",this.handlePanelFocusIn),e.addEventListener("focusout",this.handlePanelFocusOut))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),e.removeEventListener("focusin",this.handlePanelFocusIn),e.removeEventListener("focusout",this.handlePanelFocusOut),this.panelElement=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.panel;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=pt(e,t,{placement:this.placement,offset:8}))}activateOpenState(){var e;this.attachPanelListeners(),this.startFloating(),this.syncTriggerAria(),(e=this.cancelButton)==null||e.focus({preventScroll:!0})}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.syncTriggerAria()}hasNativeActivation(e,t){return t.matches(Hi)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(Hi))}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.isConnected&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.deactivateOpenState(),this.unbindTrigger(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(){this.disabled&&this.open&&(this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.open=!1)}updated(e){this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled"))&&(this.deactivateOpenState(),t&&this.returnFocusOnClose&&(this.returnFocusOnClose=!1,this.focusTrigger()));return}if(t){this.returnFocusOnClose=!1,this.activateOpenState();return}e.has("placement")&&this.startFloating()}render(){return c`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?c`
            <div
              class="popconfirm"
              part="popconfirm"
              id=${this.panelId}
              role="alertdialog"
              aria-modal="false"
              aria-labelledby=${this.titleId}
              aria-describedby=${this.contentId}
              data-placement=${this.placement}
              tabindex="-1"
            >
              ${this.icon?c`
                    <span class="icon" part="icon" aria-hidden="true">
                      ${this.icon}
                    </span>
                  `:f}
              <div class="body">
                <div class="title" part="title" id=${this.titleId}>
                  ${this.title!==""?this.title:c`<span class="visually-hidden">确认操作</span>`}
                </div>
                <div class="content" part="content" id=${this.contentId}>
                  <slot
                    name="content"
                    @slotchange=${this.handleContentSlotChange}
                  >${this.contentSlotHasContent?f:this.content}</slot>
                </div>
              </div>
              <div class="actions" part="actions">
                <button
                  class="action"
                  part="cancel"
                  type="button"
                  ?disabled=${this.disabled}
                  @click=${this.handleCancel}
                >
                  ${this.cancelText}
                </button>
                <button
                  class="action confirm"
                  part="confirm"
                  type="button"
                  aria-busy=${this.confirmLoading?"true":"false"}
                  ?disabled=${this.disabled||this.confirmLoading}
                  @click=${this.handleConfirm}
                >
                  ${this.confirmText}
                </button>
              </div>
            </div>
          `:f}
    `}}Object.defineProperty(Jr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},title:{type:String,reflect:!0},content:{type:String,reflect:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},confirmLoading:{type:Boolean,attribute:"confirm-loading",reflect:!0},disabled:{type:Boolean,reflect:!0},icon:{type:String,reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Jr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-popconfirm-background: var(--super-background-color, #fffef9);
      --super-popconfirm-color: var(--super-text-color-primary, #292524);
      --super-popconfirm-content-color: var(
        --super-text-color-regular,
        #4a4441
      );
      --super-popconfirm-border-color: var(--super-border-color, #2f2a27);
      --super-popconfirm-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-popconfirm-focus-color: var(--super-focus-color, #56c6b7);
      --super-popconfirm-primary-color: var(--super-color-primary, #4b87f5);
      --super-popconfirm-primary-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-popconfirm-icon-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-popconfirm-icon-color: var(--super-color-warning, #ffca50);
      --super-popconfirm-cancel-background: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-popconfirm-cancel-hover-background: color-mix(
        in srgb,
        var(--super-text-color-primary, #292524) 8%,
        var(--super-background-color, #fffef9)
      );
      --super-popconfirm-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-lg, 14px) - 2px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 2px)
        calc(var(--super-radius-md, 9px) + 1px);
      --super-popconfirm-width: 292px;
      --super-popconfirm-font-size: var(--super-font-size-base, 14px);
      --super-popconfirm-title-size: var(--super-font-size-lg, 16px);
      --super-popconfirm-padding-block: var(--super-spacing-md, 12px);
      --super-popconfirm-padding-inline: var(--super-spacing-lg, 16px);
      --super-popconfirm-gap: var(--super-spacing-sm, 8px);
      --super-popconfirm-icon-size: 26px;
      --super-popconfirm-action-font-size: var(--super-font-size-sm, 13px);
      --super-popconfirm-content-max-height: min(40vh, 240px);
      --super-popconfirm-z-index: var(--super-z-index-overlay, 2000);
      --super-popconfirm-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-popconfirm-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-popconfirm-font-size);
      line-height: 1.5;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-popconfirm-width: 320px;
      --super-popconfirm-font-size: var(--super-font-size-lg, 16px);
      --super-popconfirm-title-size: 18px;
      --super-popconfirm-padding-block: var(--super-spacing-lg, 16px);
      --super-popconfirm-padding-inline: 20px;
      --super-popconfirm-gap: var(--super-spacing-md, 12px);
      --super-popconfirm-icon-size: 30px;
      --super-popconfirm-action-font-size: var(--super-font-size-base, 14px);
    }

    :host([size="small"]) {
      --super-popconfirm-width: 264px;
      --super-popconfirm-font-size: var(--super-font-size-sm, 13px);
      --super-popconfirm-title-size: var(--super-font-size-base, 14px);
      --super-popconfirm-padding-block: var(--super-spacing-sm, 8px);
      --super-popconfirm-padding-inline: var(--super-spacing-md, 12px);
      --super-popconfirm-gap: 6px;
      --super-popconfirm-icon-size: 22px;
      --super-popconfirm-action-font-size: 12px;
    }

    slot:not([name]) {
      display: contents;
    }

    .popconfirm {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-popconfirm-z-index);
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      inline-size: min(var(--super-popconfirm-width), calc(100vw - 16px));
      gap: var(--super-popconfirm-gap);
      padding: var(--super-popconfirm-padding-block)
        var(--super-popconfirm-padding-inline);
      color: var(--super-popconfirm-color);
      font: inherit;
      overflow-wrap: anywhere;
      background: var(--super-popconfirm-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-popconfirm-border-color);
      border-radius: var(--super-popconfirm-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-popconfirm-shadow-color);
      transform: rotate(var(--super-popconfirm-rotation));
      transform-origin: center;
    }

    .popconfirm:focus {
      outline: none;
    }

    .popconfirm:focus-visible {
      outline: 3px solid var(--super-popconfirm-focus-color);
      outline-offset: 3px;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-popconfirm-icon-size);
      block-size: var(--super-popconfirm-icon-size);
      color: var(--super-popconfirm-icon-color);
      font-size: 0.9em;
      font-weight: 700;
      line-height: 1;
      background: var(--super-popconfirm-icon-background);
      border: 1.5px solid currentColor;
      border-radius: 46% 54% 43% 57% / 55% 44% 56% 45%;
    }

    .body {
      display: grid;
      flex: 1 1 190px;
      min-inline-size: 0;
      gap: calc(var(--super-popconfirm-gap) / 2);
    }

    .title {
      margin: 0;
      color: var(--super-popconfirm-color);
      font-size: var(--super-popconfirm-title-size);
      font-weight: 700;
      line-height: 1.35;
    }

    .content {
      max-block-size: var(--super-popconfirm-content-max-height);
      overflow: auto;
      color: var(--super-popconfirm-content-color);
      overscroll-behavior: contain;
    }

    .actions {
      display: flex;
      flex: 1 0 100%;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: var(--super-popconfirm-gap);
      padding-block-start: calc(var(--super-popconfirm-gap) / 2);
    }

    .action {
      min-inline-size: 62px;
      min-block-size: 32px;
      margin: 0;
      padding: 4px 12px;
      color: var(--super-popconfirm-color);
      font: inherit;
      font-size: var(--super-popconfirm-action-font-size);
      font-weight: 700;
      line-height: 1.2;
      background: var(--super-popconfirm-cancel-background);
      border: 1.5px solid var(--super-popconfirm-border-color);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
      box-shadow: 1px 2px 0 -1px var(--super-popconfirm-shadow-color);
      cursor: pointer;
    }

    .action:hover:not(:disabled) {
      background: var(--super-popconfirm-cancel-hover-background);
      transform: translate(-1px, -1px) rotate(0.15deg);
    }

    .confirm {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-popconfirm-primary-color);
      border-color: var(--super-popconfirm-primary-border-color);
    }

    .confirm:hover:not(:disabled) {
      background: color-mix(
        in srgb,
        var(--super-popconfirm-primary-color) 82%,
        var(--super-text-color-inverse, #ffffff)
      );
    }

    .action:active:not(:disabled) {
      box-shadow: inset 0 1px 2px rgb(15 23 42 / 18%);
      transform: translate(1px, 1px) rotate(-0.15deg);
    }

    .action:focus-visible {
      outline: 3px solid var(--super-popconfirm-focus-color);
      outline-offset: 2px;
    }

    .action:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .confirm[aria-busy="true"] {
      cursor: wait;
    }

    .visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .popconfirm,
      .action:hover:not(:disabled),
      .action:active:not(:disabled) {
        transform: none;
      }
    }
  `});const Nd="super-popconfirm",Rd=i=>D(Nd,Jr,i),Ui="button, a[href], input, select, textarea, summary",Bd=120;let Fd=0;class Zr extends O{constructor(){super(),Object.defineProperty(this,"popoverId",{enumerable:!0,configurable:!0,writable:!0,value:`super-popover-${++Fd}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.popoverId}-title`}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"focusPanelOnOpen",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"contentSlotHasContent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&(this.triggerElement?this.startFloating():this.destroyFloating())}}),Object.defineProperty(this,"handleContentSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.contentSlotHasContent&&(this.contentSlotHasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click")return;const t=this.triggerElement;if(!t||!e.composedPath().includes(t))return;this.clearHoverCloseTimer();const r=!this.open;this.setOpen(r,{focusPanel:r&&e.detail===0})}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click"||e.repeat||e.altKey||e.ctrlKey||e.metaKey||e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;if(!t||this.hasNativeActivation(e,t))return;e.preventDefault();const r=!this.open;this.setOpen(r,{focusPanel:r})}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||this.isInsidePopover(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||this.isInsidePopover(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.setOpen(!1))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||(e.preventDefault(),this.clearHoverCloseTimer(),this.setOpen(!1),this.open||this.focusTrigger())}}),this.open=!1,this.placement="bottom",this.trigger="click",this.title="",this.content="",this.disabled=!1,this.arrow=!0,this.offset=8,this.width=280,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.size="medium"}get panel(){return this.renderRoot.querySelector('[part="popover"]')}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},Bd)}setOpen(e,t={}){e&&this.disabled||this.open!==e&&(this.focusPanelOnOpen=e&&!!t.focusPanel,this.open=e,this.dispatchEvent(new CustomEvent("super-popover-open-change",{detail:{open:e},bubbles:!0,composed:!0})))}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}isInsidePopover(e){var t;return e instanceof Node&&(this===e||this.contains(e)||!!((t=this.shadowRoot)!=null&&t.contains(e)))}syncTriggerAria(){var t;const e=this.triggerElement;e&&(e.setAttribute("aria-expanded",this.open?"true":"false"),e.setAttribute("aria-haspopup","dialog"),this.open?e.setAttribute("aria-controls",this.popoverId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls")},e.addEventListener("click",this.handleClick),e.addEventListener("keydown",this.handleTriggerKeydown),e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave),e.addEventListener("focusin",this.handleFocusIn),e.addEventListener("focusout",this.handleFocusOut),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleClick),e.removeEventListener("keydown",this.handleTriggerKeydown),e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave),e.removeEventListener("focusin",this.handleFocusIn),e.removeEventListener("focusout",this.handleFocusOut),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}attachPanelListeners(){const e=this.panel;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave),e.addEventListener("focusin",this.handlePanelFocusIn),e.addEventListener("focusout",this.handlePanelFocusOut))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),e.removeEventListener("focusin",this.handlePanelFocusIn),e.removeEventListener("focusout",this.handlePanelFocusOut),this.panelElement=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.panelElement;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=pt(e,t,{placement:this.placement,offset:this.offset}))}activateOpenState(){var e;this.attachPanelListeners(),this.startFloating(),this.syncTriggerAria(),this.focusPanelOnOpen&&(this.focusPanelOnOpen=!1,(e=this.panelElement)==null||e.focus({preventScroll:!0}))}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.focusPanelOnOpen=!1,this.syncTriggerAria()}hasNativeActivation(e,t){return t.matches(Ui)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(Ui))}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.deactivateOpenState(),this.unbindTrigger(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.clearHoverCloseTimer(),this.open=!1,this.focusPanelOnOpen=!1),e.has("trigger")&&e.get("trigger")!==void 0&&this.open&&(this.clearHoverCloseTimer(),this.open=!1,this.focusPanelOnOpen=!1)}updated(e){var r;this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled")||e.has("trigger"))&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}e.has("placement")||e.has("offset")?this.startFloating():e.has("width")&&((r=this.floating)==null||r.update())}render(){const e=Number.isFinite(this.width)&&this.width>0?`${Math.round(this.width)}px`:"auto",t=this.contentSlotHasContent;return c`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?c`
            <div
              class="popover"
              part="popover"
              id=${this.popoverId}
              role="dialog"
              tabindex="-1"
              data-placement=${this.placement}
              aria-labelledby=${this.title?this.titleId:f}
              aria-label=${!this.title&&!t&&this.content?this.content:f}
              style=${`inline-size: ${e}`}
            >
              ${this.title?c`
                    <div class="title" part="title" id=${this.titleId}>
                      ${this.title}
                    </div>
                  `:f}
              <div class="content" part="content">
                <slot
                  name="content"
                  @slotchange=${this.handleContentSlotChange}
                >${t?f:this.content}</slot>
              </div>
              ${this.arrow?c`
                    <span
                      class="arrow"
                      part="arrow"
                      aria-hidden="true"
                    ></span>
                  `:f}
            </div>
          `:f}
    `}}Object.defineProperty(Zr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},title:{type:String,reflect:!0},content:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},arrow:{type:Boolean,reflect:!0},offset:{type:Number,reflect:!0},width:{type:Number,reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Zr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-popover-background: var(--super-background-color, #fffef9);
      --super-popover-color: var(--super-text-color-primary, #292524);
      --super-popover-content-color: var(--super-text-color-regular, #4a4441);
      --super-popover-border-color: var(--super-border-color, #2f2a27);
      --super-popover-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-popover-focus-color: var(--super-focus-color, #56c6b7);
      --super-popover-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-md, 9px);
      --super-popover-font-size: var(--super-font-size-base, 14px);
      --super-popover-title-size: var(--super-font-size-lg, 16px);
      --super-popover-padding-block: var(--super-spacing-md, 12px);
      --super-popover-padding-inline: var(--super-spacing-lg, 16px);
      --super-popover-gap: var(--super-spacing-sm, 8px);
      --super-popover-content-max-height: min(60vh, 420px);
      --super-popover-arrow-size: 10px;
      --super-popover-z-index: var(--super-z-index-overlay, 2000);
      --super-popover-rotation: var(--super-sketch-rotation, -0.25deg);

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-popover-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-popover-font-size);
      line-height: 1.5;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-popover-font-size: var(--super-font-size-lg, 16px);
      --super-popover-title-size: 18px;
      --super-popover-padding-block: var(--super-spacing-lg, 16px);
      --super-popover-padding-inline: 20px;
      --super-popover-gap: var(--super-spacing-md, 12px);
      --super-popover-arrow-size: 12px;
    }

    :host([size="small"]) {
      --super-popover-font-size: var(--super-font-size-sm, 13px);
      --super-popover-title-size: var(--super-font-size-base, 14px);
      --super-popover-padding-block: var(--super-spacing-sm, 8px);
      --super-popover-padding-inline: var(--super-spacing-md, 12px);
      --super-popover-gap: 6px;
      --super-popover-arrow-size: 8px;
    }

    slot {
      display: contents;
    }

    .popover {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-popover-z-index);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-popover-gap);
      max-inline-size: calc(100vw - 16px);
      padding: var(--super-popover-padding-block)
        var(--super-popover-padding-inline);
      color: var(--super-popover-color);
      font-family: inherit;
      font-size: var(--super-popover-font-size);
      overflow-wrap: anywhere;
      background: var(--super-popover-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-radius: var(--super-popover-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-popover-shadow-color);
      transform: rotate(var(--super-popover-rotation));
      transform-origin: center;
    }

    .popover:focus {
      outline: none;
    }

    .popover:focus-visible {
      outline: 3px solid var(--super-popover-focus-color);
      outline-offset: 3px;
    }

    .title {
      margin: 0;
      color: var(--super-popover-color);
      font-size: var(--super-popover-title-size);
      font-weight: 700;
      line-height: 1.35;
    }

    .content {
      max-block-size: var(--super-popover-content-max-height);
      overflow: auto;
      color: var(--super-popover-content-color);
      overscroll-behavior: contain;
    }

    .arrow {
      position: absolute;
      box-sizing: border-box;
      inline-size: var(--super-popover-arrow-size);
      block-size: var(--super-popover-arrow-size);
      background: var(--super-popover-background);
    }

    .popover[data-placement^="top"] .arrow {
      bottom: calc(var(--super-popover-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-popover-arrow-size) / -2);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="bottom"] .arrow {
      top: calc(var(--super-popover-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-popover-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="left"] .arrow {
      top: 50%;
      right: calc(var(--super-popover-arrow-size) / -2);
      margin-block-start: calc(var(--super-popover-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    .popover[data-placement^="right"] .arrow {
      top: 50%;
      left: calc(var(--super-popover-arrow-size) / -2);
      margin-block-start: calc(var(--super-popover-arrow-size) / -2);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-popover-border-color);
      transform: rotate(45deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .popover {
        transform: none;
      }
    }
  `});const Kd="super-popover",Hd=i=>D(Kd,Zr,i),ur=42,qi=2*Math.PI*ur;class Qr extends O{constructor(){super(),Object.defineProperty(this,"customText",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"syncCustomText",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).map(s=>s.textContent??"").join("").trim();r!==this.customText&&(this.customText=r,this.requestUpdate())}}),this.value=0,this.max=100,this.variant="line",this.status="default",this.size="medium",this.showText=!0,this.format=void 0,this.indeterminate=!1,this.striped=!1,this.accessibleLabel=""}get safeMax(){return Number.isFinite(this.max)?this.max:0}get clampedValue(){const e=Number.isFinite(this.value)?this.value:0;return Math.min(Math.max(e,0),Math.max(this.safeMax,0))}get percent(){return this.safeMax<=0?0:this.clampedValue/this.safeMax*100}get progressText(){return this.format?this.format(this.clampedValue,this.safeMax):this.indeterminate?"":`${Math.round(this.percent)}%`}renderLine(){const e=this.indeterminate?{}:{inlineSize:`${this.percent}%`};return c`
      <div class="track" part="track">
        <div class="bar" part="bar" style=${ie(e)}></div>
      </div>
    `}renderCircle(){const e=this.indeterminate?void 0:qi*(1-this.percent/100);return c`
      <svg
        class="circle"
        part="circle"
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          class="circle-track"
          part="circle-track"
          cx="50"
          cy="50"
          r=${ur}
        ></circle>
        <circle
          class="circle-bar"
          part="circle-bar"
          cx="50"
          cy="50"
          r=${ur}
          stroke-dasharray=${w(this.indeterminate?void 0:qi)}
          stroke-dashoffset=${w(e)}
        ></circle>
      </svg>
    `}render(){const e=this.progressText,t=this.indeterminate?void 0:this.customText||e||void 0;return c`
      <div
        class="progress"
        part="progress"
        role="progressbar"
        aria-label=${w(this.accessibleLabel||void 0)}
        aria-valuemin="0"
        aria-valuemax=${this.safeMax}
        aria-valuenow=${w(this.indeterminate?void 0:this.clampedValue)}
        aria-valuetext=${w(t)}
      >
        ${this.variant==="circle"?this.renderCircle():this.renderLine()}
        ${this.showText?c`
              <span class="text" part="text">
                <slot @slotchange=${this.syncCustomText}>${e}</slot>
              </span>
            `:f}
      </div>
    `}}Object.defineProperty(Qr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0},max:{type:Number,reflect:!0},variant:{type:String,reflect:!0},status:{type:String,reflect:!0},size:{type:String,reflect:!0},showText:{type:Boolean,attribute:"show-text",reflect:!0},format:{attribute:!1},indeterminate:{type:Boolean,reflect:!0},striped:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Qr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-progress-height: 10px;
      --super-progress-circle-size: 88px;
      --super-progress-font-size: var(--super-font-size-sm, 13px);
      --super-progress-gap: var(--super-spacing-sm, 8px);
      --super-progress-color: var(--super-color-primary, #4b87f5);
      --super-progress-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-progress-track-color: var(--super-background-color-soft, #f7f4ec);
      --super-progress-track-border-color: var(--super-border-color-light, #b6ada6);
      --super-progress-text-color: var(--super-text-color-regular, #4a4441);
      --super-progress-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        calc(var(--super-radius-sm, 6px) + 3px)
        var(--super-radius-sm, 6px);
      --super-progress-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      color: var(--super-progress-text-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-progress-font-size);
      line-height: 1.3;
    }

    :host([hidden]) {
      display: none;
    }

    :host([variant="circle"]) {
      display: inline-block;
      inline-size: auto;
    }

    :host([size="large"]) {
      --super-progress-height: 14px;
      --super-progress-circle-size: 112px;
      --super-progress-font-size: var(--super-font-size-base, 14px);
    }

    :host([size="small"]) {
      --super-progress-height: 6px;
      --super-progress-circle-size: 64px;
      --super-progress-font-size: 12px;
    }

    :host([status="success"]) {
      --super-progress-color: var(--super-color-success, #86cf8b);
      --super-progress-border-color: #2e7738;
    }

    :host([status="warning"]) {
      --super-progress-color: var(--super-color-warning, #ffca50);
      --super-progress-border-color: #9e6508;
    }

    :host([status="danger"]) {
      --super-progress-color: var(--super-color-danger, #ff7067);
      --super-progress-border-color: #b7352f;
    }

    .progress {
      position: relative;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      inline-size: 100%;
      gap: var(--super-progress-gap);
    }

    :host([variant="circle"]) .progress {
      inline-size: var(--super-progress-circle-size);
      block-size: var(--super-progress-circle-size);
    }

    .track {
      position: relative;
      box-sizing: border-box;
      flex: 1 1 auto;
      inline-size: 100%;
      block-size: var(--super-progress-height);
      overflow: hidden;
      background: var(--super-progress-track-color);
      border: 1.5px solid var(--super-progress-track-border-color);
      border-radius: var(--super-progress-radius);
      transform: rotate(var(--super-progress-rotation));
    }

    .bar {
      position: relative;
      box-sizing: border-box;
      block-size: 100%;
      min-inline-size: 0;
      background-color: var(--super-progress-color);
      background-image:
        linear-gradient(
          90deg,
          rgb(255 255 255 / 0%) 0%,
          rgb(255 255 255 / 26%) 50%,
          rgb(255 255 255 / 0%) 100%
        );
      border: 1px solid var(--super-progress-border-color);
      border-radius: var(--super-progress-radius);
      transition: inline-size var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([striped]) .bar {
      background-image:
        repeating-linear-gradient(
          -45deg,
          rgb(255 255 255 / 0%) 0 6px,
          rgb(255 255 255 / 32%) 6px 12px
        );
      background-size: 24px 24px;
      animation: super-progress-stripes 900ms linear infinite;
    }

    :host([indeterminate]) .bar {
      inline-size: 42%;
      animation: super-progress-indeterminate 1.35s ease-in-out infinite;
    }

    :host([indeterminate][striped]) .bar {
      animation:
        super-progress-indeterminate 1.35s ease-in-out infinite,
        super-progress-stripes 900ms linear infinite;
    }

    .text {
      flex: none;
      color: var(--super-progress-text-color);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    :host([variant="circle"]) .text {
      position: absolute;
      inset: 0;
      display: grid;
      place-items: center;
      font-size: calc(var(--super-progress-font-size) + 1px);
      font-weight: 700;
      pointer-events: none;
    }

    slot {
      display: contents;
    }

    .circle {
      inline-size: 100%;
      block-size: 100%;
      overflow: visible;
      transform: rotate(-90deg);
    }

    .circle-track {
      fill: none;
      stroke: var(--super-progress-track-color);
      stroke-width: 9;
    }

    .circle-bar {
      fill: none;
      stroke: var(--super-progress-color);
      stroke-linecap: round;
      stroke-width: 9;
      transition: stroke-dashoffset var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([indeterminate]) .circle {
      animation: super-progress-rotate 1.4s linear infinite;
    }

    :host([indeterminate]) .circle-bar {
      stroke-dasharray: 66 198;
      animation: super-progress-circle-dash 1.6s ease-in-out infinite;
    }

    @keyframes super-progress-indeterminate {
      0% {
        transform: translateX(-120%) scaleX(0.55);
      }

      55% {
        transform: translateX(90%) scaleX(0.9);
      }

      100% {
        transform: translateX(260%) scaleX(0.55);
      }
    }

    @keyframes super-progress-stripes {
      to {
        background-position: 24px 0;
      }
    }

    @keyframes super-progress-rotate {
      from {
        transform: rotate(-90deg);
      }

      to {
        transform: rotate(270deg);
      }
    }

    @keyframes super-progress-circle-dash {
      0% {
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dashoffset: -66;
      }

      100% {
        stroke-dashoffset: -264;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .bar,
      .circle-bar {
        transition: none;
      }

      :host([striped]) .bar,
      :host([indeterminate]) .bar,
      :host([indeterminate][striped]) .bar {
        animation: none;
      }

      :host([indeterminate]) .bar {
        inline-size: 100%;
        opacity: 0.55;
      }

      :host([indeterminate]) .circle,
      :host([indeterminate]) .circle-bar {
        animation: none;
      }
    }
  `});const Ud="super-progress",qd=i=>D(Ud,Qr,i);class ei extends O{constructor(){super(),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.checked=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(r=>!r.disabled);return(e.find(r=>r.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&(e.checked=!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){this.disabled||this.checked||(this.checked=!0,this.uncheckGroupPeers(),this.emitChange(e))}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(n=>!n.disabled);if(t.length<2)return;e.preventDefault();const r=Math.max(0,t.indexOf(this)),s=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,o=(r+s+t.length)%t.length,a=t[o];a.selectFromInteraction(e),a.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked;t||(this.checked=!0,this.uncheckGroupPeers());const r=new Event("change");super.click(),t||this.emitChange(r)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return c`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${te(this.checked)}
            .tabIndex=${this.radioTabIndex}
            name=${this.name}
            value=${this.value}
            aria-label=${w(this.accessibleLabel||void 0)}
            aria-labelledby=${w(this.accessibleLabel?void 0:"super-radio-label")}
            aria-describedby=${w(e)}
            aria-invalid=${w(t)}
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
        ${this.helperText?c`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:f}
      </span>
    `}}Object.defineProperty(ei,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ei,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Gd="super-radio",Yd=i=>D(Gd,ei,i),Zt=(i,e,t)=>Math.min(t,Math.max(e,i));class ti extends O{constructor(){super(),Object.defineProperty(this,"hoverValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"iconNodes",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"hasCustomIcon",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.value=0,this.max=5,this.allowHalf=!1,this.readonly=!1,this.disabled=!1,this.size="medium",this.validation="none",this.clearable=!1,this.accessibleLabel="评分",this.clearLabel="清除评分"}get resolvedMax(){const e=Number.isFinite(this.max)?Math.trunc(this.max):5;return Math.max(1,e)}get step(){return this.allowHalf?.5:1}get resolvedValue(){const e=Number.isFinite(this.value)?this.value:0,t=Math.round(e/this.step)*this.step;return Zt(Number(t.toFixed(1)),0,this.resolvedMax)}get isInteractive(){return!this.disabled&&!this.readonly}emitChange(e){this.dispatchEvent(new CustomEvent("super-rate-change",{detail:{value:e},bubbles:!0,composed:!0}))}commit(e){if(!this.isInteractive)return;const t=Zt(Number((Math.round(e/this.step)*this.step).toFixed(1)),0,this.resolvedMax);this.value=t,this.emitChange(t)}valueForPointer(e){const t=e.currentTarget,r=t.getBoundingClientRect(),s=r.width?(e.clientX-r.left)/r.width:1,o=Number(t.dataset.index??0);return this.allowHalf&&s<=.5?o+.5:o+1}handleStarClick(e){if(!this.isInteractive)return;const t=this.valueForPointer(e);this.focus(),this.commit(this.clearable&&t===this.resolvedValue?0:t)}handlePointerMove(e){if(!this.isInteractive)return;const t=this.valueForPointer(e);t!==this.hoverValue&&(this.hoverValue=t,this.requestUpdate())}handlePointerLeave(){this.hoverValue!==void 0&&(this.hoverValue=void 0,this.requestUpdate())}handleIconSlotChange(e){const r=e.currentTarget.assignedNodes({flatten:!0}).filter(s=>{var o;return s.nodeType===Node.ELEMENT_NODE||!!((o=s.textContent)!=null&&o.trim())});this.iconNodes=r.map(s=>{const o=s.cloneNode(!0);return o instanceof Element&&(o.removeAttribute("slot"),o.removeAttribute("id")),o}),this.hasCustomIcon=this.iconNodes.length>0,this.requestUpdate()}focus(e){var r;const t=(r=this.renderRoot)==null?void 0:r.querySelector('[role="slider"]');if(t){t.focus(e);return}super.focus(e)}blur(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector('[role="slider"]'))==null||t.blur()}updated(){this.renderRoot.querySelectorAll(".icon-copy").forEach(t=>{t.replaceChildren(...this.iconNodes.map(r=>r.cloneNode(!0))),this.hasCustomIcon||(t.textContent="★")})}handleKeydown(e){if(!this.isInteractive)return;const t=this.resolvedValue;let r;switch(e.key){case"ArrowRight":case"ArrowUp":r=t+this.step;break;case"ArrowLeft":case"ArrowDown":r=t-this.step;break;case"Home":r=0;break;case"End":r=this.resolvedMax;break;case"Delete":case"Backspace":this.clearable&&(r=0);break;default:if(/^[0-9]$/.test(e.key)){const s=Number(e.key);r=Zt(s,0,this.resolvedMax)}}r!==void 0&&(e.preventDefault(),this.commit(r))}render(){const e=this.hoverValue??this.resolvedValue,t=this.resolvedValue;return c`
      <div
        class="root"
        part="root"
        role="slider"
        tabindex=${w(this.disabled?void 0:"0")}
        aria-label=${this.accessibleLabel}
        aria-valuemin="0"
        aria-valuemax=${this.resolvedMax}
        aria-valuenow=${t}
        aria-valuetext=${`${t} / ${this.resolvedMax}`}
        aria-description=${w(this.clearable?this.clearLabel:void 0)}
        aria-keyshortcuts=${w(this.clearable?"Delete Backspace":void 0)}
        aria-disabled=${w(this.disabled?"true":void 0)}
        aria-readonly=${w(this.readonly?"true":void 0)}
        @keydown=${this.handleKeydown}
        @pointerleave=${this.handlePointerLeave}
      >
        <slot
          name="icon"
          class="icon-source"
          aria-hidden="true"
          @slotchange=${this.handleIconSlotChange}
        ></slot>
        ${Array.from({length:this.resolvedMax},(r,s)=>{const o=e>=s+1,a=!o&&this.allowHalf&&e>=s+.5;return c`
            <span
              class="star"
              part="star"
              data-index=${s}
              role="presentation"
              aria-hidden="true"
              @click=${this.handleStarClick}
              @pointermove=${this.handlePointerMove}
            >
              <span class="symbol ${o?"full":a?"half":"empty"}" part="icon">
                <span class="icon-copy base-copy" aria-hidden="true">★</span>
                ${o||a?c`<span class="icon-copy active-copy" aria-hidden="true">★</span>`:f}
              </span>
            </span>
          `})}
      </div>
    `}}Object.defineProperty(ti,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0},max:{type:Number,reflect:!0},allowHalf:{type:Boolean,attribute:"allow-half",reflect:!0},readonly:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},clearable:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"}}});Object.defineProperty(ti,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-rate-size: 27px;
      --super-rate-gap: 5px;
      --super-rate-color: var(--super-border-color-light, #b6ada6);
      --super-rate-active-color: #f0b429;
      --super-rate-border-color: var(--super-border-color, #2f2a27);
      --super-rate-focus-color: var(--super-focus-color, #56c6b7);
      --super-rate-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-rate-validation-color: var(--super-rate-border-color);
      --super-rate-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-rate-font-size: var(--super-font-size-base, 14px);

      display: inline-block;
      color: var(--super-rate-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-rate-font-size);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-rate-size: 33px;
      --super-rate-gap: 6px;
      --super-rate-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-rate-size: 21px;
      --super-rate-gap: 4px;
      --super-rate-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-rate-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-rate-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-rate-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-rate-validation-color: var(--super-color-info, #64748b);
    }

    .root {
      display: inline-flex;
      align-items: center;
      gap: var(--super-rate-gap);
      box-sizing: border-box;
      padding: 4px;
      border: 1.5px solid transparent;
      border-radius: 9px 13px 8px 12px / 12px 8px 13px 9px;
      transform: rotate(var(--super-rate-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        transform 120ms ease;
    }

    :host([validation]:not([validation="none"])) .root {
      background: color-mix(
        in srgb,
        var(--super-rate-validation-color) 6%,
        transparent
      );
      border-color: var(--super-rate-validation-color);
    }

    .star {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-rate-size);
      block-size: var(--super-rate-size);
      padding: 0;
      color: var(--super-rate-color);
      font: inherit;
      font-size: var(--super-rate-size);
      line-height: 1;
      background: transparent;
      border: 0;
      border-radius: 43% 57% 46% 54% / 54% 44% 56% 46%;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .star::before {
      position: absolute;
      inset: -2px;
      content: "";
      border: 1.5px solid transparent;
      border-radius: inherit;
      pointer-events: none;
    }

    .symbol {
      position: relative;
      display: inline-grid;
      place-items: center;
      inline-size: 100%;
      block-size: 100%;
      color: var(--super-rate-color);
      line-height: 1;
      text-shadow: 1px 1px 0 var(--super-rate-shadow-color);
      transition:
        color 100ms ease,
        transform 110ms ease;
    }

    .symbol.full {
      color: var(--super-rate-active-color);
    }

    .symbol.half .active-copy {
      clip-path: inset(0 50% 0 0);
    }

    .symbol.full .active-copy {
      color: var(--super-rate-active-color);
    }

    .icon-copy {
      display: inline-grid;
      place-items: center;
      line-height: 1;
    }

    .icon-copy > * {
      color: inherit;
      fill: currentColor;
      stroke: currentColor;
    }

    .icon-copy.active-copy {
      position: absolute;
      inset: 0;
      color: var(--super-rate-active-color);
      text-shadow: 1px 1px 0 var(--super-rate-shadow-color);
    }

    .icon-source {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    :host([disabled]) {
      opacity: 0.46;
    }

    :host([disabled]) .star {
      cursor: not-allowed;
    }

    :host([readonly]) .star {
      cursor: default;
    }

    .root:focus-visible {
      outline: 3px solid var(--super-rate-focus-color);
      outline-offset: 2px;
      transform: rotate(0deg);
    }

    :host([validation="error"]) .star::before {
      border-color: var(--super-rate-validation-color);
    }

    @media (hover: hover) {
      :host(:not([disabled]):not([readonly])) .star:hover .symbol {
        transform: scale(1.08) rotate(-2deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .root,
      .symbol {
        transition: none;
      }
    }
  `});const Wd="super-rate",Xd=i=>D(Wd,ti,i),Jd=(i,e)=>i.length===e.length&&i.every((t,r)=>t===e[r]);class ri extends O{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"valueIsControlled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"optionObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"optionIds",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"nextOptionId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"initializedOptions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"hasConnected",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"selectedAttributeStates",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"typeahead",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"typeaheadTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleOptionMutations",{enumerable:!0,configurable:!0,writable:!0,value:e=>{let t=!1,r=!1,s;const o=n=>n instanceof HTMLOptionElement?[n]:n instanceof HTMLElement?Array.from(n.querySelectorAll("option")):[],a=new Set(this.collectOptions().map(n=>n.source));e.forEach(n=>{if(n.type==="attributes"){if((n.target instanceof HTMLOptionElement||n.target instanceof HTMLOptGroupElement)&&(t=!0),n.attributeName==="selected"&&n.target instanceof HTMLOptionElement){const l=n.target.hasAttribute("selected");a.has(n.target)&&(this.selectedAttributeStates.set(n.target,l),r=!0,n.target.selected=l,l&&(s=n.target))}return}(n.type==="characterData"||n.type==="childList")&&(t=!0,n.addedNodes.forEach(l=>{o(l).forEach(u=>{if(!a.has(u))return;const d=u.hasAttribute("selected"),p=this.selectedAttributeStates.has(u),m=p&&this.selectedAttributeStates.get(u)!==d;(!p&&d||m)&&(u.selected=d,r=!0,d&&(s=u)),this.selectedAttributeStates.set(u,d)})}))}),t&&this.syncOptions(r,s,r)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),this.multiple=!1,this.searchable=!1,this.clearable=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.loading=!1,this.open=!1,this.name="",this.size="medium",this.variant="default",this.validation="none",this.placeholder="请选择",this.helperText="",this.accessibleLabel="",this.clearLabel="清空选择",this.removeLabel="移除",this.searchLabel="搜索选项",this.searchPlaceholder="搜索并选择",this.emptyText="暂无可选项",this.loadingText="加载中...",this.options=[],this.query="",this.activeIndex=-1,this.hasPrefix=!1}get value(){return this._value}set value(e){this.valueIsControlled=!0,this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get comboboxElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('[role="combobox"]'))??null}get selectedValues(){const e=Array.isArray(this.value)?this.value:this.value?[this.value]:[];return Array.from(new Set(e))}get selectedOptions(){return this.selectedValues.map(t=>this.options.find(r=>r.value===t)).filter(t=>t!==void 0)}get filteredOptions(){const e=this.searchable?this.query.trim().toLocaleLowerCase():"";return this.options.filter(t=>t.hidden?!1:e?t.label.toLocaleLowerCase().includes(e)||t.value.toLocaleLowerCase().includes(e):!0)}get hasValue(){return this.selectedValues.length>0}get hasMutableValue(){return this.selectedOptions.some(e=>!e.disabled)}get activeOption(){return this.filteredOptions[this.activeIndex]}get describedBy(){return this.helperText?"super-select-helper":void 0}get invalid(){return this.validation==="error"?"true":void 0}get comboboxLabel(){if(this.accessibleLabel)return this.accessibleLabel;const e=this.selectedOptions.map(t=>t.label);return e.length?e.join("、"):this.placeholder}getOptionId(e){const t=this.optionIds.get(e);if(t)return t;const r=`super-select-option-${this.nextOptionId++}`;return this.optionIds.set(e,r),r}collectOptions(){const e=[],t=(r,s,o)=>{e.push({source:r,id:this.getOptionId(r),value:r.value,label:(r.label||r.textContent||"").trim(),disabled:r.disabled||!!(s!=null&&s.disabled),hidden:r.hidden||!!(s!=null&&s.hidden),group:(s==null?void 0:s.label)||void 0,groupKey:o})};return Array.from(this.children).forEach((r,s)=>{if(r instanceof HTMLOptionElement){t(r);return}r instanceof HTMLOptGroupElement&&Array.from(r.children).forEach(o=>{o instanceof HTMLOptionElement&&t(o,r,`super-select-group-${s}`)})}),e}normalizeValue(e,t=this.options,r=!1){const s=new Set(t.map(n=>n.value)),o=n=>{const l=Array.from(new Set(n.filter(Boolean)));return t.length&&!r?l.filter(u=>s.has(u)):l};if(this.multiple){const n=Array.isArray(e)?e:e?[e]:[];return o(n)}const a=Array.isArray(e)?e[0]??"":e;return!a||t.length&&!r&&!s.has(a)?"":a}valueEqual(e,t){return Array.isArray(e)&&Array.isArray(t)?Jd(e,t):e===t}syncSourceSelection(e=this.options,t=this.value){const r=new Set(Array.isArray(t)?t:t?[t]:[]);e.forEach(s=>{s.source.selected=r.has(s.value)})}syncOptions(e,t,r=!1){var l,u;const s=(l=this.activeOption)==null?void 0:l.id,o=this.collectOptions(),a=e&&(r||this.initializedOptions||!this.valueIsControlled);let n=this.value;if(a){const d=o.filter(p=>p.source.selected);if(this.multiple)n=d.map(p=>p.value);else{const p=t?o.find(m=>m.source===t):void 0;n=(p==null?void 0:p.value)??((u=d.at(-1))==null?void 0:u.value)??""}}n=this.normalizeValue(n,o,this.valueIsControlled&&!a),this.options=o,this.valueEqual(this.value,n)||this.setInternalValue(n),this.syncSourceSelection(o,n),o.length>0&&(this.initializedOptions=!0),s&&(this.activeIndex=this.filteredOptions.findIndex(d=>d.id===s&&!d.disabled)),this.realignActiveOption()}refreshOptions(){this.syncOptions(!0,void 0,!0),this.rememberSelectedAttributeStates()}realignActiveOption(){if(!this.open||this.loading){this.activeIndex=-1;return}const e=this.filteredOptions,t=e[this.activeIndex];if(t&&!t.disabled)return;const r=new Set(this.selectedValues),s=e.findIndex(o=>r.has(o.value)&&!o.disabled);this.activeIndex=s>=0?s:e.findIndex(o=>!o.disabled)}rememberSelectedAttributeStates(){this.collectOptions().forEach(({source:e})=>{this.selectedAttributeStates.set(e,e.hasAttribute("selected"))})}reconcileDisconnectedSelectedAttributes(){let e=!1,t;return this.collectOptions().forEach(({source:r})=>{const s=r.hasAttribute("selected"),o=this.selectedAttributeStates.has(r);(o&&this.selectedAttributeStates.get(r)!==s||!o&&s)&&(r.selected=s,e=!0,s&&(t=r)),this.selectedAttributeStates.set(r,s)}),{changed:e,preferredOption:t}}connectedCallback(){var r;super.connectedCallback();const e=this.hasConnected?this.reconcileDisconnectedSelectedAttributes():{changed:!1},t=(r=this.ownerDocument.defaultView)==null?void 0:r.MutationObserver;t&&(this.optionObserver=new t(this.handleOptionMutations),this.optionObserver.observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["value","label","disabled","selected","hidden"]})),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.syncOptions(e.changed||!this.initializedOptions,e.preferredOption,e.changed),this.rememberSelectedAttributeStates(),this.hasConnected=!0}disconnectedCallback(){var r,s;const e=((r=this.optionObserver)==null?void 0:r.takeRecords())??[];e.length>0&&this.handleOptionMutations(e),this.rememberSelectedAttributeStates(),(s=this.optionObserver)==null||s.disconnect(),this.optionObserver=null,this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0);const t=this.ownerDocument.defaultView;this.typeaheadTimer!==void 0&&(t==null||t.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=void 0),this.typeahead="",super.disconnectedCallback()}willUpdate(e){if(e.has("multiple")||e.has("value")){const t=this.normalizeValue(this.value,this.options,this.valueIsControlled);this.valueEqual(this.value,t)||this.setInternalValue(t),this.syncSourceSelection(this.options,t)}if(this.disabled&&this.open&&(this.open=!1),!this.open){this.query="",this.activeIndex=-1;return}(e.has("open")||e.has("loading")||e.has("searchable")||e.has("multiple")||e.has("value"))&&this.realignActiveOption()}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this.comboboxElement)==null?void 0:t.focus()}),e.has("activeIndex")&&this.open&&this.activeIndex>=0&&this.updateComplete.then(()=>{const t=this.renderRoot.querySelector('[role="option"][data-active]');typeof(t==null?void 0:t.scrollIntoView)=="function"&&t.scrollIntoView({block:"nearest"})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-select-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,values:[...this.selectedValues],name:this.name,selectedOptions:this.selectedOptions.map(t=>t.source),originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(e&&this.syncOptions(!1),this.open=e,e?this.realignActiveOption():(this.query="",this.activeIndex=-1),this.dispatchEvent(new CustomEvent("super-select-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),e&&this.updateComplete.then(()=>{var s;return(s=this.comboboxElement)==null?void 0:s.focus()}))}selectOption(e,t){if(e.disabled||this.disabled||this.readOnly||this.loading)return;if(this.multiple){const s=this.selectedValues;this.setInternalValue(s.includes(e.value)?s.filter(o=>o!==e.value):[...s,e.value]),this.syncSourceSelection(this.options,this.value),this.emitChange(t);return}const r=this.value!==e.value;this.setInternalValue(e.value),this.syncSourceSelection(this.options,this.value),r&&this.emitChange(t),this.setOpen(!1,"selection",t)}clearSelection(e){var o;if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readOnly||this.loading||!this.hasValue)return;const t=Array.isArray(this.value)?[...this.value]:this.value,r=this.selectedOptions.filter(a=>a.disabled).map(a=>a.value),s=this.multiple?r:r[0]??"";this.valueEqual(this.value,s)||(this.setInternalValue(s),this.syncSourceSelection(this.options,this.value),this.dispatchEvent(new CustomEvent("super-select-clear",{detail:{previousValue:t,originalEvent:e},bubbles:!0,composed:!0})),this.emitChange(e),(o=this.comboboxElement)==null||o.focus())}removeValue(e,t){var s;t.preventDefault(),t.stopPropagation();const r=this.options.find(o=>o.value===e);!this.multiple||this.disabled||this.readOnly||this.loading||r!=null&&r.disabled||(this.setInternalValue(this.selectedValues.filter(o=>o!==e)),this.syncSourceSelection(this.options,this.value),this.emitChange(t),(s=this.comboboxElement)==null||s.focus())}moveActive(e){var s;const t=this.filteredOptions;if(!t.length){this.activeIndex=-1;return}let r=this.activeIndex;for(let o=0;o<t.length;o+=1)if(r=(r+e+t.length)%t.length,!((s=t[r])!=null&&s.disabled)){this.activeIndex=r;return}this.activeIndex=-1}moveToBoundary(e){const t=this.filteredOptions,r=e==="start"?t.map((s,o)=>o):t.map((s,o)=>o).reverse();this.activeIndex=r.find(s=>{var o;return!((o=t[s])!=null&&o.disabled)})??-1}handleTypeahead(e,t){const r=this.ownerDocument.defaultView;this.typeahead+=e.toLocaleLowerCase(),this.typeaheadTimer!==void 0&&(r==null||r.clearTimeout(this.typeaheadTimer)),this.typeaheadTimer=r==null?void 0:r.setTimeout(()=>{this.typeahead="",this.typeaheadTimer=void 0},650),this.open||this.setOpen(!0,"keyboard",t);const s=this.filteredOptions,o=Math.max(this.activeIndex+1,0),n=[...s.slice(o),...s.slice(0,o)].find(l=>!l.disabled&&l.label.toLocaleLowerCase().startsWith(this.typeahead));n&&(this.activeIndex=s.indexOf(n))}handleKeyDown(e){var s;const t=e.composedPath()[0];if(t instanceof HTMLElement&&(t.classList.contains("tag-remove")||t.classList.contains("clear-button"))||this.disabled)return;if(!this.searchable&&e.key.length===1&&e.key!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),this.handleTypeahead(e.key,e);return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const o=e.key==="ArrowDown"?1:-1;this.open?this.moveActive(o):(this.setOpen(!0,"keyboard",e),this.realignActiveOption());return}const r=t instanceof HTMLInputElement&&t.classList.contains("search");if((e.key==="Home"||e.key==="End")&&!r){if(!this.open)return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"||e.key===" "&&!this.searchable){e.preventDefault(),this.open?this.activeOption&&this.selectOption(this.activeOption,e):this.setOpen(!0,"keyboard",e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"escape",e),(s=this.comboboxElement)==null||s.focus();return}e.key==="Tab"&&this.open&&this.setOpen(!1,"keyboard",e)}handleControlClick(e){if(this.disabled)return;const t=e.composedPath()[0];this.searchable&&this.open&&t instanceof HTMLInputElement&&t.classList.contains("search")||this.setOpen(!this.open,"trigger",e)}handleSearch(e){const t=e.currentTarget;this.query=t.value,this.open||this.setOpen(!0,"search",e),this.activeIndex=this.filteredOptions.findIndex(r=>!r.disabled),this.dispatchEvent(new CustomEvent("super-select-search",{detail:{query:this.query,originalEvent:e},bubbles:!0,composed:!0}))}handleSearchFocus(e){this.open||e.currentTarget.select()}handlePrefixSlotChange(e){const t=e.currentTarget;this.hasPrefix=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}click(){var r;if(this.disabled)return;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".control");if(e){e.click();return}const t=new MouseEvent("click");super.click(),this.setOpen(!this.open,"trigger",t)}focus(e){const t=this.comboboxElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.comboboxElement;if(e){e.blur();return}super.blur()}validationSymbol(){switch(this.validation){case"success":return"✓";case"warning":return"!";case"error":return"×";case"info":return"i";default:return""}}renderTags(){return this.multiple?c`
      <span class="tags" part="tags">
        ${this.selectedOptions.map(e=>c`
          <span class="tag" part="tag">
            <span class="tag-label">${e.label}</span>
            ${this.readOnly||this.disabled||this.loading||e.disabled?f:c`<button
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
    `:f}renderDefaultTrigger(){if(this.multiple&&this.hasValue)return f;const e=this.selectedOptions[0];return e?c`<span part="value">${e.label}</span>`:c`<span class="placeholder" part="placeholder">${this.placeholder}</span>`}renderCombobox(){var r,s;const e=this.open&&!this.loading?(r=this.activeOption)==null?void 0:r.id:void 0,t={expanded:this.open?"true":"false",required:this.required?"true":void 0,readonly:this.readOnly?"true":void 0,busy:this.loading?"true":void 0};if(this.searchable){const o=(s=this.selectedOptions[0])==null?void 0:s.label,a=this.open?this.searchPlaceholder:this.multiple&&this.hasValue?"":this.placeholder;return c`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${te(this.open?this.query:this.multiple?"":o??"")}
          placeholder=${a}
          aria-label=${this.accessibleLabel||this.searchLabel}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded=${t.expanded}
          aria-controls="super-select-listbox"
          aria-activedescendant=${w(e)}
          aria-required=${w(t.required)}
          aria-readonly=${w(t.readonly)}
          aria-invalid=${w(this.invalid)}
          aria-busy=${w(t.busy)}
          aria-describedby=${w(this.describedBy)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          @input=${this.handleSearch}
          @focus=${this.handleSearchFocus}
        />
      `}return c`
      <button
        class="trigger"
        part="trigger"
        type="button"
        role="combobox"
        aria-label=${this.comboboxLabel}
        aria-haspopup="listbox"
        aria-expanded=${t.expanded}
        aria-controls="super-select-listbox"
        aria-activedescendant=${w(e)}
        aria-required=${w(t.required)}
        aria-readonly=${w(t.readonly)}
        aria-invalid=${w(this.invalid)}
        aria-busy=${w(t.busy)}
        aria-describedby=${w(this.describedBy)}
        ?disabled=${this.disabled}
      >
        <slot name="trigger">${this.renderDefaultTrigger()}</slot>
      </button>
    `}renderOption(e,t){const r=this.selectedValues.includes(e.value),s=this.readOnly||this.loading;return c`
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
    `}renderOptionGroups(){const e=this.filteredOptions,t=[];return e.forEach((r,s)=>{const o=r.groupKey??"super-select-ungrouped";let a=t.at(-1);(!a||a.key!==o)&&(a={key:o,label:r.group,options:[]},t.push(a)),a.options.push({option:r,index:s})}),t.map(r=>c`
      <div
        class="group"
        part="group"
        role=${r.label?"group":"presentation"}
        aria-label=${w(r.label)}
      >
        ${r.label?c`<div class="group-label" part="group-label">${r.label}</div>`:f}
        ${r.options.map(({option:s,index:o})=>this.renderOption(s,o))}
      </div>
    `)}renderPopup(){if(!this.open)return f;const e=this.filteredOptions;return c`
      <div class="popup" part="popup">
        <div
          id="super-select-listbox"
          class="listbox"
          part="listbox"
          role="listbox"
          aria-label=${this.accessibleLabel||this.placeholder}
          aria-multiselectable=${w(this.multiple?"true":void 0)}
          aria-readonly=${w(this.readOnly?"true":void 0)}
          aria-busy=${this.loading?"true":"false"}
        >
          ${!this.loading&&e.length?this.renderOptionGroups():f}
        </div>
        ${this.loading?c`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`:e.length?f:c`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`}
      </div>
    `}render(){const e=this.validationSymbol(),t=`control${this.hasValue?" has-value":""}`;return c`
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
        ${this.clearable&&this.hasMutableValue&&!this.disabled&&!this.readOnly&&!this.loading?c`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${r=>r.stopPropagation()}
            >×</button>`:f}
        ${e?c`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${e}
            </span>`:f}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText?c`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${w(this.validation==="error"?"alert":void 0)}
            aria-live=${w(this.validation==="error"?void 0:"polite")}
          >${this.helperText}</span>`:f}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${()=>this.syncOptions(!1)}></slot>
      </span>
    `}}Object.defineProperty(ri,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},multiple:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},removeLabel:{type:String,attribute:"remove-label"},searchLabel:{type:String,attribute:"search-label"},searchPlaceholder:{type:String,attribute:"search-placeholder"},emptyText:{type:String,attribute:"empty-text"},loadingText:{type:String,attribute:"loading-text"},options:{state:!0},query:{state:!0},activeIndex:{state:!0},hasPrefix:{state:!0}}});Object.defineProperty(ri,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      color: var(--super-text-color-inverse, #ffffff);
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
  `});const Zd="super-select",Qd=i=>D(Zd,ri,i);class ii extends O{constructor(){super(),this.variant="text",this.rows=1,this.animated=!0,this.loading=!0,this.width="",this.height="",this.loadingLabel="内容加载中"}get rowCount(){return this.variant!=="text"?1:Math.max(1,Math.trunc(Number.isFinite(this.rows)?this.rows:1))}get hostStyle(){const e={};return this.width&&(e.inlineSize=this.width),this.height&&(e.blockSize=this.height),e}renderPlaceholder(){const e=Array.from({length:this.rowCount},()=>c`
      <span class="row" part="row"></span>
    `);return this.variant==="rect"?c`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row rect" part="row"></span>
        </div>
      `:this.variant==="circle"?c`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row circle" part="row"></span>
        </div>
      `:c`
      <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
        ${e}
      </div>
    `}render(){return c`
      <div
        class="skeleton"
        part="skeleton"
        style=${ie(this.hostStyle)}
        aria-live="polite"
      >
        <span class="status">${this.loading?this.loadingLabel:f}</span>
        ${this.loading?this.renderPlaceholder():c`
              <div class="content" part="content">
                <slot></slot>
              </div>
            `}
      </div>
    `}}Object.defineProperty(ii,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},rows:{type:Number,reflect:!0},animated:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},width:{type:String,reflect:!0},height:{type:String,reflect:!0},loadingLabel:{type:String,attribute:"loading-label",reflect:!0}}});Object.defineProperty(ii,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-skeleton-color: var(--super-background-color-soft, #f7f4ec);
      --super-skeleton-shine-color: rgb(255 255 255 / 62%);
      --super-skeleton-border-color: var(--super-border-color-lighter, #ddd5cd);
      --super-skeleton-row-height: 1em;
      --super-skeleton-row-gap: var(--super-spacing-sm, 8px);
      --super-skeleton-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px);
      --super-skeleton-rect-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px);
      --super-skeleton-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-skeleton-duration: 1.4s;

      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-font-size-base, 14px);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([variant="circle"]) {
      display: inline-block;
      inline-size: auto;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      inline-size: 100%;
      gap: var(--super-skeleton-row-gap);
    }

    .row {
      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: var(--super-skeleton-row-height);
      overflow: hidden;
      background: var(--super-skeleton-color);
      border: 1.5px solid var(--super-skeleton-border-color);
      border-radius: var(--super-skeleton-radius);
      transform: rotate(var(--super-skeleton-rotation));
    }

    .row::after {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      content: "";
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--super-skeleton-shine-color) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
    }

    :host([animated]) .row::after {
      animation: super-skeleton-shine var(--super-skeleton-duration) ease-in-out infinite;
    }

    .row.rect {
      block-size: var(--super-skeleton-rect-height, 96px);
      border-radius: var(--super-skeleton-rect-radius);
      transform: rotate(calc(var(--super-skeleton-rotation) * -1));
    }

    .row.circle {
      inline-size: var(--super-skeleton-circle-size, 56px);
      block-size: var(--super-skeleton-circle-size, 56px);
      border-radius: 47% 53% 48% 52% / 51% 46% 54% 49%;
      transform: rotate(var(--super-skeleton-rotation));
    }

    :host([variant="text"]) .row:last-child:not(:only-child) {
      inline-size: 62%;
    }

    .content {
      display: contents;
    }

    .status {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
      border: 0;
      clip-path: inset(50%);
    }

    slot {
      display: contents;
    }

    @keyframes super-skeleton-shine {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host([animated]) .row::after {
        animation: none;
      }
    }
  `});const eh="super-skeleton",th=i=>D(eh,ii,i),rh={fromAttribute(i){return i===null||i===""?0:Number(i)},toAttribute(i){return Array.isArray(i)?null:String(i)}},_e=(i,e,t)=>Math.min(t,Math.max(e,i)),ih=i=>Number(i.toFixed(6)),sh=(i,e)=>Array.isArray(i)&&Array.isArray(e)?i[0]===e[0]&&i[1]===e[1]:!Array.isArray(i)&&!Array.isArray(e)&&i===e;class si extends O{constructor(){super(),this.value=0,this.min=0,this.max=100,this.step=1,this.range=!1,this.disabled=!1,this.size="medium",this.validation="none",this.showTooltip=!1,this.vertical=!1,this.accessibleLabel="滑动条",this.startLabel="起始值",this.endLabel="结束值"}get resolvedMin(){return Number.isFinite(this.min)?this.min:0}get resolvedMax(){const e=this.resolvedMin,t=Number.isFinite(this.max)?this.max:e+100;return t>e?t:e}get resolvedStep(){return Number.isFinite(this.step)&&this.step>0?this.step:1}quantize(e){const t=this.resolvedMin,r=this.resolvedMax,s=this.resolvedStep,o=_e(e,t,r);return ih(_e(t+Math.round((o-t)/s)*s,t,r))}get singleValue(){const e=Array.isArray(this.value)?this.value[0]:this.value;return this.quantize(Number.isFinite(e)?e:this.resolvedMin)}get rangeValue(){const e=this.resolvedMin;if(Array.isArray(this.value)&&this.value.length>=2){const t=this.quantize(Number(this.value[0])),r=this.quantize(Number(this.value[1]));return t<=r?[t,r]:[r,t]}return[e,this.resolvedMax]}get startValue(){return this.range?this.rangeValue[0]:this.resolvedMin}get endValue(){return this.range?this.rangeValue[1]:this.singleValue}percent(e){const t=this.resolvedMin,r=this.resolvedMax;return r===t?0:(e-t)/(r-t)*100}inputElements(){var e;return Array.from(((e=this.renderRoot)==null?void 0:e.querySelectorAll(".native"))??[])}focus(e){const t=this.inputElements()[0];if(t){t.focus(e);return}super.focus(e)}blur(){var e;(e=this.inputElements()[0])==null||e.blur()}syncInputs(){const e=this.inputElements(),t=this.range?this.rangeValue:[this.singleValue];e.forEach((r,s)=>{const o=t[s]??t[0]??this.resolvedMin;r.value=String(o),r.setAttribute("aria-valuemin",String(this.resolvedMin)),r.setAttribute("aria-valuemax",String(this.resolvedMax)),r.setAttribute("aria-valuenow",String(o))})}emitChange(e){this.dispatchEvent(new CustomEvent("super-slider-change",{detail:{value:e},bubbles:!0,composed:!0}))}commit(e){const t=this.range?this.rangeValue:this.singleValue;if(this.disabled||sh(e,t)){this.syncInputs();return}this.value=e,this.emitChange(e),this.syncInputs()}valueFromInput(e){return this.quantize(Number(e.value))}handleInput(e){const t=e.currentTarget,r=this.inputElements().indexOf(t);if(this.range){const[s,o]=this.rangeValue,a=[s,o];r<=0?a[0]=_e(this.valueFromInput(t),this.resolvedMin,o):a[1]=_e(this.valueFromInput(t),s,this.resolvedMax),this.commit(a);return}this.commit(this.valueFromInput(t))}handleChange(e){this.handleInput(e)}handleKeydown(e){if(this.disabled)return;const t=e.currentTarget,s=this.inputElements().indexOf(t),o=this.range,a=o?this.rangeValue:[this.singleValue],n=a[s]??a[0]??this.resolvedMin,l=this.resolvedStep;let u=n,d=!0;switch(e.key){case"ArrowRight":case"ArrowUp":u=n+l;break;case"ArrowLeft":case"ArrowDown":u=n-l;break;case"Home":u=o&&s>0?a[0]:this.resolvedMin;break;case"End":u=o&&s===0?a[1]:this.resolvedMax;break;case"PageUp":u=n+l*10;break;case"PageDown":u=n-l*10;break;default:d=!1}if(d){if(e.preventDefault(),u=this.quantize(u),o){const p=[a[0],a[1]];s<=0?p[0]=_e(u,this.resolvedMin,p[1]):p[1]=_e(u,p[0],this.resolvedMax),this.commit(p);return}this.commit(u)}}handleTrackClick(e){if(this.disabled||e.target instanceof HTMLInputElement)return;const r=e.currentTarget.getBoundingClientRect(),s=this.vertical?r.height:r.width;if(!s)return;const o=this.vertical?r.bottom-e.clientY:e.clientX-r.left,a=_e(o/s,0,1),n=this.quantize(this.resolvedMin+a*(this.resolvedMax-this.resolvedMin));if(!this.range){this.commit(n);return}const[l,u]=this.rangeValue,d=Math.abs(n-l)<=Math.abs(n-u)?[n,u]:[l,n];this.commit(d[0]<=d[1]?d:[d[1],d[0]])}renderTooltip(e,t){const r=this.percent(e),s=this.vertical?{bottom:`${r}%`,left:"100%"}:{left:`${r}%`,top:"-4px"};return c`
      <span
        class="tooltip"
        part=${t===0?"tooltip tooltip-start":"tooltip tooltip-end"}
        style=${ie(s)}
        aria-hidden="true"
      >${e}</span>
    `}renderInput(e,t,r){const s=r>1?e===0?this.startLabel:this.endLabel:this.accessibleLabel;return c`
      <input
        class="native"
        part="input"
        type="range"
        min=${this.resolvedMin}
        max=${this.resolvedMax}
        step=${this.resolvedStep}
        .value=${te(String(t))}
        aria-label=${s}
        aria-orientation=${this.vertical?"vertical":"horizontal"}
        aria-valuemin=${this.resolvedMin}
        aria-valuemax=${this.resolvedMax}
        aria-valuenow=${t}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @keydown=${this.handleKeydown}
      />
    `}render(){const e=this.startValue,t=this.endValue,r=this.percent(e),s=this.percent(t),o=this.vertical?{insetInline:"0",insetBlockEnd:`${r}%`,blockSize:`${Math.max(0,s-r)}%`}:{insetBlock:"0",insetInlineStart:`${r}%`,inlineSize:`${Math.max(0,s-r)}%`};return c`
      <div
        class="root"
        part="root"
        role=${w(this.range?"group":void 0)}
        aria-label=${w(this.range?this.accessibleLabel:void 0)}
      >
        <div class="track" part="track" @click=${this.handleTrackClick}>
          <div class="fill" part="fill" style=${ie(o)}></div>
          ${this.range?this.renderInput(0,e,2):this.renderInput(0,t,1)}
          ${this.range?this.renderInput(1,t,2):f}
        </div>
        ${this.showTooltip?this.range?c`
                ${this.renderTooltip(e,0)}
                ${this.renderTooltip(t,1)}
              `:this.renderTooltip(t,1):f}
      </div>
    `}}Object.defineProperty(si,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0,converter:rh},min:{type:Number,reflect:!0},max:{type:Number,reflect:!0},step:{type:Number,reflect:!0},range:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},showTooltip:{type:Boolean,attribute:"show-tooltip",reflect:!0},vertical:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"},startLabel:{type:String,attribute:"start-label"},endLabel:{type:String,attribute:"end-label"}}});Object.defineProperty(si,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-slider-width: 240px;
      --super-slider-track-size: 9px;
      --super-slider-thumb-size: 21px;
      --super-slider-color: var(--super-color-primary, #4b87f5);
      --super-slider-track-color: var(--super-border-color-lighter, #ddd5cd);
      --super-slider-thumb-color: var(--super-background-color, #fffef9);
      --super-slider-border-color: var(--super-border-color, #2f2a27);
      --super-slider-focus-color: var(--super-focus-color, #56c6b7);
      --super-slider-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-slider-validation-color: var(--super-slider-border-color);
      --super-slider-text-color: var(--super-text-color-primary, #292524);
      --super-slider-font-size: var(--super-font-size-base, 14px);
      --super-slider-rotation: var(--super-sketch-rotation, -0.25deg);
      display: inline-block;
      inline-size: var(--super-slider-width);
      max-inline-size: 100%;
      color: var(--super-slider-text-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-slider-font-size);
      line-height: 1.35;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-slider-width: 292px;
      --super-slider-track-size: 11px;
      --super-slider-thumb-size: 26px;
      --super-slider-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-slider-width: 176px;
      --super-slider-track-size: 7px;
      --super-slider-thumb-size: 17px;
      --super-slider-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-slider-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-slider-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-slider-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-slider-validation-color: var(--super-color-info, #64748b);
    }

    .root {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-block-size: calc(var(--super-slider-thumb-size) + 12px);
      padding: 6px 2px;
      border: 1.5px solid transparent;
      border-radius: 10px 14px 9px 12px / 12px 9px 14px 10px;
      transform: rotate(var(--super-slider-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        transform 120ms ease;
    }

    :host([validation]:not([validation="none"])) .root {
      background: color-mix(
        in srgb,
        var(--super-slider-validation-color) 6%,
        transparent
      );
      border-color: var(--super-slider-validation-color);
    }

    .track {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      min-inline-size: 0;
      block-size: var(--super-slider-track-size);
      background: var(--super-slider-track-color);
      border: 1.5px solid var(--super-slider-border-color);
      border-radius: 8px 11px 7px 10px / 9px 7px 11px 8px;
      box-shadow:
        inset 0 1px 2px rgb(15 23 42 / 14%),
        1.5px 2px 0 -1px var(--super-slider-shadow-color);
      cursor: pointer;
    }

    .track::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.08;
      pointer-events: none;
    }

    .fill {
      position: absolute;
      background: var(--super-slider-color);
      border-radius: inherit;
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 24%);
      pointer-events: none;
    }

    .native {
      position: absolute;
      inset: 0;
      z-index: 2;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: 100%;
      margin: 0;
      padding: 0;
      background: transparent;
      border: 0;
      outline: 0;
      appearance: none;
      pointer-events: none;
      cursor: pointer;
    }

    .native::-webkit-slider-runnable-track {
      background: transparent;
      border: 0;
    }

    .native::-moz-range-track {
      background: transparent;
      border: 0;
    }

    .native::-webkit-slider-thumb {
      box-sizing: border-box;
      inline-size: var(--super-slider-thumb-size);
      block-size: var(--super-slider-thumb-size);
      margin-top: calc(
        (var(--super-slider-track-size) - var(--super-slider-thumb-size)) / 2
      );
      background: var(--super-slider-thumb-color);
      border: 2px solid var(--super-slider-border-color);
      border-radius: 44% 56% 47% 53% / 52% 45% 55% 48%;
      box-shadow:
        1.5px 2px 0 -1px var(--super-slider-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 42%);
      appearance: none;
      pointer-events: auto;
      cursor: grab;
    }

    .native::-moz-range-thumb {
      box-sizing: border-box;
      inline-size: var(--super-slider-thumb-size);
      block-size: var(--super-slider-thumb-size);
      background: var(--super-slider-thumb-color);
      border: 2px solid var(--super-slider-border-color);
      border-radius: 44% 56% 47% 53% / 52% 45% 55% 48%;
      box-shadow:
        1.5px 2px 0 -1px var(--super-slider-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 42%);
      pointer-events: auto;
      cursor: grab;
    }

    .native:focus-visible {
      outline: none;
    }

    .native:focus-visible::-webkit-slider-thumb {
      outline: 3px solid var(--super-slider-focus-color);
      outline-offset: 3px;
    }

    .native:focus-visible::-moz-range-thumb {
      outline: 3px solid var(--super-slider-focus-color);
      outline-offset: 3px;
    }

    :host([vertical]) {
      inline-size: auto;
      block-size: 240px;
    }

    :host([vertical][size="large"]) {
      block-size: 292px;
    }

    :host([vertical][size="small"]) {
      block-size: 176px;
    }

    :host([vertical]) .root {
      block-size: 100%;
      inline-size: auto;
      min-inline-size: calc(var(--super-slider-thumb-size) + 12px);
      padding: 2px 6px;
    }

    :host([vertical]) .track {
      inline-size: var(--super-slider-track-size);
      block-size: auto;
      align-self: stretch;
    }

    :host([vertical]) .native {
      writing-mode: vertical-lr;
      direction: rtl;
    }

    .tooltip {
      position: absolute;
      z-index: 3;
      box-sizing: border-box;
      min-inline-size: 2.2em;
      padding: 2px 6px;
      color: var(--super-slider-text-color);
      font-size: 0.78em;
      font-variant-numeric: tabular-nums;
      line-height: 1.2;
      text-align: center;
      background: var(--super-slider-thumb-color);
      border: 1.5px solid var(--super-slider-border-color);
      border-radius: 6px 9px 5px 8px / 8px 5px 9px 6px;
      box-shadow: 1.5px 2px 0 -1px var(--super-slider-shadow-color);
      pointer-events: none;
      transform: translate(-50%, -100%);
    }

    .tooltip::after {
      position: absolute;
      top: 100%;
      left: 50%;
      inline-size: 7px;
      block-size: 7px;
      content: "";
      background: inherit;
      border-right: 1.5px solid var(--super-slider-border-color);
      border-bottom: 1.5px solid var(--super-slider-border-color);
      transform: translate(-50%, -4px) rotate(45deg);
    }

    :host([vertical]) .tooltip {
      top: auto;
      left: calc(100% + 7px);
      transform: translate(0, 50%);
    }

    :host([vertical]) .tooltip::after {
      top: 50%;
      left: -4px;
      border: 0;
      border-bottom: 1.5px solid var(--super-slider-border-color);
      border-left: 1.5px solid var(--super-slider-border-color);
      transform: translate(0, -50%) rotate(45deg);
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.46;
    }

    :host([disabled]) .track {
      cursor: not-allowed;
      filter: grayscale(0.35);
    }

    :host([disabled]) .native::-webkit-slider-thumb,
    :host([disabled]) .native::-moz-range-thumb {
      cursor: not-allowed;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .root:hover {
        border-color: var(--super-slider-color);
        transform: translate(-0.5px, -0.5px) rotate(0.08deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .root {
        transition: none;
      }
    }
  `});const oh="super-slider",ah=i=>D(oh,si,i),nh=i=>/^\d+(?:\.\d+)?$/.test(i)?`${i}px`:void 0;class oi extends O{constructor(){super(),this.direction="horizontal",this.size="medium",this.wrap=!1,this.align="center",this.fill=!1}render(){return c`<slot part="space"></slot>`}updated(e){if(e.has("size")||e.size===0){const t=nh(this.size);t?this.style.setProperty("--super-space-gap",t):this.style.removeProperty("--super-space-gap")}}}Object.defineProperty(oi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{direction:{type:String,reflect:!0},size:{type:String,reflect:!0},wrap:{type:Boolean,reflect:!0},align:{type:String,reflect:!0},fill:{type:Boolean,reflect:!0}}});Object.defineProperty(oi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-space-gap: var(--super-spacing-md, 12px);
      --super-space-align: center;
      --super-space-justify: flex-start;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: var(--super-space-align);
      justify-content: var(--super-space-justify);
      gap: var(--super-space-gap);
      box-sizing: border-box;
      min-inline-size: 0;
    }

    :host([hidden]) {
      display: none;
    }

    :host([direction="vertical"]) {
      flex-direction: column;
    }

    :host([size="small"]) {
      --super-space-gap: var(--super-spacing-sm, 8px);
    }

    :host([size="medium"]) {
      --super-space-gap: var(--super-spacing-md, 12px);
    }

    :host([size="large"]) {
      --super-space-gap: var(--super-spacing-xl, 24px);
    }

    :host([align="start"]) {
      --super-space-align: flex-start;
    }

    :host([align="center"]) {
      --super-space-align: center;
    }

    :host([align="end"]) {
      --super-space-align: flex-end;
    }

    :host([align="baseline"]) {
      --super-space-align: baseline;
    }

    :host([wrap]) {
      flex-wrap: wrap;
    }

    :host([fill]) {
      inline-size: 100%;
    }

    :host([fill][direction="vertical"]) {
      inline-size: 100%;
      block-size: 100%;
    }

    slot {
      display: contents;
    }
  `});const lh="super-space",ch=i=>D(lh,oi,i);let uh=0;class ai extends O{constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-steps-${++uh}`}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.clickable)return;const t=e.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.stepIndex!==void 0);t&&this.activate(Number(t.dataset.stepIndex))}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.clickable||e.key!=="Enter"&&e.key!==" ")return;const t=e.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.stepIndex!==void 0);t&&(e.preventDefault(),this.activate(Number(t.dataset.stepIndex)))}}),this.items=[],this.active=0,this.direction="horizontal",this.status="process",this.clickable=!1,this.size="medium",this.accessibleLabel="步骤"}get clampedActive(){return Number.isFinite(this.active)?Math.min(Math.max(Math.trunc(this.active),0),Math.max(this.items.length-1,0)):0}stepStatus(e){return e<this.clampedActive?"finish":e>this.clampedActive?"wait":this.status}stepId(e){return`${this.uid}-step-${e}`}activate(e){!this.clickable||e===this.clampedActive||!this.items[e]||(this.active=e,this.dispatchEvent(new CustomEvent("super-steps-change",{detail:{active:e},bubbles:!0,composed:!0})))}renderStep(e,t){const r=this.stepStatus(e),s=e===this.clampedActive,o=c`
      <span
        class="indicator"
        part="indicator"
        aria-hidden="true"
      >
        ${t.icon?c`<span class="icon" part="icon">${t.icon}</span>`:c`<span class="number">${e+1}</span>`}
      </span>
      <span class="content">
        <span class="title" part="title">${t.title}</span>
        ${t.description?c`<span class="description" part="description"
              >${t.description}</span
            >`:f}
      </span>
    `;return c`
      <li
        class="step"
        part="step"
        role="listitem"
        id=${this.stepId(e)}
        data-status=${r}
        aria-current=${s?"step":f}
      >
        ${this.clickable?c`<button
              class="step-body"
              type="button"
              data-step-index=${e}
              data-clickable
            >
              ${o}
            </button>`:c`<div class="step-body">${o}</div>`}
        ${e<this.items.length-1?c`<span
              class="connector"
              part="connector"
              aria-hidden="true"
              data-status=${r}
            ></span>`:f}
      </li>
    `}render(){return c`
      <ol
        class="steps"
        part="steps"
        role="list"
        aria-label=${w(this.accessibleLabel||void 0)}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.items.map((e,t)=>this.renderStep(t,e))}
      </ol>
    `}}Object.defineProperty(ai,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{items:{attribute:!1},active:{type:Number,reflect:!0},direction:{type:String,reflect:!0},status:{type:String,reflect:!0},clickable:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0}}});Object.defineProperty(ai,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-steps-gap: var(--super-spacing-md, 12px);
      --super-steps-indicator-size: 30px;
      --super-steps-font-size: var(--super-font-size-base, 14px);
      --super-steps-title-color: var(--super-text-color-primary, #292524);
      --super-steps-description-color: var(
        --super-text-color-secondary,
        #6b6360
      );
      --super-steps-wait-color: var(--super-text-color-placeholder, #9a938f);
      --super-steps-process-color: var(--super-color-primary, #4b87f5);
      --super-steps-finish-color: var(--super-color-success, #86cf8b);
      --super-steps-error-color: var(--super-color-danger, #ff7067);
      --super-steps-connector-color: var(--super-border-color-light, #b6ada6);
      --super-steps-background: var(--super-background-color, #fffef9);
      --super-steps-border-color: var(--super-border-color, #2f2a27);
      --super-steps-focus-color: var(--super-focus-color, #56c6b7);
      --super-steps-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-steps-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 2px)
        calc(var(--super-radius-sm, 6px) + 1px);
      --super-steps-indicator-radius:
        52% 48% 55% 45% / 47% 53% 45% 55%;
      --super-steps-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-steps-title-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-steps-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-steps-indicator-size: 38px;
      --super-steps-font-size: var(--super-font-size-lg, 16px);
      --super-steps-gap: var(--super-spacing-lg, 16px);
    }

    :host([size="small"]) {
      --super-steps-indicator-size: 24px;
      --super-steps-font-size: var(--super-font-size-sm, 13px);
      --super-steps-gap: var(--super-spacing-sm, 8px);
    }

    .steps {
      display: flex;
      box-sizing: border-box;
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([direction="horizontal"]) .steps {
      flex-direction: row;
      align-items: flex-start;
    }

    :host([direction="vertical"]) .steps {
      flex-direction: column;
      align-items: stretch;
    }

    .step {
      display: flex;
      flex: 1 1 0;
      align-items: flex-start;
      box-sizing: border-box;
      min-inline-size: 0;
      gap: var(--super-steps-gap);
    }

    :host([direction="vertical"]) .step {
      flex: 0 0 auto;
      flex-direction: column;
      align-items: stretch;
    }

    .step-body {
      display: flex;
      flex: 1 1 auto;
      align-items: flex-start;
      min-inline-size: 0;
      gap: var(--super-steps-gap);
      padding: 0;
      color: inherit;
      font: inherit;
      text-align: start;
      background: transparent;
      border: 0;
      border-radius: var(--super-steps-radius);
    }

    :host([direction="vertical"]) .step-body {
      flex-direction: row;
      align-items: flex-start;
      padding-block-end: var(--super-steps-gap);
    }

    .step-body[data-clickable] {
      cursor: pointer;
      transition: background-color var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .step-body[data-clickable]:hover {
      background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 7%,
        transparent
      );
    }

    .step-body:focus-visible {
      outline: 3px solid var(--super-steps-focus-color);
      outline-offset: 2px;
    }

    .indicator {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-steps-indicator-size);
      block-size: var(--super-steps-indicator-size);
      color: var(--super-steps-wait-color);
      font-weight: 700;
      line-height: 1;
      background: var(--super-steps-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-steps-connector-color);
      border-radius: var(--super-steps-indicator-radius);
      transform: rotate(var(--super-steps-rotation));
    }

    .step[data-status="process"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-process-color);
      border-color: var(--super-steps-process-color);
      box-shadow: 2px 3px 0 -1px var(--super-steps-shadow-color);
    }

    .step[data-status="finish"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-finish-color);
      border-color: var(--super-steps-finish-color);
    }

    .step[data-status="error"] .indicator {
      color: var(--super-text-color-inverse, #ffffff);
      background: var(--super-steps-error-color);
      border-color: var(--super-steps-error-color);
    }

    .step[data-status="wait"] .indicator {
      color: var(--super-steps-wait-color);
      background: var(--super-steps-background);
      border-color: var(--super-steps-connector-color);
    }

    .icon {
      display: inline-grid;
      place-items: center;
      font-size: 1.05em;
      line-height: 1;
    }

    .content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      min-inline-size: 0;
      gap: 2px;
      padding-block-start: 2px;
    }

    .title {
      overflow: hidden;
      color: var(--super-steps-title-color);
      font-weight: 700;
      line-height: 1.35;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .step[data-status="wait"] .title {
      color: var(--super-steps-wait-color);
    }

    .step[data-status="process"] .title {
      color: var(--super-steps-process-color);
    }

    .step[data-status="error"] .title {
      color: var(--super-steps-error-color);
    }

    .description {
      overflow: hidden;
      color: var(--super-steps-description-color);
      font-size: 0.92em;
      line-height: 1.5;
      text-overflow: ellipsis;
    }

    .connector {
      flex: 1 1 auto;
      align-self: flex-start;
      min-inline-size: 24px;
      block-size: 0;
      margin: calc(var(--super-steps-indicator-size) / 2)
        var(--super-steps-gap);
      border-block-start: var(--super-sketch-width, 2px) dashed
        var(--super-steps-connector-color);
      transform: rotate(-0.4deg);
    }

    .connector[data-status="finish"] {
      border-block-start-color: var(--super-steps-finish-color);
    }

    .connector[data-status="error"] {
      border-block-start-color: var(--super-steps-error-color);
    }

    :host([direction="vertical"]) .connector {
      flex: 0 0 auto;
      inline-size: 0;
      block-size: auto;
      min-block-size: 18px;
      margin: 0 0 0 calc(var(--super-steps-indicator-size) / 2);
      border-block-start: 0;
      border-inline-start: var(--super-sketch-width, 2px) dashed
        var(--super-steps-connector-color);
      transform: rotate(0.4deg);
    }

    @media (prefers-reduced-motion: reduce) {
      .step-body[data-clickable] {
        transition: none;
      }
    }
  `});const ph="super-steps",dh=i=>D(ph,ai,i);class ni extends O{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return c`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${te(this.checked)}
            name=${this.name}
            value=${this.value}
            aria-label=${w(this.accessibleLabel||void 0)}
            aria-labelledby=${w(this.accessibleLabel?void 0:"super-switch-label")}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby=${w(e)}
            aria-invalid=${w(t)}
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
        ${this.helperText?c`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:f}
      </span>
    `}}Object.defineProperty(ni,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ni,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const hh="super-switch",fh=i=>D(hh,ni,i),Gi={toAttribute:i=>i===""||i===null||i===void 0?null:String(i),fromAttribute:i=>i??""},bh={toAttribute:i=>i?"":null,fromAttribute:i=>i!==null&&i!=="false"};class li extends O{constructor(){super(),Object.defineProperty(this,"handleSort",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!e.sortable||this.loading)return;const r=this.sortKey===e.key&&(this.sortDirection==="asc"||this.sortDirection==="desc")?this.sortDirection==="asc"?"desc":"none":"asc";r==="none"?(this.sortKey="",this.sortDirection=""):(this.sortKey=e.key,this.sortDirection=r),this.emitSort(e.key,r)}}),Object.defineProperty(this,"handleSelectAll",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(!this.selectable||this.loading)return;const e=this.selectableKeys;if(e.length===0)return;const t=this.selectedKeyList,r=new Set(t),s=e.every(a=>r.has(a)),o=s?t.filter(a=>!e.includes(a)):Array.from(new Set([...t,...e]));this.selectedKeys=o,this.emitSelect(o,null,!s)}}),Object.defineProperty(this,"handleRowSelect",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.selectable||this.loading)return;const t=e.currentTarget,r=Number(t.dataset.rowIndex),s=this.normalizedRows[r];if(!s)return;const o=this.getRowKey(s,r),a=this.selectedKeyList,n=!a.includes(o),l=n?[...a,o]:a.filter(u=>u!==o);this.selectedKeys=l,this.emitSelect(l,s,n)}}),this.columns=[],this.rows=[],this.rowKey="id",this.selectable=!1,this.selectedKeys=[],this.sortKey="",this.sortDirection="",this.loading=!1,this.emptyText="暂无数据",this.size="medium",this.striped=!1,this.bordered=!1,this.showHeader=!0,this.stickyHeader=!1,this.selectAllLabel="全选",this.selectRowLabel="选择此行",this.loadingText="数据加载中",this.accessibleLabel="数据表格"}get normalizedColumns(){return Array.isArray(this.columns)?this.columns.filter(e=>!!e&&typeof e.key=="string"&&e.key.length>0):[]}get normalizedRows(){return Array.isArray(this.rows)?this.rows:[]}get selectedKeyList(){const e=Array.isArray(this.selectedKeys)?this.selectedKeys:[];return Array.from(new Set(e.map(t=>String(t))))}get selectedKeySet(){return new Set(this.selectedKeyList)}get selectableKeys(){const e=new Set,t=[];return this.normalizedRows.forEach((r,s)=>{const o=this.getRowKey(r,s);e.has(o)||(e.add(o),t.push(o))}),t}get allSelected(){const e=this.selectableKeys;if(e.length===0)return!1;const t=this.selectedKeySet;return e.every(r=>t.has(r))}get someSelected(){if(this.allSelected)return!1;const e=this.selectedKeySet;return this.selectableKeys.some(t=>e.has(t))}get activeSortKey(){if(this.sortDirection!=="asc"&&this.sortDirection!=="desc")return"";const e=this.normalizedColumns.find(t=>t.key===this.sortKey);return e!=null&&e.sortable?e.key:""}getRowKey(e,t){const r=e==null?void 0:e[this.rowKey];return typeof r=="string"&&r.length>0?r:typeof r=="number"&&Number.isFinite(r)?String(r):String(t)}emitSort(e,t){this.dispatchEvent(new CustomEvent("super-table-sort",{detail:{key:e,direction:t},bubbles:!0,composed:!0}))}emitSelect(e,t,r){this.dispatchEvent(new CustomEvent("super-table-select",{detail:{selectedKeys:[...e],row:t,selected:r},bubbles:!0,composed:!0}))}renderSelectionCell(e,t){const r=this.getRowKey(e,t);return c`
      <td part="cell" class="cell selection-cell">
        <label class="selection-control">
          <input
            class="selection-input"
            type="checkbox"
            aria-label=${this.selectRowLabel}
            data-row-index=${String(t)}
            .checked=${te(this.selectedKeySet.has(r))}
            ?disabled=${this.loading}
            @change=${this.handleRowSelect}
          />
          <span class="selection-box" aria-hidden="true"></span>
        </label>
      </td>
    `}renderCell(e,t,r){const s=e.align?{textAlign:e.align}:{};return c`
      <td part="cell" class="cell" style=${ie(s)}>
        <slot name=${`cell-${e.key}`}>
          ${this.renderCellValue(e,t,r)}
        </slot>
      </td>
    `}renderCellValue(e,t,r){const s=t==null?void 0:t[e.key];if(e.formatter){const o=e.formatter(s,t,r);return o??f}return s==null?f:typeof s=="object"?String(s):s}renderHeaderCell(e){const t=!!e.sortable,r=this.activeSortKey===e.key,s=t?r?this.sortDirection==="asc"?"ascending":"descending":"none":void 0,o={textAlign:e.align??"left"},a=r?this.sortDirection==="asc"?"↑":"↓":"↕";return c`
      <th
        scope="col"
        part="header-cell"
        class="header-cell"
        style=${ie(o)}
        aria-sort=${w(s)}
      >
        ${t?c`
              <button
                class="sort-button"
                part="sort-button"
                type="button"
                ?disabled=${this.loading}
                @click=${()=>this.handleSort(e)}
              >
                <span>${e.title}</span>
                <span class="sort-indicator" aria-hidden="true">${a}</span>
              </button>
            `:c`<span>${e.title}</span>`}
      </th>
    `}renderEmptyRow(e){return c`
      <tr part="row" class="row empty-row" role="row">
        <td
          part="cell empty"
          class="cell empty-cell"
          colspan=${String(e)}
        >
          <span class="empty-content">
            <svg
              class="empty-illustration"
              viewBox="0 0 64 48"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 10c8-5 48-5 56 0 2 8 2 22 0 30-10 4-46 4-56 0-2-8-2-22 0-30Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="4 5"
              />
              <path
                d="M16 20h32M16 28h24M16 36h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                opacity=".7"
              />
            </svg>
            <span class="empty-text">${this.emptyText}</span>
          </span>
        </td>
      </tr>
    `}renderSkeletonRows(e,t){const r=t>0?Math.min(t,5):3;return Array.from({length:r},()=>c`
        <tr part="row" class="row skeleton-row" aria-hidden="true">
          ${Array.from({length:e},()=>c`
              <td part="cell" class="cell skeleton-cell">
                <span class="skeleton-bar"></span>
              </td>
            `)}
        </tr>
      `)}render(){const e=this.normalizedColumns,t=this.normalizedRows,r=Math.max(1,e.length+(this.selectable?1:0));return c`
      <div class="viewport" part="viewport">
        ${this.loading?c`<span class="visually-hidden" role="status">
              ${this.loadingText}
            </span>`:f}
        <table
          class="table"
          part="table"
          aria-label=${w(this.accessibleLabel||void 0)}
          aria-busy=${w(this.loading?"true":void 0)}
        >
          ${e.length>0||this.selectable?c`
                <colgroup>
                  ${this.selectable?c`<col
                        style=${ie({width:"var(--super-table-selection-width)"})}
                      />`:f}
                  ${e.map(s=>c`<col
                        style=${ie(s.width?{width:s.width}:{})}
                      />`)}
                </colgroup>
              `:f}
          ${this.showHeader&&(e.length>0||this.selectable)?c`
                <thead part="header" class="header">
                  <tr>
                    ${this.selectable?c`
                          <th
                            scope="col"
                            part="header-cell"
                            class="header-cell selection-cell"
                          >
                            <label class="selection-control">
                              <input
                                class="selection-input"
                                type="checkbox"
                                aria-label=${this.selectAllLabel}
                                .checked=${te(this.allSelected)}
                                .indeterminate=${this.someSelected}
                                ?disabled=${this.loading||this.selectableKeys.length===0}
                                @change=${this.handleSelectAll}
                              />
                              <span
                                class="selection-box"
                                aria-hidden="true"
                              ></span>
                            </label>
                          </th>
                        `:f}
                    ${e.map(s=>this.renderHeaderCell(s))}
                  </tr>
                </thead>
              `:f}
          <tbody part=${this.loading?"body loading":"body"} class="body">
            ${this.loading?this.renderSkeletonRows(r,t.length):t.length===0?this.renderEmptyRow(r):t.map((s,o)=>c`
                      <tr part="row" class="row data-row">
                        ${this.selectable?this.renderSelectionCell(s,o):f}
                        ${e.map(a=>this.renderCell(a,s,o))}
                      </tr>
                    `)}
          </tbody>
        </table>
      </div>
    `}}Object.defineProperty(li,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{columns:{attribute:!1},rows:{attribute:!1},rowKey:{type:String,attribute:"row-key",reflect:!0},selectable:{type:Boolean,reflect:!0},selectedKeys:{attribute:!1},sortKey:{type:String,attribute:"sort-key",reflect:!0,converter:Gi},sortDirection:{type:String,attribute:"sort-direction",reflect:!0,converter:Gi},loading:{type:Boolean,reflect:!0},emptyText:{type:String,attribute:"empty-text",reflect:!0},size:{type:String,reflect:!0},striped:{type:Boolean,reflect:!0},bordered:{type:Boolean,reflect:!0},showHeader:{type:Boolean,attribute:"show-header",reflect:!0,converter:bh},stickyHeader:{type:Boolean,attribute:"sticky-header",reflect:!0},selectAllLabel:{type:String,attribute:"select-all-label",reflect:!0},selectRowLabel:{type:String,attribute:"select-row-label",reflect:!0},loadingText:{type:String,attribute:"loading-text",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(li,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-table-font-size: var(--super-font-size-base, 14px);
      --super-table-color: var(--super-text-color-primary, #292524);
      --super-table-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-table-background: var(--super-background-color, #fffef9);
      --super-table-header-background: var(--super-background-color-soft, #f7f4ec);
      --super-table-striped-background: color-mix(
        in srgb,
        var(--super-background-color-soft, #f7f4ec) 55%,
        var(--super-background-color, #fffef9)
      );
      --super-table-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 8%,
        var(--super-background-color, #fffef9)
      );
      --super-table-border-color: var(--super-border-color-light, #b6ada6);
      --super-table-outer-border-color: var(--super-border-color, #2f2a27);
      --super-table-selection-color: var(--super-color-primary, #4b87f5);
      --super-table-selection-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-table-selection-mark-color: var(
        --super-text-color-inverse,
        #ffffff
      );
      --super-table-sort-active-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-table-focus-color: var(--super-focus-color, #56c6b7);
      --super-table-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-table-skeleton-color: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-table-skeleton-shine-color: rgb(255 255 255 / 62%);
      --super-table-cell-padding-block: 10px;
      --super-table-cell-padding-inline: 14px;
      --super-table-selection-width: 48px;
      --super-table-max-height: none;
      --super-table-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-table-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-table-skeleton-duration: 1.4s;

      display: block;
      box-sizing: border-box;
      color: var(--super-table-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-table-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-table-font-size: var(--super-font-size-lg, 16px);
      --super-table-cell-padding-block: 13px;
      --super-table-cell-padding-inline: 18px;
      --super-table-selection-width: 54px;
    }

    :host([size="small"]) {
      --super-table-font-size: var(--super-font-size-sm, 13px);
      --super-table-cell-padding-block: 7px;
      --super-table-cell-padding-inline: 10px;
      --super-table-selection-width: 42px;
    }

    .viewport {
      position: relative;
      box-sizing: border-box;
      max-block-size: var(--super-table-max-height, none);
      overflow: auto;
      background-color: var(--super-table-background);
      background-image:
        radial-gradient(
          var(--super-paper-texture, rgb(120 113 100 / 6%)) 1px,
          transparent 1px
        ),
        radial-gradient(
          var(--super-paper-texture, rgb(120 113 100 / 6%)) 1px,
          transparent 1px
        );
      background-position: 0 0, 3px 3px;
      background-size: 6px 6px;
      border: var(--super-sketch-width, 2px) solid
        var(--super-table-outer-border-color);
      border-radius: var(--super-table-radius);
      box-shadow: ${ee(je({color:"var(--super-table-shadow-color)"}))};
    }

    .table {
      inline-size: 100%;
      min-inline-size: 100%;
      color: inherit;
      font: inherit;
      border-collapse: separate;
      border-spacing: 0;
    }

    .header {
      background: var(--super-table-header-background);
    }

    .header-cell {
      box-sizing: border-box;
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      color: var(--super-table-muted-color);
      font-weight: 700;
      text-align: left;
      white-space: nowrap;
      background: var(--super-table-header-background);
      border-block-end: var(--super-sketch-width, 2px) solid
        var(--super-table-outer-border-color);
    }

    :host([sticky-header]) .header-cell {
      position: sticky;
      inset-block-start: 0;
      z-index: 2;
    }

    .sort-button {
      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      margin: calc(var(--super-table-cell-padding-block) * -1)
        calc(var(--super-table-cell-padding-inline) * -1);
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      color: inherit;
      font: inherit;
      font-weight: inherit;
      text-align: inherit;
      cursor: pointer;
      background: transparent;
      border: 0;
      -webkit-tap-highlight-color: transparent;
    }

    .sort-button:hover:not(:disabled) {
      color: var(--super-table-sort-active-color);
      background: var(--super-table-hover-background);
    }

    .sort-button:focus-visible {
      outline: 3px solid var(--super-table-focus-color);
      outline-offset: -3px;
      border-radius: var(--super-radius-sm, 6px);
    }

    .sort-button:disabled {
      cursor: progress;
      opacity: 0.55;
    }

    .sort-indicator {
      display: inline-block;
      margin-inline-start: 6px;
      font-size: 0.9em;
      opacity: 0.55;
    }

    .header-cell[aria-sort="ascending"] .sort-indicator,
    .header-cell[aria-sort="descending"] .sort-indicator {
      color: var(--super-table-sort-active-color);
      opacity: 1;
    }

    .body {
      background: transparent;
    }

    .row {
      background: transparent;
    }

    .data-row {
      transition: background-color var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .data-row:hover {
      background: var(--super-table-hover-background);
    }

    :host([striped]) .data-row:nth-child(even) {
      background: var(--super-table-striped-background);
    }

    :host([striped]) .data-row:nth-child(even):hover {
      background: var(--super-table-hover-background);
    }

    .cell {
      box-sizing: border-box;
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      vertical-align: middle;
      border-block-end: 1.5px solid var(--super-table-border-color);
    }

    .row:last-child > .cell {
      border-block-end: 0;
    }

    :host([bordered]) .header-cell,
    :host([bordered]) .cell {
      border-inline-end: 1.5px solid var(--super-table-border-color);
    }

    :host([bordered]) .header-cell:last-child,
    :host([bordered]) .cell:last-child {
      border-inline-end: 0;
    }

    .selection-cell {
      inline-size: var(--super-table-selection-width);
      padding-inline: 0;
      text-align: center;
      white-space: nowrap;
    }

    .selection-control {
      position: relative;
      display: inline-flex;
      inline-size: 22px;
      block-size: 22px;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .selection-input {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      white-space: nowrap;
      clip-path: inset(50%);
    }

    .selection-box {
      position: relative;
      display: block;
      box-sizing: border-box;
      inline-size: 18px;
      block-size: 18px;
      background: var(--super-table-background);
      border: 2px solid var(--super-table-outer-border-color);
      border-radius: 4px 6px 3px 5px / 5px 3px 6px 4px;
      box-shadow: 1px 1.5px 0 -1px var(--super-table-shadow-color);
      transform: rotate(var(--super-table-rotation));
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        transform 120ms ease;
    }

    .selection-input:checked + .selection-box,
    .selection-input:indeterminate + .selection-box {
      background: var(--super-table-selection-color);
      border-color: var(--super-table-selection-border-color);
    }

    .selection-input:checked + .selection-box::after {
      position: absolute;
      top: 42%;
      left: 50%;
      box-sizing: border-box;
      inline-size: 34%;
      block-size: 62%;
      content: "";
      border-right: 2px solid var(--super-table-selection-mark-color);
      border-bottom: 2px solid var(--super-table-selection-mark-color);
      transform: translate(-50%, -58%) rotate(42deg);
    }

    .selection-input:indeterminate + .selection-box::after {
      position: absolute;
      top: 50%;
      left: 50%;
      inline-size: 58%;
      block-size: 0;
      content: "";
      border-block-start: 2px solid var(--super-table-selection-mark-color);
      transform: translate(-50%, -50%) rotate(-1deg);
    }

    .selection-input:focus-visible + .selection-box {
      outline: 3px solid var(--super-table-focus-color);
      outline-offset: 2px;
      transform: rotate(0deg);
    }

    .selection-input:disabled + .selection-box {
      box-shadow: none;
      opacity: 0.5;
      transform: rotate(0deg);
    }

    :host([loading]) .selection-control {
      cursor: progress;
    }

    .empty-cell {
      padding-block: calc(var(--super-table-cell-padding-block) * 3);
      padding-inline: var(--super-table-cell-padding-inline);
      color: var(--super-table-muted-color);
      text-align: center;
    }

    .empty-content {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: var(--super-spacing-sm, 8px);
    }

    .empty-illustration {
      inline-size: 64px;
      block-size: 48px;
      color: var(--super-table-muted-color);
      opacity: 0.75;
    }

    .empty-text {
      font-size: 0.95em;
    }

    .skeleton-cell {
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      border-block-end: 1.5px solid var(--super-table-border-color);
    }

    .skeleton-bar {
      position: relative;
      display: block;
      inline-size: 72%;
      block-size: 12px;
      overflow: hidden;
      background: var(--super-table-skeleton-color);
      border: 1.5px solid var(--super-table-border-color);
      border-radius: 5px 7px 4px 6px / 6px 4px 7px 5px;
      transform: rotate(var(--super-table-rotation));
    }

    .skeleton-cell:nth-child(even) .skeleton-bar {
      inline-size: 56%;
    }

    .skeleton-bar::after {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      content: "";
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--super-table-skeleton-shine-color) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
      animation: super-table-shimmer var(--super-table-skeleton-duration)
        ease-in-out infinite;
    }

    .visually-hidden {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
      border: 0;
      clip-path: inset(50%);
    }

    @keyframes super-table-shimmer {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .data-row,
      .selection-box {
        transition: none;
      }

      .skeleton-bar::after {
        animation: none;
      }
    }
  `});const mh="super-table",gh=i=>D(mh,li,i);class ci extends O{constructor(){super(),this.variant="default",this.size="medium",this.closable=!1,this.value="",this.closeLabel="移除标签"}close(){this.closable&&this.dispatchEvent(new CustomEvent("super-tag-close",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return c`
      <span class="tag" part="tag">
        <span class="label" part="label"><slot></slot></span>
        ${this.closable?c`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            `:null}
      </span>
    `}}Object.defineProperty(ci,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},value:{type:String,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0}}});Object.defineProperty(ci,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-tag-height: 27px;
      --super-tag-padding-inline: 10px;
      --super-tag-gap: 5px;
      --super-tag-font-size: var(--super-font-size-sm, 13px);
      --super-tag-font-weight: 700;
      --super-tag-color: var(--super-text-color-regular, #4a4441);
      --super-tag-background: var(--super-background-color-soft, #f7f4ec);
      --super-tag-border-color: var(--super-border-color-light, #b6ada6);
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-sketch-shadow, rgb(23 78 166 / 28%)) 30%,
        transparent
      );
      --super-tag-focus-color: var(--super-focus-color, #56c6b7);
      --super-tag-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tag-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-tag-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-tag-font-size);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tag-height: 33px;
      --super-tag-padding-inline: 13px;
      --super-tag-gap: 7px;
      --super-tag-font-size: var(--super-font-size-base, 14px);
      --super-tag-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px) /
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 3px)
        calc(var(--super-radius-md, 9px) + 1px);
    }

    :host([size="small"]) {
      --super-tag-height: 22px;
      --super-tag-padding-inline: 7px;
      --super-tag-gap: 3px;
      --super-tag-font-size: 12px;
      --super-tag-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
    }

    :host([variant="primary"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-primary-dark-2, #3272e8) 82%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 14%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 55%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-primary-dark-2, #3272e8) 18%,
        transparent
      );
    }

    :host([variant="success"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 28%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 16%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 70%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 22%,
        transparent
      );
    }

    :host([variant="warning"]) {
      --super-tag-color: var(--super-text-color-primary, #292524);
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 20%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 70%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 24%,
        transparent
      );
    }

    :host([variant="danger"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 60%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 14%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 60%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 18%,
        transparent
      );
    }

    :host([variant="info"]) {
      --super-tag-color: var(--super-text-color-secondary, #6b6360);
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 12%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 50%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 16%,
        transparent
      );
    }

    .tag {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-block-size: var(--super-tag-height);
      gap: var(--super-tag-gap);
      padding-inline: var(--super-tag-padding-inline);
      color: inherit;
      font: inherit;
      font-weight: var(--super-tag-font-weight);
      line-height: 1;
      background: var(--super-tag-background);
      border: var(--super-sketch-width, 2px) solid var(--super-tag-border-color);
      border-radius: var(--super-tag-radius);
      box-shadow: ${ee(je({color:"var(--super-tag-shadow-color)"}))};
      transform: rotate(var(--super-tag-rotation));
    }

    .tag::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.12;
      pointer-events: none;
    }

    .label {
      display: inline-flex;
      min-inline-size: 0;
      overflow: hidden;
      align-items: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    slot {
      display: contents;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: max(18px, calc(var(--super-tag-height) - 9px));
      block-size: max(18px, calc(var(--super-tag-height) - 9px));
      margin: 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 45% 55% 48% 52% / 53% 46% 54% 47%;
      cursor: pointer;
      opacity: 0.68;
      transition:
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        opacity var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .close:hover {
      background: rgb(41 37 36 / 8%);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-tag-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .close {
        transition: none;
      }
    }
  `});const vh="super-tag",xh=i=>D(vh,ci,i);let yh=0;class ui extends O{constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-tabs-${++yh}`}),Object.defineProperty(this,"syncSlottedTabs",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.items.length>0)return;const e=this.effectiveActive;let t=!1;this.assignedTabs().forEach((r,s)=>{r.id||(r.id=this.tabId(s),t=!0);const o=r.dataset.tabKey??"",a=r.hasAttribute("disabled")||r.getAttribute("aria-disabled")==="true",n=o===e&&!a;r.setAttribute("role","tab"),r.setAttribute("aria-selected",n?"true":"false"),r.setAttribute("aria-controls",this.panelId),r.setAttribute("tabindex",n?"0":"-1"),a&&r.setAttribute("aria-disabled","true")}),t&&this.requestUpdate()}}),Object.defineProperty(this,"handleTabSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.syncSlottedTabs(),this.requestUpdate()}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.composedPath(),r=t.find(n=>n instanceof HTMLElement&&n.hasAttribute("data-tabs-close"));if(r){e.stopPropagation();const n=r.dataset.closeKey??"";n&&this.dispatchEvent(new CustomEvent("super-tabs-close",{detail:{key:n},bubbles:!0,composed:!0}));return}const s=t.find(n=>n instanceof HTMLElement&&!!n.dataset.tabKey);if(!s)return;const o=s.dataset.tabKey??"",a=this.tabEntries().find(n=>n.key===o);!a||a.disabled||this.activate(o)}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=this.orientation!=="vertical",r=t?"ArrowLeft":"ArrowUp",s=t?"ArrowRight":"ArrowDown";if(!["Home","End",r,s].includes(e.key))return;const a=this.tabEntries().filter(m=>!m.disabled);if(a.length===0)return;const n=e.composedPath().find(m=>m instanceof HTMLElement&&!!m.dataset.tabKey),l=(n==null?void 0:n.dataset.tabKey)??this.effectiveActive,u=Math.max(0,a.findIndex(m=>m.key===l));let d=u;if(e.key==="Home")d=0;else if(e.key==="End")d=a.length-1;else{const m=e.key===s?1:-1;d=(u+m+a.length)%a.length}const p=a[d];p&&(e.preventDefault(),this.activate(p.key),this.focusTab(p.key))}}),this.active="",this.orientation="horizontal",this.variant="line",this.size="medium",this.closable=!1,this.closeLabel="关闭标签页",this.accessibleLabel="",this.items=[]}get tabSlot(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('slot[name="tab"]'))??null}get panelId(){return`${this.uid}-panel`}assignedTabs(){var e;return(((e=this.tabSlot)==null?void 0:e.assignedElements({flatten:!0}))??[]).filter(t=>t instanceof HTMLElement&&!!t.dataset.tabKey)}tabEntries(){return this.items.length>0?this.items.filter(e=>!!e.key).map(e=>({key:e.key,disabled:!!e.disabled})):this.assignedTabs().map(e=>({key:e.dataset.tabKey??"",disabled:e.hasAttribute("disabled")||e.getAttribute("aria-disabled")==="true",element:e}))}get effectiveActive(){var t;const e=this.tabEntries();return e.some(r=>r.key===this.active&&!r.disabled)?this.active:((t=e.find(r=>!r.disabled))==null?void 0:t.key)??""}tabId(e){return`${this.uid}-tab-${e}`}get selectedTabId(){var r;const e=this.effectiveActive;if(!e)return;if(this.items.length>0){const s=this.items.findIndex(o=>o.key===e);return s>=0?this.tabId(s):void 0}const t=this.assignedTabs().findIndex(s=>s.dataset.tabKey===e);if(!(t<0))return((r=this.assignedTabs()[t])==null?void 0:r.id)||this.tabId(t)}updated(){this.syncSlottedTabs()}emitChange(e){this.dispatchEvent(new CustomEvent("super-tabs-change",{detail:{active:e},bubbles:!0,composed:!0}))}activate(e){!e||e===this.effectiveActive||(this.active=e,this.emitChange(e))}findTab(e){var t;return this.items.length>0?Array.from(((t=this.renderRoot)==null?void 0:t.querySelectorAll(".tab[data-tab-key]"))??[]).find(r=>r.dataset.tabKey===e)??null:this.assignedTabs().find(r=>r.dataset.tabKey===e)??null}focusTab(e){this.updateComplete.then(()=>{var t;(t=this.findTab(e))==null||t.focus()})}focus(e){const t=this.effectiveActive,r=t?this.findTab(t):null;if(r){r.focus(e);return}super.focus(e)}blur(){const e=this.effectiveActive,t=e?this.findTab(e):null;if(t){t.blur();return}super.blur()}renderItems(){const e=this.effectiveActive;return this.items.map((t,r)=>{const s=t.key===e&&!t.disabled;return c`
        <span class="tab-item" part="tab-item">
          <button
            class="tab"
            part="tab"
            type="button"
            role="tab"
            id=${this.tabId(r)}
            data-tab-key=${t.key}
            aria-selected=${s?"true":"false"}
            aria-controls=${this.panelId}
            aria-disabled=${t.disabled?"true":"false"}
            tabindex=${s?"0":"-1"}
            ?disabled=${!!t.disabled}
          >${t.label}</button>
          ${this.closable?c`
                <button
                  class="close"
                  part="tab-close"
                  type="button"
                  data-tabs-close
                  data-close-key=${t.key}
                  aria-label=${`${this.closeLabel}：${t.label}`}
                >
                  <span aria-hidden="true">×</span>
                </button>
              `:f}
        </span>
      `})}render(){return c`
      <div class="tabs">
        <div
          class="tablist"
          part="tablist"
          role="tablist"
          aria-orientation=${this.orientation}
          aria-label=${w(this.accessibleLabel||void 0)}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        >
          ${this.items.length>0?this.renderItems():c`
                <slot
                  name="tab"
                  @slotchange=${this.handleTabSlotChange}
                ></slot>
              `}
        </div>
        <div
          class="panel"
          part="panel"
          id=${this.panelId}
          role="tabpanel"
          tabindex="0"
          aria-labelledby=${w(this.selectedTabId)}
        >
          <slot></slot>
        </div>
      </div>
    `}}Object.defineProperty(ui,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{active:{type:String,reflect:!0},orientation:{type:String,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},items:{attribute:!1}}});Object.defineProperty(ui,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-tabs-gap: 4px;
      --super-tabs-tab-height: 36px;
      --super-tabs-tab-padding-inline: 14px;
      --super-tabs-font-size: var(--super-font-size-base, 14px);
      --super-tabs-color: var(--super-text-color-regular, #4a4441);
      --super-tabs-active-color: var(--super-color-primary-dark-2, #3272e8);
      --super-tabs-background: transparent;
      --super-tabs-active-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 13%,
        var(--super-background-color, #fffef9)
      );
      --super-tabs-border-color: var(--super-border-color-light, #b6ada6);
      --super-tabs-active-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-tabs-indicator-color: var(--super-color-primary, #4b87f5);
      --super-tabs-focus-color: var(--super-focus-color, #56c6b7);
      --super-tabs-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tabs-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-tabs-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-tabs-font-size);
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tabs-tab-height: 44px;
      --super-tabs-tab-padding-inline: 18px;
      --super-tabs-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-tabs-tab-height: 30px;
      --super-tabs-tab-padding-inline: 10px;
      --super-tabs-font-size: var(--super-font-size-sm, 13px);
    }

    .tabs {
      display: flex;
      min-inline-size: 0;
      flex-direction: column;
      gap: var(--super-spacing-md, 12px);
    }

    :host([orientation="vertical"]) .tabs {
      flex-direction: row;
      align-items: stretch;
    }

    .tablist {
      position: relative;
      display: flex;
      min-inline-size: 0;
      gap: var(--super-tabs-gap);
      align-items: stretch;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: thin;
    }

    :host([orientation="vertical"]) .tablist {
      flex: 0 0 auto;
      flex-direction: column;
      align-items: stretch;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .tab-item {
      position: relative;
      display: inline-flex;
      flex: none;
      align-items: center;
      min-inline-size: 0;
      color: inherit;
      background: var(--super-tabs-background);
      border-radius: var(--super-tabs-radius);
      transform: rotate(var(--super-tabs-rotation));
    }

    :host([orientation="vertical"]) .tab-item {
      inline-size: 100%;
    }

    .tab,
    ::slotted([slot="tab"]) {
      position: relative;
      display: inline-flex;
      box-sizing: border-box;
      flex: 1 1 auto;
      align-items: center;
      justify-content: center;
      min-inline-size: 0;
      min-block-size: var(--super-tabs-tab-height);
      margin: 0;
      padding: 0 var(--super-tabs-tab-padding-inline);
      overflow: hidden;
      color: inherit;
      font: inherit;
      font-weight: 700;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      border-radius: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .tab::after {
      position: absolute;
      right: var(--super-tabs-tab-padding-inline);
      bottom: 4px;
      left: var(--super-tabs-tab-padding-inline);
      height: 2px;
      content: "";
      background: var(--super-tabs-indicator-color);
      border-radius: 45% 55% 48% 52% / 100%;
      opacity: 0;
      transform: rotate(-0.7deg) scaleX(0.55);
      transition:
        opacity var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .tab[aria-selected="true"],
    ::slotted([slot="tab"][aria-selected="true"]) {
      color: var(--super-tabs-active-color);
      background: var(--super-tabs-active-background);
    }

    .tab[aria-selected="true"]::after {
      opacity: 1;
      transform: rotate(-0.7deg) scaleX(1);
    }

    .tab:focus-visible,
    ::slotted([slot="tab"]:focus-visible) {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 2px;
    }

    .tab:disabled,
    .tab[aria-disabled="true"],
    ::slotted([slot="tab"][aria-disabled="true"]),
    ::slotted([slot="tab"][disabled]) {
      cursor: not-allowed;
      opacity: 0.45;
    }

    :host([variant="line"]) .tablist {
      border-bottom: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
    }

    :host([variant="line"][orientation="vertical"]) .tablist {
      border-right: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      border-bottom: 0;
    }

    :host([variant="line"]) .tab-item {
      border-radius: var(--super-tabs-radius) var(--super-tabs-radius) 0 0;
    }

    :host([variant="line"]) .tab[aria-selected="true"]::after {
      right: 4px;
      bottom: -4px;
      left: 4px;
      height: 3px;
    }

    :host([variant="card"]) .tablist {
      gap: 6px;
    }

    :host([variant="card"]) .tab-item {
      background: var(--super-background-color-soft, #f7f4ec);
      border: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      box-shadow: 1px 2px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
    }

    :host([variant="card"]) .tab-item:has([aria-selected="true"]) {
      background: var(--super-tabs-active-background);
      border-color: var(--super-tabs-active-border-color);
    }

    :host([variant="card"]) .tab::after {
      display: none;
    }

    :host([variant="segment"]) .tablist {
      padding: 3px;
      background: var(--super-background-color-soft, #f7f4ec);
      border: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      border-radius: calc(var(--super-radius-md, 9px) + 3px);
    }

    :host([variant="segment"]) .tab-item {
      border-radius: var(--super-tabs-radius);
    }

    :host([variant="segment"]) .tab[aria-selected="true"] {
      background: var(--super-background-color, #fffef9);
      box-shadow: 1px 2px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
    }

    :host([variant="segment"]) .tab::after {
      display: none;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: max(19px, calc(var(--super-tabs-tab-height) - 17px));
      block-size: max(19px, calc(var(--super-tabs-tab-height) - 17px));
      margin: 0 5px 0 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 45% 55% 48% 52% / 53% 46% 54% 47%;
      cursor: pointer;
      opacity: 0.62;
    }

    :host([orientation="vertical"]) .close {
      margin: 0 5px 0 0;
    }

    .close:hover {
      background: rgb(41 37 36 / 8%);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 2px;
    }

    .panel {
      box-sizing: border-box;
      min-inline-size: 0;
      padding: var(--super-spacing-sm, 8px) 2px;
      color: inherit;
      line-height: 1.6;
      outline: none;
    }

    :host([orientation="vertical"]) .panel {
      flex: 1 1 auto;
      padding: 2px var(--super-spacing-md, 12px);
    }

    .panel:focus-visible {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 3px;
    }

    slot {
      display: contents;
    }

    @media (prefers-reduced-motion: reduce) {
      .tab::after {
        transition: none;
      }
    }
  `});const kh="super-tabs",wh=i=>D(kh,ui,i),$h=/^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,zh=/HH|hh|mm|ss|H|h|A|a/g,X=i=>String(i).padStart(2,"0"),bt=i=>{const e=$h.exec(i);return e?{hour:Number(e[1]),minute:Number(e[2]),second:e[3]===void 0?0:Number(e[3])}:null},Qt=(i,e)=>e?`${X(i.hour)}:${X(i.minute)}:${X(i.second)}`:`${X(i.hour)}:${X(i.minute)}`,er=(i,e)=>{const t=Math.max(1,Math.floor(e)||1),r=[];for(let s=0;s<i;s+=t)r.push(s);return r},mt=i=>(i.length>0&&!i.some(e=>e.tabbable)&&(i[0].tabbable=!0),i);class pi extends O{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.setOpen(!this.open,"trigger",e)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.stopPropagation(),this.clearValue(e,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.disabled){if(e.key==="Escape"&&this.open){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e);return}(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.setOpen(!0,"trigger",e))}}}),Object.defineProperty(this,"handleColumnsKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var k,$;if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e),(k=this.triggerElement)==null||k.focus();return}if(e.key!=="ArrowUp"&&e.key!=="ArrowDown"&&e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const t=e.target.closest(".cell"),r=t==null?void 0:t.closest(".column"),s=r==null?void 0:r.closest(".group");if(!t||!r||!s)return;e.preventDefault();const o=Array.from(r.querySelectorAll(".cell")),a=o.indexOf(t);if(e.key==="ArrowUp"||e.key==="ArrowDown"){const E=e.key==="ArrowUp"?-1:1,S=(a+E+o.length)%o.length;($=o[S])==null||$.focus();return}const n=Array.from(s.querySelectorAll(".column")),l=n.indexOf(r),u=e.key==="ArrowLeft"?-1:1,d=n[l+u];if(!d)return;const p=d.querySelectorAll(".cell"),m=p[Math.min(a,p.length-1)];m==null||m.focus()}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e))}}),this.range=!1,this.format="HH:mm",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.open=!1,this.name="",this.placeholder="选择时间",this.startPlaceholder="开始时间",this.endPlaceholder="结束时间",this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.helperText="",this.accessibleLabel="",this.clearLabel="清空",this.confirmLabel="确定",this.amLabel="上午",this.pmLabel="下午",this.startLabel="开始",this.endLabel="结束",this.shortcuts=[]}get value(){return this._value}set value(e){this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}hasSeconds(){return this.format.includes("ss")}isHour12(){return/h/.test(this.format)&&/[Aa]/.test(this.format)}hasValue(){return Array.isArray(this.value)?this.value.some(e=>e!==""):this.value!==""}normalizeSingle(e){const t=bt(e);return t===null?"":Qt(t,this.hasSeconds())}normalizeValue(e){return this.range?Array.isArray(e)?e.filter(t=>typeof t=="string").map(t=>this.normalizeSingle(t)).slice(0,2):[]:Array.isArray(e)?"":this.normalizeSingle(e)}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){(e.has("range")||e.has("format"))&&this.setInternalValue(this.value),this.disabled&&this.open&&(this.open=!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{this.renderRoot.querySelectorAll('.cell[aria-pressed="true"]').forEach(t=>{typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"nearest"})})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-time-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-time-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){e&&this.disabled||this.open===e||(this.open=e,this.dispatchEvent(new CustomEvent("super-time-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),!e&&t!=="outside"&&this.updateComplete.then(()=>{var s;return(s=this.triggerElement)==null?void 0:s.focus()}))}clearValue(e,t){this.disabled||!this.hasValue()||(this.setInternalValue(this.range?[]:""),this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e))}groupParts(e){if(!this.range)return typeof this.value=="string"&&this.value!==""?bt(this.value):null;const r=(Array.isArray(this.value)?this.value:[])[e]??"";return r===""?null:bt(r)}commitSingle(e,t){this.setInternalValue(Qt(e,this.hasSeconds())),this.emitChange(t)}commitRange(e,t,r){const s=Array.isArray(this.value)?[...this.value]:[];for(;s.length<2;)s.push("");s[e]=Qt(t,this.hasSeconds());let o=s.slice(0,2);o[0]!==""&&o[1]!==""&&o[0]>o[1]&&(o=[o[1],o[0]]),this.setInternalValue(o),this.emitChange(r)}pickUnit(e,t,r,s){const o=this.groupParts(e)??{hour:0,minute:0,second:0},a={...o};if(t==="hour"&&typeof r=="number")if(this.isHour12()){const n=o.hour>=12;a.hour=n?r%12+12:r%12}else a.hour=r;else t==="minute"&&typeof r=="number"?a.minute=r:t==="second"&&typeof r=="number"?a.second=r:t==="period"&&(r==="am"&&a.hour>=12&&(a.hour-=12),r==="pm"&&a.hour<12&&(a.hour+=12));if(this.range){this.commitRange(e,a,s);return}this.commitSingle(a,s)}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r);(Array.isArray(s)?s.length===0:s==="")||(this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t))}displayValue(e){const t=bt(e);if(t===null)return e;const r=t.hour%12===0?12:t.hour%12,s={HH:X(t.hour),H:String(t.hour),hh:X(r),h:String(r),mm:X(t.minute),ss:X(t.second),A:t.hour<12?"AM":"PM",a:t.hour<12?"am":"pm"};return this.format.replace(zh,o=>s[o]??o)}renderColumn(e,t,r){return c`
      <div
        class="column"
        part="column"
        role="group"
        data-unit=${t}
        @keydown=${this.handleColumnsKeydown}
      >
        ${r.map(s=>c`
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
    `}renderGroup(e,t){const r=this.groupParts(e),s=this.isHour12(),o=this.hasSeconds(),a=mt(s?Array.from({length:12},(p,m)=>{const k=m+1,$=r!==null&&(r.hour%12===0?12:r.hour%12)===k;return{key:k,label:X(k),selected:$,tabbable:$||r===null&&k===1}}):er(24,this.hourStep).map((p,m)=>({key:p,label:X(p),selected:r!==null&&r.hour===p,tabbable:r!==null&&r.hour===p||r===null&&m===0}))),n=mt(er(60,this.minuteStep).map((p,m)=>({key:p,label:X(p),selected:r!==null&&r.minute===p,tabbable:r!==null&&r.minute===p||r===null&&m===0}))),l=mt(er(60,this.secondStep).map((p,m)=>({key:p,label:X(p),selected:r!==null&&r.second===p,tabbable:r!==null&&r.second===p||r===null&&m===0}))),u=r!==null&&r.hour>=12,d=mt([{key:"am",label:this.amLabel,selected:r!==null&&!u,tabbable:r===null||!u},{key:"pm",label:this.pmLabel,selected:u,tabbable:u}]);return c`
      <div class="group" part="panel" data-group=${e}>
        ${t!==""?c`<div class="group-title" part="column-title">${t}</div>`:f}
        <div class="columns">
          ${this.renderColumn(e,"hour",a)}
          ${this.renderColumn(e,"minute",n)}
          ${o?this.renderColumn(e,"second",l):f}
          ${s?this.renderColumn(e,"period",d):f}
        </div>
      </div>
    `}renderShortcuts(){return this.shortcuts.length===0?f:c`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>c`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.clearable&&this.hasValue();return c`
      <div class="footer" part="footer">
        ${e?c`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${t=>this.clearValue(t,!0)}
            >${this.clearLabel}</button>`:f}
        <button
          class="footer-button confirm-button"
          part="confirm-button"
          type="button"
          @click=${t=>this.setOpen(!1,"confirm",t)}
        >${this.confirmLabel}</button>
      </div>
    `}renderTriggerText(){if(this.range){const t=Array.isArray(this.value)?this.value:[],r=t[0]??"",s=t[1]??"";return c`
        <span class="trigger-text ${r===""?"placeholder":""}" part="label">
          ${r===""?this.startPlaceholder:this.displayValue(r)}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${s===""?"placeholder":""}">
          ${s===""?this.endPlaceholder:this.displayValue(s)}
        </span>
      `}const e=typeof this.value=="string"?this.value:"";return c`
      <span class="trigger-text ${e===""?"placeholder":""}" part="label">
        ${e===""?this.placeholder:this.displayValue(e)}
      </span>
    `}render(){const e=this.hasValue(),t=this.clearable&&e&&!this.disabled;return c`
      <div class="control" part="control">
        <span class="prefix" part="prefix"><slot name="prefix"></slot></span>
        <button
          class="trigger"
          part="trigger"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="popup"
          aria-label=${w(this.accessibleLabel||void 0)}
          ?disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeydown}
        >
          ${this.renderTriggerText()}
        </button>
        ${t?c`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:f}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">◷</slot>
        </span>
      </div>
      ${this.helperText!==""?c`<div class="helper" part="helper">${this.helperText}</div>`:f}
      ${this.open?c`
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
                  ${this.range?c`
                        ${this.renderGroup(0,this.startLabel)}
                        ${this.renderGroup(1,this.endLabel)}
                      `:this.renderGroup(0,"")}
                </div>
              </div>
              ${this.renderFooter()}
            </div>
          `:f}
    `}}Object.defineProperty(pi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},range:{type:Boolean,reflect:!0},format:{type:String},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},hourStep:{type:Number,attribute:"hour-step"},minuteStep:{type:Number,attribute:"minute-step"},secondStep:{type:Number,attribute:"second-step"},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},confirmLabel:{type:String,attribute:"confirm-label"},amLabel:{type:String,attribute:"am-label"},pmLabel:{type:String,attribute:"pm-label"},startLabel:{type:String,attribute:"start-label"},endLabel:{type:String,attribute:"end-label"},shortcuts:{attribute:!1}}});Object.defineProperty(pi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      color: var(--super-text-color-inverse, #ffffff);
      background: #4b87f5;
      border: 1.5px solid #174ea6;
      box-shadow: 1px 2px 0 -1px #174ea6;
    }

    .confirm-button:hover {
      color: var(--super-text-color-inverse, #ffffff);
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
  `});const Sh="super-time-picker",_h=i=>D(Sh,pi,i);let Eh=0;const Ch=(i,e)=>{const t=(i.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);t.includes(e)||(t.push(e),i.setAttribute("aria-describedby",t.join(" ")))},Yi=(i,e)=>{const t=(i.getAttribute("aria-describedby")??"").split(/\s+/).filter(r=>r!==""&&r!==e);t.length>0?i.setAttribute("aria-describedby",t.join(" ")):i.removeAttribute("aria-describedby")};class di extends O{constructor(){super(),Object.defineProperty(this,"tooltipId",{enumerable:!0,configurable:!0,writable:!0,value:`super-tooltip-${++Eh}`}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"describedElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const e=this.renderRoot.querySelector("slot:not([name])"),t=e==null?void 0:e.assignedElements({flatten:!0})[0];this.detachTriggerListeners(),this.triggerElement=t??null,this.attachTriggerListeners(),this.open&&(this.syncDescribedBy(),this.startFloating())}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||!this.interactive||this.trigger!=="hover"||this.clearCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||!this.interactive||this.trigger!=="hover"||this.scheduleClose()}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="focus")return;const t=e.composedPath();t.includes(this)&&(!this.triggerElement||t.includes(this.triggerElement))&&(this.clearCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.trigger!=="focus"||!this.open)return;const t=e.relatedTarget,r=this.tooltipElement;t instanceof Node&&(t===this||this.contains(t)||r!=null&&r.contains(t))||this.scheduleClose()}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click")return;const t=this.triggerElement;!t||!e.composedPath().includes(t)||(this.clearCloseTimer(),this.setOpen(!this.open))}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||this.trigger!=="click"||e.composedPath().includes(this)||this.setOpen(!1)}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.key!=="Escape"||(e.preventDefault(),this.clearCloseTimer(),this.setOpen(!1),this.focusTrigger())}}),this.content="",this.placement="top",this.trigger="hover",this.disabled=!1,this.open=!1,this.delay=120,this.offset=8,this.maxWidth=280,this.showArrow=!0,this.interactive=!1,this.size="medium"}get tooltipElement(){return this.renderRoot.querySelector('[part="tooltip"]')}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){this.clearCloseTimer();const e=Number.isFinite(this.delay)?Math.max(0,this.delay):0;if(e===0){this.setOpen(!1);return}const t=this.ownerDocument.defaultView;if(!t){this.setOpen(!1);return}this.closeTimer=t.setTimeout(()=>{this.closeTimer=void 0,this.setOpen(!1)},e)}setOpen(e){e&&this.disabled||this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent("super-tooltip-open-change",{detail:{open:e},bubbles:!0,composed:!0})))}focusTrigger(){const e=this.triggerElement;e&&typeof e.focus=="function"&&e.focus({preventScroll:!0})}syncDescribedBy(){const e=this.triggerElement;if(this.describedElement&&this.describedElement!==e&&(Yi(this.describedElement,this.tooltipId),this.describedElement=null),!this.open){this.describedElement&&(Yi(this.describedElement,this.tooltipId),this.describedElement=null);return}e&&(Ch(e,this.tooltipId),this.describedElement=e)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.tooltipElement;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=pt(e,t,{placement:this.placement,offset:this.offset}))}releaseInteractiveState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null}syncInteractiveState(){if(!this.open||!this.interactive){this.releaseInteractiveState();return}const e=this.tooltipElement;e&&(this.releaseScroll||(this.releaseScroll=wr()),this.focusTrap||(this.focusTrap=kr(this,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()))}activateOpenState(){this.syncDescribedBy(),this.attachPanelListeners(),this.startFloating(),this.syncInteractiveState()}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.syncDescribedBy(),this.releaseInteractiveState()}attachTriggerListeners(){const e=this.triggerElement;e&&(e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave))}detachTriggerListeners(){const e=this.triggerElement;e&&(e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave))}attachPanelListeners(){const e=this.tooltipElement;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),this.panelElement=null)}connectedCallback(){super.connectedCallback(),this.attachTriggerListeners(),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("click",this.handleClick),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.clearCloseTimer(),this.deactivateOpenState(),this.detachTriggerListeners(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("click",this.handleClick),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.clearCloseTimer(),this.open=!1),e.has("trigger")&&e.get("trigger")!==void 0&&(this.clearCloseTimer(),this.open=!1)}updated(e){const t=e.has("open"),r=e.has("placement")||e.has("offset"),s=e.has("interactive");if(!this.open){t&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}r&&this.startFloating(),s&&this.syncInteractiveState()}render(){const e=Number.isFinite(this.maxWidth)?Math.max(0,this.maxWidth):280;return c`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?c`
            <div
              class="tooltip"
              part="tooltip"
              id=${this.tooltipId}
              role="tooltip"
              tabindex="-1"
              data-placement=${this.placement}
              style=${`--_super-tooltip-max-width: ${e}px`}
            >
              ${this.content?this.content:c`<slot name="content"></slot>`}
              ${this.showArrow?c`<span
                    class="arrow"
                    part="arrow"
                    aria-hidden="true"
                  ></span>`:f}
            </div>
          `:f}
    `}}Object.defineProperty(di,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{content:{type:String,reflect:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},delay:{type:Number,reflect:!0},offset:{type:Number,reflect:!0},maxWidth:{type:Number,attribute:"max-width",reflect:!0},showArrow:{type:Boolean,attribute:"show-arrow",reflect:!0},interactive:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(di,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-tooltip-background: var(--super-background-color, #fffef9);
      --super-tooltip-color: var(--super-text-color-primary, #292524);
      --super-tooltip-border-color: var(--super-border-color, #2f2a27);
      --super-tooltip-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-tooltip-focus-color: var(--super-focus-color, #56c6b7);
      --super-tooltip-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tooltip-font-size: var(--super-font-size-sm, 13px);
      --super-tooltip-line-height: 1.45;
      --super-tooltip-padding-block: 7px;
      --super-tooltip-padding-inline: 10px;
      --super-tooltip-max-width: 280px;
      --_super-tooltip-max-width: var(--super-tooltip-max-width);
      --super-tooltip-arrow-size: 9px;
      --super-tooltip-z-index: var(--super-z-index-overlay, 2000);
      --super-tooltip-rotation: -0.2deg;

      position: relative;
      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-tooltip-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tooltip-font-size: var(--super-font-size-base, 14px);
      --super-tooltip-padding-block: 9px;
      --super-tooltip-padding-inline: 13px;
      --super-tooltip-arrow-size: 10px;
    }

    :host([size="small"]) {
      --super-tooltip-font-size: 12px;
      --super-tooltip-padding-block: 5px;
      --super-tooltip-padding-inline: 8px;
      --super-tooltip-arrow-size: 7px;
    }

    slot {
      display: contents;
    }

    .tooltip {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--super-tooltip-z-index);
      box-sizing: border-box;
      max-inline-size: var(--_super-tooltip-max-width);
      padding: var(--super-tooltip-padding-block)
        var(--super-tooltip-padding-inline);
      color: var(--super-tooltip-color);
      font-family: inherit;
      font-size: var(--super-tooltip-font-size);
      line-height: var(--super-tooltip-line-height);
      overflow-wrap: anywhere;
      white-space: normal;
      pointer-events: none;
      background: var(--super-tooltip-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-radius: var(--super-tooltip-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 28%),
        3px 4px 0 -1px var(--super-tooltip-shadow-color);
      transform: rotate(var(--super-tooltip-rotation));
      transform-origin: center;
    }

    :host([interactive]) .tooltip {
      pointer-events: auto;
    }

    .tooltip:focus {
      outline: none;
    }

    .tooltip:focus-visible {
      outline: 3px solid var(--super-tooltip-focus-color);
      outline-offset: 3px;
    }

    .arrow {
      position: absolute;
      box-sizing: border-box;
      inline-size: var(--super-tooltip-arrow-size);
      block-size: var(--super-tooltip-arrow-size);
      background: var(--super-tooltip-background);
      transform: rotate(45deg);
    }

    .tooltip[data-placement^="top"] .arrow {
      bottom: calc(var(--super-tooltip-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="bottom"] .arrow {
      top: calc(var(--super-tooltip-arrow-size) / -2);
      left: 50%;
      margin-inline-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="left"] .arrow {
      top: 50%;
      right: calc(var(--super-tooltip-arrow-size) / -2);
      margin-block-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-top: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-right: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    .tooltip[data-placement^="right"] .arrow {
      top: 50%;
      left: calc(var(--super-tooltip-arrow-size) / -2);
      margin-block-start: calc(var(--super-tooltip-arrow-size) / -2);
      border-bottom: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
      border-left: var(--super-sketch-width, 2px) solid
        var(--super-tooltip-border-color);
    }

    @media (prefers-reduced-motion: reduce) {
      .tooltip {
        transform: none;
      }
    }
  `});const Ph="super-tooltip",Th=i=>D(Ph,di,i);class hi extends O{get value(){return(Array.isArray(this.fileList)?this.fileList:[]).map(e=>e.name)}constructor(){super(),Object.defineProperty(this,"dragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.accept="",this.multiple=!1,this.disabled=!1,this.maxCount=void 0,this.maxSize=void 0,this.autoUpload=!1,this.fileList=[],this.size="medium",this.validation="none",this.promptText="选择文件",this.hintText="或将文件拖到这里",this.removeLabel="移除文件",this.accessibleLabel="上传文件"}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input[type='file']"))??null}focus(e){var r;const t=(r=this.renderRoot)==null?void 0:r.querySelector(".dropzone");if(t){t.focus(e);return}super.focus(e)}blur(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector(".dropzone"))==null||t.blur()}formatSize(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}dispatchExceed(e,t){this.emit("super-upload-exceed",{files:e,reason:t})}acceptFile(e){return this.accept.trim()?this.accept.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean).some(t=>t.startsWith(".")?e.name.toLowerCase().endsWith(t):t.endsWith("/*")?e.type.toLowerCase().startsWith(t.slice(0,-1)):e.type.toLowerCase()===t||e.name.toLowerCase().endsWith(t)):!0}addFiles(e){if(this.disabled||e.length===0)return;const r=(this.multiple?e:e.slice(0,1)).filter(p=>this.acceptFile(p));if(r.length===0)return;const s=[],o=[];for(const p of r)this.maxSize!==void 0&&p.size>this.maxSize?o.push(p):s.push(p);if(o.length>0&&this.dispatchExceed(o,"max-size"),s.length===0)return;const a=Array.isArray(this.fileList)?this.fileList:[],n=new Set(a.map(p=>`${p.name}:${p.size}:${p.lastModified}`)),l=s.filter(p=>{const m=`${p.name}:${p.size}:${p.lastModified}`;return n.has(m)?!1:(n.add(m),!0)}),u=this.maxCount===void 0?l:l.slice(0,Math.max(0,this.maxCount-a.length)),d=l.slice(u.length);d.length>0&&this.dispatchExceed(d,"max-count"),u.length!==0&&(this.fileList=[...a,...u],this.emit("super-upload-change",{fileList:this.fileList}),this.autoUpload&&this.emit("super-upload-submit",{files:u}))}handleInputChange(e){const t=e.currentTarget;this.addFiles(Array.from(t.files??[])),t.value=""}openPicker(){var e;this.disabled||(e=this.inputElement)==null||e.click()}handleDropzoneClick(e){e.target instanceof Element&&e.target.closest("button, a, input, select, textarea")||this.openPicker()}handleKeydown(e){e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.openPicker())}handleDragOver(e){this.disabled||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.dragging=!0,this.requestUpdate())}handleDragLeave(e){const t=e.currentTarget,r=e.relatedTarget;r&&t.contains(r)||(this.dragging=!1,this.requestUpdate())}handleDrop(e){var t;e.preventDefault(),this.dragging=!1,this.requestUpdate(),!this.disabled&&this.addFiles(Array.from(((t=e.dataTransfer)==null?void 0:t.files)??[]))}handleRemove(e){if(this.disabled)return;const t=Array.isArray(this.fileList)?this.fileList:[],r=t.indexOf(e);r<0||(this.fileList=[...t.slice(0,r),...t.slice(r+1)],this.emit("super-upload-remove",{file:e,fileList:this.fileList}))}render(){const e=Array.isArray(this.fileList)?this.fileList:[];return c`
      <div class="wrapper" part="wrapper">
        <div
          class="dropzone"
          part="dropzone trigger"
          role="button"
          tabindex=${w(this.disabled?void 0:"0")}
          aria-label=${this.accessibleLabel}
          aria-disabled=${w(this.disabled?"true":void 0)}
          data-dragging=${w(this.dragging?"":void 0)}
          @click=${this.handleDropzoneClick}
          @keydown=${this.handleKeydown}
          @dragover=${this.handleDragOver}
          @dragenter=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
        >
          <span class="prompt" part="prompt">
            <slot>
              <span class="prompt-text">${this.promptText}</span>
              <span class="hint">${this.hintText}</span>
            </slot>
          </span>
          <input
            class="native"
            part="input"
            type="file"
            hidden
            accept=${w(this.accept||void 0)}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            tabindex="-1"
            aria-hidden="true"
            @change=${this.handleInputChange}
          />
        </div>
        ${e.length>0?c`
              <ul class="files" part="file-list" aria-label=${this.accessibleLabel}>
                ${e.map((t,r)=>c`
                    <li class="file" part="file" data-index=${r}>
                      <span class="file-name" part="file-name" title=${t.name}>${t.name}</span>
                      <span class="file-size" part="file-size">${this.formatSize(t.size)}</span>
                      <button
                        class="remove"
                        part="remove-button"
                        type="button"
                        aria-label=${`${this.removeLabel}：${t.name}`}
                        ?disabled=${this.disabled}
                        @click=${()=>this.handleRemove(t)}
                      >×</button>
                    </li>
                  `)}
              </ul>
            `:f}
      </div>
    `}}Object.defineProperty(hi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{accept:{type:String,reflect:!0},multiple:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},maxCount:{type:Number,attribute:"max-count",reflect:!0},maxSize:{type:Number,attribute:"max-size",reflect:!0},autoUpload:{type:Boolean,attribute:"auto-upload",reflect:!0},fileList:{attribute:!1},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},promptText:{type:String,attribute:"prompt-text"},hintText:{type:String,attribute:"hint-text"},removeLabel:{type:String,attribute:"remove-label"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(hi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-upload-width: 360px;
      --super-upload-min-height: 152px;
      --super-upload-padding: var(--super-spacing-lg, 16px);
      --super-upload-gap: var(--super-spacing-sm, 8px);
      --super-upload-font-size: var(--super-font-size-base, 14px);
      --super-upload-color: var(--super-text-color-primary, #292524);
      --super-upload-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-upload-background: var(--super-background-color, #fffef9);
      --super-upload-soft-background: var(--super-background-color-soft, #f7f4ec);
      --super-upload-border-color: var(--super-border-color, #2f2a27);
      --super-upload-hover-color: var(--super-color-primary, #4b87f5);
      --super-upload-focus-color: var(--super-focus-color, #56c6b7);
      --super-upload-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-upload-validation-color: var(--super-upload-border-color);
      --super-upload-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-block;
      inline-size: var(--super-upload-width);
      max-inline-size: 100%;
      color: var(--super-upload-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-upload-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-upload-width: 420px;
      --super-upload-min-height: 184px;
      --super-upload-padding: var(--super-spacing-xl, 24px);
      --super-upload-gap: var(--super-spacing-md, 12px);
      --super-upload-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-upload-width: 292px;
      --super-upload-min-height: 118px;
      --super-upload-padding: var(--super-spacing-md, 12px);
      --super-upload-gap: 6px;
      --super-upload-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-upload-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-upload-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-upload-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-upload-validation-color: var(--super-color-info, #64748b);
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--super-upload-gap);
    }

    .dropzone {
      position: relative;
      display: grid;
      place-items: center;
      box-sizing: border-box;
      min-block-size: var(--super-upload-min-height);
      padding: var(--super-upload-padding);
      overflow: hidden;
      color: inherit;
      font: inherit;
      text-align: center;
      background: var(--super-upload-background);
      border: 2px dashed var(--super-upload-border-color);
      border-radius: 13px 9px 14px 10px / 10px 14px 9px 13px;
      box-shadow:
        3px 3px 0 -1px var(--super-upload-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
      cursor: pointer;
      transform: rotate(var(--super-upload-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .dropzone::after {
      position: absolute;
      inset: 5px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 9px 6px 10px 7px / 7px 10px 6px 9px;
      opacity: 0.05;
      pointer-events: none;
      transform: rotate(0.2deg);
    }

    .dropzone:focus-visible {
      outline: 3px solid var(--super-upload-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    :host([validation]:not([validation="none"])) .dropzone {
      border-color: var(--super-upload-validation-color);
      box-shadow:
        3px 3px 0 -1px var(--super-upload-validation-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
    }

    :host([disabled]) .dropzone {
      color: var(--super-upload-muted-color);
      background: var(--super-upload-soft-background);
      border-color: var(--super-border-color-light, #b6ada6);
      box-shadow: none;
      cursor: not-allowed;
      filter: grayscale(0.42);
      opacity: 0.58;
      transform: rotate(0deg);
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    .dropzone[data-dragging] {
      background: color-mix(
        in srgb,
        var(--super-upload-hover-color) 9%,
        var(--super-upload-background)
      );
      border-color: var(--super-upload-hover-color);
      box-shadow:
        4px 4px 0 -1px var(--super-upload-hover-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
      transform: translate(-1px, -1px) rotate(0.1deg);
    }

    .prompt {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      min-inline-size: 0;
      pointer-events: none;
    }

    .prompt-text {
      font-weight: 700;
    }

    .hint {
      color: var(--super-upload-muted-color);
      font-size: 0.82em;
    }

    .files {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .file {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-upload-gap);
      min-inline-size: 0;
      padding: 6px 8px;
      background: var(--super-upload-soft-background);
      border: 1.5px solid var(--super-border-color-light, #b6ada6);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
    }

    .file-name {
      flex: 1;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-size {
      flex: none;
      color: var(--super-upload-muted-color);
      font-size: 0.8em;
      font-variant-numeric: tabular-nums;
    }

    .remove {
      flex: none;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      font-size: 1.05em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid transparent;
      border-radius: 46% 54% 44% 56% / 54% 45% 55% 46%;
      cursor: pointer;
    }

    .remove:hover {
      color: var(--super-color-danger, #ef3f42);
      border-color: currentColor;
    }

    .remove:focus-visible {
      outline: 2px solid var(--super-upload-focus-color);
      outline-offset: 1px;
    }

    .remove:disabled {
      cursor: not-allowed;
    }

    .native {
      display: none;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .dropzone:hover {
        border-color: var(--super-upload-hover-color);
        box-shadow:
          4px 4px 0 -1px var(--super-upload-hover-color),
          inset 0 0 0 1px rgb(255 255 255 / 32%);
        transform: translate(-1px, -1px) rotate(0.1deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dropzone {
        transition: none;
      }
    }
  `});const Ah="super-upload",Oh=i=>D(Ah,hi,i),Lh=[Ou,Ep,Pp,Op,Tu,Ip,Mp,Kp,qp,Yp,Zp,rd,sd,gd,xd,zd,Ed,Id,Md,Rd,Hd,qd,Yd,Xd,Qd,th,ah,ch,dh,fh,gh,xh,wh,_h,Th,Oh];function Ih(i){Lh.forEach(e=>{e(i)})}Ih();export{Mh as t};
