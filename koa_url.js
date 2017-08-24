/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 18:18:04 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 18:22:33
 */
const Koa = require('koa');

//注意！require('koa-router') 返回的是函数
const router = require('koa-router')();

const app = new Koa();

//log request URL
