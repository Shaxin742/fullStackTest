<template>
  <div ref="container" class="container-fluid">
    <div class="editor">
      <!-- 工具栏 DOM 结构规约参考 Toolbar API -->
      <div id="toolbar">
        <i data-command="back" class="command iconfont icon-back" title="返回" />
        <span class="separator" />
        <i data-command="undo" class="command iconfont icon-undo" title="撤销" />
        <i data-command="redo" class="command iconfont icon-redo" title="重做" />
        <span class="separator" />
        <i data-command="addBeginNode" class="command iconfont icon-add-begin-node" title="新增起始节点" />
        <i data-command="copy" class="command iconfont icon-copy-o" title="复制" />
        <i data-command="paste" class="command iconfont icon-paster-o" title="粘贴" />
        <i data-command="delete" class="command iconfont icon-delete-o" title="删除" />
        <i data-command="clear" class="command iconfont icon-clear" title="清空画布" />
        <span class="separator" />
        <i data-command="zoomIn" class="command iconfont icon-zoom-in-o" title="放大" />
        <i data-command="zoomOut" class="command iconfont icon-zoom-out-o" title="缩小" />
        <i data-command="autoZoom" class="command iconfont icon-fit" title="适应画布" />
        <i data-command="resetZoom" class="command iconfont icon-actual-size-o" title="实际尺寸" />
        <span class="separator" />
        <i data-command="toBack" class="command iconfont icon-to-back" title="层级后置" />
        <i data-command="toFront" class="command iconfont icon-to-front" title="层级前置" />
        <span class="separator" />
        <i data-command="multiSelect" class="command iconfont icon-select" title="多选" />
        <span class="separator" />
        <i data-command="save" class="command iconfont icon-save" title="保存" />
      </div>
      <div style="height:42px;" />
      <div class="editor-content">
        <!-- 元素面板栏 DOM 结构规约参考 Itempannel API -->
        <div id="itempannel">
          <div
            class="getItem"
            data-type="node"
            data-shape="flow-rect"
            data-size="120*48"
            data-color="#1890FF"
          >
            <img draggable="false" src="http://qiniudns.shaxin741.vip/1568016922%281%29.jpg">
          </div>
          <div
            class="getItem"
            data-type="node"
            data-shape="flow-capsule"
            data-size="80*48"
            data-color="#FD0DFF"
          >
            <img draggable="false" src="http://qiniudns.shaxin741.vip/1568016922%281%29.jpg">
          </div>
        </div>
        <div class="right-side">
          <!-- 详情面板栏 DOM 结构规约参考 Detailpannel API -->
          <div id="detailpannel">
            <div data-status="node-selected" class="pannel">
              <div class="pannel-title">节点属性栏</div>
              <div class="pannel-container">
                <el-form ref="form" label-width="80px">
                  <el-form-item v-if="showCond" label="条件">
                    <el-select
                      v-model="condType"
                      placeholder="请选择条件"
                      @change="condTypeSelectChange"
                    >
                      <el-option
                        v-for="(cItem, cIndex) in conditionList"
                        :key="cIndex"
                        :label="cItem.name"
                        :value="cItem.code"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item v-if="showOperator" label="判断方法">
                    <el-select v-model="operator" @change="enableChangeData">
                      <el-option
                        v-for="(oItem, oIndex) in operatorList"
                        :key="oIndex"
                        :label="oItem.name"
                        :value="oItem.code"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item v-if="showValue" label="值">
                    <el-select v-model="value" filterable @change="enableChangeData">
                      <el-option
                        v-for="(vItem, vIndex) in valueList"
                        :key="vItem.code"
                        :label="vItem.name"
                        :value="vItem.code"
                      />
                    </el-select>
                  </el-form-item>

                  <el-form-item v-if="showDisease" label="疾病">
                    <el-badge :value="diseaseSelectedLength" class="item">
                      <div title="选择既往史" class="btn btn-disease-setting" @click="showDiseaseDialog">
                        <i class="ti-settings" />
                      </div>
                    </el-badge>
                  </el-form-item>

                  <el-form-item v-if="showGrade" label="级别">
                    <el-col :span="11">
                      <el-select v-model="grade" @change="enableChangeData">
                        <el-option
                          v-for="(gItem, gIndex) in gradeList"
                          :key="gIndex"
                          :label="gItem.name"
                          :value="gItem.code"
                        />
                      </el-select>
                    </el-col>
                    <el-col class="line" :span="2" />
                    <el-col :span="11">
                      <el-color-picker v-model="color" size="medium" :disabled="true" />
                    </el-col>
                  </el-form-item>

                  <el-form-item v-if="showGrade" label="程度">
                    <el-col :span="9">
                      <el-select v-model="level" @change="enableChangeData">
                        <el-option
                          v-for="(lItem, lIndex) in levelList"
                          :key="lIndex"
                          :label="lItem.name"
                          :value="lItem.code"
                        />
                      </el-select>
                    </el-col>
                    <el-col class="line" :span="6">字体</el-col>
                    <el-col :span="9">
                      <el-input v-model="fontSize" :disabled="true" />
                    </el-col>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div data-status="edge-selected" class="pannel">
              <div class="pannel-title">边属性栏</div>
              <div class="pannel-container" />
            </div>
            <div data-status="group-selected" class="pannel">
              <div class="pannel-title">群组属性栏</div>
              <div class="pannel-container" />
            </div>
            <div data-status="canvas-selected" class="pannel">
              <div class="pannel-title">画布属性栏</div>
              <div class="pannel-container" />
            </div>
            <div data-status="multi-selected" class="pannel">
              <div class="pannel-title">多选时属性栏</div>
              <div class="pannel-container" />
            </div>
          </div>

          <div id="navigator">
            <div class="pannel-title">缩略图</div>
            <!-- 缩略图 DOM 结构规约参考 Minimap API -->
            <div id="minimap" />
            <div class="zoom-slider">
              <div class="slider-outer-ctn">
                <el-slider
                  v-model="zoomSlider"
                  :format-tooltip="formatTooltip"
                  :min="minZoom * 100"
                  :max="maxZoom * 100"
                  @change="changeZoom"
                />
              </div>
              <el-dropdown class="dropdown-inner-ctn" @command="handleDropdownChange">
                <span class="el-dropdown-link">
                  {{ Math.ceil(curZoom * 100) }} %
                  <i class="el-icon-arrow-down el-icon--right" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="0.5">50%</el-dropdown-item>
                  <el-dropdown-item command="1">100%</el-dropdown-item>
                  <el-dropdown-item command="1.5">150%</el-dropdown-item>
                  <el-dropdown-item command="2">200%</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
        <!-- 右键菜单栏 DOM 结构规约参考 Contextmenu API -->
        <div id="contextmenu">
          <div data-status="node-selected" class="menu">
            <div data-command="copy" class="command">复制</div>
            <div data-command="paste" class="command">粘贴</div>
            <div data-command="delete" class="command">删除</div>
          </div>
          <div data-status="edge-selected" class="menu">
            <div ton data-command="delete" class="command">删除</div>
          </div>
          <div data-status="group-selected" class="menu">
            <div data-command="copy" class="command">复制</div>
            <div data-command="paste" class="command">粘贴</div>
            <div data-command="unGroup" class="command">解组</div>
            <div data-command="delete" class="command">删除</div>
          </div>
          <div data-status="canvas-selected" class="menu">
            <div data-command="undo" class="command">撤销</div>
            <div data-command="redo" class="command disable">重做</div>
          </div>
          <div data-status="multi-selected" class="menu">
            <div data-command="copy" class="command">复制</div>
            <div data-command="paste" class="command">粘贴</div>
          </div>
        </div>
        <!-- 参考 Flow、Mind API -->
        <div id="page" />
      </div>
    </div>

    <!--疾病选择弹窗 start-->
    <el-dialog
      :custom-class="diseaseDialogClass"
      title="选择疾病"
      :visible.sync="diseaseDialogVisible"
      @closed="diseaseDialogClosed"
    >
      <!-- <base-table
        ref="diseaseTable"
        :columns="diseaseColumns"
        :table-class="diseaseTableClass"
        :has-select="true"
        :is-init-table-on-init="false"
        :url="diseaseUrl"
        :get-params-fn="diseaseGetParamsFn"
        :height="250"
        :table-head-class="diseaseTableHeadClass"
        @afterRenderData="afterRenderData"
        @select="diseaseSelect"
        @selectAll="diseaseSelectAll"
      />-->

      <div class="select-disease-title">已选择项</div>
      <div class="select-disease-list">
        <el-tag
          v-for="(item, index) in selectDiseases"
          :key="item.id"
          closable
          @close="handleDiseaseClose(item, index)"
        >{{ item.name }}</el-tag>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="diseaseDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitSelectDisease">确 定</el-button>
      </span>
    </el-dialog>
    <!--疾病选择弹窗 end-->
  </div>
