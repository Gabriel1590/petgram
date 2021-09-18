import { gql } from 'apollo-boost'

export const signUp = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`
