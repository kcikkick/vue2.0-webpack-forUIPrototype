let HtmlWebpackPlugin = require('html-webpack-plugin');






module.exports= function(entries){
    let htmlPlugin=[];
    Object.keys(entries).forEach(function (key) {
         const fileName=key+'.html';
         const chunksName=[key];
         console.log('-----fileName-----'+fileName);
         htmlPlugin.push(new HtmlWebpackPlugin({
                template: 'index.html',
                filename: fileName,
                chunks: chunksName,
                inject: 'true'
            })
        );
    });
    return htmlPlugin;
}








