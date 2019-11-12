<template>
  <div class="dashboard-container">
    {{ $t('message.text') }}
    <div class="dashboard-text">name: {{ name }}</div>
    <el-date-picker v-model="dateVal" type="date" placeholder="选择日期" />
    <div />
    <div id="chart_example" class="chart_example" />
  </div>
</template>

<script>
import echarts from 'echarts'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      dateVal: '1999-02-02',
      option: {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
        },
        series: [
          {
            type: 'pie',
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                opacity: 0.7,
                borderWidth: 3,
                borderColor: 'white'
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                color: 'yellow',
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' }
            ]
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    const myChart = echarts.init(document.getElementById('chart_example'))
    myChart.setOption(this.option)
    myChart.on('click', function(e) {
      console.log(e)
    })
    var that = this
    myChart.on('legendselectchanged', function(e) {
      const arr = Object.values(e.selected)
      const len = arr.filter(v => {
        return v
      })
      if (len.length === 1) {
        that.option.series[0].itemStyle.normal.borderWidth = 0
        myChart.setOption(that.option)
      } else {
        that.option.series[0].itemStyle.normal.borderWidth = 3
        myChart.setOption(that.option)
      }
    })
    myChart.on('type', function(e) {
      console.log(e)
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.chart_example {
  height: 300px;
  width: 300px;
}
</style>
