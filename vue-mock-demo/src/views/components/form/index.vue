<!--
 * @Author: ShaXin
 * @Date: 2020-05-28 15:47:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-29 15:41:02
 -->
<template>
  <div>
    <Upload
      :data="data"
      @getFiles="getFiles"
    />
  </div>
</template>

<script>
import Upload from "@/components/Upload";
export default {
  name: "Form",
  components: {
    Upload
  },
  data: function() {
    return {
      data: []
    };
  },
  methods: {
    getFiles(val) {
      console.log(val);
    }
  }
};
</script>

<style>
</style>
