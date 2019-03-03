import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'

import prisma from './prisma'
import resolvers from './resolvers'

const app = express()
// app.use(cors())

const apolloServer = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers,
  context: request => ({ request, prisma })
})

apolloServer.applyMiddleware({ app, path: '/graphql' })

export { app as default }