(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){n("927d"),e.exports=n("4997")},"01b2":function(e,t,n){"use strict";var o=n("2447"),a=n.n(o);a.a},"02b9":function(e,t,n){},"12c4":function(e,t,n){},2447:function(e,t,n){},"2f0e":function(e,t,n){"use strict";var o=n("7972"),a=n.n(o);a.a},4695:function(e,t,n){"use strict";var o=n("ef82"),a=n.n(o);a.a},4997:function(e,t,n){"use strict";n.r(t);n("f5df"),n("e2fe"),n("ac6a");var o=n("0346");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".main-carousel")],t=[...document.querySelectorAll(".category-list")],n=[...document.querySelectorAll(".banner")],a=[...document.querySelectorAll(".product__image")];e.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()}),t.forEach(e=>{const t=new o["a"](e,{type:"carousel",startAt:0,perView:3,gap:40,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500,breakpoints:{767:{perView:2,gap:9},1024:{gap:16}}}).mount();window.matchMedia("(max-width: 767px)").matches&&t.destroy()}),n.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()}),a.forEach(e=>{new o["a"](e,{type:"carousel",startAt:0,perView:1,gap:0,autoplay:7e3,animationTimingFunc:"ease",hoverpause:!0,animationDuration:1500}).mount()})});n("bfd7"),n("a481");const a=[...document.querySelectorAll(".category-preview")];a&&document.addEventListener("DOMContentLoaded",()=>{a.forEach(e=>{const t=[...e.querySelectorAll(".category-tabs__item")],n=[...e.querySelectorAll(".category-view")];e.addEventListener("click",e=>{e.preventDefault();const o=e.target,a=o.parentElement,r=a.classList.contains("category-tabs__item"),c=a.getAttribute("href").replace("#","");r&&(t.forEach(e=>{e.classList.remove("category-tabs__item_active")}),n.forEach(e=>{e.classList.remove("category-view_visible")}),a.classList.add("category-tabs__item_active"),document.getElementById(c).classList.add("category-view_visible"))})})});n("28a5");const r=e=>{const t=document.body,n=document.querySelector(".backdrop"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("i");o.classList.add("modal-wrapper"),r.classList.add("icon-close"),a.classList.add("review-item__modal"),a.innerHTML=e,a.appendChild(r),o.appendChild(a),t.appendChild(o),n.classList.add("backdrop_opened"),o.classList.add("modal-wrapper_opened"),r.addEventListener("click",()=>{n.classList.remove("backdrop_opened"),o.remove("modal-wrapper_opened")})},c=(e,t)=>{const n=[...document.querySelectorAll(e)],o=document.createElement("a");o.classList.add("crop-text__button"),o.innerText="Развернуть текст",n.forEach(e=>{e.classList.add("crop-text");const n=window.getComputedStyle(e,null),a=Math.round(Number(n.getPropertyValue("line-height").replace("px",""))),c=Math.round(Number(n.getPropertyValue("height").replace("px",""))),s=e.innerHTML.split(" "),i=e.textContent,l=document.createElement("span"),d=e.parentElement.innerHTML;let u;if(c/a>=t){e.style.height=`${a*t}px`,e.style.overflow="hidden";do{s.pop(),e.innerHTML=s.join(" "),u=i.replace(e.textContent,""),e.appendChild(o)}while(e.scrollHeight>e.offsetHeight);l.textContent=u,e.appendChild(l),o.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.classList.toggle("open"),r(d)})}})};window.addEventListener("load",()=>{c(".review-item__text",3)});n("f416");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll("[data-modal-target]")],t=document.querySelector(".backdrop"),n=[...document.querySelectorAll(".icon-close")],o=[...document.querySelectorAll(".modal-wrapper")];e.forEach(e=>{const n=e.dataset.modalTarget.replace("#",""),a=document.getElementById(n);e.addEventListener("click",e=>{e.preventDefault();const n=e.target,o=a.firstElementChild.offsetHeight,r=document.documentElement.clientHeight;r<=o&&(a.firstElementChild.style.marginTop="auto"),a.style.overflowY="scroll",document.documentElement.style.overflow="hidden",n.classList.contains("nobackdrop")||t.classList.add("backdrop_opened"),a.classList.add("modal-wrapper_opened")}),a.addEventListener("click",e=>{e.preventDefault(),document.documentElement.style.overflow=null,t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})}),n.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),document.documentElement.style.overflow=null,t.classList.remove("backdrop_opened"),o.forEach(e=>e.classList.remove("modal-wrapper_opened"))})})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".mobile-navigation"),n=[...document.querySelectorAll(".dropdown-list")],o=[...document.querySelectorAll(".dropdown-list__label")];e.addEventListener("click",e=>{e.preventDefault(),t.classList.add("active")}),t.addEventListener("click",e=>{const t=e.target,n=t.classList.contains("mobile-navigation");n&&(e.preventDefault(),t.classList.remove("active"))}),n.forEach(e=>{e.addEventListener("click",e=>{const t=e.target,n=t.classList.contains("dropdown-list__label")&&!t.classList.contains("dropdown-list__label_link");n&&(e.preventDefault(),o.filter(e=>e!==t).forEach(e=>e.classList.remove("active")),t.classList.toggle("active"))})})}),document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".phone-code")];e.forEach(e=>{const t=e.querySelector("ul"),n=e.querySelector(".phone-code__field"),o=e.querySelector("i"),a=t.firstElementChild,r=a.firstElementChild.cloneNode(),c=[...t.children];e.dataset.phoneCode=a.textContent.trim(),n.insertBefore(r,o),c.forEach(o=>{o.addEventListener("click",o=>{o.preventDefault();const a=o.target,r=a.classList.contains("phone-code__item");let c;r&&(c=a.firstElementChild.cloneNode(),e.dataset.phoneCode=a.textContent.trim(),n.replaceChild(c,n.firstElementChild),t.classList.remove("phone-code__list_open"))})}),n.addEventListener("click",e=>{t.classList.toggle("phone-code__list_open")})})}),document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".type-list");if(e){const t=e.offsetHeight,n=[...document.querySelectorAll(".type-list__item_active")];n.forEach(n=>{window.matchMedia("(max-width: 767px)").matches&&(e.classList.add("type-list_close"),n.addEventListener("click",n=>{n.preventDefault(),e.style.height=`${t}px`,e.classList.remove("type-list_close")}))})}});n("6b54");document.addEventListener("DOMContentLoaded",()=>{const e=[...document.querySelectorAll(".price-value__item input")],t=[...document.querySelectorAll(".switch-description")],n=[...document.querySelectorAll(".icon-token")];e.forEach(e=>{e.addEventListener("change",e=>{e.preventDefault();const o=e.target,a=o.getAttribute("vegas_token_count"),r=document.getElementById(o.value.toString());a&&n.forEach(e=>{e.textContent=a}),t.forEach(e=>{e.classList.remove("switch-description_active")}),r.classList.add("switch-description_active")})})})},5318:function(e,t,n){"use strict";var o=n("f2ef"),a=n.n(o);a.a},5716:function(e,t,n){},"734f":function(e,t,n){"use strict";var o=n("aa4d"),a=n.n(o);a.a},"74aa":function(e,t,n){},"77a5":function(e,t,n){"use strict";var o=n("74aa"),a=n.n(o);a.a},7972:function(e,t,n){},"927d":function(e,t,n){"use strict";n.r(t);n("28a5"),n("ac6a");var o=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"cart",class:{cart_mobile:!e.fullVersion}},[e.fullVersion?n("i",{staticClass:"icon-cart"}):n("i",{staticClass:"icon-shopping-cart"}),e.fullVersion?e._t("default"):e._e(),n("span",{class:{counter:!e.fullVersion}},[e._v("\n    "+e._s(e.fullVersion?"("+e.getCount+")":e.getCount)+"\n  ")])],2)},r=[],c=n("be94"),s=n("2f62"),i={name:"Cart",data(){return{fullVersion:!0}},computed:Object(c["a"])({},Object(s["c"])(["getCount"])),methods:Object(c["a"])({},Object(s["b"])(["setCart"])),mounted(){this.setCart(),this.$nextTick(function(){this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches,window.addEventListener("resize",()=>{this.fullVersion=!window.matchMedia("(max-width: 1024px)").matches})})}},l=i,d=(n("9fce"),n("2877")),u=Object(d["a"])(l,a,r,!1,null,"ea1e82ae",null),m=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"category-list__item-button",on:{click:function(t){return t.preventDefault(),e.addToCart(t)}}},[e._v("\n  в корзину\n")])},f=[],h=n("3835"),_={name:"CategoryButton",props:{dataArray:{type:Array,required:!0,default:function(){return[]}}},methods:Object(c["a"])({},Object(s["b"])(["addCart"]),{addToCart(){let e;const t=[...document.querySelectorAll(".price-value__item input")];t.length&&(e=t.find(e=>e.checked).value);const n=Object(h["a"])(this.dataArray,3),o=n[0],a=n[1],r=n[2];this.addCart({product_id:o,price_id:e||a,city_id:r}).then(e=>{const t=document.getElementById("add-cart"),n=document.querySelector(".backdrop"),o=t.querySelector(".add-item");let a;o.innerHTML=e,n.classList.add("backdrop_opened"),t.classList.add("modal-wrapper_opened"),a=o.querySelector(".add-item__button_grey"),a.addEventListener("click",()=>{n.classList.remove("backdrop_opened"),t.classList.remove("modal-wrapper_opened")})})}})},v=_,y=(n("4695"),Object(d["a"])(v,p,f,!1,null,null,null)),b=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.question?n("question",{on:{"close-modal":e.closeModal,"choose-location":e.view}}):n("location-form",{attrs:{mobile:e.mobile},on:{"close-modal":e.closeModal}})},w=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"city-modal",on:{click:e.close}},[e.mobile?e._e():n("span",{staticClass:"city-modal__mobile-heading"},[n("span",{staticClass:"fas fa-chevron-left",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}),e._v(" Выбор города доставки\n  ")]),e.mobile?n("h2",{staticClass:"city-modal__heading"},[e._v("\n    Ваш город доставки\n  ")]):e._e(),e.mobile?n("field",{ref:"locationCountries",attrs:{list:e.countries,placeholder:"Введите страну"}}):e._e(),n("field",{ref:"locationCities",attrs:{list:e.cities,placeholder:"Введите населённый пункт"}}),e.mobile?n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]):n("button",{staticClass:"city-modal__submit",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}},[e._v("\n    Готово\n  ")]),e.mobile?n("i",{staticClass:"icon-close",on:{click:function(t){return t.preventDefault(),e.$emit("close-modal")}}}):e._e()],1)},L=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal__field search-field",class:{"city-modal__field_drop":e.open}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.field,expression:"field"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.field},on:{input:[function(t){t.target.composing||(e.field=t.target.value)},function(t){e.open=!0}]}}),n("ul",{staticClass:"city-list",class:{"city-list_opened":e.open}},e._l(e.inputFiltering,function(t,o){return n("li",{key:o,staticClass:"city-list__item",on:{click:function(n){return e.setValue(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("span",{staticClass:"fas fa-chevron-down",class:{up:e.open},on:{click:function(t){t.preventDefault(),e.open=!e.open}}})])},k=[],x=(n("3b2b"),{name:"Field",props:{list:{type:Array,required:!0,default:function(){return[]}},placeholder:{type:String,required:!0,default:""}},data(){return{open:!1,field:""}},computed:{inputFiltering(){const e=new RegExp(this.field,"i");return[...this.list.filter(t=>e.test(t))]}},methods:{setValue(e){this.field=e,this.open=!1}}}),O=x,q=(n("5318"),Object(d["a"])(O,E,k,!1,null,"0e3218d4",null)),S=q.exports,A={name:"LocationForm",props:{mobile:{type:Boolean,required:!0,default:!1}},components:{Field:S},data(){return{countries:["Австралия","Венгрия","Германия","Италия","Китай","Литва","Польша","Россия","США","Чехия"],cities:["Куйбышев","Купино","Курильск","Москва","Волгоград","Екатеринбург","Уфа","Норильск","Красноярск","Пенза"]}},methods:{close(e){const t=e.target;t.classList.contains("city-modal")&&(this.$refs.locationCountries.open=!1,this.$refs.locationCities.open=!1)}}},$=A,D=(n("734f"),Object(d["a"])($,C,L,!1,null,"3ef528e8",null)),j=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"city-modal"},[e._m(0),n("button",{staticClass:"city-modal__button active",on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n    Да, верно\n  ")]),n("button",{staticClass:"city-modal__button",on:{click:function(t){return e.$emit("choose-location")}}},[e._v("\n    Нет, другой\n  ")])])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"city-modal__question"},[e._v("\n    Доставка заказа "),n("br"),e._v(" по Москве и области?\n  ")])}],V={name:"Question"},H=V,F=(n("bf4a"),Object(d["a"])(H,M,T,!1,null,"c76c7cf8",null)),I=F.exports;const N=document.querySelector(".backdrop"),P=[...document.querySelectorAll(".modal-wrapper")];var B={name:"Location",components:{LocationForm:j,Question:I},data(){return{question:!0,mobile:!0}},mounted(){window.matchMedia("(max-width: 767px)").matches&&(this.mobile=!1,this.question=!1)},methods:{view(){this.question=!this.question},closeModal(){N.classList.remove("backdrop_opened"),P.forEach(e=>e.classList.remove("modal-wrapper_opened"))}}},R=B,U=Object(d["a"])(R,g,w,!1,null,null,null),Y=U.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("visible"),n("transition",{attrs:{name:"fade"}},[e.expand?n("div",[e._t("hidden")],2):e._e()]),n("a",{staticClass:"expand-button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.expand=!e.expand}}},[e._v(e._s(e.expand?e.textCollapse:e.textExpand))])],2)},Q=[],z={name:"SeoBlock",props:{textExpand:{type:String,default:"Развернуть текст"},textCollapse:{type:String,default:"Скрыть текст"}},data(){return{expand:!1}}},X=z,G=(n("01b2"),Object(d["a"])(X,J,Q,!1,null,"3f7fd6cb",null)),K=G.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"seo-block",class:{"seo-block_open":e.expand},style:e.elStyle},[e._t("default"),n("a",{staticClass:"seo-block__expand",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setHeight(t)}}},[e._v(e._s(e.expand?"Скрыть текст":"Читать полностью"))])],2)])},Z=[],ee={name:"SeoBlock",data(){return{expand:!1,elHeight:0}},computed:{elStyle(){const e=this.expand?{height:this.elHeight}:{};return e}},methods:{setHeight(){const e=(e,t)=>{return parseInt(window.getComputedStyle(e).getPropertyValue(t))},t=this.$slots.default.filter(e=>3!==e.elm.nodeType),n=t.map(t=>e(t.elm,"margin-top")+e(t.elm,"margin-bottom")+t.elm.offsetHeight);this.elHeight=`${n.reduce((e,t)=>e+t+10)}px`,this.expand=!this.expand}}},te=ee,ne=(n("2f0e"),Object(d["a"])(te,W,Z,!1,null,null,null)),oe=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"fast-order",on:{click:function(t){return e.setFastOrder(e.dataArray)}}},[e._t("default")],2)},re=[],ce={name:"FastOrder",props:{dataFastOrder:{type:String,required:!0,default:""}},computed:{dataArray(){const e=this.dataFastOrder.split(","),t=e.map(e=>e.trim());return[...t,"-1"]}},methods:Object(c["a"])({},Object(s["b"])(["setFastOrder"]))},se=ce,ie=(n("77a5"),Object(d["a"])(se,ae,re,!1,null,"1959b908",null)),le=ie.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"callback"},[e.done?[e._v("\n    Спасибо! Ваш заказ №"+e._s(e.orderId)+" принят. Мы обязательно перезвоним вам через 2 — 3 минуты.\n  ")]:[n("h2",{staticClass:"callback__heading"},[e._v("\n      "+e._s(e.name)+"\n    ")]),n("span",{staticClass:"callback__vendor-code"},[e._v("Артикул: "+e._s(e.vendor))]),n("p",{staticClass:"callback__description"},[e._v("\n      Укажите свое имя и телефон.\n      Мы перезвоним вам через 2 — 3 минуты.\n    ")]),n("div",{staticClass:"callback__field"},[n("input",{attrs:{type:"text",placeholder:"Имя",required:""},on:{input:function(t){return e.userName(t.target.value)}}})]),n("div",{staticClass:"callback__field callback__field_phone"},[n("input",{attrs:{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:e.phone?e.phone:"+7 (495) 123-45-67",required:""},on:{input:function(t){return e.userPhone(t.target.value)}}})]),n("button",{staticClass:"callback__button",on:{click:e.fastOrder}},[e._v("\n      Отправить\n    ")])]],2)},ue=[],me={name:"CallbackModal",computed:Object(c["a"])({},Object(s["d"])({name:e=>e.fastOrder.name,vendor:e=>e.fastOrder.vendor,phone:e=>e.fastOrder.phone,done:e=>e.fastOrder.done,orderId:e=>e.fastOrder.orderId})),methods:Object(c["a"])({},Object(s["b"])(["fastOrder","userName","userPhone"]))},pe=me,fe=(n("c4fe"),Object(d["a"])(pe,de,ue,!1,null,"1d5a8a00",null)),he=fe.exports,_e=n("1da1"),ve=n("bc3a"),ye=n.n(ve);n("a481"),n("4917");function be(e){const t=document.cookie.match(new RegExp(`(?:^|; )${e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")}=([^;]*)`));return t?decodeURIComponent(t[1]):void 0}const ge=window.spa_url,we=be("CatalogCityId")||be("CatalogCityIdRR"),Ce=ye.a.create({baseURL:ge,withCredentials:!0,headers:{"X-Catalog-Region":we}});var Le={getCart(e){return Object(_e["a"])(function*(){try{const n=yield Ce.get(`${ge}/cart`);e(n.data.data.cart)}catch(t){console.log(t)}})()},addToCart(e,t){return Object(_e["a"])(function*(){try{const o=yield Ce.post(`${ge}/cart/add`,t);e(o.data.data.cart,o.data.html)}catch(n){console.log(n)}})()},getFastOrder(e,t){return Object(_e["a"])(function*(){try{const o=yield Ce.post(`${window.location.origin}/api/basket/fast-order`,t);e(o.data.data)}catch(n){console.log(n)}})()},fastOrder(e,t){return Object(_e["a"])(function*(){try{const o=yield Ce.post(`${window.location.origin}/api/basket/fast-order-confirm`,t);e(o.data.data)}catch(n){console.log(n)}})()}};const Ee={cart:null},ke={getCount:e=>{const t=e.cart;let n,o=0;return t&&t.items.length&&(n=e.cart.items.map(e=>e.quantity),o=n.reduce((e,t)=>e+t)),o}},xe={setCart(e,t){e.cart=t}},Oe={setCart(e){let t=e.commit;Le.getCart(e=>{t("setCart",e)})}};var qe={state:Ee,getters:ke,mutations:xe,actions:Oe};const Se={},Ae={},$e={},De={addCart(e,t){let n=e.commit;return new Promise((e,o)=>{Le.addToCart((t,a)=>{n("setCart",t),a?e(a):o(t)},t)})}};var je={state:Se,getters:Ae,mutations:$e,actions:De};const Me={dataArray:[],name:"",vendor:"",phone:"",done:!1,orderId:"",userName:"",userPhone:""},Te={},Ve={setArray(e,t){e.dataArray=t},setItemName(e,t){e.name=t.name},setVendor(e,t){e.vendor=t.article},setPhone(e,t){e.phone=t.phone},checkDone(e,t){e.done=t},setId(e,t){e.orderId=t.order_id},setUserName(e,t){e.userName=t},setUserPhone(e,t){e.userPhone=t}},He={setFastOrder(e,t){let n=e.commit;const o=Object(h["a"])(t,3),a=o[0],r=o[1],c=o[2];n("setArray",t),n("checkDone",!1),Le.getFastOrder(e=>{n("setItemName",e),n("setVendor",e),n("setPhone",e)},{product_id:a,price_id:c,city_id:r,nohtml:"1"})},fastOrder(e){let t=e.commit,n=e.state;const o=Object(h["a"])(n.dataArray,3),a=o[0],r=o[1],c=o[2];Le.fastOrder(e=>{t("setId",e),t("checkDone",!0)},{product_id:a,price_id:c,city_id:r,fast_order_name:n.userName,fast_order_phone:n.userPhone,nohtml:"1"})},userName(e,t){let n=e.commit;n("setUserName",t)},userPhone(e,t){let n=e.commit;n("setUserPhone",t)}};var Fe={state:Me,getters:Te,mutations:Ve,actions:He};o["a"].use(s["a"]);const Ie=!1;var Ne=new s["a"].Store({modules:{cart:qe,addButton:je,fastOrder:Fe},strict:Ie});o["a"].config.productionTip=!1,document.querySelector("location-modal")&&new o["a"]({store:Ne,components:{"location-modal":Y}}).$mount("location-modal"),document.querySelector("product-cart")&&new o["a"]({store:Ne,components:{"product-cart":m}}).$mount("product-cart"),document.querySelector("callback-modal")&&new o["a"]({store:Ne,components:{"callback-modal":he}}).$mount("callback-modal");const Pe=[...document.querySelectorAll(".category-button, .product-form__to-cart, .category-list__item-button")];Pe.forEach(e=>{const t=e.dataset.add2basket.split(","),n=t.map(e=>e.trim());new o["a"]({store:Ne,render:e=>e(b,{props:{dataArray:n}})}).$mount(`#${e.id}`)});const Be=[...document.querySelectorAll("seo-block")];Be.forEach(e=>{new o["a"]({store:Ne,components:{"seo-block":K}}).$mount(`#${e.id}`)});const Re=[...document.querySelectorAll("seo-block-top")];Re.forEach(e=>{new o["a"]({store:Ne,components:{"seo-block-top":oe}}).$mount(`#${e.id}`)});const Ue=[...document.querySelectorAll("fast-order")];Ue.forEach(e=>{new o["a"]({store:Ne,components:{"fast-order":le}}).$mount(`#${e.id}`)})},"9fce":function(e,t,n){"use strict";var o=n("12c4"),a=n.n(o);a.a},aa4d:function(e,t,n){},bf4a:function(e,t,n){"use strict";var o=n("5716"),a=n.n(o);a.a},bfd7:function(e,t){const n=document.querySelector(".header__top"),o=document.querySelector(".header__middle");document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",e=>{const t=n.offsetHeight+o.offsetHeight,a=window.scrollY;a>=t&&!window.matchMedia("(max-width: 768px)").matches?n.classList.add("header__top_scroll"):n.classList.remove("header__top_scroll")})})},c4fe:function(e,t,n){"use strict";var o=n("02b9"),a=n.n(o);a.a},e2fe:function(e,t,n){},ef82:function(e,t,n){},f2ef:function(e,t,n){},f416:function(e,t){document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".scroll-top");document.addEventListener("scroll",t=>{const n=window.innerHeight,o=window.pageYOffset;o>n?e.classList.add("scroll-top_visible"):e.classList.remove("scroll-top_visible")}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})}}]);
//# sourceMappingURL=chunk-common.9bee2693.js.map