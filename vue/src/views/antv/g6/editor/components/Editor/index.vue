<template>
  <div id="mountNode" :style="{width:width}">
    <div class="editor">
      <context-menu />
      <!--toolbar-->
      <toolbar />
      <div style="height: 42px;" />
      <div class="bottom-container">
        <!--itempannel-->
        <item-panel />
        <!--detailpannel-->
        <detail-panel />
        <!--miniMap-->
        <minimap />
        <!--page-->
        <page :height="height" :width="width" :data="data" />
      </div>
    </div>
    <Flow />
  </div>
</template>

<script>
import Toolbar from '../Toolbar'
import ItemPanel from '../ItemPanel'
import DetailPanel from '../DetailPanel'
import Minimap from '../Minimap'
import Page from '../Page'
import Flow from '../Flow'
import ContextMenu from '../ContextMenu'
import Editor from '../Base/Editor'
import Command from '../../command'
export default {
  name: 'Editor',
  components: {
    Toolbar,
    ItemPanel,
    DetailPanel,
    Minimap,
    Page,
    ContextMenu,
    Flow
  },
  props: {
    height: {
      type: Number,
      default: document.documentElement.clientHeight
    },
    width: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      editor: {},
      command: null
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.command = new Command(this.editor)
      this.editor = new Editor()
    }
  }
}
</script>

<style scoped>
.editor {
  position: relative;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.bottom-container {
  position: relative;
}
</style>
