import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import defaultState from './defaultState'
import resolvers from './resolvers'

Vue.use(VueApollo)

const cache = new InMemoryCache()
cache.writeData({
  data: defaultState
})

const httpLink = ApolloLink.from([
  new HttpLink({
    uri: 'http://localhost:8081/graphql'
  })
])

const link = ApolloLink.from([
  httpLink
])

const apolloClient = new ApolloClient({
  resolvers,
  link,
  cache
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export { apolloProvider as default }