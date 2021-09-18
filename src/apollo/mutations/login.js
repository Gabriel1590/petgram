import { gql } from 'apollo-boost'

export const login = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`
