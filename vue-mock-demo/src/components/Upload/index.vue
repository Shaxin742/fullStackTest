<!--
 * @Author: ShaXin
 * @Date: 2020-05-29 13:37:26
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-01 16:32:01
 -->

<!--
 *
 * 废弃 废弃 废弃 废弃
 *
 *
 -->
<template>
  <div class="upload-container">
    <el-upload
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="limit"
      multiple
      :drag="drag"
      :list-type="listType"
      :on-exceed="handleExceed"
      :auto-upload="false"
      :file-list="data"
      :on-change="onchange"
      :accept="accept"
      action
      class="upload-demo"
    >
      <slot />
      <div
        slot="tip"
        class="el-upload__tip"
      >
        只能上传{{ seeTrans[uploadType] }}文件，且不超过16Mb
      </div>
    </el-upload>

    <el-dialog
      class="imgview-contaner"
      :visible.sync="imgViewDia"
      width="30%"
    >
      <span>
        <img
          :src="imgData.url"
          alt
        >
      </span>
      <span
        slot="footer"
        class="dialog-footer"
      />
    </el-dialog>
  </div>
</template>
<script>
//    :on-success="handleAvatarSuccess"
export default {
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    // 上传文件数据
    data: {
      type: Array,
      default: () => []
    },
    // 上传文件类型
    uploadType: {
      type: String,
      default: 'photo'
    },
    // 上传组件类型
    listType: {
      type: String,
      default: ''
    },
    // 最大上传数量
    limit: {
      type: Number,
      default: () => 10000
    },
    // 拖拽
    drag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focusing: false,
      uploadTypeTrans: {
        photo: {
          accept: 'image/jpeg,image/png,image/bmp'
        },
        music: {
          accept: 'audio/mp3,video/mp4'
        },
        doc: {
          accept:
            'text/plain,application/msword,application/excel,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        },
        pdf: {
          accept: 'application/pdf'
        }
      },
      accept: 'image/jpeg,image/png,image/bmp',
      seeTrans: { music: '歌曲', photo: '图片' },
      imgViewDia: false,
      imgData: ''
    }
  },
  watch: {
    uploadType: {
      handler: function(val) {
        if (val && this.uploadTypeTrans[val].accept) {
          this.accept = this.uploadTypeTrans[val].accept
        }
      },
      immediate: true
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      // 判断图片类型和大小
      const isLt16M = file.size / 1024 / 1024 < 16
      if (!isLt16M) {
        this.$message.error('上传文件大小不能超过 16MB！')
      }
      return isLt16M
    },

    onchange(file, fileList) {
      console.log(fileList)
      this.$emit('change', fileList)
    },

    // 删除图片
    handleRemove(file, fileList) {
      this.$emit('change', fileList)
    },

    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },

    // 查看图片
    handlePreview(file) {
      console.log(file)
      this.imgData = file
      this.imgViewDia = true
    },

    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },

    handleDownload(file) {
      console.log(file)
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-container {
  .imgview-contaner {
    text-align: center;
    img {
      width: 100%;
    }
  }
}
</style>
