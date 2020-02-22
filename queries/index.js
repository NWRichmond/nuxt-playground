export const GET_PRODUCTS = `
  query {
    getProducts {
      items {
        handle
        title
        description
        featuredMedia {
          src
        }
      }
    }
  }
`
