<template>
  <!-- 基于element表格的二次封装 -->
  <div>
    <div :class="[{'table_border': border}, 'component-table', 'standardTable']">
      <!-- 表格 -->
      <el-table
        ref="commonTable"
        :key="tableKey?tableKey:randomNum"
        v-loading="loading"
        :data="dataAll"
        :lazy="lazy? lazy: false"
        :load="load"
        :show-summary="showSummary?showSummary:false"
        :summary-method="summaryMethod"
        header-row-class-name="table_head"
        :row-class-name="rowClassName"
        :cell-class-name="cellClassName"
        :cell-style="{padding: '0px'}"
        :height="tbHeight"
        :stripe="stripe"
        :border="borderStyle"
        style="width: 100%; overflow: auto;"
        :row-style="rowStyle"
        :reserve-selection="reserveSelection"
        :show-header="showHeader"
        :row-key="rowkey"
        :expand-row-keys="expandRowkeys"
        v-bind="config"
        :tree-props="treeProps"
        @row-click="rowClick"
        @header-dragend="headerDragend"
        @row-dblclick="rowdblClick"
        @selection-change="selectionChange"
        @select="rowSelect"
        @select-all="selectAll"
        @expand-change="expandChange"
        @sort-change="sortChange"
        @cell-mouse-enter="cellMouseEnter"
      >
        <div slot="empty">
          <img :src="nodata" alt="暂无数据">
          <div>暂无数据</div>
        </div>
        <TableColumn v-for="(item, index) in columns" :key="index" :col="item" />
        <InfiniteLoading
          v-if="lazyloadHandle"
          slot="append"
          :distance="distance"
          force-use-infinite-wrapper=".el-table__body-wrapper"
          @infinite="infiniteHandler"
        >
          <div slot="spinner">
            <i class="el-icon-loading" />
            <span>正在加载。。。</span>
          </div>
          <div slot="no-more" />
        </InfiniteLoading>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination
      v-if="hasPagination"
      background
      class="pagination"
      :current-page.sync="currentPage"
      :page-sizes="pageSizeComputed"
      :page-size="pageSize"
      :pager-count="pagerCount"
      :layout="layout ? layout : `total, sizes, prev, pager, next, jumper`"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import TableColumn from './TableColumn'
