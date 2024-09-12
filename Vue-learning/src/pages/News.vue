<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <RouterLink to="/news/detail"> {{ news.title }} </RouterLink>
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