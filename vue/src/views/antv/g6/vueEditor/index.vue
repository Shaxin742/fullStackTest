<template>
  <div>
    <el-button @click="getData()">123123</el-button>
    <wfd
      ref="wfd"
      :data="demoData"
      :height="600"
      :users="candidateUsers"
      :groups="candidateGroups"
      :lang="lang"
    />
  </div>
</template>

<script>
import wfd from './components/Wfd'
export default {
  components: { wfd },
  data() {
    return {
      lang: 'zh',
      demoData: {},
      candidateUsers: [],
      candidateGroups: []
    }
  },
  mounted() {
    this.demoData = { 'nodes': [{ 'shape': 'start-node', 'clazz': 'start', 'size': [30, 30], 'label': '', 'x': 141.609375, 'y': 102, 'id': 'start1574414222780' }, { 'shape': 'message-start-node', 'clazz': 'messageStart', 'size': [30, 30], 'label': '', 'x': 240.609375, 'y': 159, 'id': 'messageStart1574414224518' }, { 'clazz': 'userTask', 'size': [80, 44], 'label': '审批节点', 'shape': 'user-task-node', 'x': 452.703125, 'y': 201, 'id': 'userTask1574416716581' }, { 'clazz': 'scriptTask', 'size': [80, 44], 'label': '脚本节点', 'shape': 'script-task-node', 'x': 383.703125, 'y': 306, 'id': 'scriptTask1574416717755' }], 'edges': [{ 'clazz': 'flow', 'source': 'start1574414222780', 'target': 'messageStart1574414224518', 'sourceAnchor': 1, 'targetAnchor': 0, 'shape': 'flow-polyline-round', 'startPoint': { 'x': 157.109375, 'y': 102, 'index': 1 }, 'endPoint': { 'x': 240.609375, 'y': 143.5, 'index': 0 }, 'style': {}}, { 'clazz': 'flow', 'source': 'scriptTask1574416717755', 'target': 'userTask1574416716581', 'sourceAnchor': 0, 'targetAnchor': 2, 'shape': 'flow-polyline-round', 'startPoint': { 'x': 383.703125, 'y': 283.5, 'index': 0 }, 'endPoint': { 'x': 452.703125, 'y': 223.5, 'index': 2 }}], 'groups': [] }
  },
  methods: {
    getData() {
      const res = this.$refs['wfd'].graph.save()
      console.log(JSON.stringify(res))
    }
  }
}
</script>

<style>

</style>
