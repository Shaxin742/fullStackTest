<template>
  <div id="container" />
</template>
<script>
export default {
  mounted() {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      mapStyle: 'dark', // 样式URL
      center: [116.397428, 39.90923],
      zoom: 13
    })
    // 实时路况图层
    var trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    })
    map.add(trafficLayer)// 添加图层到地图
  }
}
</script>
