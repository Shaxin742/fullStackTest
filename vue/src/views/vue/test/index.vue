<template>
  <div>
    <el-button @click="clickTest('test1')">test</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      actions: new Map([
        ['test1', () => { console.log('test1') }],
        ['test2', () => { console.log('test3') }],
        ['default', () => { console.log('default') }]
      ])
    }
  },
  methods: {
    clickTest(identity) {
      const action = this.actions.get(`${identity}`) || this.actions.get('default')
      action.call(this)
    }
  }
}
</script>

<style>
</style>
