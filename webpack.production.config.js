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
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

module.exports = {
    //项目的文件夹，可以直接用文件夹名称，默认会找index.js也可以确定是哪个文件名字
    entry:{
        app:path.resolve(APP_PATH,'index.js'),
        mobile: path.resolve(APP_PATH,'mobile.js'),
        //添加要打包在vendors里面的库
        vendors: ['jquery','moment']

    },
    //输出的文件名，合并以后的js 会命名为bundle.js
    output:{
        path:BUILD_PATH,
        //注意 我们修改了bundle.js 用一个数组[name]来代替，他会根据entry的入口文件名称生成多个js文件，这里就是(app.js,mobile.js和vendors.js)
        filename:'[name].[hash].js' //加上hash防止缓存
    },
    module:{
        rules:[
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
            }
        ]
    },
    //添加我们的插件会自动生成一个html文件
    plugins:[
        //使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //把入口文件里面的数组打包成vendors.js
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendor.js'}),
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH,'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app','vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH,'mobile.html'),
            filename: 'mobile.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['mobile','vendors'],
            //要把script插入到标签里
            inject: 'body'
        })
    ]


}