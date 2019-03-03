import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'

import prisma from './prisma'
import resolvers from './resolvers'

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


const apolloServer = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers,
  context: request => ({ request, prisma })
})

// apolloServer.applyMiddleware({ app, path: '/graphql' })


app.get('/graphql/test', (req, res) => {
  res.send(200, 'API RESPONDING')
})

export { app as default }