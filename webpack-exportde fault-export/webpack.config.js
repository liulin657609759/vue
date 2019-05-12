let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    devServer:{//开发服务器的配置
        port:3000,//自定义端口号
        progress:true,//在内存中打包可以看到一个进度条
        contentBase:'./dist'
    },
    mode:"production",//模式(为了看到代码)：默认两种 production development
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
                collapseWhitespace:true,//不换行
            },
            hash:true,//哈希戳
        }),
    ],
    module:{//模块
        rules:[//规则： css-loader 解析@import这种语法的
            //style-loader 他是把css插入到head的标签中
            //loader的特点，希望功能单一
            //loader的用法，字符串只用一个loader
            //多个loader需要【】
            //loader的顺序，默认是从右向左执行 从下到上
            //loader还可以写成对象方式
        ]

    }
}