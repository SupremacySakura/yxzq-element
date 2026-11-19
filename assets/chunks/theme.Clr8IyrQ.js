import{d as C,o as h,c as v,r as g,n as F,a as te,t as j,b as P,w as x,e as _,T as br,_ as O,u as Rs,i as Fs,f as Bs,g as fr,h as R,j as Xe,k as A,l as De,m as y,p as f,q as U,s as q,v as Te,x as ir,y as je,z as Pt,A as mr,B as es,C as Gs,D as Hs,E as Ne,F as B,G as Y,H as ts,I as At,J as E,K as Ge,L as rs,M as Tt,N as xt,O as Lt,P as Us,Q as is,R as qs,S as Ys,U as Ws,V as ss,W as Xs,X as os,Y as as,Z as Js,$ as Zs,a0 as Qs,a1 as eo}from"./framework.o5qAeLTz.js";const to=C({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(h(),v("span",{class:F(["VPBadge",e.type])},[g(e.$slots,"default",{},()=>[te(j(e.text),1)])],2))}}),ro={key:0,class:"VPBackdrop"},io=C({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(h(),P(br,{name:"fade"},{default:x(()=>[e.show?(h(),v("div",ro)):_("",!0)]),_:1}))}}),so=O(io,[["__scopeId","data-v-6f6fa9fb"]]),L=Rs;function oo(i,e){let t,r=!1;return()=>{t&&clearTimeout(t),r?t=setTimeout(i,e):(i(),(r=!0)&&setTimeout(()=>r=!1,e))}}function sr(i){return/^\//.test(i)?i:`/${i}`}function gr(i){const{pathname:e,search:t,hash:r,protocol:s}=new URL(i,"http://a.com");if(Fs(i)||i.startsWith("#")||!s.startsWith("http")||!Bs(e))return i;const{site:o}=L(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${r}`);return fr(a)}const vr=R(Xe?location.hash:"");Xe&&window.addEventListener("hashchange",()=>{vr.value=location.hash});function pt({removeCurrent:i=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:r,page:s,theme:o}=L(),a=A(()=>{var l,c;return{label:(l=t.value.locales[r.value])==null?void 0:l.label,link:((c=t.value.locales[r.value])==null?void 0:c.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:A(()=>Object.entries(t.value.locales).flatMap(([l,c])=>i&&a.value.label===c.label?[]:{text:c.label,link:ao(c.link||(l==="root"?"/":`/${l}/`),o.value.i18nRouting!==!1&&e,s.value.relativePath.slice(a.value.link.length-1),!t.value.cleanUrls)+vr.value})),currentLang:a}}function ao(i,e,t,r){return e?i.replace(/\/$/,"")+sr(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):i}const no=i=>(U("data-v-a7a1a61a"),i=i(),q(),i),lo={class:"NotFound"},co={class:"code"},uo={class:"title"},po=no(()=>y("div",{class:"divider"},null,-1)),ho={class:"quote"},bo={class:"action"},fo=["href","aria-label"],mo=C({__name:"NotFound",setup(i){const{site:e,theme:t}=L(),{localeLinks:r}=pt({removeCurrent:!1}),s=R("/");return De(()=>{var a;const o=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(s.value=((a=r.value.find(({link:n})=>n.startsWith(o)))==null?void 0:a.link)||r.value[0].link)}),(o,a)=>{var n,l,c,d,p;return h(),v("div",lo,[y("p",co,j(((n=f(t).notFound)==null?void 0:n.code)??"404"),1),y("h1",uo,j(((l=f(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),po,y("blockquote",ho,j(((c=f(t).notFound)==null?void 0:c.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),y("div",bo,[y("a",{class:"link",href:f(fr)(s.value),"aria-label":((d=f(t).notFound)==null?void 0:d.linkLabel)??"go to home"},j(((p=f(t).notFound)==null?void 0:p.linkText)??"Take me home"),9,fo)])])}}}),go=O(mo,[["__scopeId","data-v-a7a1a61a"]]);function ns(i,e){if(Array.isArray(i))return yt(i);if(i==null)return[];e=sr(e);const t=Object.keys(i).sort((s,o)=>o.split("/").length-s.split("/").length).find(s=>e.startsWith(sr(s))),r=t?i[t]:[];return Array.isArray(r)?yt(r):yt(r.items,r.base)}function vo(i){const e=[];let t=0;for(const r in i){const s=i[r];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function xo(i){const e=[];function t(r){for(const s of r)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function or(i,e){return Array.isArray(e)?e.some(t=>or(i,t)):Te(i,e.link)?!0:e.items?or(i,e.items):!1}function yt(i,e){return[...i].map(t=>{const r={...t},s=r.base||e;return s&&r.link&&(r.link=s+r.link),r.items&&(r.items=yt(r.items,s)),r})}function de(){const{frontmatter:i,page:e,theme:t}=L(),r=ir("(min-width: 960px)"),s=R(!1),o=A(()=>{const z=t.value.sidebar,S=e.value.relativePath;return z?ns(z,S):[]}),a=R(o.value);je(o,(z,S)=>{JSON.stringify(z)!==JSON.stringify(S)&&(a.value=o.value)});const n=A(()=>i.value.sidebar!==!1&&a.value.length>0&&i.value.layout!=="home"),l=A(()=>c?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),c=A(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),d=A(()=>n.value&&r.value),p=A(()=>n.value?vo(a.value):[]);function m(){s.value=!0}function k(){s.value=!1}function $(){s.value?k():m()}return{isOpen:s,sidebar:a,sidebarGroups:p,hasSidebar:n,hasAside:c,leftAside:l,isSidebarEnabled:d,open:m,close:k,toggle:$}}function yo(i,e){let t;Pt(()=>{t=i.value?document.activeElement:void 0}),De(()=>{window.addEventListener("keyup",r)}),mr(()=>{window.removeEventListener("keyup",r)});function r(s){s.key==="Escape"&&i.value&&(e(),t==null||t.focus())}}function ko(i){const{page:e}=L(),t=R(!1),r=A(()=>i.value.collapsed!=null),s=A(()=>!!i.value.link),o=R(!1),a=()=>{o.value=Te(e.value.relativePath,i.value.link)};je([e,i,vr],a),De(a);const n=A(()=>o.value?!0:i.value.items?or(e.value.relativePath,i.value.items):!1),l=A(()=>!!(i.value.items&&i.value.items.length));Pt(()=>{t.value=!!(r.value&&i.value.collapsed)}),es(()=>{(o.value||n.value)&&(t.value=!1)});function c(){r.value&&(t.value=!t.value)}return{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:n,hasChildren:l,toggle:c}}function wo(){const{hasSidebar:i}=de(),e=ir("(min-width: 960px)"),t=ir("(min-width: 1280px)");return{isAsideEnabled:A(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const ar=[];function ls(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function xr(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const r=Number(t.tagName[1]);return{element:t,title:$o(t),link:"#"+t.id,level:r}});return zo(e,i)}function $o(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function zo(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[r,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;i=i.filter(a=>a.level>=r&&a.level<=s),ar.length=0;for(const{element:a,link:n}of i)ar.push({element:a,link:n});const o=[];e:for(let a=0;a<i.length;a++){const n=i[a];if(a===0)o.push(n);else{for(let l=a-1;l>=0;l--){const c=i[l];if(c.level<n.level){(c.children||(c.children=[])).push(n);continue e}}o.push(n)}}return o}function So(i,e){const{isAsideEnabled:t}=wo(),r=oo(o,100);let s=null;De(()=>{requestAnimationFrame(o),window.addEventListener("scroll",r)}),Gs(()=>{a(location.hash)}),mr(()=>{window.removeEventListener("scroll",r)});function o(){if(!t.value)return;const n=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,d=Math.abs(n+l-c)<1,p=ar.map(({element:k,link:$})=>({link:$,top:_o(k)})).filter(({top:k})=>!Number.isNaN(k)).sort((k,$)=>k.top-$.top);if(!p.length){a(null);return}if(n<1){a(null);return}if(d){a(p[p.length-1].link);return}let m=null;for(const{link:k,top:$}of p){if($>n+Hs()+4)break;m=k}a(m)}function a(n){s&&s.classList.remove("active"),n==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(n)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function _o(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}const Co=["href","title"],Eo=C({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const r=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(r));s==null||s.focus({preventScroll:!0})}return(t,r)=>{const s=Ne("VPDocOutlineItem",!0);return h(),v("ul",{class:F(["VPDocOutlineItem",t.root?"root":"nested"])},[(h(!0),v(B,null,Y(t.headers,({children:o,link:a,title:n})=>(h(),v("li",null,[y("a",{class:"outline-link",href:a,onClick:e,title:n},j(n),9,Co),o!=null&&o.length?(h(),P(s,{key:0,headers:o},null,8,["headers"])):_("",!0)]))),256))],2)}}}),cs=O(Eo,[["__scopeId","data-v-a2afcce7"]]),Oo=i=>(U("data-v-7b6871a8"),i=i(),q(),i),Po={class:"content"},Ao={class:"outline-title",role:"heading","aria-level":"2"},To={"aria-labelledby":"doc-outline-aria-label"},Lo=Oo(()=>y("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Io=C({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=L(),r=ts([]);At(()=>{r.value=xr(e.value.outline??t.value.outline)});const s=R(),o=R();return So(s,o),(a,n)=>(h(),v("div",{class:F(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:s,role:"navigation"},[y("div",Po,[y("div",{class:"outline-marker",ref_key:"marker",ref:o},null,512),y("div",Ao,j(f(ls)(f(t))),1),y("nav",To,[Lo,E(cs,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Vo=O(Io,[["__scopeId","data-v-7b6871a8"]]),Mo={class:"VPDocAsideCarbonAds"},Do=C({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,r)=>(h(),v("div",Mo,[E(f(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),jo=i=>(U("data-v-951edd61"),i=i(),q(),i),No={class:"VPDocAside"},Ko=jo(()=>y("div",{class:"spacer"},null,-1)),Ro=C({__name:"VPDocAside",setup(i){const{theme:e}=L();return(t,r)=>(h(),v("div",No,[g(t.$slots,"aside-top",{},void 0,!0),g(t.$slots,"aside-outline-before",{},void 0,!0),E(Vo),g(t.$slots,"aside-outline-after",{},void 0,!0),Ko,g(t.$slots,"aside-ads-before",{},void 0,!0),f(e).carbonAds?(h(),P(Do,{key:0,"carbon-ads":f(e).carbonAds},null,8,["carbon-ads"])):_("",!0),g(t.$slots,"aside-ads-after",{},void 0,!0),g(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Fo=O(Ro,[["__scopeId","data-v-951edd61"]]);function Bo(){const{theme:i,page:e}=L();return A(()=>{const{text:t="Edit this page",pattern:r=""}=i.value.editLink||{};let s;return typeof r=="function"?s=r(e.value):s=r.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Go(){const{page:i,theme:e,frontmatter:t}=L();return A(()=>{var l,c,d,p,m,k,$,z;const r=ns(e.value.sidebar,i.value.relativePath),s=xo(r),o=s.findIndex(S=>Te(i.value.relativePath,S.link)),a=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!t.value.prev||t.value.prev===!1,n=((c=e.value.docFooter)==null?void 0:c.next)===!1&&!t.value.next||t.value.next===!1;return{prev:a?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((d=s[o-1])==null?void 0:d.docFooterText)??((p=s[o-1])==null?void 0:p.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((m=s[o-1])==null?void 0:m.link)},next:n?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((k=s[o+1])==null?void 0:k.docFooterText)??(($=s[o+1])==null?void 0:$.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((z=s[o+1])==null?void 0:z.link)}}})}const ae=C({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=A(()=>e.tag??(e.href?"a":"span")),r=A(()=>e.href&&rs.test(e.href));return(s,o)=>(h(),P(Ge(t.value),{class:F(["VPLink",{link:s.href,"vp-external-link-icon":r.value,"no-icon":s.noIcon}]),href:s.href?f(gr)(s.href):void 0,target:s.target??(r.value?"_blank":void 0),rel:s.rel??(r.value?"noreferrer":void 0)},{default:x(()=>[g(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ho={class:"VPLastUpdated"},Uo=["datetime"],qo=C({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,frontmatter:r,lang:s}=L(),o=A(()=>new Date(r.value.lastUpdated??t.value.lastUpdated)),a=A(()=>o.value.toISOString()),n=R("");return De(()=>{Pt(()=>{var l,c,d;n.value=new Intl.DateTimeFormat((c=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&c.forceLocale?s.value:void 0,((d=e.value.lastUpdated)==null?void 0:d.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(l,c)=>{var d;return h(),v("p",Ho,[te(j(((d=f(e).lastUpdated)==null?void 0:d.text)||f(e).lastUpdatedText||"Last updated")+": ",1),y("time",{datetime:a.value},j(n.value),9,Uo)])}}}),Yo=O(qo,[["__scopeId","data-v-38b6dfd9"]]),Wo=i=>(U("data-v-bbe5e75c"),i=i(),q(),i),Xo={key:0,class:"VPDocFooter"},Jo={key:0,class:"edit-info"},Zo={key:0,class:"edit-link"},Qo=Wo(()=>y("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),ea={key:1,class:"last-updated"},ta={key:1,class:"prev-next"},ra={class:"pager"},ia=["innerHTML"],sa=["innerHTML"],oa={class:"pager"},aa=["innerHTML"],na=["innerHTML"],la=C({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:r}=L(),s=Bo(),o=Go(),a=A(()=>e.value.editLink&&r.value.editLink!==!1),n=A(()=>t.value.lastUpdated&&r.value.lastUpdated!==!1),l=A(()=>a.value||n.value||o.value.prev||o.value.next);return(c,d)=>{var p,m,k,$;return l.value?(h(),v("footer",Xo,[g(c.$slots,"doc-footer-before",{},void 0,!0),a.value||n.value?(h(),v("div",Jo,[a.value?(h(),v("div",Zo,[E(ae,{class:"edit-link-button",href:f(s).url,"no-icon":!0},{default:x(()=>[Qo,te(" "+j(f(s).text),1)]),_:1},8,["href"])])):_("",!0),n.value?(h(),v("div",ea,[E(Yo)])):_("",!0)])):_("",!0),(p=f(o).prev)!=null&&p.link||(m=f(o).next)!=null&&m.link?(h(),v("nav",ta,[y("div",ra,[(k=f(o).prev)!=null&&k.link?(h(),P(ae,{key:0,class:"pager-link prev",href:f(o).prev.link},{default:x(()=>{var z;return[y("span",{class:"desc",innerHTML:((z=f(e).docFooter)==null?void 0:z.prev)||"Previous page"},null,8,ia),y("span",{class:"title",innerHTML:f(o).prev.text},null,8,sa)]}),_:1},8,["href"])):_("",!0)]),y("div",oa,[($=f(o).next)!=null&&$.link?(h(),P(ae,{key:0,class:"pager-link next",href:f(o).next.link},{default:x(()=>{var z;return[y("span",{class:"desc",innerHTML:((z=f(e).docFooter)==null?void 0:z.next)||"Next page"},null,8,aa),y("span",{class:"title",innerHTML:f(o).next.text},null,8,na)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),ca=O(la,[["__scopeId","data-v-bbe5e75c"]]),ua=i=>(U("data-v-5fc3206a"),i=i(),q(),i),pa={class:"container"},da=ua(()=>y("div",{class:"aside-curtain"},null,-1)),ha={class:"aside-container"},ba={class:"aside-content"},fa={class:"content"},ma={class:"content-container"},ga={class:"main"},va=C({__name:"VPDoc",setup(i){const{theme:e}=L(),t=Tt(),{hasSidebar:r,hasAside:s,leftAside:o}=de(),a=A(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(n,l)=>{const c=Ne("Content");return h(),v("div",{class:F(["VPDoc",{"has-sidebar":f(r),"has-aside":f(s)}])},[g(n.$slots,"doc-top",{},void 0,!0),y("div",pa,[f(s)?(h(),v("div",{key:0,class:F(["aside",{"left-aside":f(o)}])},[da,y("div",ha,[y("div",ba,[E(Fo,null,{"aside-top":x(()=>[g(n.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":x(()=>[g(n.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":x(()=>[g(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(n.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),y("div",fa,[y("div",ma,[g(n.$slots,"doc-before",{},void 0,!0),y("main",ga,[E(c,{class:F(["vp-doc",[a.value,f(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),E(ca,null,{"doc-footer-before":x(()=>[g(n.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),g(n.$slots,"doc-after",{},void 0,!0)])])]),g(n.$slots,"doc-bottom",{},void 0,!0)],2)}}}),xa=O(va,[["__scopeId","data-v-5fc3206a"]]),ya=C({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=A(()=>e.href&&rs.test(e.href)),r=A(()=>e.tag||e.href?"a":"button");return(s,o)=>(h(),P(Ge(r.value),{class:F(["VPButton",[s.size,s.theme]]),href:s.href?f(gr)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:x(()=>[te(j(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),ka=O(ya,[["__scopeId","data-v-3aa6481e"]]),wa=["src","alt"],$a=C({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const r=Ne("VPImage",!0);return e.image?(h(),v(B,{key:0},[typeof e.image=="string"||"src"in e.image?(h(),v("img",xt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:f(fr)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,wa)):(h(),v(B,{key:1},[E(r,xt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),E(r,xt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),wt=O($a,[["__scopeId","data-v-31544fe0"]]),za=i=>(U("data-v-5a0e971f"),i=i(),q(),i),Sa={class:"container"},_a={class:"main"},Ca={key:0,class:"name"},Ea=["innerHTML"],Oa=["innerHTML"],Pa=["innerHTML"],Aa={key:0,class:"actions"},Ta={key:0,class:"image"},La={class:"image-container"},Ia=za(()=>y("div",{class:"image-bg"},null,-1)),Va=C({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=Lt("hero-image-slot-exists");return(t,r)=>(h(),v("div",{class:F(["VPHero",{"has-image":t.image||f(e)}])},[y("div",Sa,[y("div",_a,[g(t.$slots,"home-hero-info-before",{},void 0,!0),g(t.$slots,"home-hero-info",{},()=>[t.name?(h(),v("h1",Ca,[y("span",{innerHTML:t.name,class:"clip"},null,8,Ea)])):_("",!0),t.text?(h(),v("p",{key:1,innerHTML:t.text,class:"text"},null,8,Oa)):_("",!0),t.tagline?(h(),v("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Pa)):_("",!0)],!0),g(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(h(),v("div",Aa,[(h(!0),v(B,null,Y(t.actions,s=>(h(),v("div",{key:s.link,class:"action"},[E(ka,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):_("",!0),g(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||f(e)?(h(),v("div",Ta,[y("div",La,[Ia,g(t.$slots,"home-hero-image",{},()=>[t.image?(h(),P(wt,{key:0,class:"image-src",image:t.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),Ma=O(Va,[["__scopeId","data-v-5a0e971f"]]),Da=C({__name:"VPHomeHero",setup(i){const{frontmatter:e}=L();return(t,r)=>f(e).hero?(h(),P(Ma,{key:0,class:"VPHomeHero",name:f(e).hero.name,text:f(e).hero.text,tagline:f(e).hero.tagline,image:f(e).hero.image,actions:f(e).hero.actions},{"home-hero-info-before":x(()=>[g(t.$slots,"home-hero-info-before")]),"home-hero-info":x(()=>[g(t.$slots,"home-hero-info")]),"home-hero-info-after":x(()=>[g(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":x(()=>[g(t.$slots,"home-hero-actions-after")]),"home-hero-image":x(()=>[g(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),ja=i=>(U("data-v-29c05f11"),i=i(),q(),i),Na={class:"box"},Ka={key:0,class:"icon"},Ra=["innerHTML"],Fa=["innerHTML"],Ba=["innerHTML"],Ga={key:4,class:"link-text"},Ha={class:"link-text-value"},Ua=ja(()=>y("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),qa=C({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(h(),P(ae,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:x(()=>[y("article",Na,[typeof e.icon=="object"&&e.icon.wrap?(h(),v("div",Ka,[E(wt,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(h(),P(wt,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(h(),v("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Ra)):_("",!0),y("h2",{class:"title",innerHTML:e.title},null,8,Fa),e.details?(h(),v("p",{key:3,class:"details",innerHTML:e.details},null,8,Ba)):_("",!0),e.linkText?(h(),v("div",Ga,[y("p",Ha,[te(j(e.linkText)+" ",1),Ua])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ya=O(qa,[["__scopeId","data-v-29c05f11"]]),Wa={key:0,class:"VPFeatures"},Xa={class:"container"},Ja={class:"items"},Za=C({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=A(()=>{const r=e.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,s)=>r.features?(h(),v("div",Wa,[y("div",Xa,[y("div",Ja,[(h(!0),v(B,null,Y(r.features,o=>(h(),v("div",{key:o.title,class:F(["item",[t.value]])},[E(Ya,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),Qa=O(Za,[["__scopeId","data-v-e7779453"]]),en=C({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=L();return(t,r)=>f(e).features?(h(),P(Qa,{key:0,class:"VPHomeFeatures",features:f(e).features},null,8,["features"])):_("",!0)}}),tn=C({__name:"VPHomeContent",setup(i){const{width:e}=Us({includeScrollbar:!1});return(t,r)=>(h(),v("div",{class:"vp-doc container",style:is(f(e)?{"--vp-offset":`calc(50% - ${f(e)/2}px)`}:{})},[g(t.$slots,"default",{},void 0,!0)],4))}}),rn=O(tn,[["__scopeId","data-v-cd81b872"]]),sn={class:"VPHome"},on=C({__name:"VPHome",setup(i){const{frontmatter:e}=L();return(t,r)=>{const s=Ne("Content");return h(),v("div",sn,[g(t.$slots,"home-hero-before",{},void 0,!0),E(Da,null,{"home-hero-info-before":x(()=>[g(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),g(t.$slots,"home-hero-after",{},void 0,!0),g(t.$slots,"home-features-before",{},void 0,!0),E(en),g(t.$slots,"home-features-after",{},void 0,!0),f(e).markdownStyles!==!1?(h(),P(rn,{key:0},{default:x(()=>[E(s)]),_:1})):(h(),P(s,{key:1}))])}}}),an=O(on,[["__scopeId","data-v-0d7cbeea"]]),nn={},ln={class:"VPPage"};function cn(i,e){const t=Ne("Content");return h(),v("div",ln,[g(i.$slots,"page-top"),E(t),g(i.$slots,"page-bottom")])}const un=O(nn,[["render",cn]]),pn=C({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=L(),{hasSidebar:r}=de();return(s,o)=>(h(),v("div",{class:F(["VPContent",{"has-sidebar":f(r),"is-home":f(t).layout==="home"}]),id:"VPContent"},[f(e).isNotFound?g(s.$slots,"not-found",{key:0},()=>[E(go)],!0):f(t).layout==="page"?(h(),P(un,{key:1},{"page-top":x(()=>[g(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":x(()=>[g(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):f(t).layout==="home"?(h(),P(an,{key:2},{"home-hero-before":x(()=>[g(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":x(()=>[g(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":x(()=>[g(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":x(()=>[g(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":x(()=>[g(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):f(t).layout&&f(t).layout!=="doc"?(h(),P(Ge(f(t).layout),{key:3})):(h(),P(xa,{key:4},{"doc-top":x(()=>[g(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":x(()=>[g(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":x(()=>[g(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":x(()=>[g(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":x(()=>[g(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":x(()=>[g(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":x(()=>[g(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":x(()=>[g(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),dn=O(pn,[["__scopeId","data-v-a0eadabb"]]),hn={class:"container"},bn=["innerHTML"],fn=["innerHTML"],mn=C({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=de();return(s,o)=>f(e).footer&&f(t).footer!==!1?(h(),v("footer",{key:0,class:F(["VPFooter",{"has-sidebar":f(r)}])},[y("div",hn,[f(e).footer.message?(h(),v("p",{key:0,class:"message",innerHTML:f(e).footer.message},null,8,bn)):_("",!0),f(e).footer.copyright?(h(),v("p",{key:1,class:"copyright",innerHTML:f(e).footer.copyright},null,8,fn)):_("",!0)])],2)):_("",!0)}}),gn=O(mn,[["__scopeId","data-v-3181bdf6"]]);function us(){const{theme:i,frontmatter:e}=L(),t=ts([]),r=A(()=>t.value.length>0);return At(()=>{t.value=xr(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:r}}const vn=i=>(U("data-v-cba91b6f"),i=i(),q(),i),xn=vn(()=>y("span",{class:"vpi-chevron-right icon"},null,-1)),yn={class:"header"},kn={class:"outline"},wn=C({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=L(),r=R(!1),s=R(0),o=R(),a=R();qs(o,()=>{r.value=!1}),Ys("Escape",()=>{r.value=!1}),At(()=>{r.value=!1});function n(){r.value=!r.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(d){d.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Ws(()=>{r.value=!1}))}function c(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,p)=>(h(),v("div",{class:"VPLocalNavOutlineDropdown",style:is({"--vp-vh":s.value+"px"}),ref_key:"main",ref:o},[d.headers.length>0?(h(),v("button",{key:0,onClick:n,class:F({open:r.value})},[te(j(f(ls)(f(t)))+" ",1),xn],2)):(h(),v("button",{key:1,onClick:c},j(f(t).returnToTopLabel||"Return to top"),1)),E(br,{name:"flyout"},{default:x(()=>[r.value?(h(),v("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:l},[y("div",yn,[y("a",{class:"top-link",href:"#",onClick:c},j(f(t).returnToTopLabel||"Return to top"),1)]),y("div",kn,[E(cs,{headers:d.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),$n=O(wn,[["__scopeId","data-v-cba91b6f"]]),zn=i=>(U("data-v-3ed22da4"),i=i(),q(),i),Sn={class:"container"},_n=["aria-expanded"],Cn=zn(()=>y("span",{class:"vpi-align-left menu-icon"},null,-1)),En={class:"menu-text"},On=C({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:r}=de(),{headers:s}=us(),{y:o}=ss(),a=R(0);De(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),At(()=>{s.value=xr(t.value.outline??e.value.outline)});const n=A(()=>s.value.length===0),l=A(()=>n.value&&!r.value),c=A(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:n.value,fixed:l.value}));return(d,p)=>f(t).layout!=="home"&&(!l.value||f(o)>=a.value)?(h(),v("div",{key:0,class:F(c.value)},[y("div",Sn,[f(r)?(h(),v("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:p[0]||(p[0]=m=>d.$emit("open-menu"))},[Cn,y("span",En,j(f(e).sidebarMenuLabel||"Menu"),1)],8,_n)):_("",!0),E($n,{headers:f(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),Pn=O(On,[["__scopeId","data-v-3ed22da4"]]);function An(){const i=R(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function r(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const o=Tt();return je(()=>o.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:r}}const Tn={},Ln={class:"VPSwitch",type:"button",role:"switch"},In={class:"check"},Vn={key:0,class:"icon"};function Mn(i,e){return h(),v("button",Ln,[y("span",In,[i.$slots.default?(h(),v("span",Vn,[g(i.$slots,"default",{},void 0,!0)])):_("",!0)])])}const Dn=O(Tn,[["render",Mn],["__scopeId","data-v-3c9bcffa"]]),ps=i=>(U("data-v-a529835a"),i=i(),q(),i),jn=ps(()=>y("span",{class:"vpi-sun sun"},null,-1)),Nn=ps(()=>y("span",{class:"vpi-moon moon"},null,-1)),Kn=C({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=L(),r=Lt("toggle-appearance",()=>{e.value=!e.value}),s=A(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(o,a)=>(h(),P(Dn,{title:s.value,class:"VPSwitchAppearance","aria-checked":f(e),onClick:f(r)},{default:x(()=>[jn,Nn]),_:1},8,["title","aria-checked","onClick"]))}}),yr=O(Kn,[["__scopeId","data-v-a529835a"]]),Rn={key:0,class:"VPNavBarAppearance"},Fn=C({__name:"VPNavBarAppearance",setup(i){const{site:e}=L();return(t,r)=>f(e).appearance&&f(e).appearance!=="force-dark"?(h(),v("div",Rn,[E(yr)])):_("",!0)}}),Bn=O(Fn,[["__scopeId","data-v-786f23a7"]]),kr=R();let ds=!1,Gt=0;function Gn(i){const e=R(!1);if(Xe){!ds&&Hn(),Gt++;const t=je(kr,r=>{var s,o,a;r===i.el.value||(s=i.el.value)!=null&&s.contains(r)?(e.value=!0,(o=i.onFocus)==null||o.call(i)):(e.value=!1,(a=i.onBlur)==null||a.call(i))});mr(()=>{t(),Gt--,Gt||Un()})}return Xs(e)}function Hn(){document.addEventListener("focusin",hs),ds=!0,kr.value=document.activeElement}function Un(){document.removeEventListener("focusin",hs)}function hs(){kr.value=document.activeElement}const qn={class:"VPMenuLink"},Yn=C({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,r)=>(h(),v("div",qn,[E(ae,{class:F({active:f(Te)(f(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:x(()=>[te(j(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),It=O(Yn,[["__scopeId","data-v-1f793dae"]]),Wn={class:"VPMenuGroup"},Xn={key:0,class:"title"},Jn=C({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(h(),v("div",Wn,[e.text?(h(),v("p",Xn,j(e.text),1)):_("",!0),(h(!0),v(B,null,Y(e.items,r=>(h(),v(B,null,["link"in r?(h(),P(It,{key:0,item:r},null,8,["item"])):_("",!0)],64))),256))]))}}),Zn=O(Jn,[["__scopeId","data-v-11001275"]]),Qn={class:"VPMenu"},el={key:0,class:"items"},tl=C({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(h(),v("div",Qn,[e.items?(h(),v("div",el,[(h(!0),v(B,null,Y(e.items,r=>(h(),v(B,{key:r.text},["link"in r?(h(),P(It,{key:0,item:r},null,8,["item"])):(h(),P(Zn,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):_("",!0),g(e.$slots,"default",{},void 0,!0)]))}}),rl=O(tl,[["__scopeId","data-v-40114911"]]),il=i=>(U("data-v-ca516adc"),i=i(),q(),i),sl=["aria-expanded","aria-label"],ol={key:0,class:"text"},al=["innerHTML"],nl=il(()=>y("span",{class:"vpi-chevron-down text-icon"},null,-1)),ll={key:1,class:"vpi-more-horizontal icon"},cl={class:"menu"},ul=C({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=R(!1),t=R();Gn({el:t,onBlur:r});function r(){e.value=!1}return(s,o)=>(h(),v("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[y("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[s.button||s.icon?(h(),v("span",ol,[s.icon?(h(),v("span",{key:0,class:F([s.icon,"option-icon"])},null,2)):_("",!0),s.button?(h(),v("span",{key:1,innerHTML:s.button},null,8,al)):_("",!0),nl])):(h(),v("span",ll))],8,sl),y("div",cl,[E(rl,{items:s.items},{default:x(()=>[g(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),wr=O(ul,[["__scopeId","data-v-ca516adc"]]),pl=["href","aria-label","innerHTML"],dl=C({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=A(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(r,s)=>(h(),v("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,pl))}}),hl=O(dl,[["__scopeId","data-v-e5af8ed1"]]),bl={class:"VPSocialLinks"},fl=C({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(h(),v("div",bl,[(h(!0),v(B,null,Y(e.links,({link:r,icon:s,ariaLabel:o})=>(h(),P(hl,{key:r,icon:s,link:r,ariaLabel:o},null,8,["icon","link","ariaLabel"]))),128))]))}}),$r=O(fl,[["__scopeId","data-v-2ea1f528"]]),ml={key:0,class:"group translations"},gl={class:"trans-title"},vl={key:1,class:"group"},xl={class:"item appearance"},yl={class:"label"},kl={class:"appearance-action"},wl={key:2,class:"group"},$l={class:"item social-links"},zl=C({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=L(),{localeLinks:r,currentLang:s}=pt({correspondingLink:!0}),o=A(()=>r.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,n)=>o.value?(h(),P(wr,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:x(()=>[f(r).length&&f(s).label?(h(),v("div",ml,[y("p",gl,j(f(s).label),1),(h(!0),v(B,null,Y(f(r),l=>(h(),P(It,{key:l.link,item:l},null,8,["item"]))),128))])):_("",!0),f(e).appearance&&f(e).appearance!=="force-dark"?(h(),v("div",vl,[y("div",xl,[y("p",yl,j(f(t).darkModeSwitchLabel||"Appearance"),1),y("div",kl,[E(yr)])])])):_("",!0),f(t).socialLinks?(h(),v("div",wl,[y("div",$l,[E($r,{class:"social-links-list",links:f(t).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),Sl=O(zl,[["__scopeId","data-v-918c0501"]]),_l=i=>(U("data-v-dbac2bdb"),i=i(),q(),i),Cl=["aria-expanded"],El=_l(()=>y("span",{class:"container"},[y("span",{class:"top"}),y("span",{class:"middle"}),y("span",{class:"bottom"})],-1)),Ol=[El],Pl=C({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(h(),v("button",{type:"button",class:F(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=r=>e.$emit("click"))},Ol,10,Cl))}}),Al=O(Pl,[["__scopeId","data-v-dbac2bdb"]]),Tl=["innerHTML"],Ll=C({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,r)=>(h(),P(ae,{class:F({VPNavBarMenuLink:!0,active:f(Te)(f(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:x(()=>[y("span",{innerHTML:t.item.text},null,8,Tl)]),_:1},8,["class","href","target","rel"]))}}),Il=O(Ll,[["__scopeId","data-v-1513c207"]]),Vl=C({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=L(),r=o=>"link"in o?Te(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(r),s=A(()=>r(e.item));return(o,a)=>(h(),P(wr,{class:F({VPNavBarMenuGroup:!0,active:f(Te)(f(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||s.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Ml=i=>(U("data-v-5a2822ec"),i=i(),q(),i),Dl={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},jl=Ml(()=>y("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Nl=C({__name:"VPNavBarMenu",setup(i){const{theme:e}=L();return(t,r)=>f(e).nav?(h(),v("nav",Dl,[jl,(h(!0),v(B,null,Y(f(e).nav,s=>(h(),v(B,{key:s.text},["link"in s?(h(),P(Il,{key:0,item:s},null,8,["item"])):(h(),P(Vl,{key:1,item:s},null,8,["item"]))],64))),128))])):_("",!0)}}),Kl=O(Nl,[["__scopeId","data-v-5a2822ec"]]);function Rl(i){const{localeIndex:e,theme:t}=L();function r(s){var $,z,S;const o=s.split("."),a=($=t.value.search)==null?void 0:$.options,n=a&&typeof a=="object",l=n&&((S=(z=a.locales)==null?void 0:z[e.value])==null?void 0:S.translations)||null,c=n&&a.translations||null;let d=l,p=c,m=i;const k=o.pop();for(const I of o){let D=null;const K=m==null?void 0:m[I];K&&(D=m=K);const H=p==null?void 0:p[I];H&&(D=p=H);const W=d==null?void 0:d[I];W&&(D=d=W),K||(m=D),H||(p=D),W||(d=D)}return(d==null?void 0:d[k])??(p==null?void 0:p[k])??(m==null?void 0:m[k])??""}return r}const Fl=["aria-label"],Bl={class:"DocSearch-Button-Container"},Gl=y("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Hl={class:"DocSearch-Button-Placeholder"},Ul=y("span",{class:"DocSearch-Button-Keys"},[y("kbd",{class:"DocSearch-Button-Key"}),y("kbd",{class:"DocSearch-Button-Key"},"K")],-1),yi=C({__name:"VPNavBarSearchButton",setup(i){const t=Rl({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,s)=>(h(),v("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":f(t)("button.buttonAriaLabel")},[y("span",Bl,[Gl,y("span",Hl,j(f(t)("button.buttonText")),1)]),Ul],8,Fl))}}),ql={class:"VPNavBarSearch"},Yl={id:"local-search"},Wl={key:1,id:"docsearch"},Xl=C({__name:"VPNavBarSearch",setup(i){const e=()=>null,t=()=>null,{theme:r}=L(),s=R(!1),o=R(!1);De(()=>{});function a(){s.value||(s.value=!0,setTimeout(n,16))}function n(){const d=new Event("keydown");d.key="k",d.metaKey=!0,window.dispatchEvent(d),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||n()},16)}const l=R(!1),c="";return(d,p)=>{var m;return h(),v("div",ql,[f(c)==="local"?(h(),v(B,{key:0},[l.value?(h(),P(f(e),{key:0,onClose:p[0]||(p[0]=k=>l.value=!1)})):_("",!0),y("div",Yl,[E(yi,{onClick:p[1]||(p[1]=k=>l.value=!0)})])],64)):f(c)==="algolia"?(h(),v(B,{key:1},[s.value?(h(),P(f(t),{key:0,algolia:((m=f(r).search)==null?void 0:m.options)??f(r).algolia,onVnodeBeforeMount:p[2]||(p[2]=k=>o.value=!0)},null,8,["algolia"])):_("",!0),o.value?_("",!0):(h(),v("div",Wl,[E(yi,{onClick:a})]))],64)):_("",!0)])}}}),Jl=C({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=L();return(t,r)=>f(e).socialLinks?(h(),P($r,{key:0,class:"VPNavBarSocialLinks",links:f(e).socialLinks},null,8,["links"])):_("",!0)}}),Zl=O(Jl,[["__scopeId","data-v-8aed4598"]]),Ql=["href","rel","target"],ec={key:1},tc={key:2},rc=C({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=L(),{hasSidebar:r}=de(),{currentLang:s}=pt(),o=A(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),a=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),n=A(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,c)=>(h(),v("div",{class:F(["VPNavBarTitle",{"has-sidebar":f(r)}])},[y("a",{class:"title",href:o.value??f(gr)(f(s).link),rel:a.value,target:n.value},[g(l.$slots,"nav-bar-title-before",{},void 0,!0),f(t).logo?(h(),P(wt,{key:0,class:"logo",image:f(t).logo},null,8,["image"])):_("",!0),f(t).siteTitle?(h(),v("span",ec,j(f(t).siteTitle),1)):f(t).siteTitle===void 0?(h(),v("span",tc,j(f(e).title),1)):_("",!0),g(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Ql)],2))}}),ic=O(rc,[["__scopeId","data-v-5598953a"]]),sc={class:"items"},oc={class:"title"},ac=C({__name:"VPNavBarTranslations",setup(i){const{theme:e}=L(),{localeLinks:t,currentLang:r}=pt({correspondingLink:!0});return(s,o)=>f(t).length&&f(r).label?(h(),P(wr,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:f(e).langMenuLabel||"Change language"},{default:x(()=>[y("div",sc,[y("p",oc,j(f(r).label),1),(h(!0),v(B,null,Y(f(t),a=>(h(),P(It,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),nc=O(ac,[["__scopeId","data-v-aaab09ea"]]),lc=i=>(U("data-v-cd0bf013"),i=i(),q(),i),cc={class:"wrapper"},uc={class:"container"},pc={class:"title"},dc={class:"content"},hc={class:"content-body"},bc=lc(()=>y("div",{class:"divider"},[y("div",{class:"divider-line"})],-1)),fc=C({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const{y:e}=ss(),{hasSidebar:t}=de(),{hasLocalNav:r}=us(),{frontmatter:s}=L(),o=R({});return es(()=>{o.value={"has-sidebar":t.value,"has-local-nav":r.value,top:s.value.layout==="home"&&e.value===0}}),(a,n)=>(h(),v("div",{class:F(["VPNavBar",o.value])},[y("div",cc,[y("div",uc,[y("div",pc,[E(ic,null,{"nav-bar-title-before":x(()=>[g(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),y("div",dc,[y("div",hc,[g(a.$slots,"nav-bar-content-before",{},void 0,!0),E(Xl,{class:"search"}),E(Kl,{class:"menu"}),E(nc,{class:"translations"}),E(Bn,{class:"appearance"}),E(Zl,{class:"social-links"}),E(Sl,{class:"extra"}),g(a.$slots,"nav-bar-content-after",{},void 0,!0),E(Al,{class:"hamburger",active:a.isScreenOpen,onClick:n[0]||(n[0]=l=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),bc],2))}}),mc=O(fc,[["__scopeId","data-v-cd0bf013"]]),gc={key:0,class:"VPNavScreenAppearance"},vc={class:"text"},xc=C({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=L();return(r,s)=>f(e).appearance&&f(e).appearance!=="force-dark"?(h(),v("div",gc,[y("p",vc,j(f(t).darkModeSwitchLabel||"Appearance"),1),E(yr)])):_("",!0)}}),yc=O(xc,[["__scopeId","data-v-2ed7559f"]]),kc=C({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=Lt("close-screen");return(t,r)=>(h(),P(ae,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:f(e)},{default:x(()=>[te(j(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),wc=O(kc,[["__scopeId","data-v-c303e757"]]),$c=C({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=Lt("close-screen");return(t,r)=>(h(),P(ae,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:f(e)},{default:x(()=>[te(j(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),bs=O($c,[["__scopeId","data-v-4bd09630"]]),zc={class:"VPNavScreenMenuGroupSection"},Sc={key:0,class:"title"},_c=C({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(h(),v("div",zc,[e.text?(h(),v("p",Sc,j(e.text),1)):_("",!0),(h(!0),v(B,null,Y(e.items,r=>(h(),P(bs,{key:r.text,item:r},null,8,["item"]))),128))]))}}),Cc=O(_c,[["__scopeId","data-v-ca3d4e61"]]),Ec=i=>(U("data-v-0a808fc4"),i=i(),q(),i),Oc=["aria-controls","aria-expanded"],Pc=["innerHTML"],Ac=Ec(()=>y("span",{class:"vpi-plus button-icon"},null,-1)),Tc=["id"],Lc={key:1,class:"group"},Ic=C({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=R(!1),r=A(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(o,a)=>(h(),v("div",{class:F(["VPNavScreenMenuGroup",{open:t.value}])},[y("button",{class:"button","aria-controls":r.value,"aria-expanded":t.value,onClick:s},[y("span",{class:"button-text",innerHTML:o.text},null,8,Pc),Ac],8,Oc),y("div",{id:r.value,class:"items"},[(h(!0),v(B,null,Y(o.items,n=>(h(),v(B,{key:n.text},["link"in n?(h(),v("div",{key:n.text,class:"item"},[E(bs,{item:n},null,8,["item"])])):(h(),v("div",Lc,[E(Cc,{text:n.text,items:n.items},null,8,["text","items"])]))],64))),128))],8,Tc)],2))}}),Vc=O(Ic,[["__scopeId","data-v-0a808fc4"]]),Mc={key:0,class:"VPNavScreenMenu"},Dc=C({__name:"VPNavScreenMenu",setup(i){const{theme:e}=L();return(t,r)=>f(e).nav?(h(),v("nav",Mc,[(h(!0),v(B,null,Y(f(e).nav,s=>(h(),v(B,{key:s.text},["link"in s?(h(),P(wc,{key:0,item:s},null,8,["item"])):(h(),P(Vc,{key:1,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),jc=C({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=L();return(t,r)=>f(e).socialLinks?(h(),P($r,{key:0,class:"VPNavScreenSocialLinks",links:f(e).socialLinks},null,8,["links"])):_("",!0)}}),fs=i=>(U("data-v-46ce0713"),i=i(),q(),i),Nc=fs(()=>y("span",{class:"vpi-languages icon lang"},null,-1)),Kc=fs(()=>y("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Rc={class:"list"},Fc=C({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=pt({correspondingLink:!0}),r=R(!1);function s(){r.value=!r.value}return(o,a)=>f(e).length&&f(t).label?(h(),v("div",{key:0,class:F(["VPNavScreenTranslations",{open:r.value}])},[y("button",{class:"title",onClick:s},[Nc,te(" "+j(f(t).label)+" ",1),Kc]),y("ul",Rc,[(h(!0),v(B,null,Y(f(e),n=>(h(),v("li",{key:n.link,class:"item"},[E(ae,{class:"link",href:n.link},{default:x(()=>[te(j(n.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),Bc=O(Fc,[["__scopeId","data-v-46ce0713"]]),Gc={class:"container"},Hc=C({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=R(null),t=os(Xe?document.body:null);return(r,s)=>(h(),P(br,{name:"fade",onEnter:s[0]||(s[0]=o=>t.value=!0),onAfterLeave:s[1]||(s[1]=o=>t.value=!1)},{default:x(()=>[r.open?(h(),v("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[y("div",Gc,[g(r.$slots,"nav-screen-content-before",{},void 0,!0),E(Dc,{class:"menu"}),E(Bc,{class:"translations"}),E(yc,{class:"appearance"}),E(jc,{class:"social-links"}),g(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Uc=O(Hc,[["__scopeId","data-v-a1d80ed4"]]),qc={key:0,class:"VPNav"},Yc=C({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:r}=An(),{frontmatter:s}=L(),o=A(()=>s.value.navbar!==!1);return as("close-screen",t),Pt(()=>{Xe&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,n)=>o.value?(h(),v("header",qc,[E(mc,{"is-screen-open":f(e),onToggleScreen:f(r)},{"nav-bar-title-before":x(()=>[g(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":x(()=>[g(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":x(()=>[g(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),E(Uc,{open:f(e)},{"nav-screen-content-before":x(()=>[g(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":x(()=>[g(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),Wc=O(Yc,[["__scopeId","data-v-08aa4208"]]),ms=i=>(U("data-v-601fff8e"),i=i(),q(),i),Xc=["role","tabindex"],Jc=ms(()=>y("div",{class:"indicator"},null,-1)),Zc=ms(()=>y("span",{class:"vpi-chevron-right caret-icon"},null,-1)),Qc=[Zc],eu={key:1,class:"items"},tu=C({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:r,isLink:s,isActiveLink:o,hasActiveLink:a,hasChildren:n,toggle:l}=ko(A(()=>e.item)),c=A(()=>n.value?"section":"div"),d=A(()=>s.value?"a":"div"),p=A(()=>n.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),m=A(()=>s.value?void 0:"button"),k=A(()=>[[`level-${e.depth}`],{collapsible:r.value},{collapsed:t.value},{"is-link":s.value},{"is-active":o.value},{"has-active":a.value}]);function $(S){"key"in S&&S.key!=="Enter"||!e.item.link&&l()}function z(){e.item.link&&l()}return(S,I)=>{const D=Ne("VPSidebarItem",!0);return h(),P(Ge(c.value),{class:F(["VPSidebarItem",k.value])},{default:x(()=>[S.item.text?(h(),v("div",xt({key:0,class:"item",role:m.value},Zs(S.item.items?{click:$,keydown:$}:{},!0),{tabindex:S.item.items&&0}),[Jc,S.item.link?(h(),P(ae,{key:0,tag:d.value,class:"link",href:S.item.link,rel:S.item.rel,target:S.item.target},{default:x(()=>[(h(),P(Ge(p.value),{class:"text",innerHTML:S.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(h(),P(Ge(p.value),{key:1,class:"text",innerHTML:S.item.text},null,8,["innerHTML"])),S.item.collapsed!=null?(h(),v("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:z,onKeydown:Js(z,["enter"]),tabindex:"0"},Qc,32)):_("",!0)],16,Xc)):_("",!0),S.item.items&&S.item.items.length?(h(),v("div",eu,[S.depth<5?(h(!0),v(B,{key:0},Y(S.item.items,K=>(h(),P(D,{key:K.text,item:K,depth:S.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),ru=O(tu,[["__scopeId","data-v-601fff8e"]]),gs=i=>(U("data-v-ba982e17"),i=i(),q(),i),iu=gs(()=>y("div",{class:"curtain"},null,-1)),su={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ou=gs(()=>y("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),au=C({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=de(),r=i,s=R(null),o=os(Xe?document.body:null);return je([r,s],()=>{var a;r.open?(o.value=!0,(a=s.value)==null||a.focus()):o.value=!1},{immediate:!0,flush:"post"}),(a,n)=>f(t)?(h(),v("aside",{key:0,class:F(["VPSidebar",{open:a.open}]),ref_key:"navEl",ref:s,onClick:n[0]||(n[0]=Qs(()=>{},["stop"]))},[iu,y("nav",su,[ou,g(a.$slots,"sidebar-nav-before",{},void 0,!0),(h(!0),v(B,null,Y(f(e),l=>(h(),v("div",{key:l.text,class:"group"},[E(ru,{item:l,depth:0},null,8,["item"])]))),128)),g(a.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),nu=O(au,[["__scopeId","data-v-ba982e17"]]),lu=C({__name:"VPSkipLink",setup(i){const e=Tt(),t=R();je(()=>e.path,()=>t.value.focus());function r({target:s}){const o=document.getElementById(decodeURIComponent(s.hash).slice(1));if(o){const a=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",a)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",a),o.focus(),window.scrollTo(0,0)}}return(s,o)=>(h(),v(B,null,[y("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),y("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),cu=O(lu,[["__scopeId","data-v-b79a1e83"]]),uu=C({__name:"Layout",setup(i){const{isOpen:e,open:t,close:r}=de(),s=Tt();je(()=>s.path,r),yo(e,r);const{frontmatter:o}=L(),a=eo(),n=A(()=>!!a["home-hero-image"]);return as("hero-image-slot-exists",n),(l,c)=>{const d=Ne("Content");return f(o).layout!==!1?(h(),v("div",{key:0,class:F(["Layout",f(o).pageClass])},[g(l.$slots,"layout-top",{},void 0,!0),E(cu),E(so,{class:"backdrop",show:f(e),onClick:f(r)},null,8,["show","onClick"]),E(Wc,null,{"nav-bar-title-before":x(()=>[g(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":x(()=>[g(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":x(()=>[g(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":x(()=>[g(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":x(()=>[g(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":x(()=>[g(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),E(Pn,{open:f(e),onOpenMenu:f(t)},null,8,["open","onOpenMenu"]),E(nu,{open:f(e)},{"sidebar-nav-before":x(()=>[g(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":x(()=>[g(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),E(dn,null,{"page-top":x(()=>[g(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":x(()=>[g(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":x(()=>[g(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":x(()=>[g(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":x(()=>[g(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":x(()=>[g(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":x(()=>[g(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":x(()=>[g(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":x(()=>[g(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":x(()=>[g(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":x(()=>[g(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":x(()=>[g(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":x(()=>[g(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":x(()=>[g(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":x(()=>[g(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":x(()=>[g(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":x(()=>[g(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":x(()=>[g(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":x(()=>[g(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":x(()=>[g(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":x(()=>[g(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":x(()=>[g(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":x(()=>[g(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),E(gn),g(l.$slots,"layout-bottom",{},void 0,!0)],2)):(h(),P(d,{key:1}))}}}),pu=O(uu,[["__scopeId","data-v-1333ba00"]]),Uh={Layout:pu,enhanceApp:({app:i})=>{i.component("Badge",to)}},du=()=>typeof customElements>"u"?void 0:customElements;function V(i,e,t=du()){if(!t)return e;const r=t.get(i);return r||(t.define(i,e),e)}let nr=0;function G(i){nr+=1;try{return i()}finally{nr-=1}}function hu(){return nr>0}const bu=i=>Array.isArray(i)?[...i]:i,fu=(i,e)=>Array.isArray(i)&&Array.isArray(e)?i.length===e.length&&i.every((t,r)=>t===e[r]):Object.is(i,e);function N(i){const e=i.clone??bu,t=i.equals??fu;let r=!1,s=0,o=e(i.getValue()),a;const n=()=>{var l;a!==void 0&&((l=i.host.ownerDocument.defaultView)==null||l.cancelAnimationFrame(a),a=void 0)};return{markExternal(l){hu()&&!r||(r=!0,s+=1,o=e(l),n())},capture(){return r?{version:s,value:e(o)}:null},confirm(l){if(!l)return;n();const c=i.host.ownerDocument.defaultView;a=((c==null?void 0:c.requestAnimationFrame.bind(c))??(p=>setTimeout(()=>p(Date.now()),0)))(()=>{a=void 0,s===l.version&&(t(i.getValue(),l.value)||i.setValue(e(l.value)))})},dispose:n}}const mu=["a[href]","area[href]","button:not([disabled])","input:not([disabled]):not([type='hidden'])","select:not([disabled])","textarea:not([disabled])","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])","[tabindex]:not([tabindex='-1'])"].join(","),gu=i=>{if(i.hasAttribute("hidden")||i.getAttribute("aria-hidden")==="true")return!1;const e=typeof getComputedStyle>"u"?null:getComputedStyle(i);if(e&&(e.display==="none"||e.visibility==="hidden"))return!1;for(let t=i.parentElement;t;t=t.parentElement){if(t.hasAttribute("hidden")||t.getAttribute("aria-hidden")==="true")return!1;const r=typeof getComputedStyle>"u"?null:getComputedStyle(t);if(r&&(r.display==="none"||r.visibility==="hidden"))return!1}return!0};function qe(i){return Array.from(i.querySelectorAll(mu)).filter(e=>!e.hasAttribute("disabled")&&gu(e))}function zr(i,e={}){let t=!1,r=null;const s=n=>{if(n.key!=="Tab")return;const l=qe(i);if(l.length===0){n.preventDefault();return}const c=l[0],d=l[l.length-1],p=document.activeElement;if(!n.shiftKey&&(p===d||!i.contains(p))){n.preventDefault(),c.focus();return}n.shiftKey&&(p===c||!i.contains(p))&&(n.preventDefault(),d.focus())};return{activate:()=>{if(t)return;t=!0,r=e.returnFocus??document.activeElement,document.addEventListener("keydown",s,!0),(e.initialFocus??qe(i)[0]??i).focus()},deactivate:()=>{var n;t&&(t=!1,document.removeEventListener("keydown",s,!0),(n=r==null?void 0:r.focus)==null||n.call(r),r=null)},isActive:()=>t}}let Qe=0,ki="",wi="";function Sr(){const i=typeof document>"u"?void 0:document.body;if(!i)return()=>{};Qe===0&&(ki=i.style.overflow,wi=document.documentElement.style.overflow,i.style.overflow="hidden",document.documentElement.style.overflow="hidden",i.setAttribute("data-super-scroll-lock","")),Qe+=1;let e=!1;return()=>{e||(e=!0,Qe=Math.max(0,Qe-1),!(Qe>0)&&(i.style.overflow=ki,document.documentElement.style.overflow=wi,i.removeAttribute("data-super-scroll-lock")))}}function _r(i={}){const{color:e="rgb(120 113 100 / 6%)",opacity:t=1,size:r="6px 6px"}=i;return["pointer-events: none",`opacity: ${t}`,`background-size: ${r}`,`background-image: radial-gradient(${e} 1px, transparent 1px), radial-gradient(${e} 1px, transparent 1px)`,"background-position: 0 0, 3px 3px"].join("; ")}function Ke(i={}){const{color:e="rgb(23 78 166 / 28%)",offsetX:t=2,offsetY:r=3,blur:s=0}=i;return`inset 0 0 0 1px rgb(255 255 255 / 24%), ${t}px ${r}px ${s}px -1px ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=globalThis,Cr=kt.ShadowRoot&&(kt.ShadyCSS===void 0||kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),$i=new WeakMap;let vs=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Cr&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=$i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&$i.set(t,e))}return e}toString(){return this.cssText}};const re=i=>new vs(typeof i=="string"?i:i+"",void 0,Er),M=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new vs(t,i,Er)},vu=(i,e)=>{if(Cr)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=kt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},zi=Cr?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return re(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xu,defineProperty:yu,getOwnPropertyDescriptor:ku,getOwnPropertyNames:wu,getOwnPropertySymbols:$u,getPrototypeOf:zu}=Object,ye=globalThis,Si=ye.trustedTypes,Su=Si?Si.emptyScript:"",Ht=ye.reactiveElementPolyfillSupport,rt=(i,e)=>i,lr={toAttribute(i,e){switch(e){case Boolean:i=i?Su:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},xs=(i,e)=>!xu(i,e),_i={attribute:!0,type:String,converter:lr,reflect:!1,useDefault:!1,hasChanged:xs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ye.litPropertyMetadata??(ye.litPropertyMetadata=new WeakMap);let Fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_i){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&yu(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=ku(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const n=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_i}static _$Ei(){if(this.hasOwnProperty(rt("elementProperties")))return;const e=zu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rt("properties"))){const t=this.properties,r=[...wu(t),...$u(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(zi(s))}else e!==void 0&&t.push(zi(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var o;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:lr).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var o,a;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:lr;this._$Em=s;const c=l.fromAttribute(t,n.type);this[s]=c??((a=this._$Ej)==null?void 0:a.get(s))??c,this._$Em=null}}requestUpdate(e,t,r,s=!1,o){var a;if(e!==void 0){const n=this.constructor;if(s===!1&&(o=this[e]),r??(r=n.getPropertyOptions(e)),!((r.hasChanged??xs)(o,t)||r.useDefault&&r.reflect&&o===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:n}=a,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[rt("elementProperties")]=new Map,Fe[rt("finalized")]=new Map,Ht==null||Ht({ReactiveElement:Fe}),(ye.reactiveElementVersions??(ye.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,Ci=i=>i,$t=it.trustedTypes,Ei=$t?$t.createPolicy("lit-html",{createHTML:i=>i}):void 0,ys="$lit$",ge=`lit$${Math.random().toFixed(9).slice(2)}$`,ks="?"+ge,_u=`<${ks}>`,Le=document,at=()=>Le.createComment(""),nt=i=>i===null||typeof i!="object"&&typeof i!="function",Or=Array.isArray,Cu=i=>Or(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Pi=/>/g,Se=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ai=/'/g,Ti=/"/g,ws=/^(?:script|style|textarea|title)$/i,Eu=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=Eu(1),ee=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Li=new WeakMap,Oe=Le.createTreeWalker(Le,129);function $s(i,e){if(!Or(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ei!==void 0?Ei.createHTML(e):e}const Ou=(i,e)=>{const t=i.length-1,r=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=et;for(let n=0;n<t;n++){const l=i[n];let c,d,p=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===et?d[1]==="!--"?a=Oi:d[1]!==void 0?a=Pi:d[2]!==void 0?(ws.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=Se):d[3]!==void 0&&(a=Se):a===Se?d[0]===">"?(a=s??et,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Se:d[3]==='"'?Ti:Ai):a===Ti||a===Ai?a=Se:a===Oi||a===Pi?a=et:(a=Se,s=void 0);const k=a===Se&&i[n+1].startsWith("/>")?" ":"";o+=a===et?l+_u:p>=0?(r.push(c),l.slice(0,p)+ys+l.slice(p)+ge+k):l+ge+(p===-2?n:k)}return[$s(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class lt{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,a=0;const n=e.length-1,l=this.parts,[c,d]=Ou(e,t);if(this.el=lt.createElement(c,r),Oe.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Oe.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(ys)){const m=d[a++],k=s.getAttribute(p).split(ge),$=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:$[2],strings:k,ctor:$[1]==="."?Au:$[1]==="?"?Tu:$[1]==="@"?Lu:Vt}),s.removeAttribute(p)}else p.startsWith(ge)&&(l.push({type:6,index:o}),s.removeAttribute(p));if(ws.test(s.tagName)){const p=s.textContent.split(ge),m=p.length-1;if(m>0){s.textContent=$t?$t.emptyScript:"";for(let k=0;k<m;k++)s.append(p[k],at()),Oe.nextNode(),l.push({type:2,index:++o});s.append(p[m],at())}}}else if(s.nodeType===8)if(s.data===ks)l.push({type:2,index:o});else{let p=-1;for(;(p=s.data.indexOf(ge,p+1))!==-1;)l.push({type:7,index:o}),p+=ge.length-1}o++}}static createElement(e,t){const r=Le.createElement("template");return r.innerHTML=e,r}}function Ye(i,e,t=i,r){var a,n;if(e===ee)return e;let s=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const o=nt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=Ye(i,s._$AS(i,e.values),s,r)),e}class Pu{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??Le).importNode(t,!0);Oe.currentNode=s;let o=Oe.nextNode(),a=0,n=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new dt(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Iu(o,this,e)),this._$AV.push(c),l=r[++n]}a!==(l==null?void 0:l.index)&&(o=Oe.nextNode(),a++)}return Oe.currentNode=Le,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class dt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),nt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Cu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Le.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=lt.createElement($s(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const a=new Pu(s,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=Li.get(e.strings);return t===void 0&&Li.set(e.strings,t=new lt(e)),t}k(e){Or(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new dt(this.O(at()),this.O(at()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const s=Ci(e).nextSibling;Ci(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=b}_$AI(e,t=this,r,s){const o=this.strings;let a=!1;if(o===void 0)e=Ye(this,e,t,0),a=!nt(e)||e!==this._$AH&&e!==ee,a&&(this._$AH=e);else{const n=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Ye(this,n[r+l],t,l),c===ee&&(c=this._$AH[l]),a||(a=!nt(c)||c!==this._$AH[l]),c===b?e=b:e!==b&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Au extends Vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class Tu extends Vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class Lu extends Vt{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=Ye(this,e,t,0)??b)===ee)return;const r=this._$AH,s=e===b&&r!==b||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==b&&(r===b||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Iu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}}const qt=it.litHtmlPolyfillSupport;qt==null||qt(lt,dt),(it.litHtmlVersions??(it.litHtmlVersions=[])).push("3.3.3");const Vu=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new dt(e.insertBefore(at(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=globalThis;let T=class extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ee}};var Qi;T._$litElement$=!0,T.finalized=!0,(Qi=Pe.litElementHydrateSupport)==null||Qi.call(Pe,{LitElement:T});const Yt=Pe.litElementPolyfillSupport;Yt==null||Yt({LitElement:T});(Pe.litElementVersions??(Pe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=i=>i??b;class Pr extends T{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:u`<slot></slot>`;return u`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${w(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?u`<span class="spinner" part="spinner" aria-hidden="true"></span>`:u`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?b:u`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(Pr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Pr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-button-height: 38px;
      --super-button-padding-inline: 17px;
      --super-button-gap: 7px;
      --super-button-font-size: 15px;
      --super-button-font-weight: 700;
      --super-button-background: #245cbe;
      --super-button-background-hover: #2a63cc;
      --super-button-background-active: #174ea6;
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
      --super-button-color: #1f1915;
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
      --super-button-color: #1f1915;
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
  `});const Mu="super-button",Du=i=>V(Mu,Pr,i);class Ar extends T{constructor(){super(),Object.defineProperty(this,"handleImageError",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.imageFailed=!0}}),this.src="",this.alt="",this.size="medium",this.shape="circle",this.icon="人",this.fallback="",this.imageFailed=!1}willUpdate(e){e.has("src")&&(this.imageFailed=!1)}render(){const e=this.src!==""&&!this.imageFailed,t=this.imageFailed?this.fallback||this.icon:this.icon;return u`
      <span class="avatar" part="avatar">
        ${e?u`
              <img
                class="image"
                part="image"
                src=${this.src}
                alt=${this.alt}
                @error=${this.handleImageError}
              />
            `:u`
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
    `}}Object.defineProperty(Ar,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},icon:{type:String,reflect:!0},fallback:{type:String,reflect:!0},imageFailed:{state:!0}}});Object.defineProperty(Ar,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-avatar-shadow-color)",offsetX:1,offsetY:2}))};
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
  `});const ju="super-avatar",Nu=i=>V(ju,Ar,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tr=i=>(...e)=>({_$litDirective$:i,values:e});let Lr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=i=>i.strings===void 0,Ku={},Ru=(i,e=Ku)=>i._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=Tr(class extends Lr{constructor(i){if(super(i),i.type!==me.PROPERTY&&i.type!==me.ATTRIBUTE&&i.type!==me.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!zs(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===ee||e===b)return e;const t=i.element,r=i.name;if(i.type===me.PROPERTY){if(e===t[r])return ee}else if(i.type===me.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return ee}else if(i.type===me.ATTRIBUTE&&t.getAttribute(r)===e+"")return ee;return Ru(i),e}}),zt=Math.min,Ae=Math.max,St=Math.round,ft=Math.floor,ue=i=>({x:i,y:i}),Fu={left:"right",right:"left",bottom:"top",top:"bottom"};function Bu(i,e,t){return Ae(i,zt(e,t))}function Mt(i,e){return typeof i=="function"?i(e):i}function We(i){return i.split("-")[0]}function Dt(i){return i.split("-")[1]}function Ss(i){return i==="x"?"y":"x"}function _s(i){return i==="y"?"height":"width"}function ve(i){const e=i[0];return e==="t"||e==="b"?"y":"x"}function Cs(i){return Ss(ve(i))}function Gu(i,e,t){t===void 0&&(t=!1);const r=Dt(i),s=Cs(i),o=_s(s);let a=s==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=_t(a)),[a,_t(a)]}function Hu(i){const e=_t(i);return[cr(i),e,cr(e)]}function cr(i){return i.includes("start")?i.replace("start","end"):i.replace("end","start")}const Ii=["left","right"],Vi=["right","left"],Uu=["top","bottom"],qu=["bottom","top"];function Yu(i,e,t){switch(i){case"top":case"bottom":return t?e?Vi:Ii:e?Ii:Vi;case"left":case"right":return e?Uu:qu;default:return[]}}function Wu(i,e,t,r){const s=Dt(i);let o=Yu(We(i),t==="start",r);return s&&(o=o.map(a=>a+"-"+s),e&&(o=o.concat(o.map(cr)))),o}function _t(i){const e=We(i);return Fu[e]+i.slice(e.length)}function Xu(i){var e,t,r,s;return{top:(e=i.top)!=null?e:0,right:(t=i.right)!=null?t:0,bottom:(r=i.bottom)!=null?r:0,left:(s=i.left)!=null?s:0}}function Ju(i){return typeof i!="number"?Xu(i):{top:i,right:i,bottom:i,left:i}}function Ct(i){const{x:e,y:t,width:r,height:s}=i;return{width:r,height:s,top:t,left:e,right:e+r,bottom:t+s,x:e,y:t}}function Mi(i,e,t){let{reference:r,floating:s}=i;const o=ve(e),a=Cs(e),n=_s(a),l=We(e),c=o==="y",d=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,m=r[n]/2-s[n]/2;let k;switch(l){case"top":k={x:d,y:r.y-s.height};break;case"bottom":k={x:d,y:r.y+r.height};break;case"right":k={x:r.x+r.width,y:p};break;case"left":k={x:r.x-s.width,y:p};break;default:k={x:r.x,y:r.y}}const $=Dt(e);return $&&(k[a]+=m*($==="end"?1:-1)*(t&&c?-1:1)),k}async function Zu(i,e){var t;e===void 0&&(e={});const{x:r,y:s,platform:o,rects:a,elements:n,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:m=!1,padding:k=0}=Mt(e,i),$=Ju(k),S=n[m?p==="floating"?"reference":"floating":p],I=Ct(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(S)))==null||t?S:S.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),D=p==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,K=await(o.getOffsetParent==null?void 0:o.getOffsetParent(n.floating)),H=await(o.isElement==null?void 0:o.isElement(K))&&await(o.getScale==null?void 0:o.getScale(K))||{x:1,y:1},W=Ct(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:D,offsetParent:K,strategy:l}):D);return{top:(I.top-W.top+$.top)/H.y,bottom:(W.bottom-I.bottom+$.bottom)/H.y,left:(I.left-W.left+$.left)/H.x,right:(W.right-I.right+$.right)/H.x}}const Qu=50,ep=async(i,e,t)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=t,n=a.detectOverflow?a:{...a,detectOverflow:Zu},l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:i,floating:e,strategy:s}),{x:d,y:p}=Mi(c,r,l),m=r,k=0;const $={};for(let z=0;z<o.length;z++){const S=o[z];if(!S)continue;const{name:I,fn:D}=S,{x:K,y:H,data:W,reset:J}=await D({x:d,y:p,initialPlacement:r,placement:m,strategy:s,middlewareData:$,rects:c,platform:n,elements:{reference:i,floating:e}});d=K??d,p=H??p,$[I]={...$[I],...W},J&&k<Qu&&(k++,typeof J=="object"&&(J.placement&&(m=J.placement),J.rects&&(c=J.rects===!0?await a.getElementRects({reference:i,floating:e,strategy:s}):J.rects),{x:d,y:p}=Mi(c,m,l)),z=-1)}return{x:d,y:p,placement:m,strategy:s,middlewareData:$}},tp=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t,r;const{placement:s,middlewareData:o,rects:a,initialPlacement:n,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:z=!0,...S}=Mt(i,e);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const I=We(s),D=ve(n),K=We(n)===n,H=await(l.isRTL==null?void 0:l.isRTL(c.floating)),W=m||(K||!z?[_t(n)]:Hu(n)),J=$!=="none";!m&&J&&W.push(...Wu(n,z,$,H));const bt=[n,...W],Re=await l.detectOverflow(e,S),we=[];let se=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&we.push(Re[I]),p){const $e=Gu(s,a,H);we.push(Re[$e[0]],Re[$e[1]])}if(se=[...se,{placement:s,overflows:we}],!we.every($e=>$e<=0)){var gi,vi;const $e=(((gi=o.flip)==null?void 0:gi.index)||0)+1,Bt=bt[$e];if(Bt&&(!(p==="alignment"?D!==ve(Bt):!1)||se.every(Q=>ve(Q.placement)===D?Q.overflows[0]>0:!0)))return{data:{index:$e,overflows:se},reset:{placement:Bt}};let Ze=(vi=se.filter(ze=>ze.overflows[0]<=0).sort((ze,Q)=>ze.overflows[1]-Q.overflows[1])[0])==null?void 0:vi.placement;if(!Ze)switch(k){case"bestFit":{var xi;const ze=(xi=se.filter(Q=>{if(J){const be=ve(Q.placement);return be===D||be==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(be=>be>0).reduce((be,Ks)=>be+Ks,0)]).sort((Q,be)=>Q[1]-be[1])[0])==null?void 0:xi[0];ze&&(Ze=ze);break}case"initialPlacement":Ze=n;break}if(s!==Ze)return{reset:{placement:Ze}}}return{}}}},rp=new Set(["left","top"]);async function ip(i,e){const{placement:t,platform:r,elements:s}=i,o=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=We(t),n=Dt(t),l=ve(t)==="y",c=rp.has(a)?-1:1,d=o&&l?-1:1,p=Mt(e,i);let{mainAxis:m,crossAxis:k,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return n&&typeof $=="number"&&(k=n==="end"?$*-1:$),l?{x:k*d,y:m*c}:{x:m*c,y:k*d}}const sp=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){var t,r;const{x:s,y:o,placement:a,middlewareData:n}=e,l=await ip(e,i);return a===((t=n.offset)==null?void 0:t.placement)&&(r=n.arrow)!=null&&r.alignmentOffset?{}:{x:s+l.x,y:o+l.y,data:{...l,placement:a}}}}},op=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:r,placement:s,platform:o}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:l={fn:D=>{let{x:K,y:H}=D;return{x:K,y:H}}},...c}=Mt(i,e),d={x:t,y:r},p=await o.detectOverflow(e,c),m=ve(s),k=Ss(m);let $=d[k],z=d[m];const S=(D,K)=>Bu(K+p[D==="y"?"top":"left"],K,K-p[D==="y"?"bottom":"right"]);a&&($=S(k,$)),n&&(z=S(m,z));const I=l.fn({...e,[k]:$,[m]:z});return{...I,data:{x:I.x-t,y:I.y-r,enabled:{[k]:a,[m]:n}}}}}};function jt(){return typeof window<"u"}function Je(i){return Es(i)?(i.nodeName||"").toLowerCase():"#document"}function X(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function he(i){var e;return(e=(Es(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function Es(i){return jt()?i instanceof Node||i instanceof X(i).Node:!1}function ne(i){return jt()?i instanceof Element||i instanceof X(i).Element:!1}function ke(i){return jt()?i instanceof HTMLElement||i instanceof X(i).HTMLElement:!1}function Di(i){return!jt()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof X(i).ShadowRoot}function Nt(i){const{overflow:e,overflowX:t,overflowY:r,display:s}=le(i);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&s!=="inline"&&s!=="contents"}function ap(i){return/^(table|td|th)$/.test(Je(i))}function Kt(i){try{if(i.matches(":popover-open"))return!0}catch{}try{return i.matches(":modal")}catch{return!1}}const np=/transform|translate|scale|rotate|perspective|filter/,lp=/paint|layout|strict|content/,_e=i=>!!i&&i!=="none";let Wt;function Ir(i){const e=ne(i)?le(i):i;return _e(e.transform)||_e(e.translate)||_e(e.scale)||_e(e.rotate)||_e(e.perspective)||!Vr()&&(_e(e.backdropFilter)||_e(e.filter))||np.test(e.willChange||"")||lp.test(e.contain||"")}function cp(i){let e=Ie(i);for(;ke(e)&&!ct(e);){if(Ir(e))return e;if(Kt(e))return null;e=Ie(e)}return null}function Vr(){return Wt==null&&(Wt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Wt}function ct(i){return/^(html|body|#document)$/.test(Je(i))}function le(i){return X(i).getComputedStyle(i)}function Rt(i){return ne(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Ie(i){if(Je(i)==="html")return i;const e=i.assignedSlot||i.parentNode||Di(i)&&i.host||he(i);return Di(e)?e.host:e}function Os(i){const e=Ie(i);return ct(e)?(i.ownerDocument||i).body:ke(e)&&Nt(e)?e:Os(e)}function ut(i,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Os(i),o=s===((r=i.ownerDocument)==null?void 0:r.body),a=X(s);if(o){const n=ur(a);return e.concat(a,a.visualViewport||[],Nt(s)?s:[],n&&t?ut(n):[])}else return e.concat(s,ut(s,[],t))}function ur(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function Ps(i){const e=le(i);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=ke(i),o=s?i.offsetWidth:t,a=s?i.offsetHeight:r,n=St(t)!==o||St(r)!==a;return n&&(t=o,r=a),{width:t,height:r,$:n}}function Mr(i){return ne(i)?i:i.contextElement}function He(i){const e=Mr(i);if(!ke(e))return ue(1);const t=e.getBoundingClientRect(),{width:r,height:s,$:o}=Ps(e);let a=(o?St(t.width):t.width)/r,n=(o?St(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!n||!Number.isFinite(n))&&(n=1),{x:a,y:n}}const up=ue(0);function As(i){const e=X(i);return!Vr()||!e.visualViewport?up:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pp(i,e,t){return e===void 0&&(e=!1),!!t&&e&&t===X(i)}function Ve(i,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=i.getBoundingClientRect(),o=Mr(i);let a=ue(1);e&&(r?ne(r)&&(a=He(r)):a=He(i));const n=pp(o,t,r)?As(o):ue(0);let l=(s.left+n.x)/a.x,c=(s.top+n.y)/a.y,d=s.width/a.x,p=s.height/a.y;if(o&&r){const m=X(o),k=ne(r)?X(r):r;let $=m,z=ur($);for(;z&&k!==$;){const S=He(z),I=z.getBoundingClientRect(),D=le(z),K=I.left+(z.clientLeft+parseFloat(D.paddingLeft))*S.x,H=I.top+(z.clientTop+parseFloat(D.paddingTop))*S.y;l*=S.x,c*=S.y,d*=S.x,p*=S.y,l+=K,c+=H,$=X(z),z=ur($)}}return Ct({width:d,height:p,x:l,y:c})}function Ft(i,e){const t=Rt(i).scrollLeft;return e?e.left+t:Ve(he(i)).left+t}function Ts(i,e){const t=i.getBoundingClientRect(),r=t.left+e.scrollLeft-Ft(i,t),s=t.top+e.scrollTop;return{x:r,y:s}}function dp(i){let{elements:e,rect:t,offsetParent:r,strategy:s}=i;const o=s==="fixed",a=he(r),n=e?Kt(e.floating):!1;if(r===a||n&&o)return t;let l={scrollLeft:0,scrollTop:0},c=ue(1);const d=ue(0),p=ke(r);if((p||!o)&&((Je(r)!=="body"||Nt(a))&&(l=Rt(r)),p)){const k=Ve(r);c=He(r),d.x=k.x+r.clientLeft,d.y=k.y+r.clientTop}const m=a&&!p&&!o?Ts(a,l):ue(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+d.x+m.x,y:t.y*c.y-l.scrollTop*c.y+d.y+m.y}}function hp(i){return i.getClientRects?Array.from(i.getClientRects()):[]}function bp(i){const e=Rt(i),t=i.ownerDocument.body,r=Ae(i.scrollWidth,i.clientWidth,t.scrollWidth,t.clientWidth),s=Ae(i.scrollHeight,i.clientHeight,t.scrollHeight,t.clientHeight);let o=-e.scrollLeft+Ft(i);const a=-e.scrollTop;return le(t).direction==="rtl"&&(o+=Ae(i.clientWidth,t.clientWidth)-r),{width:r,height:s,x:o,y:a}}const fp=25;function mp(i,e,t){t===void 0&&(t="viewport");const r=t==="layoutViewport",s=X(i),o=he(i),a=s.visualViewport;let n=o.clientWidth,l=o.clientHeight,c=0,d=0;if(a){const m=!Vr()||e==="fixed";r?m||(c=-a.offsetLeft,d=-a.offsetTop):(n=a.width,l=a.height,m&&(c=a.offsetLeft,d=a.offsetTop))}if(Ft(o)<=0){const m=o.ownerDocument,k=m.body,$=getComputedStyle(k),z=m.compatMode==="CSS1Compat"&&parseFloat($.marginLeft)+parseFloat($.marginRight)||0,S=Math.abs(o.clientWidth-k.clientWidth-z),I=getComputedStyle(o).scrollbarGutter==="stable both-edges"?S/2:S;I<=fp&&(n-=I)}return{width:n,height:l,x:c,y:d}}function gp(i,e){const t=Ve(i,!0,e==="fixed"),r=t.top+i.clientTop,s=t.left+i.clientLeft,o=He(i),a=i.clientWidth*o.x,n=i.clientHeight*o.y,l=s*o.x,c=r*o.y;return{width:a,height:n,x:l,y:c}}function ji(i,e,t){let r;if(e==="viewport"||e==="layoutViewport")r=mp(i,t,e);else if(e==="document")r=bp(he(i));else if(ne(e))r=gp(e,t);else{const s=As(i);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ct(r)}function vp(i,e){const t=e.get(i);if(t)return t;let r=ut(i,[],!1).filter(n=>ne(n)&&Je(n)!=="body"),s=null;const o=le(i).position==="fixed";let a=o?Ie(i):i;for(;ne(a)&&!ct(a);){const n=le(a),l=Ir(a),c=s?s.position:o?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&n.position==="static")?r=r.filter(p=>p!==a):s=n,a=Ie(a)}return e.set(i,r),r}function xp(i){let{element:e,boundary:t,rootBoundary:r,strategy:s}=i;const a=[...t==="clippingAncestors"?Kt(e)?[]:vp(e,this._c):[].concat(t),r],n=ji(e,a[0],s);let l=n.top,c=n.right,d=n.bottom,p=n.left;for(let m=1;m<a.length;m++){const k=ji(e,a[m],s);l=Ae(k.top,l),c=zt(k.right,c),d=zt(k.bottom,d),p=Ae(k.left,p)}return{width:c-p,height:d-l,x:p,y:l}}function yp(i){const{width:e,height:t}=Ps(i);return{width:e,height:t}}function kp(i,e,t){const r=ke(e),s=he(e),o=t==="fixed",a=Ve(i,!0,o,e);let n={scrollLeft:0,scrollTop:0};const l=ue(0);if((r||!o)&&((Je(e)!=="body"||Nt(s))&&(n=Rt(e)),r)){const m=Ve(e,!0,o,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}!r&&s&&(l.x=Ft(s));const c=s&&!r&&!o?Ts(s,n):ue(0),d=a.left+n.scrollLeft-l.x-c.x,p=a.top+n.scrollTop-l.y-c.y;return{x:d,y:p,width:a.width,height:a.height}}function Xt(i){return le(i).position==="static"}function Ni(i,e){if(!ke(i)||le(i).position==="fixed")return null;if(e)return e(i);let t=i.offsetParent;return he(i)===t&&(t=t.ownerDocument.body),t}function Ls(i,e){const t=X(i);if(Kt(i))return t;if(!ke(i)){let s=Ie(i);for(;s&&!ct(s);){if(ne(s)&&!Xt(s))return s;s=Ie(s)}return t}let r=Ni(i,e);for(;r&&ap(r)&&Xt(r);)r=Ni(r,e);return r&&ct(r)&&Xt(r)&&!Ir(r)?t:r||cp(i)||t}const wp=async function(i){const e=this.getOffsetParent||Ls,t=this.getDimensions,r=await t(i.floating);return{reference:kp(i.reference,await e(i.floating),i.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $p(i){return le(i).direction==="rtl"}const zp={convertOffsetParentRelativeRectToViewportRelativeRect:dp,getDocumentElement:he,getClippingRect:xp,getOffsetParent:Ls,getElementRects:wp,getClientRects:hp,getDimensions:yp,getScale:He,isElement:ne,isRTL:$p};function Is(i,e){return i.x===e.x&&i.y===e.y&&i.width===e.width&&i.height===e.height}function Sp(i,e,t){let r=null,s;const o=he(i);function a(){var d;clearTimeout(s),(d=r)==null||d.disconnect(),r=null}function n(d,p){d===void 0&&(d=!1),p===void 0&&(p=1),a();const m=i.getBoundingClientRect(),{left:k,top:$,width:z,height:S}=m;if(d||e(),!z||!S)return;const I=ft($),D=ft(o.clientWidth-(k+z)),K=ft(o.clientHeight-($+S)),H=ft(k),J={rootMargin:-I+"px "+-D+"px "+-K+"px "+-H+"px",threshold:Ae(0,zt(1,p))||1};let bt=!0;function Re(we){const se=we[0].intersectionRatio;if(!Is(m,i.getBoundingClientRect()))return n();if(se!==p){if(!bt)return n();se?n(!1,se):s=setTimeout(()=>{n(!1,1e-7)},1e3)}bt=!1}try{r=new IntersectionObserver(Re,{...J,root:o.ownerDocument})}catch{r=new IntersectionObserver(Re,J)}r.observe(i)}const l=X(i),c=()=>n(t);return l.addEventListener("resize",c),n(!0),()=>{l.removeEventListener("resize",c),a()}}function _p(i,e,t,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Mr(i),d=s||o?[...c?ut(c):[],...e?ut(e):[]]:[];d.forEach(I=>{s&&I.addEventListener("scroll",t),o&&I.addEventListener("resize",t)});const p=c&&n?Sp(c,t,o):null;let m=-1,k=null;a&&(k=new ResizeObserver(I=>{let[D]=I;D&&D.target===c&&k&&e&&(k.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var K;(K=k)==null||K.observe(e)})),t()}),c&&!l&&k.observe(c),e&&k.observe(e));let $,z=l?Ve(i):null;l&&S();function S(){const I=Ve(i);z&&!Is(z,I)&&t(),z=I,$=requestAnimationFrame(S)}return t(),()=>{var I;d.forEach(D=>{s&&D.removeEventListener("scroll",t),o&&D.removeEventListener("resize",t)}),p==null||p(),(I=k)==null||I.disconnect(),k=null,l&&cancelAnimationFrame($)}}const Cp=sp,Ep=op,Op=tp,Pp=(i,e,t)=>{const r=new Map,s=t??{},o={...zp,...s.platform,_c:r};return ep(i,e,{...s,platform:o})},Ap=()=>({update:async()=>{},destroy:()=>{}});function ht(i,e,t={}){if(typeof document>"u"||!i||!e)return Ap();const r=t.placement??"top",s=t.strategy??"fixed",o=t.padding??8,a=t.offset??8;let n=!1,l=0,c;const d=async()=>{if(n||!i.isConnected||!e.isConnected)return;const p=++l;try{const m=await Pp(i,e,{placement:r,strategy:s,middleware:[Cp(a),Op({padding:o}),Ep({padding:o})]});if(n||p!==l)return;e.style.position=s,e.style.left=`${Math.round(m.x)}px`,e.style.top=`${Math.round(m.y)}px`,e.dataset.placement=m.placement}catch{}};try{c=_p(i,e,()=>{d()})}catch{d()}return{update:d,destroy:()=>{n||(n=!0,c==null||c(),c=void 0)}}}let Tp=0;class Dr extends T{get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"controlId",{enumerable:!0,configurable:!0,writable:!0,value:`super-autocomplete-${++Tp}`}),Object.defineProperty(this,"listboxId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.controlId}-listbox`}),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>this.setInternalValue(e)})}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"listboxElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"inputElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"suppressFocusOpen",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"handleInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget,r=this.controlledValueGuard.capture();this.setInternalValue(t.value),this.disabled||(this.setOpen(!0),this.realignActiveOption()),this.dispatchEvent(new CustomEvent("super-autocomplete-input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(r)}}),Object.defineProperty(this,"handleClear",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(e.preventDefault(),e.stopPropagation(),this.disabled||!this.showClear)return;const t=this.value,r=this.controlledValueGuard.capture();this.setInternalValue(""),this.activeIndex=-1,this.setOpen(!1),this.dispatchEvent(new CustomEvent("super-autocomplete-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(r),this.focusInputWithoutOpening()}}),Object.defineProperty(this,"handleOptionClick",{enumerable:!0,configurable:!0,writable:!0,value:(e,t)=>{t.preventDefault(),this.selectOption(e,t)}}),Object.defineProperty(this,"handleKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.disabled){if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault(),this.open?this.moveActive(e.key==="ArrowDown"?1:-1):(this.setOpen(!0),this.realignActiveOption());return}if(e.key==="Home"||e.key==="End"){if(!this.open||this.value!=="")return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"){if(!this.open||!this.activeOption)return;e.preventDefault(),this.selectOption(this.activeOption,e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1),this.focusInputWithoutOpening();return}e.key==="Tab"&&this.open&&this.setOpen(!1)}}}),Object.defineProperty(this,"handleFocus",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.disabled||this.suppressFocusOpen){this.suppressFocusOpen=!1;return}this.realignActiveOption(),this.setOpen(!0)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1)}}),this.items=[],this.placeholder="输入以搜索",this.disabled=!1,this.size="medium",this.validation="none",this.clearable=!1,this.loading=!1,this.emptyText="没有匹配项",this.clearLabel="清空输入",this.loadingText="加载中...",this.minChars=0,this.filter=void 0,this.accessibleLabel="",this.activeIndex=-1}get normalizedItems(){return(Array.isArray(this.items)?this.items:[]).map((t,r)=>{const s=typeof t=="string"?{value:t}:t;return{value:s.value,label:s.label??s.value,disabled:!!s.disabled,id:`${this.controlId}-option-${r}`,index:r}})}get filteredItems(){if(this.loading)return[];const e=this.value.trim().toLocaleLowerCase(),t=this.normalizedItems;return e.length<Math.max(0,this.minChars)?[]:e?t.filter(r=>this.filter?this.filter({value:r.value,label:r.label,disabled:r.disabled},this.value):r.label.toLocaleLowerCase().includes(e)||r.value.toLocaleLowerCase().includes(e)):t}get activeOption(){return this.filteredItems[this.activeIndex]}get showClear(){return this.clearable&&!this.disabled&&this.value!==""}get showListbox(){return this.open&&!this.disabled}get inputLabel(){return this.accessibleLabel||this.placeholder||"搜索"}realignActiveOption(){var t;if(!this.open){this.activeIndex=-1;return}const e=this.filteredItems;this.activeIndex>=0&&this.activeIndex<e.length&&!((t=e[this.activeIndex])!=null&&t.disabled)||(this.activeIndex=e.findIndex(r=>!r.disabled))}setOpen(e){if(e&&this.disabled||this.open===e)return;const t=this.controlledOpenGuard.capture();this.setInternalOpen(e),e?this.realignActiveOption():this.activeIndex=-1,this.dispatchEvent(new CustomEvent("super-autocomplete-open-change",{detail:{open:e},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(t)}moveActive(e){var s;const t=this.filteredItems;if(t.length===0){this.activeIndex=-1;return}let r=this.activeIndex;for(let o=0;o<t.length;o+=1)if(r=(r+e+t.length)%t.length,!((s=t[r])!=null&&s.disabled)){this.activeIndex=r;return}}moveToBoundary(e){const t=this.filteredItems,r=e==="start"?t.map((s,o)=>o):t.map((s,o)=>o).reverse();this.activeIndex=r.find(s=>{var o;return!((o=t[s])!=null&&o.disabled)})??-1}selectOption(e,t){if(e.disabled||this.disabled||this.loading)return;const r=this.controlledValueGuard.capture();this.setInternalValue(e.value),this.activeIndex=-1,this.setOpen(!1),this.dispatchEvent(new CustomEvent("super-autocomplete-change",{detail:{value:e.value},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(r),this.focusInputWithoutOpening()}focusInputWithoutOpening(){const e=this.inputElement;!e||this.renderRoot.activeElement===e||(this.suppressFocusOpen=!0,e.focus({preventScroll:!0}),this.suppressFocusOpen=!1)}startFloating(){var s;this.destroyFloating();const e=(s=this.inputElement)==null?void 0:s.closest(".field"),t=this.listboxElement;if(!e||!t)return;t.style.position="fixed",t.style.left="0px",t.style.top="0px";const r=e.getBoundingClientRect().width;r>0&&(t.style.minInlineSize=`${Math.ceil(r)}px`),this.floating=ht(e,t,{placement:"bottom-start",offset:6})}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}focus(e){if(this.inputElement){this.inputElement.focus(e);return}super.focus(e)}blur(){if(this.inputElement){this.inputElement.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.controlledValueGuard.dispose(),this.controlledOpenGuard.dispose(),this.destroyFloating(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.setInternalOpen(!1),this.activeIndex=-1),e.has("loading")&&this.loading&&(this.activeIndex=-1),(e.has("items")||e.has("value")||e.has("minChars")||e.has("filter"))&&this.open&&this.realignActiveOption()}updated(e){var t;this.inputElement=this.renderRoot.querySelector('[part="input"]'),this.listboxElement=this.renderRoot.querySelector('[part="listbox"]'),e.has("open")||e.has("disabled")?this.showListbox?this.startFloating():this.destroyFloating():this.showListbox&&(e.has("items")||e.has("value")||e.has("loading"))&&((t=this.floating)==null||t.update()),e.has("activeIndex")&&this.activeIndex>=0&&this.updateComplete.then(()=>{var r,s;(s=(r=this.renderRoot.querySelector('[role="option"][data-active]'))==null?void 0:r.scrollIntoView)==null||s.call(r,{block:"nearest"})})}renderListboxContent(){if(this.loading)return u`
        <div class="loading" part="empty" role="status" aria-live="polite">
          <span class="spinner" aria-hidden="true"></span>
          <span>${this.loadingText}</span>
        </div>
      `;const e=this.filteredItems;return e.length===0?u`
        <div class="empty" part="empty" role="status" aria-live="polite">
          ${this.emptyText}
        </div>
      `:e.map((t,r)=>u`
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
      `)}render(){var t;const e=this.showListbox&&!this.loading?(t=this.activeOption)==null?void 0:t.id:void 0;return u`
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
          aria-invalid=${this.validation==="error"?"true":b}
          aria-busy=${this.loading?"true":b}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          .value=${ie(this.value)}
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
      ${this.showListbox?u`
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
          `:b}
    `}}Object.defineProperty(Dr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String,reflect:!0,noAccessor:!0},items:{attribute:!1},open:{type:Boolean,reflect:!0,noAccessor:!0},placeholder:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},clearable:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},emptyText:{type:String,attribute:"empty-text",reflect:!0},clearLabel:{type:String,attribute:"clear-label",reflect:!0},loadingText:{type:String,attribute:"loading-text",reflect:!0},minChars:{type:Number,attribute:"min-chars",reflect:!0},filter:{attribute:!1},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},activeIndex:{state:!0}}});Object.defineProperty(Dr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Lp="super-autocomplete",Ip=i=>V(Lp,Dr,i);class jr extends T{constructor(){super(),this.value="",this.max=99,this.dot=!1,this.status="primary",this.size="medium",this.hidden=!1}get displayValue(){const e=this.value;if(e===""||e===null||e===void 0)return"";const t=String(e).trim();if(t==="")return"";const r=Number(t);return Number.isFinite(r)&&this.max>0&&r>this.max?`${this.max}+`:t}get shouldShowBadge(){return!this.hidden&&(this.dot||this.displayValue!=="")}render(){const e=this.shouldShowBadge,t=this.displayValue;return u`
      <span class="container" part="container">
        <span class="content" part="content"><slot></slot></span>
        ${e?u`
              <span
                class="badge"
                part="badge"
                data-dot=${w(this.dot?"":void 0)}
                role=${w(this.dot?void 0:"status")}
                aria-hidden=${w(this.dot?"true":void 0)}
              >${this.dot?"":t}</span>
            `:null}
      </span>
    `}}Object.defineProperty(jr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String,reflect:!0},max:{type:Number,reflect:!0},dot:{type:Boolean,reflect:!0},status:{type:String,reflect:!0},size:{type:String,reflect:!0},hidden:{type:Boolean,reflect:!0}}});Object.defineProperty(jr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-badge-height: 20px;
      --super-badge-min-width: 20px;
      --super-badge-dot-size: 9px;
      --super-badge-offset: 4px;
      --super-badge-padding-inline: 5px;
      --super-badge-font-size: 12px;
      --super-badge-color: #1f1915;
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
      box-shadow: ${re(Ke({color:"var(--super-badge-shadow-color)"}))};
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
  `});const Vp="super-badge",Mp=i=>V(Vp,jr,i);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs="important",Dp=" !"+Vs,oe=Tr(class extends Lr{constructor(i){var e;if(super(i),i.type!==me.ATTRIBUTE||i.name!=="style"||((e=i.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const s=e[r];if(s!=null){this.ft.add(r);const o=typeof s=="string"&&s.endsWith(Dp);r.includes("-")||o?t.setProperty(r,o?s.slice(0,-11):s,o?Vs:""):t[r]=s}}return ee}});class Nr extends T{constructor(){super(),this.separator="/",this.size="medium",this.maxItems=0,this.accessibleLabel="面包屑导航",this.items=[]}get visibleEntries(){const e=this.items.map((n,l)=>({type:"item",item:n,index:l})),t=Math.trunc(this.maxItems);if(t<=0||e.length<=t)return e;const r=Math.max(3,t),s=Math.max(1,r-2),o=e.slice(0,s),a=e[e.length-1];return a?[...o,{type:"ellipsis",index:o.length},a]:e}renderEntry(e){if(e.type==="ellipsis")return u`
        <li class="item" part="item ellipsis-item" aria-hidden="true">
          <span class="ellipsis" part="ellipsis">…</span>
        </li>
      `;const{item:t}=e,r=!!t.current,s=r||!t.href?u`<span
          class=${r?"current":"label"}
          part=${r?"current":"label"}
          aria-current=${w(r?"page":void 0)}
        >${t.label}</span>`:u`<a
          class="link"
          part="link"
          href=${t.href}
        >${t.label}</a>`;return u`
      <li class="item" part="item">
        ${e.index>0?u`<span
              class="separator"
              part="separator"
              aria-hidden="true"
            >${this.separator}</span>`:b}
        ${s}
      </li>
    `}render(){const e=this.items.length>0,t={"--super-breadcrumb-separator":JSON.stringify(this.separator)};return u`
      <nav
        class="breadcrumb"
        part="breadcrumb"
        aria-label=${w(this.accessibleLabel||void 0)}
        style=${this.separator==="/"?b:oe(t)}
      >
        <ol class="list" part="list">
          ${e?this.visibleEntries.map(r=>this.renderEntry(r)):u`<slot></slot>`}
        </ol>
      </nav>
    `}}Object.defineProperty(Nr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{separator:{type:String,reflect:!0},size:{type:String,reflect:!0},maxItems:{type:Number,attribute:"max-items",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},items:{attribute:!1}}});Object.defineProperty(Nr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-sizing: border-box;
      min-block-size: 24px;
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
  `});const jp="super-breadcrumb",Np=i=>V(jp,Nr,i);class Kr extends T{constructor(){super(),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.isInteractive&&this.emitClick(e)}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.isInteractive||e.defaultPrevented||e.target!==this||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.emitClick(e))}}),this.variant="default",this.size="medium",this.hoverable=!1,this.clickable=!1,this.accessibleLabel=""}get isInteractive(){return this.clickable}emitClick(e){this.dispatchEvent(new CustomEvent("super-card-click",{bubbles:!0,composed:!0,detail:{originalEvent:e}}))}updated(e){(e.has("clickable")||e.size===0)&&this.syncInteractionAttributes()}syncInteractionAttributes(){if(this.clickable){this.setAttribute("role","button"),this.setAttribute("tabindex","0");return}this.removeAttribute("role"),this.removeAttribute("tabindex")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}render(){return u`
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
    `}syncSlotPresence(e){const t=e.currentTarget,r=t.assignedNodes({flatten:!0}).some(o=>{var a;return o.nodeType!==Node.TEXT_NODE||!!((a=o.textContent)!=null&&a.trim())}),s=t.closest("[hidden]")??t.parentElement;if(s&&(s.hidden=!r,t.name==="header")){const o=this.renderRoot.querySelector(".body");o==null||o.classList.toggle("has-header",r)}}}Object.defineProperty(Kr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},hoverable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Kr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-card-shadow-color)"}))};
    }

    .surface::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${re(_r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
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
  `});const Kp="super-card",Rp=i=>V(Kp,Kr,i);class Rr extends T{get checked(){return this._checked}set checked(e){this.controlledValueGuard.markExternal(e),this.setInternalChecked(e)}setInternalChecked(e){const t=this._checked;this._checked=e,this.requestUpdate("checked",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_checked",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._checked,setValue:e=>this.setInternalChecked(e)})}),this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget,r=this.controlledValueGuard.capture();this.setInternalChecked(t.checked),this.indeterminate=!1,this.emitChange(e),this.controlledValueGuard.confirm(r)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.controlledValueGuard.capture();this.setInternalChecked(!this._checked),this.indeterminate=!1;const r=new Event("change");super.click(),this.emitChange(r),this.controlledValueGuard.confirm(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return u`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${ie(this.checked)}
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
        ${this.helperText?u`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:b}
      </span>
    `}}Object.defineProperty(Rr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0,noAccessor:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(Rr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Fp="super-checkbox",Bp=i=>V(Fp,Rr,i),Gp=/^(\d{4})-(\d{2})-(\d{2})$/,Hp=/^(\d{4})-(\d{2})$/,Up=/^\d{4}$/,pe=1,Me=9999,Ki=Me-11,Jt="zh-CN",qp=i=>Array.isArray(i)?[...i]:i,Yp=(i,e)=>Array.isArray(i)&&Array.isArray(e)?i.length===e.length&&i.every((t,r)=>t===e[r]):Object.is(i,e),pr=i=>String(i).padStart(2,"0"),Be=i=>String(i).padStart(4,"0"),tt=i=>Math.min(Me,Math.max(pe,i)),ce=(i,e,t)=>{const r=new Date(0);return r.setHours(0,0,0,0),r.setFullYear(i,e-1,t),r},Ue=(i,e,t)=>`${Be(i)}-${pr(e)}-${pr(t)}`,mt=(i,e)=>`${Be(i)}-${pr(e)}`,st=i=>{const e=Gp.exec(i);if(!e)return null;const t=Number(e[1]),r=Number(e[2]),s=Number(e[3]);if(t<pe||t>Me||r<1||r>12||s<1)return null;const o=ce(t,r,s);return o.getFullYear()!==t||o.getMonth()!==r-1||o.getDate()!==s?null:{year:t,month:r,day:s}},Ri=i=>st(i)!==null,Ms=i=>Up.test(i)&&Number(i)>=pe,Wp=i=>{const e=Hp.exec(i);if(!e||!Ms(e[1]))return!1;const t=Number(e[2]);return t>=1&&t<=12},Fi=(i,e)=>ce(i,e+1,0).getDate(),Xp=(i,e,t)=>ce(i,e,t).getDay(),Bi=(i,e)=>{const t=st(i);if(!t)return i;const r=ce(t.year,t.month,t.day);return r.setDate(r.getDate()+e),r.getFullYear()<pe?Ue(pe,1,1):r.getFullYear()>Me?Ue(Me,12,31):Ue(r.getFullYear(),r.getMonth()+1,r.getDate())},Ce=(i,e,t)=>{const r=i*12+(e-1)+t,s=Math.floor(r/12);if(s<pe)return{year:pe,month:1};if(s>Me)return{year:Me,month:12};const o=(r%12+12)%12;return{year:s,month:o+1}},Zt=()=>{const i=new Date;return Ue(i.getFullYear(),i.getMonth()+1,i.getDate())};class Fr extends T{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:t=>this.setInternalValue(t),clone:qp,equals:Yp})}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:t=>this.setInternalOpen(t)})}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{!this.open||t.composedPath().includes(this)||this.setOpen(!1,"outside",t)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{this.setOpen(!this.open,"trigger",t)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.stopPropagation(),this.clearValue(t,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(!this.disabled){if(t.key==="Escape"&&this.open){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t);return}(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),this.setOpen(!0,"trigger",t))}}}),Object.defineProperty(this,"handleGridKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{var o;if(t.key==="Escape"){t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t),(o=this.triggerElement)==null||o.focus();return}const s={ArrowLeft:-1,ArrowRight:1,ArrowUp:this.mode==="date"||this.mode==="range"?-7:-4,ArrowDown:this.mode==="date"||this.mode==="range"?7:4}[t.key];s!==void 0&&(t.preventDefault(),this.moveActive(s))}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:t=>{t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),this.setOpen(!1,"escape",t))}}),Object.defineProperty(this,"handleCellClick",{enumerable:!0,configurable:!0,writable:!0,value:t=>{const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;if(s){if(this.mode==="month"){this.pickMonth(s,t);return}if(this.mode==="year"){this.pickYear(s,t);return}this.activeDate=s,this.pickDay(s,t)}}}),Object.defineProperty(this,"handleCellMouseEnter",{enumerable:!0,configurable:!0,writable:!0,value:t=>{if(this.mode!=="range"||this.pendingStart===null)return;const r=t.target.closest(".cell"),s=r==null?void 0:r.dataset.key;s&&!this.isKeyDisabled(s)&&(this.hoverDate=s)}}),this.mode="date",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.name="",this.placeholder="选择日期",this.startPlaceholder="开始日期",this.endPlaceholder="结束日期",this.min="",this.max="",this.firstDayOfWeek=1,this.locale=Jt,this.helperText="",this.accessibleLabel="",this.todayLabel="今天",this.clearLabel="清空",this.prevMonthLabel="上个月",this.nextMonthLabel="下个月",this.prevYearLabel="上一年",this.nextYearLabel="下一年",this.disabledDate=void 0,this.shortcuts=[];const e=new Date;this.viewYear=e.getFullYear(),this.viewMonth=e.getMonth()+1,this.activeDate="",this.pendingStart=null,this.hoverDate=null}get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}normalizeValue(e){return this.mode==="range"?Array.isArray(e)?e.filter(t=>typeof t=="string").filter(Ri).slice(0,2).sort():[]:Array.isArray(e)?"":this.mode==="month"?Wp(e)?e:"":this.mode==="year"?Ms(e)?e:"":Ri(e)?e:""}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.controlledValueGuard.dispose(),this.controlledOpenGuard.dispose(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){e.has("mode")&&(this.setInternalValue(this.value),this.pendingStart=null,this.hoverDate=null,this.syncView()),this.disabled&&this.open&&this.setInternalOpen(!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>this.focusActiveCell())}syncView(){const e=this.viewAnchor();this.viewYear=e.year,this.viewMonth=e.month,this.mode==="year"?this.activeDate=Be(e.year):this.mode==="month"?this.activeDate=mt(e.year,e.month):this.activeDate=Ue(e.year,e.month,e.day)}viewAnchor(){const e=this.value,t=Array.isArray(e)?e[0]:e;let r="";typeof t=="string"&&t!==""&&(this.mode==="year"?r=`${t}-01-01`:this.mode==="month"?r=`${t}-01`:r=t);const s=r===""?null:st(r);if(s)return s;const o=new Date;return{year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()}}dateFormatter(e){try{return new Intl.DateTimeFormat(this.locale||Jt,e)}catch{return new Intl.DateTimeFormat(Jt,e)}}formatMonthTitle(e,t){return this.dateFormatter({year:"numeric",month:"long"}).format(ce(e,t,1))}formatYearTitle(e){return this.dateFormatter({year:"numeric"}).format(ce(e,1,1))}formatMonthCell(e,t){return this.dateFormatter({month:"short"}).format(ce(e,t,1))}minKey(){return this.mode==="year"?this.min.slice(0,4):this.mode==="month"?this.min.slice(0,7):this.min.slice(0,10)}maxKey(){return this.mode==="year"?this.max.slice(0,4):this.mode==="month"?this.max.slice(0,7):this.max.slice(0,10)}isKeyDisabled(e){const t=this.minKey(),r=this.maxKey();if(t!==""&&e<t||r!==""&&e>r)return!0;if((this.mode==="date"||this.mode==="range")&&this.disabledDate!==void 0){const s=st(e);if(s)return this.disabledDate(ce(s.year,s.month,s.day))}return!1}focusActiveCell(){const e=this.renderRoot.querySelector(".cell[data-active]");e==null||e.focus()}emitChange(e){this.dispatchEvent(new CustomEvent("super-date-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,mode:this.mode,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-date-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){if(e&&this.disabled||this.open===e)return;e&&(this.syncView(),this.pendingStart=null,this.hoverDate=null);const s=this.controlledOpenGuard.capture();this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-date-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(s),!e&&t!=="outside"&&this.updateComplete.then(()=>{var o;return(o=this.triggerElement)==null?void 0:o.focus()})}clearValue(e,t){if(this.disabled)return;const r=this.controlledValueGuard.capture();this.setInternalValue(this.mode==="range"?[]:""),this.pendingStart=null,this.hoverDate=null,this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e),this.controlledValueGuard.confirm(r)}pickDay(e,t){if(this.isKeyDisabled(e))return;if(this.mode==="range"){if(this.pendingStart===null){this.pendingStart=e,this.hoverDate=null,this.activeDate=e;return}const s=[this.pendingStart,e].sort();this.pendingStart=null,this.hoverDate=null;const o=this.controlledValueGuard.capture();this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"select",t),this.controlledValueGuard.confirm(o);return}const r=this.controlledValueGuard.capture();this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t),this.controlledValueGuard.confirm(r)}pickMonth(e,t){if(this.isKeyDisabled(e))return;const r=this.controlledValueGuard.capture();this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t),this.controlledValueGuard.confirm(r)}pickYear(e,t){if(this.isKeyDisabled(e))return;const r=this.controlledValueGuard.capture();this.setInternalValue(e),this.emitChange(t),this.setOpen(!1,"select",t),this.controlledValueGuard.confirm(r)}pickToday(e){const t=Zt();if(this.isKeyDisabled(t))return;const r=this.controlledValueGuard.capture();this.setInternalValue(t),this.emitChange(e),this.setOpen(!1,"today",e),this.controlledValueGuard.confirm(r)}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r),o=Array.isArray(s)?s.length===0:s==="",a=Array.isArray(s)?s:[s];if(o||a.some(l=>this.isKeyDisabled(l)))return;const n=this.controlledValueGuard.capture();this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t),this.controlledValueGuard.confirm(n)}shiftView(e,t){if(this.mode==="year"){const s=t!==0?t*12:e*12;this.viewYear=Math.min(Ki,Math.max(pe,this.decadeStart()+s));return}if(this.mode==="month"){this.viewYear=tt(this.viewYear+(t!==0?t:e));return}if(t!==0){this.viewYear=tt(this.viewYear+t);return}const r=Ce(this.viewYear,this.viewMonth,e);this.viewYear=r.year,this.viewMonth=r.month}moveActive(e){if(this.mode==="year"){const t=Number(this.activeDate)||this.viewAnchor().year;let r=tt(t+e),s=0;for(;this.isKeyDisabled(Be(r))&&s<200;){const o=tt(r+(e>0?1:-1));if(o===r)break;r=o,s+=1}this.activeDate=Be(r),this.ensureYearVisible(r)}else if(this.mode==="month"){const t=Number(this.activeDate.slice(0,4))||this.viewAnchor().year,r=Number(this.activeDate.slice(5,7))||this.viewAnchor().month;let s=Ce(t,r,e),o=0;for(;this.isKeyDisabled(mt(s.year,s.month))&&o<200;)s=Ce(s.year,s.month,e>0?1:-1),o+=1;this.activeDate=mt(s.year,s.month),this.viewYear=s.year}else{let t=Bi(this.activeDate||Zt(),e),r=0;for(;this.isKeyDisabled(t)&&r<500;)t=Bi(t,e>0?1:-1),r+=1;this.activeDate=t;const s=st(t);s&&(this.viewYear=s.year,this.viewMonth=s.month)}this.updateComplete.then(()=>this.focusActiveCell())}ensureYearVisible(e){const t=this.decadeStart();(e<t||e>t+11)&&(this.viewYear=e)}decadeStart(){const e=tt(this.viewYear),t=e-e%12;return Math.min(Math.max(pe,t),Ki)}rangePreview(){if(this.mode!=="range")return null;if(this.pendingStart!==null){const t=this.hoverDate??this.pendingStart,r=[this.pendingStart,t].sort();return{start:r[0],end:r[1]}}const e=this.value;return Array.isArray(e)&&e.length===2?{start:e[0],end:e[1]}:null}buildDayCells(e,t){const r=(Xp(e,t,1)-this.firstDayOfWeek+70)%7,s=Fi(e,t),o=Zt(),a=[],n=(m,k,$,z)=>{const S=Ue(m,k,$);a.push({year:m,month:k,day:$,key:S,adjacent:z,disabled:this.isKeyDisabled(S),today:S===o})},l=Ce(e,t,-1),c=Fi(l.year,l.month);for(let m=r-1;m>=0;m-=1)n(l.year,l.month,c-m,!0);for(let m=1;m<=s;m+=1)n(e,t,m,!1);const d=Ce(e,t,1);let p=1;for(;a.length%7!==0;)n(d.year,d.month,p,!0),p+=1;return a}weekdayLabels(){const e=(this.firstDayOfWeek%7+7)%7,t=this.dateFormatter({weekday:"narrow"});return Array.from({length:7},(r,s)=>{const o=(e+s)%7;return t.format(ce(2024,1,7+o))})}renderNav(e){const t=this.mode==="date"||this.mode==="range",r=e?Ce(this.viewYear,this.viewMonth,1):{year:this.viewYear,month:this.viewMonth},s=t?this.formatMonthTitle(this.viewYear,this.viewMonth):this.mode==="month"?this.formatYearTitle(this.viewYear):`${this.decadeStart()} – ${this.decadeStart()+11}`,o=this.formatMonthTitle(r.year,r.month);return u`
      <div class="nav" part="nav">
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.prevYearLabel}
          @click=${()=>this.shiftView(0,-1)}
        >«</button>
        ${t?u`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.prevMonthLabel}
              @click=${()=>this.shiftView(-1,0)}
            >‹</button>`:b}
        <span class="title" part="title">${s}</span>
        ${e?u`<span class="title" part="title">${o}</span>`:b}
        ${t?u`<button
              class="nav-button"
              part="nav-button"
              type="button"
              aria-label=${this.nextMonthLabel}
              @click=${()=>this.shiftView(1,0)}
            >›</button>`:b}
        <button
          class="nav-button"
          part="nav-button"
          type="button"
          aria-label=${this.nextYearLabel}
          @click=${()=>this.shiftView(0,1)}
        >»</button>
      </div>
    `}renderDayPanel(e,t){const r=this.buildDayCells(e,t),s=this.rangePreview(),o=this.value,a=!Array.isArray(o)&&this.mode==="date"?o:"";return u`
      <div class="panel" part="panel">
        <div class="weekdays" part="weekdays" aria-hidden="true">
          ${this.weekdayLabels().map(n=>u`<span class="weekday">${n}</span>`)}
        </div>
        <div
          class="grid"
          part="grid"
          role="group"
          aria-label=${this.formatMonthTitle(e,t)}
          @keydown=${this.handleGridKeydown}
        >
          ${r.map(n=>{const l=s!==null&&!n.disabled&&n.key>=s.start&&n.key<=s.end&&s.start!==s.end,c=s!==null&&(n.key===s.start||n.key===s.end)&&(this.pendingStart!==null||s.start!==s.end),d=this.mode==="range"?c:n.key===a;return u`
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
    `}renderMonthPanel(){const e=this.value,t=typeof e=="string"?e:"";return u`
      <div class="panel" part="panel">
        <div
          class="month-grid"
          part="grid"
          role="group"
          aria-label=${this.formatYearTitle(this.viewYear)}
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(r,s)=>{const o=s+1,a=mt(this.viewYear,o);return u`
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
    `}renderYearPanel(){const e=this.value,t=typeof e=="string"?e:"",r=this.decadeStart();return u`
      <div class="panel" part="panel">
        <div
          class="year-grid"
          part="grid"
          role="group"
          aria-label="${r} – ${r+11}"
          @keydown=${this.handleGridKeydown}
        >
          ${Array.from({length:12},(s,o)=>{const a=r+o,n=Be(a);return u`
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
    `}renderShortcuts(){return this.shortcuts.length===0?b:u`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>u`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.mode==="date",t=this.clearable;return!e&&!t?b:u`
      <div class="footer" part="footer">
        ${e?u`<button
              class="footer-button today-button"
              part="today-button"
              type="button"
              @click=${r=>this.pickToday(r)}
            >${this.todayLabel}</button>`:b}
        ${t?u`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${r=>this.clearValue(r,!0)}
            >${this.clearLabel}</button>`:b}
      </div>
    `}renderPanelsWithNav(){const e=this.mode==="range",t=Ce(this.viewYear,this.viewMonth,1);let r;return this.mode==="month"?r=this.renderMonthPanel():this.mode==="year"?r=this.renderYearPanel():r=u`
        ${this.renderDayPanel(this.viewYear,this.viewMonth)}
        ${e?this.renderDayPanel(t.year,t.month):b}
      `,u`
      <div class="popup-body">
        ${this.renderShortcuts()}
        <div class="panels-wrap">
          ${this.renderNav(e)}
          <div class="panels">${r}</div>
        </div>
      </div>
    `}renderTriggerText(){const e=this.value;if(this.mode==="range"){const r=Array.isArray(e)?e:[],s=r[0]??"",o=r[1]??"";return u`
        <span class="trigger-text ${s===""?"placeholder":""}" part="label">
          ${s===""?this.startPlaceholder:s}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${o===""?"placeholder":""}">
          ${o===""?this.endPlaceholder:o}
        </span>
      `}const t=typeof e=="string"?e:"";return u`
      <span class="trigger-text ${t===""?"placeholder":""}" part="label">
        ${t===""?this.placeholder:t}
      </span>
    `}render(){const e=Array.isArray(this.value)?this.value.length>0:this.value!=="",t=this.clearable&&e&&!this.disabled;return u`
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
        ${t?u`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:b}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">
            <span class="calendar-icon"></span>
          </slot>
        </span>
      </div>
      ${this.helperText!==""?u`<div class="helper" part="helper">${this.helperText}</div>`:b}
      ${this.open?u`
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
          `:b}
    `}}Object.defineProperty(Fr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{mode:{type:String,reflect:!0},value:{attribute:"value",noAccessor:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0,noAccessor:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},min:{type:String},max:{type:String},firstDayOfWeek:{type:Number,attribute:"first-day-of-week"},locale:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},todayLabel:{type:String,attribute:"today-label"},clearLabel:{type:String,attribute:"clear-label"},prevMonthLabel:{type:String,attribute:"prev-month-label"},nextMonthLabel:{type:String,attribute:"next-month-label"},prevYearLabel:{type:String,attribute:"prev-year-label"},nextYearLabel:{type:String,attribute:"next-year-label"},disabledDate:{attribute:!1},shortcuts:{attribute:!1},viewYear:{state:!0},viewMonth:{state:!0},activeDate:{state:!0},pendingStart:{state:!0},hoverDate:{state:!0}}});Object.defineProperty(Fr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Jp="super-date-picker",Zp=i=>V(Jp,Fr,i),dr={fromAttribute:i=>i!==null&&i!=="false",toAttribute:i=>i?"":null},xe={fromAttribute:i=>i!=="false",toAttribute:i=>i?"":null};class Et{constructor(e,t){Object.defineProperty(this,"host",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"panel",{enumerable:!0,configurable:!0,writable:!0,value:t})}querySelectorAll(e){return[...Array.from(this.panel.querySelectorAll(e)),...Array.from(this.host.querySelectorAll(e))].filter((t,r,s)=>s.indexOf(t)===r)}contains(e){if(!e)return!1;let t=e;for(;t;){if(this.panel.contains(t)||this.host.contains(t))return!0;const r=t.getRootNode();t=r instanceof ShadowRoot?r.host:null}return!1}}function Ds({host:i,eventPrefix:e,reason:t,close:r}){const s=new CustomEvent(`${e}-before-close`,{detail:{reason:t},bubbles:!0,composed:!0,cancelable:!0});return i.dispatchEvent(s)?(t==="confirm"?i.dispatchEvent(new CustomEvent(`${e}-confirm`,{detail:{reason:"confirm"},bubbles:!0,composed:!0})):t==="cancel"&&i.dispatchEvent(new CustomEvent(`${e}-cancel`,{detail:{reason:"cancel"},bubbles:!0,composed:!0})),r(),i.dispatchEvent(new CustomEvent(`${e}-close`,{detail:{reason:t},bubbles:!0,composed:!0})),!0):!1}let Qp=0;class Br extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"dialogId",{enumerable:!0,configurable:!0,writable:!0,value:`super-dialog-${++Qp}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.dialogId}-title`}),Object.defineProperty(this,"bodyId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.dialogId}-body`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.loading||this.close("confirm")}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("cancel")}}),Object.defineProperty(this,"handleMaskClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.maskClosable||e.target!==e.currentTarget||this.close("mask")}}),Object.defineProperty(this,"handleDialogKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key!=="Escape"||!this.closeOnEscape||e.defaultPrevented||(e.preventDefault(),this.close("escape"))}}),Object.defineProperty(this,"handleTabKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var c;if(!this.open||e.key!=="Tab"||e.defaultPrevented)return;const t=this.panel;if(!t)return;const r=new Et(this,t);let s=this.ownerDocument.activeElement;for(;(c=s==null?void 0:s.shadowRoot)!=null&&c.activeElement;)s=s.shadowRoot.activeElement;const o=s;if(!o||!r.contains(o))return;e.stopImmediatePropagation();const a=[...qe(t),...qe(this)].filter((d,p,m)=>m.indexOf(d)===p);if(a.length===0){e.preventDefault(),t.focus();return}const n=a[0],l=a[a.length-1];if(!e.shiftKey&&(o===l||!a.includes(o))){o!==n&&(e.preventDefault(),n.focus());return}e.shiftKey&&(o===n||!a.includes(o))&&(e.preventDefault(),l.focus())}}),Object.defineProperty(this,"handleFooterSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.target;this.hasFooterSlot=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}}),this.title="",this.width="",this.size="medium",this.closable=!0,this.maskClosable=!0,this.closeOnEscape=!0,this.closeLabel="关闭对话框",this.showFooter=!0,this.confirmText="确定",this.cancelText="取消",this.loading=!1,this.hasFooterSlot=!1}get panel(){return this.renderRoot.querySelector('[part="dialog"]')}releaseOpenState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null,this.triggerElement=null}activateOpenState(){if(!this.isConnected)return;const e=this.panel;if(!e||this.focusTrap)return;const t=this.ownerDocument.activeElement;this.triggerElement=t instanceof HTMLElement&&!this.contains(t)?t:null,this.releaseScroll=Sr();const r=new Et(this,e);this.focusTrap=zr(r,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()}close(e){if(!this.open)return;const t=this.controlledOpenGuard.capture();Ds({host:this,eventPrefix:"super-dialog",reason:e,close:()=>{this.setInternalOpen(!1)}})&&this.controlledOpenGuard.confirm(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDialogKeydown),this.ownerDocument.addEventListener("keydown",this.handleTabKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.releaseOpenState(),this.controlledOpenGuard.dispose(),this.removeEventListener("keydown",this.handleDialogKeydown),this.ownerDocument.removeEventListener("keydown",this.handleTabKeydown,!0),super.disconnectedCallback()}updated(){this.open?this.activateOpenState():this.releaseOpenState()}render(){if(!this.open)return b;const e=this.width!==""&&this.width!==void 0?`--_super-dialog-width: ${this.width};`:"",t=this.showFooter&&!this.hasFooterSlot;return u`
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
                ${this.title!==""?this.title:u`<span class="visually-hidden">对话框</span>`}
              </slot>
            </div>
            ${this.closable?u`
                  <button
                    class="close"
                    part="close"
                    type="button"
                    aria-label=${this.closeLabel}
                    @click=${()=>this.close("close-button")}
                  >
                    ×
                  </button>
                `:b}
          </header>
          <div class="body" part="body" id=${this.bodyId}>
            <slot></slot>
          </div>
          ${this.showFooter?u`
                <footer class="footer" part="footer">
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}>
                    ${t?u`
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
                        `:b}
                  </slot>
                </footer>
              `:b}
        </div>
      </div>
    `}}Object.defineProperty(Br,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,converter:dr,noAccessor:!0},title:{type:String,reflect:!0},width:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0,converter:xe,useDefault:!0},maskClosable:{type:Boolean,attribute:"mask-closable",reflect:!0,converter:xe,useDefault:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0,converter:xe,useDefault:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showFooter:{type:Boolean,attribute:"show-footer",reflect:!0,converter:xe,useDefault:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},loading:{type:Boolean,reflect:!0,converter:dr},hasFooterSlot:{state:!0}}});Object.defineProperty(Br,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-dialog-shadow-color)"}))};
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
      ${re(_r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
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
  `});const ed="super-dialog",td=i=>V(ed,Br,i);class Gr extends T{constructor(){super(),Object.defineProperty(this,"hasContent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"syncContentPresence",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasContent&&(this.hasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.syncContentPresence(e)}}),this.direction="horizontal",this.contentPosition="center",this.variant="solid",this.color="",this.size="medium",this.hasContent=!1}render(){const e=this.direction==="vertical",t=this.color?{"--super-divider-color":this.color}:{};return u`
      <div
        class="divider"
        part="divider"
        role="separator"
        aria-orientation=${e?"vertical":"horizontal"}
        style=${oe(t)}
      >
        <span class="line start" part="line" aria-hidden="true"></span>
        ${e?b:u`
              <span class="content" part="content" ?hidden=${!this.hasContent}>
                <slot @slotchange=${this.handleSlotChange}></slot>
              </span>
            `}
        <span class="line end" part="line" aria-hidden="true"></span>
      </div>
    `}}Object.defineProperty(Gr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{direction:{type:String,reflect:!0},contentPosition:{type:String,attribute:"content-position",reflect:!0},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Gr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const rd="super-divider",id=i=>V(rd,Gr,i),Gi="button, a[href], input, select, textarea, summary",sd=120;let od=0;class Hr extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"dropdownId",{enumerable:!0,configurable:!0,writable:!0,value:`super-dropdown-${++od}`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"menuElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"pendingFocus",{enumerable:!0,configurable:!0,writable:!0,value:"none"}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&(this.triggerElement?this.startFloating():this.destroyFloating())}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="click"||e.composedPath().includes(this.triggerElement)&&(this.clearHoverCloseTimer(),this.setOpen(!this.open))}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger==="manual")return;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const r=e.key==="ArrowDown"?"first":"last";this.open?this.focusMenuEdge(r):this.setOpen(!0,r);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"trigger");return}if(e.key==="Tab"&&this.open){this.setOpen(!1);return}if(e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;this.trigger!=="click"||e.repeat||!t||this.hasNativeActivation(e,t)||(e.preventDefault(),this.setOpen(!this.open,this.open?"none":"first"))}}),Object.defineProperty(this,"handleMenuKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.open||e.defaultPrevented)return;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault(),this.moveMenuFocus(e.key==="ArrowDown"?1:-1);return}if(e.key==="Home"||e.key==="End"){e.preventDefault(),this.focusMenuEdge(e.key==="Home"?"first":"last");return}if(e.key==="Escape"){e.preventDefault(),this.setOpen(!1,"trigger");return}if(e.key==="Tab"){this.setOpen(!1);return}if(e.key!=="Enter"&&e.key!==" ")return;const t=e.composedPath()[0];if(!(t instanceof HTMLElement))return;const r=t.closest('[role="menuitem"]'),s=Number(r==null?void 0:r.dataset.index),o=Number.isInteger(s)?this.items[s]:void 0;!o||o.disabled||o.divider||(e.preventDefault(),this.selectItem(o))}}),Object.defineProperty(this,"handleItemPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget;t.getAttribute("aria-disabled")!=="true"&&t.focus({preventScroll:!0})}}),Object.defineProperty(this,"handleItemClick",{enumerable:!0,configurable:!0,writable:!0,value:(e,t)=>{t.preventDefault(),this.selectItem(e)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.setOpen(!1,"trigger"))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||(e.preventDefault(),this.clearHoverCloseTimer(),this.setOpen(!1,"trigger"))}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||e.relatedTarget instanceof Node&&this.contains(e.relatedTarget)||this.scheduleHoverClose()}}),this.items=[],this.trigger="click",this.placement="bottom-start",this.closeOnSelect=!0,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.disabled=!1,this.size="medium"}get menuId(){return`${this.dropdownId}-menu`}get menuLabel(){var e;return((e=this.getAttribute("aria-label"))==null?void 0:e.trim())||"操作菜单"}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},sd)}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}focusMenuEdge(e){const t=this.enabledMenuItems,r=e==="first"?t[0]:t.at(-1);r==null||r.focus({preventScroll:!0})}scheduleMenuFocus(e){this.pendingFocus=e,this.updateComplete.then(()=>{!this.open||this.pendingFocus!==e||(this.pendingFocus="none",this.focusMenuEdge(e))})}setOpen(e,t="none"){if(e&&this.disabled)return;if(this.open===e){e&&(t==="first"||t==="last")&&this.scheduleMenuFocus(t);return}const r=this.controlledOpenGuard.capture();this.pendingFocus=e?t:"none",this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-dropdown-open-change",{detail:{open:e},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(r),!e&&t==="trigger"&&this.focusTrigger()}get enabledMenuItems(){return Array.from(this.renderRoot.querySelectorAll('[part="menu"] [role="menuitem"]:not([aria-disabled="true"])'))}moveMenuFocus(e){var a;const t=this.enabledMenuItems;if(t.length===0)return;const r=this.renderRoot.activeElement,s=t.indexOf(r),o=s<0?e===1?0:t.length-1:(s+e+t.length)%t.length;(a=t[o])==null||a.focus({preventScroll:!0})}syncTriggerAria(){var t,r;const e=this.triggerElement;e&&(e.setAttribute("aria-haspopup","menu"),e.setAttribute("aria-expanded",this.open?"true":"false"),this.open?e.setAttribute("aria-controls",this.menuId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"),this.disabled?e.setAttribute("aria-disabled","true"):(r=this.triggerAria)!=null&&r.disabled?e.setAttribute("aria-disabled",this.triggerAria.disabled):e.removeAttribute("aria-disabled"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls),r("aria-disabled",t.disabled)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls"),disabled:e.getAttribute("aria-disabled")},e.addEventListener("click",this.handleTriggerClick),e.addEventListener("keydown",this.handleTriggerKeydown),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleTriggerClick),e.removeEventListener("keydown",this.handleTriggerKeydown),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.menuElement;if(!e||!t)return;t.style.position="fixed",t.style.left="0px",t.style.top="0px";const r=e.getBoundingClientRect().width;r>0&&(t.style.minInlineSize=`${Math.ceil(r)}px`),this.floating=ht(e,t,{placement:this.placement,offset:6})}activateOpenState(){this.startFloating();const e=this.pendingFocus;e==="first"||e==="last"?this.scheduleMenuFocus(e):this.pendingFocus="none"}deactivateOpenState(){this.destroyFloating(),this.pendingFocus="none"}hasNativeActivation(e,t){return t.matches(Gi)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(Gi))}selectItem(e){this.disabled||e.disabled||e.divider||(this.dispatchEvent(new CustomEvent("super-dropdown-select",{detail:{key:e.key},bubbles:!0,composed:!0})),this.closeOnSelect&&this.setOpen(!1,"trigger"))}focus(e){if(this.triggerElement){this.triggerElement.focus(e);return}super.focus(e)}blur(){if(this.triggerElement){this.triggerElement.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerenter",this.handlePointerEnter),this.addEventListener("pointerleave",this.handlePointerLeave),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.controlledOpenGuard.dispose(),this.deactivateOpenState(),this.unbindTrigger(),this.removeEventListener("pointerenter",this.handlePointerEnter),this.removeEventListener("pointerleave",this.handlePointerLeave),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.setInternalOpen(!1),this.pendingFocus="none"),e.has("trigger")&&e.get("trigger")!==void 0&&this.open&&(this.setInternalOpen(!1),this.pendingFocus="none")}updated(e){var r;this.menuElement=this.renderRoot.querySelector('[part="menu"]'),this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled")||e.has("trigger"))&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}e.has("placement")?this.startFloating():e.has("items")&&((r=this.floating)==null||r.update())}render(){return u`
      <span class="trigger" part="trigger">
        <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      </span>
      ${this.open?u`
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
              ${this.items.map((e,t)=>e.divider?u`
                      <div
                        class="divider"
                        part="divider"
                        role="separator"
                      ></div>
                    `:u`
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
          `:b}
    `}}Object.defineProperty(Hr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,noAccessor:!0},items:{attribute:!1},trigger:{type:String,reflect:!0},placement:{type:String,reflect:!0},closeOnSelect:{type:Boolean,attribute:"close-on-select",reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Hr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const ad="super-dropdown",nd=i=>V(ad,Hr,i),ld=["small","medium","large"];let cd=0;class Ur extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"drawerId",{enumerable:!0,configurable:!0,writable:!0,value:`super-drawer-${++cd}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.drawerId}-title`}),Object.defineProperty(this,"bodyId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.drawerId}-body`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("confirm")}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.close("cancel")}}),Object.defineProperty(this,"handleMaskClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.maskClosable||e.target!==e.currentTarget||this.close("mask")}}),Object.defineProperty(this,"handleDrawerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key!=="Escape"||!this.closeOnEscape||e.defaultPrevented||(e.preventDefault(),this.close("escape"))}}),Object.defineProperty(this,"handleTabKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var c;if(!this.open||e.key!=="Tab"||e.defaultPrevented)return;const t=this.panel;if(!t)return;const r=new Et(this,t);let s=this.ownerDocument.activeElement;for(;(c=s==null?void 0:s.shadowRoot)!=null&&c.activeElement;)s=s.shadowRoot.activeElement;const o=s;if(!o||!r.contains(o))return;e.stopImmediatePropagation();const a=[...qe(t),...qe(this)].filter((d,p,m)=>m.indexOf(d)===p);if(a.length===0){e.preventDefault(),t.focus();return}const n=a[0],l=a[a.length-1];if(!e.shiftKey&&(o===l||!a.includes(o))){o!==n&&(e.preventDefault(),n.focus());return}e.shiftKey&&(o===n||!a.includes(o))&&(e.preventDefault(),l.focus())}}),Object.defineProperty(this,"handleFooterSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.target;this.hasFooterSlot=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}}),this.title="",this.placement="right",this.size="medium",this.closable=!0,this.maskClosable=!0,this.closeOnEscape=!0,this.closeLabel="关闭抽屉",this.showFooter=!0,this.confirmText="确定",this.cancelText="取消",this.hasFooterSlot=!1}get panel(){return this.renderRoot.querySelector('[part="drawer"]')}releaseOpenState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null,this.triggerElement=null}activateOpenState(){if(!this.isConnected)return;const e=this.panel;if(!e||this.focusTrap)return;const t=this.ownerDocument.activeElement;this.triggerElement=t instanceof HTMLElement&&!this.contains(t)?t:null,this.releaseScroll=Sr();const r=new Et(this,e);this.focusTrap=zr(r,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()}close(e){if(!this.open)return;const t=this.controlledOpenGuard.capture();Ds({host:this,eventPrefix:"super-drawer",reason:e,close:()=>{this.setInternalOpen(!1)}})&&this.controlledOpenGuard.confirm(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleDrawerKeydown),this.ownerDocument.addEventListener("keydown",this.handleTabKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.releaseOpenState(),this.controlledOpenGuard.dispose(),this.removeEventListener("keydown",this.handleDrawerKeydown),this.ownerDocument.removeEventListener("keydown",this.handleTabKeydown,!0),super.disconnectedCallback()}updated(){this.open?this.activateOpenState():this.releaseOpenState()}render(){if(!this.open)return b;const e=Number.isFinite(this.size)?`${Math.max(0,this.size)}px`:typeof this.size=="string"&&this.size!==""&&!ld.includes(this.size)?this.size:void 0,t=e?`--_super-drawer-size: ${e};`:"",r=this.showFooter&&!this.hasFooterSlot;return u`
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
                ${this.title!==""?this.title:u`<span class="visually-hidden">抽屉</span>`}
              </slot>
            </div>
            ${this.closable?u`
                  <button
                    class="close"
                    part="close"
                    type="button"
                    aria-label=${this.closeLabel}
                    @click=${()=>this.close("close-button")}
                  >
                    ×
                  </button>
                `:b}
          </header>
          <div class="body" part="body" id=${this.bodyId}>
            <slot></slot>
          </div>
          ${this.showFooter?u`
                <footer class="footer" part="footer">
                  <slot name="footer" @slotchange=${this.handleFooterSlotChange}>
                    ${r?u`
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
                        `:b}
                  </slot>
                </footer>
              `:b}
        </div>
      </div>
    `}}Object.defineProperty(Ur,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,converter:dr,noAccessor:!0},title:{type:String,reflect:!0},placement:{type:String,reflect:!0},size:{type:String,reflect:!0,converter:{fromAttribute:i=>{if(i===null)return"medium";const e=Number(i);return i.trim()!==""&&Number.isFinite(e)?e:i},toAttribute:i=>String(i)}},closable:{type:Boolean,reflect:!0,converter:xe,useDefault:!0},maskClosable:{type:Boolean,attribute:"mask-closable",reflect:!0,converter:xe,useDefault:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0,converter:xe,useDefault:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showFooter:{type:Boolean,attribute:"show-footer",reflect:!0,converter:xe,useDefault:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},hasFooterSlot:{state:!0}}});Object.defineProperty(Ur,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-drawer-shadow-color)"}))};
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
      ${re(_r({color:"var(--super-paper-texture, rgb(120 113 100 / 6%))"}))};
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
  `});const ud="super-drawer",pd=i=>V(ud,Ur,i);class qr extends T{constructor(){super(),Object.defineProperty(this,"hasAction",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"syncActionPresence",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasAction&&(this.hasAction=r,this.requestUpdate())}}),this.description="暂无数据",this.size="medium",this.image=""}render(){return u`
      <div class="empty" part="empty" role="status">
        <div class="illustration" part="illustration" aria-hidden="true">
          ${this.image?u`<img
                class="image"
                part="image"
                src=${this.image}
                alt=""
                aria-hidden="true"
              />`:u`
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
    `}}Object.defineProperty(qr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{description:{type:String,reflect:!0},size:{type:String,reflect:!0},image:{type:String,reflect:!0}}});Object.defineProperty(qr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const dd="super-empty",hd=i=>V(dd,qr,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=(i,e)=>{var r;const t=i._$AN;if(t===void 0)return!1;for(const s of t)(r=s._$AO)==null||r.call(s,e,!1),ot(s,e);return!0},Ot=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},js=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),md(e)}};function bd(i){this._$AN!==void 0?(Ot(this),this._$AM=i,js(this)):this._$AM=i}function fd(i,e=!1,t=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let o=t;o<r.length;o++)ot(r[o],!1),Ot(r[o]);else r!=null&&(ot(r,!1),Ot(r));else ot(this,i)}const md=i=>{i.type==me.CHILD&&(i._$AP??(i._$AP=fd),i._$AQ??(i._$AQ=bd))};class gd extends Lr{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),js(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),t&&(ot(this,e),Ot(this))}setValue(e){if(zs(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Qt=new WeakMap,vd=Tr(class extends gd{render(i){return b}update(i,[e]){var r;const t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),b}rt(i){if(this.G!==void 0)if(this.isConnected||(i=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=Qt.get(e);t===void 0&&(t=new WeakMap,Qt.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,e;return typeof this.G=="function"?(i=Qt.get(this.ht??globalThis))==null?void 0:i.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=Symbol.for(""),xd=i=>{if((i==null?void 0:i.r)===Ns)return i==null?void 0:i._$litStatic$},yd=i=>({_$litStatic$:i,r:Ns}),Hi=new Map,kd=i=>(e,...t)=>{const r=t.length;let s,o;const a=[],n=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&(o=t[c],(s=xd(o))!==void 0);)l+=s+e[++c],d=!0;c!==r&&n.push(o),a.push(l),c++}if(c===r&&a.push(e[r]),d){const p=a.join("$$lit$$");(e=Hi.get(p))===void 0&&(a.raw=a,Hi.set(p,e=a)),t=n}return i(e,...t)},wd=kd(u),$d={fields:[]},fe=i=>({...i}),Ui=(i,e)=>Object.is(i,e),zd=/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]*$/;class Yr extends T{constructor(){super(),Object.defineProperty(this,"currentValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"resetValue",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"hasAssignedValue",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"changeHandlers",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"assignedPropertyNames",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),this.schema=$d,this.submitting=!1,this.formErrors={}}get value(){return this.currentValue}set value(e){const t=this.currentValue;this.currentValue=this.normalizeValues(e),this.resetValue=fe(this.currentValue),this.hasAssignedValue=!0,this.requestUpdate("value",t)}get errors(){return{...this.formErrors}}get fields(){var e;return((e=this.schema)==null?void 0:e.fields)??[]}normalizeValues(e){const t=e&&typeof e=="object"?e:{},r=new Set(this.fields.map(o=>o.field)),s={};return this.fields.forEach(o=>{Object.prototype.hasOwnProperty.call(t,o.field)?s[o.field]=t[o.field]:o.defaultValue!==void 0&&(s[o.field]=o.defaultValue)}),r.size?s:{...t}}setInternalValue(e){const t=this.currentValue;this.currentValue=e,this.requestUpdate("value",t)}dependenciesFor(e,t=this.currentValue){return Object.fromEntries((e.deps??[]).map(r=>[r,t[r]]))}isVisible(e,t=this.currentValue){return typeof e.visible=="boolean"?e.visible:typeof e.visible!="function"?!0:e.visible(this.dependenciesFor(e,t))}propsFor(e){return typeof e.props=="function"?e.props(this.dependenciesFor(e)):e.props??{}}getChangeHandler(e){const t=this.changeHandlers.get(e);if(t)return t;const r=(s,o)=>{this.updateFieldValue(e,s,o)};return this.changeHandlers.set(e,r),r}applyDependencyEffects(e,t,r){const s=[e],o=new Set;for(;s.length>0;){const a=s.shift();a&&(o.has(a)||(o.add(a),this.fields.forEach(n=>{if(!(n.deps??[]).includes(a))return;let l;if(n.clearWhenDepsChange?l="dependency":n.clearWhenHidden&&!this.isVisible(n,t)&&(l="visibility"),!l||!Object.prototype.hasOwnProperty.call(t,n.field)||t[n.field]===void 0)return;const c=t[n.field];t[n.field]=void 0,r.push({field:n.field,previousValue:c,value:void 0,reason:l}),s.push(n.field)})))}}updateFieldValue(e,t,r){const s=this.currentValue,o=s[e];if(Ui(o,t))return;const a=fe(s);a[e]=t;const n=[{field:e,previousValue:o,value:t,reason:"user"}];this.applyDependencyEffects(e,a,n),this.setInternalValue(a),(this.schema.validateOn==="change"||n.some(l=>!!this.formErrors[l.field]))&&this.validate(),this.dispatchEvent(new CustomEvent("super-form-change",{detail:{field:e,value:t,changes:n,values:fe(a),originalEvent:r},bubbles:!0,composed:!0}))}assignElementProps(e,t){const r=new Set(Object.keys(t));(this.assignedPropertyNames.get(e)??new Set).forEach(o=>{r.has(o)||Reflect.set(e,o,void 0)}),Object.entries(t).forEach(([o,a])=>{Reflect.set(e,o,a)}),this.assignedPropertyNames.set(e,r)}renderStringComponent(e,t){if(!zd.test(e))return u`<span class="config-error" role="alert">
        “${e}”不是合法的自定义元素标签
      </span>`;const r=yd(e);return wd`<${r}
      ${vd(s=>{s instanceof HTMLElement&&this.assignElementProps(s,t)})}
    ></${r}>`}renderFieldComponent(e){const t={...this.propsFor(e),value:this.currentValue[e.field],onchange:this.getChangeHandler(e.field)};return typeof e.component=="string"?this.renderStringComponent(e.component,t):e.component(t)}renderField(e,t){if(this.fields.findIndex(o=>o.field===e.field)!==t)return u`<div class="config-error" role="alert">
        字段名“${e.field}”重复，请为每个字段配置唯一名称
      </div>`;if(!this.isVisible(e))return b;const r=this.formErrors[e.field],s=Math.min(e.span??1,this.schema.columns??1);return u`
      <div
        class="item"
        part="item"
        data-field=${e.field}
        style=${`--super-form-field-span: ${s}`}
      >
        <div class="label-row" part="label-row">
          ${e.label?u`<span class="label" part="label">${e.label}</span>`:b}
          ${e.required?u`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:b}
        </div>
        <div class="control-stack">
          <div class="control" part="control">
            ${this.renderFieldComponent(e)}
          </div>
          ${e.extra?u`<span class="extra" part="extra">${e.extra}</span>`:b}
          ${r?u`<span class="error" part="error" role="alert">${r}</span>`:b}
        </div>
      </div>
    `}formElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("form"))??null}validate(){const e={};return this.fields.forEach(t=>{if(!this.isVisible(t)||!t.rule)return;let r=!1;try{r=t.rule(this.currentValue[t.field])}catch{r=!1}r||(e[t.field]=t.errorMessage||"校验未通过")}),this.formErrors=e,Object.keys(e).length===0}reset(e){this.setInternalValue(fe(this.resetValue)),this.formErrors={},this.dispatchEvent(new CustomEvent("super-form-reset",{detail:{values:fe(this.resetValue),originalEvent:e},bubbles:!0,composed:!0}))}requestSubmit(){const e=this.formElement();if(e){e.requestSubmit();return}this.handleSubmit(new SubmitEvent("submit",{cancelable:!0}))}focusField(e){var s;const t=Array.from(((s=this.renderRoot)==null?void 0:s.querySelectorAll("[data-field]"))??[]).find(o=>o.dataset.field===e),r=t==null?void 0:t.querySelector("[part='control'] > *, input, textarea, select, button, [tabindex]");r==null||r.focus()}handleSubmit(e){if(e.preventDefault(),!this.submitting){if(!this.validate()){this.dispatchEvent(new CustomEvent("super-form-invalid",{detail:{values:fe(this.currentValue),errors:{...this.formErrors},originalEvent:e},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("super-form-submit",{detail:{values:fe(this.currentValue),originalEvent:e},bubbles:!0,composed:!0}))}}handleReset(e){e.preventDefault(),this.reset(e)}willUpdate(e){if(e.has("schema")){const t=this.schema.layout??"vertical",r=this.schema.columns??1,s=this.schema.actionsAlign==="start"?"flex-start":this.schema.actionsAlign==="center"?"center":"flex-end";this.setAttribute("layout",t),this.style.setProperty("--super-form-columns",String(r)),this.style.setProperty("--super-form-actions-align",s);const o=this.normalizeValues(this.currentValue);this.resetValue=this.hasAssignedValue?this.normalizeValues(this.resetValue):fe(o),(Object.keys(o).length!==Object.keys(this.currentValue).length||Object.keys(o).some(l=>!Ui(o[l],this.currentValue[l])))&&this.setInternalValue(o);const a=new Set(this.fields.map(l=>l.field)),n=Object.fromEntries(Object.entries(this.formErrors).filter(([l])=>a.has(l)));Object.keys(n).length!==Object.keys(this.formErrors).length&&(this.formErrors=n),this.changeHandlers.clear()}}render(){const e=this.schema.showReset??!1,t=this.submitting?this.schema.submittingText??"提交中...":this.schema.submitText??"提交";return u`
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
            ${e?u`<button
                  class="reset"
                  part="reset-button"
                  type="reset"
                  ?disabled=${this.submitting}
                >${this.schema.resetText??"重置"}</button>`:b}
            <button
              class="submit"
              part="submit-button"
              type="submit"
              ?disabled=${this.submitting}
            >
              ${this.submitting?u`<span class="submitting-mark" aria-hidden="true"></span>`:b}
              ${t}
            </button>
          </slot>
        </div>
        <div class="footer" part="footer"><slot name="footer"></slot></div>
      </form>
    `}}Object.defineProperty(Yr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{schema:{attribute:!1},value:{attribute:!1,noAccessor:!0},submitting:{type:Boolean,reflect:!0},formErrors:{state:!0}}});Object.defineProperty(Yr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      --super-form-primary-color: #245cbe;
      --super-form-primary-hover-color: #2a63cc;
      --super-form-primary-active-color: #174ea6;
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
  `});const Sd="super-form",_d=i=>V(Sd,Yr,i);class Wr extends T{get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>this.setInternalValue(e)})}),this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget,r=this.controlledValueGuard.capture();this.setInternalValue(t.value),this.emitValueEvent("super-input",e),this.controlledValueGuard.confirm(r)}handleChange(e){const t=e.currentTarget,r=this.controlledValueGuard.capture();this.setInternalValue(t.value),this.emitValueEvent("super-change",e),this.controlledValueGuard.confirm(r)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value,r=this.controlledValueGuard.capture();e.value="",this.setInternalValue(""),e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(r),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;if(!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly)return;e>0?t.stepUp():t.stepDown();const r=this.controlledValueGuard.capture();this.setInternalValue(t.value),t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),this.controlledValueGuard.confirm(r),t.focus()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}updateSlotPresence(e,t){const s=e.currentTarget.assignedNodes({flatten:!0}).some(o=>{var a;return o.nodeType!==Node.TEXT_NODE||!!((a=o.textContent)!=null&&a.trim())});t==="prefix"?this.hasPrefix=s:t==="suffix"?this.hasSuffix=s:this.hasAction=s}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??b}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return u`
        <textarea
          class="field"
          part="input"
          .value=${ie(this.value)}
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
      `;const r=this.type==="password"&&this.passwordVisible?"text":this.type;return u`
      <input
        class="field"
        part="input"
        .value=${ie(this.value)}
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
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,r=this.type==="password"&&this.revealable,s=this.validationSymbol(),o=!!this.helperText||this.showCount&&this.maxLength!==void 0;return u`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${a=>this.updateSlotPresence(a,"prefix")}
          ></slot>
        </span>
        ${this.required?u`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:b}
        ${this.type==="number"&&!this.multiline?u`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:b}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?u`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:b}
        <span class="trailing">
          ${s===b?b:u`<span class="validation-icon" part="validation-icon" aria-hidden="true">${s}</span>`}
          ${t?u`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:b}
          ${r?u`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:b}
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
      ${o?u`
            <div class="meta" part="meta">
              ${this.helperText?u`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${w(this.validation==="error"?"alert":void 0)}
                    aria-live=${w(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:b}
              ${this.showCount&&this.maxLength!==void 0?u`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:b}
            </div>
          `:b}
    `}}Object.defineProperty(Wr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(Wr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Cd="super-input",Ed=i=>V(Cd,Wr,i),Od=["info","success","warning","error"],Pd={info:"i",success:"✓",warning:"!",error:"×"},Ad=i=>Od.includes(i);class Xr extends T{constructor(){super(),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.open=!1,this.message="",this.type="info",this.duration=3e3,this.closable=!1,this.closeLabel="关闭提示",this.showIcon=!0,this.size="medium"}get resolvedType(){return Ad(this.type)?this.type:"info"}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){if(this.clearCloseTimer(),!this.open||!Number.isFinite(this.duration)||this.duration<=0)return;const e=this.ownerDocument.defaultView;e&&(this.closeTimer=e.setTimeout(()=>{this.closeTimer=void 0,this.close()},this.duration))}close(){this.open&&(this.clearCloseTimer(),this.open=!1,this.dispatchEvent(new CustomEvent("super-message-close",{detail:{type:this.resolvedType},bubbles:!0,composed:!0})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.open&&this.scheduleClose()}disconnectedCallback(){this.clearCloseTimer(),super.disconnectedCallback()}updated(e){if(!this.open){this.clearCloseTimer();return}(e.has("open")||e.has("duration")||e.has("type"))&&this.scheduleClose()}render(){if(!this.open)return b;const e=this.resolvedType,t=e==="error";return u`
      <div
        class="message"
        part="message"
        role=${t?"alert":"status"}
        aria-live=${t?"assertive":"polite"}
        aria-atomic="true"
      >
        ${this.showIcon?u`
              <span class="icon" part="icon" aria-hidden="true">
                ${Pd[e]}
              </span>
            `:b}
        <span class="content" part="content"><slot>${this.message}</slot></span>
        ${this.closable?u`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            `:b}
      </div>
    `}}Object.defineProperty(Xr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},message:{type:String,reflect:!0},type:{type:String,reflect:!0},duration:{type:Number,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showIcon:{type:Boolean,attribute:"show-icon",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(Xr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Td="super-message",Ld=i=>V(Td,Xr,i);let Id=0;class Jr extends T{get active(){return this._active}set active(e){this.controlledValueGuard.markExternal(e),this.setInternalActive(e)}setInternalActive(e){const t=this._active;this._active=e,this.requestUpdate("active",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-menu-${++Id}`}),Object.defineProperty(this,"openKeys",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(this,"tabbableKey",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_active",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._active,setValue:e=>this.setInternalActive(e)})}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var l,c;const t=this.resolveEntry(e);if(!t||t.item.disabled)return;const r=t.level===0&&this.orientation==="horizontal",s=r?"ArrowLeft":"ArrowUp",o=r?"ArrowRight":"ArrowDown",a=r?"ArrowDown":"ArrowRight",n=r?"ArrowUp":"ArrowLeft";if(e.key===s||e.key===o){e.preventDefault(),this.moveFocus(t,e.key===o?1:-1);return}if(e.key==="Home"||e.key==="End"){e.preventDefault(),this.focusEdge(t,e.key==="Home"?"first":"last");return}if(e.key===a){e.preventDefault(),(l=t.item.children)!=null&&l.length&&this.setOpen(t,!0,"first-child");return}if(e.key===n){e.preventDefault(),this.closeCurrent(t);return}if(e.key==="Enter"||e.key===" "){if(e.preventDefault(),e.repeat)return;(c=t.item.children)!=null&&c.length?this.setOpen(t,!this.openKeys.has(t.item.key),"first-child"):this.selectItem(t.item);return}if(e.key==="Escape"&&t.parentKey){e.preventDefault();const d=this.findEntry(t.parentKey);d&&this.setOpen(d,!1,"self")}}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var s;const t=e.composedPath().find(o=>o instanceof HTMLElement&&!!o.dataset.menuKey);if(!t)return;const r=this.findEntry(t.dataset.menuKey??"");!r||r.item.disabled||((s=r.item.children)!=null&&s.length?this.setOpen(r,!this.openKeys.has(r.item.key)):this.selectItem(r.item))}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.composedPath().find(r=>r instanceof HTMLElement&&!!r.dataset.menuKey);t!=null&&t.dataset.menuKey&&this.tabbableKey!==t.dataset.menuKey&&(this.tabbableKey=t.dataset.menuKey,this.requestUpdate())}}),this.items=[],this._active="",this.orientation="vertical",this.mode="inline",this.collapsed=!1,this.size="medium",this.accessibleLabel="导航菜单"}allEntries(){const e=[],t=(r,s,o,a)=>{r.forEach((n,l)=>{var d;const c=[...a,l];e.push({item:n,level:s,parentKey:o,path:c}),(d=n.children)!=null&&d.length&&t(n.children,s+1,n.key,c)})};return t(this.items,0,null,[]),e}visibleEntries(){const e=[],t=(r,s,o,a)=>{r.forEach((n,l)=>{var d;const c=[...a,l];e.push({item:n,level:s,parentKey:o,path:c}),(d=n.children)!=null&&d.length&&this.openKeys.has(n.key)&&t(n.children,s+1,n.key,c)})};return t(this.items,0,null,[]),e}siblingsOf(e){return this.visibleEntries().filter(t=>t.level===e.level&&t.parentKey===e.parentKey)}isTabbable(e){var o;const r=this.visibleEntries().filter(a=>!a.item.disabled);if(r.length===0)return!1;const s=r.some(a=>a.item.key===this.tabbableKey)?this.tabbableKey:((o=r[0])==null?void 0:o.item.key)??"";return e===s}itemId(e){return`${this.uid}-item-${e.join("-")}`}submenuId(e){return`${this.uid}-menu-${e.length>0?e.join("-"):"root"}`}findEntry(e){return this.visibleEntries().find(t=>t.item.key===e)}get rail(){return this.collapsed&&this.mode==="inline"}descendantKeys(e){const t=[],r=s=>{s==null||s.forEach(o=>{t.push(o.key),r(o.children)})};return r(e.children),t}ancestorKeys(e){const t=[],r=(s,o)=>{var a;for(const n of s){if(n.key===e)return t.push(...o),!0;if((a=n.children)!=null&&a.length&&r(n.children,[...o,n.key]))return!0}return!1};return r(this.items,[]),t}focusItem(e){this.updateComplete.then(()=>{const t=Array.from(this.renderRoot.querySelectorAll("[data-menu-key]")).find(r=>r.dataset.menuKey===e);t==null||t.focus({preventScroll:!0})})}firstEnabledChild(e){var t;return(t=e.item.children)==null?void 0:t.find(r=>!r.disabled)}dispatchOpenChange(e,t){this.dispatchEvent(new CustomEvent("super-menu-open-change",{detail:{key:e,open:t},bubbles:!0,composed:!0}))}setOpen(e,t,r="none"){const s=e.item.key;if(this.openKeys.has(s)===t){if(t&&r==="first-child"){const a=this.firstEnabledChild(e);a&&this.focusItem(a.key)}return}if(t?this.openKeys.add(s):this.openKeys.delete(s),this.dispatchOpenChange(s,t),!t){const a=this.descendantKeys(e.item);(this.tabbableKey===s||a.includes(this.tabbableKey))&&(this.tabbableKey=s),this.requestUpdate(),r==="self"&&this.focusItem(s);return}if(this.requestUpdate(),r==="first-child"){const a=this.firstEnabledChild(e);a&&this.focusItem(a.key)}}selectItem(e){if(e.disabled)return;const t=this.controlledValueGuard.capture();this.setInternalActive(e.key),this.dispatchEvent(new CustomEvent("super-menu-select",{detail:{key:e.key},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(t)}moveFocus(e,t){const r=this.siblingsOf(e).filter(n=>!n.item.disabled);if(r.length===0)return;const s=r.findIndex(n=>n.item.key===e.item.key),o=s<0?t===1?0:r.length-1:(s+t+r.length)%r.length,a=r[o];a&&(this.tabbableKey=a.item.key,this.focusItem(a.item.key))}focusEdge(e,t){const r=this.siblingsOf(e).filter(o=>!o.item.disabled),s=t==="first"?r[0]:r.at(-1);s&&(this.tabbableKey=s.item.key,this.focusItem(s.item.key))}closeCurrent(e){var r;if((r=e.item.children)!=null&&r.length&&this.openKeys.has(e.item.key)){this.setOpen(e,!1,"self");return}if(!e.parentKey)return;const t=this.findEntry(e.parentKey);t&&this.setOpen(t,!1,"self")}resolveEntry(e){const t=e.composedPath().find(a=>a instanceof HTMLElement&&!!a.dataset.menuKey),r=this.renderRoot instanceof ShadowRoot?this.renderRoot.activeElement:null,s=r instanceof HTMLElement?r.dataset.menuKey:void 0,o=(t==null?void 0:t.dataset.menuKey)??s??this.tabbableKey;return o?this.findEntry(o):void 0}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}willUpdate(e){if((e.has("collapsed")||e.has("mode"))&&this.openKeys.clear(),e.has("items")){const t=new Set(this.allEntries().map(r=>r.item.key));for(const r of this.openKeys)t.has(r)||this.openKeys.delete(r)}if(!this.rail&&(e.has("items")||e.has("active")))for(const t of this.ancestorKeys(this.active))this.openKeys.add(t);e.has("active")&&this.active&&(this.tabbableKey=this.active)}renderItem(e){var l;const{item:t,path:r}=e,s=!!((l=t.children)!=null&&l.length),o=s&&this.openKeys.has(t.key),n=this.rail&&!!t.icon;return u`
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
          aria-current=${t.key===this.active?"true":b}
          aria-disabled=${t.disabled?"true":b}
          aria-haspopup=${s?"menu":b}
          aria-expanded=${s?String(o):b}
          aria-controls=${s&&o?this.submenuId(r):b}
          aria-label=${n?t.label:b}
          title=${n?t.label:b}
        >
          ${t.icon?u`<span class="icon" part="icon" aria-hidden="true"
                >${t.icon}</span
              >`:b}
          <span class="label" part="label">${t.label}</span>
          ${s?u`<span class="toggle" part="toggle" aria-hidden="true"
                >▸</span
              >`:b}
        </button>
        ${s&&o?this.renderMenu(t.children??[],e,r):b}
      </li>
    `}renderMenu(e,t,r){const s=t?t.level+1:0,o=t?this.itemId(t.path):void 0;return u`
      <ul
        class=${s===0?"menu":"submenu"}
        part=${s===0?"menu":"submenu"}
        id=${this.submenuId(r)}
        role="menu"
        aria-orientation=${s===0?this.orientation:"vertical"}
        aria-label=${w(s===0&&this.accessibleLabel||void 0)}
        aria-labelledby=${w(o)}
        @keydown=${s===0?this.handleKeyDown:b}
        @click=${s===0?this.handleClick:b}
        @focusin=${s===0?this.handleFocusIn:b}
      >
        ${e.map((a,n)=>this.renderItem({item:a,level:s,parentKey:(t==null?void 0:t.item.key)??null,path:[...r,n]}))}
      </ul>
    `}render(){return this.renderMenu(this.items,null,[])}}Object.defineProperty(Jr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{items:{attribute:!1},active:{type:String,reflect:!0,noAccessor:!0},orientation:{type:String,reflect:!0},mode:{type:String,reflect:!0},collapsed:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0}}});Object.defineProperty(Jr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-menu-gap: 2px;
      --super-menu-item-height: 34px;
      --super-menu-item-padding-block: 6px;
      --super-menu-item-padding-inline: 11px;
      --super-menu-item-gap: 8px;
      --super-menu-font-size: var(--super-font-size-base, 14px);
      --super-menu-color: var(--super-text-color-regular, #4a4441);
      --super-menu-active-color: #245cbe;
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
  `});const Vd="super-menu",Md=i=>V(Vd,Jr,i),Dd=["info","success","warning","error"],jd=["top-right","top-left","bottom-right","bottom-left"],Nd={info:"i",success:"✓",warning:"!",error:"×"},Kd=i=>Dd.includes(i),Rd=i=>jd.includes(i);class Zr extends T{constructor(){super(),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleTitleSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasTitleSlot&&(this.hasTitleSlot=r)}}),Object.defineProperty(this,"handleMessageSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.hasMessageSlot&&(this.hasMessageSlot=r)}}),this.open=!1,this.title="",this.message="",this.type="info",this.placement="top-right",this.duration=4500,this.closable=!0,this.closeLabel="关闭通知",this.showIcon=!0,this.size="medium",this.hasTitleSlot=!1,this.hasMessageSlot=!1}get resolvedType(){return Kd(this.type)?this.type:"info"}get resolvedPlacement(){return Rd(this.placement)?this.placement:"top-right"}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){if(this.clearCloseTimer(),!this.open||!Number.isFinite(this.duration)||this.duration<=0)return;const e=this.ownerDocument.defaultView;e&&(this.closeTimer=e.setTimeout(()=>{this.closeTimer=void 0,this.close()},this.duration))}close(){this.open&&(this.clearCloseTimer(),this.open=!1,this.dispatchEvent(new CustomEvent("super-notification-close",{detail:{type:this.resolvedType},bubbles:!0,composed:!0})))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.open&&this.scheduleClose()}disconnectedCallback(){this.clearCloseTimer(),super.disconnectedCallback()}updated(e){if(!this.open){this.clearCloseTimer();return}(e.has("open")||e.has("duration")||e.has("type"))&&this.scheduleClose()}render(){if(!this.open)return b;const e=this.resolvedType,t=e==="error",r=this.title!==""||this.hasTitleSlot;return u`
      <div
        class="notification"
        part="notification"
        role=${t?"alert":"status"}
        aria-live=${t?"assertive":"polite"}
        aria-atomic="true"
        data-placement=${this.resolvedPlacement}
      >
        ${this.showIcon?u`
              <span class="icon" part="icon" aria-hidden="true">
                ${Nd[e]}
              </span>
            `:b}
        <div class="body">
          <div class="title" part="title" ?hidden=${!r}>
            <slot name="title" @slotchange=${this.handleTitleSlotChange}>
              ${this.hasTitleSlot?b:this.title}
            </slot>
          </div>
          <div class="content" part="content">
            <slot @slotchange=${this.handleMessageSlotChange}>
              ${this.hasMessageSlot?b:this.message}
            </slot>
          </div>
        </div>
        ${this.closable?u`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${s=>{s.stopPropagation(),this.close()}}
              >
                <span aria-hidden="true">×</span>
              </button>
            `:b}
      </div>
    `}}Object.defineProperty(Zr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0},title:{type:String,reflect:!0},message:{type:String,reflect:!0},type:{type:String,reflect:!0},placement:{type:String,reflect:!0},duration:{type:Number,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},showIcon:{type:Boolean,attribute:"show-icon",reflect:!0},size:{type:String,reflect:!0},hasTitleSlot:{state:!0},hasMessageSlot:{state:!0}}});Object.defineProperty(Zr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Fd="super-notification",Bd=i=>V(Fd,Zr,i);class Qr extends T{get page(){return this._page}set page(e){this.pageGuard.markExternal(e),this.setInternalPage(e)}setInternalPage(e){const t=this._page;this._page=e,this.requestUpdate("page",t)}get pageSize(){return this._pageSize}set pageSize(e){this.pageSizeGuard.markExternal(e),this.setInternalPageSize(e)}setInternalPageSize(e){const t=this._pageSize;this._pageSize=e,this.requestUpdate("pageSize",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_page",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_pageSize",{enumerable:!0,configurable:!0,writable:!0,value:10}),Object.defineProperty(this,"pageGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._page,setValue:e=>this.setInternalPage(e)})}),Object.defineProperty(this,"pageSizeGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._pageSize,setValue:e=>this.setInternalPageSize(e)})}),Object.defineProperty(this,"handlePrev",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.goToPage(this.currentPage-1)}}),Object.defineProperty(this,"handleNext",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.goToPage(this.currentPage+1)}}),Object.defineProperty(this,"handlePageClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.currentTarget;this.goToPage(Number(t.dataset.page))}}),Object.defineProperty(this,"handlePageSizeChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled)return;const t=e.currentTarget,r=Math.trunc(Number(t.value));if(!Number.isFinite(r)||r<=0||r===this.normalizedPageSize)return;const s=this.pageGuard.capture(),o=this.pageSizeGuard.capture();this.setInternalPageSize(r),this.setInternalPage(1),this.emitChange(1,r),this.pageGuard.confirm(s),this.pageSizeGuard.confirm(o)}}),Object.defineProperty(this,"handleJumperChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.commitJumper(e.currentTarget)}}),Object.defineProperty(this,"handleJumperKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key==="Enter"&&(e.preventDefault(),this.commitJumper(e.currentTarget))}}),Object.defineProperty(this,"handlePagesKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var a,n;if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const t=Array.from(((a=this.renderRoot)==null?void 0:a.querySelectorAll(".page-button"))??[]);if(t.length===0)return;const r=e.composedPath().find(l=>l instanceof HTMLButtonElement&&l.classList.contains("page-button")),s=Math.max(0,r?t.indexOf(r):0);let o=s;if(e.key==="Home")o=0;else if(e.key==="End")o=t.length-1;else{const l=e.key==="ArrowRight"?1:-1;o=(s+l+t.length)%t.length}e.preventDefault(),(n=t[o])==null||n.focus()}}),this.total=0,this._page=1,this._pageSize=10,this.pageSizes=[],this.size="medium",this.disabled=!1,this.showTotal=!1,this.showJumper=!1,this.simple=!1,this.accessibleLabel="分页导航",this.prevLabel="上一页",this.nextLabel="下一页",this.pageLabel="页码",this.jumperLabel="跳至",this.totalLabel="共",this.itemsLabel="条",this.pageSuffixLabel="页",this.pageSizeLabel="每页条数"}get normalizedTotal(){const e=Math.trunc(Number(this.total));return Number.isFinite(e)?Math.max(0,e):0}get normalizedPageSize(){const e=Math.trunc(Number(this.pageSize));return Number.isFinite(e)?Math.max(1,e):1}get pageCount(){return Math.max(1,Math.ceil(this.normalizedTotal/this.normalizedPageSize))}get currentPage(){const e=Math.trunc(Number(this.page));return Number.isFinite(e)?Math.min(this.pageCount,Math.max(1,e)):1}get sizeOptions(){const e=new Set;return this.pageSizes.forEach(t=>{const r=Math.trunc(Number(t));Number.isFinite(r)&&r>0&&e.add(r)}),e.add(this.normalizedPageSize),Array.from(e).sort((t,r)=>t-r)}get pageEntries(){const e=this.pageCount;if(e<=7)return Array.from({length:e},(a,n)=>n+1);const t=this.currentPage,r=new Set([1,e,t-1,t,t+1]);t<=4&&[2,3,4,5].forEach(a=>r.add(a)),t>=e-3&&[e-4,e-3,e-2,e-1].forEach(a=>r.add(a));const s=Array.from(r).filter(a=>a>=1&&a<=e).sort((a,n)=>a-n),o=[];return s.forEach((a,n)=>{const l=s[n-1];l!==void 0&&a-l>1&&o.push("ellipsis"),o.push(a)}),o}emitChange(e,t){this.dispatchEvent(new CustomEvent("super-pagination-change",{detail:{page:e,pageSize:t},bubbles:!0,composed:!0}))}goToPage(e){if(this.disabled)return;const t=Math.min(this.pageCount,Math.max(1,Math.trunc(e)));if(!Number.isFinite(t)||t===this.currentPage)return;const r=this.pageGuard.capture();this.setInternalPage(t),this.emitChange(t,this.normalizedPageSize),this.pageGuard.confirm(r)}commitJumper(e){if(this.disabled)return;const t=Math.trunc(Number(e.value));if(!Number.isFinite(t)){e.value=String(this.currentPage);return}const r=Math.min(this.pageCount,Math.max(1,t));if(e.value=String(r),r!==this.currentPage){const s=this.pageGuard.capture();this.setInternalPage(r),this.emitChange(r,this.normalizedPageSize),this.pageGuard.confirm(s)}}disconnectedCallback(){this.pageGuard.dispose(),this.pageSizeGuard.dispose(),super.disconnectedCallback()}renderPageEntry(e){if(e==="ellipsis")return u`
        <li class="page-item" part="page-item">
          <span class="ellipsis" part="ellipsis" aria-hidden="true">…</span>
        </li>
      `;const t=e===this.currentPage;return u`
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
    `}renderSimple(){return u`
      <span class="simple-status" part="simple-status" aria-current="page">
        ${this.currentPage}
        <span class="separator" aria-hidden="true">/</span>
        ${this.pageCount}
        ${this.pageSuffixLabel}
      </span>
    `}render(){const e=this.currentPage;return u`
      <nav
        class="pagination"
        part="pagination"
        role="navigation"
        aria-label=${w(this.accessibleLabel||void 0)}
      >
        ${this.showTotal?u`<span class="total" part="total">
              ${this.totalLabel} ${this.normalizedTotal} ${this.itemsLabel}
            </span>`:b}

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

        ${this.simple?this.renderSimple():u`
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

        ${!this.simple&&this.pageSizes.length>0?u`
              <label class="page-size" part="page-size">
                <select
                  class="page-size-select"
                  part="page-size-select"
                  aria-label=${this.pageSizeLabel}
                  .value=${String(this.normalizedPageSize)}
                  ?disabled=${this.disabled}
                  @change=${this.handlePageSizeChange}
                >
                  ${this.sizeOptions.map(t=>u`<option value=${String(t)}>
                      ${t} ${this.itemsLabel}/${this.pageSuffixLabel}
                    </option>`)}
                </select>
              </label>
            `:b}

        ${!this.simple&&this.showJumper?u`
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
                  .value=${ie(String(e))}
                  ?disabled=${this.disabled}
                  @change=${this.handleJumperChange}
                  @keydown=${this.handleJumperKeyDown}
                />
                <span>${this.pageSuffixLabel}</span>
              </label>
            `:b}
      </nav>
    `}}Object.defineProperty(Qr,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{total:{type:Number,reflect:!0},page:{type:Number,reflect:!0,noAccessor:!0},pageSize:{type:Number,attribute:"page-size",reflect:!0,noAccessor:!0},pageSizes:{attribute:!1},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},showTotal:{type:Boolean,attribute:"show-total",reflect:!0},showJumper:{type:Boolean,attribute:"show-jumper",reflect:!0},simple:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},prevLabel:{type:String,attribute:"prev-label",reflect:!0},nextLabel:{type:String,attribute:"next-label",reflect:!0},pageLabel:{type:String,attribute:"page-label",reflect:!0},jumperLabel:{type:String,attribute:"jumper-label",reflect:!0},totalLabel:{type:String,attribute:"total-label",reflect:!0},itemsLabel:{type:String,attribute:"items-label",reflect:!0},pageSuffixLabel:{type:String,attribute:"page-suffix-label",reflect:!0},pageSizeLabel:{type:String,attribute:"page-size-label",reflect:!0}}});Object.defineProperty(Qr,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Gd="super-pagination",Hd=i=>V(Gd,Qr,i),qi="button, a[href], input, select, textarea, summary",Ud=120;let qd=0;class ei extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"panelId",{enumerable:!0,configurable:!0,writable:!0,value:`super-popconfirm-${++qd}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.panelId}-title`}),Object.defineProperty(this,"contentId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.panelId}-content`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnFocusOnClose",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"contentSlotHasContent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&this.startFloating()}}),Object.defineProperty(this,"handleContentSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes().some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.contentSlotHasContent&&(this.contentSlotHasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.resolvedTrigger!=="click")return;const t=this.triggerElement;if(!t||!e.composedPath().includes(t))return;this.clearHoverCloseTimer();const r=!this.open;r||(this.returnFocusOnClose=!0),this.setOpen(r)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.resolvedTrigger!=="click"||e.repeat||e.altKey||e.ctrlKey||e.metaKey||e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;if(!t||this.hasNativeActivation(e,t))return;e.preventDefault();const r=!this.open;r||(this.returnFocusOnClose=!0),this.setOpen(r)}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.resolvedTrigger!=="hover"||this.isInsidePopconfirm(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.resolvedTrigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.resolvedTrigger!=="hover"||this.isInsidePopconfirm(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.setOpen(!1))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||e.defaultPrevented||(e.preventDefault(),this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.focusTrigger(),this.setOpen(!1))}}),Object.defineProperty(this,"handleConfirm",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.confirmLoading)return;const t=new CustomEvent("super-popconfirm-confirm",{detail:{originalEvent:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.returnFocusOnClose=!1,this.focusTrigger(),this.setOpen(!1))}}),Object.defineProperty(this,"handleCancel",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||(this.dispatchEvent(new CustomEvent("super-popconfirm-cancel",{detail:{originalEvent:e},bubbles:!0,composed:!0})),this.returnFocusOnClose=!0,this.setOpen(!1))}}),this.title="",this.content="",this.placement="top",this.trigger="click",this.confirmText="确定",this.cancelText="取消",this.confirmLoading=!1,this.disabled=!1,this.icon="?",this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.size="medium"}get panel(){return this.renderRoot.querySelector('[part="popconfirm"]')}get cancelButton(){return this.renderRoot.querySelector('[part="cancel"]')}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}get resolvedTrigger(){return this.trigger==="hover"?"hover":"click"}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},Ud)}setOpen(e){if(e&&this.disabled||this.open===e)return;const t=this.controlledOpenGuard.capture();this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-popconfirm-open-change",{detail:{open:e},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(t)}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}isInsidePopconfirm(e){var t;return e instanceof Node&&(this===e||this.contains(e)||!!((t=this.shadowRoot)!=null&&t.contains(e)))}syncTriggerAria(){var t;const e=this.triggerElement;e&&(e.setAttribute("aria-expanded",this.open?"true":"false"),e.setAttribute("aria-haspopup","dialog"),this.open?e.setAttribute("aria-controls",this.panelId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls")},e.addEventListener("click",this.handleTriggerClick),e.addEventListener("keydown",this.handleTriggerKeydown),e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave),e.addEventListener("focusin",this.handleFocusIn),e.addEventListener("focusout",this.handleFocusOut),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleTriggerClick),e.removeEventListener("keydown",this.handleTriggerKeydown),e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave),e.removeEventListener("focusin",this.handleFocusIn),e.removeEventListener("focusout",this.handleFocusOut),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}attachPanelListeners(){const e=this.panel;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave),e.addEventListener("focusin",this.handlePanelFocusIn),e.addEventListener("focusout",this.handlePanelFocusOut))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),e.removeEventListener("focusin",this.handlePanelFocusIn),e.removeEventListener("focusout",this.handlePanelFocusOut),this.panelElement=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.panel;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=ht(e,t,{placement:this.placement,offset:8}))}activateOpenState(){var e;this.attachPanelListeners(),this.startFloating(),this.syncTriggerAria(),(e=this.cancelButton)==null||e.focus({preventScroll:!0})}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.syncTriggerAria()}hasNativeActivation(e,t){return t.matches(qi)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(qi))}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.isConnected&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.controlledOpenGuard.dispose(),this.deactivateOpenState(),this.unbindTrigger(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(){this.disabled&&this.open&&(this.clearHoverCloseTimer(),this.returnFocusOnClose=!1,this.setInternalOpen(!1))}updated(e){this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled"))&&(this.deactivateOpenState(),t&&this.returnFocusOnClose&&(this.returnFocusOnClose=!1,this.focusTrigger()));return}if(t){this.returnFocusOnClose=!1,this.activateOpenState();return}e.has("placement")&&this.startFloating()}render(){return u`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?u`
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
              ${this.icon?u`
                    <span class="icon" part="icon" aria-hidden="true">
                      ${this.icon}
                    </span>
                  `:b}
              <div class="body">
                <div class="title" part="title" id=${this.titleId}>
                  ${this.title!==""?this.title:u`<span class="visually-hidden">确认操作</span>`}
                </div>
                <div class="content" part="content" id=${this.contentId}>
                  <slot
                    name="content"
                    @slotchange=${this.handleContentSlotChange}
                  >${this.contentSlotHasContent?b:this.content}</slot>
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
          `:b}
    `}}Object.defineProperty(ei,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,noAccessor:!0},title:{type:String,reflect:!0},content:{type:String,reflect:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},confirmText:{type:String,attribute:"confirm-text",reflect:!0},cancelText:{type:String,attribute:"cancel-text",reflect:!0},confirmLoading:{type:Boolean,attribute:"confirm-loading",reflect:!0},disabled:{type:Boolean,reflect:!0},icon:{type:String,reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(ei,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Yd="super-popconfirm",Wd=i=>V(Yd,ei,i),Yi="button, a[href], input, select, textarea, summary",Xd=120;let Jd=0;class ti extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"popoverId",{enumerable:!0,configurable:!0,writable:!0,value:`super-popover-${++Jd}`}),Object.defineProperty(this,"titleId",{enumerable:!0,configurable:!0,writable:!0,value:`${this.popoverId}-title`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"hoverCloseTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"focusPanelOnOpen",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"contentSlotHasContent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"triggerAria",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.bindTrigger(this.getSlottedTrigger()),this.open&&(this.triggerElement?this.startFloating():this.destroyFloating())}}),Object.defineProperty(this,"handleContentSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())});r!==this.contentSlotHasContent&&(this.contentSlotHasContent=r,this.requestUpdate())}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click")return;const t=this.triggerElement;if(!t||!e.composedPath().includes(t))return;this.clearHoverCloseTimer();const r=!this.open;this.setOpen(r,{focusPanel:r&&e.detail===0})}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click"||e.repeat||e.altKey||e.ctrlKey||e.metaKey||e.key!=="Enter"&&e.key!==" ")return;const t=this.triggerElement;if(!t||this.hasNativeActivation(e,t))return;e.preventDefault();const r=!this.open;this.setOpen(r,{focusPanel:r})}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearHoverCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||this.isInsidePopover(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleHoverClose()}}),Object.defineProperty(this,"handlePanelFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.clearHoverCloseTimer()}}),Object.defineProperty(this,"handlePanelFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.disabled||this.trigger!=="hover"||this.isInsidePopover(e.relatedTarget)||this.scheduleHoverClose()}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnOutsideClick||e.composedPath().includes(this)||(this.clearHoverCloseTimer(),this.setOpen(!1))}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||!this.closeOnEscape||e.key!=="Escape"||(e.preventDefault(),this.clearHoverCloseTimer(),this.setOpen(!1),this.open||this.focusTrigger())}}),this.placement="bottom",this.trigger="click",this.title="",this.content="",this.disabled=!1,this.arrow=!0,this.offset=8,this.width=280,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.size="medium"}get panel(){return this.renderRoot.querySelector('[part="popover"]')}getSlottedTrigger(){const e=this.renderRoot.querySelector("slot:not([name])");return(e==null?void 0:e.assignedElements({flatten:!0})[0])??null}clearHoverCloseTimer(){const e=this.ownerDocument.defaultView;this.hoverCloseTimer!==void 0&&(e==null||e.clearTimeout(this.hoverCloseTimer),this.hoverCloseTimer=void 0)}scheduleHoverClose(){this.clearHoverCloseTimer();const e=this.ownerDocument.defaultView;if(!e){this.setOpen(!1);return}this.hoverCloseTimer=e.setTimeout(()=>{this.hoverCloseTimer=void 0,this.setOpen(!1)},Xd)}setOpen(e,t={}){if(e&&this.disabled||this.open===e)return;const r=this.controlledOpenGuard.capture();this.focusPanelOnOpen=e&&!!t.focusPanel,this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-popover-open-change",{detail:{open:e},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(r)}focusTrigger(){var e;(e=this.triggerElement)==null||e.focus({preventScroll:!0})}isInsidePopover(e){var t;return e instanceof Node&&(this===e||this.contains(e)||!!((t=this.shadowRoot)!=null&&t.contains(e)))}syncTriggerAria(){var t;const e=this.triggerElement;e&&(e.setAttribute("aria-expanded",this.open?"true":"false"),e.setAttribute("aria-haspopup","dialog"),this.open?e.setAttribute("aria-controls",this.popoverId):(t=this.triggerAria)!=null&&t.controls?e.setAttribute("aria-controls",this.triggerAria.controls):e.removeAttribute("aria-controls"))}restoreTriggerAria(){const e=this.triggerElement,t=this.triggerAria;if(!e||!t)return;const r=(s,o)=>{o===null?e.removeAttribute(s):e.setAttribute(s,o)};r("aria-expanded",t.expanded),r("aria-haspopup",t.haspopup),r("aria-controls",t.controls)}bindTrigger(e){if(e===this.triggerElement){this.syncTriggerAria();return}this.unbindTrigger(),e&&(this.triggerElement=e,this.triggerAria={expanded:e.getAttribute("aria-expanded"),haspopup:e.getAttribute("aria-haspopup"),controls:e.getAttribute("aria-controls")},e.addEventListener("click",this.handleClick),e.addEventListener("keydown",this.handleTriggerKeydown),e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave),e.addEventListener("focusin",this.handleFocusIn),e.addEventListener("focusout",this.handleFocusOut),this.syncTriggerAria())}unbindTrigger(){const e=this.triggerElement;e&&(e.removeEventListener("click",this.handleClick),e.removeEventListener("keydown",this.handleTriggerKeydown),e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave),e.removeEventListener("focusin",this.handleFocusIn),e.removeEventListener("focusout",this.handleFocusOut),this.restoreTriggerAria(),this.triggerElement=null,this.triggerAria=null)}attachPanelListeners(){const e=this.panel;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave),e.addEventListener("focusin",this.handlePanelFocusIn),e.addEventListener("focusout",this.handlePanelFocusOut))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),e.removeEventListener("focusin",this.handlePanelFocusIn),e.removeEventListener("focusout",this.handlePanelFocusOut),this.panelElement=null)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.panelElement;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=ht(e,t,{placement:this.placement,offset:this.offset}))}activateOpenState(){var e;this.attachPanelListeners(),this.startFloating(),this.syncTriggerAria(),this.focusPanelOnOpen&&(this.focusPanelOnOpen=!1,(e=this.panelElement)==null||e.focus({preventScroll:!0}))}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.focusPanelOnOpen=!1,this.syncTriggerAria()}hasNativeActivation(e,t){return t.matches(Yi)?!0:e.composedPath().some(r=>r instanceof HTMLElement&&r!==t&&r.matches(Yi))}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&(this.bindTrigger(this.getSlottedTrigger()),this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()}))}disconnectedCallback(){this.clearHoverCloseTimer(),this.controlledOpenGuard.dispose(),this.deactivateOpenState(),this.unbindTrigger(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.clearHoverCloseTimer(),this.setInternalOpen(!1),this.focusPanelOnOpen=!1),e.has("trigger")&&e.get("trigger")!==void 0&&this.open&&(this.clearHoverCloseTimer(),this.setInternalOpen(!1),this.focusPanelOnOpen=!1)}updated(e){var r;this.syncTriggerAria();const t=e.has("open");if(!this.open){(t||e.has("disabled")||e.has("trigger"))&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}e.has("placement")||e.has("offset")?this.startFloating():e.has("width")&&((r=this.floating)==null||r.update())}render(){const e=Number.isFinite(this.width)&&this.width>0?`${Math.round(this.width)}px`:"auto",t=this.contentSlotHasContent;return u`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?u`
            <div
              class="popover"
              part="popover"
              id=${this.popoverId}
              role="dialog"
              tabindex="-1"
              data-placement=${this.placement}
              aria-labelledby=${this.title?this.titleId:b}
              aria-label=${!this.title&&!t&&this.content?this.content:b}
              style=${`inline-size: ${e}`}
            >
              ${this.title?u`
                    <div class="title" part="title" id=${this.titleId}>
                      ${this.title}
                    </div>
                  `:b}
              <div class="content" part="content">
                <slot
                  name="content"
                  @slotchange=${this.handleContentSlotChange}
                >${t?b:this.content}</slot>
              </div>
              ${this.arrow?u`
                    <span
                      class="arrow"
                      part="arrow"
                      aria-hidden="true"
                    ></span>
                  `:b}
            </div>
          `:b}
    `}}Object.defineProperty(ti,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{open:{type:Boolean,reflect:!0,noAccessor:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},title:{type:String,reflect:!0},content:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},arrow:{type:Boolean,reflect:!0},offset:{type:Number,reflect:!0},width:{type:Number,reflect:!0},closeOnOutsideClick:{type:Boolean,attribute:"close-on-outside-click",reflect:!0},closeOnEscape:{type:Boolean,attribute:"close-on-escape",reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(ti,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Zd="super-popover",Qd=i=>V(Zd,ti,i),hr=42,Wi=2*Math.PI*hr;class ri extends T{constructor(){super(),Object.defineProperty(this,"customText",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"syncCustomText",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const r=e.currentTarget.assignedNodes({flatten:!0}).map(s=>s.textContent??"").join("").trim();r!==this.customText&&(this.customText=r,this.requestUpdate())}}),this.value=0,this.max=100,this.variant="line",this.status="default",this.size="medium",this.showText=!0,this.format=void 0,this.indeterminate=!1,this.striped=!1,this.accessibleLabel=""}get safeMax(){return Number.isFinite(this.max)?this.max:0}get clampedValue(){const e=Number.isFinite(this.value)?this.value:0;return Math.min(Math.max(e,0),Math.max(this.safeMax,0))}get percent(){return this.safeMax<=0?0:this.clampedValue/this.safeMax*100}get progressText(){return this.format?this.format(this.clampedValue,this.safeMax):this.indeterminate?"":`${Math.round(this.percent)}%`}renderLine(){const e=this.indeterminate?{}:{inlineSize:`${this.percent}%`};return u`
      <div class="track" part="track">
        <div class="bar" part="bar" style=${oe(e)}></div>
      </div>
    `}renderCircle(){const e=this.indeterminate?void 0:Wi*(1-this.percent/100);return u`
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
          r=${hr}
        ></circle>
        <circle
          class="circle-bar"
          part="circle-bar"
          cx="50"
          cy="50"
          r=${hr}
          stroke-dasharray=${w(this.indeterminate?void 0:Wi)}
          stroke-dashoffset=${w(e)}
        ></circle>
      </svg>
    `}render(){const e=this.progressText,t=this.indeterminate?void 0:this.customText||e||void 0;return u`
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
        ${this.showText?u`
              <span class="text" part="text">
                <slot @slotchange=${this.syncCustomText}>${e}</slot>
              </span>
            `:b}
      </div>
    `}}Object.defineProperty(ri,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0},max:{type:Number,reflect:!0},variant:{type:String,reflect:!0},status:{type:String,reflect:!0},size:{type:String,reflect:!0},showText:{type:Boolean,attribute:"show-text",reflect:!0},format:{attribute:!1},indeterminate:{type:Boolean,reflect:!0},striped:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ri,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const eh="super-progress",th=i=>V(eh,ri,i);class ii extends T{get checked(){return this._checked}set checked(e){this.controlledValueGuard.markExternal(e),this.setInternalChecked(e)}setInternalChecked(e){const t=this._checked;this._checked=e,this.requestUpdate("checked",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_checked",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._checked,setValue:e=>this.setInternalChecked(e)})}),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(r=>!r.disabled);return(e.find(r=>r.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,this.controlledValueGuard.dispose(),super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&e.setInternalChecked(!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){if(this.disabled||this.checked)return;const t=this.groupMembers().filter(s=>s!==this&&s.checked).map(s=>({radio:s,snapshot:s.controlledValueGuard.capture()})),r=this.controlledValueGuard.capture();this.setInternalChecked(!0),this.uncheckGroupPeers(),this.emitChange(e),this.controlledValueGuard.confirm(r),t.forEach(({radio:s,snapshot:o})=>{s.controlledValueGuard.confirm(o)})}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(n=>!n.disabled);if(t.length<2)return;e.preventDefault();const r=Math.max(0,t.indexOf(this)),s=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,o=(r+s+t.length)%t.length,a=t[o];a.selectFromInteraction(e),a.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked,r=t?[]:this.groupMembers().filter(a=>a!==this&&a.checked).map(a=>({radio:a,snapshot:a.controlledValueGuard.capture()})),s=t?null:this.controlledValueGuard.capture();t||(this.setInternalChecked(!0),this.uncheckGroupPeers());const o=new Event("change");super.click(),t||(this.emitChange(o),this.controlledValueGuard.confirm(s),r.forEach(({radio:a,snapshot:n})=>{a.controlledValueGuard.confirm(n)}))}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return u`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${ie(this.checked)}
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
        ${this.helperText?u`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:b}
      </span>
    `}}Object.defineProperty(ii,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0,noAccessor:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ii,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const rh="super-radio",ih=i=>V(rh,ii,i),er=(i,e,t)=>Math.min(t,Math.max(e,i));class si extends T{get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>this.setInternalValue(e)})}),Object.defineProperty(this,"hoverValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"iconNodes",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"hasCustomIcon",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.max=5,this.allowHalf=!1,this.readonly=!1,this.disabled=!1,this.size="medium",this.validation="none",this.clearable=!1,this.accessibleLabel="评分",this.clearLabel="清除评分"}get resolvedMax(){const e=Number.isFinite(this.max)?Math.trunc(this.max):5;return Math.max(1,e)}get step(){return this.allowHalf?.5:1}get resolvedValue(){const e=Number.isFinite(this.value)?this.value:0,t=Math.round(e/this.step)*this.step;return er(Number(t.toFixed(1)),0,this.resolvedMax)}get isInteractive(){return!this.disabled&&!this.readonly}emitChange(e){this.dispatchEvent(new CustomEvent("super-rate-change",{detail:{value:e},bubbles:!0,composed:!0}))}commit(e){if(!this.isInteractive)return;const t=er(Number((Math.round(e/this.step)*this.step).toFixed(1)),0,this.resolvedMax),r=this.controlledValueGuard.capture();this.setInternalValue(t),this.emitChange(t),this.controlledValueGuard.confirm(r)}valueForPointer(e){const t=e.currentTarget,r=t.getBoundingClientRect(),s=r.width?(e.clientX-r.left)/r.width:1,o=Number(t.dataset.index??0);return this.allowHalf&&s<=.5?o+.5:o+1}handleStarClick(e){if(!this.isInteractive)return;const t=this.valueForPointer(e);this.focus(),this.commit(this.clearable&&t===this.resolvedValue?0:t)}handlePointerMove(e){if(!this.isInteractive)return;const t=this.valueForPointer(e);t!==this.hoverValue&&(this.hoverValue=t,this.requestUpdate())}handlePointerLeave(){this.hoverValue!==void 0&&(this.hoverValue=void 0,this.requestUpdate())}handleIconSlotChange(e){const r=e.currentTarget.assignedNodes({flatten:!0}).filter(s=>{var o;return s.nodeType===Node.ELEMENT_NODE||!!((o=s.textContent)!=null&&o.trim())});this.iconNodes=r.map(s=>{const o=s.cloneNode(!0);return o instanceof Element&&(o.removeAttribute("slot"),o.removeAttribute("id")),o}),this.hasCustomIcon=this.iconNodes.length>0,this.requestUpdate()}focus(e){var r;const t=(r=this.renderRoot)==null?void 0:r.querySelector('[role="slider"]');if(t){t.focus(e);return}super.focus(e)}blur(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector('[role="slider"]'))==null||t.blur()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}updated(){this.renderRoot.querySelectorAll(".icon-copy").forEach(t=>{t.replaceChildren(...this.iconNodes.map(r=>r.cloneNode(!0))),this.hasCustomIcon||(t.textContent="★")})}handleKeydown(e){if(!this.isInteractive)return;const t=this.resolvedValue;let r;switch(e.key){case"ArrowRight":case"ArrowUp":r=t+this.step;break;case"ArrowLeft":case"ArrowDown":r=t-this.step;break;case"Home":r=0;break;case"End":r=this.resolvedMax;break;case"Delete":case"Backspace":this.clearable&&(r=0);break;default:if(/^[0-9]$/.test(e.key)){const s=Number(e.key);r=er(s,0,this.resolvedMax)}}r!==void 0&&(e.preventDefault(),this.commit(r))}render(){const e=this.hoverValue??this.resolvedValue,t=this.resolvedValue;return u`
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
        ${Array.from({length:this.resolvedMax},(r,s)=>{const o=e>=s+1,a=!o&&this.allowHalf&&e>=s+.5;return u`
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
                ${o||a?u`<span class="icon-copy active-copy" aria-hidden="true">★</span>`:b}
              </span>
            </span>
          `})}
      </div>
    `}}Object.defineProperty(si,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0,noAccessor:!0},max:{type:Number,reflect:!0},allowHalf:{type:Boolean,attribute:"allow-half",reflect:!0},readonly:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},clearable:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"}}});Object.defineProperty(si,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const sh="super-rate",oh=i=>V(sh,si,i),ah=(i,e)=>i.length===e.length&&i.every((t,r)=>t===e[r]);class oi extends T{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"valueIsControlled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"optionObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"optionIds",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"nextOptionId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"initializedOptions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"hasConnected",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"selectedAttributeStates",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"typeahead",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"typeaheadTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>{this.setInternalValue(e),this.syncSourceSelection(this.options,this.value)},clone:e=>Array.isArray(e)?[...e]:e,equals:(e,t)=>this.valueEqual(e,t)})}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"handleOptionMutations",{enumerable:!0,configurable:!0,writable:!0,value:e=>{let t=!1,r=!1,s;const o=n=>n instanceof HTMLOptionElement?[n]:n instanceof HTMLElement?Array.from(n.querySelectorAll("option")):[],a=new Set(this.collectOptions().map(n=>n.source));e.forEach(n=>{if(n.type==="attributes"){if((n.target instanceof HTMLOptionElement||n.target instanceof HTMLOptGroupElement)&&(t=!0),n.attributeName==="selected"&&n.target instanceof HTMLOptionElement){const l=n.target.hasAttribute("selected");a.has(n.target)&&(this.selectedAttributeStates.set(n.target,l),r=!0,n.target.selected=l,l&&(s=n.target))}return}(n.type==="characterData"||n.type==="childList")&&(t=!0,n.addedNodes.forEach(l=>{o(l).forEach(c=>{if(!a.has(c))return;const d=c.hasAttribute("selected"),p=this.selectedAttributeStates.has(c),m=p&&this.selectedAttributeStates.get(c)!==d;(!p&&d||m)&&(c.selected=d,r=!0,d&&(s=c)),this.selectedAttributeStates.set(c,d)})}))}),t&&this.syncOptions(r,s,r)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),this.multiple=!1,this.searchable=!1,this.clearable=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.loading=!1,this.name="",this.size="medium",this.variant="default",this.validation="none",this.placeholder="请选择",this.helperText="",this.accessibleLabel="",this.clearLabel="清空选择",this.removeLabel="移除",this.searchLabel="搜索选项",this.searchPlaceholder="搜索并选择",this.emptyText="暂无可选项",this.loadingText="加载中...",this.options=[],this.query="",this.activeIndex=-1,this.hasPrefix=!1}get value(){return this._value}set value(e){this.valueIsControlled=!0,this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}get comboboxElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('[role="combobox"]'))??null}get selectedValues(){const e=Array.isArray(this.value)?this.value:this.value?[this.value]:[];return Array.from(new Set(e))}get selectedOptions(){return this.selectedValues.map(t=>this.options.find(r=>r.value===t)).filter(t=>t!==void 0)}get filteredOptions(){const e=this.searchable?this.query.trim().toLocaleLowerCase():"";return this.options.filter(t=>t.hidden?!1:e?t.label.toLocaleLowerCase().includes(e)||t.value.toLocaleLowerCase().includes(e):!0)}get hasValue(){return this.selectedValues.length>0}get hasMutableValue(){return this.selectedOptions.some(e=>!e.disabled)}get activeOption(){return this.filteredOptions[this.activeIndex]}get describedBy(){return this.helperText?"super-select-helper":void 0}get invalid(){return this.validation==="error"?"true":void 0}get comboboxLabel(){if(this.accessibleLabel)return this.accessibleLabel;const e=this.selectedOptions.map(t=>t.label);return e.length?e.join("、"):this.placeholder}getOptionId(e){const t=this.optionIds.get(e);if(t)return t;const r=`super-select-option-${this.nextOptionId++}`;return this.optionIds.set(e,r),r}collectOptions(){const e=[],t=(r,s,o)=>{e.push({source:r,id:this.getOptionId(r),value:r.value,label:(r.label||r.textContent||"").trim(),disabled:r.disabled||!!(s!=null&&s.disabled),hidden:r.hidden||!!(s!=null&&s.hidden),group:(s==null?void 0:s.label)||void 0,groupKey:o})};return Array.from(this.children).forEach((r,s)=>{if(r instanceof HTMLOptionElement){t(r);return}r instanceof HTMLOptGroupElement&&Array.from(r.children).forEach(o=>{o instanceof HTMLOptionElement&&t(o,r,`super-select-group-${s}`)})}),e}normalizeValue(e,t=this.options,r=!1){const s=new Set(t.map(n=>n.value)),o=n=>{const l=Array.from(new Set(n.filter(Boolean)));return t.length&&!r?l.filter(c=>s.has(c)):l};if(this.multiple){const n=Array.isArray(e)?e:e?[e]:[];return o(n)}const a=Array.isArray(e)?e[0]??"":e;return!a||t.length&&!r&&!s.has(a)?"":a}valueEqual(e,t){return Array.isArray(e)&&Array.isArray(t)?ah(e,t):e===t}syncSourceSelection(e=this.options,t=this.value){const r=new Set(Array.isArray(t)?t:t?[t]:[]);e.forEach(s=>{s.source.selected=r.has(s.value)})}syncOptions(e,t,r=!1){var l,c;const s=(l=this.activeOption)==null?void 0:l.id,o=this.collectOptions(),a=e&&(r||this.initializedOptions||!this.valueIsControlled);let n=this.value;if(a){const d=o.filter(p=>p.source.selected);if(this.multiple)n=d.map(p=>p.value);else{const p=t?o.find(m=>m.source===t):void 0;n=(p==null?void 0:p.value)??((c=d.at(-1))==null?void 0:c.value)??""}}n=this.normalizeValue(n,o,this.valueIsControlled&&!a),this.options=o,this.valueEqual(this.value,n)||this.setInternalValue(n),this.syncSourceSelection(o,n),o.length>0&&(this.initializedOptions=!0),s&&(this.activeIndex=this.filteredOptions.findIndex(d=>d.id===s&&!d.disabled)),this.realignActiveOption()}refreshOptions(){this.syncOptions(!0,void 0,!0),this.rememberSelectedAttributeStates()}realignActiveOption(){if(!this.open||this.loading){this.activeIndex=-1;return}const e=this.filteredOptions,t=e[this.activeIndex];if(t&&!t.disabled)return;const r=new Set(this.selectedValues),s=e.findIndex(o=>r.has(o.value)&&!o.disabled);this.activeIndex=s>=0?s:e.findIndex(o=>!o.disabled)}rememberSelectedAttributeStates(){this.collectOptions().forEach(({source:e})=>{this.selectedAttributeStates.set(e,e.hasAttribute("selected"))})}reconcileDisconnectedSelectedAttributes(){let e=!1,t;return this.collectOptions().forEach(({source:r})=>{const s=r.hasAttribute("selected"),o=this.selectedAttributeStates.has(r);(o&&this.selectedAttributeStates.get(r)!==s||!o&&s)&&(r.selected=s,e=!0,s&&(t=r)),this.selectedAttributeStates.set(r,s)}),{changed:e,preferredOption:t}}connectedCallback(){var r;super.connectedCallback();const e=this.hasConnected?this.reconcileDisconnectedSelectedAttributes():{changed:!1},t=(r=this.ownerDocument.defaultView)==null?void 0:r.MutationObserver;t&&(this.optionObserver=new t(this.handleOptionMutations),this.optionObserver.observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["value","label","disabled","selected","hidden"]})),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.syncOptions(e.changed||!this.initializedOptions,e.preferredOption,e.changed),this.rememberSelectedAttributeStates(),this.hasConnected=!0}disconnectedCallback(){var r,s;const e=((r=this.optionObserver)==null?void 0:r.takeRecords())??[];e.length>0&&this.handleOptionMutations(e),this.rememberSelectedAttributeStates(),(s=this.optionObserver)==null||s.disconnect(),this.optionObserver=null,this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0);const t=this.ownerDocument.defaultView;this.typeaheadTimer!==void 0&&(t==null||t.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=void 0),this.typeahead="",this.controlledValueGuard.dispose(),this.controlledOpenGuard.dispose(),super.disconnectedCallback()}willUpdate(e){if(e.has("multiple")||e.has("value")){const t=this.normalizeValue(this.value,this.options,this.valueIsControlled);this.valueEqual(this.value,t)||this.setInternalValue(t),this.syncSourceSelection(this.options,t)}if(this.disabled&&this.open&&this.setInternalOpen(!1),!this.open){this.query="",this.activeIndex=-1;return}(e.has("open")||e.has("loading")||e.has("searchable")||e.has("multiple")||e.has("value"))&&this.realignActiveOption()}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this.comboboxElement)==null?void 0:t.focus()}),e.has("activeIndex")&&this.open&&this.activeIndex>=0&&this.updateComplete.then(()=>{const t=this.renderRoot.querySelector('[role="option"][data-active]');typeof(t==null?void 0:t.scrollIntoView)=="function"&&t.scrollIntoView({block:"nearest"})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-select-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,values:[...this.selectedValues],name:this.name,selectedOptions:this.selectedOptions.map(t=>t.source),originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){if(e&&this.disabled||this.open===e)return;e&&this.syncOptions(!1);const s=this.controlledOpenGuard.capture();this.setInternalOpen(e),e?this.realignActiveOption():(this.query="",this.activeIndex=-1),this.dispatchEvent(new CustomEvent("super-select-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(s),e&&this.updateComplete.then(()=>{var o;return(o=this.comboboxElement)==null?void 0:o.focus()})}selectOption(e,t){if(e.disabled||this.disabled||this.readOnly||this.loading)return;const r=this.controlledValueGuard.capture();if(this.multiple){const o=this.selectedValues;this.setInternalValue(o.includes(e.value)?o.filter(a=>a!==e.value):[...o,e.value]),this.syncSourceSelection(this.options,this.value),this.emitChange(t),this.controlledValueGuard.confirm(r);return}const s=this.value!==e.value;this.setInternalValue(e.value),this.syncSourceSelection(this.options,this.value),s&&this.emitChange(t),this.setOpen(!1,"selection",t),this.controlledValueGuard.confirm(r)}clearSelection(e){var a;if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readOnly||this.loading||!this.hasValue)return;const t=Array.isArray(this.value)?[...this.value]:this.value,r=this.selectedOptions.filter(n=>n.disabled).map(n=>n.value),s=this.multiple?r:r[0]??"";if(this.valueEqual(this.value,s))return;const o=this.controlledValueGuard.capture();this.setInternalValue(s),this.syncSourceSelection(this.options,this.value),this.dispatchEvent(new CustomEvent("super-select-clear",{detail:{previousValue:t,originalEvent:e},bubbles:!0,composed:!0})),this.emitChange(e),this.controlledValueGuard.confirm(o),(a=this.comboboxElement)==null||a.focus()}removeValue(e,t){var o;t.preventDefault(),t.stopPropagation();const r=this.options.find(a=>a.value===e);if(!this.multiple||this.disabled||this.readOnly||this.loading||r!=null&&r.disabled)return;const s=this.controlledValueGuard.capture();this.setInternalValue(this.selectedValues.filter(a=>a!==e)),this.syncSourceSelection(this.options,this.value),this.emitChange(t),this.controlledValueGuard.confirm(s),(o=this.comboboxElement)==null||o.focus()}moveActive(e){var s;const t=this.filteredOptions;if(!t.length){this.activeIndex=-1;return}let r=this.activeIndex;for(let o=0;o<t.length;o+=1)if(r=(r+e+t.length)%t.length,!((s=t[r])!=null&&s.disabled)){this.activeIndex=r;return}this.activeIndex=-1}moveToBoundary(e){const t=this.filteredOptions,r=e==="start"?t.map((s,o)=>o):t.map((s,o)=>o).reverse();this.activeIndex=r.find(s=>{var o;return!((o=t[s])!=null&&o.disabled)})??-1}handleTypeahead(e,t){const r=this.ownerDocument.defaultView;this.typeahead+=e.toLocaleLowerCase(),this.typeaheadTimer!==void 0&&(r==null||r.clearTimeout(this.typeaheadTimer)),this.typeaheadTimer=r==null?void 0:r.setTimeout(()=>{this.typeahead="",this.typeaheadTimer=void 0},650),this.open||this.setOpen(!0,"keyboard",t);const s=this.filteredOptions,o=Math.max(this.activeIndex+1,0),n=[...s.slice(o),...s.slice(0,o)].find(l=>!l.disabled&&l.label.toLocaleLowerCase().startsWith(this.typeahead));n&&(this.activeIndex=s.indexOf(n))}handleKeyDown(e){var s;const t=e.composedPath()[0];if(t instanceof HTMLElement&&(t.classList.contains("tag-remove")||t.classList.contains("clear-button"))||this.disabled)return;if(!this.searchable&&e.key.length===1&&e.key!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),this.handleTypeahead(e.key,e);return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const o=e.key==="ArrowDown"?1:-1;this.open?this.moveActive(o):(this.setOpen(!0,"keyboard",e),this.realignActiveOption());return}const r=t instanceof HTMLInputElement&&t.classList.contains("search");if((e.key==="Home"||e.key==="End")&&!r){if(!this.open)return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"||e.key===" "&&!this.searchable){e.preventDefault(),this.open?this.activeOption&&this.selectOption(this.activeOption,e):this.setOpen(!0,"keyboard",e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"escape",e),(s=this.comboboxElement)==null||s.focus();return}e.key==="Tab"&&this.open&&this.setOpen(!1,"keyboard",e)}handleControlClick(e){if(this.disabled)return;const t=e.composedPath()[0];this.searchable&&this.open&&t instanceof HTMLInputElement&&t.classList.contains("search")||this.setOpen(!this.open,"trigger",e)}handleSearch(e){const t=e.currentTarget;this.query=t.value,this.open||this.setOpen(!0,"search",e),this.activeIndex=this.filteredOptions.findIndex(r=>!r.disabled),this.dispatchEvent(new CustomEvent("super-select-search",{detail:{query:this.query,originalEvent:e},bubbles:!0,composed:!0}))}handleSearchFocus(e){this.open||e.currentTarget.select()}handlePrefixSlotChange(e){const t=e.currentTarget;this.hasPrefix=t.assignedNodes({flatten:!0}).some(r=>{var s;return r.nodeType!==Node.TEXT_NODE||!!((s=r.textContent)!=null&&s.trim())})}click(){var r;if(this.disabled)return;const e=(r=this.renderRoot)==null?void 0:r.querySelector(".control");if(e){e.click();return}const t=new MouseEvent("click");super.click(),this.setOpen(!this.open,"trigger",t)}focus(e){const t=this.comboboxElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.comboboxElement;if(e){e.blur();return}super.blur()}validationSymbol(){switch(this.validation){case"success":return"✓";case"warning":return"!";case"error":return"×";case"info":return"i";default:return""}}renderTags(){return this.multiple?u`
      <span class="tags" part="tags">
        ${this.selectedOptions.map(e=>u`
          <span class="tag" part="tag">
            <span class="tag-label">${e.label}</span>
            ${this.readOnly||this.disabled||this.loading||e.disabled?b:u`<button
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
    `:b}renderDefaultTrigger(){if(this.multiple&&this.hasValue)return b;const e=this.selectedOptions[0];return e?u`<span part="value">${e.label}</span>`:u`<span class="placeholder" part="placeholder">${this.placeholder}</span>`}renderCombobox(){var r,s;const e=this.open&&!this.loading?(r=this.activeOption)==null?void 0:r.id:void 0,t={expanded:this.open?"true":"false",required:this.required?"true":void 0,readonly:this.readOnly?"true":void 0,busy:this.loading?"true":void 0};if(this.searchable){const o=(s=this.selectedOptions[0])==null?void 0:s.label,a=this.open?this.searchPlaceholder:this.multiple&&this.hasValue?"":this.placeholder;return u`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${ie(this.open?this.query:this.multiple?"":o??"")}
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
      `}return u`
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
    `}renderOption(e,t){const r=this.selectedValues.includes(e.value),s=this.readOnly||this.loading;return u`
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
    `}renderOptionGroups(){const e=this.filteredOptions,t=[];return e.forEach((r,s)=>{const o=r.groupKey??"super-select-ungrouped";let a=t.at(-1);(!a||a.key!==o)&&(a={key:o,label:r.group,options:[]},t.push(a)),a.options.push({option:r,index:s})}),t.map(r=>u`
      <div
        class="group"
        part="group"
        role=${r.label?"group":"presentation"}
        aria-label=${w(r.label)}
      >
        ${r.label?u`<div class="group-label" part="group-label">${r.label}</div>`:b}
        ${r.options.map(({option:s,index:o})=>this.renderOption(s,o))}
      </div>
    `)}renderPopup(){if(!this.open)return b;const e=this.filteredOptions;return u`
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
          ${!this.loading&&e.length?this.renderOptionGroups():b}
        </div>
        ${this.loading?u`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`:e.length?b:u`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`}
      </div>
    `}render(){const e=this.validationSymbol(),t=`control${this.hasValue?" has-value":""}`;return u`
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
        ${this.clearable&&this.hasMutableValue&&!this.disabled&&!this.readOnly&&!this.loading?u`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${r=>r.stopPropagation()}
            >×</button>`:b}
        ${e?u`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${e}
            </span>`:b}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText?u`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${w(this.validation==="error"?"alert":void 0)}
            aria-live=${w(this.validation==="error"?void 0:"polite")}
          >${this.helperText}</span>`:b}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${()=>this.syncOptions(!1)}></slot>
      </span>
    `}}Object.defineProperty(oi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},multiple:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0,noAccessor:!0},name:{type:String,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},removeLabel:{type:String,attribute:"remove-label"},searchLabel:{type:String,attribute:"search-label"},searchPlaceholder:{type:String,attribute:"search-placeholder"},emptyText:{type:String,attribute:"empty-text"},loadingText:{type:String,attribute:"loading-text"},options:{state:!0},query:{state:!0},activeIndex:{state:!0},hasPrefix:{state:!0}}});Object.defineProperty(oi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const nh="super-select",lh=i=>V(nh,oi,i);class ai extends T{constructor(){super(),this.variant="text",this.rows=1,this.animated=!0,this.loading=!0,this.width="",this.height="",this.loadingLabel="内容加载中"}get rowCount(){return this.variant!=="text"?1:Math.max(1,Math.trunc(Number.isFinite(this.rows)?this.rows:1))}get hostStyle(){const e={};return this.width&&(e.inlineSize=this.width),this.height&&(e.blockSize=this.height),e}renderPlaceholder(){const e=Array.from({length:this.rowCount},()=>u`
      <span class="row" part="row"></span>
    `);return this.variant==="rect"?u`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row rect" part="row"></span>
        </div>
      `:this.variant==="circle"?u`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row circle" part="row"></span>
        </div>
      `:u`
      <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
        ${e}
      </div>
    `}render(){return u`
      <div
        class="skeleton"
        part="skeleton"
        style=${oe(this.hostStyle)}
        aria-live="polite"
      >
        <span class="status">${this.loading?this.loadingLabel:b}</span>
        ${this.loading?this.renderPlaceholder():u`
              <div class="content" part="content">
                <slot></slot>
              </div>
            `}
      </div>
    `}}Object.defineProperty(ai,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},rows:{type:Number,reflect:!0},animated:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},width:{type:String,reflect:!0},height:{type:String,reflect:!0},loadingLabel:{type:String,attribute:"loading-label",reflect:!0}}});Object.defineProperty(ai,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const ch="super-skeleton",uh=i=>V(ch,ai,i),ph={fromAttribute(i){return i===null||i===""?0:Number(i)},toAttribute(i){return Array.isArray(i)?null:String(i)}},Ee=(i,e,t)=>Math.min(t,Math.max(e,i)),dh=i=>Number(i.toFixed(6)),Xi=(i,e)=>Array.isArray(i)&&Array.isArray(e)?i[0]===e[0]&&i[1]===e[1]:!Array.isArray(i)&&!Array.isArray(e)&&i===e;class ni extends T{get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>this.setInternalValue(e),equals:Xi})}),this.min=0,this.max=100,this.step=1,this.range=!1,this.disabled=!1,this.size="medium",this.validation="none",this.showTooltip=!1,this.vertical=!1,this.accessibleLabel="滑动条",this.startLabel="起始值",this.endLabel="结束值"}get resolvedMin(){return Number.isFinite(this.min)?this.min:0}get resolvedMax(){const e=this.resolvedMin,t=Number.isFinite(this.max)?this.max:e+100;return t>e?t:e}get resolvedStep(){return Number.isFinite(this.step)&&this.step>0?this.step:1}quantize(e){const t=this.resolvedMin,r=this.resolvedMax,s=this.resolvedStep,o=Ee(e,t,r);return dh(Ee(t+Math.round((o-t)/s)*s,t,r))}get singleValue(){const e=Array.isArray(this.value)?this.value[0]:this.value;return this.quantize(Number.isFinite(e)?e:this.resolvedMin)}get rangeValue(){const e=this.resolvedMin;if(Array.isArray(this.value)&&this.value.length>=2){const t=this.quantize(Number(this.value[0])),r=this.quantize(Number(this.value[1]));return t<=r?[t,r]:[r,t]}return[e,this.resolvedMax]}get startValue(){return this.range?this.rangeValue[0]:this.resolvedMin}get endValue(){return this.range?this.rangeValue[1]:this.singleValue}percent(e){const t=this.resolvedMin,r=this.resolvedMax;return r===t?0:(e-t)/(r-t)*100}inputElements(){var e;return Array.from(((e=this.renderRoot)==null?void 0:e.querySelectorAll(".native"))??[])}focus(e){const t=this.inputElements()[0];if(t){t.focus(e);return}super.focus(e)}blur(){var e;(e=this.inputElements()[0])==null||e.blur()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}syncInputs(){const e=this.inputElements(),t=this.range?this.rangeValue:[this.singleValue];e.forEach((r,s)=>{const o=t[s]??t[0]??this.resolvedMin;r.value=String(o),r.setAttribute("aria-valuemin",String(this.resolvedMin)),r.setAttribute("aria-valuemax",String(this.resolvedMax)),r.setAttribute("aria-valuenow",String(o))})}emitChange(e){this.dispatchEvent(new CustomEvent("super-slider-change",{detail:{value:e},bubbles:!0,composed:!0}))}commit(e){const t=this.range?this.rangeValue:this.singleValue;if(this.disabled||Xi(e,t)){this.syncInputs();return}const r=this.controlledValueGuard.capture();this.setInternalValue(e),this.emitChange(e),this.syncInputs(),this.controlledValueGuard.confirm(r)}valueFromInput(e){return this.quantize(Number(e.value))}handleInput(e){const t=e.currentTarget,r=this.inputElements().indexOf(t);if(this.range){const[s,o]=this.rangeValue,a=[s,o];r<=0?a[0]=Ee(this.valueFromInput(t),this.resolvedMin,o):a[1]=Ee(this.valueFromInput(t),s,this.resolvedMax),this.commit(a);return}this.commit(this.valueFromInput(t))}handleChange(e){this.handleInput(e)}handleKeydown(e){if(this.disabled)return;const t=e.currentTarget,s=this.inputElements().indexOf(t),o=this.range,a=o?this.rangeValue:[this.singleValue],n=a[s]??a[0]??this.resolvedMin,l=this.resolvedStep;let c=n,d=!0;switch(e.key){case"ArrowRight":case"ArrowUp":c=n+l;break;case"ArrowLeft":case"ArrowDown":c=n-l;break;case"Home":c=o&&s>0?a[0]:this.resolvedMin;break;case"End":c=o&&s===0?a[1]:this.resolvedMax;break;case"PageUp":c=n+l*10;break;case"PageDown":c=n-l*10;break;default:d=!1}if(d){if(e.preventDefault(),c=this.quantize(c),o){const p=[a[0],a[1]];s<=0?p[0]=Ee(c,this.resolvedMin,p[1]):p[1]=Ee(c,p[0],this.resolvedMax),this.commit(p);return}this.commit(c)}}handleTrackClick(e){if(this.disabled||e.target instanceof HTMLInputElement)return;const r=e.currentTarget.getBoundingClientRect(),s=this.vertical?r.height:r.width;if(!s)return;const o=this.vertical?r.bottom-e.clientY:e.clientX-r.left,a=Ee(o/s,0,1),n=this.quantize(this.resolvedMin+a*(this.resolvedMax-this.resolvedMin));if(!this.range){this.commit(n);return}const[l,c]=this.rangeValue,d=Math.abs(n-l)<=Math.abs(n-c)?[n,c]:[l,n];this.commit(d[0]<=d[1]?d:[d[1],d[0]])}renderTooltip(e,t){const r=this.percent(e),s=this.vertical?{bottom:`${r}%`,left:"100%"}:{left:`${r}%`,top:"-4px"};return u`
      <span
        class="tooltip"
        part=${t===0?"tooltip tooltip-start":"tooltip tooltip-end"}
        style=${oe(s)}
        aria-hidden="true"
      >${e}</span>
    `}renderInput(e,t,r){const s=r>1?e===0?this.startLabel:this.endLabel:this.accessibleLabel;return u`
      <input
        class="native"
        part="input"
        type="range"
        min=${this.resolvedMin}
        max=${this.resolvedMax}
        step=${this.resolvedStep}
        .value=${ie(String(t))}
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
    `}render(){const e=this.startValue,t=this.endValue,r=this.percent(e),s=this.percent(t),o=this.vertical?{insetInline:"0",insetBlockEnd:`${r}%`,blockSize:`${Math.max(0,s-r)}%`}:{insetBlock:"0",insetInlineStart:`${r}%`,inlineSize:`${Math.max(0,s-r)}%`};return u`
      <div
        class="root"
        part="root"
        role=${w(this.range?"group":void 0)}
        aria-label=${w(this.range?this.accessibleLabel:void 0)}
      >
        <div class="track" part="track" @click=${this.handleTrackClick}>
          <div class="fill" part="fill" style=${oe(o)}></div>
          ${this.range?this.renderInput(0,e,2):this.renderInput(0,t,1)}
          ${this.range?this.renderInput(1,t,2):b}
        </div>
        ${this.showTooltip?this.range?u`
                ${this.renderTooltip(e,0)}
                ${this.renderTooltip(t,1)}
              `:this.renderTooltip(t,1):b}
      </div>
    `}}Object.defineProperty(ni,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:Number,reflect:!0,converter:ph,noAccessor:!0},min:{type:Number,reflect:!0},max:{type:Number,reflect:!0},step:{type:Number,reflect:!0},range:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},showTooltip:{type:Boolean,attribute:"show-tooltip",reflect:!0},vertical:{type:Boolean,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"},startLabel:{type:String,attribute:"start-label"},endLabel:{type:String,attribute:"end-label"}}});Object.defineProperty(ni,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const hh="super-slider",bh=i=>V(hh,ni,i),fh=i=>/^\d+(?:\.\d+)?$/.test(i)?`${i}px`:void 0;class li extends T{constructor(){super(),this.direction="horizontal",this.size="medium",this.wrap=!1,this.align="center",this.fill=!1}render(){return u`<slot part="space"></slot>`}updated(e){if(e.has("size")||e.size===0){const t=fh(this.size);t?this.style.setProperty("--super-space-gap",t):this.style.removeProperty("--super-space-gap")}}}Object.defineProperty(li,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{direction:{type:String,reflect:!0},size:{type:String,reflect:!0},wrap:{type:Boolean,reflect:!0},align:{type:String,reflect:!0},fill:{type:Boolean,reflect:!0}}});Object.defineProperty(li,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const mh="super-space",gh=i=>V(mh,li,i);let vh=0;class ci extends T{get active(){return this._active}set active(e){this.controlledValueGuard.markExternal(e),this.setInternalActive(e)}setInternalActive(e){const t=this._active;this._active=e,this.requestUpdate("active",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-steps-${++vh}`}),Object.defineProperty(this,"_active",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._active,setValue:e=>this.setInternalActive(e)})}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.clickable)return;const t=e.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.stepIndex!==void 0);t&&this.activate(Number(t.dataset.stepIndex))}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.clickable||e.key!=="Enter"&&e.key!==" ")return;const t=e.composedPath().find(r=>r instanceof HTMLElement&&r.dataset.stepIndex!==void 0);t&&(e.preventDefault(),this.activate(Number(t.dataset.stepIndex)))}}),this.items=[],this._active=0,this.direction="horizontal",this.status="process",this.clickable=!1,this.size="medium",this.accessibleLabel="步骤"}get clampedActive(){return Number.isFinite(this.active)?Math.min(Math.max(Math.trunc(this.active),0),Math.max(this.items.length-1,0)):0}stepStatus(e){return e<this.clampedActive?"finish":e>this.clampedActive?"wait":this.status}stepId(e){return`${this.uid}-step-${e}`}activate(e){if(!this.clickable||e===this.clampedActive||!this.items[e])return;const r=this.controlledValueGuard.capture();this.setInternalActive(e),this.dispatchEvent(new CustomEvent("super-steps-change",{detail:{active:e},bubbles:!0,composed:!0})),this.controlledValueGuard.confirm(r)}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}renderStep(e,t){const r=this.stepStatus(e),s=e===this.clampedActive,o=u`
      <span
        class="indicator"
        part="indicator"
        aria-hidden="true"
      >
        ${t.icon?u`<span class="icon" part="icon">${t.icon}</span>`:u`<span class="number">${e+1}</span>`}
      </span>
      <span class="content">
        <span class="title" part="title">${t.title}</span>
        ${t.description?u`<span class="description" part="description"
              >${t.description}</span
            >`:b}
      </span>
    `;return u`
      <li
        class="step"
        part="step"
        role="listitem"
        id=${this.stepId(e)}
        data-status=${r}
        aria-current=${s?"step":b}
      >
        ${this.clickable?u`<button
              class="step-body"
              type="button"
              data-step-index=${e}
              data-clickable
            >
              ${o}
            </button>`:u`<div class="step-body">${o}</div>`}
        ${e<this.items.length-1?u`<span
              class="connector"
              part="connector"
              aria-hidden="true"
              data-status=${r}
            ></span>`:b}
      </li>
    `}render(){return u`
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
    `}}Object.defineProperty(ci,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{items:{attribute:!1},active:{type:Number,reflect:!0,noAccessor:!0},direction:{type:String,reflect:!0},status:{type:String,reflect:!0},clickable:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0}}});Object.defineProperty(ci,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-steps-gap: var(--super-spacing-md, 12px);
      --super-steps-indicator-size: 30px;
      --super-steps-font-size: var(--super-font-size-base, 14px);
      --super-steps-title-color: var(--super-text-color-primary, #292524);
      --super-steps-description-color: var(
        --super-text-color-secondary,
        #6b6360
      );
      --super-steps-wait-color: var(--super-text-color-secondary, #6b6360);
      --super-steps-process-color: #245cbe;
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
  `});const xh="super-steps",yh=i=>V(xh,ci,i);class ui extends T{get checked(){return this._checked}set checked(e){this.controlledValueGuard.markExternal(e),this.setInternalChecked(e)}setInternalChecked(e){const t=this._checked;this._checked=e,this.requestUpdate("checked",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_checked",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._checked,setValue:e=>this.setInternalChecked(e)})}),this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget,r=this.controlledValueGuard.capture();this.setInternalChecked(t.checked),this.emitChange(e),this.controlledValueGuard.confirm(r)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.controlledValueGuard.capture();this.setInternalChecked(!this._checked);const r=new Event("change");super.click(),this.emitChange(r),this.controlledValueGuard.confirm(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return u`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${ie(this.checked)}
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
        ${this.helperText?u`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:b}
      </span>
    `}}Object.defineProperty(ui,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0,noAccessor:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ui,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const kh="super-switch",wh=i=>V(kh,ui,i),Ji={toAttribute:i=>i===""||i===null||i===void 0?null:String(i),fromAttribute:i=>i??""},$h={toAttribute:i=>i?"":null,fromAttribute:i=>i!==null&&i!=="false"};class pi extends T{get selectedKeys(){return this._selectedKeys}set selectedKeys(e){this.selectedKeysGuard.markExternal(e),this.setInternalSelectedKeys(e)}setInternalSelectedKeys(e){const t=this._selectedKeys;this._selectedKeys=e,this.requestUpdate("selectedKeys",t)}get sortKey(){return this._sortKey}set sortKey(e){this.sortKeyGuard.markExternal(e),this.setInternalSortKey(e)}setInternalSortKey(e){const t=this._sortKey;this._sortKey=e,this.requestUpdate("sortKey",t)}get sortDirection(){return this._sortDirection}set sortDirection(e){this.sortDirectionGuard.markExternal(e),this.setInternalSortDirection(e)}setInternalSortDirection(e){const t=this._sortDirection;this._sortDirection=e,this.requestUpdate("sortDirection",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"_selectedKeys",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_sortKey",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_sortDirection",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"selectedKeysGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._selectedKeys,setValue:e=>this.setInternalSelectedKeys(e)})}),Object.defineProperty(this,"sortKeyGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._sortKey,setValue:e=>this.setInternalSortKey(e)})}),Object.defineProperty(this,"sortDirectionGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._sortDirection,setValue:e=>this.setInternalSortDirection(e)})}),Object.defineProperty(this,"handleSort",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!e.sortable||this.loading)return;const r=this.sortKey===e.key&&(this.sortDirection==="asc"||this.sortDirection==="desc")?this.sortDirection==="asc"?"desc":"none":"asc",s=this.sortKeyGuard.capture(),o=this.sortDirectionGuard.capture();r==="none"?(this.setInternalSortKey(""),this.setInternalSortDirection("")):(this.setInternalSortKey(e.key),this.setInternalSortDirection(r)),this.emitSort(e.key,r),this.sortKeyGuard.confirm(s),this.sortDirectionGuard.confirm(o)}}),Object.defineProperty(this,"handleSelectAll",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(!this.selectable||this.loading)return;const e=this.selectableKeys;if(e.length===0)return;const t=this.selectedKeyList,r=new Set(t),s=e.every(n=>r.has(n)),o=s?t.filter(n=>!e.includes(n)):Array.from(new Set([...t,...e])),a=this.selectedKeysGuard.capture();this.setInternalSelectedKeys(o),this.emitSelect(o,null,!s),this.selectedKeysGuard.confirm(a)}}),Object.defineProperty(this,"handleRowSelect",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.selectable||this.loading)return;const t=e.currentTarget,r=Number(t.dataset.rowIndex),s=this.normalizedRows[r];if(!s)return;const o=this.getRowKey(s,r),a=this.selectedKeyList,n=!a.includes(o),l=n?[...a,o]:a.filter(d=>d!==o),c=this.selectedKeysGuard.capture();this.setInternalSelectedKeys(l),this.emitSelect(l,s,n),this.selectedKeysGuard.confirm(c)}}),this.columns=[],this.rows=[],this.rowKey="id",this.selectable=!1,this._selectedKeys=[],this._sortKey="",this._sortDirection="",this.loading=!1,this.emptyText="暂无数据",this.size="medium",this.striped=!1,this.bordered=!1,this.showHeader=!0,this.stickyHeader=!1,this.selectAllLabel="全选",this.selectRowLabel="选择此行",this.loadingText="数据加载中",this.accessibleLabel="数据表格"}get normalizedColumns(){return Array.isArray(this.columns)?this.columns.filter(e=>!!e&&typeof e.key=="string"&&e.key.length>0):[]}get normalizedRows(){return Array.isArray(this.rows)?this.rows:[]}get selectedKeyList(){const e=Array.isArray(this.selectedKeys)?this.selectedKeys:[];return Array.from(new Set(e.map(t=>String(t))))}get selectedKeySet(){return new Set(this.selectedKeyList)}get selectableKeys(){const e=new Set,t=[];return this.normalizedRows.forEach((r,s)=>{const o=this.getRowKey(r,s);e.has(o)||(e.add(o),t.push(o))}),t}get allSelected(){const e=this.selectableKeys;if(e.length===0)return!1;const t=this.selectedKeySet;return e.every(r=>t.has(r))}get someSelected(){if(this.allSelected)return!1;const e=this.selectedKeySet;return this.selectableKeys.some(t=>e.has(t))}get activeSortKey(){if(this.sortDirection!=="asc"&&this.sortDirection!=="desc")return"";const e=this.normalizedColumns.find(t=>t.key===this.sortKey);return e!=null&&e.sortable?e.key:""}getRowKey(e,t){const r=e==null?void 0:e[this.rowKey];return typeof r=="string"&&r.length>0?r:typeof r=="number"&&Number.isFinite(r)?String(r):String(t)}emitSort(e,t){this.dispatchEvent(new CustomEvent("super-table-sort",{detail:{key:e,direction:t},bubbles:!0,composed:!0}))}emitSelect(e,t,r){this.dispatchEvent(new CustomEvent("super-table-select",{detail:{selectedKeys:[...e],row:t,selected:r},bubbles:!0,composed:!0}))}disconnectedCallback(){this.selectedKeysGuard.dispose(),this.sortKeyGuard.dispose(),this.sortDirectionGuard.dispose(),super.disconnectedCallback()}renderSelectionCell(e,t){const r=this.getRowKey(e,t);return u`
      <td part="cell" class="cell selection-cell">
        <label class="selection-control">
          <input
            class="selection-input"
            type="checkbox"
            aria-label=${this.selectRowLabel}
            data-row-index=${String(t)}
            .checked=${ie(this.selectedKeySet.has(r))}
            ?disabled=${this.loading}
            @change=${this.handleRowSelect}
          />
          <span class="selection-box" aria-hidden="true"></span>
        </label>
      </td>
    `}renderCell(e,t,r){const s=e.align?{textAlign:e.align}:{};return u`
      <td part="cell" class="cell" style=${oe(s)}>
        <slot name=${`cell-${e.key}`}>
          ${this.renderCellValue(e,t,r)}
        </slot>
      </td>
    `}renderCellValue(e,t,r){const s=t==null?void 0:t[e.key];if(e.formatter){const o=e.formatter(s,t,r);return o??b}return s==null?b:typeof s=="object"?String(s):s}renderHeaderCell(e){const t=!!e.sortable,r=this.activeSortKey===e.key,s=t?r?this.sortDirection==="asc"?"ascending":"descending":"none":void 0,o={textAlign:e.align??"left"},a=r?this.sortDirection==="asc"?"↑":"↓":"↕";return u`
      <th
        scope="col"
        part="header-cell"
        class="header-cell"
        style=${oe(o)}
        aria-sort=${w(s)}
      >
        ${t?u`
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
            `:u`<span>${e.title}</span>`}
      </th>
    `}renderEmptyRow(e){return u`
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
    `}renderSkeletonRows(e,t){const r=t>0?Math.min(t,5):3;return Array.from({length:r},()=>u`
        <tr part="row" class="row skeleton-row" aria-hidden="true">
          ${Array.from({length:e},()=>u`
              <td part="cell" class="cell skeleton-cell">
                <span class="skeleton-bar"></span>
              </td>
            `)}
        </tr>
      `)}render(){const e=this.normalizedColumns,t=this.normalizedRows,r=Math.max(1,e.length+(this.selectable?1:0));return u`
      <div class="viewport" part="viewport">
        ${this.loading?u`<span class="visually-hidden" role="status">
              ${this.loadingText}
            </span>`:b}
        <table
          class="table"
          part="table"
          aria-label=${w(this.accessibleLabel||void 0)}
          aria-busy=${w(this.loading?"true":void 0)}
        >
          ${e.length>0||this.selectable?u`
                <colgroup>
                  ${this.selectable?u`<col
                        style=${oe({width:"var(--super-table-selection-width)"})}
                      />`:b}
                  ${e.map(s=>u`<col
                        style=${oe(s.width?{width:s.width}:{})}
                      />`)}
                </colgroup>
              `:b}
          ${this.showHeader&&(e.length>0||this.selectable)?u`
                <thead part="header" class="header">
                  <tr>
                    ${this.selectable?u`
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
                                .checked=${ie(this.allSelected)}
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
                        `:b}
                    ${e.map(s=>this.renderHeaderCell(s))}
                  </tr>
                </thead>
              `:b}
          <tbody part=${this.loading?"body loading":"body"} class="body">
            ${this.loading?this.renderSkeletonRows(r,t.length):t.length===0?this.renderEmptyRow(r):t.map((s,o)=>u`
                      <tr part="row" class="row data-row">
                        ${this.selectable?this.renderSelectionCell(s,o):b}
                        ${e.map(a=>this.renderCell(a,s,o))}
                      </tr>
                    `)}
          </tbody>
        </table>
      </div>
    `}}Object.defineProperty(pi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{columns:{attribute:!1},rows:{attribute:!1},rowKey:{type:String,attribute:"row-key",reflect:!0},selectable:{type:Boolean,reflect:!0},selectedKeys:{attribute:!1,noAccessor:!0},sortKey:{type:String,attribute:"sort-key",reflect:!0,converter:Ji,noAccessor:!0},sortDirection:{type:String,attribute:"sort-direction",reflect:!0,converter:Ji,noAccessor:!0},loading:{type:Boolean,reflect:!0},emptyText:{type:String,attribute:"empty-text",reflect:!0},size:{type:String,reflect:!0},striped:{type:Boolean,reflect:!0},bordered:{type:Boolean,reflect:!0},showHeader:{type:Boolean,attribute:"show-header",reflect:!0,converter:$h},stickyHeader:{type:Boolean,attribute:"sticky-header",reflect:!0},selectAllLabel:{type:String,attribute:"select-all-label",reflect:!0},selectRowLabel:{type:String,attribute:"select-row-label",reflect:!0},loadingText:{type:String,attribute:"loading-text",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(pi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-table-shadow-color)"}))};
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
  `});const zh="super-table",Sh=i=>V(zh,pi,i);class di extends T{constructor(){super(),this.variant="default",this.size="medium",this.closable=!1,this.value="",this.closeLabel="移除标签"}close(){this.closable&&this.dispatchEvent(new CustomEvent("super-tag-close",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return u`
      <span class="tag" part="tag">
        <span class="label" part="label"><slot></slot></span>
        ${this.closable?u`
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
    `}}Object.defineProperty(di,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},value:{type:String,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0}}});Object.defineProperty(di,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
      box-shadow: ${re(Ke({color:"var(--super-tag-shadow-color)"}))};
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
  `});const _h="super-tag",Ch=i=>V(_h,di,i);let Eh=0;class hi extends T{get active(){return this._active}set active(e){this.controlledValueGuard.markExternal(e),this.setInternalActive(e)}setInternalActive(e){const t=this._active;this._active=e,this.requestUpdate("active",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:`super-tabs-${++Eh}`}),Object.defineProperty(this,"_active",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._active,setValue:e=>this.setInternalActive(e)})}),Object.defineProperty(this,"syncSlottedTabs",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.items.length>0)return;const e=this.effectiveActive;let t=!1;this.assignedTabs().forEach((r,s)=>{r.id||(r.id=this.tabId(s),t=!0);const o=r.dataset.tabKey??"",a=r.hasAttribute("disabled")||r.getAttribute("aria-disabled")==="true",n=o===e&&!a;r.setAttribute("role","tab"),r.setAttribute("aria-selected",n?"true":"false"),r.setAttribute("aria-controls",this.panelId),r.setAttribute("tabindex",n?"0":"-1"),a&&r.setAttribute("aria-disabled","true")}),t&&this.requestUpdate()}}),Object.defineProperty(this,"handleTabSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.syncSlottedTabs(),this.requestUpdate()}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=e.composedPath(),r=t.find(n=>n instanceof HTMLElement&&n.hasAttribute("data-tabs-close"));if(r){e.stopPropagation();const n=r.dataset.closeKey??"";n&&this.dispatchEvent(new CustomEvent("super-tabs-close",{detail:{key:n},bubbles:!0,composed:!0}));return}const s=t.find(n=>n instanceof HTMLElement&&!!n.dataset.tabKey);if(!s)return;const o=s.dataset.tabKey??"",a=this.tabEntries().find(n=>n.key===o);!a||a.disabled||this.activate(o)}}),Object.defineProperty(this,"handleKeyDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const t=this.orientation!=="vertical",r=t?"ArrowLeft":"ArrowUp",s=t?"ArrowRight":"ArrowDown";if(!["Home","End",r,s].includes(e.key))return;const a=this.tabEntries().filter(m=>!m.disabled);if(a.length===0)return;const n=e.composedPath().find(m=>m instanceof HTMLElement&&!!m.dataset.tabKey),l=(n==null?void 0:n.dataset.tabKey)??this.effectiveActive,c=Math.max(0,a.findIndex(m=>m.key===l));let d=c;if(e.key==="Home")d=0;else if(e.key==="End")d=a.length-1;else{const m=e.key===s?1:-1;d=(c+m+a.length)%a.length}const p=a[d];p&&(e.preventDefault(),this.activate(p.key),this.focusTab(p.key))}}),this._active="",this.orientation="horizontal",this.variant="line",this.size="medium",this.closable=!1,this.closeLabel="关闭标签页",this.accessibleLabel="",this.items=[]}get tabSlot(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('slot[name="tab"]'))??null}get panelId(){return`${this.uid}-panel`}assignedTabs(){var e;return(((e=this.tabSlot)==null?void 0:e.assignedElements({flatten:!0}))??[]).filter(t=>t instanceof HTMLElement&&!!t.dataset.tabKey)}tabEntries(){return this.items.length>0?this.items.filter(e=>!!e.key).map(e=>({key:e.key,disabled:!!e.disabled})):this.assignedTabs().map(e=>({key:e.dataset.tabKey??"",disabled:e.hasAttribute("disabled")||e.getAttribute("aria-disabled")==="true",element:e}))}get effectiveActive(){var t;const e=this.tabEntries();return e.some(r=>r.key===this.active&&!r.disabled)?this.active:((t=e.find(r=>!r.disabled))==null?void 0:t.key)??""}tabId(e){return`${this.uid}-tab-${e}`}get selectedTabId(){var r;const e=this.effectiveActive;if(!e)return;if(this.items.length>0){const s=this.items.findIndex(o=>o.key===e);return s>=0?this.tabId(s):void 0}const t=this.assignedTabs().findIndex(s=>s.dataset.tabKey===e);if(!(t<0))return((r=this.assignedTabs()[t])==null?void 0:r.id)||this.tabId(t)}updated(){this.syncSlottedTabs()}emitChange(e){this.dispatchEvent(new CustomEvent("super-tabs-change",{detail:{active:e},bubbles:!0,composed:!0}))}activate(e){if(!e||e===this.effectiveActive)return;const t=this.controlledValueGuard.capture();this.setInternalActive(e),this.emitChange(e),this.controlledValueGuard.confirm(t)}findTab(e){var t;return this.items.length>0?Array.from(((t=this.renderRoot)==null?void 0:t.querySelectorAll(".tab[data-tab-key]"))??[]).find(r=>r.dataset.tabKey===e)??null:this.assignedTabs().find(r=>r.dataset.tabKey===e)??null}focusTab(e){this.updateComplete.then(()=>{var t;(t=this.findTab(e))==null||t.focus()})}focus(e){const t=this.effectiveActive,r=t?this.findTab(t):null;if(r){r.focus(e);return}super.focus(e)}blur(){const e=this.effectiveActive,t=e?this.findTab(e):null;if(t){t.blur();return}super.blur()}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}renderItems(){const e=this.effectiveActive;return this.items.map((t,r)=>{const s=t.key===e&&!t.disabled;return u`
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
          ${this.closable?u`
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
              `:b}
        </span>
      `})}render(){return u`
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
          ${this.items.length>0?this.renderItems():u`
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
    `}}Object.defineProperty(hi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{active:{type:String,reflect:!0,noAccessor:!0},orientation:{type:String,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},closable:{type:Boolean,reflect:!0},closeLabel:{type:String,attribute:"close-label",reflect:!0},accessibleLabel:{type:String,attribute:"aria-label",reflect:!0},items:{attribute:!1}}});Object.defineProperty(hi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
    :host {
      --super-tabs-gap: 4px;
      --super-tabs-tab-height: 36px;
      --super-tabs-tab-padding-inline: 14px;
      --super-tabs-font-size: var(--super-font-size-base, 14px);
      --super-tabs-color: var(--super-text-color-regular, #4a4441);
      --super-tabs-active-color: #245cbe;
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
  `});const Oh="super-tabs",Ph=i=>V(Oh,hi,i),Ah=/^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/,Th=/HH|hh|mm|ss|H|h|A|a/g,Lh=i=>Array.isArray(i)?[...i]:i,Ih=(i,e)=>Array.isArray(i)&&Array.isArray(e)?i.length===e.length&&i.every((t,r)=>t===e[r]):Object.is(i,e),Z=i=>String(i).padStart(2,"0"),gt=i=>{const e=Ah.exec(i);return e?{hour:Number(e[1]),minute:Number(e[2]),second:e[3]===void 0?0:Number(e[3])}:null},tr=(i,e)=>e?`${Z(i.hour)}:${Z(i.minute)}:${Z(i.second)}`:`${Z(i.hour)}:${Z(i.minute)}`,rr=(i,e)=>{const t=Math.max(1,Math.floor(e)||1),r=[];for(let s=0;s<i;s+=t)r.push(s);return r},vt=i=>(i.length>0&&!i.some(e=>e.tabbable)&&(i[0].tabbable=!0),i);class bi extends T{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._value,setValue:e=>this.setInternalValue(e),clone:Lh,equals:Ih})}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),Object.defineProperty(this,"handleTriggerClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.setOpen(!this.open,"trigger",e)}}),Object.defineProperty(this,"handleClearClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.stopPropagation(),this.clearValue(e,!1)}}),Object.defineProperty(this,"handleTriggerKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(!this.disabled){if(e.key==="Escape"&&this.open){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e);return}(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),this.setOpen(!0,"trigger",e))}}}),Object.defineProperty(this,"handleColumnsKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{var k,$;if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e),(k=this.triggerElement)==null||k.focus();return}if(e.key!=="ArrowUp"&&e.key!=="ArrowDown"&&e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;const t=e.target.closest(".cell"),r=t==null?void 0:t.closest(".column"),s=r==null?void 0:r.closest(".group");if(!t||!r||!s)return;e.preventDefault();const o=Array.from(r.querySelectorAll(".cell")),a=o.indexOf(t);if(e.key==="ArrowUp"||e.key==="ArrowDown"){const z=e.key==="ArrowUp"?-1:1,S=(a+z+o.length)%o.length;($=o[S])==null||$.focus();return}const n=Array.from(s.querySelectorAll(".column")),l=n.indexOf(r),c=e.key==="ArrowLeft"?-1:1,d=n[l+c];if(!d)return;const p=d.querySelectorAll(".cell"),m=p[Math.min(a,p.length-1)];m==null||m.focus()}}),Object.defineProperty(this,"handlePopupKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.setOpen(!1,"escape",e))}}),this.range=!1,this.format="HH:mm",this.size="medium",this.validation="none",this.disabled=!1,this.clearable=!1,this.name="",this.placeholder="选择时间",this.startPlaceholder="开始时间",this.endPlaceholder="结束时间",this.hourStep=1,this.minuteStep=1,this.secondStep=1,this.helperText="",this.accessibleLabel="",this.clearLabel="清空",this.confirmLabel="确定",this.amLabel="上午",this.pmLabel="下午",this.startLabel="开始",this.endLabel="结束",this.shortcuts=[]}get value(){return this._value}set value(e){this.controlledValueGuard.markExternal(e),this.setInternalValue(e)}setInternalValue(e){const t=this.normalizeValue(e),r=this._value;this._value=t,this.requestUpdate("value",r)}get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}hasSeconds(){return this.format.includes("ss")}isHour12(){return/h/.test(this.format)&&/[Aa]/.test(this.format)}hasValue(){return Array.isArray(this.value)?this.value.some(e=>e!==""):this.value!==""}normalizeSingle(e){const t=gt(e);return t===null?"":tr(t,this.hasSeconds())}normalizeValue(e){return this.range?Array.isArray(e)?e.filter(t=>typeof t=="string").map(t=>this.normalizeSingle(t)).slice(0,2):[]:Array.isArray(e)?"":this.normalizeSingle(e)}get triggerElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".trigger"))??null}focus(e){const t=this.triggerElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.triggerElement;if(e){e.blur();return}super.blur()}connectedCallback(){super.connectedCallback(),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0)}disconnectedCallback(){this.controlledValueGuard.dispose(),this.controlledOpenGuard.dispose(),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),super.disconnectedCallback()}willUpdate(e){(e.has("range")||e.has("format"))&&this.setInternalValue(this.value),this.disabled&&this.open&&this.setInternalOpen(!1)}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{this.renderRoot.querySelectorAll('.cell[aria-pressed="true"]').forEach(t=>{typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"nearest"})})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-time-picker-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}emitClear(e){this.dispatchEvent(new CustomEvent("super-time-picker-clear",{detail:{name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,r){if(e&&this.disabled||this.open===e)return;const s=this.controlledOpenGuard.capture();this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-time-picker-open-change",{detail:{open:e,reason:t,originalEvent:r},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(s),!e&&t!=="outside"&&this.updateComplete.then(()=>{var o;return(o=this.triggerElement)==null?void 0:o.focus()})}clearValue(e,t){if(this.disabled||!this.hasValue())return;const r=this.controlledValueGuard.capture();this.setInternalValue(this.range?[]:""),this.emitClear(e),this.emitChange(e),t&&this.setOpen(!1,"clear",e),this.controlledValueGuard.confirm(r)}groupParts(e){if(!this.range)return typeof this.value=="string"&&this.value!==""?gt(this.value):null;const r=(Array.isArray(this.value)?this.value:[])[e]??"";return r===""?null:gt(r)}commitSingle(e,t){const r=this.controlledValueGuard.capture();this.setInternalValue(tr(e,this.hasSeconds())),this.emitChange(t),this.controlledValueGuard.confirm(r)}commitRange(e,t,r){const s=Array.isArray(this.value)?[...this.value]:[];for(;s.length<2;)s.push("");s[e]=tr(t,this.hasSeconds());let o=s.slice(0,2);o[0]!==""&&o[1]!==""&&o[0]>o[1]&&(o=[o[1],o[0]]);const a=this.controlledValueGuard.capture();this.setInternalValue(o),this.emitChange(r),this.controlledValueGuard.confirm(a)}pickUnit(e,t,r,s){const o=this.groupParts(e)??{hour:0,minute:0,second:0},a={...o};if(t==="hour"&&typeof r=="number")if(this.isHour12()){const n=o.hour>=12;a.hour=n?r%12+12:r%12}else a.hour=r;else t==="minute"&&typeof r=="number"?a.minute=r:t==="second"&&typeof r=="number"?a.second=r:t==="period"&&(r==="am"&&a.hour>=12&&(a.hour-=12),r==="pm"&&a.hour<12&&(a.hour+=12));if(this.range){this.commitRange(e,a,s);return}this.commitSingle(a,s)}pickShortcut(e,t){const r=typeof e.value=="function"?e.value():e.value,s=this.normalizeValue(r);if(Array.isArray(s)?s.length===0:s==="")return;const a=this.controlledValueGuard.capture();this.setInternalValue(s),this.emitChange(t),this.setOpen(!1,"shortcut",t),this.controlledValueGuard.confirm(a)}displayValue(e){const t=gt(e);if(t===null)return e;const r=t.hour%12===0?12:t.hour%12,s={HH:Z(t.hour),H:String(t.hour),hh:Z(r),h:String(r),mm:Z(t.minute),ss:Z(t.second),A:t.hour<12?"AM":"PM",a:t.hour<12?"am":"pm"};return this.format.replace(Th,o=>s[o]??o)}renderColumn(e,t,r){return u`
      <div
        class="column"
        part="column"
        role="group"
        data-unit=${t}
        @keydown=${this.handleColumnsKeydown}
      >
        ${r.map(s=>u`
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
    `}renderGroup(e,t){const r=this.groupParts(e),s=this.isHour12(),o=this.hasSeconds(),a=vt(s?Array.from({length:12},(p,m)=>{const k=m+1,$=r!==null&&(r.hour%12===0?12:r.hour%12)===k;return{key:k,label:Z(k),selected:$,tabbable:$||r===null&&k===1}}):rr(24,this.hourStep).map((p,m)=>({key:p,label:Z(p),selected:r!==null&&r.hour===p,tabbable:r!==null&&r.hour===p||r===null&&m===0}))),n=vt(rr(60,this.minuteStep).map((p,m)=>({key:p,label:Z(p),selected:r!==null&&r.minute===p,tabbable:r!==null&&r.minute===p||r===null&&m===0}))),l=vt(rr(60,this.secondStep).map((p,m)=>({key:p,label:Z(p),selected:r!==null&&r.second===p,tabbable:r!==null&&r.second===p||r===null&&m===0}))),c=r!==null&&r.hour>=12,d=vt([{key:"am",label:this.amLabel,selected:r!==null&&!c,tabbable:r===null||!c},{key:"pm",label:this.pmLabel,selected:c,tabbable:c}]);return u`
      <div class="group" part="panel" data-group=${e}>
        ${t!==""?u`<div class="group-title" part="column-title">${t}</div>`:b}
        <div class="columns">
          ${this.renderColumn(e,"hour",a)}
          ${this.renderColumn(e,"minute",n)}
          ${o?this.renderColumn(e,"second",l):b}
          ${s?this.renderColumn(e,"period",d):b}
        </div>
      </div>
    `}renderShortcuts(){return this.shortcuts.length===0?b:u`
      <div class="shortcuts" part="shortcuts">
        ${this.shortcuts.map(e=>u`
            <button
              class="shortcut"
              part="shortcut"
              type="button"
              @click=${t=>this.pickShortcut(e,t)}
            >${e.label}</button>
          `)}
      </div>
    `}renderFooter(){const e=this.clearable&&this.hasValue();return u`
      <div class="footer" part="footer">
        ${e?u`<button
              class="footer-button clear-action"
              part="clear-button"
              type="button"
              @click=${t=>this.clearValue(t,!0)}
            >${this.clearLabel}</button>`:b}
        <button
          class="footer-button confirm-button"
          part="confirm-button"
          type="button"
          @click=${t=>this.setOpen(!1,"confirm",t)}
        >${this.confirmLabel}</button>
      </div>
    `}renderTriggerText(){if(this.range){const t=Array.isArray(this.value)?this.value:[],r=t[0]??"",s=t[1]??"";return u`
        <span class="trigger-text ${r===""?"placeholder":""}" part="label">
          ${r===""?this.startPlaceholder:this.displayValue(r)}
        </span>
        <span class="range-separator" aria-hidden="true">~</span>
        <span class="trigger-text ${s===""?"placeholder":""}">
          ${s===""?this.endPlaceholder:this.displayValue(s)}
        </span>
      `}const e=typeof this.value=="string"?this.value:"";return u`
      <span class="trigger-text ${e===""?"placeholder":""}" part="label">
        ${e===""?this.placeholder:this.displayValue(e)}
      </span>
    `}render(){const e=this.hasValue(),t=this.clearable&&e&&!this.disabled;return u`
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
        ${t?u`<button
              class="clear-button"
              part="clear"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.handleClearClick}
            >×</button>`:b}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator">◷</slot>
        </span>
      </div>
      ${this.helperText!==""?u`<div class="helper" part="helper">${this.helperText}</div>`:b}
      ${this.open?u`
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
                  ${this.range?u`
                        ${this.renderGroup(0,this.startLabel)}
                        ${this.renderGroup(1,this.endLabel)}
                      `:this.renderGroup(0,"")}
                </div>
              </div>
              ${this.renderFooter()}
            </div>
          `:b}
    `}}Object.defineProperty(bi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},range:{type:Boolean,reflect:!0},format:{type:String},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0,noAccessor:!0},name:{type:String,reflect:!0},placeholder:{type:String},startPlaceholder:{type:String,attribute:"start-placeholder"},endPlaceholder:{type:String,attribute:"end-placeholder"},hourStep:{type:Number,attribute:"hour-step"},minuteStep:{type:Number,attribute:"minute-step"},secondStep:{type:Number,attribute:"second-step"},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},confirmLabel:{type:String,attribute:"confirm-label"},amLabel:{type:String,attribute:"am-label"},pmLabel:{type:String,attribute:"pm-label"},startLabel:{type:String,attribute:"start-label"},endLabel:{type:String,attribute:"end-label"},shortcuts:{attribute:!1}}});Object.defineProperty(bi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Vh="super-time-picker",Mh=i=>V(Vh,bi,i);let Dh=0;const jh=(i,e)=>{const t=(i.getAttribute("aria-describedby")??"").split(/\s+/).filter(Boolean);t.includes(e)||(t.push(e),i.setAttribute("aria-describedby",t.join(" ")))},Zi=(i,e)=>{const t=(i.getAttribute("aria-describedby")??"").split(/\s+/).filter(r=>r!==""&&r!==e);t.length>0?i.setAttribute("aria-describedby",t.join(" ")):i.removeAttribute("aria-describedby")};class fi extends T{get open(){return this._open}set open(e){this.controlledOpenGuard.markExternal(e),this.setInternalOpen(e)}setInternalOpen(e){const t=this._open;this._open=e,this.requestUpdate("open",t)}attributeChangedCallback(e,t,r){G(()=>super.attributeChangedCallback(e,t,r))}constructor(){super(),Object.defineProperty(this,"tooltipId",{enumerable:!0,configurable:!0,writable:!0,value:`super-tooltip-${++Dh}`}),Object.defineProperty(this,"_open",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"controlledOpenGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._open,setValue:e=>this.setInternalOpen(e)})}),Object.defineProperty(this,"triggerElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"panelElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"describedElement",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"floating",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"closeTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"releaseScroll",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"focusTrap",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"handleTriggerSlotChange",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const e=this.renderRoot.querySelector("slot:not([name])"),t=e==null?void 0:e.assignedElements({flatten:!0})[0];this.detachTriggerListeners(),this.triggerElement=t??null,this.attachTriggerListeners(),this.open&&(this.syncDescribedBy(),this.startFloating())}}),Object.defineProperty(this,"handlePanelPointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||!this.interactive||this.trigger!=="hover"||this.clearCloseTimer()}}),Object.defineProperty(this,"handlePanelPointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||!this.interactive||this.trigger!=="hover"||this.scheduleClose()}}),Object.defineProperty(this,"handlePointerEnter",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||(this.clearCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handlePointerLeave",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.disabled||this.trigger!=="hover"||this.scheduleClose()}}),Object.defineProperty(this,"handleFocusIn",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="focus")return;const t=e.composedPath();t.includes(this)&&(!this.triggerElement||t.includes(this.triggerElement))&&(this.clearCloseTimer(),this.setOpen(!0))}}),Object.defineProperty(this,"handleFocusOut",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.trigger!=="focus"||!this.open)return;const t=e.relatedTarget,r=this.tooltipElement;t instanceof Node&&(t===this||this.contains(t)||r!=null&&r.contains(t))||this.scheduleClose()}}),Object.defineProperty(this,"handleClick",{enumerable:!0,configurable:!0,writable:!0,value:e=>{if(this.disabled||this.trigger!=="click")return;const t=this.triggerElement;!t||!e.composedPath().includes(t)||(this.clearCloseTimer(),this.setOpen(!this.open))}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||this.trigger!=="click"||e.composedPath().includes(this)||this.setOpen(!1)}}),Object.defineProperty(this,"handleDocumentKeydown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.key!=="Escape"||(e.preventDefault(),this.clearCloseTimer(),this.setOpen(!1),this.focusTrigger())}}),this.content="",this.placement="top",this.trigger="hover",this.disabled=!1,this.delay=120,this.offset=8,this.maxWidth=280,this.showArrow=!0,this.interactive=!1,this.size="medium"}get tooltipElement(){return this.renderRoot.querySelector('[part="tooltip"]')}clearCloseTimer(){const e=this.ownerDocument.defaultView;this.closeTimer!==void 0&&(e==null||e.clearTimeout(this.closeTimer),this.closeTimer=void 0)}scheduleClose(){this.clearCloseTimer();const e=Number.isFinite(this.delay)?Math.max(0,this.delay):0;if(e===0){this.setOpen(!1);return}const t=this.ownerDocument.defaultView;if(!t){this.setOpen(!1);return}this.closeTimer=t.setTimeout(()=>{this.closeTimer=void 0,this.setOpen(!1)},e)}setOpen(e){if(e&&this.disabled||this.open===e)return;const t=this.controlledOpenGuard.capture();this.setInternalOpen(e),this.dispatchEvent(new CustomEvent("super-tooltip-open-change",{detail:{open:e},bubbles:!0,composed:!0})),this.controlledOpenGuard.confirm(t)}focusTrigger(){const e=this.triggerElement;e&&typeof e.focus=="function"&&e.focus({preventScroll:!0})}syncDescribedBy(){const e=this.triggerElement;if(this.describedElement&&this.describedElement!==e&&(Zi(this.describedElement,this.tooltipId),this.describedElement=null),!this.open){this.describedElement&&(Zi(this.describedElement,this.tooltipId),this.describedElement=null);return}e&&(jh(e,this.tooltipId),this.describedElement=e)}destroyFloating(){var e;(e=this.floating)==null||e.destroy(),this.floating=null}startFloating(){this.destroyFloating();const e=this.triggerElement,t=this.tooltipElement;!e||!t||(t.style.position="fixed",t.style.left="0px",t.style.top="0px",this.floating=ht(e,t,{placement:this.placement,offset:this.offset}))}releaseInteractiveState(){var e,t;(e=this.focusTrap)==null||e.deactivate(),this.focusTrap=null,(t=this.releaseScroll)==null||t.call(this),this.releaseScroll=null}syncInteractiveState(){if(!this.open||!this.interactive){this.releaseInteractiveState();return}const e=this.tooltipElement;e&&(this.releaseScroll||(this.releaseScroll=Sr()),this.focusTrap||(this.focusTrap=zr(this,{initialFocus:e,returnFocus:this.triggerElement}),this.focusTrap.activate()))}activateOpenState(){this.syncDescribedBy(),this.attachPanelListeners(),this.startFloating(),this.syncInteractiveState()}deactivateOpenState(){this.destroyFloating(),this.detachPanelListeners(),this.syncDescribedBy(),this.releaseInteractiveState()}attachTriggerListeners(){const e=this.triggerElement;e&&(e.addEventListener("pointerenter",this.handlePointerEnter),e.addEventListener("pointerleave",this.handlePointerLeave))}detachTriggerListeners(){const e=this.triggerElement;e&&(e.removeEventListener("pointerenter",this.handlePointerEnter),e.removeEventListener("pointerleave",this.handlePointerLeave))}attachPanelListeners(){const e=this.tooltipElement;!e||e===this.panelElement||(this.detachPanelListeners(),this.panelElement=e,e.addEventListener("pointerenter",this.handlePanelPointerEnter),e.addEventListener("pointerleave",this.handlePanelPointerLeave))}detachPanelListeners(){const e=this.panelElement;e&&(e.removeEventListener("pointerenter",this.handlePanelPointerEnter),e.removeEventListener("pointerleave",this.handlePanelPointerLeave),this.panelElement=null)}connectedCallback(){super.connectedCallback(),this.attachTriggerListeners(),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("click",this.handleClick),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.addEventListener("keydown",this.handleDocumentKeydown,!0),this.hasUpdated&&this.open&&this.updateComplete.then(()=>{this.open&&this.activateOpenState()})}disconnectedCallback(){this.clearCloseTimer(),this.controlledOpenGuard.dispose(),this.deactivateOpenState(),this.detachTriggerListeners(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("click",this.handleClick),this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.ownerDocument.removeEventListener("keydown",this.handleDocumentKeydown,!0),super.disconnectedCallback()}willUpdate(e){this.disabled&&this.open&&(this.clearCloseTimer(),this.setInternalOpen(!1)),e.has("trigger")&&e.get("trigger")!==void 0&&(this.clearCloseTimer(),this.setInternalOpen(!1))}updated(e){const t=e.has("open"),r=e.has("placement")||e.has("offset"),s=e.has("interactive");if(!this.open){t&&this.deactivateOpenState();return}if(t){this.activateOpenState();return}r&&this.startFloating(),s&&this.syncInteractiveState()}render(){const e=Number.isFinite(this.maxWidth)?Math.max(0,this.maxWidth):280;return u`
      <slot @slotchange=${this.handleTriggerSlotChange}></slot>
      ${this.open?u`
            <div
              class="tooltip"
              part="tooltip"
              id=${this.tooltipId}
              role="tooltip"
              tabindex="-1"
              data-placement=${this.placement}
              style=${`--_super-tooltip-max-width: ${e}px`}
            >
              ${this.content?this.content:u`<slot name="content"></slot>`}
              ${this.showArrow?u`<span
                    class="arrow"
                    part="arrow"
                    aria-hidden="true"
                  ></span>`:b}
            </div>
          `:b}
    `}}Object.defineProperty(fi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{content:{type:String,reflect:!0},placement:{type:String,reflect:!0},trigger:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0,noAccessor:!0},delay:{type:Number,reflect:!0},offset:{type:Number,reflect:!0},maxWidth:{type:Number,attribute:"max-width",reflect:!0},showArrow:{type:Boolean,attribute:"show-arrow",reflect:!0},interactive:{type:Boolean,reflect:!0},size:{type:String,reflect:!0}}});Object.defineProperty(fi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Nh="super-tooltip",Kh=i=>V(Nh,fi,i);class mi extends T{get fileList(){return this._fileList}set fileList(e){this.controlledValueGuard.markExternal(e),this.setInternalFileList(e)}setInternalFileList(e){const t=this._fileList;this._fileList=[...e],this.requestUpdate("fileList",t)}get value(){return(Array.isArray(this.fileList)?this.fileList:[]).map(e=>e.name)}constructor(){super(),Object.defineProperty(this,"_fileList",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"controlledValueGuard",{enumerable:!0,configurable:!0,writable:!0,value:N({host:this,getValue:()=>this._fileList,setValue:e=>this.setInternalFileList(e),clone:e=>[...e],equals:(e,t)=>e.length===t.length&&e.every((r,s)=>r===t[s])})}),Object.defineProperty(this,"dragging",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.accept="",this.multiple=!1,this.disabled=!1,this.maxCount=void 0,this.maxSize=void 0,this.autoUpload=!1,this._fileList=[],this.size="medium",this.validation="none",this.promptText="选择文件",this.hintText="或将文件拖到这里",this.removeLabel="移除文件",this.accessibleLabel="上传文件"}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input[type='file']"))??null}focus(e){var r;const t=(r=this.renderRoot)==null?void 0:r.querySelector(".dropzone");if(t){t.focus(e);return}super.focus(e)}blur(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector(".dropzone"))==null||t.blur()}formatSize(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}dispatchExceed(e,t){this.emit("super-upload-exceed",{files:e,reason:t})}acceptFile(e){return this.accept.trim()?this.accept.split(",").map(t=>t.trim().toLowerCase()).filter(Boolean).some(t=>t.startsWith(".")?e.name.toLowerCase().endsWith(t):t.endsWith("/*")?e.type.toLowerCase().startsWith(t.slice(0,-1)):e.type.toLowerCase()===t||e.name.toLowerCase().endsWith(t)):!0}addFiles(e){if(this.disabled||e.length===0)return;const r=(this.multiple?e:e.slice(0,1)).filter(z=>this.acceptFile(z));if(r.length===0)return;const s=[],o=[];for(const z of r)this.maxSize!==void 0&&z.size>this.maxSize?o.push(z):s.push(z);if(o.length>0&&this.dispatchExceed(o,"max-size"),s.length===0)return;const a=Array.isArray(this.fileList)?this.fileList:[],n=this.multiple?a:[],l=new Set(a.map(z=>`${z.name}:${z.size}:${z.lastModified}`)),c=s.filter(z=>{const S=`${z.name}:${z.size}:${z.lastModified}`;return l.has(S)?!1:(l.add(S),!0)}),d=this.maxCount===void 0?c.length:Math.max(0,this.maxCount-n.length),p=c.slice(0,d),m=c.slice(p.length);if(m.length>0&&this.dispatchExceed(m,"max-count"),p.length===0)return;const k=this.multiple?[...a,...p]:p,$=this.controlledValueGuard.capture();this.setInternalFileList(k),this.emit("super-upload-change",{fileList:this.fileList}),this.autoUpload&&this.emit("super-upload-submit",{files:p}),this.controlledValueGuard.confirm($)}handleInputChange(e){const t=e.currentTarget;this.addFiles(Array.from(t.files??[])),t.value=""}openPicker(){var e;this.disabled||(e=this.inputElement)==null||e.click()}handleDropzoneClick(e){e.target instanceof Element&&e.target.closest("button, a, input, select, textarea")||this.openPicker()}handleKeydown(e){e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.openPicker())}handleDragOver(e){this.disabled||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),this.dragging=!0,this.requestUpdate())}handleDragLeave(e){const t=e.currentTarget,r=e.relatedTarget;r&&t.contains(r)||(this.dragging=!1,this.requestUpdate())}handleDrop(e){var t;e.preventDefault(),this.dragging=!1,this.requestUpdate(),!this.disabled&&this.addFiles(Array.from(((t=e.dataTransfer)==null?void 0:t.files)??[]))}handleRemove(e){if(this.disabled)return;const t=Array.isArray(this.fileList)?this.fileList:[],r=t.indexOf(e);if(r<0)return;const s=[...t.slice(0,r),...t.slice(r+1)],o=this.controlledValueGuard.capture();this.setInternalFileList(s),this.emit("super-upload-remove",{file:e,fileList:this.fileList}),this.controlledValueGuard.confirm(o)}disconnectedCallback(){this.controlledValueGuard.dispose(),super.disconnectedCallback()}render(){const e=Array.isArray(this.fileList)?this.fileList:[];return u`
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
        ${e.length>0?u`
              <ul class="files" part="file-list" aria-label=${this.accessibleLabel}>
                ${e.map((t,r)=>u`
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
            `:b}
      </div>
    `}}Object.defineProperty(mi,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{accept:{type:String,reflect:!0},multiple:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},maxCount:{type:Number,attribute:"max-count",reflect:!0},maxSize:{type:Number,attribute:"max-size",reflect:!0},autoUpload:{type:Boolean,attribute:"auto-upload",reflect:!0},fileList:{attribute:!1,noAccessor:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},promptText:{type:String,attribute:"prompt-text"},hintText:{type:String,attribute:"hint-text"},removeLabel:{type:String,attribute:"remove-label"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(mi,"styles",{enumerable:!0,configurable:!0,writable:!0,value:M`
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
  `});const Rh="super-upload",Fh=i=>V(Rh,mi,i),Bh=[Nu,Ip,Mp,Np,Du,Rp,Bp,Zp,td,id,nd,pd,hd,_d,Ed,Ld,Md,Bd,Hd,Wd,Qd,th,ih,oh,lh,uh,bh,gh,yh,wh,Sh,Ch,Ph,Mh,Kh,Fh];function Gh(i){Bh.forEach(e=>{e(i)})}Gh();export{Uh as t};
