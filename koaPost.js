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
views = require('koa-views'),
common = require('./module/common.js');//引入公共模块中的common

var app = new Koa();//实例化koa模块

//1.配置模板引擎中间件;views的第一个参数‘views’是指模板位置
app.use(views('views',{
    extension:'ejs'//应用ejs模板引擎;这种配置views中的文件结尾为ejs
}));


router.get('/',async(ctx) =>{
    await ctx.render('form');
});

//接收post提交过来的数据
router.post('/doAdd',async(ctx)=>{
    // //获取表单提交的数据
    // let str = '';
    // req.on('data',(data)=>{
    //     str += data;
    // });
    // req.on('end',(data)=>{
    //     console.log(str);
    // });
    
    //原生node.js在koa中获得表单提交的数据
    var data = await common.getPostData(ctx);
    console.log(data);
    ctx.body = data;
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

