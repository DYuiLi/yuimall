// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nProgress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
// 引入store，获取游客身份uuid
import store from '@/store';

console.log(axios);

// 创建axios实例
const requests = axios.create({
  // 基础路径，发送请求时将自带一个/api
  baseURL: '/api',
  // 超时
  timeout: 5000,

});

// 请求拦截器：在发送请求之前，可以被请求拦截器检测到，在请求发出去之前处理一些事
// config: 配置对象，包含请求头headers
requests.interceptors.request.use((config) => {
  // 进度条开始
  nProgress.start();
  // 在请求头中添加临时用户身份
  if(store.state.cl.uuid_token){
    config.headers.userTempId = store.state.cl.uuid_token;
  }
  if(store.state.userLog.token){
    config.headers.token = store.state.userLog.token;
  }
  return config;
})

// 响应拦截器：
requests.interceptors.response.use((res) => {
  // 进度条结束
  nProgress.done();
  // 请求成功执行的回调函数
  return res.data;
}, (err) => {
  // 请求失败执行的回调函数
  return Promise.reject(new Error(err));
})

export default requests;




