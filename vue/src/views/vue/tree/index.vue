<template>
  <div>
    <tree-comp :list-val="listVal" />
    {{ data.name }}
    <el-button @click="test">
      123
    </el-button>
  </div>
</template>
<script>
import treeComp from './treeComp'
export default {
  name: 'Tree',
  components: {
    treeComp
  },
  data() {
    return {
      listVal: [
        {
          'name': '黄焖鸡米饭111111111',
          children: [
            { 'name': '二级黄焖鸡' },
            {
              'name': 'one chicken',
              children: [{ 'name': '三级黄焖鸡3333', children: [{ 'name': '四级黄焖鸡' }] }]
            }
          ]
        },
        { 'name': '2222222222' },
        {
          'name': '黄焖鸡米饭33333333', children: [
            { 'name': '二级黄焖鸡' },
            { 'name': 'one chicken' }
          ]
        }
      ],
      data:{}
    }
  },
  methods:{
    test(){
      this.$set(this.data,'name','1111')
      this.name = '123'
    }
  }
}
</script>

<style>
</style>
