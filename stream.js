/*
 * @Author: qipeijun 
 * @Date: 2017-08-17 17:02:20 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-17 17:20:02
 */
"use strict"

var fs  = require('fs');

// 打开一个流
var rs = fs.createReadStream('./test.txt','utf-8');

// 读取 文件 流
rs.on('data',function (chunk) { 
    // data 事件可能会有多次，每次传递的chunk是流的一部分
    console.log('DATA');
    console.log(chunk);
 })

//  文件流 end
 rs.on('end',function () { 
     console.log('END')
  })

rs.on('error',function (err) { 
    console.log('ERROR' + err);
 })


 var ws1 = fs.createWriteStream('./test.txt','utf-8');
 ws1.write('使用stream写入文本数据....\n');
 ws1.write('END');
 ws1.end();
 
