export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('nacelle/fetchProducts')
  }
}
