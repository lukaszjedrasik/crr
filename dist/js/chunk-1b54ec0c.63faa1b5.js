(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b54ec0c"],{"454f":function(t,e,s){s("46a7");var a=s("584a").Object;t.exports=function(t,e,s){return a.defineProperty(t,e,s)}},"46a7":function(t,e,s){var a=s("63b6");a(a.S+a.F*!s("8e60"),"Object",{defineProperty:s("d9f6").f})},"85f2":function(t,e,s){t.exports=s("454f")},"97c3":function(t,e,s){"use strict";var a=s("b4a4"),n=s.n(a);n.a},a21f:function(t,e,s){var a=s("584a"),n=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},ac6a:function(t,e,s){for(var a=s("cadf"),n=s("0d58"),i=s("2aba"),r=s("7726"),o=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=n(h),m=0;m<g.length;m++){var v,p=g[m],b=h[p],y=r[p],L=y&&y.prototype;if(L&&(L[u]||o(L,u,d),L[f]||o(L,f,p),c[p]=d,b))for(v in a)L[v]||i(L,v,a[v],!0)}},b4a4:function(t,e,s){},e6b0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",[s("v-flex",[s("h4",{staticClass:"text-xs-center display-1 red--text text--darken-3 pt-3 font-weight-thin"},[t._v(t._s(this.$store.state.auth.name))])])],1),s("v-layout",{staticClass:"mt-3"},[s("v-flex",[s("v-card",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{always:false, smooth:true}"}],staticClass:"py-3",attrs:{height:"400"}},t._l(t.messages,function(e,a){return s("ul",{key:a},[s("li",{staticClass:"red--text text--darken-3 subheading mb-1"},[t._v("\n            "+t._s(e.name)+"\n            "),s("span",{staticClass:"body-1 font-weight-light grey--text text--darken-2 ml-3"},[t._v(t._s(e.message))])]),s("li",{staticClass:"subheading dark--text caption font-weight-thin mb-1"},[t._v(t._s(e.createdAt))]),s("v-divider",{staticClass:"py-2"})],1)}),0)],1)],1),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("v-flex",[s("v-card",{staticClass:"py-2"},[s("v-layout",{attrs:{"align-center":""}},[s("v-text-field",{staticClass:"mx-5 font-weight-light body-2",attrs:{placeholder:"message",color:"red darken-3","prepend-inner-icon":"send"},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),s("v-btn",{attrs:{color:"red darken-3",flat:""},on:{click:t.send}},[t._v("Wyślij")])],1),s("v-layout",{attrs:{"justify-center":""}},[t.feedback?s("p",{staticClass:"red--text text--accent-3 font-weight-light subheading"},[t._v("Wiadomość nie może być pusta")]):t._e()])],1)],1)],1)],1)},n=[],i=s("85f2"),r=s.n(i);function o(t,e,s){return e in t?r()(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s("ac6a");var c=s("f499"),l=s.n(c),u=(s("c1df"),s("eec8"),o({name:"Chat",data:function(){return{messages:[],message:"",token:localStorage.getItem("token"),ws:null,feedback:!1}},created:function(){},methods:{send:function(){this.ws.send(l()({message:this.message})),this.message=""}}},"created",function(){var t=this;fetch("http://localhost:8000/api/chat/history",{headers:{Authorization:"Basic "+this.token}}).then(function(t){return t.json()}).then(function(e){var s=t;e.messages.forEach(function(t){var e=new Date(t.createdAt);t.createdAt=e.getHours()+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()),s.messages.push(t)})}),this.ws=new WebSocket("ws://localhost:8000/api/chat/live?token="+this.token),this.ws.addEventListener("message",function(e){var s=e.data,a=JSON.parse(s),n=new Date(a.createdAt);a.createdAt=n.getHours()+":"+(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes()),t.messages.push(a)})})),f=u,d=(s("97c3"),s("2877")),h=Object(d["a"])(f,a,n,!1,null,"305bb07b",null);e["default"]=h.exports},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-1b54ec0c.63faa1b5.js.map