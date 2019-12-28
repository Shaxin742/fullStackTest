<template>
  <article>
    <section>
      <h4>网曝王宝强殴打马蓉</h4>
      <content>
        <p>12月2日，有网友爆料称...</p>
      </content>
      <footer>网友评论：...</footer>
    </section>
    <section>
      <h4>知情人爆料称马蓉闯入王宝强家拿剪刀对峙</h4>
      <content>
        <p>...</p>
      </content>
      <footer>网友评论：...</footer>
    </section>
    ...
    <div style="height:2000px;" />
  </article>
</template>

<script>
export default {
  name: 'Xiding',
  data: function() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
h4 {
    position: sticky;
    top: 84px;
    background: blue;
    z-index: 1;
}
content {
    position: relative;
}
footer {
    position: sticky;
    bottom: 50vh;
    z-index: -1;
}
</style>
