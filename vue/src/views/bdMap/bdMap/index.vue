<template>
  <div>
    <baidu-map :map-click="false" :style="mapStyle" :center="center" :zoom="zoom" class="bm-view" @ready="handler">
      <!-- <bm-view class="map" center="北京" />
      <bm-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京" />-->
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" />
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT" />
      <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolygonPath" />

    </baidu-map>
  </div>
</template>
<script>
export default {
  name: 'BdMap',
  data: function() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      name: 'bdMap',
      mapStyle: {
        height: '300px'
      },
      bmap: null,
      map: null,
      polygonPath: [
        { lng: 116.412732, lat: 39.911707 },
        { lng: 116.39455, lat: 39.910932 },
        { lng: 116.403461, lat: 39.921336 }
      ]
    }
  },
  created() {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  mounted() {},
  methods: {
    updatePolygonPath(e) {
      this.polygonPath = e.target.getPath()
    },
    getHeight() {
      this.mapStyle.height = window.innerHeight - 84 + 'px'
    },
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.map = map
      this.bmap = BMap
      map.enableScrollWheelZoom()
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>
<style lang='scss'>
.anchorBL {
  display: none;
}
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
