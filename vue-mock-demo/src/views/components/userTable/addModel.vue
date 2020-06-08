<!--
 * @Author: ShaXin
 * @Date: 2020-06-05 16:38:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-08 18:07:47
 -->
<template>
  <div>
    <el-dialog title="新增" :visible.sync="visible">
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="活动名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <div slot="footer" class="dialog-footer">
          <el-form-item label="">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="visible = false">取 消</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'AddModel',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      form: {
        name: ''
      },
      visible: false
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
}
</script>
