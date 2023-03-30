<template>
  <div class="cart">
    <h4>全部商品</h4> 
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(goodInCart, index) in cartInfoList" :key="goodInCart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" 
              :checked="goodInCart.isChecked" 
              @change="changeCheckedStatus(goodInCart, $event)"
            >
          </li>
          <li class="cart-list-con2">
            <img :src="goodInCart.imgUrl">
            <div class="item-msg">{{ goodInCart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ goodInCart.cartPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <button class="mins" 
              @click="changeQty(goodInCart, -1)"
              :disabled="goodInCart.skuNum <= 1"
            >-</button>
            <input autocomplete="off" 
              type="text" 
              :value="goodInCart.skuNum" 
              class="itxt" 
              @change="changeQty(goodInCart, $event.target.value)"
            >
            <button class="plus" 
              @click="changeQty(goodInCart, 1)"
            >+</button>

          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ goodInCart.skuNum * goodInCart.cartPrice }}.00</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCart(goodInCart)">删除</a>
            <br> <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="selectAll" @click="isAll($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAll">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}.00</i>
        </div>
        <div class="sumbtn">
          <a @click="$router.push('/settlement')" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import throttle from 'lodash/throttle';

  export default {
    name: 'ShopCart',
    computed: {
      ...mapGetters('cl', ['cartList']),
      cartInfoList(){
        return this.cartList.cartInfoList || [];
      },
      totalPrice(){
        let sum = 0;
        this.cartInfoList.forEach(item => {
          if(item.isChecked){
            sum += item.skuNum * item.cartPrice;
          }
        });
        return sum;
      },
      selectAll(){
        if(this.cartInfoList.length){
          return this.cartInfoList.every(item => item.isChecked);
        }else{
          return false;
        }
      },
    },
    mounted(){
      this.getData();
    },
    methods: {
      getData(){
        this.$store.dispatch('cl/cartList');
      },
      isChecked(){
        let info = this.cartInfoList();
        return info.isChecked;
      },
      // 修改购物车产品数量
      changeQty:throttle(async function(item, num){
        // 当用户手动输入数量时
        let type = typeof num;
        if(type == 'string'){
          num = num.replace(/[^\d]/g, "");
          num = num * 1 - item.skuNum;
        }
        try{
          await this.$store.dispatch('atc/addtoCart', {skuId: item.skuId, skuNum: num});
          this.getData();
        }catch(error){
          alert('no response!')
        }
        // 使用try catch的优势，当存在错误或异常时可抛出异常，then方法只在后台报错
        /* let res = this.$store.dispatch('atc/addtoCart', {skuId: item.skuId, skuNum: nm});
        res.then(resolve => {
          this.getData();
        }, reject =>{
          alert('no response!');
        }); */
      }, 1000),  
      // 删除购物车产品
      async deleteCart(item){
        try {
          await this.$store.dispatch('dci/deleteItem', {skuId: item.skuId});
          this.getData();
          // alert('Deleted successfully!');
        } catch (error) {
          alert('Operation fialed!');
        }
      },
      async changeCheckedStatus(item, event){
        let isChecked = event.target.checked ? '1' : '0';
        try {
          await this.$store.dispatch('us/updateStatus', {skuId: item.skuId, isChecked});
          this.getData();
        } catch (error) {
          alert('Operation failed!');
        }
      },
      isAll(event){
        let isChecked = event.target.checked ? '1' : '0';
        try {
          this.cartInfoList.forEach(async item => {
            await this.$store.dispatch('us/updateStatus', {skuId: item.skuId, isChecked});
            this.getData();
        });
        } catch (error) {
          alert('Operation failed!');
        }
      },
      deleteAll(){
        // promise.all写法
        /* try {
          await this.$store.dispatch('dac/deleteAll');
          this.getData();
        } catch (error) {
          alert(error.message);
        } */
        this.cartInfoList.forEach(item => {
          if(item.isChecked){
            this.deleteCart(item);
          }
        });
      },
    }
  }
</script>

<style lang="css" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
}
.cart h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart .cart-main .cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-th > div {
  float: left;
}
.cart .cart-main .cart-th .cart-th1 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th2 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th3,
.cart .cart-main .cart-th .cart-th4,
.cart .cart-main .cart-th .cart-th5,
.cart .cart-main .cart-th .cart-th6 {
  width: 12.5%;
}
.cart .cart-main .cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart .cart-main .cart-body .cart-list > li {
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 15%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 35%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
/* .cart .cart-main .cart-body .cart-list .cart-list-con3 {
  width: 20.8333%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con3 .item-txt {
  text-align: center;
} */
.cart .cart-main .cart-body .cart-list .cart-list-con4 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 17%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  margin-top: 15px;
  width: 13%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}
.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
}
.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .select-all span {
  vertical-align: middle;
}
.cart .cart-tool .select-all input {
  vertical-align: middle;
}
.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
  cursor: pointer;
}
.cart .cart-tool .money-box {
  float: right;
}
.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice {
  width: 250px;
  /* height: 22px; */
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart .cart-tool .money-box .sumbtn {
  float: right;
}
.cart .cart-tool .money-box .sumbtn a {
  text-decoration: none;
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}

</style>