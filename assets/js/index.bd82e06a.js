(function(e){function t(t){for(var o,c,l=t[0],s=t[1],d=t[2],u=0,p=[];u<l.length;u++)c=l[u],r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={index:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var i=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("927d"),e.exports=n("4997")},4695:function(e,t,n){"use strict";var o=n("ef82"),r=n.n(o);r.a},4997:function(e,t,n){"use strict";n.r(t);n("f5df"),n("e2fe"),n("ac6a");var o=n("0346");const r=[...document.querySelectorAll(".main-carousel")],a=[...document.querySelectorAll(".category-list")],c=[...document.querySelectorAll(".banner")];document.addEventListener("DOMContentLoaded",()=>{r.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),a.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500,breakpoints:{768:{gap:16}}}).mount()}),c.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});n("bfd7"),n("a481");const l=[...document.querySelectorAll(".category-preview")];l&&document.addEventListener("DOMContentLoaded",()=>{l.forEach(e=>{const t=[...e.querySelectorAll(".category-tabs__item")],n=[...e.querySelectorAll(".category-view")];e.addEventListener("click",e=>{e.preventDefault();const o=e.target,r=o.parentElement,a=r.classList.contains("category-tabs__item"),c=r.getAttribute("href").replace("#","");a&&(t.forEach(e=>{e.classList.remove("category-tabs__item_active")}),n.forEach(e=>{e.classList.remove("category-view_visible")}),r.classList.add("category-tabs__item_active"),document.getElementById(c).classList.add("category-view_visible"))})})});n("28a5");const s=e=>{const t=document.body,n=document.querySelector(".backdrop"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("i");o.classList.add("modal-wrapper"),a.classList.add("icon-close"),r.classList.add("review-item__modal"),r.innerHTML=e,r.appendChild(a),o.appendChild(r),t.appendChild(o),n.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened"),a.addEventListener("click",()=>{n.classList.remove("backdrop_opened"),o.remove("modal-wrapper_opened")})},d=(e,t,n)=>{const o=document.querySelectorAll(e),r=document.createElement("a");r.classList.add("crop-text__button"),r.innerText="Развернуть текст",o.forEach(e=>{e.classList.add("crop-text");const o=window.getComputedStyle(e,null),a=Math.round(Number(o.getPropertyValue("line-height").replace("px",""))),c=Math.round(Number(o.getPropertyValue("height").replace("px",""))),l=e.innerHTML.split(" "),d=e.textContent,i=document.createElement("span"),u=e.parentElement.innerHTML;let p;if(c/a>=t){e.style.height=`${a*t}px`,e.style.overflow="hidden";do{l.pop(),e.innerHTML=l.join(" "),p=d.replace(e.textContent,""),e.appendChild(r)}while(e.scrollHeight>e.offsetHeight);i.textContent=p,e.appendChild(i),r.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.classList.add("open"),n?e.style.height=`${c}px`:s(u)})}})};window.addEventListener("load",()=>{d(".review-item__text",3,!1),d(".seo-text__content",5,!0)});n("f416");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll("[data-modal-target]")],t=document.querySelector(".backdrop"),n=[...document.querySelectorAll(".icon-close")],o=[...document.querySelectorAll(".modal-wrapper")];e.forEach(e=>{const n=e.dataset.modalTarget.replace("#",""),o=document.getElementById(n);e.addEventListener("click",e=>{e.preventDefault(),t.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened")})}),n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})});n("3b2b");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".search-field")];e.forEach(e=>{const t=e.querySelector("input"),n=e.querySelector("ul"),o=[...n.children],r=e.querySelector("i"),a=e.parentElement,c=t=>{t.preventDefault();const r=t.target,a=new RegExp(r.value||r.textContent,"i"),c=[...o.filter(e=>a.test(e.textContent))];e.classList.add("city-modal__field_drop"),n.classList.add("city-list__opened"),n.innerHTML="",c.forEach(e=>n.appendChild(e))};t.addEventListener("input",c),r.addEventListener("click",t=>{t.preventDefault(),e.classList.toggle("city-modal__field_drop"),n.classList.toggle("city-list__opened")}),a.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.classList.contains("city-modal")&&(e.classList.remove("city-modal__field_drop"),n.classList.remove("city-list__opened"))}),o.forEach(o=>{o.addEventListener("click",o=>{const r=o.target;c(o),t.value=r.textContent,e.classList.remove("city-modal__field_drop"),n.classList.remove("city-list__opened")})})})})},"927d":function(e,t,n){"use strict";n.r(t);n("ac6a");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"cart"}},[e._v("\n  ("+e._s(e.count)+")\n")])},a=[],c={name:"Cart",data(){return{count:14}}},l=c,s=n("2877"),d=Object(s["a"])(l,r,a,!1,null,null,null),i=d.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button",on:{click:e.getData}},[e._v("\n  в корзину\n  "),e._t("default")],2)},p=[],m={name:"CategoryButton",props:{dataPrice:{type:Number,required:!0,default:0},dataItemId:{type:Number,required:!0,default:0}},methods:{getData(){console.log(this.dataPrice,this.dataItemId,this)}}},f=m,v=(n("4695"),Object(s["a"])(f,u,p,!1,null,null,null)),_=v.exports,y=n("2f62");o["a"].use(y["a"]);var h=new y["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({store:h,render:e=>e(i)}).$mount("#cart");const L=[...document.querySelectorAll(".category-button")];L.forEach(e=>{new o["a"]({store:h,render:t=>t(_,{props:{dataPrice:Number(e.dataset.price),dataItemId:Number(e.dataset.itemId)}})}).$mount(`#${e.id}`)})},bfd7:function(e,t){const n=document.querySelector(".header__top"),o=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",e=>{const t=n.offsetHeight+o.offsetHeight,r=window.scrollY;r>=t?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},e2fe:function(e,t,n){},ef82:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".scroll-top");document.addEventListener("scroll",t=>{const n=window.innerHeight,o=window.pageYOffset;o>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}});
//# sourceMappingURL=index.bd82e06a.js.map