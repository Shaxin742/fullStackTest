<template>
  <div>
    {{ name }}
    <br>
    <render-dom :change="spanClick" :config="spanConfig" type="span" />
    <render-dom :change="spanClick" :config="selectConfig" type="select" />
    <render-dom :change="spanClick" :config="timeConfig" type="timePicker" />
    <render-dom :change="spanClick" :config="spanConfig" type="tooltip" />

    <render :arr="arr" />
    <el-input-mock v-model="value" :disabled="false" style="width:300px" />

    <renderTest value="render测试" />
  </div>
</template>

<script>
import renderDom from './renderDom'
import render from './render.vue'
import renderTest from './renderTest.vue'
import elInputMock from './elInputMock.vue'
export default {
  name: 'Render',
  components: {
    renderDom,
    render, elInputMock, renderTest
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
      selectype: 'select',
      arr: [
        { name: '哈哈哈' },
        { name: '哈哈2哈' },
        { name: '哈哈3哈' },
        { name: '哈哈4哈' }
      ],
      value: '还是说说'
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
