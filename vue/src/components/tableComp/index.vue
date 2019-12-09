<template>
  <div>
    <el-table
      ref="commonTable"
      v-loading="loading"
      class="table"
      :data="dataSource"
      header-row-class-name="table_head"
    >
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
    </el-table>
  </div>
</template>

<script>
import TableColumn from './tableColumn'
export default {
  name: 'TableComp',
  components: { TableColumn },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      randomNum: Math.random()
    }
  },
  methods: {
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

<style>

</style>
