let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={ 
    devServer:{//开发服务器的配置
        port:3001,//自定义端口号
        progress:true,//在内存中打包可以看到一个进度条
        contentBase:'./dist'
    },
    mode:"production",
    entry:'./src/index.js',//入口
    output:{
        filename:'main.js',//打包后的文件名
        path:path.resolve(__dirname,'dist'),//路径必须是一个绝对路径
    },
    plugins:[//数组  放着所有的webpack插件
        new HtmlWebpackPlugin({
            //将src下的html打包到dist
            template:'./src/index.html',
            filename:'index.html',
            //压缩html代码
            minify:{
                removeAttributeQuotes:true,//去掉双引号
                collapseWhitespace:ture,//不换行
            },
            hash:true,//哈希戳
        })
    ]
}