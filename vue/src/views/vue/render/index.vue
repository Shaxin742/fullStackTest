<template>
  <div>
    {{ name }}
    <render-dom :change="spanClick" :config="spanConfig" type="span" />
    <render-dom :change="spanClick" :config="selectConfig" type="select" />
    <render-dom :change="spanClick" :config="timeConfig" type="timePicker" />
  </div>
</template>

<script>
import renderDom from './renderDom'
export default {
  name: 'Render',
  components: {
    renderDom
  },
  data() {
    return {
      name: 'Render',
      value1: '',
      timeConfig: {
        value: '',
        type: 'date',
        format: 'yyyy 年 MM 月 dd 日'
      },
      selectConfig: {
        clearable: true,
        multiple: true,
        collapseTags: true,
        value: [],
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
          }
        ]
      },
      spanConfig: {
        content: '阿三大苏打'
      },
      selectype: 'select'
    }
  },
  methods: {
    spanClick(val) {
      console.log(val)
      // this.config.selectValue = val
    }
  }
}
</script>

<style>
</style>
