# vue中使用子路由
## 本文件夹复制自webpack-vue-router
* 1、在src文件下创建subcom文件夹（里面放置子路由组件）
* 2、在index.js文件下引入子路由组件
```
import login from "./subcom/Login.vue"
import register from "./subcom/Register.vue"
```
* 3、在index.js下添加子路由
```
var router = new VueRouter({
    routes:[
        {path: '/account',
        component:account,
        children:[
            {path:'login',component: login},
            {path:'register',component: register}
        ]
        
    },
        {path: '/goodslist',component:goodslist}
    ]
})
```
* 4、在account组件中添加子组件
```
<template>
    <div>
        <h1>这是 Account 组件</h1>
        
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
    
</template>
```
* 5、最后
> npm run bulid
> > npm run dev

## 组件中style标签中 scoped 和 lang 属性
* scoped属性
> 在任何组件中在style标签中设置样式，默认设置的样式是全局的（即所有组件都会有这个样式），在style标签上添加scoped属性可以将style标签中的样式设置为局部（即本标签）
```
<style scoped>
    div{
        color: red;
    }
</style>
```
* lang属性
> 普通的style标签只支持普通的css样式，如果要启用scss 或 less 就要 添加lang属性
```
<style scoped lang="lass">
    body{
        div{
        color: red;
    }
    }
</style>

```
## 抽离路由模块
* 在src下新建一个router.js模块
> 将路由模块放进去
