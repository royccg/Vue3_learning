<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
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

// 数据
let sum = ref(1)
let n = ref(1)

function add_func() {
  sum.value += n.value
}
function minus_func() {
  sum.value -= n.value
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
