<script setup lang="ts">
import MidTerm20222 from './assets/summary-for-mid-term-2022-2.md'
import Term20221 from './assets/summary-for-term-2022-1.md'
import Term20222 from "./assets/summary-for-term-2022-2.md";
import { ElMessageBox, ElLoading } from 'element-plus'
import { ref, onMounted } from 'vue'
// console.log(midterm)
let checked = ref(false)
let panel = ref('index')
onMounted(() => {
  ElMessageBox.prompt('请输入验证暗号', '验证', {
    // icon: 'warning',
    center: true,
    inputType: 'password',
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    inputPlaceholder: '请输入验证暗号以查看',
    draggable: true,
    roundButton: true,
    showClose: false,
    showCancelButton: false,
    confirmButtonText: '确定',
    lockScroll: true,
  }).then(value => {
    if (value.value === '445250d7-6b4b-4ebe-8549-e9f2d4a7976b') {
      checked.value = true;
      panel.value = "21f";
    } else if (value.value === "e6708dd7-2336-4b09-af0e-9f74d764c95c") {
      checked.value = true;
      panel.value = "22m";
    } else if (value.value === "3cc4424a-80e5-4c20-9b13-54a878824dc0") {
      checked.value = true;
      panel.value = "22f";
    } else {
      window.location.reload();
    }
  });
})
</script>

<template>
  <div v-if="checked" @contextmenu.prevent @keyup.ctrl.p.prevent @keydown.ctrl.p.prevent @keyup.ctrl.v.precent>
    <el-tabs tab-position="right" type="card" v-model="panel">
      <el-tab-pane value="index" label="首页">请选择内容。</el-tab-pane>
      <el-tab-pane value="21f" label="初二上期末"><v-md-editor v-model="Term20221" mode="preview"></v-md-editor></el-tab-pane>
      <el-tab-pane value="22m" label="初二下期中"><v-md-editor v-model="MidTerm20222" mode="preview"></v-md-editor></el-tab-pane>
      <el-tab-pane value="22f" label="初二下期末"><v-md-editor v-model="MidTerm20222" mode="preview"></v-md-editor></el-tab-pane>
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
