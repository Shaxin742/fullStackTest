(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2468e5e8","chunk-f1f5a7f6"],{"09c1":function(e,t,i){"use strict";var a=i("74c3"),s=i.n(a);s.a},3546:function(e,t,i){"use strict";var a=i("bd94"),s=i.n(a);s.a},"4b25":function(e,t,i){"use strict";i("d3b7");var a=i("5530"),s=(i("0644"),i("fd85")),n=i("d547"),r=i("2f62");t["a"]={data:function(){return{trees:[],actionFlag:{},roleLoading:!1,roleList:[],roleTotal:null,roleQueryStr:"",roleCurrpage:1,rolePageSize:10,deptId:"",departAll:"",departments:[],offices:[],office:"",deptProps:{value:"id",label:"deptName"},locked:"",userQueryStr:"",userType:"个人",userCurrpage:1,userPageSize:10,userTotal:null,userList:[],userLoading:!1,isOne:!0,roleGroupId:""}},computed:Object(a["a"])({},Object(r["e"])({userId:function(e){return e.user.userInfo.id}})),methods:{getRoleList:function(){var e=this;this.roleLoading=!0;var t={page:this.roleCurrpage,limit:this.rolePageSize};return this.roleQueryStr&&""!==this.roleQueryStr&&(t.queryStr=this.roleQueryStr),new Promise((function(i,a){Object(s["J"])(t).then((function(t){var a=t.data,s=t.error;e.roleLoading=!1,s?e.$message.error({message:"查询角色失败!".concat(s.message)}):(e.roleList=a.rows,e.roleTotal=a.total,i())}))}))},getUsers:function(){var e=this;this.userLoading=!0;var t={page:this.userCurrpage,limit:this.userPageSize};return this.deptId&&""!==this.deptId&&(t.deptId=this.deptId),""!==this.locked&&(t.locked=this.locked),""!==this.userQueryStr&&(t.keyWord=this.userQueryStr),new Promise((function(i){Object(s["P"])(t).then((function(t){var a=t.data;e.userLoading=!1,e.userList=a.rows,e.userTotal=a.total,i()}))}))},handleClick:function(e){this.userCurrpage=e,this.getUsers()},handleSizeChange:function(e){this.userPageSize=e,this.getUsers()},handleRoleSearchChange:function(){this.roleCurrpage=1,this.getRoleList()},handleDeptChange:function(e){var t=Object(n["b"])(this.departments,"id",e[0]);t&&t.children?this.offices=t.children:this.offices=[],this.office=""},initDeptments:function(){var e=this;Object(s["k"])().then((function(t){var i=t.data;e.departments=i}))}}}},"4fee":function(e,t,i){"use strict";var a=i("7930"),s=i.n(a);s.a},"51ad":function(e,t,i){"use strict";var a=i("dc51"),s=i.n(a);s.a},6062:function(e,t,i){"use strict";var a=i("6d61"),s=i("6566");e.exports=a("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(e,t,i){"use strict";var a=i("9bf2").f,s=i("7c73"),n=i("e2cc"),r=i("0366"),o=i("19aa"),l=i("2266"),d=i("7dd0"),c=i("2626"),u=i("83ab"),h=i("f183").fastKey,p=i("69f3"),f=p.set,g=p.getterFor;e.exports={getConstructor:function(e,t,i,d){var c=e((function(e,a){o(e,c,t),f(e,{type:t,index:s(null),first:void 0,last:void 0,size:0}),u||(e.size=0),void 0!=a&&l(a,e[d],e,i)})),p=g(t),m=function(e,t,i){var a,s,n=p(e),r=v(e,t);return r?r.value=i:(n.last=r={index:s=h(t,!0),key:t,value:i,previous:a=n.last,next:void 0,removed:!1},n.first||(n.first=r),a&&(a.next=r),u?n.size++:e.size++,"F"!==s&&(n.index[s]=r)),e},v=function(e,t){var i,a=p(e),s=h(t);if("F"!==s)return a.index[s];for(i=a.first;i;i=i.next)if(i.key==t)return i};return n(c.prototype,{clear:function(){var e=this,t=p(e),i=t.index,a=t.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete i[a.index],a=a.next;t.first=t.last=void 0,u?t.size=0:e.size=0},delete:function(e){var t=this,i=p(t),a=v(t,e);if(a){var s=a.next,n=a.previous;delete i.index[a.index],a.removed=!0,n&&(n.next=s),s&&(s.previous=n),i.first==a&&(i.first=s),i.last==a&&(i.last=n),u?i.size--:t.size--}return!!a},forEach:function(e){var t,i=p(this),a=r(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:i.first){a(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!v(this,e)}}),n(c.prototype,i?{get:function(e){var t=v(this,e);return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),u&&a(c.prototype,"size",{get:function(){return p(this).size}}),c},setStrong:function(e,t,i){var a=t+" Iterator",s=g(t),n=g(a);d(e,t,(function(e,t){f(this,{type:a,target:e,state:s(e),kind:t,last:void 0})}),(function(){var e=n(this),t=e.kind,i=e.last;while(i&&i.removed)i=i.previous;return e.target&&(e.last=i=i?i.next:e.state.first)?"keys"==t?{value:i.key,done:!1}:"values"==t?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),c(t)}}},"6d61":function(e,t,i){"use strict";var a=i("23e7"),s=i("da84"),n=i("94ca"),r=i("6eeb"),o=i("f183"),l=i("2266"),d=i("19aa"),c=i("861d"),u=i("d039"),h=i("1c7e"),p=i("d44e"),f=i("7156");e.exports=function(e,t,i){var g=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),v=g?"set":"add",b=s[e],y=b&&b.prototype,w=b,C={},I=function(e){var t=y[e];r(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(m&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return m&&!c(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(m&&!c(e))&&t.call(this,0===e?0:e)}:function(e,i){return t.call(this,0===e?0:e,i),this})};if(n(e,"function"!=typeof b||!(m||y.forEach&&!u((function(){(new b).entries().next()})))))w=i.getConstructor(t,e,g,v),o.REQUIRED=!0;else if(n(e,!0)){var T=new w,O=T[v](m?{}:-0,1)!=T,x=u((function(){T.has(1)})),k=h((function(e){new b(e)})),A=!m&&u((function(){var e=new b,t=5;while(t--)e[v](t,t);return!e.has(-0)}));k||(w=t((function(t,i){d(t,w,e);var a=f(new b,t,w);return void 0!=i&&l(i,a[v],a,g),a})),w.prototype=y,y.constructor=w),(x||A)&&(I("delete"),I("has"),g&&I("get")),(A||O)&&I(v),m&&y.clear&&delete y.clear}return C[e]=w,a({global:!0,forced:w!=b},C),p(w,e),m||i.setStrong(w,e,g),w}},"74c3":function(e,t,i){},7930:function(e,t,i){},"7b6d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.writable||e.dataViewId?i("div",{staticClass:"data-auth-filter"},[i("div",{staticClass:"labelTitle"},[i("span",[e._v("数据筛选方式：")]),i("el-radio-group",{attrs:{disabled:!e.writable},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[i("el-radio",{attrs:{label:1}},[e._v("阈值筛选")]),i("el-radio",{attrs:{label:0}},[e._v("直接筛选")])],1)],1),1===e.type?i("div",[i("decisionRuleEditor",{ref:"rule",attrs:{dataView:e.dataViewId,viewList:e.dataViewList,rule:e.rule}})],1):i("div",[i("div",{staticClass:"data-view-filter"},[i("div",{staticClass:"labelTitle"},[i("span",[e._v("数据视图：")]),i("el-select",{attrs:{placeholder:"请选择",disabled:!e.writable},on:{change:e.queryChange},model:{value:e.dataViewId,callback:function(t){e.dataViewId=t},expression:"dataViewId"}},e._l(e.dataViewList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)])]),e.dataContents.length>0?i("div",{staticClass:"data-contents"},[i("base-table",{ref:"multipleTable",staticClass:"sortTable",attrs:{border:"","data-source":e.dataContents,loading:e.loading,columns:e.dataColumns,"show-summary":!1,"border-style":!0,height:"320"},on:{selectionChange:e.handleDataSelection}})],1):e._e()]):e._e()},s=[],n=(i("4de4"),i("4160"),i("a15b"),i("d81d"),i("ac1f"),i("1276"),i("159b"),i("d4ec")),r=i("bee2"),o=i("262e"),l=i("2caf"),d=i("9ab4"),c=i("60a3"),u=i("ca00"),h=i("cb9b"),p=i("229b"),f=function(e){Object(o["a"])(i,e);var t=Object(l["a"])(i);function i(){var e;return Object(n["a"])(this,i),e=t.apply(this,arguments),e.type=0,e.dataViewId="",e.primaryKeys="",e.rule=[],e.selections=[],e.primaryCode="",e.innerUpdateFlag=!1,e.loading=!1,e.dataViewList=[],e.dataColumns=[],e.dataContents=[],e}return Object(r["a"])(i,[{key:"created",value:function(){this.getViewDataOptions(),this.dataContent.length<1&&(this.dataContents=[])}},{key:"watchDataUpate",value:function(e,t){var i=this;e&&e.dataViewId||t&&t.dataViewId?(this.dataViewId=e.dataViewId,this.type=e.type,this.primaryKeys=e.primaryKeys,this.rule=e.rule,(e.dataViewId||t.dataViewId)&&(this.getViewDataOptions(),e.dataViewId&&setTimeout((function(){i.queryChange(e.dataViewId)}),500))):(this.dataColumns=[],this.dataContents=[],this.dataViewId="")}},{key:"getViewDataOptions",value:function(){var e=this;Object(h["e"])({dictFlag:"0"}).then((function(t){var i=t.data,a=t.error;a||(e.dataViewList=i)}))}},{key:"queryChange",value:function(e){var t=this;if(this.dataViewList&&this.dataViewList.length>0){var i=Object(u["a"])(this.dataViewList,"id",e).fields;this.dataContents=[],this.dataColumns=i.map((function(e){return 0===e.isPrimaryKey&&(t.primaryCode=e.fieldCode),{prop:e.fieldCode,label:e.fieldName,"header-align":"left",showOverflowTooltip:!0,"min-width":"120",fieldType:e.fieldType}})),0===this.type&&(this.dataColumns.unshift({type:"selection",width:40,fixed:!0}),this.writable||(this.dataColumns[0].selectable=function(){return!1})),this.loading=!0,Object(h["f"])({viewId:e}).then((function(e){var i=e.error,a=e.data;t.loading=!1,i?t.$message.error(i.message):(t.dataContents=a.rows,0===t.type&&t.initSelection())}))}}},{key:"handleDataSelection",value:function(e){this.innerUpdateFlag||(this.selections=e)}},{key:"initSelection",value:function(){var e=this;this.primaryKeys&&this.$nextTick((function(){e.innerUpdateFlag=!0;var t=e.$refs.multipleTable;e.primaryKeys.split(",").forEach((function(i){var a=Object(u["a"])(e.dataContents,e.primaryCode,i);t.toggleRowSelection(a,!0),e.selections.push(a)})),e.innerUpdateFlag=!1}))}},{key:"getCurrentDataAuths",value:function(){var e=this;return{dataViewId:this.dataViewId,rule:this.rule,primaryKeys:this.selections.filter((function(e){return e})).map((function(t){return t[e.primaryCode]})).join(","),type:this.type}}},{key:"clearEmpty",value:function(){this.dataContents=[]}}]),i}(c["e"]);Object(d["a"])([Object(c["c"])({default:{}})],f.prototype,"dataAuths",void 0),Object(d["a"])([Object(c["c"])({default:!1})],f.prototype,"writable",void 0),Object(d["a"])([Object(c["c"])({default:[]})],f.prototype,"dataContent",void 0),Object(d["a"])([Object(c["f"])("dataAuths")],f.prototype,"watchDataUpate",null),f=Object(d["a"])([Object(c["a"])({components:{decisionRuleEditor:p["a"]}})],f);var g=f,m=g,v=(i("4fee"),i("2877")),b=Object(v["a"])(m,a,s,!1,null,"036cae34",null);t["a"]=b.exports},bb2f:function(e,t,i){var a=i("d039");e.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bd94:function(e,t,i){},d547:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));i("99af"),i("4de4"),i("4160"),i("a630"),i("d81d"),i("d3b7"),i("ac1f"),i("25f0"),i("6062"),i("3ca3"),i("5319"),i("159b"),i("ddb0"),i("c1df"),i("ca00"),i("c24f");function a(e,t,i){for(var a=0;a<e.length;a+=1)if(e[a][t]===i)return e[a]}function s(e,t,i){for(var a=0;a<e.length;a+=1){var n=e[a];if(n.children){var r=s(n.children,t,i);if(r)return r}else if(e[a][t]===i)return e[a]}}function n(e,t){var i=new Set(t),a=Array.from(new Set(e.filter((function(e){return i.has(e)}))));return a}},dc51:function(e,t,i){},ddec:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"roleDialog"},[i("simple-dialog",{attrs:{bottonShow:e.bottonShow,"dialog-title":e.dialogTitle,"dialog-visible":e.dialogVisible,"dialog-width":"1000px","save-text":"确 定","cancel-text":"取 消","botton-show":"true"},on:{"update:dialogVisible":function(t){e.dialogVisible=t},"update:dialog-visible":function(t){e.dialogVisible=t},saveEmit:e.setRoleAdd,cancelEmit:e.cancelRoleAdd}},[i("el-form",{ref:"numberValidateForm",staticClass:"form-data-wrap",attrs:{model:e.roleUser,"label-width":"100px",rules:e.roleRules,disabled:e.disableEdit}},["3"!==e.roleOperType&&"4"!==e.roleOperType?i("el-form-item",{staticStyle:{"margin-top":"10px"},attrs:{label:"角色名称：",prop:"name"}},[i("el-input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{placeholder:"请填写角色名称"},model:{value:e.roleUser.name,callback:function(t){e.$set(e.roleUser,"name",t)},expression:"roleUser.name"}})],1):e._e(),"3"!==e.roleOperType&&"4"!==e.roleOperType?i("el-form-item",{attrs:{prop:"description",label:"角色描述："}},[i("el-input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{placeholder:"请填写角色描述"},model:{value:e.roleUser.description,callback:function(t){e.$set(e.roleUser,"description",t)},expression:"roleUser.description"}})],1):e._e(),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"actions",label:"角色授权："}},[i("div",{staticClass:"form-tree-wrap"},[i("el-tree",{key:"tree",ref:"tree",attrs:{data:e.trees,"show-checkbox":"","node-key":"id","default-checked-keys":e.menus,"render-after-expand":!1,props:e.defaultProps},on:{"check-change":e.handleActionsChange},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,s=t.data;return i("div",{staticClass:"info-item"},[i("div",{staticClass:"label"},[i("span",{staticClass:"menu-title"},[e._v(e._s(a.label))])]),0===s.children.length&&0!==s.actions.length?i("div",{staticClass:"content action"},[i("el-checkbox-group",{on:{change:function(e){return s.doOperateChange(e,s.id)}},model:{value:e.actionFlag["menu_"+s.id],callback:function(t){e.$set(e.actionFlag,"menu_"+s.id,t)},expression:"actionFlag[`menu_${data.id}`]"}},[s&&s.actions?i("el-row",e._l(s.actions,(function(t){return i("el-col",{key:t.id,staticClass:"box-col",attrs:{span:6}},[i("el-checkbox",{attrs:{checked:t.checked,label:t.id}},[e._v(e._s(t.name))])],1)})),1):e._e()],1)],1):e._e()])}}])})],1)])],1)],1)],1)},s=[],n=(i("a4d3"),i("e01a"),i("99af"),i("4160"),i("c975"),i("a434"),i("b0c0"),i("b64b"),i("159b"),i("5530")),r=i("2909"),o=i("4b25"),l=i("0644"),d=i.n(l),c=i("fd85"),u={name:"RoleDetail",mixins:[o["a"]],props:["roleOperType"],data:function(){return{status:!1,dialogTitle:"新增角色",dialogVisible:!1,roleUser:{name:"",description:""},roleRules:{name:[{required:!0,trigger:"change",message:"角色名称不能为空"},{max:20,trigger:["blur","change"],message:"角色名称长度不能超过20个字符"}],description:[{required:!0,trigger:"change",message:"角色描述不能为空"},{max:200,trigger:["blur","change"],message:"角色描述长度不能超过200字符"}]},menus:[],defaultProps:{children:"children",label:"title",disabled:this.treeDisabledFn},parentIdList:[],bottonShow:!0,opering:!1,disableEdit:!1}},created:function(){this.initMenu()},methods:{handleOperateChange:function(e,t){var i=this.menus.indexOf(t);e&&e.length>0?-1===i&&(this.opering=!0,this.$refs.tree.setChecked(t,!0,!1)):-1!==i&&(this.opering=!0,this.$refs.tree.setChecked(t,!1,!1))},queryRoleAuth:function(e){var t=this;Object(c["D"])({roleId:e.id}).then((function(i){var a=i.data,s=i.error;if(s)t.$message.error("获取角色授权信息失败：".concat(s.message,";"));else{t.roleUser.name=a.name,t.roleUser.description=a.description,t.roleUser.id=e.id;var n=[];a.roleRegionVoList.forEach((function(e){n.push.apply(n,Object(r["a"])(e.actions))})),t.initActionFlag(n)}}))},showAddInfo:function(e,t,i){var a=this;this.dialogVisible=!0,e&&"1"===i?(this.dialogTitle="编辑角色",this.bottonShow=!0,this.queryRoleAuth(t)):e&&"2"===i?(this.bottonShow=!1,this.dialogTitle="查看详情",this.disableEdit=!0,this.queryRoleAuth(t)):e&&"4"===i?(this.dialogTitle="角色授权-修改",this.bottonShow=!0,this.queryRoleAuth(t)):e||"0"!==i?e||"3"!==i||(this.dialogTitle="角色授权",t.id?this.queryRoleAuth(t):(this.roleUser.name=t.name,this.roleUser.description="岗位".concat(name,"的内置角色")),this.bottonShow=!0):(this.dialogTitle="新增角色",this.bottonShow=!0),setTimeout((function(){a.status=!0}),1e3)},setRoleAdd:function(){var e=this;this.$refs.numberValidateForm.validate((function(t){if(!t)return!1;var i=Object(n["a"])({},e.roleUser),a=[];Object.keys(e.actionFlag).forEach((function(t){a.push.apply(a,Object(r["a"])(e.actionFlag[t]))})),i.actions=a;var s=c["I"],o="修改";"新增角色"===e.dialogTitle&&(s=c["G"],o="新增"),"3"===e.roleOperType&&(i.type=2,s=e.roleUser.id?c["I"]:c["G"],o="授权"),s(i).then((function(t){var i=t.error,a=t.data;i?e.$message.error("角色".concat(o,"失败：").concat(i.message)):(e.$message.success("角色".concat(o,"成功")),"3"===e.roleOperType?e.$emit("complated",a):e.$emit("refresh"),e.cancelRoleAdd())}))}))},cancelRoleAdd:function(){this.dialogVisible=!1,this.status=!1,this.roleUser.name="",this.roleUser.description="",this.$refs.numberValidateForm.resetFields(),this.$refs.tree.setCheckedKeys([]),this.initActionFlag()},initMenu:function(){var e=this;Object(c["s"])().then((function(t){var i=t.data,a=t.error;a?e.$message.error("获取菜单信息失败：".concat(a.message,";")):(e.trees=i,e.initActionFlag())}))},initActionFlag:function(e){var t=this,i={},a=[];function s(n){n.forEach((function(n){if(n.children&&n.children.length>0)s(n.children);else{n.doOperateChange=t.handleOperateChange;var r=[];n.actions&&e&&(n.actions.forEach((function(t){e.indexOf(t.id)>-1&&r.push(t.id)})),r.length>0&&a.push(n.id)),i["menu_".concat(n.id)]=r}}))}s(this.trees),this.menus=a,this.actionFlag=d()(i)},getParentNode:function(e){1!==e.level&&(this.parentIdList.push(e.parent.data.id),this.getParentNode(e.parent))},treeDisabledFn:function(e,t){if(1===t.level)return!e.children||!e.children.length},handleActionsChange:function(e,t,i){if(this.status)if(t){if(0===e.children.length)if(this.menus.push(e.id),this.opering)this.opering=!1;else{var a=[];e.actions&&(e.actions.forEach((function(e){return a.push(e.id)})),this.actionFlag["menu_".concat(e.id)]=a)}}else{var s=this.menus.indexOf(e.id);s>-1&&(this.menus.splice(s,1),this.opering?this.opering=!1:this.actionFlag["menu_".concat(e.id)]=[])}}}},h=u,p=(i("09c1"),i("2877")),f=Object(p["a"])(h,a,s,!1,null,null,null);t["a"]=f.exports},f183:function(e,t,i){var a=i("d012"),s=i("861d"),n=i("5135"),r=i("9bf2").f,o=i("90e3"),l=i("bb2f"),d=o("meta"),c=0,u=Object.isExtensible||function(){return!0},h=function(e){r(e,d,{value:{objectID:"O"+ ++c,weakData:{}}})},p=function(e,t){if(!s(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,d)){if(!u(e))return"F";if(!t)return"E";h(e)}return e[d].objectID},f=function(e,t){if(!n(e,d)){if(!u(e))return!0;if(!t)return!1;h(e)}return e[d].weakData},g=function(e){return l&&m.REQUIRED&&u(e)&&!n(e,d)&&h(e),e},m=e.exports={REQUIRED:!1,fastKey:p,getWeakData:f,onFreeze:g};a[d]=!0},f4cd:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("base-panel",{staticClass:"group-detail base-panel",attrs:{title:e.title}},[i("el-row",{attrs:{gutter:30}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"group-info"},[i("span",{staticClass:"gangweiFont"},[e._v("岗位名称：")]),i("el-input",{staticClass:"group-info-input",attrs:{placeholder:"请填写岗位名称"},on:{input:e.handleStationNameChange},model:{value:e.station.name,callback:function(t){e.$set(e.station,"name",t)},expression:"station.name"}})],1)]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"group-info"},[i("span",{staticClass:"gangweiFont"},[e._v("岗位性质：")]),i("el-select",{staticClass:"group-info-input",attrs:{clearable:"",filterable:"",placeholder:"请选择岗位性质"},model:{value:e.station.groupNature,callback:function(t){e.$set(e.station,"groupNature",t)},expression:"station.groupNature"}},e._l(e.natureList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)])],1),i("el-row",{attrs:{gutter:30}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"group-info"},[i("span",{staticClass:"gangweiFont"},[e._v("上级岗位：")]),i("el-select",{staticClass:"group-info-input",attrs:{clearable:"",filterable:"",placeholder:"请选择上级岗位"},on:{change:e.queryChange},model:{value:e.station.parentId,callback:function(t){e.$set(e.station,"parentId",t)},expression:"station.parentId"}},e._l(e.simplePostList,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"group-info"},[i("span",{staticClass:"gangweiFont"},[e._v("岗位描述：")]),i("el-input",{staticClass:"group-info-input",attrs:{placeholder:"请填写岗位描述"},model:{value:e.station.description,callback:function(t){e.$set(e.station,"description",t)},expression:"station.description"}})],1)]),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"group-info group-info-type"},[i("span",{staticClass:"gangweiFont"},[e._v("数据权限类型：")]),i("el-radio-group",{staticClass:"group-info-input",staticStyle:{display:"inline-block",width:"250px"},on:{change:e.changeAuth},model:{value:e.station.dataAuthorityType,callback:function(t){e.$set(e.station,"dataAuthorityType",t)},expression:"station.dataAuthorityType"}},[i("el-radio",{attrs:{label:0}},[e._v("公共授权")]),i("el-radio",{attrs:{label:1}},[e._v("用户独立授权")])],1)],1)]),0===e.station.dataAuthorityType?i("el-col",{attrs:{span:4}},[i("div",{staticClass:"group-info group-info-btn"},[i("el-button",{attrs:{size:"mini",icon:"el-icon-plus"},on:{click:e.assetOnly}},[e._v(" 数据授权 ")])],1)]):e._e()],1),i("el-row",{attrs:{gutter:30}},[i("el-col",{attrs:{span:12}},[i("note-card",{staticClass:"addUser",attrs:{title:"已拥有用户("+e.station.users.length+")",actions:e.userTitleBtns()}},[i("base-table",{attrs:{height:"300","data-source":e.station.users,columns:e.userColumns(),"show-summary":!1},on:{selectionChange:e.handleOwnsUserSelected}})],1)],1),i("el-col",{attrs:{span:12}},[i("note-card",{staticClass:"addUser",attrs:{title:"已拥有角色("+e.station.roles.length+")",actions:e.roleTitleBtns()}},[i("base-table",{attrs:{height:"300","data-source":e.station.roles,columns:e.roleColumns(),"show-summary":!1},on:{selectionChange:e.handleOwnsRoleSelected}})],1)],1)],1),i("simple-dialog",{attrs:{"dialog-title":"数据筛选","dialog-visible":e.dataVisible,"dialog-width":"66%","save-text":"确 定","cancel-text":"取 消","botton-show":"true"},on:{"update:dialogVisible":function(t){e.dataVisible=t},"update:dialog-visible":function(t){e.dataVisible=t},saveEmit:e.certain,cancelEmit:e.cancelDataSelect}},[i("dataAuthFilter",{ref:"datasFilter",staticStyle:{height:"460px"},attrs:{dataAuths:e.dataAuths,dataContent:e.dataContents,writable:!0}})],1),i("simple-dialog",{staticClass:"addUser",attrs:{"dialog-title":e.addTitle,"dialog-visible":e.userVisible,"dialog-width":"477px","save-text":"确 定","cancel-text":"取 消","botton-show":"true"},on:{"update:dialogVisible":function(t){e.userVisible=t},"update:dialog-visible":function(t){e.userVisible=t},saveEmit:e.certainAddUser,cancelEmit:e.cancelAddUser}},[i("div",[i("div",[i("el-form",{staticClass:"operate-left-form",attrs:{inline:!0,size:"mini"},nativeOn:{submit:function(e){e.preventDefault()}}},["用户筛选"===e.addTitle?i("el-form-item",[i("el-input",{attrs:{placeholder:"请输入要搜索的内容"},on:{input:e.inputQuery},model:{value:e.userQueryStr,callback:function(t){e.userQueryStr=t},expression:"userQueryStr"}},[i("div",{ref:"inputColor1",staticClass:"backgroundChange",attrs:{slot:"suffix"},slot:"suffix"},[i("icon",{staticClass:"icon",attrs:{name:"icon_search"}})],1)])],1):i("el-form-item",[i("el-input",{attrs:{placeholder:"请输入要搜索的内容"},on:{input:e.inputQuery},model:{value:e.roleQueryStr,callback:function(t){e.roleQueryStr=t},expression:"roleQueryStr"}},[i("div",{ref:"inputColor1",staticClass:"backgroundChange",attrs:{slot:"suffix"},slot:"suffix"},[i("icon",{staticClass:"icon",attrs:{name:"icon_search"}})],1)])],1),"角色筛选"!==e.addTitle?i("el-form-item",[i("el-select",{attrs:{clearable:"",placeholder:"请选择所属部门"},on:{change:e.refreshUserList},model:{value:e.deptId,callback:function(t){e.deptId=t},expression:"deptId"}},e._l(e.departments,(function(e){return i("el-option",{key:e.id,attrs:{label:e.deptName,value:e.id}})})),1)],1):e._e()],1)],1),i("base-table",{ref:"multipleTable",attrs:{height:"300","data-source":e.addUserOrRole,loading:e.loading,columns:e.filterColumns(),"show-summary":!1},on:{selectionChange:e.addUsersRoles}})],1)]),i("roleDialog",{ref:"child",attrs:{roleOperType:e.roleOperType},on:{complated:e.handleRoleCreated}}),i("div",{staticClass:"bottomBtn"},[i("el-button",{staticClass:"btn",attrs:{type:"primary",loading:e.confirmLoading},on:{click:e.handleSave}},[e._v(" 确 定 ")]),i("el-button",{staticClass:"btn",on:{click:e.handleCancel}},[e._v("取 消")])],1)],1)},s=[],n=(i("a4d3"),i("e01a"),i("99af"),i("4de4"),i("4160"),i("d81d"),i("a434"),i("b0c0"),i("159b"),i("2909")),r=i("2ef0"),o=i("4b25"),l=i("d547"),d=i("ddec"),c=i("7b6d"),u=i("fd85"),h=(i("cb9b"),{name:"UserGroupDetail",components:{roleDialog:d["a"],dataAuthFilter:c["a"]},mixins:[o["a"]],data:function(){return{confirmLoading:!1,title:"岗位管理-新增",selectChange:!1,operateType:"0",detailId:null,leftUsers:[],users:[],userLock:!1,roles:[],roleLock:!1,userLimitNumber:16,userLoadBtn:!0,roleLoadBtn:!0,roleLimitNumber:10,addUserOrRole:[],addTitle:"用户筛选",station:{dataAuthorityType:0,name:"",parentId:"",description:"",dataGroupId:"",users:[],roles:[],groupNature:"001"},dataAuths:{dataViewId:"",rule:[],primaryKeys:"",type:0},authingUser:null,userTitleBtns:function(){var e=this;return[{title:"添加用户",icon:"add-line",onClick:e.addUser},{title:"批量删除",icon:"icon_delete",onClick:e.delUser}]},roleTitleBtns:function(){var e=this;return[{title:"添加角色",icon:"add-line",onClick:e.addRole},{title:"批量删除",icon:"icon_delete",onClick:e.delRole}]},userColumns:function(){var e=this;return[{type:"selection","min-width":"50",align:"center"},{prop:"username",label:"姓名","header-align":"left",showOverflowTooltip:!0,"min-width":"120"},{prop:"deptName",label:"部门","header-align":"left",showOverflowTooltip:!0,"min-width":"120"},{prop:"",label:"操作",align:"center","min-width":"180",actions:[{code:"dataAuth",text:"数据授权",hidden:e.hiddenAuthBtn,onClick:e.assetAuth},{code:"dataAuth",text:"删除授权",hidden:e.hiddenDelAuthBtn,onClick:e.assetAuthDel},{code:"del",text:"删除",onClick:e.assetDel}]}]},filterColumns:function(){return"用户筛选"===this.addTitle?[{type:"selection","min-width":"50",align:"center"},{prop:"username",label:"姓名","header-align":"left",showOverflowTooltip:!0,"min-width":"120"},{prop:"deptName",label:"部门","header-align":"left",showOverflowTooltip:!0,"min-width":"120"}]:[{type:"selection","min-width":"50",align:"center"},{prop:"name",label:"角色名称","header-align":"left",showOverflowTooltip:!0,"min-width":"100"},{prop:"description",label:"角色描述","header-align":"left",showOverflowTooltip:!0,"min-width":"200"}]},roleColumns:function(){var e=this;return[{type:"selection","min-width":"50",align:"center"},{prop:"name",label:"角色名称",align:"center",showOverflowTooltip:!0,"min-width":"200"},{prop:"",label:"操作",align:"center","min-width":"180",actions:[{code:"del",text:"删除",hidden:function(e){return e.flag},onClick:e.actionDel},{code:"show",text:"查看详情",hidden:function(e){return e.flag},onClick:e.showRoleDetail},{code:"shouquan",text:"授权",hidden:function(e){return!e.flag},onClick:e.actionAuth}]}]},dataVisible:!1,userVisible:!1,selectResult:[],actionFlag:{},selectType:"",simplePostList:[],selectionUser:[],selectionRole:[],selectRows:[],keepUser:[],keepRole:[],roleOperType:!1,preperDelDatas:[],dataContents:[],natureList:[{id:"001",name:"员工岗"},{id:"002",name:"业务组长岗"},{id:"003",name:"业务主管岗"},{id:"004",name:"部门行政负责人"},{id:"005",name:"系统管理员"}]}},watch:{dataVisible:function(e,t){!1===e&&this.$refs.datasFilter.clearEmpty()}},created:function(){var e=this;this.operateType=this.$route.query.type,this.rolePageSize=1e4,this.userPageSize=1e4,this.initDeptments(),this.simplePostQuery(),"0"===this.operateType?this.title="岗位管理-新增":(this.detailId=this.$route.query.id,this.title="岗位管理-修改",Object(u["w"])(this.detailId).then((function(t){var i=t.data,a=t.error;if(a)e.$message.error(a.message);else{var s={id:i.id,name:i.name,dataAuthorityType:0,parentId:"",description:"",dataGroupId:"",users:[],roles:[]};if(i.parentId&&(s.parentId=i.parentId),i.dataAuthorityType&&(s.dataAuthorityType=i.dataAuthorityType),i.description&&(s.description=i.description),s.groupNature=i.groupNature?i.groupNature:"",i.dataGroupId&&(s.dataGroupId=i.dataGroupId),i.users&&(s.users=i.users),i.roles&&i.roles.length>0){var n=Object(l["b"])(i.roles,"name",i.name);n||i.roles.unshift({name:i.name}),s.roles=i.roles}else s.roles.push({name:i.name});e.station=s,0===e.station.roles.length&&e.addDefautRole(e.station.name)}})))},methods:{inputQuery:function(){"角色筛选"===this.addTitle?this.refreshRoleList():this.refreshUserList()},simplePostQuery:function(){var e=this;Object(u["z"])().then((function(t){var i=t.data,a=t.error;a?e.$message.error(a.message):e.simplePostList=i}))},refreshRoleList:function(){var e=this;this.getRoleList().then((function(){e.filterSelected()}))},assetOnly:function(){this.assetAuth()},assetAuth:function(e){var t=this;this.dataVisible=!0;var i=null;e?(this.authingUser=e,e.dataGroupId&&(i=e.dataGroupId)):this.station.dataGroupId&&(i=this.station.dataGroupId,this.authingUser=null),i&&Object(u["g"])(i).then((function(e){var i=e.data,a=e.error;a||(t.dataAuths=i)}))},certain:function(){var e=this,t=this.$refs.datasFilter.getCurrentDataAuths();if(t){var i=u["e"];1===this.station.dataAuthorityType?this.authingUser.dataGroupId&&(i=u["h"],t.id=this.authingUser.dataGroupId):window.sessionStorage.getItem("dataGroupId")&&(i=u["h"],t.id=window.sessionStorage.getItem("dataGroupId")),i(t).then((function(t){var a=t.data,s=t.error;s?e.$message.error({title:"失败",message:"数据授权失败: ".concat(s.message)}):(e.$message.success({title:"成功",message:"数据授权成功!"}),e.changeAuth(),i===u["e"]&&(0===e.station.dataAuthorityType?(window.sessionStorage.setItem("dataGroupId",a),e.station.dataGroupId=window.sessionStorage.getItem("dataGroupId")):e.authingUser.dataGroupId=a))}))}},changeAuth:function(){this.dataAuths={dataViewId:"",rule:[],primaryKeys:"",type:0},this.dataContents=[],this.dataVisible=!1},cancelDataSelect:function(){this.changeAuth()},assetDel:function(e){var t=this;this.$confirm("确定要删除该用户吗，用户拥有的数据权限也会被删除！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.dataGroupId&&t.preperDelDatas.push(e.dataGroupId),t.station.users=t.station.users.filter((function(t){return t.id!==e.id}))}))},actionDel:function(e){var t=this;this.$confirm("确定要删除该角色吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.station.roles=t.station.roles.filter((function(t){return t.id!==e.id}))}))},assetAuthDel:function(e){var t=this;this.$confirm("确定要删除该数据权限吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.doDataAuthDel(e.dataGroupId,!0)}))},doDataAuthDel:function(e,t){var i=this;Object(u["f"])({id:e}).then((function(a){var s=a.error;s?t&&i.$message.error(s.message):(i.$message.success("删除数据权限成功!"),i.station.users.forEach((function(t,a){t.dataGroupId!=e||(i.station.users[a].dataGroupId=null)})))}))},addUser:function(){var e=this;this.userVisible=!0,this.addTitle="用户筛选",0===this.userList.length?this.getUsers().then((function(){e.filterSelected()})):this.filterSelected()},addRole:function(){var e=this;this.userVisible=!0,this.addTitle="角色筛选",0===this.roleList.length?this.getRoleList().then((function(){e.filterSelected()})):this.filterSelected()},filterSelected:function(){var e=this.roleList,t=this.station.roles;"用户筛选"===this.addTitle&&(e=this.userList,t=this.station.users),this.addUserOrRole=Object(r["differenceWith"])(e,t,(function(e,t){return e.id===t.id}))},handleOwnsUserSelected:function(e){this.selectionUser=e},handleOwnsRoleSelected:function(e){this.selectionRole=e},delUser:function(){var e=this;this.selectionUser.length>0?this.$confirm("确定要删除选中的用户吗，用户拥有的数据权限也会被删除！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.station.users=Object(r["differenceWith"])(e.station.users,e.selectionUser,(function(e,t){return e.id===t.id&&(t.dataGroupId&&this.preperDelDatas.push(t.dataGroupId),!0)}))})):this.station.users.length>0?this.$message.error("请先勾选用户;"):this.$message.error("请先添加用户;")},delRole:function(){var e=this;if(this.selectionRole.length>0){var t=!1;if(this.selectionRole.forEach((function(i,a){i.name!==e.station.name||(t=!0)})),t)return this.$message.error("不能删除默认岗位角色"),!1;this.$confirm("确定要删除选中的角色吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.station.roles=Object(r["differenceWith"])(e.station.roles,e.selectionRole,(function(e,t){return e.id===t.id}))}))}else this.station.roles.length>0?this.$message.error("请先勾选角色;"):this.$message.error("请先添加角色;")},addUsersRoles:function(e){"角色筛选"===this.addTitle?this.keepRole=e:this.keepUser=e},certainAddUser:function(){var e,t;"角色筛选"===this.addTitle?(e=this.station.roles).push.apply(e,Object(n["a"])(this.keepRole)):(t=this.station.users).push.apply(t,Object(n["a"])(this.keepUser));this.cancelAddUser()},cancelAddUser:function(){this.userVisible=!1,this.$refs.multipleTable.clearSelection(),this.keepRole=[],this.keepUser=[]},actionAuth:function(e){this.roleOperType="3",this.$refs.child.showAddInfo(!1,e,this.roleOperType)},handleStationNameChange:function(e){if(0===this.station.roles.length)this.addDefautRole(e);else{var t=this.station.roles[0].flag;if(t)this.station.roles[0].name=e;else{var i={name:e,flag:"group"};this.station.roles.unshift(i)}}},addDefautRole:function(e){var t={name:e,flag:"group"};""!==e?this.station.roles.length>0?this.station.roles[0].flag?this.station.roles[0].name=e:this.station.roles.splice(0,0,t):this.station.roles.push(t):this.station.roles.length>0&&this.station.roles[0].flag&&this.station.roles.splice(0,1)},handleRoleCreated:function(e){e&&(this.station.roles[0].id=e)},showRoleDetail:function(e){this.roleOperType="2",this.$refs.child.showAddInfo(!0,e,this.roleOperType)},refreshUserList:function(){var e=this;this.getUsers().then((function(){e.filterSelected()}))},hiddenAuthBtn:function(){return 0===this.station.dataAuthorityType},hiddenDelAuthBtn:function(e){return 0===this.station.dataAuthorityType||!e.dataGroupId},handleSave:function(){var e=this,t={name:this.station.name,parentId:this.station.parentId,dataAuthorityType:this.station.dataAuthorityType,description:this.station.description,dataGroupId:window.sessionStorage.getItem("dataGroupId"),users:this.station.users,groupNature:this.station.groupNature},i=Object(r["cloneDeep"])(this.station.roles);if(i[0].id||i.shift(),t.roles=i.map((function(e){return{id:e.id}})),""===t.name)this.$message.error("请填写岗位名称!");else if(""===t.dataAuthorityType)this.$message.error("请选择数据权限类型!");else if(t.groupNature){var a=u["u"],s="新增";"1"===this.operateType&&(a=u["x"],s="修改",t.id=this.detailId),0===t.dataAuthorityType?this.station.users.forEach((function(e){delete e.dataGroupId})):t.dataGroupId="",this.confirmLoading=!0,a(t).then((function(t){var i=t.error;i?(e.confirmLoading=!1,e.$message.error("".concat(s,"岗位失败: ").concat(i.message))):(e.$store.dispatch("freshManage"),e.$message.success("".concat(s,"岗位成功!")),e.confirmLoading=!1,e.$router.push({name:"postManagement"}),e.preperDelDatas.forEach((function(t){return e.doDataAuthDel(t)})),window.sessionStorage.removeItem("dataGroupId"))}))}else this.$message.error("请选择岗位性质!")},handleCancel:function(){this.$router.push({name:"postManagement"})}}}),p=h,f=(i("51ad"),i("3546"),i("2877")),g=Object(f["a"])(p,a,s,!1,null,"66bf5c58",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2468e5e8.f11e4d35.js.map