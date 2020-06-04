<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>  
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
 <script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMultiData} from 'network/home'
  import {Swiper, SwiperItem} from 'components/common/swiper'
 export default {
   name: "Home",
   components: {
     NavBar,
     Swiper,
     SwiperItem
   },
   data() {
     return{
       banners: [],
       recommend:[]
     }
   },
   created() {
     getHomeMultiData().then(res => {
       console.log(res);
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