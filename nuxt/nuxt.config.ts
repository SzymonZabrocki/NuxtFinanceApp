// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

  buildModules: ['@nuxtjs/pwa'], // moduł PWA

  css: [
    'bootstrap/dist/css/bootstrap.css', // Bootstrap CSS
    // '~/assets/styles.css', // własne style CSS
  ],

  pwa: {
    icon: {
      source: 'static/icon.png',
    },
    manifest: {
      name: 'Moja Aplikacja Finansowa',
      short_name: 'Aplikacja Finansowa',
      description: 'Opis mojej aplikacji PWA',
      background_color: '#ffffff',
      theme_color: '#1E88E5',
    },
  },

  routes: [
    // Inne trasy
    {
      path: '/editExpense/:id', // Zdefiniuj parametr id
      component: '~/pages/EditExpense.vue',
    },
  ],
})


