export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`全局中间件，影响页面：${to.path}`)
})
