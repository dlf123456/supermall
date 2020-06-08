<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem  from './GoodsListItem.vue'
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    };
  },
  created() {
  }
}

</script>
<style lang='scss' scoped>
  .goods{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
  }
</style>