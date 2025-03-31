<template>
  <el-aside :width="width">
    <el-menu
      background-color="#545c54"
      text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="activeMenu"
    >
      <h3 v-show="!isCollapse">后台管理系统</h3>
      <h3 v-show="isCollapse">后台</h3>
      <!-- 渲染无子页item-->
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
        @click="handleMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <!-- 渲染有子页item-->
      <el-sub-menu
        v-for="item in hasChildren"
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <!-- 渲染子页的items-->
        <el-menu-item-group>
          <el-menu-item
            v-for="subItem in item.children"
            :index="subItem.path"
            :key="subItem.path"
            @click="handleMenu(subItem)"
          >
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAllDataStore } from '@/stores'
// const list = ref([
//   {
//     path: '/home',
//     name: 'home',
//     label: '首页',
//     icon: 'house',
//     url: 'Home',
//   },
//   {
//     path: '/mall',
//     name: 'mall',
//     label: '商品管理',
//     icon: 'video-play',
//     url: 'Mall',
//   },
//   {
//     path: '/user',
//     name: 'user',
//     label: '用户管理',
//     icon: 'user',
//     url: 'User',
//   },
//   {
//     path: 'other',
//     label: '其他',
//     icon: 'location',
//     children: [
//       {
//         path: '/page1',
//         name: 'page1',
//         label: '页面1',
//         icon: 'setting',
//         url: 'Page1',
//       },
//       {
//         path: '/page2',
//         name: 'page2',
//         label: '页面2',
//         icon: 'setting',
//         url: 'Page2',
//       },
//     ],
//   },
// ])

const list =computed(()=>store.stata.menuList)
import { useRoute,useRouter } from 'vue-router'
// 计算方法 分出有子页和没子页的 主页list.value引用数据
const noChildren = computed(() => list.value.filter((item) => !item.children))
const hasChildren = computed(() => list.value.filter((item) => item.children))
const store = useAllDataStore()
const isCollapse = computed(() => store.stata.isCollapse)
const width = computed(() => (store.stata.isCollapse ? '64px' : '180px'))
const handleMenu=(item)=>{
  router.push(item.path)
  store.selectMenu(item)
}
const route =useRoute()
const router =useRouter()
const activeMenu=computed(()=>route.path)
</script>

<style scoped lang="less">
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}

.el-aside {
  height: 100%;
  background-color: #545c54;
}
</style>
