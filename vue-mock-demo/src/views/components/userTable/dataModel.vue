<!--
 * @Author: ShaXin
 * @Date: 2020-06-05 16:38:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-09 11:32:28
 -->
<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" width="600px">
      <el-form ref="form" :model="data" label-width="80px" size="mini">
        <el-form-item label="日期">
          <el-date-picker
            v-model="data.date"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            :disabled="isView"
          />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="data.name" :disabled="isView" />
        </el-form-item>
        <el-form-item label="省份">
          <!-- <el-input v-model="data.province" /> -->
          <el-select
            v-model="data.province"
            :disabled="isView"
            filterable
            placeholder="请选择"
            @change="changeProvience"
          >
            <el-option
              v-for="item in CITYDATA.provinceData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="城市">
          <!-- <el-input v-model="data.city" :disabled="isView" /> -->
          <el-select v-model="data.city" :disabled="!data.province||isView" filterable placeholder="请选择" @change="changeCity">
            <el-option
              v-for="item in citys"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="data.address" :disabled="isView" />
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="data.zip" :disabled="isView" />
        </el-form-item>
        <el-form-item v-if="!isView" label>
          <el-button type="primary" size="small" @click="onSubmit">{{ title }}</el-button>
          <el-button size="small" @click="visible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
import { addTableData, updateTableData } from '@/api/components'
const CITYDATA = require('./city')
export default {
  name: 'AddModel',
  data: function() {
    return {
      data: {},
      visible: false,
      title: '',
      isView: false,
      CITYDATA,
      citys: []
    }
  },
  methods: {
    init(val, isView) {
      this.isView = !!isView

      console.log(val)
      this.data = cloneDeep(val)
      this.title =
        JSON.stringify(val) === '{}' ? '新增' : this.isView ? '查看' : '修改'
      this.visible = true
    },
    changeProvience(val) {
      console.log(val)
      this.citys = []
      // this.data.city = ''
      this.$set(this.data, 'city', '')
      CITYDATA.allCity.map(v => {
        if (v.prov === val) {
          this.citys.push({ label: v.label, value: v.label })
        }
      })
    },
    changeCity(val) {
      console.log(val)

      this.$set(this.data, 'city', val)
    },
    async onSubmit() {
      console.log(this.data)
      try {
        const res =
          this.title === '新增'
            ? await addTableData({ data: this.data })
            : await updateTableData({ data: this.data })
        console.log(res)
        this.visible = false
        this.$emit('reload')
      } catch (error) {
        this.$message.error(`${this.title}失败`)
      }
    }
  }
}
</script>
<style lang="scss">
.el-dialog__body {
  padding: 10px 20px 30px;
}
</style>
