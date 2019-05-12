# 太不容易了
## 先看看需要安装的包
```
{
  "name": "webpack-4",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "bulid": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },
  "devDependencies": {
    "css-loader": "^2.1.1",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.6.0",
    "style-loader": "^0.23.1",
    "vue": "^2.6.10",
    "vue-loader": "^15.7.0",
    "webpack": "^4.30.0",
    "webpack-cli": "^3.3.1",
    "webpack-dev-server": "^3.3.1"
  },
  "dependencies": {
    "vue-template-compiler": "^2.6.10"
  }
}
```
### 需要注意的点
* js文件引入vue
```
import Vue from "vue"
import login from "./login.vue"
```
* 想要通过vue把一个组件放到页面中去，需要使用render函数
```
let vm = new Vue({
    el:'#app',
    data:{
        msg:'在webpack尝试使用Vue'
    },
    // components:{
    //     login
    // }
    // 在webpack中，如果想要通过vue把一个组件放到页面中去，需要使用render函数
    // render:function(createElements){
    //     return createElements(login)
    // },
    // 简写
    render:c => c(login),

})
```
* vue-loader依赖css-loader，所以继续装css-loader
* 配置文件里配置vue
```
 module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
```
* 还要在配置里添加css-loader，因为webpack只认识js
```
module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader'
        }]
    },
```
* 最后要加一个VueLoaderPlugin，说是vue-loader在15.*之后的版本都是需要伴随VueLoaderPlugin使用的。所以最终webpack.config.js如下：
```
var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
 
module.exports = {
   .......;
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
再运行就ok了！

