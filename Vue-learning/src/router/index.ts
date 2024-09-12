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
                    path: "detail/:id/:title/:content", //子集不用加 /
                    component: Detail
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