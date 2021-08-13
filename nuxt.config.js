import webpack from 'webpack'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/3ArtsConcept/'
  }
} : {};

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // ...routerBase,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '3artsconcept',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: '-8RU8uitYrDu2OLCcJ1wW4_Yx35iy6rD4A0npZyUW_4',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '3Arts Concept is founded with the vision to pioneer a facelift towards collective memories! Valuable memories belonging to every individual which carries a significant story behind. Our aim is to provide, achieving acceptance and to display collective showcases in your premises at affordable prices',
      },
      {
        name: 'keywords',
        content: '3Arts, 3Arts Concept, 3D Printing, 3D Portrait, 3D figuring',
      },
      {
        name: 'copyright',
        content:
          '3Arts Concept is a registered trademakr of 3Arts Concept Private Limited',
      },
      {
        name: 'author',
        content: 'Ralee Websolutions',
      },
      {
        property: 'og:url',
        content: 'https://www.3artsconcept.com',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Facelift towards collective memories',
      },
      {
        property: 'og:description',
        content:
          'Photographs are now passé towards collective memories. With enhanced 3D technology,a new era of illustration is born!',
      },
      {
        property: 'og:image',
        content: 'https://www.3artsconcept.com/img/coverPhoto.jpg',
      },
      {
        property: 'fb:app_id',
        content: '137106553389689',
      },
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmrWpiJ-8yXxYViBi1-B0h8TElRqUabrU',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.1/css/all.css',
        integrity:
          'sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp',
        crossorigin: 'anonymous',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/yfz5mqb.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
    ],
  },
}
