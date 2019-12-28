<template>
  <div class="base-table">
    <div class="table-wrap" :class="{ summary: !showSummary }">
      <el-table
        ref="commonTable"
        :key="tableKey ? tableKey : randomNum"
        v-loading="loading"
        :row-key="rowKey"
        :default-expand-all="defaultExpandAll"
        :tree-props="treeProps"
        :class="{ borderStyle: borderStyle }"
        class="table"
        :stripe="!stripe"
        :data="dataSource"
        :row-style="rowStyle"
        :show-summary="showSummary"
        :summary-method="summaryMethod"
        :cell-class-name="cellClassName"
        :row-class-name="rowClassName"
        header-row-class-name="table_head"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <!-- :height="finalHeight" -->

        <TableColumn
          v-for="(item, index) in columns"
          :key="index"
          :col="item"
          :render-header="
            item.lineFeed === true ? lineFeedHandle(item) : item.renderHeader
          "
          :formatter="
            item.format || item.format === ''
              ? formatNumber(item)
              : item.formatter
          "
        />

        <InfiniteLoading
          v-if="lazyload"
          slot="append"
          :distance="50"
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
      <el-pagination
        v-if="hasPagination"
        class="base-pagination"
        :total="total"
        :layout="layout ? layout : `total, sizes, prev, pager, next, jumper`"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import random from 'lodash/random'
import TableColumn from './TableColumn'
import { currencyFormatter } from '@/utils'

export default {
  name: 'BaseTable',
  components: {
    TableColumn,
    InfiniteLoading
  },
  props: {
    treeProps: {
      type: Object,
      default: () => {}
    },
    rowKey: {
      type: String,
      default: () => ''
    },
    defaultExpandAll: {
      type: Boolean
    },
    col: {
      type: Object,
      default: () => {}
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: () => ''
    },
    defaultHeight: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: () => 0
    },
    render: {
      type: Function,
      default: () => function() {}
    },
    stripe: {
      type: Boolean,
      default: false
    },
    borderStyle: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      default: () => 1
    },
    pageSize: {
      type: Number,
      default: () => 20
    },
    pagerCount: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: () => 20
    },
    hasPagination: {
      type: Boolean,
      default: false
    },
    cellClassName: {
      type: Function,
      default: () => function() {}
    },
    rowClassName: {
      type: Function,
      default() {
        return 'row'
      }
    },
    summaryMethod: {
      type: Function,
      default: () => function() {}
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    tableKey: {
      type: Number,
      default: () => 1
    },
    rowStyle: {
      type: Function,
      default() {
        return 'row'
      }
    },
    lazyload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      params: {
        page: 1,
        limit: 20
      },
      randomNum: random(1, 1000000000000)
    }
  },
  computed: {
    // finalHeight() {
    //   if (this.columns) {
    //     const flag = this.columns.some((item) => {
    //       return item.children
    //     })
    //     let fh = 730
    //     if (this.defaultHeight) {
    //       fh = false
    //     } else {
    //       if (this.height === 0) {
    //         let rows = this.dataSource.length
    //         if (this.showSummary) {
    //           rows = rows <= 18 ? rows : 18
    //           if (flag === true) {
    //             fh = `${107 + rows * 34 + 41}px`
    //           } else {
    //             fh = `${57 + rows * 34 + 41}px`
    //           }
    //         } else {
    //           rows = rows <= 20 ? rows : 20
    //           if (flag === true) {
    //             fh = `${107 + rows * 34}px`
    //           } else {
    //             fh = `${57 + rows * 34}px`
    //           }
    //         }
    //       } else {
    //         fh = `${this.height}px`
    //       }
    //     }
    //     return fh
    //   }
    // }
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit('handleCurrent', val)
    },
    handleSizeChange(val) {
      this.$emit('handleSize', val)
    },
    // infiniteHandler(val) {
    //   this.$emit('infiniteHandler', val);
    // },
    rowClick(row, event, column) {
      this.$emit('rowClick', row, event, column)
    },
    rowdblClick(row, event) {
      this.$emit('rowdblClick', row, event)
    },
    cellMouseEnter({ row, column, cell, event }) {
      this.$emit('handleMouseEnter', row, column, cell, event)
    },
    cellMouseLeave({ row, column, cell, event }) {
      this.$emit('handleMouseLeave', row, column, cell, event)
    },
    selectionChange(selection) {
      this.$emit('selectionChange', selection)
    },
    toggleRowSelection(row, selected) {
      this.$refs.commonTable.toggleRowSelection(row, selected)
    },
    clearSelection() {
      this.$refs.commonTable.clearSelection()
    },
    sortChange(data) {
      this.$emit('sortChange', data)
    },
    rowSelect(selection, row) {
      this.$emit('rowSelect', selection, row)
    },
    selectAll(selection) {
      this.$emit('selectAll', selection)
    },
    clearSort() {
      this.$refs.commonTable.clearSort()
    },
    infiniteHandler($state) {
      this.$emit('infinite', $state)
    },
    lineFeedHandle(col) {
      col.renderHeader = (h, { column, $index }) => {
        return h(
          'span',
          {
            style: {
              display: 'inline-block',
              'vertical-align': 'middle',
              'line-height': '18px'
            }
          },
          [
            h('span', {}, column.label.split('|')[0]),
            h(
              'span',
              {
                style: { display: 'block' }
              },
              column.label.split('|')[1]
            )
          ]
        )
      }
    },
    formatNumber(col) {
      col.render = (h, scope) => {
        col.format = col.format === '' ? '2' : col.format
        return (
          <span>{`${currencyFormatter(
            scope.record[scope.prop],
            Number(col.format)
          )}`}</span>
        )
      }
    }
  }
}
</script>

