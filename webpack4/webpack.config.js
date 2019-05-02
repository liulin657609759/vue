let path=require('path');
module.exports={
    mode:"development",
    entry:'./src/index',//入口
    output:{
        filename:'bundle.js',//打包后的文件名
        path:path.resolve(__dirname,'build'),//路径必须是一个绝对路径
    }
}