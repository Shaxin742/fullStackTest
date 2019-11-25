<template>
  <div>
    <div>{{ time|time2stamp }}</div>
    <div>

      <el-radio-group v-for="(v,i) in 4" :key="v" v-model="radio" size="mini" @change="test(i)">
        <el-radio label="1" @click="changeVal('1')">备选项</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FilterComp',
  filters: {
    time2stamp(val) {
      const date = new Date(Number(val))
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDay()
      const hour = date.getHours()
      const min = date.getMinutes()
      const sec = date.getSeconds()
      return (
        year + '/' + month + '/' + day + '/' + hour + '/' + min + '/' + sec
      )
    }
  },
  data: function() {
    return {
      radio: 0,
      time: '1573609512016'
    }
  },
  watch: {
    time(val, oldVal) {
      console.log(val)
    }
  },
  created() {
    this.time = '1553609512016'
  },
  methods: {
    test(e) {
      console.log(e, this.radio)
    },
    changeVal(v) {
      this.radio = v
    }
  }
}
</script>
