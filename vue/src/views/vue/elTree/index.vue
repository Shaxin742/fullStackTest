<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    />
    <div style="{'color':'red'}">
      123
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          text: "任务实例",
          label: "任务实例",
          value: "taskInstance",
          children: [
            {
              text: "任务Id",
              label: "任务Id",
              value: "systemVariable.taskId",
              fieldName: "任务Id",
              fieldCode: "systemVariable.taskId",
              fieldType: 0
            },
            {
              text: "任务名称",
              label: "任务名称",
              value: "systemVariable.taskName",
              fieldName: "任务名称",
              fieldCode: "systemVariable.taskName",
              fieldType: 0
            },
            {
              text: "任务开始时间",
              label: "任务开始时间",
              value: "systemVariable.taskStartTime",
              fieldName: "任务开始时间",
              fieldCode: "systemVariable.taskStartTime",
              fieldType: 0
            },
            {
              text: "任务状态集合",
              label: "任务状态集合",
              value: "systemVariable.taskStatus",
              fieldName: "任务状态集合",
              fieldCode: "systemVariable.taskStatus",
              fieldType: 0
            }
          ],
          fieldName: "任务实例",
          fieldCode: "taskInstance",
          fieldType: 0
        },
        {
          fieldName: "常用字段",
          root: true,
          children: [
            {
              fieldCode: "当前日期()",
              fieldName: "当前日期",
              fieldType: 2,
              format: 0
            },
            {
              fieldCode: "当前时间()",
              fieldName: "当前时间",
              fieldType: 0,
              format: 0
            },
            {
              fieldCode: "当前日期时间()",
              fieldName: "当前日期时间",
              fieldType: 0,
              format: 0
            },
            {
              fieldCode: "当前月份()",
              fieldName: "当前月份",
              fieldType: 1,
              format: 0
            },
            {
              fieldCode: "当前年份()",
              fieldName: "当前年份",
              fieldType: 1,
              format: 0
            },
            {
              fieldCode: "当前天数()",
              fieldName: "当前天数",
              fieldType: 1,
              format: 0
            },
            {
              fieldCode: "true",
              fieldName: "是",
              fieldType: 0,
              format: 0
            },
            {
              fieldCode: "false",
              fieldName: "否",
              fieldType: 0,
              format: 0
            }
          ]
        },
        {
          fieldName: "常用函数",
          root: true,
          children: [
            {
              fieldCode: "列表数量",
              fieldTypeEvent: 4,
              fieldName: "列表数量",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "集合",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "数据权限过滤",
              fieldTypeEvent: 4,
              fieldName: "数据权限过滤",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "数据列表",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "过滤字段",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "数据权限列表",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "格式化",
              fieldTypeEvent: 4,
              fieldName: "格式化",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "格式",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "当前时间",
              fieldTypeEvent: 4,
              fieldName: "当前时间",
              paramTypeList: []
            },
            {
              fieldCode: "当前日期",
              fieldTypeEvent: 4,
              fieldName: "当前日期",
              paramTypeList: []
            },
            {
              fieldCode: "当前月份",
              fieldTypeEvent: 4,
              fieldName: "当前月份",
              paramTypeList: []
            },
            {
              fieldCode: "当前年份",
              fieldTypeEvent: 4,
              fieldName: "当前年份",
              paramTypeList: []
            },
            {
              fieldCode: "当前天数",
              fieldTypeEvent: 4,
              fieldName: "当前天数",
              paramTypeList: []
            },
            {
              fieldCode: "是否工作日",
              fieldTypeEvent: 4,
              fieldName: "是否工作日",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "日期加月",
              fieldTypeEvent: 4,
              fieldName: "日期加月",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "月数",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "日期加年",
              fieldTypeEvent: 4,
              fieldName: "日期加年",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "年数",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "当前日期时间",
              fieldTypeEvent: 4,
              fieldName: "当前日期时间",
              paramTypeList: []
            },
            {
              fieldCode: "日期加自然日",
              fieldTypeEvent: 4,
              fieldName: "日期加自然日",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "是否包含",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "日期加天",
              fieldTypeEvent: 4,
              fieldName: "日期加天",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "是否工作日",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "是否包含",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "月末",
              fieldTypeEvent: 4,
              fieldName: "月末",
              paramTypeList: []
            },
            {
              fieldCode: "年末",
              fieldTypeEvent: 4,
              fieldName: "年末",
              paramTypeList: []
            },
            {
              fieldCode: "日期加工作日",
              fieldTypeEvent: 4,
              fieldName: "日期加工作日",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "是否包含",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "月度区间",
              fieldTypeEvent: 4,
              fieldName: "月度区间",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "月度偏移",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "区间下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "月初",
              fieldTypeEvent: 4,
              fieldName: "月初",
              paramTypeList: []
            },
            {
              fieldCode: "上月初",
              fieldTypeEvent: 4,
              fieldName: "上月初",
              paramTypeList: []
            },
            {
              fieldCode: "运作年度区间",
              fieldTypeEvent: 4,
              fieldName: "运作年度区间",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标时间",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "区间下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "季末",
              fieldTypeEvent: 4,
              fieldName: "季末",
              paramTypeList: []
            },
            {
              fieldCode: "运作年初",
              fieldTypeEvent: 4,
              fieldName: "运作年初",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "上月末",
              fieldTypeEvent: 4,
              fieldName: "上月末",
              paramTypeList: []
            },
            {
              fieldCode: "半年初",
              fieldTypeEvent: 4,
              fieldName: "半年初",
              paramTypeList: []
            },
            {
              fieldCode: "上年末",
              fieldTypeEvent: 4,
              fieldName: "上年末",
              paramTypeList: []
            },
            {
              fieldCode: "上半年初",
              fieldTypeEvent: 4,
              fieldName: "上半年初",
              paramTypeList: []
            },
            {
              fieldCode: "运作年末",
              fieldTypeEvent: 4,
              fieldName: "运作年末",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "季度区间",
              fieldTypeEvent: 4,
              fieldName: "季度区间",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "季度偏移",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "区间下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "上半年末",
              fieldTypeEvent: 4,
              fieldName: "上半年末",
              paramTypeList: []
            },
            {
              fieldCode: "上季末",
              fieldTypeEvent: 4,
              fieldName: "上季末",
              paramTypeList: []
            },
            {
              fieldCode: "上季初",
              fieldTypeEvent: 4,
              fieldName: "上季初",
              paramTypeList: []
            },
            {
              fieldCode: "上年初",
              fieldTypeEvent: 4,
              fieldName: "上年初",
              paramTypeList: []
            },
            {
              fieldCode: "年初",
              fieldTypeEvent: 4,
              fieldName: "年初",
              paramTypeList: []
            },
            {
              fieldCode: "半年末",
              fieldTypeEvent: 4,
              fieldName: "半年末",
              paramTypeList: []
            },
            {
              fieldCode: "季初",
              fieldTypeEvent: 4,
              fieldName: "季初",
              paramTypeList: []
            },
            {
              fieldCode: "年度区间",
              fieldTypeEvent: 4,
              fieldName: "年度区间",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "年度偏移",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "区间下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "半年度区间",
              fieldTypeEvent: 4,
              fieldName: "半年度区间",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "半年度偏移",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "区间下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "T加N",
              fieldTypeEvent: 4,
              fieldName: "T加N",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "T+N的交易制度",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "格式化金额",
              fieldTypeEvent: 4,
              fieldName: "格式化金额",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "待转换对象",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "T加天数减N",
              fieldTypeEvent: 4,
              fieldName: "T加天数减N",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "估值时效",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "T加天数加N",
              fieldTypeEvent: 4,
              fieldName: "T加天数加N",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "估值时效",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "格式化T加天数减N",
              fieldTypeEvent: 4,
              fieldName: "格式化T加天数减N",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "天数",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "估值时效",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "格式化",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "是否相等",
              fieldTypeEvent: 4,
              fieldName: "是否相等",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "源对象",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "目标对象",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "转换为字符串",
              fieldTypeEvent: 4,
              fieldName: "转换为字符串",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "源对象",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "默认值",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "获取指定位置字符",
              fieldTypeEvent: 4,
              fieldName: "获取指定位置字符",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "位置",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "包含",
              fieldTypeEvent: 4,
              fieldName: "包含",
              paramTypeList: [
                {
                  paramType: "Object",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "包含值",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "字符串长度",
              fieldTypeEvent: 4,
              fieldName: "字符串长度",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "替换字符串",
              fieldTypeEvent: 4,
              fieldName: "替换字符串",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "原字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "新字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "拆字符串",
              fieldTypeEvent: 4,
              fieldName: "拆字符串",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "符号",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "转小写",
              fieldTypeEvent: 4,
              fieldName: "转小写",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "转大写",
              fieldTypeEvent: 4,
              fieldName: "转大写",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "去空格",
              fieldTypeEvent: 4,
              fieldName: "去空格",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "指定开始的字符串截取",
              fieldTypeEvent: 4,
              fieldName: "指定开始的字符串截取",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "开始位置",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "拆字符串并获取",
              fieldTypeEvent: 4,
              fieldName: "拆字符串并获取",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "符号",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Integer",
                  paramName: "下标",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "字符串首次出现位置",
              fieldTypeEvent: 4,
              fieldName: "字符串首次出现位置",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "要查找的字符串",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "指定结束的字符串截取",
              fieldTypeEvent: 4,
              fieldName: "指定结束的字符串截取",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标字符串",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "Object",
                  paramName: "结束位置",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "包含特定日期",
              fieldTypeEvent: 4,
              fieldName: "包含特定日期",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "特定日期字段",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "分割符",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "时间格式化",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "目标日期",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "访问接口",
              fieldTypeEvent: 4,
              fieldName: "访问接口",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "目标地址",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "请求方式",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "请求体",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "是否服务间调用",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "访问数据视图",
              fieldTypeEvent: 4,
              fieldName: "访问数据视图",
              paramTypeList: [
                {
                  paramType: "String",
                  paramName: "视图id sourceView",
                  paramValue: "",
                  argumentsValue: ""
                },
                {
                  paramType: "String",
                  paramName: "请求体",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            },
            {
              fieldCode: "解析产品列表",
              fieldTypeEvent: 4,
              fieldName: "解析产品列表",
              paramTypeList: [
                {
                  paramType: "Map",
                  paramName: "其他接口返回值",
                  paramValue: "",
                  argumentsValue: ""
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style>
</style>
