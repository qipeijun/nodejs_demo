/*
 * @Author: qipeijun 
 * @Date: 2017-08-15 13:27:11 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-17 16:14:57
 */

"use strict";
var fs = require("fs");

fs.readFile("./test.txt", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    // 将buffer 对象 转化成普通文本  buffer -> string
    let text = data.toString("utf-8");
    console.log(text);

    readIn(text);
    // 转化成 buffer 对象  string -> buffer
    let buffer = new Buffer(text, "utf-8");
    // console.log(buffer)
    // 打印文件大小
    console.log(`${data.length}bytes`);
  }
});

// fs 同步读取文件  不接收回调函数，直接返回结果
// try {
//   var data = fs.readFileSync("./test.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   //error
//   console.log(error);
// }



// ----------写文件
function readIn(text) {
    // text = text.replace(/^最后|)$/g,'')
    var xdata = `${text}\n最后修改于${new Date().toLocaleDateString()} ${ new Date().toLocaleTimeString()}`;
    fs.writeFile("./test.txt", xdata, function(err) {
        if (err) {
        console.log("${err}写入失败");
        } else {
        console.log(`写入成功`);
        }
    });
}

