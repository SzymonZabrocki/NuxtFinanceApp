// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },

  buildModules: ['@nuxtjs/pwa'], // Dodaj moduł PWA

  pwa: {
    icon: {
      source: 'static/icon.png', // Twoja ikona PWA
    },
    manifest: {
      name: 'Moja Aplikacja Finansowa',
      short_name: 'Aplikacja Finansowa',
      description: 'Opis mojej aplikacji PWA',
      background_color: '#ffffff',
      theme_color: '#1E88E5',
    },
  },
})


