'use strict';
let config = require('../env')
let opn = require('opn')
let path = require('path')
let express = require('express')
let app = express()


let server = null;
module.exports.start=function start(callback){
    const _this=this;
    _this.init(function(app){
        const port = process.env.PORT || config.dev.port;
        const host = process.env.HOST || '0.0.0.0';
        server=app.listen(port,host,function(err){
            if (err) {
                console.log(err)
                return
            }

            const serverUrl = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;
            console.log('--------------');
            console.log(chalk.green(config.app.title));
            console.log();
            console.log(chalk.green('Environment:     ' + process.env.NODE_ENV));
            console.log(chalk.green('Server:          ' + serverUrl));
            console.log('------');
            if (callback) callback(app);
        });
    })
}
