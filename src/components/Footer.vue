<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch } from 'vue'


export default defineComponent({
  name: 'Footer',

})
</script>


<template>
<footer id="footer" class="footer">
   <div class="footer-meta">
    <div class="footer-container">
     <div class="meta-item meta-copyright">
      <div class="meta-copyright-info">
       <a href="" class="info-logo"> <img src="" /> </a>
       <div class="info-text">
        <p id="workWith"></p>
        <p>&copy; 2019 <a href="">1213</a></p>
       </div>
      </div>
     </div>
     <div class="meta-item meta-posts">
      <h3 class="meta-title">最新文章</h3>

     </div>
     <div class="meta-item meta-comments">
      <h3 class="meta-title">最新留言</h3>

     </div>
    </div>
   </div>
</footer>
</template>

<style scoped>
.footer {
    position: relative;
    z-index: 1;
    margin-bottom: 0;
    background-color: #fff
}
.footer-meta {
    padding: 50px 0 0;
    list-style: none
}

.footer-meta .footer-container {
    width: 100%;
    max-width: 960px;
    height: 250px;
    margin: 0 auto;
    padding: 0 80px
}

.footer-meta .meta-item {
    position: relative;
    float: left;
    width: 33.3333333%;
    min-height: 1px;
    padding: 0 30px
}

.footer-meta .meta-copyright .info-logo img {
    height: 32px;
    margin-bottom: 12px
}

.footer-meta .meta-copyright .info-text p {
    font-size: 13px;
    line-height: 20px;
    margin: 0;
    color: #767676
}

.footer-meta .meta-copyright .info-text a {
    color: #767676
}

.footer-meta .meta-title {
    font-size: 14px;
    padding: 0 0 10px 0;
    text-decoration: none;
    color: #5f5f5f
}

.footer-meta .meta-posts li {
    font-size: 13px;
    line-height: 25px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #767676
}

.footer-meta .meta-posts li a {
    color: #5f5f5f
}

.footer-meta .meta-comments li {
    font-size: 13px;
    line-height: 25px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #5f5f5f
}

.footer-meta .meta-comments li a {
    color: #767676
}
</style>
