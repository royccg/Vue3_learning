<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select name="count_opt" id="count-opt" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add_func">加</button>
    <button @click="minus_func">减</button>

  </div>
</template>

<script lang="ts" setup name="Count">
import { ref } from "vue";
import { useCountStore } from "@/store/Count";

const countStore = useCountStore()
// 数据
let n = ref(1)

function add_func() {
  // 第一种修改方式
  // countStore.sum += n.value  // n.value

  // 第二种修改方式 patch 批量变更
  // countStore.$patch({
  //   sum: 888
  // })

  // 第三种： 模板的复用
  countStore.increment(n.value)
}
function minus_func() {
}


</script>


<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
