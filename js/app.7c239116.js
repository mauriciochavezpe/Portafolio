(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5359b44c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"7984a488"}[e]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],m.parentNode.removeChild(m),a(r)},m.href=o;var A=document.getElementsByTagName("head")[0];A.appendChild(m)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="Portafolio/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"101f":function(e,t,a){},"14f2":function(e,t,a){},2032:function(e,t){e.exports="data:image/png;base64,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4Uggor8S84+5pef7qbPI67eeW3TFSsGrhbAkkOL44fY8KadmMplsr7ypW10fY4rO22n/2cxD9/6tbO/UACtLYSt/FsKTgNh8WYCE8PNjARJiyIcFSIgj9xYgIZZcW4CEeHJrARJiyqUFSIgrdxYgIbZcWYCE+HJjARJizIUFSIgz+xYgIdZsW4CEeLNrARJizqYFSIg7exYgIfasWZAECXHk3gIkxJJrC5AQT24tQEJMubQACXHlzgIkxJYrC5AQX24sQEKMubAACXFm3wIkxJptC5AQb3YtQELM2bQACXFnzwIkxJ4tC5AQf3YsQEIK2bAACWk03AIkpNJQC5CQTsMsQEJKDbEACWllbgESUsvUAiSkl5kFSEgxEwuQkGb6FiAh1XQtQEK66Vng3SEdElJJywInSEinYRYgIaWGWICEtDK3AAmpZWoBEtLLzAIkpJiJBUhIM30LkJBquhYgId30LEBCyulYgIS0U7cACamnagES0k/NAiTkkIoFSMijfguQkEt9FiAhn+QWICGnZBY+ICGrJBYkQUKKmViAhDTTtwAJqaZrARLSTc8CJKScjgVISDt1C5CQeqoWICH91CxAQg6pWICEPOq3AAm51GcBEvJJbgESckpmARLySmwBEnJLZAES8otvARJyjGcBEvKsawEScq1tARLyjbUACTlHW4CEvHtagITcqy1AAiotQAIqLUACIoUFSEBlC6wHhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQFSHkPzgOhzdmmEpuAAAAAElFTkSuQmCC"},2241:function(e,t){e.exports="data:image/png;base64,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"},2636:function(e,t,a){"use strict";var n=a("e324"),i=a.n(n);i.a},"27db":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Servicios"}},[e._m(0),a("div",{staticClass:"dgrid"},e._l(e.Articulos,(function(e){return a("articulos",{key:e.id,staticClass:"dgrid-cards",attrs:{articulo:e}})})),1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title--portafolio"},[a("h2",[e._v("Portafolio 💻")])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-card"},[a("div",{staticClass:"box-card-inner"},[a("div",{staticClass:"box-card-front bg-img-card"},[a("img",{attrs:{src:e.articulo.img,alt:"perucambio"}})]),a("div",{staticClass:"box-card-back"},[a("div",[a("h2",[e._v(e._s(e.articulo.titulo))])]),a("p",{staticClass:"card-text"},[e._v("Aplicación web para compra y venta de dolares.")])])])])},r=[],s={props:["articulo"]},c=s,l=(a("e2d0"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,"8e014e58",null),d=u.exports,m=a("8480"),A=a.n(m),p={components:{articulos:d},data:function(){return{Articulos:[{img:A.a,id:"1",titulo:"PERUCAMBIO",descripcion:"PERUCAMBIO"},{img:"https://cdn.cai.tools.sap/website/home/cai-cover-img.png",id:"2",titulo:"SAP CAI & Dialog Flow",descripcion:"PERUCAMBIO"},{img:"https://www.paradavisual.com/wp-content/uploads/2020/09/Que-es-y-para-que-sirve-el-RPA-1.jpg",titulo:"RPA",id:"3",descripcion:"PERUCAMBIO"},{img:A.a,titulo:"OWNER",id:"4",descripcion:"PERUCAMBIO"}]}}},f=p,v=(a("a6d2"),Object(l["a"])(f,n,i,!1,null,"30889999",null));t["a"]=v.exports},"3dfb":function(e,t,a){},4453:function(e,t,a){"use strict";var n=a("14f2"),i=a.n(n);i.a},"4f9c":function(e,t,a){"use strict";var n=a("101f"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),a("Home")],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light menuFixed"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("TEST PE")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav d-flex ml-auto",attrs:{id:"list-menu"},on:{click:function(t){return e.agregarActive()}}},[e._m(1),e._m(2),e._m(3)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{id:"btnBurger",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#Home"}},[e._v(" Home ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#Servicios"}},[e._v(" Servicios ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#Contacto"}},[e._v(" Contacto ")])])}],c=(a("7db0"),a("ac1f"),a("1276"),{methods:{agregarActive:function(){document.getElementById("list-menu"),document.querySelector("ul").getElementsByTagName("a");var e=location.hash.split("#")[1];""!=e&&$("li").on("click",(function(e){$(this).parent().find("li.active").removeClass("active"),$(this).addClass("active"),screen.availWidth<600&&document.getElementById("btnBurger").getAttribute("aria-expanded")&&(document.getElementById("btnBurger").setAttribute("aria-expanded",!1),document.getElementById("btnBurger").classList.add("collapsed"),document.getElementById("navbarSupportedContent").classList.remove("show"))}))}}}),l=c,u=(a("97a5"),a("2877")),d=Object(u["a"])(l,r,s,!1,null,"cd95b7d8",null),m=d.exports,A=a("bb51"),p={name:"App",components:{Nav:m,Home:A["default"]}},f=p,v=(a("034f"),Object(u["a"])(f,i,o,!1,null,null,null)),g=v.exports,C=(a("d3b7"),a("8c4f"));n["a"].use(C["a"]);var h=[{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/service",name:"Service",component:function(){return a.e("about").then(a.bind(null,"e2f8"))}},{path:"/",name:"Home",component:function(){return a.e("about").then(a.bind(null,"bb51"))}}],b=new C["a"]({mode:"history",base:"Portafolio/",routes:h}),E=b,y=a("9483");Object(y["a"])("".concat("Portafolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=a("2f62");n["a"].use(S["a"]);var w=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:E,store:w,render:function(e){return e(g)}}).$mount("#app")},6936:function(e,t,a){"use strict";var n=a("a3dd"),i=a.n(n);i.a},"6b11":function(e,t,a){e.exports=a.p+"img/img--bg-contact.890296e2.svg"},"7ed7":function(e,t,a){},8106:function(e,t,a){},8480:function(e,t,a){e.exports=a.p+"img/PERUCAMBIO.2703b4b1.png"},"85ec":function(e,t,a){},"97a5":function(e,t,a){"use strict";var n=a("7ed7"),i=a.n(n);i.a},"9c6b":function(e,t,a){},"9ea1":function(e,t,a){"use strict";var n=a("3dfb"),i=a.n(n);i.a},"9f3b":function(e,t){e.exports="data:image/png;base64,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"},"9f40":function(e,t,a){},"9fa0":function(e,t,a){"use strict";var n=a("9c6b"),i=a.n(n);i.a},a254:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAiCAYAAACqeLBIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0U4QjMyMzhCOEMxMUU4QTAxOEU0M0QyOTlFODgwNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0U4QjMyNDhCOEMxMUU4QTAxOEU0M0QyOTlFODgwNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RThCMzIxOEI4QzExRThBMDE4RTQzRDI5OUU4ODA1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RThCMzIyOEI4QzExRThBMDE4RTQzRDI5OUU4ODA1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r6Bf3gAAClxJREFUeNrsXAlwVeUV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"},a3dd:function(e,t,a){},a6d2:function(e,t,a){"use strict";var n=a("8106"),i=a.n(n);i.a},ae91:function(e,t,a){},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",attrs:{id:"Home"}},[a("Header"),a("div",{staticClass:"container"},[a("Section"),a("Portafolio")],1),a("div",{staticClass:"bg-contactenos"},[a("div",{staticClass:"container",attrs:{id:"Contacto"}},[a("Contactenos")],1)]),a("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleSlidesOnly","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner tamano"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://image.freepik.com/vector-gratis/diseno-moderno-fondo-negro-3d_53876-89865.jpg",alt:"..."}})]),a("div",{staticClass:"caja-typing "},[a("div",{staticClass:"maquina-escribir"},[a("h1",{staticClass:"descrip",attrs:{id:"text-descriptivo"}},[a("span")])])])])])}],s=(a("fb6a"),a("ac1f"),a("1276"),{data:function(){return{info:"Hola soy Mauricio Chávez, Front-end developer."}},methods:{inter:function(){var e=0,t=this.info,a=this,n=t.split(""),i=setInterval(function(){if(" "===n[e]?(document.getElementById("text-descriptivo").innerText+=" ".concat(n[e+1]),e+=2):(document.getElementById("text-descriptivo").innerText+=n[e],e++),e===n.length){clearInterval(i);var t=setInterval(function(){var n=a.info.slice(0,e);a.info,document.getElementById("text-descriptivo").innerText=n,0===e&&(clearInterval(t),this.inter()),e--}.bind(this),250)}}.bind(this),250)},maquinaEscribir:function(){this.inter()}},created:function(){this.maquinaEscribir()}}),c=s,l=(a("9ea1"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,"e9029dd6",null),d=u.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("informacion"),a("habilidades")],1)},A=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._m(1),a("experiencia"),a("educacion")],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Acerca de mí")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"description__owner"},[a("p",[e._v("Soy Desarrollador, Técnico en desarrollo de software, actualmente trabajo en consultoria relacionada al ecosistema SAP y tecnologias emergentes (Chatbot, RPA). Continuo mis estudios de Ingenieria en la Universidad UPC, me gusta el deporte tanto como correr, fútbol y natación entre otros. Tengo 21 años. Actualmente vivo en Lima - Perú. ")])])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[e._m(0),e._l(e.info_experiencias,(function(t){return a("div",{key:t.name_company,staticClass:"dgrid"},[a("div",{staticClass:"experience_place"},[a("div",[a("p",[a("strong",[e._v(e._s(t.name_company))])])]),a("div",[a("p",[e._v(e._s(t.fecha_ingreso+" - "+t.fecha_salida))])])]),a("div",{staticClass:"experience__img "},[a("div",{staticClass:"img-placeholder"},[a("img",{attrs:{lazy:"loaded",src:t.logo_company}})])]),a("div",{staticClass:"experience__panel"},[a("div",{staticClass:"experience__position"},[a("strong",[a("span",[e._v(e._s(t.cargo_company))])])]),a("div",{staticClass:"description__work"},[a("p",[e._v(e._s(t.descripcion_trabajo))])])])])}))],2)])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title_Exp_lab"},[a("h2",[e._v("Experiencia Laboral")])])}],C=a("2032"),h=a.n(C),b=a("a254"),E=a.n(b),y=a("f25b"),S=a.n(y),w={data:function(){return{info_experiencias:[{name_company:"CSTI",fecha_ingreso:"Jun'19",fecha_salida:"ACT",logo_company:h.a,cargo_company:"Developer SCP",descripcion_trabajo:"Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."},{name_company:"Intelecta",fecha_ingreso:"Ene'19",fecha_salida:"Jun'19",logo_company:E.a,cargo_company:"Trainee Developer SCP",descripcion_trabajo:"Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."},{name_company:"SistemasUNI",fecha_ingreso:"Jun'18",fecha_salida:"Dic'18",logo_company:S.a,cargo_company:"Programador",descripcion_trabajo:"Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP,fue un reto importante para mi, poder ayudar y aprender al mismo tiempo."}]}}},I=w,J=(a("6936"),Object(l["a"])(I,v,g,!1,null,"13b84ec3",null)),k=J.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",[e._m(0),e._l(e.info_educaciones,(function(t){return a("div",{key:t.name_school,staticClass:"dgrid"},[a("div",{staticClass:"experience_place"},[a("div",[a("p",[a("strong",[e._v(e._s(t.name_school+" - "+t.name_country))])])]),a("div",[a("p",[e._v(" "+e._s(t.fecha_inicio+" - "+t.fecha_fin)+" ")])])]),a("div",{staticClass:"experience__img"},[a("div",{staticClass:"img-placeholder"},[a("img",{attrs:{lazy:"loaded",src:t.logo_school}})])]),a("div",{staticClass:"experience__panel"},[a("div",{staticClass:"experience__position"},[a("strong",[a("span",[e._v(e._s(t.carrer_school))])])]),a("div",{staticClass:"description__work"},[a("p",[e._v(e._s(t.descripcion_carrer))])])])])}))],2)])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Educación")])])}],F=a("2241"),j=a.n(F),P=a("9f3b"),Q=a.n(P),U={data:function(){return{info_educaciones:[{name_school:"UPC",name_country:"Perú",fecha_inicio:"2016",fecha_fin:"2018",logo_school:j.a,carrer_school:"Ingenieria de Sistemas",descripcion_carrer:"Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP, fue un reto importante para mi, poder ayudar y aprender al mismo tiempo. "},{name_school:"SENATI",name_country:"Perú",fecha_inicio:"2019",fecha_fin:"2024",logo_school:Q.a,carrer_school:"Desarrollo de software",descripcion_carrer:"Trabajar para CSTI, me ayuda reforzar parte de los conocimientos teoricos y las bases que adquieres cuando empiesa en el mundo SAP, fue un reto importante para mi, poder ayudar y aprender al mismo tiempo. "}]}}},L=U,T=(a("4453"),Object(l["a"])(L,x,B,!1,null,"36c9589b",null)),R=T.exports,H={components:{experiencia:k,educacion:R}},M=H,O=(a("ec09"),Object(l["a"])(M,p,f,!1,null,"6802f328",null)),Y=O.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h2",[e._v("Mis Habilidades")])]),a("div",{staticClass:"grilla__Skills"},[a("div",[a("div",{staticClass:"skills__owner"},[a("span",[a("strong",[e._v("Front-end Developer")])])]),a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[e._v("JS vanilla ")]),a("li",{staticClass:"list-group-item"},[e._v("Html 5")]),a("li",{staticClass:"list-group-item"},[e._v("css 3")]),a("li",{staticClass:"list-group-item"},[e._v("mobile First")]),a("li",{staticClass:"list-group-item"},[e._v("Web Responsive")]),a("li",{staticClass:"list-group-item"},[e._v("sapUI5")]),a("li",{staticClass:"list-group-item"},[e._v("VUE.JS")])])])]),a("div",[a("div",{staticClass:"skills__owner"},[a("span",[a("strong",[e._v("Back-end Developer")])])]),a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[e._v("Node Js")]),a("li",{staticClass:"list-group-item"},[e._v("ExpressJS")])])])]),a("div",[a("div",{staticClass:"skills__owner"},[a("span",[a("strong",[e._v("Data Base")])])]),a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[e._v("SQL Server")]),a("li",{staticClass:"list-group-item"},[e._v("PostgreSQL")]),a("li",{staticClass:"list-group-item"},[e._v("Hana DB")])])])]),a("div",[a("div",{staticClass:"skills__owner"},[a("span",[a("strong",[e._v("Ohers tools")])])]),a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[e._v("UIpath")]),a("li",{staticClass:"list-group-item"},[e._v("Chatbot SAP CAI")]),a("li",{staticClass:"list-group-item"},[e._v("Chatbot Dialogflow")])])])])])])}],Z=(a("dae7"),{}),D=Object(l["a"])(Z,_,G,!1,null,"3ef58110",null),N=D.exports,W={components:{informacion:Y,habilidades:N}},X=W,V=Object(l["a"])(X,m,A,!1,null,null,null),q=V.exports,z=a("27db"),K=a("ddfe"),$=a("fd2d"),ee={components:{Header:d,Section:q,Portafolio:z["a"],Contactenos:K["a"],Footer:$["a"]}},te=ee,ae=(a("9fa0"),Object(l["a"])(te,n,i,!1,null,"0c6a0e68",null));t["default"]=ae.exports},dae7:function(e,t,a){"use strict";var n=a("9f40"),i=a.n(n);i.a},ddfe:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"dgrid-contactenos"},[e._m(1),a("div",{staticClass:"contact__form"},[e._m(2),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],staticClass:"form-control",attrs:{id:"correo",type:"email",placeholder:"correo"},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("TextArea",{staticClass:"form-control",attrs:{id:"mensaje",type:"text",cols:"1",rows:"4",placeholder:"asunto"}})],1),a("div",{staticClass:"form-group"},[a("button",{staticClass:"form-control",attrs:{disabled:e.isDisabled},on:{click:e.enviarMensaje}},[e._v(" Enviar ")])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"txt--contactenos"},[a("div",[a("h2",[e._v("¡Contactenos!")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-img"},[n("img",{attrs:{src:a("6b11")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{id:"nombre",type:"text",placeholder:"Nombre"}})])}],o=(a("d3b7"),"https://rest-mail-portafolio.herokuapp.com/api/mail"),r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s={data:function(){return{mail:""}},computed:{isDisabled:function(){return!(this.mail.length>8)}},methods:{enviarMensaje:function(){var e=this;console.log("click"),r.test(document.getElementById("correo").value)&&fetch(o,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:document.getElementById("nombre").value,correo:document.getElementById("correo").value,mensaje:document.getElementById("mensaje").value})}).then((function(e){return e.json()})).then((function(t){alert(t.message),e.clear()})).catch((function(e){return console.log(e.message)}))},clear:function(){document.getElementById("nombre").value="",document.getElementById("correo").value="",document.getElementById("mensaje").value=""}}},c=s,l=(a("2636"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"3141b59c",null);t["a"]=u.exports},e2d0:function(e,t,a){"use strict";var n=a("e92b"),i=a.n(n);i.a},e324:function(e,t,a){},e92b:function(e,t,a){},ec09:function(e,t,a){"use strict";var n=a("ae91"),i=a.n(n);i.a},f25b:function(e,t,a){e.exports=a.p+"img/sistemasuni.ec809063.png"},fd2d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[e._m(0),a("div",{staticClass:"footer__contact"},[a("div",{staticClass:"footer__contact_owner"},[a("p",[e._v("© "+e._s(e.actual)+" - Web programada por "),a("a",{staticClass:"owner",attrs:{href:"#"}},[e._v("Mauricio Chávez")]),e._v(" con Vue.js ")])]),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contenedor footer__main"},[a("div",[a("p",{staticClass:"message__footer_contact"},[e._v("Si llegaste hasta aquí, ya conoces parte de mí, a lo que me dedico, si gustas trabajar conmigo contactame para comunicarnos. ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"redirect__contact"},[a("div",[a("a",{attrs:{target:"_blank",href:"https://github.com/MCHAVEZ-PE"}},[a("i",{staticClass:"fa fa-github"})])]),a("div",[a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/mauricio-chavez-pelayo-28b0ab133/"}},[a("i",{staticClass:"fa fa-linkedin"})])]),a("div",[a("a",{attrs:{target:"_blank",href:"tel:+51944606812"}},[a("i",{staticClass:"fa fa-phone"})])])])}],o={data:function(){return{actual:(new Date).getFullYear()}}},r=o,s=(a("4f9c"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,"694e3a0f",null);t["a"]=c.exports}});
//# sourceMappingURL=app.7c239116.js.map