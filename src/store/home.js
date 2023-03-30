// home的仓库数据 模块化写法
import {reqCategoryList, reqBannerList, reqGoodsList} from '@/api'

/* 
 *  导航栏商品分类数据
*/
export const categoryList = {
  namespaced: true,
  state: {
    categoryList: [],
  },

  actions: {
    // 调用数据请求接口，通过接口将数据返回
    categoryList: async function({commit}){       // {commit} 中的commit == context.commit
      let result = await reqCategoryList();       // 返回从服务器获取的三级联动数据（对象形式），await作用：返回promise正确的结果(对象)
      // console.log(result);
      if(result.code === 200){                    // 服务器返回状态为200（成功）
        commit("CATEGORYLIST", result.data);
      }
    }
  },

  mutations: {
    CATEGORYLIST: function(state, ctgryList){
      state.categoryList = ctgryList;         // 将数据存储在state中
      // console.log(ctgryList);
    },
  },

  getters: {

  }
}
/* 
 *  轮播图数据
*/
export const bannerList = {
  namespaced: true,
  state: {
    bannerList: [],
  },

  actions: {
    bannerList: async function({commit}){
      let result = await reqBannerList();
      if(result.code === 200){
        commit('BANNERLIST', result.data);
      }
    }
  },

  mutations: {
    BANNERLIST: function(state, bnrList){
      state.bannerList = bnrList;
    }
  },

  getters: {

  }
}
/* 
 *  商品模块列表
*/
export const goodsList = {
  namespaced: true,
  state: {
    goodsList: [],
  },

  actions: {
    goodsList: async function({commit}){
      let result = await reqGoodsList();
      if(result.code === 200){
        commit('GOODSLIST', result.data);
      }
    }
  },

  mutations: {
    GOODSLIST: function(state, gdsList){
      state.goodsList = gdsList;
    }
  },

  getters: {

  }
}

/* const state = {
  categoryList: [],
};

const actions = {
  // 调用数据请求接口，通过接口将数据返回
  categoryList: async function({commit}){       // {commit} 中的commit == context.commit
    // let result = reqCategoryList();          // 返回从服务器获取的三级联动数据（promise风格）
    let result = await reqCategoryList();       // 返回从服务器获取的三级联动数据（对象形式），await作用：返回promise正确的结果(对象)
    // console.log(result);
    if(result.code === 200){                    // 服务器返回状态为200（成功）
      commit("CATEGORYLIST", result.data);
    }
  }
};

const mutations = {
  CATEGORYLIST: function(state, ctgryList){
    state.categoryList = ctgryList;         // 将数据存储在state中
    // console.log(ctgryList);
  },
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
} */