//引入koa模块
var koa = require('koa');
//实例化koa模块
var app = new koa();

//中间件
// express写法
// app.use(function(req,res){
//     res.send('返回数据');
// });
app.use( async(ctx)=>{
    ctx.body = 'hello你好';
});


app.listen(3000);