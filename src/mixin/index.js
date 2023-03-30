//  搜索参数代码
const searchParams = {
  category1Id: "",        // 分类搜索，一级分类ID
  category2Id: "",        // 分类搜索，二级分类ID
  category3Id: "",        // 分类搜索，三级分类ID
  categoryName: "",       // 分类搜索，分类关键词
  keyword: "",            // 关键词搜索
  props: [],              // 平台售卖属性操作所带属性
  trademark: "",          // 品牌
  order: "",              // 排序
  pageNo: 1,              // 当前页数
  pageSize: 10,           // 每页显示的数量
}

export default function (obj) {
  this.$store.dispatch('sl/searchDetail', obj);
}

// 判断当前页是否为登录/注册界面，若是，的不显示搜索框和底部信息
export const showHeaderandFooter = (path) => {
  if (path !== '/login' && path !== '/register')
    return true;
  else
    return false;
}

// 判断用户是否登录购物商城，特殊模块需要检测
export const checkLogin = () => {
  
}
// export default getData(searchParams);