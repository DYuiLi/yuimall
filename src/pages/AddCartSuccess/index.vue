<template>
  <div class="cart-complete-wrap">
    <div class="cart-complete">
      <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入购物车！</h3>
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="info.skuDefaultImg" />
          </div>
          <div class="right-info">
            <p class="title">
              {{ info.skuName }}
            </p>
            <p class="attr">颜色：WFZ5099IH/5L钛金釜内胆 数量：{{ $route.query.skuNum }}</p>
          </div>
        </div>
        <div class="right-gocart">
          <router-link class="sui-btn btn-xlarge" :to="`/detail/${info.id}`">查看商品详情</router-link>
          <router-link to="/shopcart">去购物车结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
  computed: {
    info: function(){
      return JSON.parse(sessionStorage.getItem('skuinfo'));
    },
  },
  mounted(){
  },
  methods: {
    backToDetail(){

    }
  }
};
</script>

<style lang="css" scoped>
.cart-complete-wrap {
  background-color: #f4f4f4;
}

.cart-complete-wrap .cart-complete {
  width: 1200px;
  margin: 0 auto;
}
.cart-complete-wrap .cart-complete h3 {
  font-weight: 400;
  font-size: 16px;
  color: #6aaf04;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0;
}

.cart-complete-wrap .cart-complete h3 .icon-pc-right {
  background-color: #fff;
  border: 2px solid #6aaf04;
  padding: 3px;
  margin-right: 8px;
  border-radius: 15px;
}
.cart-complete-wrap .goods {
  overflow: hidden;
  padding: 10px 0;
}
.cart-complete-wrap .goods .left-good {
  float: left;
}
.cart-complete-wrap .goods .left-good .left-pic {
  border: 1px solid #dfdfdf;
  width: 60px;
  float: left;
}
.cart-complete-wrap .goods .left-good .left-pic img {
  width: 60px;
  height: 60px;
}
.cart-complete-wrap .goods .left-good .right-info {
  color: #444;
  float: left;
  margin-left: 10px;
}
.cart-complete-wrap .goods .left-good .right-info .title {
  width: 100%;
  line-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.cart-complete-wrap .goods .left-good .right-info .attr {
  color: #aaa;
}
.cart-complete-wrap .goods .right-gocart {
  float: right;
}
.cart-complete-wrap .goods .right-gocart a {
  padding: 7px 36px;
  font-size: 15px;
  line-height: 22px;
  color: #333;
  background-color: #eee;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
}
.cart-complete-wrap .goods .right-gocart a:hover {
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
}
.cart-complete-wrap .goods .right-gocart a:active {
  background-color: #e1e1e1;
  border: 1px solid #d5d5d5;
}

.cart-complete-wrap .goods .right-gocart .btn-danger {
  background-color: #e1251b;
  color: #fff;
}
.cart-complete-wrap .goods .right-gocart .btn-danger:hover {
  background-color: #e1251b;
}
</style>