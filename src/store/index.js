import Vue from "vue";
import Vuex from "vuex";
import {categoryList, bannerList, goodsList} from '@/store/home'
import {searchDetail} from '@/store/search'
import {goodsDetail, addtoCart} from "./detail";
import {cartList, deleteCartItem, updateStatus, deleteAllChecked} from './shopCart'
import {verifyCode, userRegister, userLoginAndOut} from './user'
import {userAddress, getOrder} from './settlement'

Vue.use(Vuex);

export default new Vuex.Store({
  // namespaced: true,
  modules: {
    ct: categoryList,
    bt: bannerList,
    gt: goodsList,

    sl: searchDetail,

    gd: goodsDetail,
    atc: addtoCart,

    cl: cartList,
    dci: deleteCartItem,
    us: updateStatus,
    // dac: deleteAllChecked,

    vc: verifyCode,
    ur: userRegister,
    userLog: userLoginAndOut,

    ads: userAddress,
    order: getOrder,
  }
})