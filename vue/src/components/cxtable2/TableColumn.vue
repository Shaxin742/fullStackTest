<template>
  <el-table-column v-if="col.render" :key="col.dataIndex" v-bind="col">
    <template slot-scope="{ row, column, $index }">
      <ColumnRender
        :render-col="col.render"
        :record="row"
        :value="row[col.dataIndex]"
        :index="$index"
        :prop-key="col.prop"
      />
    </template>
  </el-table-column>
  <el-table-column v-else-if="col.label === '操作' && col.actions" :key="col.prop" v-bind="col">
    <template slot-scope="{ row, column, $index }">
      <ColumnRender
        :render-col="renderAction(col.actions)"
        :record="row"
        :value="row[col.dataIndex]"
        :index="$index"
        :prop-key="col.prop"
      />
    </template>
  </el-table-column>
  <el-table-column v-else :key="col.prop" v-bind="col">
    <template v-if="col.children">
      <table-column
        v-for="(item, index) in col.children"
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
    </template>
  </el-table-column>
</template>

<script>
import { currencyFormatter } from '@/utils'
import { actionRender } from './colActions'
import ColumnRender from './column-render'
import random from 'lodash/random'
export default {
  name: 'TableColumn',
  components: {
    ColumnRender
  },
  props: {
    col: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      randomNum: random(1, 1000000000000)
    }
  },
  methods: {
    renderAction(actions) {
      return actionRender(actions)
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
    }
  }
}
</script>
