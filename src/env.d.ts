/// <reference types="vite/client" />
declare module '@kangc/v-md-editor';
declare module '@kangc/v-md-editor/lib/preview-html';
declare module '@kangc/v-md-editor/lib/theme/vuepress.js';

declare module 'prismjs';

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
