/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 15:39:03 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 15:47:59
 */

//  MD5
const crypto = require('crypto');



const hash = crypto.createHash('md5');

//可任意多次调用update
hash.update('hello world');
hash.update('hello nodejs');

console.log(hash.digest('hex'))
