require('dotenv').config();

/*
** 開発環境とGitHub Pagesでベースとなるパスを変更する.
*/
const routerBase = process.env.APP_ENV === 'prd' ? {
  router: {
    base: '/portfolio/'
  }
} : {};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kazukichi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My portfolio site.' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Big+Shoulders+Text&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  ...routerBase,

  modules: [
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
  ],

  env: {
    APP_ENV: process.env.APP_ENV,
  },

};
