/*
 * @Author: qipeijun 
 * @Date: 2017-08-25 11:36:54 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-25 14:55:04
 */

const Koa = require("koa");

const router = require("koa-router")();

const bodyParser = require("koa-bodyparser");

const app = new Koa();

// 由于middleware 顺序很重要， 这个koa-bodyparser必须在router之前被注册到APP对象上


app.use(bodyParser());

router.get("/", async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
     <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
     </form>`;
});

router.post("/signin", async (ctx, next) => {
  let name = ctx.request.body.name || "";
  let password = ctx.request.body.password || "";
  console.log(`登入的账户名为：${name} 密码为：${password}`);
  if (name === "koa" && password === "123456") {
    ctx.response.body = `<h1>欢迎你，${name}</h1>`;
  } else {
    ctx.response.body = `<h1>账户名或密码错误</h1>
        <p><a href="/">重新登入</a></p>`;
  }
});

//add router middleware
app.use(router.routes());

app.listen(3000);

console.log(`server start at 3000`);



