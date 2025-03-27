document.addEventListener("DOMContentLoaded",()=>{let n,o,e=!1,l=e=>{var t=e=>Array.from(e).reduce((e,t)=>e+t.offsetWidth,0),e=(e&&(e=t(document.querySelector("#blog-info > a").children),t=t(document.getElementById("menus").children),n=e+t,o=document.getElementById("nav")),window.innerWidth<=768||n>o.offsetWidth-120);o.classList.toggle("hide-menu",e)},s={open:()=>{btf.overflowPaddingR.add(),btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),e=!0},close:()=>{btf.overflowPaddingR.remove(),btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),e=!1}},t=()=>{var v=GLOBAL_CONFIG.highlight;if(v){let{highlightCopy:e,highlightLang:f,highlightHeightLimit:p,highlightFullpage:t,highlightMacStyle:n,plugin:b}=v;v=GLOBAL_CONFIG_SITE.isHighlightShrink;let L=e||f||void 0!==v||t||n;var y="highlight.js"===b?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((L||p)&&y.length){let i="prismjs"===b,o=!0===v?"closed":"",l=void 0!==v?'<i class="fas fa-angle-down expand"></i>':"",s=e?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",r=t?'<i class="fa-solid fa-up-right-and-down-left-from-center fullpage-button"></i>':"",n=(e,t)=>{void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(t):(e.textContent=t,e.style.opacity=1,setTimeout(()=>{e.style.opacity=0},800))},a=async(e,t)=>{try{await navigator.clipboard.writeText(e),n(t,GLOBAL_CONFIG.copy.success)}catch(e){console.error("Failed to copy: ",e),n(t,GLOBAL_CONFIG.copy.noSupport)}},d=(e,t)=>{var e=e.parentNode,n=(e.classList.add("copy-true"),i?"pre code":"table .code pre"),n=e.querySelector(n);n&&(a(n.innerText,t.previousElementSibling),e.classList.remove("copy-true"))},c=e=>e.classList.toggle("closed"),g=(e,t)=>{e=e.closest("figure.highlight").classList.toggle("code-fullpage");document.body.style.overflow=e?"hidden":"",t.classList.toggle("fa-down-left-and-up-right-to-center",e),t.classList.toggle("fa-up-right-and-down-left-from-center",!e)},m=e=>{var t=e.target.classList,n=e.currentTarget;t.contains("expand")?c(n):t.contains("copy-button")?d(n,e.target):t.contains("fullpage-button")&&g(n,e.target)},u=e=>e.currentTarget.classList.toggle("expand-done"),h=(e,t)=>{var n,a=document.createDocumentFragment();L&&((n=document.createElement("div")).className="highlight-tools "+o,n.innerHTML='<div class="macStyle"><div class="mac-close"></div><div class="mac-minimize"></div><div class="mac-maximize"></div></div>'+l+e+s+r,btf.addEventListenerPjax(n,"click",m),a.appendChild(n)),p&&(t=>{let a=new Map;(()=>{let e=t;for(;e!==document.body&&null!=e;)"none"===window.getComputedStyle(e).display&&a.set(e,e.getAttribute("style")||""),e=e.parentNode;let n="visibility: hidden !important; display: block !important;";a.forEach((e,t)=>{t.setAttribute("style",e?e+";"+n:n)})})();var e=t.offsetHeight;return a.forEach((e,t)=>{""===e?t.removeAttribute("style"):t.setAttribute("style",e)}),e})(t)>p+30&&((e=document.createElement("div")).className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(e,"click",u),a.appendChild(e)),i?t.parentNode.insertBefore(a,t):t.insertBefore(a,t.firstChild)};y.forEach(e=>{let t="";i&&btf.wrap(e,"figure",{class:"highlight"}),f?(i?t=e.getAttribute("data-language")||"Code":"plain"!==(t=e.getAttribute("class").split(" ")[1])&&void 0!==t||(t="Code"),h(`<div class="code-lang">${t}</div>`,e)):h("",e)})}}},a=()=>{GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(e=>{var t,n=e.title||e.alt;n&&((t=document.createElement("div")).className="img-alt text-center",t.textContent=n,e.insertAdjacentElement("afterend",t))})},i=()=>{btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)"))},r=async e=>{try{return await(await fetch(e)).json()}catch(e){return console.error("Failed to fetch URL:",e),[]}},d=(a,i,e)=>{let{isButton:o,limit:l,firstLimit:s,tabs:r}=e;e=i.length;let d=Math.ceil((e-s)/l+1);let c=new InfiniteGrid.JustifiedInfiniteGrid(a,{gap:5,isConstantSize:!0,sizeRange:[150,600],useTransform:!0}),g=!1,m=e=>e&&e.replace(/"/g,"&quot;")||"",u=e=>{var t=e.alt?`alt="${m(e.alt)}"`:"",n=e.title?`title="${m(e.title)}"`:"";return`<div class="item">
        <img src="${e.url}" data-grid-maintained-target="true" ${t} ${n} />
      </div>`},h=(e,t,n=!1)=>{n=n?(e-1)*t:(e-2)*t+s;return i.slice(n,n+t).map(u)},f=(e,t,n)=>{c.append(h(e,t,n),e)},p=e=>{r&&(t=a.parentNode,g&&(t.style.visibility="visible"),0===a.offsetHeight)&&(t.style.visibility="hidden",g=!0);var{updated:t,isResize:e,mounted:n}=e;t.length&&n.length&&!e&&(btf.loadLightbox(a.querySelectorAll("img:not(.medium-zoom-image)")),c.getGroups().length===d?(btf.setLoading.remove(a),r||c.off("renderComplete",p)):o&&(btf.setLoading.remove(a),(e=>{let t=document.createElement("button");t.innerHTML=GLOBAL_CONFIG.infinitegrid.buttonText+'<i class="fa-solid fa-arrow-down"></i>',t.addEventListener("click",()=>{t.remove(),btf.setLoading.add(e),f(c.getGroups().length+1,l)},{once:!0}),e.insertAdjacentElement("afterend",t)})(a)))},t=btf.debounce(e=>{e=(+e.groupKey||0)+1;1===e?f(e,s,!0):f(e,l),e===d&&c.off("requestAppend",t)},300);btf.setLoading.add(a),c.on("renderComplete",p),o?f(1,s,!0):(c.on("requestAppend",t),c.renderItems()),btf.addGlobalFn("pjaxSendOnce",()=>c.destroy())},c=async(o,l=!1)=>{var e;o.length&&(e=async()=>{for(var e of o)if(!btf.isHidden(e)&&!e.classList.contains("loaded")){var t={isButton:"true"===e.getAttribute("data-button"),limit:parseInt(e.getAttribute("data-limit"),10),firstLimit:parseInt(e.getAttribute("data-first"),10),tabs:l},n=e.firstElementChild,a=n.textContent;n.textContent="",e.classList.add("loaded");try{var i="url"===e.getAttribute("data-type")?await r(a):JSON.parse(a);d(n,i,t)}catch(e){console.error("Gallery data parsing failed:",e)}}},"function"!=typeof InfiniteGrid&&await btf.getScript(GLOBAL_CONFIG.infinitegrid.js),await e())},g=e=>{var e=btf.getScrollPercent(e,document.body),t=document.getElementById("go-up");e<95?(t.classList.add("show-percent"),t.querySelector(".scroll-percent").textContent=e):t.classList.remove("show-percent")},m=()=>{let i=document.getElementById("rightside"),e=window.innerHeight+56,o=0,l=document.getElementById("page-header"),s="undefined"!=typeof chatBtn,r=GLOBAL_CONFIG.percent.rightside,d=()=>document.body.scrollHeight<=e&&(i.classList.add("rightside-show"),!0);if(!d()){let a="";var t=btf.throttle(()=>{var e,t=window.scrollY||document.documentElement.scrollTop,n=(e=(n=t)>o,o=n,e);56<t?(""===a&&(l.classList.add("nav-fixed"),i.classList.add("rightside-show")),n?"down"!==a&&(l.classList.remove("nav-visible"),s&&window.chatBtn.hide(),a="down"):"up"!==a&&(l.classList.add("nav-visible"),s&&window.chatBtn.show(),a="up")):(a="",0===t&&l.classList.remove("nav-fixed","nav-visible"),i.classList.remove("rightside-show")),r&&g(t),d()},300);btf.addEventListenerPjax(window,"scroll",t,{passive:!0})}},u=()=>{let g=GLOBAL_CONFIG_SITE.isToc,m=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(n&&(g||m)){let o,l,s,t,r;if(g){let n=document.getElementById("card-toc");l=n.querySelector(".toc-content"),o=l.querySelectorAll(".toc-link"),t=n.querySelector(".toc-percentage"),r=l.classList.contains("is-expand");btf.addEventListenerPjax(l,"click",e=>{var t=e.target.closest(".toc-link");t&&(e.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900)&&n.classList.remove("open")}),s=e=>{var t=l.clientHeight,n=e.offsetTop,e=e.clientHeight,a=l.scrollTop,n=n-a,t=(t-e)/2;n!=t&&(l.scrollTop=a+(n-t))},l.style.display="block"}let d=n.querySelectorAll("h1,h2,h3,h4,h5,h6"),c="";var e=btf.throttle(()=>{var e=window.scrollY||document.documentElement.scrollTop;g&&GLOBAL_CONFIG.percent.toc&&(t.textContent=btf.getScrollPercent(e,n));{var a=e;if(0!==a){let t="",n="";for(let e=0;e<d.length;e++){var i=d[e];if(!(a>btf.getEleTop(i)-80))break;i=i.id;t=i?"#"+encodeURI(i):"",n=e}if(c!==n&&(m&&btf.updateAnchor(t),c=n,g)&&(l.querySelectorAll(".active").forEach(e=>e.classList.remove("active")),t)){let t=o[n];if(t.classList.add("active"),setTimeout(()=>s(t),0),!r){let e=t.parentNode;for(;!e.matches(".toc");)e.matches("li")&&e.classList.add("active"),e=e.parentNode}}}}},100);btf.addEventListenerPjax(window,"scroll",e,{passive:!0})}},h=n=>{let a=(window.globalFn||{}).themeChange||{};a&&Object.keys(a).forEach(e=>{let t=a[e];["disqus","disqusjs"].includes(e)?setTimeout(()=>t(n),300):t(n)})},f={readmode:()=>{let e=document.body,t=document.createElement("button"),n=()=>{e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)};e.classList.add("read-mode"),t.type="button",t.className="fas fa-sign-out-alt exit-readmode",t.addEventListener("click",n),e.appendChild(t)},darkmode:()=>{var e="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"==e?(btf.activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(btf.activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),btf.saveToLocal.set("theme",e,2),h(e)},"rightside-config":e=>{let t=e.firstElementChild;t.classList.contains("show")&&(t.classList.add("status"),setTimeout(()=>{t.classList.remove("status")},300)),t.classList.toggle("show")},"go-up":()=>{btf.scrollToDest(0,500)},"hide-aside-btn":()=>{var e=document.documentElement.classList,t=e.contains("hide-aside")?"show":"hide";btf.saveToLocal.set("aside-status",t,2),e.toggle("hide-aside")},"mobile-toc-button":(e,t)=>{let n=document.getElementById("card-toc");n.style.transition="transform 0.3s ease-in-out";var a=n.clientHeight,t=t.getBoundingClientRect(),i=window.innerHeight-t.bottom-30;i<a&&(n.style.transformOrigin=`right ${a-i-t.height/2}px`),n.classList.toggle("open"),n.addEventListener("transitionend",()=>{n.style.cssText=""},{once:!0})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}},p=(document.getElementById("rightside").addEventListener("click",e=>{var t=e.target.closest("[id]");t&&f[t.id]&&f[t.id](e.currentTarget,t)}),()=>{var e=document.querySelectorAll("#article-container table");e.length&&e.forEach(e=>{e.closest(".highlight")||btf.wrap(e,"div",{class:"table-wrap"})})}),b=()=>{var e=document.querySelectorAll("#article-container .hide-button");e.length&&e.forEach(e=>e.addEventListener("click",e=>{e=e.currentTarget;e.classList.add("open"),c(e.nextElementSibling.querySelectorAll(".gallery-container"))},{once:!0}))},L=()=>{var e=document.querySelectorAll("#article-container .tabs");if(e.length){let i=(e,n)=>{e.forEach((e,t)=>{e.classList.toggle("active",t===n)})},n=e=>{var t,n,a=e.target.closest("button");a&&!a.classList.contains("active")&&(t=[...e.currentTarget.children],n=[...e.currentTarget.nextElementSibling.children],a=t.indexOf(a),i(t,a),e.currentTarget.classList.remove("no-default"),i(n,a),c(n[a].querySelectorAll(".gallery-container"),!0))};e.forEach(e=>{var t;btf.addEventListenerPjax(e.firstElementChild,"click",n),btf.addEventListenerPjax(e.lastElementChild,"click",(t=e,e=>{e.target.closest("button")&&btf.scrollToDest(btf.getEleTop(t),300)}))})}},v=e=>{e.forEach(e=>{e.textContent=btf.diffDate(e.getAttribute("datetime"),!0),e.style.display="inline"})};let y=()=>{t(),a(),c(document.querySelectorAll("#article-container .gallery-container")),i(),u(),p(),b(),L()};var w=()=>{var e,t,n,a,i;l(!0),o.classList.add("show"),(i=document.getElementById("recent-posts"))&&i.classList.contains("masonry")&&(i=()=>{let e=new InfiniteGrid.MasonryInfiniteGrid(".recent-post-items",{gap:{horizontal:10,vertical:20},useTransform:!0,useResizeObserver:!0});e.renderItems(),btf.addGlobalFn("pjaxCompleteOnce",()=>{e.destroy()},"removeJustifiedIndexPostUI")},"function"==typeof InfiniteGrid?i():btf.getScript(""+GLOBAL_CONFIG.infinitegrid.js).then(i)),"post"===GLOBAL_CONFIG_SITE.pageType?((i=document.getElementById("post-outdate-notice"))&&({limitDay:a,messagePrev:e,messageNext:t,postUpdate:n}=JSON.parse(i.getAttribute("data")),a<=(a=btf.diffDate(n)))&&(i.textContent=e+` ${a} `+t,i.hidden=!1),GLOBAL_CONFIG.relativeDate.post&&v(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&v(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(n=document.getElementById("runtimeshow"))&&(e=n.getAttribute("data-publishDate"),n.textContent=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime),(a=document.getElementById("last-push-date"))&&(t=a.getAttribute("data-lastPushDate"),a.textContent=btf.diffDate(t,!0)),(i=document.querySelector("#aside-cat-list.expandBtn"))&&btf.addEventListenerPjax(i,"click",e=>{var t=e.target;"I"===t.nodeName&&(e.preventDefault(),t.parentNode.classList.toggle("expand"))},!0)),"home"===GLOBAL_CONFIG_SITE.pageType&&(i=document.getElementById("scroll-down"))&&btf.addEventListenerPjax(i,"click",()=>{btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),m(),y(),"shuoshuo"!==GLOBAL_CONFIG_SITE.pageType&&btf.switchComments(document),(i=document.getElementById("toggle-menu"))&&btf.addEventListenerPjax(i,"click",()=>{s.open()})};btf.addGlobalFn("pjaxComplete",w,"refreshFn"),w(),window.addEventListener("resize",()=>{l(!1),e&&btf.isHidden(document.getElementById("toggle-menu"))&&s.close()}),(w=document.getElementById("menu-mask"))&&w.addEventListener("click",()=>{s.close()}),(w=document.querySelector("#sidebar-menus .menus_items"))&&w.addEventListener("click",e=>{e=e.target.closest(".site-page.group");e&&e.classList.toggle("hide")}),GLOBAL_CONFIG.islazyloadPlugin&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"}),btf.addGlobalFn("pjaxComplete",()=>{window.lazyLoadInstance.update()},"lazyload")),void 0!==GLOBAL_CONFIG.copyright&&(()=>{let{limitCount:a,languages:i}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",e=>{e.preventDefault();var t=window.getSelection(0).toString();let n=t;return t.length>a&&(n=`${t}


${i.author}
${i.link}${window.location.href}
${i.source}
`+i.info),(e.clipboardData?e:window).clipboardData.setData("text",n)})})(),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{void 0===btf.saveToLocal.get("theme")&&(e.matches?h("dark"):h("light"))}),window.addEventListener("hexo-blog-decrypt",e=>{y(),window.translateFn.translateInitialization(),Object.values(window.globalFn.encrypt).forEach(e=>{e()})})});