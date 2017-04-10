
'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  path = require('path');


/**
 * Get files by glob patterns
 */
var getGlobbedPaths = function (globPatterns, excludes) {
  // URL paths regex
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  var output = [];

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function (globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function (file) {
          if (_.isArray(excludes)) {
            for (var i in excludes) {
              if (excludes.hasOwnProperty(i)) {
                file = file.replace(excludes[i], '');
              }
            }
          } else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }
      output = _.union(output, files);
    }
  }

  return output;
};

var initGlobalConfigFiles = function (config, assets) {
  // Setting Globbed test files
  config.files.client.entries = getGlobbedPaths(assets.client.entries);
}

var initGlobalConfig = function () {
  const config={};
     // Get the default assets
  var defaultAssets = require(path.join(process.cwd(), 'config/assets/default'));


  // Initialize global globbed files
  initGlobalConfigFiles(config, defaultAssets);

  // Expose configuration utilities
  config.utils = {
    getGlobbedPaths: getGlobbedPaths
  };

  return config;
}



module.exports = initGlobalConfig();