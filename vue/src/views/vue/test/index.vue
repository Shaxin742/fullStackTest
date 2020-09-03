<template>
  <div>
    <el-button @click="clickTest('test1')">
      test
    </el-button>
    <el-button @click="testArr(arr,index)">
      arr
    </el-button>
    <el-button @click="showArr">
      showArr
    </el-button>
    <el-button @click="toast">
      toast
    </el-button>
    <el-button @click="toast2">
      toast
    </el-button>

    <el-tooltip class="item" effect="dark" :content="ceshi" placement="left-end">
      <el-input disable :value="ceshi" style="width:200px;" />
    </el-tooltip>
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <input22 text="1renderInput">
      123123sss
    </input22>
    <innn length="5" value="12312323" />
    <innn length="12" value="哈哈哈" />

    <son :count="count" :data="data" />
    {{ count }}
    <el-button @click="showCount">
      count
    </el-button>
    <el-button @click="showData">
      data
    </el-button>
  </div>
</template>

<script>
import input22 from './renderInput'
import son from './son.vue'
import innn from './innn.vue'
export default {
  name: 'Test',
  components: { input22, innn,son },
  data() {
    return {
      ceshi: '叫啊叫啊叫啊叫啊叫啊叫啊叫啊叫',
      actions: new Map([
        ['test1', () => { console.log('test1') }],
        ['test2', () => { console.log('test3') }],
        ['default', () => { console.log('default') }]
      ]),
      arr: [
        { name: 1, val: 2, data: 1 },
        { name: 2, val: 1, data: 2 },
        { name: 2, val: 4, data: 3 },
        { name: 3, val: 4, data: 4 },
        { name: 3, val: 2, data: 5 },
        { name: 3, val: 3, data: 6 }
      ],
      index: 0,
      commonVal: [],

      // son 组件
      count:0,
      data:{name:1},
    }
  },
  methods: {
    toast() {
      this.$message.error('asdsad')
    },
    toast2() {
      this.$message.error('123123123')
    },
    showArr() {
      console.log(this.arr)
    },
    clickTest(identity) {
      const action = this.actions.get(`${identity}`) || this.actions.get('default')
      action.call(this)
    },
    testArr() {
      console.log(this.testArr2(this.arr, 0))
    },
    testArr2(arr, index) {
      const temp = arr[index].name
      let dist = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === temp) {
          dist.push(arr[i])
          this.commonVal.push(i)
        }
      }
      console.log(JSON.stringify(dist))
      if (dist.length > 1) {
        dist = dist.sort(this.objectArraySort('val'))
        arr.splice(this.commonVal[0], this.commonVal.length, dist)
      }
      this.index += this.commonVal.length > 1 ? this.commonVal[ this.commonVal.length - 1] : 1
      this.commonVal = []
      arr = arr.flat(Infinity)
      console.log(JSON.stringify(arr))
      if (this.index >= arr.length) {
        return arr
      } else {
        return this.testArr2(arr, this.index)
      }
    },
    objectArraySort(keyName) {
      return function(objm, objn) {
        var valueN = objm[keyName]
        var valueM = objn[keyName]
        if (valueN < valueM) return 1 // 从大到小排序
        else if (valueN > valueM) return -1
        else return 0
      }
    },

    showData(){
      console.log(this.data)
    },
    showCount(){
      console.log(this.count)
    }
  }
}
</script>

<style>
</style>
