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

const GET_ME = gql`
  query {
    me {
      id
      name
      email
    }
  }
`

export { GET_CURRENT_USER, GET_ME }