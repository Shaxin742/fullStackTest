<template>
  <div>
    <div id="map" />
  </div>
</template>
<script>
import * as L7 from '@antv/l7'
import axios from 'axios'
export default {
  name: 'L7',
  mounted() {
    var scene = new L7.Scene({
      id: 'map',
      mapStyle: 'dark', // 样式URL
      center: [110.19382669582967, 40.258134],
      pitch: 0,
      zoom: 3
    })
    // 加载图层需要sceneload完成之后
    scene.on('loaded', function() {
      axios.get('https://gw.alipayobjects.com/os/basement_prod/d9cbccb0-8acb-418b-a7e6-27a342c70b7b.json', function(data) {
        scene.LineLayer({
          zIndex: 2
        }).source(data).shape('line').size('Grade', [1, 2]).color('Grade', ['rgb(215,48,39)', 'rgb(244,109,67)', 'rgb(253,174,97)', 'rgb(254,224,144)', 'rgb(224,243,248)', 'rgb(171,217,233)', 'rgb(116,173,209)', 'rgb(69,117,180)'].reverse()).animate({
          enable: true,
          interval: 1,
          duration: 1,
          trailLength: 0.8
        }).style({
          opacity: 0.8
        }).render()
      })
    })
  }
}
</script>
<style lang="scss" scoped>
#map {
  height: calc(100vh - 100px);
  width: 100%;
}
</style>
