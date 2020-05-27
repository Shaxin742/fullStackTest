<template>
  <el-tooltip :disabled="value.length<length" effect="dark" :content="value" placement="top">
    <el-input :value="value" type="text" disabled />
  </el-tooltip>
</template>
<script>
export default {
  props: {
    length: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
