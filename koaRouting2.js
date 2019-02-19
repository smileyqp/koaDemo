//主要讲的是get传值
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

/**在koa中get传值通过request接收，但是接收方法有两种其query和querystring
 * query:返回的是格式化的参数对象
 * querystring：返回的是请求字符串
*/
router.get('/newcontent',async(ctx) =>{
    //获取get传值
    //从ctx中直接获取get传值
    console.log(ctx.query);//获取的是对象*******最重要的一种方式
    console.log(ctx.querystring);//获取的是一个字符串
    console.log(ctx.url);//获取url地址

    //从ctx中的request获取get的值
    console.log(ctx.request);
    console.log(ctx.request.url);//获取url
    console.log(ctx.request.query);//获取的是get传值也是一个对象

    ctx.body = '新闻详情页面';//返回数据
})




app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);
