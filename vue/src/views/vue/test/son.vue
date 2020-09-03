<template>
  <div>
    ----- son -----
    <el-button @click="()=>{count+=1}">
      {{ count }}
    </el-button>

    <el-button @click="()=>{data.name=222}">
      data
    </el-button>
    {{ data }}
    ----- son -----
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
