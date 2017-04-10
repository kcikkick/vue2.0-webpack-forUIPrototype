
var config = require('../config/config')

module.exports.getEntries = function(entriesPath){
  var paths = config.utils.getGlobbedPaths(entriesPath);
  var entries = {};
  paths.forEach(function (pagePath) {
    var entryName = pagePath.substring((pagePath.lastIndexOf("/")+1),pagePath.lastIndexOf("."));
    entries[entryName] = "./"+pagePath;
  });
  console.log("entries | "+JSON.stringify(entries));
  return entries;
}