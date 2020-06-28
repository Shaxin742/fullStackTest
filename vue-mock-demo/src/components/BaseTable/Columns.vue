<!--
 * @Author: ShaXin
 * @Date: 2020-06-28 10:18:54
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-28 10:23:28
 -->
<template>
  <el-table-column v-if="column.render" :key="column.dataIndex" v-bind="column">
    <template slot-scope="scope">
      <template>
        <columns-render
          :column="column"
          :row="scope.row"
          :value="scope.row[column.prop]"
          :render="column.render"
          :index="column.dataIndex"
        />
      </template>
    </template>
  </el-table-column>
  <el-table-column v-else :key="column.prop" v-bind="column" />
</template>

<script>
import ColumnsRender from './ColumnsRender'
export default {
  components: {
    ColumnsRender
  },

  props: {
    // 表格列属性
    column: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>

</style>
