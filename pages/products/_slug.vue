<template>
  <div class="container">
    <h1>{{ item.title }}</h1>
    <img :src="item.featuredMedia.src" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData({ params, payload }) {
    if (payload) {
      return {
        item: payload
      }
    }
  },
  computed: {
    ...mapState('nacelle', ['products']),
    item() {
      // Load the item from global store if no payload from Nuxt Generate
      return this.products.filter(
        (product) => product.handle === this.$route.params.slug
      )[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70vw;
  height: 80vh;
  border: 1px solid black;
  margin: 2em auto;
  margin-bottom: 4em;
  padding: 1em 0;
}
img {
  max-width: 30em;
}
</style>
