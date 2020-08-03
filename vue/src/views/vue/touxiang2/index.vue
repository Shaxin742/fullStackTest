
<template>
  <div class="content">
    <cut-image @ok="onok" @cancel="cancel" />
  </div>
</template>
<script>
import cutImage from '@/components/imgCut'
export default {
  components: { cutImage },
  data() {
    return {
      url: '',
      path: ''
    }
  },
  methods: {
    onok(ev) {
      this.path = ev.path
      this.url = ''
    },
    cancel() {
      // url设置为空，隐藏控件
      this.$message.error('取消')
    }
  }
}
</script>
