//路由顺序
var Koa = require('koa');//引入koa模块
var app = new Koa();//实例化koa模块

var router = new require('koa-router')();//引入和实例化路由

//1.应用级中间件
//可以匹配任意的路由；匹配路由之前打印日期
app.use(async (ctx,next)=>{
    console.log('1.这是第一个中间件');
    await next();//当路由匹配完成以后继续向下匹配；如果不写next那么这个路由完成之后不会继续向下匹配
    console.log('5.匹配到路由之后返回来执行');
}); 
app.use(async (ctx,next)=>{
    console.log('2.这是第二个中间件');
    await next();//当路由匹配完成以后继续向下匹配；如果不写next那么这个路由完成之后不会继续向下匹配
    console.log('4.匹配到路由之后返回来执行');
});

router.get('/',async(ctx) =>{
    ctx.body = '首页';//返回数据
});



router.get('/news',async(ctx) =>{
    ctx.body = '新闻页面';//返回数据
    console.log('3.匹配到了这个路由');
})






app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);



//koa中间件；匹配路由之前或者匹配路由完成做的一系列操作
//执行任何代码
//修改请求和响应对象
//终结请求响应循环
//调用堆栈中的下一个中间件

