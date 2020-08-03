<!--
 * @Author: ShaXin
 * @Date: 2020-08-03 15:24:19
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-08-03 16:17:47
 -->
<template>
  <div>
    <div class="row bg grayBg" style="padding-bottom:60px;">
      <div class="col-md-10 offset-md-1">
        <div class="row" style="margin-top:40px;">
          <div ref="imgCutterBox" class="col-md-6" style="height:458px;">
            <ImgCutter
              v-if="refresh"
              ref="imgCutterModal"
              :cross-origin="params.crossOrigin"
              :label="params.label"
              :rate="params.rate"
              :is-modal="params.isModal"
              :show-choose-btn="params.showChooseBtn"
              :lock-scroll="params.lockScroll"
              :box-width="params.boxWidth"
              :box-height="params.boxHeight"
              :cut-width="params.cutWidth"
              :cut-height="params.cutHeight"
              :size-change="params.sizeChange"
              :move-able="params.moveAble"
              :tool="params.tool"
              :original-graph="params.originalGraph"
              :do-not-display-copyright="false"
              tool-bgc="params.toolBgc"
              @error="catchError"
              @cutDown="cutDown"
            >
              <span slot="open" />
              <span v-if="params.isModal==false" slot="choose" />
              <span v-if="params.isModal==false" slot="cancel" />
              <span v-if="params.isModal==false" slot="confirm" />
            </ImgCutter>
          </div>
          <img :src="imgSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgCutter from "./ImgCutter";

export default {
  name: "App",
  components: {
    ImgCutter
  },
  data() {
    return {
      cutImgWidth: 250,
      cutImgHeight: 250,
      imgSrc: null,
      refresh: true,
      isForIe9: false,
      params: {
        label: "Crop local pictures",
        crossOrigin: true,
        crossOriginHeader: "*",
        rate: "",
        toolBgc: "none",
        isModal: false,
        showChooseBtn: true,
        lockScroll: true,
        boxWidth: 500,
        boxHeight: 458,
        cutWidth: 250,
        cutHeight: 250,
        sizeChange: true,
        moveAble: true,
        tool: true,
        originalGraph: false,
      },
    };
  },
  mounted() {
    let $imgCutterBox = this.$refs.imgCutterBox;
    this.params.boxWidth = $imgCutterBox.offsetWidth - 30;
  },
  methods: {
    cutDown: function(res) {
      console.log(res);
      this.imgSrc = res.dataURL;
    },
    forIe9: function() {
      this.$refs.imgCutterModal.handleOpen({
        name: this.cutImgSrc,
        src: this.cutImgSrc,
        width: this.cutImgWidth,
        height: this.cutImgHeight
      });
    },
    doRefresh: function() {
      this.refresh = false;
      this.$nextTick(() => {
        this.refresh = true;
      });
    },
    catchInput(e) {
      let val = e.target.value;
      let key = e.target.name;
      this[key] = val;
    },
    catchError(res) {
      console.log(res);
      window.alert(res.msg);
    },
    pluginExe: function(functionName) {
      this.$refs.imgCutterModal[functionName]();
    }
  }
};
</script>
<style scoped>
.bg {
  padding-top: 50px;
}

.grayBg {
  background: #f1f5f7;
}
.imgCutDownBox {
  width: 100%;
  background: #dedede;
  box-sizing: border-box;
  border: 1px solid #dedede;
}
.imgCutDownBoxContainer {
  width: 90%;
  height: 360px;
  overflow: hidden;
  margin: 20px auto;
  border: 1px solid #ccc;
  background: #fff;
  text-align: center;
}
.imgCutDownBoxContainer img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 50%;
  transform: translateY(-50%);
}
.imgCutDownTips {
  font-size: 0.8em;
  line-height: 360px;
  color: #c0c4cc;
}
.alipay {
  width: 200px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #333;
  display: inline-block;
  margin-right: 30px;
}
.alipay img {
  width: 100%;
}
.jumbotron {
  border-radius: 0;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  ) !important;
  padding: 4rem 0 0 0;
  color: #fff;
  text-align: center;
}
svg {
  shape-rendering: auto;
  width: 100%;
  height: 100px;
}
svg:not(:root) {
  overflow: hidden;
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
