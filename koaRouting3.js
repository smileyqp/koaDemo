//动态路由
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
//动态路由
//http://localhost:3000/newscontesnt/31789
router.get('/newscontent/:aid',async(ctx) =>{
    //获取动态路由的传值
    console.log(ctx.params);//获取动态路由的返回值

    ctx.body = '新闻详情页面';//返回数据
})
//动态路由中可以传入多个值
//http://localhost:3000/package/123/456
router.get('/package/:aid/:cid',async(ctx) =>{
    //获取动态路由的传值
    console.log(ctx.params);//获取动态路由的返回值

    ctx.body = '新闻详情页面';//返回数据
})



app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);



//koa中间件；匹配路由之前或者匹配路由完成做的一系列操作
//执行任何代码
//修改请求和响应对象
//终结请求响应循环
//调用堆栈中的下一个中间件

