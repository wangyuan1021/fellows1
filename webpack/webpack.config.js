const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    //入口文件配置项
    entry:{
        'index': "./src/index.js"
        // 'index2':"./src/index2.js"
    },
    //出口文件的配置项
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    //模块：例如解读css，图片如何转换，压缩
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.(png|jpg|gif)$/i,
                use:[{
                       loader:'url-loader',
                    options:{
                           limit:500,
                           outputPath:'images/'
                    }

                    }]
            },{
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'


            }
        ]
    },
    //插件：用于生产模板和各项功能
    plugins:[

        new HtmlWebpackPlugin({
               filename:'index1.html',
                chunks:['index'],
                minify:{
                    removeAttributeQuotes:true
                },
                hash:true,
                template:'./src/index.html'
            })
        // new HtmlWebpackPlugin({
        //     filename:'index2.html',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // })
    ],
   // 配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase: path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口
        port:'8081'


    }

}