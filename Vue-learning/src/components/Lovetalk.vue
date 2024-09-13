<template>
    <div class="lovetalk">
        <button @click="get_lovetalk">情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from "vue";
import axios from "axios"
import {nanoid} from "nanoid"  // 类似与 uuid库

// https://api.uomg.com/api/rand.qinghua?format=json
// 数据
let talkList = reactive([
    {id:"asdfasfa01", content: "12312312312"}
])

async function get_lovetalk() {
    // 解包: {data}; {data:{content}}; {data:{content:xxx}} 解包+取值+重命名
    let {data} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    console.log(data)
    let obj = {
        id: nanoid(),
        content: data.content
    }
    talkList.unshift(obj)
}

</script>


<style scoped>
.lovetalk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

</style>
