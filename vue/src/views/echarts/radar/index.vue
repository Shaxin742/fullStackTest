<template>
  <div>
    <chart-comp
      ref="chartComp"
      height="400px"
      :options="options"
    />
  </div>
</template>

<script>
import ChartComp from '@/components/chart'

export default {
  components: {
    ChartComp
  },
  data() {
    return {
      chart: null,
      options: {}
    }
  },
  mounted() {
    this.options = {
      color: ['#2A76CD', '#8217aa', '#44B365', '#EAA926', '#CC3D3D', '#8554C9', '#3C3A9A', '#3A4777'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      radar: {
        radius: '60%',
        center: ['30%', '42%'],
        splitNumber: 5,
        name: {
          textStyle: {
            color: '#000'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#2d8a91', '#4fc5c5', '#9bdce2', '#d6eff3', '#fff'],
            opacity: 1
            // shadowBlur: 4,
            // shadowColor: 'red',
            // shadowOffsetX: 0,
            // shadowOffsetY: 15
          }
        },
        indicator: [
          { name: '击杀', max: 100 },
          { name: '金钱', max: 100 },
          { name: '防御', max: 100 },
          { name: '魔法', max: 100 },
          { name: '物理', max: 100 },
          { name: '助攻', max: 100 },
          { name: '生存', max: 100 }
        ],
        axisLine: {
          lineStyle: {
            color: '#b7d9da'
          }
        }
      },
      legend: {
        show: true,
        left: '52%',
        height: 80,
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        orient: 'vertical',
        textStyle: {
          fontSize: 12,
          color: '#3C4455',
          padding: [0, 20, 0, 5]
        },
        bottom: '45%',
        data: ['我', '大成', '灯泡', '大儿子', '小儿子']
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 0.3
            }
          },
          data: [
            {
              value: [100, 100, 100, 100, 100, 100, 100],
              name: '我'
            },
            {
              value: [60, 90, 50, 80, 70, 60, 60],
              name: '灯泡'
            },
            {
              value: [75, 50, 60, 50, 70, 40, 10],
              name: '小儿子'
            },
            {
              value: [10, 10, 10, 10, 10, 10, 10],
              name: '大儿子'
            },
            {
              value: [20, 20, 20, 20, 20, 20, 20],
              name: '大成'
            }
          ],
          animationDuration: 1000
        }
      ]
    }
    setTimeout(() => {
      this.$refs.chartComp.initChart()
    }, 0)
  }
}
</script>
