// 创建一个路由器，并暴露出去
import { createRouter, createWebHistory } from "vue-router";

// 引入组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";


// 第二步： 创建路由器
const router = createRouter({
    history: createWebHistory(), //路由器的工作模式
    routes:[ //路由规则
        {
            name:"Home page",
            path: "/home",
            component: Home
        },
        {
            name: "xinwen",
            path: "/news",
            component: News,
            children:[
                {
                    name:"xinwen_detail",
                    // path: "detail/:id/:title/:content", //子集不用加 第一种写法
                    path: "detail", //子集不用加 第二种写法
                    component: Detail,

                    // 第一种写法： 将路由收到的所有params参数作为props传给路由组件
                    // props: true

                    // 第二种写法：函数写法 可以自己决定将什么作为props给路由组件
                    props(route){
                        return route.query
                    }
                }
            ]
        },
        {
            path: "/about",
            component: About
        },
    ]
})

//暴露路由
export default router