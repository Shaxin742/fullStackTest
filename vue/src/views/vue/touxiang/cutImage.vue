<template>
  <div>
    <canvas id="imgCanvas" />
    <div class="body">
      <img
        ref="image"
        :src="url"
        :style="{left: image.left + 'px', top: image.top + 'px', width: image.width + 'px', height: image.height + 'px'}"
        @load="loadImage"
      >
      <div
        class="plank"
        @mousedown="mousedown($event, 'plank')"
        @mousemove="mousemove($event)"
        @mouseup="mouseup"
      >
        <div
          class="frame"
          :style="{
            left: frame.left + 'px',
            top: frame.top + 'px',
            width: frame.width + 'px',
            height: frame.height + 'px',
            pointerEvents: (isDowm?'none':'')}"
          @mousedown="mousedown($event, 'frame')"
          @mousedown.stop.prevent="touchHandle"
        >
          <canvas
            v-if="mask.show"
            class="canvas"
            :style="{width: frame.width + 'px', height: frame.height + 'px'}"
            canvas-id="canvas"
          />
          <div class="rect" />
          <div class="line-one" />
          <div class="line-two" />
          <div class="line-three" />
          <div class="line-four" />
          <div
            class="frame-left"
            @mousedown="mousedown($event, 'left')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-right"
            @mousedown="mousedown($event, 'right')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-top"
            @mousedown="mousedown($event, 'top')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-bottom"
            @mousedown="mousedown($event, 'bottom')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-left-top"
            @mousedown="mousedown($event, 'left-top')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-left-bottom"
            @mousedown="mousedown($event, 'left-bottom')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-right-top"
            @mousedown="mousedown($event, 'right-top')"
            @mousedown.stop.prevent="touchHandle"
          />
          <div
            class="frame-right-bottom"
            @mousedown="mousedown($event, 'right-bottom')"
            @mousedown.stop.prevent="touchHandle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      mask: { show: false },
      isDowm: false,
      setX: 0, // 当鼠标第一次点下时的位置  计算用
      setY: 0,

      image: { // 图片位置大小
        left: 20,
        top: 20,
        width: '300',
        height: 'auto'
      },
      frame: { // 截取框位置大小
        left: 0,
        top: 0,
        width: this.width,
        height: this.height
      },
      start: { // 初始值存储
        frame: {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        },
        image: {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        }
      }
    }
  },
  watch: {
    url: {
      immediate: true,
      handler: function(val, oldVal) {
        this.$nextTick(() => {
          this.drawImage()
        })
      }
    }
  },
  methods: {
    touchHandle() {},
    mousedown(ev, type) {
      console.log(ev, type)
      this.isDowm = type
      this.setX = ev.offsetX
      this.setY = ev.offsetY
      console.log('fream', this.frame)
    },
    mousemove(ev, type) {
      if (!this.isDowm) {
        return
      }
      var maxLeft = this.frame.left + this.frame.width
      var maxTop = this.frame.top + this.frame.height
      switch (this.isDowm) {
        case 'frame':
          this.frame.left = ev.offsetX - this.setX
          this.frame.top = ev.offsetY - this.setY
          break
        case 'left':
          this.move_l(ev, maxLeft)
          break
        case 'right':
          this.move_r(ev)
          break
        case 'top':
          this.move_t(ev, maxTop)
          break
        case 'bottom':
          this.move_b(ev)
          break
        case 'left-top':
          this.move_l(ev, maxLeft)
          this.move_t(ev, maxTop)
          break
        case 'left-bottom':
          this.move_l(ev, maxLeft)
          this.move_b(ev)
          break
        case 'right-top':
          this.move_r(ev)
          this.move_t(ev, maxTop)
          break
        case 'right-bottom':
          this.move_r(ev)
          this.move_b(ev)
          break
      }
      // console.log(ev.offsetX)
    },
    move_l(e, maxLeft) {
      var maxW = this.frame.left + this.frame.width - 2
      var disW = this.frame.left - e.offsetX
      this.frame.width = Math.min(Math.max(0, this.frame.width + disW), maxW)
      this.frame.left = Math.max(Math.min(maxLeft, this.frame.left - disW), 0)
    },
    move_r(e) {
      var maxW = this.image.width - this.frame.left - 2
      var dragW = e.offsetX - this.setX - this.frame.left
      this.frame.width = Math.min(Math.max(0, dragW), maxW)
    },
    move_b(e) {
      var maxH = this.image.height - this.frame.top - 2
      var dragH = e.offsetY - this.frame.top
      this.frame.height = Math.min(Math.max(0, dragH), maxH)
    },
    move_t(e, maxTop) {
      var maxH = this.frame.top + this.frame.height - 2
      var disH = this.frame.top - e.offsetY
      this.frame.height = Math.min(Math.max(0, this.frame.height + disH), maxH)
      this.frame.top = Math.max(Math.min(maxTop, this.frame.top - disH), 0)
    },
    mouseup(ev, type) {
      this.isDowm = false
    },
    drawImage() {
      var imgCanvas = document.getElementById('imgCanvas')
      var ctx = imgCanvas.getContext('2d')
      var img = new Image()
      img.onload = function() {
        ctx.drawImage(img, 0, 0)
      }

      img.src = this.url
    },
    loadImage(ev) {
      var that = this
      var img = new Image()
      img.src = that.url
      img.onload = function() {
        const proportion = img.width / img.height
        console.log('width:' + img.width + ',height:' + img.height)
        if (img.width >= img.height) {
          that.image.width = 600
          that.image.height = 600 / proportion
        } else {
          that.image.height = 600
          that.image.width = 600 * proportion
        }
      }

      this.start.frame = cloneDeep(this.frame)
      this.start.image = cloneDeep(this.image)
    }
  }
}
</script>

