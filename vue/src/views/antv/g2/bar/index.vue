<template>
  <div>
    <div id="mountNode" />
    <el-input v-model="ipVal" />
    <el-button @click="testVal">123123</el-button>
  </div>
</template>
<script>
import G2 from '@antv/g2'
export default {
  data: function() {
    return {
      dataVal: [
        {
          item: '事例一',
          count: 40,
          percent: 0.4
        },
        {
          item: '事例二',
          count: 21,
          percent: 0.21
        },
        {
          item: '事例三',
          count: 17,
          percent: 0.17
        },
        {
          item: '事例四',
          count: 13,
          percent: 0.13
        },
        {
          item: '事例五',
          count: 9,
          percent: 0.09
        }
      ],
      ipVal: ''
    }
  },
  mounted() {
    var chart = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height: 300
    })
    chart.source(this.dataVal, {
      percent: {
        formatter: function formatter(val) {
          val = val * 100 + '%'
          return val
        }
      }
    })
    chart.coord('theta', {
      radius: 0.75
    })
    chart
      // .intervalStack().position('percent').color('item').label('percent', {
      //   offset: -40,
      //   // autoRotate: false,
      //   textStyle: {
      //     textAlign: 'right',
      //     shadowBlur: 44,
      //     shadowColor: 'rgba(0, 0, 0, .45)'
      //   }
      // })
      .tooltip({
        showTitle: false,
        itemTpl: `<li> <span style="background-color:{color}" class="g2-tooltip-marker"></span> {name}: {value}</li>`
      })
    chart
      .intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        offset: -40,
        // autoRotate: false,
        textStyle: {
          textAlign: 'right',
          shadowBlur: 44,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
        // formatter: function formatter(val, item) {
        //   return item.point.item + ': ' + val
        // }
      })
      .tooltip('item*percent', function(item, percent) {
        percent = percent * 100 + '%'
        return {
          name: item,
          value: percent
        }
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      })
    chart.render()
  },
  methods: {
    testVal() {
      let flag = true
      var arr = this.ipVal.split('.')
      arr.map(v => {
        if (Number(v)) {
          if (!(v > 0 < 255)) {
            flag = false
          }
        } else {
          flag = false
        }
      })
      console.log(flag)
    }
  }
}
</script>