import nodata from '@/assets/nodata.png'
import random from 'lodash/random'
export default {
  name: 'Table',
  components: {
    TableColumn,
    InfiniteLoading
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    // 表格数据源
    dataSource: {
      type: Array,
      required: true
    },
    sortable: {
      type: Array,
      required: true
    },
    // 表格列数据
    columns: {
      type: Array,
      required: true
    },
    // 表格是否支持loading
    loading: {
      type: Boolean,
      default: false
    },
    // 表格行样式
    rowStyle: {
      type: Function,
      default() {
        return 'row'
      }
    },
    // 表格数据更新之后是否保留之前选中的数据
    reserveSelection: {
      type: Boolean,
      default: false
    },
    // 分页组件布局，子组件名用逗号分隔
    layout: {
      type: String
    },
    // 表格高度
    height: {
      type: [Number, Boolean]
    },
    render: {
      type: Function
    },
    // 是否为斑马纹 table
    stripe: {
      type: Boolean,
      default: false
    },
    // 表格边框样式
    borderStyle: {
      type: Boolean,
      default: false
    },
    // 表格展开行的keys数组
    expandRowkeys: {
      type: Array
    },
    border: {
      type: Boolean
    },
    // 分页——当前页
    currentPage: {
      type: Number
    },
    // 表格行数据的 Key
    rowkey: {
      type: Function
    },
    // 分页——每页显示条目个数
    pageSize: {
      type: Number
    },
    // 分页——每页显示个数选择器的选项设置
    pageSizes: {
      type: Number,
      default: () => [10, 20, 30, 50, 100]
    },
    // 分页——页码按钮的数量，当总页数超过该值时会折叠
    pagerCount: {
      type: Number,
      default: 0
    },
    // 分页——总条目数
    total: {
      type: Number,
      default: 0
    },
    // 表格是否含有分页
    hasPagination: {
      type: Boolean,
      default: false
    },
    // 表格是否展示表格头
    showHeader: {
      type: Boolean,
      default: true
    },
    // 表格单元格的className的回调方法
    cellClassName: {
      type: Function
    },
    // 表格行的className的回调方法
    rowClassName: {
      type: Function,
      default() {
        return 'row'
      }
    },
    // 表格——自定义的合计计算方法
    summaryMethod: {
      type: Function
    },
    // 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
    load: {
      type: Function
    },
    // 是否在表尾显示合计行
    showSummary: {
      type: Boolean,
      default: false
    },
    // 是否懒加载子节点数据
    lazy: {
      type: Boolean,
      default: false
    },
    // 表格的key，表格的唯一标识
    tableKey: {
      type: Number
    },
    // 表格——渲染嵌套数据的配置选项
    treeProps: {
      type: Object,
      default: () => {}
    },
    lazyload: {
      // 是否开启懒加载
      type: Boolean,
      default: false
    },
    lazySize: {
      // 懒加载开启默认显示多少条数据
      type: Number,
      default: 100
    },
    whole: {
      // 全部是否显示，显示全部默认开启懒加载
      type: Boolean,
      default: false
    },
    distance: {
      // 滑动触发的距离
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      nodata,
      randomNum: random(1, 1000000000000),
      allSizes: '', // 是否添加全部标识
      dataSizes: '', // 选择（？/页）值储存
      pageData: 1, // 懒加载页码
      dataSelect: '', // 选中数据储存
      selectAllBoolean: false // 是否全选
    }
  },
  computed: {
    // 表格高度
    tbHeight: function() {
      return this.height
        ? this.height
        : this.pageSize
          ? 48 + this.pageSize * 33.2
          : null
    },
    // 判断是否需要添加全部（条件满足 开启全部开关 和 最大条/页 < 总数）
    pageSizeComputed: function() {
      const maxSize = Math.max.apply(null, this.pageSizes)
      if (this.whole && maxSize < this.total) {
        this.allSizes = 'hasAll'
        this.pageSizes.push(this.total)
        return this.pageSizes
      } else {
        this.allSizes = 'noAll'
        return this.pageSizes
      }
    },
    // 当懒加载的时候处理数据
    dataAll: function() {
      if (this.lazyloadHandle && this.dataSource.length > this.lazySize) {
        // 懒加载显示的条数
        let endSizes = this.lazySize * this.pageData
        if (endSizes >= this.total) {
          endSizes = this.total
        }
        return this.dataSource.slice(0, endSizes)
      } else {
        return this.dataSource
      }
    },
    // 是否开启懒加载
    lazyloadHandle: function() {
      const maxVal = Math.max.apply(null, this.pageSizeComputed)
      if (
        (this.whole &&
          this.allSizes === 'hasAll' &&
          maxVal === this.dataSizes) ||
        this.lazyload
      ) {
        if (!this.rowkey) {
          this.$message.warning('请传递rowkey')
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    }
  },
  watch: {
    // 根据列数据，对Table进行重新布局
    columns: function() {
      this.doLayout()
    },
    pageSizeComputed: function() {
      // 如果需要显示全部，将添加的选项的文案变成全部
      if (this.allSizes === 'hasAll') {
        const maxVal = Math.max.apply(null, this.pageSizeComputed)
        const maxSizes = maxVal + '条/页'
        const selectItem = document.getElementsByClassName(
          'el-select-dropdown__item'
        )
        for (let i = 0; i < selectItem.length; i++) {
          if (maxSizes === selectItem[i].innerText) {
            selectItem[i].innerText = '全部'
          }
        }
      }
    },
    dataAll: function() {
      this.$nextTick(() => {
        this.doLayout()
      })
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleCurrentChange(val) {
      // 改变当前页，即清空懒加载分页
      if (this.lazyloadHandle) {
        this.pageData = 1
      }
      this.$emit('handleCurrent', val)
    },
    handleSizeChange(val) {
      this.dataSizes = val
      // 储存每页多少条值
      // 改变当前多少条/页，即清空懒加载分页
      if (this.lazyloadHandle) {
        this.pageData = 1
      }
      this.$emit('handleSize', val)
    },
    // 行点击
    rowClick(row, event, column) {
      this.$emit('rowClick', row, event, column)
    },
    // 当用户对某一行展开或者关闭的时候会触发该事件
    expandChange(row, expandedRows) {
      this.$emit('expandChange', row, expandedRows)
    },
    // 当拖动表头改变了列的宽度的时候会触发该事件
    headerDragend(newWidth, oldWidth, column, event) {
      // 根据表头变化，对Table进行重新布局
      this.doLayout()
      this.$emit('headerDragend', newWidth, oldWidth, column, event)
    },
    // 当某一行被双击时会触发该事件
    rowdblClick(row, event) {
      this.$emit('rowdblClick', row, event)
    },
    // 当选择项发生变化时会触发该事件
    selectionChange(selection) {
      // 判断选中的值和页面渲染的值是否一致
      // 一致则为选中全部；即返回所有数据
      // 不一致则有两种情况
      // 1.选中全部，去掉其中几个值，这类需要返回除了去掉其中值的所有数据
      // 2.没有选中全部，正常勾选,即正常返回值
      if (selection.length === this.dataAll.length) {
        this.dataSelect = this.dataSource
      } else {
        // this.selectAllBoolean的存在是为了获取到是否勾选全部的行为
        // this.selectAllBoolean && selection.length > 0 此判断是因为selectionChange这个方法获取的值比selectAll方法要快一步，所以会出现取消全选，获取到的值为true的情况；
        if (this.selectAllBoolean && selection.length > 0) {
          const noSelect = this.getArrDifference(this.dataAll, selection)
          this.dataSelect = this.getArrDifference(this.dataSource, noSelect)
        } else {
          this.dataSelect = selection
        }
      }
      this.$emit('selectionChange', this.dataSelect)
    },
    // 这个方法是为了处理数据（取出不同的数据）
    getArrDifference(arr1, arr2) {
      return arr1.concat(arr2).filter(function(v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v)
      })
    },
    // 用于多选表格，切换某一行的选中状态
    toggleRowSelection(rows, selected) {
      this.$refs.commonTable.toggleRowSelection(rows, selected)
    },
    // 通过传值给列表勾选
    toggleSelection(rows) {
      if (rows.length > 0) {
        rows.forEach(row => {
          this.$refs.commonTable.toggleRowSelection(row)
        })
      }
    },
    // 用于多选表格，清空用户的选择
    clearSelection() {
      this.$refs.commonTable.clearSelection()
    },
    // 当表格的排序条件发生变化的时候会触发该事件
    sortChange(data) {
      this.$emit('sortChange', data)
    },
    // 当单元格 hover 进入时会触发该事件
    cellMouseEnter(row, column, cell, event) {
      this.$emit('cellMouseEnter', row, column, cell, event)
    },
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    rowSelect(selection, row) {
      this.$emit('rowSelect', selection, row)
    },
    // 判断是否点击了全部
    selectAll(selection) {
      if (selection.length > 0) {
        this.selectAllBoolean = true
      } else {
        this.selectAllBoolean = false
      }
      this.$emit('selectAll', selection)
    },
    // 用于清空排序条件，数据会恢复成未排序的状态
    clearSort() {
      this.$refs.commonTable.clearSort()
    },
    // 表格重新布局
    doLayout() {
      setTimeout(() => {
        if (this.$refs.commonTable) {
          this.$refs.commonTable.doLayout()
        }
      }, 100)
    },
    // 懒加载
    // 1.传递lazyload，自己写懒加载
    // 2.不传递lazyload，全部时候自己开启懒加载
    infiniteHandler($state) {
      if (this.lazyload === true) {
        this.$emit('infinite', $state)
      } else {
        const saveSelect = this.dataSelect
        this.pageData += 1
        this.$nextTick(() => {
          this.toggleSelection(saveSelect)
        })
        if (this.dataAll.length >= this.dataSource.length) {
          $state.complete()
          return
        } else {
          $state.loaded()
        }
      }
    },
    handlerScroll() {
      this.$emit('infinite')
    }
  }
}
</script>

<style lang="scss">
.component-table.standardTable {
  width: 100%;
  .row {
    height: 32px;
  }
  .el-table .cell {
    line-height: 34px;
  }
  .el-table.el-table--small .el-table__header-wrapper th {
    padding: 2px 0;
  }
  .el-table.el-table--small
    .el-table__fixed
    .el-table__fixed-header-wrapper
    th {
    padding: 2px 0;
  }
  .infinite-status-prompt {
      display: none;
  }
}
</style>
