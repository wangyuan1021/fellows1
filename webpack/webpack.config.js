const path = require('path');
// const webpack = require('webpack');
module.exports = {
    mode:'development',
    //入口文件配置项
    entry:{
        'index': "./src/index.js"
    },
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //模块：例如解读css，图片如何转换，压缩
    // module:{},
    //插件：用于生产模板和各项功能
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ],
   // 配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase: path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口
        port:8081
    }

}