<!--
 * @Author: ShaXin
 * @Date: 2020-06-09 17:45:56
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-09 18:03:20
 -->
<template>
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}-{{ item.id }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  data() {
    return {
      options: [{
        value: 'Alabama',
        label: 'Alabama',
        id: '1111'
      }, {
        value: 'Alaska',
        label: 'Alaska',
        id: '222'
      }, {
        value: 'Arizona',
        label: 'Arizona',
        id: '333'
      }, {
        value: 'Arkansas',
        label: 'Arkansas',
        id: '444'
      }, {
        value: 'California',
        label: 'California',
        id: '555'
      }],
      value: [],
      list: [],
      loading: false
    }
  },
  mounted() {
    this.list = cloneDeep(this.options)
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        this.options = this.list.filter(item => {
          this.loading = false
          return item.id.toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        })
      } else {
        this.options = this.list
      }
    }
  }
}
</script>

<style>

</style>
