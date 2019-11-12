<template>
  <div v-loading="loading" class="mapCon">
    <el-button class="backUp" type="primary" @click="backUp">返回上一级</el-button>
    <div ref="map" class="map" />
  </div>
</template>

<script>
import Echarts from 'echarts'
import Axios from 'axios'
import CityMap from '@/assets/map/city-map'
import provinceMap from '@/assets/map/province-map'

export default {
  data() {
    return {
      selectedVals: [],
      chart: null,
      loading: true,
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            selectedMode: 'single'
          }
        ],
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        zoom: 1,
        scaleLimit: { min: 1, max: 3 },
        animationDuration: 1000,
        animationEasing: 'cubicOut',
        animationDurationUpdate: 1000
      }
    }
  },
  mounted() {
    this.chart = Echarts.init(this.$refs.map)
    this.loadMap()
  },
  methods: {
    async loadMap() {
      const mapJson = await Axios.get('/map/china.json')
      this.loading = false
      // Echarts.registerMap('china', mapJson.data)
      // this.chart.setOption(this.option)
      this.setOptions(mapJson, 'china')
      this.chart.on('mapselectchanged', this.onProvinceClick)
    },
    onProvinceClick(e) {
      const name = e.batch[0].name
      const pinyinName = provinceMap[name]
      if (pinyinName) {
        this.loadProvince(pinyinName)
      }
    },
    async loadProvince(pinyinName) {
      this.selectedVals.push(pinyinName)
      this.selectedVals = [...new Set(this.selectedVals)]
      this.loading = true
      const mapJson = await Axios.get(`map/province/${pinyinName}.json`)
      this.setOptions(mapJson, pinyinName)
      this.chart.off('mapselectchanged', this.onProvinceClick)
      this.chart.on('mapselectchanged', this.onCityClick)
    },
    onCityClick(e) {
      const name = e.batch[0].name
      var cityCode = CityMap[name]
      if (cityCode) {
        this.loadCity(cityCode)
      }
    },
    async loadCity(cityCode) {
      this.selectedVals.push(cityCode)
      this.loading = true
      const mapJson = await Axios.get(`map/citys/${cityCode}.json`)
      this.setOptions(mapJson, cityCode)
      this.chart.off('mapselectchanged', this.onCityClick)
    },
    setOptions(data, name) {
      this.loading = false
      Echarts.registerMap(name, data.data)
      this.option.series[0].mapType = name
      this.chart.setOption(this.option)
    },
    backUp() {
      this.selectedVals.pop()
      if (this.selectedVals.length > 0) {
        this.loadProvince(this.selectedVals[0])
      } else {
        this.loadMap()
      }
    }
  }
}
</script>

<style scoped>
.mapCon{
  position: relative;
}
.map {
  width: 100%;
  height: 700px;
}
.backUp{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
}
</style>
