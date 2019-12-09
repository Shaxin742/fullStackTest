<template>
  <div class="main">
    <div class="con" :class="{ 'active': isActive }">
      <div v-for="v in 4" :key="v" class="item" @click="tran">测试</div>
    </div>
    {{ name }}
    <div class="innerCon" :style="{top:top,left:left}" :class="{ 'active': isActive }">
      <div class="inner">
        <div class="innerVal">
          <h1 @click="isActive = !isActive">详情</h1>
          <!-- <p>详情详情详情详情详情</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixin from '@/mixins/map.js'
export default {
  mixins: [mixin],
  data: function() {
    return {
      isActive: false,
      top: '50%',
      left: '50%'
    }
  },
  methods: {
    tran(e) {
      console.log(e)
      // this.top = e.screenX
      // this.left = e.screenX
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
@function px2rem($px) {
  @return 1600/$px * 1rem;
}

.main {
  height: 100%;
  width: 100%;
  background: lightblue;
}
.con {
  // width: px2rem(220);
  width: 220px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 220px;
  transition: all 0.6s;
  &.active {
    height: 220px;
    padding: 10px;
    .item {
      margin: 0;
    }
  }
  .item {
    width: 100px;
    font-size: 12px;
    text-align: center;
    line-height: 100px;
    margin-left: 10px;
    height: 100px;
    background: red;
    transition: all 0.6s;
    &:hover {
      background: green;
    }
  }
}
.innerCon {
  transition-delay: 0.5s;
  transform-origin: 50% 50%;
  position: absolute;
  overflow: hidden;
  width: 0;
  // top: 50%;
  // left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s;
  z-index: 10;
  height: 0;
  background: yellow;
  text-align: center;
  .inner {
    // position: relative;
    height: 100%;
    width: 100%;
    .innerVal {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    h1 {
      flex-grow: 1; /* 属性用于设置或检索弹性盒的扩展比率。 */
      margin: 0;
    }
  }
  &.active {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    display: block;
    transition-delay: 0.5s;
  }
}
</style>
