<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import MarkdownShow from '@/components/MarkdownShow.vue';
import axios from 'axios'

export default defineComponent({
  name: 'PostPage',
  props: {
      postId: Number
  },
  components: {
    Header,
    SideBar,
    MarkdownShow
  },
  setup(props){
    var post: Ref = ref(null)
    var url = `http://127.0.0.1:8001/api/post/${props.postId}`
    const res = axios
        .get(url)
        .then((response) => {
           post.value = response.data
        })
        .catch((error) => {
        console.error(error)
    })
    return { post }
    }
})

</script>

<template>
<Header />  
<SideBar />
<div class="post">
    <MarkdownShow :html="post.body" />
</div>
</template>



<style scoped>
.post {
    margin-top: 30px;
    width: 90%;
    text-align: left;
    margin: 30px auto;
    background-color: rgb(250, 250, 250);
}
</style>
