module.exports = {
    productionSourceMap:false,
    // 关闭ESLINT校验工具
    lintOnSave: false,
    //配置代理跨域
    devServer: {
      proxy: {
        "/api": {
          target: "http://10.200.100.55:5200/",
          changeOrigin: true
        },
        "/gateway": {
          target: "http://10.200.100.55:8314/",
          changeOrigin: true
        },
      },
    },
  };
  