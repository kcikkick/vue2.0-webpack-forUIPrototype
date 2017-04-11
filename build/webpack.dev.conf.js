

var config = require('../config/env/development')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var htmlPluginConfig=require('./webpack-html.conf')

var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = function (entries){
  // add hot-reload related code to entry chunks
  Object.keys(entries).forEach(function (name) {
    entries[name] = ['./build/dev-client'].concat(entries[name])
  });

  var mergerConfig=merge(baseWebpackConfig, {
    entry: entries,
    module: {
      loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': config.dev.env
      }),
      // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      //new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'app.html',
        template: 'index.html',
        chunks: ['app'],
        inject: true
      }),
      new FriendlyErrorsPlugin()
    ]
  });
  //mergerConfig.plugins.push.apply(mergerConfig.plugins, htmlPluginConfig);

  //console.log()

  return mergerConfig;

}
