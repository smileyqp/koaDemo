//官方文档：http:/www.npmjs.com/pakage/koa-router
//路由是有一个URI或者叫做路径和一份特定的HTTP方法（get或者post等）组成的，涉及到如何相应客户端对某个网站节点的访问
//路由就是根据不同的URL地址加载不同的页面实现不同的功能
//npm install --save koa-router
var Koa = require('koa');//引入koa模块
var app = new Koa();//实例化koa模块

// var Router = require('koa-router');
// var router = new Router();

var router = new require('koa-router')();//引入和实例化路由

//ctx上下文，包含了request和response信息；配置路由
// router.get('/',async(ctx) =>{
//     ctx.body = '首页';//返回数据
// }).get('/news',async(ctx) =>{
//     ctx.body = '这是一个新闻页面';
// });
router.get('/',async(ctx) =>{
    ctx.body = '首页';//返回数据
});
router.get('/news',async(ctx) =>{
    ctx.body = '新闻页面';//返回数据
})
router.get('/newcontent',async(ctx) =>{
    ctx.body = '新闻详情页面';//返回数据
})




app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);
