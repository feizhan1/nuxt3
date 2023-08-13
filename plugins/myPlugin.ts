import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp)
  // 使用生命周期
  nuxtApp.hook('app:error', (err) => {
    // 错误上报
  })
  // 访问vue实例
  nuxtApp.vueApp.config.globalProperties.$xx = () => {

  }
  // provider全局注入熟悉和方法
  nuxtApp.provide('format', (date?: Date, template?: string) => {
    return dayjs(date).format(template)
  })
})
