<!--
 * @Author: ShaXin
 * @Date: 2020-05-26 16:56:10
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 14:15:02
 -->
<template>
  <div class="dashboard-container">
    <el-date-picker
      v-model="timeVal"
      type="date"
      placeholder="选择日期"
    />
    <win10-calendar :data="calendatArr" :time-val="timeVal" @selectChange="selectChange" />

    <Calendar :data="calendatArr" :time-val="timeVal" />

  </div>
</template>

<script>
import Win10Calendar from '@/components/Win10Calendar'
import Calendar from '@/components/Calendar'
import { getCalender } from '@/api/dashBoard'
import { cloneDeep } from 'lodash'
export default {
  name: 'Dashboard',
  components: {
    Win10Calendar, Calendar
  },
  data() {
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      timeVal: '',
      calendatArr: []
    }
  },
  watch: {
    timeVal(val) {
      this.getCalender(this.getNewDate(val))
    }
  },
  mounted() {
    this.timeVal = new Date()
  },
  methods: {
    async getCalender(data) {
      const params = {
        date: data
      }
      const res = await getCalender(params)
      console.log(res)
      this.calendatArr = cloneDeep(res.data)
    },

    getNewDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      return { year, month, day }
    },
    // 双点击选中
    viewItem(item, index) {
      console.log('view', item, index)
    },
    selectChange(item) {
      console.log('啊哈哈哈哈哈', item)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
