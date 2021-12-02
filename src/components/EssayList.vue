<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import EssayListOne from '@/components/EssayListOne.vue';

import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'EssayList',
    components: {
        EssayListOne
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
        var essaytList = [{ 'id': 1, 'title': "test1" }, { 'id': 2, 'title': "test1" }, { 'id': 3, 'title': "test1" }, { 'id': 4, 'title': "test1" },]
        return { essaytList }
    }
})

</script>

<template>
    <div class="essayList">
        <div class="ess-col">
            <div class="ess-col-left">猜你喜欢</div>
            <div class="ess-col-right">
                <div class="ess-col-right-btn">
                    <div class="ess-col-right-cover"></div>
                    <div class="ess-col-right-pin"></div>
                </div>
                <div class="ess-col-right-text">示-列表</div>
            </div>
        </div>
        <EssayListOne v-for="essay in essaytList" v-bind:key="essay.id" v-bind:essay="essay"></EssayListOne>
    </div>
</template>



<style scoped>
.essayList {
    width: 100%;
}
.ess-col {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ess-col-left {
    margin: 0px 0px 5px 6px;
    font-size: 1.25rem;
    font-weight: 500;
}
.ess-col-right {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.ess-col-right .ess-col-right-btn {
    position: relative;
    width: 48px;
    height: 28px;
    border-radius: 14px;
    overflow: hidden;
}

.ess-col-right .ess-col-right-btn .ess-col-right-cover {
    width: 100%;
    height: 100%;
    opacity: 0.32;
    background: rgba(0, 0, 0, 0.38);
    border-radius: 14px;
}

.ess-col-right .ess-col-right-btn .ess-col-right-pin {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.35s;
}

.ess-col-right .ess-col-right-text {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.6);
}
</style>
