(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7e06d22"],{"1fb9":function(t,e,a){"use strict";var n=a("8fc9"),i=a.n(n);i.a},"460b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"songListen"},[a("el-button",{attrs:{size:"small"},on:{click:t.listenZhou}},[t._v(" 我要听说好不哭 ")]),a("el-button",{attrs:{size:"small"},on:{click:t.listenli}},[t._v(" 我要听低空飞行 ")])],1),a("SongPlay",{ref:"songplay",attrs:{data:t.songData}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con"},["{}"!==JSON.stringify(t.data)?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.audio.waiting,expression:"audio.waiting"}],staticStyle:{"text-align":"center"},on:{click:t.closeVol}},[a("div",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"10px"}},[a("span",[t._v("歌曲名："+t._s(t.title))])]),t.lrcShow?a("div",{staticClass:"logo",class:{rotating:t.audio.playing},on:{click:function(e){t.lrcShow=!t.lrcShow}}},[a("img",{staticClass:"bg",attrs:{src:t.logoUrl,alt:"logo"}})]):t._e(),t.lrcShow?t._e():a("div",{ref:"lrcDiv",staticClass:"lrc",on:{click:function(e){t.lrcShow=!t.lrcShow}}},[a("p",{staticStyle:{height:"80px"}}),0===t.lrcList.length?a("span",[t._v(t._s(t.lrc))]):t._e(),t.lrcList.length>=0?a("ul",t._l(t.lrcList,(function(e,n){return a("li",{key:n,class:{currLrc:n===t.lrcIndex}},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"di main-wrap"},[a("audio",{ref:"audio",staticClass:"dn",attrs:{src:t.songUrl,preload:t.audio.preload},on:{play:t.onPlay,error:t.onError,waiting:t.onWaiting,pause:t.onPause,timeupdate:t.onTimeupdate,loadedmetadata:t.onLoadedmetadata}}),a("div",{staticClass:"slideCon"},[a("el-slider",{directives:[{name:"show",rawName:"v-show",value:!t.controlList.noProcess,expression:"!controlList.noProcess"}],staticClass:"slider",attrs:{"format-tooltip":t.formatProcessToolTip},on:{change:t.changeCurrentTime},model:{value:t.sliderTime,callback:function(e){t.sliderTime=e},expression:"sliderTime"}})],1),a("div",{staticClass:"playCon"},[a("el-row",[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:12}},[a("span",[t._v(t._s(t._f("formatSecond")(t.audio.currentTime)))])]),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("span",[t._v(t._s(t._f("formatSecond")(t.audio.maxTime)))])])],1),a("el-row",[a("el-col",{attrs:{span:2}},[a("span",{staticClass:"volume"},[a("i",{staticClass:"el-icon-ali-play",staticStyle:{"font-size":"0px"}})])]),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:20}},[a("span",{on:{click:t.startPlayOrPause}},[a("svg-icon",{staticStyle:{height:"20px",width:"20px"},attrs:{"icon-class":t.audio.playing?"play":"pause"}})],1)]),a("el-col",{attrs:{span:2}},[a("span",{staticClass:"volume",on:{click:function(e){return e.stopPropagation(),t.showVol(e)}}},[a("svg-icon",{attrs:{"icon-class":"volume"},on:{click:function(e){e.stopPropagation(),t.volumeShow=!t.volumeShow}}}),t.volumeShow?a("div",{staticClass:"volSlideCon"},[a("el-slider",{directives:[{name:"show",rawName:"v-show",value:!t.controlList.noVolume,expression:"!controlList.noVolume"}],staticClass:"slider",attrs:{"format-tooltip":t.formatVolumeToolTip,vertical:""},on:{change:t.changeVolume},model:{value:t.sliderVolume,callback:function(e){t.sliderVolume=e},expression:"sliderVolume"}})],1):t._e()],1)])],1)],1)])])]):t._e()])},r=[],s=(a("4160"),a("d81d"),a("fb6a"),a("b0c0"),a("a9e3"),a("ac1f"),a("466d"),a("5319"),a("1276"),a("159b"),a("2909")),l=a("53ca");function c(t){var e=Object(l["a"])(t);if("number"===e||"string"===e){t=parseInt(t);var a=Math.floor(t/3600);t-=3600*a;var n=Math.floor(t/60);return t-=60*n,("0"+n).slice(-2)+":"+("0"+t).slice(-2)}return"0:00:00"}var u={name:"AudioPlay",filters:{formatSecond:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c(t)}},props:{data:{type:Object,required:!0}},data:function(){return{currentTime:0,logoUrl:"http://cdn.duitang.com/uploads/item/201309/26/20130926095128_SiPMh.jpeg",songUrl:"",lrcObj:"",lrc:"",lrcList:[],lrcIndex:0,title:"",audio:{currentTime:0,maxTime:0,playing:!1,muted:!1,speed:1,waiting:!0,preload:"auto"},sliderTime:0,volumeShow:!1,sliderVolume:100,lrcShow:!0,controlList:{noDownload:!0,noMuted:!0,noVolume:!1,noProcess:!1,onlyOnePlaying:!1,noSpeed:!0}}},watch:{data:{handler:function(t){var e=this;if(t&&"{}"!==JSON.stringify(t)){var a=t;this.lrcList=[],this.songUrl=a.url,a.lrc=a.lrc.replace(/[\\r\\n]/g,""),""!==a.lrc?this.lrcObj=this.handleLrc(a.lrc):this.lrc="暂无歌词",a.imgUrl&&(this.logoUrl=a.imgUrl),this.title=a.name,this.$nextTick((function(){e.$refs.audio.pause()}))}},immediate:!0}},methods:{closeVol:function(){this.volumeShow=!1},showVol:function(){this.volumeShow=!0},formatProcessToolTip:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t=parseInt(this.audio.maxTime/100*t),"进度条: "+c(t)},formatVolumeToolTip:function(t){return"音量条: "+t},changeCurrentTime:function(t){this.$refs.audio.currentTime=parseInt(t/100*this.audio.maxTime)},changeVolume:function(t){this.$refs.audio.volume=t/100,this.sliderVolume=t},startPlayOrPause:function(){return this.audio.playing?this.pause():this.play()},play:function(){this.$refs.audio.play()},pause:function(){this.$refs.audio.pause()},onPause:function(){this.audio.playing=!1},handleLrc:function(t){var e=this,a=t.split("[");t.split("[").map((function(t){e.lrcList.push(t.slice(9))})),this.lrcList.shift(),a.shift();var n=[];a.map((function(t){n.push("["+t)})),a=n;for(var i=[],o=0;o<a.length;o++){var r=decodeURIComponent(a[o]),s=/\[\d*:\d*((\.|:)\d*)*\]/g,l=r.match(s);if(l)for(var c=r.replace(s,""),u=0,d=l.length;u<d;u++){var m=l[u],h=Number(String(m.match(/\[\d*/i)).slice(1)),f=Number(String(m.match(/:\d*/i)).slice(1)),p=60*h+f;i.push({T:p,V:c})}}return i},onError:function(){this.audio.waiting=!0,this.$message.error("文件错误")},onWaiting:function(t){console.log(t)},onPlay:function(t){if(this.audio.playing=!0,this.audio.loading=!1,this.controlList.onlyOnePlaying){var e=t.target,a=document.getElementsByTagName("audio");Object(s["a"])(a).forEach((function(t){t!==e&&t.pause()}))}},onTimeupdate:function(t){var e=this;this.audio.currentTime=t.target.currentTime,this.sliderTime=parseInt(this.audio.currentTime/this.audio.maxTime*100);var a=this;"暂无歌词"!==this.lrc&&(a.lrcObj.map((function(t,a){t.T===Math.floor(e.audio.currentTime)&&(e.lrcIndex=a)})),this.$refs.lrcDiv&&(this.$refs.lrcDiv.scrollTop=16*this.lrcIndex))},onLoadedmetadata:function(t){this.audio.waiting=!1,this.audio.maxTime=parseInt(t.target.duration)}}},d=u,m=(a("a8a1"),a("2877")),h=Object(m["a"])(d,o,r,!1,null,"586de732",null),f=h.exports,p=a("74eb"),g={name:"Song",components:{SongPlay:f},data:function(){return{songData:{}}},methods:{listenZhou:function(){this.getSongs("周")},listenli:function(){this.getSongs("李")},getSongs:function(t){var e=this;Object(p["d"])({name:t}).then((function(t){e.songData=t.data}))}}},v=g,b=(a("1fb9"),Object(m["a"])(v,n,i,!1,null,"7fe98732",null));e["default"]=b.exports},"466d":function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),o=a("50c4"),r=a("1d80"),s=a("8aa5"),l=a("14c3");n("match",1,(function(t,e,a){return[function(e){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var r=i(t),c=String(this);if(!r.global)return l(r,c);var u=r.unicode;r.lastIndex=0;var d,m=[],h=0;while(null!==(d=l(r,c))){var f=String(d[0]);m[h]=f,""===f&&(r.lastIndex=s(c,o(r.lastIndex),u)),h++}return 0===h?null:m}]}))},"74eb":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"f",(function(){return m}));var n=a("b775"),i=a("114e"),o=i["a"].serverUrl,r="dash-api/";function s(t){return Object(n["a"])({url:o("".concat(r,"components/getSongs")),method:"get",params:t})}function l(t){return Object(n["a"])({url:o("".concat(r,"components/formsubmit")),method:"post",headers:{"Content-Type":"multipart/form-data;boundary = "+(new Date).getTime()},data:t})}function c(t){return Object(n["a"])({url:o("".concat(r,"components/getTableData")),method:"get",params:t})}function u(t){return Object(n["a"])({url:o("".concat(r,"components/deleteTableData")),method:"delete",data:t})}function d(t){return console.log(t),Object(n["a"])({url:o("".concat(r,"components/addTableData")),method:"post",data:t})}function m(t){return Object(n["a"])({url:o("".concat(r,"components/updateTableData")),method:"patch",data:t})}},"8fc9":function(t,e,a){},a8a1:function(t,e,a){"use strict";var n=a("c0de"),i=a.n(n);i.a},c0de:function(t,e,a){}}]);