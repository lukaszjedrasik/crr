(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1b54ec0c":"63faa1b5","chunk-2285f449":"5449827a","chunk-2d0e55a5":"8c7faac5","chunk-318905bc":"d74a6fbf","chunk-7483746a":"6f3c77d4"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-1b54ec0c":1,"chunk-318905bc":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1b54ec0c":"c959b2ca","chunk-2285f449":"31d6cfe0","chunk-2d0e55a5":"31d6cfe0","chunk-318905bc":"eb66c387","chunk-7483746a":"31d6cfe0"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}s[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2079:function(e,t,r){e.exports=r.p+"img/crLogo.bc0ceb01.jpeg"},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("ce5b"),s=r.n(a),o=(r("bf40"),r("1dce")),i=r.n(o),c=r("bc3a"),u=r.n(c),l=r("a7fe"),d=r.n(l),f=r("123d"),m=r.n(f),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},b=[],h=r("eec8"),j={},v=j,k=r("2877"),g=Object(k["a"])(v,p,b,!1,null,null,null),y=g.exports,w=r("8c4f"),x=r("2f62"),E=(r("a481"),r("96cf"),r("3b8d")),_=(r("7f7f"),{namespaced:!0,state:{name:null,token:null,userID:null},mutations:{SET_AUTH:function(e,t){e.name=t.name,e.token=t.token,e.userID=t.userID},CLEAR_AUTH_DATA:function(e){e.name=null,e.token=null,e.userID=null},UPDATE_TOKEN:function(e,t){e.token=t.token,e.userID=t.userID,e.name=t.name}},getters:{isAuth:function(e){return null!=e.token}},actions:{login:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,h["a"].post("api/user/login",r);case 4:a=e.sent,n("SET_AUTH",{name:a.data.user.name,token:a.data.user.token,userID:a.data.user.id}),console.log(a),localStorage.setItem("token",a.data.user.token),localStorage.setItem("userID",a.data.user.id),localStorage.setItem("name",a.data.user.name),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,h["a"].post("/api/user/register",r);case 4:a=e.sent,n("SET_AUTH",{name:a.data.user.name,token:a.data.user.token,userID:a.data.user.id}),console.log(a),localStorage.setItem("token",a.data.user.token),localStorage.setItem("userID",a.data.user.id),localStorage.setItem("name",a.data.user.name),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;localStorage.removeItem("token"),localStorage.removeItem("userID"),localStorage.removeItem("name"),t("CLEAR_AUTH_DATA"),te.replace("/")},autologin:function(e){var t=e.commit,r=localStorage.getItem("token"),n=localStorage.getItem("userID"),a=localStorage.getItem("name");if(r)try{Object(h["a"])("api/user/refresh",{headers:{Authorization:"Basic ".concat(r)}}),t("UPDATE_TOKEN",{token:r,userID:n,name:a})}catch(s){console.log(s)}}}}),S=r("c1df"),$=r.n(S),z={namespaced:!0,state:{ticketExpires:null},mutations:{SET_PASS:function(e,t){e.ticketExpires=t.ticketExpires,e.dialog=!t.dialog}},actions:{buyTicket:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=localStorage.getItem("token"),e.prev=2,e.next=5,h["a"].post("api/ticket/buy",{},{headers:{Authorization:"Basic ".concat(n)}});case 5:a=e.sent,s=a.data,o=$()(s.ticketExpires).format("L"),r("SET_PASS",{ticketExpires:o}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[2,11]])}));function t(t){return e.apply(this,arguments)}return t}()}};n["default"].use(x["a"]);var O=new x["a"].Store({modules:{auth:_,pass:z}}),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[r("v-container",{attrs:{fluid:"",column:""}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-avatar",{staticClass:"mb-5",attrs:{size:"180"}},[r("img",{attrs:{src:e.crLogo,alt:"Cross Fight Radom logo"}})])],1),r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:"","align-self-center":""}},[r("v-tabs",{attrs:{centered:"",dark:"","slider-color":"#C62828"}},[r("v-tab",{attrs:{ripple:""},on:{click:function(t){e.componentName="Login"}}},[e._v("Zaloguj")]),r("v-spacer"),r("v-tab",{attrs:{ripple:""},on:{click:function(t){e.componentName="Register"}}},[e._v("Zarejestruj")])],1),r("transition",{attrs:{mode:"out-in","enter-active-class":"animated flipInY faster"}},[r("keep-alive",[r(e.componentName,{tag:"component"})],1)],1)],1)],1)],1)],1)},I=[],A=r("2079"),L=r.n(A),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"elevation-12",attrs:{dark:""}},[r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{"error-messages":e.emailErrors,"prepend-icon":"mail",name:"email",label:"E-mail",type:"email"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}}),r("v-text-field",{attrs:{"error-messages":e.passwordErrors,"prepend-icon":"lock",name:"password",label:"Hasło",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1)],1),r("p",{staticClass:"text-xs-center red--text text--accent-2 subheading"},[e._v(e._s(e.feedback))]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"#C62828"},on:{click:e.submit}},[e._v("Zaloguj")])],1)],1)},D=[],q=r("b5ae");function R(){var e=[];return this.$v.username.$dirty?(!this.$v.username.required&&e.push("Nazwa użytkownika jest wymagana"),!this.$v.username.minLength&&e.push("Podaj minimum 3 znaki"),e):e}function P(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Adres email jest wymagany"),!this.$v.email.email&&e.push("Adres email nie jest prawidłowy"),e):e}function N(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Hasło jest wymagane"),!this.$v.password.minLength&&e.push("Hasło musi składać się z minimum 6 znaków"),e):e}var U={name:"Login",data:function(){return{email:"",password:"",feedback:"Musisz się zalogować, aby przejść dalej."}},validations:{email:{required:q["required"],email:q["email"]},password:{required:q["required"],minLength:Object(q["minLength"])(6)}},methods:{submit:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=8;break}return e.next=4,this.$store.dispatch("auth/login",{email:this.email,password:this.password,returnSecureToken:!0});case 4:this.$v.$reset(),this.email="",this.password="",this.$store.getters["auth/isAuth"]?this.$router.push("/profile"):this.feedback="Niepoprawne dane";case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},computed:{emailErrors:P,passwordErrors:N}},H=U,M=Object(k["a"])(H,C,D,!1,null,"4051402b",null),B=M.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"elevation-12"},[r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{"error-messages":e.usernameErrors,"prepend-icon":"person_outline",name:"username",label:"Nazwa użytkownika",type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.username,callback:function(t){e.username="string"===typeof t?t.trim():t},expression:"username"}}),r("v-text-field",{attrs:{"error-messages":e.emailErrors,"prepend-icon":"mail",name:"email",label:"E-mail",type:"email"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.email,callback:function(t){e.email="string"===typeof t?t.trim():t},expression:"email"}}),r("v-text-field",{attrs:{"error-messages":e.passwordErrors,"prepend-icon":"lock",name:"password",label:"Hasło",type:"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"#C62828"},on:{click:e.submit}},[e._v("Zarejestruj")])],1)],1)},F=[],G={name:"Register",data:function(){return{username:"",email:"",password:""}},validations:{username:{required:q["required"],minLength:Object(q["minLength"])(3)},email:{required:q["required"],email:q["email"]},password:{required:q["required"],minLength:Object(q["minLength"])(6)}},methods:{submit:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),this.$v.$invalid){e.next=9;break}return e.next=4,this.$store.dispatch("auth/register",{name:this.username,email:this.email,password:this.password,returnSecureToken:!0});case 4:this.$router.push("/profile"),this.$v.$reset(),this.username="",this.email="",this.password="";case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},computed:{emailErrors:P,passwordErrors:N,usernameErrors:R}},J=G,K=Object(k["a"])(J,Z,F,!1,null,"0da17e8d",null),V=K.exports,Y={name:"StartView",components:{Login:B,Register:V},data:function(){return{componentName:"Login",crLogo:L.a}}},Q=Y,W=Object(k["a"])(Q,T,I,!1,null,"11ac2568",null),X=W.exports;O.dispatch("auth/autologin");var ee=function(e,t,r){var n=O.getters["auth/isAuth"];n?r():r("/")};n["default"].use(w["a"]);var te=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"StartView",component:X},{path:"/dashboard",name:"Dashboard",component:function(){return r.e("chunk-318905bc").then(r.bind(null,"0c7c"))},beforeEnter:ee,children:[{path:"/schedule",name:"Schedule",component:function(){return r.e("chunk-2d0e55a5").then(r.bind(null,"93b7"))}},{path:"/profile",name:"Profile",component:function(){return r.e("chunk-2285f449").then(r.bind(null,"66aa"))}},{path:"/pass",name:"Pass",component:function(){return r.e("chunk-7483746a").then(r.bind(null,"4812"))}},{path:"/chat",name:"Chat",component:function(){return r.e("chunk-1b54ec0c").then(r.bind(null,"e6b0"))}}]}]});n["default"].config.productionTip=!1,n["default"].use(s.a),n["default"].use(d.a,u.a),n["default"].use(i.a),n["default"].use(m.a),new n["default"]({router:te,store:O,render:function(e){return e(y)}}).$mount("#app")},eec8:function(e,t,r){"use strict";var n=r("bc3a"),a=r.n(n);t["a"]=a.a.create({baseURL:"http://localhost:8000/"})}});
//# sourceMappingURL=app.a58543b0.js.map