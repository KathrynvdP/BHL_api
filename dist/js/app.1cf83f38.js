(function(e){function t(t){for(var o,u,i=t[0],a=t[1],l=t[2],b=0,s=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&s.push(c[u][0]),c[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(s.length)s.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c8871":"934aac91","chunk-2d0d3c84":"e4999e79","chunk-2d0d6d65":"7f57e116","chunk-2d0d78b2":"8e02befe","chunk-2d0e905d":"6fb5ebdd","chunk-2d0e9381":"4cd78f01","chunk-2d2080c7":"875c546f","chunk-2d21d677":"5f2d67bb","chunk-2d222064":"b1bd5242"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=c[e]=[t,o]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=u(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[e]=void 0}};var b=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var b=0;b<a.length;b++)t(a[b]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,r,u){var i=Object(o["x"])("ion-router-outlet"),a=Object(o["x"])("ion-app");return Object(o["r"])(),Object(o["e"])(a,null,{default:Object(o["C"])((function(){return[Object(o["h"])(i)]})),_:1})}var r=n("d867"),u=Object(o["i"])({name:"App",components:{IonApp:r["a"],IonRouterOutlet:r["n"]}}),i=n("d959"),a=n.n(i);const l=a()(u,[["render",c]]);var b=l,f=(n("ac1f"),n("841c"),n("9abf")),s=n.n(f),O=Object(o["h"])("img",{src:s.a},null,-1);function j(e,t,n,c,r,u){var i=Object(o["x"])("ion-thumbnail"),a=Object(o["x"])("ion-title"),l=Object(o["x"])("ion-toolbar"),b=Object(o["x"])("ion-header"),f=Object(o["x"])("ion-content"),s=Object(o["x"])("ion-icon"),j=Object(o["x"])("ion-button"),d=Object(o["x"])("ion-col"),h=Object(o["x"])("ion-row"),p=Object(o["x"])("ion-footer"),v=Object(o["x"])("ion-page");return Object(o["r"])(),Object(o["e"])(v,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,null,{default:Object(o["C"])((function(){return[Object(o["h"])(l,null,{default:Object(o["C"])((function(){return[Object(o["h"])(i,null,{default:Object(o["C"])((function(){return[O]})),_:1}),Object(o["h"])(a,null,{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["z"])(n.pageTitle),1)]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(f,null,{default:Object(o["C"])((function(){return[Object(o["w"])(e.$slots,"default")]})),_:3}),Object(o["h"])(p,null,{default:Object(o["C"])((function(){return[Object(o["h"])(l,null,{default:Object(o["C"])((function(){return[Object(o["h"])(h,null,{default:Object(o["C"])((function(){return[Object(o["h"])(d,{class:"ion-text-center"},{default:Object(o["C"])((function(){return[Object(o["h"])(j,{fill:"clear",color:"dark","router-link":"/home"},{default:Object(o["C"])((function(){return[Object(o["h"])(s,{slot:"icon-only",icon:r.home},null,8,["icon"])]})),_:1})]})),_:1}),Object(o["h"])(d,{class:"ion-text-center"},{default:Object(o["C"])((function(){return[Object(o["h"])(j,{fill:"clear",color:"dark","router-link":"/search/1"},{default:Object(o["C"])((function(){return[Object(o["h"])(s,{slot:"icon-only",icon:r.search},null,8,["icon"])]})),_:1})]})),_:1}),Object(o["h"])(d,{class:"ion-text-center"},{default:Object(o["C"])((function(){return[Object(o["h"])(j,{fill:"clear",color:"dark","router-link":"/favourites"},{default:Object(o["C"])((function(){return[Object(o["h"])(s,{slot:"icon-only",icon:r.heart},null,8,["icon"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var d=n("ff79"),h={data:function(){return{home:d["d"],search:d["e"],heart:d["b"]}},props:["pageTitle","pageDefaultBackLink"],components:{IonPage:r["m"],IonHeader:r["g"],IonToolbar:r["t"],IonTitle:r["s"],IonContent:r["e"],IonFooter:r["f"],IonRow:r["o"],IonCol:r["d"],IonIcon:r["h"],IonButton:r["b"],IonThumbnail:r["r"]}};const p=a()(h,[["render",j]]);var v=p,m=n("bec5");function g(e,t,n,c,r,u){var i=Object(o["x"])("collection-list"),a=Object(o["x"])("main-layout"),l=Object(o["x"])("ion-page");return Object(o["r"])(),Object(o["e"])(l,null,{default:Object(o["C"])((function(){return[Object(o["h"])(a,{"page-title":"All Collections"},{default:Object(o["C"])((function(){return[Object(o["h"])(i,{collections:r.collections},null,8,["collections"])]})),_:1})]})),_:1})}n("96cf");var k=n("1da1");function C(e,t,n,c,r,u){var i=Object(o["x"])("collection-item"),a=Object(o["x"])("ion-list");return Object(o["r"])(),Object(o["e"])(a,null,{default:Object(o["C"])((function(){return[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(n.collections,(function(e){return Object(o["r"])(),Object(o["e"])(i,{key:e.CollectionID,collection:e},null,8,["collection"])})),128))]})),_:1})}function y(e,t,n,c,r,u){var i=Object(o["x"])("ion-label"),a=Object(o["x"])("ion-icon"),l=Object(o["x"])("ion-button"),b=Object(o["x"])("ion-item"),f=Object(o["x"])("ion-card");return Object(o["r"])(),Object(o["e"])(f,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,{lines:"none"},{default:Object(o["C"])((function(){return[Object(o["h"])(i,null,{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["z"])(n.collection.CollectionName),1)]})),_:1}),Object(o["h"])(l,{fill:"clear",color:"primary",onClick:t[1]||(t[1]=function(){return c.router.push("/search/".concat(n.collection.CollectionID))})},{default:Object(o["C"])((function(){return[Object(o["h"])(a,{slot:"icon-only",icon:r.eye},null,8,["icon"])]})),_:1})]})),_:1})]})),_:1})}var x=n("6c02"),I={data:function(){return{eye:d["a"]}},props:["collection"],components:{IonItem:r["j"],IonLabel:r["k"],IonButton:r["b"],IonCard:r["c"],IonIcon:r["h"]},setup:function(){var e=Object(x["i"])();return{router:e}}};const _=a()(I,[["render",y]]);var w=_,A={props:["collections"],components:{IonList:r["l"],CollectionItem:w}};const F=a()(A,[["render",C]]);var L=F,P=(n("99af"),n("d3b7"),n("bc3a")),T="https://www.biodiversitylibrary.org/api3",D="12b24e71-9887-48b7-924d-9abb31a38b9f";function R(){return new Promise((function(e){var t={method:"get",url:"".concat(T,"?op=GetCollections&apikey=").concat(D,"&format=json"),headers:{}};P(t).then((function(t){e(t.data.Result)})).catch((function(e){console.log(e)}))}))}function S(e,t){return new Promise((function(n){var o={method:"get",url:"".concat(T,"?op=PublicationSearchAdvanced&").concat(e,"=").concat(t,"&apikey=").concat(D,"&format=json"),headers:{}};P(o).then((function(e){n(e.data.Result)})).catch((function(e){console.log(e)}))}))}var E={components:{CollectionList:L,IonPage:r["m"]},data:function(){return{search:d["e"],collections:[]}},mounted:function(){this.getAllColls()},methods:{getAllColls:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:n=t.sent,e.collections=n;case 4:case"end":return t.stop()}}),t)})))()}}};const B=a()(E,[["render",g]]);var M=B,N=Object(o["g"])("Search Category..."),$=Object(o["g"])("Collection ID"),U=Object(o["g"])("Author"),V=Object(o["g"])("Title"),z=Object(o["g"])("Search Term...");function G(e,t,n,c,r,u){var i=Object(o["x"])("ion-label"),a=Object(o["x"])("ion-select-option"),l=Object(o["x"])("ion-select"),b=Object(o["x"])("ion-item"),f=Object(o["x"])("ion-col"),s=Object(o["x"])("ion-input"),O=Object(o["x"])("ion-row"),j=Object(o["x"])("book-list"),d=Object(o["x"])("main-layout");return Object(o["r"])(),Object(o["e"])(d,{"page-title":"Search..."},{default:Object(o["C"])((function(){return[Object(o["h"])(O,null,{default:Object(o["C"])((function(){return[Object(o["h"])(f,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,null,{default:Object(o["C"])((function(){return[Object(o["h"])(i,null,{default:Object(o["C"])((function(){return[N]})),_:1}),Object(o["h"])(l,{modelValue:r.category,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.category=e}),mode:"ios",onIonChange:t[2]||(t[2]=function(e){r.category=e.detail.value,r.term="",u.getAll(r.category,"a")})},{default:Object(o["C"])((function(){return[Object(o["h"])(a,{value:"collection"},{default:Object(o["C"])((function(){return[$]})),_:1}),Object(o["h"])(a,{value:"authorname"},{default:Object(o["C"])((function(){return[U]})),_:1}),Object(o["h"])(a,{value:"title"},{default:Object(o["C"])((function(){return[V]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(o["h"])(f,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,null,{default:Object(o["C"])((function(){return[Object(o["h"])(i,null,{default:Object(o["C"])((function(){return[z]})),_:1}),Object(o["h"])(s,{modelValue:r.term,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.term=e}),onIonChange:t[4]||(t[4]=function(e){r.term=e.detail.value,u.getAll(r.category,r.term)})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(o["h"])(j,{books:r.books},null,8,["books"])]})),_:1})}n("4de4"),n("c740"),n("4160"),n("159b");function q(e,t,n,c,r,u){var i=Object(o["x"])("book-item"),a=Object(o["x"])("ion-list");return Object(o["r"])(),Object(o["e"])(a,null,{default:Object(o["C"])((function(){return[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(n.books,(function(e){return Object(o["r"])(),Object(o["e"])(i,{key:e.key,book:e},null,8,["book"])})),128))]})),_:1})}var J=Object(o["h"])("br",null,null,-1),H={key:0};function Y(e,t,n,c,r,u){var i=Object(o["x"])("ion-label"),a=Object(o["x"])("ion-icon"),l=Object(o["x"])("ion-button"),b=Object(o["x"])("ion-item"),f=Object(o["x"])("ion-card");return Object(o["r"])(),Object(o["e"])(f,null,{default:Object(o["C"])((function(){return[Object(o["h"])(b,{lines:"none"},{default:Object(o["C"])((function(){return[Object(o["h"])(i,{class:r.view?"seeLabel":""},{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["z"])(n.book.Title),1)]})),_:1},8,["class"]),J,Object(o["h"])(l,{fill:"clear",color:"primary",onClick:t[1]||(t[1]=function(e){return r.view=!r.view})},{default:Object(o["C"])((function(){return[Object(o["h"])(a,{slot:"icon-only",icon:r.eye},null,8,["icon"])]})),_:1}),n.book.favourite?Object(o["f"])("",!0):(Object(o["r"])(),Object(o["e"])(l,{key:0,fill:"clear",color:"primary",onClick:t[2]||(t[2]=function(e){return u.addFav(n.book)})},{default:Object(o["C"])((function(){return[Object(o["h"])(a,{slot:"icon-only",icon:r.heartOutline},null,8,["icon"])]})),_:1})),n.book.favourite?(Object(o["r"])(),Object(o["e"])(l,{key:1,fill:"clear",color:"primary",onClick:t[3]||(t[3]=function(e){return u.removeFav(n.book)})},{default:Object(o["C"])((function(){return[Object(o["h"])(a,{slot:"icon-only",icon:r.heart},null,8,["icon"])]})),_:1})):Object(o["f"])("",!0)]})),_:1}),r.view?(Object(o["r"])(),Object(o["e"])("div",H,[Object(o["h"])(b,{lines:"none"},{default:Object(o["C"])((function(){return[Object(o["h"])(i,{class:"seeLabel"},{default:Object(o["C"])((function(){return[Object(o["g"])("Genre: "+Object(o["z"])(n.book.Genre),1)]})),_:1})]})),_:1}),(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(n.book.Authors,(function(e){return Object(o["r"])(),Object(o["e"])(b,{key:e.Name},{default:Object(o["C"])((function(){return[Object(o["h"])(i,{class:"seeLabel"},{default:Object(o["C"])((function(){return[Object(o["g"])("Author: "+Object(o["z"])(e.Name),1)]})),_:2},1024)]})),_:2},1024)})),128))])):Object(o["f"])("",!0)]})),_:1})}n("5319");var K={data:function(){return{eye:d["a"],heartOutline:d["c"],heart:d["b"],view:!1}},props:["book"],components:{IonItem:r["j"],IonLabel:r["k"],IonButton:r["b"],IonCard:r["c"],IonIcon:r["h"]},methods:{addFav:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.dispatch("addFave",e),t.$router.replace("/favourites");case 2:case"end":return n.stop()}}),n)})))()},removeFav:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$store.dispatch("removeFave",e),e.favourite=!1;case 2:case"end":return n.stop()}}),n)})))()}}};n("6144");const Q=a()(K,[["render",Y]]);var W=Q,X={props:["books"],components:{IonList:r["l"],BookItem:W}};const Z=a()(X,[["render",q]]);var ee=Z,te={components:{IonRow:r["o"],IonCol:r["d"],IonItem:r["j"],IonLabel:r["k"],IonSelect:r["p"],IonSelectOption:r["q"],IonInput:r["i"],BookList:ee},data:function(){return{category:"",term:"",books:[]}},mounted:function(){var e=Object(x["h"])(),t=e.params.id;this.category="collection",this.term=t,this.getAll("collection",t)},computed:{favourites:function(){return this.$store.getters.favourites}},methods:{getAll:function(e,t){var n=this;return Object(k["a"])(regeneratorRuntime.mark((function o(){var c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n.loading=!0,o.next=3,S(e,t);case 3:c=o.sent,n.books=c,n.favourites.length>0&&n.favourites.forEach((function(e){var t=n.books.filter((function(t){return t.ItemID===e.ItemID}))[0];if(t){var o=n.books.findIndex((function(e){return e.ItemID==t.ItemID}));n.books[o].favourite=!0}})),n.loading=!1;case 7:case"end":return o.stop()}}),o)})))()}}};const ne=a()(te,[["render",G]]);var oe=ne,ce={key:1,class:"header"};function re(e,t,n,c,r,u){var i=Object(o["x"])("book-list"),a=Object(o["x"])("main-layout");return Object(o["r"])(),Object(o["e"])(a,{"page-title":"My Favourites"},{default:Object(o["C"])((function(){return[u.books.length>0?(Object(o["r"])(),Object(o["e"])(i,{key:0,books:u.books},null,8,["books"])):Object(o["f"])("",!0),0===u.books.length?(Object(o["r"])(),Object(o["e"])("h2",ce,"You have no favourites")):Object(o["f"])("",!0)]})),_:1})}var ue={components:{BookList:ee},computed:{books:function(){return console.log(this.$store.getters.favourites),this.$store.getters.favourites}}};n("6a3a");const ie=a()(ue,[["render",re]]);var ae=ie,le=[{path:"/",redirect:"/home"},{path:"/home",component:M},{path:"/search/:id",component:oe},{path:"/favourites",component:ae}],be=Object(m["a"])({history:Object(m["b"])("/"),routes:le}),fe=be,se=(n("a434"),n("5502")),Oe=Object(se["a"])({state:function(){return{favourites:[]}},mutations:{addFave:function(e,t){var n={ItemID:t.ItemID,Title:t.Title,Genre:t.Genre,Authors:t.Authors,favourite:!0};e.favourites.push(n)},removeFave:function(e,t){e.favourites.splice(t)}},actions:{addFave:function(e,t){e.commit("addFave",t)},removeFave:function(e,t){e.commit("removeFave",t)}},getters:{favourites:function(e){return e.favourites}}}),je=Oe,de=(n("4b63"),n("4041"),n("51ef"),n("a237"),n("e09e"),n("46e5"),n("98b6"),n("2d22"),n("66b0"),n("ce1f"),n("8c28"),n("8788"),Object(o["d"])(b).use(r["u"]).use(fe).use(je));de.component("main-layout",v),fe.isReady().then((function(){de.mount("#app")}))},6144:function(e,t,n){"use strict";n("f9d8")},"6a3a":function(e,t,n){"use strict";n("f286")},"82bb":function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="82bb"},8788:function(e,t,n){},"8c28":function(e,t,n){},"9abf":function(e,t,n){e.exports=n.p+"img/logo.e960eab1.png"},bc66:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="bc66"},f286:function(e,t,n){},f9d8:function(e,t,n){}});
//# sourceMappingURL=app.1cf83f38.js.map