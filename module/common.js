// exports.getPostData ((ctx)=>{
//     //获取数据 异步；外部要用await获取其中数据，那么该方法应该返回一个Promise
//     return new Promise((resolve,reject)=>{
//         try{
//             let str = '';
//             ctx.req.on('data',(chunk)=>{
//                 str += chunk;
//             });
//             ctx.req.on('end',(chunk)=>{
//                 resolve(str);
//             });
//         }catch(err){
//             reject(err);
//         }
//     });
// });


exports.getPostData = function(ctx){
    return new Promise(function(resolve,reject){
        try{
            let str = '';
            ctx.req.on('data',(chunk)=>{
                str += chunk;
            });
            ctx.req.on('end',(chunk)=>{
                resolve(str);
            });
        }catch(err){
            reject(err);
        }
    })
}