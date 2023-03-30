<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecmd></TodayRecmd>
    <Rank></Rank>
    <Like></Like>
    <GoodsCategory v-for="goods in goodsList" :key="goods.id" :list="goods"></GoodsCategory>
    <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer'
  import TodayRecmd from "@/pages/Home/TodayRecmd"
  import Rank from '@/pages/Home/Rank'
  import Like from '@/pages/Home/Like'
  import GoodsCategory from '@/pages/Home/GoodsCategory'
  import Brand from '@/pages/Home/Brand'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      // TypeNav,
      ListContainer,
      TodayRecmd,
      Rank,
      Like,
      GoodsCategory,
      Brand
    },
    mounted(){
      this.$store.dispatch('gt/goodsList');
      // this.$store.dispatch('userLog/userToken');
    },
    computed: {
      goodsList: function(){
        return this.$store.state.gt.goodsList;
      },
      ...mapState('gt', ['goodsList']),
    }
  }
</script>

<style lang="css" scoped>

</style>