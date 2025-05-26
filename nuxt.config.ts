// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // imports: {
  //   autoImport: false
  // },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css']
})