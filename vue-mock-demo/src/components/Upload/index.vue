<!--
 * @Author: ShaXin
 * @Date: 2020-05-29 13:37:26
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-29 15:52:09
 -->
 
<template>
  <div>
    <el-button @click="showFiles">
      123123
    </el-button>
    <el-upload
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="5"
      multiple
      :on-exceed="handleExceed"
      :auto-upload="false"
      :file-list="fileList"
      :on-change="onchange"
      :http-request="uploadFile"
      :accept="accept"
      action
      class="upload-demo"
    >
      <el-button
        size="small"
        type="primary"
      >
        点击上传
      </el-button>
      <div
        slot="tip"
        class="el-upload__tip"
      >
        只能上传{{ seeTrans[uploadType] }}文件，且不超过16Mb
      </div>
    </el-upload>
  </div>
</template>
<script>
//    :on-success="handleAvatarSuccess"
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    uploadType: {
      type: String,
      default: () => "images"
    }
  },
  data() {
    return {
      fileList: [],
      uploadTypeTrans: {
        photo: {
          accept: "image/jpeg,image/png,image/bmp"
        },
        music: {
          accept: "audio/mp3,video/mp4"
        },
        doc: {
          accept:
            "text/plain,application/msword,application/excel,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        },
        pdf: {
          accept: "application/pdf"
        }
      },
      accept: "image/jpeg,image/png,image/bmp",
      dialogVisible: false,
      seeTrans: { music: "歌曲", photo: "图片" },
      onClosed: () => {}
    };
  },
  watch: {
    data: {
      handler: function(val) {
        this.fileList = [].concat(val);
      },
      immediate: true
    },
    uploadType:{
      handler: function(val) {
        if(val && this.uploadTypeTrans[val].accept){
          this.accept = this.uploadTypeTrans[val].accept
        }
      },
      immediate: true
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      // 判断图片类型和大小
      const isLt16M = file.size / 1024 / 1024 < 16;
      if (!isLt16M) {
        this.$message.error("上传文件大小不能超过 16MB！");
      }
      return isLt16M;
    },

    showFiles() {
      this.$emit("getFiles", this.fileList);
    },

    onchange(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList;
    },

    handleRemove(file, fileList) {
      // 删除图片
      this.fileList = fileList;
    },

    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`, {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      });
    },

    async uploadFile(file) {
      try {
        console.log(file);
        // const formData = new FormData()
        // formData.append(this.uploadType, file.file)
        // const res = await this.uploadTypeTrans[this.uploadType].urlPath(formData)
        // if (res.error_code === 0) {
        //   res.data.map(v => {
        //     this.fileList.push({ name: file.file.name, url: v.file_url })
        //   })
        //   this.$emit('getFileList', this.fileList)
        //   this.$emit('fileSize', file.file.size)
        //   this.$message.success('上传成功')
        // }
        console.log(this.fileList);
      } catch (error) {
        this.fileList.pop();
        this.$message.error(`上传文件错误: ${error.message}`);
      } finally {
        // /// 写点啥呢？
      }
    },

    handlePreview(file) {
      // 查看图片
      const data = {
        file: file,
        type: this.uploadType
      };
      this.$emit("showFile", data);
    },

    // handleAvatarSuccess(response, file) { // 上传图片回调
    //   // this.fileList.push(file)
    //   console.log(response)
    //   alert(1)
    // },

    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    }
  }
};
</script>
