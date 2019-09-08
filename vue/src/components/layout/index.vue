<template>
  <div>
    <el-container>
      <el-header>
        <el-select v-model="language" @change="changeLang" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Sidebar } from './components'
export default {
  components: {
    Sidebar
  },
  data: function () {
    return {
      options: [
        {
          value: 'cn',
          label: this.$t('message.cn')
        },
        {
          value: 'en',
          label: this.$t('message.en')
        }
      ],
      language: 'cn'
    }
  },
  watch: {
    language (val) {
      localStorage.setItem('lang', val)
    }
  },
  methods: {
    changeLang (e) {
      console.log(e)
      this.$i18n.locale = e
      localStorage.setItem('lang', e)
      this.options = [
        {
          value: 'cn',
          label: this.$t('message.cn')
        },
        {
          value: 'en',
          label: this.$t('message.en')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  line-height: 60px;
}
.el-aside {
  height: calc(100vh - 60px);
}
</style>
