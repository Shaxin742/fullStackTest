<!--
 * @Author: ShaXin
 * @Date: 2020-06-23 13:20:59
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-28 10:50:38
 -->
<template>
  <div>
    <BaseTable
      border
      :loading="loading"
      :data-source="tableData"
      :columns="columns"
      :total="total"
      :page-size="pageSize"
      :current-page="pageNo"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import { getTableData } from '@/api/components'
import BaseTable from '@/components/BaseTable'
export default {
  components: {
    BaseTable
  },
  data() {
    return {
      tableData: [],
      columns: [
        { prop: 'id', label: 'id', align: 'center', width: 60 },
        {
          prop: 'date',
          itemEdit: true,
          label: '日期',
          align: 'center',
          width: 160
        },
        {
          prop: 'name',
          label: '姓名',
          align: 'center',
          isEdit: true,
          width: 160
        },
        {
          prop: 'city',
          label: '城市',
          align: 'left',
          width: 140,
          showTip: true,
          render: (h, record) => {
            return (
              <span style='white-space: nowrap;color: dodgerblue;'>
                {record.row.city}
              </span>
            )
          }
        },
        {
          prop: 'province',
          label: '省份',
          align: 'center',
          width: 160,
          isEdit: true,
          formatter: (row, column, cellValue) => {
            return `嘎嘎嘎嘎${row.province}`
          }
        },
        {
          prop: 'address',
          label: '地址',
          align: 'center',
          width: 360,
          'show-overflow-tooltip': true
        },
        { prop: 'zip', label: '邮编', align: 'center' },
        {
          prop: '',
          label: '点击',
          align: 'center',
          fixed: 'right',
          render: (h, record) => {
            return (
              <div>
                <el-button
                  size='mini'
                  onClick={() => {
                    this.editData(record)
                  }}
                >
                  编辑
                </el-button>
              </div>
            )
          }
        }
      ],
      total: 0,
      pageSize: 10,
      pageNo: 1,
      loading: false
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      const { pageSize, pageNo } = this
      this.loading = true
      const data = {
        pageSize,
        pageNo
      }
      try {
        const res = await getTableData(data)
        this.tableData = res.data.tableData
        this.total = res.data.total
        this.loading = false
      } catch (error) {
        this.$message.error('访问失败')
        this.loading = false
      }
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getTableData()
    },
    handleCurrentChange(val) {
      this.pageNo = val
      this.getTableData()
    },
    editData({ column, row, index }) {
      console.log(column)
      console.log(row)
      // column.canEdit = true
    }
  }
}
</script>

<style lang='scss' scoped>
.demo-ruleForm {
  margin-top: 20px;
  margin-right: 20px;
}
</style>
