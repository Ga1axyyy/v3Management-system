<script setup>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTable from '@/components/CommonTable.vue'
import LeftAside from '@/components/leftAside.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 左侧自定义组件 -->
      <LeftAside />
      <el-container>
        <el-header class="el-header">
          <CommonHeader />
        </el-header>
        <CommonTable />
        <el-main class="right-main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout,
.lay-container {
  height: 100%;
}
.el-header {
  background-color: #333;
}
</style>
