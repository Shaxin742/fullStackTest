(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347372d4"],{"74eb":function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return f}));var o=n("b775"),r=n("114e"),a=r["a"].serverUrl,i="dash-api/";function l(e){return Object(o["a"])({url:a("".concat(i,"components/getSongs")),method:"get",params:e})}function c(e){return Object(o["a"])({url:a("".concat(i,"components/formsubmit")),method:"post",headers:{"Content-Type":"multipart/form-data;boundary = "+(new Date).getTime()},data:e})}function s(e){return Object(o["a"])({url:a("".concat(i,"components/getTableData")),method:"get",params:e})}function u(e){return Object(o["a"])({url:a("".concat(i,"components/deleteTableData")),method:"delete",data:e})}function m(e){return console.log(e),Object(o["a"])({url:a("".concat(i,"components/addTableData")),method:"post",data:e})}function f(e){return Object(o["a"])({url:a("".concat(i,"components/updateTableData")),method:"patch",data:e})}},ed3a:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{ref:"ruleForm",attrs:{rules:e.rules,model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),n("el-form-item",{attrs:{label:"图片",prop:"fileList"}},[n("el-upload",{attrs:{action:"","list-type":"picture-card",accept:"image/jpeg,image/png,image/bmp","auto-upload":!1,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"on-change":e.handleChange},model:{value:e.form.fileList,callback:function(t){e.$set(e.form,"fileList",t)},expression:"form.fileList"}},[n("i",{staticClass:"el-icon-plus"})])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),n("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},r=[],a=(n("d81d"),n("b0c0"),n("b64b"),n("74eb")),i={name:"Form",data:function(){var e=function(e,t,n){t.length<1?n(new Error(e.field+"为必传项")):n()};return{dialogVisible:!1,form:{name:"",region:"",fileList:[]},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],fileList:[{validator:e,trigger:"change"}]},dialogImageUrl:""}},methods:{handleRemove:function(e,t){this.form.fileList=t},handleChange:function(e,t){console.log(e,t),this.form.fileList=t},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},submitForm:function(e){var t=this.form,n=t.fileList;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var o=new FormData;Object.keys(t).map((function(e){"fileList"!==e&&o.append(e,t[e])})),n.map((function(e){o.append("files",e.raw,e.name)})),console.log(o.get("files")),console.log(o.get("name")),console.log(o.get("region")),Object(a["c"])(o).then((function(e){console.log(e)}))}))}}},l=i,c=n("2877"),s=Object(c["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports}}]);