<template>
<<<<<<< HEAD
  <div id="detail">{{iid}}</div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  }
};
</script>

<style>
=======
    <div>
        <DetailNavBar></DetailNavBar>
    </div>
</template>

<script>
    import DetailNavBar from './childsComps/DetailNavBar.vue'
    export default {
        name: "Detail",
        components: {
            DetailNavBar
        },
        data() {
            return {
                iid: null
            }
        },
        created() {
            this.iid = this.$route.params.iid
        }
    }
</script>

<style lang='scss' scoped>

>>>>>>> ead596083013bb7c8a531e9422a4c8bb33d6a58a
</style>