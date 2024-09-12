<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"> 
                    {{ news.title }} </RouterLink> -->

                <!-- 第二种写法 -->
                <RouterLink :to="{
                    path: '/news/detail',
                    query:{
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }">
                    {{ news.title }} 
                </RouterLink>

            </li>
        </ul>

        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import { RouterView, RouterLink } from "vue-router";

    const newsList = reactive([
        { id: "news01", title: "横号的啊三分大赛", content: "asdfas " },
        { id: "news02", title: "横号的啊三分大赛1231", content: "asdfasdsaf" },
        { id: "news03", title: "横号的啊三分大赛123", content: "asdfasasfa" },
        { id: "news04", title: "good news", content: "asdfasdasf" },
    ])

</script>