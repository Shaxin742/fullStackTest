<!--
 * @Author: ShaXin
 * @Date: 2020-06-05 16:38:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-28 10:16:14
 -->
<template>
  <div>
    <el-form ref="form" size="mini" :model="form" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
        </el-col>
        <el-col :span="16" style="text-align:right;">
          <el-form-item>
            <el-button class="btn1" @click="addTableData()">新增</el-button>
            <el-button type="primary" @click="getTableData()">查询</el-button>
            <el-button type="danger" @click="deleteItem()">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <BaseTable
      muti-select
      border
      :loading="loading"
      :data-source="tableData"
      :columns="columns"
      :total="total"
      :page-size="pageSize"
      :current-page="pageNo"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @handleSelectionChange="handleSelectionChange"
      @sortChange="sortChange"
    />

    <!-- 新增修改弹窗 -->
    <data-model ref="dataModel" @reload="getTableData" />
  </div>
</template>

<script>
import dataModel from './dataModel'
import { getTableData, deleteTableData } from '@/api/components'
import BaseTable from '@/components/BaseTable'
export default {
  components: {
    BaseTable,
    dataModel
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase()
    }
  },
  data() {
    return {
      form: {
        name: ''
      },
      tableData: [],
      loading: false,
      columns: [
        { prop: 'id', label: 'id', align: 'center', width: 60 },
        {
          prop: 'date',
          label: '日期',
          align: 'center',
          width: 160,
          sortable: 'custom'
        },
        {
          prop: 'name',
          label: '姓名',
          align: 'center',
          width: 160,
          sortable: 'custom'
        },
        {
          prop: 'province',
          label: '省份',
          align: 'center',
          width: 160,
          sortable: 'custom',
          formatter: (row, column, cellValue) => {
            return `嘎嘎嘎嘎${row.province}`
          }
        },
        { prop: 'address', label: '地址', align: 'center', 'show-overflow-tooltip': true },
        { prop: 'zip', label: '邮编', align: 'center' },
        {
          prop: 'city',
          label: '城市',
          align: 'left',
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
          prop: '',
          label: '点击',
          align: 'center',
          fixed: 'right',
          render: (h, record) => {
            return (
              <div>
                <el-button
                  onClick={() => {
                    this.viewData(record)
                  }}
                  size='mini'
                >
                  查看
                </el-button>
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
      multipleSelection: [],
      sortName: '',
      sortOrder: ''
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      const { pageSize, pageNo, sortName, sortOrder } = this
      const { name } = this.form
      this.loading = true
      const data = {
        pageSize,
        pageNo,
        name,
        sortName,
        sortOrder
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 排序
    sortChange({ column, prop, order }) {
      if (order === 'descending') {
        this.sortOrder = 'desc'
      } else if (order === 'ascending') {
        this.sortOrder = 'asc'
      } else {
        this.sortOrder = null
      }
      this.sortName = prop
      this.getTableData()
    },

    async deleteItem() {
      this.loading = true
      const arr = this.multipleSelection.map(item => {
        return item.id
      })
      try {
        const res = await deleteTableData({ data: arr })
        this.$message.success(res.data)
        this.loading = false
        this.getTableData()
      } catch (error) {
        this.$message.error('访问失败')
        this.loading = false
      }
    },
    viewData(record) {
      this.$refs.dataModel.init(record.row, true)
    },
    addTableData() {
      this.$refs.dataModel.init({})
    },
    editData(record) {
      this.$refs.dataModel.init(record.row)
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
