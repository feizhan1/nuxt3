<script setup lang="ts">
function throwError() {
  throw new Error('来自 ThrowError 组件的异常')
}
</script>

<template>
  <div>
    <NButton @click="throwError">
      你点我试试
    </NButton>
  </div>
</template>
