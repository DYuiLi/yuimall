// 路由信息
export default [
  // home
  {
    path: '/home',
    component: ()=>import('@/pages/Home')
  },
  // searchGoods
  {
    name: 'searchGoods',
    path: '/search/:keyword',
    component: ()=>import('@/pages/Search'),
  },
  {
    name: 'goodsDetail',
    path: '/detail/:skuid',
    component: ()=>import('@/pages/Detail')
  },
  {
    name: 'settlement',
    path: '/settlement',
    component: ()=>import('@/pages/Settlement'),
    beforeEnter: (to, from, next) => {
      if(from.path == '/shopcart'){
        next();
      }else{
        next(false);
      }
    },
    
  },
  {
    name: 'payment',
    path: '/pay',
    component: ()=>import('@/pages/Pay'),
    beforeEnter: (to, from, next) => {
      if(from.path == '/settlement'){
        next();
      }else{
        next(false);
      }
    },
    
  },
  {
    name: 'paySuccess',
    path: '/paysuccess',
    component: ()=>import('@/pages/PaySuccess'),
    /* beforeEnter: (to, from, next) => {
      if(from.path == '/pay'){
        next();
      }else{
        next(false);
      }
    }, */
  },
  {
    name: 'order',
    path: '/order',
    component: ()=>import('@/pages/Order'),
    children: [
      {
        path: 'myorder',
        component: ()=>import('@/pages/Order/MyOrder'),
      },
      {
        path: 'grouporder',
        component: ()=>import('@/pages/Order/GroupOrder'),
      },
      {
        path: '/order',
        redirect: '/order/myorder',
      }
    ]
  },
  {
    name: 'addtocart',
    path: '/addcartsuccess',
    component: ()=>import('@/pages/AddCartSuccess'),
  },
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ()=>import('@/pages/ShopCart'),
  },
  {
    path: '/login',
    component: ()=>import('@/pages/Login')
  },
  {
    path: '/register',
    component: ()=>import('@/pages/Register')
  },
  // 重定向，在项目跑起来时，默认访问首页
  {
    path: '*',
    redirect: '/home'
  }
  
]