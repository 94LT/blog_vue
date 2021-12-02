import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import router from './router';
import store from './store';
import '@/assets/style/main.css';
import '@/assets/style/fonticon.css'

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

router.beforeEach((to, from, next) => {
  store.commit('isLodingTrue')
  next();
});
// 这里为了让效果明显一些加了延时
router.afterEach((to, from) => {
  setTimeout(function() {
    store.commit('isLodingFalse');
  }, 1000);
});

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueMarkdownEditor)
app.use(VMdPreviewHtml)
app.mount('#app')
