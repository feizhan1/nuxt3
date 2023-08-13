<script setup lang="ts">
// 获取组件实例
const ins = getCurrentInstance()
onMounted(() => {
  ins?.proxy?.$alert('mounted!')
})
</script>

<template>
  <div />
</template>

<style scoped>

</style>
