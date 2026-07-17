import{d as _,o as a,c as p,r as d,n as V,a as U,t as E,b as x,w as h,e as m,T as Fe,_ as $,u as jt,i as qt,f as Gt,g as je,h as T,j as ae,k as y,l as Q,m as f,p as c,q as B,s as H,v as J,x as He,y as ee,z as Se,A as qe,B as kt,C as Kt,D as Wt,E as te,F as C,G as O,H as $t,I as Pe,J as k,K as re,L as xt,M as Ae,N as ke,O as Le,P as Xt,Q as yt,R as Yt,S as Jt,U as Zt,V as wt,W as Qt,X as St,Y as Pt,Z as es,$ as ts,a0 as ss,a1 as os}from"./framework.o5qAeLTz.js";const ns=_({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(s){return(e,t)=>(a(),p("span",{class:V(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[U(E(e.text),1)])],2))}}),rs={key:0,class:"VPBackdrop"},is=_({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(s){return(e,t)=>(a(),x(Fe,{name:"fade"},{default:h(()=>[e.show?(a(),p("div",rs)):m("",!0)]),_:1}))}}),as=$(is,[["__scopeId","data-v-6f6fa9fb"]]),S=jt;function ls(s,e){let t,o=!1;return()=>{t&&clearTimeout(t),o?t=setTimeout(s,e):(s(),(o=!0)&&setTimeout(()=>o=!1,e))}}function Oe(s){return/^\//.test(s)?s:`/${s}`}function Ge(s){const{pathname:e,search:t,hash:o,protocol:n}=new URL(s,"http://a.com");if(qt(s)||s.startsWith("#")||!n.startsWith("http")||!Gt(e))return s;const{site:r}=S(),i=e.endsWith("/")||e.endsWith(".html")?s:s.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${o}`);return je(i)}const Ke=T(ae?location.hash:"");ae&&window.addEventListener("hashchange",()=>{Ke.value=location.hash});function be({removeCurrent:s=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:o,page:n,theme:r}=S(),i=y(()=>{var l,b;return{label:(l=t.value.locales[o.value])==null?void 0:l.label,link:((b=t.value.locales[o.value])==null?void 0:b.link)||(o.value==="root"?"/":`/${o.value}/`)}});return{localeLinks:y(()=>Object.entries(t.value.locales).flatMap(([l,b])=>s&&i.value.label===b.label?[]:{text:b.label,link:cs(b.link||(l==="root"?"/":`/${l}/`),r.value.i18nRouting!==!1&&e,n.value.relativePath.slice(i.value.link.length-1),!t.value.cleanUrls)+Ke.value})),currentLang:i}}function cs(s,e,t,o){return e?s.replace(/\/$/,"")+Oe(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):s}const us=s=>(B("data-v-a7a1a61a"),s=s(),H(),s),ds={class:"NotFound"},ps={class:"code"},hs={class:"title"},fs=us(()=>f("div",{class:"divider"},null,-1)),bs={class:"quote"},vs={class:"action"},ms=["href","aria-label"],gs=_({__name:"NotFound",setup(s){const{site:e,theme:t}=S(),{localeLinks:o}=be({removeCurrent:!1}),n=T("/");return Q(()=>{var i;const r=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");o.value.length&&(n.value=((i=o.value.find(({link:u})=>u.startsWith(r)))==null?void 0:i.link)||o.value[0].link)}),(r,i)=>{var u,l,b,g,v;return a(),p("div",ds,[f("p",ps,E(((u=c(t).notFound)==null?void 0:u.code)??"404"),1),f("h1",hs,E(((l=c(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),fs,f("blockquote",bs,E(((b=c(t).notFound)==null?void 0:b.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),f("div",vs,[f("a",{class:"link",href:c(je)(n.value),"aria-label":((g=c(t).notFound)==null?void 0:g.linkLabel)??"go to home"},E(((v=c(t).notFound)==null?void 0:v.linkText)??"Take me home"),9,ms)])])}}}),_s=$(gs,[["__scopeId","data-v-a7a1a61a"]]);function At(s,e){if(Array.isArray(s))return $e(s);if(s==null)return[];e=Oe(e);const t=Object.keys(s).sort((n,r)=>r.split("/").length-n.split("/").length).find(n=>e.startsWith(Oe(n))),o=t?s[t]:[];return Array.isArray(o)?$e(o):$e(o.items,o.base)}function ks(s){const e=[];let t=0;for(const o in s){const n=s[o];if(n.items){t=e.push(n);continue}e[t]||e.push({items:[]}),e[t].items.push(n)}return e}function $s(s){const e=[];function t(o){for(const n of o)n.text&&n.link&&e.push({text:n.text,link:n.link,docFooterText:n.docFooterText}),n.items&&t(n.items)}return t(s),e}function Ue(s,e){return Array.isArray(e)?e.some(t=>Ue(s,t)):J(s,e.link)?!0:e.items?Ue(s,e.items):!1}function $e(s,e){return[...s].map(t=>{const o={...t},n=o.base||e;return n&&o.link&&(o.link=n+o.link),o.items&&(o.items=$e(o.items,n)),o})}function j(){const{frontmatter:s,page:e,theme:t}=S(),o=He("(min-width: 960px)"),n=T(!1),r=y(()=>{const M=t.value.sidebar,z=e.value.relativePath;return M?At(M,z):[]}),i=T(r.value);ee(r,(M,z)=>{JSON.stringify(M)!==JSON.stringify(z)&&(i.value=r.value)});const u=y(()=>s.value.sidebar!==!1&&i.value.length>0&&s.value.layout!=="home"),l=y(()=>b?s.value.aside==null?t.value.aside==="left":s.value.aside==="left":!1),b=y(()=>s.value.layout==="home"?!1:s.value.aside!=null?!!s.value.aside:t.value.aside!==!1),g=y(()=>u.value&&o.value),v=y(()=>u.value?ks(i.value):[]);function P(){n.value=!0}function L(){n.value=!1}function N(){n.value?L():P()}return{isOpen:n,sidebar:i,sidebarGroups:v,hasSidebar:u,hasAside:b,leftAside:l,isSidebarEnabled:g,open:P,close:L,toggle:N}}function xs(s,e){let t;Se(()=>{t=s.value?document.activeElement:void 0}),Q(()=>{window.addEventListener("keyup",o)}),qe(()=>{window.removeEventListener("keyup",o)});function o(n){n.key==="Escape"&&s.value&&(e(),t==null||t.focus())}}function ys(s){const{page:e}=S(),t=T(!1),o=y(()=>s.value.collapsed!=null),n=y(()=>!!s.value.link),r=T(!1),i=()=>{r.value=J(e.value.relativePath,s.value.link)};ee([e,s,Ke],i),Q(i);const u=y(()=>r.value?!0:s.value.items?Ue(e.value.relativePath,s.value.items):!1),l=y(()=>!!(s.value.items&&s.value.items.length));Se(()=>{t.value=!!(o.value&&s.value.collapsed)}),kt(()=>{(r.value||u.value)&&(t.value=!1)});function b(){o.value&&(t.value=!t.value)}return{collapsed:t,collapsible:o,isLink:n,isActiveLink:r,hasActiveLink:u,hasChildren:l,toggle:b}}function ws(){const{hasSidebar:s}=j(),e=He("(min-width: 960px)"),t=He("(min-width: 1280px)");return{isAsideEnabled:y(()=>!t.value&&!e.value?!1:s.value?t.value:e.value)}}const Re=[];function Lt(s){return typeof s.outline=="object"&&!Array.isArray(s.outline)&&s.outline.label||s.outlineTitle||"On this page"}function We(s){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const o=Number(t.tagName[1]);return{element:t,title:Ss(t),link:"#"+t.id,level:o}});return Ps(e,s)}function Ss(s){let e="";for(const t of s.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function Ps(s,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[o,n]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;s=s.filter(i=>i.level>=o&&i.level<=n),Re.length=0;for(const{element:i,link:u}of s)Re.push({element:i,link:u});const r=[];e:for(let i=0;i<s.length;i++){const u=s[i];if(i===0)r.push(u);else{for(let l=i-1;l>=0;l--){const b=s[l];if(b.level<u.level){(b.children||(b.children=[])).push(u);continue e}}r.push(u)}}return r}function As(s,e){const{isAsideEnabled:t}=ws(),o=ls(r,100);let n=null;Q(()=>{requestAnimationFrame(r),window.addEventListener("scroll",o)}),Kt(()=>{i(location.hash)}),qe(()=>{window.removeEventListener("scroll",o)});function r(){if(!t.value)return;const u=window.scrollY,l=window.innerHeight,b=document.body.offsetHeight,g=Math.abs(u+l-b)<1,v=Re.map(({element:L,link:N})=>({link:N,top:Ls(L)})).filter(({top:L})=>!Number.isNaN(L)).sort((L,N)=>L.top-N.top);if(!v.length){i(null);return}if(u<1){i(null);return}if(g){i(v[v.length-1].link);return}let P=null;for(const{link:L,top:N}of v){if(N>u+Wt()+4)break;P=L}i(P)}function i(u){n&&n.classList.remove("active"),u==null?n=null:n=s.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const l=n;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Ls(s){let e=0;for(;s!==document.body;){if(s===null)return NaN;e+=s.offsetTop,s=s.offsetParent}return e}const Es=["href","title"],Ts=_({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(s){function e({target:t}){const o=t.href.split("#")[1],n=document.getElementById(decodeURIComponent(o));n==null||n.focus({preventScroll:!0})}return(t,o)=>{const n=te("VPDocOutlineItem",!0);return a(),p("ul",{class:V(["VPDocOutlineItem",t.root?"root":"nested"])},[(a(!0),p(C,null,O(t.headers,({children:r,link:i,title:u})=>(a(),p("li",null,[f("a",{class:"outline-link",href:i,onClick:e,title:u},E(u),9,Es),r!=null&&r.length?(a(),x(n,{key:0,headers:r},null,8,["headers"])):m("",!0)]))),256))],2)}}}),Et=$(Ts,[["__scopeId","data-v-a2afcce7"]]),zs=s=>(B("data-v-7b6871a8"),s=s(),H(),s),Vs={class:"content"},Cs={class:"outline-title",role:"heading","aria-level":"2"},Ns={"aria-labelledby":"doc-outline-aria-label"},Is=zs(()=>f("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Ms=_({__name:"VPDocAsideOutline",setup(s){const{frontmatter:e,theme:t}=S(),o=$t([]);Pe(()=>{o.value=We(e.value.outline??t.value.outline)});const n=T(),r=T();return As(n,r),(i,u)=>(a(),p("div",{class:V(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:n,role:"navigation"},[f("div",Vs,[f("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),f("div",Cs,E(c(Lt)(c(t))),1),f("nav",Ns,[Is,k(Et,{headers:o.value,root:!0},null,8,["headers"])])])],2))}}),Bs=$(Ms,[["__scopeId","data-v-7b6871a8"]]),Hs={class:"VPDocAsideCarbonAds"},Os=_({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(s){const e=()=>null;return(t,o)=>(a(),p("div",Hs,[k(c(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Us=s=>(B("data-v-951edd61"),s=s(),H(),s),Rs={class:"VPDocAside"},Ds=Us(()=>f("div",{class:"spacer"},null,-1)),Fs=_({__name:"VPDocAside",setup(s){const{theme:e}=S();return(t,o)=>(a(),p("div",Rs,[d(t.$slots,"aside-top",{},void 0,!0),d(t.$slots,"aside-outline-before",{},void 0,!0),k(Bs),d(t.$slots,"aside-outline-after",{},void 0,!0),Ds,d(t.$slots,"aside-ads-before",{},void 0,!0),c(e).carbonAds?(a(),x(Os,{key:0,"carbon-ads":c(e).carbonAds},null,8,["carbon-ads"])):m("",!0),d(t.$slots,"aside-ads-after",{},void 0,!0),d(t.$slots,"aside-bottom",{},void 0,!0)]))}}),js=$(Fs,[["__scopeId","data-v-951edd61"]]);function qs(){const{theme:s,page:e}=S();return y(()=>{const{text:t="Edit this page",pattern:o=""}=s.value.editLink||{};let n;return typeof o=="function"?n=o(e.value):n=o.replace(/:path/g,e.value.filePath),{url:n,text:t}})}function Gs(){const{page:s,theme:e,frontmatter:t}=S();return y(()=>{var l,b,g,v,P,L,N,M;const o=At(e.value.sidebar,s.value.relativePath),n=$s(o),r=n.findIndex(z=>J(s.value.relativePath,z.link)),i=((l=e.value.docFooter)==null?void 0:l.prev)===!1&&!t.value.prev||t.value.prev===!1,u=((b=e.value.docFooter)==null?void 0:b.next)===!1&&!t.value.next||t.value.next===!1;return{prev:i?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((g=n[r-1])==null?void 0:g.docFooterText)??((v=n[r-1])==null?void 0:v.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((P=n[r-1])==null?void 0:P.link)},next:u?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((L=n[r+1])==null?void 0:L.docFooterText)??((N=n[r+1])==null?void 0:N.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=n[r+1])==null?void 0:M.link)}}})}const D=_({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(s){const e=s,t=y(()=>e.tag??(e.href?"a":"span")),o=y(()=>e.href&&xt.test(e.href));return(n,r)=>(a(),x(re(t.value),{class:V(["VPLink",{link:n.href,"vp-external-link-icon":o.value,"no-icon":n.noIcon}]),href:n.href?c(Ge)(n.href):void 0,target:n.target??(o.value?"_blank":void 0),rel:n.rel??(o.value?"noreferrer":void 0)},{default:h(()=>[d(n.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ks={class:"VPLastUpdated"},Ws=["datetime"],Xs=_({__name:"VPDocFooterLastUpdated",setup(s){const{theme:e,page:t,frontmatter:o,lang:n}=S(),r=y(()=>new Date(o.value.lastUpdated??t.value.lastUpdated)),i=y(()=>r.value.toISOString()),u=T("");return Q(()=>{Se(()=>{var l,b,g;u.value=new Intl.DateTimeFormat((b=(l=e.value.lastUpdated)==null?void 0:l.formatOptions)!=null&&b.forceLocale?n.value:void 0,((g=e.value.lastUpdated)==null?void 0:g.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(l,b)=>{var g;return a(),p("p",Ks,[U(E(((g=c(e).lastUpdated)==null?void 0:g.text)||c(e).lastUpdatedText||"Last updated")+": ",1),f("time",{datetime:i.value},E(u.value),9,Ws)])}}}),Ys=$(Xs,[["__scopeId","data-v-38b6dfd9"]]),Js=s=>(B("data-v-bbe5e75c"),s=s(),H(),s),Zs={key:0,class:"VPDocFooter"},Qs={key:0,class:"edit-info"},eo={key:0,class:"edit-link"},to=Js(()=>f("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),so={key:1,class:"last-updated"},oo={key:1,class:"prev-next"},no={class:"pager"},ro=["innerHTML"],io=["innerHTML"],ao={class:"pager"},lo=["innerHTML"],co=["innerHTML"],uo=_({__name:"VPDocFooter",setup(s){const{theme:e,page:t,frontmatter:o}=S(),n=qs(),r=Gs(),i=y(()=>e.value.editLink&&o.value.editLink!==!1),u=y(()=>t.value.lastUpdated&&o.value.lastUpdated!==!1),l=y(()=>i.value||u.value||r.value.prev||r.value.next);return(b,g)=>{var v,P,L,N;return l.value?(a(),p("footer",Zs,[d(b.$slots,"doc-footer-before",{},void 0,!0),i.value||u.value?(a(),p("div",Qs,[i.value?(a(),p("div",eo,[k(D,{class:"edit-link-button",href:c(n).url,"no-icon":!0},{default:h(()=>[to,U(" "+E(c(n).text),1)]),_:1},8,["href"])])):m("",!0),u.value?(a(),p("div",so,[k(Ys)])):m("",!0)])):m("",!0),(v=c(r).prev)!=null&&v.link||(P=c(r).next)!=null&&P.link?(a(),p("nav",oo,[f("div",no,[(L=c(r).prev)!=null&&L.link?(a(),x(D,{key:0,class:"pager-link prev",href:c(r).prev.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=c(e).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,ro),f("span",{class:"title",innerHTML:c(r).prev.text},null,8,io)]}),_:1},8,["href"])):m("",!0)]),f("div",ao,[(N=c(r).next)!=null&&N.link?(a(),x(D,{key:0,class:"pager-link next",href:c(r).next.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=c(e).docFooter)==null?void 0:M.next)||"Next page"},null,8,lo),f("span",{class:"title",innerHTML:c(r).next.text},null,8,co)]}),_:1},8,["href"])):m("",!0)])])):m("",!0)])):m("",!0)}}}),po=$(uo,[["__scopeId","data-v-bbe5e75c"]]),ho=s=>(B("data-v-5fc3206a"),s=s(),H(),s),fo={class:"container"},bo=ho(()=>f("div",{class:"aside-curtain"},null,-1)),vo={class:"aside-container"},mo={class:"aside-content"},go={class:"content"},_o={class:"content-container"},ko={class:"main"},$o=_({__name:"VPDoc",setup(s){const{theme:e}=S(),t=Ae(),{hasSidebar:o,hasAside:n,leftAside:r}=j(),i=y(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,l)=>{const b=te("Content");return a(),p("div",{class:V(["VPDoc",{"has-sidebar":c(o),"has-aside":c(n)}])},[d(u.$slots,"doc-top",{},void 0,!0),f("div",fo,[c(n)?(a(),p("div",{key:0,class:V(["aside",{"left-aside":c(r)}])},[bo,f("div",vo,[f("div",mo,[k(js,null,{"aside-top":h(()=>[d(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):m("",!0),f("div",go,[f("div",_o,[d(u.$slots,"doc-before",{},void 0,!0),f("main",ko,[k(b,{class:V(["vp-doc",[i.value,c(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(po,null,{"doc-footer-before":h(()=>[d(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(u.$slots,"doc-after",{},void 0,!0)])])]),d(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),xo=$($o,[["__scopeId","data-v-5fc3206a"]]),yo=_({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(s){const e=s,t=y(()=>e.href&&xt.test(e.href)),o=y(()=>e.tag||e.href?"a":"button");return(n,r)=>(a(),x(re(o.value),{class:V(["VPButton",[n.size,n.theme]]),href:n.href?c(Ge)(n.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:h(()=>[U(E(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),wo=$(yo,[["__scopeId","data-v-3aa6481e"]]),So=["src","alt"],Po=_({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(s){return(e,t)=>{const o=te("VPImage",!0);return e.image?(a(),p(C,{key:0},[typeof e.image=="string"||"src"in e.image?(a(),p("img",ke({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:c(je)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,So)):(a(),p(C,{key:1},[k(o,ke({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),k(o,ke({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):m("",!0)}}}),ye=$(Po,[["__scopeId","data-v-31544fe0"]]),Ao=s=>(B("data-v-5a0e971f"),s=s(),H(),s),Lo={class:"container"},Eo={class:"main"},To={key:0,class:"name"},zo=["innerHTML"],Vo=["innerHTML"],Co=["innerHTML"],No={key:0,class:"actions"},Io={key:0,class:"image"},Mo={class:"image-container"},Bo=Ao(()=>f("div",{class:"image-bg"},null,-1)),Ho=_({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(s){const e=Le("hero-image-slot-exists");return(t,o)=>(a(),p("div",{class:V(["VPHero",{"has-image":t.image||c(e)}])},[f("div",Lo,[f("div",Eo,[d(t.$slots,"home-hero-info-before",{},void 0,!0),d(t.$slots,"home-hero-info",{},()=>[t.name?(a(),p("h1",To,[f("span",{innerHTML:t.name,class:"clip"},null,8,zo)])):m("",!0),t.text?(a(),p("p",{key:1,innerHTML:t.text,class:"text"},null,8,Vo)):m("",!0),t.tagline?(a(),p("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Co)):m("",!0)],!0),d(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(a(),p("div",No,[(a(!0),p(C,null,O(t.actions,n=>(a(),p("div",{key:n.link,class:"action"},[k(wo,{tag:"a",size:"medium",theme:n.theme,text:n.text,href:n.link,target:n.target,rel:n.rel},null,8,["theme","text","href","target","rel"])]))),128))])):m("",!0),d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||c(e)?(a(),p("div",Io,[f("div",Mo,[Bo,d(t.$slots,"home-hero-image",{},()=>[t.image?(a(),x(ye,{key:0,class:"image-src",image:t.image},null,8,["image"])):m("",!0)],!0)])])):m("",!0)])],2))}}),Oo=$(Ho,[["__scopeId","data-v-5a0e971f"]]),Uo=_({__name:"VPHomeHero",setup(s){const{frontmatter:e}=S();return(t,o)=>c(e).hero?(a(),x(Oo,{key:0,class:"VPHomeHero",name:c(e).hero.name,text:c(e).hero.text,tagline:c(e).hero.tagline,image:c(e).hero.image,actions:c(e).hero.actions},{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):m("",!0)}}),Ro=s=>(B("data-v-29c05f11"),s=s(),H(),s),Do={class:"box"},Fo={key:0,class:"icon"},jo=["innerHTML"],qo=["innerHTML"],Go=["innerHTML"],Ko={key:4,class:"link-text"},Wo={class:"link-text-value"},Xo=Ro(()=>f("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Yo=_({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(s){return(e,t)=>(a(),x(D,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[f("article",Do,[typeof e.icon=="object"&&e.icon.wrap?(a(),p("div",Fo,[k(ye,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(a(),x(ye,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(a(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,jo)):m("",!0),f("h2",{class:"title",innerHTML:e.title},null,8,qo),e.details?(a(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Go)):m("",!0),e.linkText?(a(),p("div",Ko,[f("p",Wo,[U(E(e.linkText)+" ",1),Xo])])):m("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Jo=$(Yo,[["__scopeId","data-v-29c05f11"]]),Zo={key:0,class:"VPFeatures"},Qo={class:"container"},en={class:"items"},tn=_({__name:"VPFeatures",props:{features:{}},setup(s){const e=s,t=y(()=>{const o=e.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,n)=>o.features?(a(),p("div",Zo,[f("div",Qo,[f("div",en,[(a(!0),p(C,null,O(o.features,r=>(a(),p("div",{key:r.title,class:V(["item",[t.value]])},[k(Jo,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):m("",!0)}}),sn=$(tn,[["__scopeId","data-v-e7779453"]]),on=_({__name:"VPHomeFeatures",setup(s){const{frontmatter:e}=S();return(t,o)=>c(e).features?(a(),x(sn,{key:0,class:"VPHomeFeatures",features:c(e).features},null,8,["features"])):m("",!0)}}),nn=_({__name:"VPHomeContent",setup(s){const{width:e}=Xt({includeScrollbar:!1});return(t,o)=>(a(),p("div",{class:"vp-doc container",style:yt(c(e)?{"--vp-offset":`calc(50% - ${c(e)/2}px)`}:{})},[d(t.$slots,"default",{},void 0,!0)],4))}}),rn=$(nn,[["__scopeId","data-v-cd81b872"]]),an={class:"VPHome"},ln=_({__name:"VPHome",setup(s){const{frontmatter:e}=S();return(t,o)=>{const n=te("Content");return a(),p("div",an,[d(t.$slots,"home-hero-before",{},void 0,!0),k(Uo,null,{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(t.$slots,"home-hero-after",{},void 0,!0),d(t.$slots,"home-features-before",{},void 0,!0),k(on),d(t.$slots,"home-features-after",{},void 0,!0),c(e).markdownStyles!==!1?(a(),x(rn,{key:0},{default:h(()=>[k(n)]),_:1})):(a(),x(n,{key:1}))])}}}),cn=$(ln,[["__scopeId","data-v-0d7cbeea"]]),un={},dn={class:"VPPage"};function pn(s,e){const t=te("Content");return a(),p("div",dn,[d(s.$slots,"page-top"),k(t),d(s.$slots,"page-bottom")])}const hn=$(un,[["render",pn]]),fn=_({__name:"VPContent",setup(s){const{page:e,frontmatter:t}=S(),{hasSidebar:o}=j();return(n,r)=>(a(),p("div",{class:V(["VPContent",{"has-sidebar":c(o),"is-home":c(t).layout==="home"}]),id:"VPContent"},[c(e).isNotFound?d(n.$slots,"not-found",{key:0},()=>[k(_s)],!0):c(t).layout==="page"?(a(),x(hn,{key:1},{"page-top":h(()=>[d(n.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(n.$slots,"page-bottom",{},void 0,!0)]),_:3})):c(t).layout==="home"?(a(),x(cn,{key:2},{"home-hero-before":h(()=>[d(n.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(n.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(n.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(n.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(n.$slots,"home-features-after",{},void 0,!0)]),_:3})):c(t).layout&&c(t).layout!=="doc"?(a(),x(re(c(t).layout),{key:3})):(a(),x(xo,{key:4},{"doc-top":h(()=>[d(n.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(n.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[d(n.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(n.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(n.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[d(n.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[d(n.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(n.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(n.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(n.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[d(n.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),bn=$(fn,[["__scopeId","data-v-a0eadabb"]]),vn={class:"container"},mn=["innerHTML"],gn=["innerHTML"],_n=_({__name:"VPFooter",setup(s){const{theme:e,frontmatter:t}=S(),{hasSidebar:o}=j();return(n,r)=>c(e).footer&&c(t).footer!==!1?(a(),p("footer",{key:0,class:V(["VPFooter",{"has-sidebar":c(o)}])},[f("div",vn,[c(e).footer.message?(a(),p("p",{key:0,class:"message",innerHTML:c(e).footer.message},null,8,mn)):m("",!0),c(e).footer.copyright?(a(),p("p",{key:1,class:"copyright",innerHTML:c(e).footer.copyright},null,8,gn)):m("",!0)])],2)):m("",!0)}}),kn=$(_n,[["__scopeId","data-v-3181bdf6"]]);function Tt(){const{theme:s,frontmatter:e}=S(),t=$t([]),o=y(()=>t.value.length>0);return Pe(()=>{t.value=We(e.value.outline??s.value.outline)}),{headers:t,hasLocalNav:o}}const $n=s=>(B("data-v-cba91b6f"),s=s(),H(),s),xn=$n(()=>f("span",{class:"vpi-chevron-right icon"},null,-1)),yn={class:"header"},wn={class:"outline"},Sn=_({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(s){const e=s,{theme:t}=S(),o=T(!1),n=T(0),r=T(),i=T();Yt(r,()=>{o.value=!1}),Jt("Escape",()=>{o.value=!1}),Pe(()=>{o.value=!1});function u(){o.value=!o.value,n.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function l(g){g.target.classList.contains("outline-link")&&(i.value&&(i.value.style.transition="none"),Zt(()=>{o.value=!1}))}function b(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,v)=>(a(),p("div",{class:"VPLocalNavOutlineDropdown",style:yt({"--vp-vh":n.value+"px"}),ref_key:"main",ref:r},[g.headers.length>0?(a(),p("button",{key:0,onClick:u,class:V({open:o.value})},[U(E(c(Lt)(c(t)))+" ",1),xn],2)):(a(),p("button",{key:1,onClick:b},E(c(t).returnToTopLabel||"Return to top"),1)),k(Fe,{name:"flyout"},{default:h(()=>[o.value?(a(),p("div",{key:0,ref_key:"items",ref:i,class:"items",onClick:l},[f("div",yn,[f("a",{class:"top-link",href:"#",onClick:b},E(c(t).returnToTopLabel||"Return to top"),1)]),f("div",wn,[k(Et,{headers:g.headers},null,8,["headers"])])],512)):m("",!0)]),_:1})],4))}}),Pn=$(Sn,[["__scopeId","data-v-cba91b6f"]]),An=s=>(B("data-v-3ed22da4"),s=s(),H(),s),Ln={class:"container"},En=["aria-expanded"],Tn=An(()=>f("span",{class:"vpi-align-left menu-icon"},null,-1)),zn={class:"menu-text"},Vn=_({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(s){const{theme:e,frontmatter:t}=S(),{hasSidebar:o}=j(),{headers:n}=Tt(),{y:r}=wt(),i=T(0);Q(()=>{i.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Pe(()=>{n.value=We(t.value.outline??e.value.outline)});const u=y(()=>n.value.length===0),l=y(()=>u.value&&!o.value),b=y(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:u.value,fixed:l.value}));return(g,v)=>c(t).layout!=="home"&&(!l.value||c(r)>=i.value)?(a(),p("div",{key:0,class:V(b.value)},[f("div",Ln,[c(o)?(a(),p("button",{key:0,class:"menu","aria-expanded":g.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=P=>g.$emit("open-menu"))},[Tn,f("span",zn,E(c(e).sidebarMenuLabel||"Menu"),1)],8,En)):m("",!0),k(Pn,{headers:c(n),navHeight:i.value},null,8,["headers","navHeight"])])],2)):m("",!0)}}),Cn=$(Vn,[["__scopeId","data-v-3ed22da4"]]);function Nn(){const s=T(!1);function e(){s.value=!0,window.addEventListener("resize",n)}function t(){s.value=!1,window.removeEventListener("resize",n)}function o(){s.value?t():e()}function n(){window.outerWidth>=768&&t()}const r=Ae();return ee(()=>r.path,t),{isScreenOpen:s,openScreen:e,closeScreen:t,toggleScreen:o}}const In={},Mn={class:"VPSwitch",type:"button",role:"switch"},Bn={class:"check"},Hn={key:0,class:"icon"};function On(s,e){return a(),p("button",Mn,[f("span",Bn,[s.$slots.default?(a(),p("span",Hn,[d(s.$slots,"default",{},void 0,!0)])):m("",!0)])])}const Un=$(In,[["render",On],["__scopeId","data-v-3c9bcffa"]]),zt=s=>(B("data-v-a529835a"),s=s(),H(),s),Rn=zt(()=>f("span",{class:"vpi-sun sun"},null,-1)),Dn=zt(()=>f("span",{class:"vpi-moon moon"},null,-1)),Fn=_({__name:"VPSwitchAppearance",setup(s){const{isDark:e,theme:t}=S(),o=Le("toggle-appearance",()=>{e.value=!e.value}),n=y(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(r,i)=>(a(),x(Un,{title:n.value,class:"VPSwitchAppearance","aria-checked":c(e),onClick:c(o)},{default:h(()=>[Rn,Dn]),_:1},8,["title","aria-checked","onClick"]))}}),Xe=$(Fn,[["__scopeId","data-v-a529835a"]]),jn={key:0,class:"VPNavBarAppearance"},qn=_({__name:"VPNavBarAppearance",setup(s){const{site:e}=S();return(t,o)=>c(e).appearance&&c(e).appearance!=="force-dark"?(a(),p("div",jn,[k(Xe)])):m("",!0)}}),Gn=$(qn,[["__scopeId","data-v-786f23a7"]]),Ye=T();let Vt=!1,Ce=0;function Kn(s){const e=T(!1);if(ae){!Vt&&Wn(),Ce++;const t=ee(Ye,o=>{var n,r,i;o===s.el.value||(n=s.el.value)!=null&&n.contains(o)?(e.value=!0,(r=s.onFocus)==null||r.call(s)):(e.value=!1,(i=s.onBlur)==null||i.call(s))});qe(()=>{t(),Ce--,Ce||Xn()})}return Qt(e)}function Wn(){document.addEventListener("focusin",Ct),Vt=!0,Ye.value=document.activeElement}function Xn(){document.removeEventListener("focusin",Ct)}function Ct(){Ye.value=document.activeElement}const Yn={class:"VPMenuLink"},Jn=_({__name:"VPMenuLink",props:{item:{}},setup(s){const{page:e}=S();return(t,o)=>(a(),p("div",Yn,[k(D,{class:V({active:c(J)(c(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:h(()=>[U(E(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),Ee=$(Jn,[["__scopeId","data-v-1f793dae"]]),Zn={class:"VPMenuGroup"},Qn={key:0,class:"title"},er=_({__name:"VPMenuGroup",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),p("div",Zn,[e.text?(a(),p("p",Qn,E(e.text),1)):m("",!0),(a(!0),p(C,null,O(e.items,o=>(a(),p(C,null,["link"in o?(a(),x(Ee,{key:0,item:o},null,8,["item"])):m("",!0)],64))),256))]))}}),tr=$(er,[["__scopeId","data-v-11001275"]]),sr={class:"VPMenu"},or={key:0,class:"items"},nr=_({__name:"VPMenu",props:{items:{}},setup(s){return(e,t)=>(a(),p("div",sr,[e.items?(a(),p("div",or,[(a(!0),p(C,null,O(e.items,o=>(a(),p(C,{key:o.text},["link"in o?(a(),x(Ee,{key:0,item:o},null,8,["item"])):(a(),x(tr,{key:1,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):m("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),rr=$(nr,[["__scopeId","data-v-40114911"]]),ir=s=>(B("data-v-ca516adc"),s=s(),H(),s),ar=["aria-expanded","aria-label"],lr={key:0,class:"text"},cr=["innerHTML"],ur=ir(()=>f("span",{class:"vpi-chevron-down text-icon"},null,-1)),dr={key:1,class:"vpi-more-horizontal icon"},pr={class:"menu"},hr=_({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(s){const e=T(!1),t=T();Kn({el:t,onBlur:o});function o(){e.value=!1}return(n,r)=>(a(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=i=>e.value=!0),onMouseleave:r[2]||(r[2]=i=>e.value=!1)},[f("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":n.label,onClick:r[0]||(r[0]=i=>e.value=!e.value)},[n.button||n.icon?(a(),p("span",lr,[n.icon?(a(),p("span",{key:0,class:V([n.icon,"option-icon"])},null,2)):m("",!0),n.button?(a(),p("span",{key:1,innerHTML:n.button},null,8,cr)):m("",!0),ur])):(a(),p("span",dr))],8,ar),f("div",pr,[k(rr,{items:n.items},{default:h(()=>[d(n.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Je=$(hr,[["__scopeId","data-v-ca516adc"]]),fr=["href","aria-label","innerHTML"],br=_({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(s){const e=s,t=y(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(o,n)=>(a(),p("a",{class:"VPSocialLink no-icon",href:o.link,"aria-label":o.ariaLabel??(typeof o.icon=="string"?o.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,fr))}}),vr=$(br,[["__scopeId","data-v-e5af8ed1"]]),mr={class:"VPSocialLinks"},gr=_({__name:"VPSocialLinks",props:{links:{}},setup(s){return(e,t)=>(a(),p("div",mr,[(a(!0),p(C,null,O(e.links,({link:o,icon:n,ariaLabel:r})=>(a(),x(vr,{key:o,icon:n,link:o,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ze=$(gr,[["__scopeId","data-v-2ea1f528"]]),_r={key:0,class:"group translations"},kr={class:"trans-title"},$r={key:1,class:"group"},xr={class:"item appearance"},yr={class:"label"},wr={class:"appearance-action"},Sr={key:2,class:"group"},Pr={class:"item social-links"},Ar=_({__name:"VPNavBarExtra",setup(s){const{site:e,theme:t}=S(),{localeLinks:o,currentLang:n}=be({correspondingLink:!0}),r=y(()=>o.value.length&&n.value.label||e.value.appearance||t.value.socialLinks);return(i,u)=>r.value?(a(),x(Je,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[c(o).length&&c(n).label?(a(),p("div",_r,[f("p",kr,E(c(n).label),1),(a(!0),p(C,null,O(c(o),l=>(a(),x(Ee,{key:l.link,item:l},null,8,["item"]))),128))])):m("",!0),c(e).appearance&&c(e).appearance!=="force-dark"?(a(),p("div",$r,[f("div",xr,[f("p",yr,E(c(t).darkModeSwitchLabel||"Appearance"),1),f("div",wr,[k(Xe)])])])):m("",!0),c(t).socialLinks?(a(),p("div",Sr,[f("div",Pr,[k(Ze,{class:"social-links-list",links:c(t).socialLinks},null,8,["links"])])])):m("",!0)]),_:1})):m("",!0)}}),Lr=$(Ar,[["__scopeId","data-v-918c0501"]]),Er=s=>(B("data-v-dbac2bdb"),s=s(),H(),s),Tr=["aria-expanded"],zr=Er(()=>f("span",{class:"container"},[f("span",{class:"top"}),f("span",{class:"middle"}),f("span",{class:"bottom"})],-1)),Vr=[zr],Cr=_({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(s){return(e,t)=>(a(),p("button",{type:"button",class:V(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=o=>e.$emit("click"))},Vr,10,Tr))}}),Nr=$(Cr,[["__scopeId","data-v-dbac2bdb"]]),Ir=["innerHTML"],Mr=_({__name:"VPNavBarMenuLink",props:{item:{}},setup(s){const{page:e}=S();return(t,o)=>(a(),x(D,{class:V({VPNavBarMenuLink:!0,active:c(J)(c(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:h(()=>[f("span",{innerHTML:t.item.text},null,8,Ir)]),_:1},8,["class","href","target","rel"]))}}),Br=$(Mr,[["__scopeId","data-v-1513c207"]]),Hr=_({__name:"VPNavBarMenuGroup",props:{item:{}},setup(s){const e=s,{page:t}=S(),o=r=>"link"in r?J(t.value.relativePath,r.link,!!e.item.activeMatch):r.items.some(o),n=y(()=>o(e.item));return(r,i)=>(a(),x(Je,{class:V({VPNavBarMenuGroup:!0,active:c(J)(c(t).relativePath,r.item.activeMatch,!!r.item.activeMatch)||n.value}),button:r.item.text,items:r.item.items},null,8,["class","button","items"]))}}),Or=s=>(B("data-v-5a2822ec"),s=s(),H(),s),Ur={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Rr=Or(()=>f("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Dr=_({__name:"VPNavBarMenu",setup(s){const{theme:e}=S();return(t,o)=>c(e).nav?(a(),p("nav",Ur,[Rr,(a(!0),p(C,null,O(c(e).nav,n=>(a(),p(C,{key:n.text},["link"in n?(a(),x(Br,{key:0,item:n},null,8,["item"])):(a(),x(Hr,{key:1,item:n},null,8,["item"]))],64))),128))])):m("",!0)}}),Fr=$(Dr,[["__scopeId","data-v-5a2822ec"]]);function jr(s){const{localeIndex:e,theme:t}=S();function o(n){var N,M,z;const r=n.split("."),i=(N=t.value.search)==null?void 0:N.options,u=i&&typeof i=="object",l=u&&((z=(M=i.locales)==null?void 0:M[e.value])==null?void 0:z.translations)||null,b=u&&i.translations||null;let g=l,v=b,P=s;const L=r.pop();for(const _e of r){let q=null;const se=P==null?void 0:P[_e];se&&(q=P=se);const ze=v==null?void 0:v[_e];ze&&(q=v=ze);const Ve=g==null?void 0:g[_e];Ve&&(q=g=Ve),se||(P=q),ze||(v=q),Ve||(g=q)}return(g==null?void 0:g[L])??(v==null?void 0:v[L])??(P==null?void 0:P[L])??""}return o}const qr=["aria-label"],Gr={class:"DocSearch-Button-Container"},Kr=f("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Wr={class:"DocSearch-Button-Placeholder"},Xr=f("span",{class:"DocSearch-Button-Keys"},[f("kbd",{class:"DocSearch-Button-Key"}),f("kbd",{class:"DocSearch-Button-Key"},"K")],-1),at=_({__name:"VPNavBarSearchButton",setup(s){const t=jr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,n)=>(a(),p("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":c(t)("button.buttonAriaLabel")},[f("span",Gr,[Kr,f("span",Wr,E(c(t)("button.buttonText")),1)]),Xr],8,qr))}}),Yr={class:"VPNavBarSearch"},Jr={id:"local-search"},Zr={key:1,id:"docsearch"},Qr=_({__name:"VPNavBarSearch",setup(s){const e=()=>null,t=()=>null,{theme:o}=S(),n=T(!1),r=T(!1);Q(()=>{});function i(){n.value||(n.value=!0,setTimeout(u,16))}function u(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}const l=T(!1),b="";return(g,v)=>{var P;return a(),p("div",Yr,[c(b)==="local"?(a(),p(C,{key:0},[l.value?(a(),x(c(e),{key:0,onClose:v[0]||(v[0]=L=>l.value=!1)})):m("",!0),f("div",Jr,[k(at,{onClick:v[1]||(v[1]=L=>l.value=!0)})])],64)):c(b)==="algolia"?(a(),p(C,{key:1},[n.value?(a(),x(c(t),{key:0,algolia:((P=c(o).search)==null?void 0:P.options)??c(o).algolia,onVnodeBeforeMount:v[2]||(v[2]=L=>r.value=!0)},null,8,["algolia"])):m("",!0),r.value?m("",!0):(a(),p("div",Zr,[k(at,{onClick:i})]))],64)):m("",!0)])}}}),ei=_({__name:"VPNavBarSocialLinks",setup(s){const{theme:e}=S();return(t,o)=>c(e).socialLinks?(a(),x(Ze,{key:0,class:"VPNavBarSocialLinks",links:c(e).socialLinks},null,8,["links"])):m("",!0)}}),ti=$(ei,[["__scopeId","data-v-8aed4598"]]),si=["href","rel","target"],oi={key:1},ni={key:2},ri=_({__name:"VPNavBarTitle",setup(s){const{site:e,theme:t}=S(),{hasSidebar:o}=j(),{currentLang:n}=be(),r=y(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),i=y(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),u=y(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,b)=>(a(),p("div",{class:V(["VPNavBarTitle",{"has-sidebar":c(o)}])},[f("a",{class:"title",href:r.value??c(Ge)(c(n).link),rel:i.value,target:u.value},[d(l.$slots,"nav-bar-title-before",{},void 0,!0),c(t).logo?(a(),x(ye,{key:0,class:"logo",image:c(t).logo},null,8,["image"])):m("",!0),c(t).siteTitle?(a(),p("span",oi,E(c(t).siteTitle),1)):c(t).siteTitle===void 0?(a(),p("span",ni,E(c(e).title),1)):m("",!0),d(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,si)],2))}}),ii=$(ri,[["__scopeId","data-v-5598953a"]]),ai={class:"items"},li={class:"title"},ci=_({__name:"VPNavBarTranslations",setup(s){const{theme:e}=S(),{localeLinks:t,currentLang:o}=be({correspondingLink:!0});return(n,r)=>c(t).length&&c(o).label?(a(),x(Je,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:c(e).langMenuLabel||"Change language"},{default:h(()=>[f("div",ai,[f("p",li,E(c(o).label),1),(a(!0),p(C,null,O(c(t),i=>(a(),x(Ee,{key:i.link,item:i},null,8,["item"]))),128))])]),_:1},8,["label"])):m("",!0)}}),ui=$(ci,[["__scopeId","data-v-aaab09ea"]]),di=s=>(B("data-v-cd0bf013"),s=s(),H(),s),pi={class:"wrapper"},hi={class:"container"},fi={class:"title"},bi={class:"content"},vi={class:"content-body"},mi=di(()=>f("div",{class:"divider"},[f("div",{class:"divider-line"})],-1)),gi=_({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(s){const{y:e}=wt(),{hasSidebar:t}=j(),{hasLocalNav:o}=Tt(),{frontmatter:n}=S(),r=T({});return kt(()=>{r.value={"has-sidebar":t.value,"has-local-nav":o.value,top:n.value.layout==="home"&&e.value===0}}),(i,u)=>(a(),p("div",{class:V(["VPNavBar",r.value])},[f("div",pi,[f("div",hi,[f("div",fi,[k(ii,null,{"nav-bar-title-before":h(()=>[d(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),f("div",bi,[f("div",vi,[d(i.$slots,"nav-bar-content-before",{},void 0,!0),k(Qr,{class:"search"}),k(Fr,{class:"menu"}),k(ui,{class:"translations"}),k(Gn,{class:"appearance"}),k(ti,{class:"social-links"}),k(Lr,{class:"extra"}),d(i.$slots,"nav-bar-content-after",{},void 0,!0),k(Nr,{class:"hamburger",active:i.isScreenOpen,onClick:u[0]||(u[0]=l=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),mi],2))}}),_i=$(gi,[["__scopeId","data-v-cd0bf013"]]),ki={key:0,class:"VPNavScreenAppearance"},$i={class:"text"},xi=_({__name:"VPNavScreenAppearance",setup(s){const{site:e,theme:t}=S();return(o,n)=>c(e).appearance&&c(e).appearance!=="force-dark"?(a(),p("div",ki,[f("p",$i,E(c(t).darkModeSwitchLabel||"Appearance"),1),k(Xe)])):m("",!0)}}),yi=$(xi,[["__scopeId","data-v-2ed7559f"]]),wi=_({__name:"VPNavScreenMenuLink",props:{item:{}},setup(s){const e=Le("close-screen");return(t,o)=>(a(),x(D,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:c(e)},{default:h(()=>[U(E(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Si=$(wi,[["__scopeId","data-v-c303e757"]]),Pi=_({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(s){const e=Le("close-screen");return(t,o)=>(a(),x(D,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:c(e)},{default:h(()=>[U(E(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Nt=$(Pi,[["__scopeId","data-v-4bd09630"]]),Ai={class:"VPNavScreenMenuGroupSection"},Li={key:0,class:"title"},Ei=_({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(s){return(e,t)=>(a(),p("div",Ai,[e.text?(a(),p("p",Li,E(e.text),1)):m("",!0),(a(!0),p(C,null,O(e.items,o=>(a(),x(Nt,{key:o.text,item:o},null,8,["item"]))),128))]))}}),Ti=$(Ei,[["__scopeId","data-v-ca3d4e61"]]),zi=s=>(B("data-v-0a808fc4"),s=s(),H(),s),Vi=["aria-controls","aria-expanded"],Ci=["innerHTML"],Ni=zi(()=>f("span",{class:"vpi-plus button-icon"},null,-1)),Ii=["id"],Mi={key:1,class:"group"},Bi=_({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(s){const e=s,t=T(!1),o=y(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function n(){t.value=!t.value}return(r,i)=>(a(),p("div",{class:V(["VPNavScreenMenuGroup",{open:t.value}])},[f("button",{class:"button","aria-controls":o.value,"aria-expanded":t.value,onClick:n},[f("span",{class:"button-text",innerHTML:r.text},null,8,Ci),Ni],8,Vi),f("div",{id:o.value,class:"items"},[(a(!0),p(C,null,O(r.items,u=>(a(),p(C,{key:u.text},["link"in u?(a(),p("div",{key:u.text,class:"item"},[k(Nt,{item:u},null,8,["item"])])):(a(),p("div",Mi,[k(Ti,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,Ii)],2))}}),Hi=$(Bi,[["__scopeId","data-v-0a808fc4"]]),Oi={key:0,class:"VPNavScreenMenu"},Ui=_({__name:"VPNavScreenMenu",setup(s){const{theme:e}=S();return(t,o)=>c(e).nav?(a(),p("nav",Oi,[(a(!0),p(C,null,O(c(e).nav,n=>(a(),p(C,{key:n.text},["link"in n?(a(),x(Si,{key:0,item:n},null,8,["item"])):(a(),x(Hi,{key:1,text:n.text||"",items:n.items},null,8,["text","items"]))],64))),128))])):m("",!0)}}),Ri=_({__name:"VPNavScreenSocialLinks",setup(s){const{theme:e}=S();return(t,o)=>c(e).socialLinks?(a(),x(Ze,{key:0,class:"VPNavScreenSocialLinks",links:c(e).socialLinks},null,8,["links"])):m("",!0)}}),It=s=>(B("data-v-46ce0713"),s=s(),H(),s),Di=It(()=>f("span",{class:"vpi-languages icon lang"},null,-1)),Fi=It(()=>f("span",{class:"vpi-chevron-down icon chevron"},null,-1)),ji={class:"list"},qi=_({__name:"VPNavScreenTranslations",setup(s){const{localeLinks:e,currentLang:t}=be({correspondingLink:!0}),o=T(!1);function n(){o.value=!o.value}return(r,i)=>c(e).length&&c(t).label?(a(),p("div",{key:0,class:V(["VPNavScreenTranslations",{open:o.value}])},[f("button",{class:"title",onClick:n},[Di,U(" "+E(c(t).label)+" ",1),Fi]),f("ul",ji,[(a(!0),p(C,null,O(c(e),u=>(a(),p("li",{key:u.link,class:"item"},[k(D,{class:"link",href:u.link},{default:h(()=>[U(E(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):m("",!0)}}),Gi=$(qi,[["__scopeId","data-v-46ce0713"]]),Ki={class:"container"},Wi=_({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(s){const e=T(null),t=St(ae?document.body:null);return(o,n)=>(a(),x(Fe,{name:"fade",onEnter:n[0]||(n[0]=r=>t.value=!0),onAfterLeave:n[1]||(n[1]=r=>t.value=!1)},{default:h(()=>[o.open?(a(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[f("div",Ki,[d(o.$slots,"nav-screen-content-before",{},void 0,!0),k(Ui,{class:"menu"}),k(Gi,{class:"translations"}),k(yi,{class:"appearance"}),k(Ri,{class:"social-links"}),d(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):m("",!0)]),_:3}))}}),Xi=$(Wi,[["__scopeId","data-v-a1d80ed4"]]),Yi={key:0,class:"VPNav"},Ji=_({__name:"VPNav",setup(s){const{isScreenOpen:e,closeScreen:t,toggleScreen:o}=Nn(),{frontmatter:n}=S(),r=y(()=>n.value.navbar!==!1);return Pt("close-screen",t),Se(()=>{ae&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(i,u)=>r.value?(a(),p("header",Yi,[k(_i,{"is-screen-open":c(e),onToggleScreen:c(o)},{"nav-bar-title-before":h(()=>[d(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(i.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(Xi,{open:c(e)},{"nav-screen-content-before":h(()=>[d(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):m("",!0)}}),Zi=$(Ji,[["__scopeId","data-v-08aa4208"]]),Mt=s=>(B("data-v-601fff8e"),s=s(),H(),s),Qi=["role","tabindex"],ea=Mt(()=>f("div",{class:"indicator"},null,-1)),ta=Mt(()=>f("span",{class:"vpi-chevron-right caret-icon"},null,-1)),sa=[ta],oa={key:1,class:"items"},na=_({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(s){const e=s,{collapsed:t,collapsible:o,isLink:n,isActiveLink:r,hasActiveLink:i,hasChildren:u,toggle:l}=ys(y(()=>e.item)),b=y(()=>u.value?"section":"div"),g=y(()=>n.value?"a":"div"),v=y(()=>u.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),P=y(()=>n.value?void 0:"button"),L=y(()=>[[`level-${e.depth}`],{collapsible:o.value},{collapsed:t.value},{"is-link":n.value},{"is-active":r.value},{"has-active":i.value}]);function N(z){"key"in z&&z.key!=="Enter"||!e.item.link&&l()}function M(){e.item.link&&l()}return(z,_e)=>{const q=te("VPSidebarItem",!0);return a(),x(re(b.value),{class:V(["VPSidebarItem",L.value])},{default:h(()=>[z.item.text?(a(),p("div",ke({key:0,class:"item",role:P.value},ts(z.item.items?{click:N,keydown:N}:{},!0),{tabindex:z.item.items&&0}),[ea,z.item.link?(a(),x(D,{key:0,tag:g.value,class:"link",href:z.item.link,rel:z.item.rel,target:z.item.target},{default:h(()=>[(a(),x(re(v.value),{class:"text",innerHTML:z.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),x(re(v.value),{key:1,class:"text",innerHTML:z.item.text},null,8,["innerHTML"])),z.item.collapsed!=null?(a(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:es(M,["enter"]),tabindex:"0"},sa,32)):m("",!0)],16,Qi)):m("",!0),z.item.items&&z.item.items.length?(a(),p("div",oa,[z.depth<5?(a(!0),p(C,{key:0},O(z.item.items,se=>(a(),x(q,{key:se.text,item:se,depth:z.depth+1},null,8,["item","depth"]))),128)):m("",!0)])):m("",!0)]),_:1},8,["class"])}}}),ra=$(na,[["__scopeId","data-v-601fff8e"]]),Bt=s=>(B("data-v-ba982e17"),s=s(),H(),s),ia=Bt(()=>f("div",{class:"curtain"},null,-1)),aa={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},la=Bt(()=>f("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ca=_({__name:"VPSidebar",props:{open:{type:Boolean}},setup(s){const{sidebarGroups:e,hasSidebar:t}=j(),o=s,n=T(null),r=St(ae?document.body:null);return ee([o,n],()=>{var i;o.open?(r.value=!0,(i=n.value)==null||i.focus()):r.value=!1},{immediate:!0,flush:"post"}),(i,u)=>c(t)?(a(),p("aside",{key:0,class:V(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:n,onClick:u[0]||(u[0]=ss(()=>{},["stop"]))},[ia,f("nav",aa,[la,d(i.$slots,"sidebar-nav-before",{},void 0,!0),(a(!0),p(C,null,O(c(e),l=>(a(),p("div",{key:l.text,class:"group"},[k(ra,{item:l,depth:0},null,8,["item"])]))),128)),d(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):m("",!0)}}),ua=$(ca,[["__scopeId","data-v-ba982e17"]]),da=_({__name:"VPSkipLink",setup(s){const e=Ae(),t=T();ee(()=>e.path,()=>t.value.focus());function o({target:n}){const r=document.getElementById(decodeURIComponent(n.hash).slice(1));if(r){const i=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",i)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",i),r.focus(),window.scrollTo(0,0)}}return(n,r)=>(a(),p(C,null,[f("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),f("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o}," Skip to content ")],64))}}),pa=$(da,[["__scopeId","data-v-b79a1e83"]]),ha=_({__name:"Layout",setup(s){const{isOpen:e,open:t,close:o}=j(),n=Ae();ee(()=>n.path,o),xs(e,o);const{frontmatter:r}=S(),i=os(),u=y(()=>!!i["home-hero-image"]);return Pt("hero-image-slot-exists",u),(l,b)=>{const g=te("Content");return c(r).layout!==!1?(a(),p("div",{key:0,class:V(["Layout",c(r).pageClass])},[d(l.$slots,"layout-top",{},void 0,!0),k(pa),k(as,{class:"backdrop",show:c(e),onClick:c(o)},null,8,["show","onClick"]),k(Zi,null,{"nav-bar-title-before":h(()=>[d(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[d(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(Cn,{open:c(e),onOpenMenu:c(t)},null,8,["open","onOpenMenu"]),k(ua,{open:c(e)},{"sidebar-nav-before":h(()=>[d(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[d(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(bn,null,{"page-top":h(()=>[d(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[d(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[d(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[d(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(kn),d(l.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),x(g,{key:1}))}}}),fa=$(ha,[["__scopeId","data-v-1333ba00"]]),Qa={Layout:fa,enhanceApp:({app:s})=>{s.component("Badge",ns)}},ba=()=>typeof customElements>"u"?void 0:customElements;function ve(s,e,t=ba()){if(!t)return e;const o=t.get(s);return o||(t.define(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis,Qe=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),lt=new WeakMap;let Ht=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=lt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&lt.set(t,e))}return e}toString(){return this.cssText}};const va=s=>new Ht(typeof s=="string"?s:s+"",void 0,et),me=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((o,n,r)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Ht(t,s,et)},ma=(s,e)=>{if(Qe)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),n=xe.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,s.appendChild(o)}},ct=Qe?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return va(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ga,defineProperty:_a,getOwnPropertyDescriptor:ka,getOwnPropertyNames:$a,getOwnPropertySymbols:xa,getPrototypeOf:ya}=Object,K=globalThis,ut=K.trustedTypes,wa=ut?ut.emptyScript:"",Ne=K.reactiveElementPolyfillSupport,ce=(s,e)=>s,De={toAttribute(s,e){switch(e){case Boolean:s=s?wa:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ot=(s,e)=>!ga(s,e),dt={attribute:!0,type:String,converter:De,reflect:!1,useDefault:!1,hasChanged:Ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),K.litPropertyMetadata??(K.litPropertyMetadata=new WeakMap);let ne=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=dt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);n!==void 0&&_a(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=ka(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:n,set(i){const u=n==null?void 0:n.call(this);r==null||r.call(this,i),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dt}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;const e=ya(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){const t=this.properties,o=[...$a(t),...xa(t)];for(const n of o)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,n]of t)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const n=this._$Eu(t,o);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)t.unshift(ct(n))}else e!==void 0&&t.push(ct(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ma(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){var r;const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:De).toAttribute(t,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){var r,i;const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const u=o.getPropertyOptions(n),l=typeof u.converter=="function"?{fromAttribute:u.converter}:((r=u.converter)==null?void 0:r.fromAttribute)!==void 0?u.converter:De;this._$Em=n;const b=l.fromAttribute(t,u.type);this[n]=b??((i=this._$Ej)==null?void 0:i.get(n))??b,this._$Em=null}}requestUpdate(e,t,o,n=!1,r){var i;if(e!==void 0){const u=this.constructor;if(n===!1&&(r=this[e]),o??(o=u.getPropertyOptions(e)),!((o.hasChanged??Ot)(r,t)||o.useDefault&&o.reflect&&r===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(u._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:r},i){o&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,i]of n){const{wrapped:u}=i,l=this[r];u!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,i,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var n;return(n=o.hostUpdated)==null?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[ce("elementProperties")]=new Map,ne[ce("finalized")]=new Map,Ne==null||Ne({ReactiveElement:ne}),(K.reactiveElementVersions??(K.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,pt=s=>s,we=ue.trustedTypes,ht=we?we.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ut="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Rt="?"+G,Sa=`<${Rt}>`,Z=document,de=()=>Z.createComment(""),pe=s=>s===null||typeof s!="object"&&typeof s!="function",tt=Array.isArray,Pa=s=>tt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,bt=/>/g,W=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,mt=/"/g,Dt=/^(?:script|style|textarea|title)$/i,Aa=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),I=Aa(1),R=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),gt=new WeakMap,X=Z.createTreeWalker(Z,129);function Ft(s,e){if(!tt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(e):e}const La=(s,e)=>{const t=s.length-1,o=[];let n,r=e===2?"<svg>":e===3?"<math>":"",i=le;for(let u=0;u<t;u++){const l=s[u];let b,g,v=-1,P=0;for(;P<l.length&&(i.lastIndex=P,g=i.exec(l),g!==null);)P=i.lastIndex,i===le?g[1]==="!--"?i=ft:g[1]!==void 0?i=bt:g[2]!==void 0?(Dt.test(g[2])&&(n=RegExp("</"+g[2],"g")),i=W):g[3]!==void 0&&(i=W):i===W?g[0]===">"?(i=n??le,v=-1):g[1]===void 0?v=-2:(v=i.lastIndex-g[2].length,b=g[1],i=g[3]===void 0?W:g[3]==='"'?mt:vt):i===mt||i===vt?i=W:i===ft||i===bt?i=le:(i=W,n=void 0);const L=i===W&&s[u+1].startsWith("/>")?" ":"";r+=i===le?l+Sa:v>=0?(o.push(b),l.slice(0,v)+Ut+l.slice(v)+G+L):l+G+(v===-2?u:L)}return[Ft(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class he{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,i=0;const u=e.length-1,l=this.parts,[b,g]=La(e,t);if(this.el=he.createElement(b,o),X.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(n=X.nextNode())!==null&&l.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const v of n.getAttributeNames())if(v.endsWith(Ut)){const P=g[i++],L=n.getAttribute(v).split(G),N=/([.?@])?(.*)/.exec(P);l.push({type:1,index:r,name:N[2],strings:L,ctor:N[1]==="."?Ta:N[1]==="?"?za:N[1]==="@"?Va:Te}),n.removeAttribute(v)}else v.startsWith(G)&&(l.push({type:6,index:r}),n.removeAttribute(v));if(Dt.test(n.tagName)){const v=n.textContent.split(G),P=v.length-1;if(P>0){n.textContent=we?we.emptyScript:"";for(let L=0;L<P;L++)n.append(v[L],de()),X.nextNode(),l.push({type:2,index:++r});n.append(v[P],de())}}}else if(n.nodeType===8)if(n.data===Rt)l.push({type:2,index:r});else{let v=-1;for(;(v=n.data.indexOf(G,v+1))!==-1;)l.push({type:7,index:r}),v+=G.length-1}r++}}static createElement(e,t){const o=Z.createElement("template");return o.innerHTML=e,o}}function ie(s,e,t=s,o){var i,u;if(e===R)return e;let n=o!==void 0?(i=t._$Co)==null?void 0:i[o]:t._$Cl;const r=pe(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((u=n==null?void 0:n._$AO)==null||u.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=n:t._$Cl=n),n!==void 0&&(e=ie(s,n._$AS(s,e.values),n,o)),e}class Ea{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=((e==null?void 0:e.creationScope)??Z).importNode(t,!0);X.currentNode=n;let r=X.nextNode(),i=0,u=0,l=o[0];for(;l!==void 0;){if(i===l.index){let b;l.type===2?b=new ge(r,r.nextSibling,this,e):l.type===1?b=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(b=new Ca(r,this,e)),this._$AV.push(b),l=o[++u]}i!==(l==null?void 0:l.index)&&(r=X.nextNode(),i++)}return X.currentNode=Z,n}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ge{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),pe(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=he.createElement(Ft(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(t);else{const i=new Ea(n,this),u=i.u(this.options);i.p(t),this.T(u),this._$AH=i}}_$AC(e){let t=gt.get(e.strings);return t===void 0&&gt.set(e.strings,t=new he(e)),t}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new ge(this.O(de()),this.O(de()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e!==this._$AB;){const n=pt(e).nextSibling;pt(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=A}_$AI(e,t=this,o,n){const r=this.strings;let i=!1;if(r===void 0)e=ie(this,e,t,0),i=!pe(e)||e!==this._$AH&&e!==R,i&&(this._$AH=e);else{const u=e;let l,b;for(e=r[0],l=0;l<r.length-1;l++)b=ie(this,u[o+l],t,l),b===R&&(b=this._$AH[l]),i||(i=!pe(b)||b!==this._$AH[l]),b===A?e=A:e!==A&&(e+=(b??"")+r[l+1]),this._$AH[l]=b}i&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ta extends Te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class za extends Te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Va extends Te{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??A)===R)return;const o=this._$AH,n=e===A&&o!==A||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==A&&(o===A||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ca{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const Me=ue.litHtmlPolyfillSupport;Me==null||Me(he,ge),(ue.litHtmlVersions??(ue.litHtmlVersions=[])).push("3.3.3");const Na=(s,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let n=o._$litPart$;if(n===void 0){const r=(t==null?void 0:t.renderBefore)??null;o._$litPart$=n=new ge(e.insertBefore(de(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;let F=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Na(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return R}};var _t;F._$litElement$=!0,F.finalized=!0,(_t=Y.litElementHydrateSupport)==null||_t.call(Y,{LitElement:F});const Be=Y.litElementPolyfillSupport;Be==null||Be({LitElement:F});(Y.litElementVersions??(Y.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=s=>s??A;class st extends F{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:I`<slot></slot>`;return I`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${w(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?I`<span class="spinner" part="spinner" aria-hidden="true"></span>`:I`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?A:I`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(st,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(st,"styles",{enumerable:!0,configurable:!0,writable:!0,value:me`
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
  `});const Ia="super-button",Ma=s=>ve(Ia,st,s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ba=s=>(...e)=>({_$litDirective$:s,values:e});class Ha{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oa=s=>s.strings===void 0,Ua={},Ra=(s,e=Ua)=>s._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=Ba(class extends Ha{constructor(s){if(super(s),s.type!==oe.PROPERTY&&s.type!==oe.ATTRIBUTE&&s.type!==oe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Oa(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===R||e===A)return e;const t=s.element,o=s.name;if(s.type===oe.PROPERTY){if(e===t[o])return R}else if(s.type===oe.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(o))return R}else if(s.type===oe.ATTRIBUTE&&t.getAttribute(o)===e+"")return R;return Ra(s),e}});class ot extends F{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.indeterminate=!1,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked,this.indeterminate=!1;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return I`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${fe(this.checked)}
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
        ${this.helperText?I`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:A}
      </span>
    `}}Object.defineProperty(ot,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ot,"styles",{enumerable:!0,configurable:!0,writable:!0,value:me`
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
  `});const Da="super-checkbox",Fa=s=>ve(Da,ot,s);class nt extends F{constructor(){super(),this.value="",this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-input",e)}handleChange(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-change",e)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value;e.value="",this.value="",e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly||(e>0?t.stepUp():t.stepDown(),this.value=t.value,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),t.focus())}updateSlotPresence(e,t){const n=e.currentTarget.assignedNodes({flatten:!0}).some(r=>{var i;return r.nodeType!==Node.TEXT_NODE||!!((i=r.textContent)!=null&&i.trim())});t==="prefix"?this.hasPrefix=n:t==="suffix"?this.hasSuffix=n:this.hasAction=n}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??A}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return I`
        <textarea
          class="field"
          part="input"
          .value=${fe(this.value)}
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
      `;const o=this.type==="password"&&this.passwordVisible?"text":this.type;return I`
      <input
        class="field"
        part="input"
        .value=${fe(this.value)}
        type=${o}
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
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,o=this.type==="password"&&this.revealable,n=this.validationSymbol(),r=!!this.helperText||this.showCount&&this.maxLength!==void 0;return I`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${i=>this.updateSlotPresence(i,"prefix")}
          ></slot>
        </span>
        ${this.required?I`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:A}
        ${this.type==="number"&&!this.multiline?I`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:A}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?I`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:A}
        <span class="trailing">
          ${n===A?A:I`<span class="validation-icon" part="validation-icon" aria-hidden="true">${n}</span>`}
          ${t?I`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:A}
          ${o?I`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:A}
        </span>
        <span class="adornment suffix" part="suffix" ?hidden=${!this.hasSuffix}>
          <slot
            name="suffix"
            @slotchange=${i=>this.updateSlotPresence(i,"suffix")}
          ></slot>
        </span>
        <span class="action" part="action" ?hidden=${!this.hasAction}>
          <slot
            name="action"
            @slotchange=${i=>this.updateSlotPresence(i,"action")}
          ></slot>
        </span>
      </div>
      ${r?I`
            <div class="meta" part="meta">
              ${this.helperText?I`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${w(this.validation==="error"?"alert":void 0)}
                    aria-live=${w(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:A}
              ${this.showCount&&this.maxLength!==void 0?I`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:A}
            </div>
          `:A}
    `}}Object.defineProperty(nt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(nt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:me`
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
  `});const ja="super-input",qa=s=>ve(ja,nt,s);class rt extends F{constructor(){super(),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.checked=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(o=>!o.disabled);return(e.find(o=>o.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&(e.checked=!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){this.disabled||this.checked||(this.checked=!0,this.uncheckGroupPeers(),this.emitChange(e))}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(u=>!u.disabled);if(t.length<2)return;e.preventDefault();const o=Math.max(0,t.indexOf(this)),n=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,r=(o+n+t.length)%t.length,i=t[r];i.selectFromInteraction(e),i.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked;t||(this.checked=!0,this.uncheckGroupPeers());const o=new Event("change");super.click(),t||this.emitChange(o)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return I`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${fe(this.checked)}
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
        ${this.helperText?I`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:A}
      </span>
    `}}Object.defineProperty(rt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(rt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:me`
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
  `});const Ga="super-radio",Ka=s=>ve(Ga,rt,s);class it extends F{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return I`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${fe(this.checked)}
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
        ${this.helperText?I`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${w(this.validation==="error"?"alert":void 0)}
              aria-live=${w(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:A}
      </span>
    `}}Object.defineProperty(it,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(it,"styles",{enumerable:!0,configurable:!0,writable:!0,value:me`
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
  `});const Wa="super-switch",Xa=s=>ve(Wa,it,s),Ya=[Ma,Fa,qa,Ka,Xa];function Ja(s){Ya.forEach(e=>{e(s)})}Ja();export{Qa as t};
