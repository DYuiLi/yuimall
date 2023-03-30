<template>
  <!--details-->
  <div class="details clearfix">
    <div class="sui-navbar">
      <div class="navbar-inner filter">
        <ul class="sui-nav">
          <li :class="{active: isCom}">
            <a @click="orderByCom">综合
              <i v-show="!comShow && isCom">⬇</i> 
              <i v-show="comShow && isCom">⬆</i>
            </a>
          </li>
          <li :class="{active: isPrice}">
            <a @click="orderByPrice">价格
              <i v-show="!priceShow && isPrice">⬇</i>
              <i v-show="priceShow && isPrice">⬆</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-5" v-for="good in goodsList" :key="good.id">
          <div class="list-wrap">
            <div class="p-img">
              <router-link :to="{
                name: 'goodsDetail',
                params: {
                  skuid: good.id
                }
              }"
              target="_blank">
                <img v-lazy="good.defaultImg" />
              </router-link>
            </div>
            <div class="price">
              <strong>
                <em>¥</em>
                <i>{{ good.price }}</i>
              </strong>
            </div>
            <div class="attr">
              <a target="_blank" href="#" :title="good.title">{{
                good.title
              }}</a>
            </div>
            <div class="commit">
              <i class="command">已有<span>2000</span>人评价</i>
            </div>
            <div class="operate">
              <a
                href="success-cart.html"
                target="_blank"
                class="sui-btn btn-bordered btn-danger"
                >加入购物车
              </a>
              <a href="javascript:void(0);" class="sui-btn btn-bordered"
                >收藏</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Pagination :page="page"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  name: "Details",
  props: ['goodsList', 'order', 'page'],
  components: {
    Pagination
  },
  computed: {
    isCom(){
      return this.order.indexOf('1') != -1;
    },
    isPrice(){
      return this.order.indexOf('2') != -1;
    },
    comShow(){
      return this.order.indexOf('asc') != -1;
    },
    priceShow(){
      return this.order.indexOf('asc') != -1;
    }
  },
  methods: {
    orderByCom(){
      // this.comShow = !this.comShow;
      let order;
      if(this.isPrice || this.comShow){
        order = '1:desc';
      }else{
        order = '1:asc';
      };
      this.$emit('byOrder', order);
    },
    orderByPrice(){
      let order;
      if(this.isCom || this.priceShow){
        order = '2:desc';
      }else{
        order = '2:asc';
      };
      this.$emit('byOrder', order);
    }
  }
};
</script>

<style lang="css" scoped>
.details {
  margin-bottom: 5px;
}
.details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.details .goods-list {
  margin: 20px 0;
}
.details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.details .goods-list ul li .list-wrap .p-img a{
  color: #666;
}
.details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.details .goods-list ul li .list-wrap .price strong i {
  margin-left: 5px;
}
.details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.details .goods-list ul li .list-wrap .operate .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.details .goods-list ul li .list-wrap .operate .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white !important;
  text-decoration: none;
}

</style>