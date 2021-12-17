export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode:"universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cloud_website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/eslint-module', {
      fix: false
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://http.nuxtjs.org
    [
      "nuxt-i18n",
      {
        strategy: "prefix_except_default",
        defaultLocale: "en",
        lazy: true,
        langDir: "locales/",
        locales: [
          {
            code: "en",
            name: "English",
            file: "en.json"
          },
          {
            code: "it",
            name: "Italian",
            file: "it.json"
          }
        ]
      },
    ]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  http: {
    // See https://http.nuxtjs.org/api/#options
  },


}
