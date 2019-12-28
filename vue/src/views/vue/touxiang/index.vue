
<template>
  <div class="content">
    <!-- <img :src="path"> -->
    <cut-image :url="url" :fixed="true" :width="200" :height="200" @ok="onok" @cancel="oncancle" />
  </div>
</template>
<script>
import cutImage from './cutImage.vue'
export default {
  components: { cutImage },
  data() {
    return {
      url: 'http://dl.ppt123.net/pptbj/201603/2016030410190920.jpg',
      path: ''
    }
  },
  methods: {
    onok(ev) {
      this.path = ev.path
      this.url = ''
    },
    oncancle() {
      // url设置为空，隐藏控件
      this.url = ''
    }
  }
}
</script>
