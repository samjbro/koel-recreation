import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

import defaultState from './defaultState'
import resolvers from './resolvers'

Vue.use(VueApollo)

const cache = new InMemoryCache()

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      if (message === 'jwt expired') {
        localStorage.removeItem('token')
        apolloClient.resetStore()
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    })
  if (networkError)
    console.log(`[Network error]: ${networkError}`)
})

const httpLink = ApolloLink.from([
  new HttpLink({
    uri: '/graphql'
  })
])

const link = ApolloLink.from([
  authLink,
  errorLink,
  httpLink
])

const apolloClient = new ApolloClient({
  resolvers,
  link,
  cache
})

cache.writeData({
  data: defaultState
})
apolloClient.onResetStore(() => {
  cache.writeData({
      data: defaultState
  })
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export { apolloProvider as default }