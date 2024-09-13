import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore("talkList", {
    // 存储数据的地方
    state(){
        return{
            talkList :[
                { id: "asdfasfa01",
                content: "12312312312" }
            ]
        }
    }
})

