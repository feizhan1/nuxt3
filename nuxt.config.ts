// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // 只能用于服务端的key
    apiSecret: '',
    // 用于客户端
    public: {
      apiBase: '/api',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'king的技术博客',
      meta: [
        { name: 'description', content: '专注前端技术分享' },
        { name: 'keywords', content: 'nuxt,vue,ts.frontend' },
        { name: 'charset', content: 'utf-8' },
      ],
      link: [],
      style: [],
      script: [],
    },
  },
  // 默认vite，配置webpack构建
  // builder: 'webpack', // 需要安装依赖， @nuxt/webpack-builder
  // webpack: {},
  // ssr: false, // 默认为true，服务端渲染，false，客户端渲染spa
  // nitro: {
  //   preset: 'vercel'
  // },
  // postcss: {},
  imports: {
    dirs: [
      'store/**',
      // 扫描顶层目录中模块
      'composables',
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      // 'composables/*/index.{ts,js,mjs,mts}',
      // 扫描给定目录中所有模块
      // 'composables/**'
    ],
  },
  css: [
    'assets/global.css',
  ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "~/assets/_variables.scss";',
  //       }
  //     }
  //   }
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    // 引入 Pinia
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    // [
    //   "@nuxtjs/color-mode",
    //   {
    //     preference: 'dark'
    //   }
    // ],
  ],
  // 独立配置项
  colorMode: {
    preference: 'dark',
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: false,
    shortcuts: [],
    rules: [],
    safelist: [],
  },
  devtools: { enabled: true },
})
