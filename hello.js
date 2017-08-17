"use strict";
// 严格模式运行，避免各种坑
console.log("hello nodejs");
 
var s = 'hello'

function greet(name){
    console.log(`${s},${name}!`)
}

module.exports = greet;



