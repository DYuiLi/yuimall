import { reqGoodsDetail, reqAddtoCart } from "@/api"

export const goodsDetail = {
  namespaced: true,
  state: {
    goodInfo: {},
  },
  actions: {
    goodDetail: async function({commit}, id){
      let result = await reqGoodsDetail(id);
      if(result.code == 200){
        commit('GOODDETAIL', result.data);
      }
    }
  },
  mutations: {
    GOODDETAIL: function(state, goodInfo){
      state.goodInfo = goodInfo;
    }
  },
  getters: {
    // getters中的函数，会默认传入当前仓库数据作为第一参数
    categoryView(state){
      // 当网络较差，请求数据未准备好，返回一个空数组以保持结构
      return state.goodInfo.categoryView || {};
    },
    spuSaleAttrList(state){
      return state.goodInfo.spuSaleAttrList || {};
    },
    skuInfo(state){
      return state.goodInfo.skuInfo || {};
    }
  }
}

export const addtoCart = {
  namespaced: true,
  state: {
  },
  actions: {
    addtoCart: async function({commit}, {skuId, skuNum}){
      let result = await reqAddtoCart(skuId, skuNum);
      return result;
      // console.log(result);
      // if(result.code === 200){
      //   commit('ADDTOCART', result.data);
      // }
    }
  },
  mutations: {
    ADDTOCART: function(state, cartInfo){
      state.cartInfo = cartInfo;
    }
  },
  getters: {

  }
}