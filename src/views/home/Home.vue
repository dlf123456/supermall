<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar> 
    <home-swiper :banners="banners"></home-swiper> 
    <recommend-view :recommends="recommends"></recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']">
    
    </tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
 <script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView.vue'
  import HomeFeatureView from './childComps/HomeFeatureView.vue'
<<<<<<< HEAD
  import {getHomeMultiData, getHomeGoods} from 'network/home'
=======
  import {getHomeMultiData} from 'network/home'
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
  
 export default {
   name: "Home",
   components: {
     NavBar,
     HomeSwiper,
     RecommendView,
     HomeFeatureView,
     TabControl
   },
   data() {
<<<<<<< HEAD
      return{
        banners: [],
        recommends:[],
        goods: {
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        }
      }
   },
   created() {
     // 请求多个数据
      this.getHomeMultiData()
     // 请求商品数据
      this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')
   },
   methods: {
     getHomeMultiData() {
      getHomeMultiData().then(res => {
        console.warn(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
     },
     getHomeGoods(type) {
       const page = this.goods[type].page + 1
       getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list)
         this.goods[type].page += 1
      })
     }
=======
     return{
       banners: [],
       recommends:[]
     }
   },
   created() {
     getHomeMultiData().then(res => {
       console.warn(res);
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list;
     })
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
   }
 }
 </script>

 <style scoped>
  #home{
<<<<<<< HEAD
    padding-top: 44px;
=======
    padding-top:44px ;
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:100px;
  }
 </style>