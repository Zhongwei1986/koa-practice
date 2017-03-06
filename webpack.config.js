var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      loader: "babel-loader",

      //忽略'src'文件夹外的任何文件
      include: [
        path.resolve(__dirname, 'src'),
      ],

      //仅运行.js文件
      test: /\.js?$/,

      //babel配置
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0'],
      }
    }]
  }
}
