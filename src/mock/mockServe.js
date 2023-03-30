// 使用mock插件实现模拟数据
import Mock from 'mockjs';
// 引入json数据
import goods from './goods.json';         // 图片、json格式数据webpack默认导出（暴露）
import banner from './banner.json';

// mock数据，参数1：请求地址，参数2：请求数据(模拟的数据以/mock开头)
Mock.mock("/mock/banner", {code:200, data: banner});
Mock.mock("/mock/goods", {code:200, data: goods});

