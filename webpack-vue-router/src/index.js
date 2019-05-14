
// 入口文件

import Vue from "vue"
import VueRouter from "vue-router"
//手动安装vuerouter
Vue.use(VueRouter)


// 1、导入login组件
import app from "./App.vue"
import account from "./main/Account.vue"
import goodslist from "./main/GoodsList.vue"

//创建路由对象
var router = new VueRouter({
    routes:[
        {path: '/account',component:account},
        {path: '/goodslist',component:goodslist}
    ]
})

let vm = new Vue({
    el:'#app',
    data:{
    },
  
    render:c => c(app),//在强调一遍：render 会把 el 指定的容器内的内容都清空覆盖，所以， 不要把路由的router-view 和router-link 直接写到el 所控制的元素中
    //将路由对象挂载到vm上

})

