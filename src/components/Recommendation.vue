<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Recommendation',
    setup() {

        return {}
    }
})
</script>

<template>
    <div class="recommendation">
        <div class="rec-col">
            <div class="rec-col-left">猜你喜欢</div>
            <div class="rec-col-right">
                <div class="rec-col-right-btn">
                    <div class="rec-col-right-cover"></div>
                    <div class="rec-col-right-pin"></div>
                </div>
                <div class="rec-col-right-text">自动播放</div>
            </div>
        </div>
        <div class="rec-main">
            <div class="rec-info">
                <div class="rec-info-text">标题</div>
                <div class="rec-info-btn">
                    <div class="btn">开始阅读</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.recommendation {
    width: 101%;
}
.rec-col {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.rec-col-left {
    margin: 0px 0px 5px 6px;
    font-size: 1.25rem;
    font-weight: 500;
}
.rec-col-right {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.rec-col-right .rec-col-right-btn {
    position: relative;
    width: 48px;
    height: 28px;
    border-radius: 14px;
    overflow: hidden;
}

.rec-col-right .rec-col-right-btn .rec-col-right-cover {
    width: 100%;
    height: 100%;
    opacity: 0.32;
    background: rgba(0, 0, 0, 0.38);
    border-radius: 14px;
}

.rec-col-right .rec-col-right-btn .rec-col-right-pin {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.35s;
}

.rec-col-right .rec-col-right-text {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.6);
}
.rec-main {
    width: 100%;
    max-height: 516px;
    height: 80vh;
    background-image: url(../assets/image/test.jpg);
    background-size: cover;
    border-radius: 10px;
    position: relative;
    overflow-x: hidden;
}
.rec-info {
    position: absolute;
    width: 100%;
    height: 124px;
    bottom: 40px;
    left: 40px;
    max-width: 184px;
}
.rec-info-text {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
}
.rec-info-btn {
    margin-top: 10px;
    width: 80px;
    height: 35px;
    background-color: rgba(207, 47, 19, 0.8);
    color: rgb(226, 225, 228);
    border-radius: 45px;
    border-style: hidden;
    display: table-cell;
    vertical-align: middle;
}
.rec-info-btn .btn {
    text-align: center;
}
</style>
