
<template>
    <div>
        <h1>这是App组件——{{msg}}</h1>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"123"
            }
        },
        methods:{
            show(){
                console.log("调用了login.vue的show方法")
            }
        }
    }
    // 在ES6中，规定了如何 导入 和 导出 ，模块
    // ES6中导入模块，使用 import 模块名称 from "模块标识符"
    // 在ES5中，使用 export default 和 export 向外暴露成员
</script>

<style>
    
</style>