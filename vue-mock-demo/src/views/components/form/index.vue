<!--
 * @Author: ShaXin
 * @Date: 2020-05-28 15:47:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-04 14:42:17
 -->
<template>
  <div>
    <el-form ref="ruleForm" :rules="rules" :model="form" label-width="80px">
      <!-- <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item> -->

      <el-form-item label="图片" prop="fileList">
        <el-upload
          v-model="form.fileList"
          action=""
          list-type="picture-card"
          :auto-upload="false"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="handleChange"
        >
          <i class="el-icon-plus" />
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { formsubmit } from '@/api/components'
export default {
  name: 'Form',
  data: function() {
    const validateRequire = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        fileList: []
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        // region: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ],
        fileList: [
          { validator: validateRequire, trigger: 'change' }
        ]
      },
      dialogImageUrl: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.form.fileList = fileList
    },
    handleChange(file, fileList) {
      console.log(file, fileList)
      this.form.fileList = fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

    submitForm(formName) {
      const { form } = this
      const { fileList } = form
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData()
          // Object.keys(form).map(item => {
          //   if (item !== 'fileList') {
          //     formData.append(item, form[item])
          //   }
          // })
          fileList.map(val => {
            formData.append('files', val.raw, val.name)
          })
          console.log(formData.get('files'))
          console.log(formData.get('name'))
          console.log(formData.get('region'))

          formsubmit({ data: formData }).then(res => {
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
