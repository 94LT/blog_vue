<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import ChatListOne from '@/components/ChatListOne.vue';

import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'ChatList',
    components: {
        ChatListOne
    },
    setup() {
        const router = useRouter()
        // var postList: Ref = ref(null)
        // const res = axios
        //   .post(
        //     'http://127.0.0.1:8001/api/post/posts',
        //     { "page": 1, "limit": 20 }
        //   )
        //   .then((response) => {
        //     postList.value = response.data
        //   })
        //   .catch((error) => {
        //     console.error(error)
        //   })
        var chatList = [{ 'id': 1, 'title': "test1" }, { 'id': 2, 'title': "test1" }, { 'id': 3, 'title': "test1" }]
        return { chatList }
    }
})

</script>

<template>
    <div class="chatList">
        <div class="cha-col">
            <div class="cha-col-left">最近碎语</div>
        </div>
        <ChatListOne v-for="chat in chatList" v-bind:key="chat.id" v-bind:chat="chat"></ChatListOne>
    </div>
</template>



<style scoped>
.chatList {
    width: 100%;
}
.cha-col {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cha-col-left {
    margin: 0px 0px 5px 6px;
    font-size: 1.25rem;
    font-weight: 500;
}
</style>
