<!--
 * @Author: ShaXin
 * @Date: 2020-06-17 11:05:41
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-19 11:31:21
 -->
<template>
  <div>
    <el-button @click="testSocket">测试</el-button>
  </div>
</template>

<script>
import { socketTest } from '@/api/socket'
// import SocketClient from '@/utils/socketClient'
export default {
  data: function() {
    return {
      websock: null
    }
  },
  mounted() {
    this.websock = new WebSocket('ws://localhost:3365/socketServer/socketServer')
    console.log(this.websock)
    this.websock.onopen = e => {
      console.log(`WebSocket 连接状态： ${this.websock.readyState}`)
    }

    this.websock.onmessage = data => {
      console.log(data)
    }

    this.websock.onclose = data => {
      console.log('WebSocket连接已关闭')
      console.log(data)
    }
  },
  methods: {
    async testSocket() {
      this.websock.send('123123')
    }
  }
}
</script>

<style>

</style>
