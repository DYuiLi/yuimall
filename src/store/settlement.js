import {reqUserAddress, reqOrderList} from '@/api'

export const userAddress = {
  namespaced: true,
  state: {
    addresses: [],
  },
  actions: {
    userAddress: async function({commit}){
      let result = await reqUserAddress();
      // console.log(result);
      if(result.code === 200){
        commit('USERADDRESS', result.data);
      }
    }
  },
  mutations: {
    USERADDRESS: function(state, address){
      state.addresses = address;
    }
  },
  getters: {

  }
}

export const getOrder = {
  namespaced: true,
  state: {
    orderList: [],
  },
  actions: {
    orderList: async function({commit}){
      let result = await reqOrderList();
      // console.log(result);
      if(result.code === 200){
        commit('ORDERLIST', result.data);
      }
    }
  },
  mutations: {
    ORDERLIST: function(state, order){
      state.orderList = order;
    }
  },
  getters: {
    detailArrayList(state){
      return state.orderList.detailArrayList || [];
    }
  }
}