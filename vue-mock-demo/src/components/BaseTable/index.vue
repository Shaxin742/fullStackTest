<!--
lazy:树形数据懒加载
load：树形数据懒加载
rowKey：树形数据懒加载

dataSource:Array  table数据

size:table大小
column:需要展示的列

--->

<template>
  <div class="table">
    <el-table
      ref="baseTable"
      v-loading="loading"
      :stripe="stripe"
      :border="border"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :data="dataSource"
      :row-key="rowKey"
      :size="size"
      :highlight-current-row="highlightCurrentRow"
      :load="load"
      :lazy="lazy"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
    >
      <template slot="ematy">抽你妈了个臭嗨</template>
      <el-table-column v-if="mutiSelect" type="selection" style="width: 55px;" />
      <template v-for="column in columns">
        <Columns :key="column.dataIndex" :column="column" />
      </template>
    </el-table>
    <div style="text-align:right;margin:4px 0">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :layout="layout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import Columns from './Columns'
export default {
  components: {
    Columns
  },
  props: {
    rowKey: {
      type: String,
      default: () => 'id'
    },
    size: {
      type: String,
      default: () => ''
    },
    load: {
      type: Function,
      default: () => {
        return function() {}
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    // 数据列表
    columns: {
      type: Array,
      default: () => []
    }, // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽

    // 是否为斑马纹 table
    stripe: {
      type: Boolean,
      default: false
    },
    // 是否支持当前行高亮显示
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    // 是否支持列表项选中功能
    mutiSelect: {
      type: Boolean,
      default: false
    },
    // 表格样式
    border: {
      type: Boolean,
      default: false
    },

    // table 表格的控制参数
    currentPage: {
      type: [String, Number],
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  watch: {
    columns: function() {
      this.doLayout()
    }
  },
  methods: {
    // 多行选中
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    sortChange(data) {
      this.$emit('sortChange', data)
    },

    doLayout() {
      setTimeout(() => {
        if (this.$refs.baseTable) {
          this.$refs.baseTable.doLayout()
        }
      }, 100)
    },
    edit(column, scope) {
      console.log(column)
      column.isEdit = !column.isEdit
      this.doLayout()
    }
  }
}
</script>
<style lang="scss">
.has-gutter {
  background: green;
}
// .el-table thead{
//   background: yellow
// }
// .blockSpan {
//   display: inline-block;
//   width: 100%;
// }
</style>
