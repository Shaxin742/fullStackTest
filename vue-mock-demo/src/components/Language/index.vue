<template>
  <el-dropdown class="avatar-container" trigger="click" @command="handleCommand">
    <div class="avatar-wrapper">
      <svg-icon :icon-class="'language'" />
    </div>
    <el-dropdown-menu slot="dropdown" class="user-dropdown">
      <el-dropdown-item
        v-for="item in languages"
        :key="item.command"
        :command="item.command"
      >{{ $t(item.name) }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'Language',
  data() {
    return {
      language: 'cn',
      languages: [
        { name: 'chinese', command: 'cn' },
        { name: 'english', command: 'en' }
      ]
    }
  },
  methods: {
    handleCommand(command) {
      this.$i18n.locale = command
      localStorage.setItem('lang', command)
      // this.options = [
      //   {
      //     value: 'cn',
      //     label: this.$t('message.cn')
      //   },
      //   {
      //     value: 'en',
      //     label: this.$t('message.en')
      //   }
      // ]
    }
  }
}
</script>
