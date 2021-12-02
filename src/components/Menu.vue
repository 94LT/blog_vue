<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Menu',
})
</script>

<template>
<div class="menu-container">
   <div class="menu-wrap">
       <div class="intro">
            <div class="intro-img">
                <img src="../assets/image/touxianga.bmp" alt="">
            </div>
            <div class="intro-text">    
                昵称：<a href="">hhhhhhhhhhh</a>
                <br>
                性别：<a href="">121212121</a>
            </div>
       </div>
       <div class="menu-item">
                首页: 
        </div>
   </div>
</div>

</template>

<style scoped>
.menu-container{
	width: 100%;
	height: 100%;
    background: rgba(190, 190, 179, 0.4);
    position: fixed;
    top: 0;
}
.menu-wrap {
    position: fixed;
    z-index: 5;
    width: 295px;
    height: 100%;
    font-size: 1.15em; 
    top: 0;
    left: 0;
	overflow: auto;
    max-height: 100vh;
    background-image: linear-gradient(rgb(0, 0, 0, 1), rgba(50, 50, 50, 0.95));
}
.intro {
    position: relative;
    z-index: 12;
    padding: 2em 1em 10em 0;
    background-image: linear-gradient(rgba(27, 26, 26, 0.5), rgba(88, 88, 85, 0.4)), url(../assets/image/menu_bg.gif);
    background-size: 100%;
    
}
.intro-img {
    top: 0;
    width: 100%;
    margin-top: 20px;
    text-align: center
}
.intro-img img {
    width: 70px;
    height: 70px;
    padding: 1px;
    border: 3px solid rgba(255, 255, 255, .5);
    border-radius: 100%;
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, .3), 0 2px 3px rgba(0, 0, 0, .4);
    transition: transform 1s ease-out
}
.intro-img img:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    transform: rotateZ(360deg)
}
.intro-text {
    padding-left: 85px;
    margin-top: 10px
}
.intro-text a {
    margin-left: 10px;
    color: #f5f5f5;
    line-height: 20px;
    text-decoration:none
}
.menu-item {
    padding-left: 20px;
    margin-top: 10px;
}

</style>