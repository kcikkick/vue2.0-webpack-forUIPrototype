const path = require('path')
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')

var config = require('../config/env/default')


const isProd= process.env.NODE_ENV === 'production';
var projectRoot = path.resolve(__dirname, '../');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
   output: {
        // Absolute output directory
        path: isProd ? config.build.assetsRoot:config.dev.assetsRoot,
        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: isProd ? config.build.assetsPublicPath :config.dev.assetsPublicPath,

        // Filename for entry points
        // Only adds hash in build mode
        filename:  isProd ? config.build.fileName :config.dev.fileName,

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename:  isProd ? config.build.chunkFilename :config.dev.chunkFilename,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    //fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../client'),
      'assets': path.resolve(__dirname, '../client/assets'),
      'components': path.resolve(__dirname, '../client/components')
    }
  },
  module: {
    rules: [
      /**{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('client')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },**/
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      /**{
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },**/
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules(?!(.*vue-strap))/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
