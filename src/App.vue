<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="isShow"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import {showHeaderandFooter} from '@/mixin'

  export default {
    name: 'App',
    components: {
      Header, 
      Footer,
    },
    mounted(){
      // 通知vuex向服务器发请求获取数据，存储与仓库中
      this.$store.dispatch('ct/categoryList');
      this.$store.dispatch('bt/bannerList');
    },
    computed: {
      isShow: function(){
        return showHeaderandFooter(this.$route.path)
      },
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    direction: none;
  }
</style>
