import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
// 原VueRouter.prototype.push方法需要传入三个参数（location, onComplete, onAbort）,因此需要传入三个参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {    // 表示，如果传入了成功和失败事件，则使用原始的push方法
    originPush.call(this, location, resolve, reject);
  } else {                    // 否则，将异常处理事件的回调函数设为空
    originPush.call(this, location, () => { }, () => { });
  }
}

let router =  new VueRouter({
  routes,
  // 滚动条行为：当路由跳转时，控制滚动条滚动位置
  /* scrollBehavior(to, from, savePosition){
    // top=0，始终滚动至最上方
    return { top: 1000}     // 不生效
  } */
});

// 添加全局前置路由守卫
router.beforeEach(async (to, from, next) => {
  // 跳转前判断登录的路由路径
  // console.log('from:', from.path, '  to:', to.path);
  let allow = [
    '/shopcart', 
    '/order/myorder', 
    '/order', 
    '/addcartsuccess', 
  ];

  let token = store.state.userLog.token;
  let name;
  await store.dispatch('userLog/userToken').then(data =>{
    name = store.state.userLog.userInfo.name;
  }, error => {
    console.log(error);
  });

  let pass = (allow.includes(to.path) && name) || !allow.includes(to.path);
  if(pass){
    // 存在token（已登录且有效）或访问非特殊组件
    // console.log(111);
    next();
  }else{
    if(token){
      // token失效
      // console.log(222);
      try {
        await store.dispatch('userLog/userLogout');
        next('/home');
      } catch (error) {
        // console.log(error);
      }
    }
    // 不存在token（未登录），且需要访问特殊组件
    // console.log(333);
    let toPath = to.path;
    console.log(toPath);
    next('/login?redirect='+ toPath);
  }

});

export default router;

