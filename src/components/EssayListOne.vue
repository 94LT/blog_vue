<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
export default defineComponent({
    name: 'EssayListOne',
    props: ['essay']
})
</script>


<template>
    <div class="ess-main">
        <div class="ess-img"></div>
        <div class="ess-text">
            <div class="ess-text-title">这是一个标题</div>
            <div class="ess-text-date">十二月 17, 2020</div>
            <div
                class="ess-text-inst"
            >如果我可以死，在暖风拂动春意的此夜，像不久前白昼在我眼前，被漆夜一点点残忍吞噬掉一样，旋律扭曲在耳梁回环肆无忌惮，月光折射在琉璃间碎散，然后我蒙上眼眸，等候死...</div>

            <div class="ess-text-btn">
                <div class="ess-text-btn-l">开始阅读</div>
                <div class="ess-text-btn-r">
                    <div class="ess-text-btn-r-eye">
                        <i class="fas fa-eye"></i>
                        <span>450</span>
                    </div>
                    <div class="ess-text-btn-r-heart">
                        <i class="fas fa-heart"></i>
                        <span>450</span>
                    </div>
                    <div class="ess-text-btn-r-comment">
                        <i class="fas fa-comment-dots"></i>
                        <span>450</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ess-main {
    width: auto;
    min-height: 560px;
    border-radius: 10px;
    position: relative;
    overflow-x: hidden;
    margin-bottom: 20px;
}
.ess-img {
    height: 516px;
    background-image: url(../assets/image/test2.jpg);
    background-position: center;
    background-size: cover;
}
.ess-text {
    bottom: 0;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.8);
}
.ess-text-title {
    font-size: 1.25rem;
    padding: 24px 0 4px 12px;
}
.ess-text-date {
    padding: 0 12px;
    font-size: 0.75rem;
    color: rgb(156, 154, 154);
}
.ess-text-inst {
    padding: 12px;
    font-size: 0.9rem;
}
.ess-text-btn {
    padding: 0 12px;
    height: 40px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 1fr 1fr;
}
.ess-text-btn-l {
    cursor: pointer;
    color: rgba(207, 47, 19, 0.6);
    animation-name: breathe;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
@-webkit-keyframes breathe {
    0% {
        /* box-shadow: 0px 13px 30px -10px rgba(0, 0, 0, 0.8); */
        -webkit-transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        /* opacity: .4; */
    }
    50% {
        /* box-shadow: 0px 60px 30px -30px rgba(0, 0, 0, 0.3); */
        -webkit-transform: rotate3d(-30, 0, -10, 2deg)
            translate3d(2px, -2px, 30px);
        transform: rotate3d(-30, 0, -10, 2deg) translate3d(2px, -2px, 30px);
        /* opacity: 1; */
    }
    100% {
        /* box-shadow: 0px 13px 30px -10px rgba(0, 0, 0, 0.8); */
        -webkit-transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        /* opacity: .4; */
    }
}
@keyframes breathe {
    0% {
        /* box-shadow: 0px 13px 30px -10px rgba(0, 0, 0, 0.8); */
        -webkit-transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        /* opacity: .4; */
    }
    50% {
        /* box-shadow: 0px 60px 30px -30px rgba(0, 0, 0, 0.3); */
        -webkit-transform: rotate3d(-30, 0, -10, 2deg)
            translate3d(2px, -2px, 30px);
        transform: rotate3d(-30, 0, -10, 2deg) translate3d(2px, -2px, 30px);
        /* opacity: 1; */
    }
    100% {
        /* box-shadow: 0px 13px 30px -10px rgba(0, 0, 0, 0.8); */
        -webkit-transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        transform: rotate3d(0, 0, 0, 5deg) translate3d(0, 0, 0);
        /* opacity: .4; */
    }
}

.ess-text-btn-r {
    position: absolute;
    right: 0;
    display: flex;
}

.ess-text-btn-r-eye {
    padding: 0 12px;
    height: 28px;
    min-width: 50px;
    color: rgb(138, 141, 138);
}
.ess-text-btn-r-eye i {
    font-size: 1.25rem;
    vertical-align: middle;
}
.ess-text-btn-r-eye span {
    padding-left: 4px;
    font-size: 0.9rem;
    vertical-align: middle;
}
.ess-text-btn-r-eye {
    padding-right: 12px;
    height: 28px;
    min-width: 50px;
    color: rgb(138, 141, 138);
}
.ess-text-btn-r-eye i {
    font-size: 1.25rem;
    vertical-align: middle;
}
.ess-text-btn-r-eye span {
    padding-left: 4px;
    font-size: 0.9rem;
    vertical-align: middle;
}
.ess-text-btn-r-heart {
    padding-right: 12px;
    height: 28px;
    min-width: 50px;
    color: rgb(138, 141, 138);
}
.ess-text-btn-r-heart i {
    font-size: 1.25rem;
    vertical-align: middle;
    animation-name: beat;
    animation-duration: 3s;  
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;  
    -webkit-animation-timing-function:ease-in-out;
}
/* @keyframes beat 之间多一个空格都不行 */
@keyframes beat {
    0% {
        transform: scale(1) ;
    }
    20% {
        transform: scale(1) ;
    }
    40% {
        transform: scale(1.2) ;
    }
    60% {
        transform: scale(1) ;
    }
    80% {
        transform: scale(1.2) ;
    }
    100% {
        transform: scale(1) ;
    }

}
.ess-text-btn-r-heart span {
    padding-left: 4px;
    font-size: 0.9rem;
    vertical-align: middle;
}
.ess-text-btn-r-comment {
    padding-right: 12px;
    height: 28px;
    min-width: 50px;
    color: rgb(138, 141, 138);
}
.ess-text-btn-r-comment i {
    font-size: 1.25rem;
    vertical-align: middle;
}
.ess-text-btn-r-comment span {
    padding-left: 4px;
    font-size: 0.9rem;
    vertical-align: middle;
}
</style>
