<script setup lang="ts">
import MidTerm20222 from './assets/summary-for-mid-term-2022-2.md'
import Term20221 from './assets/summary-for-term-2022-1.md'
import { ElMessageBox, ElLoading } from 'element-plus'
import { ref, onMounted } from 'vue'
// console.log(midterm)
let checked = ref(false)
onMounted(() => {
  ElMessageBox.prompt('请输入密码', '验证', {
    // icon: 'warning',
    center: true,
    inputType: 'password',
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    inputValidator: (val: string) => (val === 'b4f96748-db2d-558a-8a84-c6cfc1be41eb' ? true : '密码错误'),
    inputPlaceholder: '请输入暗号',
    draggable: true,
    roundButton: true,
    showClose: false,
    showCancelButton: false,
    confirmButtonText: '确定',
    lockScroll: true,
  }).then(value => {
    if (value.value === 'b4f96748-db2d-558a-8a84-c6cfc1be41eb') {
      const loader = ElLoading.service({
        text: '正在为您呈现期中复习提纲，请稍后...',
      })
      setTimeout(() => {
        checked.value = true
        loader.close()
      }, 3000)
    }
  })
})
let panel = ref('')
</script>

<template>
  <div v-if="checked" @contextmenu.prevent @keyup.ctrl.p.prevent @keydown.ctrl.p.prevent @keyup.ctrl.v.precent>
    <el-tabs tab-position="left" v-model="panel">
      <el-tab-pane label="初二上期末"><v-md-editor v-model="Term20221" mode="preview"></v-md-editor></el-tab-pane>
      <el-tab-pane label="初二下期中"><v-md-editor v-model="MidTerm20222" mode="preview"></v-md-editor></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
