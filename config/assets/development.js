var merge = require('webpack-merge')
var defaultConfig = require('./default')

module.exports = merge(defaultConfig, {
  NODE_ENV: '"development"'
})