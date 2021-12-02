<script >

import { defineComponent, ref, reactive, onMounted } from 'vue';
import Menu from '@/components/Menu.vue';
import $ from 'jquery'

export default defineComponent({
    name: 'SideBar',
    components: {
        Menu,
    },
    setup() {
        let text = ref('MENU');
        let isActive = ref(false)
        const menuDisplay = ref(false);
        const changeMenuDisplay = () => {
            menuDisplay.value = !menuDisplay.value;
        };
        var handleScroll = ()=>{
            var mainScroll = document.getElementById("main").offsetTop - 75
            // var mainScroll = 550
            let docScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(docScroll > mainScroll){
                text.value = ''
                isActive.value = true
            }else{
                text.value = 'MENU'
                isActive.value = false
            }
　　      
        }
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })
        return { text, isActive, menuDisplay, changeMenuDisplay }
    }
})
</script>

<template>
    <button
        class="menu-button"
        v-bind:class = "{ 'menu-button-scroll': isActive }"
        @click="changeMenuDisplay"
        v-if="!menuDisplay"
    >{{ text }}</button>
    <div class="sidebar" v-if="menuDisplay">
        <button class="close-button" @click="changeMenuDisplay">Close Menu</button>
        <Menu />
    </div>
</template>

<style>
.sidebar {
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    overflow-y: auto;
    padding: 40px 0 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.25s ease-out;
    width: 300px;
    z-index: 3;
}
.menu-button {
    position: fixed;
    z-index: 10;
    margin: 1em;
    padding: 0;
    width: 100px;
    height: 32px;
    text-indent: 2.5em;
    background: 0 0;
    top: 6px;
    left: 10px;
    outline: 0;
    cursor: pointer;
    color: rgb(12, 11, 11);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 3px;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 32px;
    padding-right: 13px;
    text-align: center;
}
.menu-button::before {
    position: absolute;
    top: 12px;
    right: 0.5em;
    bottom: 0.5em;
    left: 13px;
    width: 11px;
    height: 9px;
    content: "";
    background: linear-gradient(
        #fff 20%,
        transparent 20%,
        transparent 40%,
        #fff 40%,
        #fff 60%,
        transparent 60%,
        transparent 80%,
        #fff 80%
    );
}
.menu-button:hover {
    opacity: 0.6;
}
.menu-button-scroll {
    left: -5px;
    width: 33px;
    color: #777aaf;
    border: 0;
    background-image: linear-gradient(180deg, #fff, #f5f5fa);
    -webkit-box-shadow: 0 4px 11px -2px rgb(37 44 97 / 15%),
        0 1px 3px 0 rgb(93 100 148 / 20%);
    box-shadow: 0 4px 11px -2px rgb(37 44 97 / 15%),
        0 1px 3px 0 rgb(93 100 148 / 20%);
}

.menu-button-scroll:before {
    background: linear-gradient(
        #777aaf 20%,
        transparent 0,
        transparent 40%,
        #777aaf 0,
        #777aaf 60%,
        transparent 0,
        transparent 80%,
        #777aaf 0
    )
}

.close-button {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: fixed;
    margin-top: -2em;
    overflow: hidden;
    text-indent: 16px;
    border: none;
    z-index: 11;
    background: transparent;
    color: transparent;
}

.close-button::before,
.close-button::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgb(150, 150, 150);
}

.close-button::before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.close-button::after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>
