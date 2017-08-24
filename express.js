/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 16:23:24 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 16:39:30
 */

var express = require('express');

var app = express();

app.get('/',function (req,res) { 
    res.send('hello world')
 })

 app.listen(3000,function () { 
    console.log('example app listening on port 3000!')
  })
  