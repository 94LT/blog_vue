<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

export default defineComponent({
  name: 'MarkdownShow',
  props: {
    html: String
  },
  setup(props) {
      const html1 = xss.process(VueMarkdownEditor.vMdParser.themeConfig.markdownParser.render(props.html));
      return { html1}
  }
})
</script>

<template>
<v-md-preview-html :html="html1" preview-class="vuepress-markdown-body"></v-md-preview-html>  
</template>


<style scoped>

</style>

