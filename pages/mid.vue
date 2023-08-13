<script setup lang="ts">
definePageMeta({
  middleware: ['amid', 'bmid'],
  // middleware(to, from) {
  //   console.log('匿名中间件，具体页面执行，不可复用')
  // }
})
</script>

<template>
  <div>
    mid page
  </div>
</template>

<style scoped>

</style>
