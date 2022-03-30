<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import PostListOne from '@/components/PostListOne.vue';
import RightMenu from '@/components/RightMenu.vue'
// import Fish from '@/components/Fish.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PostListPage',
  components: {
    Header,
    SideBar,
    PostListOne,
    RightMenu,
    // Fish,
  },
  setup() {
    const router = useRouter()
    const login = (() => {
      router.push("./login")
    })
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
    var postList = [{'id':1, 'title':"test1" },{'id':2, 'title':"test1" },{'id':3, 'title':"test1" },{'id':4, 'title':"test1" },]
    return { postList, login }
  }
})

</script>

<template>
  <Header />
  <SideBar />
  <div class="postList" id="main">
    
  </div>
  <RightMenu />
  <!-- <Fish /> -->
</template>



<style scoped>
.postList {
  margin-top: 30px;
  width: 90%;
  text-align: left;
  margin: 30px auto;
  background-color: rgb(250, 250, 250);
}
</style>
