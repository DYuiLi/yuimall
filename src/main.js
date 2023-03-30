import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'          // 将三级联动注册为全局组件
import {reqCategoryList} from '@/api/index.js'
import store from '@/store'                         // 引入仓库
import '@/mock/mockServe';                          // 引入mock数据
import 'swiper/css/swiper.css';                     // 引入轮播效果图
import Carousel from '@/components/Carousel';
import * as API from '@/api';                       // 引入所有api调用接口至全局
import { Button, MessageBox } from 'element-ui';
import VueLazyload from 'vue-lazyload';
import loading from '@/assets/loading.gif';
import '@/plugins/validata';

// 全局引入mixin公用属性和方法
/* import { carouselOptions } from './mixin/carousel'
Vue.mixin(carouselOptions); */

Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 注册饿了么全局组件
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

reqCategoryList();

Vue.use(VueLazyload, {
  loading: loading,
});

// 插件的方式实现自定义指令
/* import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins, {
  name: 'upper',
}); */

new Vue({
  render: h => h(App),
  // 注册路由信息，此时，组件上将拥有$route和$router属性
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
