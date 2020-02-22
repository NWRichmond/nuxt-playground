import axios from 'axios'
import dotenv from 'dotenv'
import { GET_PRODUCTS } from './queries'

dotenv.config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    async routes() {
      async function nacelle({ query, variables }) {
        try {
          const response = await axios.post(
            'https://hailfrequency.com/v2/graphql',
            { query, variables },
            {
              headers: {
                'Content-Type': 'application/json',
                'x-nacelle-space-token': process.env.NACELLE_GRAPHQL_TOKEN,
                'x-nacelle-space-id': process.env.NACELLE_SPACE_ID
              },
              timeout: 60000,
              maxContentLength: 52428890
            }
          )
          return response.data
        } catch (error) {
          throw new Error(error)
        }
      }
      const productsQuery = await nacelle({ query: GET_PRODUCTS })
      const products = productsQuery.data.getProducts.items
      return products.map((product) => {
        return { route: `/products/${product.handle}`, payload: product }
      })
    }
  }
}
