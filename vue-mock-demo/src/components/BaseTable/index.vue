<!--

options: Object table参数
  options: {
    stripe: true, // 是否为斑马纹 table
    loading: false, // 是否添加表格loading加载动画
    highlightCurrentRow: true, // 是否支持当前行高亮显示
    mutiSelect: true // 是否支持列表项选中功能
    border：true // 表格样式
  },

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
      ref="mutipleTable"
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
    >
      <template slot="ematy">12312312</template>
      <el-table-column v-if="mutiSelect" type="selection" style="width: 55px;" />
      <template v-for="(column, index) in columns">
        <el-table-column :key="index" v-bind="column">
          <template slot-scope="scope">
            <template v-if="!column.render">
              <template v-if="column.formatter">
                <span :class="column.class" v-html="column.formatter(scope.row, column)" />
              </template>
              <template v-else>
                <span :class="column.class">{{ scope.row[column.prop] }}</span>
              </template>
            </template>
            <template v-else>
              <columns-render
                :column="column"
                :row="scope.row"
                :render="column.render"
                :index="index"
              />
            </template>
          </template>
        </el-table-column>
      </template>

      <!-- <template v-for="item in columns">
        <el-table-column v-if="item.render" :key="item.dataIndex" v-bind="item" sortable="sortable">
          <template slot-scope="{row, column, $index}">
            <columns-render
              :render-col="item.render"
              :record="row"
              :value="row[item.dataIndex]"
              :index="$index"
            />
          </template>
        </el-table-column>
        <el-table-column v-else :key="item.prop" v-bind="item" />
      </template>-->
    </el-table>
    <div style="text-align:right;margin:4px 0">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script>
import ColumnsRender from './ColumnsRender'
export default {
  components: {
    ColumnsRender
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
    options: {
      type: Object,
      default: () => {
        return {
          stripe: false, // 是否为斑马纹 table
          highlightCurrentRow: false // 是否要高亮当前行
        }
      }
    },
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
      required: true
    },
    pageSizes: {
      type: Array,
      default: () => ['10', '20', '30', '50']
    },
    pageSize: {
      type: [String, Number],
      required: true
    },
    total: {
      type: [String, Number],
      required: true
    }
  },
  // 数据
  data() {
    return {
      pageIndex: 1
    }
  },
  computed: {},
  mounted() {},
  methods: {
    // 多行选中
    handleSelectionChange(val) {
      console.log(val)
      this.$emit('handleSelectionChange', val)
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>
<style lang="scss" >
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
