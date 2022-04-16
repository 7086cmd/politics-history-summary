import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import markdown from './src/plugins/markdown/index'
import prismjs from 'vite-plugin-prismjs'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    markdown,
    prismjs({
      languages: ['javascript', 'css', 'cpp', 'c', 'html', 'typescript', 'java', 'rust', 'go', 'python', 'json', 'yaml', 'graphql', 'markdown'],
      plugins: ['line-numbers', 'copy-to-clipboard'],
      theme: 'default',
      css: true,
    }),
  ],
})
