
var config = require('../config/config');
var defalutEnvConfig=require('../config/env/default');


var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = function (_path) {
   var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? defalutEnvConfig.build.assetsSubDirectory
    : defalutEnvConfig.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {};

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader,loaderOptions) {
      var loaders=[cssLoader];
      if(loader){
        loaders.push({
          loader:loader+'-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
      // Extract CSS when that option is specified
      // (which is the case during production build)
      if (options.extract) {
        return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader'
        })
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}



module.exports.getEntries = function(entriesPath){
  var paths = config.utils.getGlobbedPaths(entriesPath);
  var entries = {};
  paths.forEach(function (pagePath) {
    var entryName = pagePath.substring((pagePath.lastIndexOf("/")+1),pagePath.lastIndexOf("."));
    entries[entryName] = "./"+pagePath;
  });
  console.log("ALL entries | "+JSON.stringify(entries));
  return entries;
}