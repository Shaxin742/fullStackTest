<template>
  <span class="scroll-container">
    <el-scrollbar
      ref="scrollContainer"
      class="scroll"
      :vertical="false"
      @wheel.native.prevent="handleScroll"
    >
      <slot />
    </el-scrollbar>
    <span class="closeAllCon">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-button icon="el-icon-close" class="fr btn" size="mini" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </span>
</template>

<script>
const tagAndTagSpacing = 4 // tagAndTagSpacing
export default {
  name: 'ScrollPane',
  data() {
    return {
      left: 0
    }
  },
  computed: {
    scrollWrapper() {
      return this.$refs.scrollContainer.$refs.wrap
    }
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    },
    moveToTarget(currentTag) {
      const $container = this.$refs.scrollContainer.$el
      const $containerWidth = $container.offsetWidth
      const $scrollWrapper = this.scrollWrapper
      const tagList = this.$parent.$refs.tag
      let firstTag = null
      let lastTag = null
      // find first tag and last tag
      if (tagList.length > 0) {
        firstTag = tagList[0]
        lastTag = tagList[tagList.length - 1]
      }
      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft =
          $scrollWrapper.scrollWidth - $containerWidth
      } else {
        // find preTag and nextTag
        const currentIndex = tagList.findIndex(item => item === currentTag)
        const prevTag = tagList[currentIndex - 1]
        const nextTag = tagList[currentIndex + 1]
        // the tag's offsetLeft after of nextTag
        const afterNextTagOffsetLeft =
          nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing
        // the tag's offsetLeft before of prevTag
        const beforePrevTagOffsetLeft =
          prevTag.$el.offsetLeft - tagAndTagSpacing
        if (
          afterNextTagOffsetLeft >
          $scrollWrapper.scrollLeft + $containerWidth
        ) {
          $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
          $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
        }
      }
    },
    handleCommand(command) {
      if (command === 'all') {
        this.$emit('closeAll')
      } else {
        this.$emit('closeOthers')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  height: 100%;
  display: block;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .scroll {
    background: #eee;
  }
  .closeAllCon {
    height: 33px;
    width: 33px;
    background: white;
    position: absolute;
    top: 0;
    right: 0;
  }
  .btn {
    padding: 3px 6px;
    margin-top: 7px;
    margin-left: 5px;
  }
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 60px;
    }
  }
}
</style>
