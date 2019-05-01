//这是main.js 使我们项目的js入口文件
//1、导入Jquery
//import *** from ***是ES6中导入模块的方式
//由于ES6的代码太高级了  浏览器解析不了 所以这一行会报错
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})


//经过刚才的演示，webpack 可以做什么事情
//1、webpack 能够处理 js 文件相互的依赖关系；
//2、webpack能够处理js的兼容性问题，把高级的，浏览器不支持的语法，转为 低级的 ，浏览器能正常识别的语法

//刚才的命令格式  ：  webpack  要打包的文件的路径  打包好的文件路径