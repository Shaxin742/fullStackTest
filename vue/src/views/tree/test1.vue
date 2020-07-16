<!--
 * @Author: ShaXin
 * @Date: 2020-07-16 10:39:32
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-16 10:42:46
 -->
<template>
  <div>
    test1
    <test2 v-bind="$attrs" />
  </div>
</template>

<script>
import test2 from './test2'
export default {
  components:{test2}
}
</script>

<style>

</style>
