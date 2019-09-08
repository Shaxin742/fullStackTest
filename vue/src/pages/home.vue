<template>
  <div>
    {{$t('message.text')}}
    <el-button @click="postTest">post</el-button>
    <el-button @click="getTest">get</el-button>
    123
  </div>
</template>
<script>
import {getTest, postTest} from '@/api/api'
export default {
  data: function () {
    return {
      tableData: []
    }
  },
  methods: {
    async getTest () {
      this.tableData = await getTest()
    },
    async postTest () {
      this.tableData = await postTest()
    }
  }
}
</script>
