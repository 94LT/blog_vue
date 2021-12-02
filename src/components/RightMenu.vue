<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'RightMenu',
    setup() {
        var toTop = (() => {         
            scrollTo(0,0);
        })
        return { toTop }
    }
})
</script>

<template>

    <div id="rightMenu">
        <!-- 设置 -->
        <div id="rightMenuSite" class="rightMenuItem">
            <span class="rightMenuSpan">点击开启</span>
            <div class="turn"><i banmv class="iconfont icon-shezhi3"></i></div>
            
        </div>
        <!-- 上下滚动 -->
        <div id="toUpDown" class="rightMenuItem">
            <span class="rightMenuSpan" >返回顶部</span>
            <i banmv class="iconfont icon-zhiding" @click="toTop"></i>
        </div>
         <!-- 上下滚动 -->
        <!-- <div id="toUpDown" class="rightMenuItem">
            <span class="rightMenuSpan" >返回顶部</span>
            <i banmv class="iconfont icon-mulu"></i>
        </div> -->
    </div>
</template>


<style scoped>
#rightMenu {
    right: 10px;
    text-align: center;
    position: fixed;
    bottom: 200px;
    min-width: 24px;
    z-index: 2;
    width: 40px;
}
.rightMenuItem {
    cursor: pointer;
    color: #777aaf;
    filter: Alpha(opacity=50) ;
    -webkit-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    position: relative;
    width: 28px;
    height: 28px;
    padding: 4px;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 4px;
    border-radius: 50%;
    display: block;
    -webkit-box-shadow: 0 4px 11px -2px rgb(37 44 97 / 15%),
        0 1px 3px 0 rgb(93 100 148 / 20%);
    box-shadow: 0 4px 11px -2px rgb(37 50 97 / 15%),
        0 1px 3px 0 rgb(93 100 148 / 20%);
}
.rightMenuItem:hover > .rightMenuSpan {
    display: block
}
 .rightMenuSpan {
    position: absolute;
    left: -95px;
    font-size: 14px;
    width: 83px;
    background: #1b1c1d;
    color: #fff;
    opacity: 0.9;
    white-space: nowrap;
    max-width: unset;
    border: 0;
    -webkit-box-shadow: 0 0 6px -1px rgba(140, 146, 163, .5);
    box-shadow: 0 0 6px -1px rgba(140, 146, 163, .5);
    font-weight: 400;
    font-style: normal;
    border-radius: 3px;
    text-align: center;
    display: none
}
.rightMenuSpan::before {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: #1b1c1d;
    box-shadow: rgba(179, 179, 179, .2) 1px -1px 0 0;
    box-sizing: border-box;
    color: #fff;
    content: "";
    display: block;
    height: 8.98px;
    margin-top: -3.9px;
    opacity: .9;
    position: absolute;
    transform: matrix(.707107, .707107, -.707107, .707107, 0, 0);
    white-space: nowrap;
    width: 8.98px;
    top: 50%;
    right: -.325em;
    bottom: auto;
    left: auto
}
.turn{
      animation:turn 2s linear infinite;      
    }
@keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
}
i {
    font-weight: 600;
    font-size: 16px;
}
</style>