import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($data: LoginUserInput!) {
    login (data: $data) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

const SET_CURRENT_USER = gql`
  mutation setCurrentUser($user: User) {
    setCurrentUser (user: $user) @client
  }
`

export { LOGIN, SET_CURRENT_USER }