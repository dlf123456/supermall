<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
<<<<<<< HEAD
  
import MainTabBar from 'components/content/mainTabBar/mainTabBar.vue'
=======
  import MainTabBar from 'components/content/mainTabBar/mainTabBar.vue'
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
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
