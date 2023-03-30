const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,       // 此代码可以过去打包时生成的map文件
  transpileDependencies: true,
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn"
      }
    }
  },
  /* configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  }, */
})
