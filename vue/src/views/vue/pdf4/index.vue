<template>
  <div>
    <pdf class="sjsj" src="http://image.cache.timepack.cn/nodejs.pdf" :page="5">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
  </div>
</template>

<script>
import pdf from './pdf'
export default {
  components: {
    pdf
  }
}
</script>

<style scoped>
.sjsj{
  width: 400px;
}
</style>
