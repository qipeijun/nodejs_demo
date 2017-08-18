/*
 * @Author: qipeijun 
 * @Date: 2017-08-18 18:08:28 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-18 18:19:16
 */
"use strict"

const fs  = require('fs');

const rs = fs.createReadStream('./text.txt');  //读取
const ws = fs.createWriteStream('./test.txt');  //写入

// cppy
rs.pipe(ws);