"use strict"
var fs = require('fs');

var text = "hello nodejs \n我是nodejs fs模块生成的文件";

// 
fs.writeFile('text.txt',text,function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('ok')
    }
})



