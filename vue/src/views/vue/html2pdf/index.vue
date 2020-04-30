<template>
  <div>
    <div id="pdfCentent">
      需要生成pdf的内容
    </div>
    <el-button
      type="danger"
      size="small"
      @click="ExportSavePdf('pdfCentent',htmlTitle,nowTime)"
    >导出PDF</el-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      htmlTitle: 'PDF名称',
      nowTime: ''
    }
  }
}
</script>
<style lang="scss">

</style>
