/* 
  学习二次封装axios
*/

import axios from "axios";
import qs from 'qs';        // 第三方库

/* 
  根据环境变量进行接口区分（开发环境、测试环境、生产环境）
*/
// process.env.NODE_ENV         // webpack环境的配置
/* 
  package.json => scripts中配置为(设置NODE_ENV的类型)
  "serve:test": "set NODE_ENV=test&&vue-cli-service serve"
  "serve:production": "set NODE_ENV=production&&vue-cli-service serve"
*/
switch(process.env.NODE_ENV){
  // 生产环境
  case "production":
    axios.defaults.baseURL = "http://api.cn";
    break;
  // 测试环境
  case "test":
    axios.defaults.baseURL = "http://192.168.2.21:8080";
    break;
  // 开发环境
  default:
    axios.defaults.baseURL = "http://127.0.0.1:8080";
    break;
}

/* 
  设置超时时间和跨域是否允许携带凭证
*/
axios.defaults.timeout = 10000;       // 10s
axios.defaults.withCredentials = true;        // 允许携带

/* 
  ** 本部分根据公司请求数据类型而定
  设置POST请求头，告知服务器请求格式
  x-www-form-urlencoded格式（xxx=xxx&xxx=xxx）
*/
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';         // 声明请求传入的格式为x-www-form-urlencoded格式
axios.defaults.transformRequest = data => qs.stringify(data);                         // 利用qs转变格式，将xxx=xxx格式转变为对象格式

/* 
  设置请求拦截器===>在请求发往服务器之前对请求数据进行一些处理
  客户端发送请求 =》 请求拦截器 =》 服务器端
  ** token校验（JWT：进行token校验的算法）：
    接收服务器返回的token，存储到vuex/localStorage，每次向服务器发请求时，校验token
*/
axios.interceptors.request.use((config) => {
  let token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);

  return config;        // 将拦截到并修改后的config返回
}, error => {
  return Promise.reject(error);
});

/* 
  响应拦截器
  服务器端 =》 响应拦截器 =》 客户端发送请求
*/
// 对返回状态码进行一个过滤（一般公司不配置，一般接口处理很少出现3开头（一般出现在资源处理）的状态码）
axios.defaults.validateStatus = status => {
  // 默认只有2/3开头的状态码才是成功的状态，其余走error
  return /^(2|3)\d{2}$/.test(status);
}

axios.interceptors.response.use((response) => {
  return response.data;         // 返回正确的相应主体
}, (error) => {
  let {response} = error;
  if(response){
    // 服务器返回了结果，常用的几个错误如下
    switch(response.status){
      case 401:       // 权限问题，比如未登录
        break;
      case 403:       // 服务器接受请求，但拒绝执行，例如token过期
        break;
      case 404:       // 找不到页面
        break;
    }

  }else{
    // 服务器崩了/断网
    if(!window.navigator.onLine){       // 断网情况
      // 断网处理：可以跳转到断网刷新页面

    }
    return Promise.reject(error);         // 非断网情况，返回错误结果
  }
});


export default axios;       // 二次封装axios, 需要返回axios


/* 
****           Fetch封装(不需要axios)             ****
import qs from 'qs';        // 第三方库
let baseURL = '';
let baseURLArr = [{
  type: 'development',
  url: "http://127.0.0.1:8080"
}, {
  type: 'test',
  url: "http://192.168.2.21:8080"
},{
  type: 'production',
  url: "http://api.cn"
},];

baseURLArr.forEach(item => {
  if(process.env.NODE_ENV === item.type){
    baseURL = item.url;
  }
});

export default function requests(url, options = {}){
  url = baseURL + url;
  // GET系列请求的处理
  !options.method ? options.method = 'GET' : null;
  if(options.hasOwnProperty('params')){
    if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)){
      const ask = url.includes('?') ? '&' : '?';
      url += `${ask}${qs.stringify(params)}`;
    }
    delete options.params;          // params不是fetch中自带的属性字段
  }

  // 合并配置项
  options = Object.assign({
    // 允许跨域携带资源凭证，same-origin 同源支持，omit都拒绝
    credentials: 'include',
    // 设置请求头
    headers: {}
  }, options);
  options.headers.Accepts = 'application/json';

  // token校验
  let token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);

  // POST请求处理
  if(/^(POST|PUT)$/i.test(options.method)){
    !options.type ? options.type = 'urlencoded' : null;
    if(options.type === 'urlencoded'){
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.body = qs.stringify(options.body);
  }
  if(options.type === 'json'){
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }
  // 异于axios，fetch认为从服务器返回任何代码都为成功的返回，不返回则为失败
  return fetch(url, options).then(response => {
    if(!/^(2|3)\d{2}$/.test(response.status)){
      switch(response.status){
        case 401:       // 权限问题，比如未登录
          break;
        case 403:       // 服务器接受请求，但拒绝执行，例如token过期
          break;
        case 404:       // 找不到页面
          break;
      }
      return Promise.reject(response);
    }
    return response.json();       // 公司定义的成功，服务器返回的数据转换成json格式返回
  }).catch(error => {
    // 断网处理
    if(!window.navigator.onLine){
      return;
    }
    return Promise.reject(error);
  });
}
*/