/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 11:51:16 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 13:34:06
 */
//导入http 模块
 var http = require('http');

 //创建 http server，并传入回调函数
 var server = http.createServer(function (request,response) { 
     //回调函数接收 request 和 response 对象
     //获得http请求的method 和 url；
     console.log(request.method+':'+request.url);
     //将http响应200 写入response，同时设置Content-Type：text/html
     response.writeHead(200,{'Content-Type':'text/html'});
     //将http 响应的html内容 写入 response
     response.end(`
        <h1>hello world</h1>
        <script>
        document.title='test';
        </script>
     `)
  })

  //让服务器监听 8080 端口
  server.listen(8080);

  console.log('Server is running at http://192.168.1.126:8080/');
