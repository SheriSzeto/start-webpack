/**
 * Created by went on 2017-4-19.
 */
/*
function generateText(){
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = generateText;*/

// ES6写法
export default function(){
    var element = document.createElement('h2');
    element.innerHTML = 'Hello h2 world hahaha';
    return element;
}
