<template>
  <div>
    <div class="main">
      <div class="py-container">
        <Toolbar></Toolbar>
        <TypeNav></TypeNav>
        <Bread :breadList="breadList" ref="remove"></Bread>
        <ResultFilter ref="filter"></ResultFilter>
        <Details 
          :goodsList="goodsList" 
          :page="page" 
          :order="searchParams.order" 
          ref="byOrder"
          @getPageNo="getPageNo">
        </Details>
        <Hotsale></Hotsale>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Toolbar from '@/pages/Search/Toolbar';
  import Bread from './Bread';
  import ResultFilter from './ResultFilter';
  import Details from './Details';
  import Hotsale from './Hotsale';

  export default {
    name: 'Search',
    components: {
      Toolbar,
      Bread,
      ResultFilter,
      Details,
      Hotsale
    },
    computed: {
      ...mapGetters('sl', ['goodsList']),
      page: function(){
        return {
          size: this.searchParams.pageSize,
          total: this.$store.state.sl.searchResult.total,
          current: this.searchParams.pageNo,
          continues: 3
        }
      }
    },
    data(){
      return {
        searchParams: {
          category1Id: "",        // 分类搜索，一级分类ID
          category2Id: "",        // 分类搜索，二级分类ID
          category3Id: "",        // 分类搜索，三级分类ID
          categoryName: "",       // 分类搜索，分类关键词
          keyword: "",            // 关键词搜索
          props: [],              // 平台售卖属性操作所带属性
          trademark: '',          // 品牌
          order: '1:desc',        // 排序
          pageNo: 1,              // 当前页数
          pageSize: 3,           // 每页显示的数量
        },
        breadList: {
          nav: '',
          btnSearch: '',
          props: [],
          brand: '',
        },
      }
    },
    // 监听跳转当前路由时的参数变化
    watch: {
      '$route'(to, from){
        Object.assign(this.searchParams, this.$route.query, this.$route.params);
        this.getData();

        // 清除历史分类数据,为下一次请求做准备
        this.searchParams.category1Id = undefined;      // undefined形式的参数，不会包含在服务器请求中，节省宽带
        this.searchParams.category2Id = undefined;
        this.searchParams.category3Id = undefined;
      },
      searchParams: {
        deep: true,
        handler(){
          Object.assign(this.searchParams, this.$route.query, this.$route.params);
          this.getData();
        }
      }
    },
    beforeMount(){
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
    },
    mounted(){
      this.getData();
      this.$refs.remove.$on('categoryName', this.removeCategoryName);
      this.$refs.remove.$on('keyword', this.removeKeyword);
      this.$refs.remove.$on('property', this.removeProperty);
      this.$refs.remove.$on('brand', this.removeBrand);
      this.$refs.filter.$on('props', this.setProperty);
      this.$refs.filter.$on('brand', this.chooseBrand);
      this.$refs.byOrder.$on('byOrder', this.updateOrder);
      this.$bus.$on('getPageNo', this.getPageNo);
    },
    beforeDestroy(){
      this.$refs.remove.$off(['categoryName', 'keyword', 'property', 'brand']);
      this.$refs.filter.$off(['props', 'brand']);
      this.$refs.byOrder.$off('byOrder');
      this.$bus.$off('getPageNo');
    },
    methods: {
      // 收集需搜索的商品信息
      getData(){
        this.$store.dispatch('sl/searchDetail', this.searchParams);

        // 将数据传给bread组件，重新渲染页面
        this.breadList.nav = this.searchParams.categoryName;
        this.breadList.btnSearch =  this.searchParams.keyword;        
      },
      // removeCategory
      removeCategoryName(){
        // assign方法会将两个对象数据进行合并，
        // 清除route的categoryName是为了让watch监听路由的变化，从而调用assign方法
        // 清除seatchParams的categoryName是为了assign方法被调用时不受已有数据的影响
        // keyword在点击搜索之后机会被情况，因此不需要对其再次清空
        this.searchParams.categoryName = undefined;
        this.$route.query.categoryName = undefined;
        if(this.$route.params){
          this.$router.replace({name: 'searchGoods', params: this.$route.params});
        }
      },
      removeKeyword(){
        this.$route.params.keyword = undefined;
        if(this.$route.query){
          this.$router.replace({name: 'searchGoods', query: this.$route.query});
        }
      },
      removeProperty(prop){
        const index = this.searchParams.props.indexOf(prop);
        this.searchParams.props.splice(index, 1);
      },
      removeBrand(){
        this.breadList.brand = '';
        this.searchParams.trademark = '';
      },
      setProperty(prop, name){
        // 将用户点击的属性添加至属性列表
        let property = `${prop.attrId}:${name}:${prop.attrName}`;
        prop.name = name;
        if(!this.searchParams.props.includes(property)){
          this.breadList.props.push(prop);
          this.searchParams.props.push(property);
        }
      },
      chooseBrand(brand){
        // 对数据进行处理
        let trademark = `${brand.tmId}:${brand.tmName}`;
        if(this.searchParams.trademark != trademark){
          this.searchParams.trademark = trademark;
          this.breadList.brand = brand;
          // this.searchParams.props.push(brand);
        }
      },
      updateOrder(order){
        this.searchParams.order = order;
      },
      getPageNo(pageNo){
        this.searchParams.pageNo = pageNo;
      }
    }
  }
</script>

<style lang="css" scoped>
.main {
  margin: 10px 0;
}
.main .py-container {
  width: 1200px;
  margin: 0 auto;
}
</style>