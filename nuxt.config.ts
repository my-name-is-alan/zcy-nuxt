// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-lodash',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    rootId: "__ZCY__",
    head: {
      title: "HI,钟晨瑶",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    }
  },
  build: {
    transpile: [/echarts/, 'vue-echarts', 'resize-detector', 'tslib', '@popperjs/core'],
  },
  devtools: { enabled: true },
  css: ["./assets/base.css"],
})
