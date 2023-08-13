export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = () => {
    console.log('vue error handler')
  }

  nuxt.hook('vue:error', (err) => {
    console.log('vue:error', err)
  })
  nuxt.hook('app:error', () => {
    console.log('app:error')
  })
})
