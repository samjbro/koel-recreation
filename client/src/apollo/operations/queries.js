import gql from 'graphql-tag'

const GET_CURRENT_USER = gql`
  query {
    currentUser @client {
      id
      name
      email
    }
  }
`

export { GET_CURRENT_USER }