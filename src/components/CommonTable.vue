<script setup>
import { computed, effect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAllDataStore } from '@/stores'
const store = useAllDataStore()
const tags = computed(() => store.stata.tags)

const router = useRouter()
const route = useRoute()
const handleMenu = (tag, index) => {
  router.push(tag.name)
  store.selectMenu(tag)
  console.log(index,store.stata.tags.length)
}
const handleClose = (tag, index) => {
  store.updataTags(tag)
  console.log(index,store.stata.tags.length)
  if (tag.name !== route.name) return;
  // 如果关闭的是最后一个标签
  if (index === store.stata.tags.length) {
    store.selectMenu(tags.value[index - 1]);  // 选择前一个标签
    router.push(tags.value[index - 1].name);  // 跳转到前一个标签
  } else {
    // 如果关闭的标签不是最后一个标签
    store.selectMenu(tags.value[index]);  // 选择当前索引位置的标签
    router.push(tags.value[index].name);  // 跳转到当前标签
  }

}
</script>
<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
      @click="handleMenu(tag,index)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<style scoped lang="less">
.tags {
  margin: 20px 0 0 20px;
}
.el-tag {
  margin-right: 10px;
}
</style>
