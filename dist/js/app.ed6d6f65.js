(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2079:function(e,t,n){e.exports=n.p+"img/crLogo.bc0ceb01.jpeg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ce5b"),o=n.n(a),i=(n("bf40"),n("bc3a")),l=n.n(i),s=n("a7fe"),c=n.n(s),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},p=[],f={},d=f,v=n("2877"),m=Object(v["a"])(d,u,p,!1,null,null,null),b=m.exports,g=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-tabs",{attrs:{centered:"",dark:"","slider-color":"#C62828"}},[n("v-tab",{attrs:{ripple:""},on:{click:function(t){e.componentName="LoginView"}}},[e._v("Zaloguj")]),n("v-spacer"),n("v-avatar",{staticClass:"pt-1",attrs:{size:"43"}},[n("img",{attrs:{src:e.crLogo,alt:"Cross Fight Radom logo"}})]),n("v-spacer"),n("v-tab",{attrs:{ripple:""},on:{click:function(t){e.componentName="RegisterView"}}},[e._v("Zarejestruj")])],1),n("transition",{attrs:{mode:"out-in","enter-active-class":"animated flipInY faster"}},[n("keep-alive",[n(e.componentName,{tag:"component"})],1)],1)],1)],1)],1)],1)],1)},h=[],y=n("2079"),x=n.n(y),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-12",attrs:{dark:""}},[n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"}}),n("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Hasło",type:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#C62828"}},[e._v("Zaloguj")])],1)],1)},_=[],O={name:"LoginView"},k=O,L=Object(v["a"])(k,j,_,!1,null,"d1ff26ba",null),V=L.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-12"},[n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"}}),n("v-text-field",{attrs:{"prepend-icon":"mail",name:"email",label:"E-mail",type:"email"}}),n("v-text-field",{attrs:{id:"password","prepend-icon":"lock",name:"password",label:"Hasło",type:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#C62828"}},[e._v("Zarejestruj")])],1)],1)},P=[],S={name:"RegisterView"},E=S,$=Object(v["a"])(E,C,P,!1,null,"c93af190",null),H=$.exports,M={name:"HomeView",components:{LoginView:V,RegisterView:H},data:function(){return{componentName:"LoginView",crLogo:x.a}}},N=M,R=Object(v["a"])(N,w,h,!1,null,"1044536e",null),Z=R.exports;r["default"].use(g["a"]);var T=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"HomeView",component:Z}]}),J=n("2f62");r["default"].use(J["a"]);var z=new J["a"].Store({modules:{}});r["default"].config.productionTip=!1,r["default"].use(o.a),r["default"].use(c.a,l.a),new r["default"]({router:T,store:z,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.ed6d6f65.js.map