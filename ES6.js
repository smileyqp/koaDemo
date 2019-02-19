//----------------------------------------------------
//const、var、let区别
//var定义变量
//let定义变量的块作用域
//const定义常量的块作用域

//----------------------------------------------------
//模板字符串
var name = 'Jack';
var age = 22;
console.log(`${name}的名字是${age}`);

//----------------------------------------------------
//方法的简写和属性的简写
//属性的简写
var nickname = '张三';
var app = {
    //nickname:nickname
    nickname,//此处属性的简写
    // run:function(){//方法的简写
    //     console.log('run');
    // }
    run(){//方法的简写
        console.log('run');
    }
}
app.run();
console.log(app.nickname);

//----------------------------------------------------
//箭头函数；this指向上下文
// setTimeout(function(){
//     console.log('箭头函数');
// },1000);
setTimeout(()=>{
    console.log('箭头函数');
},1000);

//----------------------------------------------------
//回调函数获取异步中的参数
function getData(callback){

    //ajax
    setTimeout(function(){
        var name = 'zhangsanya';
        callback(name);
    },1000);
}
//外部获取异步方法中的数据
getData(function(data){
    console.log(data);
});
//上面部分用箭头函数来写的话就是酱紫
// getData((data) =>{
//     console.log(data);
// });

//----------------------------------------------------
//Promise来处理异步
//成功的回调函数resolve
//失败的回调函数reject
//写法一
// var p = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         var name = 'zhangsan Promise';
//         resolve(name);
//     },3000);
// });
// p.then((data)=>{
//     console.log(data);
// });

function getDataPro(resolve,reject){
    setTimeout(() => {
        var aaa = '张张三三';
        resolve(aaa); 
    },1000);
}

var p = new Promise(getDataPro);
p.then((data) =>{
    console.log(data);
});