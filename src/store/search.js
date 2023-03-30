import { reqSearchDeails } from "@/api";

export const searchDetail = {
  namespaced: true,
  state: {
    searchResult: {},
  },
  actions: {
    // dispatch
    searchDetail: async function({commit}, params = {}){    // params = {}, 默认形参为空对象
      let result = await reqSearchDeails(params);       // 传入post的参数
      if(result.code === 200){
        commit('SEARCHDETAIL', result.data);
      }
    }
  },
  mutations: {
    SEARCHDETAIL: function(state, details){
      state.searchResult = details;
    }
  },
  getters: {
    // getters中的函数，会默认传入当前仓库数据作为第一参数
    goodsList(state){
      // 当网络较差，请求数据未准备好，返回一个空数组以保持结构
      return state.searchResult.goodsList || [];
    },
    trademarkList(state){
      return state.searchResult.trademarkList || [];
    },
    attrsList(state){
      return state.searchResult.attrsList || [];
    }
  }
}