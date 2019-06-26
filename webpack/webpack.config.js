const path = require('path');
const webpack = require("webpack");
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const PurifycssWebpack = require('purifycss-webpack');
const entry = require("./webpack_config/entry_config.js");
module.exports = {
    mode:'development',
    //入口文件配置项
    entry:entry,
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
                // use:['style-loader','css-loader'],
                use: ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
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

            },{
                test:/\.scss$/,
                // use:["style-loader","css-loader","sass-loader"],
                use: ExtractTextWebpackPlugin.extract({
                    use:[{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                     }],
                    fallback: "style-loader"
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "es2015"
                        ]
                    }
                },
                exclude:/node_modules/
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
            }),

        // new HtmlWebpackPlugin({
        //     filename:'index2.html',
        //     chunks:['index2'],
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // }),
        new ExtractTextWebpackPlugin("css/index.css"),
        new PurifycssWebpack({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('yuanyuan'),
        new webpack.ProvidePlugin({
            $:"jquery"
        })
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