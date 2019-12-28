<template>
  <div>
    <iframe id="iframe" name="myframe" scrolling="no" MarginWidth="0" MarginHeight="0" frameborder="0" :src="file" width="100%" height="500" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      file: 'http://192.168.98.172:5765/kabala/climb/download?fileName=/climb/yypt/pdf/test.pdf'
    }
  },
  mounted() {
    this.$nextTick(() => {
      var _iframe = document.getElementById('iframe').contentWindow
      console.log(_iframe)
      var bb = _iframe.document.getElementById('toolbar')
      console.log(bb)
    })
    setTimeout(() => {
      var _iframe = document.getElementById('iframe').contentWindow.document.getElementById('license_title')
      console.log(_iframe)
    }, 2000)
  }
}
</script>

<style>

</style>
