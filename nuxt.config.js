import colors from 'vuetify/es5/util/colors'

let safe;
export default {

  // Config loading
  loading:  '@/components/loading.vue',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Forent',
    title: 'Forent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=1,user-scalable=no'},
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"apple-touch-icon", sizes:"180x180", href: "/apple-touch-icon.png"},
      { rel:"icon", type: "image/png", sizes:"32x32", href: "/favicon-32x32.png"},
      { rel:"icon", type: "image/png", sizes:"16x16", href: "/favicon-16x16.png"},
      { rel:"manifest", href: "/site.webmanifest"},
      { rel:"mask-icon", href: "/safari-pinned-tab.svg", color:"#5bbad5"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vuelidate'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/router'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
        ['nuxt-mail', {
          message: {
            to: 'artcom888@mail.ru'
          },
          smtp: {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "0b2e68db5a49bb",
              pass: "8e5ea0d5be2657"
            }
          },
        }]
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // Config for mobile server( delete before build)
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost
  // },   // other configs


}
