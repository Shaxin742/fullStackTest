
<template>
  <div>
    <div class="btn-group">
      <div class="btn" title="常规节点" @click="addRect">
        <i class="el-icon-delete" />
      </div>
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
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          x: 100, // Number，可选，节点位置的 x 值
          y: 200 // Number，可选，节点位置的 y 值
        }, {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          x: 300, // Number，可选，节点位置的 x 值
          y: 200 // Number，可选，节点位置的 y 值
        }],
        // 边集
        edges: [{
          source: 'node1', // String，必须，起始点 id
          target: 'node2' // String，必须，目标点 id
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
      this.graph = new G6.TreeGraph({
        container: 'mountNode',
        width: 1000,
        height: 800,
        defaultNode: {
          size: 16,
          anchorPoints: [[0, 0.5], [1, 0.5]]
        },
        defaultEdge: {
          shape: 'cubic-horizontal'
        },
        nodeStyle: {
          default: {
            fill: '#40a9ff',
            stroke: '#096dd9'
          },
          styles: {
            hover: {
              opacity: 0.6
            }
          }
        },
        edgeStyle: {
          default: {
            stroke: '#A3B1BF'
          },
          styles: {
            hover: {
              opacity: 0.6
            }
          }
        }
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
