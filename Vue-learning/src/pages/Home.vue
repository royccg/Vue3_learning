<script setup lang="ts">
    import { onMounted } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter()  // 路由器

    //  编程式导航：停留3s之后，跳转 到 news
    onMounted(() =>{
        setTimeout(() =>{
            router.push("/news")}, 3000
        )
    })
</script>

<template>
<div class="home">
    <img src="https://pss.bdstatic.com/static/superman/img/logo/logo_white-d0c9fe2af5.png" alt="">
</div>
</template>
