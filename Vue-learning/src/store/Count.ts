import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    // 放置 动作方法，用于响应组件中的 func
    actions:{
        increment(value){
            console.log("increment被调用了", value)
            //  this 是当前的 store
            this.sum += value
        }
    },

    // 存储数据的地方
    state(){
        return{
            sum: 1
        }
    }
})