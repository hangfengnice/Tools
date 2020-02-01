const {smart} = require('webpack-merge')
const base = require('./webpack.config')
const webpack = require('webpack')

module.exports = smart(base, {
  mode: 'development',
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    progress: true,
    contentBase: "../dist",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})