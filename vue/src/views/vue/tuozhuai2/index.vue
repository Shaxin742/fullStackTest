<template>
  <div class="con">
    <div class="top" @dragover="allowDrop($event)" @drop="ondrop($event)">123</div>
    <div
      ref="line"
      :style="{'top':lineTop+'px'}"
      class="line"
      draggable="true"
      @dragstart="dragStart($event)"
      @dragOver="handleDragEnter($event)"
      @dragLeave="handleDragLeave($event)"
      @dragEnter="handleDragEnter($event)"
    />
    <!-- @mousedown="mouseDown" -->
    <div class="bottom" @drop="ondrop($event)" @dragover="allowDrop($event)" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      left: 0,
      top: 0,
      lineTop: 100
    }
  },
  methods: {
    handleDragEnter(e) {
      e.preventDefault()
    },
    handleDragLeave(e) {
      e.preventDefault()
    },
    allowDrop(ev) {
      ev.preventDefault()
    },
    dragStart(ev) {
      console.log(ev)
    },
    ondrop(ev) {
      console.log('ev', ev)
      this.lineTop = ev.clientY
    },
    mouseDown(ev) {
      console.log(ev)
      this.$refs.line.addEventListener('mousemove', this.mouseMove, false)
      this.$refs.line.addEventListener('mouseup', this.mouseUp, false)
    },
    mouseMove(ev) {
      console.log('mouseMove', ev)
      this.lineTop = ev.pageY
      console.log(this.lineTop)
    },
    mouseUp(ev) {
      console.log('mouseUp', ev)
      this.$refs.line.removeEventListener('mousemove', this.mouseMove, false)
      this.$refs.line.removeEventListener('mouseup', this.mouseUp, false)
    }
  }
}
</script>
<style lang="scss" scoped>
.con {
  position: relative;
  div+div{
    margin: 30px 0;
  }
  .top {
    background: green;
    height: 80px;
  }
  .line {
    height: 8px;
    width: 100%;
    margin: 8px 0;
    left: 0;
    position: absolute;
    background: black;
  }
  .bottom {
    background: yellow;
    height: 80px;
  }
}
</style>
