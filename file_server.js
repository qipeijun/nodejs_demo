/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 13:56:21 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 15:20:53
 */
"use strict";

var fs = require("fs"),
    url = require("url"),
    path = require("path"),
    http = require("http");

//从命令行参数获取root目录，默认是当期目录
var root = path.resolve(process.argv[2] || ".");

console.log(`Static root dir:${root}`);

//创建服务器
var server = http.createServer(function(request, response) {
    //获取URL的path，类似于 ‘/css/bootstrap.css’

    var pathname = url.parse(request.url).pathname;
    var promise = new Promise(function(resolve, reject) {
        if (pathname == "/") {
            // 如果只有根路径，依次索引index.html，default.html

            fs.stat("./index.html", function(err, state) {
                if (!err && state.isFile()) {
                    pathname = "/index.html";
                    resolve(pathname);
                } else {
                    pathname = "/default.html";
                    resolve(pathname);
                }
            });
        } else {
            resolve(pathname);
        }
    });

    promise.then(function(pathname) {
        //获得对应的本地文件路径，类似 /srv/www/css/bootstrap.css
        var filepath = path.join(root, pathname);
        //获取文件状态
        fs.stat(filepath, function(err, stats) {
            if (!err && stats.isFile()) {
                //没有出错并且文件存在
                console.log("200" + request.url);
                //发送200响应
                response.writeHead(200);
                //将文件流导向response
                // console.log('filepath'+filepath)
                fs.createReadStream(filepath).pipe(response);
            } else {
                // 出错了或者文件不存在
                console.log("404" + request.url);
                //发送404响应
                response.writeHead(404);
                response.end(`
                    <h1>404 Not Found</h1>
                `);
            }
        });
    });
});

server.listen(8080);

console.log(`Server is running at http://127.0.0.1:8080/`);