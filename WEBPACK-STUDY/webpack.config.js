const path = require('path')

//这个配置文件，起始就是一个 js 文件，通过node 中的模块操作，向外暴露一个配置对象
module.exports={
    //在配置文件中，需要手动指定入口和出口

    entry:path.join(__dirname,'./src/main.js'),//入口 ，表示，要使用 webpack打包哪个文件
    output:{//输出文件配置
        path:path.join(__dirname,'./dist'),//指定 打包好的文件，输出到哪个目录中去
        filename:'bundle.js'//这是指定 输出的文件名称
    }
    
}
//当我们在控制台，直接输入 webpack 命令执行的时候，webpack做了以下几步：
//1、首先，webpack 发现，我们并没有通过命令的形式，给他指定的入口和出口
//2、webpack 就回去项目的 根目录中，查找一个叫做‘webpack.config.js’的配置文件
//3、当找到配置文件后，webpack就回去解析执行这个 配置文件，当解析执行配置文件后，就得到了 配置文件中，配置的对象
//4、当webpack 拿到配置对象后，就拿到了 配置对象中 指定的 入口 和 出口，然后进行打包构建；