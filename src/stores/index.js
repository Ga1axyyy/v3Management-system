import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'




function initState() {
  return {
    isCollapse: true,
    tags: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home',
      },
    ],
    currentMenu: null,
    menuList: [],
    token: "",
    routerList: [],
  }
}

export const useAllDataStore = defineStore('allData', () => {
  //stata属性
  const stata = ref(initState())
  //computed属性
  watch(stata, (newObj) => {
    if (!newObj.token) return
    localStorage.setItem("store", JSON.stringify(newObj))
  },
    { deep: true }
  )
  //function
  function selectMenu(val) {
    console.log(val)
    if (val.name === 'home') {
      stata.value.currentMenu = null
    }
    else {
      stata.value.currentMenu = val
      let index = stata.value.tags.findIndex(item => item.name === val.name)
      if (index === -1) stata.value.tags.push(val)
    }
  }
  function updataTags(tag) {
    let index = stata.value.tags.findIndex(item => item.name === tag.name)
    stata.value.tags.splice(index, 1)
  }

  function updataMenuList(val) {
    stata.value.menuList = val;
  }

  function addMenu(router, type) {
    if (type === 'refresh') {
      if (JSON.parse(localStorage.getItem('store'))) {
        stata.value = JSON.parse(localStorage.getItem('store'))
        stata.value.routerList = []
      } else { return }
    }
    const menu = stata.value.menuList
    const module = import.meta.glob('../views/**/*.vue')
    const routeArr = []
    menu.forEach(item => {
      if (item.children) {
        item.children.forEach(val => {
          let url = `../views/${val.url}.vue`
          val.component = module[url]
          routeArr.push(...item.children)
        })
      } else {
        let url = `../views/${item.url}.vue`
        item.component = module[url]
        routeArr.push(item)
      }
    })
    console.log(router.getRoutes())
    //动态路由
    const routers = router.getRoutes()
    routers.forEach(item => {
      if (item.name === 'main' || item.name === 'login' || item.name === '404') return
      else {
        router.removeRoute(item.name)
      }
    })
    routeArr.forEach(item => {
      stata.value.routerList.push(router.addRoute("main", item))
    })
    console.log(router.getRoutes())
  }
  function clean() {
    stata.value.routerList.forEach(item => {
      console.log(item)
      if (item) item()
      stata.value = initState()
      localStorage.removeItem("store")
    })
  }


  return {
    stata,
    selectMenu,
    updataTags,
    updataMenuList,
    addMenu,
    clean,
  }
})
