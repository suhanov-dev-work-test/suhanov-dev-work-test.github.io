(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,o){o("927d"),e.exports=o("4997")},4695:function(e,t,o){"use strict";var n=o("ef82"),a=o.n(n);a.a},4997:function(e,t,o){"use strict";o.r(t);o("f5df"),o("e2fe"),o("ac6a");var n=o("0346");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".main-carousel")],t=[...document.querySelectorAll(".category-list")],o=[...document.querySelectorAll(".banner")],a=[...document.querySelectorAll(".product__image")];e.forEach(e=>{new n["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),t.forEach(e=>{const t=new n["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:5e3,hoverpause:!0,animationDuration:500,breakpoints:{767:{perView:2,gap:9},1024:{gap:16}}}).mount();window.matchMedia("(max-width: 767px)").matches&&t.destroy()}),o.forEach(e=>{new n["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()}),a.forEach(e=>{new n["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:5e3,hoverpause:!0,animationDuration:500}).mount()})});o("bfd7"),o("a481");const a=[...document.querySelectorAll(".category-preview")];a&&document.addEventListener("DOMContentLoaded",()=>{a.forEach(e=>{const t=[...e.querySelectorAll(".category-tabs__item")],o=[...e.querySelectorAll(".category-view")];e.addEventListener("click",e=>{e.preventDefault();const n=e.target,a=n.parentElement,c=a.classList.contains("category-tabs__item"),s=a.getAttribute("href").replace("#","");c&&(t.forEach(e=>{e.classList.remove("category-tabs__item_active")}),o.forEach(e=>{e.classList.remove("category-view_visible")}),a.classList.add("category-tabs__item_active"),document.getElementById(s).classList.add("category-view_visible"))})})});o("28a5");const c=e=>{const t=document.body,o=document.querySelector(".backdrop"),n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("i");n.classList.add("modal-wrapper"),c.classList.add("icon-close"),a.classList.add("review-item__modal"),a.innerHTML=e,a.appendChild(c),n.appendChild(a),t.appendChild(n),o.classList.add("backdrop_opened"),n.classList.add("modal-wrapper_opened"),c.addEventListener("click",()=>{o.classList.remove("backdrop_opened"),n.remove("modal-wrapper_opened")})},s=(e,t,o)=>{const n=[...document.querySelectorAll(e)],a=document.createElement("a");a.classList.add("crop-text__button"),a.innerText="Развернуть текст",n.forEach(e=>{e.classList.add("crop-text");const n=window.getComputedStyle(e,null),s=Math.round(Number(n.getPropertyValue("line-height").replace("px",""))),r=Math.round(Number(n.getPropertyValue("height").replace("px",""))),i=e.innerHTML.split(" "),l=e.textContent,d=document.createElement("span"),u=e.parentElement.innerHTML;let m;if(r/s>=t){e.style.height=`${s*t}px`,e.style.overflow="hidden";do{i.pop(),e.innerHTML=i.join(" "),m=l.replace(e.textContent,""),e.appendChild(a)}while(e.scrollHeight>e.offsetHeight);d.textContent=m,e.appendChild(d),a.addEventListener("click",t=>{t.preventDefault();const n=t.target;n.classList.add("open"),o?e.style.height=`${r}px`:c(u)})}})};window.addEventListener("load",()=>{s(".review-item__text",3,!1),s(".seo-text__content",5,!0)});o("f416");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll("[data-modal-target]")],t=document.querySelector(".backdrop"),o=[...document.querySelectorAll(".icon-close")],n=[...document.querySelectorAll(".modal-wrapper")];e.forEach(e=>{const o=e.dataset.modalTarget.replace("#",""),n=document.getElementById(o);e.addEventListener("click",e=>{e.preventDefault();const o=e.target;o.classList.contains("nobackdrop")||t.classList.add("backdrop_opened"),n.classList.add("modal-wrapper_opened")})}),o.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),t.classList.remove("backdrop_opened"),n.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.classList.remove("backdrop_opened"),n.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-navigation"),o=[...document.querySelectorAll(".dropdown-list")],n=[...document.querySelectorAll(".dropdown-list__label")];e.addEventListener("click",e=>{e.preventDefault(),t.classList.add("active")}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target,o=t.classList.contains("mobile-navigation");o&&t.classList.remove("active")}),o.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target,o=t.classList.contains("dropdown-list__label");o&&(n.filter(e=>e!==t).forEach(e=>e.classList.remove("active")),t.classList.toggle("active"))})})}),document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".phone-code")];e.forEach(e=>{const t=e.querySelector("ul"),o=e.querySelector(".phone-code__field"),n=e.querySelector("i"),a=t.firstElementChild,c=a.firstElementChild.cloneNode(),s=[...t.children];e.dataset.phoneCode=a.textContent.trim(),o.insertBefore(c,n),s.forEach(n=>{n.addEventListener("click",n=>{n.preventDefault();const a=n.target,c=a.classList.contains("phone-code__item");let s;c&&(s=a.firstElementChild.cloneNode(),e.dataset.phoneCode=a.textContent.trim(),o.replaceChild(s,o.firstElementChild),t.classList.remove("phone-code__list_open"))})}),o.addEventListener("click",e=>{t.classList.toggle("phone-code__list_open")})})}),window.addEventListener("load",()=>{const e=[...document.querySelectorAll(".seo-block")],t=(e,t)=>{return parseInt(window.getComputedStyle(e).getPropertyValue(t))};e.forEach(e=>{const o=e.querySelector(".seo-block__list"),n=t(o,"margin-top"),a=t(o,"margin-bottom"),c=n+a+o.offsetHeight;e.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.classList.contains("seo-block__expand")&&(e.style.height=`${c}px`,o.style.display="none")})})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".type-list");if(e){const t=e.offsetHeight,o=[...document.querySelectorAll(".type-list__item_active")];o.forEach(o=>{window.matchMedia("(max-width: 767px)").matches&&(e.classList.add("type-list_close"),o.addEventListener("click",o=>{o.preventDefault(),e.style.height=`${t}px`,e.classList.remove("type-list_close")}))})}})},5318:function(e,t,o){"use strict";var n=o("f2ef"),a=o.n(n);a.a},5716:function(e,t,o){},"927d":function(e,t,o){"use strict";o.r(t);o("28a5"),o("ac6a");var n=o("a026"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"cart",class:{cart_mobile:!e.fullVersion}},[e.fullVersion?o("i",{staticClass:"icon-cart"}):o("i",{staticClass:"icon-shopping-cart"}),e.fullVersion?e._t("default"):e._e(),o("span",{class:{counter:!e.fullVersion}},[e._v("\n    "+e._s(e.fullVersion?"("+e.getCount+")":e.getCount)+"\n  ")])],2)},c=[],s=o("be94"),r=o("2f62"),i={name:"Cart",data(){return{fullVersion:!0}},computed:Object(s["a"])({},Object(r["c"])(["getCount"])),methods:Object(s["a"])({},Object(r["b"])(["setCart"])),mounted(){console.log(this,this.$store),this.setCart(),this.$nextTick(function(){this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches,window.addEventListener("resize",()=>{this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches})})}},l=i,d=(o("f606"),o("2877")),u=Object(d["a"])(l,a,c,!1,null,"47628c63",null),m=u.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"category-list__item-button",on:{click:function(t){return t.preventDefault(),e.addCart(e.dataArray)}}},[e._v("\n  в корзину\n  "),e._t("default")],2)},f=[],h={name:"CategoryButton",props:{dataArray:{type:Array,required:!0,default:function(){return[]}}},methods:Object(s["a"])({},Object(r["b"])(["addCart"]))},_=h,v=(o("4695"),Object(d["a"])(_,p,f,!1,null,null,null)),y=v.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.question?o("question",{on:{"close-modal":e.closeModal,"choose-location":e.view}}):o("location-form",{attrs:{mobile:e.mobile},on:{"close-modal":e.closeModal}})},g=[],w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"city-modal",on:{click:e.close}},[e.mobile?e._e():o("span",{staticClass:"city-modal__mobile-heading"},[o("span",{staticClass:"fas fa-chevron-left",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}),e._v(" Выбор города доставки\n  ")]),e.mobile?o("h2",{staticClass:"city-modal__heading"},[e._v("\n    Ваш город доставки\n  ")]):e._e(),e.mobile?o("field",{ref:"locationCountries",attrs:{list:e.countries,placeholder:"Введите страну"}}):e._e(),o("field",{ref:"locationCities",attrs:{list:e.cities,placeholder:"Введите населённый пункт"}}),e.mobile?o("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]):o("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Готово\n  ")]),e.mobile?o("i",{staticClass:"icon-close",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}):e._e()],1)},L=[],E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"city-modal__field search-field",class:{"city-modal__field_drop":e.open}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.field,expression:"field"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.field},on:{input:[function(t){t.target.composing||(e.field=t.target.value)},function(t){e.open=!0}]}}),o("ul",{staticClass:"city-list",class:{"city-list_opened":e.open}},e._l(e.inputFiltering,function(t,n){return o("li",{key:n,staticClass:"city-list__item",on:{click:function(o){return e.setValue(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),o("span",{staticClass:"fas fa-chevron-down",class:{up:e.open},on:{click:function(t){t.preventDefault(),e.open=!e.open}}})])},C=[],k=(o("3b2b"),{name:"Field",props:{list:{type:Array,required:!0,default:function(){return[]}},placeholder:{type:String,required:!0,default:""}},data(){return{open:!1,field:""}},computed:{inputFiltering(){const e=new RegExp(this.field,"i");return[...this.list.filter(t=>e.test(t))]}},methods:{setValue(e){this.field=e,this.open=!1}}}),q=k,x=(o("5318"),Object(d["a"])(q,E,C,!1,null,"0e3218d4",null)),S=x.exports,D={name:"LocationForm",props:{mobile:{type:Boolean,required:!0,default:!1}},components:{Field:S},data(){return{countries:["Австралия","Венгрия","Германия","Италия","Китай","Литва","Польша","Россия","США","Чехия"],cities:["Куйбышев","Купино","Курильск","Москва","Волгоград","Екатеринбург","Уфа","Норильск","Красноярск","Пенза"]}},methods:{close(e){const t=e.target;t.classList.contains("city-modal")&&(this.$refs.locationCountries.open=!1,this.$refs.locationCities.open=!1)}}},A=D,$=(o("c4ae"),Object(d["a"])(A,w,L,!1,null,"00eb0ead",null)),O=$.exports,M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"city-modal"},[e._m(0),o("button",{staticClass:"city-modal__button active",on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),o("button",{staticClass:"city-modal__button",on:{click:function(t){return e.$emit("choose-location")}}},[e._v("\n    Нет, другой\n  ")])])},V=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",{staticClass:"city-modal__question"},[e._v("\n    Доставка заказа "),o("br"),e._v(" по Москве и области?\n  ")])}],j={name:"Question"},H=j,T=(o("bf4a"),Object(d["a"])(H,M,V,!1,null,"c76c7cf8",null)),B=T.exports;const F=document.querySelector(".backdrop"),N=[...document.querySelectorAll(".modal-wrapper")];var P={name:"Location",components:{LocationForm:O,Question:B},data(){return{question:!0,mobile:!0}},mounted(){window.matchMedia("(max-width: 767px)").matches&&(this.mobile=!1,this.question=!1)},methods:{view(){this.question=!this.question},closeModal(){F.classList.remove("backdrop_opened"),N.forEach(e=>e.classList.remove("modal-wrapper_opened"))}}},I=P,J=Object(d["a"])(I,b,g,!1,null,null,null),Q=J.exports,Y=o("3835"),z=o("1da1"),R=o("bc3a"),G=o.n(R);const K=window.spa_url;var U={getCart(e){return Object(z["a"])(function*(){try{const o=yield G.a.get(`${K}/cart`);e(o.data.cart)}catch(t){console.log(t)}})()},addToCart(e,t){return Object(z["a"])(function*(){try{const n=Object(Y["a"])(t,3),a=n[0],c=n[1],s=n[2],r=yield G.a.post(`${K}/cart/add`,{product_id:a,price_id:c,city_id:s});e(r.data.cart)}catch(o){console.log(o)}})()}};const W={cart:{}},X={getCount:e=>{let t,o=0;return e.cart.items&&(t=e.cart.items.map(e=>e.quantity),o=t.reduce((e,t)=>e+t)),o}},Z={setcart(e,t){e.cart=t}},ee={setCart(e){let t=e.commit;U.getCart(e=>{t("setcart",e)})}};var te={state:W,getters:X,mutations:Z,actions:ee};const oe={addCart(e,t){let o=e.commit;U.addToCart(e=>{o("setcart",e)},t)}};var ne={actions:oe};n["a"].use(r["a"]);const ae=!1;var ce=new r["a"].Store({modules:{cart:te,addButton:ne},strict:ae});n["a"].config.productionTip=!1,console.log(ce),new n["a"]({store:ce,components:{"location-modal":Q}}).$mount("location-modal"),new n["a"]({store:ce,components:{"product-cart":m}}).$mount("product-cart");const se=[...document.querySelectorAll(".category-button, .product-form__to-cart")];se.forEach(e=>{new n["a"]({store:ce,render:t=>t(y,{props:{dataArray:e.dataset.add2basket.split(",")}})}).$mount(`#${e.id}`)})},bf4a:function(e,t,o){"use strict";var n=o("5716"),a=o.n(n);a.a},bf4c:function(e,t,o){},bfd7:function(e,t){const o=document.querySelector(".header__top"),n=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",e=>{const t=o.offsetHeight+n.offsetHeight,a=window.scrollY;a>=t&&!window.matchMedia("(max-width: 768px)").matches?o.classList.add("header__top_scroll"):o.classList.remove("header__top_scroll")})})},c4ae:function(e,t,o){"use strict";var n=o("bf4c"),a=o.n(n);a.a},cc48:function(e,t,o){},e2fe:function(e,t,o){},ef82:function(e,t,o){},f2ef:function(e,t,o){},f416:function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".scroll-top");document.addEventListener("scroll",t=>{const o=window.innerHeight,n=window.pageYOffset;n>o?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})},f606:function(e,t,o){"use strict";var n=o("cc48"),a=o.n(n);a.a}}]);
//# sourceMappingURL=chunk-common.8526c513.js.map