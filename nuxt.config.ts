// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/style/Imports.scss',
    '~/assets/tailwind/main.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})