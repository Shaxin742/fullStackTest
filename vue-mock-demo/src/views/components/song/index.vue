<!--
 * @Author: ShaXin
 * @Date: 2020-05-29 15:54:16
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-01 15:22:54
 -->
<template>
  <div>
    <div class="songListen">
      <el-button
        size="small"
        @click="listenZhou"
      >
        我要听说好不哭
      </el-button>
      <el-button
        size="small"
        @click="listenli"
      >
        我要听低空飞行
      </el-button>
    </div>
    <SongPlay
      ref="songplay"
      :data="songData"
    />
  </div>
</template>

<script>
import SongPlay from '@/components/SongPlay'
import { getSongs } from '@/api/components'
export default {
  name: 'Song',
  components: {
    SongPlay
  },
  data: function() {
    return {
      songData: {}
    }
  },
  methods: {
    listenZhou() {
      this.getSongs('周')
    },
    listenli() {
      this.getSongs('李')
    },
    getSongs(name) {
      getSongs({ name }).then(res => {
        this.songData = res.data
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.songListen {
  height: 80px;
  line-height: 80px;
  width: 100%;
  text-align: center;
}
</style>
