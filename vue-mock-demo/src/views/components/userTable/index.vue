<!--
 * @Author: ShaXin
 * @Date: 2020-06-05 16:38:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-05 18:07:54
 -->
<template>
  <div>
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
    <BaseTable
      border
      :loading="loading"
      :data-source="tableData"
      :columns="columns"
      :total="total"
      :page-size="10"
      :current-page="1"
    />
  </div>
</template>

<script>
import { getTableData } from '@/api/userTable'
import BaseTable from '@/components/BaseTable'
export default {
  components: {
    BaseTable
  },
  data: function() {
    return {
      tableData: [],
      loading: false,
      columns: [
        { prop: 'date', label: '日期', align: 'center' },
        { prop: 'name', label: '姓名', align: 'center' },
        { prop: 'province', label: '省份', align: 'center' },
        { prop: 'city', label: '城市', align: 'center' },
        { prop: 'address', label: '地址', align: 'center' },
        { prop: 'zip', label: '邮编', align: 'center' }
      ],
      total: 10,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      const res = await getTableData()
      console.log(res)
      this.tableData = res.data.tableData
    }
  }
}
</script>

<style>
</style>
