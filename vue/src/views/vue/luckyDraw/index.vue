<template>
  <div>
    <div class="luckyDraw">
      <router-link to="/vue/luckyDraw/luckyDraw">
        luckyDraw
      </router-link>
      <router-link to="/vue/luckyDraw/roundLucky">
        roundLucky
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.luckyDraw{
  height: 50px;line-height: 50px;;
  text-align: center;
  font-size: 22px;
  color: #452;
}
</style>
