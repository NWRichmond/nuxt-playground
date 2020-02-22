import { GET_PRODUCTS } from '../queries'

export const state = () => ({
  products: []
})

export const mutations = {
  getProducts(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetchProducts({ commit }) {
    const productsQuery = await this.$axios.$post(
      'https://hailfrequency.com/v2/graphql',
      { query: GET_PRODUCTS },
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
    commit('getProducts', productsQuery.data.getProducts.items)
  }
}
