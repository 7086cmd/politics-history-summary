/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md'

declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/*'
declare module '@kangc/v-md-editor/lib/plugins/*'
declare module '@kangc/v-md-editor/lib/preview'
