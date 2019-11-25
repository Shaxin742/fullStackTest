<template>
  <div style="padding-left:20px">
    <div v-for="(v,i) in listVal" :key="i">
      <div>{{ v.name }}</div>
      <tree-comp :list-val="v.children" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TreeComp',
  props: {
    listVal: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
