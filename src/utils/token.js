// 设置本地存储token
export const setToken = (token) => {
  localStorage.setItem('token', token);
}
// 获取本地存储token
export const getToken = () => {
  // console.log();
  return localStorage.getItem('token');         // 返回token数据
}
// 清除本地存储token
export const removeToken = () => {
  localStorage.removeItem('token');
}