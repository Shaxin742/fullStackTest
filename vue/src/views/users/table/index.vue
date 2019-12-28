<template>
  <div>
    <base-table-panel
      ref="costTable"
      class="sortTable"
      :class="['costWrap', limit === 10 ? 'table10' : '']"
      :data-source="dataSource"
      :loading="loading"
      :columns="columns"
      :query-bar-width="8"
      :border-style="true"
      has-pagination
      :total="total"
      :current-page="page"
      :page-size="limit"
      @handleCurrent="handleCurrent"
      @handleSize="handleSize"
      @selection-change="selectionChange"
      @row-click="rowClick"
      @cell-click="cellClick"
    >
      <template slot="operate-right">
        <el-button icon="el-icon-plus">新增</el-button>
      </template>
    </base-table-panel>
  </div>
</template>

<script>
import BaseTablePanel from '@/components/cxtable2'
export default {
  components: { BaseTablePanel },
  data: function() {
    return {
      dataSource: [
        {
          createTime: '2019-12-12 14:10:19',
          creatorId: 'admin',
          flowId: 'ysslvxtei65zio',
          flowName: '单位净值与累计单位净值勾稽核对',
          id: '62cddacb-25bd-4830-ad24-4af46b68e31e',
          lastEditTime: '2019-12-12 14:10:19',
          processCondition: null,
          processState: 0,
          processStateName: '未发布',
          release: null
        },
        {
          createTime: '2019-12-12 13:34:18',
          creatorId: 'admin',
          flowId: 'yssgx6d9ge3fnb',
          flowName: '证券权益流水提醒',
          id: '578faf1b-561f-4b00-a14d-76afde10f84b',
          lastEditTime: '2019-12-12 13:34:18',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-11 20:19:44',
          creatorId: 'admin',
          flowId: 'yss3jmfr2tlwmz',
          flowName: '单点存款计息尾差检查',
          id: '59ea4a9c-27d0-458f-ad82-416251d354f8',
          lastEditTime: '2019-12-12 13:31:17',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-11 15:17:56',
          creatorId: 'admin',
          flowId: 'yssoqmbba29nv',
          flowName: '查看指标信息',
          id: 'e0dd5ff4-0c1a-438e-9513-8901934ae587',
          lastEditTime: '2019-12-11 15:17:56',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-11 14:10:25',
          creatorId: 'admin',
          flowId: 'ysss1x3mozv2sj',
          flowName: '演示存款计息尾差检查',
          id: '4b9877ab-871d-44b7-9492-4853bd0646b1',
          lastEditTime: '2019-12-11 14:10:25',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-11 13:26:52',
          creatorId: 'admin',
          flowId: 'yssu96tsrx00oi',
          flowName: '存款计息尾差检查',
          id: '6285022b-50e8-4876-b13e-8f6fe9947376',
          lastEditTime: '2019-12-11 13:26:52',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-10 11:52:19',
          creatorId: 'dept5-0',
          flowId: 'yssdj10dskxwmm',
          flowName: '测试请求',
          id: '69d5a568-3268-4470-a1cf-d75f1153e4a0',
          lastEditTime: '2019-12-10 11:52:19',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-10 09:17:29',
          creatorId: 'admin',
          flowId: 'yssmxv1cjgj3f8',
          flowName: '前端新增',
          id: 'b878e65c-93a6-4bef-813d-40cc1cd2a308',
          lastEditTime: '2019-12-10 09:17:29',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-09 18:51:18',
          creatorId: 'dept3-0',
          flowId: 'yssdnjphqsremg',
          flowName: '测试脚本',
          id: 'bf97860d-2e8a-4342-9cd7-cc24ebd50533',
          lastEditTime: '2019-12-09 18:51:18',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        },
        {
          createTime: '2019-12-09 16:37:47',
          creatorId: 'admin',
          flowId: 'yssjj5jbkq4h',
          flowName: '费用支付',
          id: '73b79b18-6813-4bdb-abb3-ad5baa160016',
          lastEditTime: '2019-12-09 16:37:47',
          processCondition: '立即执行',
          processState: 1,
          processStateName: '已发布',
          release: 1
        }
      ],
      loading: false,
      columns: [
        {
          prop: '',
          type: 'index',
          align: 'center',
          label: '序号',
          width: '55'
        },
        {
          prop: 'flowName',
          label: '流程名称',
          align: 'center',
          'min-width': '100',
          'show-overflow-tooltip': true
        },
        {
          prop: 'createTime',
          align: 'center',
          label: '创建时间',
          'min-width': '100',
          'show-overflow-tooltip': true
        },
        {
          prop: 'processStateName',
          align: 'center',
          label: '流程状态',
          'min-width': '100',
          'show-overflow-tooltip': true
        },
        {
          prop: 'processCondition',
          align: 'center',
          label: '发起条件',
          'min-width': '100',
          'show-overflow-tooltip': true
        },
        {
          prop: 'lastEditTime',
          align: 'center',
          label: '最后修改时间',
          'min-width': '100',
          'show-overflow-tooltip': true
        },
        {
          label: '操作',
          headerAlign: 'center',
          align: 'center',
          'min-width': 200,
          fixed: 'right',
          actions: [
            {
              text: 'aaa',
              onclick: 'show()'
            },
            {
              text: 'bbb'
            },
            {
              text: 'ccc'
            },
            {
              text: 'ddd'
            },
            {
              text: 'eee'
            },
            {
              text: 'fff'
            }
          ]
        }
      ],
      page: 1,
      limit: 10,
      total: 10
    }
  },
  methods: {
    cellClick(val) {
      console.log(val)
    },
    rowClick(val) {
      console.log(val)
    },
    selectionChange(val) {
      console.log(val)
    },
    handleSize(val) {
      console.log(val)
    },
    handleCurrent(val) {
      console.log(val)
    },
    show() {
      console.log(11111)
    }
  }
}
</script>

<style>
</style>
