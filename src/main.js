import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp(App)
app.use(apolloProvider)
app.mount('#app')
