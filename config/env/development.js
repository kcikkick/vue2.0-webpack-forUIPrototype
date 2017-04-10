var merge = require('webpack-merge')
var defaultEnv=require('./default')
module.exports=merge(defaultEnv,{
    app: {
        title: 'Development'
    }
})