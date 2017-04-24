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
import  generateText from './sub';
import $ from 'jquery'; //这个不需要了，因为添加了webpack.ProvidePlugin可以直接使用
import moment from 'moment';
import 'imports-loader?jQuery=jquery!./plugin.js';

let app = document.createElement('div');
const  myPromise = Promise.resolve(42);
myPromise.then ((number) =>{
    $('body').append('<p>promise result is'+number+'now is'+moment().format()+'</p>');
    $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
