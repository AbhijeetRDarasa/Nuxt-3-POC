// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : ['@nuxtjs/tailwindcss','nuxt-swiper'],
  app: {
    head :{
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'Everything about nuxt 3'}
      ],
      link: [
        {rel : 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey : process.env.CURRENCY_TOKEN
  },
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
})
