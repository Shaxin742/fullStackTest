
<template>
  <div>
    <div class="btn-group">
      <!-- <div class="btn" title="起始节点" @click="addCircle">
        <i class="iconfont icon-circle-oeps" />
      </div> -->
      <div class="btn" title="常规节点" @click="addRect">
        <i class="el-icon-delete" />
      </div>
      <!--  <div class="btn" title="条件节点" @click="addRhombus">
          <i class="iconfont icon-square-ling" />
        </div> -->
    </div>
    <div id="g6Con" />
  </div>
</template>

<script>
import G6 from '@antv/g6'
export default {
  data: function() {
    return {
      g6Data: {
        nodes: [{
          id: '1',
          label: '请求回放1（开始）',
          type: 'begin'
        }, {
          id: '2',
          label: '交易创建'
        }],
        edges: [{
          source: '1',
          target: '2'
        }, {
          source: '1',
          target: '3'
        }]
      },
      graph: null
    }
  },
  mounted() {
    this.initG6()
  },
  methods: {
    initG6() {
      this.graph = new G6.Graph({
        container: 'g6Con',
        modes: {
          default: ['edit', 'drag-node', 'drag-canvas']
        },
        width: 500,
        height: 500
      })

      this.graph.data(this.g6Data)
      this.graph.render()
    },
    addRect() {
      this.graph.addItem('node', {
        shape: 'rect',
        nodeType: 0,
        id: 3
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
    border-right: 1px solid #efefef;
    display: inline-block;
    padding-left: 10px;
    padding-right: 14px;
    &:last-of-type {
      border-right: 0;
    }
    .btn {
      display: inline-block;
      margin: 2px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      border: 1px solid rgba(233, 233, 233, 0);
      i {
        font-size: 20px;
      }
      &:hover {
        border: 1px solid #E9E9E9;
        color: #767A85;
        border-radius: 2px;
        background: #FAFAFE;
      }
    }
    .el-form-item {
      margin-bottom: 0 !important;
    }
  }
</style>
