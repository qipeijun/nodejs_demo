/*
 * @Author: qipeijun 
 * @Date: 2017-08-17 16:15:05 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-17 17:02:30
 */

"use strict"

// 获取文件信息
var fs = require('fs');


fs.stat('./test.txt',function (err,stat) {
    if (err) {
        console.log(`${err}，出错了`)
    } else {
        //是否是文件
        console.log('isFile:' + stat.isFile());
        // 是否是目录
        console.log('isDirectory:' + stat.isDirectory());
        //如果是文件
        if (stat.isFile()) {
            //文件大小
            console.log('size:' + stat.size);
            //创建时间 date
            console.log('birth time:' + stat.birthtime);
            //修改时间 date
            console.log('modified time:' + stat.mtime);
        }
    }
})