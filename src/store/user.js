import { reqVerifyCode, reqUserRegister, reqLoginCheck, reqTokenLogin, reqLogout } from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";

export const verifyCode = {
  namespaced: true,
  state: {
    verifyCode: '',
  },
  actions: {
    getCode: async function({commit}, phone){
      let result = await reqVerifyCode(phone);
      if(result.code === 200) {
        commit('GETCODE', result.data);
        // return 'OK';
      }else{
        return Promise.reject(new Error('Verify code get failed!'));
      }
    }
  },
  mutations: {
    GETCODE: function(state, code){
      state.verifyCode = code;
    }
  },
  getters: {

  }
}

export const userRegister = {
  namespaced: true,
  state: {

  },
  actions: {
    userRegister: async function({commit}, userInfo){
      let result = await reqUserRegister(userInfo);
      // console.log('register:', result);
      if(result.code === 200){
        return result.code;
      }else{
        return Promise.reject(new Error(result.message));
        // return result.message;
      }
    }
  },
  mutations: {

  },
  getters: {

  }
}

export const userLoginAndOut = {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {},
  },
  actions: {
    // 用户登录
    userLogin: async function({commit}, user){
      let result = await reqLoginCheck(user);
      // console.log(result);
      if(result.code === 200){
        commit('USERLOGIN', result.data.token);
        setToken(result.data.token);      // 本地持久化存储
      }else{
        return Promise.reject(new Error(result.message));
      }
    },
    // 通过token获取用户信息
    userToken: async function(context){
      let result = await reqTokenLogin();
      // console.log(result);
      if(result.code === 200){
        context.commit('USERTOKEN', result.data);
        return 'ok';
      }else{
        // console.log('---------',Promise.reject(new Error(result.message)));
        return Promise.reject(new Error(result.message));
        // return result.message;
      }
    },
    // 用户退出登录
    userLogout: async function({commit}){
      let result = await reqLogout();
      if(result.code === 200){
        commit('USERLOGOUT');
        return 'ok';
      }else{
        return Promise.reject(new Error(result.message));
      }
    }
  },
  mutations: {
    // 用户登录
    USERLOGIN: function(state, token){
      state.token = token;
    },
    // 通过token获取用户信息
    USERTOKEN: function(state, data){
      state.userInfo = data;
    },
    // 用户退出登录
    USERLOGOUT: function(state){
      state.token = '';
      state.userInfo = {};
      removeToken();
    }
  },
  getters: {

  }
}
/* 
export const verifyCode = {
  namespaced: true,
  state: {

  },
  actions: {
    
  },
  mutations: {

  },
  getters: {

  }
}
*/