<!--
 * @Author: ShaXin
 * @Date: 2020-06-09 16:15:12
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-10 11:15:26
 -->
<template>
  <div class="treeSelect">
    <el-select
      ref="mineSelect"
      v-model="mineStatus"
      placeholder="请选择"
      filterable
      remote
      multiple
      collapse-tags
      :remote-method="remoteMethod"
      :loading="loading"
      @change="selectChange"
    >
      <el-option :value="mineStatusValue" style="height: auto">
        <el-tree
          ref="tree"
          :data="data"
          node-key="id"
          show-checkbox
          highlight-current
          :props="defaultProps"
          :filter-node-method="filterNode"
          :expand-on-click-node="false"
          @node-click="treeNodeClick"
          @check-change="handleCheckChange"
        />
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      mineStatus: '',
      mineStatusValue: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1'
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    // select框值改变时候触发的事件
    selectChange(e) {
      var arrNew = []
      var dataLength = this.mineStatusValue.length
      var eleng = e.length
      for (let i = 0; i < dataLength; i++) {
        for (let j = 0; j < eleng; j++) {
          if (e[j] === this.mineStatusValue[i].label) {
            arrNew.push(this.mineStatusValue[i])
          }
        }
      }
      this.$refs.tree.setCheckedNodes(arrNew) // 设置勾选的值
    },
    handleCheckChange() {
      const res = this.$refs.tree.getCheckedNodes(true, true) // 这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）
      const arrLabel = []
      const arr = []
      res.forEach(item => {
        arrLabel.push(item.label)
        arr.push(item)
      })
      this.mineStatusValue = arr
      this.mineStatus = arrLabel
      console.log('arr:' + JSON.stringify(arr))
      console.log('arrLabel:' + arrLabel)
    },
    remoteMethod(v) {
      console.log(v)
      this.$refs.tree.filter(v)
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    treeNodeClick(data, node, val) {
      console.log(data, node, val)
      // this.mineStatus = data.label
      // this.$refs.mineSelect.blur()
    }
  }
}
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.hidden-options {
  display: none;
}

/*滚动条整体部分,必须要设置*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #fdfdfd;
}
/*滚动条的轨道*/
::-webkit-scrollbar-track {
  background-color: #fdfdfd;
}
/*滚动条的滑块按钮*/
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #dde3ea;
}
/*滚动条的上下两端的按钮*/
::-webkit-scrollbar-button {
  height: 10px;
  background-color: #fdfdfd;
}
</style>
