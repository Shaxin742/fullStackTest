<template>
  <div>
    <div id="typeCon" class="typeCon" />
  </div>
</template>

<script>
export default {
  name: 'TypeView',
  data() {
    return {}
  },
  mounted() {
    const con = document.getElementById('typeCon')
    this.typeItems(con, 300)
  },
  methods: {
    typeItems(container, speed, str) {
      // 将要添加的元素的默认内容
      const defaultStr = `我希望有个如你一般的人. 如山间清爽的风. 如古城温暖的光.  从清晨到夜晚.  由山野到书房. 只要最后是你，就好.`
      const defaultSpeed = 300
      str = str || defaultStr
      speed = speed || defaultSpeed
      let index = 0
      const timer = setInterval(function() {
        const current = str.substr(index, 1)
        if (current === '<') {
          index = str.indexOf('>', index) + 1
        } else {
          index++
        }
        container.innerHTML =
          str.substring(0, index) +
          (index & 1 && index !== str.length ? '_' : '')
        if (index >= str.length) {
          clearInterval(timer)
        }
      }, speed)
    }
  }
}
</script>

<style scoped>
.typeCon {
  color: lightgreen;
}
</style>
