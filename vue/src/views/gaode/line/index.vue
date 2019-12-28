<template>
  <div class="mapCon">
    <el-select v-model="mapType" class="mapSelect" size="mini" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div id="container" class="container" />
    <el-button @click="addMarker">添加marker</el-button>
    <el-button @click="removeMarker">删除marker</el-button>
    <el-button @click="addCircle">添加Circle</el-button>
    <el-button @click="removeCircle">删除marker</el-button>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  data: function() {
    return {
      zoom: 2,
      center: [108.149185, 33.663153],
      options: [
        {
          value: 'normal',
          label: '标准'
        }, {
          value: 'dark',
          label: '幻影黑'
        }, {
          value: 'light',
          label: '月光银'
        }, {
          value: 'whitesmoke',
          label: '远山黛'
        }, {
          value: 'fresh',
          label: '草色青'
        }, {
          value: 'grey',
          label: '雅士灰'
        }, {
          value: 'graffiti',
          label: '涂鸦'
        }, {
          value: 'macaron',
          label: '马卡龙'
        }, {
          value: 'blue',
          label: '靛青蓝'
        }, {
          value: 'darkblue',
          label: '极夜蓝'
        }, {
          value: 'wine',
          label: '酱籽'
        }],
      mapType: 'whitesmoke',
      map: null,
      count: 0
    }
  },
  watch: {
    mapType(val) {
      var styleName = 'amap://styles/' + val
      this.map.setMapStyle(styleName)
    }
  },
  mounted() {
    this.map = new AMap.Map('container', {
      mapStyle: 'amap://styles/whitesmoke',
      features: ['bg', 'road', 'building', 'point'],
      center: [108.149185, 33.663153],
      zoom: 5,
      pitch: 40
      // viewMode: '3D'
    })
    const $t = this
    this.map.on('click', function(ev) {
      console.log(ev.lnglat.lng)
      $t.addMarker(ev)
    })
  },
  methods: {
    addMarker(ev) {
      const lng = ev.lnglat.lng
      const lat = ev.lnglat.lat
      // 构造矢量圆形
      var marker = new AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [lng, lat],
        // label: {content,offset,direction}
        title: this.count += 1
      })
      this.map.add(marker)
      marker.on('click', this.getAttr)
      // this.map.setFitView()
    },
    getAttr(ev) {
      console.log(ev)
    },
    removeMarker() {
      // 获取已经添加的marker
      const markers = this.map.getAllOverlays('marker')
      console.log(this.map.getAllOverlays('marker'))
      // this.map.remove(markers[0])
    },
    addCircle() {
      var circle = new AMap.Circle({
        center: new AMap.LngLat('116.403322', '39.920255'), // 圆心位置
        radius: 1000, // 半径
        strokeColor: '#F33', // 线颜色
        strokeOpacity: 1, // 线透明度
        strokeWeight: 3, // 线粗细度
        fillColor: '#ee2200', // 填充颜色
        fillOpacity: 0.35 // 填充透明度
      })
      this.map.add(circle)
      this.map.setFitView()
    },
    removeCircle() {
      var circle = new AMap.Circle({
        center: new AMap.LngLat('116.403322', '39.920255'), // 圆心位置
        radius: 1000, // 半径
        strokeColor: '#F33', // 线颜色
        strokeOpacity: 1, // 线透明度
        strokeWeight: 3, // 线粗细度
        fillColor: '#ee2200', // 填充颜色
        fillOpacity: 0.35 // 填充透明度
      })
      this.map.remove(circle)
      this.map.setFitView()
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  height: 700px;
  width: 100%;
}
.mapCon{
  position: relative;
  height: 100%;;
  width: 100%;
  .mapSelect{
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
    width: 120px;
  }
}
</style>
