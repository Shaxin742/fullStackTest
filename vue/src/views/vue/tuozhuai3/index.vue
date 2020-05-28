<template>
  <div>
    <div
      class="con"
      @drop="dropItem($event)"
      @dragover="allowDrop($event)"
    >222</div>
    <div
      class="item"
      draggable="true"
      @dragstart="drag($event)"
      @dragOver="handleDragEnter($event)"
      @dragLeave="handleDragLeave($event)"
      @dragEnter="handleDragEnter($event)"
    >123</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 1
    }
  },
  methods: {
    drag(ev) {
      console.log(ev)
    },
    allowDrop(ev) {
      ev.preventDefault()
    },
    dropItem(ev, item) {
      console.log('drop', ev)
    },
    handleDragEnter(e) {
      e.preventDefault()
    },
    handleDragLeave(e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped lang='scss'>
.con {
  height: 400px;
  width: 100%;
}
.item {
  height: 20px;
}
</style>
