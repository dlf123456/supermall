<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">??</div></NavBar> 
    <home-swiper :banners="banners"></home-swiper> 
  </div>
</template>
 <script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper'
  import {getHomeMultiData} from 'network/home'
  
 export default {
   name: "Home",
   components: {
     NavBar,
     HomeSwiper
   },
   data() {
     return{
       banners: [],
       recommend:[]
     }
   },
   created() {
     getHomeMultiData().then(res => {
       console.warn(res);
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend;
     })
   }
 }
 </script>

 <style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
 </style>