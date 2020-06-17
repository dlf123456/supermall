<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  
  import MainTabBar from 'components/content/mainTabBar/mainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
 <style lang='scss' scoped>
  @import "assets/css/base.css"
 </style>
