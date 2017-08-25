/*
 * @Author: qipeijun 
 * @Date: 2017-08-24 18:18:04 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-25 11:37:43
 */
const Koa = require('koa');

//注意！require('koa-router') 返回的是函数
const router = require('koa-router')();

const app = new Koa();

//log request URL
app.use( async(ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})


//add url router
router.get('/hello/:name', async(ctx,next)=>{
    var name = ctx.params.name;
    // name = encodeURIComponent(name)
    ctx.response.body = `<h1>hello ${name}</h1>`
})

router.get('/',async(ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>`
})

//add router middleware
app.use(router.routes());

app.listen(3000)

console.log(`app started at port 3000...`)