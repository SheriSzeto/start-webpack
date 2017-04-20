/**
 * Created by went on 2017-4-19.
 */
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);