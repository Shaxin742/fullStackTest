<template>
  <div>
    <ul>
      <li
        v-for="v in 4"
        :key="v"
      >
        <el-popover
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <el-button slot="reference">{{ v }}</el-button>
        </el-popover>
      </li></ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
