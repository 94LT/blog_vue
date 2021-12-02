<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'MarkdownEditor',
  setup() {
    var title: Ref = ref("");
    var desc: Ref = ref("");
    var content: Ref = ref("");

    var commit = (() =>{
       axios.post(
      "http://127.0.0.1:8001/api/post/save",
     {
      "title": title.value,
      "description": desc.value,
      "body": content.value,
    }
      ).catch(
        (error) => {console.error(error)}
      )
    })
    return { content, title, desc, commit }
  }
})
</script>

<template>
  <div>
    标题
    <input type="text" v-model="title" />
  </div>
  <div>
    简介
    <input type="text" v-model="desc" />
  </div>
  <div>
    内容
    <v-md-editor v-model="content" height="400px"></v-md-editor>
  </div>
  <div>
    <button @click="commit">提交</button>
  </div>
</template>


<style scoped>
.editor-btn {
  margin-top: 20px;
}
.title {
  padding-bottom: 30px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 1px;
  color: #333;
  font-weight: 600;
}
</style>

