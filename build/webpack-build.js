let webpack = require('webpack')
var utils = require('./utils')

module.exports.package = function (app, callback) {
    
    var entries = utils.getEntries(config.files.client.entries);

    const webpackConfig = process.env.NODE_ENV === 'development'
    ? require('./webpack.dev.conf')(entries)
    : require('./webpack.prod.conf')(entries)




}


var initDistFolder = function (entries) {
  var assetsPath = path.join(config.webpack.assetsRoot, config.webpack.assetsSubDirectory)
  var viewPath = path.join(config.webpack.assetsRoot, config.webpack.assetsViewDirectory)
  //clear dist folder
  rm('-rf', config.webpack.assetsRoot)

  //prepare view and static folder
  mkdir('-p', assetsPath)
  mkdir('-p', viewPath)

  // copy static content into dist
  cp('-R', 'static/', assetsPath)

  //copy views from server folders
  var folders = ls('-d', 'server/*')
  folders.forEach(function (folder) {
    if (test('-d', folder + '/views/')) {
      var dest = viewPath + '/' + folder + '/views';
      mkdir('-p', dest);
      cp('-Rf', folder + '/views/', dest)
    }
  });

  //inject js into view file for development mode, for production env, inject via webpack directly
  if (process.env.NODE_ENV === 'development') {
    var views = config.utils.getGlobbedPaths(viewPath + '/**/*.server.view.html');
    views.forEach(function (viewHtmlPath) {

      var viewName = viewHtmlPath.substring((viewHtmlPath.lastIndexOf("/") + 1), viewHtmlPath.lastIndexOf(".server.view.html"));
      if (entries[viewName]) {
        // inject the dependency js file into ejs file
        var scriptCode = '<script src="/dist/' + viewName + '.js"></script>';
        sed('-i',/<\/body>/, scriptCode+'<\/body>',viewHtmlPath);
        // sed('-i', /<injected-scripts\/>/, scriptCode + '\r\n', viewHtmlPath);
      }

    });
  }
}
