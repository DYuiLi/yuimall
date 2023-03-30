// 对项目的接口进行统一管理
import apiRequests from "./request";
import mockRequests from './mockAjax';

// 三级联动接口 api/product/getBaseCategoryList GET
export const reqCategoryList = () => {
  console.log('categoryList请求已发起');
  return apiRequests({url: '/product/getBaseCategoryList', method: 'GET'})
}
// 获取banner轮播列表数据
// export const reqBannerList = () => mockRequests.get('/banner');       // 地址：'/mock/banner.json'
export const reqBannerList = () => {
  return mockRequests({url: '/banner', method: 'GET'});
}

export const reqGoodsList = () => {
  return mockRequests({url: '/goods', method: 'GET'});
}
// post请求，带入参数，请求返回对应的搜索数据
export const reqSearchDeails = (params) => {
  return apiRequests({url: '/list', method: 'POST', data: params});
}

// 请求商品详情api
export const reqGoodsDetail = (skuid) => {
  return apiRequests({url: `/item/${skuid}`, method: 'GET'});
}

// 添加产品到购物车/更新购物车中商品数量
export const reqAddtoCart = (skuId, skuNum) => {
  return apiRequests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST'});
}

export const reqCartList = () => {
  return apiRequests({url: '/cart/cartList', method: 'GET'});
}

// 请求删除购物车产品
export const reqDeleteCart = (skuId) => {
  return apiRequests({url: `/cart/deleteCart/${skuId}`, method: 'DELETE'});
}

// 切换购物车商品选中状态
export const reqCheckedStatus = (skuId, isChecked) => {
  return apiRequests({url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'GET'});
}

// 获取注册验证码
export const reqVerifyCode = (phone) => {
  return apiRequests({url: `user/passport/sendCode/${phone}`, method: 'GET'});
}

// 用户注册
export const reqUserRegister = (data) => {
  return apiRequests({url: 'user/passport/register', data, method: 'POST'});
}

// 用户登录
export const reqLoginCheck = (data) => {
  return apiRequests({url: 'user/passport/login', data, method: 'POST'});
}

// 根据token获取用户登陆后信息
export const reqTokenLogin = () => {
  return apiRequests({url: 'user/passport/auth/getUserInfo', method: 'GET'});
}

// 退出登录，清除token
export const reqLogout = () => {
  return apiRequests({url: 'user/passport/logout', method: 'GET'});
}

// 获取用户地址信息
export const reqUserAddress = () => {
  return apiRequests({url: 'user/userAddress/auth/findUserAddressList', method: 'GET'});
}

// 获取商品清单
export const reqOrderList = () => {
  return apiRequests({url: 'order/auth/trade', method: 'GET'});
}

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => {
  return apiRequests({url: `order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'POST'});
}

// 获取支付信息
export const reqPayInfo = (orderId) => {
  return apiRequests({url: `payment/weixin/createNative/${orderId}`, method: 'GET'});
}

// 查询支付状态
export const reqPayStatus = (orderId) => {
  return apiRequests({url: `payment/weixin/queryPayStatus/${orderId}`, method: 'GET'});
}

// 获取订单信息（列表）
export const reqMyOrderList = (page, limit) => {
  return apiRequests({url: `order/auth/${page}/${limit}`, method: 'GET'});
}