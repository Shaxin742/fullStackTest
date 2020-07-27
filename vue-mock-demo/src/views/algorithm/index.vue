<!--
 * @Author: ShaXin
 * @Date: 2020-07-24 09:16:11
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-24 15:10:28
 -->
<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-button @click="makeArr">随机数组</el-button>
        {{ arr }}
      </el-col>
      <el-col :span="12">
        <el-button @click="quickSort">快速排序</el-button>
        {{ sortArr }}
      </el-col>
    </el-row>
    <vuedraggable v-model="sortArr" class="wrapper">
      <transition-group>
        <div v-for="(item,index) in sortArr" :key="index" class="item">
          <p class="item">{{ item }}</p>
        </div>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
import { quickSort } from '@/utils/util'
import vuedraggable from 'vuedraggable'
export default {
  name: 'Algorithm',
  components: { vuedraggable },
  data: function() {
    return {
      arr: [],
      sortArr: []
    }
  },
  methods: {
    makeArr() {
      this.arr = []
      for (var i = 0; i < 10; i++) {
        const num = parseInt(Math.random() * 10)
        this.arr.push(num)
      }
    },
    quickSort() {
      this.sortArr = quickSort(this.arr)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: 200px;
}
.item {
  background: green;
  line-height: 20px;
  margin: 6px;
  color: white;
}
</style>
