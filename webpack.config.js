/**
 * Created by went on 2017-4-19.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
    //项目的文件夹，可以直接用文件夹名称，默认会找index.js也可以确定是哪个文件名字
    entry:APP_PATH,
    //输出的文件名，合并以后的js 会命名为bundle.js
    output:{
        path:BUILD_PATH,
        filename:'bundle.js'
    },
    module:{
        rules:[
            /*{
                test: /\.css$/,
                loaders: ['style-loader','css-loader'],
                include: APP_PATH
            },*/
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets :['es2015']
                }
            },
            /*{
                test: /\.js$/,
                enforce: 'pre',
                include: APP_PATH,
                loader: 'eslint-loader'
            }*/
        ]
    },
    //添加我们的插件会自动生成一个html文件
    plugins:[
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    devServer:{
        historyApiFallback:true,
        inline:true,//webpack2 不支持hot,progress，不用加
        proxy: {
            '/api/*': {
                target: 'http://localhost:5000',
                secure: false
            }
        }
    },
    devtool: 'eval-source-map', //利于显示出错位置


}