module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.253.6.137:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