<style scoped lang='scss'>
.body {
  position: relative;
  background: green;
  height: 800px;
}
.mask {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: black;
  opacity: 0.4;
}
.plank {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.image {
  position: absolute;
}
.frame {
  position: absolute;
}
.canvas {
  position: absolute;
  display: block;
  left: 0px;
  top: 0px;
}
.rect {
  position: absolute;
  left: -2px;
  top: -2px;
  width: 100%;
  height: 100%;
  border: 2px solid white;
}
.line-one {
  position: absolute;
  width: 100%;
  height: 1px;
  background: white;
  left: 0;
  top: 33.3%;
}
.line-two {
  position: absolute;
  width: 100%;
  height: 1px;
  background: white;
  left: 0;
  top: 66.7%;
}
.line-three {
  position: absolute;
  width: 1px;
  height: 100%;
  background: white;
  top: 0;
  left: 33.3%;
}
.line-four {
  position: absolute;
  width: 1px;
  height: 100%;
  background: white;
  top: 0;
  left: 66.7%;
}
.frame-left {
  position: absolute;
  height: 100%;
  width: 8px;
  left: -4px;
  top: 0;
}
.frame-right {
  position: absolute;
  height: 100%;
  width: 8px;
  right: -4px;
  top: 0;
}
.frame-top {
  position: absolute;
  width: 100%;
  height: 8px;
  top: -4px;
  left: 0;
}
.frame-bottom {
  position: absolute;
  width: 100%;
  height: 8px;
  bottom: -4px;
  left: 0;
}
.frame-left-top {
  position: absolute;
  width: 20px;
  height: 20px;
  left: -6px;
  top: -6px;
  border-left: 4px solid red;
  border-top: 4px solid red;
}
.frame-left-bottom {
  position: absolute;
  width: 20px;
  height: 20px;
  left: -6px;
  bottom: -6px;
  border-left: 4px solid red;
  border-bottom: 4px solid red;
}
.frame-right-top {
  position: absolute;
  width: 20px;
  height: 20px;
  right: -6px;
  top: -6px;
  border-right: 4px solid red;
  border-top: 4px solid red;
}
.frame-right-bottom {
  position: absolute;
  width: 20px;
  height: 20px;
  right: -6px;
  bottom: -6px;
  border-right: 4px solid red;
  border-bottom: 4px solid red;
}
</style>
