<template>
  <div>
    <Split ref="mySplit" style="height: 500px;" on-drag="onDrag" @onDragEnd="onDragEnd" @onDragStart="onDragStart">
      <SplitArea :size="25">
        panel left
      </SplitArea>
      <SplitArea :size="75">
        <Split style="height: 500px;" direction="vertical">
          <SplitArea>
            panel left
          </SplitArea>
          <SplitArea>
            panel center
          </SplitArea>
        </Split>
      </SplitArea>
    </Split>
  </div>
</template>

<script>
import { Split, SplitArea } from 'vue-split-panel'
export default {
  components: {
    SplitArea, Split
  },
  methods: {
    onDragStart(size) {
      console.log('Drag Start', size) // callback existing size
    },
    onDrag(size) {
      console.log('on Drag', size) // callback new size
    },
    onDragEnd(size) {
      console.log('Drag End', size) // callback new size
    },
    Reset() {
      console.log(this.$refs.mySplit.reset())
    },
    getSizes() {
      console.log(this.$refs.mySplit.getSizes())
    }
  }
}
</script>

<style>

</style>
