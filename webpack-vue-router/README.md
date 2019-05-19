# vue中使用路由
## 本文件夹复制自webpack-vue
* 1、下载包
> yarn add vue-router
* 2、引用包
> import VueRouter from "vue-router"
* *注意*(必须添加这一句)
```
//手动安装vuerouter
Vue.use(VueRouter)
```
* 3、在src下创建main文件夹
* * 其中放的是路由要跳转的.vue文件
* 4、引入组件
* * 其中App.vue是主组件（写在src文件夹下）
```
import app from "./App.vue"
import account from "./main/Account.vue"
import goodslist from "./main/GoodsList.vue"
```
* 5、创建路由对象
```
//创建路由对象
var router = new VueRouter({
    routes:[
        {path: '/account',component:account},
        {path: '/goodslist',component:goodslist}
    ]
})
```
* 6、将组件挂载（render）到页面上
```
let vm = new Vue({
    el:'#app',
    data:{
    },
  
    render:c => c(app),//在强调一遍：render 会把 el 指定的容器内的内容都清空覆盖，所以， 不要把路由的router-view 和router-link 直接写到el 所控制的元素中
    router//将路由对象挂载到vm上,很重要不能不写
})
```
* 7、将main下的组件添加到App组件中
```
//App组件
<template>
    <div>
        <h1>这是App组件——{{msg}}</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
```
###注意
* App这个组件，是通过VM 实例的 render函数渲染出来的，render 函数如果要渲染组件，渲染出来的组件只能放到el:#app 所制定的元素中
Account和GoodsList 组件，是通过 路由匹配监听到的，所以，这两个组件，只能展示到 属于 路由<router-view></router-view>中去
