<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
export default defineComponent({
    name: 'EssayListOne',
    props: ['essay']
})
</script>


<template>
    <div class="cha-main">
        <div class="cha-header">
            <div class="cha-header-l">
                <div class="cha-header-l-ava"></div>
                <div class="cha-header-l-inf">
                    <div class="cha-header-l-inf-t">
                        <div class="cha-header-l-inf-name">LT</div>
                        <div class="cha-header-l-inf-date">1 个月前</div>
                    </div>
                    <div class="cha-header-l-inf-b">学习中~~~</div>
                </div>
            </div>
            <div class="cha-header-r">
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="cha-content">
            <div class="cha-content-text">
                 昨晚本站遭不明人士两个境外IP的CC攻击😂，造成一段时间网站的访问不稳定，现已屏蔽修复。
            </div>  
        <img src="../assets/image/chat.png" alt="?0?">         
        </div>  
        <div class="cha-footer">
            <div class="cha-footer-text">
                <span>7个喜欢</span>
                <i class="fas fa-circle-notch"></i>
                <span>1个评论</span>
            </div>
            
            <div class="cha-footer-items">
                <div class="cha-footer-items-con">
                    <div class="cha-footer-item">
                        <div class="cha-footer-item-con">
                            <i class="fas fa-heart"></i> 喜欢
                        </div>
                        
                    </div>
                    <div class="cha-footer-item">
                        <div class="cha-footer-item-con">
                            <i class="fas fa-comment-dots"></i> 评论
                        </div>                       
                    </div>
                    <div class="cha-footer-item">
                        <div class="cha-footer-item-con">
                            <i class="fas fa-share-alt"></i> 转发
                        </div>                       
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<style scoped>
.cha-main {
    width: 100%;
    border-radius: 10px;
    position: relative;
    overflow-x: hidden;
    margin-bottom: 15px;
    background-color: #fff;
    padding: 6px;
}
.cha-header {
    min-height: 42px;
    position: relative;
}
.cha-header-l {
    height: 100%;
    position: absolute;
    left: 0;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-align:center;
    -moz-box-align:center;
}
.cha-header-l-ava {
    width: 36px;
    height: 36px;
    background-image: url('../assets/image/ava.jpeg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}
.cha-header-l-inf {
    height: 100%;
}
.cha-header-l-inf-t {
    height: 50%;
    font-size: 0.75rem;
    color: #777;
    white-space:nowrap;
}
.cha-header-l-inf-b {
    height: 50%;
    font-size: 0.75rem;
    color: #777;
    white-space:nowrap;
    padding: 2px;
}
.cha-header-l-inf-name {
    padding: 2px;
    font-size: 0.95rem;
    font-weight:600;
    color: rgb(54, 53, 53);
    display:inline;
    text-shadow: 1px 1px 2px rgb(150, 147, 147);
}
.cha-header-l-inf-date {
    padding: 2px 2px 2px 8px;
    display:inline;
}

.cha-header-r {
    position: absolute;
    right: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
}
.cha-header-r i{
    font-size: 0.9rem;
    color: rgba(120, 120, 120, 0.7);
}
.cha-header-r:hover {
    border-radius: 50%;
    background-color: rgba(120, 120, 120, 0.2);
    cursor: pointer;
}
.cha-content {
    padding: 6px;
}
.cha-content-text {
    font-size: 0.8rem;
    color: rgba(2, 2, 2, 0.87);
}
.cha-content img {
    width: 100%;
    height: 100%;
    max-width: 460px;
    background-color: rgba(201, 197, 197, 0.3);
    border-radius: 12px;
}
.cha-footer {
    padding: 0 6px;
    font-size: 0.9rem;
    color: rgba(120, 120, 120, 0.8);
}
.cha-footer-text {
    padding: 0 8px;
}
.cha-footer i{
    margin: 0 4px;
    font-size: 0.75rem;
    color: rgba(13, 13, 13, 0.9);
}
.cha-footer-items {
    cursor: pointer;
    padding: 12px 0 6px 0;
    width: 100%;
    height: 36px;  
}
.cha-footer-items-con { 
    display: flex;
    height: 36px;  
}
.cha-footer-item {
    flex: 33%;
    margin: 0 2px;
    border-radius: 6px;
    background-color: rgba(201, 197, 197, 0.2);
    display: flex;
}
.cha-footer-item:hover {
    background-color: rgba(201, 197, 197, 0.4);
}
.cha-footer-item-con {
    margin: auto;
}
</style>
