/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 13:45:07 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 14:32:54
 */
"use strict"

var path = require('path');

//解析当前目录
var workDir = path.resolve('.');

//组合完整的文件路径
var filePath = path.join(workDir,'pub','index.html')

console.log(workDir)

console.log(filePath)