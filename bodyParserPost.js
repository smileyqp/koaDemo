//Ejs模板引擎的使用
/**ejs
1.npm install --save koa-bodyparser
2.引入var bodyParser = require('koa-bodyparser');
3.app.use(bodyParser());
4.获取数据ctx.request.body;
 */
var Koa = require('koa'),//引入koa模块
router = new require('koa-router')(),//引入和实例化路由
views = require('koa-views'),
bodyParser = require('koa-bodyparser');

var app = new Koa();//实例化koa模块

//1.配置模板引擎中间件;views的第一个参数‘views’是指模板位置
app.use(views('views',{
    extension:'ejs'//应用ejs模板引擎;这种配置views中的文件结尾为ejs
}));


//配置bodyParser()的中间件
app.use(bodyParser());

router.get('/',async(ctx) =>{
    await ctx.render('form');
});

//接收post提交过来的数据
router.post('/doAdd',async(ctx)=>{
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;//获取表单提交数据
});



router.get('/news',async(ctx) =>{
   ctx.body = '这是新闻页面！';
})






app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);



//koa中间件；匹配路由之前或者匹配路由完成做的一系列操作
//执行任何代码
//修改请求和响应对象
//终结请求响应循环
//调用堆栈中的下一个中间件

