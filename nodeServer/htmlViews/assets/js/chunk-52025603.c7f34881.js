(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52025603"],{"249b":function(t,e,a){"use strict";var i=a("d60e"),r=a.n(i);r.a},"52a3":function(t,e,a){},"63f9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"custom-form"},[i("div",{staticClass:"form-box"},[i("div",{staticClass:"left-toolbar"},[i("div",{staticClass:"tool-title"},[t._v("标签库")]),t._l(t.iconNav,(function(e,a){return i("div",{key:a,staticClass:"icon"},[i("div",{staticClass:"tool-item-title"},[t._v(t._s(e.title))]),t._l(e.children,(function(e){return i("div",{key:e,staticClass:"dragItem",attrs:{id:e.type,draggable:"true"},on:{dragstart:function(a){return t.handleDragStart(a,e.type)}}},[i("svg-icon",{staticClass:"special",attrs:{"icon-class":e.iconClass}}),i("span",{staticClass:"itemTitle"},[t._v(t._s(e.title))])],1)}))],2)}))],2),i("div",{staticClass:"center-dropArea",on:{dragover:function(t){return t.preventDefault()},drop:t.handleSomethingDrop}},[0===t.formAttribute.formList.length?i("img",{staticStyle:{display:"block",margin:"0px auto","padding-top":"60px"},attrs:{draggable:"false",src:a("c112"),alt:""}}):t._e(),t.formAttribute.formList.length>0?i("el-form",{staticStyle:{padding:"30px 0"},attrs:{"label-width":t.formAttribute.labelWidth+"px",model:t.formAttribute,"label-position":t.formAttribute.labelPosition}},[i("formDisplay",{attrs:{formAttribute:t.formAttribute,itemAttribute:t.itemAttribute,draggingArea:t.draggingArea,generateFormItem:t.generateFormItem,draggingAreaType:t.draggingAreaType},on:{"update:draggingArea":function(e){t.draggingArea=e},"update:dragging-area":function(e){t.draggingArea=e},"update:draggingAreaType":function(e){t.draggingAreaType=e},"update:dragging-area-type":function(e){t.draggingAreaType=e},draggingChange:t.draggingAreaChange,activeItemChange:t.clickActiveItem,draggingTypeChange:t.draggingAreaTypeChange}})],1):t._e()],1),i("RightSet",{attrs:{itemAttribute:t.itemAttribute,formAttribute:t.formAttribute,dataSet:t.dataSet,viewDataSet:t.viewDataSet,optionLabelInit:t.optionLabel,childArr:t.childArr},on:{childSave:t.childSave,childCancle:t.childCancle,fromChange:t.fromChange}})],1)])},r=[],l=(a("a4d3"),a("e01a"),a("99af"),a("4160"),a("d81d"),a("d3b7"),a("25f0"),a("159b"),a("5530")),o=a("d4ec"),s=a("bee2"),n=a("262e"),d=a("2caf"),u=a("9ab4"),c=a("60a3"),g=a("ad7d"),p=a("cb9b"),b=a("ca00"),h=a("aa62"),m=a.n(h),f=a("6474"),y=a("0644"),v=a.n(y),A=a("4bb5"),T=Object(A["a"])("processTemplate"),L=function(t){Object(n["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.iconNav=[{title:"输入字段",children:[{type:"text",title:"单行文本",iconClass:"form-tool-text"},{type:"number",title:"数字",iconClass:"form-tool-inputNumber"},{type:"textarea",title:"多行文本",iconClass:"form-tool-textarea"}]},{title:"选择字段",children:[{type:"date",title:"日期",iconClass:"form-tool-date"},{type:"select",title:"下拉选择器",iconClass:"form-tool-select"},{type:"radioGroup",title:"单选框组",iconClass:"form-tool-radioGroup"},{type:"checkboxGroup",title:"多选框组",iconClass:"form-tool-checkboxGroup"},{type:"transfer",title:"穿梭框",iconClass:"form-tool-checkboxGroup"}]},{title:"复杂字段",children:[{type:"table",title:"表格",iconClass:"form-tool-table"},{type:"ueditor",title:"富文本",iconClass:"form-tool-ueditor"}]},{title:"其他字段",children:[{type:"switch",title:"开关",iconClass:"form-tool-switch"},{type:"upload",title:"上传",iconClass:"folder-upload-line"},{type:"alert",title:"提示卡",iconClass:"folder-alert-line"},{type:"hidden",title:"隐藏项",iconClass:"hidden-icon"},{type:"button",title:"按钮",iconClass:"button-icon"},{type:"password",title:"密码框",iconClass:"hidden-icon"},{type:"childFrom",title:"子表单",iconClass:"from-icon"}]}],t.draggingType="",t.draggingArea="",t.draggingAreaType="",t.dataSet=[],t.viewDataSet=[],t.optionLabel=[],t.itemAttributeFather={},t.formAttributeFather={},t.childFromBoolean=!1,t.childArr=[],t.formAttribute={labelPosition:"right",labelSuffix:"：",labelWidth:"120",formList:[]},t.itemAttribute={sourceDataType:"",type:"",label:"",key:"",placeHolder:"",value:"",span:24,itemMultiple:!1,itemMultipleLimit:1,clearAble:!1,disabled:!1,required:!1,options:[],parameterList:[],performResult:"",cols:[],dataLabel:"",dataValue:"",dataSetVal:"",dataQueryList:[],associatedNodeList:[],alertType:"",buttonType:"",centerFont:!1,description:"",showIcon:!1,editable:!1,readable:!1,recordable:!1,rules:[{required:!1,message:""}],bindValue:{dateValue:"",dateSpecify:"",systemDate:"",variableDate:"",selectDate:"",countDate:"",numDate:0,predestination:""},addLine:!1,addSetList:[],flowVisibleCode:"",dictFlagValue:1,defaultValue:null,remoteDataUrl:"",remoteDataLabel:"",remoteDataValue:"",showConfig:null,remoteDataType:"get",mutexSetList:[],origId:"",filterText:[],filterConfig:null,refreshLoading:!1,loadingPrimKey:[],splitTable:[],addMore:!1},t}return Object(s["a"])(a,[{key:"watchForm",value:function(t){t&&t.formList&&this.queryFormData()}},{key:"handleDragStart",value:function(t,e){this.draggingType=e,this.draggingArea="draggingTooles"}},{key:"handleSomethingDrop",value:function(){"draggingTooles"===this.draggingArea&&this.generateFormItem("single",24)}},{key:"childCancle",value:function(){this.formAttribute=this.formAttributeFather,this.itemAttribute=this.itemAttributeFather}},{key:"childSave",value:function(t,e){this.formAttributeFather.formList.forEach((function(a){"childFrom"===a.type&&a.key===e?a.value=t:"table"===a.type&&a.key===e&&(a.addTemplate=t)})),console.log(this.formAttributeFather),this.itemAttributeFather.value=t,this.formAttribute=this.formAttributeFather,this.itemAttribute=this.itemAttributeFather}},{key:"fromChange",value:function(t){this.formAttributeFather=this.formAttribute,this.itemAttributeFather=this.itemAttribute,this.childFromBoolean=!0,t.value.formList?this.formAttribute=t.value:!0===this.childFromBoolean&&(this.formAttribute={labelPosition:"right",labelSuffix:"：",labelWidth:"120",formList:[]},this.itemAttribute={sourceDataType:"",type:"",label:"",key:"",placeHolder:"",value:"",span:24,itemMultiple:!1,itemMultipleLimit:1,clearAble:!1,disabled:!1,required:!1,options:[],parameterList:[],performResult:"",cols:[],dataLabel:"",dataValue:"",dataSetVal:"",dataQueryList:[],associatedNodeList:[],alertType:"",buttonType:"",centerFont:!1,description:"",showIcon:!1,editable:!1,readable:!1,recordable:!1,rules:[{required:!1,message:""}],bindValue:{dateValue:"",dateSpecify:"",systemDate:"",variableDate:"",selectDate:"",countDate:"",numDate:0,predestination:""},addLine:!1,addSetList:[],flowVisibleCode:"",dictFlagValue:1,defaultValue:null,remoteDataUrl:"",remoteDataLabel:"",remoteDataValue:"",showConfig:null,remoteDataType:"get",mutexSetList:[],origId:"",filterText:[],filterConfig:null,refreshLoading:!1,loadingPrimKey:[],splitTable:[],addMore:!1})}},{key:"generateFormItem",value:function(t,e){var a={},i="yejijizhunchae";a={sourceDataType:"static",type:this.draggingType,key:i,placeHolder:"请输入",value:"",span:e,editable:!1,readable:!1,recordable:!1,clearAble:!1,disabled:!1,required:!1,rules:[{required:!1,message:""}],dataQueryList:[],performResult:"",parameterList:[],substanceText:"",addSetList:[],mutexSetList:[],origId:"",bindValue:{},addLine:!1,remoteDataUrl:"",remoteDataLabel:"",remoteDataValue:"",remoteDataType:"get",filterText:[],addTemplate:{},splitTable:[],addMore:!1},"text"===this.draggingType?(a.label="单行文本",a.sourceDataType="dataView"):"number"===this.draggingType?(a.label="数字",a.placeHolder="请输入数字",a.sourceDataType="dataView",a.accuracy=2):"textarea"===this.draggingType?(a.label="多行文本",a.sourceDataType="dataView"):"table"===this.draggingType?(a.label="表格",a.cols=[],a.value=[],a.datas=[],a.associatedNodeList=[],a.sourceDataType="dataView",a.dictFlagValue=1,a.refreshLoading=!1,a.loadingPrimKey=[],a.addTemplate={},a.splitTable=[]):"date"===this.draggingType?(a.label="日期",a.bindValue={dateValue:"",dateSpecify:"",systemDate:"",variableDate:"",selectDate:"",countDate:"",numDate:0,predestination:""},a.sourceDataType="dataView"):"select"===this.draggingType?(a.label="下拉选择器",a.value=[],a.options=[],a.itemMultiple=!1,a.itemMultipleLimit=1,a.associatedNodeList=[]):"cascader"===this.draggingType?(a.label="级联选择器",a.options=[],a.value=[],a.associatedNodeList=[]):"radioGroup"===this.draggingType?(a.label="单选框组",a.associatedNodeList=[],a.options=[]):"checkboxGroup"===this.draggingType?(a.label="多选框组",a.options=[],a.value=[],a.associatedNodeList=[]):"inputNumber"===this.draggingType?(a.label="计数器",a.bindValue={countDate:"",numDate:""}):"switch"===this.draggingType?(a.label="开关",a.value=!1):"ueditor"===this.draggingType?a.label="富文本编辑器":"upload"===this.draggingType?(a.label="上传",a.value=[]):"alert"===this.draggingType?(a.label="提示卡",a.value="",a.alertType="success",a.description="",a.centerFont=!1,a.showIcon=!0):"hidden"===this.draggingType?(a.label="隐藏项",a.value=""):"button"===this.draggingType?(a.label="按钮",a.buttonType="",a.value="按钮"):"childFrom"===this.draggingType?(a.label="子表单",a.value={}):"password"===this.draggingType?(a.label="密码框",a.value=""):"transfer"===this.draggingType&&(a.label="穿梭框",a.value=[],a.options=[],a.itemMultiple=!1,a.itemMultipleLimit=1,a.associatedNodeList=[]),"single"===t&&this.formAttribute.formList.push(a),"button"===a.type&&this.getDataPushSet(),this.draggingType="",a.key&&""!==a.key&&(this.itemAttribute=a);var r=[];this.formAttribute.formList.forEach((function(t){if(t.key===a.key&&r.push(t),r.length>1){var e=Math.floor(90*Math.random())+10;a.key=m.a.convertToPinyinString(a.label,"",m.a.WITHOUT_TONE).concat(e.toString())}else a.key=m.a.convertToPinyinString(a.label,"",m.a.WITHOUT_TONE)}))}},{key:"draggingAreaChange",value:function(t){this.draggingArea=t}},{key:"draggingAreaTypeChange",value:function(t){this.draggingAreaType=t}},{key:"clickActiveItem",value:function(t){var e=this;if(this.childArr=[],this.optionLabel=Object(b["a"])(this.dataSet,"id",t.dataSetVal)?Object(b["a"])(this.dataSet,"id",t.dataSetVal)["fields"]:[],this.optionLabel.length>0){var a=v()(this.optionLabel);"select"===t.type&&(t.cols=a.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{prop:t.fieldCode,label:t.fieldName})})))}t.dataLabel&&!Array.isArray(t.dataLabel)&&t.dataLabel.length>0&&(t.dataLabel=[t.dataLabel]),"table"===t.type&&t.cols.length>0&&t.cols.forEach((function(t){e.childArr.push({value:t.fieldCode,label:t.fieldName})})),this.itemAttribute=t,console.log(t.label,t),this.stopBubble("sourceDataType")}},{key:"stopBubble",value:function(t){if(t&&t.stopPropagation)t.stopPropagation();else{var e=window.event;null!==e&&(e.cancelBubble=!0)}}},{key:"queryFormData",value:function(){var t=v()(this.globalFormAttribute);t&&(t.formList.forEach((function(t){Object.prototype.hasOwnProperty.call(t,"dataQueryList")||(t.dataQueryList=[]),Object.prototype.hasOwnProperty.call(t,"addSetList")||(t.addSetList=[]),Object.prototype.hasOwnProperty.call(t,"bindValue")||(t.bindValue={}),"table"!==t.type||t.loadingPrimKey||(t.refreshLoading=!1,t.loadingPrimKey=[])})),this.formAttribute=t,Object.prototype.hasOwnProperty.call(this.formAttribute,"labelSuffix")||(this.formAttribute.labelSuffix=":"),Object.prototype.hasOwnProperty.call(this.formAttribute,"labelWidth")||(this.formAttribute.labelWidth="120"),Object.prototype.hasOwnProperty.call(this.formAttribute,"labelPosition")||(this.formAttribute.labelPosition="right"))}},{key:"getDataSet",value:function(){var t=this;Object(p["e"])({}).then((function(e){var a=e.data,i=e.error;a?(t.dataSet=a,t.viewDataSet=a):t.$message.error(i.message)}))}},{key:"getDataPushSet",value:function(){var t=this;Object(p["e"])({type:"1"}).then((function(e){var a=e.data,i=e.error;a?t.dataSet=a:t.$message.error(i.message)}))}},{key:"created",value:function(){this.queryFormData(),this.getDataSet()}}]),a}(c["e"]);Object(u["a"])([T.State((function(t){return t.customForm}))],L.prototype,"globalFormAttribute",void 0),Object(u["a"])([Object(c["f"])("globalFormAttribute")],L.prototype,"watchForm",null),L=Object(u["a"])([Object(c["a"])({components:{formDisplay:g["a"],RightSet:f["a"]}})],L);var D=L,C=D,S=(a("249b"),a("b1d5"),a("2877")),k=Object(S["a"])(C,i,r,!1,null,"20191330",null);e["default"]=k.exports},b1d5:function(t,e,a){"use strict";var i=a("52a3"),r=a.n(i);r.a},d60e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-52025603.c7f34881.js.map