<script setup>
import 'element-plus/dist/index.css'
import { ElMessage, ElMessageBox } from 'element-plus'

const showMessage = () => {
  ElMessage({
    message: '这是一个测试消息!',
    type: 'success', // 消息类型，可以是 success, error, info, warning
    duration: 3000, // 持续时间，单位为毫秒
  })
}
</script>
<template>
  <el-button @click="showMessage">点击我显示消息</el-button>
</template>

<style scoped lang="less"></style>
