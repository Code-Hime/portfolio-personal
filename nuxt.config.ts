// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-05-15',

  // Modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  // CSS
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      title: 'Lauren Doss - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Lauren Doss - Full Stack Developer & Designer Portfolio' },
        { name: 'keywords', content: 'developer, designer, portfolio, vue, nuxt, typescript' },
        { name: 'author', content: 'Lauren Doss' },
        { property: 'og:title', content: 'Lauren Doss - Portfolio' },
        { property: 'og:description', content: 'Full Stack Developer & Designer Portfolio' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Vite configuration
  vite: {
    optimizeDeps: {
      include: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'vue-writer',
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      appName: 'Lauren Doss Portfolio',
      appVersion: '1.0.0',
    },
  },
})
