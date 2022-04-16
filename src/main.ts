import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import Prism from 'prismjs'
import VueMarkdownEditor from '@kangc/v-md-editor'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn'
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  // extend(md: MarkdownIt) {
  //   md.set({
  //     html: true,
  //     breaks: true,
  //   })
  //   md.use(SubPlugin)
  //   md.use(SupPlugin)
  //   md.use(FootnotePlugin)
  //   md.use(InsPlugin)
  //   md.use(MarkPlugin)
  //   md.use(AbbrPlugin)
  // },
})
VueMarkdownEditor.use(createEmojiPlugin())
VueMarkdownEditor.use(createKatexPlugin())
VueMarkdownEditor.use(createTodoListPlugin())
VueMarkdownEditor.use(createCopyCodePlugin())
VueMarkdownEditor.use(createMermaidPlugin())
VueMarkdownEditor.use(createAlignPlugin())
VueMarkdownEditor.use(createLineNumbertPlugin())

createApp(App).use(VueMarkdownEditor).use(ElementPlus).mount('#app')
