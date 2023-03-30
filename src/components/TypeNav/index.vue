<template>
  <div class="type-nav">
    <div class="container" @mouseleave="hideList">
      <h2 class="all" @mouseenter="showList">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="isShow">
          <!-- 事件委派 -->
          <div class="all-sort-list2" @click="changeRoute">
            <div class="item" :class="{focus: lv1.categoryId == currentID}" v-for="lv1 in goodsList" :key="lv1.categoryId">
              <h3 @mouseenter="changeIndex(lv1.categoryId)" @mouseleave="currentID = -1">
                <a :data-eventName="lv1.categoryName" :data-lv1ID="lv1.categoryId">{{ lv1.categoryName }}</a>
              </h3>
              <!-- <div class="item-list clearfix" :style="{display: currentID == lv1.categoryId? 'block' : 'none'}"> -->
              <div class="item-list clearfix">
                <div class="subitem" v-for="lv2 in lv1.categoryChild" :key="lv2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-eventName="lv2.categoryName" :data-lv2ID="lv2.categoryId">{{ lv2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="lv3 in lv2.categoryChild" :key="lv3.categoryId">
                        <a :data-eventName="lv3.categoryName" :data-lv3ID="lv3.categoryId">{{ lv3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import throttle from 'lodash/throttle';     // 按需引入

  export default {
    name: 'TypeNav',
    data(){
      return {
        currentID: -1,
        isShow: true,
      }
    },
    // 组件挂载完毕，向服务器发请求
    mounted(){
      // 当跳转路由时改变三级联动的默认展示
      if(this.$route.path != '/home'){
        this.isShow = false;
      }
    },
    computed: {
      goodsList: function(){        // 此处若传入参数，得到的将是VC组件（this）
        return this.$store.state.ct.categoryList;
      },
      ...mapState('ct', ['categoryList']),
      // 简写形式
      //#region 
      /* ...mapState({
        goodsList: state => {       // mapState将点头函数的指向指为store中的state
          state.homeStore.categoryList
        },
      }) */
      //#endregion
    },
    methods: {
      /* changeIndex(index){
        this.currentID = index;
      } */
      // 节流写法
      changeIndex: throttle(function(index){
        this.currentID = index;
      }, 100),        // 100ms
      // 路由跳转
      changeRoute(event){
        let element = event.target;       
        let {eventname, lv1id, lv2id, lv3id} = element.dataset;        // 标签中自定义data-eventName添加eventname属性，通过dataset方法进行解构

        if(eventname){
          let location = {name: 'searchGoods'};
          let query = {categoryName: eventname}
          
          if(lv1id){
            query.category1Id = lv1id;
          }else if(lv2id){
            query.category2Id = lv2id;
          }else{
            query.category3Id = lv3id;
          }
          if(this.$route.params){
            location.params = this.$route.params;
          }
          location.query = query;
          this.$router.push(location);
          /* this.$router.push({
            path: '/search',
            // name: 'searchGoods',
            query: {
              keyword: eventname,
            }
          }); */
        }
        
      },
      // Search页面的商品分类效果
      showList(){
        this.isShow = true;
      },
      hideList(){
        if(this.$route.path !== '/home'){
          this.isShow = false;
        }
      }
    }
  };
</script>

<style scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  text-decoration: none;
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  padding-top: 5px;
  /* overflow: hidden; */
  position: absolute;
  background: #fafafa;
  z-index: 999;
}

.sort-enter-active {
  animation: sort .5s linear;
}

@keyframes sort {
  from {
    height: 0px;
  }

  to {
    height: 461px;
  }
}

.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}

.focus {
  background-color: skyblue;
}

.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
</style>