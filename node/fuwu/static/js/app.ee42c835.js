(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("f8a4"),o=t.n(r);o.a},"0f9a":function(e,n,t){"use strict";t.r(n);t("053b"),t("e18c"),t("6db4"),t("b449");var r=t("5d83"),o=t("c24f"),c=t("5f87"),u={token:Object(c["a"])(),name:"",avatar:"",introduction:"",roles:[]},a={SET_TOKEN:function(e,n){e.token=n},SET_INTRODUCTION:function(e,n){e.introduction=n},SET_NAME:function(e,n){e.name=n},SET_AVATAR:function(e,n){e.avatar=n},SET_ROLES:function(e,n){e.roles=n}},i={login:function(e,n){var t=e.commit,r=(e.dispatch,n.username),u=n.password;return new Promise((function(e,n){Object(o["a"])({username:r.trim(),password:u}).then((function(n){var r=n.data;t("SET_TOKEN",r.token),Object(c["c"])(r.token),e()})).catch((function(e){n(e)}))}))},resetToken:function(e){var n=e.commit;return new Promise((function(e){n("SET_TOKEN",""),n("SET_ROLES",[]),Object(c["b"])(),e()}))},changeRoles:function(e,n){var t=e.commit,o=e.dispatch;return new Promise(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(r){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:u=n+"-token",t("SET_TOKEN",u),Object(c["c"])(u),o("tagsView/delAllViews",null,{root:!0}),r();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}};n["default"]={namespaced:!0,state:u,mutations:a,actions:i}},"36f1":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e18c"),t("a133"),t("ed0d"),t("f09c"),t("e117");var r=t("0261"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("el-button",{on:{click:e.test}},[e._v("123123")])],1)},a=[],i=(t("b449"),t("5d83")),s=t("c24f"),f={name:"HelloWorld",props:{msg:String},methods:{test:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])({username:"admin",password:"admin"});case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))()}}},d=f,l=(t("cc6a"),t("4023")),p=Object(l["a"])(d,u,a,!1,null,"4e5f77c6",null),m=p.exports,v={name:"app",components:{HelloWorld:m}},g=v,b=(t("034f"),Object(l["a"])(g,o,c,!1,null,null,null)),w=b.exports,h=t("b705"),k=t.n(h);t("3880");r["default"].config.productionTip=!1,r["default"].use(k.a),Promise.all([t.e("chunk-2d0a3e29"),t.e("chunk-2d0b2584")]).then(t.bind(null,"245a")),new r["default"]({render:function(e){return e(w)}}).$mount("#app")},"5f87":function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return i}));var r=t("e04f"),o=t.n(r),c="vue_admin_template_token";function u(){return o.a.get(c)}function a(e){return o.a.set(c,e)}function i(){return o.a.remove(c)}},c24f:function(e,n,t){"use strict";t.d(n,"a",(function(){return k}));t("e18c");var r=t("82ae"),o=t.n(r),c=t("b705"),u=(t("1784"),t("e35a"),t("5e9f"),t("af86"),t("0261")),a=t("ae8c"),i=(t("053b"),{sidebar:function(e){return e.app.sidebar},size:function(e){return e.app.size},device:function(e){return e.app.device},visitedViews:function(e){return e.tagsView.visitedViews},cachedViews:function(e){return e.tagsView.cachedViews},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},introduction:function(e){return e.user.introduction},roles:function(e){return e.user.roles},permission_routes:function(e){return e.permission.routes},addRoutes:function(e){return e.permission.addRoutes},routes:function(e){return e.permission.routes},errorLogs:function(e){return e.errorLog.logs}}),s=i;u["default"].use(a["a"]);var f=t("c653"),d=f.keys().reduce((function(e,n){var t=n.replace(/^\.\/(.*)\.\w+$/,"$1"),r=f(n);return e[t]=r.default,e}),{}),l=new a["a"].Store({modules:d,getters:s}),p=l,m=t("5f87"),v=o.a.create({baseURL:"/app",timeout:5e3});v.interceptors.request.use((function(e){return p.getters.token&&(e.headers["X-Token"]=Object(m["a"])()),e}),(function(e){return Promise.reject(e)})),v.interceptors.response.use((function(e){var n=e.data;return 200!==n.code?(Object(c["Message"])({message:n.message||"Error",type:"error",duration:5e3}),50008!==n.code&&50012!==n.code&&50014!==n.code||c["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){p.dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(n.message||"Error"))):n}),(function(e){return Object(c["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var g=v,b={serverUrl:function(e){return"/api/".concat(e)},serverUrlMock:function(e){return"/".concat(e)}},w=b.serverUrlMock,h="dev-api/";function k(e){return g({url:w("".concat(h,"user/login")),method:"post",data:e})}},c653:function(e,n,t){var r={"./user.js":"0f9a"};function o(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="c653"},cc6a:function(e,n,t){"use strict";var r=t("36f1"),o=t.n(r);o.a},cf05:function(e,n,t){e.exports=t.p+"static/img/logo.82b9c7a5.png"},f8a4:function(e,n,t){}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);