<style lang="scss">
.el-table th,
.el-table td {
  padding: 8px 0;
}
.el-table--border {
  border: none;
  td {
    // border-right-color: #fff;
  }
}
.sortTable {
  .el-table th {
    padding: 0 !important;
    .cell {
      line-height: 36px;
      text-align: center;
    }
  }
}
.base-table {
  background-color: white;
  .table-wrap {
    padding-top: 10px;
    .borderStyle {
      border: 1px solid rgba(#eee, 0.2);
      border-top: none;
      border-bottom: none;
    }
    .el-table__row td {
      height: 34px;
      padding: 0;
      font-size: 12px;
      .el-button {
        padding: 0;
      }
    }
    .table {
      // max-height: 700px;
      font-size: 12px;
      color: #333;
      .el-table__body-wrapper {
        // max-height: 700px;
      }
      .sort-caret.descending {
        border-top-color: #fff;
      }
      .sort-caret.ascending {
        border-bottom-color: #fff;
      }
      .ascending {
        .sort-caret.ascending {
          border-bottom-color: #e0af0f;
        }
      }
      .descending {
        .sort-caret.descending {
          border-top-color: #e0af0f;
        }
      }
      .el-table-column--selection .cell {
        overflow: visible !important;
      }
      .table_head {
        th {
          align-self: center;
          height: 40px;
          padding: 9px 0 6px;
          font-size: 14px;
          color: #333;
          background-color: #eee;
          border-right: 1px solid #aaa;
          // &:nth-last-child(2) {
          //   border-right: none;
          // }
          .el-checkbox__input.is-indeterminate,
          .el-checkbox__input.is-checked,
          .el-checkbox__input.is-focus {
            .el-checkbox__inner {
              background-color: #fff;
              border-color: #fff;
            }
          }
          .el-checkbox__inner::before {
            background-color: #eee;
          }
          .el-checkbox__inner::after {
            border-color: #eee;
          }

          .cell {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        /* th:first-child { */

        /* border-right: none; */

        /* } */
        // th:nth-last-child(2) {
        // border-right: none;
        // }
        .el-checkbox.is-checked {
          color: #eee;
        }
      }
      .el-table__footer {
        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 2px;
          content: "";
          background-color: rgba(#eee, 0.4);
        }
        tbody td {
          font-size: 14px;
          font-weight: bold;
          color: #eee;
          background-color: white;
          border-right-color: white;
        }
      }
    }
    .table .el-table__footer-wrapper .el-table__footer {
      &::before {
        position: absolute;
        bottom: 39px;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 2px;
        content: "";
        background-color: rgba(#eee, 0.4);
      }
    }
    .table .el-table__fixed-footer-wrapper .el-table__footer {
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 2px;
        content: "";
        background-color: rgba(#eee, 0.4);
      }
    }
    .base-pagination {
      height: 50px;
      padding: 0 5px;
      text-align: right;
      background-color: white;
      .el-pagination__total,
      .el-pagination__sizes,
      .el-pagination__jump {
        font-size: 14px;
        line-height: 50px;
      }
      .el-pagination__total {
        float: left;
      }
      .btn-prev,
      .btn-next,
      .el-pager li {
        margin: 10px 5px;
        font-size: 14px;
      }
      .el-pager li {
        font-weight: 400;
        color: #606266;
      }
      .el-pager li:not(.disabled).active {
        color: #eee;
        background-color: white;
      }
      .el-input .el-input__inner {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .el-table__fixed::before,
  .el-table__fixed-right::before,
  .el-table::before,
  .el-table--group::after,
  .el-table--border::after {
    width: 0;
  }
  .summary {
    .borderStyle {
      border-bottom: 1px solid rgba(#eee, 0.2);
    }
  }
  .table .el-table__fixed-header-wrapper {
    .table_head th:last-child {
      border-right: none;
    }
    // .table_head th:nth-last-child(2) {
    //   border-right: 1px solid #eee;
    // }
  }
  .el-table {
    .el-table__body {
      tr.el-table__row--striped > td {
        background-color: rgba(#eee, 0.1);
        border-right-color: #e6ebf5;
      }
      tr.hover-row > td {
        background-color: rgba(#eee, 0.2);
        border-right-color: #e6ebf5;
      }
    }

    .el-table__fixed-right-patch {
      background-color: #eee;
      border-bottom-color: #eee;
    }
  }
  .table .el-table__body tr.hover-row > td,
  .el-table__body tr.hover-row.current-row > td,
  .el-table__body tr.hover-row.el-table__row--striped > td,
  .el-table__body tr.hover-row.el-table__row--striped.current-row > td {
    background-color: #dbe4ff;
    border-right-color: #dbe4ff;
  }
}

.polymerization-table {
  .base-table {
    .table-wrap {
      .table {
        .table_head {
          th {
            color: #eee;
            background-color: rgba(#eee, 0.2);
          }
        }
      }
    }
  }
}
// .loading {
//   height: 48px;
//   font-size: 14px;
//   line-height: 48px;
//   text-align: center;
//   .el-icon-loading {
//     font-size: 16px;
//   }
// }
.pageNumber {
  padding: 6px 0 16px 10px;
  margin: 0;
  font-size: 14px;
  color: #eee;
  background-color: white;
}
</style>
