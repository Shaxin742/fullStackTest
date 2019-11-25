<template>
  <div>
    <div id="container" />
  </div>
</template>

<script>
import AMap from 'AMap'
import Loca from 'Loca'
import axios from 'axios'
export default {
  name: 'Keshihua',
  mounted() {
    var map = new AMap.Map('container', {
      mapStyle: 'amap://styles/midnight',
      features: ['bg'],
      center: [116.397732, 39.912152],
      zoom: 10,
      pitch: 40,
      viewMode: '3D'
    })

    var layer = new Loca.LineLayer({
      map: map
    })

    axios.get('//a.amap.com/Loca/static/mock/buslines_bj_zip.txt', function(data) {
      var start = []
      var lines = data.split('&').map(function(item) {
        return {
          linePath: item.split(';').map(function(lnglat, index) {
            var ll = lnglat.split(',')
            ll = [+ll[0], +ll[1]]
            if (index === 0) {
              start = ll
            } else {
              ll = [ll[0] / 1000 + start[0], ll[1] / 1000 + start[1]]
            }
            return ll
          })
        }
      })

      layer.setData(lines, {
        lnglat: 'linePath'
      })

      layer.setOptions({
        style: {
          // 3D Line 不支持设置线宽，线宽为 1px
          // borderWidth: 1,
          opacity: 0.4,
          color: '#b7eff7'
        }
      })

      layer.render()
    })
  }
}
</script>

<style>

</style>
