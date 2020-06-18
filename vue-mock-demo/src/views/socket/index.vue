<!--
 * @Author: ShaXin
 * @Date: 2020-06-17 11:05:41
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-18 16:41:38
 -->
<template>
  <div>
    <el-button @click="testSocket">测试</el-button>
  </div>
</template>

<script>
import { socketTest } from '@/api/socket'
import SocketClient from '@/utils/socketClient'
export default {
  mounted() {
    this.socket = new SocketClient('http://127.0.0.1:3366/socketServer/socketServer')
    this.socket.init().then(() => {
      this.socket.getMessage(`/user/${this.usercode}/message`, (msgs) => {
        msgs.forEach((msg) => {
          this.$notify.warning({
            title: '通知',
            message: msg.message,
            duration: 0,
            onClose: () => {
              this.socket.sendMessage('/aloneRequest', msg.messageId)
            }
          })
        })
      })
    })
    // const ws = new WebSocket('ws:127.0.0.1:3366/socketServer/socketServer')
    // console.log(ws)
    // ws.onopen = e => {
    //   console.log(`WebSocket 连接状态： ${ws.readyState}`)
    // }

    // ws.onmessage = data => {
    //   console.log(data)
    // }

    // ws.onclose = data => {
    //   console.log('WebSocket连接已关闭')
    //   console.log(data)
    // }
  },
  methods: {
    async testSocket() {
      const res = await socketTest()
      console.log(res)
    }
  }
}
</script>

<style>

</style>
