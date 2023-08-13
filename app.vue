<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s}-king的技术空间` : 'king的技术空间'
  },
})
</script>

<template>
  <div>
    <NDialogProvider>
      <NMessageProvider>
        <!-- 添加NuxtLayout -->
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NMessageProvider>
    </NDialogProvider>
  </div>
</template>
