import{d as x,o as a,c as p,r as d,n as V,a as D,t as E,b as $,w as h,e as g,T as qe,_ as k,u as Ft,i as Gt,f as Kt,g as je,h as T,j as le,k as w,l as Q,m as f,p as u,q as N,s as B,v as J,x as Be,y as ee,z as Se,A as Fe,B as yt,C as Wt,D as Yt,E as te,F as O,G as H,H as kt,I as Pe,J as y,K as re,L as $t,M as Ae,N as _e,O as Le,P as Xt,Q as wt,R as Jt,S as Zt,U as Qt,V as St,W as es,X as Pt,Y as At,Z as ts,$ as ss,a0 as os,a1 as is}from"./framework.o5qAeLTz.js";const rs=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(a(),p("span",{class:V(["VPBadge",e.type])},[d(e.$slots,"default",{},()=>[D(E(e.text),1)])],2))}}),ns={key:0,class:"VPBackdrop"},as=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(a(),$(qe,{name:"fade"},{default:h(()=>[e.show?(a(),p("div",ns)):g("",!0)]),_:1}))}}),ls=k(as,[["__scopeId","data-v-6f6fa9fb"]]),L=Ft;function cs(i,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(i,e):(i(),(s=!0)&&setTimeout(()=>s=!1,e))}}function He(i){return/^\//.test(i)?i:`/${i}`}function Ge(i){const{pathname:e,search:t,hash:s,protocol:o}=new URL(i,"http://a.com");if(Gt(i)||i.startsWith("#")||!o.startsWith("http")||!Kt(e))return i;const{site:r}=L(),n=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${s}`);return je(n)}const Ke=T(le?location.hash:"");le&&window.addEventListener("hashchange",()=>{Ke.value=location.hash});function me({removeCurrent:i=!0,correspondingLink:e=!1}={}){const{site:t,localeIndex:s,page:o,theme:r}=L(),n=w(()=>{var c,b;return{label:(c=t.value.locales[s.value])==null?void 0:c.label,link:((b=t.value.locales[s.value])==null?void 0:b.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:w(()=>Object.entries(t.value.locales).flatMap(([c,b])=>i&&n.value.label===b.label?[]:{text:b.label,link:us(b.link||(c==="root"?"/":`/${c}/`),r.value.i18nRouting!==!1&&e,o.value.relativePath.slice(n.value.link.length-1),!t.value.cleanUrls)+Ke.value})),currentLang:n}}function us(i,e,t,s){return e?i.replace(/\/$/,"")+He(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):i}const ds=i=>(N("data-v-a7a1a61a"),i=i(),B(),i),ps={class:"NotFound"},hs={class:"code"},fs={class:"title"},bs=ds(()=>f("div",{class:"divider"},null,-1)),vs={class:"quote"},ms={class:"action"},gs=["href","aria-label"],xs=x({__name:"NotFound",setup(i){const{site:e,theme:t}=L(),{localeLinks:s}=me({removeCurrent:!1}),o=T("/");return Q(()=>{var n;const r=window.location.pathname.replace(e.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(o.value=((n=s.value.find(({link:l})=>l.startsWith(r)))==null?void 0:n.link)||s.value[0].link)}),(r,n)=>{var l,c,b,m,v;return a(),p("div",ps,[f("p",hs,E(((l=u(t).notFound)==null?void 0:l.code)??"404"),1),f("h1",fs,E(((c=u(t).notFound)==null?void 0:c.title)??"PAGE NOT FOUND"),1),bs,f("blockquote",vs,E(((b=u(t).notFound)==null?void 0:b.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),f("div",ms,[f("a",{class:"link",href:u(je)(o.value),"aria-label":((m=u(t).notFound)==null?void 0:m.linkLabel)??"go to home"},E(((v=u(t).notFound)==null?void 0:v.linkText)??"Take me home"),9,gs)])])}}}),_s=k(xs,[["__scopeId","data-v-a7a1a61a"]]);function Lt(i,e){if(Array.isArray(i))return ye(i);if(i==null)return[];e=He(e);const t=Object.keys(i).sort((o,r)=>r.split("/").length-o.split("/").length).find(o=>e.startsWith(He(o))),s=t?i[t]:[];return Array.isArray(s)?ye(s):ye(s.items,s.base)}function ys(i){const e=[];let t=0;for(const s in i){const o=i[s];if(o.items){t=e.push(o);continue}e[t]||e.push({items:[]}),e[t].items.push(o)}return e}function ks(i){const e=[];function t(s){for(const o of s)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&t(o.items)}return t(i),e}function De(i,e){return Array.isArray(e)?e.some(t=>De(i,t)):J(i,e.link)?!0:e.items?De(i,e.items):!1}function ye(i,e){return[...i].map(t=>{const s={...t},o=s.base||e;return o&&s.link&&(s.link=o+s.link),s.items&&(s.items=ye(s.items,o)),s})}function j(){const{frontmatter:i,page:e,theme:t}=L(),s=Be("(min-width: 960px)"),o=T(!1),r=w(()=>{const M=t.value.sidebar,C=e.value.relativePath;return M?Lt(M,C):[]}),n=T(r.value);ee(r,(M,C)=>{JSON.stringify(M)!==JSON.stringify(C)&&(n.value=r.value)});const l=w(()=>i.value.sidebar!==!1&&n.value.length>0&&i.value.layout!=="home"),c=w(()=>b?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),b=w(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),m=w(()=>l.value&&s.value),v=w(()=>l.value?ys(n.value):[]);function P(){o.value=!0}function z(){o.value=!1}function I(){o.value?z():P()}return{isOpen:o,sidebar:n,sidebarGroups:v,hasSidebar:l,hasAside:b,leftAside:c,isSidebarEnabled:m,open:P,close:z,toggle:I}}function $s(i,e){let t;Se(()=>{t=i.value?document.activeElement:void 0}),Q(()=>{window.addEventListener("keyup",s)}),Fe(()=>{window.removeEventListener("keyup",s)});function s(o){o.key==="Escape"&&i.value&&(e(),t==null||t.focus())}}function ws(i){const{page:e}=L(),t=T(!1),s=w(()=>i.value.collapsed!=null),o=w(()=>!!i.value.link),r=T(!1),n=()=>{r.value=J(e.value.relativePath,i.value.link)};ee([e,i,Ke],n),Q(n);const l=w(()=>r.value?!0:i.value.items?De(e.value.relativePath,i.value.items):!1),c=w(()=>!!(i.value.items&&i.value.items.length));Se(()=>{t.value=!!(s.value&&i.value.collapsed)}),yt(()=>{(r.value||l.value)&&(t.value=!1)});function b(){s.value&&(t.value=!t.value)}return{collapsed:t,collapsible:s,isLink:o,isActiveLink:r,hasActiveLink:l,hasChildren:c,toggle:b}}function Ss(){const{hasSidebar:i}=j(),e=Be("(min-width: 960px)"),t=Be("(min-width: 1280px)");return{isAsideEnabled:w(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const Re=[];function zt(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function We(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:Ps(t),link:"#"+t.id,level:s}});return As(e,i)}function Ps(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(t.classList.contains("VPBadge")||t.classList.contains("header-anchor")||t.classList.contains("ignore-header"))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function As(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,o]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;i=i.filter(n=>n.level>=s&&n.level<=o),Re.length=0;for(const{element:n,link:l}of i)Re.push({element:n,link:l});const r=[];e:for(let n=0;n<i.length;n++){const l=i[n];if(n===0)r.push(l);else{for(let c=n-1;c>=0;c--){const b=i[c];if(b.level<l.level){(b.children||(b.children=[])).push(l);continue e}}r.push(l)}}return r}function Ls(i,e){const{isAsideEnabled:t}=Ss(),s=cs(r,100);let o=null;Q(()=>{requestAnimationFrame(r),window.addEventListener("scroll",s)}),Wt(()=>{n(location.hash)}),Fe(()=>{window.removeEventListener("scroll",s)});function r(){if(!t.value)return;const l=window.scrollY,c=window.innerHeight,b=document.body.offsetHeight,m=Math.abs(l+c-b)<1,v=Re.map(({element:z,link:I})=>({link:I,top:zs(z)})).filter(({top:z})=>!Number.isNaN(z)).sort((z,I)=>z.top-I.top);if(!v.length){n(null);return}if(l<1){n(null);return}if(m){n(v[v.length-1].link);return}let P=null;for(const{link:z,top:I}of v){if(I>l+Yt()+4)break;P=z}n(P)}function n(l){o&&o.classList.remove("active"),l==null?o=null:o=i.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const c=o;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function zs(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}const Es=["href","title"],Ts=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const s=t.href.split("#")[1],o=document.getElementById(decodeURIComponent(s));o==null||o.focus({preventScroll:!0})}return(t,s)=>{const o=te("VPDocOutlineItem",!0);return a(),p("ul",{class:V(["VPDocOutlineItem",t.root?"root":"nested"])},[(a(!0),p(O,null,H(t.headers,({children:r,link:n,title:l})=>(a(),p("li",null,[f("a",{class:"outline-link",href:n,onClick:e,title:l},E(l),9,Es),r!=null&&r.length?(a(),$(o,{key:0,headers:r},null,8,["headers"])):g("",!0)]))),256))],2)}}}),Et=k(Ts,[["__scopeId","data-v-a2afcce7"]]),Cs=i=>(N("data-v-7b6871a8"),i=i(),B(),i),Vs={class:"content"},Os={class:"outline-title",role:"heading","aria-level":"2"},Is={"aria-labelledby":"doc-outline-aria-label"},Ms=Cs(()=>f("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),Ns=x({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=L(),s=kt([]);Pe(()=>{s.value=We(e.value.outline??t.value.outline)});const o=T(),r=T();return Ls(o,r),(n,l)=>(a(),p("div",{class:V(["VPDocAsideOutline",{"has-outline":s.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[f("div",Vs,[f("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),f("div",Os,E(u(zt)(u(t))),1),f("nav",Is,[Ms,y(Et,{headers:s.value,root:!0},null,8,["headers"])])])],2))}}),Bs=k(Ns,[["__scopeId","data-v-7b6871a8"]]),Hs={class:"VPDocAsideCarbonAds"},Ds=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,s)=>(a(),p("div",Hs,[y(u(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Rs=i=>(N("data-v-951edd61"),i=i(),B(),i),Us={class:"VPDocAside"},qs=Rs(()=>f("div",{class:"spacer"},null,-1)),js=x({__name:"VPDocAside",setup(i){const{theme:e}=L();return(t,s)=>(a(),p("div",Us,[d(t.$slots,"aside-top",{},void 0,!0),d(t.$slots,"aside-outline-before",{},void 0,!0),y(Bs),d(t.$slots,"aside-outline-after",{},void 0,!0),qs,d(t.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(a(),$(Ds,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):g("",!0),d(t.$slots,"aside-ads-after",{},void 0,!0),d(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Fs=k(js,[["__scopeId","data-v-951edd61"]]);function Gs(){const{theme:i,page:e}=L();return w(()=>{const{text:t="Edit this page",pattern:s=""}=i.value.editLink||{};let o;return typeof s=="function"?o=s(e.value):o=s.replace(/:path/g,e.value.filePath),{url:o,text:t}})}function Ks(){const{page:i,theme:e,frontmatter:t}=L();return w(()=>{var c,b,m,v,P,z,I,M;const s=Lt(e.value.sidebar,i.value.relativePath),o=ks(s),r=o.findIndex(C=>J(i.value.relativePath,C.link)),n=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,l=((b=e.value.docFooter)==null?void 0:b.next)===!1&&!t.value.next||t.value.next===!1;return{prev:n?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((m=o[r-1])==null?void 0:m.docFooterText)??((v=o[r-1])==null?void 0:v.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((P=o[r-1])==null?void 0:P.link)},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((z=o[r+1])==null?void 0:z.docFooterText)??((I=o[r+1])==null?void 0:I.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((M=o[r+1])==null?void 0:M.link)}}})}const U=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=w(()=>e.tag??(e.href?"a":"span")),s=w(()=>e.href&&$t.test(e.href));return(o,r)=>(a(),$(re(t.value),{class:V(["VPLink",{link:o.href,"vp-external-link-icon":s.value,"no-icon":o.noIcon}]),href:o.href?u(Ge)(o.href):void 0,target:o.target??(s.value?"_blank":void 0),rel:o.rel??(s.value?"noreferrer":void 0)},{default:h(()=>[d(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ws={class:"VPLastUpdated"},Ys=["datetime"],Xs=x({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,frontmatter:s,lang:o}=L(),r=w(()=>new Date(s.value.lastUpdated??t.value.lastUpdated)),n=w(()=>r.value.toISOString()),l=T("");return Q(()=>{Se(()=>{var c,b,m;l.value=new Intl.DateTimeFormat((b=(c=e.value.lastUpdated)==null?void 0:c.formatOptions)!=null&&b.forceLocale?o.value:void 0,((m=e.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(c,b)=>{var m;return a(),p("p",Ws,[D(E(((m=u(e).lastUpdated)==null?void 0:m.text)||u(e).lastUpdatedText||"Last updated")+": ",1),f("time",{datetime:n.value},E(l.value),9,Ys)])}}}),Js=k(Xs,[["__scopeId","data-v-38b6dfd9"]]),Zs=i=>(N("data-v-bbe5e75c"),i=i(),B(),i),Qs={key:0,class:"VPDocFooter"},eo={key:0,class:"edit-info"},to={key:0,class:"edit-link"},so=Zs(()=>f("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),oo={key:1,class:"last-updated"},io={key:1,class:"prev-next"},ro={class:"pager"},no=["innerHTML"],ao=["innerHTML"],lo={class:"pager"},co=["innerHTML"],uo=["innerHTML"],po=x({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:s}=L(),o=Gs(),r=Ks(),n=w(()=>e.value.editLink&&s.value.editLink!==!1),l=w(()=>t.value.lastUpdated&&s.value.lastUpdated!==!1),c=w(()=>n.value||l.value||r.value.prev||r.value.next);return(b,m)=>{var v,P,z,I;return c.value?(a(),p("footer",Qs,[d(b.$slots,"doc-footer-before",{},void 0,!0),n.value||l.value?(a(),p("div",eo,[n.value?(a(),p("div",to,[y(U,{class:"edit-link-button",href:u(o).url,"no-icon":!0},{default:h(()=>[so,D(" "+E(u(o).text),1)]),_:1},8,["href"])])):g("",!0),l.value?(a(),p("div",oo,[y(Js)])):g("",!0)])):g("",!0),(v=u(r).prev)!=null&&v.link||(P=u(r).next)!=null&&P.link?(a(),p("nav",io,[f("div",ro,[(z=u(r).prev)!=null&&z.link?(a(),$(U,{key:0,class:"pager-link prev",href:u(r).prev.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.prev)||"Previous page"},null,8,no),f("span",{class:"title",innerHTML:u(r).prev.text},null,8,ao)]}),_:1},8,["href"])):g("",!0)]),f("div",lo,[(I=u(r).next)!=null&&I.link?(a(),$(U,{key:0,class:"pager-link next",href:u(r).next.link},{default:h(()=>{var M;return[f("span",{class:"desc",innerHTML:((M=u(e).docFooter)==null?void 0:M.next)||"Next page"},null,8,co),f("span",{class:"title",innerHTML:u(r).next.text},null,8,uo)]}),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}}),ho=k(po,[["__scopeId","data-v-bbe5e75c"]]),fo=i=>(N("data-v-5fc3206a"),i=i(),B(),i),bo={class:"container"},vo=fo(()=>f("div",{class:"aside-curtain"},null,-1)),mo={class:"aside-container"},go={class:"aside-content"},xo={class:"content"},_o={class:"content-container"},yo={class:"main"},ko=x({__name:"VPDoc",setup(i){const{theme:e}=L(),t=Ae(),{hasSidebar:s,hasAside:o,leftAside:r}=j(),n=w(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,c)=>{const b=te("Content");return a(),p("div",{class:V(["VPDoc",{"has-sidebar":u(s),"has-aside":u(o)}])},[d(l.$slots,"doc-top",{},void 0,!0),f("div",bo,[u(o)?(a(),p("div",{key:0,class:V(["aside",{"left-aside":u(r)}])},[vo,f("div",mo,[f("div",go,[y(Fs,null,{"aside-top":h(()=>[d(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),f("div",xo,[f("div",_o,[d(l.$slots,"doc-before",{},void 0,!0),f("main",yo,[y(b,{class:V(["vp-doc",[n.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(ho,null,{"doc-footer-before":h(()=>[d(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),d(l.$slots,"doc-after",{},void 0,!0)])])]),d(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),$o=k(ko,[["__scopeId","data-v-5fc3206a"]]),wo=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=w(()=>e.href&&$t.test(e.href)),s=w(()=>e.tag||e.href?"a":"button");return(o,r)=>(a(),$(re(s.value),{class:V(["VPButton",[o.size,o.theme]]),href:o.href?u(Ge)(o.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:h(()=>[D(E(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),So=k(wo,[["__scopeId","data-v-3aa6481e"]]),Po=["src","alt"],Ao=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const s=te("VPImage",!0);return e.image?(a(),p(O,{key:0},[typeof e.image=="string"||"src"in e.image?(a(),p("img",_e({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(je)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Po)):(a(),p(O,{key:1},[y(s,_e({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),y(s,_e({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),$e=k(Ao,[["__scopeId","data-v-31544fe0"]]),Lo=i=>(N("data-v-5a0e971f"),i=i(),B(),i),zo={class:"container"},Eo={class:"main"},To={key:0,class:"name"},Co=["innerHTML"],Vo=["innerHTML"],Oo=["innerHTML"],Io={key:0,class:"actions"},Mo={key:0,class:"image"},No={class:"image-container"},Bo=Lo(()=>f("div",{class:"image-bg"},null,-1)),Ho=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=Le("hero-image-slot-exists");return(t,s)=>(a(),p("div",{class:V(["VPHero",{"has-image":t.image||u(e)}])},[f("div",zo,[f("div",Eo,[d(t.$slots,"home-hero-info-before",{},void 0,!0),d(t.$slots,"home-hero-info",{},()=>[t.name?(a(),p("h1",To,[f("span",{innerHTML:t.name,class:"clip"},null,8,Co)])):g("",!0),t.text?(a(),p("p",{key:1,innerHTML:t.text,class:"text"},null,8,Vo)):g("",!0),t.tagline?(a(),p("p",{key:2,innerHTML:t.tagline,class:"tagline"},null,8,Oo)):g("",!0)],!0),d(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(a(),p("div",Io,[(a(!0),p(O,null,H(t.actions,o=>(a(),p("div",{key:o.link,class:"action"},[y(So,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||u(e)?(a(),p("div",Mo,[f("div",No,[Bo,d(t.$slots,"home-hero-image",{},()=>[t.image?(a(),$($e,{key:0,class:"image-src",image:t.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),Do=k(Ho,[["__scopeId","data-v-5a0e971f"]]),Ro=x({__name:"VPHomeHero",setup(i){const{frontmatter:e}=L();return(t,s)=>u(e).hero?(a(),$(Do,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),Uo=i=>(N("data-v-29c05f11"),i=i(),B(),i),qo={class:"box"},jo={key:0,class:"icon"},Fo=["innerHTML"],Go=["innerHTML"],Ko=["innerHTML"],Wo={key:4,class:"link-text"},Yo={class:"link-text-value"},Xo=Uo(()=>f("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),Jo=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(a(),$(U,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[f("article",qo,[typeof e.icon=="object"&&e.icon.wrap?(a(),p("div",jo,[y($e,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(a(),$($e,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(a(),p("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Fo)):g("",!0),f("h2",{class:"title",innerHTML:e.title},null,8,Go),e.details?(a(),p("p",{key:3,class:"details",innerHTML:e.details},null,8,Ko)):g("",!0),e.linkText?(a(),p("div",Wo,[f("p",Yo,[D(E(e.linkText)+" ",1),Xo])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Zo=k(Jo,[["__scopeId","data-v-29c05f11"]]),Qo={key:0,class:"VPFeatures"},ei={class:"container"},ti={class:"items"},si=x({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=w(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,o)=>s.features?(a(),p("div",Qo,[f("div",ei,[f("div",ti,[(a(!0),p(O,null,H(s.features,r=>(a(),p("div",{key:r.title,class:V(["item",[t.value]])},[y(Zo,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),oi=k(si,[["__scopeId","data-v-e7779453"]]),ii=x({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=L();return(t,s)=>u(e).features?(a(),$(oi,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):g("",!0)}}),ri=x({__name:"VPHomeContent",setup(i){const{width:e}=Xt({includeScrollbar:!1});return(t,s)=>(a(),p("div",{class:"vp-doc container",style:wt(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[d(t.$slots,"default",{},void 0,!0)],4))}}),ni=k(ri,[["__scopeId","data-v-cd81b872"]]),ai={class:"VPHome"},li=x({__name:"VPHome",setup(i){const{frontmatter:e}=L();return(t,s)=>{const o=te("Content");return a(),p("div",ai,[d(t.$slots,"home-hero-before",{},void 0,!0),y(Ro,null,{"home-hero-info-before":h(()=>[d(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),d(t.$slots,"home-hero-after",{},void 0,!0),d(t.$slots,"home-features-before",{},void 0,!0),y(ii),d(t.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(a(),$(ni,{key:0},{default:h(()=>[y(o)]),_:1})):(a(),$(o,{key:1}))])}}}),ci=k(li,[["__scopeId","data-v-0d7cbeea"]]),ui={},di={class:"VPPage"};function pi(i,e){const t=te("Content");return a(),p("div",di,[d(i.$slots,"page-top"),y(t),d(i.$slots,"page-bottom")])}const hi=k(ui,[["render",pi]]),fi=x({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=L(),{hasSidebar:s}=j();return(o,r)=>(a(),p("div",{class:V(["VPContent",{"has-sidebar":u(s),"is-home":u(t).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?d(o.$slots,"not-found",{key:0},()=>[y(_s)],!0):u(t).layout==="page"?(a(),$(hi,{key:1},{"page-top":h(()=>[d(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(t).layout==="home"?(a(),$(ci,{key:2},{"home-hero-before":h(()=>[d(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(t).layout&&u(t).layout!=="doc"?(a(),$(re(u(t).layout),{key:3})):(a(),$($o,{key:4},{"doc-top":h(()=>[d(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[d(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[d(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[d(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[d(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),bi=k(fi,[["__scopeId","data-v-a0eadabb"]]),vi={class:"container"},mi=["innerHTML"],gi=["innerHTML"],xi=x({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=j();return(o,r)=>u(e).footer&&u(t).footer!==!1?(a(),p("footer",{key:0,class:V(["VPFooter",{"has-sidebar":u(s)}])},[f("div",vi,[u(e).footer.message?(a(),p("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,mi)):g("",!0),u(e).footer.copyright?(a(),p("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,gi)):g("",!0)])],2)):g("",!0)}}),_i=k(xi,[["__scopeId","data-v-3181bdf6"]]);function Tt(){const{theme:i,frontmatter:e}=L(),t=kt([]),s=w(()=>t.value.length>0);return Pe(()=>{t.value=We(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:s}}const yi=i=>(N("data-v-cba91b6f"),i=i(),B(),i),ki=yi(()=>f("span",{class:"vpi-chevron-right icon"},null,-1)),$i={class:"header"},wi={class:"outline"},Si=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=L(),s=T(!1),o=T(0),r=T(),n=T();Jt(r,()=>{s.value=!1}),Zt("Escape",()=>{s.value=!1}),Pe(()=>{s.value=!1});function l(){s.value=!s.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(m){m.target.classList.contains("outline-link")&&(n.value&&(n.value.style.transition="none"),Qt(()=>{s.value=!1}))}function b(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(m,v)=>(a(),p("div",{class:"VPLocalNavOutlineDropdown",style:wt({"--vp-vh":o.value+"px"}),ref_key:"main",ref:r},[m.headers.length>0?(a(),p("button",{key:0,onClick:l,class:V({open:s.value})},[D(E(u(zt)(u(t)))+" ",1),ki],2)):(a(),p("button",{key:1,onClick:b},E(u(t).returnToTopLabel||"Return to top"),1)),y(qe,{name:"flyout"},{default:h(()=>[s.value?(a(),p("div",{key:0,ref_key:"items",ref:n,class:"items",onClick:c},[f("div",$i,[f("a",{class:"top-link",href:"#",onClick:b},E(u(t).returnToTopLabel||"Return to top"),1)]),f("div",wi,[y(Et,{headers:m.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),Pi=k(Si,[["__scopeId","data-v-cba91b6f"]]),Ai=i=>(N("data-v-3ed22da4"),i=i(),B(),i),Li={class:"container"},zi=["aria-expanded"],Ei=Ai(()=>f("span",{class:"vpi-align-left menu-icon"},null,-1)),Ti={class:"menu-text"},Ci=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=L(),{hasSidebar:s}=j(),{headers:o}=Tt(),{y:r}=St(),n=T(0);Q(()=>{n.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Pe(()=>{o.value=We(t.value.outline??e.value.outline)});const l=w(()=>o.value.length===0),c=w(()=>l.value&&!s.value),b=w(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:l.value,fixed:c.value}));return(m,v)=>u(t).layout!=="home"&&(!c.value||u(r)>=n.value)?(a(),p("div",{key:0,class:V(b.value)},[f("div",Li,[u(s)?(a(),p("button",{key:0,class:"menu","aria-expanded":m.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=P=>m.$emit("open-menu"))},[Ei,f("span",Ti,E(u(e).sidebarMenuLabel||"Menu"),1)],8,zi)):g("",!0),y(Pi,{headers:u(o),navHeight:n.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),Vi=k(Ci,[["__scopeId","data-v-3ed22da4"]]);function Oi(){const i=T(!1);function e(){i.value=!0,window.addEventListener("resize",o)}function t(){i.value=!1,window.removeEventListener("resize",o)}function s(){i.value?t():e()}function o(){window.outerWidth>=768&&t()}const r=Ae();return ee(()=>r.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:s}}const Ii={},Mi={class:"VPSwitch",type:"button",role:"switch"},Ni={class:"check"},Bi={key:0,class:"icon"};function Hi(i,e){return a(),p("button",Mi,[f("span",Ni,[i.$slots.default?(a(),p("span",Bi,[d(i.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Di=k(Ii,[["render",Hi],["__scopeId","data-v-3c9bcffa"]]),Ct=i=>(N("data-v-a529835a"),i=i(),B(),i),Ri=Ct(()=>f("span",{class:"vpi-sun sun"},null,-1)),Ui=Ct(()=>f("span",{class:"vpi-moon moon"},null,-1)),qi=x({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=L(),s=Le("toggle-appearance",()=>{e.value=!e.value}),o=w(()=>e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme");return(r,n)=>(a(),$(Di,{title:o.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(s)},{default:h(()=>[Ri,Ui]),_:1},8,["title","aria-checked","onClick"]))}}),Ye=k(qi,[["__scopeId","data-v-a529835a"]]),ji={key:0,class:"VPNavBarAppearance"},Fi=x({__name:"VPNavBarAppearance",setup(i){const{site:e}=L();return(t,s)=>u(e).appearance&&u(e).appearance!=="force-dark"?(a(),p("div",ji,[y(Ye)])):g("",!0)}}),Gi=k(Fi,[["__scopeId","data-v-786f23a7"]]),Xe=T();let Vt=!1,Ve=0;function Ki(i){const e=T(!1);if(le){!Vt&&Wi(),Ve++;const t=ee(Xe,s=>{var o,r,n;s===i.el.value||(o=i.el.value)!=null&&o.contains(s)?(e.value=!0,(r=i.onFocus)==null||r.call(i)):(e.value=!1,(n=i.onBlur)==null||n.call(i))});Fe(()=>{t(),Ve--,Ve||Yi()})}return es(e)}function Wi(){document.addEventListener("focusin",Ot),Vt=!0,Xe.value=document.activeElement}function Yi(){document.removeEventListener("focusin",Ot)}function Ot(){Xe.value=document.activeElement}const Xi={class:"VPMenuLink"},Ji=x({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,s)=>(a(),p("div",Xi,[y(U,{class:V({active:u(J)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel},{default:h(()=>[D(E(t.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),ze=k(Ji,[["__scopeId","data-v-1f793dae"]]),Zi={class:"VPMenuGroup"},Qi={key:0,class:"title"},er=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(a(),p("div",Zi,[e.text?(a(),p("p",Qi,E(e.text),1)):g("",!0),(a(!0),p(O,null,H(e.items,s=>(a(),p(O,null,["link"in s?(a(),$(ze,{key:0,item:s},null,8,["item"])):g("",!0)],64))),256))]))}}),tr=k(er,[["__scopeId","data-v-11001275"]]),sr={class:"VPMenu"},or={key:0,class:"items"},ir=x({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(a(),p("div",sr,[e.items?(a(),p("div",or,[(a(!0),p(O,null,H(e.items,s=>(a(),p(O,{key:s.text},["link"in s?(a(),$(ze,{key:0,item:s},null,8,["item"])):(a(),$(tr,{key:1,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):g("",!0),d(e.$slots,"default",{},void 0,!0)]))}}),rr=k(ir,[["__scopeId","data-v-40114911"]]),nr=i=>(N("data-v-ca516adc"),i=i(),B(),i),ar=["aria-expanded","aria-label"],lr={key:0,class:"text"},cr=["innerHTML"],ur=nr(()=>f("span",{class:"vpi-chevron-down text-icon"},null,-1)),dr={key:1,class:"vpi-more-horizontal icon"},pr={class:"menu"},hr=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=T(!1),t=T();Ki({el:t,onBlur:s});function s(){e.value=!1}return(o,r)=>(a(),p("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=n=>e.value=!0),onMouseleave:r[2]||(r[2]=n=>e.value=!1)},[f("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:r[0]||(r[0]=n=>e.value=!e.value)},[o.button||o.icon?(a(),p("span",lr,[o.icon?(a(),p("span",{key:0,class:V([o.icon,"option-icon"])},null,2)):g("",!0),o.button?(a(),p("span",{key:1,innerHTML:o.button},null,8,cr)):g("",!0),ur])):(a(),p("span",dr))],8,ar),f("div",pr,[y(rr,{items:o.items},{default:h(()=>[d(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Je=k(hr,[["__scopeId","data-v-ca516adc"]]),fr=["href","aria-label","innerHTML"],br=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=w(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}" />`);return(s,o)=>(a(),p("a",{class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:t.value},null,8,fr))}}),vr=k(br,[["__scopeId","data-v-e5af8ed1"]]),mr={class:"VPSocialLinks"},gr=x({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(a(),p("div",mr,[(a(!0),p(O,null,H(e.links,({link:s,icon:o,ariaLabel:r})=>(a(),$(vr,{key:s,icon:o,link:s,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ze=k(gr,[["__scopeId","data-v-2ea1f528"]]),xr={key:0,class:"group translations"},_r={class:"trans-title"},yr={key:1,class:"group"},kr={class:"item appearance"},$r={class:"label"},wr={class:"appearance-action"},Sr={key:2,class:"group"},Pr={class:"item social-links"},Ar=x({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=L(),{localeLinks:s,currentLang:o}=me({correspondingLink:!0}),r=w(()=>s.value.length&&o.value.label||e.value.appearance||t.value.socialLinks);return(n,l)=>r.value?(a(),$(Je,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(s).length&&u(o).label?(a(),p("div",xr,[f("p",_r,E(u(o).label),1),(a(!0),p(O,null,H(u(s),c=>(a(),$(ze,{key:c.link,item:c},null,8,["item"]))),128))])):g("",!0),u(e).appearance&&u(e).appearance!=="force-dark"?(a(),p("div",yr,[f("div",kr,[f("p",$r,E(u(t).darkModeSwitchLabel||"Appearance"),1),f("div",wr,[y(Ye)])])])):g("",!0),u(t).socialLinks?(a(),p("div",Sr,[f("div",Pr,[y(Ze,{class:"social-links-list",links:u(t).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),Lr=k(Ar,[["__scopeId","data-v-918c0501"]]),zr=i=>(N("data-v-dbac2bdb"),i=i(),B(),i),Er=["aria-expanded"],Tr=zr(()=>f("span",{class:"container"},[f("span",{class:"top"}),f("span",{class:"middle"}),f("span",{class:"bottom"})],-1)),Cr=[Tr],Vr=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(a(),p("button",{type:"button",class:V(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},Cr,10,Er))}}),Or=k(Vr,[["__scopeId","data-v-dbac2bdb"]]),Ir=["innerHTML"],Mr=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=L();return(t,s)=>(a(),$(U,{class:V({VPNavBarMenuLink:!0,active:u(J)(u(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,tabindex:"0"},{default:h(()=>[f("span",{innerHTML:t.item.text},null,8,Ir)]),_:1},8,["class","href","target","rel"]))}}),Nr=k(Mr,[["__scopeId","data-v-1513c207"]]),Br=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=L(),s=r=>"link"in r?J(t.value.relativePath,r.link,!!e.item.activeMatch):r.items.some(s),o=w(()=>s(e.item));return(r,n)=>(a(),$(Je,{class:V({VPNavBarMenuGroup:!0,active:u(J)(u(t).relativePath,r.item.activeMatch,!!r.item.activeMatch)||o.value}),button:r.item.text,items:r.item.items},null,8,["class","button","items"]))}}),Hr=i=>(N("data-v-5a2822ec"),i=i(),B(),i),Dr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Rr=Hr(()=>f("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),Ur=x({__name:"VPNavBarMenu",setup(i){const{theme:e}=L();return(t,s)=>u(e).nav?(a(),p("nav",Dr,[Rr,(a(!0),p(O,null,H(u(e).nav,o=>(a(),p(O,{key:o.text},["link"in o?(a(),$(Nr,{key:0,item:o},null,8,["item"])):(a(),$(Br,{key:1,item:o},null,8,["item"]))],64))),128))])):g("",!0)}}),qr=k(Ur,[["__scopeId","data-v-5a2822ec"]]);function jr(i){const{localeIndex:e,theme:t}=L();function s(o){var I,M,C;const r=o.split("."),n=(I=t.value.search)==null?void 0:I.options,l=n&&typeof n=="object",c=l&&((C=(M=n.locales)==null?void 0:M[e.value])==null?void 0:C.translations)||null,b=l&&n.translations||null;let m=c,v=b,P=i;const z=r.pop();for(const xe of r){let F=null;const se=P==null?void 0:P[xe];se&&(F=P=se);const Te=v==null?void 0:v[xe];Te&&(F=v=Te);const Ce=m==null?void 0:m[xe];Ce&&(F=m=Ce),se||(P=F),Te||(v=F),Ce||(m=F)}return(m==null?void 0:m[z])??(v==null?void 0:v[z])??(P==null?void 0:P[z])??""}return s}const Fr=["aria-label"],Gr={class:"DocSearch-Button-Container"},Kr=f("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),Wr={class:"DocSearch-Button-Placeholder"},Yr=f("span",{class:"DocSearch-Button-Keys"},[f("kbd",{class:"DocSearch-Button-Key"}),f("kbd",{class:"DocSearch-Button-Key"},"K")],-1),lt=x({__name:"VPNavBarSearchButton",setup(i){const t=jr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,o)=>(a(),p("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(t)("button.buttonAriaLabel")},[f("span",Gr,[Kr,f("span",Wr,E(u(t)("button.buttonText")),1)]),Yr],8,Fr))}}),Xr={class:"VPNavBarSearch"},Jr={id:"local-search"},Zr={key:1,id:"docsearch"},Qr=x({__name:"VPNavBarSearch",setup(i){const e=()=>null,t=()=>null,{theme:s}=L(),o=T(!1),r=T(!1);Q(()=>{});function n(){o.value||(o.value=!0,setTimeout(l,16))}function l(){const m=new Event("keydown");m.key="k",m.metaKey=!0,window.dispatchEvent(m),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||l()},16)}const c=T(!1),b="";return(m,v)=>{var P;return a(),p("div",Xr,[u(b)==="local"?(a(),p(O,{key:0},[c.value?(a(),$(u(e),{key:0,onClose:v[0]||(v[0]=z=>c.value=!1)})):g("",!0),f("div",Jr,[y(lt,{onClick:v[1]||(v[1]=z=>c.value=!0)})])],64)):u(b)==="algolia"?(a(),p(O,{key:1},[o.value?(a(),$(u(t),{key:0,algolia:((P=u(s).search)==null?void 0:P.options)??u(s).algolia,onVnodeBeforeMount:v[2]||(v[2]=z=>r.value=!0)},null,8,["algolia"])):g("",!0),r.value?g("",!0):(a(),p("div",Zr,[y(lt,{onClick:n})]))],64)):g("",!0)])}}}),en=x({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=L();return(t,s)=>u(e).socialLinks?(a(),$(Ze,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),tn=k(en,[["__scopeId","data-v-8aed4598"]]),sn=["href","rel","target"],on={key:1},rn={key:2},nn=x({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=L(),{hasSidebar:s}=j(),{currentLang:o}=me(),r=w(()=>{var c;return typeof t.value.logoLink=="string"?t.value.logoLink:(c=t.value.logoLink)==null?void 0:c.link}),n=w(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.rel}),l=w(()=>{var c;return typeof t.value.logoLink=="string"||(c=t.value.logoLink)==null?void 0:c.target});return(c,b)=>(a(),p("div",{class:V(["VPNavBarTitle",{"has-sidebar":u(s)}])},[f("a",{class:"title",href:r.value??u(Ge)(u(o).link),rel:n.value,target:l.value},[d(c.$slots,"nav-bar-title-before",{},void 0,!0),u(t).logo?(a(),$($e,{key:0,class:"logo",image:u(t).logo},null,8,["image"])):g("",!0),u(t).siteTitle?(a(),p("span",on,E(u(t).siteTitle),1)):u(t).siteTitle===void 0?(a(),p("span",rn,E(u(e).title),1)):g("",!0),d(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,sn)],2))}}),an=k(nn,[["__scopeId","data-v-5598953a"]]),ln={class:"items"},cn={class:"title"},un=x({__name:"VPNavBarTranslations",setup(i){const{theme:e}=L(),{localeLinks:t,currentLang:s}=me({correspondingLink:!0});return(o,r)=>u(t).length&&u(s).label?(a(),$(Je,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:h(()=>[f("div",ln,[f("p",cn,E(u(s).label),1),(a(!0),p(O,null,H(u(t),n=>(a(),$(ze,{key:n.link,item:n},null,8,["item"]))),128))])]),_:1},8,["label"])):g("",!0)}}),dn=k(un,[["__scopeId","data-v-aaab09ea"]]),pn=i=>(N("data-v-cd0bf013"),i=i(),B(),i),hn={class:"wrapper"},fn={class:"container"},bn={class:"title"},vn={class:"content"},mn={class:"content-body"},gn=pn(()=>f("div",{class:"divider"},[f("div",{class:"divider-line"})],-1)),xn=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const{y:e}=St(),{hasSidebar:t}=j(),{hasLocalNav:s}=Tt(),{frontmatter:o}=L(),r=T({});return yt(()=>{r.value={"has-sidebar":t.value,"has-local-nav":s.value,top:o.value.layout==="home"&&e.value===0}}),(n,l)=>(a(),p("div",{class:V(["VPNavBar",r.value])},[f("div",hn,[f("div",fn,[f("div",bn,[y(an,null,{"nav-bar-title-before":h(()=>[d(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(n.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),f("div",vn,[f("div",mn,[d(n.$slots,"nav-bar-content-before",{},void 0,!0),y(Qr,{class:"search"}),y(qr,{class:"menu"}),y(dn,{class:"translations"}),y(Gi,{class:"appearance"}),y(tn,{class:"social-links"}),y(Lr,{class:"extra"}),d(n.$slots,"nav-bar-content-after",{},void 0,!0),y(Or,{class:"hamburger",active:n.isScreenOpen,onClick:l[0]||(l[0]=c=>n.$emit("toggle-screen"))},null,8,["active"])])])])]),gn],2))}}),_n=k(xn,[["__scopeId","data-v-cd0bf013"]]),yn={key:0,class:"VPNavScreenAppearance"},kn={class:"text"},$n=x({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=L();return(s,o)=>u(e).appearance&&u(e).appearance!=="force-dark"?(a(),p("div",yn,[f("p",kn,E(u(t).darkModeSwitchLabel||"Appearance"),1),y(Ye)])):g("",!0)}}),wn=k($n,[["__scopeId","data-v-2ed7559f"]]),Sn=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=Le("close-screen");return(t,s)=>(a(),$(U,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:h(()=>[D(E(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Pn=k(Sn,[["__scopeId","data-v-c303e757"]]),An=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=Le("close-screen");return(t,s)=>(a(),$(U,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,onClick:u(e)},{default:h(()=>[D(E(t.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),It=k(An,[["__scopeId","data-v-4bd09630"]]),Ln={class:"VPNavScreenMenuGroupSection"},zn={key:0,class:"title"},En=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(a(),p("div",Ln,[e.text?(a(),p("p",zn,E(e.text),1)):g("",!0),(a(!0),p(O,null,H(e.items,s=>(a(),$(It,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Tn=k(En,[["__scopeId","data-v-ca3d4e61"]]),Cn=i=>(N("data-v-0a808fc4"),i=i(),B(),i),Vn=["aria-controls","aria-expanded"],On=["innerHTML"],In=Cn(()=>f("span",{class:"vpi-plus button-icon"},null,-1)),Mn=["id"],Nn={key:1,class:"group"},Bn=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=T(!1),s=w(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){t.value=!t.value}return(r,n)=>(a(),p("div",{class:V(["VPNavScreenMenuGroup",{open:t.value}])},[f("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:o},[f("span",{class:"button-text",innerHTML:r.text},null,8,On),In],8,Vn),f("div",{id:s.value,class:"items"},[(a(!0),p(O,null,H(r.items,l=>(a(),p(O,{key:l.text},["link"in l?(a(),p("div",{key:l.text,class:"item"},[y(It,{item:l},null,8,["item"])])):(a(),p("div",Nn,[y(Tn,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,Mn)],2))}}),Hn=k(Bn,[["__scopeId","data-v-0a808fc4"]]),Dn={key:0,class:"VPNavScreenMenu"},Rn=x({__name:"VPNavScreenMenu",setup(i){const{theme:e}=L();return(t,s)=>u(e).nav?(a(),p("nav",Dn,[(a(!0),p(O,null,H(u(e).nav,o=>(a(),p(O,{key:o.text},["link"in o?(a(),$(Pn,{key:0,item:o},null,8,["item"])):(a(),$(Hn,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),Un=x({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=L();return(t,s)=>u(e).socialLinks?(a(),$(Ze,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):g("",!0)}}),Mt=i=>(N("data-v-46ce0713"),i=i(),B(),i),qn=Mt(()=>f("span",{class:"vpi-languages icon lang"},null,-1)),jn=Mt(()=>f("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Fn={class:"list"},Gn=x({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=me({correspondingLink:!0}),s=T(!1);function o(){s.value=!s.value}return(r,n)=>u(e).length&&u(t).label?(a(),p("div",{key:0,class:V(["VPNavScreenTranslations",{open:s.value}])},[f("button",{class:"title",onClick:o},[qn,D(" "+E(u(t).label)+" ",1),jn]),f("ul",Fn,[(a(!0),p(O,null,H(u(e),l=>(a(),p("li",{key:l.link,class:"item"},[y(U,{class:"link",href:l.link},{default:h(()=>[D(E(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):g("",!0)}}),Kn=k(Gn,[["__scopeId","data-v-46ce0713"]]),Wn={class:"container"},Yn=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=T(null),t=Pt(le?document.body:null);return(s,o)=>(a(),$(qe,{name:"fade",onEnter:o[0]||(o[0]=r=>t.value=!0),onAfterLeave:o[1]||(o[1]=r=>t.value=!1)},{default:h(()=>[s.open?(a(),p("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[f("div",Wn,[d(s.$slots,"nav-screen-content-before",{},void 0,!0),y(Rn,{class:"menu"}),y(Kn,{class:"translations"}),y(wn,{class:"appearance"}),y(Un,{class:"social-links"}),d(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),Xn=k(Yn,[["__scopeId","data-v-a1d80ed4"]]),Jn={key:0,class:"VPNav"},Zn=x({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=Oi(),{frontmatter:o}=L(),r=w(()=>o.value.navbar!==!1);return At("close-screen",t),Se(()=>{le&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(n,l)=>r.value?(a(),p("header",Jn,[y(_n,{"is-screen-open":u(e),onToggleScreen:u(s)},{"nav-bar-title-before":h(()=>[d(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(n.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(n.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(n.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(Xn,{open:u(e)},{"nav-screen-content-before":h(()=>[d(n.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(n.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),Qn=k(Zn,[["__scopeId","data-v-08aa4208"]]),Nt=i=>(N("data-v-601fff8e"),i=i(),B(),i),ea=["role","tabindex"],ta=Nt(()=>f("div",{class:"indicator"},null,-1)),sa=Nt(()=>f("span",{class:"vpi-chevron-right caret-icon"},null,-1)),oa=[sa],ia={key:1,class:"items"},ra=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:s,isLink:o,isActiveLink:r,hasActiveLink:n,hasChildren:l,toggle:c}=ws(w(()=>e.item)),b=w(()=>l.value?"section":"div"),m=w(()=>o.value?"a":"div"),v=w(()=>l.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),P=w(()=>o.value?void 0:"button"),z=w(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":o.value},{"is-active":r.value},{"has-active":n.value}]);function I(C){"key"in C&&C.key!=="Enter"||!e.item.link&&c()}function M(){e.item.link&&c()}return(C,xe)=>{const F=te("VPSidebarItem",!0);return a(),$(re(b.value),{class:V(["VPSidebarItem",z.value])},{default:h(()=>[C.item.text?(a(),p("div",_e({key:0,class:"item",role:P.value},ss(C.item.items?{click:I,keydown:I}:{},!0),{tabindex:C.item.items&&0}),[ta,C.item.link?(a(),$(U,{key:0,tag:m.value,class:"link",href:C.item.link,rel:C.item.rel,target:C.item.target},{default:h(()=>[(a(),$(re(v.value),{class:"text",innerHTML:C.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),$(re(v.value),{key:1,class:"text",innerHTML:C.item.text},null,8,["innerHTML"])),C.item.collapsed!=null?(a(),p("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:ts(M,["enter"]),tabindex:"0"},oa,32)):g("",!0)],16,ea)):g("",!0),C.item.items&&C.item.items.length?(a(),p("div",ia,[C.depth<5?(a(!0),p(O,{key:0},H(C.item.items,se=>(a(),$(F,{key:se.text,item:se,depth:C.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),na=k(ra,[["__scopeId","data-v-601fff8e"]]),Bt=i=>(N("data-v-ba982e17"),i=i(),B(),i),aa=Bt(()=>f("div",{class:"curtain"},null,-1)),la={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ca=Bt(()=>f("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),ua=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=j(),s=i,o=T(null),r=Pt(le?document.body:null);return ee([s,o],()=>{var n;s.open?(r.value=!0,(n=o.value)==null||n.focus()):r.value=!1},{immediate:!0,flush:"post"}),(n,l)=>u(t)?(a(),p("aside",{key:0,class:V(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:o,onClick:l[0]||(l[0]=os(()=>{},["stop"]))},[aa,f("nav",la,[ca,d(n.$slots,"sidebar-nav-before",{},void 0,!0),(a(!0),p(O,null,H(u(e),c=>(a(),p("div",{key:c.text,class:"group"},[y(na,{item:c,depth:0},null,8,["item"])]))),128)),d(n.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),da=k(ua,[["__scopeId","data-v-ba982e17"]]),pa=x({__name:"VPSkipLink",setup(i){const e=Ae(),t=T();ee(()=>e.path,()=>t.value.focus());function s({target:o}){const r=document.getElementById(decodeURIComponent(o.hash).slice(1));if(r){const n=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",n)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",n),r.focus(),window.scrollTo(0,0)}}return(o,r)=>(a(),p(O,null,[f("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),f("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s}," Skip to content ")],64))}}),ha=k(pa,[["__scopeId","data-v-b79a1e83"]]),fa=x({__name:"Layout",setup(i){const{isOpen:e,open:t,close:s}=j(),o=Ae();ee(()=>o.path,s),$s(e,s);const{frontmatter:r}=L(),n=is(),l=w(()=>!!n["home-hero-image"]);return At("hero-image-slot-exists",l),(c,b)=>{const m=te("Content");return u(r).layout!==!1?(a(),p("div",{key:0,class:V(["Layout",u(r).pageClass])},[d(c.$slots,"layout-top",{},void 0,!0),y(ha),y(ls,{class:"backdrop",show:u(e),onClick:u(s)},null,8,["show","onClick"]),y(Qn,null,{"nav-bar-title-before":h(()=>[d(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[d(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[d(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[d(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[d(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[d(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(Vi,{open:u(e),onOpenMenu:u(t)},null,8,["open","onOpenMenu"]),y(da,{open:u(e)},{"sidebar-nav-before":h(()=>[d(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[d(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(bi,null,{"page-top":h(()=>[d(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[d(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[d(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[d(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[d(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[d(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[d(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[d(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[d(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[d(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[d(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[d(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[d(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[d(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[d(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[d(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[d(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[d(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[d(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[d(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[d(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[d(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[d(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(_i),d(c.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),$(m,{key:1}))}}}),ba=k(fa,[["__scopeId","data-v-1333ba00"]]),ol={Layout:ba,enhanceApp:({app:i})=>{i.component("Badge",rs)}},va=()=>typeof customElements>"u"?void 0:customElements;function ce(i,e,t=va()){if(!t)return e;const s=t.get(i);return s||(t.define(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=globalThis,Qe=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ct=new WeakMap;let Ht=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ct.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ct.set(t,e))}return e}toString(){return this.cssText}};const ma=i=>new Ht(typeof i=="string"?i:i+"",void 0,et),ue=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new Ht(t,i,et)},ga=(i,e)=>{if(Qe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),o=ke.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)}},ut=Qe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ma(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xa,defineProperty:_a,getOwnPropertyDescriptor:ya,getOwnPropertyNames:ka,getOwnPropertySymbols:$a,getPrototypeOf:wa}=Object,K=globalThis,dt=K.trustedTypes,Sa=dt?dt.emptyScript:"",Oe=K.reactiveElementPolyfillSupport,pe=(i,e)=>i,Ue={toAttribute(i,e){switch(e){case Boolean:i=i?Sa:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Dt=(i,e)=>!xa(i,e),pt={attribute:!0,type:String,converter:Ue,reflect:!1,useDefault:!1,hasChanged:Dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),K.litPropertyMetadata??(K.litPropertyMetadata=new WeakMap);let ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,t);o!==void 0&&_a(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){const{get:o,set:r}=ya(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const l=o==null?void 0:o.call(this);r==null||r.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pt}static _$Ei(){if(this.hasOwnProperty(pe("elementProperties")))return;const e=wa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pe("properties"))){const t=this.properties,s=[...ka(t),...$a(t)];for(const o of s)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,o]of t)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const o=this._$Eu(t,s);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(ut(o))}else e!==void 0&&t.push(ut(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ga(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:Ue).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){var r,n;const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const l=s.getPropertyOptions(o),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:Ue;this._$Em=o;const b=c.fromAttribute(t,l.type);this[o]=b??((n=this._$Ej)==null?void 0:n.get(o))??b,this._$Em=null}}requestUpdate(e,t,s,o=!1,r){var n;if(e!==void 0){const l=this.constructor;if(o===!1&&(r=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??Dt)(r,t)||s.useDefault&&s.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:o,wrapped:r},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o){const{wrapped:l}=n,c=this[r];l!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,n,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},ie[pe("elementProperties")]=new Map,ie[pe("finalized")]=new Map,Oe==null||Oe({ReactiveElement:ie}),(K.reactiveElementVersions??(K.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,ht=i=>i,we=he.trustedTypes,ft=we?we.createPolicy("lit-html",{createHTML:i=>i}):void 0,Rt="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+G,Pa=`<${Ut}>`,Z=document,fe=()=>Z.createComment(""),be=i=>i===null||typeof i!="object"&&typeof i!="function",tt=Array.isArray,Aa=i=>tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,de=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,vt=/>/g,W=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,gt=/"/g,qt=/^(?:script|style|textarea|title)$/i,La=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=La(1),R=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),xt=new WeakMap,Y=Z.createTreeWalker(Z,129);function jt(i,e){if(!tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(e):e}const za=(i,e)=>{const t=i.length-1,s=[];let o,r=e===2?"<svg>":e===3?"<math>":"",n=de;for(let l=0;l<t;l++){const c=i[l];let b,m,v=-1,P=0;for(;P<c.length&&(n.lastIndex=P,m=n.exec(c),m!==null);)P=n.lastIndex,n===de?m[1]==="!--"?n=bt:m[1]!==void 0?n=vt:m[2]!==void 0?(qt.test(m[2])&&(o=RegExp("</"+m[2],"g")),n=W):m[3]!==void 0&&(n=W):n===W?m[0]===">"?(n=o??de,v=-1):m[1]===void 0?v=-2:(v=n.lastIndex-m[2].length,b=m[1],n=m[3]===void 0?W:m[3]==='"'?gt:mt):n===gt||n===mt?n=W:n===bt||n===vt?n=de:(n=W,o=void 0);const z=n===W&&i[l+1].startsWith("/>")?" ":"";r+=n===de?c+Pa:v>=0?(s.push(b),c.slice(0,v)+Rt+c.slice(v)+G+z):c+G+(v===-2?l:z)}return[jt(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class ve{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let r=0,n=0;const l=e.length-1,c=this.parts,[b,m]=za(e,t);if(this.el=ve.createElement(b,s),Y.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=Y.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(Rt)){const P=m[n++],z=o.getAttribute(v).split(G),I=/([.?@])?(.*)/.exec(P);c.push({type:1,index:r,name:I[2],strings:z,ctor:I[1]==="."?Ta:I[1]==="?"?Ca:I[1]==="@"?Va:Ee}),o.removeAttribute(v)}else v.startsWith(G)&&(c.push({type:6,index:r}),o.removeAttribute(v));if(qt.test(o.tagName)){const v=o.textContent.split(G),P=v.length-1;if(P>0){o.textContent=we?we.emptyScript:"";for(let z=0;z<P;z++)o.append(v[z],fe()),Y.nextNode(),c.push({type:2,index:++r});o.append(v[P],fe())}}}else if(o.nodeType===8)if(o.data===Ut)c.push({type:2,index:r});else{let v=-1;for(;(v=o.data.indexOf(G,v+1))!==-1;)c.push({type:7,index:r}),v+=G.length-1}r++}}static createElement(e,t){const s=Z.createElement("template");return s.innerHTML=e,s}}function ne(i,e,t=i,s){var n,l;if(e===R)return e;let o=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const r=be(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=o:t._$Cl=o),o!==void 0&&(e=ne(i,o._$AS(i,e.values),o,s)),e}class Ea{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,o=((e==null?void 0:e.creationScope)??Z).importNode(t,!0);Y.currentNode=o;let r=Y.nextNode(),n=0,l=0,c=s[0];for(;c!==void 0;){if(n===c.index){let b;c.type===2?b=new ge(r,r.nextSibling,this,e):c.type===1?b=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(b=new Oa(r,this,e)),this._$AV.push(b),c=s[++l]}n!==(c==null?void 0:c.index)&&(r=Y.nextNode(),n++)}return Y.currentNode=Z,o}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ge{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,o){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),be(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Aa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ve.createElement(jt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const n=new Ea(o,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=xt.get(e.strings);return t===void 0&&xt.set(e.strings,t=new ve(e)),t}k(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const r of e)o===t.length?t.push(s=new ge(this.O(fe()),this.O(fe()),this,this.options)):s=t[o],s._$AI(r),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const o=ht(e).nextSibling;ht(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,o,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(e,t=this,s,o){const r=this.strings;let n=!1;if(r===void 0)e=ne(this,e,t,0),n=!be(e)||e!==this._$AH&&e!==R,n&&(this._$AH=e);else{const l=e;let c,b;for(e=r[0],c=0;c<r.length-1;c++)b=ne(this,l[s+c],t,c),b===R&&(b=this._$AH[c]),n||(n=!be(b)||b!==this._$AH[c]),b===S?e=S:e!==S&&(e+=(b??"")+r[c+1]),this._$AH[c]=b}n&&!o&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ta extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class Ca extends Ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class Va extends Ee{constructor(e,t,s,o,r){super(e,t,s,o,r),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??S)===R)return;const s=this._$AH,o=e===S&&s!==S||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==S&&(s===S||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oa{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const Me=he.litHtmlPolyfillSupport;Me==null||Me(ve,ge),(he.litHtmlVersions??(he.litHtmlVersions=[])).push("3.3.3");const Ia=(i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let o=s._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=o=new ge(e.insertBefore(fe(),r),r,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis;let q=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ia(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return R}};var _t;q._$litElement$=!0,q.finalized=!0,(_t=X.litElementHydrateSupport)==null||_t.call(X,{LitElement:q});const Ne=X.litElementPolyfillSupport;Ne==null||Ne({LitElement:q});(X.litElementVersions??(X.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=i=>i??S;class st extends q{constructor(){super(),this.variant="primary",this.size="medium",this.shape="default",this.disabled=!1,this.loading=!1,this.loadingText="",this.accessibleLabel=""}get buttonElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("button"))??null}click(){if(this.disabled||this.loading)return;const e=this.buttonElement;if(e){e.click();return}super.click()}focus(e){const t=this.buttonElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.buttonElement;if(e){e.blur();return}super.blur()}render(){const e=this.disabled||this.loading,t=this.loading&&this.loadingText?this.loadingText:A`<slot></slot>`;return A`
      <button
        part="button"
        type="button"
        ?disabled=${e}
        aria-busy=${this.loading?"true":"false"}
        aria-label=${_(this.accessibleLabel||void 0)}
      >
        <span class="content">
          ${this.loading?A`<span class="spinner" part="spinner" aria-hidden="true"></span>`:A`<slot name="prefix"></slot>`}
          <span class="label" part="label">${t}</span>
          ${this.loading?S:A`<slot name="suffix"></slot>`}
        </span>
      </button>
    `}}Object.defineProperty(st,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},loadingText:{type:String,attribute:"loading-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(st,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const Ma="super-button",Na=i=>ce(Ma,st,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ba=i=>(...e)=>({_$litDirective$:i,values:e});class Ha{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da=i=>i.strings===void 0,Ra={},Ua=(i,e=Ra)=>i._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=Ba(class extends Ha{constructor(i){if(super(i),i.type!==oe.PROPERTY&&i.type!==oe.ATTRIBUTE&&i.type!==oe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Da(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===R||e===S)return e;const t=i.element,s=i.name;if(i.type===oe.PROPERTY){if(e===t[s])return R}else if(i.type===oe.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return R}else if(i.type===oe.ATTRIBUTE&&t.getAttribute(s)===e+"")return R;return Ua(i),e}});class ot extends q{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-checkbox-change",{detail:{checked:this.checked,indeterminate:this.indeterminate,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.indeterminate=!1,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked,this.indeterminate=!1;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-checkbox-description",this.helperText?"super-checkbox-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return A`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            .checked=${ae(this.checked)}
            .indeterminate=${this.indeterminate}
            name=${this.name}
            value=${this.value}
            aria-label=${_(this.accessibleLabel||void 0)}
            aria-labelledby=${_(this.accessibleLabel?void 0:"super-checkbox-label")}
            aria-describedby=${_(e)}
            aria-invalid=${_(t)}
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
        ${this.helperText?A`<span
              id="super-checkbox-helper"
              class="helper"
              part="helper"
              role=${_(this.validation==="error"?"alert":void 0)}
              aria-live=${_(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:S}
      </span>
    `}}Object.defineProperty(ot,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},indeterminate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(ot,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const qa="super-checkbox",ja=i=>ce(qa,ot,i);class it extends q{constructor(){super(),this.value="",this.type="text",this.size="medium",this.validation="none",this.placeholder="",this.helperText="",this.accessibleLabel="",this.clearLabel="清空输入",this.decrementLabel="减少数值",this.incrementLabel="增加数值",this.passwordShowLabel="显示密码",this.passwordHideLabel="隐藏密码",this.disabled=!1,this.readOnly=!1,this.required=!1,this.clearable=!1,this.revealable=!1,this.multiline=!1,this.showCount=!1,this.maxLength=void 0,this.minLength=void 0,this.min="",this.max="",this.step="",this.rows=3,this.inputMode="",this.autocomplete="",this.passwordVisible=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.hasAction=!1}get fieldElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector(".field"))??null}focus(e){const t=this.fieldElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.fieldElement;if(e){e.blur();return}super.blur()}select(){var e;(e=this.fieldElement)==null||e.select()}emitValueEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value,originalEvent:t},bubbles:!0,composed:!0}))}handleInput(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-input",e)}handleChange(e){const t=e.currentTarget;this.value=t.value,this.emitValueEvent("super-change",e)}clearInput(){const e=this.fieldElement;if(!e||this.disabled||this.readOnly)return;const t=this.value;e.value="",this.value="",e.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"deleteContentBackward"})),this.dispatchEvent(new CustomEvent("super-clear",{detail:{previousValue:t},bubbles:!0,composed:!0})),e.focus()}togglePasswordVisibility(){this.disabled||this.readOnly||this.type!=="password"||(this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent("super-password-visibility",{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{var e;return(e=this.fieldElement)==null?void 0:e.focus()}))}stepNumber(e){const t=this.fieldElement;!(t instanceof HTMLInputElement)||this.type!=="number"||this.disabled||this.readOnly||(e>0?t.stepUp():t.stepDown(),this.value=t.value,t.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0,inputType:"insertReplacementText"})),t.focus())}updateSlotPresence(e,t){const o=e.currentTarget.assignedNodes({flatten:!0}).some(r=>{var n;return r.nodeType!==Node.TEXT_NODE||!!((n=r.textContent)!=null&&n.trim())});t==="prefix"?this.hasPrefix=o:t==="suffix"?this.hasSuffix=o:this.hasAction=o}validationSymbol(){return{success:"✓",warning:"!",error:"×",info:"i"}[this.validation]??S}renderField(){const e=this.helperText?"super-input-helper":void 0,t=this.validation==="error"?"true":void 0;if(this.multiline)return A`
        <textarea
          class="field"
          part="input"
          .value=${ae(this.value)}
          placeholder=${this.placeholder}
          rows=${this.rows}
          maxlength=${_(this.maxLength)}
          minlength=${_(this.minLength)}
          inputmode=${_(this.inputMode||void 0)}
          autocomplete=${_(this.autocomplete||void 0)}
          aria-label=${_(this.accessibleLabel||void 0)}
          aria-describedby=${_(e)}
          aria-invalid=${_(t)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
      `;const s=this.type==="password"&&this.passwordVisible?"text":this.type;return A`
      <input
        class="field"
        part="input"
        .value=${ae(this.value)}
        type=${s}
        placeholder=${this.placeholder}
        maxlength=${_(this.maxLength)}
        minlength=${_(this.minLength)}
        min=${_(this.min||void 0)}
        max=${_(this.max||void 0)}
        step=${_(this.step||void 0)}
        inputmode=${_(this.inputMode||void 0)}
        autocomplete=${_(this.autocomplete||void 0)}
        aria-label=${_(this.accessibleLabel||void 0)}
        aria-describedby=${_(e)}
        aria-invalid=${_(t)}
        ?disabled=${this.disabled}
        ?readonly=${this.readOnly}
        ?required=${this.required}
        @input=${this.handleInput}
        @change=${this.handleChange}
      />
    `}render(){const e=!this.disabled&&!this.readOnly,t=this.clearable&&!!this.value&&e,s=this.type==="password"&&this.revealable,o=this.validationSymbol(),r=!!this.helperText||this.showCount&&this.maxLength!==void 0;return A`
      <div class="control" part="control">
        <span class="adornment prefix" part="prefix" ?hidden=${!this.hasPrefix}>
          <slot
            name="prefix"
            @slotchange=${n=>this.updateSlotPresence(n,"prefix")}
          ></slot>
        </span>
        ${this.required?A`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`:S}
        ${this.type==="number"&&!this.multiline?A`
              <button
                class="step-button decrement"
                part="step-button"
                type="button"
                aria-label=${this.decrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(-1)}
              >−</button>
            `:S}
        ${this.renderField()}
        ${this.type==="number"&&!this.multiline?A`
              <button
                class="step-button increment"
                part="step-button"
                type="button"
                aria-label=${this.incrementLabel}
                tabindex="-1"
                ?disabled=${!e}
                @click=${()=>this.stepNumber(1)}
              >＋</button>
            `:S}
        <span class="trailing">
          ${o===S?S:A`<span class="validation-icon" part="validation-icon" aria-hidden="true">${o}</span>`}
          ${t?A`
                <button
                  class="icon-button"
                  part="clear-button"
                  type="button"
                  aria-label=${this.clearLabel}
                  @click=${this.clearInput}
                >×</button>
              `:S}
          ${s?A`
                <button
                  class="icon-button"
                  part="password-toggle"
                  type="button"
                  aria-label=${this.passwordVisible?this.passwordHideLabel:this.passwordShowLabel}
                  ?disabled=${!e}
                  @click=${this.togglePasswordVisibility}
                >${this.passwordVisible?"◉":"◎"}</button>
              `:S}
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
      ${r?A`
            <div class="meta" part="meta">
              ${this.helperText?A`<span
                    id="super-input-helper"
                    class="helper"
                    part="helper"
                    role=${_(this.validation==="error"?"alert":void 0)}
                    aria-live=${_(this.validation==="error"?void 0:"polite")}
                  >${this.helperText}</span>`:S}
              ${this.showCount&&this.maxLength!==void 0?A`<span class="count" part="count">${this.value.length}/${this.maxLength}</span>`:S}
            </div>
          `:S}
    `}}Object.defineProperty(it,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{type:String},type:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},decrementLabel:{type:String,attribute:"decrement-label"},incrementLabel:{type:String,attribute:"increment-label"},passwordShowLabel:{type:String,attribute:"password-show-label"},passwordHideLabel:{type:String,attribute:"password-hide-label"},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},revealable:{type:Boolean,reflect:!0},multiline:{type:Boolean,reflect:!0},showCount:{type:Boolean,attribute:"show-count",reflect:!0},maxLength:{type:Number,attribute:"maxlength"},minLength:{type:Number,attribute:"minlength"},min:{type:String},max:{type:String},step:{type:String},rows:{type:Number},inputMode:{type:String,attribute:"inputmode"},autocomplete:{type:String},passwordVisible:{state:!0},hasPrefix:{state:!0},hasSuffix:{state:!0},hasAction:{state:!0}}});Object.defineProperty(it,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const Fa="super-input",Ga=i=>ce(Fa,it,i);class rt extends q{constructor(){super(),Object.defineProperty(this,"coordinationRoot",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.checked=!1,this.disabled=!1,this.required=!1,this.variant="default",this.size="medium",this.validation="none",this.value="on",this.name="",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}rootRadios(){const e=this.getRootNode();return e instanceof Document||e instanceof ShadowRoot?Array.from(e.querySelectorAll("super-radio")):[this]}groupMembers(){if(!this.name)return[this];const e=this.closest("form");return this.rootRadios().filter(t=>t.name===this.name&&t.closest("form")===e)}get radioTabIndex(){if(this.disabled)return-1;if(!this.name)return 0;const e=this.groupMembers().filter(s=>!s.disabled);return(e.find(s=>s.checked)??e[0])===this?0:-1}refreshRootRadios(){this.rootRadios().forEach(e=>{e!==this&&e.requestUpdate()})}connectedCallback(){super.connectedCallback();const e=this.getRootNode();this.coordinationRoot=e instanceof Document||e instanceof ShadowRoot?e:null,this.uncheckGroupPeers(),queueMicrotask(()=>{this.isConnected&&this.refreshRootRadios()})}disconnectedCallback(){const e=this.coordinationRoot;this.coordinationRoot=null,super.disconnectedCallback(),queueMicrotask(()=>{e==null||e.querySelectorAll("super-radio").forEach(t=>t.requestUpdate())})}uncheckGroupPeers(){!this.checked||!this.name||this.groupMembers().forEach(e=>{e!==this&&e.checked&&(e.checked=!1)})}emitChange(e){this.dispatchEvent(new CustomEvent("super-radio-change",{detail:{checked:this.checked,value:this.value,name:this.name,originalEvent:e},bubbles:!0,composed:!0}))}selectFromInteraction(e){this.disabled||this.checked||(this.checked=!0,this.uncheckGroupPeers(),this.emitChange(e))}handleChange(e){e.currentTarget.checked&&this.selectFromInteraction(e)}handleKeyDown(e){if(!this.name||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp"].includes(e.key))return;const t=this.groupMembers().filter(l=>!l.disabled);if(t.length<2)return;e.preventDefault();const s=Math.max(0,t.indexOf(this)),o=e.key==="ArrowRight"||e.key==="ArrowDown"?1:-1,r=(s+o+t.length)%t.length,n=t[r];n.selectFromInteraction(e),n.focus()}updated(e){this.checked&&(e.has("checked")||e.has("name"))&&this.uncheckGroupPeers(),(e.has("checked")||e.has("name")||e.has("disabled"))&&this.refreshRootRadios()}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}const t=this.checked;t||(this.checked=!0,this.uncheckGroupPeers());const s=new Event("change");super.click(),t||this.emitChange(s)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-radio-description",this.helperText?"super-radio-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return A`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="radio"
            .checked=${ae(this.checked)}
            .tabIndex=${this.radioTabIndex}
            name=${this.name}
            value=${this.value}
            aria-label=${_(this.accessibleLabel||void 0)}
            aria-labelledby=${_(this.accessibleLabel?void 0:"super-radio-label")}
            aria-describedby=${_(e)}
            aria-invalid=${_(t)}
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
        ${this.helperText?A`<span
              id="super-radio-helper"
              class="helper"
              part="helper"
              role=${_(this.validation==="error"?"alert":void 0)}
              aria-live=${_(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:S}
      </span>
    `}}Object.defineProperty(rt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},value:{type:String,reflect:!0},name:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(rt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const Ka="super-radio",Wa=i=>ce(Ka,rt,i),Ya=(i,e)=>i.length===e.length&&i.every((t,s)=>t===e[s]);class nt extends q{constructor(){super(),Object.defineProperty(this,"_value",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"valueIsControlled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"optionObserver",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"optionIds",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"nextOptionId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"initializedOptions",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"hasConnected",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"selectedAttributeStates",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap}),Object.defineProperty(this,"typeahead",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"typeaheadTimer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"handleOptionMutations",{enumerable:!0,configurable:!0,writable:!0,value:e=>{let t=!1,s=!1,o;const r=l=>l instanceof HTMLOptionElement?[l]:l instanceof HTMLElement?Array.from(l.querySelectorAll("option")):[],n=new Set(this.collectOptions().map(l=>l.source));e.forEach(l=>{if(l.type==="attributes"){if((l.target instanceof HTMLOptionElement||l.target instanceof HTMLOptGroupElement)&&(t=!0),l.attributeName==="selected"&&l.target instanceof HTMLOptionElement){const c=l.target.hasAttribute("selected");n.has(l.target)&&(this.selectedAttributeStates.set(l.target,c),s=!0,l.target.selected=c,c&&(o=l.target))}return}(l.type==="characterData"||l.type==="childList")&&(t=!0,l.addedNodes.forEach(c=>{r(c).forEach(b=>{if(!n.has(b))return;const m=b.hasAttribute("selected"),v=this.selectedAttributeStates.has(b),P=v&&this.selectedAttributeStates.get(b)!==m;(!v&&m||P)&&(b.selected=m,s=!0,m&&(o=b)),this.selectedAttributeStates.set(b,m)})}))}),t&&this.syncOptions(s,o,s)}}),Object.defineProperty(this,"handleDocumentPointerDown",{enumerable:!0,configurable:!0,writable:!0,value:e=>{!this.open||e.composedPath().includes(this)||this.setOpen(!1,"outside",e)}}),this.multiple=!1,this.searchable=!1,this.clearable=!1,this.disabled=!1,this.readOnly=!1,this.required=!1,this.loading=!1,this.open=!1,this.name="",this.size="medium",this.variant="default",this.validation="none",this.placeholder="请选择",this.helperText="",this.accessibleLabel="",this.clearLabel="清空选择",this.removeLabel="移除",this.searchLabel="搜索选项",this.searchPlaceholder="搜索并选择",this.emptyText="暂无可选项",this.loadingText="加载中...",this.options=[],this.query="",this.activeIndex=-1,this.hasPrefix=!1}get value(){return this._value}set value(e){this.valueIsControlled=!0,this.setInternalValue(e)}setInternalValue(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get comboboxElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector('[role="combobox"]'))??null}get selectedValues(){const e=Array.isArray(this.value)?this.value:this.value?[this.value]:[];return Array.from(new Set(e))}get selectedOptions(){return this.selectedValues.map(t=>this.options.find(s=>s.value===t)).filter(t=>t!==void 0)}get filteredOptions(){const e=this.searchable?this.query.trim().toLocaleLowerCase():"";return this.options.filter(t=>t.hidden?!1:e?t.label.toLocaleLowerCase().includes(e)||t.value.toLocaleLowerCase().includes(e):!0)}get hasValue(){return this.selectedValues.length>0}get hasMutableValue(){return this.selectedOptions.some(e=>!e.disabled)}get activeOption(){return this.filteredOptions[this.activeIndex]}get describedBy(){return this.helperText?"super-select-helper":void 0}get invalid(){return this.validation==="error"?"true":void 0}get comboboxLabel(){if(this.accessibleLabel)return this.accessibleLabel;const e=this.selectedOptions.map(t=>t.label);return e.length?e.join("、"):this.placeholder}getOptionId(e){const t=this.optionIds.get(e);if(t)return t;const s=`super-select-option-${this.nextOptionId++}`;return this.optionIds.set(e,s),s}collectOptions(){const e=[],t=(s,o,r)=>{e.push({source:s,id:this.getOptionId(s),value:s.value,label:(s.label||s.textContent||"").trim(),disabled:s.disabled||!!(o!=null&&o.disabled),hidden:s.hidden||!!(o!=null&&o.hidden),group:(o==null?void 0:o.label)||void 0,groupKey:r})};return Array.from(this.children).forEach((s,o)=>{if(s instanceof HTMLOptionElement){t(s);return}s instanceof HTMLOptGroupElement&&Array.from(s.children).forEach(r=>{r instanceof HTMLOptionElement&&t(r,s,`super-select-group-${o}`)})}),e}normalizeValue(e,t=this.options,s=!1){const o=new Set(t.map(l=>l.value)),r=l=>{const c=Array.from(new Set(l.filter(Boolean)));return t.length&&!s?c.filter(b=>o.has(b)):c};if(this.multiple){const l=Array.isArray(e)?e:e?[e]:[];return r(l)}const n=Array.isArray(e)?e[0]??"":e;return!n||t.length&&!s&&!o.has(n)?"":n}valueEqual(e,t){return Array.isArray(e)&&Array.isArray(t)?Ya(e,t):e===t}syncSourceSelection(e=this.options,t=this.value){const s=new Set(Array.isArray(t)?t:t?[t]:[]);e.forEach(o=>{o.source.selected=s.has(o.value)})}syncOptions(e,t,s=!1){var c,b;const o=(c=this.activeOption)==null?void 0:c.id,r=this.collectOptions(),n=e&&(s||this.initializedOptions||!this.valueIsControlled);let l=this.value;if(n){const m=r.filter(v=>v.source.selected);if(this.multiple)l=m.map(v=>v.value);else{const v=t?r.find(P=>P.source===t):void 0;l=(v==null?void 0:v.value)??((b=m.at(-1))==null?void 0:b.value)??""}}l=this.normalizeValue(l,r,this.valueIsControlled&&!n),this.options=r,this.valueEqual(this.value,l)||this.setInternalValue(l),this.syncSourceSelection(r,l),r.length>0&&(this.initializedOptions=!0),o&&(this.activeIndex=this.filteredOptions.findIndex(m=>m.id===o&&!m.disabled)),this.realignActiveOption()}refreshOptions(){this.syncOptions(!0,void 0,!0),this.rememberSelectedAttributeStates()}realignActiveOption(){if(!this.open||this.loading){this.activeIndex=-1;return}const e=this.filteredOptions,t=e[this.activeIndex];if(t&&!t.disabled)return;const s=new Set(this.selectedValues),o=e.findIndex(r=>s.has(r.value)&&!r.disabled);this.activeIndex=o>=0?o:e.findIndex(r=>!r.disabled)}rememberSelectedAttributeStates(){this.collectOptions().forEach(({source:e})=>{this.selectedAttributeStates.set(e,e.hasAttribute("selected"))})}reconcileDisconnectedSelectedAttributes(){let e=!1,t;return this.collectOptions().forEach(({source:s})=>{const o=s.hasAttribute("selected"),r=this.selectedAttributeStates.has(s);(r&&this.selectedAttributeStates.get(s)!==o||!r&&o)&&(s.selected=o,e=!0,o&&(t=s)),this.selectedAttributeStates.set(s,o)}),{changed:e,preferredOption:t}}connectedCallback(){var s;super.connectedCallback();const e=this.hasConnected?this.reconcileDisconnectedSelectedAttributes():{changed:!1},t=(s=this.ownerDocument.defaultView)==null?void 0:s.MutationObserver;t&&(this.optionObserver=new t(this.handleOptionMutations),this.optionObserver.observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["value","label","disabled","selected","hidden"]})),this.ownerDocument.addEventListener("pointerdown",this.handleDocumentPointerDown,!0),this.syncOptions(e.changed||!this.initializedOptions,e.preferredOption,e.changed),this.rememberSelectedAttributeStates(),this.hasConnected=!0}disconnectedCallback(){var s,o;const e=((s=this.optionObserver)==null?void 0:s.takeRecords())??[];e.length>0&&this.handleOptionMutations(e),this.rememberSelectedAttributeStates(),(o=this.optionObserver)==null||o.disconnect(),this.optionObserver=null,this.ownerDocument.removeEventListener("pointerdown",this.handleDocumentPointerDown,!0);const t=this.ownerDocument.defaultView;this.typeaheadTimer!==void 0&&(t==null||t.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=void 0),this.typeahead="",super.disconnectedCallback()}willUpdate(e){if(e.has("multiple")||e.has("value")){const t=this.normalizeValue(this.value,this.options,this.valueIsControlled);this.valueEqual(this.value,t)||this.setInternalValue(t),this.syncSourceSelection(this.options,t)}if(this.disabled&&this.open&&(this.open=!1),!this.open){this.query="",this.activeIndex=-1;return}(e.has("open")||e.has("loading")||e.has("searchable")||e.has("multiple")||e.has("value"))&&this.realignActiveOption()}updated(e){e.has("open")&&this.open&&this.updateComplete.then(()=>{var t;return(t=this.comboboxElement)==null?void 0:t.focus()}),e.has("activeIndex")&&this.open&&this.activeIndex>=0&&this.updateComplete.then(()=>{const t=this.renderRoot.querySelector('[role="option"][data-active]');typeof(t==null?void 0:t.scrollIntoView)=="function"&&t.scrollIntoView({block:"nearest"})})}emitChange(e){this.dispatchEvent(new CustomEvent("super-select-change",{detail:{value:Array.isArray(this.value)?[...this.value]:this.value,values:[...this.selectedValues],name:this.name,selectedOptions:this.selectedOptions.map(t=>t.source),originalEvent:e},bubbles:!0,composed:!0}))}setOpen(e,t,s){e&&this.disabled||this.open===e||(e&&this.syncOptions(!1),this.open=e,e?this.realignActiveOption():(this.query="",this.activeIndex=-1),this.dispatchEvent(new CustomEvent("super-select-open-change",{detail:{open:e,reason:t,originalEvent:s},bubbles:!0,composed:!0})),e&&this.updateComplete.then(()=>{var o;return(o=this.comboboxElement)==null?void 0:o.focus()}))}selectOption(e,t){if(e.disabled||this.disabled||this.readOnly||this.loading)return;if(this.multiple){const o=this.selectedValues;this.setInternalValue(o.includes(e.value)?o.filter(r=>r!==e.value):[...o,e.value]),this.syncSourceSelection(this.options,this.value),this.emitChange(t);return}const s=this.value!==e.value;this.setInternalValue(e.value),this.syncSourceSelection(this.options,this.value),s&&this.emitChange(t),this.setOpen(!1,"selection",t)}clearSelection(e){var r;if(e.preventDefault(),e.stopPropagation(),this.disabled||this.readOnly||this.loading||!this.hasValue)return;const t=Array.isArray(this.value)?[...this.value]:this.value,s=this.selectedOptions.filter(n=>n.disabled).map(n=>n.value),o=this.multiple?s:s[0]??"";this.valueEqual(this.value,o)||(this.setInternalValue(o),this.syncSourceSelection(this.options,this.value),this.dispatchEvent(new CustomEvent("super-select-clear",{detail:{previousValue:t,originalEvent:e},bubbles:!0,composed:!0})),this.emitChange(e),(r=this.comboboxElement)==null||r.focus())}removeValue(e,t){var o;t.preventDefault(),t.stopPropagation();const s=this.options.find(r=>r.value===e);!this.multiple||this.disabled||this.readOnly||this.loading||s!=null&&s.disabled||(this.setInternalValue(this.selectedValues.filter(r=>r!==e)),this.syncSourceSelection(this.options,this.value),this.emitChange(t),(o=this.comboboxElement)==null||o.focus())}moveActive(e){var o;const t=this.filteredOptions;if(!t.length){this.activeIndex=-1;return}let s=this.activeIndex;for(let r=0;r<t.length;r+=1)if(s=(s+e+t.length)%t.length,!((o=t[s])!=null&&o.disabled)){this.activeIndex=s;return}this.activeIndex=-1}moveToBoundary(e){const t=this.filteredOptions,s=e==="start"?t.map((o,r)=>r):t.map((o,r)=>r).reverse();this.activeIndex=s.find(o=>{var r;return!((r=t[o])!=null&&r.disabled)})??-1}handleTypeahead(e,t){const s=this.ownerDocument.defaultView;this.typeahead+=e.toLocaleLowerCase(),this.typeaheadTimer!==void 0&&(s==null||s.clearTimeout(this.typeaheadTimer)),this.typeaheadTimer=s==null?void 0:s.setTimeout(()=>{this.typeahead="",this.typeaheadTimer=void 0},650),this.open||this.setOpen(!0,"keyboard",t);const o=this.filteredOptions,r=Math.max(this.activeIndex+1,0),l=[...o.slice(r),...o.slice(0,r)].find(c=>!c.disabled&&c.label.toLocaleLowerCase().startsWith(this.typeahead));l&&(this.activeIndex=o.indexOf(l))}handleKeyDown(e){var o;const t=e.composedPath()[0];if(t instanceof HTMLElement&&(t.classList.contains("tag-remove")||t.classList.contains("clear-button"))||this.disabled)return;if(!this.searchable&&e.key.length===1&&e.key!==" "&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault(),this.handleTypeahead(e.key,e);return}if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const r=e.key==="ArrowDown"?1:-1;this.open?this.moveActive(r):(this.setOpen(!0,"keyboard",e),this.realignActiveOption());return}const s=t instanceof HTMLInputElement&&t.classList.contains("search");if((e.key==="Home"||e.key==="End")&&!s){if(!this.open)return;e.preventDefault(),this.moveToBoundary(e.key==="Home"?"start":"end");return}if(e.key==="Enter"||e.key===" "&&!this.searchable){e.preventDefault(),this.open?this.activeOption&&this.selectOption(this.activeOption,e):this.setOpen(!0,"keyboard",e);return}if(e.key==="Escape"&&this.open){e.preventDefault(),this.setOpen(!1,"escape",e),(o=this.comboboxElement)==null||o.focus();return}e.key==="Tab"&&this.open&&this.setOpen(!1,"keyboard",e)}handleControlClick(e){if(this.disabled)return;const t=e.composedPath()[0];this.searchable&&this.open&&t instanceof HTMLInputElement&&t.classList.contains("search")||this.setOpen(!this.open,"trigger",e)}handleSearch(e){const t=e.currentTarget;this.query=t.value,this.open||this.setOpen(!0,"search",e),this.activeIndex=this.filteredOptions.findIndex(s=>!s.disabled),this.dispatchEvent(new CustomEvent("super-select-search",{detail:{query:this.query,originalEvent:e},bubbles:!0,composed:!0}))}handleSearchFocus(e){this.open||e.currentTarget.select()}handlePrefixSlotChange(e){const t=e.currentTarget;this.hasPrefix=t.assignedNodes({flatten:!0}).some(s=>{var o;return s.nodeType!==Node.TEXT_NODE||!!((o=s.textContent)!=null&&o.trim())})}click(){var s;if(this.disabled)return;const e=(s=this.renderRoot)==null?void 0:s.querySelector(".control");if(e){e.click();return}const t=new MouseEvent("click");super.click(),this.setOpen(!this.open,"trigger",t)}focus(e){const t=this.comboboxElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.comboboxElement;if(e){e.blur();return}super.blur()}validationSymbol(){switch(this.validation){case"success":return"✓";case"warning":return"!";case"error":return"×";case"info":return"i";default:return""}}renderTags(){return this.multiple?A`
      <span class="tags" part="tags">
        ${this.selectedOptions.map(e=>A`
          <span class="tag" part="tag">
            <span class="tag-label">${e.label}</span>
            ${this.readOnly||this.disabled||this.loading||e.disabled?S:A`<button
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
    `:S}renderDefaultTrigger(){if(this.multiple&&this.hasValue)return S;const e=this.selectedOptions[0];return e?A`<span part="value">${e.label}</span>`:A`<span class="placeholder" part="placeholder">${this.placeholder}</span>`}renderCombobox(){var s,o;const e=this.open&&!this.loading?(s=this.activeOption)==null?void 0:s.id:void 0,t={expanded:this.open?"true":"false",required:this.required?"true":void 0,readonly:this.readOnly?"true":void 0,busy:this.loading?"true":void 0};if(this.searchable){const r=(o=this.selectedOptions[0])==null?void 0:o.label,n=this.open?this.searchPlaceholder:this.multiple&&this.hasValue?"":this.placeholder;return A`
        <span class="search-icon" part="search-icon" aria-hidden="true">⌕</span>
        <slot name="trigger"></slot>
        <input
          class="search"
          part="search trigger"
          type="text"
          role="combobox"
          autocomplete="off"
          spellcheck="false"
          .value=${ae(this.open?this.query:this.multiple?"":r??"")}
          placeholder=${n}
          aria-label=${this.accessibleLabel||this.searchLabel}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded=${t.expanded}
          aria-controls="super-select-listbox"
          aria-activedescendant=${_(e)}
          aria-required=${_(t.required)}
          aria-readonly=${_(t.readonly)}
          aria-invalid=${_(this.invalid)}
          aria-busy=${_(t.busy)}
          aria-describedby=${_(this.describedBy)}
          ?disabled=${this.disabled}
          ?readonly=${this.readOnly}
          @input=${this.handleSearch}
          @focus=${this.handleSearchFocus}
        />
      `}return A`
      <button
        class="trigger"
        part="trigger"
        type="button"
        role="combobox"
        aria-label=${this.comboboxLabel}
        aria-haspopup="listbox"
        aria-expanded=${t.expanded}
        aria-controls="super-select-listbox"
        aria-activedescendant=${_(e)}
        aria-required=${_(t.required)}
        aria-readonly=${_(t.readonly)}
        aria-invalid=${_(this.invalid)}
        aria-busy=${_(t.busy)}
        aria-describedby=${_(this.describedBy)}
        ?disabled=${this.disabled}
      >
        <slot name="trigger">${this.renderDefaultTrigger()}</slot>
      </button>
    `}renderOption(e,t){const s=this.selectedValues.includes(e.value),o=this.readOnly||this.loading;return A`
      <div
        id=${e.id}
        class="option"
        part="option"
        role="option"
        aria-selected=${s?"true":"false"}
        aria-disabled=${e.disabled||o?"true":"false"}
        ?data-active=${t===this.activeIndex}
        @pointerdown=${r=>r.preventDefault()}
        @click=${r=>this.selectOption(e,r)}
      >
        <span class="option-check" part="option-check" aria-hidden="true">
          ${s?"✓":""}
        </span>
        <span class="option-label">${e.label}</span>
      </div>
    `}renderOptionGroups(){const e=this.filteredOptions,t=[];return e.forEach((s,o)=>{const r=s.groupKey??"super-select-ungrouped";let n=t.at(-1);(!n||n.key!==r)&&(n={key:r,label:s.group,options:[]},t.push(n)),n.options.push({option:s,index:o})}),t.map(s=>A`
      <div
        class="group"
        part="group"
        role=${s.label?"group":"presentation"}
        aria-label=${_(s.label)}
      >
        ${s.label?A`<div class="group-label" part="group-label">${s.label}</div>`:S}
        ${s.options.map(({option:o,index:r})=>this.renderOption(o,r))}
      </div>
    `)}renderPopup(){if(!this.open)return S;const e=this.filteredOptions;return A`
      <div class="popup" part="popup">
        <div
          id="super-select-listbox"
          class="listbox"
          part="listbox"
          role="listbox"
          aria-label=${this.accessibleLabel||this.placeholder}
          aria-multiselectable=${_(this.multiple?"true":void 0)}
          aria-readonly=${_(this.readOnly?"true":void 0)}
          aria-busy=${this.loading?"true":"false"}
        >
          ${!this.loading&&e.length?this.renderOptionGroups():S}
        </div>
        ${this.loading?A`<div class="loading" part="loading" role="status" aria-live="polite">
              <slot name="loading">
                <span class="loading-content">
                  <span class="spinner" aria-hidden="true"></span>
                  ${this.loadingText}
                </span>
              </slot>
            </div>`:e.length?S:A`<div class="empty" part="empty" role="status" aria-live="polite">
                <slot name="empty">${this.emptyText}</slot>
              </div>`}
      </div>
    `}render(){const e=this.validationSymbol(),t=`control${this.hasValue?" has-value":""}`;return A`
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
        ${this.clearable&&this.hasMutableValue&&!this.disabled&&!this.readOnly&&!this.loading?A`<button
              class="clear-button"
              part="clear-button"
              type="button"
              aria-label=${this.clearLabel}
              @click=${this.clearSelection}
              @keydown=${s=>s.stopPropagation()}
            >×</button>`:S}
        ${e?A`<span class="validation-icon" part="validation-icon" aria-hidden="true">
              ${e}
            </span>`:S}
        <span class="indicator" part="indicator" aria-hidden="true">
          <slot name="indicator"><span class="chevron"></span></slot>
        </span>
      </div>
      ${this.helperText?A`<span
            id="super-select-helper"
            class="helper"
            part="helper"
            role=${_(this.validation==="error"?"alert":void 0)}
            aria-live=${_(this.validation==="error"?void 0:"polite")}
          >${this.helperText}</span>`:S}
      ${this.renderPopup()}
      <span class="source" aria-hidden="true">
        <slot @slotchange=${()=>this.syncOptions(!1)}></slot>
      </span>
    `}}Object.defineProperty(nt,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{value:{attribute:"value",noAccessor:!0},multiple:{type:Boolean,reflect:!0},searchable:{type:Boolean,reflect:!0},clearable:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,attribute:"readonly",reflect:!0},required:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},open:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},size:{type:String,reflect:!0},variant:{type:String,reflect:!0},validation:{type:String,reflect:!0},placeholder:{type:String},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"},clearLabel:{type:String,attribute:"clear-label"},removeLabel:{type:String,attribute:"remove-label"},searchLabel:{type:String,attribute:"search-label"},searchPlaceholder:{type:String,attribute:"search-placeholder"},emptyText:{type:String,attribute:"empty-text"},loadingText:{type:String,attribute:"loading-text"},options:{state:!0},query:{state:!0},activeIndex:{state:!0},hasPrefix:{state:!0}}});Object.defineProperty(nt,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const Xa="super-select",Ja=i=>ce(Xa,nt,i);class at extends q{constructor(){super(),this.checked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.validation="none",this.name="",this.value="on",this.helperText="",this.accessibleLabel=""}get inputElement(){var e;return((e=this.renderRoot)==null?void 0:e.querySelector("input"))??null}emitChange(e){this.dispatchEvent(new CustomEvent("super-switch-change",{detail:{checked:this.checked,name:this.name,value:this.value,originalEvent:e},bubbles:!0,composed:!0}))}handleChange(e){const t=e.currentTarget;this.checked=t.checked,this.emitChange(e)}click(){if(this.disabled)return;const e=this.inputElement;if(e){e.click();return}this.checked=!this.checked;const t=new Event("change");super.click(),this.emitChange(t)}focus(e){const t=this.inputElement;if(t){t.focus(e);return}super.focus(e)}blur(){const e=this.inputElement;if(e){e.blur();return}super.blur()}render(){const e=["super-switch-description",this.helperText?"super-switch-helper":""].filter(Boolean).join(" "),t=this.validation==="error"?"true":void 0;return A`
      <span class="wrapper">
        <label class="control" part="control">
          <input
            class="native"
            part="input"
            type="checkbox"
            role="switch"
            .checked=${ae(this.checked)}
            name=${this.name}
            value=${this.value}
            aria-label=${_(this.accessibleLabel||void 0)}
            aria-labelledby=${_(this.accessibleLabel?void 0:"super-switch-label")}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby=${_(e)}
            aria-invalid=${_(t)}
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
        ${this.helperText?A`<span
              id="super-switch-helper"
              class="helper"
              part="helper"
              role=${_(this.validation==="error"?"alert":void 0)}
              aria-live=${_(this.validation==="error"?void 0:"polite")}
            >${this.helperText}</span>`:S}
      </span>
    `}}Object.defineProperty(at,"properties",{enumerable:!0,configurable:!0,writable:!0,value:{checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},size:{type:String,reflect:!0},validation:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0},helperText:{type:String,attribute:"helper-text"},accessibleLabel:{type:String,attribute:"aria-label"}}});Object.defineProperty(at,"styles",{enumerable:!0,configurable:!0,writable:!0,value:ue`
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
  `});const Za="super-switch",Qa=i=>ce(Za,at,i),el=[Na,ja,Ga,Wa,Ja,Qa];function tl(i){el.forEach(e=>{e(i)})}tl();export{ol as t};
