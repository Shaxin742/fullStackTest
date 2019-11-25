<template>
  <div>
    <div id="mountNode" />
  </div>
</template>
<script>
import G2 from '@antv/g2'
export default {
  data: function() {
    return {
      dataVal: [
        {
          type: '白居易',
          value: 48.33
        },
        {
          type: '杜甫',
          value: 20.0
        },
        {
          type: '李白',
          value: 20.0
        },
        {
          type: '论坛',
          value: 5.0
        },
        {
          type: '其他',
          value: 6.67
        }
      ],
      other: [
        {
          type1: '论坛',
          value: 1.77
        },
        {
          type1: '网站',
          value: 1.44
        },
        {
          type1: '微信',
          value: 1.12
        }
      ],
      otherbak: [
        {
          type1: '论坛',
          value: 1.77
        },
        {
          type1: '网站',
          value: 1.44
        },
        {
          type1: '微信',
          value: 1.12
        }
      ],
      chart: null,
      view1: null,
      view2: null,
      otherOffsetAngle: '',
      flag: true
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      var that = this
      var otherRatio = 6.67 / 100 // Other 的占比
      this.otherOffsetAngle = otherRatio * Math.PI // other 占的角度的一半
      this.chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: 300
      })
      this.view1 = this.chart.view({
        start: { x: 0, y: 0 },
        end: { x: 0.5, y: 1 }
      })
      this.view1.coord('theta', {
        radius: 0.7,
        startAngle: 0 + this.otherOffsetAngle,
        endAngle: Math.PI * 2 + this.otherOffsetAngle
      })
      this.view1.source(this.dataVal)
      this.view1.tooltip({
        showTitle: false,
        itemTpl: `<li> <span style="background-color:{color}" class="g2-tooltip-marker"></span> {name}: {value}</li>`
      })
      this.view1
        .intervalStack()
        .position('value')
        .color('type', ['#38c060', '#2593fc', '#5533fc', '#0b53b0', '#1770d6'])
        .opacity(1)
        .label('value', function() {
          return {
            offset: -10,
            useHtml: true,
            htmlTemplate: function htmlTemplate(text, item) {
            // var d = item.point
            // var percent = text + '%'
            // return '<span class="g2-label-item">' + d.type + '<br/>' + percent + '</span>'
              return ''
            }
          }
        })
        .select(false)
        .style({ lineWidth: 1, stroke: '#fff' })

      this.view2 = this.chart.view({
        start: { x: 0.5, y: 0.1 },
        end: { x: 1, y: 0.9 }
      })
      this.view2.axis(false)
      this.view2.source(this.other, {
        value: {
          nice: false
        }
      })
      this.view2
        .intervalStack()
        .position('1*value')
        .color('type1', ['#063d8a', '#0b53b0', '#1770d6'])
        .label('value', {
          position: 'right',
          offsetX: 5,
          offsetY: 10,
          formatter: function formatter(text, item) {
            var d = item.point
            return d.type1 + ' ' + d.value + '%'
          }
        })
      this.chart.legend('type1', false)
      this.chart.render()
      if (this.flag) {
        this.drawLinkArea()
        this.chart.on('afterpaint', function() {
          that.drawLinkArea()
        })
      }

      this.chart.on('legend-item:click', ev => {
        console.log(ev)
        if (ev.data.value === '其他') {
          this.other = []
          this.flag = false
          // this.chart.clear()
          // this.renderChart()
          this.view2.repaint()
        }
      })
    },
    drawLinkArea() {
      var canvas = this.chart.get('canvas')
      var container = this.chart.get('backPlot')
      var view1_coord = this.view1.get('coord')
      var center = view1_coord.center
      var radius = view1_coord.radius
      var interval_geom = this.chart.getAllGeoms()[1]
      var interval_container = interval_geom.get('shapeContainer')
      var interval_bbox = interval_container.getBBox()
      var view2_coord = this.view2.get('coord')
      // area points
      var pie_start1 = {
        x: center.x + Math.cos(Math.PI * 2 - this.otherOffsetAngle) * radius,
        y: center.y + Math.sin(Math.PI * 2 - this.otherOffsetAngle) * radius
      }
      var pie_start2 = {
        x: center.x + Math.cos(this.otherOffsetAngle) * radius,
        y: center.y + Math.sin(this.otherOffsetAngle) * radius
      }
      var interval_end1 = {
        x: interval_bbox.minX,
        y: view2_coord.end.y
      }
      var interval_end2 = {
        x: interval_bbox.minX,
        y: view2_coord.start.y
      }
      var path = [
        ['M', pie_start1.x, pie_start1.y],
        ['L', pie_start2.x, pie_start2.y],
        ['L', interval_end2.x, interval_end2.y],
        ['L', interval_end1.x, interval_end1.y],
        ['Z']
      ]
      container.addShape('path', {
        attrs: {
          path: path,
          fill: '#e9f4fe'
        }
      })
      canvas.draw()
    }
  }
}
</script>
<style lang="scss" scoped>
#mountNode {
  width: 500px;
  margin: 0 auto;
}
</style>