</template>

<script type="text/ecmascript-6">
import { cloneDeep } from 'lodash'
import G6Editor from '@antv/g6-editor'
// import G6 from '@antv/g6'
// import '@antv/g6/build/plugin.tool.tooltip'
// import BaseTable from 'components/base/table/baseTable'

/**
 * anchor某些情况下不起作用（尤其是自己画的图很乱时，g6会自己调节）
 */

// http://localhost:8080/#/IntelligentKnowledge/diseaseGradeRuleEditor?diseaseId=3a026d64-0b3f-4a19-9872-cff095742e0d&diseaseName=%E5%94%87%E6%81%B6%E6%80%A7%E8%82%BF%E7%98%A4

export default {
  components: {
    // BaseTable
  },
  data() {
    return {
      conditionList: [], // 条件列表
      operatorList: [], // 操作符列表
      valueList: [], // 条件的值列表
      operatorMap: {}, // 操作符对象
      valueMap: {}, // 条件值对象
      gradeList: [
        { name: 'Ⅰ级', code: 1 },
        { name: 'Ⅱ级', code: 2 },
        { name: 'Ⅲ级', code: 3 },
        { name: 'Ⅳ级', code: 4 }
      ], // 级别列表
      levelList: [
        { name: '1级', code: 1 },
        { name: '2级', code: 2 },
        { name: '3级', code: 3 },
        { name: '4级', code: 4 }
      ], // 程度列表
      colorList: ['#CC0033', '#F51C0A', '#B0085D', '#FF6666'], // 级别颜色列表
      fontSizeList: [24, 20, 16, 12],

      editor: null,
      selectedModel: {}, // 当前选中项数据模型
      curZoom: 1, // 当前缩放比率
      minZoom: 0.5, // 最小缩放比率
      maxZoom: 2, // 最大缩放比率

      condType: '',
      operator: '',
      value: '',
      grade: '',
      level: '',
      fontSize: '',
      color: 'red',
      /* 控制右侧详情面板的内容显现 start*/
      showGrade: false,
      showOperator: false,
      showCond: false,
      showValue: true,
      showDisease: false,
      /* 控制右侧详情面板的内容显现 end*/
      changeData: false,
      zoomSlider: 100, // 默认滑块取值为100
      valueFilterable: false, // 值下拉框是否可以检索
      /* 疾病选择弹窗 start*/
      diseaseDialogVisible: false, // 显示疾病选择弹窗
      diseaseDialogClass: 'disease-select-dialog',
      diseaseTableClass: 'disease-select-table',
      diseaseTableHeadClass: 'no-margin',
      diseaseColumns: [
        { label: '名称', prop: 'name' },
        { label: '编码', prop: 'code', width: '200' }
      ],
      diseaseUrl: '/diagnosisClassify/getClassifyToBeGradedPage',
      selectDiseases: [], // 已选疾病列表
      /* 疾病选择弹窗 end*/
      values: [],
      names: [],
      diseaseId: this.$route.query.diseaseId, // 当前疾病id
      diseaseName: this.$route.query.diseaseName, // 当前疾病名称
      diseaseSelectedLength: 0, // 当前已选疾病的条数
      hasInitNode: false // 是否已经初始化node
    }
  },
  watch: {
    condType(curValue, oldValue) {
      if (this.changeData) {
        if (curValue === '1') {
          this.valueFilterable = true
        } else {
          this.valueFilterable = false
        }
        if (!curValue) {
          const label = this.getGraphLabel()
          this.updateGraph({
            condType: curValue,
            label: label
          })
        }
      }
    },
    operator(curValue, oldValue) {
      if (this.changeData) {
        if (!curValue) {
          const label = this.getGraphLabel()
          this.updateGraph({
            operator: curValue,
            label: label
          })
        }
      }
    },
    grade(curValue, oldValue) {
      if (this.changeData) {
        if (!curValue) {
          let label = ''
          const gradeObj = this.gradeList.find(item => {
            return item.code === curValue
          })
          label = gradeObj.name
          this.color = this.colorList[curValue - 1]
          this.updateGraph({
            label: label,
            grade: curValue,
            color: this.color
          })
        }
      }
    },
    level(curValue, oldValue) {
      if (this.changeData) {
        if (!curValue) {
          const gradeObj = this.gradeList.find(item => {
            return item.code === this.grade
          })
          this.fontSize = this.fontSizeList[this.level - 1]
          this.updateGraph({
            level: curValue,
            label: {
              text: gradeObj.name,
              fontSize: this.fontSize
            }
          })
        }
      }
    },

    value(curValue, oldValue) {
      if (this.changeData) {
        if (!curValue) {
          const valueObj = this.valueList.find(item => {
            return item.code === curValue
          })
          const label = this.getGraphLabel()
          this.updateGraph({
            label: label,
            value: curValue,
            values: [curValue],
            names: [valueObj.name]
          })
        }
      }
    }
  },
  mounted() {
    this.setEditorHeight() // 设置宽度和高度
    this.initG6Editor(true)
  },
  methods: {
    setEditorHeight() {
      const bodyHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      let containarHeight = bodyHeight - 70
      containarHeight = containarHeight < 510 ? 510 : containarHeight
      this.$refs['container'].style.height = containarHeight + 'px'
    },

    /**
     *根据条件列表，依次获取各条件下对应的operator和值（目的：将他们缓存起来，减少请求）
     */
    getEachOperatorAndValue() {
      this.conditionList.forEach((item, index) => {
        this.getOprsByCondi(item.code)
        this.getValsByCondi(item.code)
      })
    },

    /**
     * 设置自定义命令
     */
    setCustomCommand() {
      const _self = this
      const Command = G6Editor.Command
      // 返回上一页命令
      Command.registerCommand('back', {
        queue: false, // 命令是否进入队列，默认是 true
        // 命令是否可用
        enable(eidtor) {
          return true
        },
        // 正向命令
        execute(eidtor) {
          _self.$router.push('/IntelligentKnowledge/diseaseGradeRule')
        }
      })
      // 保存命令
      Command.registerCommand('save', {
        queue: false, // 命令是否进入队列，默认是 true
        // 命令是否可用
        enable(eidtor) {
          return true
        },
        // 正向命令
        execute(eidtor) {
          _self.saveGraph()
        },
        shortcutCodes: [['ctrlKey', 'shiftKey', 's']] // 快捷键：Ctrl+shirt+s
      })
      // 新增起始节点命令
      Command.registerCommand('addBeginNode', {
        queue: true, // 命令是否进入队列，默认是 true
        // 命令是否可用
        enable(editor) {
          const curPage = editor.getCurrentPage()
          const beginNode = curPage.find(_self.diseaseId)
          if (!beginNode && _self.hasInitNode) {
            // 起始节点不存在
            return true
          } else {
            return false
          }
        },
        // 正向命令
        execute(editor) {
          let rootWidth = _self.diseaseName.length * 13
          rootWidth = rootWidth < 72 ? 72 : rootWidth
          const curPage = editor.getCurrentPage()
          curPage.add('node', {
            id: _self.diseaseId,
            shape: 'circle',
            color: '#FA8C16',
            label: _self.diseaseName,
            x: 100,
            y: 100,
            size: rootWidth + '*72',
            category: 0
          })
        },
        // 反向命令
        back(editor) {
          const curPage = editor.getCurrentPage()
          curPage.remove(_self.diseaseId)
        }
      })
      // 清空画布命令
      Command.registerCommand('clear', {
        // 命令是否可用
        enable(eidtor) {
          return true
        }
      })
    },
    /**
     * 初始化g6Editor
     * @param flag true 从接口获取图表数据；false:从缓存中获取图表数据（界面侧边栏收缩、展开）
     */
    initG6Editor(flag) {
      let tempData = []
      if (!flag) {
        tempData = this.editor.getCurrentPage().save()
        this.editor.destroy()
      }
      this.editor = new G6Editor()
      this.setCustomCommand()
      const minimap = new G6Editor.Minimap({
        container: 'minimap'
      })
      const toolbar = new G6Editor.Toolbar({
        container: 'toolbar'
      })
      const contextmenu = new G6Editor.Contextmenu({
        container: 'contextmenu'
      })
      const itempannel = new G6Editor.Itempannel({
        container: 'itempannel'
      })
      const detailpannel = new G6Editor.Detailpannel({
        container: 'detailpannel'
      })
      // const tooltip = new G6.Plugins['tool.tooltip']({
      //   getTooltip({ item }) {
      //     if (item && item.isNode) {
      //       let result = ''
      //       const model = item.getModel()
      //       const label =
      //         typeof model.label === 'object' ? model.label.text : model.label
      //       if (item.getModel().shape === 'flow-capsule') {
      //         result =
      //           '<div  class = "tooltip-custom"><div>级别：' +
      //           label +
      //           '</div><div>程度：' +
      //           _self.levelList[model.level - 1].name +
      //           '</div></div>'
      //       } else {
      //         result = '<div  class = "tooltip-custom">' + label + '</div>'
      //       }
      //       return result
      //     }
      //   }
      // })
      const page = new G6Editor.Flow({
        graph: {
          container: 'page'
          // plugins: [tooltip]
        },
        shortcut: {
          save: true
        },
        noEndEdge: false // 不允许悬空边
      })

      page.getGraph().edge({
        shape: 'flow-polyline-round'
      })
      //                page.getGraph().node({
      //                    tooltip(model) {
      //                        return [
      //                            ['id', model.id]
      //                        ]
      //                    }
      //                });

      this.editor.add(minimap)
      this.editor.add(toolbar)
      this.editor.add(contextmenu)
      this.editor.add(itempannel)
      this.editor.add(detailpannel)
      this.editor.add(page)
      this.setEventListenner() // 设置事件监听
      // if (flag) {
      //   this.getNodesByDiseaseId(this.diseaseId)
      // } else {
      //   this.editor.getCurrentPage().read(tempData)
      // }
    },

    /**
     * 设置事件监听
     */
    setEventListenner() {
      const _self = this
      const curPage = this.editor.getCurrentPage()
      curPage.on('hoveranchor:beforeaddedge', ev => {
        // 等级节点不能有子节点
        if (ev.item.model.shape === 'flow-capsule') {
          ev.cancel = true
        }
      })
      curPage.on('dragedge:beforeshowanchor', ev => {
        const source = ev.source
        const sourceId = ev.source.id
        const target = ev.target
        const targetId = target.model.id
        // 起始节点不能作为源节点
        if (ev.target.model.shape === 'circle') {
          ev.cancel = true
        }
        // 每个结点不能连自身
        if (sourceId === targetId) {
          ev.cancel = true
        }
        // 每个结点最多只有一个父节点
        const inEdges = target.getInEdges() // 输入的边
        if (inEdges.length > 0) {
          ev.cancel = true
        }
        // 每个结点只有一个等级节点
        let isHasGradeNode = false // 标识源节点是否已经有等级节点
        const outEdges = source.getOutEdges()
        if (outEdges.length > 0) {
          for (let j = 0, oLength = outEdges.length; j < oLength; j++) {
            if (
              outEdges[j].target.model &&
              outEdges[j].target.model.shape === 'flow-capsule'
            ) {
              isHasGradeNode = true
              break
            }
          }
        }
        if (isHasGradeNode && target.model.shape === 'flow-capsule') {
          ev.cancel = true
        }
      })

      curPage.on('afteritemselected', ev => {
        if (ev.item.isNode) {
          const vm = ev.item.getModel()
          _self.category = vm.category // 节点类型
          _self.condType = vm.condType // 条件
          _self.operator = vm.operator // 判断方法
          _self.grade = vm.grade // 级别
          _self.level = vm.level
          _self.changeData = false
          _self.values = vm.values
          _self.names = vm.names
          if (vm.shape === 'circle') {
            // 默认节点
            _self.showValue = false
            _self.showGrade = false
            _self.showOperator = false
            _self.showCond = false
            _self.showDisease = false
          } else if (vm.shape === 'flow-rect') {
            // 条件节点
            _self.showOperator = true
            _self.showCond = true
            _self.showGrade = false
            if (vm.condType === 4) {
              _self.showDisease = true
              _self.showValue = false
            } else {
              if (!vm.values && vm.values.length > 0) {
                _self.value = parseInt(vm.values[0]) // 数据库存储的code为int型
              }
              _self.showDisease = false
              _self.showValue = true
            }
            _self.operatorList = cloneDeep(_self.operatorMap[vm.condType])
            _self.valueList = cloneDeep(_self.valueMap[vm.condType])
            if (_self.condType === '4') {
              // 既往病史
              const conditionObj = this.conditionList.find(item => {
                return item.code === _self.condType
              })
              const operatorObj = this.operatorList.find(item => {
                return item.code === _self.operator
              })
              let diseaseListStr = conditionObj.name + operatorObj.name + '：'
              const length = _self.values.length
              this.diseaseSelectedLength = length
              for (let i = 0; i < length; i++) {
                if (i === 0) {
                  diseaseListStr += _self.names[i]
                }
                if (i === 1) {
                  diseaseListStr += '(' + _self.names[i]
                }
                if (i == 5) {
                  // 最多显示前5个疾病
                  diseaseListStr += ')等' + length + '个疾病'
                  break
                }
                if (i > 1) {
                  diseaseListStr += '、' + _self.names[i]
                }

                if (i < 5 && i === length - 1 && i >= 1) {
                  diseaseListStr += ')'
                }
              }
            }
          } else {
            // 等级节点
            _self.showOperator = false
            _self.showCond = false
            _self.showGrade = true
            _self.showValue = false
            _self.showDisease = false
            _self.level = vm.level
            _self.color = _self.colorList[_self.grade - 1]
            _self.fontSize = _self.fontSizeList[_self.level - 1]
          }
        }
      })
      curPage.on('afterzoom', ev => {
        const zoom = ev.updateMatrix[0]
        _self.curZoom = zoom
        _self.zoomSlider = zoom * 100
      })
      this.editor.on('aftercommandexecute', ev => {
        if (ev.command.name === 'add') {
          switch (ev.command.addModel.shape) {
            case 'circle': // 起始节点
              break
            case 'flow-rect': // 条件节点
              const condType = _self.conditionList[0].code
              const operator = _self.operatorMap[condType][0].code
              const valueList = _self.valueMap[condType]
              const values = [valueList[0].code]
              const names = [valueList[0].name]
              const label =
                _self.conditionList[0].name +
                _self.operatorMap[condType][0].name +
                valueList[0].name
              curPage.update(ev.command.addModel.id, {
                label: label,
                names: names,
                values: values,
                operator: operator,
                condType: condType,
                category: 1
              })
              break
            case 'flow-capsule':
              const grade = 4
              const color = _self.colorList[3]
              const level = 4
              const fontSize = _self.fontSizeList[3]
              const templabel = {
                text: _self.gradeList[3].name,
                fontSize: fontSize
              }
              curPage.update(ev.command.addModel.id, {
                label: templabel,
                grade: grade,
                level: level,
                color: color,
                category: 2
              })
              break
          }
        }
      })
    },

    enableChangeData() {
      this.changeData = true
    },
    condTypeSelectChange(value) {
      this.operator = ''
      if (value !== 4) {
        this.value = ''
        this.changeData = true
      } else {
        this.changeData = false
      }
      this.operatorList = cloneDeep(this.operatorMap[value])
      this.operator = this.operatorList[0].code
      this.valueList = cloneDeep(this.valueMap[value])
      if (value === 4) {
        this.showDisease = true
        this.showValue = false
        const values = [this.valueList[0].id]
        const names = [this.valueList[0].name]
        this.values = values
        this.names = names
        this.diseaseSelectedLength = 1
        const conditionObj = this.conditionList.find(item => {
          return item.code === value
        })
        const diseaseListStr =
          conditionObj.name +
          this.operatorList[0].name +
          '：' +
          this.valueList[0].name
        const nodeWidth = diseaseListStr.length * 13
        this.updateGraph({
          condType: value,
          operator: this.operatorList[0].code,
          values: values,
          names: names,
          label: diseaseListStr,
          size: nodeWidth + '*48'
        })
      } else {
        this.showDisease = false
        this.showValue = true
        this.value = this.valueList[0].code
      }
    },
    /**
     * 更新当前选中的节点
     * @param updateModel 需要更新的数据模型 object
     */
    updateGraph(updateModel) {
      const editor = this.editor
      editor.executeCommand(() => {
        const page = editor.getCurrentPage()
        const selectedItems = page.getSelected()
        selectedItems.forEach(item => {
          page.update(item, updateModel)
        })
      })
    },
    /**
     * 获取图形的label
     */
    getGraphLabel() {
      let result = ''
      const conditionObj = this.conditionList.find(item => {
        return item.code === this.condType
      })
      const operotorObj = this.operatorList.find(item => {
        return item.code === this.operator
      })
      const valueObj = this.valueList.find(item => {
        return item.code === this.value
      })
      if (!conditionObj) {
        result += conditionObj.name
      }
      if (!operotorObj) {
        result += operotorObj.name
      }
      if (!valueObj) {
        result += valueObj.name
      }
      return result
    },

    /**
     * 格式化滑块的label
     * @param val 滑块值
     * @returns {number} 滑块label
     */
    formatTooltip(val) {
      return val + '%'
    },

    /**
     * 修改zoom值
     * @param value
     */
    changeZoom(value) {
      const editor = this.editor
      const page = editor.getCurrentPage()
      const zoom = value / 100
      page.zoom(zoom)
    },
    /**
     * zoom下拉框值改变事件
     * @param common
     */
    handleDropdownChange(common) {
      const zoom = Number(common)
      const editor = this.editor
      const page = editor.getCurrentPage()
      this.zoomSlider = zoom * 100
      page.zoom(zoom)
      this.curZoom = zoom
    },
    // 显示疾病列表弹窗
    showDiseaseDialog() {
      this.selectDiseases = []
      for (let i = 0; i < this.values.length; i++) {
        this.selectDiseases.push({
          id: this.values[i],
          name: this.names[i]
        })
      }
      this.diseaseDialogVisible = true
      this.$nextTick(() => {
        // 下面的方法需要在$nextTick后执行
        this.$refs.diseaseTable.initTable() // 初始化疾病列表
      })
    },

    /**
     *疾病表格渲染后事件(标识已选择疾病)
     */
    afterRenderData(curDiseaseData) {
      curDiseaseData.forEach((item, index, arr) => {
        for (let i = 0; i < this.selectDiseases.length; i++) {
          if (this.selectDiseases[i].id === item.id) {
            this.$refs.diseaseTable.toggleRowSelection(item, true)
            break
          }
        }
      })
    },
    /**
     * 疾病表格数据行checkbox点击事件
     */
    diseaseSelect(selection, row) {
      if (!selection.includes(row)) {
        // 取消选择
        for (let i = 0, lenth = this.selectDiseases.length; i < lenth; i++) {
          if (this.selectDiseases[i].id === row.id) {
            this.selectDiseases.splice(i, 1)
            break
          }
        }
      } else {
        this.selectDiseases.push({
          id: row.id,
          name: row.name
        })
      }
    },

    /**
     * 疾病表格全选按钮点击事件
     */
    diseaseSelectAll(selection) {
      const curDiseaseData = this.$refs.diseaseTable.getTableData()
      if (selection.length === 0) {
        // 取消全选
        curDiseaseData.forEach((item, index, arr) => {
          for (let i = 0; i < this.selectDiseases.length; i++) {
            if (this.selectDiseases[i].id === item.id) {
              this.selectDiseases.splice(i, 1)
              break
            }
          }
        })
      } else {
        // 全选
        if (this.selectDiseases.length === 0) {
          // 当前没有已选疾病
          curDiseaseData.forEach((item, index, arr) => {
            this.selectDiseases.push({
              id: item.id,
              name: item.name
            })
          })
        } else {
          // 当前有已选疾病
          curDiseaseData.forEach((item, index, arr) => {
            let flag = false
            for (let i = 0; i < this.selectDiseases.length; i++) {
              if (this.selectDiseases[i].id === item.id) {
                flag = true
                break
              }
              if (i === this.selectDiseases.length - 1 && !flag) {
                this.selectDiseases.push({
                  id: item.id,
                  name: item.name
                })
              }
            }
          })
        }
      }
    },
    /**
     * 移除已选择的疾病
     * @param disease 当前移除的疾病数据
     */
    handleDiseaseClose(disease, index) {
      this.selectDiseases.splice(index, 1)
      const curDiseaseData = this.$refs.diseaseTable.getTableData()
      for (let i = 0; i < curDiseaseData.length; i++) {
        if (disease.id === curDiseaseData[i].id) {
          this.$refs.diseaseTable.toggleRowSelection(curDiseaseData[i], false)
          break
        }
      }
    },
    /**
     * 提交已选择的疾病列表
     */
    submitSelectDisease() {
      if (this.selectDiseases.length == 0) {
        this.$message.error('请选择疾病')
      } else {
        this.values = []
        this.names = []
        const conditionObj = this.conditionList.find(item => {
          return item.code === this.condType
        })
        let diseaseListStr =
          conditionObj.name + this.operatorList[0].name + '：'
        const length = this.selectDiseases.length
        this.diseaseSelectedLength = length
        for (let i = 0, length = this.selectDiseases.length; i < length; i++) {
          this.values.push(this.selectDiseases[i].id)
          this.names.push(this.selectDiseases[i].name)
          if (i === 0) {
            diseaseListStr += this.selectDiseases[i].name
          }
          if (i === 1) {
            diseaseListStr += '(' + this.selectDiseases[i].name
          }
          if (i === 5) {
            // 最多显示前5个疾病
            diseaseListStr += ')等' + length + '个疾病'
          }
          if (i > 1 && i < 5) {
            diseaseListStr += '、' + this.selectDiseases[i].name
          }
          if (i < 5 && i === length - 1 && i >= 1) {
            diseaseListStr += ')'
          }
        }
        const transFormObj = this.transformLabel(diseaseListStr)
        const diseaseTrsLabel = transFormObj.label
        const size = transFormObj.size
        this.updateGraph({
          values: this.values,
          names: this.names,
          label: diseaseTrsLabel,
          size: size
        })
        this.diseaseDialogVisible = false
      }
    },
    diseaseDialogClosed() {
      this.$refs.diseaseTable.clearSelection() // 清空选择
      this.$refs.diseaseTable.setLoading(true)
      this.$refs.diseaseTable.resetSearchKeyWord()
      this.selectDiseases = []
    },
    diseaseGetParamsFn() {
      return {
        condiIdx: this.condType,
        size: 20
      }
    },
    /**
     * 控制label 每行最多显示15个字
     * @param label
     * @returns {*}
     */
    transformLabel(label) {
      let size = '' // 存储size
      let result = '' // 拼接加\n返回的类目项
      const maxLength = 15 // 每项显示文字个数
      const valLength = label.length // X轴类目项的文字个数
      const rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
      if (rowN > 1) {
        // 如果类目项的文字大于1,
        for (let i = 0; i < rowN; i++) {
          let temp = '' // 每次截取的字符串
          const start = i * maxLength // 开始截取的位置
          const end = start + maxLength // 结束截取的位置
          // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
          temp = label.substring(start, end) + '\n'
          result += temp // 拼接最终的字符串
        }
        const height = rowN > 2 ? 48 + (rowN - 2) * 16 : 48
        size = 15 * 13 + '*' + height
        return {
          label: result,
          size: size
        }
      } else {
        return {
          label: label,
          size: valLength * 13 + '*48'
        }
      }
    },
    // 保存分级规则图
    saveGraph() {
      const curPage = this.editor.getCurrentPage()
      const graphData = curPage.save()
      const nodes = graphData.nodes || []
      const edges = graphData.edges || []
      const list = []
      let category = ''
      let parentId = ''
      let source_anchor = ''
      let target_anchor = ''
      let tempMap = null
      const nodeList = curPage.getNodes()
      nodes.forEach((item, index) => {
        category = ''
        parentId = ''
        source_anchor = ''
        target_anchor = ''
        tempMap = null
        // 只有新增/修改的锚点才会在dataMap中
        switch (item.shape) {
          case 'circle':
            item.category = 0
            break
          case 'flow-rect':
            item.category = 1
            for (let i = 0; i < edges.length; i++) {
              if (edges[i].target === item.id) {
                item.parentId = edges[i].source
                if (!edges[i].sourceAnchor) {
                  source_anchor = edges[i].sourceAnchor
                } else {
                  source_anchor = item.source_anchor
                }
                if (!edges[i].targetAnchor) {
                  target_anchor = edges[i].targetAnchor
                } else {
                  target_anchor = item.target_anchor
                }
                break
              }
            }
            break
          case 'flow-capsule':
            item.category = 2
            for (let i = 0; i < edges.length; i++) {
              if (edges[i].target === item.id) {
                item.parentId = edges[i].source
                if (!edges[i].sourceAnchor) {
                  source_anchor = edges[i].sourceAnchor
                } else {
                  source_anchor = item.sourceAnchor
                }
                if (!edges[i].targetAnchor) {
                  target_anchor = edges[i].targetAnchor
                } else {
                  target_anchor = item.targetAnchor
                }
                break
              }
            }
            break
        }
        list.push({
          id: item.id,
          category: item.category,
          cond_type: item.condType,
          operator: item.operator,
          values: item.values,
          codes: item.codes,
          names: item.names,
          parent_id: item.parentId,
          disease_id: this.diseaseId,
          diseaseName: this.diseaseName,
          grade: item.grade,
          level: item.level,
          x_axis: item.x,
          y_axis: item.y,
          size: item.size,
          source_anchor: source_anchor,
          target_anchor: target_anchor
        })
      })

      const _self = this

      _self.$http({
        url: '/intelliDiag/diseaseGradingRule/saveNodes',
        data: {
          diseaseId: this.diseaseId,
          list: JSON.stringify(list)
        },
        method: 'post',
        success(res) {
          this.$message.success('疾病分级规则更新成功')
        }
      })
    },
    sidebarTogglerFn() {
      this.$nextTick(() => {
        // 下面的方法需要在$nextTick后执行
        this.initG6Editor(false)
      })
    }
  }
}
</script>
