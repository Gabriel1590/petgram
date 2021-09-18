import { gql } from 'apollo-boost'

export const getFavsQuery = gql`
    query getFavs {
    favs {
        id
        categoryId
        src
        likes
        userId
    }
    }
`
