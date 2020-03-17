<template>
  <div>
    <pdf class="sjsj" :src="data" :page="5">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
  </div>
</template>

<script>
import pdf from './pdf'
const json = require('./jj.json')
export default {
  components: {
    pdf
  },
  data: function() {
    return {
      data: json.data
    }
  }
}
</script>

<style scoped>
.sjsj{
  width: 400px;
}
</style>
