<script setup lang="ts">
import type { NuxtError } from '#app'

const route = useRoute()
useHead({
  title: route.params.id as string,
})

// 定义中间件守卫路由
// definePageMeta({
//   middleware: 'auth'
// })

const value = useState('comment', () => '')
const store = useUser()
const { isLogin } = storeToRefs(store)
const router = useRouter()
// 获取id

// const { title, content } = await $fetch('/api/detail/' + route.params.id);

function fetchPost() {
  return $fetch(`/api/detail/${route.params.id}`, {
    headers: store.isLogin ? { token: 'atoken' } : {},
    onResponseError({ response }) {
      if (response.status === 401)
        router.push(`/login?callback=${route.path}`)
    },
  })
}
const { data, pending, error } = await useAsyncData('fetchDetail', fetchPost)
const errorMsg = computed(() => error.value as NuxtError)
// watchEffect(() => {
//   if(unref(error)) {
//     showError(errorMsg.value);
//   }
// })

function onSubmit() {
  if (isLogin.value) {
    // 提交留言...
    value.value = ''
  }
  else {
    // 要求登录
    router.push(`/login?callback=${route.path}`)
  }
}
</script>

<template>
  <Head>
    <Title>{{ data?.title }}</Title>
    <Meta name="description" :content="data?.title" />
  </Head>
  <div v-if="pending">
    loading...
  </div>
  <div v-else-if="error">
    {{ errorMsg }}
  </div>
  <div v-else>
    <h1>{{ data?.title }}</h1>
    <div v-html="data?.content" />
    <!-- 评论区 -->
    <div class="py-2">
      <NInput
        v-model:value="value"
        type="textarea"
        placeholder="输入评论"
      />
      <NButton @click="onSubmit">
        发送
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
