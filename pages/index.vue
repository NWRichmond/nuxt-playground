<template>
  <div class="container">
    <div>
      <h1 class="title">
        Stuff For Sale
      </h1>
      <ul>
        <li v-for="product in products" :key="product.handle">
          <nuxt-link :to="`/products/${product.handle}`">{{
            product.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      id: process.env.NACELLE_SPACE_ID,
      token: process.env.NACELLE_GRAPHQL_TOKEN
    }
  },
  computed: {
    ...mapState('nacelle', ['products'])
  }
}
</script>

<style lang="scss">
ul {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  max-width: 80vw;
  margin-top: 4em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  margin: 0 auto;
  padding-left: 0;
}

li {
  list-style: none;
  padding: 0.5em 0;
  min-width: 15em;
  a {
    text-decoration: none;
    color: cornflowerblue;
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
