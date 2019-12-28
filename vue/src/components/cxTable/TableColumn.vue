<template>
  <!-- 表格列渲染 -->
  <el-table-column v-if="col.render" :key="col.dataIndex" v-bind="col">
    <template slot-scope="{row, column, $index}">
      <column-render
        :render-col="col.render"
        :record="row"
        :value="row[col.dataIndex]"
        :index="$index"
      />
    </template>
  </el-table-column>
  <el-table-column v-else :key="col.prop" v-bind="col">
    <template v-if="col.children">
      <TableColumn v-for="(item, index) in col.children" :key="index" :col="item" />
    </template>
  </el-table-column>
</template>

<script>
import ColumnRender from './column-render'
import nodata from '@/assets/nodata.png'
import random from 'lodash/random'
export default {
  name: 'TableColumn',
  components: {
    ColumnRender
  },
  props: {
    // 表格列属性
    col: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      nodata,
      randomNum: random(1, 1000000000000)
    }
  }
}
</script>
