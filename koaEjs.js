//Ejs模板引擎的使用
/**ejs
 * 1.npm install koa-views --save
 * 2.npm install ejs --save
 * 3.在中间件中配置当前项目的模板引擎
 * var views = require('koa-views');
 * app.use(views(__name,{extension:'ejs'}));
 * 4.await ctx.render('index');
 */
/**
 * 注意我们要在每个路由的render里面都要渲染一个公共的数据;这样在模板的任何一个地方都可以使用；这个要放在中间件中
 * ctx.state = {
 * session：this.session,
 * title:'app'
 * }
 */
var Koa = require('koa'),//引入koa模块
router = new require('koa-router')(),//引入和实例化路由
views = require('koa-views');

var app = new Koa();//实例化koa模块

//1.配置模板引擎中间件;views的第一个参数‘views’是指模板位置
app.use(views('views',{
    extension:'ejs'//应用ejs模板引擎;这种配置views中的文件结尾为ejs
}));
//2.配置模板引擎也可以用这种写法；这种写法views中的文件的后缀名必须为html
//app.use(views('views',{map:{html:'ejs'}}));

//写一个中间件配置公共的信息;匹配任何路由
app.use(async(ctx,next)=>{
    ctx.state.userinfo = 'smileyqp';
    await next();//继续向下匹配路由
});




//数据渲染
let title = '你好！ejs!';
let content ='<h2>数据绑定方法2</h2>';
let num = 123;
router.get('/',async(ctx) =>{
    await ctx.render('index',{
        title:title,//绑定数据；在前台index.ejs中获取
        content:content,
        num:num
    });
});



router.get('/news',async(ctx) =>{
    let list = ['111','222','333'];
    await ctx.render('news',{
        list:list
    });
})






app.use(router.routes());//配置启动路由
app.use(router.allowedMethods());//可以配置也可以不配置

app.listen(3000);



//koa中间件；匹配路由之前或者匹配路由完成做的一系列操作
//执行任何代码
//修改请求和响应对象
//终结请求响应循环
//调用堆栈中的下一个中间件

