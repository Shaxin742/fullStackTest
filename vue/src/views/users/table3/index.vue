<template>
  <div class="table-page">
    <base-table
      size="mini"
      :data-source="tableData"
      :options="options"
      :columns="columns"
      :loading="loading"
      :load="load"
      :lazy="lazy"
      :row-key="rowKey"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      @handleSelectionChange="handleSelectionChange"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
    <el-button
      @click="tableData=[
      {
        id: '2',
        title: '编号3',
        state: 1
      }]"
    >123123</el-button>
  </div>
</template>
<script>
import BaseTable from '@/components/BaseTable'
export default {
  components: { BaseTable },
  data() {
    const $t = this
    return {
      // table数据
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
      loading: false,
      // table 的参数
      options: {
        stripe: true, // 是否为斑马纹 table
        highlightCurrentRow: false, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
        border: true
      },
      lazy: true, // 树形数据懒加载
      rowKey: 'id', // 树形数据懒加载
      // 需要展示的列
      columns: [
        {
          prop: 'id',
          label: '编号',
          sortable: true,
          // sortable: 'custom',
          align: 'left'
        },
        {
          prop: 'name',
          label: '名称',
          sortable: true,
          // sortable: 'custom',
          'show-overflow-tooltip': true,
          showTip: true,
          align: 'left'
        },
        {
          prop: 'title',
          label: '标题',
          align: 'center',
          showTip: true,
          'show-overflow-tooltip': true,
          formatter: (row, column, cellValue) => {
            return `<span style="white-space: nowrap;color: dodgerblue;">${row.title}</span>`
          }
        },
        {
          prop: 'state',
          label: '状态',
          align: 'center',
          render: (h, params) => {
            return h(
              'el-tag',
              {
                props: {
                  size: 'mini',
                  type:
                    params.row.state === 0
                      ? 'success'
                      : params.row.state === 1
                        ? 'info'
                        : 'danger'
                } // 组件的props
              },
              params.row.state === 0
                ? '上架'
                : params.row.state === 1
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
      ],
      total: 100,
      pageSize: 10,
      currentPage: 1
    }
  },
  methods: {
    // 选中行  多选
    handleSelectionChange(vals) {
      const ids = vals.map(item => item.id)
      console.log('vals:', ids)
    },
    // 查看按钮
    viewData(row) {
      console.log(row)
    },
    // 加载树数据
    load(tree, treeNode, resolve) {
      console.log(tree, treeNode)
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ])
      }, 1000)
    },
    // table size
    handleSizeChange(val) {
      console.log(val)
    },
    // table page
    handleCurrentChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
.blue {
  background: blue;
}
</style>
