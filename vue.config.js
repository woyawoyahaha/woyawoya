module.exports = {
  publicPath: './',
  //devServer是脚手架中的开发服务器
  devServer: {
    open: true, //默认开启浏览器
    port: 5600, //更改默认端口号为8000
    overlay: {
      // 遮罩层
      warnings: false,
      errors: false
    },
    proxy: {
      //代理
      '/info': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/info': ''
        }
      },
      '/le': {
        target: 'https://api.apiopen.top',
        changeOrigin: true,
        pathRewrite: {
          '^/le': ''
        }
      }
      // "/massage":{
      //   target:"http://106.14.70.106:3009",
      //   changeOrigin:true,
      //   pathRewrite:{
      //     "^/massage":""
      //   }
      // }
    }
  }
}
