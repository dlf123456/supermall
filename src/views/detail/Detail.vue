<template>
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

</style>