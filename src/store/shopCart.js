import {reqCartList, reqDeleteCart, reqCheckedStatus} from '@/api'
import {getUUID} from '@/utils/uuid_token'

export const cartList = {
  namespaced: true,
  state: {
    cartList: [],
    uuid_token: getUUID(),

  },
  actions: {
    cartList: async function({commit}){
      let result = await reqCartList();
      if(result.code === 200){
        commit('CARTLIST', result.data);
      }
    }
  },
  mutations: {
    CARTLIST: function(state, cartList){
      state.cartList = cartList;
    }
  },
  getters: {
    cartList(state){
      return state.cartList[0] || [];
    }
  }
}

export const deleteCartItem = {
  namespaced: true,
  state: {

  },
  actions: {
    deleteItem: async function({commit}, {skuId}){
      let result = await reqDeleteCart(skuId);
      if(result.code == 200){
        return result;
      }else{
        return Promise.reject(new Error('operation failed!'));
      }
    }
  },
  mutations: {

  },
  getters: {

  }
}

export const updateStatus = {
  namespaced: true,
  state: {

  },
  actions: {
    updateStatus: async function({commit}, {skuId, isChecked}){
      let result = await reqCheckedStatus(skuId, isChecked);
      if(result.code == 200){
        return result;
      }else{
        return Promise.reject(new Error('operation failed!'));
      }
    }
  },
  mutations: {

  },
  getters: {

  }
}
// 删除购物车所有选中的产品，promise.all写法
/* export const deleteAllChecked = {
  namespaced: true,
  actions: {
    deleteAll: async function({dispatch, getters}){
      console.log(dispatch);
      let promiseAll = [];
      getters.cartList.cartInfoList.forEach(item => {
        if(item.isChecked){
          let promise = dispatch('deleteItem', item.skuId);
          promiseAll.push(promise);
        }
      });
      return Promise.all(promiseAll);
    },
  },
  mutations: {},
  getters: {
    cartList: function(_, _1, states, getter){
      return states.cl.cartList[0];
    }
  }
} */