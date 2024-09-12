<template>
    <ul class="news-detail">
        <!-- <li> 编号： {{ params.id }} </li>
        <li> 标题： {{ params.title }} </li>
        <li> 内容： {{ params.content }} </li> -->

        <li> 编号： {{ id }} </li>
        <li> 标题： {{ title }} </li>
        <li> 内容： {{ content }} </li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
    // import { toRefs } from "vue";
    // import { useRoute } from "vue-router";
    // let route = useRoute()
    // let {params} = toRefs(route)  //解构 参数

    defineProps(["id", 'title', 'content'])

</script>