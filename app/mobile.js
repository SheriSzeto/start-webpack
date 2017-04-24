/**
 * Created by went on 2017-4-19.
 */
/*
var sub = require('./sub');
var $ = require('jquery');
var moment = require('moment');
require('./main.scss');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('<p>look at me! now is'+moment().format()+'</p>');*/

//ES6写法
import './main.scss';
import $ from 'jquery'; //这个不需要了，因为添加了webpack.ProvidePlugin可以直接使用
import 'imports-loader?jQuery=jquery!./plugin.js';

$(document).ready(function(){
    let app = document.createElement('div');
    app.innerHTML = '<h1>Hello World</h1>';
    document.body.appendChild(app);
    $('h1').greenify();
});


