(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)c=i[u],a[c]&&p.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={index:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){n("927d"),e.exports=n("4997")},"265a":function(e,t,n){},4695:function(e,t,n){"use strict";var o=n("ef82"),a=n.n(o);a.a},4997:function(e,t,n){"use strict";n.r(t);n("f5df"),n("e2fe"),n("ac6a");var o=n("0346");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".main-carousel")],t=[...document.querySelectorAll(".category-list")],n=[...document.querySelectorAll(".banner")];e.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),t.forEach(e=>{const t=new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500,breakpoints:{767:{perView:2,gap:9},1024:{gap:16}}}).mount();window.matchMedia("(max-width: 767px)").matches&&t.destroy()}),n.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});n("bfd7"),n("a481");const a=[...document.querySelectorAll(".category-preview")];a&&document.addEventListener("DOMContentLoaded",()=>{a.forEach(e=>{const t=[...e.querySelectorAll(".category-tabs__item")],n=[...e.querySelectorAll(".category-view")];e.addEventListener("click",e=>{e.preventDefault();const o=e.target,a=o.parentElement,r=a.classList.contains("category-tabs__item"),c=a.getAttribute("href").replace("#","");r&&(t.forEach(e=>{e.classList.remove("category-tabs__item_active")}),n.forEach(e=>{e.classList.remove("category-view_visible")}),a.classList.add("category-tabs__item_active"),document.getElementById(c).classList.add("category-view_visible"))})})});n("28a5");const r=e=>{const t=document.body,n=document.querySelector(".backdrop"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("i");o.classList.add("modal-wrapper"),r.classList.add("icon-close"),a.classList.add("review-item__modal"),a.innerHTML=e,a.appendChild(r),o.appendChild(a),t.appendChild(o),n.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened"),r.addEventListener("click",()=>{n.classList.remove("backdrop_opened"),o.remove("modal-wrapper_opened")})},c=(e,t,n)=>{const o=[...document.querySelectorAll(e)],a=document.createElement("a");a.classList.add("crop-text__button"),a.innerText="Развернуть текст",o.forEach(e=>{e.classList.add("crop-text");const o=window.getComputedStyle(e,null),c=Math.round(Number(o.getPropertyValue("line-height").replace("px",""))),i=Math.round(Number(o.getPropertyValue("height").replace("px",""))),s=e.innerHTML.split(" "),l=e.textContent,d=document.createElement("span"),u=e.parentElement.innerHTML;let p;if(i/c>=t){e.style.height=`${c*t}px`,e.style.overflow="hidden";do{s.pop(),e.innerHTML=s.join(" "),p=l.replace(e.textContent,""),e.appendChild(a)}while(e.scrollHeight>e.offsetHeight);d.textContent=p,e.appendChild(d),a.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.classList.add("open"),n?e.style.height=`${i}px`:r(u)})}})};window.addEventListener("load",()=>{c(".review-item__text",3,!1),c(".seo-text__content",5,!0)});n("f416");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll("[data-modal-target]")],t=document.querySelector(".backdrop"),n=[...document.querySelectorAll(".icon-close")],o=[...document.querySelectorAll(".modal-wrapper")];e.forEach(e=>{const n=e.dataset.modalTarget.replace("#",""),o=document.getElementById(n);e.addEventListener("click",e=>{e.preventDefault(),t.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened")})}),n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-navigation"),n=[...document.querySelectorAll(".dropdown-list")],o=[...document.querySelectorAll(".dropdown-list__label")];e.addEventListener("click",e=>{e.preventDefault(),t.classList.add("active")}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.classList.remove("active")}),n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target,n=t.classList.contains("dropdown-list__label");n&&(o.filter(e=>e!==t).forEach(e=>e.classList.remove("active")),t.classList.toggle("active"))})})})},6443:function(e,t,n){"use strict";var o=n("ad3b"),a=n.n(o);a.a},"786e":function(e,t,n){"use strict";var o=n("8938"),a=n.n(o);a.a},"877a":function(e,t,n){},8938:function(e,t,n){},"927d":function(e,t,n){"use strict";n.r(t);n("ac6a");var o=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"cart",class:{cart_mobile:!e.fullVersion}},[e.fullVersion?n("i",{staticClass:"icon-cart"}):n("i",{staticClass:"icon-shopping-cart"}),e.fullVersion?e._t("default"):e._e(),n("span",{class:{counter:!e.fullVersion}},[e._v("\n    "+e._s(e.fullVersion?"("+e.count+")":e.count)+"\n  ")])],2)},r=[],c={name:"Cart",data(){return{count:14,fullVersion:!0}},mounted(){this.$nextTick(function(){this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches,window.addEventListener("resize",()=>{this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches})})}},i=c,s=(n("6443"),n("2877")),l=Object(s["a"])(i,a,r,!1,null,"8facc67a",null),d=l.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button",on:{click:e.getData}},[e._v("\n  в корзину\n  "),e._t("default")],2)},p=[],m={name:"CategoryButton",props:{dataPrice:{type:Number,required:!0,default:0},dataItemId:{type:Number,required:!0,default:0}},methods:{getData(){console.log(this.dataPrice,this.dataItemId,this)}}},f=m,v=(n("4695"),Object(s["a"])(f,u,p,!1,null,null,null)),h=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.question?n("question",{on:{"close-modal":e.closeModal,"choose-location":e.view}}):n("location-form",{on:{"close-modal":e.closeModal}})},y=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"city-modal",on:{click:e.close}},[n("h2",{staticClass:"city-modal__heading"},[e._v("\n    Ваш город доставки\n  ")]),n("field",{ref:"locationCountries",attrs:{list:e.countries,placeholder:"Введите страну"}}),n("field",{ref:"locationCities",attrs:{list:e.cities,placeholder:"Введите населённый пункт"}}),n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),n("i",{staticClass:"icon-close",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}})],1)},w=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal__field search-field",class:{"city-modal__field_drop":e.open}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.field,expression:"field"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.field},on:{input:[function(t){t.target.composing||(e.field=t.target.value)},function(t){e.open=!0}]}}),n("ul",{staticClass:"city-list",class:{"city-list_opened":e.open}},e._l(e.inputFiltering,function(t,o){return n("li",{key:o,staticClass:"city-list__item",on:{click:function(n){return e.setValue(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("span",{staticClass:"fas fa-chevron-down",class:{up:e.open},on:{click:function(t){t.preventDefault(),e.open=!e.open}}})])},L=[],E=(n("3b2b"),{name:"Field",props:{list:{type:Array,required:!0,default:function(){return[]}},placeholder:{type:String,required:!0,default:""}},data(){return{open:!1,field:""}},computed:{inputFiltering(){const e=new RegExp(this.field,"i");return[...this.list.filter(t=>e.test(t))]}},methods:{setValue(e){this.field=e,this.open=!1}}}),x=E,C=(n("de72"),Object(s["a"])(x,g,L,!1,null,"fe13b7e0",null)),k=C.exports,q={name:"LocationForm",components:{Field:k},data(){return{countries:["Австралия","Венгрия","Германия","Италия","Китай","Литва","Польша","Россия","США","Чехия"],cities:["Куйбышев","Купино","Курильск","Москва","Волгоград","Екатеринбург","Уфа","Норильск","Красноярск","Пенза"]}},methods:{close(e){const t=e.target;t.classList.contains("city-modal")&&(this.$refs.locationCountries.open=!1,this.$refs.locationCities.open=!1)}}},S=q,D=(n("786e"),Object(s["a"])(S,b,w,!1,null,"5794c064",null)),M=D.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal"},[e._m(0),n("button",{staticClass:"city-modal__button active",on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),n("button",{staticClass:"city-modal__button",on:{click:function(t){return e.$emit("choose-location")}}},[e._v("\n    Нет, другой\n  ")])])},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"city-modal__question"},[e._v("\n    Доставка заказа "),n("br"),e._v(" по Москве и области?\n  ")])}],A={name:"Question"},V=A,j=(n("bca1"),Object(s["a"])(V,O,$,!1,null,"572cd656",null)),P=j.exports,T={name:"Location",components:{LocationForm:M,Question:P},data(){return{question:!0}},methods:{view(){this.question=!this.question},closeModal(){const e=document.querySelector(".backdrop"),t=[...document.querySelectorAll(".modal-wrapper")];e.classList.remove("backdrop_opened"),t.forEach(e=>e.classList.remove("modal-wrapper_opened"))}}},H=T,I=Object(s["a"])(H,_,y,!1,null,null,null),N=I.exports,F=n("2f62");o["a"].use(F["a"]);var B=new F["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({store:B,components:{"location-modal":N}}).$mount("location-modal"),new o["a"]({store:B,components:{"product-cart":d}}).$mount("product-cart");const J=[...document.querySelectorAll(".category-button")];J.forEach(e=>{new o["a"]({store:B,render:t=>t(h,{props:{dataPrice:Number(e.dataset.price),dataItemId:Number(e.dataset.itemId)}})}).$mount(`#${e.id}`)})},ad3b:function(e,t,n){},bca1:function(e,t,n){"use strict";var o=n("265a"),a=n.n(o);a.a},bfd7:function(e,t){const n=document.querySelector(".header__top"),o=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",e=>{const t=n.offsetHeight+o.offsetHeight,a=window.scrollY;a>=t&&!window.matchMedia("(max-width: 768px)").matches?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},de72:function(e,t,n){"use strict";var o=n("877a"),a=n.n(o);a.a},e2fe:function(e,t,n){},ef82:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".scroll-top");document.addEventListener("scroll",t=>{const n=window.innerHeight,o=window.pageYOffset;o>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}});
//# sourceMappingURL=index.29d451da.js.map