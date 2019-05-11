## webpack安装
- 文件名不能包含中文
- yarn init -y
- 安装本地的webpack
- yarn add webpack webpack-cli-D


## webpack可以进行0配置
- 打包工具->输出后的结果(js模块)
- 打包(支持我们的js模块化)
- 新建src文件
- src文件下添加index.js
- 执行 npx webpack(打包文件 ，生成dist)

## 手动配置webpack
- 默认配置文件的名字 webpack.config.js
```
let path=require('path');
module.exports={ 
    mode:"production",
    entry:'./src/index.js',//入口
    output:{
        filename:'main.js',//打包后的文件名
        path:path.resolve(__dirname,'dist'),//路径必须是一个绝对路径
    }
}
```
- 执行 npx webpack 
- 自定义命令
- 在package.json中添加
```
 "scripts":{
    "xxx":"XXXX",
    "bulid": "webpack --config webpack.config.js"//相当于npx webpack
}
```
- 执行npm run xxx
## 下载webpack-dev-server
- 引入
> yarn add webpack-dev-server -D
- 使用
> npx webpack-dev-server
- 手动配置
- - 在scripts中添加
> "dev": "webpack-dev-server"
- - 在配置文件package-config.js中 配置其他属性
```
module.exports={
    devServer:{//开发服务器的配置
        port:3000,//自定义端口号
        progress:true,//在内存中打包可以看到一个进度条
        contentBase:'./dist'
    },
```
> 执行： npm run dev
## 对src下的HTML文件打包并配置
- 引入插件
> let HtmlWebpackPlugin=require('html-webpack-plugin');
- 下载插件
> yarn add html-webpack-plugin -D
- - 在配置文件package-config.js中 配置其他属性
```
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
```
- - 执行指令 npm run dev 将文件打包
## 对src下的css文件打包并配置
- 下载包
> yarn add css-loader style-loader -D
- 将css文件引入到js文件中
> require('./index.css');
- 在配置文件package-config.js中 配置其他属性
```
module:{//模块
        rules:[//规则： css-loader 解析@import这种语法的
            //style-loader 他是把css插入到head的标签中
            //loader的特点，希望功能单一
            //loader的用法，字符串只用一个loader
            //多个loader需要【】
            //loader的顺序，默认是从右向左执行 从下到上
            //loader还可以写成对象方式
        {
            test:/\.css$/,use:[
                { loader:'style-loader'},
                'css-loader']
        }
        ]

    }
```
- 依次执行
>- npm run bulid
>- npm run dev
## 抽离css插件(即将css文件打包到dist文件下面)
- 上一个的引入只是将代码进入到文件里，并没有打包成文件
- 安装并引入
> yarn add mini-css-extract-plugin -D
> let MiniCssExtractPlugin=require('mini-css-extract-plugin')
- 在配置文件package-config.js中 配置其他属性
- - 在plugins:数组中添加类
```
new MiniCssExtractPlugin({
            filename:'main.css',
            
        })
```
- 修改module:{
    ```
    module:{//模块
        rules:[
        {
            test:/\.css$/,use:[
                MiniCssExtractPlugin.loader,
                'css-loader']
        }
        ]

    }
    ```
- 运行 npm run bulid
>  会在dist下生成main.js文件





