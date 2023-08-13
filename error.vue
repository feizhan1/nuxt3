<script setup lang="ts">
const props = defineProps({
  error: Object,
})
console.log(props.error)
const router = useRouter()
const retry = () => window.location.href = props.error!.url
const handlerError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error">
    <h1 class="text-2xl text-center mb-2">
      出了点错-{{ props.error?.statusCode }}
    </h1>
    <NEmpty description="你什么也找不到">
      <template #extra>
        <n-button @click="retry">
          重试
        </n-button>
        <n-button @click="handlerError">
          回到首页
        </n-button>
      </template>
    </NEmpty>
  </div>
</template>
