(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){n("927d"),e.exports=n("4997")},"12c4":function(e,t,n){},4695:function(e,t,n){"use strict";var a=n("ef82"),o=n.n(a);o.a},4997:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("f5df"),n("e2fe"),n("ac6a");var a=n("75fc"),o=n("0346");document.addEventListener("DOMContentLoaded",function(){var e=Object(a["a"])(document.querySelectorAll(".main-carousel")),t=Object(a["a"])(document.querySelectorAll(".category-list")),n=Object(a["a"])(document.querySelectorAll(".banner")),c=Object(a["a"])(document.querySelectorAll(".product__image"));e.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()}),t.forEach(function(e){var t=new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500,breakpoints:{767:{perView:2,gap:9},1024:{gap:16}}}).mount();window.matchMedia("(max-width: 767px)").matches&&t.destroy()}),n.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()}),c.forEach(function(e){new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()})});n("bfd7"),n("a481");var c=Object(a["a"])(document.querySelectorAll(".category-preview"));c&&document.addEventListener("DOMContentLoaded",function(){c.forEach(function(e){var t=Object(a["a"])(e.querySelectorAll(".category-tabs__item")),n=Object(a["a"])(e.querySelectorAll(".category-view"));e.addEventListener("click",function(e){e.preventDefault();var a=e.target,o=a.parentElement,c=o.classList.contains("category-tabs__item"),i=o.getAttribute("href").replace("#","");c&&(t.forEach(function(e){e.classList.remove("category-tabs__item_active")}),n.forEach(function(e){e.classList.remove("category-view_visible")}),o.classList.add("category-tabs__item_active"),document.getElementById(i).classList.add("category-view_visible"))})})});n("28a5"),n("c5f6");var i=function(e){var t=document.body,n=document.querySelector(".backdrop"),a=document.createElement("div"),o=document.createElement("div"),c=document.createElement("i");a.classList.add("modal-wrapper"),c.classList.add("icon-close"),o.classList.add("review-item__modal"),o.innerHTML=e,o.appendChild(c),a.appendChild(o),t.appendChild(a),n.classList.add("backdrop_opened"),a.classList.add("modal-wrapper_opened"),c.addEventListener("click",function(){n.classList.remove("backdrop_opened"),a.remove("modal-wrapper_opened")})},r=function(e,t,n){var o=Object(a["a"])(document.querySelectorAll(e)),c=document.createElement("a");c.classList.add("crop-text__button"),c.innerText="Развернуть текст",o.forEach(function(e){e.classList.add("crop-text");var a,o=window.getComputedStyle(e,null),r=Math.round(Number(o.getPropertyValue("line-height").replace("px",""))),s=Math.round(Number(o.getPropertyValue("height").replace("px",""))),l=e.innerHTML.split(" "),d=e.textContent,u=document.createElement("span"),f=e.parentElement.innerHTML;if(s/r>=t){e.style.height="".concat(r*t,"px"),e.style.overflow="hidden";do{l.pop(),e.innerHTML=l.join(" "),a=d.replace(e.textContent,""),e.appendChild(c)}while(e.scrollHeight>e.offsetHeight);u.textContent=a,e.appendChild(u),c.addEventListener("click",function(a){a.preventDefault();var o,c=a.target;c.classList.toggle("open"),o=c.classList.contains("open"),n?(e.style.height="".concat(o?s:r*t,"px"),c.innerText=o?"Скрыть текст":"Развернуть текст"):i(f)})}})};window.addEventListener("load",function(){r(".review-item__text",3,!1),r(".seo-text__content",5,!0)});n("f416");document.addEventListener("DOMContentLoaded",function(){var e=Object(a["a"])(document.querySelectorAll("[data-modal-target]")),t=document.querySelector(".backdrop"),n=Object(a["a"])(document.querySelectorAll(".icon-close")),o=Object(a["a"])(document.querySelectorAll(".modal-wrapper"));e.forEach(function(e){var n=e.dataset.modalTarget.replace("#",""),a=document.getElementById(n);e.addEventListener("click",function(e){e.preventDefault();var n=e.target;n.classList.contains("nobackdrop")||t.classList.add("backdrop_opened"),a.classList.add("modal-wrapper_opened")})}),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("backdrop_opened"),o.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})})}),t.addEventListener("click",function(e){e.preventDefault();var t=e.target;t.classList.remove("backdrop_opened"),o.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-navigation"),n=Object(a["a"])(document.querySelectorAll(".dropdown-list")),o=Object(a["a"])(document.querySelectorAll(".dropdown-list__label"));e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("active")}),t.addEventListener("click",function(e){var t=e.target,n=t.classList.contains("mobile-navigation");n&&(e.preventDefault(),t.classList.remove("active"))}),n.forEach(function(e){e.addEventListener("click",function(e){var t=e.target,n=t.classList.contains("dropdown-list__label")&&!t.classList.contains("dropdown-list__label_link");n&&(e.preventDefault(),o.filter(function(e){return e!==t}).forEach(function(e){return e.classList.remove("active")}),t.classList.toggle("active"))})})}),document.addEventListener("DOMContentLoaded",function(){var e=Object(a["a"])(document.querySelectorAll(".phone-code"));e.forEach(function(e){var t=e.querySelector("ul"),n=e.querySelector(".phone-code__field"),o=e.querySelector("i"),c=t.firstElementChild,i=c.firstElementChild.cloneNode(),r=Object(a["a"])(t.children);e.dataset.phoneCode=c.textContent.trim(),n.insertBefore(i,o),r.forEach(function(a){a.addEventListener("click",function(a){a.preventDefault();var o,c=a.target,i=c.classList.contains("phone-code__item");i&&(o=c.firstElementChild.cloneNode(),e.dataset.phoneCode=c.textContent.trim(),n.replaceChild(o,n.firstElementChild),t.classList.remove("phone-code__list_open"))})}),n.addEventListener("click",function(e){t.classList.toggle("phone-code__list_open")})})}),window.addEventListener("load",function(){var e=Object(a["a"])(document.querySelectorAll(".seo-block")),t=function(e,t){return parseInt(window.getComputedStyle(e).getPropertyValue(t))};e.forEach(function(e){var n=e.querySelector(".seo-block__list"),a=t(n,"margin-top"),o=t(n,"margin-bottom"),c=a+o+n.offsetHeight;e.addEventListener("click",function(t){t.preventDefault();var n=t.target;n.classList.contains("seo-block__expand")&&(e.style.height="".concat(c,"px"),n.style.display="none")})})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".type-list");if(e){var t=e.offsetHeight,n=Object(a["a"])(document.querySelectorAll(".type-list__item_active"));n.forEach(function(n){window.matchMedia("(max-width: 767px)").matches&&(e.classList.add("type-list_close"),n.addEventListener("click",function(n){n.preventDefault(),e.style.height="".concat(t,"px"),e.classList.remove("type-list_close")}))})}});n("6b54");document.addEventListener("DOMContentLoaded",function(){var e=Object(a["a"])(document.querySelectorAll(".price-value__item input")),t=Object(a["a"])(document.querySelectorAll(".switch-description")),n=Object(a["a"])(document.querySelectorAll(".icon-token"));e.forEach(function(e){e.addEventListener("change",function(e){e.preventDefault();var a=e.target,o=a.getAttribute("vegas_token_count"),c=document.getElementById(a.value.toString());o&&n.forEach(function(e){e.textContent=o}),t.forEach(function(e){e.classList.remove("switch-description_active")}),c.classList.add("switch-description_active")})})})},5318:function(e,t,n){"use strict";var a=n("f2ef"),o=n.n(a);o.a},5716:function(e,t,n){},"927d":function(e,t,n){"use strict";n.r(t);n("28a5"),n("ac6a");var a=n("75fc"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("a026")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"cart",class:{cart_mobile:!e.fullVersion}},[e.fullVersion?n("i",{staticClass:"icon-cart"}):n("i",{staticClass:"icon-shopping-cart"}),e.fullVersion?e._t("default"):e._e(),n("span",{class:{counter:!e.fullVersion}},[e._v("\n    "+e._s(e.fullVersion?"("+e.getCount+")":e.getCount)+"\n  ")])],2)},i=[],r=n("cebc"),s=n("2f62"),l={name:"Cart",data:function(){return{fullVersion:!0}},computed:Object(r["a"])({},Object(s["c"])(["getCount"])),methods:Object(r["a"])({},Object(s["b"])(["setCart"])),mounted:function(){this.setCart(),this.$nextTick(function(){var e=this;this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches,window.addEventListener("resize",function(){e.fullVersion=!window.matchMedia("(max-width: 1024px)").matches})})}},d=l,u=(n("9fce"),n("2877")),f=Object(u["a"])(d,c,i,!1,null,"ea1e82ae",null),m=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button",on:{click:function(t){return t.preventDefault(),e.addToCart(t)}}},[e._v("\n  в корзину\n  "),e._t("default")],2)},v=[],h=n("768b"),_=(n("7514"),{name:"CategoryButton",props:{dataArray:{type:Array,required:!0,default:function(){return[]}}},methods:Object(r["a"])({},Object(s["b"])(["addCart"]),{addToCart:function(){var e,t=Object(a["a"])(document.querySelectorAll(".price-value__item input"));t.length&&(e=t.find(function(e){return e.checked}).value);var n=Object(h["a"])(this.dataArray,3),o=n[0],c=n[1],i=n[2];this.addCart({product_id:o.trim(),price_id:e||c.trim(),city_id:i.trim()}).then(function(e){var t,n=document.getElementById("add-cart"),a=document.querySelector(".backdrop"),o=n.querySelector(".add-item");o.innerHTML=e,a.classList.add("backdrop_opened"),n.classList.add("modal-wrapper_opened"),t=o.querySelector(".add-item__button_grey"),t.addEventListener("click",function(){a.classList.remove("backdrop_opened"),n.classList.remove("modal-wrapper_opened")})})}})}),b=_,y=(n("4695"),Object(u["a"])(b,p,v,!1,null,null,null)),g=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.question?n("question",{on:{"close-modal":e.closeModal,"choose-location":e.view}}):n("location-form",{attrs:{mobile:e.mobile},on:{"close-modal":e.closeModal}})},L=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"city-modal",on:{click:e.close}},[e.mobile?e._e():n("span",{staticClass:"city-modal__mobile-heading"},[n("span",{staticClass:"fas fa-chevron-left",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}),e._v(" Выбор города доставки\n  ")]),e.mobile?n("h2",{staticClass:"city-modal__heading"},[e._v("\n    Ваш город доставки\n  ")]):e._e(),e.mobile?n("field",{ref:"locationCountries",attrs:{list:e.countries,placeholder:"Введите страну"}}):e._e(),n("field",{ref:"locationCities",attrs:{list:e.cities,placeholder:"Введите населённый пункт"}}),e.mobile?n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]):n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Готово\n  ")]),e.mobile?n("i",{staticClass:"icon-close",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}):e._e()],1)},E=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal__field search-field",class:{"city-modal__field_drop":e.open}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.field,expression:"field"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.field},on:{input:[function(t){t.target.composing||(e.field=t.target.value)},function(t){e.open=!0}]}}),n("ul",{staticClass:"city-list",class:{"city-list_opened":e.open}},e._l(e.inputFiltering,function(t,a){return n("li",{key:a,staticClass:"city-list__item",on:{click:function(n){return e.setValue(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("span",{staticClass:"fas fa-chevron-down",class:{up:e.open},on:{click:function(t){t.preventDefault(),e.open=!e.open}}})])},q=[],x=(n("3b2b"),{name:"Field",props:{list:{type:Array,required:!0,default:function(){return[]}},placeholder:{type:String,required:!0,default:""}},data:function(){return{open:!1,field:""}},computed:{inputFiltering:function(){var e=new RegExp(this.field,"i");return Object(a["a"])(this.list.filter(function(t){return e.test(t)}))}},methods:{setValue:function(e){this.field=e,this.open=!1}}}),O=x,S=(n("5318"),Object(u["a"])(O,k,q,!1,null,"0e3218d4",null)),j=S.exports,A={name:"LocationForm",props:{mobile:{type:Boolean,required:!0,default:!1}},components:{Field:j},data:function(){return{countries:["Австралия","Венгрия","Германия","Италия","Китай","Литва","Польша","Россия","США","Чехия"],cities:["Куйбышев","Купино","Курильск","Москва","Волгоград","Екатеринбург","Уфа","Норильск","Красноярск","Пенза"]}},methods:{close:function(e){var t=e.target;t.classList.contains("city-modal")&&(this.$refs.locationCountries.open=!1,this.$refs.locationCities.open=!1)}}},D=A,M=(n("c4ae"),Object(u["a"])(D,C,E,!1,null,"00eb0ead",null)),$=M.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal"},[e._m(0),n("button",{staticClass:"city-modal__button active",on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),n("button",{staticClass:"city-modal__button",on:{click:function(t){return e.$emit("choose-location")}}},[e._v("\n    Нет, другой\n  ")])])},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"city-modal__question"},[e._v("\n    Доставка заказа "),n("br"),e._v(" по Москве и области?\n  ")])}],H={name:"Question"},R=H,F=(n("bf4a"),Object(u["a"])(R,T,V,!1,null,"c76c7cf8",null)),B=F.exports,I=document.querySelector(".backdrop"),N=Object(a["a"])(document.querySelectorAll(".modal-wrapper")),P={name:"Location",components:{LocationForm:$,Question:B},data:function(){return{question:!0,mobile:!0}},mounted:function(){window.matchMedia("(max-width: 767px)").matches&&(this.mobile=!1,this.question=!1)},methods:{view:function(){this.question=!this.question},closeModal:function(){I.classList.remove("backdrop_opened"),N.forEach(function(e){return e.classList.remove("modal-wrapper_opened")})}}},J=P,Q=Object(u["a"])(J,w,L,!1,null,null,null),U=Q.exports,Y=(n("96cf"),n("3b8d")),z=n("bc3a"),X=n.n(z);n("a481"),n("4917");function G(e){var t=document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1"),"=([^;]*)")));return t?decodeURIComponent(t[1]):void 0}var K=window.spa_url,W=G("CatalogCityId")||G("CatalogCityIdRR"),Z=X.a.create({baseURL:K,withCredentials:!0,headers:{"X-Catalog-Region":W}}),ee={getCart:function(){var e=Object(Y["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("".concat(K,"/cart"));case 3:n=e.sent,t(n.data.data.cart),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),addToCart:function(){var e=Object(Y["a"])(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.post("".concat(K,"/cart/add"),n);case 3:a=e.sent,t(a.data.data.cart,a.data.html),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));function t(t,n){return e.apply(this,arguments)}return t}()},te={cart:null},ne={getCount:function(e){var t,n=0;return e.cart&&(t=e.cart.items.map(function(e){return e.quantity}),n=t.reduce(function(e,t){return e+t})),n}},ae={setcart:function(e,t){e.cart=t}},oe={setCart:function(e){var t=e.commit;ee.getCart(function(e){t("setcart",e)})}},ce={state:te,getters:ne,mutations:ae,actions:oe},ie={},re={},se={},le={addCart:function(e,t){var n=e.commit;return new Promise(function(e,a){ee.addToCart(function(t,o){n("setcart",t),o?e(o):a(t)},t)})}},de={state:ie,getters:re,mutations:se,actions:le};o["a"].use(s["a"]);var ue=!1,fe=new s["a"].Store({modules:{cart:ce,addButton:de},strict:ue});o["a"].config.productionTip=!1,new o["a"]({store:fe,components:{"location-modal":U}}).$mount("location-modal"),new o["a"]({store:fe,components:{"product-cart":m}}).$mount("product-cart");var me=Object(a["a"])(document.querySelectorAll(".category-button, .product-form__to-cart, .category-list__item-button"));me.forEach(function(e){new o["a"]({store:fe,render:function(t){return t(g,{props:{dataArray:e.dataset.add2basket.split(",")}})}}).$mount("#".concat(e.id))})},"9fce":function(e,t,n){"use strict";var a=n("12c4"),o=n.n(a);o.a},bf4a:function(e,t,n){"use strict";var a=n("5716"),o=n.n(a);o.a},bf4c:function(e,t,n){},bfd7:function(e,t){var n=document.querySelector(".header__top"),a=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(e){var t=n.offsetHeight+a.offsetHeight,o=window.scrollY;o>=t&&!window.matchMedia("(max-width: 768px)").matches?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},c4ae:function(e,t,n){"use strict";var a=n("bf4c"),o=n.n(a);o.a},e2fe:function(e,t,n){},ef82:function(e,t,n){},f2ef:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".scroll-top");document.addEventListener("scroll",function(t){var n=window.innerHeight,a=window.pageYOffset;a>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}}]);
//# sourceMappingURL=chunk-common-legacy.200b44db.js.map