<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"> 
                    {{ news.title }} </RouterLink> -->

                <!-- 第二种写法 -->
                <!-- <RouterLink :to="{
                    path: '/news/detail',
                    query:{
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }">
                    {{ news.title }} 
                </RouterLink> -->

                <!-- params写法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">
                    {{ news.title }}
                </RouterLink> -->
                <button @click="showNewsDetail(news)">News</button>  <!--传入 news -->
                <RouterLink :to="{
                    name: 'xinwen_detail',
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
    import { RouterView, RouterLink, useRouter } from "vue-router";

    const newsList = reactive([
        { id: "news01", title: "横号的啊三分大赛", content: "asdfas " },
        { id: "news02", title: "横号的啊三分大赛1231", content: "asdfasdsaf" },
        { id: "news03", title: "横号的啊三分大赛123", content: "asdfasasfa" },
        { id: "news04", title: "good news", content: "asdfasdasf" },
    ])

    const router = useRouter()
    interface NewsInter {
        id: string,
        title: string,
        content: string
    }
    function showNewsDetail(news:NewsInter){
        // router.replace({  //没有记录
        router.push({
            name: 'xinwen_detail',
            query:{
            id: news.id,
            title: news.title,
            content: news.content
            }
        })
    }

</script>