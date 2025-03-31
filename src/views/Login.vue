<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { useAllDataStore } from '@/stores'
import { useRouter } from 'vue-router'
const loginForm = reactive({
  username: '',
  password: '',
})
const { proxy } = getCurrentInstance()
const store = useAllDataStore()
const router = useRouter()

const handleLogin = async () => {
  const res = await proxy.$api.getMenu(loginForm)
  console.log(res)
  store.updataMenuList(res.menuList)
  store.stata.token = res.token
  store.addMenu(router)
  router.push('/home')
  console.log(router)
}
</script>
<template>
  <div class="body-login">
    <el-form :model="loginForm" class="login-container">
      <h3>系统登录</h3>
      <img src="../assets/images/preview1.gif" />

      <el-form-item>
        <el-input
          type="input"
          placeholder="请输入账号"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.body-login {
  width: 100%;
  height: 100%;
  background: url('../assets/images/preview.gif');
  overflow: hidden;
}
.login-container {
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 120px auto;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
