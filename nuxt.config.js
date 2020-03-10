const pkg = require('./package')

const meta = {
  title: 'UPDATE'
}

const iconImages = process.env.DEPLOY_ENV === 'GH_PAGES'
? '/kozimon.com/images/icons/'
: '/images/icons/'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/kozimon.com/'
        }
      }
    : {}

module.exports = {
  ...routerBase,

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} - kozimon` : 'kozimon'
    },
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'kozimon',
        template: chunk => {
          return chunk ? `${chunk} - kozimon` : 'kozimon'
        }
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'kozimon'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'kozimon'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: ''
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary' // or summarylargeimage, photo, gallery, app
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      // icons
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16x16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-96x96.png'
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-icon-180x180.png'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vue-tabs-component.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    dir: 'docs',
    fallback: true
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: '',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: [],
    routes: []
  },

  manifest: {
    name: 'kozimon.com',
    lang: 'ja'
  }
}
