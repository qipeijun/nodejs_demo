/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 16:47:19 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-24 18:06:53
 */

 //导入koa，和koa1.x 不同，在koa2.x中，我们导入的是一个class，因此用大写的K
 const Koa = require('koa');

 //创建一个Koa 对象表示app 本身
 const app = new Koa();
 
 //对于任何请求，app将调用该异步函数处理请求
//  app.use( async(ctx,next)=>{
//     await next();
//     // 设置response 的Content-Type
//     ctx.response.type = 'text/html';
//     //设置response的内容
//     ctx.response.body = '<h1>hello koa2!</h1><script>document.title="koa_demo"</script>'
//  })


// 使用三个middleware组成处理链，依次打印日志，记录处理时间，输出html
app.use( async(ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();//调用下一个 middleware
})

app.use( async(ctx,next)=>{
    const start = new Date().getTime(); //当前时间
    await next(); //调用下一个 middleware
    const ms = new Date().getTime()-start; //耗费时间
    console.log(`Time:${ms}ms`) // 打印耗费时间
})

// // 如果没有调用middleware 或者 需求权限 返回403
// app.use( async(ctx,next)=>{
//     if (await checkUserPermission(ctx)) {
//         await next()
//     } else {
//         ctx.response.status = 403;
//     }
// })

app.use( async(ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = `
    <h1>hello koa2!</h1>
    <script>document.title="koa_demo1"</script>
    `
})




 //在端口3000上监听
 app.listen(3000);
 console.log('app started at port 3000 ...')