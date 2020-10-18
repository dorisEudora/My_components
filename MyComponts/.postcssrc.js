const path = require('path')
module.exports = ({ file }) => {
  //  vant 是按照 375 设置的，对 vant 兼容
  // 这里还是 375，但是如果设计稿改变可以改成想要的
  const designWidth = path
    .normalize(file.dirname)
    .includes(`node_modules${path.sep}vant`)
    ? 375
    : 375

  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: designWidth,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['.ignore'], //忽略转换的css选择器
        minPixelValue: 1,
        // 媒体查询转换
        mediaQuery: true,
        exclude: []
        // landscape: false // 处理横屏
      },
      'postcss-aspect-ratio-mini': {},
      'postcss-write-svg': {}
    }
  }
}
