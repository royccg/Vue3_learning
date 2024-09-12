<template>
    <ul class="news-detail">
        <li> 编号： {{ query.id }} </li>
        <li> 标题： {{ query.title }} </li>
        <li> 内容： {{ query.content }} </li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
    import { toRefs } from "vue";
    import { useRoute } from "vue-router";
    let route = useRoute()
    let {query} = toRefs(route)  //解构 参数

</script>