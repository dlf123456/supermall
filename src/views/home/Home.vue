<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar> 
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true">
      <home-swiper :banners="banners"></home-swiper> 
        <recommend-view :recommends="recommends"></recommend-view>
        <home-feature-view></home-feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick">
        </tab-control>
        <good-list :goods = "showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
 <script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'
  import {getHomeMultiData, getHomeGoods} from 'network/home'

  import BScroll from 'better-scroll'
  
 export default {
   name: "Home",
   components: {
     NavBar,
     HomeSwiper,
     RecommendView,
     HomeFeatureView,
     TabControl,
     GoodList,
     Scroll,
     BackTop
   },
   data() {
      return{
        banners: [],
        recommends:[],
        goods: {
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0, list:[]},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
   },
   computed: {
     showGoods() {
       return this.goods[this.currentType].list
     }
   },
   created() {
     // 请求多个数据
      this.getHomeMultiData()
     // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
   },
   methods: {
     //事件监听相关
     tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
       }
     },
     backClick() {
       console.log('111')
       this.$refs.scroll.scrollTo(0,0,500)
     },
     contentScroll(position) {
       this.isShowBackTop = (-position.y) > 1000
     },
     // 网络请求相关
     getHomeMultiData() {
      getHomeMultiData().then(res => {
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
   },
 }
 </script>

 <style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
  .tab-control{
    /* position: sticky; */
    top:44px;
    z-index: 9;
  }
  .content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left:0;
    right: 0;
  }
 </style>