//async是让方法变成异步；其定义的方法返回值是Promise对象
//await是等待异步方法执行完成；只能在异步方法中使用；

        // //普通方法

        // async function getData(){
        //     return '这是一个数据';
        // } 
        // console.log(getData());//返回一个Promise；async可以让一个普通方法变成异步方法Promise { '这是一个数据' }


        // //如何获取async异步方法中的数据
        // var p = getData();
        // p.then((data)=>{
        //     console.log(data);
        // });





//await阻塞功能；将异步转化成同步
//await必须用在异步方法中；await获取异步方法中的数据
async function getData(){
    console.log(2);
    return '这是一个数据';
} 
async function test(){
    console.log(1);
    var d = await getData();
    console.log(d);
    console.log(3);
}
test();

function getDataNew(){
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            var username = 'zhangsan';
            resolve(username);
        },1000);
    });
}

async function testNew(){
    var data = await getDataNew();
    console.log(data);
}
testNew();
