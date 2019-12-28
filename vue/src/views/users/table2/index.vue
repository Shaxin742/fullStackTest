<template>
  <div>
    <Table
      :border="true"
      :has-pagination="true"
      :data-source="tableData"
      :columns="columns"
      :loading="loading"
      :total="total"
      :row-key="rowKey"
      :current-page="currentPage"
      :page-size="pageSize"
      @selectionChange="getSelection"
      @handleSize="handleSize"
      @handleCurrent="handleCurrent"
    />
  </div>
</template>

<script>
// import { currencyFormatter } from '@/utils'
import Table from '@/components/cxTable'
export default {
  components: {
    Table
  },
  data() {
    var $t = this
    return {
      tableData: [
        {
          id: '1',
          title: '编号3',
          name: '编号3',
          state: 0
        },
        {
          id: '3',
          title: '编号2',
          name: '编号3',
          state: 1
        },
        {
          id: '2',
          name: '编号3',
          title: '编编号3编号3编号3编号3编号3编号3编号3编号3编号3编号3编号3号3',
          state: 2,
          'show-overflow-tooltip': true,
          hasChildren: true
        },
        {
          id: '4',
          title: '编号3',
          name: '编号3',
          state: 0
        }
      ],
      rowKey: 'id',
      loading: false,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      columns: [
        {
          prop: 'id',
          label: '编号',
          sortable: true,
          align: 'left'
        },
        {
          prop: 'name',
          label: '名称',
          sortable: true,
          showTip: true,
          'show-overflow-tooltip': true,
          align: 'left'
        },
        {
          prop: 'title',
          label: '标题',
          align: 'left',
          showTip: true,
          formatter: (row, column, cellValue) => {
            return (
              <span style='white-space: nowrap;color: dodgerblue;'>
                {row.title}
              </span>
            )
          }
        },
        {
          prop: 'state',
          label: '状态',
          align: 'center',
          render: (h, { record }) => {
            console.log(record)
            return h(
              'el-tag',
              {
                props: {
                  size: 'mini',
                  type:
                    record.state === 0
                      ? 'success'
                      : record.state === 1
                        ? 'info'
                        : 'danger'
                } // 组件的props
              },
              record.state === 0
                ? '上架'
                : record.state === 1
                  ? '下架'
                  : '审核中'
            )
          }
        },
        {
          prop: '',
          label: '点击',
          align: 'center',
          fixed: 'right',
          render: (h, record) => {
            return (
              <div>
                <el-button
                  onClick={function() {
                    $t.viewData(record)
                  }}
                  size='mini'
                >
                  查看
                </el-button>
                <el-button size='mini'>编辑</el-button>
              </div>
            )
          }
        }
      ]
    }
  },
  methods: {
    getSelection(val) {
      console.log(val)
    },
    handleSize(val) {
      console.log(val)
    },
    handleCurrent(val) {
      console.log(val)
    },
    viewData(val) {
      console.log(val)
    }
  }
}
</script>

<style>
</style>
